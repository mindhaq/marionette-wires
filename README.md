Marionette Wires - Revisited
============================

An opinionated example application built with Marionette.js. 

## Overview

This is a fork of [Marionette Wires](https://github.com/thejameskyle/marionette-wires), with the following differences:

* Use Marionette v3 instead of v2
* Use webpack instead of browserify and gulp
* No server, just client side

#### New features

* Code splitting of colors routes (open network tab of dev tools and go to colors section)
* Remember last selected book
* Colors pagination is implemented without destructive render 
 

## Quick start

[Clone](http://git-scm.com/docs/git-clone) or [download](https://github.com/blikblum/marionette.routing/archive/master.zip) this repo.

```sh
git clone https://github.com/blikblum/marionette-wires-revisited.git && cd marionette-wires-revisited
```

Make sure [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) are
[installed](http://nodejs.org/download/). Installation of [Yarn](https://yarnpkg.com/) is recommended but not required 

Install
```sh
yarn
//or
npm install
```

Build
```sh
npm run build
```

Once that's done, open up dist/index.html in a browser using a static server.

## Guide

As a general rule, be sure to read through all of the source code yourself and make sure you understand what is happening.

| Directories | Purpose |
| ---:|:--- |
| [api](./api) | Mock api routes |
| [dist](./dist) | Built assets |
| [src](./src) | Source files |
| [test](./test) | Test files |

===

&copy; 2014 James Kyle. Distributed under [ISC license](LICENSE.md).

&copy; 2016 Marionette v3 port + new features by Luiz Américo
