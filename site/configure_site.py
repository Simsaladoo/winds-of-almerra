import os
import json


def get_webdev_dir():
    return f"D:/UE/Tailwind_R E B U I L D/Resources/Code/Website"


def get_posts_path():
    return f"{get_webdev_dir()}/posts"


def get_post_list():
    return f"{get_webdev_dir()}/js/post_list.json"


def fill_post_paths():
    directory_path = get_posts_path()
    files = [file for file in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, file))]
    post_ref = []
    for post in files:
        post_ref.append(f"posts/{post}")
    print(f"Posts: {post_ref}")
    return post_ref


def export_posts_json():
    data = fill_post_paths()
    output_file =get_post_list()
    with open(output_file, "w") as json_file:
        json.dump(data, json_file, indent=4)
    json_file.close()


export_posts_json()