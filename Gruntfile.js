module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*!\n' +
            ' * Zing Design WordPress Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n\n',
        jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }\n\n',

        clean: {
            dist: ['dist']
        },

        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
//            bootstrap: {
//                src: ['js/bootstrap/*.js']
//            },
            custom: {
                src: 'js/custom.js'
            }
        },

        concat: {
            options: {
                banner: '<%= banner %><%= jqueryCheck %>',
                stripBanners: false
            },
            bootstrap: {
                src: [
                    //Comment unused scripts out here
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js',
                    'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js',
                    'js/custom.js'
                ],
                dest: 'src/js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    javascriptsDir: 'js',
                    imagesDir: 'images',
                    environment: '<%= pkg.environment %>'
                }
            }
        },

        copy: {
            style: {
                expand: true,
                cwd: 'css/',
                src: ['style.css'],
                dest: './'
            }
        },

        watch: {
            compassWatch: {
                files: ['scss/*.scss'],
                tasks: ['compass']
            },
            jsWatch: {
                files: ['js/custom.js'],
                tasks: ['jshint', 'concat', 'uglify']
            }
            ,copyWatch: {
                files: ['css/style.css'],
                tasks: ['copy:style']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'compass', 'copy']);

    grunt.registerTask('deploy', ['compass', 'copy']);

//    grunt.registerTask('watch', ['watch']);

};