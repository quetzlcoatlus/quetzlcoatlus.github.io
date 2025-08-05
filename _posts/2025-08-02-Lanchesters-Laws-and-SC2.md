---
layout: post
title: Lanchester's Laws and SC2
date: 2025-08-02
description: Lanchester's laws and Starcraft II post
tags: post
giscus_comments: true
categories: blog
---

# Lanchester's Linear and Square Laws in Starcraft II

Disclaimer I'm not a mathematician (yet). This is a surface level exploration of the Lanchester laws because I think it's cool.

## Brief Historical Context

Devised during WWI, M. Osipov and Frederick Lanchester formulated a series of differential equations used to describe the power relationships between two opposing forces.

Included in these differential equations are the Lanchester's linear law (for ancient combat) and Lanchester's square law (for modern combat with long-range weapons).

## Lanchester's Linear Law

The linear law is the relatively simpler one of the two, so we'll start here. 

This would be used to describe a scenario such as a Greek phalanx of weapons with spears. It is assumed that one solder only ever fights exactly one other soldier. In a series of one-vs-one battles, assuming the armies are similarly trained and equipped, will exhaust each other in a linear fashion. The implication of this is a victory for the larger army with equal losses.

The Starcraft II scenario that I believe leverages this phenomenon is like placing a zealot in a wall against zerglings. Only 2 zerglings can fight the zealot at once, which is highly advantageous to the more densely powerful zealot. There's less surface area for the zerglings to leverage their power in numbers. The relatively stronger zealot takes a greater number of zerglings to defeat than it would otherwise.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D3A2i-n5ydI?si=esdkxSxvHKGNn7id" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br/>

There is another scenario where the linear law applies that I thought was interesting. However, I couldnt come up with a scenario in Starcraft:

The linear law also applies to unaimed fire into an enemy-occupied territory, where both armies are firing into a target area. The law implies that two forces, occupying the same land area with the same weapons, who shoot randomly into the same geographical target area, will suffer the same rate and number of casualties until the smaller army is eliminated. The greater probability of one shot hitting the larger force is balanced by the larger force firing more shots.

## Lanchester's Square Law

Assume a scenario where two forces with firearms are engaging one another directly through aimed shooting from a distance. In this scenario, soldiers can attack multiple targets and receive fire from multiple directions. The rate of attrition is, so to speak, defined by the number of weapons shooting, basically disregarding whether there's an obstruction between the two soldiers. I suppose this is considered "modern" due to industrialization and mass production of effective ranged weaponry.

Lanchester found that the power of a force/army under these conditions is proportional to the square of the number of units. The square relationship is caused by each ranged weapon getting to fire their weapons with constant, sort of guaranteed value, unlike the linear phalanx or unaimed firing strategy where a significant portion of the forces aren't making *effective*---weakening an opposing soldier---use of their weapons.

The Lanchester's square law provides a mathematical foundation for reasoning about why slightly larger armies can snowball a victory. It's because as the smaller army acquires losses, it fires back less hard, leading to more losses later because it gets weaker and weaker relative to the larger opposing army. The larger army has less losses overall due to the relatively lower firepower from the initially smaller army, which enables them to retaliate with stronger attrition for longer.

I thought it was worth noting that the square law does not apply to technological force, only numerical force. It won't work on armies that are only partially deployed, except maybe as its own sub-battle. It also operates under the assumption that casualties accumulate over time rather than occurring all at once.

I believe the battle between two armies can be described with these two equations (wikipedia):

$\frac{dA}{dt} = -𝞫B$

$\frac{dB}{dt} = -𝞪A$

Imagine two armies. Alpha and beta represent the firepower of their respective army and A and B represent the numerical strength of their respective army. The lefthand side of the equation is the rate of loss the armies are experiencing over time. We would expect an army with higher firepower and larger population to cause more losses for a smaller army with lower firepower.

Basic observations of the relationship:
- 𝞪 = 𝞫 -> same firepower, side with more soldiers at the beginning wins.
- A = B -> same number of soldiers, so the army with greater firepower will win.
- A AND 𝞪 > B AND 𝞫 -> A's army will win
- A AND 𝞪 < B AND 𝞫 -> B's army will win

- If $A > B$ AND $𝞪 < 𝞫$ OR $A < B$ AND $𝞪 > 𝞫$:
	- the winning side depends on whether

$\frac{𝞫}{𝞪} > (\frac{A}{B})^2$ OR $\frac{𝞫}{𝞪} < (\frac{A}{B})^2$

Basically:
if $A > B$ AND $𝞪 < 𝞫$ then for A's army to win, $\frac{𝞫}{𝞪} < (\frac{A}{B})^2$
if $A < B$ AND $𝞪 > 𝞫$ then for A's army to win, $\frac{𝞫}{𝞪} > (\frac{A}{B})^2$

In layman's terms, the ratio of superiority in firepower needs to beat the square of the ratio of inferiority in numbers for victory. In reverse, the ratio of superiority in numbers needs to beat the square root of the ratio of inferiority in firepower.

Essentially, the effectiveness of an army rises proportionately to the square of the number of soldiers, but linearly with fighting ability. So a larger army is potentially a higher priority than increased fighting ability. That is, making the assumptions the laws make. Even Starcraft II violates many of them.

The best scenario I could illustrate this with in Starcraft II that I could imagine was Stalker vs Stalker battles. They have relatively long range and that comes close to fulfilling the assumption that all units can fire at all others at all times.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QqLKogpFmNk?si=MEJamEjq0q9i0KfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/H5mBT3p8riQ?si=sbPCJwEfD6WQL7tL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br/>

References:

[Lanchester’s Law: why small advantages swell in StarCraft – Win Vector LLC](https://win-vector.com/2010/09/17/lanchesters-law-why-small-advantages-swell-in-starcraft/)

[Lanchester's laws - Wikipedia](https://en.wikipedia.org/wiki/Lanchester%27s_laws)
