#!/bin/bash

# Functions ==============================================

# return 1 if global command line program installed, else 0
# example
# echo "node: $(program_is_installed node)"
function program_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  type $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  # echo "$return_"
}

# return 1 if local npm package is installed at ./node_modules, else 0
# example
# echo "gruntacular : $(npm_package_is_installed gruntacular)"
function npm_package_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  ls node_modules | grep $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  # echo "$return_"
  #return local return_
}

# display a message in red with a cross by it
# example
# echo echo_fail "No"
function echo_fail {
  # echo first argument in red
  printf "\e[31m✘ ${1}"
  # reset colours back to normal
  echo "\033[0m"
}

# display a message in green with a tick by it
# example
# echo echo_fail "Yes"
function echo_pass {
  # echo first argument in green
  printf "\e[32m✔ ${1}"
  # reset colours back to normal
  echo "\033[0m"
}

# echo pass or fail
# example
# echo echo_if 1 "Passed"
# echo echo_if 0 "Failed"
function echo_if {
  if [ $1 == 1 ]; then
    echo_pass $2
  else
    echo_fail $2
  fi
}

# ============================================== Functions

# Install Bower and the Grunt CLI
if ! program_is_installed grunt; then
    npm install -g grunt-cli
    echo_pass "Grunt CLI installed successfully"
fi

if ! program_is_installed bower; then
    npm install -g bower
    echo_pass "Bower installed successfully"
fi

# Install Foundation

# bower install https://github.com/zurb/bower-foundation.git --allow-root
# echo 'Foundation installed successfully'

# Install Sass Bootstrap

bower install git://github.com/twbs/bootstrap-sass.git --allow-root
echo 'Sass Bootstrap installed successfully'

# Install Respond.js
bower install https://github.com/scottjehl/Respond.git --allow-root
echo 'Respond.js installed successfully'

# Install Node modules
if ! npm_package_is_installed grunt-contrib-clean; then
    npm install grunt-contrib-clean --save-dev
fi

if ! npm_package_is_installed grunt-contrib-concat; then
    npm install grunt-contrib-concat --save-dev
fi

if ! npm_package_is_installed grunt-contrib-uglify; then
    npm install grunt-contrib-uglify --save-dev
fi

if ! npm_package_is_installed grunt-contrib-copy; then
    npm install grunt-contrib-copy --save-dev
fi

if ! npm_package_is_installed grunt-contrib-compass; then
    npm install grunt-contrib-compass --save-dev
fi

if ! npm_package_is_installed grunt-contrib-jshint; then
    npm install grunt-contrib-jshint --save-dev
fi

if ! npm_package_is_installed grunt-contrib-watch; then
    npm install grunt-contrib-watch --save-dev
fi

echo_pass 'Node modules installed successfully'

# Install Compass
if ! gem list compass -i; then
    gem update --system
    gem install compass
    echo_pass 'Compass installed'
fi

echo_pass '-------------------------------';
echo_pass 'Theme initialised successfully!';
echo_pass '-------------------------------';