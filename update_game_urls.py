#!/usr/bin/env python3
import re
import os

def sanitize_filename(filename):
    """Convert filename to lowercase with underscores (same as download script)"""
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

def get_file_extension_from_path(file_path):
    """Get the extension from a file path"""
    return os.path.splitext(file_path)[1]

def update_games_js():
    """Update the games.js file to use local CDN URLs"""

    # Read the current games.js file
    games_js_path = '/Users/masonsingel/Documents/artclass/public/assets/data/games.js'

    with open(games_js_path, 'r') as f:
        content = f.read()

    # Get list of files in the cdn/games directory
    cdn_games_dir = '/Users/masonsingel/Documents/artclass/public/assets/cdn/games'
    available_files = os.listdir(cdn_games_dir)

    # Create a mapping of sanitized names to actual filenames
    file_mapping = {}
    for filename in available_files:
        if filename.startswith('.') or filename == 'apps':  # Skip hidden files and apps directory
            continue
        name_without_ext = os.path.splitext(filename)[0]
        file_mapping[name_without_ext] = filename

    print(f"Found {len(file_mapping)} game icon files in CDN directory")

    # Pattern to match game objects
    game_pattern = r'{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*image:\s*"([^"]+)"\s*}'

    def replace_image_url(match):
        game_id = match.group(1)
        title = match.group(2)
        description = match.group(3)
        url = match.group(4)
        current_image = match.group(5)

        # Generate the expected filename
        sanitized_title = sanitize_filename(title)

        # Find the matching file
        if sanitized_title in file_mapping:
            local_image_url = f"./assets/cdn/games/{file_mapping[sanitized_title]}"
            print(f"✅ Updated {title}: {local_image_url}")

            return f'{{\n    id: "{game_id}",\n    title: "{title}",\n    description:\n      "{description}",\n    url: "{url}",\n    image: "{local_image_url}",\n  }}'
        else:
            print(f"❌ No local file found for {title} (looking for: {sanitized_title})")
            return match.group(0)  # Return unchanged

    # Update the content
    updated_content = re.sub(game_pattern, replace_image_url, content, flags=re.DOTALL)

    # Handle games where image comes before url (different order)
    alt_pattern = r'{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)",\s*url:\s*"([^"]+)"\s*}'

    def replace_image_url_alt(match):
        game_id = match.group(1)
        title = match.group(2)
        description = match.group(3)
        current_image = match.group(4)
        url = match.group(5)

        # Generate the expected filename
        sanitized_title = sanitize_filename(title)

        # Find the matching file
        if sanitized_title in file_mapping:
            local_image_url = f"./assets/cdn/games/{file_mapping[sanitized_title]}"
            print(f"✅ Updated {title}: {local_image_url}")

            return f'{{\n    id: "{game_id}",\n    title: "{title}",\n    description:\n      "{description}",\n    url: "{url}",\n    image: "{local_image_url}",\n  }}'
        else:
            print(f"❌ No local file found for {title} (looking for: {sanitized_title})")
            return match.group(0)  # Return unchanged

    updated_content = re.sub(alt_pattern, replace_image_url_alt, updated_content, flags=re.DOTALL)

    # Write the updated content back to the file
    with open(games_js_path, 'w') as f:
        f.write(updated_content)

    print(f"\n🎉 Successfully updated games.js file!")
    print(f"📂 Updated file: {games_js_path}")

if __name__ == "__main__":
    update_games_js()