---
title: The Foundation - Movement, Combat and AI
layout: post
post-image: https://almerra.com/assets/images/posts/Fists.jpg
description: "Progress is making strides! The movement of the character, camera and other essentials have already been fully mapped out. When I first set out to begin the adventure of making this adventure game, I already knew that Skyrim’s damage system was too simple and Mount & Blade: Warband’s combat was only limited by its’ AI. I’ll be taking none of these lessons for granted. And so here is my system."
tags:
  - post
  - almerra
  - devnotes
---

Greetings, travelers!

  

Progress is making strides! The movement of the character, camera and other essentials have already been fully mapped out. When I first set out to begin the adventure of making this adventure game, I already knew that Skyrim’s damage system was too simple and Mount & Blade: Warband’s combat was only limited by its’ AI. I’ll be taking none of these lessons for granted. And so here is my system:

The swings will be carried out according to the mouse’s current direction of movement, and moving your eyes up and down will physically make you bend up to swing in that direction, just like in Warband. Except that’s too easy, so along with Kicking there will also be shield bashing and even shield or offhand throwing. Offhand throwing? Wots that den, ey? That means you will be able to throw ANY weapon. If you’re out of bolts, just throw that damn crossbow at him! If you have excess, throw your sword or shield. Even torches… which will no doubt come into play during those enemy village raids ;-)

As of right now, the system is functional, except for bashing and setting up throwing values within the inventory system. The animations for many parts of this system are also setup, but so far the only weapon stance working 100% is good ‘ol fisticuffs. Bashing is quite a strange animal in this game, the button will not remain useless without a shield so this gives me a lot of creative freedom. In unarmed, bashing will be a shove. However, in most other shield-less stances it will execute a two-handed clobbering with the equipped weapon to attempt a knockdown.

[![Fists](https://almerra.com/assets/images/posts/Fists.jpg)

Behind all of this eye-fancy setup will be the standard old-school RPG character stats: Strength, Stamina, Agility, Intelligence, Wisdom, and Charisma with each feeding into typical areas of the player’s actions. Strength for swing power and jump height, Stamina for health and sprint duration, Agility for swing speed and breath duration. The other 3 stats: Intelligence, Wisdom and Charisma are for non-combat perks with professions and social stuff, as one would expect.

Of course, none of this would be possible without some decent AI! Which is hopefully something I can include in my next ‘tube video to showcase a portion of the game… and the best part is a metric ton of it already works! For those of you reading this article who are Unreal-savy, the AI system works best when a particular behavior tree is customized to one “task”, NOT one “personality.” I initially setup job graphs, time of day checks, nation and reputation checks as well as all the combat stuff in ONE behavior tree… however, you end up wasting memory and cpu power by letting the AI self-check CONSTANTLY about what profession it possesses, what weapons its wielding, or what its’ current health is. Instead, I’ve reworked this logic into the AI controller, so the actual behavior carried out is much simpler… so we can have MOAR! of them. The agro-check is the only universal behavior, and with it I am constantly checking for forward vectors of all visible AI so we can also have a good stealth mode J

Which brings me to the final point of this article: Movement stances! The best aspects of combat within Skyrim and Warband’s are accounted for, but neither had stances! Already working perfectly in-game are these 4 basic stances: Standing (No way! Lol), Stealth-walk, full-crouch, and prone. Each will slightly lower your stealth % check for AI, with the “Stealth-walk” being the fastest mode to use for creeping up on unsuspecting victims. And since every AI knows his/her own profession, nation and equipped weaponry, the AI won’t have to sit and stare curiously at you trying to decide if you’re REALLY going to use that flaming crossbow on him or not while he runs redundant computations.

What’s on the workbench now is more AI integration into the open world. NPCs will need to utilize roads whenever their target destination is more than a jaywalk away, and the human AI still can only “see” other villager AI and the player while ignoring other fauna like the bear drooling behind him. Part of this integration will involve setting up AI noise-making and player noises too sense within the aggro check. Also on the table is completing the inventory setup so the player can start using doors, containers, and the setup for using everyday objects like sitting in chairs, sleeping in beds, climbing ladders and ropes as well as interacting with NPCs.

That’s all for now, but be sure to check out the YouTube channel and website at [www.almerra.com](http://www.almerra.com) for all the latest info!

  

Simsaladoo