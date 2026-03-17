# Transit-TV
Use the Transit API to show next departure of a location in big for a TV context. 

![Transit-TV Screenshot](./screenshot.png)

> [!WARNING]  
> Transit TV was built by the Transit team as a fun project to demo our API, usage of this project comes with no garantee of any kind. 

## How to get started 

1) Request API access

Go the the [Transit API page](https://transitapp.com/apis) and request access to the an API key. Keep in mind that to have a Transit-TV running 24/7 you'll need a paid API key as the free plan won't be enough. When you have the API key, you can place it in the `.env` file. 

2) Test locally

Assuming you have node and pnpm installed (we recommend using `nodenv` to follow the `.node-version` file)

```sh
pnpm i
pnpm build
pnpm start
```

Then follow the instructions and open http://localhost:8080

3) Deploy somewhere!

You should be ready to deploy somewhere if you want to use it for a longer amount of time. See our [deployment guide](./DEPLOYING.md) for an example.

## [FAQ](./FAQ.md)

## Contribute

This project was built mostly for fun and hasn't been updated recently and needs some love. PRs welcome!