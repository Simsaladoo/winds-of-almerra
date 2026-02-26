---
title: Mr. International
layout: post
post-image: https://almerra.com/assets/images/posts/0cc0b4_957dd1bee83f4d36a9a68dc852437f64~mv2_d_2824_1543_s_2.png
description: Been fairly busy the last month and even took a trip to the Philippines to go diving, but I managed to make quite a bit more progress in creating more Fauna AI features, humanoid creation pipeline improvements and even did some more environment sculpting.  The sculpting isn't quite ready to show yet, :-) but I can show a cool new Fauna generation setup and some of the latest gameplay ui screens and it'll give you a vision into what's coming.
tags:
  - post
  - almerra
  - devnotes
---
**Greetings once again,**  
Been fairly busy the last month and even took a trip to the Philippines to go diving, but I managed to make quite a bit more progress in creating more Fauna AI features, humanoid creation pipeline improvements and even did some more environment sculpting. The sculpting isn't quite ready to show yet, :-) but I can show a cool new Fauna generation setup and some of the latest gameplay ui screens and it'll give you a vision into what's coming.  
  
**Fauna AI formations**

Many times when a Fauna was spawning into the world, they would end up spread out and not really reacting properly to each other--most notably with fish. They needed to school! So I integrated some basic formations with vectors that are saved as relatives to a single leader fish. This even helps for optimization down the line as well as I can easily fade out certain parts of larger schools to reduce calls, yet no change is AI has occurred. The below octahedrons are those waypoint locations of where each fish should swim towards--with the lowest right-most fish being the leader of the school. Only this single AI is directly detecting for other actors and aggressors, just like a Total War-style unit. The locations also have some change between their relative formation, since it shouldn't be static, but I am still writing more of those data tables. ​​

[![Fauna](https://almerra.com/assets/images/posts/0cc0b4_957dd1bee83f4d36a9a68dc852437f64~mv2_d_2824_1543_s_2.png)


**World Map**

Getting the whole world working! Below is the new setup for the World Map, which updates with information from notable cities, shows your character and lets you move him around, and also allows you to attack and control other units that show up in range. That range will be fairly small at first, and improved with your Navigation skill which I'll leave for later along with the other skills available. The menu below is just dummy data for now, obviously this is all still a WIP, but the better your skill improves the more info will show up. That even includes just clicking on the terrain somewhere as it will tell you geographical, fauna and useful foliage available in the area. Controlling the map is very easy and responsive, with regular wasd and shift + WASD for increased speed. There will be more useful buttons added later on, and more of those will become obvious once I have the player's craft setup finished. Controlling your own fleet on this map will be so much fun, as at anytime you can exit and fight :-D​​


[![Worldmap](https://almerra.com/assets/images/posts/0cc0b4_7ae5b80fb6ac41b78969fb847553cd06~mv2_d_2844_1603_s_2.png)

**Commander Mode**

The basics of rts control is functioning as well as hk droid is the Commander Mode controls setup. Sometimes buttons just decide they don't want you to be their master and they leave mysteriously. But the click-to-move is working perfectly at least. Next up will be adding a right-click menu like World Map has above to include a UI space for extra controls. The fun part will be adding the stealth kill prompt to that little window :-D The hired follower system will be where this comes more into play once it's working, as this interface will let you marquee select and command troops similar to your everyday RTS. ​​

[![Commander](https://almerra.com/assets/images/posts/0cc0b4_5053012d0b454.png)

Still working on improving some more Fauna and adding more species to the bestiary, and still have more Character blend shapes to finish but progress still going smoothly on all fronts. I'm also testing out some new animation software for auto-narration to animation which I hope I can add to really start making people come alive. These blend shapes I've been working on for quite a long time as so many different sliders have to be connected directly to the UI and then some have to fix OTHER sliders.

But it's coming along nicely and I can't wait to finally hit the spawn button :-D

Until next time,

Cheers!

Sim