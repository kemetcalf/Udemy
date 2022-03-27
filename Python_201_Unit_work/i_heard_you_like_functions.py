def thing1(name):
    print("Yo, ", name)

    def thing2():
        print("I heard you like functions, ", name)
    # second function must be called inside of OG function to have it execute when OG function is called
    thing2()


thing1("Dawg")
