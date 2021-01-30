async function sech() {
    let t = await fetch('json/general.json'),
    b = await t.json(),
    e = $('.general ul');

    b = b.splice(0, 8);
  
    for (i in b) {
        e[0].innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <time datetime='${b[i].date}'></time>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})'></div>
                </div>
            </a>
        </li>`;
    };
};
sech();

async function sef() {
    let t = await fetch('json/policy.json'),
    b = await t.json(),
    e = $('.policy ul');

    b = b.splice(0, 8);
  
    for (i in b) {
        e[0].innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <time datetime='${b[i].date}'></time>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})'></div>
                </div>
            </a>
        </li>`;
    };
};
sef();

document.addEventListener('DOMContentLoaded', function() {
    let q = $('main ul li:nth-child(2)'),
    o = $('.includes')[0],
    u = 'x';

    q.click(function() {
        o.load(u);
    });

    //

    let s = $('html'),
    d = $('body'),
    a = $('main li:last-child'),
    b = $('aside'),
    e = $('aside input'),
    i = $('aside > div:first-child div:first-child'),
    c = $('aside > div:first-child div:first-child span'),
    r = $('aside > div:first-child div:last-child span'),
    p = 'no-scroll',
    v = 'visible',
    h = 'hide',
    x = 'disappear';

    a.click(function() {
        b[0].classList.add(v);
        s[0].classList.add(p);
        d[0].classList.add(p);
    });
    c.click(function() {
        b[0].classList.remove(v);
        s[0].classList.remove(p);
        d[0].classList.remove(p);
    });

    e.click(function() {
        r[0].classList.add(h);
        i[0].classList.add(x);
    });
    r.click(function() {
        r[0].classList.remove(h);
        i[0].classList.remove(x);
    });
});

//

$(window).ready(function() {
    async function categories() {
        let t = await fetch('json/nav.json'),
        i = await t.json(),
        r = null,
        e = $('aside > div:last-child ul:first-child')[0];
    
        for (r in i) {
    
            e.innerHTML +=
            `<li>
                <a href="${i[r].href}">
                    <p>${i[r].title}</p>
                </a>
            </li>`;
        };
    };
    categories();
    
    //
    
    async function categDown() {
        let t = await fetch('json/general.json'),
        i = await t.json(),
        r = null,
        e = document.querySelector('aside > div:last-child ul:last-child');
    
        i = i.splice(0, 5);
    
        for (r in i) {
    
            e.innerHTML +=
            `<li>
                <a href="${i[r].href}">
                    <div>
                        <div style="background-image: url(${i[r].image_mini})"></div>
                    </div>
                    <div>
                        <time datetime="${i[r].date}"></time>
                        <h5>${i[r].title}</h5>
                    </div>
                </a>
            </li>`;
        };
    };
    categDown();
});

$(window).ready(function() {
    let d = new Date(),
    i = d.getDate(),
    t = d.getMonth(),
    n = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    e = $('header time');
      
    e[0].innerHTML = i + ' ' + n[t];
});
  
//
  
/**
   * Timeago is a jQuery plugin that makes it easy to support automatically
   * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
   *
   * @name timeago
   * @version 1.6.7
   * @requires jQuery >=1.5.0 <4.0
   * @author Ryan McGeary
   * @license MIT License - http://www.opensource.org/licenses/mit-license.php
   *
   * For usage and examples, visit:
   * http://timeago.yarp.com/
   *
   * Copyright (c) 2008-2019, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
   */
  
  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
      factory(require('jquery'));
    } else {
      // Browser globals
      factory(jQuery);
    }
  }(function ($) {
    $.timeago = function(timestamp) {
      if (timestamp instanceof Date) {
        return inWords(timestamp);
      } else if (typeof timestamp === "string") {
        return inWords($.timeago.parse(timestamp));
      } else if (typeof timestamp === "number") {
        return inWords(new Date(timestamp));
      } else {
        return inWords($.timeago.datetime(timestamp));
      }
    };
    var $t = $.timeago;
  
    $.extend($.timeago, {
      settings: {
        refreshMillis: 60000,
        allowPast: true,
        allowFuture: false,
        localeTitle: false,
        cutoff: 0,
        autoDispose: true,
        strings: {
          prefixAgo: null,
          prefixFromNow: null,
          suffixAgo: "ago",
          suffixFromNow: "from now",
          inPast: "any moment now",
          seconds: "less than a minute",
          minute: "about a minute",
          minutes: "%d minutes",
          hour: "about an hour",
          hours: "about %d hours",
          day: "a day",
          days: "%d days",
          month: "about a month",
          months: "%d months",
          year: "about a year",
          years: "%d years",
          wordSeparator: " ",
          numbers: []
        }
      },
  
      inWords: function(distanceMillis) {
        if (!this.settings.allowPast && ! this.settings.allowFuture) {
            throw 'timeago allowPast and allowFuture settings can not both be set to false.';
        }
  
        var $l = this.settings.strings;
        var prefix = $l.prefixAgo;
        var suffix = $l.suffixAgo;
        if (this.settings.allowFuture) {
          if (distanceMillis < 0) {
            prefix = $l.prefixFromNow;
            suffix = $l.suffixFromNow;
          }
        }
  
        if (!this.settings.allowPast && distanceMillis >= 0) {
          return this.settings.strings.inPast;
        }
  
        var seconds = Math.abs(distanceMillis) / 1000;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var years = days / 365;
  
        function substitute(stringOrFunction, number) {
          var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
          var value = ($l.numbers && $l.numbers[number]) || number;
          return string.replace(/%d/i, value);
        }
  
        var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
          seconds < 90 && substitute($l.minute, 1) ||
          minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
          minutes < 90 && substitute($l.hour, 1) ||
          hours < 24 && substitute($l.hours, Math.round(hours)) ||
          hours < 42 && substitute($l.day, 1) ||
          days < 30 && substitute($l.days, Math.round(days)) ||
          days < 45 && substitute($l.month, 1) ||
          days < 365 && substitute($l.months, Math.round(days / 30)) ||
          years < 1.5 && substitute($l.year, 1) ||
          substitute($l.years, Math.round(years));
  
        var separator = $l.wordSeparator || "";
        if ($l.wordSeparator === undefined) { separator = " "; }
        return $.trim([prefix, words, suffix].join(separator));
      },
  
      parse: function(iso8601) {
        var s = $.trim(iso8601);
        s = s.replace(/\.\d+/,""); // remove milliseconds
        s = s.replace(/-/,"/").replace(/-/,"/");
        s = s.replace(/T/," ").replace(/Z/," UTC");
        s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
        s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
        return new Date(s);
      },
      datetime: function(elem) {
        var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
        return $t.parse(iso8601);
      },
      isTime: function(elem) {
        // jQuery's `is()` doesn't play well with HTML5 in IE
        return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
      }
    });
  
    // functions that can be called via $(el).timeago('action')
    // init is default when no action is given
    // functions are called with context of a single element
    var functions = {
      init: function() {
        functions.dispose.call(this);
        var refresh_el = $.proxy(refresh, this);
        refresh_el();
        var $s = $t.settings;
        if ($s.refreshMillis > 0) {
          this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
        }
      },
      update: function(timestamp) {
        var date = (timestamp instanceof Date) ? timestamp : $t.parse(timestamp);
        $(this).data('timeago', { datetime: date });
        if ($t.settings.localeTitle) {
          $(this).attr("title", date.toLocaleString());
        }
        refresh.apply(this);
      },
      updateFromDOM: function() {
        $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
        refresh.apply(this);
      },
      dispose: function () {
        if (this._timeagoInterval) {
          window.clearInterval(this._timeagoInterval);
          this._timeagoInterval = null;
        }
      }
    };
  
    $.fn.timeago = function(action, options) {
      var fn = action ? functions[action] : functions.init;
      if (!fn) {
        throw new Error("Unknown function name '"+ action +"' for timeago");
      }
      // each over objects here and call the requested function
      this.each(function() {
        fn.call(this, options);
      });
      return this;
    };
  
    function refresh() {
      var $s = $t.settings;
  
      //check if it's still visible
      if ($s.autoDispose && !$.contains(document.documentElement,this)) {
        //stop if it has been removed
        $(this).timeago("dispose");
        return this;
      }
  
      var data = prepareData(this);
  
      if (!isNaN(data.datetime)) {
        if ( $s.cutoff === 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
          $(this).text(inWords(data.datetime));
        } else {
          if ($(this).attr('title').length > 0) {
              $(this).text($(this).attr('title'));
          }
        }
      }
      return this;
    }
  
    function prepareData(element) {
      element = $(element);
      if (!element.data("timeago")) {
        element.data("timeago", { datetime: $t.datetime(element) });
        var text = $.trim(element.text());
        if ($t.settings.localeTitle) {
          element.attr("title", element.data('timeago').datetime.toLocaleString());
        } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
          element.attr("title", text);
        }
      }
      return element.data("timeago");
    }
  
    function inWords(date) {
      return $t.inWords(distance(date));
    }
  
    function distance(date) {
      return (new Date().getTime() - date.getTime());
    }
  
    // fix for IE6 suckage
    document.createElement("abbr");
    document.createElement("time");
  }));
  
  //
  
  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
      factory(require('jquery'));
    } else {
      factory(jQuery);
    }
  }(function (jQuery) {
    // Russian
    function numpf(n, f, s, t) {
      // f - 1, 21, 31, минуту...
      // s - 2-4, 22-24, 32-34, минуты...
      // t - 5-20, 25-30, минут...
      n = n % 100;
      var n10 = n % 10;
      if ( (n10 === 1) && ( (n === 1) || (n > 20) ) ) {
        return f; // f - 1, 21, 31, минуту...
      } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
        return s; // s - 2-4, 22-24, 32-34, минуты...
      } else {
        return t; // t - 5-20, 25-30, минут...
      }
    }
  
    jQuery.timeago.settings.strings = {
      prefixAgo: null,
      prefixFromNow: "через",
      suffixAgo: "назад",
      suffixFromNow: null,
      seconds: "менее минуты",
      minute: "минуту",
      minutes: function(value) { return numpf(value, "%d минуту", "%d минуты", "%d минут"); },
      hour: "час",
      hours: function(value) { return numpf(value, "%d час", "%d часа", "%d часов"); },
      day: "день",
      days: function(value) { return numpf(value, "%d день", "%d дня", "%d дней"); },
      month: "месяц",
      months: function(value) { return numpf(value, "%d месяц", "%d месяца", "%d месяцев"); },
      year: "год",
      years: function(value) { return numpf(value, "%d год", "%d года", "%d лет"); }
    };
  }));
  
  //
  
jQuery(function ($) {
    $(document).ready(function() {
      $('.includes time, aside > div:last-child ul:last-child time').timeago();
    });
});

$(window).ready(function() {
    let tt = document.querySelectorAll('[data-style]');
    
    function vv(a) {
        let u = a.getAttribute('data-style');
        
        if (!u) {
            return;
        };
        a.style = u;
    };
    
    let bb = {
        threshold: 0,
        rootMargin: '0px'
    };
    
    let ee = new IntersectionObserver((a, b) => {
        a.forEach(c => {
            if (!c.isIntersecting) {
                return;
            } else {
                vv(c.target);
                b.unobserve(c.target);
            };
        });
    }, bb);
    
    tt.forEach(a => {
        ee.observe(a);
    });
});

/*u.forEach((e) => {
    e.setAttribute('style', e.getAttribute('data-style'));
    e.removeAttribite('data-style');
});*/

window.onload = function() {
    let a = $('blockquote p'),
    b = 'quote';

    a[0].classList.add(b);
};