# Frontend Mentor - Browser Extensions Manager UI Solution

This is a solution to the [Browser Extensions Manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [What I learned](#what-i-learned)
  * [Continued development](#continued-development)
  * [Useful resources](#useful-resources)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

* Toggle extensions between active and inactive states
* Filter extensions by "All", "Active", and "Inactive"
* Remove extensions from the list
* Restore removed extensions from a trash section
* Select and persist their preferred color theme (light/dark)
* View a responsive layout on different screen sizes
* See hover and focus states for all interactive elements

### Screenshot
Mobile View (Light)

![mobile-view-light](/screenshots/mobile-view-light.png)

Mobile View (Dark)

![mobile-view-dark](/screenshots/mobile-view-dark.png)

Tablet View

![tablet-view](/screenshots/tablet-view.png)

Desktop View

![Desktop View](/screenshots/desktop-view.png)

### Links

* **Solution URL**: [Solution](https://github.com/BANKOLEDO/browser-extensions-manager-app/)
* **Live Site URL**: [Live Site](https://browser-extensions-manager-app-ola.vercel.app/)

---

## My process

### Built with

* Semantic HTML5 markup
* Tailwind CSS
* CSS Grid and Flexbox
* React + Vite
* LocalStorage for theme persistence
* Mobile-first workflow
* Component-based structure

### What I learned

* How to persist dark mode with `localStorage` and `useEffect`
* Using Tailwind's `focus-visible` utility for accessibility
* Managing local UI state vs. global filter state in React
* Using `.map()` and conditional rendering for trash functionality
* Building a custom toggle switch that is keyboard accessible

#### Example toggle logic:

```js
const handleToggle = () => {
  setLocalActive(!localActive);
  setTimeout(() => {
    onToggle(); // update parent
  }, 500);
};
```

### Continued development

I plan to:

* Refactor the app to use `useReducer` for state management
* Add unit tests with React Testing Library

### Useful resources

* [Tailwind Focus Ring Guide](https://tailwindcss.com/docs/ring-width) — Helped me implement accessible focus states.
* [Frontend Mentor Discord](https://discord.gg/frontendmentor) — Great for feedback and insights.
* [CSS Tricks - Responsive Layouts](https://css-tricks.com/snippets/css/complete-guide-grid/) — Helped with the grid setup for responsive layouts.

---

## Author

* Frontend Mentor – [@dev-olabanks](https://www.frontendmentor.io/profile/BANKOLEDO)
* Twitter – [@dev\_olabanks](https://twitter.com/dev_olabanks)

---

## Acknowledgments

Special thanks to the Frontend Mentor community for constant inspiration.
