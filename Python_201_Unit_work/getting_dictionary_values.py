courses = {
    "js": "Javascript 101",
    "python": ["Python 101", "Python 201", ],
    "html": "HTML 101"

}
# print(courses.get("css", "CSS 101"))
if courses.get("css", "CSS 101"):
    print("You are enrolled in Css 101")
