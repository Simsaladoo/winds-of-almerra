---
title: Wheels keep turning
layout: post
post-image: https://almerra.com/assets/images/posts/faces2.gif
description: New developments in the world of Almerra! Performance and Optimization have been the name of the game for the last 2 months and the progress has already made it way into the latest dev builds. Let’s take a look at some of the recent additions and breakthroughs in Winds of Almerra!
tags:
  - post
  - almerra
  - devnotes
---
Greetings, travelers!

Simsaladoo here with another update.

What a year it has been thus far. The COVID outbreak really added problems to most of Hollywood’s film and CG production houses, but thankfully I work in games! Work from home has not been without its own troubles, but it’s definitely given me more free time to clean up wonky code, add new animations, new rigging updates and many more new developments in the world of Almerra! Performance and Optimization have been the name of the game for the last 3 months and the progress is really showing in the latest dev builds. Up to #0085 now! Let’s take a look at some of the recent additions and breakthroughs in Winds of Almerra!

[![Shaders](https://almerra.com/assets/images/posts/OpimizationPass.gif)

**Shader Optimization Pass**

First, some major performance improvements achieved these last 2 months concerned NPCs and foliage, which were the 3rd and 4th biggest performance killers respectively. The ocean shader also got an overhaul, which is still a work in progress but its only half the instruction count so far. Some basic but significant improvements to the NPCs involved adding new LODs to skin, clothing, hair, and weapons, which was much easier with the recent engine update. The trick was converting all the previous shaders to one master type and then parameterizing the useful variables so that all actors on-screen only have to compile their shader once. It serves as an up-front memory reduction which reduces overhead for garbage colllection and compile time—i.e., makes it go faster!


[![Landscapes](https://almerra.com/assets/images/posts/optimizationLandscape2.gif)

The same master-shader methodology was applied to foliage, which can get EXTREMELY expensive with all the overdraw from transparency. The geometry is always instanced, which reduces draw calls, however every unique material shader also adds to memory and increases the upfront compile time—making levels load and objects spawn slower. Reducing the amount of overdraw is always the key for foliage, but when you can’t--making use of material instancing is also the way to go as you’ll be able to share the compile time between grass, trees, bushes, etc. As an added boost this new master foliage shader now uses dithering which helps the transparency not be quite as expensive. This will be invaluable when I start really getting into building the heavily forested areas of the Monayan Jungles!


**Weather Functions**

A new weather system has been getting worked on in the latest builds, using curve tables genereated from real world annual rainfall, pressure gradients, cloud cover and temperature. This makes for a fairly believable weather spawner with some added variables to enable direct control by other subsystems. Adverse weather affects movement speed, archery effectiveness and overall exposure. So don't let your war-torn, veteran shield wall catch the sniffles! Recently added to the list of growing weather patterns are now Light and Heavy rainstorms, Light snowfall and light fog. Some of these will need to affect only visual effects while some will also directly affect arrow drag, movement speed, and exposure ratings depending on equipment type. This is basically a long, growing list of various weather particle events to trigger from the curve data. Sand storms are still on the list but need other considerations like the local climate (wouldn't want a sandstorm in the open ocean now would we?).


[![Weathers](https://almerra.com/assets/images/posts/OptimizationWeather2.gif)


**Rig & Facial Blends Update**

Another major milestone was concerning the authoring of Morph Targets for character expressions, character builder settings, and speech integration. This involves a huge network of controllers for rigging and blueprinting of modifiers, so developing a usable pipeline has been a challenging task. I've recently sharpened some of my MEL skills in Maya and I have developed a way to modify all individual shape files seamlessly. This means I can now freely update and work on all the expressions, character builder settings and speech models and not have to worry about binding & skin weights. The polishing phase can now begin on existing controllers and shapes in the near future and I hope to be able to show more complex expressions in the coming months.


[![Faces](https://almerra.com/assets/images/posts/faces2.gif)


In closing, the progress since the beginning of this project still amazes me. I am lucky to have the opportunities I've had to get the chance to work on this project and with every post the content creation gets a little easier. I'd like to introduce the official Instagram for the game [@sims.lab](https://www.instagram.com/sims.lab/) so be sure to follow us for interesting and humorous looks into the development of the game.

Thanks for reading, and stay safe!  
Sim