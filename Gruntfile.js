module.exports = function(grunt) {
    "use strict";
    
    var bootstrapScriptPath = 'bootstrap/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap';

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
            bootstrap: {
                src: [bootstrapScriptPath + '/*.js']
            },
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
                    bootstrapScriptPath + '/affix.js',
                    bootstrapScriptPath + '/alert.js',
                    bootstrapScriptPath + '/button.js',
                    bootstrapScriptPath + '/carousel.js',
                    bootstrapScriptPath + '/collapse.js',
                    bootstrapScriptPath + '/dropdown.js',
                    bootstrapScriptPath + '/tab.js',
                    bootstrapScriptPath + '/transition.js',
                    bootstrapScriptPath + '/scrollspy.js',
                    bootstrapScriptPath + '/modal.js',
                    bootstrapScriptPath + '/tooltip.js',
                    bootstrapScriptPath + '/popover.js',
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
                tasks: ['jshint:custom', 'concat', 'uglify']
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

};