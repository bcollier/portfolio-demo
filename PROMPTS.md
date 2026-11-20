# Prompt Log

This is an example of the prompt log the assignment asks for. It lists what I asked the AI assistant, in order, with a one-line note on what came back and what I changed. Paste your real prompts; you don't need to paste the full code the AI wrote.

---

## Prompt 1: the starter prompt

> Build me a simple personal portfolio website I can host for free on GitHub Pages. Use plain HTML, CSS, and a small amount of JavaScript (no frameworks, no build step), split into index.html, style.css, and script.js. Sections: a sticky nav bar, a short intro with one sentence about what I do, an About section with a few skill tags, a Projects section with one card per project, and a Contact section. Each project card should have an image, a small category label, a title, and three short lines: What, Why it mattered, and Tools. Make it look clean and modern, work well on a phone, and add comments in the code explaining what each part does so a beginner can follow it.
>
> Here are my four projects: (1) my personal website, built with Claude Code, link to the live site and GitHub repo; (2) designing a new undergraduate AI course; (3) sports analytics infrastructure at my company, gAIm Systems; (4) biking from Pittsburgh to Washington, DC with three friends.

**What came back:** a working three-file site with all five sections.
**What I changed:** rewrote every project description in my own words; the AI's versions were generic.

## Prompt 2

> Add a dark mode button in the nav bar that remembers my choice when I reload the page. Explain in comments how it works.

**What came back:** a toggle using a CSS class on the `<html>` tag and `localStorage`.
**What I changed:** replaced the AI's tiny moon icon with the words "Dark mode" / "Light mode" so the button is obvious.

## Prompt 3

> I don't have photos for my projects. Make a simple, flat illustration for each card as an SVG file, one per project, in a consistent style using my accent color.

**What came back:** four SVG sketches in an `images/` folder.
**What I changed:** nothing; good enough for a demo. On your site, real screenshots or photos are better.

## Prompt 4

> Make the project cards fade in as I scroll down, and lift slightly when I hover over them. Keep it subtle.

**What came back:** an IntersectionObserver in script.js plus a hover effect in style.css.

## Prompt 5

> Check the site on a narrow phone screen. Anything that breaks or looks cramped?

**What came back:** the About section's two columns were squeezed and the nav bar wrapped onto two lines on phones. The fix stacks the columns and shrinks the nav below 700px wide.
