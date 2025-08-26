---
title: Humble Beginnings
layout: post
post-image: "https://almerra.com/assets/images/20160905_201941.jpg"
description: The development of a fully open-world RPG has so many ingredients.  From the core gameplay loops to the mechanics and are generally easier said than done.  Take Witcher 3, for example--Take a contract, investigate, resolve it, get paid (or not), and repeat.  But in doing each of those steps the player will utilize movement, UI, NPC interactions, combat system, inventory, world/level design, shader performance and tech and SO much more.  
tags:
- sample
- post
- test
---

### Humble beginnings

The development of a fully open-world RPG has so many ingredients.  
From the core gameplay loops to the mechanics and are generally easier said than done.  
Take Witcher 3, for example--Take a contract, investigate, resolve it, get paid (or not), and repeat.  
But in doing each of those steps the player will utilize movement, UI, NPC interactions, an engaging combat system, managing inventory, world/level design, shader performance and SO much more.  

Almerra has had very few people putting in tens of thousands of hours to research, test and understand how to implement these kinds of systems, and they were uninteresting and just bad through the majority of the development.  

This research eventually leads to a heap of technical debt, and gets discouraging when the design mistakes only results in unwieldly code and awful tech.  Sometimes it can be good to look back and appreciate the distance that has been covered to avoid burnout.  

[![DialogueTest](https://almerra.com/assets/images/20160905_201941.jpg)
 The above image was experimenting with navmeshes for example.  Creation of these only involves adding a volume to generate them, but they can't be shifting during world origin rebasing for large worlds.  Experiments were done to try and offset them, re-create and generate them during runtime and removing them and baking down the information to little success.  It was only after testing out navigation invokes that an appropriate solution was found.  It took lots of time, but was well worth it in the end as it hasn't needed to be touched for many years now!
