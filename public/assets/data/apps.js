var apps = [
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
      'description': 'code editor in browser, write and edit code online'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
      'description': 'short video platform, scroll through endless content'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://external-preview.redd.it/tvUwj7NCSm_YzXPXIJE6ZWceln3IrbmFiO3kGF9GYVw.jpg?auto=webp&s=2d89ac7c3648c6f957bf9b02197477b1cc7046e9',
      'description': 'front page of internet, forums for everything'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png',
      'description': 'watch videos about literally anything, lose hours'
    },
    {
      "id": "twitter",
      "title": "X",
      "url": "https://x.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1483px-X_icon_2.svg.png',
      'description': 'tweet thoughts and see what everyone argues about'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
      'description': 'stream music and podcasts, discover new tunes'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png',
      'description': 'play chess online against people or computer'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512',
      'description': 'math disguised as fun games, surprisingly addictive'
    },
    {
      'id': 'netflix',
      'title': 'Netflix',
      'url': 'https://netflix.com',
      'image': 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940',
      'description': 'stream movies and shows, binge watch everything'
    },
    {
      'id': 'nowgg',
      'title': 'now.gg',
      'url': 'https://now.gg',
      'image': 'https://miro.medium.com/v2/resize:fit:1000/1*YM7t6RluDCb0XT62yy2aqQ.png',
      'description': 'play mobile games in browser, cloud gaming platform'
    },
    {
      'id': 'crazygames',
      'title': 'CrazyGames',
      'url': 'https://crazygames.com',
      'image': 'https://files.crazygames.com/assets/2022/PNG/Ziggy_Default.png',
      'description': 'browser games collection, tons of free games'
    },
    {
      'id': 'discord',
      'title': 'Discord',
      'url': 'https://discord.com/channels/@me',
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg',
      'description': 'chat with friends and communities, voice and text'
    },
    {
      'id': 'twitch',
      'title': 'Twitch',
      'url': 'https://twitch.tv',
      'image': 'https://img.freepik.com/premium-vector/twitch-logo_578229-259.jpg',
      'description': 'watch live streams and gaming content'
    },
    {
      'id': 'instagram',
      'title': 'Instagram',
      'url': 'https://instagram.com',
      'image': 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png',
      'description': 'share photos and stories, scroll through feeds'
    },
    {
      'id': 'whatsapp',
      'title': 'WhatsApp Web',
      'url': 'https://web.whatsapp.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png',
      'description': 'send messages and make calls through browser'
    },
    {
      'id': 'facebook',
      'title': 'Facebook',
      'url': 'https://facebook.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
      'description': 'social network to connect with friends and family'
    },
    {
      'id': 'github',
      'title': 'GitHub',
      'url': 'https://github.com',
      'image': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      'description': 'code repository hosting, version control for projects'
    },
    {
      'id': 'stackoverflow',
      'title': 'Stack Overflow',
      'url': 'https://stackoverflow.com',
      'image': 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png',
      'description': 'programming questions and answers, developer help'
    },
    {
      'id': 'amazon',
      'title': 'Amazon',
      'url': 'https://amazon.com',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKT8ybzOCCWP0YuUu4znbTcOtkd4tTUo54KQ&s',
      'description': 'online shopping for everything, fast delivery'
    },
    {
      'id': 'linkedin',
      'title': 'LinkedIn',
      'url': 'https://linkedin.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png',
      'description': 'professional networking and job searching platform'
    },
    {
      'id': 'figma',
      'title': 'Figma',
      'url': 'https://figma.com',
      'image': 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      'description': 'design and prototype interfaces, collaborative design tool'
    },
    {
      'id': 'canva',
      'title': 'Canva',
      'url': 'https://canva.com',
      'image': 'https://img.utdstc.com/icon/431/c6b/431c6be8e8dbb358738980c75c35c56ee8e8c3238089ed9b6f04d295d4008970:200',
      'description': 'create graphics and presentations, drag and drop design'
    },
    {
      'id': 'notion',
      'title': 'Notion',
      'url': 'https://notion.so',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png',
      'description': 'notes and database hybrid, organize everything'
    },
    {
      'id': 'slack',
      'title': 'Slack',
      'url': 'https://slack.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
      'description': 'team communication and collaboration platform'
    },
    {
      'id': 'pinterest',
      'title': 'Pinterest',
      'url': 'https://pinterest.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/800px-Pinterest-logo.png',
      'description': 'discover ideas and inspiration through pins'
    },
    {
      'id': 'dropbox',
      'title': 'Dropbox',
      'url': 'https://dropbox.com',
      'image': 'https://cdn-icons-png.flaticon.com/512/2496/2496092.png',
      'description': 'cloud storage and file sharing service'
    },
    {
      'id': 'onedrive',
      'title': 'OneDrive',
      'url': 'https://onedrive.live.com',
      'image': 'https://cdn-icons-png.flaticon.com/512/5968/5968523.png',
      'description': 'microsoft cloud storage and file sync'
    },
    {
      'id': 'nba',
      'title': 'NBA',
      'url': 'https://nba.com',
      'image': 'https://static.vecteezy.com/system/resources/thumbnails/027/127/440/small_2x/nba-logo-nba-icon-transparent-free-png.png',
      'description': 'basketball news scores and highlights'
    },
    {
      'id': 'poki',
      'title': 'Poki',
      'url': 'https://poki.com',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UOfhJT5UOAzWznFy3EuIOh8dbEcRCeWfcQ&s',
      'description': 'free online games platform, instant play'
    },
    {
      'id': 'temu',
      'title': 'Temu',
      'url': 'https://temu.com',
      'image': 'https://i.pinimg.com/474x/51/f0/74/51f0747d0411b526d57f70139b4d4348.jpg',
      'description': 'cheap online shopping from china, budget marketplace'
    },
    {
      'id': 'geforcenow',
      'title': 'GeForce Now',
      'url': 'https://play.geforcenow.com',
      'image': 'https://play-lh.googleusercontent.com/_-b_HQXrVyyhZSHj_BoE9u_-cxkcHDH_yLX5rDjJsFMIfsCNQs9F3QP4JvEFcWaSIz0',
      'description': 'stream pc games from cloud, high quality gaming'
    },
    {
      'id': 'hbomax',
      'title': 'HBO Max',
      'url': 'https://play.max.com',
      'image': 'https://cdn2.steamgriddb.com/icon/590fcadab00abacc5caaf30b51e91ad3/24/256x256.png',
      'description': 'premium shows and movies streaming service'
    },
    {
      'id': 'fmovies',
      'title': 'FMovies',
      'url': 'https://ww4.fmovies.co/24/',
      'image': 'https://cdn-icons-png.flaticon.com/512/8109/8109065.png',
      'description': 'you might need to try multiple servers since fmovies can be unreliable'
    },
    {
      'id': 'mlb',
      'title': 'MLB',
      'url': 'https://mlb.com',
      'image': 'https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png',
      'description': 'baseball scores news and stats'
    },
    {
      'id': 'newgrounds',
      'title': 'Newgrounds',
      'url': 'https://newgrounds.com',
      'image': 'https://i.redd.it/hep7d95hfjw81.jpg',
      'description': 'flash games and animations, internet nostalgia'
    },
    {
      'id': 'paramount',
      'title': 'Paramount+',
      'url': 'https://paramountplus.com',
      'image': 'https://play-lh.googleusercontent.com/oi4GE8ulxHp4Y2xVzKu_WAMrgE4Jj4Kbdd7hAWLeoZTsMtC5bYTd2xcYhlvMk69pTFY',
      'description': 'paramount shows and movies streaming platform'
    },
    {
      'id': 'soundcloud',
      'title': 'SoundCloud',
      'url': 'https://soundcloud.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antu_soundcloud.svg/2048px-Antu_soundcloud.svg.png',
      'description': 'discover indie music and podcasts, underground tracks'
    },
    {
      'id': 'applemusic',
      'title': 'Apple Music',
      'url': 'https://music.apple.com',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k7lN6ADI2uE11Jr2h27ZzqXK2bp63f055fl-S1ogdFQfZYXSHLFy4bOMuH07L9T0Rn0&usqp=CAU',
      'description': 'apple music streaming service, curated playlists'
    },
    {
      'id': 'vercel',
      'title': 'Vercel',
      'url': 'https://vercel.com',
      'image': 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      'description': 'deploy websites and apps instantly, developer platform'
    },
    {
      'id': 'wikipedia',
      'title': 'Wikipedia',
      'url': 'https://wikipedia.org',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2048px-Wikipedia-logo-v2.svg.png',
      'description': 'free encyclopedia with articles on everything'
    },
    {
      'id': 'y8',
      'title': 'Y8',
      'url': 'https://y8.com',
      'image': 'https://play-lh.googleusercontent.com/rrFtf3hQpmMUmwHdcsvsV6vNpjMP9wsbvt6PpVg6sUleu0iJrlqVQizckc49dNkFQho',
      'description': 'online games portal, millions of free browser games'
    },
  ]
