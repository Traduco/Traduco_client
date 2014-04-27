module.exports = function(grunt) {

	
    // Permet de configurer les plugins et tâches
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

	    uglify: {
	        minify: {
	            files: [ {
	                'main/app/js/test.min.js': ['main/app/**/*.js']
	            } ]
	        }
	    }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Crée la tâche 'default' qui sera exécutée si on ne spécifie
    // aucune tâche
    // Le 2e paramètre indique les tâches qui seront exécutées
    grunt.registerTask('default', ['uglify:minify']);
};
