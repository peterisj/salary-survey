var ScrollIndicator = (function () {
  var progressBar = $('.scroll-indicator__bar') 
  var debug = false
  var value = 0
  var max
  var width        

  var getMax = function(){
    return $('.fp-section').length - 1
  }

  var getWidth = function(){
    // Calculate width in percentage
    width = (value/max) * 100;
    width = width + '%';
    return width;
  }
    
  var setWidth = function(){
    progressBar.css({ width: getWidth() });
  }

  return {
    init: function () {
      if (!window.jQuery) {
        console.warn('Error: jQuery is not loaded')
        return
      }
      if (debug) console.info('ScrollIndicator initialized')
      max = getMax()
    },
    update: function (section) {
      value = section
      setWidth() 
    }
  }
})()

$(document).ready( function() {
  ScrollIndicator.init()
})


var Slidenav = (function () {
    var debug = false
    var prev = $('.slidenav__prev')
    var next = $('.slidenav__next')

    var checkDependencies = function () {
        if (!window.jQuery) {
            console.warn('Error: jQuery is not loaded')
            return
        }
    }

    var enable = function (elem) {
        if (elem.hasClass('u-disabled')) {
            elem.removeClass('u-disabled')
        }
    }

    var disable = function (elem) {
        if (!elem.hasClass('u-disabled')) {
            elem.addClass('u-disabled')
        }
    }

    return {
        enablePrev: function (boolean) {
            if (debug) console.info('Enabling Previous button', boolean)
            checkDependencies()
            if (boolean === true) {
                enable(prev)
            } else {
                disable(prev)
            }
        },

        enableNext: function (boolean) {
            if (debug) console.info('Enabling Next button', boolean)
            checkDependencies()
            if (boolean === true) {
                enable(next)
            } else {
                disable(next)
            }
        }
    }
})()
