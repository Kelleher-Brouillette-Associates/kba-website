# kba-website

Marketing site for **Kelleher Brouillette Associates LLC**, restaurant advisory services for independent Massachusetts restaurants.

Plain static HTML/CSS/JS with no build step. Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us (story, team, why work with us) |
| `services.html` | Our Services overview (all service cards, timeline, pricing principles) |
| `business-assessment.html` | Business Assessment (approach, six review areas, 7-step process, report, phases) |
| `project-tracking.html` | Project Tracking |
| `website-development.html` | Website Development |
| `online-presence.html` | Online Presence build-out |
| `hosting-maintenance.html` | Hosting & Updates |
| `contact.html` | Contact Us (emails + Formspree form) |
| `404.html` | Not-found page |
| `what-we-do.html`, `what-we-offer.html` | Retired; redirect to `business-assessment.html` and `services.html` so old links keep working |

The header's **Services** dropdown lists the five service pages plus the overview. It opens on hover on desktop and on tap in the mobile menu.

Shared styles live in `assets/css/styles.css`, and behavior (mobile nav, Services dropdown, scroll reveals, form submit) is in `assets/js/main.js`. Every page repeats the same header and footer markup, so a change to either one has to be made in all ten content pages. The dropdown's service list lives in that header markup.

## Contact form (Formspree)

The form in `contact.html` posts to Formspree form `mykovwqk` (`https://formspree.io/f/mykovwqk`). Submissions are sent over AJAX and show an in-page thank-you. To point it at a different form, change the form's `action` URL.

## Photos

`assets/img/jesse-brouillette.jpg` and `assets/img/alex-kelleher.jpg` are cropped to 4:5 (640×800). To swap in a new headshot, keep the same aspect ratio and file name.
