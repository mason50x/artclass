var games = [
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    description: 'click balls, break bricks, become unstoppable brick-smashing machine',
    url: 'https://idle-breakout.github.io/games/idle-breakout/index.html',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    id: 'mine',
    title: 'Minecraft',
    description: 'build blocks, mine resources, survive the night, craft your world',
    url: 'https://eaglercraft.com/mc/1.8.8',
    image: 'https://art.pixilart.com/sr2b732d91f2f20.png'
  },
  {
    id: 'eggycar',
    title: 'Eggy Car',
    description: 'drive car with egg, don\'t drop egg, egg more important than life',
    url: 'https://hva2021.github.io/eggy-car/index.html',
    image: 'https://static.keygames.com/9/113739/96341/1024x1024/eggy-car.webp'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    description: 'cars playing soccer but with rockets and way too much boost',
    url: 'https://rocket-soccer-derby.github.io/file/',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'click cookie, buy grandmas, ascend to cookie godhood, question life choices',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    description: 'donkey blacksmith makes weapons, fights things, surprisingly deep crafting',
    url: 'https://art-class.github.io/assets/jacksmith',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    description: 'narrator insists there\'s no game, you prove them wrong, meta weirdness',
    url: 'https://assets.3kh0.net/there-is-no-game/index.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'fire boy and water girl solve puzzles, friendship stronger than physics',
    url: 'https://fireboy-and-watergirl-online.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    description: 'drift forever or die trying, one button controls your destiny',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://driftbossonline.github.io/file/'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'click circles to the beat, become rhythm game god, break mouse',
    url: 'https://web-osu.github.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png',
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    description: 'feed candy to green monster, physics puzzles, om nom nom',
    url: 'https://script.google.com/macros/s/AKfycbzC5BJN124UUKkQqKJwi6D_xOIz7Vy0fHyc1Fl8NEnSUtRXD-AUGnkKt3u1bugFLT5s/exec',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    description: 'climb walls wearing magic mask, avoid spikes, die repeatedly',
    url: 'https://tombofthemask.gitlab.io/file/',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'infinite yellow rooms, fluorescent lights, something watching you',
    url: 'https://backroomsgame.io/game/backrooms/',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    description: 'spend billionaire money faster than you earn it, impossible challenge',
    url: 'https://assets.3kh0.net/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
    id: 'papaburgers',
    title: 'Papa\'s Burgeria',
    description: 'flip burgers, serve customers, become fast food overlord',
    url: 'https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-burgeria/index.html',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: 'Papa\'s Scooperia',
    description: 'scoop ice cream, add toppings, satisfy sugar addicts',
    url: 'https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-scooperia/index.html',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'ultimatechess',
    title: 'Ultimate Chess',
    description: 'chess but with lasers and explosions, somehow still chess',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-chess.xml',
    image: 'https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    description: 'fly jetpack, dodge missiles, collect coins, crash spectacularly',
    url: 'https://abinbins.github.io/a7/jetpack-joyride/',
    image: 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC',
  },
  {
    id: 'shellshockers',
    title: 'Shell Shockers',
    description: 'eggs with guns shoot other eggs, yolk everywhere, surprisingly violent',
    url: 'https://orcatech2711.github.io/nano/games/shellshockers/index.html',
    image: 'https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q'
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'plants shoot zombies, zombies eat brains, your lawn becomes battlefield',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/plants%20vs%20zombies%201/plants%20vs%20zombies.html',
    image: 'http://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    description: 'wheelchair guy races through death traps, nothing happy about it',
    url: 'https://script.google.com/macros/s/AKfycbyfMPVIGx6dJPrYKeE9e4Erj949-dH28pWVRjdV1vgnoylpBV8af03JNLoz2MwAIBLECg/exec',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'motox3m',
    title: 'MotoX3M',
    description: 'motorcycle stunts through death courses, physics hate you',
    //url: 'https://assets.3kh0.net/motox3m/index.html',
    url: 'https://art-class.github.io/assets/motox3m',
    image: 'https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo'
  },
  {
    id: 'thefinalearth',
    title: 'The Final Earth',
    description: 'earth exploded, build new civilization from scratch, no pressure',
    url: 'https://assets.3kh0.net/the-final-earth/index.html',
    image: 'https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    description: 'rap battle to win girlfriend, beep boop your way to love',
    url: 'https://fridaynightfunkinweek7.github.io/',
    image: 'https://img.utdstc.com/icon/807/216/8072161110b1f6a2990a4baeb55eaaeab761fc199d9c001c7b6623f4cf8c6eb7:200'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    description: 'draw lines, claim territory, cut enemies while they cut you',
    url: 'https://paperio-2.github.io/a9/paper-io-2/',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    description: 'quiz with impossible questions, logic not included, rage guaranteed',
    url: 'https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'ducklife4',
    title: 'Duck Life 4',
    description: 'train duck to be athletic champion, quack your way to victory',
    url: 'https://htmlxm.github.io/h/duck-life-4/',
    image: 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    id: 'retrobowl',
    url: 'https://ethonion10.neocities.org/',
    title: 'Retro Bowl',
    image: 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://23azostore.github.io/s8/temple-run-2/',
    image: 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://assets.3kh0.net/stickman-hook/index.html',
    image: 'https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://coolmathgames.com/0-run-3/play',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run1',
    title: 'Run 1',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/run/index.html',
    image: 'https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg',
    description: 'Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run2',
    title: 'Run 2',
    url: 'https://ubg89.github.io/Run2/',
    image: 'https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg',
    description: 'Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'justfall',
    title: 'Just Fall',
    description: 'Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner',
    url: 'https://just-fall-lol.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://assets.3kh0.net/sm64/index.html',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'snowball',
    title: 'snowball.io',
    url: 'https://snowballio.gitlab.io/file/',
    image: 'https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://webgltest-17af1.firebaseapp.com/',
    image: 'https://yt3.googleusercontent.com/OKPFuDO6MCmgJOieSXnx2N0vlGpl13J68P72MKoHaTK5cBxWFuIYO7SjaSSa0Ndmp3NHwR_b=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://assets.3kh0.net/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    id: 'awesometanks2',
    title: 'Awesome Tanks 2',
    url: 'https://mathgames66.github.io/games/html5/awesometanks2/',
    image: 'https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4'
  },
  {
    id: 'fireandice',
    title: 'A Dance of Fire and Ice',
    url: 'https://htmlxm.github.io/h8/a-dance-of-fire-and-ice/',
    image: 'https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ',
    description: 'A Dance of Fire and Ice is a simple one-button rhythm game. Press on every beat of the music to move in a line. Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: 'Baldi\'s Basics',
    url: 'https://baldisbasics.gitlab.io/file/',
    image: 'https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    url: 'https://crossy-road.gitlab.io/file/',
    image: 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://files.ufreegame.net/1024/Subway-Surfers-Zurich/',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://scratch.mit.edu/projects/105500895/embed',
    image: 'https://i.redd.it/koaxrnoyfvoa1.jpg'
  },
  {
    id: 'idlecraft',
    title: 'Idlecraft',
    url: 'https://html5.gamedistribution.com/rvvASMiM/d1eb46064cfc41629a2b06e2a2a68a31/index.html',
    image: 'https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://www.culinaryschools.org/kids-games/ninja-fruit-slice/game.php',
    image: 'https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4'
  },
  {
    id: 'bloxors',
    title: 'Bloxors',
    url: 'https://www.twoplayergames.org/gameframe/bloxorz?embed=1',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'chromedino',
    title: "Chrome Dino Game",
    url: 'https://chrome-dino-game.github.io/',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    url: 'https://doodlejump.io/play/',
    image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'basketballstars',
    title: 'Basketball Stars',
    url: 'https://script.google.com/macros/s/AKfycbwzYMDDcdDUAvEP7iO6OdRk-5_oUp6vYvDdyEEz8tTOzWi5y4-Qf3vQ6TBoZuc9UYVcLg/exec',
    image: 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    id: 'amongus',
    title: 'Among Us',
    url: 'https://previews.customer.envatousercontent.com/files/322345709/index.html',
    image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://gswitch3.github.io/g/curve-ball-3d/',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://bitlifeonline.bitbucket.io/file/',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://bloons-td.gitlab.io/file/',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: 'ovo',
    title: 'OvO',
    url: 'https://ovoclassic-pro.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    id: 'dogeminer',
    title: "Doge Miner",
    url: 'https://doge-miner.gitlab.io/file/',
    image: 'https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv'
  },
  {
    id: 'aquapark',
    title: 'aquapark.io',
    url: 'https://the.deconstructors.co.uk/tam-slippery-water-slides/',
    image: 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://glebbahmutov.com/2048/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'baconmaydie',
    title: 'Bacon May Die',
    url: 'https://bacon-maydie.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/W_dghckKR-MD8Hx5YvCpdx3bYNeqrBdZqnMI02JnP5rVH8VqGaQUzdiMXd2wdJGLeP0=s96-rw',
    description: 'Warning: pressing ESC will exit the game.'
  },
  {
    id: 'burninrubber5xs',
    title: 'Burnin\' Rubber 5 XS',
    url: 'https://ubgfun.github.io/cars/burnin-rubber-5-xs/',
    image: 'https://imgs.crazygames.com/auto-covers/burnin-rubber-5-xs_1x1?format=auto&quality=100&metadata=none&width=1200',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://funnyshooter.gitlab.io/file/',
    image: 'https://imgs.crazygames.com/funny-shooter-2_1x1/20241113090815/funny-shooter-2_1x1-cover?format=auto&quality=100&metadata=none&width=1200',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'hydrostorm2',
    title: 'Hydro Storm 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/283a1142-4fa3-46c4-8a3f-35ac3a28f072/index.html',
    image: 'https://img.itch.zone/aW1nLzQ0NDIyMjUucG5n/original/el5LWv.png',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'pixwars2',
    title: 'PixWars 2',
    url: 'https://class811.github.io/g6/pixwars-2/',
    image: 'https://cdn-1.webcatalog.io/catalog/poki-pixwars-2/poki-pixwars-2-icon-filled-256.webp?v=1714778810721',
    description: 'An error is displayed during startup. It can be ignored, the game still works.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://23azostore.github.io/s6/recoil/',
    image: 'https://vgmsite.com/soundtracks/recoil-windows-gamerip-1999/8842460-recoil-windows-other.jpg'
  },
  {
    id: 'vex8',
    title: 'Vex 8',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html',
    image: 'https://static.keygames.com/4/117014/103021/1024x1024/vex-8.webp'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'snowrider',
    title: 'Snow Rider',
    url: 'https://drippy-cat.github.io/snowrider3D/',
    image: 'https://play-lh.googleusercontent.com/rvs-Y7c8PCBSkXoDGeEXtzSfPmxZ6IY2czOhpMQmH8jOs3qGOiMTtzIbA9qJTaT9qhk'
  },
  {
    id: '1on1basketball',
    title: '1 On 1 Basketball',
    url: 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-basketball.xml',
    image: 'https://tgkathletics.com/wp-content/uploads/2020/01/1-on-1-Bball-5.jpg'
  },
  {
    id: 'johnnyupgrade',
    title: 'Johnny Upgrade',
    url: 'https://slope-game.github.io/new3623/johnny-upgrade/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwR255KbD3yFlHuogEuNIk4uOYWciMrqTiPqsstZUIAPhyn8eomyvJ8hh6rX-MUJiRlSc&usqp=CAU'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://holeioonline.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'penguinio',
    title: "Penguin.io",
    url: 'https://penguins-io.com/',
    image: 'https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://html5.gamemonetize.co/ddek6s43vtxox5ocpsctljrtny62f1ss/',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  },
  {
    id: 'helixjump',
    title: 'Helix Jump',
    url: 'https://the.deconstructors.co.uk/tam-helix-jump-3d/',
    image: 'https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8'
  },
  {
    id: 'raccoonretail',
    title: 'Raccoon Retail',
    url: 'https://www.coolmathgames.com/0-raccoon-retail/play',
    image: 'https://play-lh.googleusercontent.com/zI8P-Gej0l8WK9_rRrVJuHQfZqA97ncD1RCN8qdLbmwl0uxPI8o5JLBsnJz5hxLKTYE'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});

console.log("Loaded " + games.length + " games")
