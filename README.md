# Sort-Firefox-Containers
Alphabetically sort the Firefox Multi Account Containers (powershell)

Exactly what it says on the tin. A powershell script to sort the containers used in the extention. 

Run script, choose sorting option, restart firefox. job done. 



![extention_image](https://i.postimg.cc/NG1ttgzM/Screenshot-2023-01-06-114602.png) ![context_image](https://i.postimg.cc/ZqFPZvpH/Screenshot-2023-01-06-114952.png)



### Issues
Some testing has shown that the extention menu wont update after sorting but the right click conext menu ("Open in new container tab") will.
If this happens I have found that removing the module and re-adding it gets it going again. I would recommend backing up your container.json file just in case. 
