# CompILe-Bot
A discord bot for CompILe

=======TO INSTALL======
First: Make sure node.js is install on your system.

Second: Clone this repo to whatever path you choose. 

Third: Open your command prompt and run this command in your bot folder:
npm install discord.io winston --save
(for windows users -- typing "cd .." will take you down a directory and 
typing "cd FOLDERNAME" will take you up the directory or you can 
type "cd FULLPATH" to get to the desired folder)

Fourth: Create a file called auth.json inside the bot folder and then insert this code into it.
{
"token": "TOKENVALUE"
}

We will replace TOKENVALUE later. 

The real token is only known by the real CompILe bot. That way we only have one server running the bot. 

======TO TEST THE BOT======

1. Create your own server on discord or pick an already exsisting channel you want the bot to be on.

2. Go to https://discordapp.com/

3. Click Developers -> Developers Portal -> Create an Application

4. Give your bot a name and a description.

5. Copy the Client ID number and replace CLIENTID with it in this url https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8 

6. Select the server you would like to add the bot to. 

7. Go to Bot under Settings and copy the token.

8. Open up auth.json and replace TOKENVALUE with your token.

7. Once that is finished open up your command prompt and go to path that the repo is located in. 

8. Type this command in to run the bot: node bot.js

9. Congrats your bot is now running. You will have to reopen the command window to run any new changes you made to the bot. 

10. If you make any new changes make sure to create a new branch in the repo and push it. You will want to edit the bot.js file to
add new code in. https://discordapp.com/developers/docs/intro will give info about the discord bot API.  