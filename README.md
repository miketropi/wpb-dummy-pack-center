# WPB Dummy Pack Center

A TypeScript Express API server for managing and serving WordPress theme packages with Cloudflare R2 integration. This service provides authenticated access to theme packages and generates time-limited signed URLs for secure file downloads.

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ 
- **npm** or **yarn**
- **Cloudflare R2** account with bucket and API credentials

### Installation

```bash
# Clone and install
git clone <repository-url>
cd wpb-dummy-pack-center
npm install

# Configure environment
cp .env-exam .env  # If template exists, or create manually
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_BUCKET=your_bucket_name
R2_ENDPOINT=https://your_account_id.r2.cloudflarestorage.com
```

### Development

```bash
# Development with hot-reload
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

The server runs on `http://localhost:3000` (or your configured `PORT`).

## 📁 Project Structure

```
src/
├── app.ts                    # Express app configuration & middleware setup
├── server.ts                 # Server entry point
├── controllers/              # Request handlers
│   └── package.controller.ts # Package & theme controllers
├── services/                 # Business logic layer
│   └── package.service.ts   # R2 file operations & signed URL generation
├── routes/                   # API route definitions
│   ├── index.ts             # Main router (mounts sub-routes)
│   └── package.routes.ts    # Package-specific routes
├── middlewares/             # Express middlewares
│   └── auth.middleware.ts   # Authentication & license validation
├── data/                    # Static data
│   └── themes.ts            # Theme & package definitions
├── types/                   # TypeScript type definitions
│   └── themes.ts            # Theme & Package interfaces
└── util/                    # Utility functions
    └── libs.ts              # Helper functions (payload decoding, etc.)
```

## 🔌 API Endpoints

All endpoints are prefixed with `/api/packages` and require authentication via the `xxx-meta` header.

### Get Theme Information

Retrieve theme details and available packages.

**Endpoint:** `GET /api/packages/:theme_slug`

**Headers:**
- `xxx-meta` (required): Base64-encoded, reversed JSON payload containing license information

**Response:**
```json
{
  "name": "Woozio - Modern WooCommerce Theme",
  "description": "A premium WordPress theme...",
  "packages": [
    {
      "ID": "064e94a5-a9ea-4d49-950e-993a19e48bf5",
      "name": "Dummy Package Woozio Staging",
      "description": "...",
      "image": "https://...",
      "preview_url": "https://...",
      "tags": ["woocommerce", "staging"],
      "size": "207.4MB",
      "createdAt": "2024-02-10T09:15:00.000Z",
      "updatedAt": "2024-03-18T16:45:00.000Z",
      "required": [...],
      "required_plugins": [...],
      "r2_file": "Dummy-Pack-Woozio-Mini.zip"
    }
  ]
}
```

**Example:**
```bash
curl -H "xxx-meta: <base64-encoded-payload>" \
  http://localhost:3000/api/packages/woozio
```

### Get Package Download URL

Generate a signed download URL for a specific package file.

**Endpoint:** `GET /api/packages/:theme_slug/:package_id`

**Headers:**
- `xxx-meta` (required): Base64-encoded, reversed JSON payload containing license information

**Response:**
```json
{
  "signedUrl": "https://signed-r2-url...",
  "size": 217456640,
  "unit": "bytes",
  "mime": "application/zip",
  "lastModified": "2024-03-18T16:45:00.000Z",
  "etag": "\"abc123...\""
}
```

**Example:**
```bash
curl -H "xxx-meta: <base64-encoded-payload>" \
  http://localhost:3000/api/packages/woozio/064e94a5-a9ea-4d49-950e-993a19e48bf5
```

## 🔐 Authentication

The API uses a custom authentication mechanism via the `xxx-meta` header. The header contains a base64-encoded, reversed JSON payload.

### Payload Format

The decoded payload should contain:
```json
{
  "domain": "http://example.com",
  "ip": "192.168.1.1",
  "admin_email": "admin@example.com",
  "license_key": "your-license-key",
  "wordpress_version": "6.9",
  "php_version": "8.4.10",
  "theme_slug": "woozio",
  "theme_version": "1.0"
}
```

### Authentication Flow

1. Client encodes the payload: Base64 → Reverse string → URL encode
2. Server decodes: URL decode → Reverse string → Parse JSON
3. Middleware validates `license_key` field
4. Missing or invalid `license_key` returns `401 Unauthorized`

### Implementation Details

The authentication middleware (`src/middlewares/auth.middleware.ts`) uses `decodePayload()` from `src/util/libs.ts`:

```typescript
// Encoding process (client-side):
const payload = JSON.stringify({ license_key: "...", ... });
const reversed = payload.split('').reverse().join('');
const encoded = btoa(unescape(encodeURIComponent(reversed)));

// Decoding process (server-side):
const decoded = decodePayload(encoded); // Returns parsed object or null
```

## 🏗️ Architecture

### Request Flow

```
Client Request
    ↓
Express App (app.ts)
    ↓
Auth Middleware (validates xxx-meta header)
    ↓
Route Handler (package.routes.ts)
    ↓
Controller (package.controller.ts)
    ↓
Service (package.service.ts) → R2/S3 Client
    ↓
Response (JSON)
```

### Key Components

- **Controllers**: Handle HTTP requests, validate params, call services
- **Services**: Business logic, R2 operations, signed URL generation
- **Middlewares**: Global authentication applied to all routes
- **Data Layer**: Static theme/package definitions (can be migrated to DB)

### R2 Integration

The service uses AWS SDK v3's S3-compatible client for Cloudflare R2:

- **Signed URLs**: 1-hour expiration (configurable in `package.service.ts`)
- **Metadata**: Fetches file metadata (size, mime type, etag) before URL generation
- **Region**: Set to `'auto'` for R2 compatibility

## 🛠️ Development

### Adding a New Theme

1. Add theme definition to `src/data/themes.ts`:
```typescript
export const themes: Record<string, Theme> = {
  your-theme: {
    name: "Your Theme Name",
    description: "...",
    packages: [...]
  }
};
```

2. Ensure the `r2_file` path in packages matches your R2 bucket structure

### Modifying Authentication

Edit `src/middlewares/auth.middleware.ts` to:
- Add additional payload validation
- Implement license key verification against a database
- Add rate limiting or IP restrictions

### Extending API

1. Add route in `src/routes/package.routes.ts`
2. Create controller method in `src/controllers/package.controller.ts`
3. Add service logic in `src/services/package.service.ts` if needed

## 📦 Dependencies

### Core
- **express** ^5.2.1 - Web framework
- **typescript** ^5.9.3 - Type safety
- **@aws-sdk/client-s3** ^3.962.0 - R2/S3 client
- **@aws-sdk/s3-request-presigner** ^3.962.0 - Signed URL generation

### Security & Middleware
- **helmet** ^8.1.0 - Security headers
- **cors** ^2.8.5 - CORS support
- **morgan** ^1.10.1 - HTTP request logging

### Development
- **ts-node-dev** ^2.0.0 - Hot-reload development server
- **dotenv** ^17.2.3 - Environment variable management

### Available (not currently used)
- **joi** ^18.0.2 - Input validation
- **bcrypt** ^6.0.0 - Password hashing
- **jsonwebtoken** ^9.0.3 - JWT tokens

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env or kill existing process
lsof -ti:3000 | xargs kill -9
```

### R2 Connection Errors
- Verify credentials in `.env`
- Check bucket exists and is accessible
- Ensure endpoint URL format: `https://<account-id>.r2.cloudflarestorage.com`
- Verify R2 API tokens have correct permissions

### TypeScript Compilation Errors
```bash
npm run build  # See detailed errors
```

### Authentication Failures
- Verify `xxx-meta` header encoding matches expected format
- Check `license_key` exists in decoded payload
- Review `src/util/libs.ts` decode logic

## 📝 Notes

- All routes are protected by global `authMiddleware`
- Signed URLs expire after 1 hour (configurable in `package.service.ts`)
- Theme data is currently static; consider migrating to a database for production
- Error handling middleware is available but commented out in `app.ts`

## 📄 License

ISC

