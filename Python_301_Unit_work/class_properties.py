class Animal:
    property_1 = {
        'key_1': 'value 1'
    }
    this_list = ['Kat', 'Jenson', 'Rose']
    _like_this = "this is a private property"


# the_animal = Animal()
# print(the_animal.this_list[2])

# print(Animal.this_list)
print(Animal._like_this)  # this does work
