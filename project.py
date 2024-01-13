import tkinter as tk
from tkinter import *


root = Tk()
root.title("my project")
root.geometry("570x600+100+200")
root.resizable(False,False)
root.configure(bg="#000")
equation = ""

te = tk.Entry(font=('Arial',16),width=23)
te.pack(pady=12)

button = tk.Button(text='send',font=('Arial',16),background='#00ff1a',width=23,border=0,command=lambda:show())
button.pack(pady=12)

buttn = tk.Button(text='clear',font=('Arial',16),background='#00ff1a',width=23,border=0,command=lambda:clear())
buttn.pack(pady=12)


label_result = Label(root,width=25,height=2,text="",font=("MV Boli",30))
label_result.pack()

def show():
    global equation
    equation += te.get()
    label_result.config(text=equation)

def clear():
    global equation
    equation = ""
    label_result.config(text=equation)

root.mainloop()
