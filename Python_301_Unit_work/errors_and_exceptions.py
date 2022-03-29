# try:
#     print("Trying 1 / 0")
#     total = 1 / 0
#     print("this won't show up")
# except Exception:
#     print("Exception was caught")
#     total = 0

# print(total)

num = input("What is a number?")
try:
    num = int(num)
except Exception:
    num = "Unknown"
print(num)
