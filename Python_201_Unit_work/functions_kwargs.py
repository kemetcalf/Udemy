# def person(**kwargs):
#     print(kwargs)
#     print(type(kwargs))

#     if 'age' in (kwargs):
#         print("You are ", kwargs.get('age'))


# person(name="Kat", age=30, brain="jelly donut")

def order_pizza(name, address, **toppings):
    print(f"Order is for {name}")
    print(f"Ship it to {address}")
    price = 18.00
    for key, value in toppings.items():
        price = price + 2.00
    print(f"The total price is {price}")
    return price


order_pizza("Amanda", "Canada", jalapenos=True, extra_cheese=True, ham=True)
