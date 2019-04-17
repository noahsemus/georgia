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
      .to('#topFlag a', 1, {opacity:0})
      .to('#topFlag h1', 1, {opacity:0})
      .to('#topFlagDeep a', 1, {opacity:0})
      .to('#topFlagBG', 1, {height: '110%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }})
      
      .to('#topFlagBG', 1, {height: '50%', ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {


    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0.1, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});


Barba.Pjax.getTransition = function() {

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
    
});


