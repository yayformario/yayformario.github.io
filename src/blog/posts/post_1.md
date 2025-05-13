---
websiteTitle: yayformar.io
title: Post 1
author: Mario Huerta
date: 2025-04-29
description: None
layout: blogTemplate.njk
---
# Notes on Github markdown

## Headers
Can use 1~6 "#" syombols before the heading text

# First level
## Second level
### Third level
#### Fourth level
##### Fifth level
###### Sixth level

When you use two or more headings, github automatically generates a table of contents that you can access by clicking the drowdown within the file header.
Each title is listed in the table of contents.

## Styling text:

### Italic
This is an *Italic* example. _nice_

### Bold
This is a **bold** example. __nice__

### Strikethrough
Time for a ~~cheugy~~ strighthrough

### Bold and nested italic
**This text is _extremely_ important**

### All Bold and Italic
All you need ***is tripple stars***

### Superscript
Runtime: O(n<sup>2</sup>)

### Subscript
By default, comp sci assumes log<sub>2</sub>(n) rather than log<sub>10</sub>(n) because of binary

### Underline
Underlining is a bit <ins> unintuitive </ins> considering how common it is

### Quotes
Quoting using an arrow
> this is the quote

### Quoting code
Example of code:
```
maxValue = max(maxValue + n, 0)
```

### color codes
`#0969DA`

`rgb(9, 105, 218)`

`hsl(212, 92%, 45%)`	

### Link examples
This site was built using [GitHub Pages](https://pages.github.com/).

# Second section
### anchors
Link to first section: [Link Text] (#Notes-on-Github-markdown)

### Screenshot
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

### Creating a table
| Example | table | 
| - | - |
| hopefully | this works |
| guess it's not | a table? |
