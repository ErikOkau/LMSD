import { Issuer, type Client } from 'openid-client';
import SteamApi, { type IGetNewsForAppParams, type IGetNewsForAppResponse } from '@varandas/steam'
import "dotenv/config";

const apiKey: string | undefined = process.env.Steam_API_Key;

const steamOpenIDEndpoint = 'https://steamcommunity.com/openid';


const steamApi = new SteamApi(apiKey as string)

// Now you can use the API key in your code
console.log(`API Key: ${apiKey}`);



// Get the news service from the client
const newsService = steamApi.getNewsService()

// Get News For App
const news = await newsService.getNewsForApp({
  appid: 440,
  count: 3,
  maxlength: 300,
})

// Get the user service
const userService = steamApi.getUserService()

// Get Player Summaries
const users = await userService.getPlayerSummaries({
  steamids: ['76561198000000000', '76561198000000001'],
})

// Get IFriend List
const friends = await userService.getFriendList({
  steamid: '76561198000000000',
  relationship: 'all',
})

// Get the user stats service
const userStatsService = steamApi.getUserStatsService()

// Get Player Achievements
const achievements = await userStatsService.getPlayerAchievements({
  steamid: '76561198000000000',
  appid: 440,
})

// Get Global Achievements Percentages For App
const achievement = await userStatsService.getGlobalAchievementPercentagesForApp({
  gameid: 440,
})

// Get User Stats For Game
const gameStats = await userStatsService.getUserStatsForGame({
  steamid: '76561198000000000',
  appid: 440,
})

// Get the player service
const playerService = steamApi.getPlayerService()

// Get Owned Games
const ownedGames = await playerService.getOwnedGames({
  steamid: '76561198000000000',
  includeAppInfo: true,
  includePlayedFreeGames: true,
})

// Get Recently Played Games
const games = await playerService.getRecentlyPlayedGames({
  steamid: '76561198000000000',
  count: 3,
})