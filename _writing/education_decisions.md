---
title: "Curing Yourself of a Broad Education"
description: "Everyone's an expert"
posted_date: 2019-07-27
layout: regular
---

>  _Educate and inform the whole mass of the people... They are the only sure reliance for the preservation of our liberty._
>  -- _Thomas Jefferson_

An increasing number of people always have an opinion about something whether or not they have any knowledge in the field.
We'll see this a lot more in the United States in the upcoming 2020 presidential election.
Almost everyone will come out with seemingly qualified opinions.
For example, many will outright dismiss policies of canceling student loan debt or opening free trade out of what they believe: that canceling debt is a handout or that free trade moves jobs back domestically.
Now, this isn't a discussion of political inefficiency -- the Myth of the Rational Voter [^1] is an exploration of these topics -- but more on a discussion about people that speak from these points.
An article a while back, the Death of Expertise [^2] explained these points rather well: that "Wikipedia fueled masses" have become pseudo-experts in complex fields.
I think it lacked a particular perspective, that the way we educate helps cause this lack of awareness.

## A short example

Most of the readers have attended an introductory class at some point in their lives.
If you haven't, you can head over to a Youtube channel and ingest "infotainment" shows for about an hour where you'll get the same feeling.
These all have a nice satisfaction of self-containment, learning, and progress, but seldom will these mediums highlight the magnitude of what you _don't_ know.
A simple lesson plan in a course or video on linear regressions may give it to you in "three simple steps"

1. Collect a set of points with predictions.
2. Choose a line according to this formula.
3. Compute the correlation coefficient and check if greater than .9.

Fine for the ninety-second tutorial.
Even if we don't discuss any of the theory, there are a whole host of things that are left out, but many after clicking off the video will comfortably use this, citing this description covers most use cases.
If the video or course wanted to accurately display how little you know, it would be structured like the following

0. Choose a set of low dimensionality data points or perform some covariate/regularizer analysis to avoid fitting to noise.
1. Collect a set of well-spaced points with predictions and make sure to analyze and explain outliers.
1.5 Choose a good penalty function and regularization as need be. 
2. Figure out a way to set the parameters such that that value is minimized.
2.5 Check if the parameters weren't overfitted and that the line roughly follows the trend, but not exactly to the data points.
3. Compute the correlation coefficient and a host of other supporting statistics that try to describe how well your linear model. A good correlation coefficient depends on what you are trying to measure.
4. Check the residuals to analyze any patterns.
5. Go back to step 0 if the residuals resemble a pattern.

For those of you who aren't well versed in linear regressions, this list raises a serious set of questions.
What is the noise?
What are well-spaced points?
What is a good correlation coefficient?
For those of you well versed in linear regressions may object to my list outright.
_That_ is the expertise that we should instill even at a base level.
You don't get any of that in the first education; in fact, you are left with more answers than questions.
Everyone who has learned about a simplified topic, but most never move on to the next scale or are even cognizant of the depth to that topic.
Most simply use it incorrectly.

The counter-argument here is that the simple case works most of the time.
That is true, but it is more preferable to have someone who can at least identify some of the time when a straightforward solution simply won't work.
Occam's Razor is, after all, only a general rule.

That is the battle against the Dunning Kruger effect.
People have illusory superiority on a topic when they know a little about the topic.
Even with the topic of Dunning Krueger, that is only half the story if you read through the criticisms and replicability problems of the study [^3].

Instead of taking a survey-based approach, we'll generalize that at least some feeling of superiority is manifested on initial learning.
To be fair, who would watch a video or take a course that makes an inordinate amount of connections to uncovered facts.
It satisfies the psyche.

## Against Our Broad Education
 
This raises the problem of a broad education.
Most of the system is designed entirely on giving a wide overview of a lot of topics.
Overall, this benefits society.
We should live in a world where citizens understand how their government works a little bit than not at all for all subjects.
What I wish the education system taught is a lack of expertise in the most appealing way possible.
This lack of enforcement leads to illusory superiority.
As mentioned earlier, take the people that you know of all education statuses and ask them for their opinions on each of their favorite political topic, and most will give you an impassioned, logical answer that could probably be defeated with about an hour of literature review (unless they are in fact an expert in the area).
Most people won't even admit to googling their opinions to find positives and benefits.
If most people can't put a modicum of effort into researching important things or throw their hands in the area and claim a lack of expertise, how can we make decisions?

In the United States, Thomas Jefferson believed it is vital that we educate every citizen to have a functioning democracy.
Jefferson wrote in a time where the Federalist papers were handed out to people in the streets where they could learn 25% of the political theory within a month's research.
Nowadays, a month may get you into the surface level of how a particular branch of the government works from the past five years.

The broad education should aim at creating citizens who are well versed in life, but aware to some degree of what they lack.
It should be clear how little we know of everything and how one should go about acting when not an expert.
It is easy to tell people that they know nothing, but in doing so destroys all useful conversation and learning.
It devolves into an information arms race.
We can't decide because we don't have all the facts, but we will never have all the facts.

## Making Decisions

What does that mean for the decision-maker?
There is no solution in general.
I've developed my solution for operating under illusory superiority.

As a footnote, one of the many nuances to the Dunning Kruger effect showed that people across different skill levels still have trouble accurately predicting their success [^4].
There is a chance that you will misjudge your ability.
Is there any solution where we can balance our naivety of understanding ideas and the ability to have meaningful dialogue at all?

I believe it is based on a probabilistic approach.
First, you must get very good at underestimating how well-read you are on a topic.
Then I do some combination of the following
* Learn enough about a topic until I am uncomfortable with it or have more questions than answers. This means at the very least reading the Wikipedia page and any associated papers or summaries.
* Look for nuances and counterarguments. This isn't to say that they are credited, re: flat earthers and anti-vaccine advocates, but where ever there is an opinion there is sure to be a countering one -- even though it may not be diametrically opposed.
* Look for experts in the field and see what they say. If all the experts point to an accepted opinion, then the probability is pretty high that opinion is also accepted.
* Link the topic to my existing web of knowledge because facts don't often exist in a vacuum, building a stronger web of contingently linked analogies strengthens the probability that that idea is solid.

Notice that this is long, tedious and boring!
You can't become a real expert in many areas and developing an opinion about a small idea takes a lot of time.
Developing an opinion about a whole framework (i.e. Capitalism vs Communism) requires an analysis for each of the particular parts.
But, each of these steps reduces the uncertainty in learning and decision making.

So why should you trust me?
I don't know why you would.
After all, I'm no expert.

[^1]: <https://www.amazon.com/Myth-Rational-Voter-Democracies-Policies/dp/0691138737>

[^2]: <https://thefederalist.com/2014/01/17/the-death-of-expertise/>

[^3]: <https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect>

[^4]: <https://psycnet.apa.org/doiLanding?doi=10.1037%2F0022-3514.90.1.60>
