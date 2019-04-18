var transitionAnimation = Barba.BaseTransition.extend({
    
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
      
      var transitionPromise = new Promise(function(resolve) {

  var outTransition = new TimelineMax();
      
      outTransition
      .to(['#topFlag a', '#topFlag h1', '.topFlagDeep a'], .5, {opacity:0})
      .to('#topFlagBG', 1, {zIndex: 9999999, height: '110%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }}, 0)
      
      .to('#topFlagBG', 0, {zIndex: 0, height: '50%', ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {


    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});

var transitionAnimation02 = Barba.BaseTransition.extend({
    
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
      
      var transitionPromise = new Promise(function(resolve) {

  var outTransition = new TimelineMax();
      
      outTransition
      .to(['#topFlag a', '#topFlag h1', '.topFlagDeep a'], .5, {opacity: 0})
      .to('.bottomFlagBG', 0, {top:'100vh'}, 0)
      .to('.bottomFlagBG', 1, {zIndex: 9999999999, top: 0, height:'100%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }}, 0)
      
      .to('.bottomFlagBG', 0, {zIndex: -9999999999999, ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {


    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});

var transitionAnimation03 = Barba.BaseTransition.extend({
    
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
      
      var transitionPromise = new Promise(function(resolve) {

  var outTransition = new TimelineMax();
      
      outTransition
      .to(['#bottomFlagText', '.deepNav'], .5, {opacity: 0})
      .to('#topFlagBG', 0, {top:'-100vh'}, 0)
      .to('#topFlagBG', 1, {zIndex: 9999999999, top: 0, height:'50%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }}, 0)
      
      .to('#topFlagBG', 0, {zIndex: 0, ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {


    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});

var transitionAnimation04 = Barba.BaseTransition.extend({
    
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
      
      var transitionPromise = new Promise(function(resolve) {

  var outTransition = new TimelineMax();
      
      outTransition
      .to(['#bottomFlagText', '.deepNav'], .5, {opacity: 0})
      .to('#topFlagBG', 0, {top:'-100vh'}, 0)
      .to('#topFlagBG', 1, {zIndex: 9999999999, top: 0, height:'100%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }}, 0)
      
      .to('#topFlagBG', 0, {zIndex: 0, ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {


    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});

let lastClickEl;
Barba.Dispatcher.on('linkClicked', (el) => {
  lastClickEl = el;
});


Barba.Pjax.getTransition = function () {
    
    if(lastClickEl.classList.contains('deepLink')){
        return transitionAnimation02;
    };
    
    if(lastClickEl.classList.contains('bookHome')){
        return transitionAnimation03;
    };
    
    if(lastClickEl.classList.contains('bookBook')){
        return transitionAnimation04;
    };
    
    return transitionAnimation;
    
        
    
    
        
};

Barba.Pjax.start();



Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container, rawHTML) {
    
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


