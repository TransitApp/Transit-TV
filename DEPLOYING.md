# Deploying Transit TV

Transit TV is a standard Node.js app and can be deployed on any hosting provider that supports it. Below is an example using [Railway](https://railway.com) for its simplicity, but services like Render, Fly.io, Heroku, or any VPS will work just as well.

## Prerequisites

- A [Transit API key](https://transitapp.com/apis) (paid plan recommended for 24/7 use)
- A [Railway account](https://railway.com) (free to sign up)
- A [GitHub account](https://github.com)

## Steps

1. **Fork the repository**. Go to the [Transit-TV GitHub repo](https://github.com/TransitApp/Transit-TV) and click **Fork** to create a copy under your own GitHub account.

2. **Log in to Railway** and click **New Project** → **Deploy from GitHub repo**. If this is your first time, Railway will ask you to install the Railway GitHub app — follow the prompts to grant access to your forked repository.

3. **Select your Transit-TV fork**. Railway will auto-detect it as a Node.js project.

4. **Add your API key**. Go to your service's **Variables** tab and add:
   ```
   API_KEY=your_transit_api_key_here
   ```

5. **Deploy**. Railway will automatically run `pnpm i`, `pnpm build`, and `pnpm start`. Wait for the build to complete.

6. **Generate a public URL**. Go to **Settings** → **Networking** → **Generate Domain**. Set the port to **8080**. This gives you a public `*.up.railway.app` URL.

7. **Open the URL on your TV's browser** and set your location. Click the settings icon and enter your coordinates as `latitude, longitude` (e.g. `45.5017, -73.5673`). An easy way to get coordinates is to right-click a location in Google Maps — the latitude and longitude will appear at the top of the context menu.

That's it — your Transit TV is live and will stay running 24/7.
