---
title: "Ascending Armor Class"
draft: true
description:
date: 2026-09-04
author: "Jim"
tags:
  - rules
  - ad&d
---

I have resisted adopting ascending Armor Class due solely to my own observations of the evolution of Dungeons and Dragons. In short, "to hit" starts as a number line (Basic<sup>1</sup>) then becomes a set of tables hidden in the Dungeon Master's Guide (<abbr title="Advanced Dungeons and Dragons">AD&D</abbr>), then <abbr title="To Hit Armor Class 0">THAC0</abbr> (<abbr title="Second Edition Advanced Dungeons and Dragons">2E</abbr>), bonus numbers on a class chart (<abbr title="Third Edition Dungeons and Dragons">3E</abbr>) and finally class based advantages "to hit" disappear (<abbr title="Fourth Edition Dungeons and Dragons">4E</abbr> and greater). From <abbr title="Fourth Edition Dungeons and Dragons">4E</abbr> onward fighters get quasi-magical powers that make them more difficult to play than in previous editions. I consider this bad game design because it increases the complexity of the once simple entry level class and thus raises the barrier to entry for new or casual gamers.

Additionally I think there's a real probability for social consequences such as fighter players convincing themselves that they get _+level_ "to hit"<sup>2</sup> or other players assuming their bonuses are incorrect.

Untested assumption are just that, untested.

## Examining A.C.

For our thought experiment we'll assume a 6th level Fighter with no strength bonus. Using descending <abbr title="Armor Class">A.C.</abbr> the fighter has a 15 <abbr title="To Hit Armor Class 0">THAC0</abbr>. Using ascending <abbr title="Armor Class">A.C.</abbr> the fighter has +5 to hit.

### Descending A.C.

The range is -10 to 10 inclusive. The formula, `THAC0 - Roll = AC`. Examples:

1. `THAC0 (15) - Roll (15) = AC 0`
2. `THAC0 (15) - Roll (12) = AC 3`
3. `THAC0 (15) - Roll (19) = AC -4`

### Ascending A.C.

The theoretical range is 10 - 30 inclusive. The formula, `Roll = AC`. Examples:

1. `+5 + roll (10) = AC 15`
2. `+5 + roll (7) = AC 12`
3. `+5 + roll (14) AC 19`

### Examination

It seems obvious that ascending <abbr title="Armor Class">A.C.</abbr> is the easier system, so let's examine how it was actually done by Wizards of the Coast. In <abbr title="Third Edition Dungeons and Dragons">3E</abbr> the 11th level Fighter has `+11/+6/+1`. That is +11 for their first attack, +6 for the second and +1 for the third. Worth noting, the Fighter's first attack is `+level` with following attacks being `+level - 5`. In <abbr title="Third Edition Dungeons and Dragons">3E</abbr> the 11th level Rogue (Thief) has `+8/+3` and this does not obey the same math as the fighter.

I've not played <abbr title="Third Edition Dungeons and Dragons">3E</abbr> but I've heard from those who have that the worst of it was the math. Let's consider then that the player must remember which attack they're rolling, which bonus's they're adding and that they must roll their attacks one at a time to keep track of it all. If the Fighter has a +1 sword and +2 to hit (from Strength) each attack becomes; `Roll 1 (13) + 11 + 1 + 2 = 27`, `Roll 2 (2) + 6 + 1 + 2 = 11` and `Roll 3 (6) + 1 + 1 + 2 = 10`. Consider next the thief with a +1 from strength and a +3 dagger; `Roll 1 (19) + 8 + 1 + 3 = 31` and `Roll 2 (3) + 3 + 1 + 3 = 10`. Is this math easier? Will casual players remember it? Will social pressure, "Why is my roll different from theirs," undermine it?

The answers may be individual but the direction of <abbr title="Fourth Edition Dungeons and Dragons">4E</abbr>+ is a matter of record. Level based bonuses were removed in favor of class-based "powers" and video game like balance that in turn added their own level of complexity. Supposing we want to keep our games as "old-school" as possible (which I do) let us agree that the direction of Wizards of the Coast games is the incorrect path and examine ascending <abbr title="Armor Class">A.C.</abbr> in a more <abbr title="Advanced Dungeons and Dragons">AD&D</abbr> context.

A translation of the <abbr title="Advanced Dungeons and Dragons">AD&D</abbr> Fighter's to hit table to ascending <abbr title="Armor Class">A.C.</abbr> might look like like, +2 to hit at every odd level from levels 3 - 17; so +2 to hit at level 3, +4 at level 5 and so on until 17 where we may (or may not) cap the to hit bonus at +16. This ignores outliers such as needing a number greater than 20 to hit Armor Classes -5 or better at low levels, but fielding monsters at this <abbr title="Armor Class">A.C.</abbr> against low-level player characters seems punitive, making this safe to disregard. The 11th level fighter's attack rolls (from above) would look like this `Roll 1 (13) + 10 + 1 + 2 = 26` and `Roll 2 (2) + 10 + 1 + 2 = 15`. The math is of similar complexity to <abbr title="Third Edition Dungeons and Dragons">3E</abbr> save that is can be simplified by the player to a +13 to hit with the given +1 weapon making our rolls `Roll 1 (13) + 13 = 26` and `Roll 2 (2) + 13 = 15`. If these were done with <abbr title="To Hit Armor Class 0">THAC0</abbr> (10 for the 11th level fighter) our math looks like `THAC0 (10) - Roll 1 (13) + To Hit (+3) = -6` and `THAC0 (10) - Roll 2 (2) + To Hit (+3) = 5`

Is ascending <abbr title="Armor Class">A.C.</abbr> really easier? I'd say yes but only fractionally since, as you can see, we're dealing with lower numbers using <abbr title="To Hit Armor Class 0">THAC0</abbr>.

#### Cognitive Load

We've looked at math but the examination is incomplete if we don't also consider cognitive load with specific focus on that of the Dungeon Master. The player has only to focus on their character but the <abbr title="Dungeon Master">D.M.</abbr> has to juggle the demands of all players, non-player characters, setting and so on. <abbr title="Advanced Dungeons and Dragons">AD&D</abbr> assumes the player will announce their roll, the <abbr title="Dungeon Master">D.M.</abbr> will consult monster <abbr title="Armor Class">A.C.</abbr>  and a chart then tell the player if they've hit. Using <abbr title="To Hit Armor Class 0">THAC0</abbr> (<abbr title="Second Edition Advanced Dungeons and Dragons">2E</abbr>) or a number line (Basic<sup>1</sup>) the chart look up is removed reducing the Dungeon Master's load to just consulting the stat block. The real win therefore is removing the chart lookup. <abbr title="Dungeon Master">D.M.</abbr> referencing a goblin with 6 descending <abbr title="Armor Class">A.C.</abbr> or 14 ascending <abbr title="Armor Class">A.C.</abbr> has no notable difference.

So if we place the "to hit" load on the player then the ascending vs descending <abbr title="Armor Class">A.C.</abbr> question is one of quality of life for the players. And though the above shows the actual difference in ascending or descending is mathematically nominal, actual experience will show that players *feel* better about ascending A.C. Addition *feels* simpler and higher rolls *feel* more triumphant.

I can only conclude therefore that I must surrender to ascending <abbr title="Armor Class">A.C.</abbr> but not without the follow on concern that different level based to hit tables lead to the same problem path of <abbr title="Third Edition Dungeons and Dragons">3E</abbr> thus putting the game on the path to uniform systems and complex class design.

Ascending Armor Class will appear as an experimental rule in version 0.5.0 of my house rules.

## Footnotes

1. Basic herein represents Holmes Basic, B/X, and BECMI.
2. You could change base 10 A.C. to base 11 A.C. but that introduces a cascade of other math.
