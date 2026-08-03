---
title: "OSRIC and Ascending Armor Class"
description: 
date: 2024-12-17
author: "Jim"
tags:
  - posts
  - osric
---

One of the biggest player complaints my last campaign was Descending <abbr title="Armor Class">AC</abbr>. Here we'll review some back-of-the-envelope math to convert the various "to hit" tables from [OSRIC](https://osricrpg.com/) to a <abbr title="To Hit Armor Class 0">THAC0</abbr>/Ascending <abbr title="Armor Class">AC</abbr> table.

## Armor Class

Converting <abbr title="Armor Class">AC</abbr> should be a simple enough matter. Descending <abbr title="Armor Class">AC</abbr> works in a range from 10 (no armor) to -10 (godly) armor. This is a range of 20 points. Given that we can infer that Ascending <abbr title="Armor Class">AC</abbr> should also convert to a 20 point range, 10 (no armor) to 30 (godly armor).

For players the [OSRIC](https://osricrpg.com/) rules make our lives easy because the armor table<sup>[1](#footnote-1)</sup> lists modifiers instead of absolute <abbr title="Armor Class">AC</abbr>s. For example plate armor confers a -7 bonus<sup>[1](#footnote-1)</sup> for a Descending <abbr title="Armor Class">AC</abbr> of 3. We can simply make the minus a plus for an Ascending <abbr title="Armor Class">AC</abbr> of 17. Hopefully it's clear that in either case plate armor is conferring 7 points of armor to the wearer.

For monsters we'll want a formula so we can convert their <abbr title="Armor Class">AC</abbr> on the fly instead of having to re-write the monster manual. This is as simple as subtracting the monster's Descending <abbr title="Armor Class">AC</abbr> from 10 and adding that number to 10 to get the Ascending <abbr title="Armor Class">AC</abbr>; (10 - Descending <abbr title="Armor Class">AC</abbr>) + 10 = Ascending <abbr title="Armor Class">AC</abbr>. Two examples. Cyclops<sup>[2](#footnote-2)</sup> Descending <abbr title="Armor Class">AC</abbr> = 2; (10 - 2) + 10 = 18. Bulette<sup>[3](#footnote-3)</sup> Descending <abbr title="Armor Class">AC</abbr> -2; (10 - -2) +10 = 22.

If we attempt to verify the math on the Fighter's "to hit table"<sup>[4](#footnote-4)</sup> using the level 1 row we'll note that a first level fighter needs an 18 to hit <abbr title="Armor Class">AC</abbr> 2. In the case of the Cyclops our math tracks. In fact if you compare the math to all armor classes zero or greater _for a first level fighter_ the math tracks.

The Ascending <abbr title="Armor Class">AC</abbr> math breaks down in two dimensions. Negative <abbr title="Armor Class">AC</abbr>s break our Ascending <abbr title="Armor Class">AC</abbr> formula in the lower levels since the formula can produce Ascending <abbr title="Armor Class">AC</abbr>s that are harder to hit than their Descending <abbr title="Armor Class">AC</abbr> equivalent. Let's put a pin in this and come back to it later. Fighters at levels higher than 1st need to roll lower numbers to hit AC 2(18). We'll address this next.

## To Hit

If we look at the fighter to hit table<sup>[4](#footnote-4)</sup> we'll note that the fighter's ability to hit armor improves each level. We'll need to fit this improvement into a <abbr title="To Hit Armor Class 0">THAC0</abbr> and Ascending <abbr title="Armor Class">AC</abbr> system.

Since <abbr title="Armor Class">AC</abbr> is a static number whether it's ascending or descending we'll need to improve some number to reflect the fighter's increasing chance to hit. <abbr title="To Hit Armor Class 0">THAC0</abbr> is simply lifted from the "to hit"<sup>[4](#footnote-4)</sup> table using the <abbr title="Armor Class">AC</abbr> 0 column, it improves by 1 for each level gained. For Ascending <abbr title="Armor Class">AC</abbr> we'll give the fighter a "to hit bonus" which will also improve by 1 for each level gained. This improvement will start at 0 and can be expressed with the formula, Fighter Level - 1 = to hit bonus.

A 1st level fighter using either <abbr title="To Hit Armor Class 0">THAC0</abbr> or Ascending <abbr title="Armor Class">AC</abbr> needs to roll an 18 to hit an <abbr title="Armor Class">AC</abbr> 2/18. <abbr title="To Hit Armor Class 0">THAC0</abbr> (20) - to hit roll (18) = the <abbr title="Armor Class">AC</abbr> hit (2). Ascending <abbr title="Armor Class">AC</abbr> to hit roll (18) = the <abbr title="Armor Class">AC</abbr> hit (18).

A 2nd level fighter using either <abbr title="To Hit Armor Class 0">THAC0</abbr> or Ascending <abbr title="Armor Class">AC</abbr> needs to roll an 17 to hit an <abbr title="Armor Class">AC</abbr> 2/18. <abbr title="To Hit Armor Class 0">THAC0</abbr> (19) - to hit roll (17) = the <abbr title="Armor Class">AC</abbr> hit (2). Ascending <abbr title="Armor Class">AC</abbr> (to hit roll (17) + to hit bonus (1) = the <abbr title="Armor Class">AC</abbr> hit (18)).

Both track with our earlier math for first level fighters and address the higher level fighter's increased ability to hit.

The improvement in the fighter's ability to hit is coded into the system as either a <abbr title="To Hit Armor Class 0">THAC0</abbr> that improves by 1 each level or "to hit bonus" that improves by 1 each level starting at 2nd. The formula works for fighters, paladins and rangers but composing similar formula for other classes is somewhat more tedious. I've left the manual figuring aside and put the result in the table below.

Conversion of the class "To Hit" tables from [OSRIC](https://osricrpg.com/) to <abbr title="To Hit Armor Class 0">THAC0</abbr> (Ascending <abbr title="Armor Class">AC</abbr>).

| Level | Fighter / Paladin / Ranger | Assassin / Thief | Cleric / Druid | Magic-User / Illusionist |
|---|---|---|---|---|
| 1 | 20(0) | 20(0) | 20(0) | 20(0) |
| 2 | 19(+1) | 20(0) | 20(0) | 20(0) |
| 3 | 18(+2) | 20(0) | 20(0) | 20(0) |
| 4 | 17(+3) | 20(0) | 18(+2) | 20(0) |
| 5 | 16(+4) | 19(+1) | 18(+2) | 20(0) |
| 6 | 15(+5) | 19(+1) | 18(+2) | 19(+1) |
| 7 | 14(+6) | 19(+1) | 16(+4) | 19(+1) |
| 8 | 13(+7) | 19(+1) | 16(+4) | 19(+1) |
| 9 | 12(+8) | 16(+4) | 16(+4) | 19(+1) |
| 10 | 11(+9) | 16(+4) | 14(+6) | 19(+1) |
| 11 | 10(+10) | 16(+4) | 14(+6) | 17(+3) |
| 12 | 9(+11) | 16(+4) | 14(+6) | 17(+3) |
| 13 | 8(+12) | 14(+6) | 12(+8) | 17(+3) |
| 14 | 7(+13) | 14(+6) | 12(+8) | 17(+3) |
| 15 | 6(+14) | 7(+13) | 12(+8) | 17(+3) |
| 16 | 5(+15) | 7(+13) | 10(+10) | 15(+5) |
| 17 | 4(+16) | 12(+8) | 10(+10) | 15(+5) |
| 18 | 3(+17) | 12(+8) | 10(+10) | 15(+5) |
| 19 | 2(+18) | 12(+8) | 9(+11) | 15(+5) |
| 20+ | 1(+19) | 10(+10) | 9(+11) | 13(+7) |

## The Pin

Ascending <abbr title="Armor Class">AC</abbr> breaks the "to hit" number for previously negative armor classes within a certain range.

A first level fighter using the [OSRIC](https://osricrpg.com/) "to hit"<sup>[4](#footnote-4)</sup> table needs a 20 to hit a Bulette<sup>[3](#footnote-3)</sup> whereas the fighter using the Ascending <abbr title="Armor Class">AC</abbr> conversion needs a 22. The Ascending <abbr title="Armor Class">AC</abbr> fighter is therefore at a 2 point deficit to hit the vs the fighter using the [OSRIC](https://osricrpg.com/) to hit table<sup>[4](#footnote-4)</sup>.

In the Ascending <abbr title="Armor Class">AC</abbr> system this deficit diminishes as the the fighter's to hit bonus rises with level.

How serious is this deficit? If I were publishing a game this might be a problem to solve. Then again it might just be that some creatures are too tough for low level characters. Since the Bulette<sup>[3](#footnote-3)</sup> is a 9 <abbr title="Hit Dice">HD</abbr> creature it's safe to assume that it's not meant to be encountered by a low-level group.

Since I can certainly keep encounters in my home game "in bounds" I think the math is good enough for a house rule.

## Conclusions

Personally I'm not all that interested in the fight over whether one formula is better than the other. Neither is all that difficult.

(<abbr title="To Hit Armor Class 0">THAC0</abbr> - (d20 + To Hit Modifiers) = Descending <abbr title="Armor Class">AC</abbr>)

(d20 + To Hit Modifiers = Ascending <abbr title="Armor Class">AC</abbr>)

What's far more interesting?

Ascending <abbr title="Armor Class">AC</abbr> was introduced to D&D with the release of <abbr title="Third Edition Dungeons and Dragons">3E</abbr>. As far as I've read <abbr title="Third Edition Dungeons and Dragons">3E</abbr> and <abbr title="Fourth Edition Dungeons and Dragons">4E</abbr> had rapidly escalating math that eventually led to the [bounded accuracy](https://www.dandwiki.com/wiki/Understanding_Bounded_Accuracy_(5e_Guideline)) of <abbr title="Fifth Edition Dungeons and Dragons">5E</abbr>.

Over this same period the ability of of fighters to hit with weapons was reduced to being the same as other classes. It's true they gained various abilities over the same time. But whether that's an improvement is down to individual judgement.

<aside>

## Foot Notes

1. <span id="footnote-1">Stuart Marshall, Armour Table 1: OSRIC Updated 2nd Edition (Usherwood Publishing, 2008), 33.</span>
2. <span id="footnote-2">Stuart Marshall, Cyclops: OSRIC Updated 2nd Edition (Usherwood Publishing, 2008), 205.</span>
3. <span id="footnote-3">Stuart Marshall, Bulette: OSRIC Updated 2nd Edition (Usherwood Publishing, 2008), 275.</span>
4. <span id="footnote-4">Stuart Marshall, ROLL REQUIRED TO HIT ARMOUR CLASS: OSRIC Updated 2nd Edition (Usherwood Publishing, 2008), 15.</span>
5. <span id="footnote-5">I remember it being with 2E but it could have been far earlier.</span>

</aside>