print('++++++++++')
print('++ MENU ++')
print('++++++++++')

print('pizza--burger--orange--chip')

com = input("yes or no ").upper()
while com == 'YES':
    price = 0
    user = input("choose place: ").upper()
    place = ['LA','CG','HN','TK']
    address = int(input("choose number: "))
    menu = {1:'pizza',2:'burger',3:'orange',4:'chip'}
    if address:
        if address in place:
            price += 3
            print('your price is: ', price*1000)
        else:
            price += 4
            print('your price is: ', price*1000)


        a = input('else: ').upper()
        if a == 'YES':
            print('your menu is ',menu[address],' in ',user,' and price is ',price*1000)
            continue
        
        else:
            print('your menu is ',menu[address],' in ',user,' and price is ',price*1000)
            break
    # break
