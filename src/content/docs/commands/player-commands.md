---
title: Player Commands
description: Technical reference for all player-accessible /skyblock subcommands.
---

## Command Reference

Main command label: `/skyblock` (Alias: `/sb`)

| Command | Aliases | Description |
| :--- | :--- | :--- |
| `/skyblock spawn` | `/sb spawn`, `/sb island`, `/sb is` | Teleports you to your island. |
| `/skyblock visit <player>` | `/sb visit <player>` | Teleports to `<player>`'s island in **Spectator** mode. |
| `/skyblock allowvisitors <true/false>` | `/sb allowvisitors` | Toggles whether players can `/skyblock visit` your island. |
| `/skyblock tpa <player>` | `/sb tpa <player>` | Sends a TPA request to visit an island in **Survival** mode. |
| `/skyblock tpaccept <player>` | `/sb tpaccept` | Accepts a pending TPA request from `<player>`. |
| `/skyblock tpdeny <player>` | `/sb tpdeny` | Denies a pending TPA request from `<player>`. |
| `/skyblock allowtpa <true/false>` | `/sb allowtpa` | Toggles whether you can receive incoming `/skyblock tpa` requests. |
| `/skyblock reset --confirm` | `/sb reset` | Restart your island from scratch.* |

:::caution[Island Reset Warning]
*To ensure no accidental wipes occur, the `/sb reset` command needs the `--confirm` flag, so it would look like `/skyblock reset --confirm`. Not putting the flag will return a warning message and your island won't be reset. Furthermore, the `/sb reset` command has a 1 hour cooldown, only use it in extreme cases, like if you mess up your cobble generator or you didn't get any sapling from your first tree.

Resetting your island will delete everything in your island in all dimensions, kick you from the server while it's assigning you a new one, delete your inventory, ender chest, and pretty much everything. It is not reversible in any way, so use it with caution.
:::

---

