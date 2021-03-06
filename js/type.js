$(document).ready(function() {
    new TypeIt('.deepLink', {
        speed: 50,
        waitUntilVisible: false,
        cursor: false,
        loop: true,
        loopDelay: 5000,
        
    }).go();
    
    new TypeIt('#homeLink', {
        speed: 30,
        waitUntilVisible: false,
        cursor: false,
        
    }).go();
    
    new TypeIt('#topFlag h1', {
        speed: 30,
        waitUntilVisible: true,
        cursor: false,
        
    }).go();
    
    new TypeIt('#bottomFlagText', {
        speed: 20,
        waitUntilVisible: true,
        cursor: false,
        
    }).go();
    
    new TypeIt('.deepNav a', {
        speed: 200,
        waitUntilVisible: false,
        cursor: false,
        
    }).go();
});