module.exports = function(grunt) {

    var defaultFatalHandler = grunt.fail.fatal;

    grunt.task.registerTask('fatal-override:on', 'Switch grunt fatal to warn', function() {
        grunt.fail.fatal = function(message) {
            grunt.fail.warn(message);
        }
    });

    grunt.task.registerTask('fatal-override:off', 'Restore grunt fatal to default', function() {
        grunt.fail.fatal = defaultFatalHandler;
    });
}