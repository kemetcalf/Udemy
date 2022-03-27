# key = input("Pick a plant: ")

user = {
    "name": "Kat",
    "age": 30,
    "hobbies": ["sewing", "crafting", "roller skating", "working out"],
    "partner": True,
    "pet": {
        "type": "dog",
        "name": "Rose",
        "age": 5,
    }
}

plants = {"pothos", "hyacinth", "aloe", "cactus", "spider plant"}

# if key in plants:
#     print(f"{key} is in the set")
# else:
#     print(f"{key} is not in the set")

friend_hobby = input("What is your favorite hobby? ")
if friend_hobby not in user["hobbies"]:
    print("Not a shared favorite")
else:
    print("Ooh! Fun!")
