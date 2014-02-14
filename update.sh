#!/bin/bash

# Update Foundation
foundation update
echo 'Foundation updated successfully'

# Update Sass Bootstrap
bower install git://github.com/twbs/bootstrap-sass.git --allow-root
echo 'Sass Bootstrap updated successfully'

echo '-------------------------------';
echo 'Theme updated successfully!';
echo '-------------------------------';