import tkinter
from tkinter import *
from tkinter import messagebox
color = "#1ed760"
fon = "MV Boli"
root = Tk()
root.title("menu app")
root.geometry("500x800")
root.resizable(False,False)
root.configure(bg=color)

def ok(a):
    a.pack()

def check():
    print('yes')

title = Label(root,text='MENU',font=(fon,32),background=(color),height=2)
ok(title)
mu = Label(root,text='PIZZA---BURGER---ORANGE---CHIP',font=(fon,16),background=(color),padx=10,pady=10)
ok(mu)

pizza = Button(root,padx=10,pady=10,text='✔️',command=lambda:check()).pack(pady=10)
Label(root,text='PIZZA',font=(fon,14),background=(color),height=2).place(x=70,y=180)

burger = Button(root,padx=10,pady=10,text='✔️').pack(pady=40)
Label(root,text='BURGER',font=(fon,14),background=(color),height=2).place(x=70,y=280)


orange = Button(root,padx=10,pady=10,text='✔️').pack(pady=50)
Label(root,text='ORANGE',font=(fon,14),background=(color),height=2).place(x=70,y=400)

chip = Button(root,padx=10,pady=10,text='✔️').pack(pady=60)
Label(root,text='CHIP',font=(fon,14),background=(color),height=2).place(x=70,y=500)


Text(root,height=2,font=(fon,16),padx=10,pady=10,width=27).place(y=700,x=35)

root.mainloop()