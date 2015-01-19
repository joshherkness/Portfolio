---
layout: post
title: Write Markdown
---

HTML header: <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>


# Write Markdown Syntax
<hr>

## MathJax
Add this snippet of code to the top of your document in order to use MathJax.

```html
HTML header: <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
```

After doing this, you can use commands like `$$A_i = \sqrt{10}$$` to display:

$$A_i = \sqrt{10}$$
	
<center>or</center>

$$\theta = \int_1^\infty{f(x)}$$

Some common math symbols are

- `\sum` for $\sum$
- `\int_0^{10}` for $\int_0^{10}$
- `\omega` for $\omega$
- `\sin{\theta}` for $\sin{\theta}$
- `\infty` or `-\infty` for $\infty$ or $-\infty$
- `x \cdot y` for $x \cdot y$

## Definitions
You can create a **definition** using the format:

```
Apple
:  A fruit
```
Which results in:

**Apple**
:  A fruit

## Quotes
> This would be a quote
>>We can Inline quotes like this..

> And stuff here
