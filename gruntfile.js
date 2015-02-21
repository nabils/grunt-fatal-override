module.exports = function(grunt) {

    grunt.initConfig({

    });


    grunt.task.registerTask('callFatal', 'Call fatal', function() {
        grunt.fail.fatal('This is a fatal error');
    });


    grunt.task.loadTasks('./tasks');

    grunt.registerTask('default', ['fatal-override:on', 'callFatal', 'fatal-override:off', 'callFatal']);
};