---
title: Beasts of Burden
layout: post
post-image: https://almerra.com/assets/images/posts/0cc0b4_f75b6db224f74.jpg
description: Greetings travelers! Simsaladoo here with another update! Still feeling refreshed after my own adventures to Dubai, Sri Lanka and the Maldives, I now have some exciting new developments to cover! Many improvements on the AI and coding side have made it into the latest build (#0075) and there's even some new cinematic sequences that are in progress but today, I'd like to show some climate and animals that have made it into the wilds.
tags:
  - post
  - almerra
  - devnotes
---
Greetings travelers!  
  
Simsaladoo here with another update! Still feeling refreshed after my own adventures to Dubai, Sri Lanka and the Maldives, I now have some exciting new developments to cover! Almerra has always been a nature-heavy development in terms of the climates and features, and some of the recent work accomplished helped add a lot more diversity and life to it. Many improvements on the AI and coding side have made it into the latest build (#0075) and there's even some new cinematic sequences that are in progress but today, I'd like to show some climate and animals that have made it into the wilds.

### **New Climate Type**

_**Desert (Dahlak)**_

The Rowani lands are mostly desert with some lush tropics, from which I've taken references from the Dahlak Archipelago in the Red Sea. Acacia trees, sandstone, cactus, desert grasses and shrubs are all setup for this climate. The weather record is also setup for the islands this climate is used with, meaning the rate for a year is setup for triggering the reduced rainfall and increased sandstorms. The exposure is also increased in these areas which will add to the chance of heat exhaustion and dehydration debuffs, affecting your agility and animation speeds. Resting during the hottest parts of the day and staying in shaded areas naturally will reduce the exposure, as sun ray traces continually check for your sun-lit stealth rating.


[![Desert](https://almerra.com/assets/images/posts/0cc0b4_f75b6db224f74.jpg)

### **New Creatures**

_**Camels**_

Camels have been setup and more animations in progress! The lovely camels are also close to being ready for the mount system, still needing mounting and riding animations and some back end data for the physics based reigns. Camels are home in the Rowani Empire's lands and make for a much more stable shooting platform than the horse, sacrificing some dexterity for increased health and rider stability. Camels are also slower than horses but much smarter so they will not act up as badly as the horse may under critical stress situations.

[![Elephant](https://almerra.com/assets/images/posts/0cc0b4_84689cf5a6cd47248b62734ac8dac86a~mv2.png)

_**Elephants**_

The Elephants are coming! Wild elephants have already been setup in the wilds, but now Elephants are equipped to be mounted units in-game. The elephants in Almerra are originally from the Graatian lands, but have found their way to many other parts of the map mostly by trade. They are the slowest and highest health units in the game, able to take on just about any other mounted units since they offer the most health, most stable archery shooting platform and the most protection from opposing troops, mounted or not. Their tusks are usable by the driver, and up to two archers can ride and freely walk around on the castle. AI-riding units still need more work naturally but the player driven/owned setup is working well. Getting into the castle on its back is done via the interaction system and still needs climb animation, but works behind the scenes already since all the mounts use the same base class. Once in the tower you can move around and practice archery and throwing weapons as usual, using crouch to duck behind the sides. You can also drive the Elephant directly by 'using' the reigns, which puts you into the Landcraft camera mode following the animal.


[![Horses](https://almerra.com/assets/images/posts/0cc0b4_44ee4c4d1a064e6db777ef35595b3516~mv2.png)


_**Horses**_

Horses are also working and slowly creating variations! Riding mounts of any kind is extremely essential in Almerra since the lands are so vast and unforgiving with creatures and bandits. Horses are a staple for every nation due to their abundance and speed, and also come in a variety of breeds and pedigree, depending on your coin. They offer an efficient mode of transportation with their high speed over other mount types, while also having a good amount of dexterity.


[![Sharks](https://almerra.com/assets/images/posts/0cc0b4_d60be8f30dd74c559fe0b268cf4ffdac~mv2.png)


_**White Sharks**_

Sharks! Sharks! Sharks! This was a very fun and simple asset to implement as it will just spawn in and one shot AI or the player if left out in deep sea for too long. You could also try to bait yourself off of a vessel, and when they come andl circle the area it will make them open for harpooning. Just don't try to swim across the ocean and you'll be fine.



### AI Combat Development

[![Combat](https://almerra.com/assets/images/posts/0cc0b4_546e71a7d59a4269913095f39560cf2c~mv2.png)

Many other AI combat aspects have been getting worked on, namely their decision tree for fighting solo vs. in formations, their weapon choices from inventory, and AI's footwork patterns using said weapon choice. The Green traces above represent the actor's target and Red are Throwing weapon trajectories for debugging, and with some more footwork scripting and formation following, I think the system will be very fun. More work needs to be done to help prevent the friendly-fire though. X-D  
  
More unique weapons like the katana, sabres, yew bows and many other items have been added to the growing inventory list and are coming into play when simulating AI battles for debugging. On that note, 2019 was an exciting year and this year has many exciting things on the horizon. 2020 brings the final roadmap for the development pipeline for the game, beginning grant applications for unreal engine and the beginning of steam implementation before finally applying to the steam greenlight program. As such, this means Winds of Almerra should be on course for a 2021 release build if all goes smoothly. I'd like to thank everyone for reading and showing interest in the project, and safe travels.

Cheers,  
Simsaladoo