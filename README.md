# Ship of Harkinian Ocarina of Time collectibles tracker. 
*Intro to Web Dev final project by Astrid D. Kridelbaugh*

## What and why:
I want to build a program that extracts my Ocarina of Time save data to keep track of exactly which collectibles I have already obtained so I don't have to go back across the world map and double check every single one individually. The good thing about Ship of Harkinian stores game save data in JSON format, even though the files aren't labeled as .json. First it would deserialize the JSON data from the save file and look for a specific set of flags. To start out, I am going to be building the program to keep track of the Golden Skulltula collectibles. There are 100 of them, so this might take a minute to get each of them catalogued. The program will first search for gsFlags in the save data which appears to be an array of ints that represent which skulltulas have and have not been collected. 

Upon loading the data from a save file it will then display all of the golden skulltulas, with indicators as to which ones have and have not been collected according to what was interpreted from the save file. There would be a spoiler option that would allow the user to choose whether or not they want ot view skulltulas they have yet to collect in case they want to try finding the skulltulas by themselves.

There are a few main reasons I want to do this. First off I will acknowledge that within Ship of Harkinian does have a feature within the save editor that allows you to keep track of these things. I also acknowledge that this built-in feature has the ability to keep track of these changes while they are still in active memory, while my program would only be able to keep track of what has been collected after a manual save. However, Ship of Harkinian's does have some limitations. While it does let you filter collected Skulltulas by area, it does not tell you exactly which ones in that area you have already collected. You will still need to check each of the locations they are present in if you happen to be missing one. This is an issue I hope to fix by having each skulltula mapped to a specific data entry that shows its location in relation to the area it is in, and even a short description and other pre-requisites for obtaining it in the first place. 

Next, I would personally prefer to have this in a separate window like a tab in my browser, but this is not a feature I believe can be achieved by Ship of Harkinian. I either have to open the settings menu, which covers the entire screen, or pop-out the save editor, which covers part of the screen. And even still, it isn't immediately obvious how to move the popped-out save editor away from the main game window. It just has to sit there in the corner. Additionally, this is done through a save editor. This means there is a chance I could accidentally click a button, mess up my game, save, and then ruin my save file. This program I am making would only be able to read from my save file, not write to it, thus avoiding the risk of damaging the file.

### April 01 (15%)
- Create the basic HTML form the user can interact with in order to view their save file. The form would have inputs to allow the user to give the directory path for where the save files are located, a number input for which save file to examine (I could probably use radio buttons for this, but I need a number input), as well as a select for determining if they want to see the spoiler version or non-spoiler version (I could use a checkbox but not now). I will also add submit and reset buttons. It will have javascript determine submit behaviour. The submit should also give some message to the user that their input have successfully input the data and now it's just sending/receiving/processing/working on it.
- Build the basic outline of the website with a header and footer that are consistent across the site (I think I'll put attributions in the site footer. The header will obviously contain basic navigation links to other pages on the site.)

### April 04 (30%)
- I'll actually need to gather the data on how the skulltulas are stored. This will take quite a bit of time.
- Then assemble the database that will be read from and interpreted into the website pages. (this will likely be stored on the API side, which will be worked on at the same time)
- The main page will have a select input that will filter skulltulas by area (This will have the change event listener attached.)
- I believe I'll start a login and homepage. Add homepage behaviour that says (You aren't logged in, and have a shortcut to the login page.) I wonder how to make javascript that redirects me to a different page.

### April 08 (40%)
- Add JavaScript that will actually make calls to the API that holdes the skulltula data and generate the page that displays all the data on what you've collected and filters what you see based on your preferences.
- Each skulltula element will likely contain images displaying where it is located on the world map. (Maybe it will use x/y data so I don't have to store 100 map images.) The maps themsevles will likely be gotten from the [Reloaded texture pack](https://github.com/GhostlyDark/OoT-Reloaded-SoH/tree/master/OoT%20Reloaded%20(SoH)/textures/map_grand_static). )

### April 11 (50%)
- Work on the styling so that the site doesn't look so bare bones. Make it so each HTML elements are selected using ids and classes. Make certain elements have transitions and other behaviours depending on what actions are being performed on them. Colors. Layout (will likely be a scrollable list using flexbox) Add fancy borders and corner radii. Choose the same colour scheme as the file select menu. (Backgrounds for it are in [/textures/vr_cloud(0-3)_static](https://github.com/GhostlyDark/OoT-Reloaded-SoH/tree/master/OoT%20Reloaded%20(SoH)/textures/vr_cloud0_static)) This is going to be a hassle to figure out how to mess with the opacity and have a certain color in the background as well as the image.
- Put a picture of Blåhaj in the Author page, and have a fun minigame where you can drag it to different spots on the page, and that's drag and drop. It'll give different messages based on which spots you put them in and you "win" by finding Blåhaj's favourite spot.
- Change the inputs on login to take username as text input, put it in localStorage and redirect to the home page with the user credentials. Change to file uploading for extra credit points as well.

### April 15 (70%)
- Add logic for filtering by area, as well as a spoiler checkbox in the main page, which can be changed and re-render everything instantly. The query string will be used to determine whether to render the page in spoiler mode or not. Local storage will be for storing the skulltula data, so if the page reloads, it won't have to keep re-sending requests to deserialize the save file to the API.
- Put all the inputs fields in the sidebar. (Except the login on login.html) Login has text, reset and submit. Home page has file upload, submit and reset in one form, filtering by area using select by itself and a spoiler checkbox by itself. I still need a number. (If you are logged in, login page will have an account info or something that says, hello {username}, what is your favourite number? and a button to logout. Guest users can't upload files. There is no sign up, only log in. For this to work, you have to already be in the know.)
- The main page is in a transparent box that looks like the file select menu. (I don't know how to get the corners to look like they do in the actual menu in the game.)
- Add a way for the pages in the nav bar to indicate which pages you are on, with classList.add when they are being generated. (index.html / home page is the else)

### April 18 (80%)
- Figure out cloud server back-end hosting. Specifically, how to send the save file data to the back-end API.
- How to handle if the save file data changes while the site is still active, and has already interpreted the saved skulltula data (probably will check the numbers in gsFlags. If any have changed, it will re-interpret which ones have and haven't been collected, otherwise it'll just do noting).
<!-- - Adding drag and drop for keeping track of collectibles that can easily checked within seconds (so the tracking for these is done manually, in a separate HTML page. It keeps track of strength, bomb bag, quiver, scale upgrades, etc.) -->
- I added a little game on the author.html page where you drag and drop a Blåhaj on multiple spots on the pages and try to find their favourite spot, for fun.
- Have just a few test skulltulas ready. When the list gets rendered, use :nth-child(even || odd) (as in, pick even or odd) to have a slightly different background shade for contrast.

### April 22 (90%)
- Basic troubleshooting, testing, and setup for in-class presentation. Will involve making a test file and showing how the program functions.
- Getting to everything I missed
- Skulltula data that gets received from the API after it's done processing the file should be kept in local storage. I should put more things in the query string though, just to offset things? I dunno, I feel like login info works better with use in localstorage just because I'm using multiple pages.

### April 25 (100%)
- Store the skulltula data in localstorage
- Now handle query string for spoiler. Have it create and add the ?spoiler=false query string upon index.html being loaded. And then have it change when clicking the checkbox. When that happens, (it reloads? the page), and does something to check what the query string is and renders the not collected box accordingly.
- Make sure the public backend has functional file uploading before the presentation.
- To Do
  - [x] HTML: figure 
  - [x] CSS: transitions, hover, nth child, professional guidelines (Do this for whenever the shadow appears over an input field. I'll need to use hover for the file input anyway)
  - [x] Javascript: filter array functions, read querystring.
  - Functional Requirements: [x]Filter bar(that works), [ ]Drag & Drop
  - Uncomment padding-right: 10vw in #primary-content in styles.css once the demo is ready.

### Post Completion
- Read the file's gsTokens.
- Better separation of ui and domain concerning localStorage.
- Consider whether to keep filter progress across page reload.
- Have the spoiler elements not be created at all if ?spoiler=false so that screenreaders can't spoil you regardless.
- Have collected and not collected have their own separate scroll bars and the titles above them are fixed in place. (So they go in containers inside the main containers.)
- Add support for Master Quest.
- Add other collectibles (Heart Pieces, upgrades, equipment).
- Add another version for Majora's Mask.
- Find a more efficient way to split strings in C# every nth character.
- Private everything after school ends and the final is graded (at least until I have a version that I'm ready to publish for realsies).
- Add some sort of license similar to the license.md for WhatCampaign.

## Attributions
- [Zelda Dungeon's Guide to find all the Gold Skulltulas](https://www.zeldadungeon.net/wiki/Ocarina_of_Time_Gold_Skulltulas)
- [Ocarina of Time Reloaded Texture Pack](https://github.com/GhostlyDark/OoT-Reloaded-SoH)
- [IKEA listing for Blåhaj, supplies the image used on the author page](https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/)
- [Trans flag from Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Transgender_Pride_Flag_(3-2_aspect_ratio).svg)
- [Lesbian flag from Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lesbian_Pride_Flag_2019.svg)
