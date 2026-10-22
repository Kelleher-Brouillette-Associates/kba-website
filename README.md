# kba-website

Marketing site for **Kelleher Brouillette Associates LLC**, restaurant advisory services for independent Massachusetts restaurants.

Plain static HTML/CSS/JS with no build step. Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us (story, team, why work with us) |
| `what-we-do.html` | What We Do (approach, 7-step process, timeline, report) |
| `what-we-offer.html` | What We Offer (assessment areas, PM tracking, digital build, maintenance, pricing principles) |
| `contact.html` | Contact Us (emails + Formspree form) |
| `404.html` | Not-found page |

Shared styles live in `assets/css/styles.css`, and behavior (mobile nav, scroll reveals, form submit) is in `assets/js/main.js`. Every page repeats the same header and footer markup, so a change to either one has to be made in all six HTML files.

## Contact form (Formspree)

In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` with the real ID from your Formspree dashboard:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

Until you do, submitting the form shows a message asking visitors to email Alex or Jesse directly. Once it's set, submissions go to Formspree over AJAX and show an in-page thank-you.

## Photos

`assets/img/jesse-brouillette.jpg` and `assets/img/alex-kelleher.jpg` are cropped to 4:5 (640×800). To swap in a new headshot, keep the same aspect ratio and file name.
