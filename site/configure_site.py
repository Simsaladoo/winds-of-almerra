import os
import json
import subprocess
import shutil

def get_module_path():
    '''
    D:/UE/Tailwind_R E B U I L D/Resources/Code/Website
    '''
    return os.path.dirname(os.path.abspath(__file__))


def source_docs_path():
    '''
    D:/UE/Tailwind_R E B U I L D/Resources/Code/Docs
    '''
    return f"{os.path.dirname(os.path.dirname(get_module_path()))}/Docs"


def get_post_source():
    '''
    D:/UE/Tailwind_R E B U I L D/Resources/Code/Docs/Almerra/posts
    '''
    return f"{source_docs_path()}/Almerra/posts"

def get_posts_path():
    return f"{get_webdev_dir()}/posts"

def get_post_list():
    return f"{get_webdev_dir()}/js/post_list.json"

def get_remote_name():
    return "origin"

def get_branch_name():
    return "main"


def get_webdev_dir():
    '''
    D:/UE/Tailwind_R E B U I L D/Resources/Code/Website
    '''
    return f"{os.path.dirname(get_module_path())}"




def copy_obsidian_posts():
    print(f"Publishing posts: ")
    print(f"Source: {get_post_source()}")
    print(f"Target: {get_posts_path()}")
    source = get_post_source()
    destination = get_posts_path()
    # Copy files
    shutil.copytree(source, destination, dirs_exist_ok=True)




def get_secrets_json():
    json_file = f"{os.path.dirname(get_webdev_dir())}/secrets.json"
    data = None
    with open(json_file, 'r') as file:
        data = json.load(file)
    repositories = data.get("secrets", [])
    return repositories[0]



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
    subprocess.run(["git", "config", "user.email", f"{get_secrets_json().get('email')}"])
    subprocess.run(["git", "config", "user.name", f"{get_secrets_json().get('name')}"])
    subprocess.run(["git", "-C", source_docs_path(), "pull"])

    copy_obsidian_posts()
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