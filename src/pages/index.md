---
layout: "../layouts/docs.astro"
title: Quick Setup
description: Just a demo project to showcase layout and design of markdown or blog post
---

<!-- ## learn about why it I made this ?

> Reactive Sidebar implementation, with Intersection Observer is not easy. but yeah Now you can use this component without caring about the implementation, I tried my best to provide flexibility, to style them as well So have fun, and give me feedback! -->

## Quick Setup

&nbsp;&nbsp;&nbsp;Installation
```shell
    npm install reactive-astro-sidebar
```
Now, import it,
```jsx
---
import ReactiveSidebar from "reactive-astro-sidebar"
// define three classes which are likly you want 
const { content } =Astro.props;
const headers = content.astro.headers;

const staticClass = "pl-2";
const activeClass = "text-white";
const inActiveClass = "text-slate-300";
---
<body>
	<section id="left-sidebar">...</section>
	<main id="main-content"><slot /></main>
	<aside
		id="right-sidebar-content-container" class=""
	>
		<h1 id="content-container" class="text-white text-lg leading-3">
			On this page
		</h1>
		<RightSidebar {headers} {staticClass} {activeClass} {inActiveClass} />
	</aside>
</body>
```

## Features 

- you get highlighting, and a good User Experience
- Implemented with [Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) So, likly much ***better performance***
- You can style, most of things using **CSS classes**  or directly with [tailwindcss](https://tailwindcss.com)
- You can make complex, sidebar as well like this [one](/comlpex)

## Params
Let see the parameters that you can pass to this component,

### Essential ones
without these parameters it is likly not going to work, because they are the basis of this component
There are these 3 params which are essential to pass

1. [staticClass](#staticClass)
1. [activeClass](#activeClass)
1. [inActiveClass](#inActiveClass)

#### staticClass
Simply default classes, which are not going to removed

Note, Not apply same **classes** in staticClass and inActiveClass 

you can a pass `string` value
```jsx
const staticClass = "w-32 text-sm"
```
Or you can pass a complete Object specifying
```jsx
/* respective static class
    is going to apply on the 
    sidebar Item linking to h Element 
    in main content
*/
const staticClass = {
    h2: 'text-slate-100', 
    h3: 'text-slate-200',
    h4: 'text-slate-300',
}
```

#### activeClass
Simply going to apply when respective linked heading Element is going to come in view,

you can a pass `string` value
```jsx
const activeClass = "text-white"
```
Or you can pass a complete Object specifying
```jsx
/* respective active class
    is going to apply on the 
    sidebar Item linking to h Element 
    in main content
*/
const activeClass = {
    h2: 'text-slate-100', 
    h3: 'text-slate-200',
    h4: 'text-slate-300',
}
```

#### inActiveClass 
Simply going to apply when respective linked heading Element is going to exit the view,

you can a pass `string` value
```jsx
const inActiveClass = "text-white"
```
Or you can pass a complete Object specifying
```jsx
/* respective inActiveClass
    is going to apply on the 
    sidebar Item linking to h Element 
    in main content
*/
const inActiveClass = {
    h2: 'text-slate-100', 
    h3: 'text-slate-200',
    h4: 'text-slate-300',
}
```

### Optional
these parameters are likly improve what you already have implemented
There are these 3 params which are essential to pass

1. [linkClass](#linkClass)
1. [groupClass](#groupClass)
1. [activeGroupClass](#activeGroupClass)
1. [inActiveGroupClass](#inActiveGroupClass)
1. [activeLiClass](#activeLiClass)
1. [inActiveLiClass](#inActiveLiClass)

#### linkClass
Class exposed to apply class on link element present in sidebar, 

#### groupClass
Static Class which you want to apply on group, elements itn't awesome,

#### activeGroupClass
You can really use it now!
```jsx
// this is like apply over a collective group of elements,
const activeGroupClass = "single-class"
```

#### inActiveGroupClass
You can really use it now!
```jsx
// this is like apply over a collective group of elements,
const inActiveGroupClass = "single-class"
```

#### activeLiClass
Not, supposed to be used yet because it is in development

Even if you want to use it in your project then, go ahead,
```jsx
// yeah mostly not needed but it's a wrapper over both,
const activeLiClass = "single-class"
```

#### inActiveLiClass
Not, supposed to be used yet because it is in development

Even if you want to use it in your project then, go ahead,
```jsx
// yeah mostly not needed but it's a wrapper over both,
const inActiveClass = "single-class"
```
