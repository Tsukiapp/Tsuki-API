<h4 align="center">🌌 Tsuki API 🌌</h4>

<p align="center">
  <a href="#Features"> Features 🦾 </a> •
  <a href="#how-to-use">How To Use ❔ </a> •
  <a href="#download">Download 💻 </a> •
</p>



## Features🦾

* Endpoints:  
  - To request info about seasonal TOP 50 animes.
  - The lastest news related to the anime world.
  - To request info about a specific anime.


## How To Use
> Endpoints:
```bash
# Get anime info:
$ curl https://tsukiapi.herokuapp.com/anime/search?keyword={anime name}&type=anime

# Get news preview:
$ curl https://tsukiapi.herokuapp.com/anime/news

# Get news details:
$ curl https://tsukiapi.herokuapp.com/anime/news/details?id={anime_id}

# Get seasonal animes
$ curl https://tsukiapi.herokuapp.com/anime/season
```

## Download


To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Tsukiapp/Tsuki-API

# Go into the repository
$ cd Tsuki-API

# Install dependencies
$ npm install

# Build
$ npm run build

# Run the app
$ npm run start

```


## Credits

This software uses the following open source packages:

- [Express](http://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tsuki-mal-scrapper](https://github.com/Tsukiapp/MAL-scrapper)


## License

MIT

---

> GitHub [@Tsukiapp](https://github.com/Tsukiapp) &nbsp;&middot;&nbsp;