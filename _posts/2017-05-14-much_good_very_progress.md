---
title: Very good, much progress
layout: post
post-image: https://almerra.com/assets/images/posts/LS_0100.0020.jpeg
description: Greetings again!  It has been a while since my last update, but fear not, as many great things have transpired in the dark nights of Almerra!   Biggest news of all is that I finally upgraded the engine to the latest build from Unreal with 4.15.2, which gave me significant bonuses over the previous 4.11 engine--namely the dynamic lighting and landscape improvements.
tags:
  - post
  - almerra
  - devnotes
---
Greetings again! It has been a while since my last update, but fear not, as many great things have transpired in the dark nights of Almerra!

Biggest news of all is that I finally upgraded the engine to the latest build from Unreal with 4.15.2, which gave me significant bonuses over the previous 4.11 engine--namely the dynamic lighting and landscape improvements. Filling up a world this vast requires some trickery to make it top-down manageable, editable throughout development, and make it integrate with other required gameplay systems like the inventory or survival skills. The world also encompasses a full year of seasons that must influence these systems in some way, the weather must have consequences for npcs so they aren't lumberjacking during a snowstorm. As such, most of the development I have accomplished in the last few months is all under the hood to establish more robust tools for myself to build Almerra into a very diverse world.

  
The landscapes and weather are now linked, through their materials, and all are populated from a database of 365 days of climate data. Using this large database I can create weather patterns for an entire year of gameplay, with updates on the hour. You can se the sped-up gif below of the dynamic material on one demo map below:

[![Weather](https://almerra.com/assets/images/posts/weather1.gif)

The world of Almerra, however, is vast and actually required more than one type of climate so the material also had to power multiple different materials. So here is an example of the 7 climates all on their own landscape layer, with each being powered from separate tables:

[![More Weather](https://almerra.com/assets/images/posts/weather2.gif)

​​The snow is just the first layer I have built to be affected but now I can expand the same function to also influence water and specular highlights for wetness from rain and even add some world offset onto the snow so that it can actually build up a little too! The texturing of trees and grasses for this will have to be separately treated for that to work well, but it's coming!

  
Ontop of just weather, I also needed to build out how fauna will populate across the mountains, plains, deserts, oceans, and everything! This was a major undertaking but the system I now have functioning is very robust and I'm continuing to press it on! Here is a quick explanation on how it works. The map of almerra is a large 16k bmp image that I can draw specific rgb colors onto. These specific colors are read by the engine and then translated into groups of animals that I choose. So instead of like in Skyrim where you find a herds of a single type of animal, I can instead use the r, g and b values to spawn different species like a herd of cows, with a donkey and some egrets all doing their thing. When you get nearer the shores, the ocean data table takes over and spawns appropriate life for that region, like some crabs, seagulls and cranes.

  
Now pulling from a table this large had to be scaled down, and I've found a comfortable size at about 827 x 827. What this all looks like is pictured below. The large red spheres update onto your character, all laid out as if you were #5 in the center of a tick-tack-toe board. When you hit any other number, the area relocates to your position, and each sphere assess it's own region from the table which is firing the small red squares below:​​

[![Fauna](https://almerra.com/assets/images/posts/fauna1.gif)

Every one of the "cells" will update the appropriate fauna from the correct climate table wherever you choose to go. Birds in the skies, foxes and deer in the wilds, whales in the oceans, and goats and lions in the mountains!

  
I'm currently working at a new studio here in LA, which is also giving me some delicious industry experience! Working weekends to upgrade the engine and plan out all these systems was a major pain, but some of the worst is now over and I can continue with more interesting stuff like getting AI taxi services started on land and air, as well as improving the inventory system and get it ready to populate all the types of citizens in Almerra. There'll be some more animation updates to the character rig and many improvements to how it's powered so I can make the player's character movement more fluid and more ready for stealthing action.

  
As always, be sure to check back again for more updates in the near future. And I hope to have some cooler stuff to show throughout this summer.

Cheers!

D