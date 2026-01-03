import { S3Client, GetObjectCommand, S3ClientConfig } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3_conf: S3ClientConfig = {
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT || '',
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || ''
  }
}

const r2 = new S3Client(s3_conf);

/**
 * Get a signed URL for a file in the R2 bucket
 *
 * @param r2_file_path - The path to the file in the R2 bucket
 * @returns The signed URL for the file
 */
export const getPackageFile = async (r2_file_path: string) : Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET || '',
    Key: r2_file_path
  });
  const url = await getSignedUrl(r2, command, { expiresIn: 60 * 60 * 24 }); // 24 hours
  return url;
}