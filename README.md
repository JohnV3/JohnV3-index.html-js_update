Project 3 - JavaScript Implementation

This update adds lightweight interactivity to the Snowden website using a single minimal main.js file. The goal was to keep JavaScript usage to around 10% of the codebase, letting the existing CSS handle the visual heavy lifting. Four core features were implemented: a days counter that animates up to the real number of days since the NSA leak, a redacted text reveal that toggles hidden text on click, a dark/light theme toggle, and a back to top button that appears on scroll. Features from earlier versions such as the vote system, cursor trail, sound toggle, and typewriter effect were stripped out to keep the code clean and focused. A key debugging challenge involved a Linux case-sensitivity issue where the file was named Main.JS instead of main.js, which caused the browser to refuse to load the script entirely.
What I Learned

How to write minimal JavaScript that only does what is necessary
How DOMContentLoaded ensures elements exist before the script runs
How to use classList.toggle to switch CSS classes on and off with a single click
How setInterval and Math.min work together to animate a counting number
How IntersectionObserver and getBoundingClientRect control scroll-based visibility
How Linux file systems are fully case-sensitive and how that affects script loading

Challenges

Trimming the JavaScript down from a large feature-heavy file to just the essentials
Diagnosing why main.js refused to load due to the filename being saved as Main.JS
Understanding why the ::after pseudo-element on .redacted was blocking click events and fixing it with pointer-events: none
Resolving a Git merge conflict when pushing to a repository that already had commits
