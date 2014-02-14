#!/bin/bash

# Install Bower and the Grunt CLI
npm install -g bower grunt-cli
echo 'Bower and Grunt CLI installed successfully'

# Install Foundation
gem install foundation
foundation new foundation
echo 'Foundation installed successfully'

# Install Sass Bootstrap
bower install git://github.com/twbs/bootstrap-sass.git --allow-root
echo 'Sass Bootstrap installed successfully'

# Install Node modules
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-watch --save-dev
echo 'Node modules installed successfully'

# Install Compass
if ! gem list compass -i; then
    gem update --system
    gem install compass
    echo 'Compass installed'
fi

echo '-------------------------------';
echo 'Theme initialised successfully!';
echo '-------------------------------';