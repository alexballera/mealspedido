module.exports = function (grunt) {
require('load-grunt-tasks')(grunt);

grunt.initConfig({
    config: {
        app: 'app'
    },
    watch: {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= config.app %>/{,*/}*.html',
                '.tmp/style/{,*/}*.css',
                '<%= config.app %>/images/{,*/}*',
                'public/**/*.js', 'public/**/*.html', 'public/**/*.css', 'public/**/*.json'
            ]
        }
    },
    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '.tmp',
                    '<%= config.app %>'
                ]
            }
        },
    },
});
grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'connect:livereload',
        'watch'
        ]);
    });
};