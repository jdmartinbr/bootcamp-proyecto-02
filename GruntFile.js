module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            meta: {
                port: 1338,
                base: 'tasks'
            }
        },
        uglify: {
            options: {

            },
            build: {
                files: {
                    'dist/js/app.min.js' : 'js/app.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['uglify']
            }
        }

    });

    // Load the plugin.
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default',['connect:meta','uglify','watch']);

};