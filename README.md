# Derek Mendez — Personal Portfolio Website
### BCS377 Project 1 | Web Design Document

**Live Site:** https://drkmz.github.io/derek-portfolio
**GitHub Repo:** https://github.com/drkmz/derek-portfolio

---

## Project Overview

This is a personal portfolio website built completely from scratch using HTML, CSS, and JavaScript. The goal is to professionally represent me as a web developer and IT specialist by showcasing my completed client work, in-progress projects, background, and skills. The site is designed to be clean, modern, and minimalist — letting the work speak for itself without unnecessary clutter.

The project is divided into three parts: Content, Design, and Interactivity.

---

## Part 1: Content

**1. What is your full name as you want it displayed professionally?**
Derek Mendez. Yes, I want a professional font.

**2. What is the purpose of your portfolio website?**
I want to display the two websites I created. Talk about my experience. My education. And my passion for websites. And my other projects.

**3. Who is the target audience?**
Employers for an IT or Website Developer Job. Or a freelance web dev client.

**4. What skills do you want to highlight?**
My experience with websites. I have sold two websites to small businesses.

**5. What projects or work will you showcase?**
- [it.sportsplusli.com](http://it.sportsplusli.com) — Freelance WordPress site + IT setup for a local athletics business
- [fgany.com](http://fgany.com) — 10+ page WordPress site built and maintained for a gymnastics academy
- SmartPlate *(In Progress)* — A nutrition app with recipe search, AI chatbot meal planning, and FDC API nutrition lookup
- FugitiveFinder *(In Progress)* — A Java/JavaFX app that pulls from the FBI Wanted API to visualize criminal data

**6. How will you describe yourself in a short professional bio?**
I'm a web developer and IT specialist from New York. I genuinely enjoy building websites and figuring out how to make things work well online. It started with freelance work for small businesses and grew from there. I've built and sold websites to two local businesses on Long Island, handling everything from the site design to setting up their email systems and IT accounts. Right now I'm finishing my Bachelor's at Farmingdale State College and building two personal projects from scratch.

**7. What pages will your site include?**
The home page will have my projects, so I do not want a dedicated projects page that is separate. I will put Projects in the nav bar and it will scroll to that section. I will make an About page based off my resume. I will also make a Contact page.

**8. What is your career goal or desired role?**
Be a full-time website developer.

**9. What technologies or tools do you have experience with?**
HTML, CSS, JavaScript, WordPress, PHP, SQL, Java

**10. What achievements or experiences are worth highlighting?**
Selling 2 websites to companies.

**11. What call-to-action should visitors take?**
I don't want a call to action button.

**12. Will you include a resume? In what format?**
No. I looked at many portfolios for inspiration and they don't have call to action buttons or a resume. I think this makes sense for making a modern portfolio that efficiently shows my work.

**13. What social or professional links will you include?**
- GitHub: [github.com/drkmz](https://github.com/drkmz)
- LinkedIn: [linkedin.com/in/derekmendez](https://www.linkedin.com/in/derekmendez)

---

## Part 2: Design

**1. What overall style will best represent you?**
Minimalist with modern website best practices.

**2. What color scheme will you use and why?**
White and dark blue. I use these colors with my resume, and I like them — they are soft on the eyes but show power.

**3. What fonts will you use for headings and body text?**
I will look for one that is professional and matches the aesthetic of a portfolio. I landed on DM Sans for headings and Outfit for body text, both from Google Fonts. DM Sans is clean, modern, and slightly geometric which suits a tech/web dev portfolio without looking too generic.

**4. How will your design reflect your personality or field?**
It needs to look modern because I am a website developer. This reflects my skills and shows that I understand best practices, which is the main skill I want to demonstrate.

**5. What layout will your homepage follow?**
The homepage takes up the first part of the screen and displays my name and a short description. When you scroll down you get to the projects section, which is the most important part of my work.

**6. How will you organize project sections visually?**
They will be separated by spacing to give the sections room to breathe, then a header to announce the section. Each project is a full-width row with an image on one side and the project details on the other, alternating left and right. All four projects are contained in a bordered box to keep them compact.

**7. Will the site be mobile-friendly? How will you ensure responsiveness?**
Yes, for the extra credit. CSS Flexbox and Grid handle responsive layouts. Media queries collapse the 2-column grid to a single column, adjust font sizes, and stack navigation for mobile. The hamburger menu replaces the nav links on smaller screens.

**8. What visual hierarchy will guide visitors?**
Name, Title, Navigation, Featured Work, About, Contact. The largest, boldest element is my name. Section headers guide each content block.

**9. How will consistency be maintained across pages?**
The CSS stylesheet has variables set to stick to the color palette, fonts, and spacing. The nav bar and footer are duplicated and look the same on all pages.

**10. How will accessibility be considered?**
High contrast between dark navy text and white background. Minimum 16px body font. Alt text on all images. Semantic HTML elements throughout (`<nav>`, `<section>`, `<footer>`).

**11. Will you use icons, images, or illustrations? Why?**
I will generate icons using inline SVGs that draw them directly in the HTML. I like this method because it is easier than getting an image, scaling it down, and trying to manipulate it to fit properly with flexbox. Practically it is faster than loading images and easier to scale. I will also take screenshots of my completed websites as a sneak preview in the project cards.

**12. What portfolio websites inspired your design?**
[justinchi.me](https://www.justinchi.me/) — It has a good, simplistic, and confident feel that presents work without distraction.

---

## Part 3: Interactivity

**1. What interactive elements will your site include?**
A hamburger menu for mobile, hover effects on the project section, and active link highlighting in the navigation bar.

**2. Will your site include a contact form? How will it work?**
Yes, a simple contact form on the Contact page with fields for Name, Email, and Message.

**3. What JavaScript features will you implement?**
- Nav scroll effect — nav bar background fades in as the user scrolls down
- Hamburger menu toggle — opens a full-screen mobile nav, locks scroll, animates lines into an X
- Smooth scrolling — anchor links like "View Work" and "Projects" scroll down instead of jumping
- Scroll-triggered fade-in animations — project rows fade up into view using IntersectionObserver
- Contact form validation — checks fields in real time, shows inline errors, shows success message on submit

**4. How will users receive feedback from interactions?**
Hover states give immediate visual feedback on buttons and cards. The contact form will show inline error messages for invalid inputs and a confirmation message upon successful submission. Nav links will highlight to show the current section.

**5. How does interactivity improve the user experience?**
Interactivity makes the site feel polished and responsive to the user. Smooth scrolling feels modern. Animations draw attention to content as it enters the viewport without being distracting. Form validation prevents user frustration. Together, these details make the site go from a simple page to a real, professional, modern website.

---

## Target Audience

The primary audience is employers hiring for web development or IT roles, and small business owners or individuals looking for a freelance web developer. The site should feel approachable to non-technical clients while still demonstrating technical credibility to employers.

---

## Content Strategy

The content is organized around showing rather than telling. Instead of listing skills in a bullet list and hoping someone believes them, the site leads with real work — two live client websites that a visitor can click and explore themselves. The bio is short and written in first person to feel human, not corporate. In-progress projects are included because they show active growth, not just past work.

---

## Information Organization

| Page | Purpose |
|------|---------|
| Home (index.html) | Hero intro + full project list with images |
| About (pages/about.html) | Bio, work experience, education, skills |
| Contact (pages/contact.html) | Contact form + social links |

Projects nav link scrolls to the projects section on the home page rather than navigating to a separate page.

---

## Visual Design

### Color Palette

https://coolors.co/0d1f3c-4a7fc1-c8d9f0-f8f9fc-eef1f7-3d4f68-8496af

### Typography

- **Headings:** DM Sans (Google Fonts)
- **Body:** Outfit (Google Fonts)

### Hand-drawn wireframe:
I have always done handrawn drafts. I find it easiest because I get to be the most creative by putting my ideas
straight onto paper without needing to be a master at figma.
https://drive.google.com/file/d/1__NWQ31wBrfOAOU3KsrnIw01CTWTSgql/view?usp=sharing

---

## Interaction / Functionality

| Feature | Implementation |
|---------|---------------|
| Nav scroll effect | JS scroll listener adds `.scrolled` class at 40px, CSS transitions background |
| Hamburger menu | JS toggles `.open` class, CSS animates spans into X, locks body scroll |
| Smooth scrolling | JS intercepts `href` anchor clicks, uses `scrollIntoView({ behavior: 'smooth' })` |
| Scroll fade-in | `IntersectionObserver` watches `.reveal` and `.project-row`, adds `.visible` class |
| Form validation | JS checks empty fields and email regex on submit, shows inline error spans |

---

## Technical Overview

### File Structure

```
derek-portfolio/
├── index.html          # Home page with hero + projects
├── css/
│   └── style.css       # All styles, CSS variables, responsive
├── js/
│   └── main.js         # All JavaScript features
├── images/
│   ├── fgany.png       # Screenshot of Farmingdale Gymnastics site
│   └── sportsplusli.png # Screenshot of SportsPlusLI site
├── pages/
│   ├── about.html      # About page
│   └── contact.html    # Contact page
└── README.md           # This file
```

### Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Google Fonts**

### External Resources

- [Google Fonts — DM Sans](https://fonts.google.com/specimen/DM+Sans)
- [Google Fonts — Outfit](https://fonts.google.com/specimen/Outfit)
- [GitHub Pages Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [MDN IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [justinchi.me](https://www.justinchi.me/) — design inspiration

---

## Timeline / Project Milestones

| Milestone | Status |
|-----------|--------|
| Answer all content, design, and interactivity questions | Done |
| Set up GitHub repo and GitHub Pages | Done |
| Build HTML structure for all pages | Done |
| Write CSS — variables, layout, nav, hero, footer | Done |
| Build project section with images and placeholders | Done |
| Write JavaScript — all 5 features | Done |
| Update About page — first person, natural tone | Done |
| Responsive design and mobile hamburger menu | Done |
| Final review and code commenting | Done |
| Submit GitHub repo + live URL to Brightspace | Pending |
