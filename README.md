# Simple traefik sample using docker compose

Just a simple example using docker compose. There are 2 services:

**API**: Just a simple fake [json-api server](https://www.npmjs.com/package/fake-json-api-server) serving in path `/api`.

**UI**: Basic [svelte](https://svelte.dev) app. It fetches data from the api endpoint.

## Usage

It should build the images and run the stack with:

```sh
docker-compose up
```

You can also build it first by typing:

```sh
docker-compose build
```
