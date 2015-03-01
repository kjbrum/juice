![Bower Version](http://img.shields.io/badge/bower-1.0.1-56d7c6.svg?style=flat-square)

# Juice - Mixins for Life

Simplify your life. Juice is a collection of Sass mixins/functions that are used to minimize the work needed to apply styling/properties to elements. Juice is not just a collection to help with cross browser support, so it is best paired with autoprefixer, for the best possible browser compatibility.

## Documentation

http://juicynex.us/juice

## Requirements:

+ Sass Version 3.3

## Features:

#### Mixins

+ Breakpoints
+ Show/Hide Element
+ Single Side Border Radius
+ Single Transform
+ Box Emboss
+ Letterpress
+ Placeholder Color
+ Sizing
+ Hoverer
+ Responsive
+ Triangle
+ Circle
+ Square
+ Position
+ TRBL
+ Image Preload
+ Juice Prefixer

#### Helpers

+ Clearfix
+ Hide Text
+ Centerer
+ Vertical Centerer
+ Coverer
+ Center Block
+ Clean

#### Functions

+ Tint
+ Shade
+ Strip Units
+ Rem Calc
+ Em Calc
+ Random Color
+ Reverse String

## Installation

You can use either bower or just clone the github repo directly.

#### Bower

```bash
$ bower install juice
```

#### Clone/Fork

```bash
$ git clone git@github.com:kjbrum/juice.git
```

## Using the file

Just import the "_juice.scss" file into your main scss file:
```bash
@import "juice";
```

## Compatibility Issues / Conflicts:

##### Bourbon

+ Position (mixin)
+ Single Side Border Radius (mixin)
+ Triangle (mixin)
+ Strip Units (function)

##### Compass

+ Single Side Border Radius (mixin)
+ Transforms (mixin)

## Changelog:

##### 1.0.0:

+ __Placeholders have been turned into argument-less mixins (helpers)__
+ New mixins - Image Preload, show/hide, juice prefixer, clean
+ Global option (variable) to add cross browser prefixes
+ Added a few extra breakpoint presets (mostly -only options)
+ Fixed the breakpoint mixin so that the more complex queries actually work now

## License

Copyright © 2014 [Kyle Brumm](http://kylebrumm.com). Juice is free to use on whatever and may be redistributed under the terms specified in the [license](LICENSE.md).
