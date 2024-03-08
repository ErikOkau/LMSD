import { Issuer, type Client } from 'openid-client';
import SteamApi, { type IGetNewsForAppParams, type IGetNewsForAppResponse } from '@varandas/steam'
import "dotenv/config";

export const apiKey: string | undefined = process.env.Steam_API_Key || "";

export const steamOpenIDEndpoint = 'https://steamcommunity.com/openid';


export const steamApi = new SteamApi(apiKey as string)

// Now you can use the API key in your code
console.log(`API Key: ${apiKey}`);

// fetching SteamLVL: http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=KEYHERE1&steamid=STEAMIDHERE

// Get the news service from the client
export const newsService = steamApi.getNewsService()

// Get News For App
export const news = await newsService.getNewsForApp({
  appid: 440,
  count: 3,
  maxlength: 300,
})

// Get the user service
export const userService = steamApi.getUserService()

// Get Player Summaries
export const users = await userService.getPlayerSummaries({
  steamids: ['76561198000000000', '76561198000000001'],
})

// Get IFriend List
export const friends = await userService.getFriendList({
  steamid: '76561198000000000',
  relationship: 'all',
})

// Get the user stats service
export const userStatsService = steamApi.getUserStatsService()

// Get Player Achievements
export const achievements = await userStatsService.getPlayerAchievements({
  steamid: '76561198000000000',
  appid: 440,
})

// Get Global Achievements Percentages For App
export const achievement = await userStatsService.getGlobalAchievementPercentagesForApp({
  gameid: 440,
})

// Get User Stats For Game
export const gameStats = await userStatsService.getUserStatsForGame({
  steamid: '76561198000000000',
  appid: 440,
})

// Get the player service
export const playerService = steamApi.getPlayerService()

// Get Owned Games
export const ownedGames = await playerService.getOwnedGames({
  steamid: '76561198000000000',
  includeAppInfo: true,
  includePlayedFreeGames: true,
})

// Get Recently Played Games
export const games = await playerService.getRecentlyPlayedGames({
  steamid: '76561198000000000',
  count: 3,
})
