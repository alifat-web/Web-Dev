from models import Car, Motorcycle, Bus

my_car = Car("Toyota", "Camry", 2022, 4)
my_bike = Motorcycle("Harley", "883", 2021, False)
my_bus = Bus("Mercedes", "Sprinter", 2015, 20)

print(my_car.brand, my_car.model)
print(my_car.start_engine())

print(my_bike.brand, my_bike.model)
print(my_bike.start_engine())

print(my_bus.brand, my_bus.model)
print(my_bus.start_engine())
