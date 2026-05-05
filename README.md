Project 3 - JavaScript integration
Description
This project focuses on Edward Snowden and presents a structured overview of his actions and its impact. I was inspired to create this website since I recently did an informative essay about Snowden in my other ICT class. The research, ideas, and timeline is taken from that essay. The website includes a main page explaining the debate around whether he is a whistleblower or a traitor, along with a timeline page that outlines key events from 2012 to the present.
JavaScript Update
This update adds lightweight interactivity to the site using a single, minimal main.js file. The goal was to keep JavaScript usage to around 10% of the codebase, letting CSS handle the visual heavy lifting. The following features were added:

Days counter — animates from 0 up to the real number of days since the first NSA leak on June 5, 2013
Redacted text reveal — clicking any blacked-out text toggles it between hidden and revealed
Theme toggle — switches between the default dark classified view and a light declassified view
Back to top button — appears after scrolling down and smoothly returns to the top of the page

Features from previous versions such as the vote system, cursor trail, sound toggle, and typewriter effect were removed to keep the codebase clean and focused.
What I Learned

How to structure a webpage using semantic HTML elements like header, nav, main, section, and footer
How to create navigation between multiple pages using relative links
How to organize information clearly using headings, paragraphs, lists, and tables
How to fix HTML validation warnings and follow modern HTML5 standards
How to write minimal, focused JavaScript that only does what is necessary
How Linux file systems are case-sensitive and how that affects file references in HTML

Challenges

Understanding and fixing validation warnings related to obsolete HTML attributes (no css)
Adjusting table formatting without using deprecated attributes
Making sure file paths for links and images worked correctly across pages
Debugging why main.js would not load due to a filename casing issue (Main.JS vs main.js) on Linux
