// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require app
//= require clickable
//= require ajax

var initialize_modules = function() {
  console.log('Initialize_modules');
  App.Clickable.initialize();
};

var ready = function(){
  console.log('ready');
}
var page_load = function(){
  console.log('page:load');
}
var ajax_complete = function(){
  console.log('ajax:complete');
}
$(function(){
  $(document).ready(initialize_modules);
  $(document).on('page:load', initialize_modules);
  $(document).on('ajax:complete', initialize_modules);

  $(document).ready(ready);
  $(document).on('page:load', page_load);
  $(document).on('ajax:complete', ajax_complete);
});
