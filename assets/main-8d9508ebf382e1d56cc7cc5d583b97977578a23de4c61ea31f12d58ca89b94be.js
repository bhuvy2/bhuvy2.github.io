"use strict";

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function classToggle() {
    const navs = document.querySelectorAll('.navbar-items');
    for (let i = 0; i < navs.length; ++i) {
        const nav = navs[i];
        nav.classList.toggle('navbar-toggle-show');
    }
}


ready(function(){
    document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);

    const cookieName = 'cookie-notice-dismissed';
    const cookieNoticeVal = 'true';
    const appId = 'UA-82139438-1';

    if(getCookie(cookieName) === cookieNoticeVal) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', appId, 'auto');
        ga('send', 'pageview');
    } else {
        document.getElementById('cookie-notice').style.display='block';
    }

    const acceptElem = document.getElementById('cookie-notice-accept');
    const acceptHandler = function() {
        setCookie(cookieName,cookieNoticeVal,31);
        document.getElementById('cookie-notice').style.display='none';
    };
    acceptElem.onclick = acceptHandler;
});
