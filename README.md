# WPB Dummy Pack Center

A TypeScript Express API server for managing and serving WordPress theme packages with Cloudflare R2 integration.

## Features

- 🎨 Theme and package management
- 🔐 Purchase code authentication
- ☁️ Cloudflare R2 (S3-compatible) file storage integration
- 🔒 Security middleware (Helmet, CORS)
- 📝 Request logging (Morgan)
- ✅ Input validation (Joi)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Cloudflare R2 account with bucket and credentials

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wpb-dummy-pack-center
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (use `.env-exam` as a template):
```bash
cp .env-exam .env
```

4. Configure your environment variables in `.env`:
```env
PORT=3000
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_BUCKET=your_bucket_name
R2_ENDPOINT=https://your_account_id.r2.cloudflarestorage.com
```

## Development

### Run in development mode

```bash
npm run dev
```

This will start the server with hot-reload using `ts-node-dev`. The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

### Build for production

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

### Run production build

```bash
npm start
```

## Project Structure

```
src/
├── app.ts                 # Express app configuration
├── server.ts              # Server entry point
├── controllers/           # Request handlers
│   └── package.controller.ts
├── services/             # Business logic
│   └── package.service.ts
├── routes/               # API routes
│   ├── index.ts
│   └── package.routes.ts
├── middlewares/          # Express middlewares
│   └── auth.middleware.ts
├── data/                 # Static data
│   └── themes.ts
└── types/                # TypeScript type definitions
    └── themes.ts
```

## API Endpoints

### Get Theme Information

Get information about a specific theme.

**Endpoint:** `GET /api/:theme_slug`

**Headers:**
- `purchase_code` (required): Purchase code for authentication

**Response:**
```json
{
  "name": "Theme Name",
  "packages": [...]
}
```

**Example:**
```bash
curl -H "purchase_code: your-purchase-code" \
  http://localhost:3000/api/theme-slug
```

### Get Package Download URL

Get a signed download URL for a specific package.

**Endpoint:** `GET /api/:theme_slug/:package_id`

**Headers:**
- `purchase_code` (required): Purchase code for authentication

**Response:**
```json
{
  "download_url": "https://signed-url-to-file"
}
```

**Example:**
```bash
curl -H "purchase_code: your-purchase-code" \
  http://localhost:3000/api/theme-slug/package-id
```

## Authentication

The API uses a simple purchase code authentication mechanism. All requests require a `purchase_code` header. The middleware validates this header and returns a 401 error if missing.

## Cloudflare R2 Configuration

This project uses Cloudflare R2 for file storage. The R2 service is configured to:
- Generate signed URLs with 24-hour expiration
- Use S3-compatible API via AWS SDK

Make sure your R2 credentials are properly configured in the `.env` file.

## Technologies Used

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **AWS SDK v3** - R2/S3 client
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Joi** - Input validation
- **bcrypt** - Password hashing (if needed)
- **jsonwebtoken** - JWT tokens (if needed)
- **dotenv** - Environment variables

## Development Notes

- The server uses `ts-node-dev` for development with hot-reload
- All routes are prefixed with `/api`
- Authentication middleware is applied globally to all routes
- Error handling middleware is commented out (can be enabled if needed)

## Troubleshooting

### Port already in use
Change the `PORT` value in your `.env` file or kill the process using the port.

### R2 connection errors
- Verify your R2 credentials in `.env`
- Check that your R2 bucket exists and is accessible
- Ensure the endpoint URL is correct

### TypeScript compilation errors
Run `npm run build` to see detailed TypeScript errors.

## License

ISC

