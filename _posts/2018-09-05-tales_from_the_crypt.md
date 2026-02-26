---
title: Tales from the crypt
layout: post
post-image: https://almerra.com/assets/images/posts/0cc0b4_ab95d331e3bf4.png
description: Greetings, once again! Here with a new update on all the latest features for Winds of Almerra.
tags:
  - post
  - almerra
  - devnotes
---
**Greetings, once again!**

Over a year and a half ago was my last post as I have been quite busy ;-)Part of the reason for my absence has been advancing my career out here in LA which is going VERY well. I've gotten the chance to hone my skills tenfold with C#, modelling and sculpting and LOADS of material work with Unreal. I'm also happy to say the game is still being updated regularly with the latest engine, currently in 4.20.1 which was just released in July. So although a great deal of time has passed, progress has never stopped and I am beginning to really see the end of the tunnel in terms of what it should look like, how it should play and everything in between. But enough chit chat, let's take a look at a few things I'd like to talk about.  
  
**Landscape and Ocean shader overhaul**

Many parts of the previous community setup did not have the features I was looking for, so I worked on getting a natural looking ocean color & depth. The color also needed a specific location's ocean color independent of depth so this took a lot of tweaking but I'm very happy with how it has turned out. The landscape is also all redone with my own 14 layer system for painting, 5 of which being applied automatically from world machine and the slope of the geometry. Everything is also using the industry standard world space UVs for texturing so there are never any seams for making very steep cliffs from other geometry. :-)

[![Ocean](https://almerra.com/assets/images/posts/0cc0b4_ab95d331e3bf4.png)

**Procedural Fauna**

The first waves of Fauna are now in and more are close to being ready for import! The art behind this is the simple part though. It has taken me a few months to come up with a C# way of creating migration patterns and data points for when and where all fauna should exist. Nothing is placed in Editor manually :-)

What it came down to was taking a massive image from World Machine, copping it up into cells, then having a C# script to sample everything and assign it into datasheets. Completing this has allowed me to create over 3000 data tables for varying levels of placement accuracy ontop of what should spawn, and where it should spawn. To put this into context, Large open areas have a placement accuracy of 550 feet, slightly grown areas are 105 feet, and specialized areas of interest I can spawn individual species at every 50 feet. These will help me create believable forests, oceans, and just about anything as this is an extremely powerful pipeline. Photoshop -> Excel en masse.

[![Whales](https://almerra.com/assets/images/posts/0cc0b4_dc7ee60604d84.jpg)

**I have Crabs**  
This is just true.

[![Crabs](https://almerra.com/assets/images/posts/untitled-1.gif)

**Alyssakin Freetribe Architecture**

On other fronts, the architecture of the first nation has come very far taking on a Viking style with clay roofs and wood walls. But of course, the art was the easy part. Each one of these buildings is not just Geometry, in fact they are each their own Actors contained within a managing Village Actor. Every city is now mapped from nation to location to buildings to professions to people so that every single person and his story can all be properly tracked. The blacksmith KNOWS where his house is, where his job is and the areas of interest in those regions. He also knows the next town over in proximity and other locations that are unique to that town where could could travel and get ore or go off on his own story. Guards KNOW the areas that overlook the city and where all the locked doors are in town, and can act upon that information.

[![Architecture](https://almerra.com/assets/images/posts/0cc0b4_398d159f236d4.png)

**Interior Shadowing**

Part of the challenge in making a Dynamically lit open world is getting interiors to still have dark areas without a lot of light bleed, and with the new architecture it made it a breeze! And if you've been paying attention, the art was the easy part ;-) Each of these lights are dynamic when in range and regular emit when far away for performance purposes, but also each track the player's stealth rating! The sun and moon also contribute, but getting these indoor placed ones working was essentially to achieve that old Thief style gameplay. They can be set to always on, or just at night depending on where I end up placing them in buildings and they also have global settings applied that are changeable in the options menu for further performance tweaking.

[![Shadows](https://almerra.com/assets/images/posts/0cc0b4_25c0cf27f1e54.png)


**Main Menu Overhaul**

Part of finding the look and feel is getting back into making a combined style for all UI elements for every stage of the game. Happily I think I've found the look. There are also two brand new setups with the Character Creator, Options, World map and Command map, but I'll save those for next time.

[![Menu](https://almerra.com/assets/images/posts/0cc0b4_8bcf4dddaf944.png)

In general the project to me has really become clearer in the past year, much of it due to my work here in LA. The Character Creator is working with all the necessary blendshapes so can customize your face and features, and both sexes are using the same animations just with offsets so my efficient pipeline game is strong. As I continue doing more wildlife and complete more player movement in the future, I'll also be doing a lot of character writing and creating specific characters so that'll be fun.

As always.

Cheers!

D