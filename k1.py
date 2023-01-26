"""
#달력 출력!!
import calendar
yy=2023
for x in range(12):
    mm=x+1
    print(calendar.month(yy,mm))
"""
def say_hello(name, age):
    return (f"Hello My name is {name} and {age} years old!")

x_h= say_hello('konan',25)
print(x_h)