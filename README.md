# dealers_choice_pg
KB Creamery
flavors of the month in a list on the main page
click to see the two flavors
click on the flavor to go to the ingredients/product description
customer makes an order by selecting the month


Current issues:
1. setting up and configuring webpack
Current error: WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in main
Module not found: Error: Can't resolve './src' in '/Users/emilyasaro/Flex-workshops/dealers_choice_pg'

Notes: need a mode when using webpack. I used the command in the ./bin folder. We added the command in the package.json

2. Raw text in public/index.js is displaying on localhost:3000 instead of rendering the html. See server.js for main routes

 Notes: using sendFile requires html file
 looking at how I connected html to dist/main.js

3. I tried setting up RESTful routes, but the indiviual file routes are likely not required/exported correctly.
I thought I followed the same steps as previous workshops and assignments, but so far I only see "Cannot GET /"

Notes: In my recipes.js and months.js, I had repeated the route /months and /recipes AND THEN in routes/index.js I also had /months and /recipes -- so my routes had been /api/months/months and api/recipes/recipes
