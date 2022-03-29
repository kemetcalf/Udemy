class Animal:
    property_1 = {
        'key_1': 'value 1'
    }
    this_list = ['Kat', 'Jenson', 'Rose']

    def add_name(self, name):
        self.this_list.append(name)
        return self.this_list

    def remove_name(self, name):
        self.this_list.remove(name)
        return self.this_list

    def this_is_a_method(self):
        print(self.this_list)

    @property
    def get_rose(self):
        return self.this_list[2]


the_animal = Animal()
# the_animal.this_is_a_method()
# rose = the_animal.get_rose
# print("the cutest perrita is ", rose)

the_animal.add_name("Zeus")
print(the_animal.this_list)

the_animal.remove_name("Kat")
print(the_animal.this_list)
