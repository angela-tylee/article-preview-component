# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge / Screenshot](#the-challenge--screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)


## Overview

### The challenge / Screenshot


### Links
- Solution URL: https://github.com/angela-tylee/article-preview-component
- Live Site URL: https://angela-tylee.github.io/article-preview-component/

## My process

### Built with

- HTML / CSS
  - Flexbox
  - CSS Grid
- JavaScript

### What I learned

- HTML / CSS
  - Change the color of the svg element with CSS.
  - Use `overflow: hidden` to ensure images is wrapped in the component's radius border.
  - About "Sharing Pop-up"
    - Use `position: fixed` to override `overflow: hidden` 
    - Use `transform: translate()` to position the sharing pop-up modal
    - Use pseudo element and `transform: rotate()` to create the tail of the sharing pop-up modal
  - Use `@keyframes` to create CSS animation
- JavaScript
  - Use `window.matchMedia` and `MediaQueryList.matches` to manipulate elements under certain screen size (`@media query`).

### Continued development

- Add transitions / animations to the social links.
- Optimize the naming of CSS selectors.
- Find ways to simplify the HTML / CSS structure.