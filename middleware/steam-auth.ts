import { type Request, type Response, type NextFunction } from 'express';
import { type User } from '@/ts/interfaces';
import SteamUser  from 'steam-user'; 

interface SteamUserRequest extends Request {
    user: User | SteamUser
}

export const steamAuthMiddleware = (req: SteamUserRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user instanceof SteamUser) {
        next();
    } else {
        res.redirect('/auth/steam');
    }
};
