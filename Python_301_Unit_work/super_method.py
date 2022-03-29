class Animal:
    fur_color = "Orange"

    def speak(self):
        raise NotImplementedError

    def eat(self):
        print("I am eating")

    def chase(self, animal="gazelle"):
        print("I am chasing a", animal)


class HouseCat(Animal):
    def speak(self):
        print("Meeeoooowwww")

    def eat(self):
        super().eat()
        print("I am eating salmon")

    def chase(self, animal):
        super().chase(animal)
        print("The", animal, "was caught!")


cat = HouseCat()
# cat.speak()
# cat.eat()
cat.chase("mouse")
