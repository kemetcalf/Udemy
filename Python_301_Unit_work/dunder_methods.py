class Animal:
    fur_color = "Orange"

    animal_type = "Unknown"

    def __init__(self, fur_color):
        self.fur_color = fur_color

    def speak(self):
        raise NotImplementedError

    def eat(self):
        print("I am eating")

    def chase(self, animal="gazelle"):
        print("I am chasing a", animal)

    def get_fur_color(self):
        print("Getting fur color: ", self.fur_color)


class HouseCat(Animal):
    def __init__(self, fur_color):
        super().__init__(fur_color)
        print("fur color saved to class obj")
        self.animal_type = "House cat"
        print(self.animal_type)

    def speak(self):
        print("Meeeoooowwww")

    def eat(self):
        super().eat()
        print("I am eating salmon")

    def chase(self, animal):
        super().chase(animal)
        print("The", animal, "was caught!")


cat = HouseCat("Orange")
cat.get_fur_color()
