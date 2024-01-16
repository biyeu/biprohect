print('++++++++++')
print('++ MENU ++')
print('++++++++++')

print('pizza--burger--orange--chip')

com = input("yes or no ").upper()
while com == 'YES':
    user = input("choose place: ").upper()
    address = int(input("choose number: "))
    menu = {1:'pizza',2:'burger',3:'orange',4:'chip'}
    if address:
        a = input('else: ').upper()
        if a == 'YES':
            print('your menu is ',menu[address],' in ',user)
            continue
        
        else:
            print('your menu is ',menu[address],' in ',user)
            break
    # break
