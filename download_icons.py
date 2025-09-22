#!/usr/bin/env python3
import requests
import re
from urllib.parse import urlparse, unquote
from pathlib import Path

# Complete game data extracted from the JavaScript file
games = [
    {"title": "1 On 1 Basketball", "image": "https://tgkathletics.com/wp-content/uploads/2020/01/1-on-1-Bball-5.jpg"},
    {"title": "1v1.lol", "image": "https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy"},
    {"title": "2048", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png"},
    {"title": "8 Ball Pool", "image": "https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag"},
    {"title": "A Dance of Fire and Ice", "image": "https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ"},
    {"title": "Among Us", "image": "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"},
    {"title": "aquapark.io", "image": "https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6"},
    {"title": "Awesome Tanks 2", "image": "https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4"},
    {"title": "Backrooms", "image": "https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg"},
    {"title": "Bacon May Die", "image": "https://play-lh.googleusercontent.com/W_dghckKR-MD8Hx5YvCpdx3bYNeqrBdZqnMI02JnP5rVH8VqGaQUzdiMXd2wdJGLeP0=s96-rw"},
    {"title": "Baldi's Basics", "image": "https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0"},
    {"title": "Basketball Stars", "image": "https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw"},
    {"title": "Bitlife", "image": "https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64"},
    {"title": "Bloons TD 4", "image": "https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg"},
    {"title": "Bloxors", "image": "https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ"},
    {"title": "Brawl Guys", "image": "https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg"},
    {"title": "Burnin' Rubber 5 XS", "image": "https://imgs.crazygames.com/auto-covers/burnin-rubber-5-xs_1x1?format=auto&quality=100&metadata=none&width=1200"},
    {"title": "Chrome Dino Game", "image": "https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq"},
    {"title": "Cookie Clicker", "image": "https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png"},
    {"title": "Crossy Road", "image": "https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png"},
    {"title": "Curve Ball 3D", "image": "https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ"},
    {"title": "Cut the Rope", "image": "https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY"},
    {"title": "Doge Miner", "image": "https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv"},
    {"title": "Doodle Jump", "image": "https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg"},
    {"title": "Drift Boss", "image": "https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA"},
    {"title": "Duck Life 4", "image": "https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM"},
    {"title": "Eggy Car", "image": "https://static.keygames.com/9/113739/96341/1024x1024/eggy-car.webp"},
    {"title": "Fireboy and Watergirl", "image": "https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU"},
    {"title": "Friday Night Funkin", "image": "https://img.utdstc.com/icon/807/216/8072161110b1f6a2990a4baeb55eaaeab761fc199d9c001c7b6623f4cf8c6eb7:200"},
    {"title": "Fruit Ninja", "image": "https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4"},
    {"title": "Funny Shooter 2", "image": "https://imgs.crazygames.com/funny-shooter-2_1x1/20241113090815/funny-shooter-2_1x1-cover?format=auto&quality=100&metadata=none&width=1200"},
    {"title": "Geometry Dash", "image": "https://i.redd.it/koaxrnoyfvoa1.jpg"},
    {"title": "Happy Wheels", "image": "https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ"},
    {"title": "Helix Jump", "image": "https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8"},
    {"title": "Hole.io", "image": "https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w"},
    {"title": "Hydro Storm 2", "image": "https://img.itch.zone/aW1nLzQ0NDIyMjUucG5n/original/el5LWv.png"},
    {"title": "Idle Breakout", "image": "https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ"},
    {"title": "Idlecraft", "image": "https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0"},
    {"title": "Jacksmith", "image": "https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot"},
    {"title": "Jetpack Joyride", "image": "https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC"},
    {"title": "Johnny Upgrade", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwR255KbD3yFlHuogEuNIk4uOYWciMrqTiPqsstZUIAPhyn8eomyvJ8hh6rX-MUJiRlSc&usqp=CAU"},
    {"title": "Just Fall", "image": "https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg"},
    {"title": "Little Alchemy", "image": "https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw"},
    {"title": "Minecraft", "image": "https://art.pixilart.com/sr2b732d91f2f20.png"},
    {"title": "MotoX3M", "image": "https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo"},
    {"title": "osu!", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png"},
    {"title": "OvO", "image": "https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw"},
    {"title": "Papa's Burgeria", "image": "https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg"},
    {"title": "Papa's Scooperia", "image": "https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A"},
    {"title": "Paper.io 2", "image": "https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw"},
    {"title": "Penguin.io", "image": "https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk"},
    {"title": "PixWars 2", "image": "https://cdn-1.webcatalog.io/catalog/poki-pixwars-2/poki-pixwars-2-icon-filled-256.webp?v=1714778810721"},
    {"title": "Plants Versus Zombies 1.0", "image": "http://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg"},
    {"title": "Raccoon Retail", "image": "https://play-lh.googleusercontent.com/zI8P-Gej0l8WK9_rRrVJuHQfZqA97ncD1RCN8qdLbmwl0uxPI8o5JLBsnJz5hxLKTYE"},
    {"title": "Recoil", "image": "https://vgmsite.com/soundtracks/recoil-windows-gamerip-1999/8842460-recoil-windows-other.jpg"},
    {"title": "Retro Bowl", "image": "https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ"},
    {"title": "Roblox", "image": "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw"},
    {"title": "Rocket League", "image": "https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png"},
    {"title": "Run 1", "image": "https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg"},
    {"title": "Run 2", "image": "https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg"},
    {"title": "Run 3", "image": "https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U"},
    {"title": "Shell Shockers", "image": "https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q"},
    {"title": "slither.io", "image": "https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA"},
    {"title": "Slope", "image": "https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs"},
    {"title": "Smash Karts", "image": "https://yt3.googleusercontent.com/OKPFuDO6MCmgJOieSXnx2N0vlGpl13J68P72MKoHaTK5cBxWFuIYO7SjaSSa0Ndmp3NHwR_b=s900-c-k-c0x00ffffff-no-rj"},
    {"title": "Snow Rider", "image": "https://play-lh.googleusercontent.com/rvs-Y7c8PCBSkXoDGeEXtzSfPmxZ6IY2czOhpMQmH8jOs3qGOiMTtzIbA9qJTaT9qhk"},
    {"title": "snowball.io", "image": "https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48"},
    {"title": "Stickman Hook", "image": "https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl"},
    {"title": "Subway Surfers", "image": "https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071"},
    {"title": "Super Mario 64", "image": "https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg"},
    {"title": "Temple Run 2", "image": "https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA"},
    {"title": "The Final Earth", "image": "https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png"},
    {"title": "The Final Earth 2", "image": "https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q"},
    {"title": "The Impossible Quiz", "image": "https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg"},
    {"title": "There Is No Game", "image": "https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw"},
    {"title": "Tomb of the Mask", "image": "https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw"},
    {"title": "Tunnel Rush", "image": "https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg"},
    {"title": "Ultimate Chess", "image": "https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg"},
    {"title": "Vex 8", "image": "https://static.keygames.com/4/117014/103021/1024x1024/vex-8.webp"},
    {"title": "You are Bezos", "image": "https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png"}
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

def download_icon(game_title, image_url, downloads_dir):
    """Download a single icon"""
    try:
        # Create pretty filename
        safe_title = sanitize_filename(game_title)
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
        print(f"❌ Failed to download {game_title}: {str(e)}")
        return False

def main():
    # Create downloads directory
    downloads_dir = Path.home() / "Downloads" / "game_icons"
    downloads_dir.mkdir(exist_ok=True)

    print(f"📁 Downloading icons to: {downloads_dir}")
    print(f"🎮 Found {len(games)} games to download")
    print("-" * 50)

    success_count = 0
    total_count = len(games)

    for i, game in enumerate(games, 1):
        print(f"[{i}/{total_count}] {game['title']}...")
        if download_icon(game['title'], game['image'], downloads_dir):
            success_count += 1

    print("-" * 50)
    print(f"🎉 Download complete!")
    print(f"✅ Successfully downloaded: {success_count}/{total_count} icons")
    print(f"📂 Location: {downloads_dir}")

if __name__ == "__main__":
    main()