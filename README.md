![Shield SCSS logo](shield-base.jpg)

# Shield SCSS - ARCHIVED

Shield is a little library with the files that I use on my job/projects

## How to

### Installing
1. Copy everything inside of `src/` folder and just include `shield.scss` on your main SASS/SCSS file

### Using
1. For __manipulate/get__ variables/values you need to use __@functions__ that are stored in `functions/` folder (like get a map value or calculate height)
1. For generating css dinamically or things like that you should use `mixins`, they're stored in `mixins/`
1. For customizing __shield-scss__ with your own font-sizes, media-queries-sizes and etc you should write your things in `_base.scss`, `_mixins.scss` and `_functions.scss`, where you can customize as you want to. Do not worry about overriding an existing map because it will be merged with original map and just the changed' values will be overridden. But the changed variables will be like you settled.
1. `_triggers.scss` are short-hand for mixins(i.e the short-hand for `flex-flow()` is `fx-fw()` or I don't know, change as you want to), they are highly compatible with emmets short-hands so if you use emmet this is easy
1. You can't override existing functions and mixins.

## Problems, issues, questions...

Whatever, just open an [issue](https://github.com/mhernandes/shield-scss/issues) and let's talk bro.

## Why do not I store all of the variables in a separate file?

Just because having to open another file and keep looking at him just for check variables and maps are painful. It is easier just edit one file.
