module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-less');

  grunt.initConfig({

    // Load project information for package.json
    pkg: '<json:package.json>',

    // Project meta data

    lint: {
      all: [
        'grunt.js', 
        'js/main.js'
      ]
    },

     concat : {
      release : {
        src : '<file_strip_banner:build/tmp/main.js:block>',
        dest : 'js/main-min.js'
      } 
    },


    less : {
      release : {
        src : 'css/styles.less',
        dest: 'css/styles.css',
        options: {
          compress: true
        }
      }
    },
    
    requirejs: {

      baseUrl: "js",
      paths : { // lets the compiler know what dependent files to grab.
        'jquery'              : "lib/jquery-1.7.2.min",
        'underscore'          : "lib/underscore-1.3.3.min",
        'backbone'            : "lib/backbone-0.9.2.min",
        'order'               : 'lib/requirejs-plugins/order',
        'async'               : 'lib/requirejs-plugins/async',
        'ajax-content-loader' : 'modules/ajax-content-loader',
        'helper-functions'    : 'modules/helper-functions',
        'youtube-helper'      : 'modules/youtube-helper',
        'config-pages'        : 'config'
      },
      shim: {
        backbone: {
          deps: ["jquery", "underscore"],
          exports: function()  {
            return Backbone.noConflict();
          }
        },
        underscore: {
          exports : function() {
            return _.noConflict();
          }
        }
      },
      name: "main",
      out: "build/tmp/main.js"
            
    }
  });

  
  // Default task.
  grunt.registerTask('default', 'requirejs:js concat:release less:release');

};