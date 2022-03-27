def add_numbers(*args):
    total = 0  # scoped to this function
    for num in args:
        total = total + num
    return total


totes = add_numbers(1, 3, 5, 7, 9)
print(totes)
