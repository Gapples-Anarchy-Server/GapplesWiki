---
title: Island System
description: How islands/plots work.
---

## Island Generation

Every player is assigned a unique 2000x2000 blocks island, meaning islands are generated in a grid-like pattern and assigned to players in spiral order.

- **Grid Layout**:

```
         -4000      -2000         0        2000       4000
           |          |          |          |          |
    -------+----------+----------+----------+----------+-------
           |          |          |          |          |
   -4000 - | (-2,-2)  | (-1,-2)  |  (0,-2)  |  (1,-2)  | (2,-2)
           |  Center: |  Center: |  Center: |  Center: |  Center:
           | -4000,-4k| -2000,-4k|   0,-4k  | 2000,-4k | 4000,-4k
    -------+----------+----------+----------+----------+-------
           |          |          |          |          |
   -2000 - | (-2,-1)  | (-1,-1)  |  (0,-1)  |  (1,-1)  | (2,-1)
           |  Center: |  Center: |  Center: |  Center: |  Center:
           | -4000,-2k| -2000,-2k|   0,-2k  | 2000,-2k | 4000,-2k
    -------+----------+----------+----------+----------+-------
           |          |          |          |          |
       0 - | (-2, 0)  | (-1, 0)  |  (0, 0)  |  (1, 0)  | (2, 0)
           |  Center: |  Center: |  CENTER: |  Center: |  Center:
           | -4000, 0 | -2000, 0 |   0, 0   | 2000, 0  | 4000, 0
    -------+----------+----------+----------+----------+-------
           |          |          |          |          |
    2000 - | (-2, 1)  | (-1, 1)  |  (0, 1)  |  (1, 1)  | (2, 1)
           |  Center: |  Center: |  Center: |  Center: |  Center:
           | -4000, 2k| -2000, 2k|   0, 2k  | 2000, 2k | 4000, 2k
    -------+----------+----------+----------+----------+-------
           |          |          |          |          |
    4000 - | (-2, 2)  | (-1, 2)  |  (0, 2)  |  (1, 2)  | (2, 2)
           |  Center: |  Center: |  Center: |  Center: |  Center:
           | -4000, 4k| -2000, 4k|   0, 4k  | 2000, 4k | 4000, 4k
    -------+----------+----------+----------+----------+-------
```

## Spiral Assignment Order

Players are assigned to grid cells in this spiral pattern:

```
    20--19--18--17--16
     |               |
    21   6---5---4  15
     |   |       |   |
    22   7   0   3  14
     |   |   |   |   |
    23   8   1---2  13
     |   |           |
    24   9--10--11--12
```

## Single Grid Cell Detail

**Example: Grid (0, 0) - Plumbiller's Island**

```    
    Z-axis
      ↑
   1000 ┌─────────────────────────────────┐
        │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Barrier Wall (North)
        │ ▓  PLAYABLE AREA 2000×2000    ▓ │
        │ ▓                             ▓ │
        │ ▓                             ▓ │
        │ ▓                             ▓ │
        │ ▓             🏝️              ▓ │
      0 │ ▓           0, 65, 0          ▓ │
        │ ▓                             ▓ │
        │ ▓                             ▓ │
        │ ▓                             ▓ │
  -1000 │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Barrier Wall (South)
        └─────────────────────────────────┘
      -1000        0                  1000  → X-axis
         ↑                              ↑
    Barrier Wall                  Barrier Wall
      (West)                         (East)
```


## Physical & World Height Boundaries

**Perimeter Walls**: The custom world generation generates barrier walls around each island at the cell boundaries. This ensures that players stay within their designated 2000x2000 block area and cannot wander off into other players' islands or the void. If players somehow manage to cross the barrier walls the plugin detects it and teleports them back to their island.

**Horizontal Bounds**: Any player movement past the mathematical bounds is cancelled, unless you're a visitor or you teleported to an island using `/skyblock visit` or `/skyblock tpa`. For more information about `/skyblock` commands, check [Player Commands](/commands/player-commands).

**Void Height (`Y < -64`)**: Players falling below the world minimum Y height (`-64`) ainstantly die, unless they're holding a totem of undying.

**Maximum Height (`Y >= 320`)**: Moving to or above world max height teleports the player back to their island center.

---

## Visual: Side View (Y-axis)

```
Y-axis
  ↑
320 ├─────────────────────── Max Height (teleport down)
    │
    │         🌤️  SKY
    │
100 │
    │
 65 ├──────── 🏝️ Island spawn height
    │       ███████
    │      █████████
    │     ███████████
    │
  0 │          🌫️  VOID
    │
-64 ├─────────────────────── Min Height (instant death and suffering)
```