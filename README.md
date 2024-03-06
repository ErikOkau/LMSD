# Gaming Codex how to use
This project is using Steams API to fetch logged in users data for you and others to search up a username and see their public data. 
There is also leaderboards over for example steam user lvl and number of achivements. Feel free to look at the code behind the site to see how certain things work.
I'm using Express to host Steam Auth, while Nuxt and TypeScript for the other parts of the page.

# To get started for personal testing of the code behind
Clone the project and open it.
1. Npm install, and type npm run dev to launch.
2. Open a new terminal and type "cd api", and after that "tsx app.ts" to run Steam Auth express server.
3. Open a new terminal and type "npx prisma studio" to open database view. (You must change the database url and database type in schema.prisma in the prisma folder according to your own database)



# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
