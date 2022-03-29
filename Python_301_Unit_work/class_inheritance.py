class Animal:
    fur_color = "Orange"

    def speak(self):
        print("Raaawwwwwrrrrr")

    def eat(self):
        pass

    def chase(self):
        pass


class Tiger(Animal):
    def speak(self):
        print("They're grrreeeeaat!")


class HouseCat(Animal):
    fur_color = "Black"

    def speak(self):
        print("Meow")


tiger = Tiger()
tiger.speak()

cat = HouseCat()
cat.speak()
print(cat.fur_color)
