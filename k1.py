#달력 출력!!
import calendar
x=int(input("어떤 년 보고 싶어?:\n"))
yy=x
for x in range(12):
    mm=x+1
    print(calendar.month(yy,mm))
