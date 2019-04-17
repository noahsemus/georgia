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

function vendorStart() {
    
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
}

vendorStart();


Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container, rawHTML) {
    
    $(document).foundation();
    
    vendorStart();
});