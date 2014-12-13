![Bower Version](http://img.shields.io/badge/bower-0.0.8-56d7c6.svg?style=flat-square)

# Juice - Mixins for Life

Simplify your life. Juice is a collection of SASS mixins/functions/placeholders that are used to minimize the work needed to apply styling/properties to elements. Juice is not just a collection to help with cross browser support, so it is best paired with autoprefixer, for the best possible browser compatability.

## Documentation

http://juicynex.us/juice

## Requirements:

+ Sass Version 3.3

## Compatibility Issues / Conflicts:

##### Bourbon

+ Position (mixin)
+ Single Side Border Radius (mixin)
+ Triangle (mixin)
+ Strip Units (function)

##### Compass

+ Single Side Border Radius (mixin)
+ Transforms (mixin)

## Features:

#### Mixins

+ Breakpoints
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

#### Placeholders

+ Clearfix
+ Hide Text
+ Centerer
+ Vertical Centerer
+ Coverer
+ Center Block

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

## To-do:

+ Cut down on the code for triangle mixin (Use sass maps for "trbl" and translate direction, maybe direction and border direction also) (add in the option to make a border and triangle shape)
+ Turn placeholders into argument-less mixins?

## License

Copyright © 2014 [Kyle Brumm](http://kylebrumm.com). Juice is free to use on whatever and may be redistributed under the terms specified in the [license](LICENSE.md).
