import express from "express";
import steam from "steam-login";
import expressSession from "express-session";
import SteamApi, { type IGetNewsForAppParams, type IGetNewsForAppResponse } from '@varandas/steam'
import "dotenv/config";

export const SteamAPIKey: string = process.env.Steam_API_Key || "";
export const steamApi = new SteamApi(SteamAPIKey as string)

// Now you can use the API key in your code
console.log(`API Key: ${SteamAPIKey}`);

const app = express()

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "a secret"
}))

app.use(steam.middleware({
    realm: "http://localhost:3000/",
    verify: "http://localhost:3000/verify",
    apiKey: SteamAPIKey
}))

export default {
    path: '/steamAuthenticator/',
    handler: app
}