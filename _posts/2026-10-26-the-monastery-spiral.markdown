---
layout: post
title: "The Monastery Spiral"
seo_title: "The Monastery Spiral"
date: 2026-10-26
author: "Lewis Connolly"
author_url: "/about/"
categories:
  - History
  - Technology
description: "An attempt to build an AI-generated monastery becomes a spiral into the details of a fictional Yorkshire priory in 1495. From its name and secluded valley to Middle English, terrain data, and the positions of the sun, moon, and stars, the model draws me further into its imagined world."
tagline: "Building a fictional Yorkshire priory, from its cloister to the stars above."
og_image: /assets/images/monastery-spiral-layout.png
og_image_width: 1646
og_image_height: 956
image_alt: "An overhead view of the modelled Priory of Saint Cuthbert at Alderbeck, enclosed by walls and woodland."
---

{::options smart_quotes="apos,apos,quot,quot" /}

<style>
.post article .monastery-image-pair {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin: 20px 0;
    align-items: start;
}

.post article .monastery-image-pair img {
    width: 100%;
    height: auto;
    margin: 0;
}

@media (max-width: 600px) {
    .post article .monastery-image-pair {
        grid-template-columns: 1fr;
    }
}
</style>

I wanted to try creating a 3D model of a monastery using AI. I had no end goal in mind. Where should I base it? I wanted it to feel old, and I wanted it to be English-speaking. That meant setting it before the Dissolution of the Monasteries. But I also wanted to avoid even the faintest hint of the upheaval to come, so I settled on 1495. Henry VII was on the throne, the first of the Tudor kings, with the Wars of the Roses still a recent memory.

So, a few prompts later, I had the basic layout.

<img src="{{ '/assets/images/monastery-spiral-layout.png' | relative_url }}" alt="An overhead view of the modelled Priory of Saint Cuthbert at Alderbeck, enclosed by walls and woodland." width="1646" height="956" decoding="async" style="display: block; margin: 20px auto; max-width: 100%; height: auto;">

English? They were using Latin, of course, for liturgy and formal study, and for everyday speech they were using late Middle English. The monks may have sounded a bit like this…

"Brother Thomas, hast thou seen the priour this morn? He bade me fetch the key to the Kirk, but I ken not where he has put it."

(The prior, or "priour," was the head of the monastery; "ken" means know, and "kirk" means church.)

There would be an unfamiliar rhythm and pronunciation of words, but with enough context clues, I imagine a modern English speaker would cope.

At first, I considered reconstructing a historical monastery, but soon realized this would mean constantly trying to remain faithful to a real place, its architecture, and its history. I wanted the freedom to create something of my own, while still taking historical accuracy seriously. So, I settled on a fictional priory.

I settled on a secluded valley on the edge of the North York Moors, near the village of Fadmoor in North Yorkshire. The priory sits low in the landscape, surrounded by wooded hills, farmland, and a small stream. It's an isolated setting, but still connected to the wider world through the nearby village and the roads beyond.

I kept it small, a monastery for about half a dozen monks, and called it the 'Priory of Saint Cuthbert at Alderbeck'. Cuthbert was a seventh-century Northumbrian saint, whose legacy was closely tied to the monasteries of Lindisfarne and Durham. Alderbeck is an invented place-name, drawing on the Old Norse influence still evident in Yorkshire's geography, particularly the word "beck," meaning stream. Similar names occur throughout the region, so it felt historically and geographically authentic. I settled on the exact coordinates 54.29085 N, 0.97773 W.

Now that I had an actual place, I settled on a more precise date. I thought the Paschal Triduum would be interesting: Maundy Thursday, Good Friday, and Holy Saturday. So day one would be April 16, 1495 (Julian calendar).

I was able to download the actual topographic data for the region and model it. And then I went down the astronomical rabbit hole. I modeled the sun, moon, and stars for the time and place.

<div class="monastery-image-pair">
    <img src="{{ '/assets/images/monastery-spiral-moon.png' | relative_url }}" alt="The priory and surrounding valley in daylight, with an arrow marking the moon above the rooftops." width="1692" height="930" loading="lazy" decoding="async">
    <img src="{{ '/assets/images/monastery-spiral-sunset.png' | relative_url }}" alt="The modelled sun at the horizon above the valley and its winding stream." width="1692" height="930" loading="lazy" decoding="async">
</div>

I haven't quite got the terrain textures right yet, but I have the sun's timings and angles modeled (sunrise 04:40, sunset 19:24). I also downloaded star data from NASA. In 1495, with almost no artificial light pollution and much less atmospheric pollution, the stars would have been remarkably clear on cloudless nights. And in the evening, with the monks having only candlelight, their eyes would have been much better adapted to the darkness.

<div class="monastery-image-pair">
    <img src="{{ '/assets/images/monastery-spiral-night-sky.png' | relative_url }}" alt="A field of stars in the modelled night sky above Alderbeck." width="2245" height="1198" loading="lazy" decoding="async">
    <img src="{{ '/assets/images/monastery-spiral-constellations.png' | relative_url }}" alt="The modelled night sky annotated with stars in Ursa Major, Ursa Minor, and Gemini, including Polaris." width="1717" height="916" loading="lazy" decoding="async">
</div>
