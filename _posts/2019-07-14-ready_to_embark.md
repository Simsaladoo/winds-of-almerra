---
title: Ready to Embark
layout: post
post-image: https://almerra.com/assets/images/posts/HighresScreenshot00002.png
description: It's always a toss-up as to when I decide there are enough new features and if I've hit enough development milestones to make another post that has any real meat to it (I'm my own worst enemy on this), but enough screenshots from the latest build really excited me so I figured it was time for an update. Let's check out what's been going on in Almerra!
tags:
  - post
  - almerra
  - devnotes
---
**_Greetings travelers!_**  
  
Freshly returned from a diving trip out to Grand Cayman Islands, I'm fully re-invigorated with a passion to keep chaining together all of the complexity of this immense project. Spending days in the Caribbean sun drinking with friends and diving with sea turtles and giant rays definitely has a way of inspiring you! It's always a toss-up as to when I decide there are enough new features and if I've hit enough development milestones to make another post that has any real meat to it (I'm my own worst enemy on this), but enough screenshots from the latest build really excited me so I figured it was time for an update. Let's check out what's been going on in Almerra!



**Cave Networks**

Although fairly straightforward, getting the lighting and navigation pathing kinks worked out made this a significant development milestone. No silly teleporting doors between levels (Skyrim) will ever force you to face hours of loading screens so this seamless setup from exterior forests into deep dark cave networks is really nice and adds a lot of future storyline elements! The Rowani Salt Mines that is run using numerous slaves and prisoners will be striking to behold graphically, but will also provide many branching scenarios in the nation's dark storyline. The first cave system is now setup and working properly, the Ferrite Mines outside Rhougan Village which is the largest iron mine available to the Alyssakin Natives.

[![Caves](https://almerra.com/assets/images/posts/HighresScreenshot00002.png)


**AI/Player Inventory -> Combat systems -> UI systems**  
OMG This is such a milestone on the back-end. These are the connections between what your character is actually wearing, the stats system for incoming damage, the stats system for outgoing damage, the UI systems for your inventory, including NPC merchants, looting, containers and stowage on horses and crafts. This doesn't just govern displaying the items, but their relevant actions along with it. Taking/Stowing, dropping, using, repairing, equipping, etc. Overall now I'm really enjoying using the system as it feels very responsive and intuitive. All it needs now is a few column sorting buttons and filters and then some controller additions for examining items and rotating them in the UI. Below is a short gameplay video to introduce how it's all looking so far!

<iframe width="560" height="315" src="https://www.youtube.com/embed/GyTdQL8Bz8Y?si=XwMLKzdJpEPwA9VA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Stealth Mechanics**  
The overall goal concerning stealth in Almerra is as close to something like a Splinter Cell, Death to Spies, MGS or other stealth strategy mechanic as I can reasonably get it. What's functioning right now is a fairly simple tracking system which performs as follows: AI do their tasks and things until the player is within range, then what fires off are FOV and LOS trace checks against the players feet, head, chest and arms. If your head is poking out they'll spot you. The trace will then check your allegiance towards their home village and decide whether you are friend or foe and direct the AI decision-chart to go to attack or emote. Friendlies will simply look at the the player and possibly speak or continue quest and dialogue stuff which I can build into later with storyline elements.

[![Stealth](https://almerra.com/assets/images/posts/HighresScreenshot00000.png)

If foe, the AI will begin to update a marker with the player's location and begin their attack graph. If you run away out of LOS, the AI can also continue tracking you for a small period of time, but if LOS is not achieved again they will simply do a basic search pattern around their last known location for a time until finally going back idle. So the basic "Huh? What was that noise?" is working perfectly! What's not hooked up yet is their ability to inform OTHER guards of your location (which should be a fairly simple addition), and the update of your location through footsteps & dead bodies which AI can see right now but don't react to (and will be weather/ground-type dependent). Currently all of the AI that have spotted you add themselves to a special list of tracking actors that are either in Combat or in Caution, so parsing that list to update other guards or retrieve the nearest footprint will be easy to build in later. It's coming along very nicely, and it will be truly exciting once the incoming damage is setup properly so you have a real NEED to run and hide.

  
It's so exciting to see this many systems working well together, and every new addition now is incredibly enriching to the experience--keeping me very motivated! More world locations are getting boxed out and storyboard bits are also starting to get into the dialogue. Aquatic life is also starting to really take off as I have been working towards getting various species to take on their unique movement patterns within the AI systems. I hope you enjoyed this update on what's going on in Winds of Almerra!

[![Night](https://almerra.com/assets/images/posts/HighresScreenshot00001.png)

Cheers,  
Simsaladoo