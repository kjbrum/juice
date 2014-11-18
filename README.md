Gulp Project Setup
=============================

A starter setup for a gulp project including:
+ JS (lint, minify, and concat)
+ SASS (compile)
+ CSS (minify)
+ Autoprefixer (Vendor Prefixes)
+ Images (image compression)
+ BrowserSync (css injection)

## Requirements

To use this you'll need the following installed:

+ [NodeJS](http://nodejs.org) - use the installer
+ [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp`

## Setup

1. `$ git clone git@github.com:kjbrum/Gulp-Project-Starter-Setup.git` or download it into a directory of your choice.
2. Then run `$ npm install` inside that directory. (This should install all the plugins needed)

## Usage

1. To start the browser syncing and file watching, just run `$ gulp` in the project directory.
2. Folders and file paths can be changed in gulpfile.js

**Note:** For WordPress projects, install Gulp into the theme directory

## Build Task

+ The build task should be ran when your project is ready for production.
+ What does the build task do differently?
  + Compress your images
  + Minify your CSS and not create sourcemaps
  + Not start BrowserSync
