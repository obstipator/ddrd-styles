// ==UserScript==
// @name       DDRD Stylesheet unfuckifier
// @namespace  poop
// @version    1.0.19
// @description  This fixes the DDRD Stylesheet
// @include      http://forums.somethingawful.com/*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @copyright  2070
// ==/UserScript==

var version = 19;

// add in DDRD 2.0 stylesheet aww yeahh bitches
$('<link rel="stylesheet" type="text/css" href="http://pasta.rd14.net/2014-04/combined.css?' + version + '">').appendTo($('body'));

// replace the regular forums CSS with the forums CSS minus the broken DDRD CSS
$('link[href="http://www.somethingawful.com/css/forums.css?7"]').attr('href', 'http://pasta.rd14.net/2014-04/forumsMinus1.css');


