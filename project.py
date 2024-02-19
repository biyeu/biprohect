import tkinter
from tkinter import *
from tkinter import messagebox
color = "#1ed760"
fon = "MV Boli"
root = Tk()
root.title("menu app")
root.geometry("500x700")
root.resizable(False,False)
root.configure(bg=color)

def ok(a):
    a.pack()

def show_message_box():
    messagebox.showinfo("Message", "Button Clicked!")


title = Label(root,text='MENU',font=(fon,32),background=(color),height=2)
ok(title)
mu = Label(root,text='PIZZA---BURGER---ORANGE---CHIP',font=(fon,16),background=(color),padx=10,pady=10)
ok(mu)

Button(root,padx=10,pady=10,text='✔️',command=show_message_box()).place(x=30,y=180)
Label(root,text='PIZZA',font=(fon,14),background=(color),height=2).place(x=70,y=180)

Button(root,padx=10,pady=10,text='✔️').place(x=30,y=280)
Label(root,text='BURGER',font=(fon,14),background=(color),height=2).place(x=70,y=280)


Button(root,padx=10,pady=10,text='✔️').place(x=30,y=400)
Label(root,text='ORANGE',font=(fon,14),background=(color),height=2).place(x=70,y=400)

Button(root,padx=10,pady=10,text='✔️').place(x=30,y=500)
Label(root,text='CHIP',font=(fon,14),background=(color),height=2).place(x=70,y=500)

Text(root,height=2,font=(fon,16),padx=10,pady=10,width=27).place(y=600,x=30)

root.mainloop()