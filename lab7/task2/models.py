class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"Двигатель у {self.brand} заведен."

    def get_info(self):
        return f"{self.brand} {self.model} ({self.year})"

    def __str__(self):
        return f"Транспортное средство: {self.get_info()}"

class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start_engine(self):
        return f"Машина {self.model} заводится ключом."

class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        return f"Мотоцикл {self.model} заведен!"
