module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		mochaTest: {
			options: {
				timeout: 30000,
				reporter: 'spec',
				ignoreLeaks: false,
				globals: [
					'requestSSLHooks', 
					'requestSSLFingerprints',
					'requestSSLInitializing',
					'requestSSLInsideHook',
					'requestSSLInitialized'
				]
			},
			src: ['test/**/*.js']
		},
		jshint: {
			options: {
				jshintrc: true
			},
			src: ['*.js','lib/**/*.js','apis/**/*.js','connectors/**/*.js','models/**/*.js','blocks/**/*.js','test/**/*.js']
		},
		kahvesi: {
			src: ['test/**/*.js']
		},
		clean: ['tmp']
	});

	// Load grunt plugins for modules
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-kahvesi');

	// register tasks
	grunt.registerTask('cover', ['kahvesi', 'clean']);
	grunt.registerTask('default', ['jshint', 'mochaTest', 'clean']);
};
