import os
import json
import subprocess

def get_webdev_dir():
    '''
    D:/UE/Tailwind_R E B U I L D/Resources/Code/Website
    '''
    current_path = os.path.dirname(os.path.abspath(__file__))
    return f"{os.path.dirname(current_path)}"


def get_posts_path():
    return f"{get_webdev_dir()}/posts"

def get_post_list():
    return f"{get_webdev_dir()}/js/post_list.json"

def get_remote_name():
    return "origin"

def get_branch_name():
    return "main"

def fill_post_paths():
    print(f"Filling posts path...")
    directory_path = get_posts_path()
    files = [file for file in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, file))]
    post_ref = []
    for post in files:
        post_ref.append(f"posts/{post}")
    print(f"Posts: {post_ref}")
    return post_ref

def export_posts_json():
    print(f"Exporting posts...")
    data = fill_post_paths()
    output_file =get_post_list()
    with open(output_file, "w") as json_file:
        json.dump(data, json_file, indent=4)
    json_file.close()
    print(f"Posts updated: {output_file}")
    return output_file


def push_updates():
    export_posts_json()
    print(f"Pushing updates...")
    try:
        subprocess.run(["git", "-C", get_webdev_dir(), "add", "."], check=True)
        subprocess.run(["git", "-C", get_webdev_dir(), "commit", "-m", "Auto commit"], check=True)
        subprocess.run(["git", "-C", get_webdev_dir(), "push", get_remote_name(), get_branch_name()], check=True)
        print("Repository updates pushed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")



if __name__ == "__main__":
    push_updates()