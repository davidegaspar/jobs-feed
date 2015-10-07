module.exports = function(grunt) {
  require('time-grunt')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
      base
    */
    clean: {
      app:['app/']
    },
    copy:{
      fonts:{
        files: [
          {
            expand: true,
            cwd: 'bower_components/fontawesome/fonts/',
            src:['**'],
            dest:'app/fonts/',
            flatten: true,
            filter: 'isFile',
          },
        ],
      },
      html:{
        files: [
          {
            expand: true,
            cwd: 'src/',
            src:['*.html'],
            dest:'app/',
            filter: 'isFile',
          },
        ],
      },
    },
    /*
      build
    */
    concat:{
      options: {
        banner: '/*! <%= pkg.name %> - <%= pkg.version %> - <%= pkg.author %> - <%= grunt.template.today("isoDateTime") %> */\n'
      },
      js:{
        src: ['bower_components/gatejs/Gate.js','bower_components/slider/Slider.js','src/ext.js','src/script.js'],
        dest: 'app/script.js',
      },
    },
    less:{
      options: {
        //paths: ["dev/page/css"],
        banner: '/*! <%= pkg.name %> - <%= pkg.version %> - <%= pkg.author %> - <%= grunt.template.today("isoDateTime") %> */\n'
      },
      src: {
        expand: true,
        cwd: 'src/',
        src: '*.less',
        dest: 'app/',
        ext: '.css',
        flatten:true
      }
    },
    /*
      pack
    */
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        cssmin: true,//doesnt seem to be working
      },
      all:{
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.html'],
          dest: 'app/',
        }]
      }
    },
    cssmin: {
      all: {
        options:{
          keepSpecialComments:1
        },
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.css'],
          dest: 'app/',
          //ext: '.css'
        }]
      }
    },
    uglify: {
      all: {
        options:{
          banner: '/*! <%= pkg.name %> - <%= pkg.version %> - <%= pkg.author %> - <%= grunt.template.today("isoDateTime") %> */',
          preserveComments:false
        },
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.js'],
          dest: 'app/',
          //ext: '.js'
        }]
      }
    },
  });

  /*
    tasks
  */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /*
    project
  */
  grunt.registerTask('base',['clean:app','copy']);
  grunt.registerTask('build',['concat','less']);
  grunt.registerTask('pack',['htmlmin:all','cssmin:all','uglify:all']);
  grunt.registerTask('default',['build']);

};
