export interface Role {
    ADMIN: string,
    USER: string
}
  
export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    role: Role
}

export interface SteamUser {
    id: number,
    steamId: string,
    user: User
}
  
