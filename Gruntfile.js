module.exports = function (grunt) {

  // Project Configuration
  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),

    // Compile LESS files to CSS by keeping them readable
    less : {
      compile : {
        files : {
          "build/base.css" : [
            "bower_components/normalize-css/normalize.css",
            "src/base.less"
          ]
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

  // Created a custom task to install Bower Dependencies
  grunt.registerTask('bower_install', 'Installs Bower dependencies.', function () {
    var bower = require('bower'), done  = this.async();

    bower.commands.install()
      .on('log', function (data) {
        if (data.id !== 'install') { return; }
        grunt.log.writeln('bower ' + data.id.cyan + ' ' + data.message);
      })
      .on('end', function (results) {
        if (!Object.keys(results).length) {
          grunt.log.writeln('No bower packages to install.');
        }

        done();
      });
  });

  grunt.registerTask('default', ['bower_install', 'less:compile']);

};
