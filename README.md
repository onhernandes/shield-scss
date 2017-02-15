![shield-base.jpg](Shield SCSS logo)

# Shield SCSS

Shield is a little library with the files that I use on my job/projects

## Notes (for me when developing this thing and for who wanna use this)

1. Functions are written in camelCase, variables and mixins in lower-case separated by -
1. Variables are stored inisde of `functions/*.scss`, each file has your variables that will be used by the whole lib
1. It isn't a framework, it is a library for helping me/you creating things with SASS/SCSS - I prefer SCSS but of course you can use with SASS. 

## How to

### Installing
1. Copy everything inside of `src/` folder and just include `shield.scss` on your main SASS/SCSS file

### Using
1. For __manipulate/get__ variables/values you need to use __@functions__ that are stored in `functions/` folder (like get a map value or calculate height)
1. For generating css dinamically or things like that you should use `mixins`, they're stored in `mixins/`
1. For customizing __shield-scss__ with your own font-sizes, media-queries-sizes and etc you should write your things inside `customize/` folder, there you have files like `_base.scss`, `_mixins.scss` and `_functions.scss`, where you can customize as you want to. Do not worry about overriding an existing map because it will be merged with original map and just the changed' values will be overridden. But the changed variables will be like you settled.
1. `_triggers.scss` are short-hand for mixins(i.e the short-hand for `flex-flow()` is `fx-fw()` or I don't know, change as you want to), they are highly compatible with emmets short-hands so if you use emmet this is easy
1. You can't override existing functions and mixins.

## Why do not I store all of the variables in a separate file?

Just because having to open another file and keep looking at him just for check variables and maps are painful. It is easier just edit one file.