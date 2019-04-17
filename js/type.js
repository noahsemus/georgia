$(document).ready(function() {
    new TypeIt('.deepLink', {
        speed: 50,
        waitUntilVisible: false,
        cursor: false,
        loop: true,
        loopDelay: 5000,
        
    }).go();
    
    new TypeIt('#homeLink', {
        speed: 10,
        waitUntilVisible: false,
        cursor: false,
        
    }).go();
});