# Sort-Firefox-Containers
Alphabetically sort the Firefox Multi Account Containers (powershell)

Exactly what it says on the tin. A powershell script to sort the containers used in the extention. 

Run script, choose sorting option, restart firefox. job done. 


### Issues
Some testing has shown that the extention menu wont update after sorting but the right click conext menu ("Open in new container tab") will.
If this happens I have found that removing the module and re-adding it gets it going again. I would recommend backing up your container.json file just in case. 
