#!/usr/bin/env python3
import requests
import re
from urllib.parse import urlparse, unquote
from pathlib import Path

# Complete app data extracted from the JavaScript file
apps = [
    {"title": "Amazon", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKT8ybzOCCWP0YuUu4znbTcOtkd4tTUo54KQ&s"},
    {"title": "Apple Music", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k7lN6ADI2uE11Jr2h27ZzqXK2bp63f055fl-S1ogdFQfZYXSHLFy4bOMuH07L9T0Rn0&usqp=CAU"},
    {"title": "ChatGPT", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s"},
    {"title": "Chess.com", "image": "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png"},
    {"title": "Cool Math Games", "image": "https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512"},
    {"title": "CrazyGames", "image": "https://files.crazygames.com/assets/2022/PNG/Ziggy_Default.png"},
    {"title": "Discord", "image": "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg"},
    {"title": "Facebook", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"},
    {"title": "Figma", "image": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"},
    {"title": "FMovies", "image": "https://cdn-icons-png.flaticon.com/512/8109/8109065.png"},
    {"title": "GeForce Now", "image": "https://play-lh.googleusercontent.com/_-b_HQXrVyyhZSHj_BoE9u_-cxkcHDH_yLX5rDjJsFMIfsCNQs9F3QP4JvEFcWaSIz0"},
    {"title": "GitHub", "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},
    {"title": "HBO Max", "image": "https://cdn2.steamgriddb.com/icon/590fcadab00abacc5caaf30b51e91ad3/24/256x256.png"},
    {"title": "Instagram", "image": "https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png"},
    {"title": "LinkedIn", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"},
    {"title": "MLB", "image": "https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png"},
    {"title": "NBA", "image": "https://static.vecteezy.com/system/resources/thumbnails/027/127/440/small_2x/nba-logo-nba-icon-transparent-free-png.png"},
    {"title": "Netflix", "image": "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"},
    {"title": "Newgrounds", "image": "https://i.redd.it/hep7d95hfjw81.jpg"},
    {"title": "Notion", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png"},
    {"title": "OneDrive", "image": "https://cdn-icons-png.flaticon.com/512/5968/5968523.png"},
    {"title": "Paramount+", "image": "https://play-lh.googleusercontent.com/oi4GE8ulxHp4Y2xVzKu_WAMrgE4Jj4Kbdd7hAWLeoZTsMtC5bYTd2xcYhlvMk69pTFY"},
    {"title": "Pinterest", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/800px-Pinterest-logo.png"},
    {"title": "Poki", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UOfhJT5UOAzWznFy3EuIOh8dbEcRCeWfcQ&s"},
    {"title": "Reddit", "image": "https://external-preview.redd.it/tvUwj7NCSm_YzXPXIJE6ZWceln3IrbmFiO3kGF9GYVw.jpg?auto=webp&s=2d89ac7c3648c6f957bf9b02197477b1cc7046e9"},
    {"title": "SoundCloud", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antu_soundcloud.svg/2048px-Antu_soundcloud.svg.png"},
    {"title": "Spotify", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"},
    {"title": "Stack Overflow", "image": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png"},
    {"title": "TikTok", "image": "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png"},
    {"title": "Twitch", "image": "https://img.freepik.com/premium-vector/twitch-logo_578229-259.jpg"},
    {"title": "Vercel", "image": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"},
    {"title": "Visual Studio Code", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"},
    {"title": "WhatsApp Web", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"},
    {"title": "Wikipedia", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2048px-Wikipedia-logo-v2.svg.png"},
    {"title": "X", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1483px-X_icon_2.svg.png"},
    {"title": "Y8", "image": "https://play-lh.googleusercontent.com/rrFtf3hQpmMUmwHdcsvsV6vNpjMP9wsbvt6PpVg6sUleu0iJrlqVQizckc49dNkFQho"},
    {"title": "YouTube", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png"}
]

def sanitize_filename(filename):
    """Convert filename to lowercase with underscores"""
    # Convert to lowercase
    filename = filename.lower()
    # Replace spaces with underscores
    filename = filename.replace(' ', '_')
    # Replace problematic characters with underscores
    filename = re.sub(r'[<>:"/\\|?*!\'.]', '_', filename)
    # Remove extra underscores and dots at the end
    filename = re.sub(r'_+', '_', filename)  # Replace multiple underscores with single
    filename = filename.strip('_').rstrip('.')
    return filename

def get_file_extension(url):
    """Extract file extension from URL"""
    parsed = urlparse(url)
    path = unquote(parsed.path)

    # Try to get extension from the path
    if '.' in path:
        ext = Path(path).suffix.lower()
        if ext in ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']:
            return ext

    # Default to .jpg if we can't determine
    return '.jpg'

def download_icon(app_title, image_url, downloads_dir):
    """Download a single icon"""
    try:
        # Create pretty filename
        safe_title = sanitize_filename(app_title)
        extension = get_file_extension(image_url)
        filename = f"{safe_title}{extension}"
        filepath = downloads_dir / filename

        # Skip if file already exists
        if filepath.exists():
            print(f"⏭️  Skipping {filename} (already exists)")
            return True

        # Download the image
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        response = requests.get(image_url, headers=headers, timeout=30)
        response.raise_for_status()

        # Save the file
        with open(filepath, 'wb') as f:
            f.write(response.content)

        print(f"✅ Downloaded: {filename}")
        return True

    except Exception as e:
        print(f"❌ Failed to download {app_title}: {str(e)}")
        return False

def main():
    # Create downloads directory
    downloads_dir = Path.home() / "Downloads" / "app_icons"
    downloads_dir.mkdir(exist_ok=True)

    print(f"📁 Downloading icons to: {downloads_dir}")
    print(f"📱 Found {len(apps)} apps to download")
    print("-" * 50)

    success_count = 0
    total_count = len(apps)

    for i, app in enumerate(apps, 1):
        print(f"[{i}/{total_count}] {app['title']}...")
        if download_icon(app['title'], app['image'], downloads_dir):
            success_count += 1

    print("-" * 50)
    print(f"🎉 Download complete!")
    print(f"✅ Successfully downloaded: {success_count}/{total_count} icons")
    print(f"📂 Location: {downloads_dir}")

if __name__ == "__main__":
    main()