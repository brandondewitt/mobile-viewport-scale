var viewportFrozenContent = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=0';

var viewportScalableContent = 'width=device-width, minimum-scale=1.0, user-scalable=1';

var isMobile = (function () {

  return /iphone|ipod|ipad|android|blackberry|iemobile|wpdesktop|zunewp|xblwp/i.test(navigator.userAgent);

})();

module.exports = (function () {

  if (isMobile) {

    var viewportmeta = document.querySelector('meta[name="viewport"]');

    if (viewportmeta) {

      viewportmeta.content = viewportFrozenContent;

    } else {

      viewportmeta = document.createElement('meta');

      viewportmeta.name = 'viewport';

      viewportmeta.content = viewportFrozenContent;

      document.querySelector('head').appendChild(viewportmeta);

    }

  }

  return {

    disable: function() {

      document.querySelector('meta[name="viewport"]').content = viewportFrozenContent;

    },

    enable: function() {

      document.querySelector('meta[name="viewport"]').content = viewportScalableContent;
    	
    }

  }

})();