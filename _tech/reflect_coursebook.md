---
title: "Reflecting on the Coursebook"
description: "Reflecting on the new Systems Programming Coursebook"
posted_date: 2019-12-06
layout: regular
---

Recently, I undertook a massive project to rewrite the textbook that we use for the systems programming course at the University of Illinois at Urbana Champaign.
The previous version or as we call it the wikibook [^1] was a wikipedia-like book.
On average it got most things right, but as a college course we needed everything to be right, and a number of improvements to the text needed to be made.
Some of the biggest ones were

* Lack of depth for the later sections
* Lack of verification with other sources
* Lack of variational tones -- the wiki mainly stuck with question answer format.

As such, we embarked on the long, tedious journey of turning our series of notes into something resembling a textbook.

## Origin Story

One of the original goals we wanted was a printable version of the book usually in a PDF form, but also to keep a markdown and HTML version somewhere for ease and accessibility.
The only way at the time that we could do that was with LaTeX and pandoc.
We'd use the LaTeX to build PDFs and pandoc to convert the source to markdown and HTML versions.
Latex was chosen because the pdf semantics are better than pure markdown -- try left aligning an image without any extensions!
Pandoc is a wonderful tool to convert from various mark{up,down} formats.

The first part of the story was a mechanical conversion from markdown to LaTeX, fixing the markdown parsing errors along the way.
Then came one of the biggest hurdles, transforming that Question Answer (QA) format into a storytelling format.
Stories are one of the best ways of learning and textbooks are no different.
Although, they are more dry, the message tends to stick better than getting a list of facts to memorize.
Also in order to keep the benefit of redundant QA for retention, we left in active "spot the problem questions" and redundantly explained concepts.

Once all the chapters were rewritten in a rough new format, we had to actually compile the documents in all the different versions.
After setting up some base PDF builds, I set up a markdown version which synced with the course website [^2].
Some time later, we developed per-chapter builds as well, so students could download the latest and greatest version of each chapter as it was getting fresh pressed.
Being programmers, there were a few checks that we included like making sure each image has a caption.
There were a few checks that we didn't include -- namely spell and grammar check.
There weren't enough high-quality tools that gave us meaningful feedback to make it worth implementing into our pipeline, so we made do without it.
We also couldn't do anything in general like code compiling and/or pdf validation because many of our code examples were broken up into chunks and pdf are hard to "validate" -- pdflatex almost surely throughs errors even if the resulting pdf is fine.

## Researching

Researching was one of my favorites and also the longest running part of the book.
While reading was enlightening, researching the far depths of systems makes things colorful.
Admittedly, I am more interested in data, algorithms, and the theory side of computer science, but there were many important concepts whose theoretical angles haven't been explored.

Some of the parts included a theoretical discussion of how memory allocators are placed [^3], sketches of proofs for dining philosophers [^4], and queueing theory [^5].
The theoretical aspects give just enough intuition for theory-oriented readers to understand the concepts.
Researching them was also an archeological hunt.
Having to deep dive into ancient research papers and results and translate many of them to a single, easy to explain format meant understanding the underlying material very well.
Some researching were tales of interesting "nerd hunts", anything from figuring out why a kilobyte was actually 1024 Bytes (not 1000 Bytes) to why network byte-ordering is big endian.

Researching obviously takes a lot of time, understanding, and referencing, but it is well worth it to make sure that the information provided is complete, correct, and explorable to anyone who has an inkling to read more.
Having most of the resources be freely available online texts was also a goal.
The fundamental goal of the coursebook and wikibook as to be free and available to all, not just those with an Elsevier subscription.

## Images

Something I learned about myself in the generation of the book is I really like making figures!
Figures are, I believe, the best way to learn, and the less words the better.
We understand so much through images, but the original wikibook had a lack of informational and usable images (in the copyright sense).
As a fix, I went through and redrew and added a host of figures.

Everything from splitting and coalescing memory blocks, writing files on filesystems, and visualizing deadlock in dining philosophers has a diagram.
These diagrams take inspiration from the Ikea manual mindset, where the minimal number of pictures with little to no words to convey the flow of time, action, and meaning.

In addition to just picking a good design for images, designing figures really got my creative side going.
Albeit they aren't the most creative images on the web, they are a nice starting point for creating and maintaining graphic designs and gaining proficiency with the tools.
Incorporating constraints like contrast, color blindness, and aesthetics was a refreshing learning experience.
There is still I have to learn about composition, construction, and other requirements, but I hope I can pick those up on my travels.

## Polish Polish Polish

Finally, we need to polish the book as much as possible.
All of the headers on the PDF and HTML builds need to look spotless.
We implemented custom title pages, chapter headers, and pretty much every other sort of PDF style to give the book the appearance of being fully fleshed out.
In the HTML version, there are highlighted man page links, the references to citations are hyperlinked, and the CSS doesn't look too bad either.

There have been numerous addition of transition sentences, word flow considerations, and sectioning to make the reading easier.
The images all have a caption and any ascii art or code samples are commented through.
Although we are system programmers, we still like our terminals to be pretty colors.

## Epilogue

This is far from an actual ending.
The coursebook is still very much under development with a laundry list of issues and features that need to be added.
As with anything in life, it is an incomplete project that needs constant updates [^6].
If you'd like to help out feel free to join the grind!
I'd say it's worth it to keep high-quality knowledge free and available for the world.

## Footnotes

[^1]: [Wikibook](https://github.com/angrave/SystemProgramming/wiki)
[^2]: [Course Website](http://cs241.cs.illinois.edu/coursebook)
[^3]: [Theoretical Memory Allocators](http://cs241.cs.illinois.edu/coursebook/Malloc#intro-to-allocating) (Scroll down to pros and cons)
[^4]: [Dining Philosophers](cs241.cs.illinois.edu/coursebook/Deadlock#viable-solutions)
[^5]: [Queueing Theory](cs241.cs.illinois.edu/coursebook/Deadlock#viable-solutions)
[^6]: [Coursebook Github](https://github.com/illinois-cs241/coursebook)
