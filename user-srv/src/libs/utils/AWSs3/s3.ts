import { S3Client} from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
dotenv.config()
export const bucketName = process.env.BUCKET_NAME as string
export const bucketRegione = process.env.BUCKET_REGIONE as string
export const bucketAccessKey = process.env.BUCKET_ACCESS_KEY as string
export const bucketSecretAccessKey = process.env.BUCET_SECRETACCESKEY as string
export const s3  = new S3Client({
    credentials:{
        accessKeyId:bucketAccessKey,
        secretAccessKey:bucketSecretAccessKey
    },
    region:bucketRegione
})
