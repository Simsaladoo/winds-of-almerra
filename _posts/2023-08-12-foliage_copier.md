---
title: Foliage Converter
layout: post
post-image: "https://david-miller.life/images/foliage_ui.png"
description: The tool can convert the copied instances into meshes back and forth as needed to make layout pruning a breeze.
tags:
- sample
- post
- test
---

### Foliage Converter

The purpose of this tool is to provide a simple work around for being able to re-use instances of meshes by copying in-engine painted foliage into new actors that we can control as normal.

Many Tools already exist for this on the marketplace, especially ones more powerful like the Instance Tool, which is used from time to time. This Foliage Copier tool however is not a plugin, and can be freely copied with its actor component across to any projects without needing to edit configs. It even works in UE5 projects since it is created in 4.27.2.
Below is a test scene created with multiple sublevels all containing foliage, and will be used to demonstrate the process. The scene contains a few thousand trees, grasses and sandbags.

[![Tagging](https://david-miller.life/images/foliage_ui.png)](https://david-miller.life/images/foliage_ui.png)

[![Tagging](https://david-miller.life/images/foliageactor.png)](https://david-miller.life/images/foliageactor.png)

The Tool itself is relatively simple, you simply click the drop-down and select the foliage instance type you'd like to copy.
With it selected, your can click 'Create Copy' and create an Instanced static mesh class object with the same foliage geometry, material and transforms copied over.

[![MainImage](https://david-miller.life/images/foliage_ui.gif)](https://david-miller.life/images/foliage_ui.gif)


The tool can convert the copied instances into meshes back and forth as needed to make layout pruning a breeze.