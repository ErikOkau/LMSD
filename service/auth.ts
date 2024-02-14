import * as passport from 'passport';
import { Strategy } from 'passport-steam';
import SteamApi, { type IGetNewsForAppParams, type IGetNewsForAppResponse } from '@varandas/steam'
import "dotenv/config";

export const SteamAPIKey: string = process.env.Steam_API_Key || "";
export const steamApi = new SteamApi(SteamAPIKey as string)

// Now you can use the API key in your code
console.log(`API Key: ${SteamAPIKey}`);

passport.use(new Strategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: SteamAPIKey
}, function(identifier: any, profile: any, done: any) {
    process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
    });
}));