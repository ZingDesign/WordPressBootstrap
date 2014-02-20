#!/bin/bash

# Update Foundation

# bower install https://github.com/zurb/bower-foundation.git --allow-root
# echo 'Foundation updated successfully'

# Update Sass Bootstrap

bower install git://github.com/twbs/bootstrap-sass.git --allow-root
echo 'Sass Bootstrap updated successfully'

# Update Node modules
npm install

echo '-------------------------------';
echo 'Theme updated successfully!';
echo '-------------------------------';