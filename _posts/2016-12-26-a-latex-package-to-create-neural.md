---
layout: post
title: A Latex package to create neural network figures easily
date: '2016-12-26T17:48:00.002Z'
author: Xavi
tags:
- Coding
modified_time: '2016-12-26T17:48:55.477Z'
---

I've created a simple Latex sty package to generate neural network figures using tikz.

You can see the [github code of drawnn](https://github.com/xavigonzalvo/drawnn).

Simple usage:

```latex
\usepackage{drawnn}
...
\begin{document}
  \drawnn{3}{1}{5,5}{}
\end{document}
```

That will produce a simple neural network with 3 inputs, 1 output and two layers
of 5 nodes each.

{: style="text-align:center"}
![example]({{ "/assets/posts/images/drawnn_example.jpg" | absolute_url }})
