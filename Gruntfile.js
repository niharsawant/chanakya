module.exports = function (grunt) {

  // Project Configuration
  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),

    // Compile LESS files to CSS by keeping them readable
    less : {
      compile : {
        files : {
          "build/base.css" : "src/base.less",
          "build/buttons.css" : "src/buttons.less"
        }
      }
    },

    // Watch task for file changes in LESS which will compile them into CSS
    watch : {
      css : {
        files : 'src/*.less',
        tasks : ['less:compile'],
        options : {
          livereload : true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:compile']);

};
