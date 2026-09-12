# IT-Wiz website

A responsive five-page redesign built with HTML, CSS, and JavaScript. No installation or build step is required.

## Open locally

Open `index.html` in a browser. Keep all files and the `images` folder together. Alternatively, serve this directory using `python -m http.server 4173` and visit http://localhost:4173.

## Pages

- `index.html`: Home
- `about.html`: About
- `services.html`: All six services, with links to a preselected contact form
- `testimonials.html`: Testimonials carried over from the supplied site
- `contact.html`: Contact details, office map, and email preparation form

## Contact and newsletter

The supplied site did not have a configured contact endpoint or newsletter backend. The redesign uses clearly labeled email handoffs: visitors prepare a message or subscription request, then review and send it in their email application. The website does not send or store submissions, and does not claim that visitors have subscribed. A configured email application is needed; direct email and phone links are also available.

## Upload

Upload the contents of this folder to your host's public website directory, preserving filenames and the images folder. This is a static site and needs no server-side runtime. Google Maps is loaded externally on the Contact page.

## Customize

Shared design rules are in `style.css`; interactions are in `index.js`. Each HTML page contains its own navigation and footer. Update repeated business details consistently across the five pages.

The business details, service descriptions, and anonymous testimonials were retained or adapted from the provided source. Original files were left unchanged.
