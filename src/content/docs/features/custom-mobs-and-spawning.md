---
title: Custom Mobs Spawning
description: Technical breakdown of custom mob spawning rules and conditions.
---

## Overview

Many mobs spawning are injected directly into vanilla NMS biome spawn pools without replacing vanilla mob pools. In order to trigger spawning for specific mobs in skyblock, players must meet explicit block and biome requirements. 
For example, witches spawn sometimes naturally anywhere, but in gapples skyblock, the witches spawn rate is highly increased in the swamp biome on top of redstone blocks.

---

## Mob Spawning Conditions

<div class="mob-gallery">

![Witch Spawn](../../../assets/mobs_spawn/witch.png)

![Blaze Spawn](../../../assets/mobs_spawn/blaze.png)

![Guardian and Elder Guardian Spawn](../../../assets/mobs_spawn/guardian_and_elder_guardian.png)

![Wither Skeleton Spawn](../../../assets/mobs_spawn/wither_skeleton.png)

![Illagers Spawn](../../../assets/mobs_spawn/illagers.png)

![Allay Spawn](../../../assets/mobs_spawn/allay.png)

![Warden Spawn](../../../assets/mobs_spawn/warden.png)

![Mooshroom Spawn](../../../assets/mobs_spawn/mooshroom.png)

</div>

*(Note: Mooshroom block requirement is Coarse Dirt)*

## Husk Skylight Bypass

Vanilla Husks strictly require direct skylight access (`canSeeSky`). The server overrides this requirement to allow them to spawn in the dark, to promote players building sand farms.

---

## Biome Spawn Exclusions

Certain biomes have vanilla mob pools stripped to ensure custom mob farm efficiency:

- **Swamp and Roofed Forests**: Excludes vanilla `zombie`, `skeleton`, `enderman`, `creeper`, `spider`, and `zombie_villager` so that your witch and illagers farm go crazy.
