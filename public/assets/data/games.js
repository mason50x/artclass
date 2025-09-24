var games = [
  {
    id: "idlebreakout",
    title: "Idle Breakout",
    description:
      "click balls, break bricks, become unstoppable brick-smashing machine",
    url: "https://idle-breakout.github.io/games/idle-breakout/index.html",
    image: "./assets/cdn/games/idle_breakout.jpg",
  },
  {
    id: "mine",
    title: "Minecraft",
    description:
      "build blocks, mine resources, survive the night, craft your world",
    url: "https://eaglercraft.com/mc/1.12.2",
    image: "./assets/cdn/games/minecraft.png",
  },
  {
    id: "eggycar",
    title: "Eggy Car",
    description:
      "drive car with egg, don't drop egg, egg more important than life",
    url: "https://hva2021.github.io/eggy-car/index.html",
    image: "./assets/cdn/games/eggy_car.webp",
  },
  {
    id: "rocketleague",
    title: "Rocket League",
    description: "cars playing soccer but with rockets and way too much boost",
    url: "https://rocket-soccer-derby.github.io/file/",
    image: "./assets/cdn/games/rocket_league.png",
  },
  {
    id: "cookieclicker",
    title: "Cookie Clicker",
    description:
      "click cookie, buy grandmas, ascend to cookie godhood, question life choices",
    url: "https://sushi8756.github.io/Cookie-Clicker-2.031/",
    image: "./assets/cdn/games/cookie_clicker.png",
  },
  {
    id: "jacksmith",
    title: "Jacksmith",
    description:
      "donkey blacksmith makes weapons, fights things, surprisingly deep crafting",
    url: "https://art-class.github.io/assets/jacksmith",
    image: "./assets/cdn/games/jacksmith.jpg",
  },
  {
    id: "coolmath",
    title: "Cool Math Games",
    description: "Interactive math games that make learning mathematics engaging and fun",
    url: "https://www.coolmathgames.com/",
    image: "./assets/cdn/games/cool_math_games.jpg",
  },
  {
    id: "abcya",
    title: "ABCya! Educational Games",
    description: "Educational games for kids covering math, reading, and more",
    url: "https://www.abcya.com/",
    image: "./assets/cdn/games/abcya.jpg",
  },
  {
    id: "codecombat",
    title: "CodeCombat",
    description: "Learn programming through playing a game - perfect for coding education",
    url: "https://codecombat.com/",
    image: "./assets/cdn/games/codecombat.jpg",
  },
  {
    id: "typingclub",
    title: "TypingClub",
    description: "Interactive typing lessons to improve keyboard skills",
    url: "https://www.typingclub.com/",
    image: "./assets/cdn/games/typingclub.jpg",
  },
  {
    id: "duolingo",
    title: "Duolingo",
    description: "Learn languages through bite-sized lessons and gamification",
    url: "https://www.duolingo.com/",
    image: "./assets/cdn/games/duolingo.jpg",
  },
  {
    id: "khanacademy",
    title: "Khan Academy",
    description: "Free educational resources covering math, science, and more",
    url: "https://www.khanacademy.org/",
    image: "./assets/cdn/games/khanacademy.jpg",
  },
  {
    id: "thereisnogame",
    title: "There Is No Game",
    description:
      "narrator insists there's no game, you prove them wrong, meta weirdness",
    url: "https://assets.3kh0.net/there-is-no-game/index.html",
    image: "./assets/cdn/games/there_is_no_game.jpg",
  },
  {
    id: "fbwg",
    title: "Fireboy and Watergirl",
    description:
      "fire boy and water girl solve puzzles, friendship stronger than physics",
    url: "https://fireboy-and-watergirl-online.github.io/file/",
    image: "./assets/cdn/games/fireboy_and_watergirl.jpg",
  },
  {
    id: "driftboss",
    title: "Drift Boss",
    description:
      "drift forever or die trying, one button controls your destiny",
    image: "./assets/cdn/games/drift_boss.jpg",
    url: "https://driftbossonline.github.io/file/",
  },
  {
    id: "osu",
    title: "osu!",
    description:
      "click circles to the beat, become rhythm game god, break mouse",
    url: "https://web-osu.github.io/",
    image: "./assets/cdn/games/osu.png",
  },
  {
    id: "cuttherope",
    title: "Cut the Rope",
    description: "feed candy to green monster, physics puzzles, om nom nom",
    url: "https://script.google.com/macros/s/AKfycbzC5BJN124UUKkQqKJwi6D_xOIz7Vy0fHyc1Fl8NEnSUtRXD-AUGnkKt3u1bugFLT5s/exec",
    image: "./assets/cdn/games/cut_the_rope.jpg",
  },
  {
    id: "tombofthemask",
    title: "Tomb of the Mask",
    description: "climb walls wearing magic mask, avoid spikes, die repeatedly",
    url: "https://tombofthemask.gitlab.io/file/",
    image: "./assets/cdn/games/tomb_of_the_mask.jpg",
  },
  {
    id: "backrooms",
    title: "Backrooms",
    description:
      "infinite yellow rooms, fluorescent lights, something watching you",
    url: "https://backroomsgame.io/game/backrooms/",
    image: "./assets/cdn/games/backrooms.jpg",
  },
  {
    id: "youarebezos",
    title: "You are Bezos",
    description:
      "spend billionaire money faster than you earn it, impossible challenge",
    url: "https://assets.3kh0.net/you-are-bezos/index.html",
    image: "./assets/cdn/games/you_are_bezos.png",
  },
  {
    id: "papaburgers",
    title: "Papa's Burgeria",
    description: "flip burgers, serve customers, become fast food overlord",
    url: "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-burgeria/index.html",
    image: "./assets/cdn/games/papa_s_burgeria.jpg",
  },
  {
    id: "papasicecream",
    title: "Papa's Scooperia",
    description: "scoop ice cream, add toppings, satisfy sugar addicts",
    url: "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-scooperia/index.html",
    image: "./assets/cdn/games/papa_s_scooperia.jpg",
  },
  {
    id: "ultimatechess",
    title: "Ultimate Chess",
    description: "chess but with lasers and explosions, somehow still chess",
    url: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-chess.xml",
    image: "./assets/cdn/games/ultimate_chess.jpg",
  },
  {
    id: "jetpackjoyride",
    title: "Jetpack Joyride",
    description:
      "fly jetpack, dodge missiles, collect coins, crash spectacularly",
    url: "https://abinbins.github.io/a7/jetpack-joyride/",
    image: "./assets/cdn/games/jetpack_joyride.jpg",
  },
  {
    id: "shellshockers",
    title: "Shell Shockers",
    description:
      "eggs with guns shoot other eggs, yolk everywhere, surprisingly violent",
    url: "https://orcatech2711.github.io/nano/games/shellshockers/index.html",
    image: "./assets/cdn/games/shell_shockers.jpg",
  },
  {
    id: "plantsvszombies",
    title: "Plants Versus Zombies 1.0",
    description:
      "plants shoot zombies, zombies eat brains, your lawn becomes battlefield",
    url: "https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/plants%20vs%20zombies%201/plants%20vs%20zombies.html",
    image: "./assets/cdn/games/plants_versus_zombies_1_0.jpg",
  },
  {
    id: "happywheels",
    title: "Happy Wheels",
    description:
      "wheelchair guy races through death traps, nothing happy about it",
    url: "https://script.google.com/macros/s/AKfycbyfMPVIGx6dJPrYKeE9e4Erj949-dH28pWVRjdV1vgnoylpBV8af03JNLoz2MwAIBLECg/exec",
    image: "./assets/cdn/games/happy_wheels.jpg",
  },
  {
    id: "motox3m",
    title: "MotoX3M",
    description: "motorcycle stunts through death courses, physics hate you",
    //url: 'https://assets.3kh0.net/motox3m/index.html',
    url: "https://art-class.github.io/assets/motox3m",
    image: "./assets/cdn/games/motox3m.jpg",
  },
  {
    id: "thefinalearth",
    title: "The Final Earth",
    description:
      "earth exploded, build new civilization from scratch, no pressure",
    url: "https://assets.3kh0.net/the-final-earth/index.html",
    image: "./assets/cdn/games/the_final_earth.png",
  },
  {
    id: "fnf",
    title: "Friday Night Funkin",
    description: "rap battle to win girlfriend, beep boop your way to love",
    url: "https://fridaynightfunkinweek7.github.io/",
    image: "./assets/cdn/games/friday_night_funkin.jpg",
  },
  {
    id: "paperio2",
    title: "Paper.io 2",
    description: "draw lines, claim territory, cut enemies while they cut you",
    url: "https://paperio-2.github.io/a9/paper-io-2/",
    image: "./assets/cdn/games/paper_io_2.jpg",
  },
  {
    id: "impossiblequiz",
    title: "The Impossible Quiz",
    description:
      "quiz with impossible questions, logic not included, rage guaranteed",
    url: "https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html",
    image: "./assets/cdn/games/the_impossible_quiz.jpg",
  },
  {
    id: "ducklife4",
    title: "Duck Life 4",
    description:
      "train duck to be athletic champion, quack your way to victory",
    url: "https://htmlxm.github.io/h/duck-life-4/",
    image: "./assets/cdn/games/duck_life_4.jpg",
  },
  {
    id: "retrobowl",
    url: "https://ethonion10.neocities.org/",
    title: "Retro Bowl",
    image: "./assets/cdn/games/retro_bowl.jpg",
    description:
      "american football but pixelated, manage team and throw touchdowns",
  },
  {
    id: "littlealchemy",
    title: "Little Alchemy",
    url: "https://littlealchemy.com",
    image: "./assets/cdn/games/little_alchemy.jpg",
    description: "mix elements to create new things, start with air and water",
  },
  {
    id: "templerun2",
    title: "Temple Run 2",
    url: "https://23azostore.github.io/s8/temple-run-2/",
    image: "./assets/cdn/games/temple_run_2.jpg",
    description: "run from monkeys through ancient temple, swipe to survive",
  },
  {
    id: "stickmanhook",
    title: "Stickman Hook",
    url: "https://assets.3kh0.net/stickman-hook/index.html",
    image: "./assets/cdn/games/stickman_hook.jpg",
    description: "swing on hooks like spider-man, time your release perfectly",
  },
  {
    id: "run3",
    title: "Run 3",
    url: "https://coolmathgames.com/0-run-3/play",
    image: "./assets/cdn/games/run_3.jpg",
    description:
      "Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer",
  },
  {
    id: "run1",
    title: "Run 1",
    url: "https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/run/index.html",
    image: "./assets/cdn/games/run_1.jpg",
    description:
      "Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer",
  },
  {
    id: "run2",
    title: "Run 2",
    url: "https://ubg89.github.io/Run2/",
    image: "./assets/cdn/games/run_2.jpg",
    description:
      "Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer",
  },
  {
    id: "justfall",
    title: "Just Fall",
    description:
      "Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner",
    url: "https://just-fall-lol.github.io/file/",
    image: "./assets/cdn/games/just_fall.jpg",
  },
  {
    id: "sm64",
    title: "Super Mario 64",
    url: "https://assets.3kh0.net/sm64/index.html",
    image: "./assets/cdn/games/super_mario_64.jpg",
    description:
      "Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register",
  },
  {
    id: "snowball",
    title: "snowball.io",
    url: "https://snowballio.gitlab.io/file/",
    image: "./assets/cdn/games/snowball_io.jpg",
    description:
      "roll snowball to knock others off icy platforms, last one standing wins",
  },
  {
    id: "smashkarts",
    title: "Smash Karts",
    url: "https://webgltest-17af1.firebaseapp.com/",
    image: "./assets/cdn/games/smash_karts.jpg",
    description:
      "kart racing with weapons and power-ups, mario kart but chaotic",
  },
  {
    id: "tunnelrush",
    title: "Tunnel Rush",
    url: "https://assets.3kh0.net/tunnel-rush/index.html",
    image: "./assets/cdn/games/tunnel_rush.jpg",
    description:
      "speed through colorful tunnel avoiding obstacles, reflexes required",
  },
  {
    id: "awesometanks2",
    title: "Awesome Tanks 2",
    url: "https://mathgames66.github.io/games/html5/awesometanks2/",
    image: "./assets/cdn/games/awesome_tanks_2.jpg",
    description: "drive tank and shoot enemies, upgrade weapons and armor",
  },
  {
    id: "fireandice",
    title: "A Dance of Fire and Ice",
    url: "https://htmlxm.github.io/h8/a-dance-of-fire-and-ice/",
    image: "./assets/cdn/games/a_dance_of_fire_and_ice.jpg",
    description:
      "A Dance of Fire and Ice is a simple one-button rhythm game. Press on every beat of the music to move in a line. Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.",
  },
  {
    id: "slope",
    title: "Slope",
    url: "https://mathadventure1.github.io/slope/slope/index.html",
    image: "./assets/cdn/games/slope.jpg",
    description:
      "roll ball down endless slope, dodge red blocks, speed increases",
  },
  {
    id: "baldisbasics",
    title: "Baldi's Basics",
    url: "https://baldisbasics.gitlab.io/file/",
    image: "./assets/cdn/games/baldi_s_basics.jpg",
    description:
      "escape school from angry math teacher, horror but educational",
  },
  {
    id: "1v1lol",
    title: "1v1.lol",
    url: "https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#",
    image: "./assets/cdn/games/1v1_lol.jpg",
    description: "build walls and shoot enemies in battle royale style",
  },
  {
    id: "crossyroad",
    title: "Crossy Road",
    url: "https://crossy-road.gitlab.io/file/",
    image: "./assets/cdn/games/crossy_road.png",
    description: "hop across roads and rivers, frogger but with chickens",
  },
  {
    id: "subwaysurfers",
    title: "Subway Surfers",
    url: "https://files.ufreegame.net/1024/Subway-Surfers-Zurich/",
    image: "./assets/cdn/games/subway_surfers.jpg",
    description: "run on train tracks dodging obstacles and collecting coins",
  },
  {
    id: "geometrydash",
    title: "Geometry Dash",
    url: "https://scratch.mit.edu/projects/105500895/embed",
    image: "./assets/cdn/games/geometry_dash.jpg",
    description:
      "jump cube through spikes to electronic music, timing is everything",
  },
  {
    id: "idlecraft",
    title: "Idlecraft",
    url: "https://html5.gamedistribution.com/rvvASMiM/d1eb46064cfc41629a2b06e2a2a68a31/index.html",
    image: "./assets/cdn/games/idlecraft.jpg",
    description: "minecraft but automated, watch your world build itself",
  },
  {
    id: "8ballpool",
    title: "8 Ball Pool",
    url: "https://8ball-pool.io",
    image: "./assets/cdn/games/8_ball_pool.jpg",
    description: "classic pool game, sink your balls before opponent",
  },
  {
    id: "fruitninja",
    title: "Fruit Ninja",
    url: "https://www.culinaryschools.org/kids-games/ninja-fruit-slice/game.php",
    image: "./assets/cdn/games/fruit_ninja.jpg",
    description: "slice flying fruit with ninja skills, avoid the bombs",
  },
  {
    id: "bloxors",
    title: "Bloxors",
    url: "https://www.twoplayergames.org/gameframe/bloxorz?embed=1",
    image: "./assets/cdn/games/bloxors.jpg",
    description: "roll rectangular block into square hole, 3d puzzle game",
  },
  {
    id: "chromedino",
    title: "Chrome Dino Game",
    url: "https://chrome-dino-game.github.io/",
    image: "./assets/cdn/games/chrome_dino_game.jpg",
    description: "jump dinosaur over cacti when internet dies, classic",
  },
  {
    id: "doodlejump",
    title: "Doodle Jump",
    url: "https://doodlejump.io/play/",
    image: "./assets/cdn/games/doodle_jump.jpg",
    description: "jump on platforms going up forever, avoid monsters",
  },
  {
    id: "slither",
    title: "slither.io",
    url: "https://slither.io",
    image: "./assets/cdn/games/slither_io.jpg",
    description: "grow snake by eating dots, cut off other players",
  },
  {
    id: "basketballstars",
    title: "Basketball Stars",
    url: "https://script.google.com/macros/s/AKfycbwzYMDDcdDUAvEP7iO6OdRk-5_oUp6vYvDdyEEz8tTOzWi5y4-Qf3vQ6TBoZuc9UYVcLg/exec",
    image: "./assets/cdn/games/basketball_stars.jpg",
    description: "shoot hoops in street basketball, beat opponents",
  },
  {
    id: "amongus",
    title: "Among Us",
    url: "https://previews.customer.envatousercontent.com/files/322345709/index.html",
    image: "./assets/cdn/games/among_us.jpg",
    description: "find the impostor among crewmates, complete tasks or vote",
  },
  {
    id: "curveball3d",
    title: "Curve Ball 3D",
    url: "https://gswitch3.github.io/g/curve-ball-3d/",
    image: "./assets/cdn/games/curve_ball_3d.jpg",
    description: "pong but in 3d tunnel, curve ball to beat opponent",
  },
  {
    id: "bitlife",
    title: "Bitlife",
    url: "https://bitlifeonline.bitbucket.io/file/",
    image: "./assets/cdn/games/bitlife.jpg",
    description: "live virtual life making choices, birth to death simulator",
  },
  {
    id: "btd4",
    title: "Bloons TD 4",
    url: "https://bloons-td.gitlab.io/file/",
    image: "./assets/cdn/games/bloons_td_4.jpg",
    description: "place monkeys to pop balloons, tower defense classic",
  },
  {
    id: "ovo",
    title: "OvO",
    url: "https://ovoclassic-pro.github.io/file/",
    image: "./assets/cdn/games/ovo.jpg",
    description:
      "parkour platformer with simple stick figure, precision required",
  },
  {
    id: "dogeminer",
    title: "Doge Miner",
    url: "https://doge-miner.gitlab.io/file/",
    image: "./assets/cdn/games/doge_miner.jpg",
    description: "mine dogecoin with shiba inu, such wow much clicker",
  },
  {
    id: "aquapark",
    title: "aquapark.io",
    url: "https://the.deconstructors.co.uk/tam-slippery-water-slides/",
    image: "./assets/cdn/games/aquapark_io.jpg",
    description: "race down water slides pushing others off, slippery fun",
  },
  {
    id: "2048",
    title: "2048",
    url: "https://glebbahmutov.com/2048/",
    image: "./assets/cdn/games/2048.png",
    description: "combine number tiles to reach 2048, simple but addictive",
  },
  {
    id: "roblox",
    title: "Roblox",
    url: "https://now.gg/play/roblox-corporation/5349/roblox",
    image: "./assets/cdn/games/roblox.jpg",
    description:
      "EXPERIMENTAL: This may or may not work for you. Please don't report it if it doesn't. If you have bad WiFi, it may load slower than usual.",
  },
  {
    id: "baconmaydie",
    title: "Bacon May Die",
    url: "https://bacon-maydie.github.io/file/",
    image: "./assets/cdn/games/bacon_may_die.jpg",
    description: "Warning: pressing ESC will exit the game.",
  },
  {
    id: "burninrubber5xs",
    title: "Burnin' Rubber 5 XS",
    url: "https://ubgfun.github.io/cars/burnin-rubber-5-xs/",
    image: "./assets/cdn/games/burnin_rubber_5_xs.jpg",
    description:
      "This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.",
  },
  {
    id: "funnyshooter2",
    title: "Funny Shooter 2",
    url: "https://funnyshooter.gitlab.io/file/",
    image: "./assets/cdn/games/funny_shooter_2.jpg",
    description:
      "This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.",
  },
  {
    id: "hydrostorm2",
    title: "Hydro Storm 2",
    url: "https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/283a1142-4fa3-46c4-8a3f-35ac3a28f072/index.html",
    image: "./assets/cdn/games/hydro_storm_2.png",
    description:
      "This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.",
  },
  {
    id: "pixwars2",
    title: "PixWars 2",
    url: "https://class811.github.io/g6/pixwars-2/",
    image: "./assets/cdn/games/pixwars_2.webp",
    description:
      "An error is displayed during startup. It can be ignored, the game still works.",
  },
  {
    id: "recoil",
    title: "Recoil",
    url: "https://23azostore.github.io/s6/recoil/",
    image: "./assets/cdn/games/recoil.jpg",
    description: "tank combat with destructible terrain, old school action",
  },
  {
    id: "vex8",
    title: "Vex 8",
    url: "https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html",
    image: "./assets/cdn/games/vex_8.webp",
    description: "parkour through deadly obstacle courses, stick figure pain",
  },
  {
    id: "thefinalearth2",
    title: "The Final Earth 2",
    url: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&",
    image: "./assets/cdn/games/the_final_earth_2.jpg",
    description: "build vertical city in space, earth exploded again",
  },
  {
    id: "snowrider",
    title: "Snow Rider",
    url: "https://drippy-cat.github.io/snowrider3D/",
    image: "./assets/cdn/games/snow_rider.jpg",
    description: "snowboard down mountain dodging trees and rocks",
  },
  {
    id: "1on1basketball",
    title: "1 On 1 Basketball",
    url: "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-basketball.xml",
    image: "./assets/cdn/games/1_on_1_basketball.jpg",
    description: "basketball one versus one, dribble and shoot to win",
  },
  {
    id: "johnnyupgrade",
    title: "Johnny Upgrade",
    url: "https://slope-game.github.io/new3623/johnny-upgrade/",
    image: "./assets/cdn/games/johnny_upgrade.jpg",
    description: "platformer where you buy upgrades with collected coins",
  },
  {
    id: "holeio",
    title: "Hole.io",
    url: "https://holeioonline.github.io/file/",
    image: "./assets/cdn/games/hole_io.jpg",
    description: "control black hole eating everything in city, grow bigger",
  },
  {
    id: "penguinio",
    title: "Penguin.io",
    url: "https://penguins-io.com/",
    image: "./assets/cdn/games/penguin_io.jpg",
    description: "push other penguins off ice platforms, last one standing",
  },
  {
    id: "brawlguys",
    title: "Brawl Guys",
    url: "https://html5.gamemonetize.co/ddek6s43vtxox5ocpsctljrtny62f1ss/",
    image: "./assets/cdn/games/brawl_guys.jpg",
    description: "fall guys style multiplayer minigames, beans battle royale",
  },
  {
    id: "helixjump",
    title: "Helix Jump",
    url: "https://the.deconstructors.co.uk/tam-helix-jump-3d/",
    image: "./assets/cdn/games/helix_jump.jpg",
    description: "bounce ball down spiral tower avoiding colored platforms",
  },
  {
    id: "raccoonretail",
    title: "Raccoon Retail",
    url: "https://www.coolmathgames.com/0-raccoon-retail/play",
    image: "./assets/cdn/games/raccoon_retail.jpg",
    description: "manage store and help customers as raccoon shopkeeper",
  },
];
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});

console.log("Loaded " + games.length + " games");
