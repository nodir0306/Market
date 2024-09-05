import { config } from "dotenv";
config()

export const imageConfig = {
    currentImagePath: process.env.APP_PROTOCOL + process.env.HOST+":"+process.env.PORT+"/"+"api"+"/"+"v1"+"/"+"images"+"/"
}