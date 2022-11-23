import pyautogui as pygui
x,y=pygui.position()
pygui.moveTo(x+50,y+50,0.1)
pygui.press('esc')
pygui.moveTo(x,y,0.1)
#print("py WeakUp start");
