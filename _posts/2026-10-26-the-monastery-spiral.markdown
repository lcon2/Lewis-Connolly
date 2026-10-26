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
description: "Building a fictional Yorkshire priory with AI leads from architecture and astronomy into medieval daily life and timekeeping. A working sundial and a weight-driven clock raise questions about how monks ordered their days, and what changed when the passing hours became something they heard from a machine in the tower."
tagline: "A virtual Yorkshire priory leads from architecture and astronomy into medieval timekeeping."
og_image: /assets/images/monastery-spiral-layout.png
og_image_width: 1646
og_image_height: 956
image_alt: "An overhead view of the modeled Priory of Saint Cuthbert at Alderbeck, enclosed by walls and woodland."
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

.post article .monastery-image-link {
    display: block;
    min-width: 0;
    border-bottom: 0;
    cursor: zoom-in;
}

.post article .monastery-image-link:focus-visible {
    outline: 2px solid #d1ae7a;
    outline-offset: 4px;
    border-radius: 8px;
}

.post .post-image-lightbox__figure img {
    max-width: 80vw;
    max-height: 80vh;
}

@media (max-width: 600px) {
    .post article .monastery-image-pair {
        grid-template-columns: 1fr;
    }
}
</style>

I wanted to try creating a 3D model of a monastery using AI. I had no end goal in mind. Where should I base it? I wanted it to feel old, and I wanted it to be English-speaking. That meant setting it before the Dissolution of the Monasteries. But I also wanted to avoid even the faintest hint of the upheaval to come, so I settled on 1495. Henry VII was on the throne, the first of the Tudor kings, with the Wars of the Roses still a recent memory.

So, a few prompts later, I had the basic layout.

<a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-layout.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="An overhead view of the modeled Priory of Saint Cuthbert at Alderbeck, enclosed by walls and woodland." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-layout.png' | relative_url }}" alt="An overhead view of the modeled Priory of Saint Cuthbert at Alderbeck, enclosed by walls and woodland." width="1646" height="956" decoding="async" style="display: block; margin: 20px auto; max-width: 100%; height: auto;"></a>

English? They were using Latin, of course, for liturgy and formal study, and for everyday speech they were using late Middle English. The monks may have sounded a bit like this…

"Brother Thomas, hast thou seen the priour this morn? He bade me fetch the key to the Kirk, but I ken not where he has put it."

(The prior, or "priour," was the head of the monastery; "ken" means know, and "kirk" means church.)

There would be an unfamiliar rhythm and pronunciation of words, but with enough context clues, I imagine a modern English speaker would cope.

At first, I considered reconstructing a historical monastery, but soon realized this would mean constantly trying to remain faithful to a real place, its architecture, and its history. I wanted the freedom to create something of my own, while still taking historical accuracy seriously. So, I settled on a fictional priory.

I placed it in a secluded valley on the edge of the North York Moors, near the village of Fadmoor in North Yorkshire. The priory sits low in the landscape, surrounded by wooded hills, farmland, and a small stream. It's an isolated setting, but still connected to the wider world through the nearby village and the roads beyond.

I kept it small, a monastery for about half a dozen monks, and called it the 'Priory of Saint Cuthbert at Alderbeck.' Cuthbert was a seventh-century Northumbrian saint, whose legacy was closely tied to the monasteries of Lindisfarne and Durham. Alderbeck is an invented place-name, drawing on the Old Norse influence still evident in Yorkshire's geography, particularly the word "beck," meaning stream. Similar names occur throughout the region, so it felt historically and geographically authentic. I settled on the exact coordinates 54.29085 N, 0.97773 W.

Now that I had an actual place, I chose a more precise date. I thought the Paschal Triduum would be interesting: Maundy Thursday, Good Friday, and Holy Saturday. So day one would be April 16, 1495 (Julian calendar).

I was able to download the actual topographic data for the region and model it. And then I went down the astronomical rabbit hole. I modeled the sun, moon, and stars for the time and place.

<div class="monastery-image-pair">
    <a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-moon.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="The priory and surrounding valley in daylight, with an arrow marking the moon above the rooftops." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-moon.png' | relative_url }}" alt="The priory and surrounding valley in daylight, with an arrow marking the moon above the rooftops." width="1692" height="930" loading="lazy" decoding="async"></a>
    <a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-sunset.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="The modeled sun at the horizon above the valley and its winding stream." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-sunset.png' | relative_url }}" alt="The modeled sun at the horizon above the valley and its winding stream." width="1692" height="930" loading="lazy" decoding="async"></a>
</div>

I haven't quite got the terrain textures right yet, but I have the sun's timings and angles modeled (sunrise 04:40, sunset 19:24). I also downloaded star data from NASA. In 1495, with almost no artificial light pollution and much less atmospheric pollution, the stars would have been remarkably clear on cloudless nights. And in the evening, with the monks having only candlelight, their eyes would have been much better adapted to the darkness.

<div class="monastery-image-pair">
    <a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-night-sky.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="A field of stars in the modeled night sky above Alderbeck." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-night-sky.png' | relative_url }}" alt="A field of stars in the modeled night sky above Alderbeck." width="2245" height="1198" loading="lazy" decoding="async"></a>
    <a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-constellations.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="The modeled night sky annotated with stars in Ursa Major, Ursa Minor, and Gemini, including Polaris." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-constellations.png' | relative_url }}" alt="The modeled night sky annotated with stars in Ursa Major, Ursa Minor, and Gemini, including Polaris." width="1717" height="916" loading="lazy" decoding="async"></a>
</div>

Once you've walked the space, even virtually, daily life stops being quite so abstract. You start asking practical questions: where do the monks sleep, wash, store food, and keep their tools? Suddenly, you see the need for a shelf here, a bucket there, a room or building you hadn't considered. It's not that you suddenly know more; it's that the space starts asking questions you didn't know to ask.

Of course, there is still the problem of the unknown unknowns. There are almost certainly important aspects of medieval monastic life that haven't occurred to me. Walking around helps reveal what's missing, but only within the limits of what I already know.

Getting the day and night cycle working got me thinking about time. Medieval monasteries ran on strict schedules, with set times for prayer, work, meals, and sleep. But how did the monks keep track? Bells marked the hours, but someone or something had to determine when they should ring. So I went down another rabbit hole, this time into medieval timekeeping.

I wrongly assumed they wouldn't have had mechanical clocks, so I imagined sundials, candles, and monks watching the stars. But their understanding of time was also rather different from ours, more instinctive and flexible. The sun and changing seasons provided a natural framework. Monastic life was carefully ordered, but time wasn't necessarily understood as a series of precise, uniform hours. It was something to be measured, certainly, but also something to be felt.

With this in mind, I started looking into sundials, a familiar feature of medieval life, particularly around churches and monasteries. Some were little more than lines scratched into a south-facing stone wall, with a wooden peg to cast a shadow. Others were purpose-built, carefully carved into stone. So I modeled one that actually works, with the virtual sun casting a shadow that moves across the dial to show the time.

<a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-sundial.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="A stone sundial in the modeled priory garden, with its gnomon casting a shadow across the carved dial." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-sundial.png' | relative_url }}" alt="A stone sundial in the modeled priory garden, with its gnomon casting a shadow across the carved dial." width="2091" height="1173" loading="lazy" decoding="async" style="display: block; margin: 20px auto; max-width: 100%; height: auto;"></a>

But as I went further into my research, I discovered that they might well have had a mechanical clock after all. One of the earliest recorded examples in England was at Dunstable Priory in 1283, more than two centuries before my setting. The details of this clock are unknown, and it isn't even certain that it was mechanical, but the technology developed considerably over the following centuries. By the late fifteenth century, a monastery might have had a clock that needed winding only once a day. These were substantial iron mechanisms, driven by heavy weights that slowly descended, turning a series of gears regulated by an escapement. They didn't necessarily have a clock face or hands. Their purpose was simply to strike a bell at regular intervals, allowing the monks to organize their day without constantly having to keep track of the time themselves.

So, as you can imagine, I set about modeling a historically plausible clock for my bell tower. Although clock faces already existed by 1495, they were far from universal, and for a small priory I thought a simpler arrangement would be more appropriate. The mechanism would sit inside the tower, its descending weights driving an iron hammer to strike a single bell at regular intervals. One of the monks would need to wind it each day and occasionally correct it against the sundial. The bell would mark the passing hours, while the monks could still ring it themselves to summon the community to prayer. I rather like the idea that time would be something the monks heard throughout the monastery, rather than something they could simply look up and read.

<a class="monastery-image-link" href="{{ '/assets/images/monastery-spiral-clock.png' | relative_url }}" data-post-lightbox-trigger data-lightbox-alt="An iron clock mechanism with exposed gears inside the modeled bell tower, beside the bell." aria-haspopup="dialog"><img src="{{ '/assets/images/monastery-spiral-clock.png' | relative_url }}" alt="An iron clock mechanism with exposed gears inside the modeled bell tower, beside the bell." width="1704" height="923" loading="lazy" decoding="async" style="display: block; margin: 20px auto; max-width: 100%; height: auto;"></a>

There is something about this transition that feels rather unnatural to me, as though an older relationship with the sun and seasons was being surrendered to a machine. I assumed there must have been some resistance. But surprisingly, there is little evidence of opposition on these grounds. Monasteries were often among the earliest adopters of mechanical clocks. Perhaps that makes sense. Their lives were already governed by bells and strict routines, and the new technology simply made that discipline easier to maintain.

I started with no particular ambition beyond creating a monastery I could walk around. Somehow, I ended up researching how its inhabitants experienced time. And I suspect there are many more questions to be discovered.

**A Note on the Technical Side**

For anyone curious about how I'm actually doing this, the monastery is being built in Unreal Engine 5, a game engine used to create interactive 3D environments. I'm using OpenAI's Codex to do much of the technical work. I describe what I want in ordinary language. Codex makes changes to the project, and then I explore the results, identify problems, and gradually refine things through further prompts. This includes everything from constructing buildings and furnishing rooms to programming the day and night cycle. My role is largely one of directing, researching, testing, and deciding what to change next.
