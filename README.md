# Sort-Firefox-Containers
Alphabetically sort the Firefox Multi Account Containers (PS or JS)

Exactly what it says on the tin. A script to sort the containers used in the extention. 

Powershell:
Run script, choose sorting option, restart firefox. job done. 

JS:
Choose and update sorting options in script, Run script, restart firefox. job done. 

![extention_image](https://i.postimg.cc/NG1ttgzM/Screenshot-2023-01-06-114602.png) ![context_image](https://i.postimg.cc/ZqFPZvpH/Screenshot-2023-01-06-114952.png)




### Issues
Some testing has shown that the extention menu wont update after sorting the comtaimers.json file. 

If this happens I have found that randomly running through the following eventually helps and gets it going again (exact process still needs to be confirmed):
-Changing the option for firefox syncronisation
-Remove the module and re-add it
-Reseting the onboarding panels

I would recommend backing up your container.json file just in case. 
