module.exports = function(grunt) {
  grunt.initConfig({
//    stylelint: {
//      all: ['*.scss']
//    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'creamsody-theme-colors.css':
          'creamsody-theme-colors.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass', 'stylelint']);
};
