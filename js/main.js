var transitionAnimation = Barba.BaseTransition.extend({
    
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
      
      var transitionPromise = new Promise(function(resolve) {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
  var outTransition = new TimelineMax();
      
      outTransition
      .to('#topFlagBG', 1, {height: '110%', ease: Power4.easeInOut, onComplete: function(){resolve();
    }})
      
      .to('#topFlagBG', 1, {height: '50%', ease: Power4.easeInOut})
      
    });
    
    return transitionPromise;
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display:'none'});
      
      //New Container
      
      TweenMax.to($el, 0.1, {display:'auto', onComplete:function(){_this.done();}
            });
      
    }
    
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
    
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
    
    

  return transitionAnimation;
};

Barba.Pjax.start();

function vendorStart() {
    
    new TypeIt('.deepLink', {
        speed: 50,
        waitUntilVisible: true,
        cursor: false,
        loop: true,
        loopDelay: 5000,
        
    }).go();
    
    new TypeIt('#homeLink', {
        speed: 10,
        waitUntilVisible: false,
        cursor: false,
        
    }).go();
}

vendorStart();


Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    vendorStart();
});