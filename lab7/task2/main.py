from models import Car, Motorcycle

def main():
    my_car = Car("Toyota", "Camry", 2022, 4)
    my_bike = Motorcycle("Harley-Davidson", "Iron 883", 2021, False)

    vehicles = [my_car, my_bike]

    print("--- Информация о транспорте ---")
    for v in vehicles:
        print(v)
        print(v.start_engine()) 
        print("-" * 30)

if __name__ == "__main__":
    main()