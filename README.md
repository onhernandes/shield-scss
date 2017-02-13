# Shield SCSS

The Shield is a little package with the files that I use on my job

## Notes (for me when developing this thing and for who wanna use this)

1. Copy everything inside of `src/` folder and just include `shield.scss` on your main SASS/SCSS file
1. Variables are stored in `_base.scss`
1. For manipulate variables you need to use __functions__ that are stored in `functions/` folder (like get a map value or calculate height)
1. For generating css dinamically or things like that you should use `mixins`, they're stored in `mixins/`
1. For customizing __shield-scss__ with your own font-sizes, media-queries-sizes and etc you should write your things inside `customize/` folder, there you have files like `_base.scss`, `_mixins.scss` and `_functions.scss`, where you can customize as you want to.
1. It isn't a framework, it is a library for helping you creating things with SASS/SCSS. 