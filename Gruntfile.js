module.exports = function (grunt) {

  // Project Configuration
  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),

    // Compile LESS files to CSS by keeping them readable
    less : {
      options : {
        paths : ['src/']
      },
      compile : {
        files : {
          'build/src/base.css' : 'src/base.less',
          'build/src/helper.css' : 'src/helper.less',
          'build/src/buttons.css' : 'src/buttons.less'
        }
      }
    },

    // Create a beautified build by concating
    concat : {
      options : {
        banner : '/*! <%= pkg.name %> | v<%= pkg.version %> | MIT License | ' +
          '<%= pkg.author %> */\n',
      },
      css : {
        src : [
          'build/src/base.css',
          'build/src/helper.css',
          'build/src/buttons.css'
        ],
        dest : 'build/chanakya.css'
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
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['less:compile', 'concat']);

};
