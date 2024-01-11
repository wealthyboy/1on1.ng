(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_rev_js_rs6_min_js"],{

/***/ "./public/rev/js/rs6.min.js":
/*!**********************************!*\
  !*** ./public/rev/js/rs6.min.js ***!
  \**********************************/
/***/ (() => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!

  - Slider Revolution JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

			   DATE: 2022-10-06
	@author: Krisztian Horvath, ThemePunch OHG.

INTRODUCING GIT
UPDATES AND DOCS AT:
https://www.themepunch.com/support-center

GET LICENSE AT:
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)

*/
!function (e, t) {
  "use strict";

  var i = "Slider Revolution 6.6.0";
  window.RSANYID = window.RSANYID === t ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === t ? [] : window.RSANYID_sliderID, e.fn.revolution = e.fn.revolution || {};
  var a = e.fn.revolution;

  e.fn.revolutionInit = function (i) {
    return this.each(function () {
      a.ISM = a.ISM || a.is_mobile();

      for (var s = document.getElementsByClassName("rs-p-wp-fix"); s[0];) {
        s[0].parentNode.removeChild(s[0]);
      }

      this.id !== t ? (a[n] = {
        anyid: []
      }, this.id = a.revCheckIDS(n, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
      var n = this.id,
          l = a.clone(i);
      a[n] = W(i), a[n].ignoreHeightChange = a.ISM && "fullscreen" === a[n].sliderLayout && a[n].ignoreHeightChange, a[n].option_export = l, a[n].anyid = [], a[n]._Lshortcuts = {}, a[n].computedStyle = {}, a[n].c = e(this), a[n].cpar = a[n].c.parent(), a[n].canvas = a[n].c.find("rs-slides"), a[n].caches = {
        calcResponsiveLayersList: [],
        contWidthManager: {},
        middleHeights: {}
      }, a[n].sbgs = {}, window.RSBrowser = window.RSBrowser === t ? a.get_browser() : window.RSBrowser, a.setIsIOS(), a.setIsChrome8889(), a.useBackdrop === t && a.checkBackdrop(), a[n].noDetach = a[n].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, a.getByTag = r(), a[n].indexhelper = 0, a[n].fullScreenOffsetResult = 0, a[n].level = 0, a[n].rtl = e("body").hasClass("rtl") || "rtl" == document.dir, a[n]._L = a[n]._L === t ? {} : a[n]._L, a[n].emptyObject = "{}", a[n].dimensionReCheck = {}, a.globalListener === t && a.pageHandler(n), a[n].stopAfterLoops != t && a[n].stopAfterLoops > -1 ? a[n].looptogo = a[n].stopAfterLoops : a[n].looptogo = "disabled", window.T = a[n], a[n].BUG_safari_clipPath = "Safari" === a.get_browser() && a.get_browser_version() > "12", a[n].minHeight = "fullwidth" === a[n].sliderLayout || "carousel" === a[n].sliderType ? 0 : a[n].minHeight != t && "" !== a[n].minHeight ? parseInt(a[n].minHeight, 0) : 0, a[n].minHeight = a[n].minHeight === t ? 0 : a[n].minHeight, a[n].isEdge = "Edge" === a.get_browser(), o(n), a.updateVisibleArea(n), F(n), a.mesuredScrollBarDone || a.mesureScrollBar(), window.requestAnimationFrame(function () {
        if ("fullscreen" === a[n].sliderLayout) {
          var e = a.getFullscreenOffsets(n);
          0 !== e && a[n].cpar.height(a.getWinH(n) - e);
        }

        a[n].cpar[0].style.visibility = "visible";
      }), "hero" == a[n].sliderType && a[n].c.find("rs-slide").each(function (t) {
        t > 0 && e(this).remove();
      }), a[n].navigation.use = "hero" !== a[n].sliderType && ("carousel" == a[n].sliderType || a[n].navigation.keyboardNavigation || "on" == a[n].navigation.mouseScrollNavigation || "carousel" == a[n].navigation.mouseScrollNavigation || a[n].navigation.touch.touchenabled || a[n].navigation.arrows.enable || a[n].navigation.bullets.enable || a[n].navigation.thumbnails.enable || a[n].navigation.tabs.enable), a[n].c.find("rs-bgvideo").each(function () {
        "RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()));
      }), tpGS.force3D = "auto", !0 === a[n].modal.useAsModal && -1 === a.RS_prioList.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), a.RS_killedlist !== t && -1 !== a.RS_killedlist.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), !0 === a.RS_prioListFirstInit && !0 !== a[n].modal.useAsModal && -1 === a.RS_prioList.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), a.initNextRevslider(n);
    });
  };

  a = window.RS_F;
  e.fn.extend({
    getRSJASONOptions: function getRSJASONOptions(e) {
      console.log(JSON.stringify(a[e].option_export));
    },
    getRSVersion: function getRSVersion(e) {
      var t,
          i,
          a = window.SliderRevolutionVersion;

      if (!e) {
        for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) {
          a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
        }

        t += i;
      }

      return e ? a : t;
    },
    revremoveslide: function revremoveslide(t) {
      return this.each(function () {
        var i = this.id;

        if (!(t < 0 || t > a[i].slideamount) && a[i] && a[i].slides.length > 0 && (t > 0 || t <= a[i].slides.length)) {
          var r = a.gA(a[i].slides[t], "key");
          a[i].slideamount = a[i].slideamount - 1, a[i].realslideamount = a[i].realslideamount - 1, n("rs-bullet", r, i), n("rs-tab", r, i), n("rs-thumb", r, i), e(a[i].slides[t]).remove(), a[i].thumbs = s(a[i].thumbs, t), a.updateNavIndexes && a.updateNavIndexes(i), t <= a[i].pr_active_key && (a[i].pr_active_key = a[i].pr_active_key - 1);
        }
      });
    },
    revaddcallback: function revaddcallback(e) {
      return this.each(function () {
        a[this.id] && (a[this.id].callBackArray === t && (a[this.id].callBackArray = []), a[this.id].callBackArray.push(e));
      });
    },
    revgetparallaxproc: function revgetparallaxproc() {
      if (a[this[0].id]) return a[this[0].id].scrollproc;
    },
    revdebugmode: function revdebugmode() {},
    revscroll: function revscroll(t) {
      return this.each(function () {
        var i = e(this);
        e("body,html").animate({
          scrollTop: i.offset().top + i.height() - t + "px"
        }, {
          duration: 400
        });
      });
    },
    revredraw: function revredraw() {
      return this.each(function () {
        v(this.id, t, !0);
      });
    },
    revGoToFrame: function revGoToFrame(i) {
      if (i.layerid != t && i.frame != t && this != t && null != this && (i.moduleid = this[0].id, i.targetlayer = e("#" + i.layerid), i.targetlayer != t && 0 != i.targetlayer.length)) {
        var r = {
          layer: i.targetlayer,
          frame: i.frame,
          mode: "trigger",
          id: i.moduleid
        };
        !0 === i.children && (r.updateChildren = !0, r.fastforward = !0), a.renderLayerAnimation && a.renderLayerAnimation(r);
      }
    },
    revkill: function revkill() {
      return this.each(function () {
        if (this != t && null != this) {
          var i = this.id;
          a[i].c.data("conthover", 1), a[i].c.data("conthoverchanged", 1), a[i].c.trigger("revolution.slide.onpause"), a[i].tonpause = !0, a[i].c.trigger("stoptimer"), a[i].sliderisrunning = !1;
          var r = "updateContainerSizes." + a[i].c.attr("id");
          a.window.off(r), tpGS.gsap.killTweensOf(a[i].c.find("*"), !1), tpGS.gsap.killTweensOf(a[i].c, !1), a[i].c.off("hover, mouseover, mouseenter,mouseleave, resize"), a[i].c.find("*").each(function () {
            var i = e(this);
            i.off("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null;
          }), tpGS.gsap.killTweensOf(a[i].c.find("*"), !1), tpGS.gsap.killTweensOf(a[i].c, !1), a[i].progressC.remove();

          try {
            a[i].c.closest(".rev_slider_wrapper").detach();
          } catch (e) {}

          try {
            a[i].c.closest("rs-fullwidth-wrap").remove();
          } catch (e) {}

          try {
            a[i].c.closest("rs-module-wrap").remove();
          } catch (e) {}

          try {
            a[i].c.remove();
          } catch (e) {}

          a[i].cpar.detach(), a[i].c.html(""), a[i].c = null, window[a[i].revapi] = t, delete a[i], delete a.RS_swapList[i], delete a.slidersToScroll[i], delete a.RS_toInit[i], a.nextSlider == i && delete a.nextSlider, a.RS_prioList.splice(a.RS_prioList.indexOf(i), 1), a.RS_killedlist = a.RS_killedlist === t ? [] : a.RS_killedlist, -1 === a.RS_killedlist.indexOf(i) && a.RS_killedlist.push(i);
        }
      });
    },
    revpause: function revpause() {
      return this.each(function () {
        var i = e(this);
        i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0 && (i.data("conthover", 1), i.data("conthoverchanged", 1), i.trigger("revolution.slide.onpause"), a[this.id].tonpause = !0, i.trigger("stoptimer"));
      });
    },
    revresume: function revresume() {
      return this.each(function () {
        if (a[this.id] !== t) {
          var i = e(this);
          i.data("conthover", 0), i.data("conthoverchanged", 1), i.trigger("revolution.slide.onresume"), a[this.id].tonpause = !1, i.trigger("starttimer");
        }
      });
    },
    revmodal: function revmodal(i) {
      var r = this instanceof e ? this[0] : this,
          o = r.id;
      a[r.id] !== t && a.revModal(o, i);
    },
    revstart: function revstart() {
      var i = this instanceof e ? this[0] : this;
      return a[i.id] === t ? (console.log("Slider is Not Existing"), !1) : a[i.id].sliderisrunning || !0 === a[i.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (a[i.id].c = e(i), a[i.id].canvas = a[i.id].c.find("rs-slides"), h(i.id), !0);
    },
    revnext: function revnext() {
      return this.each(function () {
        a[this.id] !== t && a.callingNewSlide(this.id, 1, "carousel" === a[this.id].sliderType);
      });
    },
    revprev: function revprev() {
      return this.each(function () {
        a[this.id] !== t && a.callingNewSlide(this.id, -1, "carousel" === a[this.id].sliderType);
      });
    },
    revmaxslide: function revmaxslide() {
      return e(this).find("rs-slide").length;
    },
    revcurrentslide: function revcurrentslide() {
      if (a[e(this)[0].id] !== t) return parseInt(a[e(this)[0].id].pr_active_key, 0) + 1;
    },
    revlastslide: function revlastslide() {
      return e(this).find("rs-slide").length;
    },
    revshowslide: function revshowslide(e) {
      return this.each(function () {
        a[this.id] !== t && e !== t && a.callingNewSlide(this.id, "to" + (e - 1));
      });
    },
    revcallslidewithid: function revcallslidewithid(e) {
      return this.each(function () {
        a[this.id] !== t && a.callingNewSlide(this.id, e, "carousel" === a[this.id].sliderType);
      });
    }
  }), a = e.fn.revolution, e.extend(!0, a, {
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    trim: function trim(e) {
      return e !== t && null !== e && "string" == typeof e ? e.trim() : e;
    },
    setCookie: function setCookie(e, t, i) {
      var a = new Date();
      a.setTime(a.getTime() + 60 * i * 60 * 1e3);
      var r = "expires=" + a.toUTCString();
      document.cookie = e + "=" + t + ";" + r + ";path=/";
    },
    getCookie: function getCookie(e) {
      for (var t = e + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
        for (var r = i[a]; " " == r.charAt(0);) {
          r = r.substring(1);
        }

        if (0 == r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length));
      }

      return "";
    },
    mesureScrollBar: function mesureScrollBar() {
      a.mesuredScrollBarDone = !0, requestAnimationFrame(function () {
        var e = document.createElement("div");
        e.className = "RSscrollbar-measure", document.body.appendChild(e), a.mesuredScrollbarWidth = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      });
    },
    mobileTimedHeightCheck: function mobileTimedHeightCheck() {
      requestAnimationFrame(function () {
        a.mobileTimedHeightCheck();
      }), a.mobileHeights.now = Date.now(), a.mobileHeights.elapsed = a.mobileHeights.now - a.mobileHeights.then, a.mobileHeights.elapsed > a.mobileHeights.fpsInterval && (a.mobileHeights.then = a.mobileHeights.now - a.mobileHeights.elapsed % a.mobileHeights.fpsInterval, a.getWindowDimension());
    },
    pageHandler: function pageHandler(i) {
      a.globalListener = !0, a.window = e(window), a.document = e(document), a.RS_toInit = {}, a.RS_prioList = [], a.RS_swapping = [], a.RS_swapList = {}, window.isSafari11 === t && (window.isSafari11 = a.isSafari11()), a.ISM ? (window.addEventListener("orientationchange", function () {
        a.getWindowDimension(!1, !0), setTimeout(function () {
          a.getWindowDimension(!0, !0);
        }, 400);
      }), window.addEventListener("resize", a.getWindowDimension), tpGS.gsap.delayedCall(3, function () {
        window.removeEventListener("resize", a.getWindowDimension);
      }), a.mobileHeights = {
        fpsInterval: 500,
        then: Date.now()
      }, a[i].ignoreHeightChange || a.mobileHeights.checking || (a.mobileHeights.checking = !0, a.mobileTimedHeightCheck())) : window.addEventListener("resize", a.getWindowDimension), a.getWindowDimension(!1), a.stickySupported = !1, "IE" !== window.RSBrowser && (a.stickySupported = !0), a.checkParrentOverflows(i);
      var r = a.getByTag(document, "RS-MODULE");

      for (var o in r) {
        r.hasOwnProperty(o) && (a.RS_toInit[r[o].id] = !1, a.RS_prioList.push(r[o].id));
      }

      a.nextSlider = i, a.RS_prioListFirstInit = !0, a.document.one("click", function () {
        a.clickedOnce = !0;
      }), document.addEventListener("visibilitychange", B), a.hasNavClickListener === t && (a.document.on(a.is_mobile() ? "touchstart" : "mouseenter", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-thumbs, .tp-tabs, .tp-rightarrow, .tp-leftarrow", function (e) {
        this.classList.add("rs-touchhover");
      }), a.document.on(a.is_mobile() ? "touchend" : "mouseleave", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-tabs,  .tp-rightarrow, .tp-leftarrow", function (e) {
        var t = this;
        requestAnimationFrame(function () {
          t.classList.remove("rs-touchhover");
        });
      }), a.hasNavClickListener = !0);
    },
    destroyCanvas: function destroyCanvas(e) {
      e && (e.width = e.height = 0, e.remove(), e = null);
    },
    checkParrentOverflows: function checkParrentOverflows(e) {
      window.requestAnimationFrame(function () {
        for (var t = a[e].cpar[0]; t.parentNode && !1 !== a.stickySupported;) {
          if ("RS-MODULE-WRAP" !== t.tagName && "RS-FULLWIDTH-WRAP" !== t.tagName && "RS-MODULE-WRAP" !== t.tagName && -1 === t.className.indexOf("wp-block-themepunch-revslider")) {
            var i = window.getComputedStyle(t);
            a.stickySupported = "hidden" !== i.overflow && "hidden" !== i.overflowX && "hidden" !== i.overflowY;
          }

          t = t.parentNode;
        }
      });
    },
    observeRemoved: function observeRemoved(e) {
      new MutationObserver(function (t) {
        try {
          document.body.contains(t[0].target) || a[e].c.revkill();
        } catch (t) {}
      }).observe(a[e].cpar[0], {
        childList: !0
      });
    },
    initNextRevslider: function initNextRevslider(e) {
      a.RS_prioList[0] === e && !1 === a.RS_toInit[e] ? (a.RS_toInit[e] = "waiting", c(e), setTimeout(function () {
        a.initNextRevslider(e);
      }, 19)) : a.RS_prioList[0] === e && "waiting" === a.RS_toInit[e] ? setTimeout(function () {
        a.initNextRevslider(e);
      }, 19) : a.RS_prioList[0] === e && !0 === a.RS_toInit[e] ? (a.RS_prioList.shift(), 0 !== a.RS_prioList.length && setTimeout(function () {
        a.initNextRevslider(e);
      }, 19)) : a.RS_prioList[0] !== e && !1 === a.RS_toInit[e] ? setTimeout(function () {
        a.initNextRevslider(e);
      }, 19) : 0 === a.RS_prioList.length && !0 === a.RS_toInit[e] && c(e);
    },
    scrollTicker: function scrollTicker(e) {
      1 != a.scrollTickerAdded && (a.slidersToScroll = [], a.scrollTickerAdded = !0, a.ISM ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function () {
        a.generalObserver();
      })) : document.addEventListener("scroll", function (e) {
        a.scrollRaF === t && (a.scrollRaF = requestAnimationFrame(a.generalObserver.bind(this, !0)));
      }, {
        passive: !0
      })), a.slidersToScroll.push(e), a.generalObserver(a.ISM);
    },
    generalObserver: function generalObserver(e, i) {
      for (var r in a.scrollRaF && (a.scrollRaF = cancelAnimationFrame(a.scrollRaF)), a.lastwindowheight = a.lastwindowheight || a.winH, a.scrollY = window.scrollY, a.slidersToScroll) {
        a.slidersToScroll.hasOwnProperty(r) && a.scrollHandling(a.slidersToScroll[r], e, t, i);
      }
    },
    wrapObserver: {
      targets: [],
      init: function init(e) {
        var t = 1,
            i = 0,
            r = 0,
            o = s.bind(a.wrapObserver);

        function s() {
          if (r++, requestAnimationFrame(o), !(r - i < 30 / t)) {
            i = r;

            for (var s = 0; s < a.wrapObserver.targets.length; s++) {
              if (a.wrapObserver.targets.hasOwnProperty(s)) {
                var n = a.wrapObserver.targets[s],
                    l = n.elem.getBoundingClientRect();
                n.lw === l.width && n.lh === l.height || 0 === l.width || (n.callback && (n.callback.pause(), n.callback.kill(), n.callback = null), n.callback = tpGS.gsap.to({}, {
                  duration: .2,
                  onComplete: e.bind(window, n.elem, n.id)
                })), n.lw = l.width, n.lh = l.height;
              }
            }
          }
        }

        s();
      },
      observe: function observe(e, t) {
        if ("" !== (e = e.getBoundingClientRect ? e : e[0].getBoundingClientRect ? e[0] : "")) {
          var i = e.getBoundingClientRect();
          a.wrapObserver.targets.push({
            elem: e,
            id: t,
            lw: i.width,
            lh: i.height
          });
        }
      }
    },
    enterViewPort: function enterViewPort(i, r) {
      !0 !== a[i].started ? (a[i].started = !0, a.lazyLoadAllSlides(i), a[i].c.trigger("revolution.slide.firstrun"), setTimeout(function () {
        L(i), "hero" !== a[i].sliderType && a.manageNavigation && a[i].navigation.use && !0 === a[i].navigation.createNavigationDone && a.manageNavigation(i), a[i].slideamount > 1 && A(i), setTimeout(function () {
          a[i] !== t && (a[i].revolutionSlideOnLoaded = !0, a[i].c.trigger("revolution.slide.onloaded"), a.calcScrollToId());
        }, 50);
      }, a[i].startDelay), a[i].startDelay = 0, window.requestAnimationFrame(function () {
        m(i);
      })) : (a[i].waitForCountDown && (A(i), a[i].waitForCountDown = !1), "playing" != a[i].sliderlaststatus && a[i].sliderlaststatus != t || a[i].c.trigger("starttimer"), a[i].lastplayedvideos != t && a[i].lastplayedvideos.length > 0 && e.each(a[i].lastplayedvideos, function (e, t) {
        a.playVideo(t, i);
      }));
    },
    leaveViewPort: function leaveViewPort(i) {
      a[i].sliderlaststatus = a[i].sliderstatus, a[i].c.trigger("stoptimer"), a[i].playingvideos != t && a[i].playingvideos.length > 0 && (a[i].lastplayedvideos = e.extend(!0, [], a[i].playingvideos), a[i].playingvideos && e.each(a[i].playingvideos, function (e, t) {
        a[i].leaveViewPortBasedStop = !0, a.stopVideo && a.stopVideo(t, i);
      }));
    },
    scrollHandling: function scrollHandling(e, i, r, o) {
      if (a[e] !== t) {
        var s = a[e].topc !== t ? a[e].topc[0].getBoundingClientRect() : 0 === a[e].canv.height ? a[e].cpar[0].getBoundingClientRect() : a[e].c[0].getBoundingClientRect(),
            n = a.ISM ? window.innerHeight : a.lastwindowheight;
        s.hheight = 0 === s.height ? 0 === a[e].canv.height ? a[e].module.height : a[e].canv.height : s.height, a[e].scrollproc = s.top < 0 || s.hheight > n && s.top < n ? s.top / s.hheight : s.bottom > n ? (s.bottom - n) / s.hheight : 0;
        var l = Math.max(0, 1 - Math.abs(a[e].scrollproc));
        a[e].viewPort.enable && ("%" === a[e].viewPort.vaType[a[e].level] && (a[e].viewPort.visible_area[a[e].level] <= l || l > 0 && l <= 1 && a[e].sbtimeline.fixed) || "px" === a[e].viewPort.vaType[a[e].level] && (s.top <= 0 && s.bottom >= a.lastwindowheight || s.top >= 0 && s.bottom <= a.lastwindowheight || s.top >= 0 && s.top < a.lastwindowheight - a[e].viewPort.visible_area[a[e].level] || s.bottom >= a[e].viewPort.visible_area[a[e].level] && s.bottom < a.lastwindowheight) ? a[e].inviewport || (a[e].inviewport = !0, a.enterViewPort(e, !0), a[e].c.trigger("enterviewport")) : a[e].inviewport && (a[e].inviewport = !1, a.leaveViewPort(e), a[e].c.trigger("leftviewport"))), a[e].inviewport ? (a.callBackHandling && a.callBackHandling(e, "parallax", "start"), requestAnimationFrame(function () {
          "fullscreen" === a[e].sliderLayout && a.getFullscreenOffsets(e);
        }), a.parallaxProcesses(e, s, o, r), a.callBackHandling && a.callBackHandling(e, "parallax", "end")) : !0 !== a.stickySupported && !1 !== a[e].fixedScrollOnState && (a[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(a[e].cpar, {
          top: 0,
          y: 0
        }), a[e].fixedScrollOnState = !1);
      }
    },
    clone: function clone(e, i) {
      if (i === t && e === t) return {};
      return function e(i, a) {
        var r = Array.isArray(i) ? [] : {};

        for (var o in i) {
          i.hasOwnProperty(o) && (i[o] !== t && "object" == _typeof(i[o]) && a ? r[o] = e(i[o], !0) : i[o] !== t && (r[o] = i[o]));
        }

        return r;
      }(e, i);
    },
    closest: function closest(e, t) {
      return e && (t(e) ? e : a.closest(e.parentNode, t));
    },
    closestNode: function closestNode(e, t) {
      return a.closest(e, function (e) {
        return e.nodeName === t;
      });
    },
    closestClass: function closestClass(e, t) {
      return a.closest(e, function (e) {
        return (" " + e.className + " ").indexOf(" " + t + " ") >= 0;
      });
    },
    getWinH: function getWinH(e) {
      return a[e].ignoreHeightChange ? a.mobileWinH : a.winH;
    },
    getWindowDimension: function getWindowDimension(e, i) {
      !1 === e ? (a.rAfScrollbar = "skip", a.winWAll = a.ISM && window.visualViewport ? document.documentElement.clientWidth : window.innerWidth, a.winWSbar = document.documentElement.clientWidth, a.ISM ? (a.zoom = i ? 1 : a.winWSbar / a.winWAll, a.winW = 1 !== a.zoom ? a.winWSbar * a.zoom : Math.min(a.winWAll, a.winWSbar), a.winH = 1 !== a.zoom ? window.innerHeight * a.zoom : window.innerHeight, i && window.visualViewport && (a.winH *= window.visualViewport.scale, a.winWAll *= window.visualViewport.scale), a.scrollBarWidth = 0) : (a.isModalOpen && a.openModalId !== t && a[a.openModalId] !== t && a[a.openModalId].canv.height > a.winH ? a.scrollBarWidth = a.mesuredScrollbarWidth : a.scrollBarWidth = a.winWAll - a.winWSbar, a.winW = Math.min(a.winWAll, a.winWSbar), a.winH = window.innerHeight), a.ISM && a.winH > 125 && (a.lastwindowheight !== t && Math.abs(a.lastwindowheight - a.winH) < 125 ? a.mobileWinH = a.lastwindowheight : a.mobileWinH = a.winH)) : clearTimeout(a.windowDimenstionDelay), a.windowDimenstionDelay = setTimeout(function () {
        a.rAfScrollbar = t, a.winWAll = a.ISM && window.visualViewport ? document.documentElement.clientWidth : window.innerWidth, a.winWSbar = document.documentElement.clientWidth, a.ISM ? (a.zoom = i ? 1 : a.winWSbar / a.winWAll, a.RS_px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, a.winW = 1 !== a.zoom ? a.winWSbar * a.zoom : Math.min(a.winWAll, a.winWSbar), a.winH = 1 !== a.zoom ? window.innerHeight * a.zoom : window.innerHeight, i && window.visualViewport && (a.winH *= window.visualViewport.scale, a.winWAll *= window.visualViewport.scale), a.scrollBarWidth = 0, i && tpGS.gsap.delayedCall(.1, function () {
          a.getWindowDimension();
        })) : (a.isModalOpen && a.openModalId !== t && a[a.openModalId] !== t && a[a.openModalId].canv.height > a.winH ? a.scrollBarWidth = a.mesuredScrollbarWidth : a.scrollBarWidth = a.winWAll - a.winWSbar, a.winW = Math.min(a.winWAll, a.winWSbar), a.winH = window.innerHeight), a.ISM && a.winH > 125 && (a.lastwindowheight !== t && Math.abs(a.lastwindowheight - a.winH) < 125 ? a.mobileWinH = a.lastwindowheight : a.mobileWinH = a.winH), !1 !== e && a.document.trigger("updateContainerSizes");
      }, 100);
    },
    aC: function aC(t, i) {
      t && (t.classList && t.classList.add ? t.classList.add("" + i) : e(t).addClass(i));
    },
    rC: function rC(t, i) {
      t && (t.classList && t.classList.remove ? t.classList.remove("" + i) : e(t).removeClass(i));
    },
    sA: function sA(e, t, i) {
      e && e.setAttribute && e.setAttribute("data-" + t, i);
    },
    gA: function gA(e, i, a) {
      return e === t ? t : e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t;
    },
    rA: function rA(e, t) {
      e && e.removeAttribute && e.removeAttribute("data-" + t);
    },
    iWA: function iWA(e, i) {
      return a[e].justifyCarousel ? "static" === i ? a[e].carousel.wrapwidth : a[e].carousel.slide_widths[i !== t ? i : a[e].carousel.focused] : a[e].gridwidth[a[e].level];
    },
    iHE: function iHE(e, t) {
      return a[e].useFullScreenHeight ? a[e].canv.height : Math.max(a[e].currentRowsHeight, a[e].gridheight[a[e].level]);
    },
    updateFixedScrollTimes: function updateFixedScrollTimes(e) {
      !0 === a[e].sbtimeline.set && !0 === a[e].sbtimeline.fixed && "auto" !== a[e].sliderLayout && (a[e].sbtimeline.rest = a[e].duration - a[e].sbtimeline.fixEnd, a[e].sbtimeline.time = a[e].duration - (a[e].sbtimeline.fixStart + a[e].sbtimeline.rest), a[e].sbtimeline.extended = a[e].sbtimeline.time / 10);
    },
    addSafariFix: function addSafariFix(e) {
      !0 === window.isSafari11 && !0 !== a[e].safari3dFix && (a[e].safari3dFix = !0, a[e].c[0].className += " safarifix");
    },
    openModalAPI: function openModalAPI(i, r, o, s, n, l) {
      if (window.RS_60_MODALS !== t && -1 != e.inArray(i, window.RS_60_MODALS) || window.RS_60_MODAL_API_CALLS !== t && -1 != e.inArray(i, window.RS_60_MODAL_API_CALLS)) e.inArray(i, window.RS_60_MODALS) >= 0 && e.fn.revolution.document.trigger("RS_OPENMODAL_" + i, r);else {
        window.RS_60_MODAL_API_CALLS = window.RS_60_MODAL_API_CALLS || [], window.RS_60_MODAL_API_CALLS.push(i), l === t && (l = {}), l.alias === t && (l.alias = i), s && a.showModalCover(n, l, "show");
        var d = {
          action: "revslider_ajax_call_front",
          client_action: "get_slider_html",
          alias: i,
          usage: "modal"
        };
        e.ajax({
          type: "post",
          url: o,
          dataType: "json",
          data: d,
          success: function success(o, d, c) {
            if (null !== o && 1 == o.success) {
              var p;
              if (n = n == t ? o.htmlid : n, o.waiting !== t) for (p in o.waiting) {
                -1 == e.inArray(o.waiting[p], RS_MODULES.waiting) && (RS_MODULES.waiting.push(o.waiting[p]), window.RS_MODULES.minimal = !1);
              }

              if (o.toload !== t) {
                var g = "";

                for (p in RS_MODULES = RS_MODULES || {}, RS_MODULES.requestedScripts = [], o.toload) {
                  o.toload.hasOwnProperty(p) && (RS_MODULES != t && RS_MODULES[p] != t && !0 === RS_MODULES[p].loaded || -1 === e.inArray(p, RS_MODULES.requestedScripts) && (RS_MODULES.requestedScripts.push(p), g += o.toload[p]));
                }

                "" !== g && e("body").append(g);
              }

              RS_MODULES !== t && RS_MODULES.modules[o.htmlid] != t || e("body").append(o.data), s && a.showModalCover(n, l, "hide"), a[i] !== t && a[i].openModalApiListener ? e.fn.revolution.document.trigger("RS_OPENMODAL_" + i, r) : e(document).on("RS_MODALOPENLISTENER_" + i, function () {
                e.fn.revolution.document.trigger("RS_OPENMODAL_" + i, r);
              });
            } else s && a.showModalCover(n, l, "hide");
          },
          error: function error(e) {
            s && a.showModalCover(n, l, "hide"), console.log("Modal Can not be Loaded"), console.log(e);
          }
        });
      }
    },
    showModalCover: function showModalCover(i, r, o) {
      switch (o) {
        case "show":
          var s;

          if (r.spin !== t && "off" !== r.spin && (s = a.buildSpinner(i, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg) {
            var n = e('<rs-modal-cover data-alias="' + r.alias + '" data-rid="' + i + '" id="' + i + '_modal_bg" style="display:none;opacity:0;background:' + r.bg + '"></rs-modal-cover>');
            e("body").append(n), r.speed = parseFloat(r.speed), r.speed = r.speed > 200 ? r.speed / 1e3 : r.speed, r.speed = Math.max(Math.min(3, r.speed), .3), tpGS.gsap.to(n, r.speed, {
              display: "block",
              opacity: 1,
              ease: "power3.inOut"
            }), a.isModalOpen = !0, s !== t && n.append(s);
          } else s !== t && a[i].c.append(s);

          break;

        case "hide":
          (n = e('rs-modal-cover[data-alias="' + r.alias + '"] .modalspinner')) !== t && n.length > 0 ? n.remove() : i !== t && a[i].c.find(".modalspinner").remove();
      }
    },
    revModal: function revModal(i, r) {
      if (i !== t && a[i] !== t && "clicked" !== a[i].modal.closeProtection) {
        if (!0 === a[i].modal.closeProtection) return a[i].modal.closeProtection, void setTimeout(function () {
          a[i].modal.closeProtection = !1, a.revModal(i, r);
        }, 750);

        switch (a[i].modal.lastModalCall = r.mode, r.mode) {
          case "show":
            if (!0 === a[i].modal.isLive) return;
            if (!0 === a.anyModalclosing) return;
            a.document.trigger("RS_MODALOPENED"), a[i].modal.isLive = !0, r.slide = r.slide === t ? "to0" : r.slide, a[i].modal.bodyclass !== t && a[i].modal.bodyclass.length >= 0 && document.body.classList.add(a[i].modal.bodyclass), a[i].modal.bg.attr("data-rid", i), tpGS.gsap.to(a[i].modal.bg, a[i].modal.coverSpeed, {
              display: "block",
              opacity: 1,
              ease: "power3.inOut"
            }), tpGS.gsap.set(a[i].modal.c, {
              display: "auto" === a[i].sliderLayout ? "inline-block" : "block",
              opacity: 0
            }), a[i].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(a[i].cpar, {
              display: "block",
              opacity: 1
            });
            var o = {
              a: 0
            };
            a.isModalOpen = !0, a[i].clearModalBG = !0, "carousel" === a[i].sliderType && a[i].pr_active_bg !== t && a[i].pr_active_bg.length > 0 && tpGS.gsap.to(a[i].pr_active_bg, .5, {
              opacity: 1
            }), tpGS.gsap.fromTo(o, a[i].modal.coverSpeed / 5, {
              a: 0
            }, {
              a: 10,
              ease: "power3.inOut",
              onComplete: function onComplete() {
                a.openModalId = i, a[i].sliderisrunning ? a.callingNewSlide(i, r.slide) : ("to0" !== r.slide && (a[i].startWithSlideKey = r.slide), h(i));
              }
            }), setTimeout(function () {
              tpGS.gsap.fromTo([a[i].modal.c], .01, {
                opacity: 0
              }, {
                opacity: 1,
                delay: a[i].modal.coverSpeed / 4,
                ease: "power3.inOut",
                onComplete: function onComplete() {}
              }), window.overscrollhistory = document.body.style.overflow, a[i].modal.allowPageScroll || (document.body.style.overflow = "hidden"), "fullscreen" === a[i].sliderLayout && a.getWindowDimension();
            }, 250), "fullscreen" !== a[i].sliderLayout && a.getWindowDimension();
            break;

          case "close":
            if (!0 === a.anyModalclosing) return;
            a.anyModalclosing = !0, a.openModalId = t, k(i), document.body.style.overflow = window.overscrollhistory, a[i].cpar.addClass("hideallscrollbars"), a[i].modal.bodyclass !== t && a[i].modal.bodyclass.length >= 0 && document.body.classList.remove(a[i].modal.bodyclass), tpGS.gsap.to(a[i].modal.bg, a[i].modal.coverSpeed, {
              display: "none",
              opacity: 0,
              ease: "power3.inOut"
            }), tpGS.gsap.to(a[i].modal.c, a[i].modal.coverSpeed / 6.5, {
              display: "none",
              delay: a[i].modal.coverSpeed / 4,
              opacity: 0,
              onComplete: function onComplete() {
                tpGS.gsap.set(a[i].cpar, {
                  display: "none",
                  opacity: 0
                }), a.document.trigger("revolution.all.resize"), a.document.trigger("revolution.modal.close", [a[i].modal]), a.getWindowDimension(), a.isModalOpen = !1;
              }
            }), a[i].modal.closeProtection = !0, clearTimeout(a[i].modal.closeTimer), a[i].modal.closeTimer = setTimeout(function () {
              a.anyModalclosing = !1, a[i].modal.isLive = !1, a[i].modal.closeProtection = !1;
            }, Math.max(750, 1020 * a[i].modal.coverSpeed));
            break;

          case "init":
            if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(a[i].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(a[i].modal.alias), a[i].modal.listener === t && (a[i].modal.c = e("#" + i + "_modal"), !1 !== a[i].modal.cover && "false" !== a[i].modal.cover || (a[i].modal.coverColor = "transparent"), a[i].modal.bg = e('rs-modal-cover[data-alias="' + a[i].modal.alias + '"]'), a[i].modal.bg === t || 0 === a[i].modal.bg.length ? (a[i].modal.bg = e('<rs-modal-cover style="display:none;opacity:0;background:' + a[i].modal.coverColor + '" data-rid="' + i + '" id="' + i + '_modal_bg"></rs-modal-cover>'), "auto" === a[i].sliderLayout && a[i].modal.cover ? e("body").append(a[i].modal.bg) : a[i].modal.c.append(a[i].modal.bg)) : a[i].modal.bg.attr("data-rid", i), a[i].modal.c[0].className += "rs-modal-" + a[i].sliderLayout, a[i].modal.calibration = {
              left: "auto" === a[i].sliderLayout ? "center" === a[i].modal.horizontal ? "50%" : "left" === a[i].modal.horizontal ? "0px" : "auto" : "0px",
              right: "auto" === a[i].sliderLayout ? "center" === a[i].modal.horizontal ? "auto" : "left" === a[i].modal.horizontal ? "auto" : "0px" : "0px",
              top: "auto" === a[i].sliderLayout || "fullwidth" === a[i].sliderLayout ? "middle" === a[i].modal.vertical ? "50%" : "top" === a[i].modal.vertical ? "0px" : "auto" : "0px",
              bottom: "auto" === a[i].sliderLayout || "fullwidth" === a[i].sliderLayout ? "middle" === a[i].modal.vertical ? "auto" : "top" === a[i].modal.vertical ? "auto" : "0px" : "0px",
              y: ("auto" === a[i].sliderLayout || "fullwidth" === a[i].sliderLayout) && "middle" === a[i].modal.vertical ? "-50%" : 0,
              x: "auto" === a[i].sliderLayout && "center" === a[i].modal.horizontal ? "-50%" : 0
            }, "-50%" === a[i].modal.calibration.y && (a[i].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(a[i].modal.c, "auto" === a[i].sliderLayout || "fullscreen" === a[i].sliderLayout ? e.extend(!0, a[i].modal.calibration, {
              opacity: 0,
              display: "none"
            }) : {
              opacity: 0,
              display: "none"
            }), "fullwidth" === a[i].sliderLayout && tpGS.gsap.set(a[i].modal.c.find("rs-module-wrap"), a[i].modal.calibration), a.document.on("RS_OPENMODAL_" + a[i].modal.alias, function (e, t) {
              a[i].initEnded = !0, a.revModal(i, {
                mode: "show",
                slide: t
              });
            }), a[a[i].modal.alias] = a[a[i].modal.alias] || {}, a[a[i].modal.alias].openModalApiListener = !0, a.document.trigger("RS_MODALOPENLISTENER_" + a[i].modal.alias), a.document.on("click", "rs-modal-cover", function () {
              a.revModal(a.gA(this, "rid"), {
                mode: "close"
              });
            }), a[i].modal.listener = !0, a[i].modal.trigger !== t)) {
              var s,
                  n = a[i].modal.trigger.split(";");

              for (o in a[i].modal.trigger = {}, n) {
                if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
                  case "t":
                    a[i].modal.trigger.time = parseInt(s[1], 0);
                    break;

                  case "s":
                    a[i].modal.trigger.scroll = s[1];
                    break;

                  case "so":
                    a[i].modal.trigger.scrollo = parseInt(s[1], 0);
                    break;

                  case "e":
                    a[i].modal.trigger.event = s[1];
                    break;

                  case "ha":
                    a[i].modal.trigger.hash = s[1];
                    break;

                  case "co":
                    a[i].modal.trigger.cookie = s[1];
                }
              }

              var l = !0;

              if (a[i].modal.trigger.cookie !== t ? l = "true" !== a.getCookie(a[i].modal.alias + "_modal_one_time") : "true" == a.getCookie(a[i].modal.alias + "_modal_one_time") && a.setCookie(a[i].modal.alias + "_modal_one_time", !1, 10), l && (a[i].modal.trigger.time !== t && 0 !== a[i].modal.trigger.time && (a[i].modal.trigger.cookie !== t && a.setCookie(a[i].modal.alias + "_modal_one_time", !0, a[i].modal.trigger.cookie), setTimeout(function () {
                a.document.trigger("RS_OPENMODAL_" + a[i].modal.alias);
              }, a[i].modal.trigger.time)), a[i].modal.trigger.scrollo !== t || a[i].modal.trigger.scroll !== t)) {
                a[i].modal.trigger.scroll !== t && e(a[i].modal.trigger.scroll)[0] !== t && (a[i].modal.trigger.scroll = e(a[i].modal.trigger.scroll)[0]);

                var d = function d() {
                  if (a[i].modal.trigger.scroll !== t) var e = "string" == typeof a[i].modal.trigger.scroll ? document.getElementById(a[i].modal.trigger.scroll) : "object" == _typeof(a[i].modal.trigger.scroll) ? a[i].modal.trigger.scroll : t,
                      r = e !== t && null !== e ? a[i].modal.trigger.scroll.getBoundingClientRect() : t;
                  (a[i].modal.trigger.scroll !== t && r !== t && Math.abs(r.top + (r.bottom - r.top) / 2 - a.getWinH(i) / 2) < 50 || a[i].modal.trigger.scrollo !== t && Math.abs(a[i].modal.trigger.scrollo - (a.scrollY !== t ? a.scrollY : window.scrollY)) < 100) && (a.document.trigger("RS_OPENMODAL_" + a[i].modal.alias), a[i].modal.trigger.cookie !== t && a.setCookie(a[i].modal.alias + "_modal_one_time", !0, a[i].modal.trigger.cookie), document.removeEventListener("scroll", d));
                };

                document.addEventListener("scroll", d, {
                  id: i,
                  passive: !0
                });
              }

              a[i].modal.trigger.event !== t && a.document.on(a[i].modal.trigger.event, function () {
                a.document.trigger("RS_OPENMODAL_" + a[i].modal.alias);
              }), "t" == a[i].modal.trigger.hash && window.location.hash.substring(1) == a[i].modal.alias && a.document.trigger("RS_OPENMODAL_" + a[i].modal.alias);
            }

        }
      }
    },
    smartConvertDivs: function smartConvertDivs(e) {
      var t = "";

      if ("string" == typeof e && e.indexOf("#") >= 0) {
        var i = e.split(","),
            a = i.length - 1;

        for (var r in i) {
          t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "");
        }
      } else t = e;

      return t;
    },
    revToResp: function revToResp(e, i, a, r) {
      if ((e = e === t ? a : e) !== t) {
        if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != _typeof(e) || Array.isArray(e))) {
          try {
            e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r);
          } catch (e) {}

          for (e = Array.isArray(e) ? e : [e]; e.length < i;) {
            e[e.length] = e[e.length - 1];
          }
        }

        return e;
      }
    },
    loadImages: function loadImages(i, r, o, s) {
      if (i !== t && 0 !== i.length) {
        var n = [];
        if (Array.isArray(i)) for (var l in i) {
          i.hasOwnProperty(l) && i[l] !== t && n.push(i[l]);
        } else n.push(i);

        for (var d in n) {
          if (n.hasOwnProperty(d)) {
            var c = n[d].querySelectorAll("img, rs-sbg, .rs-svg"),
                p = a[r].lazyOnBg ? n[d].querySelectorAll("rs-bg-elem, rs-column, rs-layer") : [];

            for (var l in c) {
              if (c.hasOwnProperty(l)) {
                c[l] !== t && c[l].dataset !== t && c[l].dataset.src !== t && c[l].dataset.src.indexOf("dummy.png") >= 0 && c[l].src.indexOf("data") >= 0 && delete c[l].dataset.src;
                var u = g(c[l], t, r),
                    h = u !== t ? u : a.gA(c[l], "svg_src") != t ? a.gA(c[l], "svg_src") : c[l].src === t ? e(c[l]).data("src") : c[l].src,
                    m = a.gA(c[l], "svg_src") != t ? "svg" : "img";
                h !== t && a[r].loadqueue !== t && 0 == a[r].loadqueue.filter(function (e) {
                  return e.src === h;
                }).length && a[r].loadqueue.push({
                  src: h,
                  img: c[l],
                  index: l,
                  starttoload: Date.now(),
                  type: m || "img",
                  prio: o,
                  progress: c[l].complete && h === c[l].src ? "loaded" : "prepared",
                  "static": s,
                  width: c[l].complete && h === c[l].src ? c[l].width : t,
                  height: c[l].complete && h === c[l].src ? c[l].height : t
                });
              }
            }

            for (var l in p) {
              p.hasOwnProperty(l) && p[l] !== t && p[l].dataset !== t && p[l].dataset.bglazy !== t && p[l].style.backgroundImage.indexOf("dummy.png") >= 0 && (p[l].style.backgroundImage = 'url("' + p[l].dataset.bglazy + '")');
            }

            p[l] !== t && p[l].dataset !== t && p[l].dataset.bglazy !== t && p[l].style.backgroundImage.indexOf("dummy.png") >= 0 && (p[l].style.backgroundImage = 'url("' + p[l].dataset.bglazy + '")');
          }
        }

        !a[r].cparBgChecked && a[r].cpar[0] !== t && a[r].cpar[0].dataset !== t && a[r].cpar[0].dataset.bglazy !== t && a[r].cpar[0].style.backgroundImage.indexOf("dummy.png") >= 0 && (a[r].cparBgChecked = !0, a[r].cpar[0].style.backgroundImage = 'url("' + a[r].cpar[0].dataset.bglazy + '")'), _(r);
      }
    },
    waitForCurrentImages: function waitForCurrentImages(i, r, o) {
      if (i !== t && 0 !== i.length && a[r] !== t) {
        var s = !1,
            n = [];
        if (Array.isArray(i)) for (var l in i) {
          i.hasOwnProperty(l) && i[l] !== t && n.push(i[l]);
        } else n.push(i);

        for (var d in n) {
          if (n.hasOwnProperty(d)) {
            var c = n[d].querySelectorAll("img, rs-sbg, .rs-svg");

            for (l in c) {
              if (c.hasOwnProperty(l) && "length" !== l && !(c[l].className.indexOf("rs-pzimg") >= 0)) {
                var p = e(c[l]).data(),
                    u = g(c[l], t, r),
                    h = u !== t ? u : a.gA(c[l], "svg_src") != t ? a.gA(c[l], "svg_src") : c[l].src === t ? p.src : c[l].src,
                    m = a.getLoadObj(r, h);

                if (a.sA(c[l], "src-rs-ref", h), p.loaded === t && m !== t && m.progress && "loaded" == m.progress) {
                  if ("img" == m.type) {
                    if (c[l].src.slice(c[l].src.length - 10) !== m.src.slice(m.src.length - 10) && (c[l].src = m.src), p.slidebgimage) {
                      -1 == m.src.indexOf("images/transparent.png") && -1 == m.src.indexOf("assets/transparent.png") || p.bgcolor === t || p.bgcolor !== t && "transparent" !== p.bgcolor && (m.bgColor = !0, m.useBGColor = !0), a.sA(n[d], "owidth", m.width), a.sA(n[d], "oheight", m.height);
                      var v = a.getByTag(n[d], "RS-SBG-WRAP"),
                          f = a.gA(n[d], "key");

                      if (a[r].sbgs[f].loadobj = m, v.length > 0 && (a.sA(v[0], "owidth", m.width), a.sA(v[0], "oheight", m.height)), "carousel" === a[r].sliderType) {
                        var y = e(v),
                            w = a.getSlideIndex(r, f);
                        (a[r].carousel.justify && a[r].carousel.slide_widths === t || a[r].carousel.slide_width === t) && a.setCarouselDefaults(r, !0), y.data("panzoom") === t || a[r].panzoomTLs !== t && a[r].panzoomTLs[w] !== t || a.startPanZoom(y, r, 0, w, "prepare", f), a[r].sbgs[f].isHTML5 && !a[r].sbgs[f].videoisplaying && (a[r].sbgs[f].video = a[r].sbgs[f].loadobj.img), n[d].getAttribute("data-iratio") !== t && !n[d].getAttribute("data-iratio") && m.img && m.img.naturalWidth && (n[d].setAttribute("data-iratio", m.img.naturalWidth / m.img.naturalHeight), a.setCarouselDefaults(r, "redraw", !0), !0 === a[r].carousel.ocfirsttun && a.organiseCarousel(r, "right", !0, !1, !1)), a.updateSlideBGs(r, f, a[r].sbgs[f]);
                      }
                    }
                  } else "svg" == m.type && "loaded" == m.progress && (c[l].innerHTML = m.innerHTML);

                  p.loaded = !0;
                }

                m && m.progress && m.progress.match(/inprogress|inload|prepared/g) && (!m.error && Date.now() - m.starttoload < 15e3 ? s = !0 : (m.progress = "failed", m.reported_img || (m.reported_img = !0, console.log(h + "  Could not be loaded !")))), 1 != a[r].youtubeapineeded || window.YT && YT.Player != t || (s = x("youtube", r)), 1 != a[r].vimeoapineeded || window.Vimeo || (s = x("vimeo", r));
              }
            }
          }
        }

        e.each(a[r].loadqueue, function (e, t) {
          !0 === t["static"] && ("loaded" != t.progress && "done" !== t.progress || "failed" === t.progress) && ("failed" != t.progress || t.reported ? !t.error && Date.now() - t.starttoload < 5e3 ? s = !0 : t.reported || (t.reported = S(t.src, t.error)) : t.reported = S(t.src, t.error));
        }), s ? tpGS.gsap.delayedCall(.02, a.waitForCurrentImages, [i, r, o]) : o !== t && tpGS.gsap.delayedCall(1e-4, o);
      }
    },
    updateVisibleArea: function updateVisibleArea(e) {
      for (var i in a[e].viewPort.visible_area = a.revToResp(a[e].viewPort.visible_area, a[e].rle, "0px"), a[e].viewPort.vaType = new Array(4), a[e].viewPort.visible_area) {
        a[e].viewPort.visible_area.hasOwnProperty(i) && (!1 === a[e].viewPort.local && !0 === a[e].viewPort.global ? (a[e].viewPort.vaType[i] = a[e].viewPort.globalDist.indexOf("%") >= 0 ? "%" : "px", a[e].viewPort.visible_area[i] = parseInt(a[e].viewPort.globalDist)) : (a.isNumeric(a[e].viewPort.visible_area[i]) && (a[e].viewPort.visible_area[i] += "%"), a[e].viewPort.visible_area[i] !== t && (a[e].viewPort.vaType[i] = a[e].viewPort.visible_area[i].indexOf("%") >= 0 ? "%" : "px"), a[e].viewPort.visible_area[i] = parseInt(a[e].viewPort.visible_area[i], 0)), a[e].viewPort.visible_area[i] = "%" == a[e].viewPort.vaType[i] ? a[e].viewPort.visible_area[i] / 100 : a[e].viewPort.visible_area[i]);
      }
    },
    observeFonts: function observeFonts(e, i, r) {
      r = r === t ? 0 : r, a.fonts === t && (a.fonts = {}, a.monoWidth = l("monospace"), a.sansWidth = l("sans-serif"), a.serifWidth = l("serif")), r++;
      var o = a.fonts[e];
      !0 !== a.fonts[e] && (a.fonts[e] = a.monoWidth !== l(e + ",monospace") || a.sansWidth !== l(e + ",sans-serif") || a.serifWidth !== l(e + ",serif")), 100 === r || (!1 === o || o === t) && !0 === a.fonts[e] ? (l(e + ",monospace", !0), l(e + ",sans-serif", !0), l(e + ",serif", !0), i()) : setTimeout(function () {
        a.observeFonts(e, i, r);
      }, 19);
    },
    getversion: function getversion() {
      return i;
    },
    currentSlideIndex: function currentSlideIndex(e) {
      return a[e].pr_active_key;
    },
    iOSVersion: function iOSVersion() {
      return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i);
    },
    setIsIOS: function setIsIOS() {
      a.isiPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, a.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && void 0 !== navigator.standalone;
    },
    setIsChrome8889: function setIsChrome8889() {
      a.isChrome8889 = a.isChrome8889 === t ? navigator.userAgent.indexOf("Chrome/88") >= 0 || navigator.userAgent.indexOf("Chrome/89") >= 0 : a.isChrome8889;
    },
    isIE: function isIE() {
      if (a.isIERes === t) {
        var i = e('<div style="display:none;"/>').appendTo(e("body"));
        i.html("\x3c!--[if IE 8]><a>&nbsp;</a><![endif]--\x3e"), a.isIERes = i.find("a").length, i.remove();
      }

      return a.isIERes;
    },
    is_mobile: function is_mobile() {
      var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
          i = !1;
      if (window.orientation !== t) i = !0;else for (var a in e) {
        e.hasOwnProperty(a) && (i = !!(i || navigator.userAgent.split(e[a]).length > 1) || i);
      }
      return i && document.body && -1 === document.body.className.indexOf("rs-ISM") && (document.body.className += " rs-ISM"), i;
    },
    is_android: function is_android() {
      var e = ["android", "Android"],
          t = !1;

      for (var i in e) {
        e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
      }

      return t;
    },
    callBackHandling: function callBackHandling(t, i, r) {
      a[t].callBackArray && e.each(a[t].callBackArray, function (e, t) {
        t && t.inmodule && t.inmodule === i && t.atposition && t.atposition === r && t.callback && t.callback.call();
      });
    },
    get_browser: function get_browser() {
      var e,
          t = navigator.userAgent,
          i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0]);
    },
    get_browser_version: function get_browser_version() {
      var e,
          t = navigator.appName,
          i = navigator.userAgent,
          a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1];
    },
    isFaceBook: function isFaceBook() {
      return a.isFaceBookApp == t && (a.isFaceBookApp = navigator.userAgent || navigator.vendor || window.opera, a.isFaceBookApp = a.isFaceBookApp.indexOf("FBAN") > -1 || a.isFaceBookApp.indexOf("FBAV") > -1), a.isFaceBookApp;
    },
    isFirefox: function isFirefox(e) {
      return a[e].isFirefox = a[e].isFirefox === t ? "Firefox" === a.get_browser() : a[e].isFirefox, a.isFF = a[e].isFirefox, a[e].isFirefox;
    },
    isSafari11: function isSafari11() {
      return "safari" === a.trim(a.get_browser().toLowerCase()) && parseFloat(a.get_browser_version()) >= 11;
    },
    isWebkit: function isWebkit() {
      var e = /(webkit)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase());
      return e && e[1] && "webkit" === e[1];
    },
    isIE11: function isIE11() {
      return a.IE11 = a.IE11 === t ? !!navigator.userAgent.match(/Trident.*rv\:11\./) : a.IE11, a.IE11;
    },
    checkBackdrop: function checkBackdrop() {
      var e = document.createElement("div");
      e.style.cssText = "-webkit-backdrop-filter: blur(2px)";
      var i = 0 != e.style.length,
          r = document.documentMode === t || document.documentMode > 9;
      i && r || (e.style.cssText = "backdrop-filter: blur(2px)", i = 0 != e.style.length), e = null, a.useBackdrop = i && r;
    },
    deepLink: function deepLink(e, i) {
      if (i !== t) {
        var r = parseInt(i.toString().replace(/^slide/, "").replace("-", ""), 10);
        if (isNaN(r)) for (var o in a[e].slides) {
          if (a[e].slides.hasOwnProperty(o) && a.gA(a[e].slides[o], "deeplink") === i) {
            r = parseInt(a.gA(a[e].slides[o], "originalindex"), 10);
            break;
          }
        }
        return isNaN(r) || r < 1 || r > a[e].realslideamount ? void 0 : r;
      }
    },
    getHorizontalOffset: function getHorizontalOffset(e, t) {
      var i = d(e, ".outer-left"),
          a = d(e, ".outer-right");
      return "left" == t ? i : "right" == t ? a : "all" == t ? {
        left: i,
        right: a,
        both: i + a,
        inuse: i + a != 0
      } : i + a;
    },
    getComingSlide: function getComingSlide(e, i) {
      var r = a[e].pr_next_key !== t ? a[e].pr_next_key : a[e].pr_processing_key !== t ? a[e].pr_processing_key : a[e].pr_active_key,
          o = 0;
      if (o = 0, a[e].pr_active_slide !== t && "true" == a.gA(a[e].pr_active_slide[0], "not_in_nav") && (r = a[e].pr_lastshown_key), i !== t && a.isNumeric(i) || i !== t && i.match(/to/g)) o = 1 === i || -1 === i ? parseInt(r, 0) + i < 0 ? a[e].slideamount - 1 : parseInt(r, 0) + i >= a[e].slideamount ? 0 : parseInt(r, 0) + i : (i = a.isNumeric(i) ? i : parseInt(i.split("to")[1], 0)) < 0 ? 0 : i > a[e].slideamount - 1 ? a[e].slideamount - 1 : i;else if (i) for (var s in a[e].slides) {
        a[e].slides.hasOwnProperty(s) && (o = a[e].slides && a[e].slides[s] && (a.gA(a[e].slides[s], "key") === i || a[e].slides[s].id === i) ? s : o);
      }
      return {
        nindex: o,
        aindex: r
      };
    },
    callingNewSlide: function callingNewSlide(e, i, r, o) {
      var s = a.getComingSlide(e, i);
      a[e].pr_next_key = s.nindex, a[e].sdir = "bullet" !== a[e].sc_indicator && a[e].pr_active_key == a[e].slideamount - 1 && 0 == a[e].pr_next_key ? 0 : a[e].pr_next_key < a[e].pr_active_key ? 1 : 0, r && a[e].carousel !== t && (a[e].carousel.focused = a[e].pr_next_key), a[e].ctNavElement ? a[e].ctNavElement = !1 : a[e].c.trigger("revolution.nextslide.waiting"), (a[e].started && s.aindex === a[e].pr_next_key && s.aindex === a[e].pr_lastshown_key || a[e].pr_next_key !== s.aindex && -1 != a[e].pr_next_key && a[e].pr_lastshown_key !== t) && L(e, r, o);
    },
    getLoadObj: function getLoadObj(e, i) {
      var r = a[e].loadqueue !== t && a[e].loadqueue.filter(function (e) {
        return e.src === i;
      })[0];
      return r === t ? {
        src: i
      } : r;
    },
    getResponsiveLevel: function getResponsiveLevel(e) {
      var t = 9999,
          i = 0,
          r = 0,
          o = 0;
      if (a[e].responsiveLevels && a[e].responsiveLevels.length) for (var s in a[e].responsiveLevels) {
        a[e].responsiveLevels.hasOwnProperty(s) && (a.winWAll < a[e].responsiveLevels[s] && (0 == i || i > parseInt(a[e].responsiveLevels[s])) && (t = parseInt(a[e].responsiveLevels[s]), o = parseInt(s), i = parseInt(a[e].responsiveLevels[s])), a.winWAll > a[e].responsiveLevels[s] && i < a[e].responsiveLevels[s] && (i = parseInt(a[e].responsiveLevels[s]), r = parseInt(s)));
      }
      return i < t ? r : o;
    },
    getSizeMultpilicator: function getSizeMultpilicator(e, t, i) {
      var r = {
        h: 0,
        w: 0
      };
      return a[e].justifyCarousel ? r.h = r.w = 1 : (r.w = i.width / a[e].gridwidth[a[e].level], r.h = i.height / a[e].gridheight[a[e].level], r.w = isNaN(r.w) ? 1 : r.w, r.h = isNaN(r.h) ? 1 : r.h, 1 == a[e].enableUpscaling ? r.h = r.w : (r.h > r.w ? r.h = r.w : r.w = r.h, (r.h > 1 || r.w > 1) && (r.w = 1, r.h = 1))), r;
    },
    updateDims: function updateDims(e, i) {
      var r = a[e].pr_processing_key || a[e].pr_active_key || 0,
          o = a[e].pr_active_key || 0,
          s = a[e].modal !== t && a[e].modal.useAsModal,
          n = s ? a.winWAll : a.winW,
          l = !1;

      if (a[e].lastScrollBarWidth = a.scrollBarWidth, a[e].redraw = a[e].redraw === t ? {} : a[e].redraw, a[e].module = a[e].module === t ? {} : a[e].module, a[e].canv = a[e].canv === t ? {} : a[e].canv, a[e].content = a[e].content === t ? {} : a[e].content, a[e].drawUpdates = {
        c: {},
        cpar: {},
        canv: {}
      }, "carousel" == a[e].sliderType ? a[e].module.margins = {
        top: parseInt(a[e].carousel.padding_top || 0, 0),
        bottom: parseInt(a[e].carousel.padding_bottom || 0, 0)
      } : a[e].module.margins = {
        top: 0,
        bottom: 0
      }, a[e].module.paddings === t && (a[e].module.paddings = {
        top: parseInt(a[e].cpar.css("paddingTop"), 0) || 0,
        bottom: parseInt(a[e].cpar.css("paddingBottom"), 0) || 0
      }), a[e].blockSpacing !== t ? (a[e].block = {
        bottom: a[e].blockSpacing.bottom !== t ? parseInt(a[e].blockSpacing.bottom[a[e].level], 0) : 0,
        top: a[e].blockSpacing.top !== t ? parseInt(a[e].blockSpacing.top[a[e].level], 0) : 0,
        left: a[e].blockSpacing.left !== t ? parseInt(a[e].blockSpacing.left[a[e].level], 0) : 0,
        right: a[e].blockSpacing.right !== t ? parseInt(a[e].blockSpacing.right[a[e].level], 0) : 0
      }, a[e].block.hor = a[e].block.left + a[e].block.right, a[e].block.ver = a[e].block.top + a[e].block.bottom) : a[e].block === t && (a[e].block = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        hor: 0,
        ver: 0
      }), a[e].blockSpacing !== t) {
        var d = {
          paddingLeft: a[e].block.left,
          paddingRight: a[e].block.right,
          marginTop: a[e].block.top,
          marginBottom: a[e].block.bottom
        },
            c = JSON.stringify(d);
        d !== a[e].emptyObject && c !== a[e].caches.setsizeBLOCKOBJ && (tpGS.gsap.set(a[e].blockSpacing.block, d), a[e].caches.setsizeBLOCKOBJ = c, l = !0);
      }

      if (a[e].levelForced = a[e].level = a.getResponsiveLevel(e), a[e].rowHeights = a.getRowHeights(e), a[e].aratio = a[e].gridheight[a[e].level] / a[e].gridwidth[a[e].level], a[e].module.width = "auto" === a[e].sliderLayout || 1 == a[e].disableForceFullWidth ? a[e].cpar.width() : n - a[e].block.hor, a[e].outNavDims = a.getOuterNavDimension(e), a[e].canv.width = a[e].module.width - a[e].outNavDims.horizontal - (s ? a.scrollBarWidth : 0), s && "auto" === a[e].sliderLayout && (a[e].canv.width = Math.min(a[e].gridwidth[a[e].level], n)), "fullscreen" === a[e].sliderLayout || a[e].infullscreenmode) {
        var p = a.getWinH(e) - (!0 === a[e].modal.useAsModal ? 0 : a.getFullscreenOffsets(e));
        a[e].canv.height = Math.max(a[e].rowHeights.cur, Math.max(p - a[e].outNavDims.vertical, a[e].minHeight)), o !== r && (a[e].currentSlideHeight = Math.max(a[e].rowHeights.last, Math.max(p - a[e].outNavDims.vertical, a[e].minHeight)), a[e].redraw.maxHeightOld = !0), a[e].drawUpdates.c.height = "100%";
      } else a[e].canv.height = a[e].keepBPHeight ? a[e].gridheight[a[e].level] : Math.round(a[e].canv.width * a[e].aratio), a[e].canv.height = a[e].autoHeight ? a[e].canv.height : Math.min(a[e].canv.height, a[e].gridheight[a[e].level]), a[e].carousel.prevNextVisCalculated = "carousel" == a[e].sliderType && "v" == a[e].carousel.orientation ? "%" == a[e].carousel.prevNextVisType ? a[e].canv.height * a[e].carousel.prevNextVis : a[e].carousel.prevNextVis : 0, a[e].canv.height = Math.max(Math.max(a[e].rowHeights.cur, a[e].canv.height), a[e].minHeight) + a[e].carousel.prevNextVisCalculated, a[e].drawUpdates.c.height = a[e].canv.height;

      "fullscreen" !== a[e].sliderLayout && "fullwidth" !== a[e].sliderLayout || (a[e].canv.width -= a[e].cpar.outerWidth() - a[e].cpar.width(), "fullscreen" === a[e].sliderLayout && (a[e].canv.height -= a[e].cpar.outerHeight() - a[e].cpar.height())), a[e].module.height = a[e].canv.height, "fullwidth" != a[e].sliderLayout || a[e].fixedOnTop || (a[e].drawUpdates.c.maxHeight = 0 != a[e].maxHeight ? Math.min(a[e].canv.height, a[e].maxHeight) : a[e].canv.height), a[e].CM = a.getSizeMultpilicator(e, a[e].enableUpscaling, {
        width: a[e].canv.width,
        height: a[e].canv.height
      }), a[e].content.width = a[e].gridwidth[a[e].level] * a[e].CM.w, a[e].content.height = Math.round(Math.max(a[e].rowHeights.cur, a[e].gridheight[a[e].level] * a[e].CM.h));
      var g = a[e].module.margins.top + a[e].module.margins.bottom + ("fullscreen" === a[e].sliderLayout ? 0 : a[e].outNavDims.vertical) + a[e].canv.height + a[e].module.paddings.top + a[e].module.paddings.bottom;
      a[e].drawUpdates.cpar.height = g, a[e].drawUpdates.cpar.width = "auto" === a[e].sliderLayout ? "auto" : a[e].module.width, "auto" === a[e].sliderLayout || "fullscreen" === a[e].sliderLayout && !0 === a[e].disableForceFullWidth || a[e].rsFullWidthWrap === t ? "fullscreen" == a[e].sliderLayout && 1 == a[e].disableForceFullWidth && (a[e].drawUpdates.cpar.left = 0) : a[e].drawUpdates.cpar.left = 0 - Math.ceil(a[e].rsFullWidthWrap.offset().left - (a[e].outNavDims.left + a[e].block.left)), a[e].sbtimeline.set && a[e].sbtimeline.fixed ? (a[e].sbtimeline.extended === t && a.updateFixedScrollTimes(e), a[e].forcerHeight = 2 * g + a[e].sbtimeline.extended, a[e].sbtimeline.pullc && a[e].rsFullWidthWrap !== t && null !== a[e].rsFullWidthWrap[0] && requestAnimationFrame(function () {
        var t = a[e].rsFullWidthWrapMarginBottom + -1 * a[e].forcerHeight;
        a[e].rsFullWidthWrap[0].style.marginBottom = (isNaN(t) ? a[e].rsFullWidthBottomMarginPush : a[e].rsFullWidthBottomMarginPush + t) + "px";
      }), a[e].rsFullWidthWrap !== t && null !== a[e].rsFullWidthWrap[0] && "fullscreen" == a[e].sliderLayout && (a[e].rsFullWidthBottomMarginPush = a.getFullscreenOffsets(e), a[e].rsFullWidthWrap[0].style.marginBottom = a[e].rsFullWidthBottomMarginPush + "px")) : a[e].forcerHeight = g, a[e].forcerHeight !== a[e].caches.setsizeForcerHeight && a[e].forcer !== t && (a[e].caches.setsizeForcerHeight = a[e].forcerHeight, l = !0, a[e].redraw.forcer = !0), a[e].drawUpdates.c.width = a[e].canv.width, "auto" === a[e].sliderLayout && (a[e].drawUpdates.c.left = a[e].outNavDims.left), a[e].drawUpdates.c !== a[e].emptyObject && JSON.stringify(a[e].drawUpdates.c) !== a[e].caches.setsizeCOBJ && (a[e].caches.setsizeCOBJ = JSON.stringify(a[e].drawUpdates.c), l = !0, a[e].redraw.c = !0), a[e].drawUpdates.cpar !== a[e].emptyObject && JSON.stringify(a[e].drawUpdates.cpar) !== a[e].caches.setsizeCPAROBJ && (a[e].caches.setsizeCPAROBJ = JSON.stringify(a[e].drawUpdates.cpar), l = !0, a[e].redraw.cpar = !0), s && "auto" === a[e].sliderLayout && a[e].caches.canWidth !== a[e].canv.width && (a[e].caches.canWidth = a[e].canv.width, l = !0, a[e].redraw.modalcanvas = !0), a[e].slayers && a[e].slayers.length > 0 && a[e].outNavDims.left !== a[e].caches.outNavDimsLeft && "fullwidth" != a[e].sliderLayout && "fullscreen" != a[e].sliderLayout && (a[e].caches.outNavDimsLeft = a[e].outNavDims.left, a[e].redraw.slayers = !0), s && a[e].modal.calibration !== t && "middle" === a[e].modal.vertical && (a[e].modal.calibration.top = a.getWinH(e) < g ? "0%" : "50%", a[e].modal.calibration.y = a.getWinH(e) < g ? "0px" : "-50%", "fullwidth" === a[e].sliderLayout && (l = !0, a[e].redraw.modulewrap = !0)), a[e].gridOffsetWidth = (a[e].module.width - a[e].gridwidth[a[e].level]) / 2, a[e].gridOffsetHeight = (a[e].module.height - a[e].content.height) / 2, a[e].caches.curRowsHeight = a[e].currentRowsHeight = a[e].rowHeights.cur, a[e].caches.moduleWidth = a[e].width = a[e].module.width, a[e].caches.moduleHeight = a[e].height = a[e].module.height, a[e].caches.canWidth = a[e].conw = a[e].canv.width, a[e].caches.canHeight = a[e].conh = a[e].canv.height, a[e].bw = a[e].CM.w, a[e].bh = a[e].CM.h, a[e].caches.outNavDimsLeft = a[e].outNavDims.left, window.requestAnimationFrame(function () {
        a[e].redraw.forcer && tpGS.gsap.set(a[e].forcer, {
          height: a[e].forcerHeight
        }), a[e].redraw.c && tpGS.gsap.set(a[e].c, a[e].drawUpdates.c), a[e].redraw.cpar && tpGS.gsap.set(a[e].cpar, a[e].drawUpdates.cpar), a[e].redraw.modalcanvas && a[e] !== t && (a[e].modal !== t && a[e].modal.c !== t && tpGS.gsap.set(a[e].modal.c, {
          width: a[e].canv.width
        }), a[e].canvas !== t && tpGS.gsap.set(a[e].canvas, {
          width: a[e].canv.width
        })), a[e].redraw.maxHeightOld && (a[e].slides[o].style.maxHeight = a[e].currentSlideHeight !== a[e].canv.height ? a[e].currentSlideHeight + "px" : "none"), a[e].redraw.slayers && tpGS.gsap.set(a[e].slayers, {
          left: a[e].outNavDims.left
        }), a[e].redraw.modulewrap && tpGS.gsap.set(a[e].modal.c.find("rs-module-wrap"), a[e].modal.calibration), !0 !== a[e].navigation.initialised && "prepared" === i && ("hero" !== a[e].sliderType && a.createNavigation && a[e].navigation.use && !0 !== a[e].navigation.createNavigationDone && a.createNavigation(e), a.resizeThumbsTabs && a.resizeThumbsTabs && a[e].navigation.use && a.resizeThumbsTabs(e)), a[e].rebuildProgressBar && M(e), a.putRowsInPosition(e), a[e].redraw = {};
      });
      var u = a[e].inviewport && (a[e].heightInLayers !== t && a[e].module.height !== a[e].heightInLayers || a[e].widthInLayers !== t && a[e].module.width !== a[e].widthInLayers);
      return "ignore" !== i && u && (a[e].heightInLayers = t, a[e].widthInLayers = t, "carousel" !== a[e].sliderType && (a[e].pr_next_key !== t ? a.animateTheLayers({
        slide: a[e].pr_next_key,
        id: e,
        mode: "rebuild",
        caller: "swapSlideProgress_1"
      }) : a[e].pr_processing_key !== t ? a.animateTheLayers({
        slide: a[e].pr_processing_key,
        id: e,
        mode: "rebuild",
        caller: "swapSlideProgress_2"
      }) : a[e].pr_active_key !== t && a.animateTheLayers({
        slide: a[e].pr_active_key,
        id: e,
        mode: "rebuild",
        caller: "swapSlideProgress_3"
      })), l = !0), l && "ignore" !== i && a.requestLayerUpdates(e, "enterstage"), a[e].module.height !== a[e].module.lastHeight && (a[e].module.lastHeight = a[e].module.height, window.requestAnimationFrame(function () {
        window.innerHeight !== screen.height && Math.round(window.innerHeight * window.devicePixelRatio) !== screen.height && v(e, t, !1);
      })), tpGS.gsap.delayedCall(.1, function () {
        a[e].lastScrollBarWidth !== a.scrollBarWidth ? (a.updateDims(e, "ignore"), v(e)) : a.isModalOpen || a.scrollBarWidth === window.innerWidth - document.documentElement.clientWidth || a.rAfScrollbar === t && (a.rAfScrollbar = requestAnimationFrame(function () {
          a.rAfScrollbar = t, a.getWindowDimension(e, !1);
        }));
      }), l;
    },
    putMiddleZoneInPosition: function putMiddleZoneInPosition(e, i) {
      a[e].middleZones == t || a[e].middleZones[i] == t || a[e].rowMiddleHeights == t || a[e].rowMiddleHeights[i] == t || a[e].caches.middleHeights[i] === a[e].rowMiddleHeights[i] && a[e].caches.lastModuleHeight === a[e].module.height || (tpGS.gsap.set(a[e].middleZones[i], {
        top: Math.round(a[e].module.height / 2 - a[e].rowMiddleHeights[i] / 2)
      }), a[e].caches.middleHeights[i] = a[e].rowMiddleHeights[i]);
    },
    putRowsInPosition: function putRowsInPosition(e) {
      var i = a[e].activeRSSlide || 0,
          r = a[e].pr_processing_key;
      a.putMiddleZoneInPosition(e, i), i !== r && r !== t && a.putMiddleZoneInPosition(e, r), a[e].smiddleZones == t || a[e].rowMiddleHeights == t || a[e].rowMiddleHeights["static"] == t || a[e].caches.middleHeights["static"] === a[e].rowMiddleHeights["static"] && a[e].caches.lastModuleHeight === a[e].module.height || (tpGS.gsap.set(a[e].smiddleZones[0], {
        top: Math.round(a[e].module.height / 2 - a[e].rowMiddleHeights["static"] / 2)
      }), a[e].caches.middleHeights["static"] = a[e].rowMiddleHeights["static"]), a[e].caches.lastModuleHeight = a[e].module.height;
    },
    getSlideIndex: function getSlideIndex(e, t) {
      var i = !1;

      for (var r in a[e].slides) {
        if (!a[e].slides.hasOwnProperty(r) || !1 !== i) continue;
        i = a.gA(a[e].slides[r], "key") === t ? r : i;
      }

      return !1 === i ? 0 : i;
    },
    loadUpcomingContent: function loadUpcomingContent(e) {
      if ("smart" == a[e].lazyType) {
        var t = [],
            i = parseInt(a.getSlideIndex(e, a.gA(a[e].pr_next_slide[0], "key")), 0),
            r = i - 1 < 0 ? a[e].realslideamount - 1 : i - 1,
            o = i + 1 == a[e].realslideamount ? 0 : i + 1;
        r !== i && t.push(a[e].slides[r]), o !== i && t.push(a[e].slides[o]), t.length > 0 && (a.loadImages(t, e, 2), a.waitForCurrentImages(t, e, function () {}));
      }
    },
    lazyLoadAllSlides: function lazyLoadAllSlides(e) {
      if ("all" == a[e].lazyType && !0 !== a[e].lazyLoad_AllDone && (a[e].viewPort.enable && a[e].inviewport || !a[e].viewPort.enable)) {
        for (var t in a[e].slides) {
          a[e].slides.hasOwnProperty(t) && (a.loadImages(a[e].slides[t], e, t), a.waitForCurrentImages(a[e].slides[t], e, function () {}));
        }

        a[e].lazyLoad_AllDone = !0;
      }
    },
    getFullscreenOffsets: function getFullscreenOffsets(i) {
      var r = 0;

      if (a[i].fullScreenOffsetContainer != t) {
        var o = ("" + a[i].fullScreenOffsetContainer).split(",");

        for (var s in o) {
          o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0);
        }
      }

      return a[i].fullScreenOffset != t && (!a.isNumeric(a[i].fullScreenOffset) && a[i].fullScreenOffset.split("%").length > 1 ? r += a.getWinH(i) * parseInt(a[i].fullScreenOffset, 0) / 100 : a.isNumeric(parseInt(a[i].fullScreenOffset, 0)) && (r += parseInt(a[i].fullScreenOffset, 0) || 0)), a[i].fullScreenOffsetResult = r, r;
    },
    unToggleState: function unToggleState(e) {
      if (e !== t) for (var i = 0; i < e.length; i++) {
        try {
          document.getElementById(e[i]).classList.remove("rs-tc-active");
        } catch (e) {}
      }
    },
    toggleState: function toggleState(e) {
      if (e !== t) for (var i = 0; i < e.length; i++) {
        try {
          document.getElementById(e[i]).classList.add("rs-tc-active");
        } catch (e) {}
      }
    },
    swaptoggleState: function swaptoggleState(e) {
      if (e != t && e.length > 0) for (var i = 0; i < e.length; i++) {
        var r = document.getElementById(e[i]);
        if (a.gA(r, "toggletimestamp") !== t && new Date().getTime() - a.gA(r, "toggletimestamp") < 250) return;
        a.sA(r, "toggletimestamp", new Date().getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"));
      }
    },
    lastToggleState: function lastToggleState(e) {
      var i;
      if (e !== t) for (var a = 0; a < e.length; a++) {
        var r = document.getElementById(e[a]);
        i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i;
      }
      return i;
    },
    revCheckIDS: function revCheckIDS(i, r) {
      if (a.gA(r, "idcheck") === t) {
        var o = r.id,
            s = e.inArray(r.id, window.RSANYID),
            n = -1;
        -1 !== s && (n = e.inArray(r.id, a[i].anyid), window.RSANYID_sliderID[s] === i && -1 === n || (r.id = r.id + "_" + Math.round(9999 * Math.random()), console.log("Warning - ID:" + o + " exists already. New Runtime ID:" + r.id), s = n = -1)), -1 === n && a[i].anyid.push(r.id), -1 === s && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(i));
      }

      return a.sA(r, "idcheck", !0), r.id;
    },
    buildSpinner: function buildSpinner(i, a, r, o) {
      var s;

      if ("off" !== a) {
        o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
        var n = parseInt(a.replace("spinner", ""), 10);

        if (isNaN(n) || n < 6) {
          var l = 'style="background-color:' + r + '"',
              d = o === t || 3 !== n && 4 != n ? "" : l;
          s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : l) + ' class="' + a + " " + o + '"><div ' + d + ' class="dot1"></div><div ' + d + ' class="dot2"></div><div ' + d + ' class="bounce1"></div><div ' + d + ' class="bounce2"></div><div ' + d + ' class="bounce3"></div></rs-loader>');
        } else {
          var c,
              p = '<div class="rs-spinner-inner"';
          if (7 === n) -1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');else 12 === n && (p += ' style="background:' + r + '"');
          p += ">";

          for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) {
            u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
          }

          s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>");
        }

        return s;
      }
    },
    addStaticLayerTo: function addStaticLayerTo(e, t, i) {
      if (a[e].slayers.length < 2) {
        var r = document.createElement("rs-static-layers");
        r.className = "rs-stl-" + t, r.appendChild(i[0]), a[e].c[0].appendChild(r), a[e].slayers.push(r);
      } else a[e].slayers[1].appendChild(i[0]);
    }
  });

  var r = function r() {
    return a.isIE11() ? function (e, t) {
      return e.querySelectorAll(t);
    } : function (e, t) {
      return e.getElementsByTagName(t);
    };
  },
      o = function o(e) {
    a[e].responsiveLevels = a.revToResp(a[e].responsiveLevels, a[e].rle), a[e].visibilityLevels = a.revToResp(a[e].visibilityLevels, a[e].rle), a[e].responsiveLevels[0] = 9999, a[e].rle = a[e].responsiveLevels.length || 1, a[e].gridwidth = a.revToResp(a[e].gridwidth, a[e].rle), a[e].gridheight = a.revToResp(a[e].gridheight, a[e].rle), a[e].editorheight !== t && (a[e].editorheight = a.revToResp(a[e].editorheight, a[e].rle)), a.updateDims(e);
  },
      s = function s(t, i) {
    var a = [];
    return e.each(t, function (e, t) {
      e != i && a.push(t);
    }), a;
  },
      n = function n(t, i, r) {
    a[r].c.find(t).each(function () {
      var t = e(this);
      t.data("key") === i && t.remove();
    });
  },
      l = function l(e, i) {
    if (a["rsfont_" + e] == t && (a["rsfont_" + e] = document.createElement("span"), a["rsfont_" + e].innerHTML = Array(100).join("wi"), a["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), a["rsfont_" + e].style.fontFamily = e, document.body.appendChild(a["rsfont_" + e])), i === t) return a["rsfont_" + e].clientWidth;
    document.body.removeChild(a["rsfont_" + e]);
  },
      d = function d(t, i) {
    var a = 0;
    return t.find(i).each(function () {
      var t = e(this);
      !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth());
    }), a;
  },
      c = function c(i) {
    if (i === t || a[i] === t || a[i].c === t) return !1;
    if (a[i].cpar !== t && a[i].cpar.data("aimg") != t && ("enabled" == a[i].cpar.data("aie8") && a.isIE(8) || "enabled" == a[i].cpar.data("amobile") && a.ISM)) a[i].c.html('<img class="tp-slider-alternative-image" src="' + a[i].cpar.data("aimg") + '">');else {
      window._rs_firefox13 = !1, window._rs_firefox = a.isFirefox(), window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
      var r = e.fn.jquery.split("."),
          o = parseFloat(r[0]),
          s = parseFloat(r[1]);
      1 == o && s < 7 && a[i].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + r + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), o > 1 && (window._rs_ie = !1), a[i].realslideamount = a[i].slideamount = 0;
      var n = a.getByTag(a[i].canvas[0], "RS-SLIDE"),
          l = [];

      for (var d in a[i].notInNav = [], a[i].slides = [], n) {
        n.hasOwnProperty(d) && ("on" == a.gA(n[d], "hsom") && a.ISM ? l.push(n[d]) : (a.gA(n[d], "invisible") || 1 == a.gA(n[d], "invisible") ? a[i].notInNav.push(n[d]) : (a[i].slides.push(n[d]), a[i].slideamount++), a[i].realslideamount++, a.sA(n[d], "originalindex", a[i].realslideamount), a.sA(n[d], "origindex", a[i].realslideamount - 1)));
      }

      for (d in l) {
        l.hasOwnProperty(d) && l[d].remove();
      }

      for (d in a[i].notInNav) {
        a[i].notInNav.hasOwnProperty(d) && (a.sA(a[i].notInNav[d], "not_in_nav", !0), a[i].canvas[0].appendChild(a[i].notInNav[d]));
      }

      if (a[i].canvas.css({
        visibility: "visible"
      }), a[i].slayers = a[i].c.find("rs-static-layers"), a[i].slayers[0] && a[i].slayers.className && -1 !== a[i].slayers[0].className.indexOf("rs-stl-visible") && a[i].c.addClass("rs-stl-visible"), a[i].slayers.length > 0 && a.sA(a[i].slayers[0], "key", "staticlayers"), !0 === a[i].modal.useAsModal && (a[i].cpar.wrap('<rs-modal id="' + a[i].c[0].id + '_modal"></rs-modal>'), a[i].modal.c = e(a.closestNode(a[i].cpar[0], "RS-MODAL")), a[i].modal.c.appendTo(e("body")), a[i].modal !== t && a[i].modal.alias !== t && a.revModal(i, {
        mode: "init"
      })), 1 == a[i].waitForInit || 1 == a[i].modal.useAsModal) return a.RS_toInit !== t && (a.RS_toInit[i] = !0), a[i].c.trigger("revolution.slide.waitingforinit"), void (a[i].waitingForInit = !0);
      window.requestAnimationFrame(function () {
        h(i);
      }), a[i].initEnded = !0;
    }
  },
      p = function p() {
    e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function () {
      a.window.trigger("resize");
    }, 200);
  },
      g = function g(e, i, r) {
    return a.gA(e, "lazyload") !== t ? a.gA(e, "lazyload") : a[r].lazyloaddata !== t && a[r].lazyloaddata.length > 0 && a.gA(e, a[r].lazyloaddata) !== t ? a.gA(e, a[r].lazyloaddata) : a.gA(e, "lazy-src") !== t ? a.gA(e, "lazy-src") : a.gA(e, "lazy-wpfc-original-src") !== t ? a.gA(e, "lazy-wpfc-original-src") : a.gA(e, "lazy") !== t ? a.gA(e, "lazy") : i;
  },
      u = function u(t, i) {
    return e(0 == i ? t : 1 == i ? t.parentNode : 2 == i ? t.parentNode.parentNode : 3 == i ? t.parentNode.parentNode.parentNode : 4 == i ? t.parentNode.parentNode.parentNode.parentNode : t.parentNode.parentNode.parentNode.parentNode.parentNode);
  },
      h = function h(i) {
    if (a[i] !== t) {
      a[i].sliderisrunning = !0, !0 !== a[i].noDetach && a[i].c.detach();
      var r = a[i].canvas.find("rs-slide:first-child");

      if (a[i].shuffle) {
        for (var o = a.gA(r[0], "firstanim"), s = 0; s < a[i].slideamount; s++) {
          a[i].canvas.find("rs-slide:eq(" + Math.round(Math.random() * a[i].slideamount) + ")").prependTo(a[i].canvas);
        }

        a.sA(a[i].canvas.find("rs-slide:first-child")[0], "firstanim", o);
      }

      a[i].slides = a.getByTag(a[i].canvas[0], "RS-SLIDE"), a[i].thumbs = new Array(a[i].slides.length), a[i].slots = 1, a[i].firststart = 1, a[i].loadqueue = [], a[i].syncload = 0;
      var n = 0,
          l = "carousel" === a[i].sliderType && a[i].carousel.border_radius !== t ? parseInt(a[i].carousel.border_radius, 0) : 0;

      for (var d in "carousel" !== a[i].sliderType && tpGS.gsap.set(a[i].slides, {
        display: "none"
      }), "carousel" !== a[i].sliderType && tpGS.gsap.set(r, {
        display: "block"
      }), a[i].slides) {
        if (a[i].slides.hasOwnProperty(d) && "length" !== d) {
          var c = a[i].slides[d],
              h = a.getByTag(c, "IMG")[0];
          a.gA(c, "key") === t && a.sA(c, "key", "rs-" + Math.round(999999 * Math.random()));
          var m = {
            params: Array(12),
            id: a.gA(c, "key"),
            src: a.gA(c, "thumb") !== t ? a.gA(c, "thumb") : g(h, h !== t ? h.src : t, i)
          };
          a.gA(c, "title") === t && a.sA(c, "title", ""), a.gA(c, "description") === t && a.sA(c, "description", ""), m.params[0] = {
            from: RegExp("\\{\\{title\\}\\}", "g"),
            to: a.gA(c, "title")
          }, m.params[1] = {
            from: RegExp("\\{\\{description\\}\\}", "g"),
            to: a.gA(c, "description")
          };

          for (var f = 1; f <= 10; f++) {
            a.gA(c, "p" + f) !== t ? m.params[f + 1] = {
              from: RegExp("\\{\\{param" + f + "\\}\\}", "g"),
              to: a.gA(c, "p" + f)
            } : m.params[f + 1] = {
              from: RegExp("\\{\\{param" + f + "\\}\\}", "g"),
              to: ""
            };
          }

          if (a[i].thumbs[n] = e.extend({}, !0, m), l > 0 && tpGS.gsap.set(c, {
            borderRadius: l + "px"
          }), a.gA(c, "link") != t || a.gA(c, "linktoslide") !== t) {
            var w = a.gA(c, "link"),
                b = w !== t ? w : "slide",
                _ = "slide" != b ? "no" : a.gA(c, "linktoslide"),
                S = a.gA(c, "seoz"),
                x = a.gA(c, "tag");

            if (_ != t && "no" != _ && "next" != _ && "prev" != _) for (var k in a[i].slides) {
              a[i].slides.hasOwnProperty(k) && parseInt(a.gA(a[i].slides[k], "origindex"), 0) + 1 == a.gA(c, "linktoslide") && (_ = a.gA(a[i].slides[k], "key"));
            }
            "slide" == b || "a" != x ? e(c).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === S ? 0 : "front" === S ? 95 : S !== t ? parseInt(S, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == _ ? "slide" == b || a.ISM ? "" : "  data-actions='o:click;a:simplelink;target:" + (a.gA(c, "target") || "_self") + ";url:" + b + ";'" : "  data-actions='" + ("scroll_under" === _ ? "o:click;a:scrollbelow;offset:100px;" : "prev" === _ ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === _ ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + _ + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a.ISM ? "<a " + ("slide" != b ? ("_blank" === a.gA(c, "target") ? 'rel="noopener" ' : "") + 'target="' + (a.gA(c, "target") || "_self") + '" href="' + b + '"' : "") + "><span></span></a>" : "") + "</rs-layer>") : e(c).prepend('<a class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === S ? 0 : "front" === S ? 95 : S !== t ? parseInt(S, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide" href="' + b + '" target="' + (a.gA(c, "target") || "_self") + '" rel="noopener" data-frame_1="e:power3.inOut;st:100;sp:100" data-frame_999="e:power3.inOut;o:0;st:w;sp:100"><span></span></a>');
          }

          n++;
        }
      }

      if (a[i].simplifyAll && (a.isIE(8) || a.iOSVersion()) && (a[i].c.find(".rs-layer").each(function () {
        var t = e(this);
        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400);
      }), a[i].c.find("rs-slide").each(function () {
        var t = e(this);
        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null);
      })), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, a[i].autoHeight = "fullscreen" == a[i].sliderLayout || a[i].autoHeight, "fullwidth" != a[i].sliderLayout || a[i].autoHeight || "carousel" === a[i].sliderType && "v" === a[i].carousel.orientation || a[i].c.css({
        maxHeight: a[i].gridheight[a[i].level] + "px"
      }), "auto" == a[i].sliderLayout || null !== a.closestNode(a[i].c[0], "RS-FULLWIDTH-WRAP") || "fullscreen" === a[i].sliderLayout && 1 == a[i].disableForceFullWidth) a[i].topc = a[i].cpar;else {
        var L = a[i].cpar[0].style.marginTop,
            O = a[i].cpar[0].style.marginBottom;
        a[i].rsFullWidthWrapMarginBottom = parseInt(O, 0), L = L === t || "" === L ? "" : "margin-top:" + L + ";", O = O === t || "" === O ? "" : "margin-bottom:" + O + ";", a[i].rsFullWidthWrap = a[i].topc = e('<rs-fullwidth-wrap id="' + a[i].c[0].id + '_forcefullwidth" style="' + L + O + '"></rs-fullwidth-wrap>'), a[i].forcer = e('<rs-fw-forcer style="height:' + (a[i].forcerHeight === t ? a[i].cpar.height() : a[i].forcerHeight) + 'px"></rs-fw-forcer>'), a[i].topc.append(a[i].forcer), a[i].topc.insertBefore(a[i].cpar), a[i].cpar.detach(), a[i].cpar.css({
          marginTop: "0px",
          marginBottom: "0px",
          position: "absolute"
        }), a[i].cpar.prependTo(a[i].topc);
      }

      if (a[i].forceOverflow ? a[i].topc[0].classList.add("rs-forceoverflow") : "3D" === a[i].parallax.type && a[i].topc[0].classList.add("rs-parallax-hidden-of"), "carousel" === a[i].sliderType && !0 !== a[i].overflowHidden && a[i].c.css({
        overflow: "visible"
      }), 0 !== a[i].maxHeight && tpGS.gsap.set([a[i].cpar, a[i].c, a[i].topc], {
        maxHeight: a[i].maxHeight + "px"
      }), a[i].fixedOnTop && tpGS.gsap.set(a[i].blockSpacing !== t && a[i].blockSpacing.block !== t ? a[i].blockSpacing.block : a[i].topc, {
        position: "fixed",
        top: "0px",
        left: "0px",
        pointerEvents: "none",
        zIndex: 5e3
      }), a[i].shadow !== t && a[i].shadow > 0 && a[i].cpar.addClass("tp-shadow" + a[i].shadow).append('<div class="tp-shadowcover" style="background-color:' + a[i].cpar.css("backgroundColor") + ";background-image:" + a[i].cpar.css("backgroundImage") + '"></div>'), a.updateDims(i, "prepared"), a.observeWraps === t && (a.observeWraps = new a.wrapObserver.init(function (e, i) {
        v(i, t, !0);
      })), !a[i].c.hasClass("revslider-initialised")) {
        a[i].c[0].classList.add("revslider-initialised"), a[i].c[0].id = a[i].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : a[i].c[0].id, a.revCheckIDS(i, a[i].c[0]), a[i].origcd = parseInt(a[i].duration, 0), a[i].scrolleffect._L = [], a[i].sbas = a[i].sbas === t ? {} : a[i].sbas, a[i].layers = a[i].layers || {}, a[i].sortedLayers = a[i].sortedLayers || {};
        var R = a[i].c[0].querySelectorAll("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer");

        for (var I in R) {
          if (R.hasOwnProperty(I)) {
            !a.ISM && R[I].classList.contains("iospermaccwait") && R[I].remove();
            var M,
                T,
                C = e(R[I]),
                A = C.data();
            if (A.startclasses = R[I].className, A.startclasses = A.startclasses === t || null === A.startclasses ? "" : A.startclasses, A.animationonscroll = !!a[i].sbtimeline.set && a[i].sbtimeline.layers, A.animationonscroll = !0 === A.animationonscroll || "true" == A.animationonscroll, A.filteronscroll = !!a[i].scrolleffect.set && a[i].scrolleffect.layers, A.pxundermask = A.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== a[i].parallax.type && A.startclasses.indexOf("rs-pxl-") >= 0, A.noPevents = A.startclasses.indexOf("rs-noevents") >= 0, A.sba) for (var f in M = A.sba.split(";")) {
              M.hasOwnProperty(f) && ("t" == (T = M[f].split(":"))[0] && (A.animationonscroll = T[1], "false" == T[1] && (A.animOnScrollForceDisable = !0)), "e" == T[0] && (A.filteronscroll = T[1]), "so" == T[0] && (A.scrollBasedOffset = parseInt(T[1]) / 1e3));
            }

            if ("true" != A.animationonscroll && 1 != A.animationonscroll || (A.startclasses += " rs-sba", C[0].className += " rs-sba"), A.startclasses.indexOf("rs-layer-static") >= 0 && a.handleStaticLayers && a.handleStaticLayers(C, i), "RS-BGVIDEO" !== C[0].tagName) {
              if (C[0].classList.add("rs-layer"), "column" === A.type && (A.columnwidth = "33.33%", A.verticalalign = "top", A.column !== t)) for (var D in M = A.column.split(";")) {
                M.hasOwnProperty(D) && ("w" === (T = M[D].split(":"))[0] && (A.columnwidth = T[1]), "a" === T[0] && (A.verticalalign = T[1]));
              }
              if ("group" === A.type && (A.verticalalign = "top", A.column !== t)) for (var D in M = A.column.split(";")) {
                M.hasOwnProperty(D) && "a" === (T = M[D].split(":"))[0] && (A.verticalalign = T[1]);
              }
              var P = A.startclasses.indexOf("slidelink") >= 0 ? "z-index:" + A.zindex + ";width:100% !important;height:100% !important;" : "",
                  B = "column" !== A.type && "group" !== A.type ? "" : A.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + A.verticalalign + ";",
                  F = "row" === A.type || "column" === A.type || "r" === A.pos ? "position:relative;" : "position:absolute;",
                  z = "",
                  W = "row" === A.type ? "rs-row-wrap" : "column" === A.type ? "rs-column-wrap" : "group" === A.type ? "rs-group-wrap" : "rs-layer-wrap",
                  E = "",
                  N = "",
                  j = (A.noPevents, ";pointer-events:none");
              "row" === A.type || "column" === A.type || "group" === A.type ? (C[0].classList.remove("tp-resizeme"), "column" === A.type && (A.width = "auto", C[0].group = "row", tpGS.gsap.set(C, {
                width: "auto"
              }), A.filteronscroll = !1)) : (E = "display:" + ("inline-block" === C[0].style.display ? "inline-block" : "block") + ";", null !== a.closestNode(C[0], "RS-COLUMN") ? (C[0].group = "column", A.filteronscroll = !1) : null !== a.closestNode(C[0], "RS-GROUP-WRAP") && (C[0].group = "group", A.filteronscroll = !1)), A.wrpcls !== t && (z = z + " " + A.wrpcls), A.wrpid !== t && (N = 'id="' + A.wrpid + '"'), A.thFixed = A.wrpcls !== t && A.wrpcls.includes("th-fixed") || A.startclasses !== t && A.startclasses.includes("ddd_mousebox"), A.reqWrp = {
                loop: !(1 != a[i].rtl && !A.thFixed && A.loop_0 === t && A.loop_999 === t),
                level: {
                  m: 0,
                  lp: 0,
                  p: 0
                }
              }, A.reqWrp.mask = !!(A.reqWrp.loop || 1 == a[i].rtl || A.pxundermask || A.thFixed || A.btrans !== t || A.frame_hover !== t && A.frame_hover.includes("m:t") || A.clip !== t || A.sba !== t || A.frame_0_sfx !== t || A.frame_1_sfx !== t || A.frame_999_sfx !== t || A.frame_0_mask !== t || A.frame_1_mask !== t || A.frame_2_mask !== t || A.frame_3_mask !== t || A.frame_4_mask !== t || A.frame_999_mask !== t), A.reqWrp.level.m = A.pxundermask ? 2 : A.reqWrp.mask ? 1 : 0, A.reqWrp.level.lp = A.reqWrp.level.m + (A.reqWrp.loop ? 1 : 0), A.reqWrp.level.p = A.reqWrp.level.lp + 1, C.wrap("<" + W + " " + N + ' class="rs-parallax-wrap ' + z + '" style="' + B + " " + P + F + E + j + '">' + (A.reqWrp.loop ? '<rs-loop-wrap style="' + P + F + E + '">' : "") + (A.reqWrp.mask ? '<rs-mask-wrap style="' + P + F + E + '">' : "") + (A.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + (A.reqWrp.mask ? "</rs-mask-wrap>" : "") + (A.reqWrp.loop ? "</rs-loop-wrap>" : "") + "</" + W + ">"), !0 !== A.filteronscroll && "true" != A.filteronscroll || a[i].scrolleffect._L.push(C.parent()), C[0].id = C[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : C[0].id, a.revCheckIDS(i, C[0]), a[i]._Lshortcuts[C[0].id] = {
                p: u(C[0], A.reqWrp.level.p),
                lp: u(C[0], A.reqWrp.level.lp),
                m: u(C[0], A.reqWrp.level.m)
              }, "column" !== A.type || "" == C[0].style.background && "" === C[0].style.backgroundColor && "" === C[0].style.backgroundImage && A.border === t ? A.cbgexists = !1 : (a[i]._Lshortcuts[C[0].id].p.append('<rs-cbg-mask-wrap><rs-column-bg id="' + C[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), A.cbgexists = !0), "text" === A.type && a.getByTag(C[0], "IFRAME").length > 0 && (a[i].slideHasIframe = !0, C[0].classList.add("rs-ii-o")), a[i].BUG_safari_clipPath && "true" != A.animationonscroll && 1 != A.animationonscroll && C[0].classList.add("rs-pelock"), C[0].dataset.staticz !== t && "row" !== A.type && "row" !== C[0].group && "column" !== C[0].group && a.addStaticLayerTo(i, C[0].dataset.staticz, a[i]._Lshortcuts[C[0].id].p);
            }

            a.gA(C[0], "actions") && a.checkActions && a.checkActions(C, i, a[i]), !a.checkVideoApis || window.rs_addedvim && window.rs_addedyt || a[i].youtubeapineeded && a[i].vimeoapineeded || a.checkVideoApis(C, i);
          }
        }

        a.checkActions && a.checkActions(t, i), a[i].c[0].addEventListener("mousedown", function () {
          if (!0 !== a[i].onceClicked && (a[i].onceClicked = !0, !0 !== a[i].onceVideoPlayed && a[i].activeRSSlide !== t && a[i].slides !== t && a[i].slides[a[i].activeRSSlide] !== t)) {
            var r = e(a[i].slides[a[i].activeRSSlide]).find("rs-bgvideo");
            r !== t && null !== r && r.length > 0 && a.playVideo(r, i);
          }
        }), a[i].c[0].addEventListener("mouseenter", function () {
          a[i].c.trigger("tp-mouseenter"), a[i].overcontainer = !0;
        }, {
          passive: !0
        }), a[i].c[0].addEventListener("mouseover", function () {
          a[i].c.trigger("tp-mouseover"), a[i].overcontainer = !0;
        }, {
          passive: !0
        }), a[i].c[0].addEventListener("mouseleave", function () {
          a[i].c.trigger("tp-mouseleft"), a[i].overcontainer = !1;
        }, {
          passive: !0
        }), a[i].c.find(".rs-layer video").each(function (t) {
          var i = e(this);
          i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
            display: "none"
          });
        }), a[i].rs_static_layer = a.getByTag(a[i].c[0], "RS-STATIC-LAYERS"), a.preLoadAudio && a[i].rs_static_layer.length > 0 && a.preLoadAudio(e(a[i].rs_static_layer), i, 1), a[i].rs_static_layer.length > 0 && (a.loadImages(a[i].rs_static_layer[0], i, 0, !0), a.waitForCurrentImages(a[i].rs_static_layer[0], i, function () {
          a[i] !== t && a[i].c.find("rs-static-layers img").each(function () {
            this.src = a.getLoadObj(i, a.gA(this, "src") != t ? a.gA(this, "src") : this.src).src;
          });
        })), a[i].rowzones = [], a[i].rowzonesHeights = [], a[i].topZones = [], a[i].middleZones = [], a[i].bottomZones = [], a[i].rowMiddleHeights = {};
        var V = a.deepLink(i, H("#")[0]);
        V !== t && (a[i].startWithSlide = V, a[i].deepLinkListener = !0, window.addEventListener("hashchange", function () {
          if (!0 !== a[i].ignoreDeeplinkChange) {
            var e = a.deepLink(i, H("#")[0]);
            e !== t && a.callingNewSlide(i, e, !0);
          }

          a[i].ignoreDeeplinkChange = !1;
        })), a[i].loader = a.buildSpinner(i, a[i].spinner, a[i].spinnerclr), a[i].loaderVisible = !0, a[i].c.append(a[i].loader), y(i), ("off" !== a[i].parallax.type || a[i].scrolleffect.set || a[i].sbtimeline.set) && a.checkForParallax && a.checkForParallax(i), a[i].fallbacks.disableFocusListener || "true" == a[i].fallbacks.disableFocusListener || !0 === a[i].fallbacks.disableFocusListener || (a[i].c.addClass("rev_redraw_on_blurfocus"), G());
        var X = a[i].viewPort;

        for (var f in "on" === a[i].navigation.mouseScrollNavigation && (X.enable = !0), a[i].slides) {
          if (a[i].slides.hasOwnProperty(f)) {
            var U = e(a[i].slides[f]);
            a[i].rowzones[f] = [], a[i].rowzonesHeights[f] = [], a[i].topZones[f] = [], a[i].middleZones[f] = [], a[i].bottomZones[f] = [], U.find("rs-zone").each(function () {
              a[i].rowzones[f].push(e(this)), this.className.indexOf("rev_row_zone_top") >= 0 && a[i].topZones[f].push(this), this.className.indexOf("rev_row_zone_middle") >= 0 && (a[i].middleZones[f].push(this), this.dataset.middle = "true"), this.className.indexOf("rev_row_zone_bottom") >= 0 && a[i].bottomZones[f].push(this);
            });
          }
        }

        a.lazyLoadAllSlides(i), a[i].srowzones = [], a[i].smiddleZones = [], a[i].slayers && a[i].slayers.find("rs-zone").each(function () {
          a[i].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && (a[i].smiddleZones.push(this), this.dataset.middle = "true");
        }), "carousel" === a[i].sliderType && tpGS.gsap.set(a[i].canvas, {
          scale: 1,
          perspective: 1200,
          transformStyle: "flat",
          opacity: 0
        }), a[i].c.prependTo(a[i].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {
          passive: !0
        }), window.addEventListener("mozfullscreenchange", p, {
          passive: !0
        }), window.addEventListener("webkitfullscreenchange", p, {
          passive: !0
        }), a.document.on("updateContainerSizes." + a[i].c.attr("id"), function () {
          if (a[i] !== t) return a[i].c != t && void (a.updateDims(i, "ignore") && window.requestAnimationFrame(function () {
            a.updateDims(i, "ignore"), a[i].fullScreenMode = a.checkfullscreenEnabled(i), a.lastwindowheight = a.getWinH(i), v(i);
          }));
        }), X.presize && (a[i].pr_next_slide = e(a[i].slides[0]), a.loadImages(a[i].pr_next_slide[0], i, 0, !0), a.waitForCurrentImages(a[i].pr_next_slide.find(".tp-layers"), i, function () {
          a.animateTheLayers && a.animateTheLayers({
            slide: a[i].pr_next_key,
            id: i,
            mode: "preset",
            caller: "runSlider"
          });
        })), ("off" != a[i].parallax.type || a[i].sbtimeline.set || !0 === X.enable) && a.scrollTicker(i), !0 !== X.enable && (a[i].inviewport = !0, a.enterViewPort(i)), a.RS_toInit !== t && (a.RS_toInit[i] = !0), a[i].observeWrap && a.observeWraps && a.wrapObserver.observe(a[i].rsFullWidthWrap !== t ? a[i].rsFullWidthWrap[0] : a[i].cpar[0], i);
      }
    }
  },
      m = function m(e, i) {
    a.winW < a[e].hideSliderAtLimit ? (a[e].c.trigger("stoptimer"), !0 !== a[e].sliderIsHidden && (a.sA(a[e].cpar[0], "displaycache", "none" != a[e].cpar.css("display") ? a[e].cpar.css("display") : a.gA(a[e].cpar[0], "displaycache")), a[e].cpar.css({
      display: "none"
    }), a[e].sliderIsHidden = !0)) : (!0 === a[e].sliderIsHidden || a[e].sliderIsHidden === t && a[e].c.is(":hidden")) && i && (a[e].cpar[0].style.display = a.gA(a[e].cpar[0], "displaycache") != t && "none" != a.gA(a[e].cpar[0], "displaycache") ? a.gA(a[e].cpar[0], "displaycache") : "block", a[e].sliderIsHidden = !1, a[e].c.trigger("restarttimer"), window.requestAnimationFrame(function () {
      v(e, !0);
    })), a.hideUnHideNav && a[e].navigation.use && a.hideUnHideNav(e);
  },
      v = function v(e, i, r) {
    if (a[e].c === t) return !1;

    if (a[e].dimensionReCheck = {}, a[e].c.trigger("revolution.slide.beforeredraw"), 1 == a[e].infullscreenmode && (a[e].minHeight = a.getWinH(e)), a.ISM && (a[e].lastMobileHeight = a.getWinH(e)), r && a.updateDims(e), !a.resizeThumbsTabs || !0 === a.resizeThumbsTabs(e)) {
      if (window.requestAnimationFrame(function () {
        m(e, !0 !== i), M(e);
      }), a[e].started) {
        if ("carousel" == a[e].sliderType) for (var o in a.prepareCarousel(e), a[e].sbgs) {
          a[e].sbgs.hasOwnProperty(o) && a[e].sbgs[o].mDIM !== t && a.updateSlideBGs(e, a[e].sbgs[o].key, a[e].sbgs[o]);
        } else a.updateSlideBGs(e);

        if ("carousel" === a[e].sliderType && (a[e].carCheckconW != a[e].canv.width || "fullscreen" == a[e].sliderLayout && a[e].carCheckconH != a[e].canv.height)) {
          for (var s in clearTimeout(a[e].pcartimer), a[e].sbgs) {
            a[e].sbgs[s].loadobj !== t && a.updateSlideBGs(e, a[e].sbgs[s].key, a[e].sbgs[s]);
          }

          "v" == a[e].carousel.orientation && tpGS.gsap.set(a[e].canvas, {
            height: a[e].carousel.slide_height
          }), requestAnimationFrame(function () {
            a.prepareCarousel(e), a.animateTheLayers({
              slide: "individual",
              id: e,
              mode: "rebuild",
              caller: "containerResized_1"
            }), a[e].carCheckconW = a[e].canv.width, a[e].carCheckconH = a[e].canv.height;
          }), a[e].lastconw = a[e].canv.width;
        }

        if (a[e].pr_processing_key !== t ? a.animateTheLayers({
          slide: a[e].pr_processing_key,
          id: e,
          mode: "rebuild",
          caller: "containerResized_2"
        }) : a[e].pr_active_key !== t && a.animateTheLayers({
          slide: a[e].pr_active_key,
          id: e,
          mode: "rebuild",
          caller: "containerResized_3"
        }), "carousel" === a[e].sliderType) {
          for (var s in a[e].panzoomTLs) {
            if (a[e].panzoomTLs.hasOwnProperty(s)) {
              var n = a.gA(a[e].panzoomBGs[s][0], "key");
              a.startPanZoom(a[e].panzoomBGs[s], e, a[e].panzoomTLs[s].progress(), s, a[e].panzoomTLs[s].isActive() ? "play" : "reset", n);
            }
          }
        } else a[e].pr_active_bg !== t && a[e].pr_active_bg[0] !== t && f(e, a[e].pr_active_bg, a[e].pr_active_bg[0].dataset.key), a[e].pr_next_bg !== t && a[e].pr_next_bg[0] !== t && f(e, a[e].pr_next_bg, a[e].pr_next_bg[0].dataset.key);

        clearTimeout(a[e].mNavigTimeout), a.manageNavigation && (a[e].mNavigTimeout = setTimeout(function () {
          a.manageNavigation(e);
        }, 20));
      }

      a.prepareCoveredVideo(e);
    }

    a[e].c.trigger("revolution.slide.afterdraw", [{
      id: e
    }]);
  },
      f = function f(e, i, r) {
    if (a[e].panzoomTLs !== t) {
      var o = a.getSlideIndex(e, r);
      a.startPanZoom(i, e, a[e].panzoomTLs[o] !== t ? a[e].panzoomTLs[o].progress() : 0, o, "play", r);
    }
  },
      y = function y(i) {
    !0 !== a[i].noDetach && a[i].canvas.detach();
    var r = a.isFaceBook() ? "visible" : "hidden";

    if (a[i].autoHeight && tpGS.gsap.set([a[i].c, a[i].cpar], {
      maxHeight: "none"
    }), tpGS.gsap.set(a[i].canvas, a[i].modal !== t && a[i].modal.useAsModal ? {
      overflow: r,
      width: "100%",
      height: "100%"
    } : {
      overflow: r,
      width: "100%",
      height: "100%",
      maxHeight: a[i].autoHeight ? "none" : a[i].cpar.css("maxHeight")
    }), "carousel" === a[i].sliderType) {
      var o = "margin-top:" + parseInt(a[i].carousel.padding_top || 0, 0) + "px;";
      a[i].canvas.css({
        overflow: "visible"
      }).wrap('<rs-carousel-wrap style="' + o + '"></rs-carousel-wrap>'), a[i].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), a.defineCarouselElements(i);
    }

    a[i].startWithSlide = a[i].startWithSlide === t ? t : Math.max(1, (a[i].sliderType, parseInt(a[i].startWithSlide))), a[i].cpar.css({
      overflow: "visible"
    }), a[i].scrolleffect.bgs = [];

    for (var s = 0; s < a[i].slides.length; s++) {
      var n = e(a[i].slides[s]),
          l = a.gA(n[0], "key"),
          d = n.find(".rev-slidebg") || n.find(">img"),
          c = a[i].sbgs[l] = w(d.data(), i),
          p = n.data("mediafilter");

      if (c.skeyindex = a.getSlideIndex(i, l), c.bgvid = n.find("rs-bgvideo"), d.detach(), c.bgvid.detach(), (a[i].startWithSlide != t && a.gA(a[i].slides[s], "originalindex") == a[i].startWithSlide || a[i].startWithSlide === t && 0 == s) && (a[i].pr_next_key = a[i].carousel.focused = n.index()), tpGS.gsap.set(n, {
        width: "100%",
        height: "100%",
        overflow: r
      }), d.wrap('<rs-sbg-px><rs-sbg-wrap data-key="' + l + '"></rs-sbg-wrap></rs-sbg-px>'), c.wrap = e(a.closestNode(d[0], "RS-SBG-WRAP")), c.src = d[0].src, c.lazyload = c.lazyload = g(d[0], t, i), c.slidebgimage = !0, c.loadobj = c.loadobj === t ? {} : c.loadobj, c.mediafilter = p = "none" === p || p === t ? "" : p, c.sbg = document.createElement("rs-sbg"), a[i].overlay !== t && "none" != a[i].overlay.type && a[i].overlay.type != t) {
        var u = a.createOverlay(i, a[i].overlay.type, a[i].overlay.size, {
          0: a[i].overlay.colora,
          1: a[i].overlay.colorb
        });
        c.wrap.append('<rs-dotted style="background-image:' + u + '"></rs-dotted>');
      }

      d.data("mediafilter", p), c.canvas = document.createElement("canvas"), c.sbg.appendChild(c.canvas), c.canvas.style.width = "100%", c.canvas.style.height = "100%", c.ctx = c.canvas.getContext("2d"), c.lazyload !== t && (c.sbg.dataset.lazyload = c.lazyload), c.sbg.className = p, c.sbg.src = c.src, c.sbg.dataset.bgcolor = c.bgcolor, c.sbg.style.width = "100%", c.sbg.style.height = "100%", c.key = l, c.wrap[0].dataset.key = l, e(c.sbg).data(c), c.wrap.data(c), c.wrap[0].appendChild(c.sbg);
      var h = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + d.get(0).outerHTML);
      d.replaceWith(h), a.gA(n[0], "sba") === t && a.sA(n[0], "sba", "");
      var m = {},
          v = a.gA(n[0], "sba").split(";");

      for (var f in v) {
        if (v.hasOwnProperty(f)) {
          var y = v[f].split(":");

          switch (y[0]) {
            case "f":
              m.f = y[1];
              break;

            case "b":
              m.b = y[1];
              break;

            case "g":
              m.g = y[1];
              break;

            case "t":
              m.s = y[1];
          }
        }
      }

      a.sA(n[0], "scroll-based", !!a[i].sbtimeline.set && m.s !== t && m.s), c.bgvid.length > 0 && (c.bgvidid = c.bgvid[0].id, c.animateDirection = "idle", c.bgvid.addClass("defaultvid").css({
        zIndex: 30
      }), p !== t && "" !== p && "none" !== p && c.bgvid.addClass(p), c.bgvid.appendTo(c.wrap), c.parallax != t && (c.bgvid.data("parallax", c.parallax), c.bgvid.data("showcoveronpause", "on"), c.bgvid.data("mediafilter", p)), c.poster = !1, (c.src !== t && -1 == c.src.indexOf("assets/dummy.png") && -1 == c.src.indexOf("assets/transparent.png") || c.lazyload !== t && -1 == c.lazyload.indexOf("assets/transparent.png") && -1 == c.lazyload.indexOf("assets/dummy.png")) && (c.poster = !0), c.bgvid.data("bgvideo", 1), c.bgvid[0].dataset.key = l, 0 == c.bgvid.find(".rs-fullvideo-cover").length && c.bgvid.append('<div class="rs-fullvideo-cover"></div>')), a[i].scrolleffect.set ? (a[i].scrolleffect.bgs.push({
        fade: m.f !== t ? m.f : !!a[i].scrolleffect.slide && a[i].scrolleffect.fade,
        blur: m.b !== t ? m.b : !!a[i].scrolleffect.slide && a[i].scrolleffect.blur,
        grayscale: m.g !== t ? m.g : !!a[i].scrolleffect.slide && a[i].scrolleffect.grayscale,
        c: c.wrap.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
      }), n.prepend(c.wrap.parent().parent())) : n.prepend(c.wrap.parent());
    }

    "carousel" === a[i].sliderType ? (tpGS.gsap.set(a[i].carousel.wrap, {
      opacity: 0
    }), a[i].c[0].appendChild(a[i].carousel.wrap[0])) : a[i].c[0].appendChild(a[i].canvas[0]);
  },
      w = function w(i, r) {
    i.bg = i.bg === t ? "" : i.bg;
    var o = i.bg.split(";"),
        s = {
      bgposition: "50% 50%",
      bgfit: "cover",
      bgrepeat: "no-repeat",
      bgcolor: "transparent"
    };

    for (var n in o) {
      if (o.hasOwnProperty(n)) {
        var l = o[n].split(":"),
            d = l[0],
            c = l[1],
            p = "";

        switch (d) {
          case "p":
            p = "bgposition";
            break;

          case "f":
            p = "bgfit";
            break;

          case "r":
            p = "bgrepeat";
            break;

          case "c":
            p = "bgcolor";
        }

        p !== t && (s[p] = c);
      }
    }

    return a[r].fallbacks.panZoomDisableOnMobile && a.ISM && (s.panzoom = t, s.bgfit = "cover", i.panzoom = t), e.extend(!0, i, s);
  },
      b = function b(e, i, r) {
    if (a[i] !== t) {
      a[i].syncload--;
      var o = a.gA(e, "reference");

      for (var s in a[i].loadqueue) {
        a[i].loadqueue.hasOwnProperty(s) && "loaded" !== a[i].loadqueue[s].progress && o == a[i].loadqueue[s].src && (a[i].loadqueue[s].img = e, a[i].loadqueue[s].progress = r, a[i].loadqueue[s].width = e.naturalWidth, a[i].loadqueue[s].height = e.naturalHeight);
      }

      _(i);
    }
  },
      _ = function _(i) {
    4 != a[i].syncload && a[i].loadqueue && e.each(a[i].loadqueue, function (r, o) {
      if ("prepared" == o.progress && a[i].syncload <= 4) {
        if (a[i].syncload++, "img" == o.type) {
          var s = "IMG" == o.img.tagName ? o.img : new Image();
          a.sA(s, "reference", o.src), !/^([\w]+\:)?\/\//.test(o.src) || -1 !== o.src.indexOf(location.host) && -1 === o.src.indexOf("." + location.host) || "" === a[i].imgCrossOrigin || a[i].imgCrossOrigin === t || (s.crossOrigin = a[i].imgCrossOrigin), s.onload = function () {
            b(this, i, "loaded"), o.error = !1;
          }, s.onerror = function () {
            s.failedOnce || (s.failedOnce = !0, delete s.crossOrigin, s.removeAttribute("crossorigin"), s.src = o.src, b(this, i, "failed"), o.error = !0);
          }, s.src = o.src, o.starttoload = Date.now();
        } else e.get(o.src, function (e) {
          o.innerHTML = new XMLSerializer().serializeToString(e.documentElement), o.progress = "loaded", a[i].syncload--, _(i);
        }).fail(function () {
          o.progress = "failed", a[i].syncload--, _(i);
        });

        o.progress = "inload";
      }
    });
  },
      S = function S(e, t) {
    return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0;
  },
      x = function x(e, t) {
    if (Date.now() - a[t][e + "starttime"] > 5e3 && 1 != a[t][e + "warning"]) {
      a[t][e + "warning"] = !0;
      var i = e + " Api Could not be loaded !";
      "https:" === location.protocol && (i += " Please Check and Renew SSL Certificate !"), console.error(i), a[t].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + i + "</strong></div>");
    }

    return !0;
  },
      k = function k(i) {
    a[i] !== t && (a[i].pr_active_slide = e(a[i].slides[a[i].pr_active_key]), a[i].pr_next_slide = e(a[i].slides[a[i].pr_processing_key]), a[i].pr_active_bg = a[i].pr_active_slide.find("rs-sbg-wrap"), a[i].pr_next_bg = a[i].pr_next_slide.find("rs-sbg-wrap"), a[i].pr_active_bg !== t && a[i].pr_active_bg.length > 0 && tpGS.gsap.to(a[i].pr_active_bg, .5, {
      opacity: 0
    }), a[i].pr_next_bg !== t && a[i].pr_next_bg.length > 0 && tpGS.gsap.to(a[i].pr_next_bg, .5, {
      opacity: 0
    }), tpGS.gsap.set(a[i].pr_active_slide, {
      zIndex: 18
    }), a[i].pr_next_slide !== t && a[i].pr_next_slide.length > 0 && tpGS.gsap.set(a[i].pr_next_slide, {
      autoAlpha: 0,
      zIndex: 20
    }), a[i].tonpause = !1, a[i].pr_active_key !== t && a.removeTheLayers(a[i].pr_active_slide, i, !0), a[i].firststart = 1, setTimeout(function () {
      delete a[i].pr_active_key, delete a[i].pr_processing_key;
    }, 200));
  },
      L = function L(i, r, o) {
    if (a[i] !== t) if (clearTimeout(a[i].waitWithSwapSlide), a[i].pr_processing_key === t || !0 !== a[i].firstSlideShown) {
      if (clearTimeout(a[i].waitWithSwapSlide), a[i].startWithSlideKey !== t && (a[i].pr_next_key = a.getComingSlide(i, a[i].startWithSlideKey).nindex, delete a[i].startWithSlideKey), a[i].pr_active_slide = e(a[i].slides[a[i].pr_active_key]), a[i].pr_next_slide = e(a[i].slides[a[i].pr_next_key]), a[i].pr_next_key == a[i].pr_active_key) return delete a[i].pr_next_key;
      var s = a.gA(a[i].pr_next_slide[0], "key");
      a[i].sbgs[s] !== t && a[i].sbgs[s].bgvid && a[i].sbgs[s].bgvid.length > 0 && (a[i].videos == t || a[i].videos[a[i].sbgs[s].bgvid[0].id] === t) && a.manageVideoLayer(a[i].sbgs[s].bgvid, i, s), a[i].pr_processing_key = a[i].pr_next_key, a[i].pr_cache_pr_next_key = a[i].pr_next_key, delete a[i].pr_next_key, a[i].pr_next_slide !== t && a[i].pr_next_slide[0] !== t && a.gA(a[i].pr_next_slide[0], "hal") !== t && a.sA(a[i].pr_next_slide[0], "sofacounter", a.gA(a[i].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(a.gA(a[i].pr_next_slide[0], "sofacounter"), 0) + 1), a[i].stopLoop && a[i].pr_processing_key == a[i].lastslidetoshow - 1 && (a[i].progressC.css({
        visibility: "hidden"
      }), a[i].c.trigger("revolution.slide.onstop"), a[i].noloopanymore = 1), a[i].pr_next_slide.index() === a[i].slideamount - 1 && a[i].looptogo > 0 && "disabled" !== a[i].looptogo && (a[i].looptogo--, a[i].looptogo <= 0 && (a[i].stopLoop = !0)), a[i].tonpause = !0, a[i].slideInSwapTimer = !0, a[i].c.trigger("stoptimer"), "off" === a[i].spinner ? a[i].loader !== t && !0 === a[i].loaderVisible && (a[i].loader.css({
        display: "none"
      }), a[i].loaderVisible = !1) : a[i].loadertimer = setTimeout(function () {
        a[i].loader !== t && !0 !== a[i].loaderVisible && (a[i].loader.css({
          display: "block"
        }), a[i].loaderVisible = !0);
      }, 100);
      var n = "carousel" === a[i].sliderType && "all" !== a[i].lazyType ? a.loadVisibleCarouselItems(i) : a[i].pr_next_slide[0];
      a.loadImages(n, i, 1), a.preLoadAudio && a.preLoadAudio(a[i].pr_next_slide, i, 1), a.waitForCurrentImages(n, i, function () {
        a[i].firstSlideShown = !0, a[i].pr_next_slide.find("rs-bgvideo").each(function () {
          a.prepareCoveredVideo(i);
        }), a.loadUpcomingContent(i), window.requestAnimationFrame(function () {
          O(a[i].pr_next_slide.find("rs-sbg"), i, r, o);
        });
      });
    } else a[i].waitWithSwapSlide = setTimeout(function () {
      L(i, r);
    }, 18);
  },
      O = function O(i, r, o, s) {
    if (a[r] !== t) {
      M(r), a[r].pr_active_slide = e(a[r].slides[a[r].pr_active_key]), a[r].pr_next_slide = e(a[r].slides[a[r].pr_processing_key]), a[r].pr_active_bg = a[r].pr_active_slide.find("rs-sbg-wrap"), a[r].pr_next_bg = a[r].pr_next_slide.find("rs-sbg-wrap"), a[r].tonpause = !1, clearTimeout(a[r].loadertimer), a[r].loader !== t && !0 === a[r].loaderVisible && (window.requestAnimationFrame(function () {
        a[r].loader.css({
          display: "none"
        });
      }), a[r].loaderVisible = !1), a[r].onBeforeSwap = {
        slider: r,
        slideIndex: parseInt(a[r].pr_active_key, 0) + 1,
        slideLIIndex: a[r].pr_active_key,
        nextSlideIndex: parseInt(a[r].pr_processing_key, 0) + 1,
        nextSlideLIIndex: a[r].pr_processing_key,
        nextslide: a[r].pr_next_slide,
        slide: a[r].pr_active_slide,
        currentslide: a[r].pr_active_slide,
        prevslide: a[r].pr_lastshown_key !== t ? a[r].slides[a[r].pr_lastshown_key] : ""
      }, "carousel" !== a[r].sliderType && tpGS.gsap.set(a[r].pr_next_slide, {
        display: "block"
      }), a[r].c.trigger("revolution.slide.onbeforeswap", a[r].onBeforeSwap);
      var n = a.gA(a[r].pr_active_slide[0], "key"),
          l = a[r].sbgs[n];

      if (l && l.panzoom && l.pzAnim && (l.pzLastFrame = !0, a.pzDrawShadow(r, l, l.pzAnim.start)), a[r].transition = 1, a[r].stopByVideo = !1, a[r].pr_next_slide[0] !== t && a.gA(a[r].pr_next_slide[0], "duration") != t && "" != a.gA(a[r].pr_next_slide[0], "duration") ? a[r].duration = parseInt(a.gA(a[r].pr_next_slide[0], "duration"), 0) : a[r].duration = a[r].origcd, a[r].pr_next_slide[0] === t || "true" != a.gA(a[r].pr_next_slide[0], "ssop") && !0 !== a.gA(a[r].pr_next_slide[0], "ssop") ? a[r].ssop = !1 : a[r].ssop = !0, a[r].sbtimeline.set && a[r].sbtimeline.fixed && a.updateFixedScrollTimes(r), a[r].c.trigger("nulltimer"), a[r].sdir = "bullet" !== a[r].sc_indicator && a[r].pr_active_key == a[r].slideamount - 1 && 0 == a[r].pr_processing_key ? 0 : a[r].pr_processing_key < a[r].pr_active_key ? 1 : 0, "arrow" == a[r].sc_indicator && (a[r].sdir = a[r].sc_indicator_dir), a[r].lsdir = a[r].sdir, a[r].pr_active_key != a[r].pr_processing_key && 1 != a[r].firststart && "carousel" !== a[r].sliderType && a.removeTheLayers && a.removeTheLayers(a[r].pr_active_slide, r), 1 !== a.gA(a[r].pr_next_slide[0], "rspausetimeronce") && 1 !== a.gA(a[r].pr_next_slide[0], "rspausetimeralways") ? a[r].c.trigger("restarttimer") : (a[r].stopByVideo = !0, a.unToggleState(a[r].slidertoggledby)), a.sA(a[r].pr_next_slide[0], "rspausetimeronce", 0), a[r].pr_next_slide[0] !== t && a.sA(a[r].c[0], "slideactive", a.gA(a[r].pr_next_slide[0], "key")), "carousel" == a[r].sliderType) {
        if (a[r].mtl = tpGS.gsap.timeline(), a.prepareCarousel(r), "v" == a[r].carousel.orientation && tpGS.gsap.set(a[r].canvas, {
          height: a[r].carousel.slide_height
        }), R(r, s), a.updateSlideBGs(r), !0 !== a[r].carousel.checkFVideo) {
          var d = a.gA(a[r].pr_next_slide[0], "key");
          a[r].sbgs[d] !== t && a[r].sbgs[d].bgvid !== t && 0 !== a[r].sbgs[d].bgvid.length && a.playBGVideo(r, d), a[r].carousel.checkFVideo = !0;
        }

        a[r].transition = 0;
      } else {
        a[r].pr_lastshown_key = a[r].pr_lastshown_key === t ? a[r].pr_next_key !== t ? a[r].pr_next_key : a[r].pr_processing_key !== t ? a[r].pr_processing_key : a[r].pr_active_key !== t ? a[r].pr_active_key : a[r].pr_lastshown_key : a[r].pr_lastshown_key, a[r].mtl = tpGS.gsap.timeline({
          paused: !0,
          onComplete: function onComplete() {
            R(r);
          }
        }), a[r].pr_next_key !== t ? a.animateTheLayers({
          slide: a[r].pr_next_key,
          id: r,
          mode: "preset",
          caller: "swapSlideProgress_1"
        }) : a[r].pr_processing_key !== t ? a.animateTheLayers({
          slide: a[r].pr_processing_key,
          id: r,
          mode: "preset",
          caller: "swapSlideProgress_2"
        }) : a[r].pr_active_key !== t && a.animateTheLayers({
          slide: a[r].pr_active_key,
          id: r,
          mode: "preset",
          caller: "swapSlideProgress_3"
        }), 1 == a[r].firststart && (a[r].pr_active_slide[0] !== t && tpGS.gsap.set(a[r].pr_active_slide, {
          autoAlpha: 0
        }), a[r].firststart = 0), a[r].pr_active_slide[0] !== t && tpGS.gsap.set(a[r].pr_active_slide, {
          zIndex: 18
        }), a[r].pr_next_slide[0] !== t && tpGS.gsap.set(a[r].pr_next_slide, {
          autoAlpha: 0,
          zIndex: 20
        });
        d = a.gA(a[r].pr_next_slide[0], "key");
        a[r].sbgs[d] !== t && a[r].sbgs[d].alt === t && (a[r].sbgs[d].alt = a.gA(a[r].pr_next_slide[0], "alttrans") || !1, a[r].sbgs[d].alt = !1 !== a[r].sbgs[d].alt && a[r].sbgs[d].alt.split(","), a[r].sbgs[d].altIndex = 0, a[r].sbgs[d].altLen = !1 !== a[r].sbgs[d].alt ? a[r].sbgs[d].alt.length : 0);
        a[r].firstSlideAnimDone === t && a[r].fanim !== t && !1 !== a[r].fanim || a[r].sbgs[d].slideanimation === t || a[r].sbgs[d].slideanimationRebuild || a[r].sbgs[d].random !== t && a.SLTR !== t || a[r].sbgs[d].altLen > 0 && a.SLTR;
        a[r].sbgs[d].slideanimation = a[r].firstSlideAnimDone === t && a[r].fanim !== t && !1 !== a[r].fanim ? a.convertSlideAnimVals(e.extend(!0, {}, a.getSlideAnim_EmptyObject(), a[r].fanim)) : a[r].sbgs[d].slideanimation === t || a[r].sbgs[d].slideanimationRebuild || a[r].sbgs[d].altLen > 0 && "default_first_anim" == a[r].sbgs[d].alt[a[r].sbgs[d].altIndex] ? a.getSlideAnimationObj(r, {
          anim: a.gA(a[r].pr_next_slide[0], "anim"),
          filter: a.gA(a[r].pr_next_slide[0], "filter"),
          "in": a.gA(a[r].pr_next_slide[0], "in"),
          out: a.gA(a[r].pr_next_slide[0], "out"),
          d3: a.gA(a[r].pr_next_slide[0], "d3")
        }, d) : a[r].sbgs[d].random !== t && a.SLTR !== t ? a.convertSlideAnimVals(e.extend(!0, {}, a.getSlideAnim_EmptyObject(), a.getAnimObjectByKey(a.getRandomSlideTrans(a[r].sbgs[d].random.rndmain, a[r].sbgs[d].random.rndgrp, a.SLTR), a.SLTR))) : a[r].sbgs[d].altLen > 0 && a.SLTR !== t ? a.convertSlideAnimVals(e.extend(!0, {
          altAnim: a[r].sbgs[d].alt[a[r].sbgs[d].altIndex]
        }, a.getSlideAnim_EmptyObject(), a.getAnimObjectByKey(a[r].sbgs[d].alt[a[r].sbgs[d].altIndex], a.SLTR))) : a[r].sbgs[d].slideanimation, a[r].sbgs[d].altLen > 0 && (a[r].sbgs[d].firstSlideAnimDone !== t ? (a[r].sbgs[d].altIndex++, a[r].sbgs[d].altIndex = a[r].sbgs[d].altIndex >= a[r].sbgs[d].altLen ? 0 : a[r].sbgs[d].altIndex) : (a[r].sbgs[d].firstSlideAnimDone = !0, a.SLTR === t && a.SLTR_loading === t && a.loadSlideAnimLibrary(r), a[r].sbgs[d].alt.push("default_first_anim"), a[r].sbgs[d].altLen++)), a[r].sbgs[d].currentState = "animating", a.animateSlide(r, a[r].sbgs[d].slideanimation), a[r].firstSlideAnimDone === t && a[r].fanim !== t && !1 !== a[r].fanim && (a[r].sbgs[d].slideanimationRebuild = !0), a[r].firstSlideAnimDone = !0, a[r].pr_next_bg.data("panzoom") !== t && requestAnimationFrame(function () {
          var e = a.gA(a[r].pr_next_slide[0], "key");
          a.startPanZoom(a[r].pr_next_bg, r, 0, a.getSlideIndex(r, e), "first", e);
        }), a[r].mtl.pause();
      }

      if (a.animateTheLayers ? "carousel" === a[r].sliderType ? (!1 !== a[r].carousel.showLayersAllTime && (a[r].carousel.allLayersStarted ? a.animateTheLayers({
        slide: "individual",
        id: r,
        mode: "rebuild",
        caller: "swapSlideProgress_5"
      }) : a.animateTheLayers({
        slide: "individual",
        id: r,
        mode: "start",
        caller: "swapSlideProgress_4"
      }), a[r].carousel.allLayersStarted == t && (a.updateCarouselRows(r), a[r].carousel.allLayersStarted = !0)), 0 !== a[r].firststart ? a.animateTheLayers({
        slide: 0,
        id: r,
        mode: "start",
        caller: "swapSlideProgress_6"
      }) : !0 !== o && a.animateTheLayers({
        slide: a[r].pr_next_key !== t ? a[r].pr_next_key : a[r].pr_processing_key !== t ? a[r].pr_processing_key : a[r].pr_active_key,
        id: r,
        mode: "start",
        caller: "swapSlideProgress_7"
      }), a[r].firststart = 0) : a.animateTheLayers({
        slide: a[r].pr_next_key !== t ? a[r].pr_next_key : a[r].pr_processing_key !== t ? a[r].pr_processing_key : a[r].pr_active_key,
        id: r,
        mode: "start",
        caller: "swapSlideProgress_8"
      }) : a[r].mtl != t && setTimeout(function () {
        a[r].mtl.resume();
      }, 18), "carousel" !== a[r].sliderType) if (a[r].scwDur = .001, Array.isArray(a[r].scwCallback) && a[r].scwCallback.length > 0) {
        a[r].scwDone = !1, a[r].scwCount = a[r].scwCallback.length;

        for (var c = 0; c < a[r].scwCallback.length; c++) {
          a[r].scwCallback[c]();
        }

        a[r].scwTimeout = tpGS.gsap.delayedCall(2, function () {
          a[r].scwCount > 0 && (a[r].scwTween && "function" == typeof a[r].scwTween.kill && (a[r].scwTween.kill(), a[r].scwTween = null), a[r].scwTween = tpGS.gsap.to(a[r].pr_next_slide, {
            duration: a[r].scwDur,
            autoAlpha: 1
          }));
        });
      } else tpGS.gsap.to(a[r].pr_next_slide, {
        duration: a[r].scwDur,
        autoAlpha: 1
      });
    }
  },
      R = function R(i) {
    if (a[i] !== t) {
      if ("done" !== a.RS_swapList[i]) {
        a.RS_swapList[i] = "done";
        var r = e.inArray(i, a.RS_swapping);
        a.RS_swapping.splice(r, 1);
      }

      if (a[i].firstSlideAvailable === t && (a[i].firstSlideAvailable = !0, window.requestAnimationFrame(function () {
        "hero" !== a[i].sliderType && a.createNavigation && a[i].navigation.use && !0 !== a[i].navigation.createNavigationDone && a.createNavigation(i);
      })), "carousel" === a[i].sliderType && tpGS.gsap.to(a[i].carousel.wrap, 1, {
        opacity: 1
      }), a[i].pr_active_key = a[i].pr_processing_key !== t ? a[i].pr_processing_key : a[i].pr_active_key, delete a[i].pr_processing_key, "scroll" != a[i].parallax.type && "scroll+mouse" != a[i].parallax.type && "mouse+scroll" != a[i].parallax.type || (a[i].lastscrolltop = -999, a.generalObserver(a.ISM)), a[i].mtldiff = a[i].mtl.time(), delete a[i].mtl, a[i].pr_active_key !== t) {
        a.gA(a[i].slides[a[i].pr_active_key], "sloop") !== t && function (e) {
          if (a[e] !== t) {
            a[e].sloops = a[e].sloops === t ? {} : a[e].sloops;
            var i = a.gA(a[e].slides[a[e].pr_active_key], "key"),
                r = a[e].sloops[i];

            if (r === t) {
              r = {
                s: 2500,
                e: 4500,
                r: "unlimited"
              };
              var o = a.gA(a[e].slides[a[e].pr_active_key], "sloop").split(";");

              for (var s in o) {
                if (o.hasOwnProperty(s)) {
                  var n = o[s].split(":");

                  switch (n[0]) {
                    case "s":
                      r.s = parseInt(n[1], 0) / 1e3;
                      break;

                    case "e":
                      r.e = parseInt(n[1], 0) / 1e3;
                      break;

                    case "r":
                      r.r = n[1];
                  }
                }
              }

              r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), a[e].sloops[i] = r, r.key = i;
            }

            r.ct = {
              time: r.s
            }, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, {
              time: r.s
            }, {
              time: r.e,
              ease: "none",
              onRepeat: function onRepeat() {
                for (var i in a[e].layers[r.key]) {
                  a[e].layers[r.key].hasOwnProperty(i) && a[e]._L[i].timeline.play(r.s);
                }

                var o = a[e].progressC;
                o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s);
              },
              onUpdate: function onUpdate() {},
              onComplete: function onComplete() {}
            }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(a[e].mtldiff);
          }
        }(i), a.sA(a[i].slides[a[i].activeRSSlide], "isactiveslide", !1), a[i].activeRSSlide = a[i].pr_active_key, a.sA(a[i].slides[a[i].activeRSSlide], "isactiveslide", !0);
        var o = a.gA(a[i].slides[a[i].pr_active_key], "key"),
            s = a.gA(a[i].slides[a[i].pr_lastshown_key], "key");
        a.sA(a[i].c[0], "slideactive", o), s !== t && a[i].panzoomTLs !== t && a[i].panzoomTLs[a.getSlideIndex(i, s)] !== t && ("carousel" === a[i].sliderType ? (a[i].panzoomTLs[a.getSlideIndex(i, s)].timeScale(3), a[i].panzoomTLs[a.getSlideIndex(i, s)].reverse()) : a[i].panzoomTLs[a.getSlideIndex(i, s)].pause()), I(i, o);
        var n = {
          slider: i,
          slideIndex: parseInt(a[i].pr_active_key, 0) + 1,
          slideLIIndex: a[i].pr_active_key,
          slide: a[i].pr_next_slide,
          currentslide: a[i].pr_next_slide,
          prevSlideIndex: a[i].pr_lastshown_key !== t && parseInt(a[i].pr_lastshown_key, 0) + 1,
          prevSlideLIIndex: a[i].pr_lastshown_key !== t && parseInt(a[i].pr_lastshown_key, 0),
          prevSlide: a[i].pr_lastshown_key !== t && a[i].slides[a[i].pr_lastshown_key]
        };

        if (a[i].c.trigger("revolution.slide.onchange", n), a[i].c.trigger("revolution.slide.onafterswap", n), "" + a[i].pr_lastshown_key != "" + a[i].pr_active_key && "carousel" !== a[i].sliderType && tpGS.gsap.set(n.prevSlide, {
          display: "none",
          delay: .01
        }), a[i].deepLinkListener || a[i].enableDeeplinkHash) {
          var l = a.gA(a[i].slides[a[i].pr_active_key], "deeplink");
          l !== t && l.length > 0 && (a[i].ignoreDeeplinkChange = !0, window.location.hash = a.gA(a[i].slides[a[i].pr_active_key], "deeplink"));
        }

        a[i].pr_lastshown_key = a[i].pr_active_key, a[i].startWithSlide !== t && "done" !== a[i].startWithSlide && "carousel" === a[i].sliderType && (a[i].firststart = 0), a[i].duringslidechange = !1, a[i].pr_active_slide.length > 0 && 0 != a.gA(a[i].pr_active_slide[0], "hal") && a.gA(a[i].pr_active_slide[0], "hal") <= a.gA(a[i].pr_active_slide[0], "sofacounter") && a[i].c.revremoveslide(a[i].pr_active_slide.index());
        var d = a[i].pr_processing_key || a[i].pr_active_key || 0;
        a[i].rowzones != t && (d = d > a[i].rowzones.length ? a[i].rowzones.length : d), (a[i].rowzones != t && a[i].rowzones.length > 0 && a[i].rowzones[d] != t && d >= 0 && d <= a[i].rowzones.length && a[i].rowzones[d].length > 0 || a.winH < a[i].module.height) && a.updateDims(i), a[i].firstLetItFree === t && (a.generalObserver(a.ISM), a[i].firstLetItFree = !0), a[i].skipAttachDetach = !1;
      }
    }
  },
      I = function I(e, i) {
    a[e].sbgs[i] === t || a[e].sbgs[i].loadobj.img ? a[e].pr_next_bg.data("panzoom") !== t && (a[e].panzoomTLs !== t && a[e].panzoomTLs[a.getSlideIndex(e, i)] !== t ? (a[e].panzoomTLs[a.getSlideIndex(e, i)].timeScale(1), a[e].panzoomTLs[a.getSlideIndex(e, i)].play()) : a.startPanZoom(a[e].pr_next_bg, e, 0, a.getSlideIndex(e, i), "play", i)) : tpGS.gsap.delayedCall(.1, function () {
      I(e, i);
    });
  },
      M = function M(i) {
    var r = a[i].progressBar;
    if (a[i].progressC === t || 0 == a[i].progressC.length) if (a[i].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
      if ("module" === r.basedon) {
        for (var o = "", s = 0; s < a[i].slideamount; s++) {
          o += "<rs-progress-bar></rs-progress-bar>";
        }

        o += "<rs-progress-bgs>";

        for (s = 0; s < a[i].slideamount; s++) {
          o += "<rs-progress-bg></rs-progress-bg>";
        }

        if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype) for (s = 0; s < a[i].slideamount; s++) {
          o += "<rs-progress-gap></rs-progress-gap>";
        }
        a[i].progressC[0].innerHTML = o, !0 === a[i].noDetach && a[i].c.append(a[i].progressC), a[i].progressCBarBGS = a.getByTag(a[i].progressC[0], "RS-PROGRESS-BG"), a[i].progressCBarGAPS = a.getByTag(a[i].progressC[0], "RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(a[i].progressCBarGAPS, {
          backgroundColor: r.gapcolor,
          zIndex: "gapbg" === r.gaptype ? 17 : 27
        }), tpGS.gsap.set(a[i].progressCBarBGS, {
          backgroundColor: r.bgcolor
        });
      } else a[i].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === a[i].noDetach && a[i].c.append(a[i].progressC);

      a[i].progressCBarInner = a.getByTag(a[i].progressC[0], "RS-PROGRESS-BAR"), tpGS.gsap.set(a[i].progressCBarInner, {
        background: r.color
      });
    } else a[i].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === a[i].noDetach && a[i].c.append(a[i].progressC), a[i].progressCBarInner = a[i].progressC[0].getElementsByClassName("rs-progress-bar")[0], a[i].progressBCanvas = a[i].progressCBarInner.getContext("2d"), a[i].progressBar.degree = "cw" === a[i].progressBar.style ? 360 : 0, T(i);
    if (!0 !== a[i].noDetach && a[i].progressC.detach(), a[i].progressBar.visibility[a[i].level] && 1 != a[i].progressBar.disableProgressBar) {
      if ("horizontal" === r.style || "vertical" === r.style) {
        var n,
            l,
            d = a[i].slideamount - 1;

        if ("horizontal" === r.style) {
          var c = "grid" === r.alignby ? a[i].gridwidth[a[i].level] : a[i].module.width;
          n = Math.ceil(c / a[i].slideamount), l = Math.ceil((c - d * r.gapsize) / a[i].slideamount), tpGS.gsap.set(a[i].progressC, {
            visibility: "visible",
            top: "top" === r.vertical ? r.y + ("grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(0, a[i].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
            bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(0, a[i].gridOffsetHeight) : 0),
            left: "left" === r.horizontal && "grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : "auto",
            right: "right" === r.horizontal && "grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : "auto",
            y: "center" === r.vertical ? r.y : 0,
            height: r.size,
            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
            marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2,
            width: "grid" === r.alignby ? a[i].gridwidth[a[i].level] : "100%"
          }), tpGS.gsap.set(a[i].progressCBarInner, {
            x: "module" === r.basedon ? r.gap ? function (e) {
              return ("right" === r.horizontal ? d - e : e) * (l + r.gapsize);
            } : function (e) {
              return ("right" === r.horizontal ? d - e : e) * n;
            } : 0,
            width: "module" === r.basedon ? r.gap ? l + "px" : 100 / a[i].slideamount + "%" : "100%"
          }), "module" === r.basedon && (tpGS.gsap.set(a[i].progressCBarBGS, {
            x: "module" === r.basedon ? r.gap ? function (e) {
              return e * (l + r.gapsize);
            } : function (e) {
              return e * n;
            } : 0,
            width: "module" === r.basedon ? r.gap ? l + "px" : 100 / a[i].slideamount + "%" : "100%"
          }), tpGS.gsap.set(a[i].progressCBarGAPS, {
            width: r.gap ? r.gapsize + "px" : 0,
            x: r.gap ? function (e) {
              return (e + 1) * l + parseInt(r.gapsize, 0) * e;
            } : 0
          }));
        } else if ("vertical" === r.style) {
          c = "grid" === r.alignby ? a[i].gridheight[a[i].level] : a[i].module.height;
          n = Math.ceil(c / a[i].slideamount), l = Math.ceil((c - d * r.gapsize) / a[i].slideamount), tpGS.gsap.set(a[i].progressC, {
            visibility: "visible",
            left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
            right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : 0),
            x: "center" === r.horizontal ? r.x : 0,
            top: "top" === r.vertical && "grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(a[i].gridOffsetHeight, 0) : "auto",
            bottom: "bottom" === r.vertical && "grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(a[i].gridOffsetHeight, 0) : "auto",
            width: r.size,
            marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2,
            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
            height: "grid" === r.alignby ? a[i].gridheight[a[i].level] : "100%"
          }), tpGS.gsap.set(a[i].progressCBarInner, {
            y: "module" === r.basedon ? r.gap ? function (e) {
              return ("bottom" === r.vertical ? d - e : e) * (l + r.gapsize);
            } : function (e) {
              return ("bottom" === r.vertical ? d - e : e) * n;
            } : 0,
            height: "module" === r.basedon ? r.gap ? l + "px" : 100 / a[i].slideamount + "%" : "100%"
          }), "module" === r.basedon && (tpGS.gsap.set(a[i].progressCBarBGS, {
            y: "module" === r.basedon ? r.gap ? function (e) {
              return e * (l + r.gapsize);
            } : function (e) {
              return e * n;
            } : 0,
            height: "module" === r.basedon ? r.gap ? l + "px" : 100 / a[i].slideamount + "%" : "100%"
          }), tpGS.gsap.set(a[i].progressCBarGAPS, {
            height: r.gap ? r.gapsize + "px" : 0,
            y: r.gap ? function (e) {
              return (e + 1) * l + parseInt(r.gapsize, 0) * e;
            } : 0
          }));
        }
      } else tpGS.gsap.set(a[i].progressC, {
        top: "top" === r.vertical ? r.y + ("grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(0, a[i].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
        bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && a[i].gridOffsetHeight !== t ? Math.max(0, a[i].gridOffsetHeight) : 0),
        left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
        right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && a[i].gridOffsetWidth !== t ? Math.max(0, a[i].gridOffsetWidth) : 0),
        y: "center" === r.vertical ? r.y : 0,
        x: "center" === r.horizontal ? r.x : 0,
        width: 2 * r.radius,
        height: 2 * r.radius,
        marginTop: "center" === r.vertical ? 0 - r.radius : 0,
        marginLeft: "center" === r.horizontal ? 0 - r.radius : 0,
        backgroundColor: "transparent",
        visibility: "visible"
      });
    } else a[i].progressC[0].style.visibility = "hidden";
    !0 !== a[i].noDetach && a[i].c.append(a[i].progressC), a[i].gridOffsetWidth === t && "grid" === r.alignby ? a[i].rebuildProgressBar = !0 : a[i].rebuildProgressBar = !1;
  },
      T = function T(e) {
    var t = a[e].progressBar;
    t.radius - parseInt(t.size, 0) <= 0 && (t.size = t.radius / 4);
    var i = parseInt(t.radius),
        r = parseInt(t.radius);
    a[e].progressBCanvas.lineCap = "round", a[e].progressBCanvas.clearRect(0, 0, 2 * t.radius, 2 * t.radius), a[e].progressBCanvas.beginPath(), a[e].progressBCanvas.arc(i, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), a[e].progressBCanvas.strokeStyle = t.bgcolor, a[e].progressBCanvas.lineWidth = parseInt(t.size, 0) - 1, a[e].progressBCanvas.stroke(), a[e].progressBCanvas.beginPath(), a[e].progressBCanvas.strokeStyle = t.color, a[e].progressBCanvas.lineWidth = parseInt(t.size, 0), a[e].progressBCanvas.arc(i, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + a[e].progressBar.degree), "cw" !== t.style), a[e].progressBCanvas.stroke();
  },
      C = function C(i) {
    var r = function r() {
      i !== t && a !== t && a[i] !== t && (0 == e("body").find(a[i].c).length || null === a[i] || null === a[i].c || a[i].c === t || 0 === a[i].length ? (!function (t) {
        a[t].c.children().each(function () {
          try {
            e(this).die("click");
          } catch (e) {}

          try {
            e(this).die("mouseenter");
          } catch (e) {}

          try {
            e(this).die("mouseleave");
          } catch (e) {}

          try {
            e(this).off("hover");
          } catch (e) {}
        });

        try {
          a[t].c.die("click", "mouseenter", "mouseleave");
        } catch (e) {}

        clearInterval(a[t].cdint), a[t].c = null;
      }(i), clearInterval(a[i].cdint)) : (a[i].c.trigger("revolution.slide.slideatend"), 1 == a[i].c.data("conthoverchanged") && (a[i].conthover = a[i].c.data("conthover"), a[i].c.data("conthoverchanged", 0)), a.callingNewSlide(i, 1, !0)));
    },
        o = tpGS.gsap.timeline({
      paused: !0
    }),
        s = "reset" === a[i].progressBar.reset || a[i].progressBar.notnew === t ? 0 : .2,
        n = "slide" === a[i].progressBar.basedon ? 0 : a[i].pr_processing_key !== t ? a[i].pr_processing_key : a[i].pr_active_key;

    if (n = n === t ? 0 : n, "horizontal" === a[i].progressBar.style) {
      if (o.add(tpGS.gsap.to(a[i].progressCBarInner[n], s, {
        scaleX: 0,
        transformOrigin: "right" === a[i].progressBar.horizontal ? "100% 50%" : "0% 50%"
      })), o.add(tpGS.gsap.to(a[i].progressCBarInner[n], a[i].duration / 1e3, {
        transformOrigin: "right" === a[i].progressBar.horizontal ? "100% 50%" : "0% 50%",
        force3D: "auto",
        scaleX: 1,
        onComplete: r,
        delay: .5,
        ease: a[i].progressBar.ease
      })), "module" === a[i].progressBar.basedon) for (var l = 0; l < a[i].slideamount; l++) {
        l !== n && o.add(tpGS.gsap.set(a[i].progressCBarInner[l], {
          scaleX: l < n ? 1 : 0,
          transformOrigin: "right" === a[i].progressBar.horizontal ? "100% 50%" : "0% 50%"
        }), 0);
      }
    } else if ("vertical" === a[i].progressBar.style) {
      if (a[i].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(a[i].progressCBarInner[n], s, {
        scaleY: 0,
        transformOrigin: "bottom" === a[i].progressBar.vertical ? "50% 100%" : "50% 0%"
      })), a[i].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(a[i].progressCBarInner[n], a[i].duration / 1e3, {
        transformOrigin: "bottom" === a[i].progressBar.vertical ? "50% 100%" : "50% 0%",
        force3D: "auto",
        scaleY: 1,
        onComplete: r,
        delay: .5,
        ease: a[i].progressBar.ease
      })), "module" === a[i].progressBar.basedon) for (l = 0; l < a[i].slideamount; l++) {
        l !== n && a[i].progressCBarInner[l] !== t && o.add(tpGS.gsap.set(a[i].progressCBarInner[l], {
          scaleY: l < n ? 1 : 0,
          transformOrigin: "botton" === a[i].progressBar.vertical ? "50% 100%" : "50% 0%"
        }), 0);
      }
    } else {
      var d = "slide" === a[i].progressBar.basedon ? 0 : Math.max(0, 360 / a[i].slideamount * n),
          c = "slide" === a[i].progressBar.basedon ? 360 : 360 / a[i].slideamount * (n + 1);
      "ccw" === a[i].progressBar.style && "slide" !== a[i].progressBar.basedon && (d = 360 - c, c = 360 - 360 / a[i].slideamount * n), o.add(tpGS.gsap.to(a[i].progressBar, s, {
        degree: "cw" === a[i].progressBar.style ? d : c,
        onUpdate: function onUpdate() {
          T(i);
        }
      })), o.add(tpGS.gsap.to(a[i].progressBar, a[i].duration / 1e3, {
        degree: "cw" === a[i].progressBar.style ? c : d,
        onUpdate: function onUpdate() {
          T(i);
        },
        onComplete: r,
        delay: .5,
        ease: a[i].progressBar.ease
      }));
    }

    return a[i].progressBar.notnew = !0, o;
  },
      A = function A(e) {
    a[e].progressC == t && M(e), a[e].loop = 0, a[e].stopAtSlide != t && a[e].stopAtSlide > -1 ? a[e].lastslidetoshow = a[e].stopAtSlide : a[e].lastslidetoshow = 999, a[e].stopLoop = !1, 0 == a[e].looptogo && (a[e].stopLoop = !0), a[e].c.on("stoptimer", function () {
      a[e].progressC != t && (a[e].progressC[0].tween.pause(), a[e].progressBar.disableProgressBar && (a[e].progressC[0].style.visibility = "hidden"), a[e].sliderstatus = "paused", a[e].slideInSwapTimer || a.unToggleState(a[e].slidertoggledby), a[e].slideInSwapTimer = !1);
    }), a[e].c.on("starttimer", function () {
      a[e].progressC != t && (a[e].forcepaused || (1 != a[e].conthover && 1 != a[e].stopByVideo && a[e].module.width > a[e].hideSliderAtLimit && 1 != a[e].tonpause && 1 != a[e].overnav && 1 != a[e].ssop && (1 === a[e].noloopanymore || a[e].viewPort.enable && !a[e].inviewport || (a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "visible"), a[e].progressC[0].tween.resume(), a[e].sliderstatus = "playing")), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a.toggleState(a[e].slidertoggledby)));
    }), a[e].c.on("restarttimer", function () {
      if (a[e].progressC != t && !a[e].forcepaused) {
        if (a[e].mouseoncontainer && "on" == a[e].navigation.onHoverStop && !a.ISM) return !1;
        1 === a[e].noloopanymore || a[e].viewPort.enable && !a[e].inviewport || 1 == a[e].ssop ? a.unToggleState(a[e].slidertoggledby) : (a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "visible"), a[e].progressC[0].tween !== t && a[e].progressC[0].tween.kill(), a[e].progressC[0].tween = C(e), a[e].progressC[0].tween.play(), a[e].sliderstatus = "playing", a.toggleState(a[e].slidertoggledby)), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a[e].mouseoncontainer && 1 == a[e].navigation.onHoverStop && !a.ISM && (a[e].c.trigger("stoptimer"), a[e].c.trigger("revolution.slide.onpause"));
      }
    }), a[e].c.on("nulltimer", function () {
      a[e].progressC != t && a[e].progressC[0] !== t && (a[e].progressC[0].tween !== t && a[e].progressC[0].tween.kill(), a[e].progressC[0].tween = C(e), a[e].progressC[0].tween.pause(0), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a[e].sliderstatus = "paused");
    }), a[e].progressC !== t && (a[e].progressC[0].tween = C(e)), a[e].slideamount > 1 && (0 != a[e].stopAfterLoops || 1 != a[e].stopAtSlide) ? a[e].c.trigger("starttimer") : (a[e].noloopanymore = 1, a[e].c.trigger("nulltimer")), a[e].c.on("tp-mouseenter", function () {
      a[e].mouseoncontainer = !0, 1 != a[e].navigation.onHoverStop || a.ISM || (a[e].c.trigger("stoptimer"), a[e].c.trigger("revolution.slide.onpause"));
    }), a[e].c.on("tp-mouseleft", function () {
      a[e].mouseoncontainer = !1, 1 != a[e].c.data("conthover") && 1 == a[e].navigation.onHoverStop && (1 == a[e].viewPort.enable && a[e].inviewport || 0 == a[e].viewPort.enable) && (a[e].c.trigger("revolution.slide.onresume"), a[e].c.trigger("starttimer"));
    });
  },
      D = function D() {
    e(".rev_redraw_on_blurfocus").each(function () {
      var e = this.id;
      if (a[e] == t || a[e].c == t || 0 === a[e].c.length) return !1;
      1 != a[e].windowfocused && (a[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function () {
        a[e].fallbacks.nextSlideOnWindowFocus && a[e].c.revnext(), a[e].c.revredraw(), "playing" == a[e].lastsliderstatus && a[e].c.revresume(), a[e].c.trigger("revolution.slide.tabfocused");
      }));
    });
  },
      P = function P() {
    document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function (e) {
      var t = this.id;
      a[t].windowfocused = !1, a[t].lastsliderstatus = a[t].sliderstatus, a[t].c.revpause(), a[t].c.trigger("revolution.slide.tabblured");
    });
  },
      B = function B() {
    e("rs-module").each(function () {
      var e = this.id;

      if (a[e].inviewport || !a[e].viewPort.enable) {
        var i = a[e].pr_active_slide !== t && a[e].pr_active_slide.data("key") !== t ? a[e].pr_active_slide.data("key") : a[e].pr_next_slide !== t && a[e].pr_next_slide.data("key") !== t ? a[e].pr_next_slide.data("key") : t;
        if (i == t) return;
        a[e].sbgs[i].bgvid.length > 0 && a[e].videos[a[e].sbgs[i].bgvid[0].id].loop && ("visible" === document.visibilityState ? a.playVideo(a[e].sbgs[i].bgvid, e) : a.stopVideo(a[e].sbgs[i].bgvid, e));
      }
    });
  },
      G = function G() {
    var e = document.documentMode === t,
        i = window.chrome;
    1 !== a.revslider_focus_blur_listener && (a.revslider_focus_blur_listener = 1, e && !i ? a.window.on("focusin", function () {
      !0 !== a.windowIsFocused && D(), a.windowIsFocused = !0;
    }).on("focusout", function () {
      !0 !== a.windowIsFocused && a.windowIsFocused !== t || P(), a.windowIsFocused = !1;
    }) : window.addEventListener ? (window.addEventListener("focus", function (e) {
      !0 !== a.windowIsFocused && D(), a.windowIsFocused = !0;
    }, {
      capture: !1,
      passive: !0
    }), window.addEventListener("blur", function (e) {
      !0 !== a.windowIsFocused && a.windowIsFocused !== t || P(), a.windowIsFocused = !1;
    }, {
      capture: !1,
      passive: !0
    })) : (window.attachEvent("focus", function (e) {
      !0 !== a.windowIsFocused && D(), a.windowIsFocused = !0;
    }), window.attachEvent("blur", function (e) {
      !0 !== a.windowIsFocused && a.windowIsFocused !== t || P(), a.windowIsFocused = !1;
    })));
  },
      H = function H(e) {
    for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) {
      a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1];
    }

    return i;
  },
      F = function F(i) {
    if (a[i].blockSpacing !== t) {
      var r = a[i].blockSpacing.split(";");

      for (var o in a[i].blockSpacing = {}, r) {
        if (r.hasOwnProperty(o)) {
          var s = r[o].split(":");

          switch (s[0]) {
            case "t":
              a[i].blockSpacing.top = a.revToResp(s[1], 4, 0);
              break;

            case "b":
              a[i].blockSpacing.bottom = a.revToResp(s[1], 4, 0);
              break;

            case "l":
              a[i].blockSpacing.left = a.revToResp(s[1], 4, 0);
              break;

            case "r":
              a[i].blockSpacing.right = a.revToResp(s[1], 4, 0);
          }
        }
      }

      a[i].blockSpacing.block = e(a.closestClass(a[i].c[0], "wp-block-themepunch-revslider")), a[i].level !== t && a[i].blockSpacing !== t && tpGS.gsap.set(a[i].blockSpacing.block, {
        paddingLeft: a[i].blockSpacing.left[a[i].level],
        paddingRight: a[i].blockSpacing.right[a[i].level],
        marginTop: a[i].blockSpacing.top[a[i].level],
        marginBottom: a[i].blockSpacing.bottom[a[i].level]
      });
    }
  },
      z = function z(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
      W = function W(i) {
    return function (e) {
      for (var i in e.minHeight = e.minHeight !== t ? "none" === e.minHeight || "0" === e.minHeight || "0px" === e.minHeight || "" == e.minHeight || " " == e.minHeight ? 0 : parseInt(e.minHeight, 0) : 0, e.maxHeight = "none" === e.maxHeight || "0" === e.maxHeight ? 0 : parseInt(e.maxHeight, 0), e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%", e.carousel.space = parseInt(e.carousel.space, 0), e.carousel.maxOpacity = parseInt(e.carousel.maxOpacity, 0), e.carousel.maxOpacity = e.carousel.maxOpacity > 1 ? e.carousel.maxOpacity / 100 : e.carousel.maxOpacity, e.carousel.showLayersAllTime = "true" === e.carousel.showLayersAllTime || !0 === e.carousel.showLayersAllTime ? "all" : e.carousel.showLayersAllTime, e.carousel.maxRotation = parseInt(e.carousel.maxRotation, 0), e.carousel.minScale = parseInt(e.carousel.minScale, 0), e.carousel.minScale = e.carousel.minScale > .9 ? e.carousel.minScale / 100 : e.carousel.minScale, e.carousel.speed = parseInt(e.carousel.speed, 0), e.carousel.skewX = parseFloat(e.carousel.skewX), e.carousel.skewY = parseFloat(e.carousel.skewY), e.carousel.spinAngle = parseFloat(e.carousel.spinAngle), 0 === e.carousel.spinAngle && (e.carousel.spinAngle = 1), "v" === e.carousel.orientation && (e.carousel.justify = !1), e.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], e.perspective = parseInt(e.perspective, 0), e.navigation.maintypes) {
        e.navigation.maintypes.hasOwnProperty(i) && e.navigation[e.navigation.maintypes[i]] !== t && (e.navigation[e.navigation.maintypes[i]].animDelay = e.navigation[e.navigation.maintypes[i]].animDelay === t ? 1e3 : e.navigation[e.navigation.maintypes[i]].animDelay, e.navigation[e.navigation.maintypes[i]].animSpeed = e.navigation[e.navigation.maintypes[i]].animSpeed === t ? 1e3 : e.navigation[e.navigation.maintypes[i]].animSpeed, e.navigation[e.navigation.maintypes[i]].animDelay = parseInt(e.navigation[e.navigation.maintypes[i]].animDelay, 0) / 1e3, e.navigation[e.navigation.maintypes[i]].animSpeed = parseInt(e.navigation[e.navigation.maintypes[i]].animSpeed, 0) / 1e3);
      }

      if (a.isNumeric(e.scrolleffect.tilt) || -1 !== e.scrolleffect.tilt.indexOf("%") && (e.scrolleffect.tilt = parseInt(e.scrolleffect.tilt)), e.scrolleffect.tilt = e.scrolleffect.tilt / 100, e.navigation.thumbnails.position = "outer-horizontal" == e.navigation.thumbnails.position ? "bottom" == e.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.thumbnails.position ? "left" == e.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : e.navigation.thumbnails.position, e.navigation.tabs.position = "outer-horizontal" == e.navigation.tabs.position ? "bottom" == e.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.tabs.position ? "left" == e.navigation.tabs.h_align ? "outer-left" : "outer-right" : e.navigation.tabs.position, e.sbtimeline.speed = parseInt(e.sbtimeline.speed, 0) / 1e3 || .5, !0 === e.sbtimeline.set && !0 === e.sbtimeline.fixed && "auto" !== e.sliderLayout ? (e.sbtimeline.fixStart = parseInt(e.sbtimeline.fixStart), e.sbtimeline.fixEnd = parseInt(e.sbtimeline.fixEnd)) : e.sbtimeline.fixed = !1, e.progressBar === t || "true" != e.progressBar.disableProgressBar && 1 != e.progressBar.disableProgressBar || (e.progressBar.disableProgressBar = !0), e.startDelay = parseInt(e.startDelay, 0) || 0, e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_under != t && (e.navigation.arrows.hide_under = parseInt(e.navigation.arrows.hide_under)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_under != t && (e.navigation.bullets.hide_under = parseInt(e.navigation.bullets.hide_under)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_under != t && (e.navigation.thumbnails.hide_under = parseInt(e.navigation.thumbnails.hide_under)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_under != t && (e.navigation.tabs.hide_under = parseInt(e.navigation.tabs.hide_under)), e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_over != t && (e.navigation.arrows.hide_over = parseInt(e.navigation.arrows.hide_over)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_over != t && (e.navigation.bullets.hide_over = parseInt(e.navigation.bullets.hide_over)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_over != t && (e.navigation.thumbnails.hide_over = parseInt(e.navigation.thumbnails.hide_over)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_over != t && (e.navigation.tabs.hide_over = parseInt(e.navigation.tabs.hide_over)), e.lazyloaddata !== t && e.lazyloaddata.length > 0 && e.lazyloaddata.indexOf("-") > 0) {
        var r = e.lazyloaddata.split("-");

        for (e.lazyloaddata = r[0], i = 1; i < r.length; i++) {
          e.lazyloaddata += z(r[i]);
        }
      }

      return e.duration = parseInt(e.duration), "single" === e.lazyType && "carousel" === e.sliderType && (e.lazyType = "smart"), "carousel" === e.sliderType && e.carousel.justify && (e.justifyCarousel = !0, e.keepBPHeight = !0), e.enableUpscaling = 1 == e.enableUpscaling && "carousel" !== e.sliderType && "fullwidth" === e.sliderLayout, e.useFullScreenHeight = "carousel" === e.sliderType && "fullscreen" === e.sliderLayout && !0 === e.useFullScreenHeight && "v" !== e.carousel.orientation, e.progressBar.y = parseInt(e.progressBar.y, 0), e.progressBar.x = parseInt(e.progressBar.x, 0),
      /*! Custom Eases */
      "IE" !== window.RSBrowser && e.customEases !== t && (!e.customEases.SFXBounceLite && "true" != e.customEases.SFXBounceLite || tpGS.SFXBounceLite !== t || (tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", {
        strength: .3,
        squash: 1,
        squashID: "SFXBounceLite-squash"
      })), !e.customEases.SFXBounceSolid && "true" != e.customEases.SFXBounceSolid || tpGS.SFXBounceSolid !== t || (tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", {
        strength: .5,
        squash: 2,
        squashID: "SFXBounceSolid-squash"
      })), !e.customEases.SFXBounceStrong && "true" != e.customEases.SFXBounceStrong || tpGS.SFXBounceStrong !== t || (tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", {
        strength: .7,
        squash: 3,
        squashID: "SFXBounceStrong-squash"
      })), !e.customEases.SFXBounceExtrem && "true" != e.customEases.SFXBounceExtrem || tpGS.SFXBounceExtrem !== t || (tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", {
        strength: .9,
        squash: 4,
        squashID: "SFXBounceExtrem-squash"
      })), !e.customEases.BounceLite && "true" != e.customEases.BounceLite || tpGS.BounceLite !== t || (tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", {
        strength: .3
      })), !e.customEases.BounceSolid && "true" != e.customEases.BounceSolid || tpGS.BounceSolid !== t || (tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", {
        strength: .5
      })), !e.customEases.BounceStrong && "true" != e.customEases.BounceStrong || tpGS.BounceStrong !== t || (tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", {
        strength: .7
      })), !e.customEases.BounceExtrem && "true" != e.customEases.BounceExtrem || tpGS.BounceExtrem !== t || (tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", {
        strength: .9
      }))), e.modal.coverSpeed = parseFloat(e.modal.coverSpeed), e.modal.coverSpeed = e.modal.coverSpeed > 200 ? e.modal.coverSpeed / 1e3 : e.modal.coverSpeed, e.modal.coverSpeed = Math.max(Math.min(3, e.modal.coverSpeed), .3), e.navigation.wheelViewPort = e.navigation.wheelViewPort === t ? .5 : e.navigation.wheelViewPort / 100, e.navigation.wheelCallDelay = e.navigation.wheelCallDelay === t ? 1e3 : parseInt(e.navigation.wheelCallDelay), e.autoDPR = "string" == typeof e.DPR && -1 !== e.DPR.indexOf("ax"), e.DPR = e.DPR.replace("ax", ""), e.DPR = parseInt(e.DPR.replace("x", "")), e.DPR = isNaN(e.DPR) ? window.devicePixelRatio : e.autoDPR ? Math.min(window.devicePixelRatio, e.DPR) : e.DPR, e.DPR = 1 != e.onedpronmobile && "true" != e.onedpronmobile || !a.ISM ? e.DPR : 1, !1 === e.viewPort.global ? e.viewPort.enable = !1 : !0 === e.viewPort.global && (e.viewPort.local = e.viewPort.enable, e.viewPort.enable = !0), e.carousel !== t && "v" == e.carousel.orientation && (e.carousel.prevNextVisType = ("" + e.carousel.prevNextVis).includes("%") ? "%" : "px", e.carousel.prevNextVis = parseInt(e.carousel.prevNextVis, 0) / ("%" == e.carousel.prevNextVisType ? 100 : 1)), e;
    }(e.extend(!0, {
      DPR: "dpr",
      sliderType: "standard",
      sliderLayout: "auto",
      overlay: {
        type: "none",
        size: 1,
        colora: "transparent",
        colorb: "#000000"
      },
      duration: 9e3,
      imgCrossOrigin: "",
      modal: {
        useAsModal: !1,
        cover: !0,
        coverColor: "rgba(0,0,0,0.5)",
        horizontal: "center",
        vertical: "middle",
        coverSpeed: 1
      },
      navigation: {
        keyboardNavigation: !1,
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        wheelViewPort: 50,
        wheelCallDelay: "1000ms",
        onHoverStop: !0,
        mouseScrollReverse: "default",
        target: "window",
        threshold: 50,
        touch: {
          touchenabled: !1,
          touchOnDesktop: !1,
          swipe_treshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
          mobileCarousel: !0,
          desktopCarousel: !0
        },
        arrows: {
          style: "",
          enable: !1,
          hide_onmobile: !1,
          hide_under: 0,
          hide_onleave: !1,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_over: 9999,
          tmp: "",
          rtl: !1,
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
            container: "slider"
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
            container: "slider"
          }
        },
        bullets: {
          enable: !1,
          hide_onmobile: !1,
          hide_onleave: !1,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          space: 5,
          h_offset: 0,
          v_offset: 20,
          tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
          container: "slider",
          rtl: !1,
          style: ""
        },
        thumbnails: {
          container: "slider",
          rtl: !1,
          style: "",
          enable: !1,
          width: 100,
          height: 50,
          min_width: 100,
          wrapper_padding: 2,
          wrapper_color: "transparent",
          tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
          visibleAmount: 5,
          hide_onmobile: !1,
          hide_onleave: !1,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          direction: "horizontal",
          span: !1,
          position: "inner",
          space: 2,
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 20,
          mhoff: 0,
          mvoff: 0
        },
        tabs: {
          container: "slider",
          rtl: !1,
          style: "",
          enable: !1,
          width: 100,
          min_width: 100,
          height: 50,
          wrapper_padding: 10,
          wrapper_color: "transparent",
          tmp: '<span class="tp-tab-image"></span>',
          visibleAmount: 5,
          hide_onmobile: !1,
          hide_onleave: !1,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          direction: "horizontal",
          span: !1,
          space: 0,
          position: "inner",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 20,
          mhoff: 0,
          mvoff: 0
        }
      },
      responsiveLevels: 4064,
      visibilityLevels: [2048, 1024, 778, 480],
      gridwidth: 960,
      gridheight: 500,
      minHeight: 0,
      maxHeight: 0,
      keepBPHeight: !1,
      useFullScreenHeight: !0,
      overflowHidden: !1,
      forceOverflow: !1,
      fixedOnTop: !1,
      autoHeight: !1,
      gridEQModule: !1,
      disableForceFullWidth: !1,
      fullScreenOffsetContainer: "",
      fullScreenOffset: "0",
      hideLayerAtLimit: 0,
      hideAllLayerAtLimit: 0,
      hideSliderAtLimit: 0,
      progressBar: {
        disableProgressBar: !1,
        style: "horizontal",
        size: "5px",
        radius: 10,
        vertical: "bottom",
        horizontal: "left",
        x: 0,
        y: 0,
        color: "rgba(255,255,255,0.5)",
        bgcolor: "transparent",
        basedon: "slide",
        gapsize: 0,
        reset: "reset",
        gaptype: "gapboth",
        gapcolor: "rgba(255,255,255,0.5)",
        ease: "none",
        visibility: {
          0: !0,
          1: !0,
          2: !0,
          3: !0
        }
      },
      stopAtSlide: -1,
      stopAfterLoops: 0,
      shadow: 0,
      startDelay: 0,
      lazyType: "none",
      lazyOnBg: !1,
      spinner: "off",
      shuffle: !1,
      perspective: "600px",
      perspectiveType: "local",
      viewPort: {
        enable: !1,
        global: !1,
        globalDist: "-400px",
        outof: "wait",
        visible_area: "200px",
        presize: !1
      },
      fallbacks: {
        isJoomla: !1,
        panZoomDisableOnMobile: !1,
        simplifyAll: !0,
        nextSlideOnWindowFocus: !1,
        disableFocusListener: !1,
        allowHTML5AutoPlayOnAndroid: !0
      },
      fanim: !1,
      parallax: {
        type: "off",
        levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        origo: "enterpoint",
        disable_onmobile: !1,
        ddd_shadow: !1,
        ddd_bgfreeze: !1,
        ddd_overflow: "visible",
        ddd_layer_overflow: "visible",
        ddd_z_correction: 65,
        speed: 400,
        speedbg: 0,
        speedls: 0
      },
      scrolleffect: {
        set: !1,
        fade: !1,
        blur: !1,
        scale: !1,
        grayscale: !1,
        maxblur: 10,
        layers: !1,
        slide: !1,
        direction: "both",
        multiplicator: 1.35,
        multiplicator_layers: .5,
        tilt: 30,
        disable_onmobile: !1
      },
      sbtimeline: {
        set: !1,
        fixed: !1,
        fixStart: 0,
        fixEnd: 0,
        layers: !1,
        slide: !1,
        ease: "none",
        speed: 500
      },
      carousel: {
        orientation: "h",
        prevNextVis: "50px",
        easing: "power3.inOut",
        speed: 800,
        showLayersAllTime: !1,
        horizontal_align: "center",
        vertical_align: "center",
        snap: !0,
        infinity: !1,
        stopOnClick: !0,
        space: 0,
        maxVisibleItems: 3,
        stretch: !1,
        fadeout: !0,
        maxRotation: 0,
        maxOpacity: 100,
        minScale: 0,
        offsetScale: !1,
        vary_fade: !1,
        vary_rotation: !1,
        vary_scale: !1,
        border_radius: "0px",
        padding_top: 0,
        padding_bottom: 0,
        skewX: 0,
        skewY: 0,
        spin: "off",
        spinAngle: 0,
        overshoot: !1
      },
      observeWrap: !1,
      extensions: "extensions/",
      extensions_suffix: ".min.js",
      stopLoop: !1,
      waitForInit: !1,
      ignoreHeightChange: !0,
      onedpronmobile: !1
    }, i));
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
  var E = ["DOM", "main", "parallax", "video", "slideanims", "actions", "layeranimation", "navigation", "carousel", "panzoom"];

  for (var N in E) {
    -1 == window.RS_MODULES.waiting.indexOf(E[N]) && window.RS_MODULES.waiting.push(E[N]);
  }

  function j(e) {
    window.elementorFrontend !== t && elementorFrontend.hooks !== t && elementorFrontend.hooks.removeAction("frontend/element_ready/global", j), window.RS_MODULES.elementor = {
      loaded: !0,
      version: "6.5.0"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
  }

  function V() {
    if (window.elementorFrontend === t || window.elementorFrontend.hooks === t || window.elementorFrontend.hooks.addAction === t) return window.RS_MODULES.elementorCounter++, window.RS_MODULES.elementorCounterCheck && window.RS_MODULES.elementorCounter > 20 ? void j() : void requestAnimationFrame(V);
    window.elementorFrontend.config.environmentMode.edit ? elementorFrontend.hooks.addAction("frontend/element_ready/widget", j) : j();
  }

  function X() {
    1 != RS_MODULES.checkElementorCalled && (RS_MODULES.checkElementorCalled = !0, document.body && (document.body.className.indexOf("elementor-page") >= 0 || document.body.className.indexOf("elementor-default") >= 0) && (window.RS_MODULES.waiting = window.RS_MODULES.waiting === t ? [] : window.RS_MODULES.waiting, -1 == window.RS_MODULES.waiting.indexOf("elementor") && window.RS_MODULES.waiting.push("elementor"), document.body && -1 == document.body.className.indexOf("elementor-editor-active") && (window.RS_MODULES.elementorCounterCheck = !0), window.RS_MODULES.elementorCounter = 0, V()));
  }

  window.RS_MODULES.main = {
    loaded: !0,
    version: i
  }, window.RS_MODULES.minimal = !1, window.RS_MODULES.callSliders = function () {
    for (var e in RS_MODULES.modules) {
      !0 !== RS_MODULES.modules[e].once && window.RS_MODULES !== t && window.RS_MODULES.minimal && (RS_MODULES.modules[e].once = !0, RS_MODULES.modules[e].init());
    }
  }, "loading" === document.readyState ? document.addEventListener("readystatechange", function () {
    "interactive" !== document.readyState && "complete" !== document.readyState || (X(), window.RS_MODULES.DOM = {
      loaded: !0
    }, window.RS_MODULES.checkMinimal());
  }) : "complete" !== document.readyState && "interactive" !== document.readyState || (X(), window.RS_MODULES.DOM = {
    loaded: !0
  }), window.RS_MODULES.checkMinimal = function () {
    if (0 == window.RS_MODULES.minimal) {
      var i = 1 == window.RS_MODULES.minimal || window.RS_MODULES.waiting !== t && e.fn.revolution !== t && window.tpGS !== t && window.tpGS.gsap !== t;
      if (i) for (var a in window.RS_MODULES.waiting) {
        window.RS_MODULES.waiting.hasOwnProperty(a) && "function" != typeof window.RS_MODULES.waiting[a] && i && window.RS_MODULES[window.RS_MODULES.waiting[a]] === t && (i = !1);
      }
      i && (!0 !== window.RS_MODULES.minimal && e(document).trigger("REVSLIDER_READY_TO_USE"), window.RS_MODULES.minimal = !0);
    } else window.RS_MODULES.minimal = !0;

    !0 === window.RS_MODULES.minimal && window.RS_MODULES.callSliders();
  }, window.RS_MODULES.checkMinimal();
}(jQuery), function ($, undefined) {
  "use strict";

  var version = "6.6.0";
  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var _R = jQuery.fn.revolution;
  jQuery.extend(!0, _R, {
    checkActions: function checkActions(e, t) {
      e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t);
    },
    delayer: function delayer(e, t, i) {
      _R[e].timeStamps = _R[e].timeStamps === undefined ? {} : _R[e].timeStamps;
      var a = new Date().getTime(),
          r = _R[e].timeStamps[i] === undefined ? parseInt(t) + 100 : a - _R[e].timeStamps[i],
          o = parseInt(r) > t;
      return o && (_R[e].timeStamps[i] = a), o;
    },
    getURLDetails: function getURLDetails(e) {
      (e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
      var t = e.url.replace("https://", "");
      t = t.replace("http://", ""), "relative" === e.protocol && (t = t.replace("//", "")), t = t.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && t.length > 1 ? t[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = t[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
      (t = t[0]).split("/");
      var i = t.split("/");
      return e.host = i[0], i.splice(0, 1), e.path = "/" + i.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e;
    },
    scrollToId: function scrollToId(e) {
      if (_R.scrollToObj = e, !window.isSafari11) {
        var t = tpGS.gsap.getProperty("html", "scrollBehavior"),
            i = tpGS.gsap.getProperty("body", "scrollBehavior");
        tpGS.gsap.set("html,body", {
          scrollBehavior: "auto"
        }), e.scrollBehaviorHtml = t, e.scrollBehaviorBody = i;
      }

      _R.calcScrollToId();
    },
    calcScrollToId: function calcScrollToId() {
      if (_R.scrollToObj) {
        var e = _R.scrollToObj,
            t = e.tween && e.tween.progress ? e.tween.progress() : 0;
        e.tween && e.tween.kill && e.tween.kill(), e.startScrollPos !== undefined && null !== e.startScrollPos || (e.startScrollPos = _R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop() : _R.document.scrollTop());
        var i = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
            a = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
            r = a.length > 0 ? a.offset().top : 0,
            o = {
          _y: _R[e.id].modal.useAsModal ? _R[e.id].cpar[0].scrollTop : window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset
        };
        r += "scrollbelow" === e.action ? _R[e.id].sbtimeline.fixed ? _R[e.id].cpar.parent().height() + _R[e.id].fullScreenOffsetResult : jQuery(_R[e.id].slides[0]).height() : 0, e.tween = tpGS.gsap.fromTo(o, e.speed / 1e3, {
          _y: e.startScrollPos
        }, {
          _y: r - i,
          ease: e.ease,
          onUpdate: function onUpdate() {
            _R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop(o._y) : _R.document.scrollTop(o._y);
          },
          onComplete: function onComplete() {
            e.hash !== undefined && history.pushState(null, null, e.hash), window.isSafari11 || (tpGS.gsap.set("html", {
              scrollBehavior: e.scrollBehaviorHtml
            }), tpGS.gsap.set("body", {
              scrollBehavior: e.scrollBehaviorBody
            })), _R.scrollToObj && (_R.scrollToObj.tween && (_R.scrollToObj.tween.kill(), _R.scrollToObj.tween = null), _R.scrollToObj.startScrollPos = null, _R.scrollToObj = null);
          }
        }), e.tween.progress(t);
      }
    }
  });

  var moduleEnterLeaveActions = function moduleEnterLeaveActions(e) {
    !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function () {
      _R[e].mouseoncontainer = !0;
      var t,
          i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;

      if ("none" !== i && i !== undefined) {
        if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i]) for (t in _R[e].layers[i]) {
          _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
            layer: jQuery(_R[e].layers[i][t]),
            frame: "frame_1",
            mode: "trigger",
            id: e
          });
        }

        for (t in _R[e].layers["static"]) {
          _R[e].layers["static"][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
            layer: jQuery(_R[e].layers["static"][t]),
            frame: "frame_1",
            mode: "trigger",
            id: e
          });
        }
      }
    }), _R[e].c.on("tp-mouseleft", function () {
      _R[e].mouseoncontainer = !0;
      var t,
          i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;

      if ("none" !== i && i !== undefined) {
        if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i]) for (t in _R[e].layers[i]) {
          _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
            layer: jQuery(_R[e].layers[i][t]),
            frame: "frame_999",
            mode: "trigger",
            id: e
          });
        }

        for (t in _R[e].layers["static"]) {
          _R[e].layers["static"][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
            layer: jQuery(_R[e].layers["static"][t]),
            frame: "frame_999",
            mode: "trigger",
            id: e
          });
        }
      }
    })), _R[e].moduleActionsPrepared = !0;
  },
      checkActions_intern = function checkActions_intern(layer, id) {
    var actions = _R.gA(layer[0], "actions");

    if ("RS-COLUMN" == layer[0].tagName) {
      var wrap = _R.closestNode(layer[0], "RS-COLUMN-WRAP");

      null !== wrap && wrap !== undefined && (_R.sA(wrap, "action", actions), layer = jQuery(wrap));
    }

    var _L = layer.data();

    for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, actions) {
      if (actions.hasOwnProperty(ei)) {
        var event = getEventParams(actions[ei].split(";"));
        _L.events.push(event), "click" === event.on && layer[0].classList.add("rs-wclickaction"), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function (e) {
          27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on);
        }), _R[id].fullscreen_esclistener = !0);
        var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);

        switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
          case "togglevideo":
            jQuery.each(targetlayer, function () {
              updateToggleByList(jQuery(this), "videotoggledby", layer[0].id);
            });
            break;

          case "togglelayer":
            jQuery.each(targetlayer, function () {
              updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate);
            });
            break;

          case "toggle_global_mute_video":
          case "toggle_mute_video":
            jQuery.each(targetlayer, function () {
              updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id);
            });
            break;

          case "toggleslider":
            _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
            break;

          case "togglefullscreen":
            _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id);
        }
      }
    }

    _R[id].actionsPrepared = !0, _R[id].actionListenerHook = _R[id].actionListenerHook == undefined ? {
      _on: ""
    } : _R[id].actionListenerHook, layer.on("click mouseenter mouseleave " + _R[id].actionListenerHook._on, function (e) {
      for (var i in _L.events) {
        if (_L.events.hasOwnProperty(i) && _L.events[i].on.includes(e.type)) {
          var event = _L.events[i];

          if (!(event.repeat !== undefined && event.repeat > 0) || _R.delayer(id, 1e3 * event.repeat, _L.c[0].id + "_" + event.action)) {
            if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
            var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                tex = targetlayer.length > 0;

            if ("" != _R[id].actionListenerHook._on && "click" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type) {
              var keepgoing = !0;

              for (var cbs in _R[id].actionListenerHook.callBacks) {
                if (!0 !== keepgoing) break;
                _R[id].actionListenerHook.callBacks.hasOwnProperty(cbs) && "function" == typeof _R[id].actionListenerHook.callBacks[cbs] && (keepgoing = _R[id].actionListenerHook.callBacks[cbs]({
                  event: event,
                  layer: layer,
                  targetlayer: targetlayer,
                  L: _L
                }));
              }

              if (!keepgoing) continue;
            }

            switch (event.action) {
              case "menulink":
                var linkto = _R.getURLDetails({
                  url: event.url,
                  anchor: event.anchor
                }),
                    linkfrom = _R.getURLDetails();

                linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({
                  id: id,
                  offset: event.offset,
                  action: event.action,
                  anchor: event.anchor,
                  hash: linkto.hash,
                  speed: event.speed,
                  ease: event.ease
                }) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
                break;

              case "getAccelerationPermission":
                _R.getAccelerationPermission(id);

                break;

              case "nextframe":
              case "prevframe":
              case "gotoframe":
              case "togglelayer":
              case "toggleframes":
              case "startlayer":
              case "stoplayer":
                if (targetlayer[0] === undefined) continue;
                var _ = _R[id]._L[targetlayer[0].id],
                    frame = event.frame,
                    tou = "triggerdelay";
                if ("click" === e.type && _.clicked_time_stamp !== undefined && new Date().getTime() - _.clicked_time_stamp < 300) return;
                if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && new Date().getTime() - _.mouseentered_time_stamp < 300) return;

                if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = new Date().getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = new Date().getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
                  _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                  var inx = jQuery.inArray(_.currentframe, _.ford);

                  for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--; "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) {
                    "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                  }

                  frame = _.ford[inx];
                }

                jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                var pars = {
                  layer: targetlayer,
                  frame: frame,
                  mode: "trigger",
                  id: id
                };
                !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function (e) {
                  _R.renderLayerAnimation(e);
                }, 1e3 * event.delay, pars));
                break;

              case "playvideo":
                tex && _R.playVideo(targetlayer, id);
                break;

              case "stopvideo":
                tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                break;

              case "togglevideo":
                tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                break;

              case "mutevideo":
                tex && _R.Mute(targetlayer, id, !0);
                break;

              case "unmutevideo":
                tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                break;

              case "toggle_mute_video":
                tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                break;

              case "toggle_global_mute_video":
                var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function (e, t) {
                  _R.Mute && _R.Mute(t, id, !1);
                }) : jQuery.each(_R[id].playingvideos, function (e, t) {
                  _R.Mute && _R.Mute(t, id, !0);
                })), _R[id].globalmute = !_R[id].globalmute;
                break;

              default:
                tpGS.gsap.delayedCall(event.delay, function (targetlayer, id, event, layer) {
                  switch (event.action) {
                    case "openmodal":
                      _R.openModalAPI(event.modal, event.modalslide === undefined ? 0 : event.modalslide, _R[id].ajaxUrl, !0, id, event);

                      break;

                    case "closemodal":
                      _R.revModal(id, {
                        mode: "close"
                      });

                      break;

                    case "callback":
                      eval(event.callback);
                      break;

                    case "simplelink":
                      window.open(event.url, event.target);
                      break;

                    case "simulateclick":
                      targetlayer.length > 0 && targetlayer.trigger("click");
                      break;

                    case "toggleclass":
                      targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                      break;

                    case "scrollbelow":
                    case "scrollto":
                      "scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({
                        id: id,
                        offset: event.offset,
                        action: event.action,
                        anchor: event.id,
                        speed: event.speed,
                        ease: event.ease
                      });
                      break;

                    case "jumptoslide":
                      switch (_R[id].skipAttachDetach = !0, event.slide.toLowerCase()) {
                        case "rs-random":
                          var ts = Math.min(Math.max(0, Math.ceil(Math.random() * _R[id].realslideamount) - 1));
                          ts = _R[id].activeRSSlide == ts ? ts > 0 ? ts - 1 : ts + 1 : ts, _R.callingNewSlide(id, _R[id].slides[ts].dataset.key, "carousel" === _R[id].sliderType);
                          break;

                        case "+1":
                        case "next":
                        case "rs-next":
                          _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                          break;

                        case "rs-previous":
                        case "rs-prev":
                        case "previous":
                        case "prev":
                        case "-1":
                          _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                          break;

                        case "first":
                        case "rs-first":
                          _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                          break;

                        case "last":
                        case "rs-last":
                          _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                          break;

                        default:
                          var ts = _R.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;

                          _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType);

                      }

                      break;

                    case "toggleslider":
                      _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                      break;

                    case "pauseslider":
                      _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                      break;

                    case "playslider":
                      _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                      break;

                    case "gofullscreen":
                    case "exitfullscreen":
                    case "togglefullscreen":
                      var gf;
                      tpGS.gsap.set(_R[id].parallax.bgcontainers, {
                        y: 0
                      }), jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
                      break;

                    default:
                      _R[id].c.trigger("layeraction", [event.action, layer, event]);

                  }
                }, [targetlayer, id, event, layer]);
            }
          }
        }
      }
    });
  };

  function getFordWithAction(e) {
    var t = [];

    for (var i in e.ford) {
      e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip");
    }

    return t;
  }

  function updateToggleByList(e, t, i) {
    var a = e.data(t);
    a === undefined && (a = []), a.push(i), e.data(t, a);
  }

  function getEventParams(e) {
    var t = {
      on: "click",
      delay: 0,
      ease: "power2.out",
      speed: 400
    };

    for (var i in e) {
      if (e.hasOwnProperty(i)) {
        var a = e[i].split(":");

        switch (a.length > 2 && "call" === a[0] && (a[1] = a.join(":").replace(a[0] + ":", "")), a[0]) {
          case "modal":
            t.modal = a[1];
            break;

          case "ms":
            t.modalslide = a[1];
            break;

          case "m":
            t.frameM = a[1];
            break;

          case "n":
            t.frameN = a[1];
            break;

          case "o":
            t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
            break;

          case "d":
            t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
            break;

          case "rd":
            t.repeat = parseInt(a[1], 0) / 1e3, t.repeat = "NaN" === t.repeat || isNaN(t.repeat) ? 0 : t.repeat;
            break;

          case "a":
            t.action = a[1];
            break;

          case "f":
            t.frame = a[1];
            break;

          case "slide":
            t.slide = a[1];
            break;

          case "layer":
            t.layer = a[1];
            break;

          case "sp":
            t.speed = parseInt(a[1], 0);
            break;

          case "e":
            t.ease = a[1];
            break;

          case "ls":
            t.togglestate = a[1];
            break;

          case "offset":
            t.offset = a[1];
            break;

          case "call":
            t.callback = a[1];
            break;

          case "url":
            t.url = "";

            for (var r = 1; r < a.length; r++) {
              t.url += a[r] + (r === a.length - 1 ? "" : ":");
            }

            break;

          case "target":
            t.target = a[1];
            break;

          case "class":
            t.classname = a[1];
            break;

          case "ch":
            t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
            break;

          default:
            a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1]);
        }
      }
    }

    return t;
  }

  var getOffContH = function getOffContH(e) {
    if (e == undefined) return 0;

    if (e.split(",").length > 1) {
      var t = e.split(","),
          i = 0;
      return t && jQuery.each(t, function (e, t) {
        jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0));
      }), i;
    }

    return jQuery(e).height();
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.actions = {
    loaded: !0,
    version: version
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = jQuery.fn.revolution;
  jQuery.extend(!0, t, {
    prepareCarousel: function prepareCarousel(e, i, a, r) {
      if (void 0 !== e) {
        var s = t[e].carousel;
        s.slidesWithRowAdjustions = {}, i = s.lastdirection = o(i, s.lastdirection), t.setCarouselDefaults(e, void 0, r), t.organiseCarousel(e, "right", !0, !1, !1), void 0 !== s.swipeTo && t.isNumeric(s.swipeTo) ? void 0 !== a ? t.swipeAnimate({
          id: e,
          to: s.swipeTo,
          distance: s.swipeToDistance,
          direction: i,
          fix: !0,
          speed: a
        }) : t.swipeAnimate({
          id: e,
          to: s.swipeTo,
          distance: s.swipeToDistance,
          direction: i,
          fix: !0
        }) : t.swipeAnimate({
          id: e,
          to: 0,
          direction: i,
          speed: 0
        }), "carousel" !== t[e].sliderType || s.fadein || (tpGS.gsap.to(t[e].canvas, 1, {
          scale: 1,
          opacity: 1
        }), s.fadein = !0);
      }
    },
    setupCarousel: function setupCarousel(e) {
      var o = t[e].carousel;
      "v" == o.orientation ? (o.length = "height", o.translate = "y", o.slide_dims = "slide_heights", o.deltaT = "deltaY", o.sliderLength = "sliderHeight", o.slide_length = "slide_height", o.wraplength = "wrapheight", o.align = "0%" === o.vertical_align ? "start" : "50%" === o.vertical_align ? "center" : "end", !o.snap || o.justify || o.infinity || (o.forceBAlign = !0)) : (o.length = "width", o.translate = "x", o.slide_dims = "slide_widths", o.deltaT = "deltaX", o.sliderLength = "sliderWidth", o.slide_length = "slide_width", o.wraplength = "wrapwidth", o.align = "left" === o.horizontal_align ? "start" : "center" === o.horizontal_align ? "center" : "end"), o[o.sliderLength] = t[e].canv[o.length], o.proxy = document.createElement("div"), o.follower = document.createElement("div"), o.slideamount = t[e].slideamount, o.infinity || o.snap || (t[e].carousel.align = "start"), r(e), a(e, o.align), o.inited = !0, o.lerpHandler = t.carLerpHandler.bind(this, e), void 0 === o.animInList && (o.animInList = []), o.draggableObj = {
        trigger: t[e].c[0],
        type: o.translate,
        edgeResistance: .5,
        zIndexBoost: !1,
        cursor: "grab",
        activeCursor: "grabbing",
        allowContextMenu: !0,
        inertia: !0,
        throwResistance: o.snap ? 8e3 : 500,
        onPress: function onPress(i) {
          t.closestClass(i.target, "rs-nav-element") ? (o.draggable.endDrag(), o.draggable.disable()) : t[e].c.trigger("stoptimer"), o.focusedOnPress = o.focused, o.isPressed = !0, o.fromWheel = !1, o.cX = o.lerpX = this.pointerX, o.cY = o.lerpY = this.pointerY, o.tween && o.tween.kill && (o.tween.kill(), delete o.tween);
        },
        onClick: function onClick(i) {
          o.isPressed = !1, t.closestClass(i.target, "rs-nav-element") || t.closestClass(i.target, "rs-waction") || o.draggable.enabled() && !1 === t[e].carousel.stopOnClick && t[e].c.trigger("starttimer");
        },
        onDragStart: function onDragStart() {
          o.lerpSpeed = .1, o.lerp || (o.lerp = requestAnimationFrame(o.lerpHandler)), t.ISM && o.forceBAlign && ("up" === this.getDirection() && o.focused == o.slideamount - 1 || "down" === this.getDirection() && 0 == o.focused ? o.forceScroll = !0 : o.forceScroll = !1);
        },
        onDrag: function onDrag() {
          o.cX = this.pointerX, o.cY = this.pointerY;
        },
        snap: function snap(i) {
          var a;
          return t.getLastPos(e), o.isPressed = !1, o.forceScroll && o.forceBAlign ? (a = "up" === this.getDirection() ? t[e].cpar.offset().top + t[e].module.height : t.document.scrollTop() - (window.innerHeight - t[e].cpar[0].getBoundingClientRect().top), t[e].modal.useAsModal || tpGS.gsap.to([window, "body"], {
            scrollTo: a
          }), o.focused != o.slideamount - 1 || o.infinity ? o.lastPos : o[o.wraplength] - o.totalWidth) : (t.calculateSnap(e, i), i);
        }
      }, o.draggable = tpGS.draggable.create(o.proxy, o.draggableObj)[0], t[e].c.one("revolution.slide.onchange", function () {
        i(e);
      });
    },
    positionCarousel: function positionCarousel(e) {
      var i = t[e].carousel;

      if (i[i.sliderLength] = t[e].canv[i.length], !i.draggable.isPressed) {
        if (r(e), t.ISM && t[e].navigation.touch.mobileCarousel || !0 !== t.ISM && t[e].navigation.touch.desktopCarousel ? (i.draggable.vars.cursor = "grab", i.draggable.enable()) : (i.draggable.vars.cursor = "pointer", i.draggable.disable()), t[e].carousel.justify) {
          i.wrapperWidth = 0;

          for (var a = 0; a < t[e].carousel[i.slide_dims].length; a++) {
            i.wrapperWidth += t[e].carousel[i.slide_dims][a];
          }
        } else i.wrapperWidth = i.slide_width * t[e].slides.length;

        void 0 === i.focused && (i.focused = 0), i.activeSlide = i.focused;

        for (a = 0; a < i.arr.length; a++) {
          t.updateSlideWidth(e, a);
        }

        var o,
            s,
            n = 0;

        if (i.lastWrapwidth = i.wrapwidth, i.lastWrapheight = i.wrapheight, s = o = "start" === t[e].carousel.align ? 0 : "center" === t[e].carousel.align ? (i[i.wraplength] - i.arr[i.focused][i.length]) / 2 : i[i.wraplength] - i.arr[i.focused][i.length], i.infinity || "v" !== i.orientation || i.focused != i.slideamount - 1 || (o = i[i.wraplength] - i.arr[i.focused][i.length]), tpGS.gsap.set([i.proxy, i.follower], {
          x: o,
          y: o
        }), i.infinity) {
          for (a = i.focused; a < i.arr.length; a++) {
            a !== i.focused && (n += i.space), "h" === i.orientation ? tpGS.gsap.set(i.arr[a].elem, {
              x: n + o
            }) : tpGS.gsap.set(i.arr[a].elem, {
              y: n + o
            }), i.arr[a].posX = n + o, i.arr[a][i.translate] = n + o, n += i.arr[a][i.length];
          }

          var l = o;

          for (a = i.focused - 1; a >= 0; a--) {
            l -= i.arr[a][i.length] + i.space, i.arr[a].posX = l, i.arr[a][i.translate] = l, "h" === i.orientation ? tpGS.gsap.set(i.arr[a].elem, {
              x: l
            }) : tpGS.gsap.set(i.arr[a].elem, {
              y: l
            }), n += i.arr[a][i.length] + i.space;
          }

          tpGS.gsap.set([i.proxy, i.follower], {
            x: i.arr[i.focused].posX,
            y: i.arr[i.focused].posX
          });
        } else {
          var d = 0;

          for (a = 0; a < i.arr.length; a++) {
            a > 0 && (n += i.space), a == i.focused && (d += n), i.arr[a].posX = n + o, i.arr[a][i.translate] = n + o, "h" === i.orientation ? tpGS.gsap.set(i.arr[a].elem, {
              x: n + o
            }) : tpGS.gsap.set(i.arr[a].elem, {
              y: n + o
            }), n += i.arr[a][i.length];
          }

          tpGS.gsap.set([i.proxy, i.follower], {
            x: o - d,
            y: o - d
          }), "h" === i.orientation ? tpGS.gsap.set([t[e].slides], {
            x: "-=" + d
          }) : tpGS.gsap.set([t[e].slides], {
            y: "-=" + d
          });

          for (a = 0; a < i.arr.length; a++) {
            i.arr[a].posX -= d, i.arr[a][i.translate] -= d;
          }
        }

        if (i.startOffset = s, t.swapCarouselSlides(e, !0), i.infinity ? i.draggable.applyBounds({
          minX: -1 / 0,
          maxX: 1 / 0
        }) : !i.infinity && i.snap ? i.draggable.applyBounds({
          minX: -(i.startOffset + n),
          maxX: i.startOffset
        }) : i.infinity || i.snap || i.draggable.applyBounds({
          minX: i.wrapwidth - n,
          maxX: 0
        }), i.lastActiveSlide = i.activeSlide, i.totalWidth = n, i.lastTotalWidth = n, "off" !== i.spin) {
          var c = i[i.slide_length] / 2;
          i.spinAngle = Math.max(Math.min(i.spinAngle, 360 / i.arr.length), -360 / i.arr.length);
          var p = c / Math.sin(i.spinAngle / 2 * Math.PI / 180);
          i.spinR = (Math.sqrt(p * p - c * c) + i.space) * Math.sign(i.spinAngle), "2d" === i.spin && "h" === i.orientation ? i.spinR += (i.spinAngle <= 0 ? 0 : 1) * ("fullscreen" === t[e].sliderLayout ? i.wrapheight : i.slide_height) : "2d" === i.spin && (i.spinR += (i.spinAngle <= 0 ? 0 : 1) * ("fullscreen" === t[e].sliderLayout ? i.wrapwidth : i.slide_width));
        }

        for (a = 0; a < i.trackArr.length; a++) {
          for (var g = 0; g < i.arr.length; g++) {
            i.trackArr[a].elem === i.arr[g].elem && (i.trackArr[a].width = i.arr[g].width, i.trackArr[a].height = i.arr[g].height);
          }
        }

        i.oldfocused = i.focused, t.applyDistanceEffect(e);
      }
    },
    updateSlideWidth: function updateSlideWidth(e, i) {
      var a = t[e].carousel;
      if (a.justify) for (var r = 0; r < t[e].slides.length; r++) {
        t[e].slides[r] === a.arr[i].elem && (a.arr[i][a.length] = a[a.slide_dims][r]);
      } else a.arr[i][a.length] = a[a.slide_length];
    },
    swapCarouselSlides: function swapCarouselSlides(e) {
      var i = t[e].carousel,
          a = !0;
      if (i.infinity && !(i.totalWidth < i[i.wraplength])) for (var r; a;) {
        var o = parseFloat(i.arr[0][i.translate]) > 0 || void 0 !== i.arr[0].progress && i.arr[0].progress <= 1 && !(i.arr[i.arr.length - 1].progress <= 1) && parseFloat(i.arr[i.arr.length - 1][i.translate]) >= i[i.wraplength],
            s = parseFloat(i.arr[i.arr.length - 1][i.translate]) < i[i.wraplength] - i.arr[i.arr.length - 1][i.length] || void 0 !== i.arr[i.arr.length - 1].progress && i.arr[i.arr.length - 1].progress <= 1 && !(i.arr[0].progress <= 1) && parseFloat(i.arr[0][i.translate]) + i.arr[0][i.length] <= 0;

        if (o) {
          var n = parseFloat(i.arr[0][i.translate]) - i.space,
              l = i.arr.pop();
          i.arr.unshift(l), r === l && (a = !1), r = l, i.arr[0].posX = i.arr[0][i.translate] = n - i.arr[0][i.length], t.getCarActiveSlide(e);
        } else if (s) {
          n = parseFloat(i.arr[i.arr.length - 1][i.translate]) + i.space, l = i.arr.shift();
          i.arr.push(l), r === l && (a = !1), r = l, i.arr[i.arr.length - 1].posX = i.arr[i.arr.length - 1][i.translate] = n + i.arr[i.arr.length - 2][i.length], t.getCarActiveSlide(e);
        } else a = !1;
      }
    },
    onThrowComplete: function onThrowComplete(e) {
      var a = t[e].carousel;
      "carousel" !== t[e].sliderType || a.fadein || (tpGS.gsap.to(t[e].canvas, 1, {
        scale: 1,
        opacity: 1
      }), a.fadein = !0), t.getCarActiveSlide(e, !0);

      for (var r = a.arr[a.activeSlide], o = 0; o < t[e].slides.length; o++) {
        if (t[e].slides[o] === r.elem) {
          if (a.focused = parseFloat(o), t[e].pr_next_key = a.focused, a.animInList.includes(a.oldfocused.toString()) || a.animInList.push(a.oldfocused.toString()), "all" !== a.showLayersAllTime) for (; a.animInList.length >= 1;) {
            var s = a.animInList.pop();
            a.focused != s && t.removeTheLayers(jQuery(t[e].slides[s]), e);
          }

          for (var n in t.callingNewSlide(e, t[e].slides[o].getAttribute("data-key"), !0, !0), t[e].c.trigger("revolution.nextslide.waiting"), i(e), a.focused != a.oldfocused && "all" !== a.showLayersAllTime && (a.animInList.includes(a.focused.toString()) || a.animInList.push(a.focused.toString()), t.animateTheLayers({
            slide: a.focused,
            id: e,
            mode: "start"
          }), t.animateTheLayers({
            slide: "individual",
            id: e,
            mode: t[e].carousel.allLayersStarted ? "rebuild" : "start"
          })), t[e].sbgs) {
            t[e].sbgs.hasOwnProperty(n) && void 0 !== t[e].sbgs[n].bgvid && 0 !== t[e].sbgs[n].bgvid.length && ("" + t[e].sbgs[n].skeyindex == "" + a.focused ? t.playBGVideo(e, t.gA(t[e].pr_next_slide[0], "key")) : t.stopBGVideo(e, t[e].sbgs[n].key));
          }

          a.oldfocused = a.focused;
        }

        for (var l = t[e].slides[o].querySelectorAll(".rs-on-car"), d = 0; d < l.length; d++) {
          t[e].slides[o] !== r.elem && l[d].classList.contains("rs-layer-video") && t[e].videos[l[d].id].pauseOnSlideChange && t.stopVideo(jQuery(l[d]), e);
        }
      }

      a.draggable[a.deltaT] = 0, t[e].c.trigger("restarttimer");
    },
    calculateSnap: function calculateSnap(e, i) {
      var a = t[e].carousel;
      tpGS.gsap.killTweensOf(a.proxy, a.translate);
      var r = "v" === a.orientation ? i - a.draggable.endY : i - a.draggable.endX;
      Math.abs(r) < 3 && (r = 0);
      var o,
          s = !0,
          n = "v" === a.orientation ? Math.abs(a.draggable.endY - a.draggable.startY) : Math.abs(a.draggable.endX - a.draggable.startX);

      if (a.focusedPreSnap = a.focused, a.snap) {
        o = a.direction = a.draggable[a.deltaT] >= 0 ? "right" : "left";
        var l = t.getNextSlide(e, r, o, !0, n < 300);
        r = l.delta, s = l.overshoot, a.target = l.target;
      } else a.target = i;

      if ((!a.infinity && !a.snap || !a.infinity && "v" === a.orientation) && (a.target <= a[a.wraplength] - a.totalWidth ? a.target = a[a.wraplength] - a.totalWidth : a.target >= 0 && !a.snap && (a.target = 0)), a.swiped = !0, a.overshoot && s) {
        tpGS.gsap.to(a, {
          duration: a.snap ? .3 : .5,
          lerpSpeed: .8
        }), s = Math.min(0 === a.draggable[a.deltaT] ? Math.abs(r) / 20 : Math.abs(a.draggable[a.deltaT]) / 2, a[a.wraplength] / 4) * Math.sign(r);
        var d = Math.abs(s / 100);
        a.time = Math.min(Math.max(d / 10, a.speed / 1e3 * .6), a.speed / 1e3), a.tween = tpGS.gsap.timeline({
          onComplete: function onComplete() {
            t.snapCompleted(e);
          }
        }), a.tween.to(a.proxy, {
          x: a.target + s,
          y: a.target + s,
          duration: a.time,
          ease: "power2.out"
        }).to(a.proxy, {
          x: a.target,
          y: a.target,
          duration: Math.min(2 * a.time, .6),
          ease: a.easing.replace(".inOut", ".out").replace(".in", ".out")
        }, "overshoot").to(a, {
          duration: Math.min(2 * a.time, .6),
          lerpSpeed: 1
        }, "overshoot");
      } else d = Math.abs(r / 100), a.time = Math.min(Math.max(d / 10, a.speed / 1e3 * .6), a.speed / 1e3), a.tween = tpGS.gsap.to(a.proxy, {
        x: a.target,
        y: a.target,
        duration: a.time,
        ease: a.easing.replace(".inOut", ".out").replace(".in", ".out"),
        onComplete: function onComplete() {
          t.snapCompleted(e);
        }
      }), tpGS.gsap.to(a, {
        duration: a.time,
        lerpSpeed: 1
      });
    },
    carLerpHandler: function carLerpHandler(e, i) {
      var a = t[e].carousel;
      "skip" !== i && (a.lerp = requestAnimationFrame(a.lerpHandler));
      var r = parseFloat(a.proxy._gsap[a.translate]),
          o = parseFloat(a.follower._gsap[a.translate]),
          s = o + (r - o) * a.lerpSpeed - o;
      "mousedrag" == t[e].parallax.type && (a.delta = s, a.lerpX = a.lerpX + (a.cX - a.lerpX) * a.lerpSpeed, a.lerpY = a.lerpY + (a.cY - a.lerpY) * a.lerpSpeed, t[e].parallax.frame = window.requestAnimationFrame(t[e].parallax.parallaxHandler)), tpGS.gsap.set(t[e].canvas, {
        skewX: a.skewX * Math.max(-1, Math.min(1, s / 100)),
        skewY: a.skewY * Math.max(-1, Math.min(1, s / 100))
      }), "h" === a.orientation ? (tpGS.gsap.set(a.follower, {
        x: "+=" + s
      }), tpGS.gsap.set(a.arr, {
        x: "+=" + s
      })) : (tpGS.gsap.set(a.follower, {
        y: "+=" + s
      }), tpGS.gsap.set(a.arr, {
        y: "+=" + s
      })), t.swapCarouselSlides(e), t.applyDistanceEffect(e);
    },
    snapCompleted: function snapCompleted(e) {
      var i = t[e].carousel;
      i.lerp = cancelAnimationFrame(i.lerp), i.scrollFrame = cancelAnimationFrame(i.scrollFrame), i.swiped = !1, tpGS.gsap.set(i.follower, {
        x: i.proxy._gsap[i.translate],
        y: i.proxy._gsap[i.translate]
      }), t.onThrowComplete(e);
    },
    applyDistanceEffect: function applyDistanceEffect(e) {
      var r = t[e].carousel,
          o = 1 / 0,
          s = 0,
          n = 0;
      void 0 === r.lastSlideProgress && (r.lastSlideProgress = 1);
      var l = r.startOffset;

      for (var d in r.startOffsetCache = r.startOffset, void 0 === r.tempAlign && (r.tempAlign = r.align), "v" !== r.orientation || r.infinity || r.justify || (l = r.startOffset + (r[r.wraplength] - r[r.slide_length] - r.startOffset) * (1 - r.lastSlideProgress)), r.arr) {
        var c = parseFloat(r.arr[d][r.translate]) - l;

        if (r.infinity && (c %= r.totalWidth), Math.abs(c) < o) {
          for (var p = 0; p < t[e].slides.length; p++) {
            t[e].slides[p] === r.arr[d].elem && (n = p, r.closestArr = d);
          }

          o = Math.abs(c);
        }

        r.arr[d].loaded && s++, r.infinity || r.snap || (0 === r.activeSlide ? c = parseFloat(r.arr[d][r.translate]) : r.activeSlide === r.arr.length - 1 && (c = parseFloat(r.arr[d][r.translate]) - (r[r.wraplength] - r.arr[d][r.length])));
        var g = Math.sign(c),
            u = r.arr[d].progress = Math.abs(c) / (r[r.slide_length] + r.space);
        if (!r.justify && "mousedrag" === t[e].parallax.type) for (p = 0; p < t[e].slides.length; p++) {
          t[e].slides[p] === r.arr[d].elem && (r.trackArr[p].progress = u);
        }
        "v" !== r.orientation || r.infinity || d != r.slideamount - 1 || (u <= ("left" === r.direction ? .9 : .1) && !r.vertAlignBottom ? (tpGS.gsap.to(r, {
          lastSlideProgress: 0,
          duration: .2
        }), r.vertAlignDefault = !1, r.vertAlignBottom = !0, r.tempAlign = "end", a(e, "end")) : u > ("left" === r.direction ? .9 : .1) && !r.vertAlignDefault && (tpGS.gsap.to(r, {
          lastSlideProgress: 1,
          duration: .2
        }), r.vertAlignDefault = !0, r.vertAlignBottom = !1, r.tempAlign = r.align, a(e, r.align))), r.arr[d].sign = g;
        var h = r.arr[d].progress;
        h = h / Math.ceil(r.pDiv) * ("center" === r.tempAlign ? 1 : "start" === r.tempAlign ? g : -g);
        var m = Math.min(r.arr[d].progress, 1) / 1,
            v = 100 - 5 * Math.round(r.arr[d].progress),
            f = {};
        if (r.justify || "off" === r.spin) {
          if (0 === r.minScale || r.justify) f[r.translate] = r.arr[d][r.translate];else {
            var y = 1 - (r.vary_scale ? h : m) * (1 - r.minScale),
                w = r.offsetScale ? r.arr[d].sign * (r[r.slide_length] + r.space - (r[r.slide_length] + r.space) * y) / 2 * r.arr[d].progress : r.arr[d].sign * (r[r.slide_length] - r[r.slide_length] * y) / 2 * r.arr[d].progress;
            f[r.translate] = r.arr[d][r.translate] - w, window.isSafari11 && (f.z = -150 * (1 - y)), f.scale = y;
          }
        } else f[r.translate] = l, "2d" === r.spin ? (f.rotation = r.spinAngle * u * ("h" === r.orientation ? g : -g), "h" === r.orientation ? f.transformOrigin = "center " + r.spinR + "px 0" : f.transformOrigin = r.spinR + "px center 0") : ("h" === r.orientation ? f.rotationY = r.spinAngle * r.arr[d].progress * -g : f.rotationX = r.spinAngle * r.arr[d].progress * g, f.transformOrigin = "center center " + r.spinR + "px");
        f.opacity = 1, r.justify || (0 !== r.maxRotation && (f.rotationY = r.maxRotation * (r.vary_rotation ? h : m) * -g), f.opacity = 1 + (r.maxOpacity - 1) * (r.vary_fade ? h : m), h > r.edgeRatio ? f.opacity = r.oRange(h) : h < 0 ? f.opacity = r.oRangeMin(h) : 1 === r.maxOpacity && (f.opacity = 1)), f.zIndex = v, f.opacity > 0 ? (f.visibility = "visible", tpGS.gsap.set(r.arr[d].elem, f)) : tpGS.gsap.set(r.arr[d].elem, {
          visibility: "hidden",
          opacity: f.opacity
        });
      }

      if (n !== r.closest) {
        if (r.closest = n, s !== r.arr.length && t.loadVisibleCarouselItems(e, !0, r.closest), r.draggable.isPressed) {
          if (r.focused = r.closest, t[e].pr_next_key = r.focused, r.oldfocused = void 0 === r.oldfocused ? 0 : r.oldfocused, t[e].carousel.allLayersStarted ? t.updateCarouselRows(e) : t.carouselRowAdjustment(r, e, r.focused), "all" !== r.showLayersAllTime) for (r.animInList.includes(r.oldfocused.toString()) || r.animInList.push(r.oldfocused.toString()); r.animInList.length >= 1;) {
            var b = r.animInList.pop();
            r.focused != b && t.removeTheLayers(jQuery(t[e].slides[b]), e);
          }
          r.focused != r.oldfocused && ("all" !== r.showLayersAllTime && (r.animInList.includes(r.focused.toString()) || r.animInList.push(r.focused.toString()), t.animateTheLayers({
            slide: r.focused,
            id: e,
            mode: "start"
          }), t.animateTheLayers({
            slide: "individual",
            id: e,
            mode: t[e].carousel.allLayersStarted ? "rebuild" : "start"
          })), i(e, !0), r.oldfocused = r.focused), t[e].c.trigger("revolution.nextslide.waiting");
        }

        for (var _ in t[e].sbgs) {
          t[e].sbgs.hasOwnProperty(_) && void 0 !== t[e].sbgs[_].bgvid && 0 !== t[e].sbgs[_].bgvid.length && "" + t[e].sbgs[_].skeyindex != "" + r.focused && t.stopBGVideo(e, t[e].sbgs[_].key);
        }
      }
    },
    getCarActiveSlide: function getCarActiveSlide(e) {
      var i,
          a = t[e].carousel,
          r = 999999,
          o = 0;

      for (var s in a.arr) {
        var n;
        if (a.arr.hasOwnProperty(s)) n = "center" === t[e].carousel.align ? Math.abs(parseFloat(a.arr[s][a.translate]) - (a[a.wraplength] - a.arr[s][a.length]) / 2) : "start" === t[e].carousel.align ? Math.abs(parseFloat(a.arr[s][a.translate])) : Math.abs(parseFloat(a.arr[s][a.translate]) - (a[a.wraplength] - a.arr[s][a.length])), a.vertAlignBottom && (n = Math.abs(parseFloat(a.arr[s][a.translate]) - (a[a.wraplength] - a.arr[s][a.length]))), n < r && (i = a.arr[s], r = n, o = s);
      }

      return o = parseInt(o), a.activeSlide = o, i;
    },
    loadVisibleCarouselItems: function loadVisibleCarouselItems(e, i, a) {
      var r = t[e].carousel,
          o = [],
          s = a ? r.closest : r.focused;
      r.focused = parseInt(s, 0), r.focused = t.isNumeric(s) ? s : 0;

      for (var n = 0; n < Math.ceil(t[e].carousel.maxVisibleItems / 2); n++) {
        var l = "end" === t[e].carousel.align ? s - n : s + n,
            d = "center" === t[e].carousel.align ? s - n : "start" === t[e].carousel.align ? t[e].carousel.maxVisibleItems + l - 1 : l - t[e].carousel.maxVisibleItems + 1;
        if (l = l >= t[e].slideamount ? l - t[e].slideamount + 0 : l, d = d >= t[e].slideamount ? d - t[e].slideamount + 0 : d, l = l < 0 ? t[e].slideamount + l : l, d = d < 0 ? t[e].slideamount + d : d, o.push(t[e].slides[l]), l !== d && o.push(t[e].slides[d]), r.arr) for (var c = 0; c < r.arr.length; c++) {
          t[e].slides[l] === r.arr[c].elem && (r.arr[c].loaded = !0), t[e].slides[d] === r.arr[c].elem && (r.arr[c].loaded = !0);
        }
      }

      return i && (t.loadImages(o, e, 1), t.waitForCurrentImages(o, e)), o;
    },
    organiseCarousel: function organiseCarousel(e, i, a, r, o) {
      var s = t[e].carousel;
      if (t[e].slides) for (var n = 0; n < t[e].slides.length; n++) {
        var l = {
          width: !0 === s.justify ? s.slide_widths[n] : s.slide_width
        };
        "off" === s.spin && (l.transformOrigin = "50% " + ("h" === s.orientation ? s.vertical_align : "center")), l.force3D = !0, l.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d", !0 !== o && tpGS.gsap.set(t[e].slides[n], l);
      }
    },
    updateCarouselRows: function updateCarouselRows(e) {
      if ("carousel" === t[e].sliderType) for (var i = 0; i < t[e].slideamount; i++) {
        t.carouselRowAdjustment(t[e].carousel, e, i);
      }
    },
    carouselRowAdjustment: function carouselRowAdjustment(e, i, a) {
      void 0 !== e.slidesWithRowAdjustions && void 0 === e.slidesWithRowAdjustions[a] && (e.slidesWithRowAdjustions[a] = !0, t.getRowHeights(i, a), t.putMiddleZoneInPosition(i, a));
    },
    getNextSlide: function getNextSlide(e, i, a, r, o) {
      var s,
          n = t[e].carousel,
          l = 0,
          d = !1,
          c = i,
          p = i;

      if (void 0 === n.trackIndex) {
        for (var g = 0; g < n.trackArr.length; g++) {
          if (n.arr[n.activeSlide].elem === n.trackArr[g].elem) {
            s = g;
            break;
          }
        }
      } else s = n.trackIndex;

      void 0 === a && (d = !0);

      for (var u = !1; (n.snap || !r) && !d;) {
        if (u || r && Math.abs(l) >= Math.abs(i) || void 0 === i && t[e].slides[n.focused] === n.trackArr[s].elem) {
          i = l;
          break;
        }

        c = l;
        var h = t.getNext(e, a, l, s, void 0 === r);
        (u = h.breakLoop) || (l = h.tempDelta, s = h.trackIndex);
      }

      var m = n.lastPos + i;
      return r && n.focusedOnPress != n.focusedPreSnap && (m = Math.abs(p + n.lastPos - m) <= Math.abs(p + n.lastPos - (c + n.lastPos)) ? m : c + n.lastPos), d && (m = n.lastPos, i = -n.arr[n.closestArr][n.translate]), {
        target: m,
        overshoot: !0,
        delta: i,
        trackIndex: s
      };
    },
    getNext: function getNext(e, i, a, r, o) {
      var s = t[e].carousel,
          n = "right" === i ? 1 : -1,
          l = !1;
      return "start" === s.align && "left" === i ? a += (s.trackArr[r][s.length] + s.space) * n : "center" === s.align ? a += (s.trackArr[r][s.length] + s.space) / 2 * n : "end" === s.align && "right" === i && (a += (s.trackArr[r][s.length] + s.space) * n), "right" === i ? --r < 0 && (r = s.infinity ? s.trackArr.length - 1 : r + 1, s.infinity || (l = !0)) : ++r >= s.trackArr.length && (r = s.infinity ? 0 : r - 1, s.infinity || (l = !0)), l || ("start" === s.align && "right" === i && (a += (s.trackArr[r][s.length] + s.space) * n), "center" === s.align ? a += (s.trackArr[r][s.length] + s.space) / 2 * n : "end" === s.align && "left" === i && (a += (s.trackArr[r][s.length] + s.space) * n)), {
        tempDelta: a,
        trackIndex: r,
        breakLoop: l
      };
    },
    getCarDir: function getCarDir(e, i, a) {
      var r = t[e].carousel,
          o = a - i,
          s = "right";
      r.sameSlide = !1;
      var n = 0,
          l = 0;

      if (r.infinity) {
        for (var d = i; d != a;) {
          l += 1, d = ++d >= r.slideamount ? 0 : d;
        }

        for (d = i; d != a;) {
          n += 1, d = --d < 0 ? r.slideamount - 1 : d;
        }

        s = l <= n ? "left" : "right";
      } else r.infinity || (s = a - i >= 0 ? "left" : "right", l = Math.abs(a - i), 0 === o && (s = "right", r.sameSlide = !0));

      return r.steps = l <= n ? l : n, r.direction = s, s;
    },
    getLastPos: function getLastPos(e) {
      var i = t[e].carousel;

      if (i.trackArr) {
        for (var a = 0, r = 0, o = 0; o < i.trackArr.length; o++) {
          t[e].slides[i.closest] === i.trackArr[o].elem && (i.trackIndex = o), t[e].slides[i.closest] === i.arr[o].elem && (a = i.arr[o][i.translate], "center" === i.align && (r = (i[i.wraplength] - i.arr[o][i.length]) / 2), "end" === i.align && (r = i[i.wraplength] - i.arr[o][i.length]), i.lastOffset = r);
        }

        i.lastPos = parseFloat(i.proxy._gsap[i.translate]) - a - (parseFloat(i.proxy._gsap[i.translate]) - parseFloat(i.follower._gsap[i.translate])), i.lastPos += r;
      }
    },
    swipeAnimate: function swipeAnimate(e) {
      var i = t[e.id].carousel,
          a = e.id;

      if (t.getLastPos(a), i.arr && i.arr[i.closestArr] && i.arr[i.closestArr].elem != t[e.id].slides[i.focused]) {
        var r = t.getCarDir(a, i.trackIndex, i.focused),
            o = t.getNextSlide(e.id, void 0, r, !1);
        i.target = o.target, (!i.infinity && !i.snap || !i.infinity && "v" === i.orientation) && (i.target <= i[i.wraplength] - i.totalWidth ? i.target = i[i.wraplength] - i.totalWidth : i.target >= 0 && !i.snap && (i.target = 0)), i.lerpSpeed = 1, i.fromWheel = !1, i.tween && i.tween.kill && (i.tween.kill(), delete i.tween), i.tween = tpGS.gsap.to(i.proxy, {
          x: i.target,
          y: i.target,
          ease: i.easing,
          duration: i.speed / 1e3 + (i.steps >= 2 ? (i.steps - 1) * i.speed / 2e3 : 0),
          onComplete: function onComplete() {
            i.lerp = cancelAnimationFrame(i.lerp), i.scrollFrame = cancelAnimationFrame(i.scrollFrame), t.carLerpHandler(a, "skip"), i.activeSlide = i.closestArr, t.snapCompleted(a);
          }
        }), i.lerp = cancelAnimationFrame(i.lerp), i.scrollFrame = cancelAnimationFrame(i.scrollFrame), i.lerp || (i.lerp = requestAnimationFrame(i.lerpHandler));
      }
    },
    carScrollTicker: function carScrollTicker(e) {
      var i = t[e].carousel;
      i.scrollFrame = requestAnimationFrame(i.scrollTicker);
      var a = parseFloat(i.proxy._gsap[i.translate]),
          r = a + .5 * (i.scrollProxy - a),
          o = r - a;
      tpGS.gsap.set(i.proxy, _defineProperty({}, i.translate, r)), Math.abs(o) < .03 && (i.scrollFrame = cancelAnimationFrame(i.scrollFrame), i.lerp = cancelAnimationFrame(i.lerp), i.activeSlide = i.closestArr, t.snapCompleted(e));
    },
    scrollCar: function scrollCar(e, i, a) {
      var r = t[e].carousel;
      r.scrollFrame = cancelAnimationFrame(r.scrollFrame), r.lerp = cancelAnimationFrame(r.lerp), tpGS.gsap.to(r, {
        lerpSpeed: 1
      }), r.fromWheel = !0;
      var o,
          s = Math.round(parseFloat(r.proxy._gsap[r.translate]));
      if (r.tween && r.tween.kill && (r.tween.kill(), delete r.tween), 1 == a && r.focused == r.slideamount - 1 && s <= r[r.wraplength] - r.totalWidth && !r.infinity || -1 == a && 0 == r.focused && s >= 0 && !r.infinity) return o = 1 == a ? t[e].cpar.offset().top + t[e].module.height : t.document.scrollTop() - (window.innerHeight - t[e].cpar[0].getBoundingClientRect().top), void (t[e].modal.useAsModal || tpGS.gsap.to([window, "body"], {
        scrollTo: o
      }));
      var n = s + -8 * i;
      (!r.infinity && !r.snap || !r.infinity && "v" === r.orientation) && (n <= r[r.wraplength] - r.totalWidth ? n = r[r.wraplength] - r.totalWidth : n >= 0 && !r.snap && (n = 0)), r.tween = tpGS.gsap.to(r, {
        scrollProxy: n,
        duration: .5,
        ease: r.easing
      }), r.scrollFrame = requestAnimationFrame(r.scrollTicker), r.lerp || (r.lerp = requestAnimationFrame(r.lerpHandler));
    },
    defineCarouselElements: function defineCarouselElements(e) {
      var i = t[e].carousel;
      i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_offset = "none", i.slide_offset = 0, i.cached_slide_offset = 0, i.wrap = jQuery(t[e].canvas[0].parentNode), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || tpGS.gsap.set(i.wrap, {
        perspective: "1600px",
        transformStyle: "preserve-3d"
      }));
    },
    setCarouselDefaults: function setCarouselDefaults(e, i, a) {
      var r = t[e].carousel;

      if (r.stretchCache = void 0 === r.stretchCache ? r.stretch : r.stretchCache, r.stretch = !!t[e].infullscreenmode || r.stretchCache, r.slide_width = Math.round(!0 !== r.stretch && "v" !== r.orientation ? t[e].gridwidth[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.width), r.slide_height = Math.round(!0 !== r.stretch ? t[e].infullscreenmode ? t.getWinH(e) - t.getFullscreenOffsets(e) : t[e].gridheight[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.height), r.ratio = r.slide_width / r.slide_height, r.len = t[e].slides.length, r.maxwidth = t[e].slideamount * r.slide_width, r.maxheight = t[e].slideamount * r.slide_height, 1 != r.justify && r.maxVisiblebackup > r.len && (r.maxVisibleItems = r.len % 2 ? r.len : r.len + 1), r.wrapwidth = r.maxVisibleItems * r.slide_width + (r.maxVisibleItems - 1) * r.space, r.wrapheight = r.maxVisibleItems * r.slide_height + (r.maxVisibleItems - 1) * r.space, r.wrapwidth = "auto" != t[e].sliderLayout ? r.wrapwidth > t[e].canv.width ? t[e].canv.width : r.wrapwidth : r.wrapwidth > t[e].module.width ? 0 !== t[e].module.width ? t[e].module.width : t[e].canv.width : r.wrapwidth, r.wrapheight = "auto" != t[e].sliderLayout ? r.wrapheight > t[e].canv.height ? t[e].canv.height : r.wrapheight : r.wrapheight > t[e].module.height ? 0 !== t[e].module.height ? t[e].module.height : t[e].canv.height : r.wrapheight, !0 === r.justify) {
        r.slide_height = Math.round("fullscreen" === t[e].sliderLayout ? t[e].module.height : t[e].gridheight[t[e].level]), r.slide_widths = [], r.slide_heights = [], r.slide_widthsCache = void 0 === r.slide_widthsCache ? [] : r.slide_widthsCache, r.slide_heightsCache = void 0 === r.slide_heightsCache ? [] : r.slide_heightsCache, r.maxwidth = 0;

        for (var o = 0; o < r.len; o++) {
          if (t[e].slides.hasOwnProperty(o)) {
            var s = t.gA(t[e].slides[o], "iratio");
            s = void 0 === s || 0 === s || null === s ? r.ratio : s, s = parseFloat(s), r.slide_widths[o] = Math.round(r.slide_height * s), r.slide_heights[o] = Math.round(r.slide_height), !1 !== r.justifyMaxWidth && (r.slide_widths[o] = Math.min(r.wrapwidth, r.slide_widths[o])), !1 !== r.justifyMaxWidth && (r.slide_heights[o] = Math.min(r.wrapheight, r.slide_heights[o])), r.slide_widths[o] !== r.slide_widthsCache[o] && (r.slide_widthsCache[o] = r.slide_widths[o], !0 !== i && tpGS.gsap.set(t[e].slides[o], {
              width: r.slide_widths[o]
            })), r.slide_heights[o] !== r.slide_heightsCache[o] && (r.slide_heightsCache[o] = r.slide_heights[o], !0 !== i && tpGS.gsap.set(t[e].slides[o], {
              height: r.slide_heights[o]
            })), r.maxwidth += r.slide_widths[o] + r.space, r.maxheight += r.slide_heights[o] + r.space;
          }
        }
      }

      if (r.infinity = !(r.wrapwidth >= r.maxwidth) && r.infbackup, r.forceBAlign && r.slide_height < .6 * r.wrapheight && r.wrapwidth < r.maxwidth ? r.infinity = !0 : r.forceBAlign && (r.infinity = !1), !0 !== r.quickmode) {
        r.wrapoffset = "center" === r.horizontal_align ? (t[e].canv.width - t[e].outNavDims.right - t[e].outNavDims.left - r.wrapwidth) / 2 : 0, r.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : r.wrapoffset < t[e].outNavDims.left ? t[e].outNavDims.left : r.wrapoffset;
        var n = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden",
            l = "right" === r.horizontal_align ? {
          left: "auto",
          right: r.wrapoffset + "px",
          width: r.wrapwidth,
          overflow: n
        } : "left" === r.horizontal_align || r.wrapwidth < t.winW ? {
          right: "auto",
          left: r.wrapoffset + "px",
          width: r.wrapwidth,
          overflow: n
        } : {
          right: "auto",
          left: "auto",
          width: "100%",
          overflow: n
        };
        void 0 !== r.cacheWrapObj && l.left === r.cacheWrapObj.left && l.right === r.cacheWrapObj.right && l.width === r.cacheWrapObj.width || (window.requestAnimationFrame(function () {
          tpGS.gsap.set(r.wrap, l), t[e].carousel.wrapoffset > 0 && tpGS.gsap.set(t[e].canvas, {
            left: 0
          });
        }), r.cacheWrapObj = jQuery.extend(!0, {}, l)), r.inneroffset = "right" === r.horizontal_align ? r.wrapwidth - r.slide_width : 0, r.windhalf = "auto" === t[e].sliderLayout ? t[e].module.width / 2 : t.winW / 2;
      }

      r.lastWrapwidth === r.wrapwidth && r.lastWrapheight === r.wrapheight || window.requestAnimationFrame(function () {
        t.positionCarousel(e);
      });
    }
  });

  var i = function i(e, _i) {
    var a = t[e].carousel,
        r = _i && t[e].slides[t[e].pr_next_key] ? jQuery(t[e].slides[t[e].pr_next_key]) : t[e].pr_next_slide;
    t[e].c.trigger("revolution.slide.carouselchange", {
      slider: e,
      slideIndex: parseInt(t[e].pr_active_key, 0) + 1,
      slideLIIndex: t[e].pr_active_key,
      slide: r,
      currentslide: r,
      prevSlideIndex: void 0 !== t[e].pr_lastshown_key && parseInt(t[e].pr_lastshown_key, 0) + 1,
      prevSlideLIIndex: void 0 !== t[e].pr_lastshown_key && parseInt(t[e].pr_lastshown_key, 0),
      prevSlide: void 0 !== a.oldfocused && t[e].slides[a.oldfocused]
    });
  },
      a = function a(e, i) {
    var a = t[e].carousel;
    void 0 !== e && void 0 !== a && (a.pDiv = "center" === i ? a.maxVisibleItems / 2 : a.maxVisibleItems, a.edgeRatio = Math.floor(a.pDiv - ("center" === i ? 0 : 1)) / Math.ceil(a.pDiv), 1 === a.maxVisibleItems && (a.edgeRatio = 1), a.oEdge = 1 === a.maxOpacity ? 1 : a.vary_fade ? 1 + (a.maxOpacity - 1) * a.edgeRatio : a.maxOpacity, a.oEdge = 1 === a.maxVisibleItems ? a.maxOpacity : a.oEdge, a.oRange = a.maxVisibleItems > 1 ? tpGS.gsap.utils.mapRange(a.edgeRatio, 1, a.oEdge, 0) : tpGS.gsap.utils.mapRange(1, 1.1, a.oEdge, 0), a.oRangeMin = tpGS.gsap.utils.mapRange(-1 / a.maxVisibleItems, -1.1 / a.maxVisibleItems, 1, 0));
  },
      r = function r(e) {
    var i = t[e].carousel;

    if (void 0 !== e && void 0 !== i) {
      tpGS.gsap.set([i.proxy, i.follower], {
        x: "+=0",
        y: "+=0"
      }), i.arr = [], i.trackArr = [];

      for (var a = 0; a < t[e].slides.length; a++) {
        i.arr.push({
          elem: t[e].slides[a]
        }), i.trackArr.push({
          elem: t[e].slides[a]
        });
      }
    }
  },
      o = function o(e, t) {
    return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e;
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.carousel = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  var t = ["chars", "words", "lines"],
      i = ["Top", "Right", "Bottom", "Left"],
      a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
      r = ["top", "right", "bottom", "left"];
  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var o = jQuery.fn.revolution;
  jQuery.extend(!0, o, {
    checkLayerDimensions: function checkLayerDimensions(e) {
      var t = !1;

      for (var i in o[e.id].layers[e.skey]) {
        if (o[e.id].layers[e.skey].hasOwnProperty(i)) {
          var a = o[e.id].layers[e.skey][i],
              r = o[e.id]._L[a.id];
          r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (t = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({
            a: o[e.id]._L[a.id].c,
            b: e.id,
            c: 0,
            d: r.rsp_bd,
            e: e.slideIndex
          });
        }
      }

      return t;
    },
    requestLayerUpdates: function requestLayerUpdates(e, t, i, a) {
      var r, s, n, l;
      if (void 0 !== i) r = i, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || null == o[e]._L[o[e]._L[r]._ligid] || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, l = ("row" === o[e]._L[r].type || "column" === o[e]._L[r].type || "group" === o[e]._L[r].type) && void 0 !== o[e]._L[r].frames && void 0 !== o[e]._L[r].frames.frame_999 && void 0 !== o[e]._L[r].frames.frame_999.transform && "" + o[e]._L[r].frames.frame_999.transform.opacity != "0", n = 1 === o[e]._L[r].pVisRequest ? "remove" : l ? n : "add", s = 1 === o[e]._L[r].pVisRequest ? "remove" : l ? "add" : s) : (n = "add", s = "remove"), "group" === o[e]._L[r].type && "add" == s && "hidden" == (1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus) && (n = "add"), void 0 !== s && o[e]._L[r].p[0].classList[s]("rs-forceuntouchable"), void 0 !== n && o[e]._L[r].p[0].classList[n]("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
        pointerEvents: o[e]._L[r].pPointerStatus,
        visibility: 1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus
      })), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === t || "leavestage" === t || "framestarted" === t ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && !0 !== o[e]._L[r].maskHasPerspective && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === t && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a - 1 + "px", ""))));else for (r in o[e]._L) {
        o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
          pointerEvents: o[e]._L[r].pPointerStatus,
          visibility: o[e]._L[r].pVisStatus
        })));
      }
      "enterstage" === t && void 0 !== i && void 0 !== o[e]._L[i].esginside && o[e]._L[i].esginside.length > 0 && void 0 !== o[e]._L[i].esginside.esredraw && o[e]._L[i].esginside.esredraw();
    },
    updateMiddleZonesAndESG: function updateMiddleZonesAndESG(e) {
      var t,
          i = o[e].pr_processing_key || o[e].pr_active_key || 0;
      if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[i]) for (t = 0; t < o[e].middleZones[i].length; t++) {
        tpGS.gsap.set(o[e].middleZones[i][t], {
          y: Math.round(o[e].module.height / 2 - o[e].middleZones[i][t].offsetHeight / 2) + "px"
        });
      }
      if (o[e].smiddleZones && o[e].smiddleZones.length > 0) for (t = 0; t < o[e].smiddleZones.length; t++) {
        tpGS.gsap.set(o[e].smiddleZones[t], {
          y: Math.round(o[e].module.height / 2 - o[e].smiddleZones[t].offsetHeight / 2) + "px"
        });
      }
    },
    getRowHeights: function getRowHeights(e, t) {
      if (!o[e].firstLayerCalculated) return {
        cur: 0,
        last: 0,
        cache: [],
        tz: 0
      };
      var i = 0,
          a = 0,
          r = 0,
          s = void 0 !== t ? t : o[e].pr_processing_key || o[e].pr_active_key || 0,
          n = void 0 !== t ? t : o[e].pr_active_key || 0;

      if (o[e].rowMiddleHeights = null == o[e].rowMiddleHeights ? {} : o[e].rowMiddleHeights, o[e].rowMiddleHeights[s] = 0, o[e].rowzones && o[e].rowzones.length > 0) {
        if (void 0 !== o[e].rowzones[s]) for (var l = 0; l < o[e].rowzones[s].length; l++) {
          o[e].rowzonesHeights[s][l] = o[e].rowzones[s][l][0].offsetHeight, i += o[e].rowzonesHeights[s][l], "true" == o[e].rowzones[s][l][0].dataset.middle && (o[e].rowMiddleHeights[s] += o[e].rowzonesHeights[s][l]);
        }
        if (n !== s) for (o[e].rowMiddleHeights[n] = 0, l = 0; l < o[e].rowzones[n].length; l++) {
          o[e].rowzonesHeights[n][l] = o[e].rowzones[n][l][0].offsetHeight, a += o[e].rowzonesHeights[n][l], "true" == o[e].rowzones[n][l][0].dataset.middle && (o[e].rowMiddleHeights[n] += o[e].rowzonesHeights[n][l]);
        }
      }

      if (o[e].srowzones && o[e].srowzones.length > 0) for (o[e].rowMiddleHeights["static"] = 0, l = 0; l < o[e].srowzones.length; l++) {
        r += o[e].srowzones[l][0].offsetHeight, "true" == o[e].srowzones[l][0].dataset.middle && (o[e].rowMiddleHeights["static"] += o[e].srowzones[l][0].offsetHeight);
      }
      i = i < r ? r : i;
      var d = void 0 === o[e].rowHeights ? [] : o[e].rowHeights.cache,
          c = new Date().getTime();
      return void 0 !== o[e].rowHeights && c - o[e].rowHeights.tz < 300 ? o[e].rowHeights.cache.length > 5 && (i = o[e].rowHeights.cache[o[e].rowHeights.cache.length - 1] === i ? o[e].rowHeights.cache[o[e].rowHeights.cache.length - 2] : o[e].rowHeights.cache[o[e].rowHeights.cache.length - 1], c = o[e].rowHeights.tz) : d = [], {
        cur: i,
        last: a,
        cache: d,
        tz: c
      };
    },
    getGridOffset: function getGridOffset(e, t, i, a) {
      var r = "grid" === i ? o[e].canv.width : "carousel" !== o[e].sliderType || a ? o[e].canv.width : o[e].carousel.slide_width,
          s = o[e].useFullScreenHeight ? o[e].module.height : "grid" === i ? o[e].content.height : "carousel" !== o[e].sliderType || a ? o[e].module.height : o[e].canv.height,
          n = "slide" === i || "carousel" == o[e].sliderType && "v" == o[e].carousel.orientation ? 0 : Math.max(0, "fullscreen" == o[e].sliderLayout ? o[e].module.height / 2 - o.iHE(e) * (o[e].keepBPHeight ? 1 : o[e].CM.h) / 2 : o[e].autoHeight || null != o[e].minHeight && o[e].minHeight > 0 || o[e].keepBPHeight ? o[e].canv.height / 2 - o.iHE(e) * o[e].CM.h / 2 : 0),
          l = "slide" === i ? 0 : Math.max(0, "carousel" === o[e].sliderType && "v" !== o[e].carousel.orientation ? 0 : o[e].canv.width / 2 - o.iWA(e, t) * o[e].CM.w / 2);
      return "slide" !== i && "carousel" === o[e].sliderType && a && void 0 !== o[e].carousel && void 0 !== o[e].carousel.horizontal_align && (l = Math.max(0, "center" === o[e].carousel.horizontal_align ? 0 + (o[e].module.width - o.iWA(e, "static") * o[e].CM.w) / 2 : "right" === o[e].carousel.horizontal_align ? o[e].module.width - o[e].gridwidth[o[e].level] * o[e].CM.w : l)), [r, s, l, n];
    },
    initLayer: function initLayer(e) {
      var t,
          i,
          a,
          r = e.id,
          s = e.skey;

      for (var n in o[r].layers[e.skey]) {
        if (o[r].layers[e.skey].hasOwnProperty(n)) {
          var l = o[r].layers[e.skey][n],
              d = jQuery(l),
              c = o.gA(l, "initialised"),
              p = c ? o[r]._L[l.id] : d.data();

          if ("individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(d.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey), void 0 === c) {
            if (o.revCheckIDS(r, l), o[r]._L[l.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip) for (t in p.clipPath = {
              use: !1,
              origin: "l",
              type: "rectangle"
            }, p.clip = p.clip.split(";"), p.clip) {
              p.clip.hasOwnProperty(t) && ("u" == (i = p.clip[t].split(":"))[0] && (p.clipPath.use = "true" == i[1]), "o" == i[0] && (p.clipPath.origin = i[1]), "t" == i[0] && (p.clipPath.type = i[1]));
            }

            var _n = void 0;

            if (p.frames = k(p, r), p.caches = {}, p.OBJUPD = {}, p.c = d, p.p = o[r]._Lshortcuts[l.id].p, p.lp = p.reqWrp.loop ? o[r]._Lshortcuts[l.id].lp : void 0, p.m = p.reqWrp.mask ? o[r]._Lshortcuts[l.id].m : void 0, p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && null !== (_n = o.closestNode(d[0], "RS-GROUP")) || "group" === p.type && null !== (_n = o.closestNode(d[0].parentNode, "RS-GROUP")) ? "group" : "column" !== p.type && null !== (_n = o.closestNode(d[0], "RS-COLUMN")) ? "column" : "row" !== p.type && null !== (_n = o.closestNode(d[0], "RS-ROW")) ? "row" : void 0, p._lig = null != _n ? jQuery(_n) : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === d[0].tagName ? jQuery(o.closestNode(d[0], "RS-COLUMN-WRAP")) : "none", p._row = "RS-COLUMN" === d[0].tagName && jQuery(o.closestNode(d[0], "RS-ROW")), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, p.fsom = "true" == p.fsom || 1 == p.fsom, p.fullinset = "" + p.fullinset == "true", p.position = void 0 !== p.pos ? "r" == p.pos ? "relative" : "absolute" : p._incolumn ? "relative" : "absolute", (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, d[0].className += " rs-sba", o[r].sbas[s][l.id] = d[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === d[0].tagName, p.type = p.type || "none", "row" === p.type && (void 0 === p.cbreak && (p.cbreak = 2), void 0 === p.zone && (p.zone = o.closestNode(d[0], "RS-ZONE"), p.zone = null !== p.zone && void 0 !== p.zone ? p.zone.className : "")), p.esginside = jQuery(d[0].getElementsByClassName("esg-grid")[0]), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = d.find("img"), p.deepiframe = o.getByTag(d[0], "iframe"), p.deepmedia = o.getByTag(d[0], p._mediatag), p.layertype = "image" === p.type ? "image" : d[0].className.indexOf("rs-layer-video") >= 0 || d[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && p.cbgexists && (p.cbg = jQuery(o.getByTag(p.p[0], "RS-COLUMN-BG")[0]), p.cbgmask = jQuery(o.getByTag(p.p[0], "RS-CBG-MASK-WRAP")[0])), p._slidelink = d[0].className.indexOf("slidelink") >= 0, p._isstatic = d[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = d[0].getElementsByClassName("rs-toggled-content").length > 0, "text" === p.type && (-1 !== p.c[0].innerHTML.indexOf("{{total_slide_count}}") && (p.c[0].innerHTML = p.c[0].innerHTML.replace("{{total_slide_count}}", o[r].realslideamount)), p.c[0].innerHTML.indexOf("{{current_slide_index}}") >= 0)) if (p._isstatic) p.metas = p.metas || {}, p.metas.csi = {}, p.c[0].innerHTML = p.c[0].innerHTML.replace("{{current_slide_index}}", "<cusli>" + o[r].realslideamount + "</cusli>"), p.metas.csi.c = p.c[0].getElementsByTagName("CUSLI")[0];else {
              var g = parseInt(e.slideIndex) + 1;
              p.c[0].innerHTML = p.c[0].innerHTML.replace("{{current_slide_index}}", (g < 10 && o[r].realslideamount > 9 ? "0" : "") + g);
            }
            if (p.bgcol = void 0 === p.bgcol ? d[0].style.background.indexOf("gradient") >= 0 ? d[0].style.background : d[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = void 0 === p.zindex ? d[0].style.zIndex : p.zindex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && d.on("click", function () {
              o.swaptoggleState([this.id]);
            }), void 0 !== p.border) for (t in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border) {
              if (p.border.hasOwnProperty(t)) switch ((i = p.border[t].split(":"))[0]) {
                case "boc":
                  p.bordercolor = i[1];
                  break;

                case "bow":
                  p.borderwidth = o.revToResp(i[1], 4, 0);
                  break;

                case "bos":
                  p.borderstyle = o.revToResp(i[1], 4, 0);
                  break;

                case "bor":
                  p.borderradius = o.revToResp(i[1], 4, 0);
              }
            }

            if ("svg" === p.type && (p.svg = d.find("svg"), p.svgI = f(p.svgi, r), p.svgPath = p.svg.find(p.svgI.svgAll ? "path, circle, ellipse, line, polygon, polyline, rect" : "path"), p.svgH = void 0 !== p.svgi && -1 === p.svgi.indexOf("oc:t") ? f(p.svgh, r) : {}), void 0 !== p.btrans) {
              var u = p.btrans;

              for (t in p.btrans = {
                rX: 0,
                rY: 0,
                rZ: 0,
                o: 1
              }, u = u.split(";")) {
                if (u.hasOwnProperty(t)) switch ((i = u[t].split(":"))[0]) {
                  case "rX":
                    p.btrans.rX = i[1];
                    break;

                  case "rY":
                    p.btrans.rY = i[1];
                    break;

                  case "rZ":
                    p.btrans.rZ = i[1];
                    break;

                  case "o":
                    p.btrans.o = i[1];
                    break;

                  case "iosfx":
                    p.iOSFix = "default" == i[1] ? "d" : "r" == i[1] ? "rotationX" : i[1];
                }
              }
            }

            if (void 0 !== p.tsh) for (t in p.tshadow = {
              c: "rgba(0,0,0,0.25)",
              v: 0,
              h: 0,
              b: 0
            }, p.tsh = p.tsh.split(";"), p.tsh) {
              if (p.tsh.hasOwnProperty(t)) switch ((i = p.tsh[t].split(":"))[0]) {
                case "c":
                  p.tshadow.c = i[1];
                  break;

                case "h":
                  p.tshadow.h = i[1];
                  break;

                case "v":
                  p.tshadow.v = i[1];
                  break;

                case "b":
                  p.tshadow.b = i[1];
              }
            }
            if (void 0 !== p.tst) for (t in p.tstroke = {
              c: "rgba(0,0,0,0.25)",
              w: 1
            }, p.tst = p.tst.split(";"), p.tst) {
              if (p.tst.hasOwnProperty(t)) switch ((i = p.tst[t].split(":"))[0]) {
                case "c":
                  p.tstroke.c = i[1];
                  break;

                case "w":
                  p.tstroke.w = i[1];
              }
            }
            if (void 0 !== p.bsh) for (t in p.bshadow = {
              e: "c",
              c: "rgba(0,0,0,0.25)",
              v: 0,
              h: 0,
              b: 0,
              s: 0
            }, p.bsh = p.bsh.split(";"), p.bsh) {
              if (p.bsh.hasOwnProperty(t)) switch ((i = p.bsh[t].split(":"))[0]) {
                case "c":
                  p.bshadow.c = i[1];
                  break;

                case "h":
                  p.bshadow.h = i[1];
                  break;

                case "v":
                  p.bshadow.v = i[1];
                  break;

                case "b":
                  p.bshadow.b = i[1];
                  break;

                case "s":
                  p.bshadow.s = i[1];
                  break;

                case "e":
                  p.bshadow.e = i[1];
              }
            }
            if (void 0 !== p.dim) for (t in p.dim = p.dim.split(";"), p.dim) {
              if (p.dim.hasOwnProperty(t)) switch ((i = p.dim[t].split(":"))[0]) {
                case "w":
                  p.width = i[1];
                  break;

                case "h":
                  p.height = i[1];
                  break;

                case "maxw":
                  p.maxwidth = i[1];
                  break;

                case "maxh":
                  p.maxheight = i[1];
                  break;

                case "minw":
                  p.minwidth = i[1];
                  break;

                case "minh":
                  p.minheight = i[1];
              }
            }
            if (void 0 !== p.xy && "row" !== p.type && "column" !== p.type) for (t in p.xy = p.xy.split(";"), p.xy) {
              if (p.xy.hasOwnProperty(t)) switch ((i = p.xy[t].split(":"))[0]) {
                case "x":
                  p.x = i[1].replace("px", "");
                  break;

                case "y":
                  p.y = i[1].replace("px", "");
                  break;

                case "xo":
                  p.hoffset = i[1].replace("px", "");
                  break;

                case "yo":
                  p.voffset = i[1].replace("px", "");
              }
            }
            if (p._isnotext || void 0 === p.text) {
              if (p._isgroup && void 0 !== p.text) {
                for (t in p.text = p.text.split(";"), p.text) {
                  if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
                    case "a":
                      p.textalign = i[1];
                  }
                }
              } else "column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration;
            } else for (t in p.text = p.text.split(";"), p.text) {
              if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
                case "w":
                  p.whitespace = i[1];
                  break;

                case "td":
                  p.textDecoration = i[1];
                  break;

                case "c":
                  p.clear = i[1];
                  break;

                case "f":
                  p["float"] = i[1];
                  break;

                case "s":
                  p.fontsize = i[1];
                  break;

                case "l":
                  p.lineheight = i[1];
                  break;

                case "ls":
                  p.letterspacing = i[1];
                  break;

                case "fw":
                  p.fontweight = i[1];
                  break;

                case "a":
                  p.textalign = i[1];
              }
            }
            if (void 0 !== p.flcr) for (t in p.flcr = p.flcr.split(";"), p.flcr) {
              if (p.flcr.hasOwnProperty(t)) switch ((i = p.flcr[t].split(":"))[0]) {
                case "c":
                  p.clear = i[1];
                  break;

                case "f":
                  p["float"] = i[1];
              }
            }
            if (void 0 !== p.padding) for (t in p.padding = p.padding.split(";"), p.padding) {
              if (p.padding.hasOwnProperty(t)) switch ((i = p.padding[t].split(":"))[0]) {
                case "t":
                  p.paddingtop = i[1];
                  break;

                case "b":
                  p.paddingbottom = i[1];
                  break;

                case "l":
                  p.paddingleft = i[1];
                  break;

                case "r":
                  p.paddingright = i[1];
              }
            }
            if (void 0 !== p.margin) for (t in p.margin = p.margin.split(";"), p.margin) {
              if (p.margin.hasOwnProperty(t)) switch ((i = p.margin[t].split(":"))[0]) {
                case "t":
                  p.margintop = i[1];
                  break;

                case "b":
                  p.marginbottom = i[1];
                  break;

                case "l":
                  p.marginleft = i[1];
                  break;

                case "r":
                  p.marginright = i[1];
              }
            }
            if (void 0 !== p.spike && (p.spike = G(p.spike)), void 0 !== p.corners) for (t in a = p.corners.split(";"), p.corners = {}, a) {
              a.hasOwnProperty(t) && a[t].length > 0 && (p.corners[a[t]] = jQuery("<" + a[t] + "></" + a[t] + ">"), p.c.append(p.corners[a[t]]));
            }
            p.textalign = y(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), C(d, 0, r), o.sA(l, "initialised", !0), o[r].c.trigger("layerinitialised", {
              layer: d[0].id,
              slider: r
            });
          }

          var h = p.x[o[r].level],
              m = p.y[o[r].level],
              v = o.getGridOffset(r, e.slideIndex, p.basealign, p._isstatic),
              w = v[0],
              b = v[1],
              _ = v[2],
              S = v[3];

          if (p.slideIndex = e.slideIndex, "updateposition" !== e.mode) {
            if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || w < o[r].hideLayerAtLimit && "on" == p.layeronlimit || w < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype) {
              if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
                o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
                var x = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
                    L = w / b;
                p.imgOBJ = x > L && x <= 1 || x < L && x > 1 ? {
                  width: "100%",
                  height: "auto",
                  left: "c" === h || "center" === h ? "50%" : "left" === h || "l" === h ? "0" : "auto",
                  right: "r" === h || "right" === h ? "0" : "auto",
                  top: "c" === m || "center" === m || "middle" === m || "m" === m ? "50%" : "top" === m || "t" === m ? "0" : "auto",
                  bottom: "b" === m || "bottom" === m ? "0" : "auto",
                  x: "c" === h || "center" === h || "middle" === h || "m" === h ? "-50%" : "0",
                  y: "c" === m || "center" === m || "middle" === m || "m" === m ? "-50%" : "0"
                } : {
                  height: "100%",
                  width: "auto",
                  left: "c" === h || "center" === h ? "50%" : "left" === h || "l" === h ? "0" : "auto",
                  right: "r" === h || "right" === h ? "0" : "auto",
                  top: "c" === m || "center" === m || "middle" === m || "m" === m ? "50%" : "top" === m || "t" === m ? "0" : "auto",
                  bottom: "b" === m || "bottom" === m ? "0" : "auto",
                  x: "c" === h || "center" === h || "middle" === h || "m" === h ? "-50%" : "0",
                  y: "c" === m || "center" === m || "middle" === m || "m" === m ? "-50%" : "0"
                };
              } else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = {
                width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto",
                height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto"
              };
            } else if ("video" === p.layertype) {
              o.manageVideoLayer(d, r, s), "rebuild" !== e.mode && o.resetVideo(d, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && 1 == p.bgvideo && o.prepareCoveredVideo(r, d), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid, p.mediaOBJ = {
                display: "block"
              };
              var O = p.width[o[r].level],
                  R = p.height[o[r].level];
              if (O = "auto" === O ? O : !o.isNumeric(O) && O.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : w : "off" !== p.rsp_bd ? parseFloat(O) * o[r].CM.w + "px" : parseFloat(O) + "px", R = "auto" === R ? R : !o.isNumeric(R) && R.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].CM.w : b : "off" !== p.rsp_bd ? parseFloat(R) * o[r].CM.h + "px" : parseFloat(R) + "px", p.vd = void 0 === p.vd ? o[r].videos[d[0].id].ratio.split(":").length > 1 ? o[r].videos[d[0].id].ratio.split(":")[0] / o[r].videos[d[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== O && "auto" !== R || void 0 === p.ytid) -1 == d[0].className.indexOf("rs-fsv") ? (R = "auto" === R && void 0 !== p.vd && "auto" !== O ? "100%" === O ? d.width() / p.vd : O / p.vd : R, p.vidOBJ = {
                width: O,
                height: R
              }) : ("grid" !== p.basealign && (_ = 0, S = 0), p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = {
                width: O,
                height: o[r].autoHeight ? o[r].canv.height : R
              }), 0 != p.html5vid && d.hasClass("rs-fsv") || (p.mediaOBJ = {
                width: O,
                height: R,
                display: "block"
              }), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !o.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = {
                minWidth: O
              });else {
                var I = d.width(),
                    M = "auto" === R ? I / p.vd : R;
                p.vidOBJ = {
                  width: "auto",
                  height: M
                }, p.heightSetByVideo = !0;
              }
            }
            p._slidelink || o[r].caches.calcResponsiveLayersList.push({
              a: d,
              b: r,
              c: 0,
              d: p.rsp_bd,
              e: e.slideIndex
            }), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && d.find("*").each(function () {
              var t = jQuery(this);
              "true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && C(t, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({
                a: t,
                b: r,
                c: "rekursive",
                d: p.rsp_bd,
                e: e.slideIndex,
                RSL: d
              });
            });
          }

          if ("preset" !== e.mode) {
            if (p.oldeow = p.eow, p.oldeoh = p.eoh, p.eow = d.outerWidth(!0), p.eoh = d.outerHeight(!0), 0 == p.eoh && "group" == p.type && "auto" == p.height[o[r].level] && (p.eoh = p.p[0].offsetHeight), void 0 !== p.metas && void 0 !== p.metas.csi && p.metas.csi.change !== o[r].focusedSlideIndex) {
              p.metas.csi.change = o[r].focusedSlideIndex;
              g = parseInt(p.metas.csi.change) + 1;
              p.metas.csi.c.innerHTML = (o[r].realslideamount > 9 && g < 10 ? "0" : "") + g;
            }

            if (p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
              var T = p.img.width();
              p.eow = 0 !== T ? T : p.eow;
            }

            if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
              for (a in p.corners) {
                if (p.corners.hasOwnProperty(a)) {
                  p.corners[a].css("borderWidth", p.eoh + "px");
                  var A = "rs-fcrt" === a || "rs-fcr" === a;
                  p.corners[a].css("border" + (A ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol);
                }
              }

              p.eow = d.outerWidth(!0);
            }

            0 == p.eow && 0 == p.eoh && (p.eow = "grid" === p.basealign ? o[r].content.width : o[r].module.width, p.eoh = "grid" === p.basealign ? o[r].content.height : o[r].module.height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
            var D = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].CM.w : parseInt(p.voffset[o[r].level], 0),
                P = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].CM.h : parseInt(p.hoffset[o[r].level], 0),
                B = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : w,
                H = "grid" === p.basealign || "carousel" == o[r].sliderType && "v" === o[r].carousel.orientation ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].CM.h) : b;
            (1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && ("group" !== p.type || p._ingroup || p._incolumn)) && (B = void 0 !== p._lig ? p._lig.width() : o[r].module.width, H = void 0 !== p._lig ? p._lig.height() : o[r].module.height, _ = 0, S = 0), o[r].keepBPHeight && H == o[r].module.height && (S = 0), "video" === p.type && null != p.vidOBJ && (p.vidOBJ.height >= 0 && 0 === p.eoh && (p.eoh = p.vidOBJ.height), p.vidOBJ.width >= 0 && 0 === p.eow && (p.eow = p.vidOBJ.width)), h = "relative" == p.position ? 0 : "c" === h || "m" === h || "center" === h || "middle" === h ? B / 2 - p.eow / 2 + P : "l" === h || "left" === h ? P : "r" === h || "right" === h ? B - p.eow - P : "off" !== p.rsp_o ? h * o[r].CM.w : h, m = "relative" == p.position ? 0 : "m" === m || "c" === m || "center" === m || "middle" === m ? H / 2 - p.eoh / 2 + D : "t" === m || "top" == m ? D : "b" === m || "bottom" == m ? H - p.eoh - D : "off" !== p.rsp_o ? m * o[r].CM.w : m, h = p._slidelink ? 0 : o[r].rtl && -1 == ("" + p.width[o[r].level]).indexOf("%") ? parseInt(h) + p.eow : h, p.calcx = "relative" != p.position || "group" !== p.type && !p._incolumn ? parseInt(h, 0) + _ : 0, p.calcy = "relative" != p.position || "group" !== p.type && !p._incolumn ? parseInt(m, 0) + S : 0, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = {
              zIndex: p.zindex,
              top: p.calcy,
              left: p.calcx,
              overwrite: "auto"
            } : "row" !== p.type ? p.OBJUPD.POBJ = {
              zIndex: p.zindex,
              width: p.columnwidth,
              top: 0,
              left: 0,
              overwrite: "auto"
            } : "row" === p.type && (p.OBJUPD.POBJ = {
              zIndex: p.zindex,
              width: "grid" === p.basealign ? B + "px" : "100%",
              top: 0,
              left: o[r].rtl ? -1 * _ : _,
              overwrite: "auto"
            }, p.cbreak <= o[r].level ? -1 === d[0].className.indexOf("rev_break_columns") && d[0].classList.add("rev_break_columns") : d[0].className.indexOf("rev_break_columns") > 0 && d[0].classList.remove("rev_break_columns"), p.rowcalcx = p.OBJUPD.POBJ.left, p.pow = p.p.outerWidth(!0)), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = "color" === p.blendmode && window.isSafari11 ? "color-burn" : p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = {
              width: p.eow,
              height: p.eoh
            }), p._ingroup && (void 0 !== p._groupw && !o.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !o.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(d, r);
          }
        }
      }
    },
    hoverReverseDone: function hoverReverseDone(e) {
      o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, {
        textDecoration: o[e.id]._L[e.L[0].id].textDecoration
      });
    },
    animcompleted: function animcompleted(e, t, i) {
      if (void 0 !== o[t].videos) {
        var a = o[t].videos[e[0].id];
        null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("static" === a.slideid || "carousel" !== o[t].sliderType || e.closest("rs-slide").index() == o[t].carousel.focused || e.closest("rs-slide").index() == o[t].activeRSSlide && o[t].carousel.oldfocused == o[t].carousel.focused || i) && o.playVideo(e, t), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))));
      }
    },
    convertHoverTransform: function convertHoverTransform(e, t, i) {
      var a,
          r = o.clone(e.transform);

      if ((r.originX || r.originY || r.originZ) && (r.transformOrigin = (void 0 === r.originX ? "50%" : r.originX) + " " + (void 0 === r.originY ? "50%" : r.originY) + " " + (void 0 === r.originZ ? "50%" : r.originZ), delete r.originX, delete r.originY, delete r.originZ), void 0 !== e && void 0 !== e.filter && (r.filter = u(e.filter), r["-webkit-filter"] = r.filter), r.color = void 0 === r.color ? "rgba(255,255,255,1)" : r.color, r.force3D = "auto", void 0 !== r.borderRadius && ((a = r.borderRadius.split(" ")).length, r.borderTopLeftRadius = a[0], r.borderTopRightRadius = a[1], r.borderBottomRightRadius = a[2], r.borderBottomLeftRadius = a[3], delete r.borderRadius), void 0 !== r.borderWidth && ((a = r.borderWidth.split(" ")).length, r.borderTopWidth = a[0], r.borderRightWidth = a[1], r.borderBottomWidth = a[2], r.borderLeftWidth = a[3], delete r.borderWidth), void 0 === i.bg || -1 === i.bg.indexOf("url")) {
        var s = -1 !== i.bgCol.search("gradient"),
            n = r.backgroundImage && "string" == typeof r.backgroundImage && -1 !== r.backgroundImage.search("gradient");
        n && s ? (180 !== v(i.bgCol) && 180 == v(r.backgroundImage) && (r.backgroundImage = m(r.backgroundImage, 180)), r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to) : n && !s ? r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to : !n && s && (r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundColor, void 0 === r.gs ? "fading" : r.gs).to);
      }

      return delete r.gs, r;
    },
    handleStaticLayers: function handleStaticLayers(e, t) {
      var i = 0,
          a = o[t].realslideamount + 1;

      if (void 0 !== o.gA(e[0], "onslides")) {
        var r = o.gA(e[0], "onslides").split(";");

        for (var s in r) {
          if (r.hasOwnProperty(s)) {
            var n = r[s].split(":");
            "s" === n[0] && (i = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0));
          }
        }
      }

      i = Math.max(0, i), a = Math.min(o[t].realslideamount, a < 0 ? o[t].realslideamount : a), a = 1 !== i && 0 !== i || a !== o[t].realslideamount ? a : o[t].realslideamount + 1, e.data("startslide", i), e.data("endslide", a), o.sA(e[0], "startslide", i), o.sA(e[0], "endslide", a);
    },
    updateLayersOnFullStage: function updateLayersOnFullStage(e) {
      if (o[e].caches.calcResponsiveLayersList.length > 0) {
        !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && !0 !== o[e].skipAttachDetach && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach());

        for (var t = 0; t < o[e].caches.calcResponsiveLayersList.length; t++) {
          void 0 !== o[e].caches.calcResponsiveLayersList[t] && B(o[e].caches.calcResponsiveLayersList[t]);
        }

        !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && !0 !== o[e].skipAttachDetach && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0]));
      }
    },
    animateTheLayers: function animateTheLayers(e) {
      if (void 0 === e.slide) return !1;
      var t = e.id;
      if (void 0 === o[t].slides[e.slide] && "individual" !== e.slide) return !1;

      if ("carousel" === o[t].sliderType) {
        if ("start" === e.mode && "start" === o[t].lastATLmode) {
          if (e.slide === o[t].lastATLslide && new Date().getTime() - o[t].lastATLtime < 1500) return;
          o[t].lastATLtime = new Date().getTime();
        }

        o[t].lastATLmode = e.mode, o[t].lastATLslide = e.slide;
      }

      var i = "individual" !== e.slide ? o.gA(o[t].slides[e.slide], "key") : "individual",
          a = void 0 !== o[t].pr_processing_key ? o[t].pr_processing_key : void 0 !== o[t].pr_active_key ? o[t].pr_active_key : 0;
      o[t].focusedSlideIndex = a, o[t].caches.calcResponsiveLayersList = [], o[t].layers = o[t].layers || {}, "individual" === i ? o[t].layers.individual = void 0 === o[t].layers.individual ? "all" === o[t].carousel.showLayersAllTime ? M(jQuery(o[t].c), "rs-layer", "rs-layer-static") : M(jQuery(o[t].c), "rs-on-car") : o[t].layers.individual : (o[t].layers[i] = void 0 === o[t].layers[i] ? "all" === o[t].carousel.showLayersAllTime ? [] : M(jQuery(o[t].slides[e.slide]), "rs-layer", "carousel" === o[t].sliderType ? "rs-on-car" : void 0) : o[t].layers[i], o[t].layers["static"] = void 0 === o[t].layers["static"] ? M(jQuery(o[t].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[t].layers["static"], o[t].sbas[i] = void 0 === o[t].sbas[i] ? M(jQuery(o[t].slides[e.slide]), "rs-sba") : o[t].sbas[i]);
      var r = "rebuild" === e.mode && "carousel" === o[t].sliderType && "individual" === i;
      void 0 !== i && o[t].layers[i] && o.initLayer({
        id: t,
        slideIndex: e.slide,
        skey: i,
        mode: e.mode,
        animcompleted: r
      }), o[t].layers["static"] && o.initLayer({
        id: t,
        skey: "static",
        slideIndex: "static",
        mode: e.mode,
        animcompleted: r
      }), o.updateLayersOnFullStage(t), "preset" !== e.mode || void 0 !== o[t].slidePresets && void 0 !== o[t].slidePresets[e.slide] || (o[t].slidePresets = void 0 === o[t].slidePresets ? {} : o[t].slidePresets, o[t].slidePresets[e.slide] = !0, o[t].c.trigger("revolution.slideprepared", {
        slide: e.slide,
        key: i
      })), o[t].heightInLayers = o[t].module.height, o[t].widthInLayers = o[t].module.width, o[t].levelInLayers = o[t].level;
      var s = {
        id: t,
        skey: i,
        slide: e.slide,
        key: i,
        mode: e.mode,
        index: a
      };
      window.requestAnimationFrame(function () {
        if (void 0 === o[t].dimensionReCheck[i] ? (o.updateLayerDimensions(s), !0 !== o[t].doubleDimensionCheck ? setTimeout(function () {
          o.updateLayerDimensions(s), o.updateRowZones(s);
        }, 150) : o.updateRowZones(s), o[t].doubleDimensionCheck = !0, o[t].dimensionReCheck[i] = !0) : o.updateRowZones(s), void 0 !== i && o[t].layers[i]) for (var a in o[t].layers[i]) {
          o[t].layers[i].hasOwnProperty(a) && o.renderLayerAnimation({
            layer: jQuery(o[t].layers[i][a]),
            id: t,
            mode: e.mode,
            caller: e.caller
          });
        }
        if (o[t].layers["static"]) for (var a in o[t].layers["static"]) {
          o[t].layers["static"].hasOwnProperty(a) && o.renderLayerAnimation({
            layer: jQuery(o[t].layers["static"][a]),
            id: t,
            mode: e.mode,
            caller: e.caller
          });
        }
        null != o[t].mtl && o[t].mtl.resume();
      });
    },
    updateRowZones: function updateRowZones(e) {
      (void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)] && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.updateDims(e.id), o.initLayer({
        id: e.id,
        skey: e.key,
        slideIndex: e.slide,
        mode: "updateposition"
      }), o.initLayer({
        id: e.id,
        skey: "static",
        slideIndex: "static",
        mode: "updateposition"
      }), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id), window.requestAnimationFrame(function () {
        o.putRowsInPosition(e.id);
      }));
    },
    updateLayerDimensions: function updateLayerDimensions(e) {
      var t = !1;
      o[e.id].caches.calcResponsiveLayersList = [], void 0 === e.key || "individual" != e.key && void 0 === o[e.id].layers[e.key] || !o.checkLayerDimensions({
        id: e.id,
        skey: e.key,
        slideIndex: e.slide
      }) || (t = !0), o.initLayer({
        id: e.id,
        skey: e.key,
        slideIndex: e.slide,
        mode: "updateAndResize"
      }), o[e.id].layers["static"] && o.checkLayerDimensions({
        id: e.id,
        skey: "static",
        slideIndex: "static"
      }) && (t = !0, o.initLayer({
        id: e.id,
        skey: "static",
        slideIndex: "static",
        mode: "updateAndResize"
      })), t && o.updateLayersOnFullStage(e.id);
    },
    updateAnimatingLayerPositions: function updateAnimatingLayerPositions(e) {
      o.initLayer({
        id: e.id,
        skey: e.key,
        slideIndex: e.slide,
        mode: "updateposition"
      });
    },
    removeTheLayers: function removeTheLayers(e, t, i) {
      var a = o.gA(e[0], "key");

      for (var r in o[t].sloops && o[t].sloops[a] && o[t].sloops[a].tl && o[t].sloops[a].tl.pause(), o[t].layers[a]) {
        o[t].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({
          layer: jQuery(o[t].layers[a][r]),
          frame: "frame_999",
          mode: "continue",
          remove: !0,
          id: t,
          allforce: i
        });
      }

      for (var r in o[t].layers["static"]) {
        o[t].layers["static"].hasOwnProperty(r) && o.renderLayerAnimation({
          layer: jQuery(o[t].layers["static"][r]),
          frame: "frame_999",
          mode: "continue",
          remove: !0,
          id: t,
          allforce: i
        });
      }
    },
    renderLayerAnimation: function renderLayerAnimation(e) {
      var i,
          a = e.layer,
          r = e.id,
          u = o[r].level,
          h = o[r]._L[a[0].id],
          m = void 0 !== h.timeline ? h.timeline.time() : void 0,
          v = !1,
          f = !1,
          y = "none",
          _ = !1;

      if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === h.animationRendered) && (h.animationRendered = !0, "preset" !== e.mode || !0 === h.frames.frame_1.timeline.waitoncall || void 0 !== h.scrollBasedOffset)) {
        if ("trigger" == e.mode && (h.triggeredFrame = e.frame), h._isstatic) {
          var x = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? parseInt(o[r].carousel.oldfocused) + 1 : void 0 === o[r].focusedSlideIndex ? 0 : parseInt(o[r].focusedSlideIndex, 0) + 1,
              k = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 == x ? 1 : x : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? 0 == x ? 1 : x : parseInt(o[r].pr_processing_key, 0) + 1,
              L = x >= h.startslide && x <= h.endslide,
              O = k >= h.startslide && k <= h.endslide,
              R = void 0 !== h.frames.frame_999 && void 0 !== h.frames.frame_999.timeline && !0 !== h.frames.frame_999.timeline.waitoncall && (x === h.endslide || x === h.endslide - 1);

          if (void 0 === o[r].modal || "start" != e.mode && "continue" != e.mode || ("continue" === e.mode && "close" == o[r].modal.lastModalCall && (O = !1), "start" !== e.mode || "show" !== o[r].modal.lastModalCall && "init" !== o[r].modal.lastModalCall || o[r].modal.lastModalCall === h.lastModalCall || (h.triggeredFrame = void 0, h.triggercache = "reset", void 0 !== h.timeline && void 0 !== h.timeline.currentLabel() && -1 == h.timeline.currentLabel().indexOf("frame_999") && h.timeline.pause(0)), h.lastModalCall = o[r].modal.lastModalCall), y = !("start" !== e.mode || !R) || x === h.endslide && "continue" === e.mode || ("continue" === e.mode || x === h.endslide) && "none", "frame_999" === h.animatedFrame && "done" === h.animatingFrame | null == h.animatingFrame && (h.lastRequestedMainFrame = "frame_999"), void 0 !== h.timeline && void 0 !== h.timeline.currentLabel() && -1 == h.timeline.currentLabel().indexOf("frame_999") && (_ = !0), !0 === e.allforce || !0 === y) {
            if ("continue" === e.mode && O && R && void 0 !== h.timeline) return void (h.timeline.currentLabel().indexOf("frame_999") >= 0 ? h.timeline.pause(h.timeline.previousLabel()) : h.timeline.pause(h.timeline.currentLabel()));
            if ("continue" === e.mode && "frame_999" === e.frame && (O || void 0 === h.lastRequestedMainFrame)) return;
          } else {
            if ("preset" === e.mode && (h.elementHovered || !O)) return;
            if ("rebuild" === e.mode && !L && !O) return;
            if ("start" === e.mode && O && "frame_1" === h.lastRequestedMainFrame) return;
            if (("start" === e.mode || "preset" === e.mode) && "frame_999" === h.lastRequestedMainFrame && !0 !== h.leftstage) return;
            if ("continue" === e.mode && "frame_999" === e.frame && (O || void 0 === h.lastRequestedMainFrame)) return;
            if ("start" === e.mode && !O) return;
            if ("rebuild" === e.mode && h.elementHovered && h._isstatic && h.hovertimeline) return;
          }
        } else "start" === e.mode && "keep" !== h.triggercache && (h.triggeredFrame = void 0);

        for (var I in "start" === e.mode && (void 0 !== h.layerLoop && (h.layerLoop.count = 0), e.frame = void 0 === h.triggeredFrame ? _ ? void 0 : 0 : h.triggeredFrame), "continue" === e.mode || "trigger" === e.mode || void 0 === h.timeline || h._isstatic && !0 === h.leftstage || h.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === h.timeline || h.timeline.pause(), h.timeline = tpGS.gsap.timeline({
          paused: !0
        }), "text" !== h.type && "button" !== h.type || void 0 !== h.splitText && (void 0 !== h.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (w({
          layer: a,
          id: r
        }), "start" === e.mode && (h.splitTextFix = !0)), h.ford) {
          if (h.ford.hasOwnProperty(I)) {
            var M = h.ford[I],
                T = !1;

            if ("frame_0" !== M && "frame_hover" !== M && "loop" !== M) {
              if ("frame_999" === M && !h.frames[M].timeline.waitoncall && h.frames[M].timeline.start >= o[r].duration && !0 !== e.remove && (h.frames[M].timeline.waitoncall = !0), "start" === e.mode && "keep" !== h.triggercache && (h.frames[M].timeline.callstate = h.frames[M].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && h.frames[M].timeline.waitoncall && (M === e.frame ? (h.frames[M].timeline.triggered = !0, h.frames[M].timeline.callstate = "called") : h.frames[M].timeline.triggered = !1), "rebuild" === e.mode || h.frames[M].timeline.triggered || (h.frames[M].timeline.callstate = h.frames[M].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                if (("continue" === e.mode || "trigger" === e.mode) && !1 === f && M !== e.frame) continue;
                if (("rebuild" === e.mode || "preset" === e.mode) && !1 === f && void 0 !== h.triggeredFrame && M !== h.triggeredFrame) continue;
                (M === e.frame || "rebuild" === e.mode && M === h.triggeredFrame) && (f = !0);
              } else M === e.frame && (f = !0);

              if (M !== e.frame && h.frames[M].timeline.waitoncall && "called" !== h.frames[M].timeline.callstate && (v = !0), M !== e.frame && f && (v = !0 === v && h.frames[M].timeline.waitoncall ? "skiprest" : !0 !== v && v), void 0 === h.hideonfirststart && "frame_1" === M && h.frames[M].timeline.waitoncall && (h.hideonfirststart = !0), v && "waiting" === h.frames[M].timeline.callstate && "preset" === e.mode && 1 != h.firstTimeRendered) {
                if (h._isstatic && void 0 === h.currentframe) continue;
                T = !0, h.firstTimeRendered = !0;
              } else if ("skiprest" === v || "called" !== h.frames[M].timeline.callstate && v && e.toframe !== M) continue;

              if ("frame_999" !== M || !1 !== y || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                h.fff = "frame_1" === M && ("trigger" !== e.mode || "frame_999" === h.currentframe || "frame_0" === h.currentframe || void 0 === h.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === h.leftstage && (h.fff = !1), T || (h.frames[M].timeline.callstate = "called", h.currentframe = M);
                var C = h.frames[M],
                    A = h.fff ? h.frames.frame_0 : void 0,
                    D = tpGS.gsap.timeline(),
                    P = tpGS.gsap.timeline(),
                    B = h.c,
                    G = void 0 !== C.sfx && b(C.sfx.effect, h.m, C.timeline.ease),
                    H = C.timeline.speed / 1e3,
                    F = 0,
                    z = S({
                  id: r,
                  frame: C,
                  layer: a,
                  ease: C.timeline.ease,
                  splitAmount: B.length,
                  target: M,
                  forcefilter: void 0 !== h.frames.frame_hover && void 0 !== h.frames.frame_hover.filter
                }),
                    W = h.fff ? S({
                  id: r,
                  frame: A,
                  layer: a,
                  ease: C.timeline.ease,
                  splitAmount: B.length,
                  target: "frame_0"
                }) : void 0,
                    E = void 0 !== C.mask ? S({
                  id: r,
                  frame: {
                    transform: {
                      x: C.mask.x,
                      y: C.mask.y
                    }
                  },
                  layer: a,
                  ease: z.ease,
                  target: "mask"
                }) : void 0,
                    N = void 0 !== E && h.fff ? S({
                  id: r,
                  frame: {
                    transform: {
                      x: A.mask.x,
                      y: A.mask.y
                    }
                  },
                  layer: a,
                  ease: z.ease,
                  target: "frommask"
                }) : void 0,
                    j = z.ease;

                if (z.force3D = !0, "block" === G.type) {
                  if (G.ft[0].background = C.sfx.fxc, G.ft[0].visibility = "visible", G.ft[1].visibility = "visible", window.isSafari11) {
                    var V = Math.max(W ? parseFloat(W.z) : 0, z ? parseFloat(z.z) : 0);
                    G.ft[0].z = Math.max(0, V + 1), G.ft[1].z = Math.max(0, V + 1), G.t.z = Math.max(0, V + 1), G.ft[1].transformPerspective = G.ft[0].transformPerspective = G.t.transformPerspective = z.transformPerspective;
                  }

                  D.add(tpGS.gsap.fromTo(G.bmask_in, H / 2, G.ft[0], G.ft[1], 0)), D.add(tpGS.gsap.fromTo(G.bmask_in, H / 2, G.ft[1], G.t, H / 2)), "frame_0" !== M && "frame_1" !== M || (W.opacity = 0);
                }

                if (void 0 !== C.color ? z.color = C.color : void 0 !== h.color && "npc" !== h.color[u] && (z.color = h.color[u]), void 0 !== A && void 0 !== A.color ? W.color = A.color : void 0 !== A && void 0 !== h.color && "npc" !== h.color[u] && (W.color = h.color[u]), void 0 !== C.bgcolor ? C.bgcolor.indexOf("gradient") >= 0 ? z.background = C.bgcolor : z.backgroundColor = C.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? z.background = h.bgcol : z.backgroundColor = h.bgcol), void 0 !== A && (void 0 !== A.bgcolor ? A.bgcolor.indexOf("gradient") >= 0 ? W.background = A.bgcolor : W.backgroundColor = A.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? W.background = h.bgcol : W.backgroundColor = h.bgcol)), void 0 !== h.splitText && !1 !== h.splitText) for (var X in t) {
                  if (void 0 !== C[t[X]] && !h.quickRendering) {
                    var U = h.splitText[t[X]],
                        Y = S({
                      id: r,
                      frame: C,
                      source: t[X],
                      ease: j,
                      layer: a,
                      splitAmount: U.length,
                      target: M + "_" + t[X]
                    }),
                        q = h.fff ? S({
                      id: r,
                      frame: A,
                      ease: Y.ease,
                      source: t[X],
                      layer: a,
                      splitAmount: U.length,
                      target: "frame_0_" + t[X]
                    }) : void 0,
                        Q = h.frames[M].dosplit ? void 0 === C[t[X]].delay ? .05 : C[t[X]].delay / 100 : 0;
                    h.color[u] === z.color && "frame_1" === M || (Y.color = z.color), void 0 !== W && h.color[u] !== W.color && (q.color = W.color), void 0 !== q && q.color !== z.color && (Y.color = z.color);
                    var J = o.clone(Y),
                        Z = h.fff ? o.clone(q) : void 0,
                        K = C[t[X]].dir;
                    delete J.dir, J.data = {
                      splitted: !0
                    }, J.stagger = "center" === K || "edge" === K ? d({
                      each: Q,
                      offset: Q / 2,
                      from: K
                    }) : {
                      each: Q,
                      from: K
                    }, J.duration = H, void 0 !== Z && (void 0 !== Z.opacity && (o.ISM || window.isSafari11) && (Z.opacity = Math.max(.001, parseFloat(Z.opacity))), delete Z.dir), h.fff ? D.add(P.fromTo(U, Z, J), 0) : D.add(P.to(U, J), 0), F = Math.max(F, U.length * Q);
                  }
                }
                if (H += F, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== z.transformPerspective ? z.transformPerspective : h.fff && void 0 !== W.transfromPerspective ? W.transfromPerspective : o[r].perspective : o[r].perspective), h.knowTransformPerspective = i, h.fsom && (void 0 !== z.filter || h.fff && void 0 !== W.filter) ? (E.filter = z.filter, E["-webkit-filter"] = z.filter, delete z.filter, delete z["-webkit-filter"], h.fff && void 0 !== W.filter && ((N = N || {}).filter = W.filter, N["-webkit-filter"] = W.filter, delete W.filter, delete W["-webkit-filter"]), h.forceFsom = !0) : h.forceFsom = !1, h.useMaskAnimation = h.pxundermask || void 0 !== E && (void 0 !== A && "hidden" === A.mask.overflow || "hidden" === C.mask.overflow), h.useMaskAnimation || h.forceFsom) h.useMaskAnimation ? D.add(tpGS.gsap.to(h.m, .001, {
                  overflow: "hidden"
                }), 0) : D.add(tpGS.gsap.to(h.m, .001, {
                  overflow: "visible"
                }), 0), "column" === h.type && h.cbgexists && h.useMaskAnimation && D.add(tpGS.gsap.to(h.cbgmask, .001, {
                  overflow: "hidden"
                }), 0), h.btrans && (N && (N.rotationX = h.btrans.rX, N.rotationY = h.btrans.rY, N.rotationZ = h.btrans.rZ, N.opacity = h.btrans.o), E.rotationX = h.btrans.rX, E.rotationY = h.btrans.rY, E.rotationZ = h.btrans.rZ, E.opacity = h.btrans.o), h.fff ? D.add(tpGS.gsap.fromTo(void 0 !== h.m && void 0 !== h.cbgmask ? [h.m, h.cbgmask] : void 0 !== h.m ? h.m : h.cbgmask, H, o.clone(N), o.clone(E)), .001) : D.add(tpGS.gsap.to(void 0 !== h.m && void 0 !== h.cbgmask ? [h.m, h.cbgmask] : void 0 !== h.m ? h.m : h.cbgmask, H, o.clone(E)), .001);else if (void 0 !== h.btrans) {
                  var $ = {
                    x: 0,
                    y: 0,
                    filter: "none",
                    opacity: h.btrans.o,
                    rotationX: h.btrans.rX,
                    rotationY: h.btrans.rY,
                    rotationZ: h.btrans.rZ,
                    overflow: "visible"
                  };
                  0 === h.btrans.rX && 0 == h.btrans.rY || (h.maskHasPerspective = !0, $.transformPerspective = i), D.add(tpGS.gsap.to(h.m, .001, $), 0);
                } else D.add(tpGS.gsap.to(h.m, .001, {
                  clearProps: "transform",
                  overflow: "hidden" == h.ofHidOnHov ? "hidden" : "visible"
                }), 0);
                z.force3D = "auto", h.fff ? (z.visibility = "visible", void 0 !== h.cbg && D.fromTo(h.cbg, H, W, z, 0), o[r].BUG_safari_clipPath && (W.clipPath || z.clipPath || h.spike), H = H > 0 ? H - .001 : H, void 0 !== h.cbg && "column" === h.type ? D.fromTo(B, H, s(W), s(z), 0) : D.fromTo(B, H, W, z, 0), D.invalidate()) : ("frame_999" !== h.frame && (z.visibility = "visible"), void 0 !== h.cbg && D.to(h.cbg, H, z, 0), void 0 !== h.cbg && "column" === h.type ? D.to(B, H, s(z), 0) : D.to(B, H, z, 0)), void 0 !== j && "object" != _typeof(j) && "function" != typeof j && j.indexOf("SFXBounce") >= 0 && D.to(B, H, {
                  scaleY: .5,
                  scaleX: 1.3,
                  ease: z.ease + "-squash",
                  transformOrigin: "bottom"
                }, 1e-4);
                var ee = "trigger" !== e.mode && (!0 !== v && "skiprest" !== v || "rebuild" !== e.mode) || e.frame === M || void 0 === C.timeline.start || !o.isNumeric(C.timeline.start) ? "+=0" === C.timeline.start || void 0 === C.timeline.start ? "+=0.001" : parseInt(C.timeline.start, 0) / 1e3 : "+=" + parseInt(C.timeline.startRelative, 0) / 1e3;
                h.timeline.addLabel(M, ee), h.timeline.add(D, ee), h.timeline.addLabel(M + "_end", "+=0.01"), D.eventCallback("onStart", c, [{
                  id: r,
                  frame: M,
                  L: a,
                  tPE: i
                }]), "true" == h.animationonscroll || 1 == h.animationonscroll ? (D.eventCallback("onUpdate", p, [{
                  id: r,
                  frame: M,
                  L: a
                }]), D.smoothChildTiming = !0) : D.eventCallback("onUpdate", p, [{
                  id: r,
                  frame: M,
                  L: a
                }]), D.eventCallback("onComplete", g, [{
                  id: r,
                  frame: M,
                  L: a,
                  tPE: i
                }]);
              }
            }
          }
        }

        if (void 0 !== h.frames.loop) {
          var te = parseInt(h.frames.loop.timeline.speed, 0) / 1e3,
              ie = parseInt(h.frames.loop.timeline.start) / 1e3 || 0,
              ae = "trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame ? .2 : 0,
              re = ie + ae;
          h.loop = {
            root: tpGS.gsap.timeline({}),
            preset: tpGS.gsap.timeline({}),
            move: tpGS.gsap.timeline({
              repeat: -1,
              yoyo: h.frames.loop.timeline.yoyo_move
            }),
            rotate: tpGS.gsap.timeline({
              repeat: -1,
              yoyo: h.frames.loop.timeline.yoyo_rotate
            }),
            scale: tpGS.gsap.timeline({
              repeat: -1,
              yoyo: h.frames.loop.timeline.yoyo_scale
            }),
            filter: tpGS.gsap.timeline({
              repeat: -1,
              yoyo: h.frames.loop.timeline.yoyo_filter
            })
          };
          var oe = h.frames.loop.frame_0,
              se = h.frames.loop.frame_999,
              ne = "blur(" + parseInt(oe.blur || 0, 0) + "px) grayscale(" + parseInt(oe.grayscale || 0, 0) + "%) brightness(" + parseInt(oe.brightness || 100, 0) + "%)",
              le = "blur(" + (se.blur || 0) + "px) grayscale(" + (se.grayscale || 0) + "%) brightness(" + (se.brightness || 100) + "%)";

          if (h.loop.root.add(h.loop.preset, 0), h.loop.root.add(h.loop.move, ae), h.loop.root.add(h.loop.rotate, ae), h.loop.root.add(h.loop.scale, ae), h.loop.root.add(h.loop.filter, ae), "blur(0px) grayscale(0%) brightness(100%)" === ne && "blur(0px) grayscale(0%) brightness(100%)" === le && (ne = "none", le = "none"), se.originX = oe.originX, se.originY = oe.originY, se.originZ = oe.originZ, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType && void 0 !== z ? void 0 !== z.transformPerspective ? z.transformPerspective : h.fff && void 0 !== W.transfromPerspective ? W.transfromPerspective : o[r].perspective : o[r].perspective), h.frames.loop.timeline.curved) {
            var de = parseInt(h.frames.loop.timeline.radiusAngle, 0) || 0,
                ce = [{
              x: (oe.x - oe.xr) * o[r].CM.w,
              y: 0,
              z: (oe.z - oe.zr) * o[r].CM.w
            }, {
              x: 0,
              y: (oe.y + oe.yr) * o[r].CM.w,
              z: 0
            }, {
              x: (se.x + se.xr) * o[r].CM.w,
              y: 0,
              z: (se.z + se.zr) * o[r].CM.w
            }, {
              x: 0,
              y: (se.y - se.yr) * o[r].CM.w,
              z: 0
            }],
                pe = {
              type: "thru",
              curviness: h.frames.loop.timeline.curviness,
              path: [],
              autoRotate: h.frames.loop.timeline.autoRotate
            };

            for (var ge in ce) {
              ce.hasOwnProperty(ge) && (pe.path[ge] = ce[de], de = ++de == ce.length ? 0 : de);
            }

            ("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, ae, {
              "-webkit-filter": ne,
              filter: ne,
              x: 0,
              y: 0,
              z: 0,
              minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
              minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
              scaleX: 1,
              scaleY: 1,
              skewX: 0,
              skewY: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              transformPerspective: i,
              transformOrigin: se.originX + " " + se.originY + " " + se.originZ,
              opacity: 1
            }, l({
              x: pe.path[3].x,
              y: pe.path[3].y,
              z: pe.path[3].z,
              scaleX: oe.scaleX,
              skewX: oe.skewX,
              skewY: oe.skewY,
              scaleY: oe.scaleY,
              rotationX: oe.rotationX,
              rotationY: oe.rotationY,
              rotationZ: oe.rotationZ,
              "-webkit-filter": ne,
              filter: ne,
              ease: "sine.inOut",
              opacity: oe.opacity
            }), 0), n(pe) && h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? te / 2 : te, {
              motionPath: pe,
              ease: h.frames.loop.timeline.ease
            });
          } else ("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, ae, {
            "-webkit-filter": ne,
            filter: ne,
            x: 0,
            y: 0,
            z: 0,
            minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
            minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            transformPerspective: i,
            transformOrigin: se.originX + " " + se.originY + " " + se.originZ,
            opacity: 1
          }, l({
            x: oe.x * o[r].CM.w,
            y: oe.y * o[r].CM.w,
            z: oe.z * o[r].CM.w,
            scaleX: oe.scaleX,
            skewX: oe.skewX,
            skewY: oe.skewY,
            scaleY: oe.scaleY,
            rotationX: oe.rotationX,
            rotationY: oe.rotationY,
            rotationZ: oe.rotationZ,
            ease: "sine.out",
            opacity: oe.opacity,
            "-webkit-filter": ne,
            filter: ne
          }), 0), h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? te / 2 : te, {
            x: se.x * o[r].CM.w,
            y: se.y * o[r].CM.w,
            z: se.z * o[r].CM.w,
            ease: h.frames.loop.timeline.ease
          });

          h.loop.rotate.to(h.lp, h.frames.loop.timeline.yoyo_rotate ? te / 2 : te, {
            rotationX: se.rotationX,
            rotationY: se.rotationY,
            rotationZ: se.rotationZ,
            ease: h.frames.loop.timeline.ease
          }), h.loop.scale.to(h.lp, h.frames.loop.timeline.yoyo_scale ? te / 2 : te, l({
            scaleX: se.scaleX,
            scaleY: se.scaleY,
            skewX: se.skewX,
            skewY: se.skewY,
            ease: h.frames.loop.timeline.ease
          }));
          var ue = {
            opacity: se.opacity || 1,
            ease: h.frames.loop.timeline.ease,
            "-webkit-filter": le,
            filter: le
          };
          h.loop.filter.to(h.lp, h.frames.loop.timeline.yoyo_filter ? te / 2 : te, ue), h.timeline.add(h.loop.root, re);
        }

        if (void 0 !== h.frames.frame_hover && ("start" === e.mode || void 0 === h.hoverframeadded)) {
          h.hoverframeadded = !0;
          var he = h.frames.frame_hover.timeline.speed / 1e3;
          he = 0 === he ? 1e-5 : he, h.cachedHoverSpeed = he, h.hoverlistener || (h.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === h.type && void 0 !== h.cbg ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function (e) {
            if (h.mouseIsOver = !0, 1 != h.ignoreHoverFrames && ("mousemove" !== e.type || !0 !== h.ignoremousemove)) {
              if (h.animationonscroll || h.readyForHover) {
                if (h.elementHovered = !0, h.hovertimeline || (h.hovertimeline = tpGS.gsap.timeline({
                  paused: !0
                })), 0 == h.hovertimeline.progress() && (void 0 === h.lastHoveredTimeStamp || new Date().getTime() - h.lastHoveredTimeStamp > 150) && (h.ignoremousemove = !0, h.ofHidOnHov = h.frames.frame_hover.mask ? "hidden" : "visible", h.hovertimeline.to(void 0 !== h.m && void 0 !== h.cbgmask ? [h.m, h.cbgmask] : void 0 !== h.m ? h.m : h.cbgmask, he, {
                  overflow: h.ofHidOnHov
                }, 0), "column" === h.type && null != h.cbg && h.hovertimeline.to(h.cbg, he, o.clone(o.convertHoverTransform(h.frames.frame_hover, h.cbg, {
                  bgCol: h.bgcol,
                  bg: h.styleProps.background
                })), 0), "text" !== h.type && "button" !== h.type || void 0 === h.splitText || !1 === h.splitText || h.hovertimeline.to([h.splitText.lines, h.splitText.words, h.splitText.chars], he, {
                  color: h.frames.frame_hover.color,
                  ease: h.frames.frame_hover.transform.ease
                }, 0), "column" === h.type ? h.hovertimeline.to(h.c, he, s(o.clone(o.convertHoverTransform(h.frames.frame_hover, h.c, {
                  bgCol: h.bgcol,
                  bg: h.styleProps.background
                }))), 0) : h.hovertimeline.to(h.c, he, o.clone(o.convertHoverTransform(h.frames.frame_hover, h.c, {
                  bgCol: h.bgcol,
                  bg: h.styleProps.background
                })), 0), "svg" === h.type)) {
                  h.svgHTemp = o.clone(h.svgH), delete h.svgHTemp.svgAll;
                  var t = Array.isArray(h.svgHTemp.fill) ? h.svgHTemp.fill[o[r].level] : h.svgHTemp.fill;
                  h.svgHTemp.fill = t, h.hovertimeline.to(h.svg, he, h.svgHTemp, 0), h.svg.length <= 0 && (h.svg = a.find("svg")), h.svgPath.length <= 0 && (h.svgPath = h.svg.find(h.svgI.svgAll ? "path, circle, ellipse, line, polygon, polyline, rect" : "path")), h.hovertimeline.to(h.svgPath, he, {
                    fill: t
                  }, 0);
                }

                h.hovertimeline.play();
              }

              h.lastHoveredTimeStamp = new Date().getTime();
            }
          }), o.document.on("mouseleave", ("column" === h.type && void 0 !== h.cbg ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function () {
            h.mouseIsOver = !1, 1 != h.ignoreHoverFrames && (h.elementHovered = !1, (h.animationonscroll || h.readyForHover) && void 0 !== h.hovertimeline && (h.hovertimeline.reverse(), h.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{
              id: r,
              L: a
            }])));
          }));
        }

        if (T || (h.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? h.currentframe : e.frame : h.lastRequestedMainFrame), void 0 !== e.totime ? h.tSTART = e.totime : void 0 !== m && void 0 === e.frame ? h.tSTART = m : void 0 !== e.frame ? h.tSTART = e.frame : h.tSTART = 0, 0 === h.tSTART && void 0 === h.startedAnimOnce && void 0 === h.leftstage && void 0 === h.startedAnimOnce && !0 === h.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, h.hideonfirststart = !1), "frame_999" !== h.tSTART && "frame_999" !== h.triggeredFrame || !h.leftstage && void 0 !== h.startedAnimOnce) {
          if ("true" != h.animationonscroll && 1 != h.animationonscroll ? h.timeline.play(h.tSTART) : h.timeline.time(h.tSTART), jQuery.inArray(h.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
            if (void 0 === h.childrenJS) for (var X in h.childrenJS = {}, o[r]._L) {
              void 0 !== o[r]._L[X]._lig && void 0 !== o[r]._L[X]._lig[0] && o[r]._L[X]._lig[0].id === a[0].id && o[r]._L[X]._lig[0].id !== o[r]._L[X].c[0].id && (h.childrenJS[o[r]._L[X].c[0].id] = o[r]._L[X].c);
            }
            e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
            var me = void 0 === e.totime ? void 0 !== h.frames[e.frame].timeline.startAbsolute ? parseInt(h.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== h.frames[e.frame].timeline.start ? o.isNumeric(h.frames[e.frame].timeline.start) ? parseInt(h.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
            if (!0 === e.updateChildren) for (var X in h.childrenJS) {
              h.childrenJS.hasOwnProperty(X) && o.renderLayerAnimation({
                layer: h.childrenJS[X],
                fastforward: !1,
                id: r,
                mode: "continue",
                updateChildren: !0,
                totime: me
              });
            } else for (var X in h.childrenJS) {
              h.childrenJS.hasOwnProperty(X) && o[r]._L[X].pausedTrueParrent && (o.renderLayerAnimation({
                layer: h.childrenJS[X],
                fastforward: !1,
                id: r,
                mode: "continue",
                updateChildren: !0,
                totime: me
              }), o[r]._L[X].pausedTrueParrent = !1);
            }
          }
        } else ;
      }
    }
  });

  var s = function s(e) {
    var t = o.clone(e);
    return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, delete t["backdrop-filter"], t;
  },
      n = function n(e) {
    if (void 0 !== e && void 0 !== e.path && Array.isArray(e.path)) {
      var t = 0,
          i = 0;

      for (var a in e.path) {
        !e.path.hasOwnProperty(a) || t > 0 || i > 0 || (t += e.path[a].x, i += e.path[a].y);
      }

      return 0 != t || 0 != i;
    }
  },
      l = function l(e) {
    return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e;
  },
      d = function d(e) {
    e.from = "edge" === e.from ? "edges" : e.from;
    var t = tpGS.gsap.utils.distribute(e);
    return function (i, a, r) {
      return t(i, a, r) + (i <= r.length / 2 ? 0 : e.offset || 0);
    };
  },
      c = function c(e) {
    o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
    var t = o[e.id]._L[e.L[0].id],
        i = t.hovertimeline;
    i && i.time() > 0 && (i.pause(), i.time(0), i.kill(), delete t.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
    var a = {
      layer: e.L
    };
    o[e.id]._L[e.L[0].id].tweenOnStart = !0, o[e.id]._L[e.L[0].id].animatingFrame = e.frame, o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, o[e.id]._L[e.L[0].id].tweenDirection = 1 == o[e.id]._L[e.L[0].id].animationonscroll || "true" == o[e.id]._L[e.L[0].id].animationonscroll ? o[e.id]._L[e.L[0].id].animteToTimeCache > o[e.id]._L[e.L[0].id].animteToTime ? -1 : 1 : void 0, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, void 0 === o[e.id]._L[e.L[0].id].tweenDirection || -1 != o[e.id]._L[e.L[0].id].tweenDirection || "frame_0" !== e.frame && "frame_1" != e.frame || "column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type ? ("frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], {
      opacity: 1
    }), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", o[e.id]._L[e.L[0].id]._ingroup && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id] && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore")) : (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", window.requestAnimationFrame(function () {
      o.requestLayerUpdates(e.id, "leftstage", e.L[0].id);
    })), a.id = e.id, a.layerid = e.L[0].id, a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id);
  },
      p = function p(e) {
    o[e.id]._L[e.L[0].id].animatingFrame = e.frame, o[e.id]._L[e.L[0].id].tweenOnStart = !1, o[e.id]._L[e.L[0].id].tweenOnEnd = !1, "frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function () {
      o.requestLayerUpdates(e.id, "update", e.L[0].id);
    }));
  },
      g = function g(e) {
    var t = !0;

    if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
      var i = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
          a = jQuery.inArray(i, o[e.id]._L[e.L[0].id].ford);

      a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : i, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[i] && (o[e.id]._L[e.L[0].id].timezone = {
        from: parseInt(o[e.id]._L[e.L[0].id].frames[i].timeline.startAbsolute, 0),
        to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0)
      });
    }

    if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
      var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
      o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
        opacity: r - .001,
        delay: .05
      }), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
        opacity: r,
        delay: .1
      });
    }

    o[e.id]._L[e.L[0].id].animatingFrame = "done", o[e.id]._L[e.L[0].id].animatedFrame = e.frame, o[e.id]._L[e.L[0].id].tweenOnStart = !1, o[e.id]._L[e.L[0].id].tweenOnEnd = !0, o[e.id]._L[e.L[0].id].tweenDirection = 1 == o[e.id]._L[e.L[0].id].animationonscroll || "true" == o[e.id]._L[e.L[0].id].animationonscroll ? o[e.id]._L[e.L[0].id].animteToTimeCache > o[e.id]._L[e.L[0].id].animteToTime ? -1 : 1 : void 0;
    var s = {};
    s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", t = !1, window.requestAnimationFrame(function () {
      o.requestLayerUpdates(e.id, "leftstage", e.L[0].id);
    })) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function () {
      o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE);
    })), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && void 0 !== o[e.id]._L[e.L[0].id].cbg && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, {
      visibility: "visible"
    }), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function () {
      o.resetVideo(e.L, e.id);
    }, 100)), o[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({
      layer: o[e.id]._L[e.L[0].id].c,
      frame: o[e.id]._L[e.L[0].id].layerLoop.from,
      updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children,
      mode: "continue",
      fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep,
      id: e.id
    });
  },
      u = function u(e) {
    if (void 0 === e) return "";
    var t = "";
    return o.isChrome8889 && 0 === e.blur && (e.blur = .05), t = void 0 !== e.blur ? "blur(" + (e.blur || 0) + "px)" : "", t += void 0 !== e.grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.grayscale || 0) + "%)" : "", "" === (t += void 0 !== e.brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.brightness || 100) + "%)" : "") ? "none" : t;
  },
      h = function h(e) {
    if (void 0 === e) return "";
    var t = "";
    return o.isChrome8889 && 0 === e.b_blur && (e.b_blur = .05), t = void 0 !== e.b_blur ? "blur(" + (e.b_blur || 0) + "px)" : "", t += void 0 !== e.b_grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.b_grayscale || 0) + "%)" : "", t += void 0 !== e.b_sepia ? (t.length > 0 ? " " : "") + "sepia(" + (e.b_sepia || 0) + "%)" : "", t += void 0 !== e.b_invert ? (t.length > 0 ? " " : "") + "invert(" + (e.b_invert || 0) + "%)" : "", "" === (t += void 0 !== e.b_brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.b_brightness || 100) + "%)" : "") ? "none" : t;
  },
      m = function m(e, t) {
    var i = (e = e.split("("))[0];
    return e.shift(), i + "(" + t + "deg, " + e.join("(");
  },
      v = function v(e) {
    if (-1 !== e.search("deg,")) {
      var t = e.split("deg,")[0];
      if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10);
    }

    return 180;
  },
      f = function f(e, t) {
    if (void 0 !== e && e.indexOf("oc:t") >= 0) return {};
    e = void 0 === e ? "" : e.split(";");
    var i = {
      fill: o.revToResp("#ffffff", o[t].rle),
      stroke: "transparent",
      "stroke-width": "0px",
      "stroke-dasharray": "0",
      "stroke-dashoffset": "0"
    };

    for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var r = e[a].split(":");

        switch (r[0]) {
          case "c":
            i.fill = o.revToResp(r[1], o[t].rle, void 0, "||");
            break;

          case "sw":
            i["stroke-width"] = r[1];
            break;

          case "sc":
            i.stroke = r[1];
            break;

          case "so":
            i["stroke-dashoffset"] = r[1];
            break;

          case "sa":
            i["stroke-dasharray"] = r[1];
            break;

          case "sall":
            i.svgAll = r[1];
        }
      }
    }

    return i;
  },
      y = function y(e) {
    return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e;
  },
      w = function w(e) {
    var t = o[e.id]._L[e.layer[0].id],
        i = !1;

    if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
      for (var a in t.frames) {
        if (void 0 !== t.frames[a].chars || void 0 !== t.frames[a].words || void 0 !== t.frames[a].lines) {
          i = !0;
          break;
        }
      }

      t.splitText = !!i && new tpGS.SplitText(t.c, {
        type: "lines,words,chars",
        wordsClass: "rs_splitted_words",
        linesClass: "rs_splitted_lines",
        charsClass: "rs_splitted_chars"
      });
    } else t.splitText = !1;
  },
      b = function b(e, t, i) {
    if (void 0 !== e && e.indexOf("block") >= 0) {
      var a = {};

      switch (0 === t[0].getElementsByClassName("tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? "power3.inOut" : i, a.ft = [{
        scaleY: 1,
        scaleX: 0,
        transformOrigin: "0% 50%"
      }, {
        scaleY: 1,
        scaleX: 1,
        ease: i,
        immediateRender: !1
      }], a.t = {
        scaleY: 1,
        scaleX: 0,
        transformOrigin: "100% 50%",
        ease: i,
        immediateRender: !1
      }, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
        case "blocktoleft":
        case "blockfromright":
          a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
          break;

        case "blockfromtop":
        case "blocktobottom":
          a.ft = [{
            scaleX: 1,
            scaleY: 0,
            transformOrigin: "50% 0%"
          }, {
            scaleX: 1,
            scaleY: 1,
            ease: i,
            immediateRender: !1
          }], a.t = {
            scaleX: 1,
            scaleY: 0,
            transformOrigin: "50% 100%",
            ease: i,
            immediateRender: !1
          };
          break;

        case "blocktotop":
        case "blockfrombottom":
          a.ft = [{
            scaleX: 1,
            scaleY: 0,
            transformOrigin: "50% 100%"
          }, {
            scaleX: 1,
            scaleY: 1,
            ease: i,
            immediateRender: !1
          }], a.t = {
            scaleX: 1,
            scaleY: 0,
            transformOrigin: "50% 0%",
            ease: i,
            immediateRender: !1
          };
      }

      return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a;
    }

    return !1;
  },
      _ = function _(e, t, i, a, r) {
    return 0 === o[r].sdir || void 0 === t ? e : ("mask" === i ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === i ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === i ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === i && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === t[a] || !1 === t[a] ? e : void 0 !== t && !0 === t[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * parseFloat(e) + (("" + e).indexOf("px") >= 0 ? "px" : ("" + e).indexOf("%") >= 0 ? "%" : "") : void 0);
  },
      S = function S(e) {
    var t,
        i = o[e.id]._L[e.layer[0].id],
        a = void 0 === e.source ? o.clone(e.frame.transform) : o.clone(e.frame[e.source]),
        r = {
      originX: "50%",
      originY: "50%",
      originZ: "0"
    },
        s = void 0 !== i._lig && void 0 !== o[e.id]._L[i._lig[0].id] ? o[e.id]._L[i._lig[0].id].eow : o[e.id].conw,
        n = void 0 !== i._lig && void 0 !== o[e.id]._L[i._lig[0].id] ? o[e.id]._L[i._lig[0].id].eoh : o[e.id].conh;

    for (var l in a) {
      if (a.hasOwnProperty(l)) {
        if (a[l] = "object" == _typeof(a[l]) ? a[l][o[e.id].level] : a[l], "inherit" === a[l] || "delay" === l || "direction" === l || "use" === l) delete a[l];else if ("originX" === l || "originY" === l || "originZ" === l) r[l] = a[l], delete a[l];else if (o.isNumeric(a[l], 0)) a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id);else if ("r" === a[l][0] && "a" === a[l][1] && "(" === a[l][3]) a[l] = a[l].replace("ran", "random");else if (a[l].indexOf("cyc(") >= 0) {
          var d = a[l].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
          a[l] = new function (e) {
            return tpGS.gsap.utils.wrap(d, void 0);
          }();
        } else if (a[l].indexOf("%") >= 0 && o.isNumeric(t = parseInt(a[l], 0))) a[l] = "x" === l ? _((i.eow || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : "y" === l ? _((i.eoh || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : a[l];else {
          a[l] = a[l].replace("[", "").replace("]", ""), a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id);
          var c = {
            t: 0,
            b: 0
          };

          switch ("row" === i.type && ("rev_row_zone_top" === i.zone && void 0 !== o[e.id].topZones[i.slideIndex] && void 0 !== o[e.id].topZones[i.slideIndex][0] ? c = {
            t: 0,
            b: 0
          } : "rev_row_zone_middle" === i.zone && void 0 !== o[e.id].middleZones[i.slideIndex] && void 0 !== o[e.id].middleZones[i.slideIndex][0] ? c = {
            t: Math.round(o[e.id].module.height / 2 - o[e.id].middleZones[i.slideIndex][0].offsetHeight / 2),
            b: Math.round(o[e.id].module.height / 2 + o[e.id].middleZones[i.slideIndex][0].offsetHeight / 2)
          } : "rev_row_zone_bottom" === i.zone && void 0 !== o[e.id].bottomZones[i.slideIndex] && void 0 !== o[e.id].bottomZones[i.slideIndex][0] && (c = {
            t: Math.round(o[e.id].module.height - o[e.id].bottomZones[i.slideIndex][0].offsetHeight),
            b: o[e.id].module.height + o[e.id].bottomZones[i.slideIndex][0].offsetHeight
          })), a[l]) {
            case "t":
            case "top":
              a[l] = 0 - (i.eoh || 0) - ("column" === i.type ? 0 : i.calcy || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - ("row" === i.type && void 0 !== i.marginTop ? i.marginTop[o[e.id].level] : 0) - c.b;
              break;

            case "b":
            case "bottom":
              a[l] = n - ("column" === i.type || "row" === i.type ? 0 : i.calcy || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - c.t;
              break;

            case "l":
            case "left":
              a[l] = 0 - ("row" === i.type ? i.pow : i.eow || 0) - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
              break;

            case "r":
            case "right":
              a[l] = s - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
              break;

            case "m":
            case "c":
            case "middle":
            case "center":
              a[l] = "x" === l ? _(s / 2 - ("column" === i.type ? 0 : i.calcx || 0) - (i.eow || 0) / 2, e.frame.reverse, e.target, l, e.id) : "y" === l ? _(n / 2 - ("column" === i.type ? 0 : i.calcy || 0) - (i.eoh || 0) / 2, e.frame.reverse, e.target, l, e.id) : a[l];
          }
        }
        "skewX" === l && void 0 !== a[l] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD)), "skewY" === l && void 0 !== a[l] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD));
      }
    }

    if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== i.clipPath && i.clipPath.use) {
      a.clipB = null == a.clipB ? 100 : a.clipB;
      var p = "rectangle" == i.clipPath.type,
          g = parseInt(a.clip, 0),
          m = 100 - parseInt(a.clipB, 0),
          v = Math.round(g / 2);

      switch (i.clipPath.origin) {
        case "invh":
          a.clipPath = "polygon(0% 0%, 0% 100%, " + g + "% 100%, " + g + "% 0%, 100% 0%, 100% 100%, " + m + "% 100%, " + m + "% 0%, 0% 0%)";
          break;

        case "invv":
          a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + g + "%, 100% " + g + "%, 100% 100%, 0% 100%, 0% " + m + "%, 100% " + m + "%, 100% 0%)";
          break;

        case "cv":
          a.clipPath = p ? "polygon(" + (50 - v) + "% 0%, " + (50 + v) + "% 0%, " + (50 + v) + "% 100%, " + (50 - v) + "% 100%)" : "circle(" + g + "% at 50% 50%)";
          break;

        case "ch":
          a.clipPath = p ? "polygon(0% " + (50 - v) + "%, 0% " + (50 + v) + "%, 100% " + (50 + v) + "%, 100% " + (50 - v) + "%)" : "circle(" + g + "% at 50% 50%)";
          break;

        case "l":
          a.clipPath = p ? "polygon(0% 0%, " + g + "% 0%, " + g + "% 100%, 0% 100%)" : "circle(" + g + "% at 0% 50%)";
          break;

        case "r":
          a.clipPath = p ? "polygon(" + (100 - g) + "% 0%, 100% 0%, 100% 100%, " + (100 - g) + "% 100%)" : "circle(" + g + "% at 100% 50%)";
          break;

        case "t":
          a.clipPath = p ? "polygon(0% 0%, 100% 0%, 100% " + g + "%, 0% " + g + "%)" : "circle(" + g + "% at 50% 0%)";
          break;

        case "b":
          a.clipPath = p ? "polygon(0% 100%, 100% 100%, 100% " + (100 - g) + "%, 0% " + (100 - g) + "%)" : "circle(" + g + "% at 50% 100%)";
          break;

        case "lt":
          a.clipPath = p ? "polygon(0% 0%," + 2 * g + "% 0%, 0% " + 2 * g + "%)" : "circle(" + g + "% at 0% 0%)";
          break;

        case "lb":
          a.clipPath = p ? "polygon(0% " + (100 - 2 * g) + "%, 0% 100%," + 2 * g + "% 100%)" : "circle(" + g + "% at 0% 100%)";
          break;

        case "rt":
          a.clipPath = p ? "polygon(" + (100 - 2 * g) + "% 0%, 100% 0%, 100% " + 2 * g + "%)" : "circle(" + g + "% at 100% 0%)";
          break;

        case "rb":
          a.clipPath = p ? "polygon(" + (100 - 2 * g) + "% 100%, 100% 100%, 100% " + (100 - 2 * g) + "%)" : "circle(" + g + "% at 100% 100%)";
          break;

        case "clr":
          a.clipPath = p ? "polygon(0% 0%, 0% " + g + "%, " + (100 - g) + "% 100%, 100% 100%, 100% " + (100 - g) + "%, " + g + "% 0%)" : "circle(" + g + "% at 50% 50%)";
          break;

        case "crl":
          a.clipPath = p ? "polygon(0% " + (100 - g) + "%, 0% 100%, " + g + "% 100%, 100% " + g + "%, 100% 0%, " + (100 - g) + "% 0%)" : "circle(" + g + "% at 50% 50%)";
      }

      !0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB;
    } else delete a.clip;

    return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a.filter = u(e.frame.filter), a["-webkit-filter"] = a.filter, o.useBackdrop && (window.isSafari11 ? a["-webkit-backdrop-filter"] = h(e.frame.filter) : a["backdrop-filter"] = h(e.frame.filter)), window.isSafari11 && void 0 !== a.filter && void 0 === a[null == i.iOSFix || "d" == i.iOSFix ? "shape" == i.type ? "z" : "x" : i.iOSFix] && void 0 !== e.frame.filter && void 0 !== e.frame.filter.blur && (a[null == i.iOSFix || "d" == i.iOSFix ? "shape" == i.type ? "z" : "x" : i.iOSFix] = 1e-4)), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a.filter = u(e.frame[e.source]), a["-webkit-filter"] = a.filter), delete a.grayscale, delete a.blur, delete a.brightness), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a;
  },
      x = function x(e, t, i, a, r) {
    var s,
        n,
        l = {},
        d = {},
        c = {};

    for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, l.x = 0, l.y = 0, l.z = 0, l.xr = 0, l.yr = 0, l.zr = 0, l.scaleX = 1, l.scaleY = 1, l.originX = "50%", l.originY = "50%", l.originZ = "0", l.rotationX = "0deg", l.rotationY = "0deg", l.rotationZ = "0deg") : (c.speed = 300, i ? c.ease = "default" : l.ease = "default"), "sfx" === r && (l.fxc = "#ffffff"), e = e.split(";")) {
      if (e.hasOwnProperty(p)) {
        var g = e[p].split(":");

        switch (g[0]) {
          case "u":
            l.use = "true" === g[1] || "t" === g[1] || fasle;
            break;

          case "c":
            s = g[1];
            break;

          case "fxc":
            l.fxc = g[1];
            break;

          case "bgc":
            n = g[1];
            break;

          case "auto":
            l.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
            break;

          case "o":
            l.opacity = g[1];
            break;

          case "oX":
            l.originX = g[1];
            break;

          case "oY":
            l.originY = g[1];
            break;

          case "oZ":
            l.originZ = g[1];
            break;

          case "sX":
            l.scaleX = g[1];
            break;

          case "sY":
            l.scaleY = g[1];
            break;

          case "skX":
            l.skewX = g[1];
            break;

          case "skY":
            l.skewY = g[1];
            break;

          case "rX":
            l.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
            break;

          case "rY":
            l.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
            break;

          case "rZ":
            l.rotationZ = g[1];
            break;

          case "sc":
            l.color = g[1];
            break;

          case "se":
            l.effect = g[1];
            break;

          case "bos":
            l.borderStyle = g[1];
            break;

          case "boc":
            l.borderColor = g[1];
            break;

          case "td":
            l.textDecoration = g[1];
            break;

          case "zI":
            l.zIndex = g[1];
            break;

          case "tp":
            l.transformPerspective = "isometric" === o[t].perspectiveType ? 0 : "global" === o[t].perspectiveType ? o[t].perspective : g[1];
            break;

          case "cp":
            l.clip = parseInt(g[1], 0);
            break;

          case "cpb":
            l.clipB = parseInt(g[1], 0);
            break;

          case "aR":
            c.autoRotate = "t" == g[1];
            break;

          case "rA":
            c.radiusAngle = g[1];
            break;

          case "yyf":
            c.yoyo_filter = "t" == g[1];
            break;

          case "yym":
            c.yoyo_move = "t" == g[1];
            break;

          case "yyr":
            c.yoyo_rotate = "t" == g[1];
            break;

          case "yys":
            c.yoyo_scale = "t" == g[1];
            break;

          case "crd":
            c.curved = "t" == g[1];
            break;

          case "x":
            l.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
            break;

          case "y":
            l.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
            break;

          case "z":
            l.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle), 0 != g[1] && o.addSafariFix(t);
            break;

          case "bow":
            l.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
            break;

          case "bor":
            l.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
            break;

          case "m":
            l.mask = "t" === g[1] || "f" !== g[1] && g[1];
            break;

          case "iC":
            l.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
            break;

          case "xR":
            l.xr = parseInt(g[1], 0), o.addSafariFix(t);
            break;

          case "yR":
            l.yr = parseInt(g[1], 0), o.addSafariFix(t);
            break;

          case "zR":
            l.zr = parseInt(g[1], 0);
            break;

          case "iosfx":
            "default" !== g[1] && "d" !== g[1] && (d.iosfx = g[1]);
            break;

          case "blu":
            "loop" === r ? l.blur = parseInt(g[1], 0) : d.blur = parseInt(g[1], 0);
            break;

          case "gra":
            "loop" === r ? l.grayscale = parseInt(g[1], 0) : d.grayscale = parseInt(g[1], 0);
            break;

          case "bri":
            "loop" === r ? l.brightness = parseInt(g[1], 0) : d.brightness = parseInt(g[1], 0);
            break;

          case "bB":
            d.b_blur = parseInt(g[1], 0);
            break;

          case "bG":
            d.b_grayscale = parseInt(g[1], 0);
            break;

          case "bR":
            d.b_brightness = parseInt(g[1], 0);
            break;

          case "bI":
            d.b_invert = parseInt(g[1], 0);
            break;

          case "bS":
            d.b_sepia = parseInt(g[1], 0);
            break;

          case "sp":
            c.speed = parseInt(g[1], 0);
            break;

          case "d":
            l.delay = parseInt(g[1], 0);
            break;

          case "crns":
            c.curviness = parseInt(g[1], 0);
            break;

          case "st":
            c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
            break;

          case "sA":
            c.startAbsolute = g[1];
            break;

          case "sR":
            c.startRelative = g[1];
            break;

          case "e":
            i ? c.ease = g[1] : l.ease = g[1];
            break;

          default:
            g[0].length > 0 && (l[g[0]] = "t" === g[1] || "f" !== g[1] && g[1]);
        }
      }
    }

    var u = {
      timeline: c
    };
    return jQuery.isEmptyObject(d) || ("split" === r ? l = jQuery.extend(!0, l, d) : u.filter = d), "split" === r && (l.dir = void 0 === l.dir ? "start" : "backward" === l.dir ? "end" : "middletoedge" === l.dir ? "center" : "edgetomiddle" === l.dir ? "edge" : l.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = l, u;
  },
      k = function k(e, t) {
    var i = {},
        a = 0;

    if (void 0 === o[t]._rdF0) {
      var r = x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
      o[t]._rdF0 = o[t]._rdF1 = {
        transform: x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform,
        mask: x("x:0;y:0", t, !0).transform,
        chars: jQuery.extend(!0, {
          blur: 0,
          grayscale: 0,
          brightness: 100
        }, r),
        words: jQuery.extend(!0, {
          blur: 0,
          grayscale: 0,
          brightness: 100
        }, r),
        lines: jQuery.extend(!0, {
          blur: 0,
          grayscale: 0,
          brightness: 100
        }, r)
      }, o[t]._rdF1.transform.opacity = o[t]._rdF1.chars.opacity = o[t]._rdF1.words.opacity = o[t]._rdF1.lines.opacity = o[t]._rdF1.transform.scaleX = o[t]._rdF1.chars.scaleX = o[t]._rdF1.words.scaleX = o[t]._rdF1.lines.scaleX = o[t]._rdF1.transform.scaleY = o[t]._rdF1.chars.scaleY = o[t]._rdF1.words.scaleY = o[t]._rdF1.lines.scaleY = 1;
    }

    for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford) {
      if (e.ford.hasOwnProperty(a)) {
        var s = e.ford[a];

        if (e[s]) {
          if (i[s] = x(e[s], t, !0), void 0 !== i[s].bgcolor && (e.bgcolinuse = !0), o[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== i[s].transform.clip) {
            var n = "rectangle" === e.clipPath.type ? 100 - parseInt(i[s].transform.clip) : 100 - Math.min(100, 2 * parseInt(i[s].transform.clip));

            switch (e.clipPath.origin) {
              case "clr":
              case "rb":
              case "rt":
              case "r":
                e[s + "_mask"] = "u:t;x:" + n + "%;y:0px;", i[s].transform.x = o.revToResp("-" + n + "%", o[t].rle);
                break;

              case "crl":
              case "lb":
              case "lt":
              case "cv":
              case "l":
                e[s + "_mask"] = "u:t;x:-" + n + "%;y:0px;", i[s].transform.x = o.revToResp(n + "%", o[t].rle);
                break;

              case "ch":
              case "t":
                e[s + "_mask"] = "u:t;y:-" + n + "%;y:0px;", i[s].transform.y = o.revToResp(n + "%", o[t].rle);
                break;

              case "b":
                e[s + "_mask"] = "u:t;y:" + n + "%;y:0px;", i[s].transform.y = o.revToResp("-" + n + "%", o[t].rle);
            }

            delete i[s].transform.clip, delete i[s].transform.clipB;
          }

          e[s + "_mask"] && (i[s].mask = x(e[s + "_mask"], t).transform), null != i[s].mask && i[s].mask.use ? (i[s].mask.x = void 0 === i[s].mask.x ? 0 : i[s].mask.x, i[s].mask.y = void 0 === i[s].mask.y ? 0 : i[s].mask.y, delete i[s].mask.use, i[s].mask.overflow = "hidden") : i[s].mask = {
            ease: "default",
            overflow: "visible"
          }, e[s + "_chars"] && (i[s].chars = x(e[s + "_chars"], t, void 0, void 0, "split").transform), e[s + "_words"] && (i[s].words = x(e[s + "_words"], t, void 0, void 0, "split").transform), e[s + "_lines"] && (i[s].lines = x(e[s + "_lines"], t, void 0, void 0, "split").transform), (e[s + "_chars"] || e[s + "_words"] || e[s + "_lines"]) && (i[s].dosplit = !0), i.frame_0 = void 0 === i.frame_0 ? {
            transform: {}
          } : i.frame_0, i[s].transform.auto && (i[s].transform = o.clone(i.frame_0.transform), i[s].transform.opacity = void 0 === i[s].transform.opacity ? 0 : i[s].transform.opacity, void 0 !== i.frame_0.filter && (i[s].filter = o.clone(i.frame_0.filter)), void 0 !== i.frame_0.mask && (i[s].mask = o.clone(i.frame_0.mask)), void 0 !== i.frame_0.chars && (i[s].chars = o.clone(i.frame_0.chars)), void 0 !== i.frame_0.words && (i[s].words = o.clone(i.frame_0.words)), void 0 !== i.frame_0.lines && (i[s].lines = o.clone(i.frame_0.lines)), void 0 === i.frame_0.chars && void 0 === i.frame_0.words && void 0 === i.frame_0.lines || (i[s].dosplit = !0)), e[s + "_sfx"] && (i[s].sfx = x(e[s + "_sfx"], t, !1, void 0, "sfx").transform), e[s + "_reverse"] && (i[s].reverse = x(e[s + "_reverse"], t, !1, void 0, "reverse").transform);
        }
      }
    }

    if (i.frame_0.dosplit && (i.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (i.frame_hover = x(void 0 === e.frame_hover ? "" : e.frame_hover, t), !o.ISM || "true" != i.frame_hover.transform.instantClick && 1 != i.frame_hover.transform.instantClick ? (delete i.frame_hover.transform.instantClick, i.frame_hover.transform.color = i.frame_hover.color, void 0 === i.frame_hover.transform.color && delete i.frame_hover.transform.color, void 0 !== i.frame_hover.bgcolor && i.frame_hover.bgcolor.indexOf("gradient") >= 0 ? i.frame_hover.transform.backgroundImage = i.frame_hover.bgcolor : void 0 !== i.frame_hover.bgcolor && (i.frame_hover.transform.backgroundColor = i.frame_hover.bgcolor), void 0 !== i.frame_hover.bgcolor && (e.bgcolinuse = !0), i.frame_hover.transform.opacity = void 0 === i.frame_hover.transform.opacity ? 1 : i.frame_hover.transform.opacity, i.frame_hover.mask = void 0 !== i.frame_hover.transform.mask && i.frame_hover.transform.mask, delete i.frame_hover.transform.mask, void 0 !== i.frame_hover.transform && ((i.frame_hover.transform.borderWidth || i.frame_hover.transform.borderStyle) && (i.frame_hover.transform.borderColor = void 0 === i.frame_hover.transform.borderColor ? "transparent" : i.frame_hover.transform.borderColor), "none" !== i.frame_hover.transform.borderStyle && void 0 === i.frame_hover.transform.borderWidth && (i.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== i.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== i.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(i.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== i.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(i.frame_hover.transform.borderStyle, 4, 0)))) : delete i.frame_hover), void 0 !== e.tloop) {
      e.layerLoop = {
        from: "frame_1",
        to: "frame_999",
        repeat: -1,
        keep: !0,
        children: !0
      };
      var l = e.tloop.split(";");

      for (var a in l) {
        if (l.hasOwnProperty(a)) {
          var d = l[a].split(":");

          switch (d[0]) {
            case "f":
              e.layerLoop.from = d[1];
              break;

            case "t":
              e.layerLoop.to = d[1];
              break;

            case "k":
              e.layerLoop.keep = d[1];
              break;

            case "r":
              e.layerLoop.repeat = parseInt(d[1], 0);
              break;

            case "c":
              e.layerLoop.children = d[1];
          }
        }
      }

      e.layerLoop.count = 0;
    }

    for (var a in (e.loop_0 || e.loop_999) && (i.loop = x(e.loop_999, t, !0, "frame_999", "loop"), i.loop.frame_0 = x(e.loop_0 || "", t, !1, void 0, "loop").transform), i.frame_0.transform.opacity = void 0 === i.frame_0.transform.opacity ? 0 : i.frame_0.transform.opacity, i.frame_1.transform.opacity = void 0 === i.frame_1.transform.opacity ? 1 : i.frame_1.transform.opacity, i.frame_999.transform.opacity = void 0 === i.frame_999.transform.opacity ? "inherit" : i.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (i.frame_0.transform.clip = void 0 === i.frame_0.transform.clip ? 100 : parseInt(i.frame_0.transform.clip), i.frame_1.transform.clip = void 0 === i.frame_1.transform.clip ? 100 : parseInt(i.frame_1.transform.clip)), e.resetfilter = !1, e.useFilter = {
      blur: !1,
      grayscale: !1,
      brightness: !1,
      b_blur: !1,
      b_grayscale: !1,
      b_brightness: !1,
      b_invert: !1,
      b_sepia: !1
    }, i) {
      void 0 !== i[a].filter && (e.resetfilter = !0, e.useFilter = O(e.useFilter, i[a].filter));
    }

    if (!0 !== e.resetFilter && void 0 !== i.frame_hover && (e.useFilter = O(e.useFilter, i.frame_hover)), e.resetfilter) for (var a in i.frame_0.filter = o.clone(i.frame_0.filter), i.frame_0.filter = L(e.useFilter, o.clone(i.frame_0.filter)), i) {
      void 0 !== i[a].filter && "frame_1" !== a && "frame_0" !== a && (i[a].filter = o.clone(i[a].filter), i[a].filter = L(e.useFilter, o.clone(i[a].filter)));
    }
    return void 0 !== i.frame_0.filter && (i.frame_1.filter = o.clone(i.frame_1.filter), void 0 !== i.frame_0.filter.blur && 0 !== i.frame_1.filter.blur && (i.frame_1.filter.blur = void 0 === i.frame_1.filter.blur ? 0 : i.frame_1.filter.blur), void 0 !== i.frame_0.filter.brightness && 100 !== i.frame_1.filter.brightness && (i.frame_1.filter.brightness = void 0 === i.frame_1.filter.brightness ? 100 : i.frame_1.filter.brightness), void 0 !== i.frame_0.filter.grayscale && 0 !== i.frame_1.filter.grayscale && (i.frame_1.filter.grayscale = void 0 === i.frame_1.filter.grayscale ? 0 : i.frame_1.filter.grayscale), void 0 !== i.frame_0.filter.b_blur && 0 !== i.frame_1.filter.b_blur && (i.frame_1.filter.b_blur = void 0 === i.frame_1.filter.b_blur ? 0 : i.frame_1.filter.b_blur), void 0 !== i.frame_0.filter.b_brightness && 100 !== i.frame_1.filter.b_brightness && (i.frame_1.filter.b_brightness = void 0 === i.frame_1.filter.b_brightness ? 100 : i.frame_1.filter.b_brightness), void 0 !== i.frame_0.filter.b_grayscale && 0 !== i.frame_1.filter.b_grayscale && (i.frame_1.filter.b_grayscale = void 0 === i.frame_1.filter.b_grayscale ? 0 : i.frame_1.filter.b_grayscale), void 0 !== i.frame_0.filter.b_invert && 0 !== i.frame_1.filter.b_invert && (i.frame_1.filter.b_invert = void 0 === i.frame_1.filter.b_invert ? 0 : i.frame_1.filter.b_invert), void 0 !== i.frame_0.filter.b_sepia && 0 !== i.frame_1.filter.b_sepia && (i.frame_1.filter.b_sepia = void 0 === i.frame_1.filter.b_sepia ? 0 : i.frame_1.filter.b_sepia)), I(i, t, e);
  },
      L = function L(e, t) {
    return e.blur ? t.blur = void 0 === t.blur ? 0 : t.blur : delete t.blur, e.brightness ? t.brightness = void 0 === t.brightness ? 100 : t.brightness : delete t.brightness, e.grayscale ? t.grayscale = void 0 === t.grayscale ? 0 : t.grayscale : delete t.grayscale, e.b_blur ? t.b_blur = void 0 === t.b_blur ? 0 : t.b_blur : delete t.b_blur, e.b_brightness ? t.b_brightness = void 0 === t.b_brightness ? 100 : t.b_brightness : delete t.b_brightness, e.b_grayscale ? t.b_grayscale = void 0 === t.b_grayscale ? 0 : t.b_grayscale : delete t.b_grayscale, e.b_invert ? t.b_invert = void 0 === t.b_invert ? 0 : t.b_invert : delete t.b_invert, e.b_sepia ? t.b_sepia = void 0 === t.b_sepia ? 0 : t.b_sepia : delete t.b_sepia, t;
  },
      O = function O(e, t) {
    return e.blur = !0 === e.blur || void 0 !== t.blur && 0 !== t.blur && "0px" !== t.blur, e.grayscale = !0 === e.grayscale || void 0 !== t.grayscale && 0 !== t.grayscale && "0%" !== t.grayscale, e.brightness = !0 === e.brightness || void 0 !== t.brightness && 100 !== t.brightness && "100%" !== t.brightness, e.b_blur = !0 === e.b_blur || void 0 !== t.b_blur && 0 !== t.b_blur && "0px" !== t.b_blur, e.b_grayscale = !0 === e.b_grayscale || void 0 !== t.b_grayscale && 0 !== t.b_grayscale && "0%" !== t.b_grayscale, e.b_brightness = !0 === e.b_brightness || void 0 !== t.b_brightness && 100 !== t.b_brightness && "100%" !== t.b_brightness, e.b_invert = !0 === e.b_invert || void 0 !== t.b_invert && 0 !== t.b_invert && "0%" !== t.b_invert, e.b_sepia = !0 === e.b_sepia || void 0 !== t.b_sepia && 0 !== t.b_sepia && "0%" !== t.b_sepia, e;
  },
      R = function R(e) {
    return void 0 !== e && (void 0 !== e.rotationY || void 0 !== e.rotationX || void 0 !== e.z);
  },
      I = function I(e, t, i) {
    var a,
        r = {},
        s = ["transform", "words", "chars", "lines", "mask"],
        n = "global" == o[t].perspectiveType ? o[t].perspective : 0,
        l = !0,
        d = !1;

    for (var c in e) {
      "loop" !== c && "frame_hover" !== c && (r = jQuery.extend(!0, r, e[c]));
    }

    for (var c in e) {
      if (e.hasOwnProperty(c) && (void 0 !== e[c].timeline && (e[c].timeline.usePerspective = !1), "loop" !== c && "frame_hover" !== c)) {
        for (a in r.transform) {
          r.transform.hasOwnProperty(a) && (r.transform[a] = void 0 === e[c].transform[a] ? "frame_0" === c ? o[t]._rdF0.transform[a] : "frame_1" === c ? o[t]._rdF1.transform[a] : r.transform[a] : e[c].transform[a], e[c].transform[a] = void 0 === e[c].transform[a] ? r.transform[a] : e[c].transform[a]);
        }

        for (var p = 1; p <= 4; p++) {
          for (a in r[s[p]]) {
            r[s[p]].hasOwnProperty(a) && (e[c][s[p]] = void 0 === e[c][s[p]] ? {} : e[c][s[p]], r[s[p]][a] = void 0 === e[c][s[p]][a] ? "frame_0" === c ? o[t]._rdF0[s[p]][a] : "frame_1" === c ? o[t]._rdF1[s[p]][a] : r[s[p]][a] : e[c][s[p]][a], e[c][s[p]][a] = void 0 === e[c][s[p]][a] ? r[s[p]][a] : e[c][s[p]][a]);
          }
        }

        void 0 !== e[c].timeline && !1 === e[c].timeline.usePerspective && void 0 !== e[c].transform && (void 0 !== e[c].transform.rotationY || void 0 !== e[c].transform.rotationX || void 0 !== e[c].transform.z || R(e[c].chars) || R(e[c].words) || R(e[c].lines)) && (n = "local" == o[t].perspectiveType ? void 0 === e[c].transform.transformPerspective ? 600 : e[c].transform.transformPerspective : n, e[c].timeline.usePerspective = !0, (R(e[c].chars) || R(e[c].words) || R(e[c].lines)) && !o.isFirefox(t) && (d = !0), l = !1);
      }
    }

    if (d && requestAnimationFrame(function () {
      tpGS.gsap.set(i.c, {
        transformStyle: "preserve-3d"
      });
    }), void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[t].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? n : e.frame_0.transform.transformPerspective : "isometric" === o[t].perspectiveType ? 0 : o[t].perspective), l) for (var c in e) {
      if (!e.hasOwnProperty(c) || void 0 === e[c].transform) continue;
      delete e[c].transform.transformPerspective;
    }
    return e;
  },
      M = function M(e, t, i) {
    if (0 === e.length) return {};

    for (var a = e[0].getElementsByClassName(t), r = {}, o = 0; o < a.length; o++) {
      void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
    }

    if (void 0 !== e[1]) for (a = e[1].getElementsByClassName(t), o = 0; o < a.length; o++) {
      void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
    }
    return r;
  },
      T = function T(e) {
    return "thin" === (e = o.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e;
  },
      C = function C(e, t, s) {
    if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != _typeof(e[0].className) && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
    o.sA(e[0], "stylerecorder", !0), void 0 === e[0].id && (e[0].id = "rs-layer-sub-" + Math.round(1e6 * Math.random())), o[s].computedStyle[e[0].id] = window.getComputedStyle(e[0], null);
    var n = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
        l = "rekursive" === t ? jQuery(o.closestClass(e[0], "rs-layer")) : void 0;
    void 0 !== l && (o[s].computedStyle[l[0].id] = void 0 === o[s].computedStyle[l[0].id] ? window.getComputedStyle(l[0], null) : o[s].computedStyle[l[0].id]);
    var d = void 0 !== l && o[s].computedStyle[e[0].id].fontSize == o[s].computedStyle[l[0].id].fontSize && T(o[s].computedStyle[e[0].id].fontWeight) == T(o[s].computedStyle[l[0].id].fontWeight) && o[s].computedStyle[e[0].id].lineHeight == o[s].computedStyle[l[0].id].lineHeight,
        c = d ? void 0 !== l[0].id && void 0 !== o[s]._L[l[0].id] ? o[s]._L[l[0].id] : l.data() : void 0,
        p = 0;

    for (n.basealign = void 0 === n.basealign ? "grid" : n.basealign, n._isnotext || (n.fontSize = o.revToResp(d ? void 0 === c.fontsize ? parseInt(o[s].computedStyle[l[0].id].fontSize, 0) || 20 : c.fontsize : void 0 === n.fontsize ? "rekursive" !== t ? 20 : "inherit" : n.fontsize, o[s].rle), n.fontWeight = o.revToResp(d ? void 0 === c.fontweight ? o[s].computedStyle[l[0].id].fontWeight || "inherit" : c.fontweight : void 0 === n.fontweight ? o[s].computedStyle[e[0].id].fontWeight || "inherit" : n.fontweight, o[s].rle), n.whiteSpace = o.revToResp(d ? void 0 === c.whitespace ? "nowrap" : c.whitespace : void 0 === n.whitespace ? "nowrap" : n.whitespace, o[s].rle), n.textAlign = o.revToResp(d ? void 0 === c.textalign ? "left" : c.textalign : void 0 === n.textalign ? "left" : n.textalign, o[s].rle), n.letterSpacing = o.revToResp(d ? void 0 === c.letterspacing ? parseInt(o[s].computedStyle[l[0].id].letterSpacing, 0) || "inherit" : c.letterspacing : void 0 === n.letterspacing ? parseInt("normal" === o[s].computedStyle[e[0].id].letterSpacing ? 0 : o[s].computedStyle[e[0].id].letterSpacing, 0) || "inherit" : n.letterspacing, o[s].rle), n.textDecoration = d ? void 0 === c.textDecoration ? "none" : c.textDecoration : void 0 === n.textDecoration ? "none" : n.textDecoration, p = 25, p = void 0 === l || "I" !== e[0].tagName && "STRONG" !== e[0].tagName ? p : "inherit", void 0 !== n.tshadow && (n.tshadow.b = o.revToResp(n.tshadow.b, o[s].rle), n.tshadow.h = o.revToResp(n.tshadow.h, o[s].rle), n.tshadow.v = o.revToResp(n.tshadow.v, o[s].rle))), "group" === n.type && (n.whiteSpace = "normal", n.textAlign = o.revToResp(d ? void 0 === c.textalign ? "left" : c.textalign : void 0 === n.textalign ? "left" : n.textalign, o[s].rle)), void 0 !== n.bshadow && (n.bshadow.b = o.revToResp(n.bshadow.b, o[s].rle), n.bshadow.h = o.revToResp(n.bshadow.h, o[s].rle), n.bshadow.v = o.revToResp(n.bshadow.v, o[s].rle), n.bshadow.s = o.revToResp(n.bshadow.s, o[s].rle)), void 0 !== n.tstroke && (n.tstroke.w = o.revToResp(n.tstroke.w, o[s].rle)), n.display = d ? void 0 === c.display ? o[s].computedStyle[l[0].id].display : c.display : void 0 === n.display ? o[s].computedStyle[e[0].id].display : n.display, n["float"] = o.revToResp(d ? void 0 === c["float"] ? o[s].computedStyle[l[0].id]["float"] || "none" : c["float"] : void 0 === n["float"] ? "none" : n["float"], o[s].rle), n.clear = o.revToResp(d ? void 0 === c.clear ? o[s].computedStyle[l[0].id].clear || "none" : c.clear : void 0 === n.clear ? "none" : n.clear, o[s].rle), n.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(n.layertype, ["video", "image", "audio"]) ? p : d ? void 0 === c.lineheight ? parseInt(o[s].computedStyle[l[0].id].lineHeight, 0) || p : c.lineheight : void 0 === n.lineheight ? p : n.lineheight, o[s].rle), n.zIndex = d ? void 0 === c.zindex ? parseInt(o[s].computedStyle[l[0].id].zIndex, 0) || "inherit" : c.zindex : void 0 === n.zindex ? parseInt(o[s].computedStyle[e[0].id].zIndex, 0) || "inherit" : n.zindex, g = 0; g < 4; g++) {
      n["padding" + i[g]] = o.revToResp(void 0 === n["padding" + r[g]] ? parseInt(o[s].computedStyle[e[0].id]["padding" + i[g]], 0) || 0 : n["padding" + r[g]], o[s].rle), n["margin" + i[g]] = o.revToResp(void 0 === n["margin" + r[g]] ? parseInt(o[s].computedStyle[e[0].id]["margin" + i[g]], 0) || 0 : n["margin" + r[g]], o[s].rle), n["border" + i[g] + "Width"] = void 0 === n.borderwidth ? parseInt(o[s].computedStyle[e[0].id]["border" + i[g] + "Width"], 0) || 0 : n.borderwidth[g], n["border" + i[g] + "Color"] = void 0 === n.bordercolor ? o[s].computedStyle[e[0].id]["border-" + r[g] + "-color"] : n.bordercolor, n["border" + a[g] + "Radius"] = o.revToResp(void 0 === n.borderradius ? o[s].computedStyle[e[0].id]["border" + a[g] + "Radius"] || 0 : n.borderradius[g], o[s].rle);
    }

    if (n.borderStyle = o.revToResp(void 0 === n.borderstyle ? o[s].computedStyle[e[0].id].borderStyle || 0 : n.borderstyle, o[s].rle), "rekursive" !== t ? (n.color = o.revToResp(void 0 === n.color ? "#ffffff" : n.color, o[s].rle, void 0, "||"), n.minWidth = o.revToResp(void 0 === n.minwidth ? parseInt(o[s].computedStyle[e[0].id].minWidth, 0) || 0 : n.minwidth, o[s].rle), n.minHeight = o.revToResp(void 0 === n.minheight ? parseInt(o[s].computedStyle[e[0].id].minHeight, 0) || 0 : n.minheight, o[s].rle), n.width = o.revToResp(void 0 === n.width ? "auto" : o.smartConvertDivs(n.width), o[s].rle), n.height = o.revToResp(void 0 === n.height ? "auto" : o.smartConvertDivs(n.height), o[s].rle), n.maxWidth = o.revToResp(void 0 === n.maxwidth ? parseInt(o[s].computedStyle[e[0].id].maxWidth, 0) || "none" : n.maxwidth, o[s].rle), n.maxHeight = o.revToResp(-1 !== jQuery.inArray(n.type, ["column", "row"]) ? "none" : void 0 !== n.maxheight ? parseInt(o[s].computedStyle[e[0].id].maxHeight, 0) || "none" : n.maxheight, o[s].rle)) : "html" === n.layertype && (n.width = o.revToResp(e[0].width, o[s].rle), n.height = o.revToResp(e[0].height, o[s].rle)), n._incolumn) for (var g = 0; g < n.height.length; g++) {
      -1 !== n.height[g].indexOf("%") && parseFloat(n.height[g]) > 98 && (n.height[g] = n.height[g].replace("%", "px"));
    }

    for (n.styleProps = {
      background: e[0].style.background,
      "background-color": e[0].style["background-color"],
      color: e[0].style.color,
      cursor: e[0].style.cursor,
      "font-style": e[0].style["font-style"]
    }, null == n.bshadow && (n.styleProps.boxShadow = e[0].style.boxShadow), "" !== n.styleProps.background && void 0 !== n.styleProps.background && n.styleProps.background !== n.styleProps["background-color"] || delete n.styleProps.background, "" == n.styleProps.color && (n.styleProps.color = o[s].computedStyle[e[0].id].color), g = 0; g < 4; g++) {
      A(n["padding" + i[g]], 0) && delete n["padding" + i[g]], A(n["margin" + i[g]], 0) && delete n["margin" + i[g]], A(n["border" + a[g] + "Radius"], "0px") ? delete n["border" + a[g] + "Radius"] : A(n["border" + a[g] + "Radius"], "0") && delete n["border" + a[g] + "Radius"];
    }

    if (A(n.borderStyle, "none")) for (delete n.borderStyle, g = 0; g < 4; g++) {
      delete n["border" + i[g] + "Width"], delete n["border" + i[g] + "Color"];
    }
  },
      A = function A(e, t) {
    return t === e[0] && t === e[1] && t === e[2] && t === e[3];
  },
      D = function D(e, t, i, a, r) {
    var s = o.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
    return e = o.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = o.isNumeric(e) ? e * t + s : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e;
  },
      P = function P(e) {
    return null != e && 0 !== parseInt(e, 0);
  },
      B = function B(e) {
    var t,
        s,
        n,
        l,
        d,
        c,
        p,
        g,
        u,
        h,
        m = e.a,
        v = e.b,
        f = e.c,
        y = e.d,
        w = e.e,
        b = {},
        _ = {},
        S = o[v]._L[m[0].id],
        x = m[0].className;
    if (S = void 0 === S ? {} : S, "object" == _typeof(x) && (x = ""), void 0 !== m && void 0 !== m[0] && (x.indexOf("rs_splitted") >= 0 || "BR" == m[0].nodeName || "br" == m[0].tagName || m[0].tagName.indexOf("FCR") > 0 || m[0].tagName.indexOf("BCR") > 0)) return !1;
    w = "individual" === w ? S.slideIndex : w;

    var k,
        L = function (e, t, r) {
      if (void 0 !== e) {
        if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
        var s,
            n = o[t].level,
            l = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[t]._L[e[0].id] ? o[t]._L[e[0].id] : e.data();
        void 0 === (l = void 0 === l.basealign ? r.data() : l)._isnotext && (l._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : l._isnotext);
        var d = {
          basealign: void 0 === l.basealign ? "grid" : l.basealign,
          lineHeight: void 0 === l.basealign ? "inherit" : parseInt(l.lineHeight[n]),
          color: void 0 === l.color ? void 0 : l.color[n],
          width: void 0 === l.width ? void 0 : "a" === l.width[n] ? "auto" : l.width[n],
          height: void 0 === l.height ? void 0 : "a" === l.height[n] ? "auto" : l.height[n],
          minWidth: void 0 === l.minWidth ? void 0 : "n" === l.minWidth[n] ? "none" : l.minWidth[n],
          minHeight: void 0 === l.minHeight ? void 0 : "n" == l.minHeight[n] ? "none" : l.minHeight[n],
          maxWidth: void 0 === l.maxWidth ? void 0 : "n" == l.maxWidth[n] ? "none" : l.maxWidth[n],
          maxHeight: void 0 === l.maxHeight ? void 0 : "n" == l.maxHeight[n] ? "none" : l.maxHeight[n],
          "float": l["float"][n],
          clear: l.clear[n]
        };

        for (l.borderStyle && (d.borderStyle = l.borderStyle[n]), s = 0; s < 4; s++) {
          l["padding" + i[s]] && (d["padding" + i[s]] = l["padding" + i[s]][n]), l["margin" + i[s]] && (d["margin" + i[s]] = parseInt(l["margin" + i[s]][n])), l["border" + a[s] + "Radius"] && (d["border" + a[s] + "Radius"] = l["border" + a[s] + "Radius"][n]), void 0 !== d.borderStyle && "none" !== d.borderStyle && (l["border" + i[s] + "Color"] && (d["border" + i[s] + "Color"] = l["border" + i[s] + "Color"]), l["border" + i[s] + "Width"] && (d["border" + i[s] + "Width"] = parseInt(l["border" + i[s] + "Width"])));
        }

        return l._isnotext || (d.textDecoration = l.textDecoration, d.fontSize = parseInt(l.fontSize[n]), d.fontWeight = parseInt(l.fontWeight[n]), d.letterSpacing = parseInt(l.letterSpacing[n]) || 0, d.textAlign = l.textAlign[n], d.whiteSpace = l.whiteSpace[n], d.whiteSpace = "normal" === d.whiteSpace && "auto" === d.width && (!0 !== l._incolumn && !0 !== l._ingroup || "relative" !== l.position) ? "nowrap" : d.whiteSpace, d.display = l.display, void 0 !== l.tshadow && (d.textShadow = parseInt(l.tshadow.h[n], 0) + "px " + parseInt(l.tshadow.v[n], 0) + "px " + l.tshadow.b[n] + " " + l.tshadow.c), void 0 !== l.tstroke && (d.textStroke = parseInt(l.tstroke.w[n], 0) + "px " + l.tstroke.c)), "group" === l.type && (d.whiteSpace = l.whiteSpace, d.textAlign = l.textAlign[n], d.display = l.display), void 0 !== l.bshadow && (d.boxShadow = parseInt(l.bshadow.h[n], 0) + "px " + parseInt(l.bshadow.v[n], 0) + "px " + parseInt(l.bshadow.b[n], 0) + "px " + parseInt(l.bshadow.s[n], 0) + "px " + l.bshadow.c), d;
      }
    }(m, v, e.RSL),
        O = "off" === y ? 1 : o[v].CM.w;

    if (void 0 === S._isnotext && (S._isnotext = void 0 !== L.RSL && void 0 !== L.RSL[0] && L.RSL[0].length > 0 ? o.gA(L.RSL[0], "_isnotext") : S._isnotext), S._incolumn && ("shape" === S.type || "text" === S.type || "button" === S.type) && ("" + L.height).indexOf(!1) && (L.height = L.height), S.OBJUPD = null == S.OBJUPD ? {} : S.OBJUPD, S.caches = null == S.caches ? {} : S.caches, "column" === S.type) {
      for (s = {}, k = {}, t = 0; t < 4; t++) {
        void 0 !== L["margin" + i[t]] && (s["padding" + i[t]] = Math.round(L["margin" + i[t]] * O) + "px", k["margin" + i[t]] = L["margin" + i[t]], delete L["margin" + i[t]]);
      }

      jQuery.isEmptyObject(s) || tpGS.gsap.set(S._column, s);
    }

    var R = o.clone(S.OBJUPD.POBJ),
        I = o.clone(S.OBJUPD.LPOBJ);

    if (-1 === x.indexOf("rs_splitted_")) {
      for (s = {
        overwrite: "auto"
      }, t = 0; t < 4; t++) {
        void 0 !== L["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = L["border" + a[t] + "Radius"]), void 0 !== L["padding" + i[t]] && (s["padding" + i[t]] = Math.round(L["padding" + i[t]] * O) + "px"), void 0 === L["margin" + i[t]] || S._incolumn || S._ingroup && "absolute" != S.position || (s["margin" + i[t]] = "row" === S.type ? 0 : Math.round(L["margin" + i[t]] * O) + "px");
      }

      if (void 0 !== S.spike && (s["clip-path"] = s["-webkit-clip-path"] = S.spike), L.boxShadow && (s.boxShadow = L.boxShadow), "column" !== S.type && (void 0 !== L.borderStyle && "none" !== L.borderStyle && (0 !== L.borderTopWidth || L.borderBottomWidth > 0 || L.borderLeftWidth > 0 || L.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(L.borderTopWidth * O) + "px", s.borderBottomWidth = Math.round(L.borderBottomWidth * O) + "px", s.borderLeftWidth = Math.round(L.borderLeftWidth * O) + "px", s.borderRightWidth = Math.round(L.borderRightWidth * O) + "px", s.borderStyle = L.borderStyle, s.borderTopColor = L.borderTopColor, s.borderBottomColor = L.borderBottomColor, s.borderLeftColor = L.borderLeftColor, s.borderRightColor = L.borderRightColor) : ("none" === L.borderStyle && (s.borderStyle = "none"), void 0 !== L.borderTopColor && (s.borderTopColor = L.borderTopColor), void 0 !== L.borderBottomColor && (s.borderBottomColor = L.borderBottomColor), void 0 !== L.borderLeftColor && (s.borderLeftColor = L.borderLeftColor), void 0 !== L.borderRightColor && (s.borderRightColor = L.borderRightColor))), "shape" !== S.type && "image" !== S.type || !(P(L.borderTopLeftRadius) || P(L.borderTopRightRadius) || P(L.borderBottomLeftRadius) || P(L.borderBottomRightRadius)) || (s.overflow = "hidden"), S._isnotext || ("column" !== S.type && (s.fontSize = Math.round(L.fontSize * O) + "px", s.fontWeight = L.fontWeight, s.letterSpacing = L.letterSpacing * O + "px", L.textShadow && (s.textShadow = L.textShadow), L.textStroke && (s["-webkit-text-stroke"] = L.textStroke)), s.lineHeight = Math.round(L.lineHeight * O) + "px", s.textAlign = L.textAlign), "video" === S.type && S.html5vid && void 0 !== S.deepmedia && void 0 !== S.deepmedia[0] && null != S.deepmedia[0].parentNode && (P(L.borderTopLeftRadius) || P(L.borderTopRightRadius) || P(L.borderBottomLeftRadius) || P(L.borderBottomRightRadius)) && tpGS.gsap.set(S.deepmedia[0].parentNode, function (e) {
        var t = o.clone(e);
        return t.top = 0 - ((parseInt(t.borderTopWidth) || 0) + (parseInt(t.borderBottomWidth) || 0)) / 2 + "px", t.left = 0 - ((parseInt(t.borderLeftWidth) || 0) + (parseInt(t.borderRightWidth) || 0)) / 2 + "px", t.borderStyle = void 0 !== t.borderTopWidth || void 0 !== t.borderBottomWidth || void 0 !== t.borderLeftWidth || void 0 !== t.borderRightWidth ? "solid" : "none", t.borderColor = "transparent", t.boxSizing = "content-box", t;
      }(s)), "column" === S.type && void 0 !== S.cbg && (void 0 === S.cbg_set && (S.cbg_set = S.styleProps["background-color"], S.cbg_set = "" == S.cbg_set || void 0 === S.cbg_set || 0 == S.cbg_set.length ? "transparent" : S.cbg_set, S.cbg_img = void 0 !== m[0].dataset.bglazy ? 'url("' + m[0].dataset.bglazy + '")' : m.css("backgroundImage"), "" !== S.cbg_img && void 0 !== S.cbg_img && "none" !== S.cbg_img && (S.cbg_img_r = m.css("backgroundRepeat"), S.cbg_img_p = m.css("backgroundPosition"), S.cbg_img_s = m.css("backgroundSize")), S.cbg_o = S.bgopacity ? 1 : S.bgopacity, b.backgroundColor = "transparent", b.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform) for (g in s) {
        s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
      }

      if ("IFRAME" == m[0].nodeName && "html" === o.gA(m[0], "layertype") && (u = "slide" == L.basealign ? o[v].module.width : o.iWA(v, w), h = "slide" == L.basealign || "carousel" == o[v].sliderType && "v" === o[v].carousel.orientation ? o[v].module.height : o.iHE(v), s.width = !o.isNumeric(L.width) && L.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? L.width : u * parseInt(L.width, 0) / 100 : D(L.width, O, "auto", u, "auto"), s.height = !o.isNumeric(L.height) && L.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? L.height : h * parseInt(L.height, 0) / 100 : D(L.height, O, "auto", u, "auto")), b = jQuery.extend(!0, b, s), o[v].firstLayerCalculated = !0, "rekursive" != f) {
        u = "slide" == L.basealign ? o[v].module.width : o.iWA(v, w), h = "slide" == L.basealign || "carousel" == o[v].sliderType && "v" === o[v].carousel.orientation ? o[v].module.height : o.iHE(v);
        var M = !o.isNumeric(L.width) && L.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? L.width : u * parseInt(L.width, 0) / 100 : D(L.width, O, "auto", u, "auto"),
            T = !o.isNumeric(L.height) && L.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? L.height : h * parseInt(L.height, 0) / 100 : D(L.height, O, "auto", u, "auto"),
            C = {
          maxWidth: D(L.maxWidth, O, "none", u, "none"),
          maxHeight: D(L.maxHeight, O, "none", h, "none"),
          minWidth: D(L.minWidth, O, "0px", u, 0),
          minHeight: D(L.minHeight, O, "0px", h, 0),
          height: T,
          width: M,
          overwrite: "auto"
        };
        1 == S.heightSetByVideo && (C.height = S.vidOBJ.height);
        var A = !1;

        if (S._incolumn) {
          for (R = jQuery.extend(!0, R, {
            minWidth: M,
            maxWidth: M,
            "float": L["float"],
            clear: L.clear
          }), t = 0; t < 4; t++) {
            void 0 !== L["margin" + i[t]] && (R["margin" + i[t]] = L["margin" + i[t]] * O + "px");
          }

          I.width = "100%", void 0 !== L.display && "inline-block" !== L.display || (_ = {
            width: "100%"
          }), C.width = !o.isNumeric(L.width) && L.width.indexOf("%") >= 0 ? "100%" : M, "image" === S.type && tpGS.gsap.set(S.img, {
            width: "100%"
          });
        } else !o.isNumeric(L.width) && L.width.indexOf("%") >= 0 && (S._isgroup && "absolute" === S.position || (!0 === S._ingroup || 1 == S._incolumn) && "relative" === S.position || void 0 !== S.reqWrp && (!S.reqWrp.loop || !S.reqWrp.mask) ? R.width = "slide" === S.basealign || !0 === S._ingroup || S._isstatic ? M : o.iWA(v, w) * o[v].CM.w * parseInt(M) / 100 + "px" : R.minWidth = "slide" === S.basealign || !0 === S._ingroup || S._isstatic ? M : o.iWA(v, w) * o[v].CM.w * parseInt(M) / 100 + "px", I.width = "100%", _.width = "100%");

        if (!0 === S._ingroup && "relative" === S.position && (R["float"] = L["float"], R.lineHeight = L.lineHeight + "px", b.verticalAlign = "top", _.verticalAlign = "top", I.verticalAlign = "top", R.verticalAlign = "inherit"), !o.isNumeric(L.height) && L.height.indexOf("%") >= 0 && (R.minHeight = "slide" === S.basealign || !0 === S._ingroup || S._isstatic ? T : o.iHE(v) * (o[v].currentRowsHeight > o[v].gridheight[o[v].level] ? 1 : o[v].CM.w) * parseInt(T) / 100 + "px", void 0 === S.reqWrp || S.reqWrp.loop || S.reqWrp.mask || (R.height = R.minHeight), I.height = "100%", _.height = "100%", A = !0), S._isnotext ? "group" == S.type && (C.whiteSpace = "normal") : (C.whiteSpace = L.whiteSpace, C.textAlign = L.textAlign, C.textDecoration = L.textDecoration), "npc" != L.color && void 0 !== L.color && (C.color = L.color), S._ingroup && (S._groupw = C.minWidth, S._grouph = C.minHeight), "row" === S.type && (o.isNumeric(C.minHeight) || C.minHeight.indexOf("px") >= 0) && "0px" !== C.minHeight && 0 !== C.minHeight && "0" !== C.minHeight && "none" !== C.minHeight ? C.height = C.minHeight : "row" === S.type && (C.height = "auto"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform) for (g in C) {
          C.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete C[g];
        }

        if ("group" !== S.type && "row" !== S.type && "column" !== S.type && (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), !o.isNumeric(C.height) && C.height.indexOf("%") >= 0 && (C.height = "100%")), S._isgroup) {
          for (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), "absolute" != S.position || S._ingroup || S._incolumn || !A ? R.height = A ? "100%" : C.height : (R.height = R.minHeight, C.height = "100%"), C.lineHeight = void 0 === L.lineHeight || A ? "initial" : L.lineHeight + "px", C.verticalAlign = S.verticalalign, C.textAlign = L.textAlign, t = 0; t < 4; t++) {
            void 0 !== b["border" + a[t] + "Radius"] && (_["border" + a[t] + "Radius"] = b["border" + a[t] + "Radius"]);
          }

          "relative" == S.position && void 0 !== L.display && (R.display = L.display), "auto" == L.width && (_.position = "relative");
        }

        b = jQuery.extend(!0, b, C), null != S.svg_src && void 0 !== S.svgI && ("string" == typeof S.svgI.fill && (S.svgI.fill = [S.svgI.fill]), S.svgTemp = o.clone(S.svgI), delete S.svgTemp.svgAll, void 0 !== S.svgTemp.fill && !0 !== (S.elementHovered && S._isstatic) && (S.svgTemp.fill = S.svgTemp.fill[o[v].level], S.svg.length <= 0 && (S.svg = m.find("svg")), S.svgPath.length <= 0 && (S.svgPath = S.svg.find(S.svgI.svgAll ? "path, circle, ellipse, line, polygon, polyline, rect" : "path")), tpGS.gsap.set(S.svgPath, {
          fill: S.svgI.fill[o[v].level]
        })), tpGS.gsap.set(S.svg, S.svgTemp));
      }

      if ("row" === S.type) for (t = 0; t < 4; t++) {
        void 0 !== L["margin" + i[t]] && (R["padding" + i[t]] = L["margin" + i[t]] * O + "px");
      }

      if (S._ingroup && "relative" == S.position) {
        for (t = 0; t < 4; t++) {
          void 0 !== L["margin" + i[t]] && (R["margin" + i[t]] = L["margin" + i[t]] * O + "px");
        }

        "shape" === S.type && "100%" == _.width && "100%" == _.height && (_.position = "absolute");
      }

      if ("column" === S.type && S.cbg && S.cbg.length > 0) {
        for (void 0 !== S.cbg_img_s && void 0 !== S.cbg && (S.cbg[0].style.backgroundSize = S.cbg_img_s), s = {}, "" !== S.styleProps.cursor && (s.cursor = S.styleProps.cursor), "" !== S.cbg_set && "transparent" !== S.cbg_set && (s.backgroundColor = S.cbg_set), "" !== S.cbg_img && "none" !== S.cbg_img && (s.backgroundImage = S.cbg_img, "" !== S.cbg_img_r && (s.backgroundRepeat = S.cbg_img_r), "" !== S.cbg_img_p && (s.backgroundPosition = S.cbg_img_p)), "" !== S.cbg_o && void 0 !== S.cbg_o && (s.opacity = S.cbg_o), t = 0; t < 4; t++) {
          void 0 !== L.borderStyle && "none" !== L.borderStyle && (void 0 !== L["border" + i[t] + "Width"] && (s["border" + i[t] + "Width"] = Math.round(parseInt(L["border" + i[t] + "Width"]) * O) + "px"), void 0 !== L["border" + i[t] + "Color"] && (s["border" + i[t] + "Color"] = L["border" + i[t] + "Color"])), L["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = L["border" + a[t] + "Radius"]);
        }

        for (void 0 !== L.borderStyle && "none" !== L.borderStyle && (s.borderStyle = L.borderStyle), (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgS && tpGS.gsap.set(S.cbg, s), S.caches.cbgS = n, s = {}, t = 0; t < 4; t++) {
          k["margin" + i[t]] && (s[r[t]] = k["margin" + i[t]] * O + "px");
        }

        (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgmaskS && (tpGS.gsap.set(S.cbgmask, s), S.caches.cbgmaskS = n);
      }

      for (var B in void 0 === S.reqWrp || S.reqWrp.loop || S.reqWrp.mask || "100%" != b.width || "100%" != b.height || (b.position = "absolute"), "auto" === R.maxWidth && (R.maxWidth = "inherit"), "auto" === R.maxHeight && (R.maxHeight = "inherit"), "auto" === _.maxWidth && (_.maxWidth = "inherit"), "auto" === _.maxHeight && (_.maxHeight = "inherit"), "auto" === I.maxWidth && (I.maxWidth = "inherit"), "auto" === I.maxHeight && (I.maxHeight = "inherit"), S.fullinset && 1 == S._ingroup && "absolute" === S.position && (R.width = "auto", R.minHeight = "auto", R.height = "auto", R.left = void 0 !== b.marginLeft && "0px" !== b.marginLeft ? b.marginLeft : "0px", R.right = void 0 !== b.marginRight && "0px" !== b.marginRight ? b.marginRight : "0px", R.top = void 0 !== b.marginTop && "0px" !== b.marginTop ? b.marginTop : "0px", R.bottom = void 0 !== b.marginBottom && "0px" !== b.marginBottom ? b.marginBottom : "0px", delete b.marginLeft, delete b.marginRight, delete b.marginTop, delete b.marginBottom), void 0 !== S.vidOBJ && (b.width = S.vidOBJ.width, b.height = S.vidOBJ.height), void 0 !== S.OBJUPD.lppmOBJ && (void 0 !== S.OBJUPD.lppmOBJ.minWidth && (I.minWidth = S.OBJUPD.lppmOBJ.minWidth, _.minWidth = S.OBJUPD.lppmOBJ.minWidth), void 0 !== S.OBJUPD.lppmOBJ.minHeight && (I.minHeight = S.OBJUPD.lppmOBJ.minHeight, _.minHeight = S.OBJUPD.lppmOBJ.minHeight, R.minHeight = S.OBJUPD.lppmOBJ.minHeight)), S._incolumn && "group" == S.type && void 0 !== R && "100%" == R.minWidth && (_.width = "100%"), S._isgroup && S.thFixed && void 0 !== S.reqWrp && S.reqWrp.loop && S.reqWrp.mask && "auto" == L.width && (I.position = "relative"), !S._ingroup || S.reqWrp.loop || S.reqWrp.mask || "absolute" != S.position || "100%" != R.minHeight || (R.height = "100%"), o[v].calcResponsiveLayerHooks) {
        var G = o[v].calcResponsiveLayerHooks[B]({
          id: v,
          L: m,
          obj: L,
          _: S,
          inobj: e,
          LOBJ: b,
          LPOBJ: I,
          MOBJ: _,
          POBJ: R
        });
        null != G && (void 0 !== G.obj && (L = jQuery.extend(!0, L, G.obj)), void 0 !== G.LOBJ && (b = jQuery.extend(!0, b, G.LOBJ)), void 0 !== G.LPOBJ && (I = jQuery.extend(!0, I, G.LPOBJ)), void 0 !== G.MOBJ && (_ = jQuery.extend(!0, _, G.MOBJ)), void 0 !== G.POBJ && (R = jQuery.extend(!0, R, G.POBJ)));
      }

      n = JSON.stringify(b), l = JSON.stringify(I), d = JSON.stringify(_), c = JSON.stringify(R), void 0 === S.imgOBJ || void 0 !== S.caches.imgOBJ && S.caches.imgOBJ.width === S.imgOBJ.width && S.caches.imgOBJ.height === S.imgOBJ.height && S.caches.imgOBJ.left === S.imgOBJ.left && S.caches.imgOBJ.right === S.imgOBJ.right && S.caches.imgOBJ.top === S.imgOBJ.top && S.caches.imgOBJ.bottom === S.imgOBJ.bottom || (S.caches.imgOBJ = o.clone(S.imgOBJ), S.imgOBJ.position = "relative", tpGS.gsap.set(S.img, S.imgOBJ)), void 0 === S.mediaOBJ || void 0 !== S.caches.mediaOBJ && S.caches.mediaOBJ.width === S.mediaOBJ.width && S.caches.mediaOBJ.height === S.mediaOBJ.height && S.caches.mediaOBJ.display === S.mediaOBJ.display || (S.caches.mediaOBJ = o.clone(S.mediaOBJ), S.media.css(S.mediaOBJ)), n != o[v].emptyObject && n != S.caches.LOBJ && (tpGS.gsap.set(m, b), S.caches.LOBJ = n), void 0 !== S.lp && l != o[v].emptyObject && l != S.caches.LPOBJ && (tpGS.gsap.set(S.lp, I), S.caches.LPOBJ = l), d != o[v].emptyObject && d != S.caches.MOBJ && (tpGS.gsap.set(S.m, _), S.caches.MOBJ = d), c != o[v].emptyObject && c != S.caches.POBJ && (tpGS.gsap.set(S.p, R), S.caches.POBJ = c, S.caches.POBJ_LEFT = R.left, S.caches.POBJ_TOP = R.top);
    }
  },
      G = function G(e) {
    var t = {
      l: "none",
      lw: 10,
      r: "none",
      rw: 10
    };

    for (var i in e = e.split(";")) {
      if (e.hasOwnProperty(i)) {
        var a = e[i].split(":");

        switch (a[0]) {
          case "l":
            t.l = a[1];
            break;

          case "r":
            t.r = a[1];
            break;

          case "lw":
            t.lw = a[1];
            break;

          case "rw":
            t.rw = a[1];
        }
      }
    }

    return "polygon(" + H(t.l, 0, parseFloat(t.lw)) + "," + H(t.r, 100, 100 - parseFloat(t.rw), !0) + ")";
  },
      H = function H(e, t, i, a) {
    var r;

    switch (e) {
      case "none":
        r = t + "% 100%," + t + "% 0%";
        break;

      case "top":
        r = i + "% 100%," + t + "% 0%";
        break;

      case "middle":
        r = i + "% 100%," + t + "% 50%," + i + "% 0%";
        break;

      case "bottom":
        r = t + "% 100%," + i + "% 0%";
        break;

      case "two":
        r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
        break;

      case "three":
        r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
        break;

      case "four":
        r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
        break;

      case "five":
        r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%";
    }

    if (a) {
      var o = r.split(",");

      for (var i in r = "", o) {
        o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : ""));
      }
    }

    return r;
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.layeranimation = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = jQuery.fn.revolution;

  function i(e, i) {
    var a = new Object({
      single: ".tp-" + i,
      c: t[e].cpar.find(".tp-" + i + "s")
    });
    return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a;
  }

  jQuery.extend(!0, t, {
    hideUnHideNav: function hideUnHideNav(e) {
      window.requestAnimationFrame(function () {
        var i = !1;
        p(t[e].navigation.arrows) && (i = x(t[e].navigation.arrows, e, i)), p(t[e].navigation.bullets) && (i = x(t[e].navigation.bullets, e, i)), p(t[e].navigation.thumbnails) && (i = x(t[e].navigation.thumbnails, e, i)), p(t[e].navigation.tabs) && (i = x(t[e].navigation.tabs, e, i)), i && t.manageNavigation(e);
      });
    },
    getOuterNavDimension: function getOuterNavDimension(e) {
      t[e].navigation.scaler = Math.max(0, Math.min(1, (t.winW - 480) / 500));
      var i = {
        left: 0,
        right: 0,
        horizontal: 0,
        vertical: 0,
        top: 0,
        bottom: 0
      };
      return t[e].navigation.thumbnails && t[e].navigation.thumbnails.enable && (t[e].navigation.thumbnails.isVisible = t[e].navigation.thumbnails.hide_under < t[e].module.width && t[e].navigation.thumbnails.hide_over > t[e].module.width, t[e].navigation.thumbnails.cw = Math.max(Math.round(t[e].navigation.thumbnails.width * t[e].navigation.scaler), t[e].navigation.thumbnails.min_width), t[e].navigation.thumbnails.ch = Math.round(t[e].navigation.thumbnails.cw / t[e].navigation.thumbnails.width * t[e].navigation.thumbnails.height), t[e].navigation.thumbnails.isVisible && "outer-left" === t[e].navigation.thumbnails.position ? i.left = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-right" === t[e].navigation.thumbnails.position ? i.right = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-top" === t[e].navigation.thumbnails.position ? i.top = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-bottom" === t[e].navigation.thumbnails.position && (i.bottom = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding)), t[e].navigation.tabs && t[e].navigation.tabs.enable && (t[e].navigation.tabs.isVisible = t[e].navigation.tabs.hide_under < t[e].module.width && t[e].navigation.tabs.hide_over > t[e].module.width, t[e].navigation.tabs.cw = Math.max(Math.round(t[e].navigation.tabs.width * t[e].navigation.scaler), t[e].navigation.tabs.min_width), t[e].navigation.tabs.ch = Math.round(t[e].navigation.tabs.cw / t[e].navigation.tabs.width * t[e].navigation.tabs.height), t[e].navigation.tabs.isVisible && "outer-left" === t[e].navigation.tabs.position ? i.left += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-right" === t[e].navigation.tabs.position ? i.right += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-top" === t[e].navigation.tabs.position ? i.top += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-bottom" === t[e].navigation.tabs.position && (i.bottom += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding)), {
        left: i.left,
        right: i.right,
        horizontal: i.left + i.right,
        vertical: i.top + i.bottom,
        top: i.top,
        bottom: i.bottom
      };
    },
    resizeThumbsTabs: function resizeThumbsTabs(e, i) {
      if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
        var a = tpGS.gsap.timeline(),
            o = t[e].navigation.tabs,
            s = t[e].navigation.thumbnails,
            n = t[e].navigation.bullets;

        if (a.pause(), p(o) && (i || o.width > o.min_width) && r(e, a, t[e].c, o, t[e].slideamount, "tab"), p(s) && (i || s.width > s.min_width) && r(e, a, t[e].c, s, t[e].slideamount, "thumb", e), p(n) && i) {
          var l = t[e].c.find(".tp-bullets");
          l.find(".tp-bullet").each(function (e) {
            var t = jQuery(this),
                i = e + 1,
                a = t.outerWidth() + parseInt(void 0 === n.space ? 0 : n.space, 0),
                r = t.outerHeight() + parseInt(void 0 === n.space ? 0 : n.space, 0);
            "vertical" === n.direction ? (t.css({
              top: (i - 1) * r + "px",
              left: "0px"
            }), l.css({
              height: (i - 1) * r + t.outerHeight(),
              width: t.outerWidth()
            })) : (t.css({
              left: (i - 1) * a + "px",
              top: "0px"
            }), l.css({
              width: (i - 1) * a + t.outerWidth(),
              height: t.outerHeight()
            }));
          });
        }

        a.play();
      }

      return !0;
    },
    updateNavIndexes: function updateNavIndexes(e) {
      var i = t[e].c;

      function a(e) {
        i.find(e).lenght > 0 && i.find(e).each(function (e) {
          jQuery(this).data("liindex", e);
        });
      }

      a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e);
    },
    manageNavigation: function manageNavigation(e, i) {
      t[e].navigation.use && (p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left / 2 - t[e].outNavDims.right / 2 : t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left), b(t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && b(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && b(t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = (t[e].navigation.arrows.left.h_align, t[e].navigation.arrows.left.h_offset_old), t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = (t[e].navigation.arrows.right.h_align, t[e].navigation.arrows.right.h_offset_old)), b(t[e].navigation.arrows.left, e), b(t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && a(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && a(t[e].navigation.tabs, e)));
    },
    showFirstTime: function showFirstTime(e) {
      u(e), t.hideUnHideNav(e);
    },
    selectNavElement: function selectNavElement(e, i, a, r) {
      for (var o = t[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) {
        t.gA(o[s], "key") === i ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected");
      }
    },
    transferParams: function transferParams(e, t) {
      if (void 0 !== t) for (var i in t.params) {
        e = e.replace(t.params[i].from, t.params[i].to);
      }
      return e;
    },
    updateNavElementContent: function updateNavElementContent(e, i, r, o, s) {
      if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
        var n = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
            l = t.gA(t[e].slides[n], "key"),
            d = 0,
            c = !1;

        for (var p in r.enable && t.selectNavElement(e, l, "tp-bullet"), o.enable && t.selectNavElement(e, l, "tp-thumb", function () {
          a(o, e);
        }), s.enable && t.selectNavElement(e, l, "tp-tab", function () {
          a(s, e);
        }), t[e].thumbs) {
          d = !0 === c ? d : p, c = t[e].thumbs[p].id === l || p == l || c;
        }

        var g = (d = parseInt(d, 0)) > 0 ? d - 1 : t[e].slideamount - 1,
            u = d + 1 == t[e].slideamount ? 0 : d + 1;

        if (!0 === i.enable && i.pi !== g && i.ni !== u) {
          if (i.pi = g, i.ni = u, i.left.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[g]), u > t[e].slideamount) return;
          i.right.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[u]), i.right.iholder = i.right.c.find(".tp-arr-imgholder"), i.left.iholder = i.left.c.find(".tp-arr-imgholder"), i.rtl ? (void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
            backgroundImage: "url(" + t[e].thumbs[u].src + ")"
          }), void 0 !== t[e].thumbs[g] && void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
            backgroundImage: "url(" + t[e].thumbs[g].src + ")"
          })) : (void 0 !== t[e].thumbs[g] && void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
            backgroundImage: "url(" + t[e].thumbs[g].src + ")"
          }), void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
            backgroundImage: "url(" + t[e].thumbs[u].src + ")"
          }));
        }
      }
    },
    createNavigation: function createNavigation(e) {
      var a = t[e].navigation.arrows,
          r = t[e].navigation.bullets,
          o = t[e].navigation.thumbnails,
          l = t[e].navigation.tabs,
          h = p(a),
          v = p(r),
          y = p(o),
          w = p(l);

      for (var x in s(e), n(e), h && (f(a, e), a.c = t[e].cpar.find(".tparrows")), t[e].slides) {
        if (t[e].slides.hasOwnProperty(x) && "true" != t.gA(t[e].slides[x], "not_in_nav")) {
          var k = jQuery(t[e].slides[t[e].slides.length - 1 - x]),
              L = jQuery(t[e].slides[x]);
          v && (t[e].navigation.bullets.rtl ? _(t[e].c, r, k, e) : _(t[e].c, r, L, e)), y && (t[e].navigation.thumbnails.rtl ? S(t[e].c, o, k, "tp-thumb", e) : S(t[e].c, o, L, "tp-thumb", e)), w && (t[e].navigation.tabs.rtl ? S(t[e].c, l, k, "tp-tab", e) : S(t[e].c, l, L, "tp-tab", e));
        }
      }

      v && b(r, e), y && b(o, e), w && b(l, e), (y || w) && t.updateDims(e), t[e].navigation.createNavigationDone = !0, y && jQuery.extend(!0, o, i(e, "thumb")), w && jQuery.extend(!0, l, i(e, "tab")), t[e].c.on("revolution.slide.onafterswap revolution.nextslide.waiting", function () {
        t.updateNavElementContent(e, a, r, o, l);
      }), c(a), c(r), c(o), c(l), t[e].cpar.on(t.ISM ? "touchstart touchmove" : "mouseenter mousemove", function (i) {
        void 0 !== i.target && void 0 !== i.target.className && "string" == typeof i.target.className && i.target.className.indexOf("rs-waction") >= 0 || !0 !== t[e].tpMouseOver && t[e].firstSlideAvailable && (t[e].tpMouseOver = !0, u(e), t.ISM && !0 !== t[e].someNavIsDragged && (g(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function () {
          t[e].tpMouseOver = !1, m(e);
        }, 150)));
      }), t[e].cpar.on(t.ISM ? "touchend" : "mouseleave ", function () {
        t[e].tpMouseOver = !1, m(e);
      }), (y || w || "carousel" === t[e].sliderType || t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && t.ISM) && d(e), t[e].navigation.initialised = !0, t.updateNavElementContent(e, a, r, o, l), t.showFirstTime(e);
    }
  });

  var a = function a(e, i) {
    if (void 0 !== e && null != e.mask) {
      var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
          r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
          o = e.mask.find(e.single + ".selected").data("liindex");
      o = (o = void 0 === (o = e.rtl ? t[i].slideamount - o : o) ? 0 : o) > 0 && 1 === t[i].sdir && e.visibleAmount > 1 ? o - 1 : o;
      var s = r / a,
          n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
          l = 0 - o * a,
          d = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
          c = l < 0 - (d - n) ? 0 - (d - n) : l,
          p = t.gA(e.wrap[0], "offset");
      p = void 0 === p ? 0 : p, s > 2 && (c = l - (p + a) <= 0 ? l - (p + a) < 0 - a ? p : c + a : c, c = l - a + p + r < a && l + (Math.round(s) - 2) * a < p ? l + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (d - n) ? 0 - (d - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
        top: c + "px",
        ease: "power3.inOut"
      })) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
        left: c + "px",
        ease: "power3.inOut"
      })), e.wrap.data("offset", c));
    }
  },
      r = function r(e, i, a, _r, o, s) {
    var n = a.parent().find(".tp-" + s + "s"),
        l = n.find(".tp-" + s + "s-inner-wrapper"),
        d = n.find(".tp-" + s + "-mask"),
        c = "vertical" === _r.direction ? _r.cw : _r.cw * o + parseFloat(_r.space) * (o - 1),
        p = "vertical" === _r.direction ? _r.ch * o + parseInt(_r.space) * (o - 1) : _r.ch,
        g = "vertical" === _r.direction ? {
      width: _r.cw + "px"
    } : {
      height: _r.ch + "px"
    };

    if (i.add(tpGS.gsap.set(n, g)), i.add(tpGS.gsap.set(l, {
      width: c + "px",
      height: p + "px"
    })), "horizontal" === _r.direction) {
      var u = Math.min(c, _r.cw * _r.visibleAmount + parseFloat(_r.space) * (_r.visibleAmount - 1));
      i.add(tpGS.gsap.set(d, {
        width: u + "px",
        height: p + "px"
      }));
    } else {
      var h = Math.min(p, _r.ch * _r.visibleAmount + parseFloat(_r.space) * (_r.visibleAmount - 1));
      i.add(tpGS.gsap.set(d, {
        width: c + "px",
        height: h + "px"
      }));
    }

    null !== l.outerWidth() && (t[e].thumbResized = !0);
    var m = l.find(".tp-" + s);
    return m && jQuery.each(m, function (e, t) {
      "vertical" === _r.direction ? i.add(tpGS.gsap.set(t, {
        top: e * (_r.ch + parseInt(void 0 === _r.space ? 0 : _r.space, 0)),
        width: _r.cw + "px",
        height: _r.ch + "px"
      })) : "horizontal" === _r.direction && i.add(tpGS.gsap.set(t, {
        left: e * (_r.cw + parseInt(void 0 === _r.space ? 0 : _r.space, 0)),
        width: _r.cw + "px",
        height: _r.ch + "px"
      }));
    }), i;
  },
      o = function o(e) {
    var t = 0;
    return "deltaY" in e || "deltaX" in e ? t = 0 != e.deltaY && -0 != e.deltaY || !(e.deltaX < 0 || e.deltaX > 0) ? e.deltaY : e.deltaX : ("detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120)), ((t = navigator.userAgent.match(/mozilla/i) ? 10 * t : t) > 300 || t < -300) && (t /= 10), t;
  },
      s = function s(e) {
    !0 === t[e].navigation.keyboardNavigation && t.document.on("keydown", function (i) {
      if ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) {
        if (void 0 !== t[e].keydown_time_stamp && new Date().getTime() - t[e].keydown_time_stamp < 1e3) return;
        t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType);
      }

      if ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) {
        if (void 0 !== t[e].keydown_time_stamp && new Date().getTime() - t[e].keydown_time_stamp < 1e3) return;
        t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType);
      }

      t[e].keydown_time_stamp = new Date().getTime();
    });
  },
      n = function n(e) {
    t[e].carousel.scrollTicker = t.carScrollTicker.bind(window, e), !0 !== t[e].navigation.mouseScrollNavigation && "on" !== t[e].navigation.mouseScrollNavigation && "carousel" !== t[e].navigation.mouseScrollNavigation || t[e].c[0].addEventListener("wheel", function (i) {
      var a = o(i),
          r = !1,
          s = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
          n = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1,
          l = void 0 !== t[e].topc ? t[e].topc[0].getBoundingClientRect() : 0 === t[e].canv.height ? t[e].cpar[0].getBoundingClientRect() : t[e].c[0].getBoundingClientRect(),
          d = l.top >= 0 && l.bottom <= t.winH ? 1 : l.top >= 0 && l.bottom >= t.winH ? (t.winH - Math.round(l.top)) / l.height : l.top <= 0 && l.bottom <= t.winH ? Math.round(l.bottom) / l.height : 1,
          c = a < 0 ? -1 : 1,
          p = t[e].navigation.wheelViewPort;

      if (d = Math.round(100 * d) / 100, "reverse" == t[e].navigation.mouseScrollReverse) {
        var g = n;
        n = s, s = g;
      }

      if (p - d <= t[e].navigation.threshold / 100 && !(d >= p) && !(l.top >= 0 && -1 === c || l.top <= 0 && 1 === c) && (i.preventDefault(), !t[e].mScrollTween)) {
        var u = "window" !== t[e].navigation.target && t[e].navigation.target ? t[e].navigation.target : window;
        t[e].mScrollTween = tpGS.gsap.to(u, {
          duration: jQuery.fn.revolution.isWebkit() ? .1 : .7,
          scrollTo: {
            y: t[e].topc
          },
          ease: "power2.out",
          onComplete: function onComplete() {
            t[e].mScrollTween.kill(), delete t[e].mScrollTween;
          }
        });
      }

      if (Math.abs(d - p) < .1 || d >= p) return "carousel" === t[e].sliderType && !1 === t[e].carousel.snap ? t.swipeAnimate({
        id: e,
        to: t[e].carousel.slide_offset + 5 * a,
        direction: a < 0 ? "left" : "right",
        easing: "power2.out",
        phase: "move"
      }) : (t[e].sc_indicator_dir = "reverse" === t[e].navigation.mouseScrollReverse && c < 0 || "reverse" !== t[e].navigation.mouseScrollReverse && c > 0 ? "reverse" !== t[e].navigation.mouseScrollReverse ? 0 : 1 : "reverse" !== t[e].navigation.mouseScrollReverse ? 1 : 0, "carousel" == t[e].navigation.mouseScrollNavigation || 0 === t[e].sc_indicator_dir && !n || 1 === t[e].sc_indicator_dir && !s ? void 0 === t[e].pr_processing_key && !0 !== t[e].justmouseScrolled && (t[e].sc_indicator = "arrow", "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 0 === t[e].sc_indicator_dir ? "reverse" === t[e].navigation.mouseScrollReverse ? -1 : 1 : "reverse" === t[e].navigation.mouseScrollReverse ? 1 : -1, "carousel" === t[e].sliderType), t[e].justmouseScrolled = !0, setTimeout(function () {
        t[e].justmouseScrolled = !1;
      }, t[e].navigation.wheelCallDelay)) : !0 !== t[e].justmouseScrolled && (r = !0)), !!r || (i.preventDefault(i), !1);
    }, {
      passive: !1
    });
  },
      l = function l(e, i) {
    var a = !1;

    for (var r in (void 0 === i.path || t.ISM) && (a = function (e, t) {
      for (; e && e !== document; e = e.parentNode) {
        if (e.tagName === t) return e;
      }

      return !1;
    }(i.target, e)), i.path) {
      i.path.hasOwnProperty(r) && i.path[r].tagName === e && (a = !0);
    }

    return a;
  },
      d = function d(e) {
    var i = t[e].carousel,
        a = t.is_android();

    if (jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), t[e].navigation.touch = void 0 === t[e].navigation.touch ? {} : t[e].navigation.touch, t[e].navigation.touch.swipe_direction = void 0 === t[e].navigation.touch.swipe_direction ? "horizontal" : t[e].navigation.touch.swipe_direction, t[e].cpar.find(".rs-nav-element").rsswipe({
      allowPageScroll: "vertical",
      triggerOnTouchLeave: !0,
      treshold: t[e].navigation.touch.swipe_treshold,
      fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
      excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
      tap: function tap(e, t) {
        if (void 0 !== t) var i = jQuery(t).closest("rs-thumb");
        void 0 !== i && i.length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-tab")).length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-bullet")).length > 0 && i.trigger("click");
      },
      swipeStatus: function swipeStatus(r, o, s, n, d, c, p) {
        if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
        var u = l("RS-THUMB", r),
            m = l("RS-TAB", r);
        !1 === u && !1 === m && !0 !== (u = "RS-THUMBS-WRAP" === r.target.tagName || "RS-THUMBS" === r.target.tagName || r.target.className.indexOf("tp-thumb-mask") >= 0) && (m = "RS-TABS-WRAP" === r.target.tagName || "RS-TABS" === r.target.tagName || r.target.className.indexOf("tp-tab-mask") >= 0);

        var v = "start" === o ? 0 : a ? p[0].end.x - p[0].start.x : r.pageX - i.screenX,
            f = "start" === o ? 0 : a ? p[0].end.y - p[0].start.y : r.pageY - i.screenY,
            y = u ? ".tp-thumbs" : ".tp-tabs",
            w = u ? ".tp-thumb-mask" : ".tp-tab-mask",
            b = u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
            _ = u ? ".tp-thumb" : ".tp-tab",
            S = u ? t[e].navigation.thumbnails : t[e].navigation.tabs,
            x = t[e].cpar.find(w),
            k = x.find(b),
            L = S.direction,
            O = "vertical" === L ? k.height() : k.width(),
            R = "vertical" === L ? x.height() : x.width(),
            I = "vertical" === L ? x.find(_).first().outerHeight(!0) + parseFloat(S.space) : x.find(_).first().outerWidth(!0) + parseFloat(S.space),
            M = void 0 === k.data("offset") ? 0 : parseInt(k.data("offset"), 0),
            T = 0;

        switch (o) {
          case "start":
            "vertical" === L && r.preventDefault(), i.screenX = a ? p[0].end.x : r.pageX, i.screenY = a ? p[0].end.y : r.pageY, t[e].cpar.find(y).addClass("dragged"), M = "vertical" === L ? k.position().top : k.position().left, k.data("offset", M), k.data("tmmove") && k.data("tmmove").pause(), t[e].someNavIsDragged = !0, h(e);
            break;

          case "move":
            if (O <= R) return !1;
            T = (T = M + ("vertical" === L ? f : v)) > 0 ? "horizontal" === L ? T - k.width() * (T / k.width() * T / k.width()) : T - k.height() * (T / k.height() * T / k.height()) : T;
            var C = "vertical" === L ? 0 - (k.height() - x.height()) : 0 - (k.width() - x.width());
            T = T < C ? "horizontal" === L ? T + k.width() * (T - C) / k.width() * (T - C) / k.width() : T + k.height() * (T - C) / k.height() * (T - C) / k.height() : T, "vertical" === L ? tpGS.gsap.set(k, {
              top: T + "px"
            }) : tpGS.gsap.set(k, {
              left: T + "px"
            }), g(t[e].hideAllNavElementTimer);
            break;

          case "end":
          case "cancel":
            return t[e].navigation.draggable && t[e].navigation.draggable.enable && t[e].navigation.draggable.enable(), i.draggable && i.draggable.enable && i.draggable.enable(), T = M + ("vertical" === L ? f : v), T = (T = "vertical" === L ? T < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : T : T < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : T) > 0 ? 0 : T, T = Math.abs(n) > I / 10 ? n <= 0 ? Math.floor(T / I) * I : Math.ceil(T / I) * I : n < 0 ? Math.ceil(T / I) * I : Math.floor(T / I) * I, T = (T = "vertical" === L ? T < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : T : T < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : T) > 0 ? 0 : T, "vertical" === L ? tpGS.gsap.to(k, .5, {
              top: T + "px",
              ease: "power3.out"
            }) : tpGS.gsap.to(k, .5, {
              left: T + "px",
              ease: "power3.out"
            }), T = T || ("vertical" === L ? k.position().top : k.position().left), k.data("offset", T), k.data("distance", n), t[e].cpar.find(y).removeClass("dragged"), t[e].someNavIsDragged = !1, !0;
        }
      }
    }), "carousel" === t[e].sliderType && t.setupCarousel(e), "carousel" !== t[e].sliderType && (t.ISM && t[e].navigation.touch.touchenabled || !0 !== t.ISM && t[e].navigation.touch.touchOnDesktop)) {
      t[e].navigation.proxy = document.createElement("div");
      var r = t[e].navigation,
          o = {
        trigger: t[e].c[0],
        type: "horizontal" === t[e].navigation.touch.swipe_direction ? "x" : "y",
        cursor: "pointer",
        lockAxis: !0,
        onPress: function onPress(i) {
          t.closestClass(i.target, "rs-nav-element") && (t[e].navigation.draggable.endDrag(), t[e].navigation.draggable.disable()), r.touch.pressX = i.pageX, r.touch.pressY = i.pageY;
        },
        onDragStart: function onDragStart() {
          var i = void 0 !== t[e].pr_processing_key ? t[e].pr_processing_key : void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key;
          "up" === this.getDirection() && i == t[e].slideamount - 1 || "down" === this.getDirection() && 0 === i ? r.forceScroll = !0 : r.forceScroll = !1;
        },
        onDragEnd: function onDragEnd(i) {
          t[e].sc_indicator = "arrow";
          var a,
              r = this.getDirection(),
              o = t[e].navigation;

          if (Math.abs(i.pageY - o.touch.pressY) > Math.abs(i.pageX - o.touch.pressX)) {
            if ("right" === r || "left" === r) return;
          } else if (Math.abs(i.pageY - o.touch.pressY) > Math.abs(i.pageX - o.touch.pressX) && ("up" === r || "down" === r)) return;

          return o.forceScroll ? (a = "up" === this.getDirection() ? t[e].cpar.offset().top + t[e].module.height : t.document.scrollTop() - (window.innerHeight - t[e].cpar[0].getBoundingClientRect().top), void (t[e].modal.useAsModal || tpGS.gsap.to([window, "body"], {
            scrollTo: a
          }))) : "horizontal" == t[e].navigation.touch.swipe_direction && "left" == r || "vertical" == t[e].navigation.touch.swipe_direction && "up" == r ? (t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1), !1) : "horizontal" == t[e].navigation.touch.swipe_direction && "right" == r || "vertical" == t[e].navigation.touch.swipe_direction && "down" == r ? (t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1), !1) : void 0;
        }
      };
      r.touch.drag_block_vertical || (t.ISM && (o.allowContextMenu = !0), o.allowEventDefault = !0), t[e].navigation.draggable = tpGS.draggable.create(t[e].navigation.proxy, o);
    }

    "carousel" === t[e].sliderType && (t.ISM && 0 == t[e].navigation.touch.mobileCarousel || !0 !== t.ISM && !1 === t[e].navigation.touch.desktopCarousel) && i.wrap.addClass("noswipe"), t[e].navigation.touch.drag_block_vertical && t[e].c.addClass("disableVerticalScroll");
  },
      c = function c(e) {
    e.hide_delay = t.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = t.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2;
  },
      p = function p(e) {
    return e && e.enable;
  },
      g = function g(e) {
    clearTimeout(e);
  },
      u = function u(e) {
    var i = t[e].navigation.maintypes;

    for (var a in i) {
      i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && void 0 !== t[e].navigation[i[a]].c && (g(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function (i) {
        g(i.hideCall), i.hide_onleave && !0 !== t[e].tpMouseOver || (void 0 === i.tween ? i.tween = v(i) : i.tween.play());
      }, t[e].navigation[i[a]].hide_onleave && !0 !== t[e].tpMouseOver ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]]));
    }
  },
      h = function h(e) {
    var i = t[e].navigation.maintypes;

    for (var a in i) {
      i.hasOwnProperty(a) && void 0 !== t[e].navigation[i[a]] && t[e].navigation[i[a]].hide_onleave && p(t[e].navigation[i[a]]) && g(t[e].navigation[i[a]].hideCall);
    }
  },
      m = function m(e, i) {
    var a = t[e].navigation.maintypes;

    for (var r in a) {
      a.hasOwnProperty(r) && void 0 !== t[e].navigation[a[r]] && t[e].navigation[a[r]].hide_onleave && p(t[e].navigation[a[r]]) && (g(t[e].navigation[a[r]].hideCall), t[e].navigation[a[r]].hideCall = setTimeout(function (e) {
        g(e.showCall), e.tween && e.tween.reverse();
      }, t.ISM ? parseInt(t[e].navigation[a[r]].hide_delay_mobile, 0) : parseInt(t[e].navigation[a[r]].hide_delay, 0), t[e].navigation[a[r]]));
    }
  },
      v = function v(e) {
    e.speed = void 0 === e.animSpeed ? .5 : e.animSpeed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
    var t = tpGS.gsap.timeline();

    for (var i in t.add(tpGS.gsap.to(e.c, e.speed, {
      delay: e.animDelay,
      opacity: 1,
      ease: "power3.inOut"
    }), 0), e.anims) {
      if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
        case "left":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            marginLeft: -50
          }, {
            delay: e.animDelay,
            marginLeft: "0px",
            ease: "power3.inOut"
          }), 0);
          break;

        case "right":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            marginLeft: 50
          }, {
            delay: e.animDelay,
            marginLeft: "0px",
            ease: "power3.inOut"
          }), 0);
          break;

        case "top":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            marginTop: -50
          }, {
            delay: e.animDelay,
            marginTop: "0px",
            ease: "power3.inOut"
          }), 0);
          break;

        case "bottom":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            marginTop: 50
          }, {
            delay: e.animDelay,
            marginTop: "0px",
            ease: "power3.inOut"
          }), 0);
          break;

        case "zoomin":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            scale: .5
          }, {
            delay: e.animDelay,
            scale: 1,
            ease: "power3.inOut"
          }), 0);
          break;

        case "zoomout":
          t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
            scale: 1.2
          }, {
            delay: e.animDelay,
            scale: 1,
            ease: "power3.inOut"
          }), 0);
      }
    }

    return t.play(), t;
  },
      f = function f(e, i) {
    e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.on("click", function () {
      "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext();
    }), e[e.rtl ? "right" : "left"].c.on("click", function () {
      "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev();
    }), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), b(e.left, i), b(e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0);
  },
      y = function y(e, i, a, r) {
    r = void 0 === r ? e.outerHeight(!0) : r;
    var o = null == t[a] ? 0 : 0 == t[a].canv.height ? t[a].module.height : t[a].canv.height,
        s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].module.height / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : 0 : 0,
        n = "top" === i.v_align ? {
      top: "0px",
      y: Math.round(i.v_offset + s) + "px"
    } : "center" === i.v_align ? {
      top: "50%",
      y: Math.round(0 - r / 2 + i.v_offset) + "px"
    } : {
      top: "100%",
      y: Math.round(0 - (r + i.v_offset + s)) + "px"
    };
    e.hasClass("outer-bottom") || tpGS.gsap.set(e, n);
  },
      w = function w(e, i, a, r) {
    r = void 0 === r ? e.outerWidth() : r;
    var o = "layergrid" === i.container ? t[a].module.width / 2 - t[a].gridwidth[t[a].level] * t[a].CM.w / 2 : 0,
        s = "left" === i.h_align ? {
      left: "0px",
      x: Math.round(i.h_offset + o) + "px"
    } : "center" === i.h_align ? {
      left: "50%",
      x: Math.round(0 - r / 2 + i.h_offset) + "px"
    } : {
      left: "100%",
      x: Math.round(0 - (r + i.h_offset + o)) + "px"
    };
    tpGS.gsap.set(e, s);
  },
      b = function b(e, i) {
    if (null != e && void 0 !== e.c) {
      var a = "fullwidth" == t[i].sliderLayout || "fullscreen" == t[i].sliderLayout ? t[i].module.width : t[i].canv.width,
          r = e.c.outerWidth(),
          o = e.c.outerHeight();

      if (!(r <= 0 || o <= 0) && (y(e.c, e, i, o), w(e.c, e, i, r), "outer-left" === e.position ? tpGS.gsap.set(e.c, {
        left: 0 - r + "px",
        x: e.h_offset + "px"
      }) : "outer-right" === e.position && tpGS.gsap.set(e.c, {
        right: 0 - r + "px",
        x: e.h_offset + "px"
      }), "tp-thumb" === e.type || "tp-tab" === e.type)) {
        var s = parseInt(e.padding_top || 0, 0),
            n = parseInt(e.padding_bottom || 0, 0),
            l = {},
            d = {};
        e.maxw > a && "outer-left" !== e.position && "outer-right" !== e.position ? (l.left = "0px", l.x = 0, l.maxWidth = a - 2 * e.wpad + "px", d.maxWidth = a - 2 * e.wpad + "px") : (l.maxWidth = e.maxw, d.maxWidth = a + "px"), e.maxh + 2 * e.wpad > t[i].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (l.top = "0px", l.y = 0, l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px") : (l.maxHeight = e.maxh + "px", d.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, (e.mhoff > 0 || e.mvoff > 0) && (d.padding = e.mvoff + "px " + e.mhoff + "px"), e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (s = n = 0), "vertical" === e.direction ? (l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", l.height = s + n + (t[i].conh - 2 * e.wpad) + "px", l.top = 0, l.y = 0, d.maxHeight = s + n + Math.min(e.maxh, t[i].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d), y(e.mask, e, i)) : "horizontal" === e.direction && (l.maxWidth = "100%", l.width = a - 2 * e.wpad + "px", l.left = 0, l.x = 0, d.maxWidth = e.maxw >= a ? "100%" : Math.min(e.maxw, a) + "px", tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d), w(e.mask, e, i))) : (tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d));
      }
    }
  },
      _ = function _(e, i, a, r) {
    0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, i.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + " nav-pos-hor-" + i.h_align + " nav-pos-ver-" + i.v_align + " nav-dir-" + i.direction + '"></rs-bullets>'));
    var o = a.data("key"),
        s = i.tmp;
    void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function (e, t) {
      s = s.replace(t.from, t.to);
    });
    var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
    void 0 !== t[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({
      backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")"
    }), i.c.append(n), e.append(i.c);
    var l = i.c.find(".tp-bullet").length,
        d = n.outerWidth(),
        c = n.outerHeight(),
        p = d + parseInt(void 0 === i.space ? 0 : i.space, 0),
        g = c + parseInt(void 0 === i.space ? 0 : i.space, 0);
    "vertical" === i.direction ? (n.css({
      top: (l - 1) * g + "px",
      left: "0px"
    }), i.c.css({
      height: (l - 1) * g + c,
      width: d
    })) : (n.css({
      left: (l - 1) * p + "px",
      top: "0px"
    }), i.c.css({
      width: (l - 1) * p + d,
      height: c
    })), n.on("click", function () {
      "carousel" === t[r].sliderType && (t[r].ctNavElement = !0), t[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected");
    }), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0);
  },
      S = function S(e, i, a, r, o) {
    var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
        n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
        l = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
        d = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
        c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
        p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
    i.type = r, i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, void 0 === i.c && (i.wpad = i.wrapper_padding, i.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + i.direction + " nav-pos-ver-" + i.v_align + " nav-pos-hor-" + i.h_align + " rs-nav-element " + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + (void 0 === i.style ? "" : i.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), i.c.css({
      overflow: "visible",
      position: "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute",
      background: i.wrapper_color,
      padding: i.wpad + "px",
      boxSizing: "contet-box"
    }), "outer-top" === i.position ? e.parent().prepend(i.c) : "outer-bottom" === i.position ? e.after(i.c) : e.append(i.c), "outer-left" !== i.position && "outer-right" !== i.position || tpGS.gsap.set(t[o].c, {
      overflow: "visible"
    }), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0));
    var g = a.data("key"),
        u = i.c.find(n),
        h = u.find(l),
        m = i.tmp;
    i.space = parseFloat(i.space) || 0, i.maxw = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width, i.maxh = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1), i.maxw += 2 * i.mhoff, i.maxh += 2 * i.mvoff, void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function (e, t) {
      m = m.replace(t.from, t.to);
    });
    var v = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + m + "<" + p + ">");
    void 0 !== t[o].thumbs[a.index()] && v.find(c).css({
      backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")"
    }), h.append(v);

    var f = i.c.find(d).length,
        y = v.outerWidth(),
        w = v.outerHeight(),
        b = y + parseInt(void 0 === i.space ? 0 : i.space, 0),
        _ = w + parseInt(void 0 === i.space ? 0 : i.space, 0);

    "vertical" === i.direction ? (v.css({
      top: (f - 1) * _ + "px",
      left: "0px"
    }), h.css({
      height: (f - 1) * _ + w,
      width: y
    })) : (v.css({
      left: (f - 1) * b + "px",
      top: "0px"
    }), h.css({
      width: (f - 1) * b + y,
      height: w
    })), u.css({
      maxWidth: i.maxw + "px",
      maxHeight: i.maxh + "px"
    }), i.c.css({
      maxWidth: i.maxw + "px",
      maxHeight: i.maxh + "px"
    }), v.on("click", function () {
      t[o].sc_indicator = "bullet", "carousel" === t[o].sliderType && (t[o].ctNavElement = !0);
      var i = e.parent().find(l).data("distance");
      i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"));
    });
  },
      x = function x(e, i, a) {
    return null == e || void 0 === e.c ? a : (e.hide_under > t[i].canv.width || t[i].canv.width > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), e.isVisible = !1, a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), e.isVisible = !0, a = !0), e.tpForceNotVisible = !1), a);
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.navigation = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1, jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
  jQuery.extend(!0, t, {
    bgW: function bgW(e, i) {
      return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].module.width;
    },
    bgH: function bgH(e, i) {
      return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].module.height;
    },
    getPZSides: function getPZSides(e, t, i, a, r, o, s) {
      var n = e * i,
          l = t * i,
          d = Math.abs(a - n),
          c = Math.abs(r - l),
          p = new Object();
      return p.l = (0 - o) * d, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + l, p.h = o, p.v = s, p;
    },
    getPZCorners: function getPZCorners(e, i, a, r) {
      var o = e.bgposition.split(" ") || "center center",
          s = "center" == o[0] ? "50%" : "left" == o[0] || "left" == o[1] ? "0%" : "right" == o[0] || "right" == o[1] ? "100%" : o[0],
          n = "center" == o[1] ? "50%" : "top" == o[0] || "top" == o[1] ? "0%" : "bottom" == o[0] || "bottom" == o[1] ? "100%" : o[1];
      s = parseInt(s, 0) / 100 || 0, n = parseInt(n, 0) / 100 || 0;
      var l = new Object();
      return l.start = t.getPZSides(r.start.width, r.start.height, r.start.scale, i, a, s, n), l.end = t.getPZSides(r.start.width, r.start.height, r.end.scale, i, a, s, n), l;
    },
    getPZValues: function getPZValues(e) {
      var t = e.panzoom.split(";"),
          i = {
        duration: 10,
        ease: "none",
        scalestart: 1,
        scaleend: 1,
        rotatestart: .01,
        rotateend: 0,
        blurstart: 0,
        blurend: 0,
        offsetstart: "0/0",
        offsetend: "0/0"
      };

      for (var a in t) {
        if (t.hasOwnProperty(a)) {
          var r = t[a].split(":"),
              o = r[0],
              s = r[1];

          switch (o) {
            case "d":
              i.duration = parseInt(s, 0) / 1e3;
              break;

            case "e":
              i.ease = s;
              break;

            case "ss":
              i.scalestart = parseInt(s, 0) / 100;
              break;

            case "se":
              i.scaleend = parseInt(s, 0) / 100;
              break;

            case "rs":
              i.rotatestart = parseInt(s, 0);
              break;

            case "re":
              i.rotateend = parseInt(s, 0);
              break;

            case "bs":
              i.blurstart = parseInt(s, 0);
              break;

            case "be":
              i.blurend = parseInt(s, 0);
              break;

            case "os":
              i.offsetstart = s;
              break;

            case "oe":
              i.offsetend = s;
          }
        }
      }

      return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i;
    },
    pzCalcL: function pzCalcL(e, i, a) {
      var r,
          o,
          s,
          n,
          l,
          d,
          c = void 0 === a.panvalues ? jQuery.extend(!0, {}, t.getPZValues(a)) : jQuery.extend(!0, {}, a.panvalues),
          p = c.offsetstart,
          g = c.offsetend,
          u = {
        start: {
          width: e,
          height: _R_is_Editor ? e / a.loadobj.width * a.loadobj.height : e / a.owidth * a.oheight,
          rotation: Math.PI / 180 * c.rotatestart,
          rotationV: c.rotatestart,
          scale: c.scalestart,
          transformOrigin: "0% 0%"
        },
        end: {
          rotation: Math.PI / 180 * c.rotateend,
          rotationV: c.rotateend,
          scale: c.scaleend
        }
      };
      c.scalestart, a.owidth, a.oheight, c.scaleend, a.owidth, a.oheight;
      return u.start.height < i && (d = i / u.start.height, u.start.height = i, u.start.width = u.start.width * d), .01 === c.rotatestart && 0 === c.rotateend && (delete u.start.rotation, delete u.end.rotation), r = t.getPZCorners(a, e, i, u), p[0] = parseFloat(p[0]) + r.start.l, g[0] = parseFloat(g[0]) + r.end.l, p[1] = parseFloat(p[1]) + r.start.t, g[1] = parseFloat(g[1]) + r.end.t, o = r.start.r - r.start.l, s = r.start.b - r.start.t, n = r.end.r - r.end.l, l = r.end.b - r.end.t, p[0] = p[0] > 0 ? 0 : o + p[0] < e ? e - o : p[0], g[0] = g[0] > 0 ? 0 : n + g[0] < e ? e - n : g[0], p[1] = p[1] > 0 ? 0 : s + p[1] < i ? i - s : p[1], g[1] = g[1] > 0 ? 0 : l + g[1] < i ? i - l : g[1], u.start.x = p[0], u.start.y = p[1], u.end.x = g[0], u.end.y = g[1], u.end.ease = c.ease, u;
    },
    pzDrawShadow: function pzDrawShadow(e, i, a) {
      ("animating" === i.currentState || null == i.panFake || i.pzLastFrame) && (i.pzLastFrame = !1, i.shadowCTX.clearRect(0, 0, i.shadowCanvas.width, i.shadowCanvas.height), i.shadowCTX.save(), void 0 !== a.rotation ? i.shadowCTX.transform(Math.cos(a.rotation) * a.scale, Math.sin(a.rotation) * a.scale, Math.sin(a.rotation) * -a.scale, Math.cos(a.rotation) * a.scale, a.x, a.y) : i.shadowCTX.transform(a.scale, 0, 0, a.scale, a.x, a.y), i.shadowCTX.drawImage(i.loadobj.img, 0, 0, a.width, a.height), i.shadowCTX.restore()), "animating" !== i.currentState ? null != i.panFake ? (i.panFake.visible || (i.panFake.visible = !0, i.panFake.img.style.opacity = 1, i.canvas.style.opacity = 0), tpGS.gsap.set(i.panFake.img, {
        width: a.width,
        height: a.height,
        force3D: !0,
        x: a.x,
        y: a.y,
        transformOrigin: "0% 0%",
        rotationZ: a.rotationV + "deg",
        scale: a.scale
      }), void 0 !== a.blur && (i.panFake.img.style.filter = 0 === a.blur ? "none" : "blur(" + a.blur + "px)")) : (t.updateSlideBGs(e, a.slidekey, i, !0), void 0 !== a.blur && (i.canvas.style.filter = 0 === a.blur ? "none" : "blur(" + a.blur + "px)")) : (void 0 !== i.panFake && !1 !== i.panFake.visible && (i.panFake.visible = !1, i.panFake.img.style.opacity = 0, i.canvas.style.opacity = 1, i.panFake.img.style.filter = "none"), void 0 !== a.blur && i.canvasFilter ? i.canvasFilterBlur = a.blur : i.canvas.style.filter = 0 === a.blur ? "none" : "blur(" + a.blur + "px)");
    },
    startPanZoom: function startPanZoom(e, i, a, r, o, s) {
      var n = _R_is_Editor ? e : e.data();

      if (void 0 !== n.panzoom && null !== n.panzoom) {
        var l = _R_is_Editor ? n : t[i].sbgs[s];
        _R_is_Editor || "carousel" !== t[i].sliderType || (t[i].carousel.justify && void 0 === t[i].carousel.slide_widths && t.setCarouselDefaults(i, !0), t[i].carousel.justify || (void 0 === t[i].carousel.slide_width && (t[i].carousel.slide_width = !0 !== t[i].carousel.stretch ? t[i].gridwidth[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.width), void 0 === t[i].carousel.slide_height && (t[i].carousel.slide_height = !0 !== t[i].carousel.stretch ? t[i].gridheight[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.height)));
        var d,
            c = t.getmDim(i, r, l),
            p = t.pzCalcL(c.width, c.height, n);
        l.pzAnim = p, _R_is_Editor || (t[i].panzoomTLs = void 0 === t[i].panzoomTLs ? {} : t[i].panzoomTLs, t[i].panzoomBGs = void 0 === t[i].panzoomBGs ? {} : t[i].panzoomBGs, void 0 === t[i].panzoomBGs[r] && (t[i].panzoomBGs[r] = e), d = t[i].panzoomTLs[r]), a = a || 0, void 0 !== d && (d.pause(), d.kill(), d = void 0), d = tpGS.gsap.timeline({
          paused: !0
        }), n.panvalues.duration = NaN === n.panvalues.duration || void 0 === n.panvalues.duration ? 10 : n.panvalues.duration, _R_is_Editor || void 0 === n || void 0 === l || (l.panvalues = n.panvalues), void 0 !== l && (void 0 === l.shadowCanvas && (l.shadowCanvas = document.createElement("canvas"), l.shadowCTX = l.shadowCanvas.getContext("2d"), l.shadowCanvas.style.background = "transparent", l.shadowCanvas.style.opacity = 1), l.shadowCanvas.width !== c.width && (l.shadowCanvas.width = c.width), l.shadowCanvas.height !== c.height && (l.shadowCanvas.height = c.height), p.slideindex = r, p.slidekey = _R_is_Editor ? void 0 : s, p.start.slidekey = p.slidekey, t.pzDrawShadow(i, l, p.start), p.end.onUpdate = function () {
          t.pzDrawShadow(i, l, p.start);
        }, l.panStart = jQuery.extend(!0, {}, p.start), void 0 === n.panvalues.blurstart || void 0 === n.panvalues.blurend || 0 === n.panvalues.blurstart && 0 === n.panvalues.blurend || (p.start.blur = n.panvalues.blurstart, p.end.blur = n.panvalues.blurend), (!_R_is_Editor && void 0 === p.start.blur && !t.isFF || window.isSafari11 && t.ISM) && (l.panFake = void 0 === l.panFake ? {
          img: l.loadobj.img.cloneNode(!0)
        } : l.panFake, void 0 !== l.panFake && (!0 !== l.panFake.appended && (l.panFake.appended = !0, l.sbg.appendChild(l.panFake.img), l.panFake.img.style.position = "absolute", l.panFake.img.style.display = "block", l.panFake.img.style.zIndex = 0, l.panFake.img.style.opacity = 0, l.panFake.img.style.top = "0px", l.panFake.img.style.left = "0px"), l.panFake.img.width = p.start.width, l.panFake.img.height = p.start.height)), d.add(tpGS.gsap.to(p.start, n.panvalues.duration, p.end), 0), d.progress(a), "play" !== o && "first" !== o || d.play(), _R_is_Editor ? RVS.TL[RVS.S.slideId].panzoom = d : t[i].panzoomTLs[r] = d);
      }
    }
  }), window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.panzoom = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = jQuery.fn.revolution;
  jQuery.extend(!0, t, {
    checkForParallax: function checkForParallax(e) {
      var r = t[e].parallax;

      if (!r.done) {
        if (r.done = !0, t.ISM && r.disable_onmobile) return !1;

        if ("3D" == r.type || "3d" == r.type) {
          if (t.addSafariFix(e), tpGS.gsap.set(t[e].c, {
            overflow: r.ddd_overflow
          }), tpGS.gsap.set(t[e].canvas, {
            overflow: r.ddd_overflow
          }), ("carousel" != t[e].sliderType || "carousel" == t[e].sliderType && "mousedrag" == t[e].parallax.type) && r.ddd_shadow) {
            var o = jQuery('<div class="dddwrappershadow"></div>');
            tpGS.gsap.set(o, {
              force3D: "auto",
              transformPerspective: 1600,
              transformOrigin: "50% 50%",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0
            }), t[e].c.prepend(o);
          }

          for (var s in t[e].slides) {
            t[e].slides.hasOwnProperty(s) && i(jQuery(t[e].slides[s]), e);
          }

          t[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(t[e].c.find("rs-static-layers"), {
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }), i(t[e].c.find("rs-static-layers"), e));
        }

        r.pcontainers = {}, r.bgcontainers = [], r.bgcontainer_depths = [], r.speed = void 0 === r.speed ? 0 : parseInt(r.speed, 0), r.speedbg = void 0 === r.speedbg ? 0 : parseInt(r.speedbg, 0), r.speedls = void 0 === r.speedls ? 0 : parseInt(r.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function () {
          var i = jQuery(this),
              a = i.data("parallax");
          window.isSafari11 || (t[e].parZ = 1), void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (r.bgcontainers.push(i.closest("rs-sbg-px")), r.bgcontainer_depths.push(t[e].parallax.levels[parseInt(a, 0) - 1] / 100));
        });

        for (s = 1; s <= r.levels.length; s++) {
          for (var n in t[e].slides) {
            if (t[e].slides.hasOwnProperty(n)) {
              var l = (c = t[e].slides[n]).dataset.key;
              void 0 === r.pcontainers[l] && (r.pcontainers[l] = {}), a(s, r, c, r.pcontainers[l]);
            }
          }

          l = "static";
          void 0 === r.pcontainers[l] && (r.pcontainers[l] = {}), a(s, r, t[e].slayers[0], r.pcontainers[l]), JSON.stringify(r.pcontainers[l]) == JSON.stringify({}) && delete r.pcontainers[l];
        }

        if ("mouse" == r.type || "mousedrag" == r.type || "mousescroll" == r.type || "3D" == r.type || "3d" == r.type) {
          var d = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";

          for (var n in "carousel" === t[e].sliderType && (d = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), r.sctors = {}, t[e].slides) {
            if (t[e].slides.hasOwnProperty(n)) {
              var c;
              l = (c = t[e].slides[n]).dataset.key;
              r.sctors[l] = c.querySelectorAll(d);
            }
          }

          t[e].slayers[0] && (r.sctors["static"] = t[e].slayers[0].querySelectorAll(d)), r.mouseEntered = !1, t[e].c.on("mouseenter", function (i) {
            var a = t[e].c.offset().top,
                o = t[e].c.offset().left;
            r.mouseEnterX = i.pageX - o, r.mouseEnterY = i.pageY - a, r.mouseEntered = !0;
          }), r.parallaxHandler = this.updateParallax.bind(this, e, r), r.hasAlreadyPermission = !1, "mousedrag" != r.type && t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function (e) {
            r.eventData = e, void 0 !== r.frame && "mouseleave" !== e.type || (r.frame = window.requestAnimationFrame(r.parallaxHandler));
          }), t.ISM && (t.modulesNeedOrientationListener = null == t.modulesNeedOrientationListener ? {} : t.modulesNeedOrientationListener, t.modulesNeedOrientationListener[e] = !0, t.addDeviceOrientationListener(e));
        }

        var p = t[e].scrolleffect;
        p.set && (p.multiplicator_layers = parseFloat(p.multiplicator_layers), p.multiplicator = parseFloat(p.multiplicator)), void 0 !== p._L && 0 === p._L.length && (p._L = !1), void 0 !== p.bgs && 0 === p.bgs.length && (p.bgs = !1);
      }
    },
    removeIOSPermissionWait: function removeIOSPermissionWait() {
      document.querySelectorAll(".iospermaccwait").forEach(function (e) {
        e.classList.add("permanenthidden");
      });
    },
    addDeviceOrientationListener: function addDeviceOrientationListener(e) {
      var i = t[e].parallax;
      window.addEventListener("deviceorientation", function (a) {
        t.modulesNeedOrientationListener[e] && (t.modulesNeedOrientationListener[e] = !1, t.removeIOSPermissionWait()), i.eventData = a, void 0 === i.frame && (i.frame = window.requestAnimationFrame(i.parallaxHandler));
      });
    },
    getAccelerationPermission: function getAccelerationPermission(e) {
      DeviceMotionEvent.requestPermission().then(function (e) {
        if ("granted" == e) for (var i in t.modulesNeedOrientationListener) {
          t.modulesNeedOrientationListener.hasOwnProperty(i) && (t.modulesNeedOrientationListener[i] = !1, t.removeIOSPermissionWait(), t.addDeviceOrientationListener(i));
        }
      });
    },
    getLayerParallaxOffset: function getLayerParallaxOffset(e, i, a) {
      return void 0 !== t[e].parallax && void 0 !== t[e].parallax.pcontainers && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey] && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey][i] ? Math.abs(t[e].parallax.pcontainers[t[e]._L[i].slidekey][i]["offs" + a]) : 0;
    },
    updateParallax: function updateParallax(e, i) {
      i.frame && (i.frame = window.cancelAnimationFrame(i.frame));
      var a,
          r,
          o = i.eventData,
          s = t[e].c.offset().left,
          n = t[e].c.offset().top,
          l = t[e].canv.width,
          d = t[e].canv.height,
          c = i.speed / 1e3 || 3;

      if ("mousedrag" == i.type ? (r = -20 * t[e].carousel.delta, a = -20 * t[e].carousel.delta, t[e].carousel.fromWheel ? "v" === t[e].carousel.orientation ? a = 0 : r = 0 : "v" === t[e].carousel.orientation ? a = t[e].carousel.cX - t[e].carousel.lerpX : r = t[e].carousel.cY - t[e].carousel.lerpY) : "enterpoint" == i.origo && "deviceorientation" !== o.type ? (!1 === i.mouseEntered && (i.mouseEnterX = o.pageX - s, i.mouseEnterY = o.pageY - n, i.mouseEntered = !0), a = i.mouseEnterX - (o.pageX - s), r = i.mouseEnterY - (o.pageY - n), c = i.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = l / 2 - (o.pageX - s), r = d / 2 - (o.pageY - n)), ("mousedrag" != t[e].parallax.type || t[e].carousel.isPressed) && o && "deviceorientation" == o.type) {
        var p, g, u;
        p = o.beta - 60, g = o.gamma, u = p;
        var h = Math.abs(i.orientationX - g) > 1 || Math.abs(i.orientationY - u) > 1;
        if (i.orientationX = g, i.orientationY = u, !h) return;

        if (t.winW > t.getWinH(e)) {
          var m = g;
          g = u, u = m;
        }

        a = 360 / l * (g *= 1.5), r = 180 / d * (u *= 1.5);
      }

      for (var v in !o || "mouseleave" !== o.type && "mouseout" !== o.type ? "mousedrag" == t[e].parallax.type && t[e].carousel.isPressed && ("v" === t[e].carousel.orientation && "same" == i.car_dir && (a = 0), "same" == i.car_dir ? "v" === t[e].carousel.orientation ? a = 0 : r = 0 : "opposite" == i.car_dir && ("v" === t[e].carousel.orientation ? (a = r, r = 0) : (r = a, a = 0)), "v" === t[e].carousel.orientation ? (r *= i.car_smulti, a *= i.car_omulti) : (r *= i.car_omulti, a *= i.car_smulti)) : i.mouseEntered = !1, i.pcontainers) {
        if (i.pcontainers.hasOwnProperty(v)) {
          var f = !1;
          if ("mousedrag" == i.type && !t[e].carousel.justify) for (var y = 0; y < t[e].slideamount; y++) {
            t[e].carousel.trackArr[y].elem.getAttribute("data-key") === v && Math.abs(t[e].carousel.trackArr[y].progress <= 1) && (f = !0);
          }
          if (void 0 === t[e].activeRSSlide || "static" === v || f && "all" == i.car_env || t[e].slides[t[e].activeRSSlide].dataset.key === v) for (var y in i.pcontainers[v]) {
            if (i.pcontainers[v].hasOwnProperty(y)) {
              var w = i.pcontainers[v][y];
              w.pl = "3D" == i.type || "3d" == i.type ? w.depth / 200 : w.depth / 100, w.offsh = a * w.pl, w.offsv = r * w.pl, "mousescroll" == i.type ? tpGS.gsap.to(w.tpw, c, {
                force3D: "auto",
                x: w.offsh,
                ease: "power3.out",
                overwrite: "all"
              }) : tpGS.gsap.to(w.tpw, c, {
                force3D: "auto",
                x: w.offsh,
                y: w.offsv,
                ease: "power3.out",
                overwrite: "all"
              });
            }
          }
        }
      }

      if ("3D" == i.type || "3d" == i.type) for (var v in i.sctors) {
        if (i.sctors.hasOwnProperty(v) && (void 0 === t[e].activeRSSlide || "static" === v || t[e].slides[t[e].activeRSSlide].dataset.key === v || t.isFF)) for (var y in i.sctors[v]) {
          if (i.sctors[v].hasOwnProperty(y)) {
            n = jQuery(i.sctors[v][y]);

            var b = t.isFirefox() ? Math.min(25, i.levels[i.levels.length - 1]) / 200 : i.levels[i.levels.length - 1] / 200,
                _ = a * b,
                S = r * b,
                x = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 100) || 0,
                k = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 100) || 0,
                L = n.closest("rs-slide"),
                O = 0,
                R = !1;

            "deviceorientation" === o.type && (_ = a * (b = i.levels[i.levels.length - 1] / 200), S = r * b * 3, x = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 500) || 0, k = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 700) || 0), n.hasClass("dddwrapper-layer") && (O = i.ddd_z_correction || 65, R = !0), n.hasClass("dddwrapper-layer") && (_ = 0, S = 0), L.index() === t[e].pr_active_key || "carousel" != t[e].sliderType || "carousel" == t[e].sliderType && "mousedrag" == t[e].parallax.type ? !i.ddd_bgfreeze || R ? tpGS.gsap.to(n, c, {
              rotationX: k,
              rotationY: -x,
              x: _,
              z: O,
              y: S,
              ease: "power3.out",
              overwrite: "all"
            }) : tpGS.gsap.to(n, .5, {
              force3D: "auto",
              rotationY: 0,
              rotationX: 0,
              z: 0,
              ease: "power3.out",
              overwrite: "all"
            }) : tpGS.gsap.to(n, .5, {
              force3D: "auto",
              rotationY: 0,
              x: 0,
              y: 0,
              rotationX: 0,
              z: 0,
              ease: "power3.out",
              overwrite: "all"
            }), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, {
              z: 0,
              ease: "power3.out"
            });
          }
        }
      }
    },
    parallaxProcesses: function parallaxProcesses(e, i, a, r) {
      var o = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t.lastwindowheight)) : Math.min(1, Math.max(0, (0 - (i.top - t.lastwindowheight)) / (i.hheight + t.lastwindowheight))),
          s = (i.top >= 0 && i.top <= t.lastwindowheight || i.top <= 0 && i.bottom >= 0 || i.top <= 0 && i.bottom, t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key]);

      if (t[e].scrollProg = o, t[e].scrollProgBasics = {
        top: i.top,
        height: i.hheight,
        bottom: i.bottom
      }, t[e].sbtimeline.fixed ? (!1 === t[e].fixedScrollOnState || 0 !== t[e].drawUpdates.cpar.left || !t.stickySupported || 0 != t[e].fullScreenOffsetResult && null != t[e].fullScreenOffsetResult ? t.stickySupported = !1 : (t[e].topc.addClass("rs-stickyscrollon"), t[e].fixedScrollOnState = !0), void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), i.top >= t[e].fullScreenOffsetResult && i.top <= t.lastwindowheight ? (o = t[e].sbtimeline.fixStart * (1 - i.top / t.lastwindowheight) / 1e3, !0 !== t.stickySupported && !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
        top: 0,
        y: 0
      }), t[e].fixedScrollOnState = !1)) : i.top <= t[e].fullScreenOffsetResult && i.bottom >= t[e].module.height ? (!0 !== t.stickySupported && !0 !== t[e].fixedScrollOnState && (t[e].fixedScrollOnState = !0, t[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
        top: 0,
        y: t[e].fullScreenOffsetResult
      })), o = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(i.top) / (i.hheight - t[e].module.height))) / 1e3) : (!0 !== t.stickySupported && (tpGS.gsap.set(t[e].cpar, {
        top: t[e].scrollproc >= 0 ? 0 : i.height - t[e].module.height
      }), !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), t[e].fixedScrollOnState = !1)), o = i.top > t.lastwindowheight ? 0 : (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - i.bottom / t[e].module.height)) / 1e3)) : o = t[e].duration * o / 1e3, void 0 !== s && void 0 !== t.gA(s, "key") && !0 !== a) {
        var n = 0;

        for (var l in t[e].sbas[t.gA(s, "key")]) {
          if (void 0 !== t[e]._L[l] && null == t[e]._L[l].timeline && n++, void 0 !== t[e]._L[l] && void 0 !== t[e]._L[l].timeline && (1 == t[e]._L[l].animationonscroll || "true" == t[e]._L[l].animationonscroll)) {
            n = -9999;
            var d = void 0 !== t[e]._L[l].scrollBasedOffset ? o + t[e]._L[l].scrollBasedOffset : o;
            d = d <= 0 ? 0 : d < .1 ? .1 : d, t[e]._L[l].animteToTime !== d && (t[e]._L[l].animteToTimeCache = t[e]._L[l].animteToTime, t[e]._L[l].animteToTime = d, tpGS.gsap.to(t[e]._L[l].timeline, t[e].sbtimeline.speed, {
              time: d,
              ease: t[e].sbtimeline.ease
            }));
          }
        }

        n > 0 && requestAnimationFrame(function () {
          t.parallaxProcesses(e, i, a, r);
        }), t[e].c.trigger("timeline_scroll_processed", {
          id: e,
          mproc: o,
          speed: t[e].sbtimeline.speed
        });
      }

      if (t.ISM && t[e].parallax.disable_onmobile) return !1;
      var c,
          p = t[e].parallax;

      if (void 0 !== t[e].slides[t[e].pr_processing_key] && void 0 !== t[e].slides[t[e].pr_processing_key].dataset && (c = t[e].slides[t[e].pr_processing_key].dataset.key), "3d" != p.type && "3D" != p.type) {
        if ("scroll" == p.type || "mousescroll" == p.type) for (var g in p.pcontainers) {
          if (p.pcontainers.hasOwnProperty(g) && (void 0 === t[e].activeRSSlide || "static" === g || t[e].slides[t[e].activeRSSlide].dataset.key === g || c === g)) for (var u in p.pcontainers[g]) {
            if (p.pcontainers[g].hasOwnProperty(u)) {
              var h = p.pcontainers[g][u],
                  m = void 0 !== r ? r : p.speedls / 1e3 || 0;
              h.pl = h.depth / 100, h.offsv = Math.round(t[e].scrollproc * (-h.pl * t[e].canv.height) * 10) / 10 || 0, tpGS.gsap.to(h.tpw, m, {
                overwrite: "auto",
                force3D: "auto",
                y: h.offsv
              });
            }
          }
        }
        if (p.bgcontainers) for (u = 0; u < p.bgcontainers.length; u++) {
          var v = p.bgcontainers[u],
              f = p.bgcontainer_depths[u],
              y = t[e].scrollproc * (-f * t[e].canv.height) || 0;
          m = void 0 !== r ? r : p.speedbg / 1e3 || .015;
          m = void 0 !== t[e].parallax.lastBGY && 0 === m && Math.abs(y - t[e].parallax.lastBGY) > 50 ? .15 : m, tpGS.gsap.to(v, m, {
            position: "absolute",
            top: "0px",
            left: "0px",
            backfaceVisibility: "hidden",
            force3D: "true",
            y: y + "px"
          }), t[e].parallax.lastBGY = y;
        }
      }

      var w = t[e].scrolleffect;

      if (w.set && (!t.ISM || !1 === w.disable_onmobile)) {
        var b = Math.abs(t[e].scrollproc) - w.tilt / 100;

        if (b = b < 0 ? 0 : b, !1 !== w._L) {
          var _ = 1 - b * w.multiplicator_layers,
              S = {
            force3D: "true"
          };

          if ("top" == w.direction && t[e].scrollproc >= 0 && (_ = 1), "bottom" == w.direction && t[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, w.fade && (S.opacity = _), w.scale) {
            var x = _;
            S.scale = 1 - x + 1;
          }

          if (w.blur) O = (O = (1 - _) * w.maxblur) <= .03 ? 0 : O, S["-webkit-filter"] = "blur(" + O + "px)", S.filter = "blur(" + O + "px)", window.isSafari11 && void 0 !== w._L && void 0 !== w._L[0] && void 0 !== w._L[0][0] && "RS-MASK-WRAP" == w._L[0][0].tagName && (S.z = .001);

          if (w.grayscale) {
            var k = "grayscale(" + 100 * (1 - _) + "%)";
            S["-webkit-filter"] = void 0 === S["-webkit-filter"] ? k : S["-webkit-filter"] + " " + k, S.filter = void 0 === S.filter ? k : S.filter + " " + k;
          }

          tpGS.gsap.set(w._L, S);
        }

        if (!1 !== w.bgs) {
          _ = 1 - b * w.multiplicator, S = {
            backfaceVisibility: "hidden",
            force3D: "true"
          };

          for (var L in "top" == w.direction && t[e].scrollproc >= 0 && (_ = 1), "bottom" == w.direction && t[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, w.bgs) {
            if (w.bgs.hasOwnProperty(L)) {
              if (w.bgs[L].fade && (S.opacity = _), w.bgs[L].blur) {
                var O = (1 - _) * w.maxblur;
                S["-webkit-filter"] = "blur(" + O + "px)", S.filter = "blur(" + O + "px)";
              }

              if (w.bgs[L].grayscale) {
                k = "grayscale(" + 100 * (1 - _) + "%)";
                S["-webkit-filter"] = void 0 === S["-webkit-filter"] ? k : S["-webkit-filter"] + " " + k, S.filter = void 0 === S.filter ? k : S.filter + " " + k;
              }

              tpGS.gsap.set(w.bgs[L].c, S);
            }
          }
        }
      }
    }
  });

  var i = function i(e, _i2) {
    var a = t[_i2].parallax;
    e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');
    var r = e[0].querySelectorAll(".rs-parallax-wrap"),
        o = document.createElement("div");
    o.className = "dddwrapper-layer", o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.zIndex = 5, o.style.overflow = a.ddd_layer_overflow;

    for (var s = 0; s < r.length; s++) {
      r.hasOwnProperty(s) && null === t.closestNode(r[s], "RS-GROUP") && null === t.closestNode(r[s], "RS-ROW") && o.appendChild(r[s]);
    }

    e[0].appendChild(o), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
    var n = e.find(".dddwrapper"),
        l = e.find(".dddwrapper-layer");
    e.find(".dddwrapper-layertobggroup").appendTo(n), "carousel" == t[_i2].sliderType && (a.ddd_shadow && n.addClass("dddwrappershadow"), tpGS.gsap.set(n, {
      borderRadius: t[_i2].carousel.border_radius
    })), tpGS.gsap.set(e, {
      overflow: "visible",
      transformStyle: "preserve-3d",
      perspective: 1600
    }), tpGS.gsap.set(n, {
      force3D: "auto",
      transformOrigin: "50% 50%",
      transformStyle: "preserve-3d",
      transformPerspective: 1600
    }), tpGS.gsap.set(l, {
      force3D: "auto",
      transformOrigin: "50% 50%",
      zIndex: 5,
      transformStyle: "flat",
      transformPerspective: 1600
    }), tpGS.gsap.set(t[_i2].canvas, {
      transformStyle: "preserve-3d",
      transformPerspective: 1600
    });
  };

  function a(i, a, r, o) {
    e(r).find(".rs-pxl-" + i).each(function () {
      var e = this.className.indexOf("rs-pxmask") >= 0,
          r = e ? t.closestNode(this, "RS-PX-MASK") : t.closestClass(this, "rs-parallax-wrap");
      r && (e && !window.isSafari11 && (tpGS.gsap.set(r, {
        z: 1
      }), tpGS.gsap.set(t.closestNode(r, "RS-BG-ELEM"), {
        z: 1
      })), r.dataset.parallaxlevel = a.levels[i - 1], r.classList.add("tp-parallax-container"), o[this.id] = {
        tpw: r,
        depth: a.levels[i - 1],
        offsv: 0,
        offsh: 0
      });
    });
  }

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.parallax = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
  _R_is_Editor && (RVS._R.isNumeric = RVS.F.isNumeric), jQuery.extend(!0, t, {
    getSlideAnimationObj: function getSlideAnimationObj(e, i, a) {
      var r,
          o = {};

      for (var s in void 0 === i.anim && null == i["in"] && (i["in"] = "o:0"), i) {
        if (i.hasOwnProperty(s) && void 0 !== i[s]) {
          var n = i[s].split(";");

          for (var l in n) {
            n.hasOwnProperty(l) && void 0 !== (r = n[l].split(":"))[0] && void 0 !== r[1] && (o[s] = void 0 === o[s] ? {} : o[s], o[s][r[0]] = "d3" === s && "c" === r[0] ? r[1] : r[1].split(",")[0]);
          }
        }
      }

      return o["in"] = void 0 === o["in"] ? {} : o["in"], o.anim = void 0 === o.anim ? {
        e: "basic"
      } : o.anim, _R_is_Editor || void 0 === o["in"] || void 0 === o["in"].prst || t.loadSlideAnimLibrary(e, {
        key: a,
        prst: o["in"].prst
      }), t[e].sbgs[a].slideanimationRebuild = !1, o;
    },
    loadSlideAnimLibrary: function loadSlideAnimLibrary(e, i) {
      void 0 === t.SLTR && !0 !== t.SLTR_loading ? (t.SLTR_loading = !0, jQuery.ajax({
        type: "post",
        url: t[e].ajaxUrl,
        dataType: "json",
        data: {
          action: "revslider_ajax_call_front",
          client_action: "get_transitions"
        },
        success: function success(a, r, o) {
          1 == a.success && (t.SLTR = a.transitions, void 0 !== i && t.setRandomDefaults(e, i.key, i.prst));
        },
        error: function error(e) {
          console.log("Transition Table can not be loaded"), console.log(e);
        }
      })) : void 0 !== i && void 0 !== t.SLTR && t.setRandomDefaults(e, i.key, i.prst);
    },
    convertSlideAnimVals: function convertSlideAnimVals(e) {
      return {
        anim: {
          eng: e.eng,
          ms: parseInt(e.speed, 0),
          o: e.o,
          e: e.e,
          f: e.f,
          p: e.p,
          d: parseInt(e.d, 0),
          adpr: e.adpr
        },
        d3: {
          f: e.d3.f,
          d: e.d3.d,
          z: e.d3.z,
          t: e.d3.t,
          c: e.d3.c,
          e: e.d3.e,
          fdi: e.d3.fdi,
          fdo: e.d3.fdo,
          fz: e.d3.fz,
          su: e.d3.su,
          smi: e.d3.smi,
          sma: e.d3.sma,
          sc: e.d3.sc,
          sl: e.d3.sl
        },
        "in": {
          eng: e["in"].eng,
          o: _R_is_Editor && void 0 !== e.preset && 0 === e.preset.indexOf("rnd") ? 0 : t.valBeau(e["in"].o),
          x: t.valBeau(e["in"].x),
          y: t.valBeau(e["in"].y),
          r: t.valBeau(e["in"].r),
          sx: t.valBeau(e["in"].sx),
          sy: t.valBeau(e["in"].sy),
          m: e["in"].m,
          e: e["in"].e,
          row: e["in"].row,
          col: e["in"].col,
          mo: "false" !== e["in"].mou && !1 !== e["in"].mou ? t.valBeau(e["in"].mo) : 0,
          moo: "false" !== e["in"].mou && !1 !== e["in"].mou ? t.valBeau(e["in"].moo) : "none",
          mou: e["in"].mou
        },
        out: void 0 === e.out.a || "true" == e.out.a || !0 === e.out.a ? void 0 : {
          a: l(e.out.a),
          o: t.valBeau(e.out.o),
          x: t.valBeau(e.out.x),
          y: t.valBeau(e.out.y),
          r: t.valBeau(e.out.r),
          sx: t.valBeau(e.out.sx),
          sy: t.valBeau(e.out.sy),
          m: e.out.m,
          e: e.out.e,
          row: t.valBeau(e.out.row),
          col: t.valBeau(e.out.col)
        },
        filter: {
          u: e.filter.u,
          e: e.filter.e,
          b: e.filter.b,
          g: e.filter.g,
          h: e.filter.h,
          s: e.filter.s,
          c: e.filter.c,
          i: e.filter.i
        },
        addOns: e.addOns
      };
    },
    setRandomDefaults: function setRandomDefaults(e, i, a) {
      t[e].sbgs[i].random = t.getAnimObjectByKey(a, t.SLTR);
    },
    getSlideAnim_AddonDefaults: function getSlideAnim_AddonDefaults() {
      var e = {};

      for (var i in t.enabledSlideAnimAddons) {
        e = jQuery.extend(!0, e, t[t.enabledSlideAnimAddons[i]].defaults());
      }

      return e;
    },
    getSlideAnim_EmptyObject: function getSlideAnim_EmptyObject() {
      return {
        speed: 1e3,
        o: "inout",
        e: "basic",
        f: "start",
        p: "none",
        d: 15,
        eng: "animateCore",
        adpr: !0,
        d3: {
          f: "none",
          d: "horizontal",
          z: 300,
          t: 0,
          c: "#ccc",
          e: "power2.inOut",
          fdi: 1.5,
          fdo: 2,
          fz: 0,
          su: !1,
          smi: 0,
          sma: .5,
          sc: "#000",
          sl: 1
        },
        filter: {
          u: !1,
          e: "default",
          b: 0,
          g: 0,
          h: 100,
          s: 0,
          c: 100,
          i: 0
        },
        "in": {
          o: 1,
          x: 0,
          y: 0,
          r: 0,
          sx: 1,
          sy: 1,
          m: !1,
          e: "power2.inOut",
          row: 1,
          col: 1,
          mo: 80,
          mou: !1
        },
        out: {
          a: "true",
          o: 1,
          x: 0,
          y: 0,
          r: 0,
          sx: 1,
          sy: 1,
          m: !1,
          e: "power2.inOut",
          row: 1,
          col: 1
        },
        addOns: t.getSlideAnim_AddonDefaults()
      };
    },
    getAnimObjectByKey: function getAnimObjectByKey(e, i) {
      if (t.getAnimObjectCacheKey === e) return t.getAnimObjectCache;
      var a;

      for (var r in t.getAnimObjectCacheKey = e, i) {
        if (i.hasOwnProperty(r) && void 0 === a) for (var o in i[r]) {
          if (i[r].hasOwnProperty(o) && void 0 === a) if (e === o && 0 === e.indexOf("rnd")) (a = i[r][o]).main = r, a.group = o;else for (var s in i[r][o]) {
            i[r][o].hasOwnProperty(s) && void 0 === a && s === e && ((a = i[r][o][s]).main = r, a.group = o);
          }
        }
      }

      return t.getAnimObjectCache = jQuery.extend(!0, {}, a), a;
    },
    getRandomSlideTrans: function getRandomSlideTrans(e, i, a) {
      if (void 0 !== t.randomSlideAnimCache && void 0 !== t.randomSlideAnimCache[e] && void 0 !== t.randomSlideAnimCache[e][i]) return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)];

      for (var r in t.randomSlideAnimCache = void 0 === t.randomSlideAnimCache ? {} : t.randomSlideAnimCache, t.randomSlideAnimCache[e] = void 0 === t.randomSlideAnimCache[e] ? {} : t.randomSlideAnimCache[e], t.randomSlideAnimCache[e][i] = void 0 === t.randomSlideAnimCache[e][i] ? [] : t.randomSlideAnimCache[e][i], a) {
        if (a.hasOwnProperty(r) && "random" !== r && "custom" !== r && ("all" == e || r == e)) for (var o in a[r]) {
          if (a[r].hasOwnProperty(o) && "icon" !== o && ("" + i == "undefined" || i.indexOf(o) >= 0)) for (var s in a[r][o]) {
            a[r][o].hasOwnProperty(s) && -1 == jQuery.inArray(a[r][o][s].title, ["*north*", "*south*", "*east*", "*west*"]) && t.randomSlideAnimCache[e][i].push(s);
          }
        }
      }

      return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)];
    },
    cbgW: function cbgW(e, i) {
      return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width;
    },
    cbgH: function cbgH(e, i) {
      return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? "v" == t[e].carousel.orientation && "fullscreen" === t[e].sliderLayout ? t[e].carousel.slide_height : !0 === t[e].carousel.justify ? t[e].carousel.slide_height : "fullscreen" === t[e].sliderLayout ? t[e].module.height : Math.min(t[e].canv.height, t[e].gridheight[t[e].level]) : void 0 !== t[e].maxHeight && t[e].maxHeight > 0 && !t[e].fixedOnTop ? Math.min(t[e].canv.height, t[e].maxHeight) : t[e].canv.height;
    },
    valBeau: function valBeau(e) {
      return e = ("" + (e = ("" + (e = ("" + (e = ("" + (e = ("" + e).split(",").join("|"))).replace("{", "ran("))).replace("}", ")"))).replace("[", "cyc("))).replace("]", ")");
    },
    animateSlide: function animateSlide(e, t) {
      return _R_is_Editor && RVS.F.resetSlideTL(), void 0 === tpGS.eases.late && (tpGS.CustomEase.create("late", "M0,0,C0,0,0.474,0.078,0.724,0.26,0.969,0.438,1,1,1,1"), tpGS.CustomEase.create("late2", "M0,0 C0,0 0.738,-0.06 0.868,0.22 1,0.506 1,1 1,1 "), tpGS.CustomEase.create("late3", "M0,0,C0,0,0.682,0.157,0.812,0.438,0.944,0.724,1,1,1,1")), o(e, t);
    },
    getBasic: function getBasic(e) {
      return jQuery.extend(!0, {
        attr: null == e || void 0 === e.attr ? ["o", "r", "sx", "sy", "x", "y", "m", "e", "row", "col", "mo", "moo"] : e.attr,
        "in": {
          f: "start",
          m: !1,
          o: 1,
          r: 0,
          sx: 1,
          sy: 1,
          x: 0,
          y: 0,
          row: 1,
          col: 1,
          e: "power2.inOut",
          ms: 1e3,
          mo: 0,
          moo: "none"
        },
        out: {
          f: "start",
          m: !1,
          o: 1,
          r: 0,
          sx: 1,
          sy: 1,
          x: 0,
          y: 0,
          row: 1,
          col: 1,
          e: "power2.inOut",
          ms: 1e3
        }
      }, e);
    },
    playBGVideo: function playBGVideo(e, i, a) {
      if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;else {
        if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
        a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a;
      }
      void 0 !== a.bgvid && a.bgvid.length > 0 && (c(e, {}, a, "in"), t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e, !0), tpGS.gsap.to(a.bgvid[0], .2, {
        zIndex: 30,
        display: "block",
        autoAlpha: 1,
        delay: .075,
        overwrite: "all"
      }));
    },
    stopBGVideo: function stopBGVideo(e, i, a) {
      if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;else {
        if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
        a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a;
      }
      void 0 !== a.bgvid && a.bgvid.length > 0 && (a.drawVideoCanvasImagesRecall = !1, t.stopVideo(a.bgvid, e), tpGS.gsap.to(a.bgvid[0], .2, {
        autoAlpha: 0,
        zIndex: 0,
        display: "none"
      }));
    },
    SATools: {
      getOffset: function getOffset(e, i, a, r) {
        var o = ("" + e).indexOf("%") >= 0;
        return 0 == (e = t.SATools.getSpecialValue(e, r, a)) || void 0 === e ? 0 : o ? i * (parseInt(e) / 100) : parseInt(e);
      },
      getSpecialValue: function getSpecialValue(e, i, a, r) {
        if (t.isNumeric(parseFloat(e, 0))) return parseFloat(e, 0);
        var o = ("" + e).split("ran(").length > 1 ? "random" : ("" + e).split("cyc(").length > 1 ? "wrap" : ("" + e).split("(").length > 1 ? "dir" : "unknown",
            s = ("random" === o ? e.slice(4, -1) : "wrap" === o ? e.slice(4, -1) : e.slice(1, -1)).split("|");
        if ("random" === o) return tpGS.gsap.utils.random(parseFloat(s[0]), parseFloat(s.length > 1 ? s[1] : 0 - s[0]));

        if ("wrap" === o) {
          var n = tpGS.gsap.utils.wrap(s, i);
          return ("" + n).split("(").length > 1 ? parseFloat(n.slice(1, -1)) * a + (r ? "%" : "") : n;
        }

        return "dir" === o ? parseFloat(s[0]) * a + (r ? "%" : "") : void 0;
      }
    },
    getmDim: function getmDim(e, i, a) {
      var r = t.cbgW(e, i),
          o = t.cbgH(e, i);
      return a.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR, t.maxDimCheck(a, r, o);
    },
    maxDimCheck: function maxDimCheck(e, i, a) {
      var r, o;
      void 0 !== e.video && ("img" === e.video.tagName || null == e.video.videoWidth || e.video.videoWidth);
      if ("animating" !== e.currentState && null == e.panzoom || "animating" === e.currentState && null == e.panzoom && (null == e.slideanimation || null == e.slideanimation.anim || "true" !== e.slideanimation.anim.adpr)) {
        if (e.DPR > 1 && t.ISM && a > 1024) e.DPR = 1, r = i, o = a;else {
          var s = {
            w: null == e.video || e.isVidImg ? e.loadobj.width : 0 == e.video.videoWidth ? e.loadobj.width : e.video.videoWidth,
            h: null == e.video || e.isVidImg ? e.loadobj.height : 0 == e.video.videoHeight ? e.loadobj.height : e.video.videoHeight
          };
          void 0 === s.w && (s.w = e.loadobj.width), void 0 === s.h && (s.h = e.loadobj.height);
          var n = a / s.w,
              l = i / s.h,
              d = Math.max(n, l);

          if (d > e.DPR || n >= 1 && l >= 1 ? e.DPR = 1 : e.DPR > d && (e.DPR = Math.min(e.DPR, e.DPR / d)), r = i * e.DPR, o = a * e.DPR, e.DPR > 1) {
            var c = i / a;
            s.w > s.h && s.w < r ? (o = (r = Math.max(i, s.w)) / c, e.DPR = 1) : s.h > s.w && s.h < o && (r = (o = Math.max(a, s.h)) * c, e.DPR = 1);
          }
        }
      } else e.DPR = 1, r = i, o = a;
      return {
        width: Math.round(r),
        height: Math.round(o),
        w: i,
        h: a
      };
    },
    updateSlideBGs: function updateSlideBGs(e, i, a, r) {
      if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;else {
        if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
        a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a;
      }
      (r = void 0 !== a.mDIM && r) || (a.mDIM = t.getmDim(e, a.skeyindex, a)), void 0 !== a.video ? ("IMG" !== a.video.tagName && (a.isVidImg = ""), a.cDIMS = t.getBGCanvasDetails(e, a), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0)) : (a.cDIMS = t.getBGCanvasDetails(e, a, r), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, "panzoom" === a.currentState || "animating" === a.currentState || void 0 === a.currentState && !_R_is_Editor && "carousel" != t[e].sliderType || (a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), 0 !== a.shadowCanvas.width && 0 !== a.shadowCanvas.height && a.ctx.drawImage(a.shadowCanvas, 0, 0))), "animating" === a.currentState && "carousel" !== t[e].sliderType && t.animatedCanvasUpdate(e, a);
    },
    addCanvas: function addCanvas() {
      var e = document.createElement("canvas");
      return x = e.getContext("2d"), e.style.background = "transparent", e.style.opacity = 1, x;
    },
    updateVideoFrames: function updateVideoFrames(e, i, a) {
      if (i.now = Date.now(), i.then = void 0 === i.then ? i.now - 500 : i.then, i.elapsed = i.now - i.then, i.fps = "animating" === i.currentState && window._rs_firefox ? 50 : 33, i.elapsed > i.fps) {
        i.then = i.now - i.elapsed % i.fps;
        var r = "img" === i.video.tagName || null == i.video.videoWidth || 0 == i.video.videoWidth;
        void 0 !== i.video && !i.video.BGrendered && void 0 !== i.loadobj && void 0 !== i.loadobj.img || t.ISM && t.isFirefox(e) ? (i.mDIM = t.getmDim(e, i.skeyindex, i), i.pDIMS = s(i.mDIM, i, {
          width: i.mDIM.width,
          height: i.mDIM.height,
          x: 0,
          y: 0,
          contw: i.loadobj.width,
          conth: i.loadobj.height
        }), i.shadowCanvas.width !== i.mDIM.width && (i.shadowCanvas.width = i.mDIM.width), i.shadowCanvas.height !== i.mDIM.height && (i.shadowCanvas.height = i.mDIM.height), i.shadowCTX.drawImage(i.loadobj.img, i.pDIMS.x, i.pDIMS.y, i.pDIMS.width, i.pDIMS.height)) : ((a || void 0 === i.sDIMS || r !== i.isVidImg || 0 === i.sDIMS.width || 0 === i.sDIMS.height) && (i.isVidImg = r, i.mDIM = t.getmDim(e, i.skeyindex, i), i.sDIMS = s(i.mDIM, i, {
          width: i.mDIM.width,
          height: i.mDIM.height,
          x: 0,
          y: 0,
          contw: i.isVidImg ? i.loadobj.width : i.video.videoWidth,
          conth: i.isVidImg ? i.loadobj.height : i.video.videoHeight
        })), void 0 !== i.sDIMS && 0 !== i.sDIMS.width && 0 !== i.sDIMS.height && ("animating" === i.currentState ? (i.shadowCanvas.width !== i.mDIM.width && (i.shadowCanvas.width = i.mDIM.width), i.shadowCanvas.height !== i.mDIM.height && (i.shadowCanvas.height = i.mDIM.height), i.shadowCTX.drawImage(i.video, i.sDIMS.x, i.sDIMS.y, i.sDIMS.width, i.sDIMS.height)) : void 0 === i.animateDirection && (i.canvas.width !== i.mDIM.width && (i.canvas.width = i.mDIM.width), i.canvas.height !== i.mDIM.height && (i.canvas.height = i.mDIM.height), i.ctx.drawImage(i.video, i.sDIMS.x, i.sDIMS.y, i.sDIMS.width, i.sDIMS.height)), i.shadowCanvas_Drawn = !0));
      }

      (a || i.drawVideoCanvasImagesRecall && "animating" === i.currentState || "animating" === i.currentState && void 0 === i.shadowCanvas_Drawn) && window.requestAnimationFrame(function () {
        t.updateVideoFrames(e, i);
      });
    },
    createOverlay: function createOverlay(e, i, a, r) {
      if ("none" === i) return "none";
      a = void 0 === a ? 1 : a;
      r = void 0 === r ? {
        0: "rgba(0, 0, 0, 0)",
        1: "rgba(0, 0, 0, 1)"
      } : r;
      var o = {
        none: [[0]],
        1: [[1, 0], [0, 0]],
        2: [[1, 0, 0], [0, 0, 0], [0, 0, 0]],
        3: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        4: [[1], [0]],
        5: [[1], [0], [0]],
        6: [[1], [0], [0], [0]],
        7: [[1, 0]],
        8: [[1, 0, 0]],
        9: [[1, 0, 0, 0]],
        10: [[1, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1]],
        11: [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]],
        12: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
        13: [[0, 0, 1], [0, 1, 0], [1, 0, 0]],
        14: [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
        15: [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 0, 0, 0, 0]],
        16: [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]
      },
          s = void 0 === o[i = void 0 === i ? 1 : i] ? o[2] : o[i];
      _R_is_Editor && (t[e] = void 0 === t[e] ? {} : t[e]), t[e].patternCanvas = document.createElement("canvas"), t[e].patternCtx = t[e].patternCanvas.getContext("2d"), t[e].patternCanvas.width = s[0].length * a, t[e].patternCanvas.height = s.length * a;

      for (var n = 0; n < s.length; n++) {
        for (var l = 0; l < s[n].length; l++) {
          "transparent" != r[s[n][l]] && (t[e].patternCtx.fillStyle = r[s[n][l]], t[e].patternCtx.fillRect(l * a, n * a, a, a));
        }
      }

      return "url(" + t[e].patternCanvas.toDataURL() + ")";
    },
    getBGCanvasDetails: function getBGCanvasDetails(e, i, a) {
      var r;
      return a || (i.mDIM = t.getmDim(e, i.skeyindex, i)), i.usepattern = ("auto" === i.bgfit || i.bgfit.indexOf("%") >= 0) && (void 0 === i.loadobj || !0 !== i.loadobj.useBGColor), _R_is_Editor && void 0 === i.panzoom && delete i.shadowCanvas, void 0 === i.shadowCanvas && (i.shadowCanvas = document.createElement("canvas"), i.shadowCTX = i.shadowCanvas.getContext("2d"), i.shadowCanvas.style.background = "transparent", i.shadowCanvas.style.opacity = 1), !0 === i.replaceShadowCanvas || !0 === i.loadobj.bgColor || !0 === i.usebgColor || void 0 !== i.panzoom || null != i.isHTML5 && 1 != i.poster || i.usepattern ? (r = {
        width: i.mDIM.width,
        height: i.mDIM.height,
        x: 0,
        y: 0
      }, i.usepattern && void 0 !== i.loadobj && void 0 !== i.loadobj.img ? t.getCanvasPattern(e, i, {
        ratio: i.loadobj.height / i.loadobj.width
      }) : (i.loadobj.bgColor || i.usebgColor) && (i.shadowCanvas.width !== i.mDIM.width && (i.shadowCanvas.width = i.mDIM.width), i.shadowCanvas.height !== i.mDIM.height && (i.shadowCanvas.height = i.mDIM.height), t.getCanvasGradients(e, i))) : (r = s(i.mDIM, i, {
        width: i.mDIM.width,
        height: i.mDIM.height,
        x: 0,
        y: 0,
        contw: i.loadobj.width,
        conth: i.loadobj.height
      }), i.shadowCanvas.width !== i.mDIM.width && (i.shadowCanvas.width = i.mDIM.width), i.shadowCanvas.height !== i.mDIM.height && (i.shadowCanvas.height = i.mDIM.height), void 0 !== i.loadobj && void 0 !== i.loadobj.img && i.shadowCTX.drawImage(i.loadobj.img, r.x, r.y, r.width, r.height), r = {
        width: i.mDIM.width,
        height: i.mDIM.height,
        x: 0,
        y: 0
      }), r;
    },
    getCanvasPattern: function getCanvasPattern(e, i, a) {
      void 0 === i.patternImageCanvas && (i.patternImageCanvas = document.createElement("canvas"), i.patternImageCTX = i.patternImageCanvas.getContext("2d"));
      var r = i.bgfit.split(" ");
      1 === r.length && (r[1] = r[0]), a.width = "auto" === r[0] ? i.loadobj.width : i.loadobj.width * (parseInt(r[0], 0) / 100), a.height = "auto" === r[1] ? i.loadobj.height : a.width * a.ratio, i.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR;
      var o = a.width / a.height;
      a.width = a.width * i.DPR, a.height = a.height * i.DPR, t.isIOS && a.width * a.height > 15728640 && (i.mDIM.width > i.mDIM.height ? (a.width = i.mDIM.width, a.height = Math.round(i.mDIM.width / o)) : (a.height = i.mDIM.height, a.width = Math.round(i.mDIM.height * o))), i.patternImageCanvas.width = a.width, i.patternImageCanvas.height = a.height, i.patternImageCTX.drawImage(i.loadobj.img, 0, 0, a.width, a.height), i.shadowCanvas.width !== i.mDIM.width && (i.shadowCanvas.width = i.mDIM.width), i.shadowCanvas.height !== i.mDIM.height && (i.shadowCanvas.height = i.mDIM.height), i.shadowCTX.clearRect(0, 0, i.shadowCTX.canvas.width, i.shadowCTX.canvas.height), i.pattern = i.shadowCTX.createPattern(i.patternImageCanvas, i.bgrepeat), i.shadowCTX.fillStyle = i.pattern, i.shadowShifts = {
        h: i.bgposition.split(" ")[0],
        v: i.bgposition.split(" ")[1]
      }, i.shadowShifts.hperc = t.isNumeric(parseInt(i.shadowShifts.h)) ? parseInt(i.shadowShifts.h) / 100 * i.mDIM.width : 0, i.shadowShifts.vperc = t.isNumeric(parseInt(i.shadowShifts.v)) ? parseInt(i.shadowShifts.v) / 100 * i.mDIM.height : 0, i.shadowShifts.x = "left" === i.shadowShifts.h ? 0 : "center" === i.shadowShifts.h || "50%" == i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? i.mDIM.width / 2 - a.width / 2 - Math.ceil(i.mDIM.width / 2 / a.width) * a.width : i.mDIM.width / 2 - a.width / 2 : "right" === i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.mDIM.width % a.width) : i.mDIM.width - a.width : "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.shadowShifts.hperc % a.width) : i.shadowShifts.hperc, i.shadowShifts.y = "top" === i.shadowShifts.v ? 0 : "center" === i.shadowShifts.v || "50%" == i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? i.mDIM.height / 2 - a.height / 2 - Math.ceil(i.mDIM.height / 2 / a.height) * a.height : i.mDIM.height / 2 - a.height / 2 : "bottom" === i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.mDIM.height % a.height) : i.mDIM.height - a.height : "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.shadowShifts.vperc % a.height) : i.shadowShifts.vperc, i.shadowCTX.save(), i.shadowCTX.translate(i.shadowShifts.x, i.shadowShifts.y), i.shadowCTX.fillRect(0, 0, i.mDIM.width - i.shadowShifts.x, i.mDIM.height - i.shadowShifts.y), i.shadowCTX.restore();
    },
    getCanvasGradients: function getCanvasGradients(e, i) {
      if (i.bgcolor.indexOf("gradient") >= 0) {
        i.gradient = null == i.gradient || _R_is_Editor ? t.getGradients(i.bgcolor) : i.gradient, i.shadowGrd = "radialGradient" === i.gradient.type ? i.shadowCTX.createRadialGradient(i.mDIM.width / 2, i.mDIM.height / 2, 0, i.mDIM.width / 2, i.mDIM.height / 2, Math.max(i.mDIM.width / 2, i.mDIM.height / 2)) : t.calcLinearGradient(i.shadowCTX, i.shadowCanvas.width, i.shadowCanvas.height, i.gradient.deg);

        for (var a = 0; a < i.gradient.stops.length; a += 2) {
          i.shadowGrd.addColorStop(i.gradient.stops[a + 1], i.gradient.stops[a]);
        }

        i.shadowCTX.clearRect(0, 0, i.mDIM.width, i.mDIM.height), i.shadowCTX.fillStyle = i.shadowGrd, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height);
      } else i.shadowCTX.clearRect(0, 0, i.mDIM.width, i.mDIM.height), i.shadowCTX.fillStyle = i.bgcolor, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height);
    },
    cNS: function cNS(e) {
      var t;

      for (t in e.n = document.createElementNS("http://www.w3.org/2000/svg", e.n), e.v) {
        e.n.setAttributeNS(null, t.replace(/[A-Z]/g, function (e, t, i, a) {
          return "-" + e.toLowerCase();
        }), e.v[t]);
      }

      for (t in void 0 !== e.c && e.n.setAttribute("class", e.c), void 0 !== e.id && (e.n.id = e.id), void 0 !== e.t && (e.n.textContent = e.t), e.s) {
        e.s.hasOwnProperty(t) && (e.n.style[t] = e.s[t]);
      }

      return e.n;
    },
    rgbToHex: function rgbToHex(e) {
      return "#" + d(e[0]) + d(e[1]) + d(e[2]);
    },
    getSVGGradient: function getSVGGradient(e) {
      if (void 0 === e) return e;
      if (_R_is_Editor && (e = RSColor.convert(e)), -1 == e.indexOf("gradient")) return e;
      var i = t.getGradients(e);
      void 0 === t.gradSVG && (t.gradSVG = t.cNS({
        n: "svg",
        id: "tp_svg_gradients",
        s: {
          width: "100%",
          height: "100%",
          opacity: 0,
          pointerEvents: "none"
        }
      }), t.gradSVG.setAttribute("viewBox", "0 0 1 1"), t.gradSVG.setAttribute("preserveAspectRatio", "none"), document.body.appendChild(t.gradSVG), t.svgGradients = []);

      for (var a = !1, r = JSON.stringify(e), o = 0; o < t.svgGradients.length; o++) {
        a || t.svgGradients[o].src == r && (a = !0, e = t.svgGradients[o].url);
      }

      if (!a) {
        var s,
            n,
            l,
            d = "radialGradient" === i.type ? 0 : i.deg * (Math.PI / 180),
            c = "radialGradient" === i.type ? 0 : {
          x1: Math.round(50 + 50 * Math.sin(d)) + "%",
          y1: Math.round(50 + 50 * Math.cos(d)) + "%",
          x2: Math.round(50 + 50 * Math.sin(d + Math.PI)) + "%",
          y2: Math.round(50 + 50 * Math.cos(d + Math.PI)) + "%"
        };
        l = t.cNS({
          n: i.type,
          id: "tp_svg_gradient_" + t.svgGradients.length,
          v: "radialGradient" === i.type ? void 0 : {
            gradientUnits: "userSpaceOnUse",
            x1: c.x1,
            y1: c.y1,
            x2: c.x2,
            y2: c.y2
          }
        });

        for (var p = 0; p <= i.stops.length / 2; p += 2) {
          n = tpGS.gsap.utils.splitColor(i.stops[p]), s = t.cNS({
            n: "stop",
            v: {
              offset: 100 * i.stops[p + 1] + "%",
              stopColor: t.rgbToHex(n),
              stopOpacity: n.length > 3 ? n[3] : 1
            }
          }), l.appendChild(s);
        }

        t.gradSVG.appendChild(l), e = "url(#tp_svg_gradient_" + t.svgGradients.length + ")", t.svgGradients.push({
          url: e,
          src: r,
          g: l
        });
      }

      return e;
    },
    getGradients: function getGradients(e) {
      return e.indexOf("radial-gradient") >= 0 ? {
        stops: t.getGradientColorStopPoints(e.split("radial-gradient(ellipse at center, ")[1]),
        type: "radialGradient",
        deg: 0
      } : -1 !== e.indexOf("gradient") ? t.getLinearGradientStops(e) : e;
    },
    getLinearGradientStops: function getLinearGradientStops(e) {
      var t = e.split("linear-gradient(")[1];
      _R_is_Editor && (t = (t = t.split(", ").join(",")).split(",rgba").join(", rgba"));
      var i = t.split("deg, ");

      for (var a in t = (i.length > 1 ? i[1] : i[0]).split(" "), i = i.length > 1 ? i[0] : 180, t) {
        t.hasOwnProperty(a) && t[a].indexOf("%") >= 0 && (t[a] = "" + Math.round(100 * parseFloat(t[a].split("%,")[0].split("%)")[0])) / 1e4);
      }

      return {
        stops: t,
        deg: i,
        type: "linearGradient"
      };
    },
    getGradientColorStopPoints: function getGradientColorStopPoints(e) {
      var t = /rgb([\s\S]*?)%/g,
          i = [],
          a = [];

      do {
        (o = t.exec(e)) && i.push(o[0]);
      } while (o);

      for (var r = 0; r < i.length; r++) {
        var o = i[r],
            s = (e = /rgb([\s\S]*?)\)/.exec(o), /\)([\s\S]*?)%/.exec(o));
        e[0] && (e = e[0]), s[1] && (s = s[1]), a.push(e), a.push(parseFloat(s) / 100);
      }

      return a;
    },
    calcLinearGradient: function calcLinearGradient(e, t, i, a) {
      a = a * Math.PI / 180 + Math.PI / 2;

      for (var r, o, s, n, l = t / 2, d = i / 2, c = Math.sqrt(l * l + d * d), h = {
        x1: Math.cos(a) * c + l,
        y1: Math.sin(a) * c + d,
        x2: l,
        y2: d
      }, m = [g({
        x: 0,
        y: 0
      }, a), g({
        x: t,
        y: 0
      }, a), g({
        x: t,
        y: i
      }, a), g({
        x: 0,
        y: i
      }, a)], v = [], f = 0; f < m.length; f++) {
        v.push(u(m[f], h));
      }

      if (p(l, d, v[0].x, v[0].y) > p(l, d, v[1].x, v[1].y) ? (r = v[0].x, o = v[0].y) : (r = v[1].x, o = v[1].y), p(l, d, v[2].x, v[2].y) > p(l, d, v[3].x, v[3].y) ? (s = v[2].x, n = v[2].y) : (s = v[3].x, n = v[3].y), Math.round(100 * Math.atan2(d - o, l - r)) / 100 === Math.round(a % (2 * Math.PI) * 100) / 100) {
        var y = r,
            w = o;
        r = s, o = n, s = y, n = w;
      }

      return e.createLinearGradient(Math.round(r), Math.round(o), Math.round(s), Math.round(n));
    },
    transitions: {
      filter: {
        update: function update(e, t, i) {
          if (void 0 !== e && void 0 !== e.tl) {
            var a = void 0 !== i || void 0 !== e.tl.blur ? " blur(" + (void 0 !== i ? i : 0 + e.tl.blur !== void 0 ? e.tl.blur : 0) + "px)" : "";
            t.canvas.style.filter = void 0 === e.tl.filter ? "" + a : e.tl.filter + a;
          }
        },
        extendTimeLine: function extendTimeLine(e, t, i) {
          if (null != t) {
            var a = void 0 !== t.g && "0%" !== t.g && 0 !== t.g ? ("" === a ? "" : " ") + "grayscale(_g_%)" : "";
            a += void 0 !== t.h && "100%" !== t.h && 100 !== t.h ? ("" === a ? "" : " ") + "brightness(_h_%)" : "", a += void 0 !== t.s && "0px" !== t.s && 0 !== t.s ? ("" === a ? "" : " ") + "sepia(_s_%)" : "", a += void 0 !== t.c && 100 !== t.c ? ("" === a ? "" : " ") + "contrast(_c_%)" : "", "" !== (a += void 0 !== t.i && 0 !== t.i ? ("" === a ? "" : " ") + "invert(_i_%)" : "") && (t.tl = {
              filter: a.replace("_g_", parseFloat(t.g)).replace("_h_", parseFloat(t.h)).replace("_s_", parseFloat(t.s)).replace("_c_", parseFloat(t.c)).replace("_i_", parseFloat(t.i))
            }), void 0 !== t.b && "0px" !== t.b && 0 !== t.b && (void 0 === t.tl ? t.tl = {
              blur: parseFloat(t.b)
            } : t.tl.blur = parseFloat(t.b)), void 0 !== t.tl && (e.add(tpGS.gsap.to(t.tl, t.ms / t.sec, void 0 === t.tl.filter ? {
              blur: 0
            } : void 0 === t.tl.blur ? {
              filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
              ease: t.e
            } : {
              blur: 0,
              filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
              ease: t.e
            }), 0), i.canvasFilter = !0);
          }
        }
      },
      slidingoverlay: {
        getBasic: function getBasic() {
          return t.getBasic({
            attr: ["x", "y"],
            "in": {
              m: !0,
              o: -1,
              _xy: 20,
              _gxys: 10,
              _gxye: -10,
              zIndex: 20,
              e: "power1.inOut"
            },
            out: {
              m: !0,
              reversed: !1,
              _xy: -100,
              o: 0,
              zIndex: 10,
              e: "power1.inOut"
            }
          });
        },
        updateAnim: function updateAnim(e, i, a) {
          var r = void 0 !== i["in"].x && 0 !== i["in"].x && "0%" !== i["in"].x ? "x" : "y";
          i["in"]["g" + r + "s"] = t.SATools.getOffset(i["in"][r], i["in"]._gxys, a, 1) + "%", i["in"]["g" + r + "e"] = t.SATools.getOffset(i["in"][r], i["in"]._gxye, a, 1) + "%", i.out[r] = t.SATools.getOffset(i["in"][r], i.out._xy, a, 1) + "%", i["in"][r] = t.SATools.getOffset(i["in"][r], i["in"]._xy, a, 1) + "%";
          var o = parseInt(i["in"][r]) >= 0;
          return i["in"].d = "x" === r ? o ? "left" : "right" : o ? "up" : "down", i;
        },
        beforeDraw: function beforeDraw(e, t, i, a) {
          void 0 !== i.d && (i._dxs = "right" === i.d ? 0 + i.mw : "left" === i.d ? 0 - i.mw : 0, i._dys = "down" === i.d ? 0 + i.mh : "up" === i.d ? 0 - i.mh : 0, i._xs = "left" === i.d ? 0 - i.mw : 0, i._ys = "up" === i.d ? 0 - i.mh : 0, i._xe = "right" === i.d ? a.SLOT.OW + i.mw : "left" === i.d ? a.SLOT.OW - i.mw : a.SLOT.OW, i._ye = "down" === i.d ? a.SLOT.OH + i.mh : "up" === i.d ? a.SLOT.OH - i.mh : a.SLOT.OH, t.beginPath(), t.rect("left" === i.d ? Math.max(0, i._xs) : "right" === i.d ? Math.min(0, i._xs) : 0, "up" === i.d ? Math.max(0, i._ys) : "down" === i.d ? Math.min(0, i._ys) : 0, "left" === i.d ? Math.max(a.SLOT.OW, i._xe) : "right" === i.d ? Math.min(a.SLOT.OW, i._xe) : i._xe, "up" === i.d ? Math.max(a.SLOT.OH, i._ye) : "down" === i.d ? Math.min(a.SLOT.OH, i._ye) : i._ye), t.clip());
        },
        afterDraw: function afterDraw(e, t, i, a, r) {
          void 0 !== i.d && (t.save(), t.beginPath(), t.rect(Math.max(0, i._dxs), Math.max(0, i._dys), i._xe, i._ye), t.clip(), t.save(), t.transform(r.csx, r.ssx, r.ssy, r.csy, .5 * a.SLOT.OW + i.x + i.sgx, .5 * a.SLOT.OH + i.y + i.sgy), t.drawImage(void 0 !== a.shadowCanvas ? a.shadowCanvas : a.loadobj.img, 0, 0, a.SLOT.OW, a.SLOT.OH, i.sgx - a.SLOT.OW / 2, i.sgy - a.SLOT.OH / 2, a.SLOT.OW, a.SLOT.OH), t.restore(), t.fillStyle = "rgba(0,0,0,0.6)", t.fillRect(i.gx, i.gy, a.SLOT.OW, a.SLOT.OH), t.restore());
        },
        extendTimeLine: function extendTimeLine(e, i, a, r, o, s) {
          "in" !== o.direction || void 0 === r.gxe && void 0 === r.gye || (jQuery.extend(!0, a[0], {
            d: r.d,
            gx: void 0 === r.gxs ? 0 : 2 * t.SATools.getOffset(r.gxs, s.width, o.sdir, 0),
            gy: void 0 === r.gys ? 0 : 2 * t.SATools.getOffset(r.gys, s.height, o.sdir, 0),
            sgx: void 0 === r.gxs ? 0 : t.SATools.getOffset(r.gxs, s.width, o.sdir, 0),
            sgy: void 0 === r.gys ? 0 : t.SATools.getOffset(r.gys, s.height, o.sdir, 0),
            mw: 0 - s.width,
            mh: 0 - s.height
          }), i.add(tpGS.gsap.to(a, r.ms / r.sec, {
            gx: void 0 === r.gxe ? 0 : 2 * t.SATools.getOffset(r.gxe, s.width, o.sdir, 0),
            gy: void 0 === r.gye ? 0 : 2 * t.SATools.getOffset(r.gye, s.height, o.sdir, 0),
            sgx: void 0 === r.gxe ? 0 : 2 * t.SATools.getOffset(r.gxe, s.width, o.sdir, 0),
            sgy: void 0 === r.gye ? 0 : 2 * t.SATools.getOffset(r.gye, s.height, o.sdir, 0),
            mw: s.width,
            mh: s.height,
            ease: r.e
          }), 0));
        }
      },
      motionFilter: {
        init: function init(e, t) {
          return void 0 !== t && parseFloat(t) > 0 ? (t = parseFloat(t), e.fmExists = !0, e.fmShadow = void 0 === e.fmShadow ? document.createElement("canvas") : e.fmShadow, e.fmCtx = e.fmShadow.getContext("2d"), e.fmShadow.width = e.ctx.canvas.width, e.fmShadow.height = e.ctx.canvas.height, e.fmCtx.globalAlpha = tpGS.gsap.utils.mapRange(100, 0, 40, 0, t) / 100, e.fmCtx.clearRect(0, 0, e.ctx.canvas.width, e.ctx.canvas.height)) : e.fmExists = !1, t;
        },
        render: function render(e, t) {
          "partial" === t && (e.fmCtx.globalCompositeOperation = "source-over"), e.fmCtx.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height), e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.ctx.drawImage(e.fmCtx.canvas, 0, 0, e.canvas.width, e.canvas.height), "partial" === t && (e.fmCtx.globalCompositeOperation = "source-atop"), "partial" !== t && "full" !== t || (e.fmCtx.fillStyle = "rgba(255, 255, 255, 0.1)", e.fmCtx.fillRect(0, 0, e.canvas.width, e.canvas.height));
        },
        clearFull: function clearFull(e, t) {
          e.fmExists && void 0 !== e.fmCtx && (e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fmCtx.clearRect(0, 0, e.canvas.width, e.canvas.height), void 0 !== t && t.render(t.time(), !0, !0));
        },
        complete: function complete(e) {
          e.fmShadow && e.fmShadow.remove();
        }
      },
      d3: {
        ticker: function ticker(e, t, i) {
          if (void 0 !== e.helper) {
            var a = e.smi * ("in" === i ? e.helper.oo : e.helper.o),
                r = e.sma * ("in" === i ? e.helper.oo : e.helper.o);

            if (e.gradient = "vertical" === e.d ? "in" === i ? t.ctx.createLinearGradient(0, 0, 0, t.canvas.height) : t.ctx.createLinearGradient(0, t.canvas.height, 0, 0) : "in" === i ? t.ctx.createLinearGradient(0, 0, t.canvas.width, 0) : t.ctx.createLinearGradient(t.canvas.width, 0, 0, 0), e.gradient.addColorStop(0, "rgba(" + e.sc + "," + a + ")"), e.gradient.addColorStop(e.sl, "rgba(" + e.sc + "," + r + ")"), t.ctx.fillStyle = e.gradient, t.ctx.fillRect(0, 0, t.canvas.width, t.canvas.height), void 0 !== t.cube && t.cube.ctx) {
              var o = void 0 !== e.roomhelper && !1 !== e.roomhelper && (90 - e.roomhelper.r) / 90;
              a = !1 !== o ? o : e.smi * e.helper.o, r = !1 !== o ? o : e.sma * e.helper.o, t.cube.ctx.clearRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height), e.gradientW = !1 !== o ? "vertical" === e.d ? e.t < 0 && 1 === e.sdir || e.t > 0 && -1 === e.sdir ? t.ctx.createRadialGradient(0, t.cube.ctx.canvas.width / 2, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width, 0, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : e.t > 0 && 1 === e.sdir || e.t < 0 && -1 === e.sdir ? t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : "vertical" === e.d ? t.ctx.createLinearGradient(0, 0, 0, t.cube.ctx.canvas.height) : t.ctx.createLinearGradient(0, 0, t.cube.ctx.canvas.width, 0), e.gradientW.addColorStop(0, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? r : 0 : "a" === e.DIR ? 0 : r) + ")"), e.gradientW.addColorStop(1, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? 0 : r : "a" === e.DIR ? r : 0) + ")"), t.cube.ctx.fillStyle = e.gradientW, t.cube.ctx.fillRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height);
            }
          }
        },
        setWall: function setWall(e, t, i, a, r, o) {
          return e.TL = tpGS.gsap.timeline(), e.TL.add(tpGS.gsap.to(e.c, .2, {
            display: "block"
          }), 0), "rotationX" === i ? (e.ctx.canvas.width = a.w, e.ctx.canvas.height = a.w, e.TL.add(tpGS.gsap.set(e.w, {
            backgroundColor: r,
            width: a.w,
            height: a.w,
            transformOrigin: "50% 50% -" + a.w / 2 + "px",
            x: 0,
            y: t > 0 ? -(a.w - a.h) : 0,
            rotationX: t > 0 ? -90 : 90,
            rotationY: 0
          }), 0)) : (e.ctx.canvas.width = o ? a.w : a.h, e.ctx.canvas.height = a.h, e.TL.add(tpGS.gsap.set(e.w, {
            backgroundColor: r,
            width: o ? a.w : a.h,
            height: a.h,
            transformOrigin: "50% 50% -" + (o ? a.w : a.h) / 2 + "px",
            x: t < 0 ? a.w - a.h : 0,
            y: 0,
            rotationX: 0,
            rotationY: t > 0 ? -90 : 90
          }), 0)), e.TL;
        },
        buildCube: function buildCube(e) {
          e.cube = {
            c: document.createElement("div"),
            w: document.createElement("canvas")
          }, e.cube.ctx = e.cube.w.getContext("2d"), e.cube.c.className = "rs_fake_cube", e.cube.w.className = "rs_fake_cube_wall", tpGS.gsap.set(e.cube.c, {
            width: e.mDIM.w,
            height: e.mDIM.h
          }), tpGS.gsap.set(e.cube.w, {
            width: e.mDIM.w,
            height: e.mDIM.h,
            backgroundColor: "#ccc"
          }), e.cube.c.appendChild(e.cube.w), e.sbg.appendChild(e.cube.c);
        },
        cubeTL: function cubeTL(e, i, a, r) {
          if ("none" !== i.f && void 0 !== i.f) {
            a.sbg.style.transformStyle = "preserve-3d";
            var o = tpGS.gsap.timeline(),
                s = "incube" === i.f ? 1 : -1,
                n = "incube" === i.f || "cube" === i.f,
                l = "fly" === i.f ? -30 : 90,
                d = "turn" !== i.f && !1 !== i.t && (_R_is_Editor || !0 === t[e].firstSlideAnimDone),
                c = -1 * i.z,
                p = {},
                g = {
              z: d ? 0 : c,
              ease: "power1.inOut"
            },
                u = {
              ease: i.e
            },
                h = [a.canvas],
                m = n ? "50% 50% " : "20% 20% ",
                v = "rotationX",
                f = "rotationY",
                y = "y",
                w = "height",
                b = i.fd;

            if ("vertical" !== i.d ? (v = "rotationY", f = "rotationX", y = "x", w = "width", i.DIR = 1 === i.sdir ? "b" : "a") : i.DIR = 1 === i.sdir ? "a" : "b", w = "width" === w ? "w" : "height" === w ? "h" : w, "turn" === i.f ? (l = "vertical" === i.d ? -120 : 120, m = "vertical" === i.d ? 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "0% 100% 0%" : "in" === r ? "0% 100% 0%" : "0% 0% 0%" : 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "100% 0% 0%" : "in" === r ? "100% 0% 0%" : "0% 0% 0%", g.z = 0, u.ease = "out" === r ? "power3.out" : u.ease, b = "out" === r ? b / 2 : b) : m += s * a.mDIM[w] / 2 + "px", u[v] = 0, u[y] = 0, "in" === r ? p[v] = l * i.sdir : u[v] = -l * i.sdir, "fly" === i.f) {
              var _ = void 0 === i.fz ? 20 * Math.random() - 10 : parseInt(i.fz);

              "in" === r ? (p[y] = a.mDIM[w] * (void 0 === i.fdi ? 1.5 : parseFloat(i.fdi)) * i.sdir, p.rotateZ = i.sdir * _, u.rotateZ = 0) : (u[y] = a.mDIM[w] * (void 0 === i.fdo ? 2 : parseFloat(i.fdo)) * i.sdir * -1, u.rotateZ = i.sdir * _ * -1);
            }

            if (a.sbg.style.perspective = d ? "2500px" : "1500px", d) {
              var S = {
                z: c * ("fly" === i.f ? 1.5 : 3),
                ease: "power1.inOut"
              },
                  x = {
                z: 0,
                ease: "power1.inOut"
              };
              S[f] = -1 * i.t, x[f] = 0, i.roomhelper = {
                r: 0
              }, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
                perspective: 1200,
                transformStyle: "preserve-3d",
                transformOrigin: m
              }), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, S), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, x), b - i.md), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, {
                r: Math.abs(i.t)
              }), 0), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, {
                r: 0
              }), b - i.md), "in" === r && 1 !== s && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, S[f], f, a.mDIM, i.c), 0), h.push(a.cube.c));
            } else i.roomhelper = !1, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
              perspective: "none",
              transformStyle: "none",
              transformOrigin: "50% 50%"
            }), 0), !_R_is_Editor && !0 !== t[e].firstSlideAnimDone && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, p[v], v, a.mDIM, i.c, !0), 0), o.add(tpGS.gsap.fromTo(a.cube.w, 4 * i.md, {
              opacity: 0
            }, {
              opacity: 1
            }), 0), h.push(a.cube.c));

            return i.helper = {
              o: 0,
              oo: 1
            }, o.add(tpGS.gsap.to(i.helper, b, {
              o: 1,
              oo: 0,
              ease: i.e
            }), i.md + 0), o.add(tpGS.gsap.set(h, jQuery.extend(!0, {}, p, {
              force3D: !0,
              transformOrigin: m
            })), 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, g), 0), o.add(tpGS.gsap.to(h, b, u), i.md + 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, {
              z: 0,
              ease: "power1.inOut"
            }), b - i.md), "out" === r && 1 !== s && o.add(tpGS.gsap.to(h, 2 * i.md, {
              opacity: 0
            }), i.dur - 2 * i.md), o;
          }
        }
      }
    },
    animatedCanvasUpdate: function animatedCanvasUpdate(e, i) {
      i.cDIMS = t.getBGCanvasDetails(e, i), i.canvas.style.backgroundColor = "transparent", i.canvas.style.opacity = 1, i.canvas.width !== i.mDIM.width && (i.canvas.width = i.mDIM.width), i.canvas.height !== i.mDIM.height && (i.canvas.height = i.mDIM.height), _R_is_Editor || !0 !== t[e].clearModalBG || (i.ctx.clearRect(0, 0, i.canvas.width, i.canvas.height), t[e].clearModalBG = !1, i.sbg.parentNode.style.opacity = 1), i.col = i.col || 1, i.row = i.row || 1, i.SLOT = jQuery.extend(!0, {
        s: {},
        c: {}
      }, a(e, i.col, i.row, i.mDIM, "OW", "OH")), i.SLOT.DX = 0 - i.SLOT.OW / 2, i.SLOT.DY = 0 - i.SLOT.OH / 2, i.row = Math.ceil(i.mDIM.height / i.SLOT.OH) || 1, void 0 !== i.callFromAnimatedCanvasUpdate && i.callFromAnimatedCanvasUpdate();
    },
    slideAnimFinished: function slideAnimFinished(e, i, a, r) {
      void 0 !== i && (void 0 !== i.bgvid && i.bgvid.length > 0 && "out" === a.direction && (i.drawVideoCanvasImagesRecall = !1, t.stopVideo(i.bgvid, e), i.bgvid[0].style.display = "none", i.bgvid[0].style.zIndex = 0), i.panFake && i.panFake.img && ("out" === a.direction ? i.panFake.img.style.display = "none" : i.panFake.img.style.display = "block"), "in" === a.direction && (t.transitions.motionFilter.complete(i), i.ctx.canvas.style.filter = "none", tpGS.gsap.set(a.slide, {
        zIndex: 20
      }), delete i.animateDirection, i.bgvid.length > 0 && (i.isHTML5 ? tpGS.gsap.set(i.bgvid[0], {
        zIndex: 30,
        display: "block",
        opacity: 1
      }) : (t.resetVideo(i.bgvid, e), tpGS.gsap.delayedCall(.1, function () {
        t.playVideo(i.bgvid, e, !0), tpGS.gsap.set(i.bgvid[0], {
          zIndex: 30,
          display: "block",
          opacity: 1
        });
      })))), "out" === a.direction ? (tpGS.gsap.set(a.slide, {
        zIndex: 10
      }), tpGS.gsap.set(i.canvas, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        x: 0,
        y: 0,
        z: 0,
        opacity: 1
      }), i.currentState = void 0) : i.currentState = "idle", void 0 !== i.cube && (i.cube.c.style.display = "none"), "in" === a.direction && (t.updateSlideBGs(e, i.skeyindex, i), void 0 === i.panzoom || _R_is_Editor || t.startPanZoom(t[e].pr_next_bg, e, void 0 !== t[e].panzoomTLs[i.skeyindex] ? t[e].panzoomTLs[i.skeyindex].progress() : 0, i.skeyindex, "play", i.key), void 0 !== a.BG && !0 !== r && a.BG.ctx.clearRect(0, 0, 2 * i.canvas.width, 2 * i.canvas.height)));
    },
    animateCore: function animateCore(e, i, a, r) {
      var o,
          s,
          n,
          l,
          d = i.canvas,
          c = i.ctx,
          p = 0;

      if (i.col = a.col, i.row = a.row, _R_is_Editor && i.three) {
        for (i.canvas.style.display = "block"; i.three.scene.children.length > 0;) {
          i.three.scene.remove(i.three.scene.children[0]);
        }

        i.three.canvas.parentNode.removeChild(i.three.canvas), i.three = void 0;
      }

      t.animatedCanvasUpdate(e, i), a.row = i.row, i.animateDirection = r.direction, r.delay = void 0 === r.delay ? 0 : r.delay, n = a.col * a.row, l = Array(n), void 0 === i.help_canvas && "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas = document.createElement("canvas"), i.help_ctx = i.help_canvas.getContext("2d")), "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas.width = i.mDIM.width, i.help_canvas.height = i.mDIM.height, i.help_ctx.fillStyle = r.bgColor, i.help_ctx.fillRect(0, 0, i.mDIM.width, i.mDIM.height)), a.mo = t.transitions.motionFilter.init(i, a.mo), a.dur = a.ms / a.sec, void 0 !== r.d3 && (r.d3.dur = a.dur, r.d3.fd = .7 * a.dur, r.d3.md = .15 * a.dur, r.d3.sdir = r.sdir), i.SLOT.c = {
        ws: 0,
        hs: 0,
        wd: 0,
        hd: 0
      }, a.mo > 0 && _R_is_Editor && c.clearRect(0, 0, d.width, d.height);
      var g = tpGS.gsap.timeline({
        onUpdate: function onUpdate() {
          if (p = 0, a.mo > 0 ? t.transitions.motionFilter.render(i, a.moo) : c.clearRect(0, 0, d.width, d.height), i.help_canvas && "out" === r.direction && c.drawImage(i.help_canvas, 0, 0), (r.filter && r.filter.u || !_R_is_Editor) && t.transitions.filter.update(r.filter, c, i.canvasFilterBlur), _R_is_Editor && 0 !== a.zIndex && void 0 !== a.zIndex && tpGS.gsap.set(r.slide, {
            zIndex: a.zIndex
          }), void 0 !== i.shadowCanvas) for (o = 0; o < a.col; o++) {
            for (i.SLOT.SX = i.SLOT.OW * o, i.SLOT.tw = i.SLOT.OW * (o + .5), i.SLOT.c.wd = i.mDIM.width - (i.SLOT.tw + i.SLOT.DX + i.SLOT.OW), i.SLOT.c.wd = i.SLOT.c.wd < 0 ? i.SLOT.c.wd : 0, i.SLOT.DW = i.SLOT.SW = i.SLOT.OW + i.SLOT.c.wd, s = 0; s < a.row; s++) {
              c.save();
              var n = -Math.PI / 180 * l[p].r,
                  g = 0 !== a.r ? Math.cos(n) * l[p].sx : l[p].sx,
                  u = 0 !== a.r ? Math.cos(n) * l[p].sy : l[p].sy,
                  h = 0 !== a.r ? Math.sin(n) * l[p].sx : 0,
                  m = 0 !== a.r ? Math.sin(n) * -l[p].sy : 0;
              i.SLOT.SY = i.SLOT.OH * s, i.SLOT.th = i.SLOT.OH * (s + .5), t.transitions[r.effect] && t.transitions[r.effect].beforeDraw && t.transitions[r.effect].beforeDraw(e, c, l[p], i), a.m && (c.beginPath(), c.rect(i.SLOT.OW * o, i.SLOT.OH * s, i.SLOT.OW, i.SLOT.OH), c.clip()), c.transform(g, h, m, u, i.SLOT.tw + l[p].x, i.SLOT.th + l[p].y), c.globalAlpha = Math.max(0, l[p].o), i.SLOT.c.hd = i.mDIM.height - (i.SLOT.th + i.SLOT.DY + i.SLOT.OH), i.SLOT.c.hd = i.SLOT.c.hd < 0 ? i.SLOT.c.hd : 0, i.SLOT.DH = i.SLOT.SH = i.SLOT.OH + i.SLOT.c.hd, i.SLOT.SW > 1 && i.SLOT.SH > 1 && c.drawImage(i.shadowCanvas, i.SLOT.SX, i.SLOT.SY, i.SLOT.SW, i.SLOT.SH, i.SLOT.DX, i.SLOT.DY, i.SLOT.DW, i.SLOT.DH), c.restore(), t.transitions[r.effect] && t.transitions[r.effect].afterDraw && t.transitions[r.effect].afterDraw(e, c, l[p], i, {
                csx: g,
                csy: u,
                ssx: h,
                ssy: m
              }), p++;
            }
          }
          void 0 !== r.d3 && r.d3.su && t.transitions.d3.ticker(r.d3, i, r.direction), i.currentState = "animating";
        },
        onComplete: function onComplete() {
          t.slideAnimFinished(e, i, r);
        }
      });

      if (a.col * a.row < 2 && (a.f = "start"), 0 !== a.zIndex && void 0 !== a.zIndex && g.add(tpGS.gsap.set(r.slide, {
        zIndex: parseInt(a.zIndex, 0)
      }), 0), a.m = "false" != a.m && !1 !== a.m, "in" === r.direction) {
        for (o = 0; o < n; o++) {
          l[o] = {
            x: t.SATools.getOffset(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, o),
            y: t.SATools.getOffset(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, o),
            o: t.SATools.getSpecialValue(a.o, o, r.sdir),
            sx: t.SATools.getSpecialValue(a.sx, o, r.sdir),
            sy: t.SATools.getSpecialValue(a.sy, o, r.sdir),
            r: 0 !== a.r ? t.SATools.getSpecialValue(a.r, o, r.sdir) : 0
          };
        }

        g.add(tpGS.gsap.to(l, a.dur, {
          o: 1,
          sx: 1,
          sy: 1,
          r: 0,
          x: 0,
          y: 0,
          ease: a.e,
          stagger: {
            amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
            grid: [a.col, a.row],
            from: "nodelay" === a.f ? "start" : a.f
          }
        }), r.delay), void 0 !== r.d3 && g.add(t.transitions.d3.cubeTL(e, r.d3, i, "in"), 0), t.transitions.filter.extendTimeLine(g, r.filter, i);
      } else {
        for (o = 0; o < n; o++) {
          l[o] = {
            x: 0,
            y: 0,
            o: 1,
            sx: 1,
            sy: 1,
            r: 0
          };
        }

        g.add(tpGS.gsap.to(l, a.dur, {
          o: function o(e) {
            return t.SATools.getSpecialValue(a.o, e, r.sdir);
          },
          sx: function sx(e) {
            return t.SATools.getSpecialValue(a.sx, e, r.sdir);
          },
          sy: function sy(e) {
            return t.SATools.getSpecialValue(a.sy, e, r.sdir);
          },
          r: 0 !== a.r && void 0 !== a.r ? function (e) {
            return t.SATools.getSpecialValue(a.r, e, r.sdir);
          } : 0,
          x: function x(e) {
            return t.SATools.getOffset(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, e) * (a.reversed ? -1 : 1);
          },
          y: function y(e) {
            return t.SATools.getOffset(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, e) * (a.reversed ? -1 : 1);
          },
          ease: a.e,
          stagger: {
            amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
            grid: [a.col, a.row],
            from: "nodelay" === a.f ? "start" : a.f
          }
        }), r.delay + (void 0 !== a.outdelay ? a.outdelay : 0)), void 0 !== r.d3 && g.add(t.transitions.d3.cubeTL(e, r.d3, i, "out"), 0);
      }

      t.transitions[r.effect] && t.transitions[r.effect].extendTimeLine && t.transitions[r.effect].extendTimeLine(e, g, l, a, r, i.mDIM), _R_is_Editor ? RVS.TL[RVS.S.slideId].slide.add(g, 0) : t[e].mtl.add(g, r.delay);
    }
  });

  var i = function i(e, _i3) {
    return void 0 !== _i3 && t.isNumeric(_i3) ? parseFloat(_i3, 0) : null == _i3 || "default" === _i3 || "d" === _i3 ? e : _i3;
  },
      a = function a(e, t, i, _a, r, o) {
    var s = {};
    return s[r] = Math.ceil(_a.width / t), s[o] = (_R_is_Editor, Math.ceil(_a.height / i)), s;
  },
      r = function r(e) {
    return null == e || 0 === e || NaN === e ? 1 : e;
  },
      o = function o(e, a) {
    _R_is_Editor || (t[e].duringslidechange = !0);
    var o,
        s = _R_is_Editor ? -1 : "arrow" == t[e].sc_indicator ? void 0 === t[e].sc_indicator_dir ? t[e].sdir : t[e].sc_indicator_dir : t[e].sdir,
        l = !!_R_is_Editor || void 0 !== t[e].pr_next_bg && t[e].pr_next_bg.length > 0 && void 0 !== t[e].pr_next_bg[0],
        d = !!_R_is_Editor || void 0 !== t[e].pr_active_bg && t[e].pr_active_bg.length > 0 && void 0 !== t[e].pr_active_bg[0],
        p = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n : l ? t[e].sbgs[t[e].pr_next_bg[0].dataset.key] : void 0,
        g = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c : d ? t[e].sbgs[t[e].pr_active_bg[0].dataset.key] : void 0;
    s = 1 === s ? -1 : 1, _R_is_Editor || (delete t[e].sc_indicator, delete t[e].sc_indicator_dir), o = jQuery.extend(!0, {}, function (e, a, o) {
      var s = void 0 !== t.transitions[a.anim.e] && void 0 !== t.transitions[a.anim.e].getBasic ? t.transitions[a.anim.e].getBasic() : t.getBasic(),
          n = "";
      s.out = null == s.out ? {} : s.out, s.out.reversed = void 0 === a.out && (void 0 === s.out.reversed || s.out.reversed);
      void 0 !== a.iw && parseInt(a.iw, 0), void 0 !== a.ow && parseInt(a.ow, 0);

      for (var l in s.attr) {
        n = s.attr[l], s["in"][n] = i(s["in"][n], a["in"][n]), s.out[n] = s.out.reversed ? s["in"][n] : void 0 === a.out ? s.out[n] : i(s.out[n], a.out[n]);
      }

      return s.filter = void 0 !== a.filter ? jQuery.extend(!0, a.filter, a.filter) : s.filter, t.transitions[a.anim.e] && t.transitions[a.anim.e].updateAnim && (s = t.transitions[a.anim.e].updateAnim(e, s, o)), s.e = a.anim.e, void 0 !== s["in"] && (s["in"].col = "random" === s["in"].col ? tpGS.gsap.utils.random(1, 10, 1) : r(s["in"].col), s["in"].row = "random" === s["in"].row ? tpGS.gsap.utils.random(1, 10, 1) : r(s["in"].row)), void 0 !== s.out && (s.out.col = "random" === s.out.col ? tpGS.gsap.utils.random(1, 10, 1) : r(s.out.col), s.out.row = "random" === s.out.row ? tpGS.gsap.utils.random(1, 10, 1) : r(s.out.row)), s;
    }(e, a, s)), void 0 !== p.random && void 0 !== t.SLTR && void 0 !== g && (delete g.help_canvas, delete g.help_ctx), o.ms = i(void 0, void 0 === a.anim.ms ? 1e3 : a.anim.ms), o.f = i(void 0, a.anim.f), o.p = i(void 0, a.anim.p), o.d = i(void 0, a.anim.d), o.o = a.anim.o, void 0 !== a.d3 && (a.d3.t = void 0 !== a.d3.t && 0 !== a.d3.t && a.d3.t, a.d3.su = "true" == a.d3.su || 1 == a.d3.su, a.d3.su && (a.d3.smi = void 0 === a.d3.smi ? 0 : parseFloat(a.d3.smi), a.d3.sl = void 0 === a.d3.sl ? 1 : parseFloat(a.d3.sl), a.d3.sma = void 0 === a.d3.sma ? .5 : parseFloat(a.d3.sma), a.d3.sc = void 0 === a.d3.sc ? "0,0,0" : tpGS.gsap.utils.splitColor(a.d3.sc).join(",")), o.p = "none", void 0 !== o["in"].row && void 0 !== o["in"].col && o["in"].row * o["in"].col > 200 && (o.filter = void 0)), o["in"].sec = void 0 === o["in"].sec ? 1e3 : o["in"].sec, o["in"].stasec = void 0 === o["in"].stasec ? void 0 === o.d ? 1500 : 100 * o.d : o["in"].stasec, o["in"].ms = "default" === o.ms || "d" === o.ms ? o["in"].ms : "random" === o.ms ? Math.round(1e3 * Math.random() + 300) : null != o.ms ? parseInt(o.ms, 0) : o["in"].ms, o.out.ms = o["in"].ms, void 0 !== o.filter && (o.filter.ms = o["in"].ms, o.filter.sec = o["in"].sec, o.filter.e = void 0 === o.filter.e || "default" === o.filter.e ? o["in"].e : o.filter.e), o["in"].f = void 0 === o.f || "default" === o.f || "d" === o.f ? o["in"].f : o.f, o["in"].f = "slidebased" === o["in"].f ? 1 == s ? "start" : "end" : "oppslidebased" === o["in"].f ? 1 === s ? "end" : "start" : o["in"].f, o.out.f = o["in"].f, o.out = jQuery.extend(!0, {}, o["in"], o.out), o["in"].eng = o.out.eng = a.anim.eng, void 0 !== o.out.eng && null == t[o.out.eng] && (o.out.o = 0, o["in"].o = 0, o["in"].ms = o.out.ms = 1e3, o["in"].eng = o.out.eng = "animateCore"), void 0 !== o.p && "none" !== o.p && (o["in"].bg = "dark" === o.p ? "#000" : "light" === o.p ? "#fff" : "transparent", o.out.delay = "none" !== o.p ? function (e, t) {
      return e / 2.5;
    } : 0, 1 === o.out.o && 0 === o.out.x && 0 === o.out.y && (o.out.o = 0)), "forceinout" === o.o ? (o["in"].zIndex = 20, o.out.zIndex = 10) : "outin" !== o.o && (1 !== o["in"].o || 0 !== o["in"].x || 0 !== o["in"].y || void 0 === a.out || 1 === o.out.o && 0 === o.out.x && 0 === o.out.y) || (o["in"].zIndex = 10, o.out.zIndex = 20), p.bgvid.length > 0 && (o["in"] = c(e, o["in"], p, "in")), d && void 0 !== g.bgvid && g.bgvid.length > 0 && (o.out = c(e, o.out, g, "out")), void 0 !== o.out && (o.out.simplify || o["in"].simplify) && (o.out = n(o.out)), o["in"].simplify && (o["in"] = n(o["in"])), _R_is_Editor || requestAnimationFrame(function () {
      t.generalObserver(t.ISM, !0);
    }), o["in"].eng = void 0 === o["in"].eng ? "animateCore" : o["in"].eng, o.out.eng = void 0 === o.out.eng ? "animateCore" : o.out.eng, d && !0 !== o.out.skip && t[o.out.eng](e, g, o.out, {
      effect: o.e,
      slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : t[e].pr_active_slide,
      direction: "out",
      delay: 0,
      bgColor: o["in"].bg,
      sdir: s,
      filter: void 0,
      d3: a.d3,
      addOns: _R_is_Editor ? a.addOns : void 0
    }), !0 !== o["in"].skip && t[o["in"].eng](e, p, o["in"], {
      effect: o.e,
      slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n.sbg : t[e].pr_next_slide,
      direction: "in",
      delay: d ? "function" == typeof o.out.delay ? o.out.delay(o["in"].ms / 1e3, o.out.row * o.out.col) : o.out.delay : o["in"].delay,
      BG: g,
      outslide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : t[e].pr_active_slide,
      sdir: s,
      filter: o.filter,
      d3: a.d3,
      addOns: _R_is_Editor ? a.addOns : void 0
    });
  },
      s = function s(e, i, a) {
    var r = e.height / e.width;
    if (a.ratio = a.conth / a.contw, a.ratio < r && "contain" === i.bgfit || a.ratio > r && "cover" === i.bgfit) a.height = e.width * a.ratio;else if (a.ratio > r && "contain" === i.bgfit || a.ratio < r && "cover" === i.bgfit) a.width = e.width * r / a.ratio;else if (a.ratio !== r || "contain" !== i.bgfit && "cover" !== i.bgfit) {
      var o = i.bgfit.split(" ");
      1 === o.length && (o[1] = o[0]), a.width = "auto" === o[0] ? a.contw : e.width * (parseInt(o[0], 0) / 100), a.height = "auto" === o[1] ? a.conth : a.width * a.ratio, i.usepattern = !0;
    } else a.width = e.width;

    var s = function (e, i, a) {
      return 1 === (a = a.split(" ")).length && (a[1] = a[0]), {
        x: "center" === a[0] || "50%" === a[0] ? (e.width - i.width) / 2 : "left" === a[0] ? 0 : "right" === a[0] ? e.width - i.width : t.isNumeric(a[0]) ? 0 : a[0].indexOf("%") >= 0 ? parseInt(a[0], 0) / 100 * e.width - parseInt(a[0], 0) / 100 * i.width : parseInt(a[0], 0),
        y: "center" === a[1] || "50%" === a[1] ? (e.height - i.height) / 2 : "top" === a[1] ? 0 : "bottom" === a[1] ? e.height - i.height : t.isNumeric(a[1]) ? 0 : a[1].indexOf("%") >= 0 ? parseInt(a[1], 0) / 100 * e.height - parseInt(a[1], 0) / 100 * i.height : parseInt(a[1], 0)
      };
    }(e, a, i.bgposition);

    return a.x = s.x, a.y = s.y, a;
  },
      n = function n(e) {
    return e.o = 0, e.r = 0, e.row = 1, e.col = 1, e.x = 0, e.y = 0, e.sx = 1, e.sy = 1, e;
  },
      l = function l(e) {
    return e = "false" !== e && !1 !== e && "off" !== e && void 0 !== e && 0 !== e && -1 !== e;
  },
      d = function d(e) {
    var t = e.toString(16);
    return 1 == t.length ? "0" + t : t;
  },
      c = function c(e, i, a, r) {
    return i.skip = !1, "in" === r ? a.isHTML5 ? (a.bgvid[0].style.display = "none", t.resetVideo(a.bgvid, e), a.animateDirection = "in", a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), t.playVideo(a.bgvid, e)) : (t[e].videos[a.bgvid[0].id].pauseCalled = !1, i.waitToSlideTrans = t[e].videos[a.bgvid[0].id].waitToSlideTrans, !0 !== a.poster ? (t.resetVideo(a.bgvid, e), t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, !0 !== i.waitToSlideTrans && t.playVideo(a.bgvid, e, !0), tpGS.gsap.fromTo(a.bgvid, i.ms / i.sec, {
      zIndex: 30,
      display: "block",
      opacity: 0
    }, {
      opacity: 1,
      zIndex: 30,
      display: "block"
    }), a.loadobj.bgColor = !0, a.bgcolor = "#000", i.simplify = !0) : (t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e), a.bgvid[0].style.display = "none", a.bgvid[0].style.zIndex = 0, a.bgvid[0].style.opacity = 0)) : "out" === r && (a.isHTML5 ? (a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), window.requestAnimationFrame(function () {
      tpGS.gsap.to(a.bgvid, .1, {
        zIndex: 0,
        display: "none"
      });
    })) : (t.stopVideo(a.bgvid, e, !0), !0 !== a.poster && (a.loadobj.bgColor = !0, a.bgcolor = "#000"))), i;
  },
      p = function p(e, t, i, a) {
    return Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - a, 2));
  },
      g = function g(e, t) {
    var i = t + Math.PI / 2;
    return {
      x1: e.x,
      y1: e.y,
      x2: e.x + 100 * Math.cos(i),
      y2: e.y + 100 * Math.sin(i)
    };
  },
      u = function u(e, t) {
    var i = e.y2 - e.y1,
        a = e.x1 - e.x2,
        r = i * e.x1 + a * e.y1,
        o = t.y2 - t.y1,
        s = t.x1 - t.x2,
        n = o * t.x1 + s * t.y1,
        l = i * s - o * a;
    return 0 !== l && {
      x: Math.round((s * r - a * n) / l * 100) / 100,
      y: Math.round((i * n - o * r) / l * 100) / 100
    };
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.slideanims = {
    loaded: !0,
    version: "6.6.0"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery), function (e) {
  "use strict";

  jQuery.fn.revolution = jQuery.fn.revolution || {};
  var t = jQuery.fn.revolution;

  function i(e) {
    return null == e ? -1 : t.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e;
  }

  jQuery.extend(!0, t, {
    preLoadAudio: function preLoadAudio(e, i) {
      t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function () {
        var a = jQuery(this),
            r = t[i].videos[a[0].id] = void 0 === t[i].videos[a[0].id] ? f(a.data(), "audio", t.gA(e[0], "key")) : t[i].videos[a[0].id],
            o = {};
        0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(o), t.manageVideoLayer(a, i, t.gA(e[0], "key"), !0));
      });
    },
    preLoadAudioDone: function preLoadAudioDone(e, i, a) {
      var r = t[i].videos[e[0].id];
      t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function (e, t) {
        r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded");
      });
    },
    checkfullscreenEnabled: function checkfullscreenEnabled(e) {
      if (void 0 !== window.fullScreen) return window.fullScreen;
      if (void 0 !== document.fullscreen) return document.fullscreen;
      if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
      if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
      var i = t.isWebkit() && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
      return screen.width == t.winW && Math.abs(screen.height - t.getWinH(e)) < i;
    },
    showVideo: function showVideo(e) {
      tpGS.gsap.to(e, .3, {
        opacity: 1,
        display: "block",
        ease: "power3.inOut"
      });
    },
    resetVideo: function resetVideo(e, i, a) {
      if ("updateAndResize" !== a) {
        var r = t[i].videos[e[0].id];
        if ("resetVideo" !== r.cRS) switch (r.cRS = "resetVideo", r.type) {
          case "youtube":
            r.rwd && null != r.player && void 0 !== r.player.seekTo && (r.player.seekTo(-1 == r.ssec ? 0 : r.ssec), r.player.pauseVideo()), r.bgvideo || "preset" === a || 0 != r.jsposter.length || t.showVideo(e.find("iframe"));
            break;

          case "vimeo":
            void 0 !== r.vimeoplayer && r.rwd && (0 !== r.ssec && -1 !== r.ssec || r.bgvideo || r.jsposter.length > 0) && (r.vimeoplayer.setCurrentTime(-1 == r.ssec ? 0 : r.ssec), r.vimeoplayer.pause()), 0 != r.jsposter.length || r.bgvideo || "preset" === a || t.showVideo(e.find("iframe"));
            break;

          case "html5":
            if (t.ISM && r.notonmobile) return !1;
            r.bgvideo || t.showVideo(r.jvideo), r.rwd && "playing" !== r.cSS && !isNaN(r.video.duration) && (r.justReseted = !0, r.video.currentTime = -1 == r.ssec ? 0 : r.ssec), ("mute" == r.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[i].globalmute) && (r.video.muted = !0);
        }
      }
    },
    Mute: function Mute(e, i, a) {
      var r = !1,
          o = t[i].videos[e[0].id];

      switch (o.type) {
        case "youtube":
          o.player && (!0 === a && o.player.mute(), !1 === a && n(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
          break;

        case "vimeo":
          o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && s(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
          break;

        case "html5":
          o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r;
      }

      if (void 0 === a) return r;
    },
    stopVideo: function stopVideo(e, i, a) {
      if (void 0 !== t[i] && void 0 !== t[i]) {
        var r = t[i].videos[e[0].id];
        if (void 0 !== r && ("stopVideo" !== r.cRS || "paused" !== r.cSS)) switch (r.cRS = "stopVideo", t[i].leaveViewPortBasedStop || (t[i].lastplayedvideos = []), t[i].leaveViewPortBasedStop = !1, r.type) {
          case "youtube":
            void 0 !== r.player && 2 !== r.player.getPlayerState() && 5 !== r.player.getPlayerState() && (r.player.pauseVideo(), void 0 !== a && p(i, r, "hide"));
            break;

          case "vimeo":
            void 0 !== r.vimeoplayer && (r.vimeoplayer.pause(), void 0 !== a && p(i, r, "hide"));
            break;

          case "html5":
            r.video && (r.video.pause(), t.ISM && b(r, 1));
        }
      }
    },
    playVideo: function playVideo(e, i, r) {
      var o = t[i].videos[e[0].id];
      if (clearTimeout(o.videoplaywait), "playVideo" !== o.cRS || "playing" !== o.cSS) switch (o.cRS = "playVideo", o.type) {
        case "youtube":
          if (0 == e.find("iframe").length) e.append(o.videomarkup), u(e, i, !0);else if (void 0 !== o.player && null != o.player.playVideo) {
            var s = o.player.getCurrentTime();
            o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.player.seekTo(o.ssec), c(o);
          } else o.videoplaywait = setTimeout(function () {
            t.playVideo(e, i);
          }, 50);
          break;

        case "vimeo":
          if (0 == e.find("iframe").length) delete o.vimeoplayer, e.append(o.videomarkup), u(e, i, !0);else if (e.hasClass("rs-apiready")) {
            if (o.vimeoplayer = null == o.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : o.vimeoplayer, o.vimeoplayer.getPaused()) {
              s = void 0 === o.currenttime ? 0 : o.currenttime;
              o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.vimeoplayer.setCurrentTime(o.ssec), ("mute" == o.volume || 0 === o.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (o.volumetoken = !0, o.vimeoplayer.setMuted(!0)), d(o);
            } else o.videoplaywait = setTimeout(function () {
              t.playVideo(e, i);
            }, 50);
          } else o.videoplaywait = setTimeout(function () {
            t.playVideo(e, i);
          }, 50);
          break;

        case "html5":
          if (o.metaloaded) {
            if (("" + o.video.duration == "NaN" || o.video.readyState < 4) && !r) return o.loadRequested || (o.video.load(), o.loadRequested = !0), void setTimeout(function () {
              t.playVideo(e, i);
            }, 50);
            s = o.video.currentTime;
            o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.ssec < o.video.duration && (o.video.currentTime = o.ssec), l(o, void 0, i);
          } else a(o.video, "loadedmetadata", function (e) {
            t.playVideo(e, i);
          }(e));

      }
    },
    isVideoPlaying: function isVideoPlaying(e, i) {
      var a = !1;
      return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function (t, i) {
        e.attr("id") == i.attr("id") && (a = !0);
      }), a;
    },
    removeMediaFromList: function removeMediaFromList(e, t) {
      w(e, t);
    },
    prepareCoveredVideo: function prepareCoveredVideo(e) {
      clearTimeout(t[e].resizePrepareCoverVideolistener);
      var i = "carousel" === t[e].sliderType ? t[e].carousel.justify ? void 0 === t[e].carousel.slide_widths ? void 0 : t[e].carousel.slide_widths[t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width,
          a = "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].canv.height;
      if (0 !== i && 0 !== a && void 0 !== i && void 0 !== a) for (var r in t[e].videos) {
        var o = t[e].videos[r];

        if (void 0 !== o.jvideo && (o.bgvideo || o.jvideo.parent().hasClass("rs-fsv") || t.closestNode(o.video, "RS-LAYER") && t.closestNode(o.video, "RS-LAYER").classList.contains("rs-fsv")) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, {
          width: i
        }), void 0 === t[e].activeRSSlide || o.slideid === t.gA(t[e].slides[t[e].activeRSSlide], "key") || void 0 === t[e].pr_next_slide || o.slideid === t.gA(t[e].pr_next_slide[0], "key"))) {
          o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
          var s,
              n = i / a,
              l = o.vd * n * 100,
              d = o.vd / n * 100;
          "Edge" === t.get_browser() || "IE" === t.get_browser() ? s = n > o.vd ? {
            minWidth: "100%",
            height: l + "%",
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            position: "absolute"
          } : {
            minHeight: "100%",
            width: d + "%",
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            position: "absolute"
          } : (o.bgvideo && void 0 !== o.vimeoid && "carousel" == t[e].sliderType && (l = 100, d = 100), s = n > o.vd ? {
            height: (o.fitCover ? 100 : l) + "%",
            width: "100%",
            top: o.fitCover ? 0 : -(l - 100) / 2 + "%",
            left: "0px",
            position: "absolute"
          } : {
            width: (o.fitCover ? 100 : d) + "%",
            height: "100%",
            left: o.fitCover ? 0 : -(d - 100) / 2 + "%",
            top: "0px",
            position: "absolute"
          }), void 0 === o.vimeoid && void 0 === o.ytid || (s.maxWidth = "none", s.maxHeight = "none"), tpGS.gsap.set(o.jvideo, s);
        }
      } else t[e].resizePrepareCoverVideolistener = setTimeout(function () {
        t.prepareCoveredVideo(e);
      }, 100);
    },
    checkVideoApis: function checkVideoApis(e, i) {
      location.protocol;

      if (!t[i].youtubeapineeded) {
        var a = e.find("iframe");

        if ((null != e.data("ytid") || a.length > 0 && a.attr("src") && a.attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt) {
          t[i].youtubestarttime = Date.now(), window.rs_addedyt = !0;
          var r = document.createElement("script"),
              o = t.getByTag(document, "script")[0],
              s = !0;
          r.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function () {
            "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (s = !1);
          }), s && o.parentNode.insertBefore(r, o);
        }
      }

      if (!t[i].vimeoapineeded) {
        var n = e.find("iframe");

        if ((null != e.data("vimeoid") || n.length > 0 && n.attr("src") && n.attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim) {
          t[i].vimeostarttime = Date.now(), window.rs_addedvim = !0;
          var l = document.createElement("script");
          o = t.getByTag(document, "script")[0], s = !0;
          l.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function () {
            "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (s = !1);
          }), s && o.parentNode.insertBefore(l, o);
        }
      }
    },
    manageVideoLayer: function manageVideoLayer(e, i, r, o) {
      if (t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, void 0 === t[i].videos[e[0].id] || !0 === o) {
        var s = t[i].videos[e[0].id] = void 0 === t[i].videos[e[0].id] ? f(e.data(), void 0, r) : t[i].videos[e[0].id];
        if (s.audio = void 0 !== s.audio && s.audio, t.ISM && s.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');else {
          s.jsposter = e.find("rs-poster"), s.id = e[0].id, s.pload = "auto" === s.pload || "canplay" === s.pload || "canplaythrough" === s.pload || "progress" === s.pload ? "auto" : s.pload, s.type = null != s.mp4 || null != s.webm ? "html5" : null != s.ytid && String(s.ytid).length > 1 ? "youtube" : null != s.vimeoid && String(s.vimeoid).length > 1 ? "vimeo" : "none", s.newtype = "html5" == s.type && 0 == e.find(s.audio ? "audio" : "video").length ? "html5" : "youtube" == s.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == s.type && 0 == e.find("iframe").length ? "vimeo" : "none", s.extras = "", s.posterMarkup = void 0 === s.posterMarkup ? "" : s.posterMarkup, !s.audio && "1sttime" == s.aplay && s.pausetimer && s.bgvideo && t.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), s.audio || !s.bgvideo || !s.pausetimer || 1 != s.aplay && "true" != s.aplay && "no1sttime" != s.aplay || t.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), s.noInt && e.find("*").addClass("rs-nointeraction"), !(null != s.poster && s.poster.length > 2) || t.ISM && s.npom || 0 == s.jsposter.length && (s.posterMarkup += '<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
          var n = !0;

          switch (s.cSS = "created", s.cRS = "created", s.newtype) {
            case "html5":
              1 == window.isSafari11 && (t[i].slideHasIframe = !0), s.audio && e.addClass("rs-audio"), s.tag = s.audio ? "audio" : "video";
              var l = "video" === s.tag && (t.is_mobile() || t.isSafari11()) ? s.aplay && "no1sttime" !== s.aplay || "true" === s.aplay ? "muted playsinline autoplay" : s.inline ? " playsinline" : "" : "",
                  d = '<div class="html5vid rs_html5vidbasicstyles ' + (!1 === s.afs ? "hidefullscreen" : "") + '">',
                  c = s.bgvideo && /^([\w]+\:)?\/\//.test(s.mp4) && (-1 === s.mp4.indexOf(location.host) || -1 !== s.mp4.indexOf("." + location.host)) && s.crossOriginVideo ? ' crossOrigin="anonymous" ' : "";
              d += "<" + s.tag + " " + l + " " + (s.controls && "none" !== s.controls ? " controls" : "") + c + (s.bgvideo && -1 == l.indexOf("autoplay") ? " autoplay" : "") + (s.bgvideo && -1 == l.indexOf("muted") ? " muted" : "") + ' style="' + ("Edge" !== t.get_browser() ? (s.fitCover ? "object-fit:cover;background-size:cover;" : "") + "opacity:0;width:100%; height:100%" : "") + '" class="" ' + (s.loop ? "loop" : "") + ' preload="' + s.pload + '">', "video" === s.tag && null != s.webm && "firefox" == t.get_browser().toLowerCase() && (d = d + '<source src="' + s.webm + '" type="video/webm" />'), null != s.mp4 && (d = d + '<source src="' + s.mp4 + '" type="' + ("video" === s.tag ? "video/mp4" : s.mp4.toLowerCase().indexOf("m4a") > 0 ? "audio/x-m4a" : "audio/mpeg") + '" />'), null != s.ogv && (d = d + '<source src="' + s.mp4 + '" type="' + s.tag + '/ogg" />'), d += "</" + s.tag + "></div>", d += s.posterMarkup, s.controls && !s.audio && void 0 === s.poster || s.bgvideo || (d += '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), s.videomarkup = d, n = !1, t.ISM && s.notonmobile || t.isIE(8) || e.append(d), s.jvideo = e.find(s.tag), s.video = s.jvideo[0], s.html5vid = s.jvideo.parent(), a(s.video, "canplay", function (e) {
                m(e, i), t.resetVideo(e, i);
              }(e));
              break;

            case "youtube":
              t[i].slideHasIframe = !0, s.controls && "none" !== s.controls || (s.vatr = s.vatr.replace("controls=1", "controls=0"), -1 == s.vatr.toLowerCase().indexOf("controls") && (s.vatr = s.vatr + "&controls=0")), (s.inline || "RS-BGVIDEO" === e[0].tagName) && (s.vatr = s.vatr + "&playsinline=1"), -1 != s.ssec && (s.vatr += "&start=" + s.ssec), -1 != s.esec && (s.vatr += "&end=" + s.esec);
              var p = s.vatr.split("origin=https://");
              s.vatrnew = p.length > 1 ? p[0] + "origin=https://" + (self.location.href.match(/www/gi) && !p[1].match(/www/gi) ? "www." + p[1] : p[1]) : s.vatr, s.videomarkup = '<iframe allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + s.ytid + "?" + s.vatrnew + '" ' + (!0 === s.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
              break;

            case "vimeo":
              t[i].slideHasIframe = !0, s.controls && "none" !== s.controls ? (s.vatr = s.vatr.replace("background=0", "background=1"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=1")) : (s.vatr = s.vatr.replace("background=1", "background=0"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=0")), s.vatr = "autoplay=" + (!0 === s.aplay ? 1 : 0) + "&" + s.vatr, s.bgvideo && (s.prePlayForaWhile = !0), t.ISM && !0 === s.aplay && (s.vatr = "muted=1&" + s.vatr), s.loop && (s.vatr = "loop=1&" + s.vatr), s.videomarkup = '<iframe  allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + s.vimeoid + "?" + s.vatr + '" ' + (!0 === s.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
          }

          if (!(null != s.poster && s.poster.length > 2) || t.ISM && s.npom) {
            if (t.ISM && s.notonmobile) return !1;
            0 != e.find("iframe").length || "youtube" != s.type && "vimeo" != s.type || (delete s.vimeoplayer, e.append(s.videomarkup), u(e, i, !("vimeo" !== s.newtype || !s.bgvideo), !0));
          } else n && 0 == e.find("rs-poster").length && e.append(s.posterMarkup), 0 == e.find("iframe").length && (s.jsposter = e.find("rs-poster"), s.jsposter.on("click", function () {
            if (t.playVideo(e, i, !0), t.ISM) {
              if (s.notonmobile) return !1;
              tpGS.gsap.to(s.jsposter, .3, {
                opacity: 0,
                visibility: "hidden",
                force3D: "auto",
                ease: "power3.inOut"
              }), t.showVideo(e.find("iframe"));
            }
          }));

          if ("none" !== s.doverlay && void 0 !== s.doverlay) {
            var g = t.createOverlay(i, s.doverlay, s.doverlaysize, {
              0: s.doverlaycolora,
              1: s.doverlaycolorb
            });
            s.bgvideo && 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length ? e.closest("rs-sbg-wrap").append('<rs-dotted style="background-image:' + g + '"></rs-dotted>') : s.bgvideo || 1 == e.find("rs-dotted").length || e.append('<rs-dotted style="background-image:' + g + '"></rs-dotted>');
          }

          s.bgvideo && ("youtube" !== s.type && "vimeo" !== s.type && (e[0].style.display = "none"), e[0].style.zIndex = 0, tpGS.gsap.set(e.find("video, iframe"), {
            opacity: 0
          }));
        }
      }
    }
  });

  var a = function a(e, t, i) {
    e.addEventListener ? e.addEventListener(t, i, {
      capture: !1,
      passive: !0
    }) : e.attachEvent(t, i, {
      capture: !1,
      passive: !0
    });
  },
      r = function r(e, t, i) {
    var a = {};
    return a.video = e, a.type = t, a.settings = i, a;
  },
      o = function o(e, i) {
    var a = t[e].videos[i[0].id];
    (a.bgvideo || i.hasClass("rs-fsv")) && ((void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), requestAnimationFrame(function () {
      t.prepareCoveredVideo(e);
    }));
  },
      s = function s(e, i) {
    var a = e.vimeoplayer;
    a.getPaused().then(function (r) {
      e.volumetoken = !0;
      var o = !r,
          s = a.setVolume(i);
      void 0 !== s && s.then(function (t) {
        a.getPaused().then(function (t) {
          o === t && (e.volume = "mute", a.getMuted().then(function (t) {
            t || (e.volumetoken = !0, a.setMuted(!0));
          }), a.play());
        })["catch"](function (e) {
          console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise");
        });
      })["catch"](function (i) {
        o && (e.volume = "mute", e.volumetoken = !0, a.setMuted(!0), a.play()), t.ISM && b(e, 0);
      });
    })["catch"](function () {
      console.log("Get Paused Function Failed for Vimeo Volume Changes");
    });
  },
      n = function n(e, t) {
    var i = e.player.getPlayerState();
    "mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function () {
      1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo());
    }, 39);
  },
      l = function l(e, i, a) {
    if ("playVideo" === e.cRS) {
      var r = e.video.play();
      void 0 !== r && r.then(function (i) {
        !0 === e.twaudio && !0 !== t[a].globalmute && (e.twaudio = !1, t.clickedOnce && (e.video.volume = e.volcache, e.volume = e.volcache, e.video.muted = !1));
      })["catch"](function (t) {
        e.video.pause(), !0 !== i && l(e, !0, a);
      }), t.ISM && b(e, 0);
    }
  },
      d = function d(e) {
    if ("playVideo" === e.cRS) {
      var t = e.vimeoplayer.play();
      void 0 !== t && t.then(function (e) {})["catch"](function (t) {
        e.vimeoplayer.volumetoken = !0, e.vimeoplayer.setMuted(!0), e.vimeoplayer.play();
      });
    }
  },
      c = function c(e) {
    "playVideo" === e.cRS && e.player.playVideo();
  },
      p = function p(e, i, a, r) {
    clearTimeout(i.repeatedPosterCalls), i.repeatedPosterCalls = setTimeout(function () {
      "show" === a || "playing" === i.cSS && !0 !== i.VideoIsVisible ? (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, {
        zIndex: 5,
        autoAlpha: 0,
        force3D: "auto",
        ease: "power3.inOut"
      }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, {
        opacity: 1,
        display: "block",
        ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out"
      }), 0), i.VideoIsVisible = !0) : ("hide" === a || "paused" === i.cSS && 1 != t.checkfullscreenEnabled(e) && i.jsposter.length > 0 && !1 !== i.VideoIsVisible && !0 !== i.seeking) && (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, {
        zIndex: 5,
        autoAlpha: 1,
        force3D: "auto",
        ease: "power3.inOut"
      }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, {
        opacity: 0,
        ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out"
      }), .3), i.bgvideo && void 0 !== i.nBG && void 0 !== i.nBG.loadobj && (i.nBG.video = i.nBG.loadobj.img), i.VideoIsVisible = !1);
    }, void 0 !== a ? 0 : 100);
  },
      g = function g(e, i, a) {
    e.cSS = "playing", e.vimeostarted = !0, e.nextslidecalled = !1, e.jsposter = void 0 === e.jsposter || 0 === e.jsposter.length ? i.find("rs-poster") : e.jsposter, e.jvideo = i.find("iframe"), t[a].c.trigger("revolution.slide.onvideoplay", r(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, y(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setMuted(!0)) : s(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby);
  },
      u = function u(e, i, a, s) {
    var l = t[i].videos[e[0].id],
        d = "iframe" + Math.round(1e5 * Math.random() + 1);

    if (l.jvideo = e.find("iframe"), o(i, e), l.jvideo.attr("id", d), l.startvideonow = a, l.videolistenerexist) {
      if (a) switch (l.type) {
        case "youtube":
          t.playVideo(e, i), -1 != l.ssec && l.player.seekTo(l.ssec);
          break;

        case "vimeo":
          t.playVideo(e, i), -1 != l.ssec && l.vimeoplayer.seekTo(l.ssec);
      }
    } else switch (l.type) {
      case "youtube":
        if ("undefined" == typeof YT || void 0 === YT.Player) return t.checkVideoApis(e, i), void setTimeout(function () {
          u(e, i, a, s);
        }, 50);
        l.player = new YT.Player(d, {
          events: {
            onStateChange: function onStateChange(a) {
              a.data == YT.PlayerState.PLAYING ? (l.cSS = "playing", t[i].onceVideoPlayed = !0, !1 === l.player.isMuted() && (l.volume = l.volcache = l.player.getVolume()), "mute" == l.volume || 0 === l.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute ? l.player.mute() : n(l, parseInt(l.volcache, 0) || 75), t[i].stopByVideo = !0, y(e, i), l.pausetimer ? t[i].c.trigger("stoptimer") : t[i].stopByVideo = !1, t[i].c.trigger("revolution.slide.onvideoplay", r(l.player, "youtube", l)), t.toggleState(l.videotoggledby)) : (l.cSS = "paused", 0 == a.data && l.loop && (-1 != l.ssec && l.player.seekTo(l.ssec), t.playVideo(e, i), t.toggleState(l.videotoggledby)), -1 != a.data && 3 != a.data && (t[i].stopByVideo = !1, t[i].tonpause = !1, w(e, i), t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(l.player, "youtube", l)), null != t[i].videoIsPlaying && t[i].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby)), 0 == a.data && l.nse ? (document.fullscreenElement !== e.find("iframe")[0] && document.webkitFullscreenElement !== e.find("iframe")[0] || h(), l.nseTriggered = !0, t[i].c.revnext(), w(e, i)) : (w(e, i), t[i].stopByVideo = !1, 3 !== a.data && (-1 != l.lasteventdata && 3 != l.lasteventdata && void 0 !== l.lasteventdata || -1 != a.data && 3 != a.data) && t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(l.player, "youtube", l)), null != t[i].videoIsPlaying && t[i].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby))), clearTimeout(l.postOrVideoTimer), 3 !== a.data && (l.postOrVideoTimer = setTimeout(function () {
                p(i, l);
              }, 1 === l.lasteventdata && 2 === a.data || 2 === l.lasteventdata && 3 !== a.data ? 1e3 : 0), l.lasteventdata = a.data);
            },
            onReady: function onReady(a) {
              var r,
                  o = t.is_mobile(),
                  n = e.hasClass("rs-layer-video");
              l.ready = !0, !o && (!t.isSafari11() || o && n) || "RS-BGVIDEO" !== e[0].tagName && (!n || !0 !== l.aplay && "true" !== l.aplay) || (r = !0, l.player.setVolume(0), l.volume = "mute", l.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== l.player.getPlayerState() && -1 !== l.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function () {
                t.playVideo(e, i);
              }, 500))), r || "mute" != l.volume || (l.player.setVolume(0), l.player.mute()), e.addClass("rs-apiready"), null == l.speed && 1 === l.speed || a.target.setPlaybackRate(parseFloat(l.speed)), l.jsposter.off("click"), l.jsposter.on("click", function () {
                t.playVideo(e, i, !0);
              }), l.startvideonow ? (t.playVideo(e, i), -1 != l.ssec && l.player.seekTo(l.ssec)) : s && p(i, l, "show", .2), l.videolistenerexist = !0;
            }
          }
        });
        break;

      case "vimeo":
        if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return t.checkVideoApis(e, i), void setTimeout(function () {
          u(e, i, a, s);
        }, 50);

        for (var c, m = l.jvideo.attr("src"), v = {}, f = m, b = /([^&=]+)=([^&]*)/g; c = b.exec(f);) {
          v[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
        }

        m = (m = null != v.player_id ? m.replace(v.player_id, d) : m + "&player_id=" + d).replace(/&api=0|&api=1/g, "");

        var _,
            S = t.is_mobile() || t.isSafari11(),
            x = "RS-BGVIDEO" === e[0].tagName;

        if (S && x && (m += "&background=1"), l.jvideo.attr("src", m), l.vimeoplayer = void 0 === l.vimeoplayer || !1 === l.vimeoplayer ? new Vimeo.Player(d) : l.vimeoplayer, S) x ? _ = !0 : (l.aplay || "true" === l.aplay) && (_ = !0), _ && (l.volumetoken = !0, l.vimeoplayer.setMuted(!0), l.volume = "mute");
        l.vimeoplayer.on("play", function (a) {
          t[i].onceVideoPlayed = !0, l.cSS = "playing", l.vimeostarted || g(l, e, i);
        }), l.vimeoplayer.on("loaded", function (a) {
          var r = {};
          l.vimeoplayer.getVideoWidth().then(function (t) {
            r.width = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, o(i, e));
          }), l.vimeoplayer.getVideoHeight().then(function (t) {
            r.height = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, o(i, e));
          }), l.startvideonow ? ("mute" === l.volume && (l.volumetoken = !0, l.vimeoplayer.setMuted(!0)), t.playVideo(e, i), -1 != l.ssec && l.vimeoplayer.setCurrentTime(l.ssec)) : s && p(i, l, "show", .2), null == l.speed && 1 === l.speed || l.vimeoplayer.setPlaybackRate(parseFloat(l.speed));
        }), e.addClass("rs-apiready"), l.vimeoplayer.on("volumechange", function (e) {
          l.volumetoken && (l.volume = e.volume), l.volumetoken = !1;
        }), l.vimeoplayer.on("timeupdate", function (a) {
          p(i, l), l.vimeostarted || 0 === a.percent || void 0 !== t[i].activeRSSlide && l.slideid !== t.gA(t[i].slides[t[i].activeRSSlide], "key") || g(l, e, i), l.pausetimer && "playing" == t[i].sliderstatus && (t[i].stopByVideo = !0, t[i].c.trigger("stoptimer")), l.currenttime = a.seconds, 0 != l.esec && -1 !== l.esec && l.esec < a.seconds && !0 !== l.nextslidecalled && (l.loop ? (t.playVideo(e, i), l.vimeoplayer.setCurrentTime(-1 !== l.ssec ? l.ssec : 0)) : (l.nse && (l.nseTriggered = !0, l.nextslidecalled = !0, t[i].c.revnext()), l.vimeoplayer.pause())), l.prePlayForaWhile && l.vimeoplayer.pause();
        }), l.vimeoplayer.on("ended", function (a) {
          l.cSS = "paused", p(i, l), l.vimeostarted = !1, w(e, i), t[i].stopByVideo = !1, t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(l.vimeoplayer, "vimeo", l)), l.nse && (l.nseTriggered = !0, t[i].c.revnext()), null != t[i].videoIsPlaying && t[i].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby);
        }), l.vimeoplayer.on("pause", function (a) {
          l.vimeostarted = !1, l.cSS = "paused", p(i, l), t[i].stopByVideo = !1, t[i].tonpause = !1, w(e, i), t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(l.vimeoplayer, "vimeo", l)), null != t[i].videoIsPlaying && t[i].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby);
        }), l.jsposter.off("click"), l.jsposter.on("click", function () {
          if (!t.ISM) return t.playVideo(e, i, !0), !1;
        }), l.videolistenerexist = !0;
    }
  },
      h = function h() {
    document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen();
  },
      m = function m(e, i, o) {
    var s = t[i].videos[e[0].id];
    if (t.ISM && s.notonmobile) return !1;

    if (s.metaloaded = !0, "html5" === s.newtype && s.bgvideo && (s.nBG = t[i].sbgs[e[0].dataset.key], void 0 === s.nBG.shadowCanvas && (s.nBG.shadowCanvas = document.createElement("canvas"), s.nBG.shadowCTX = s.nBG.shadowCanvas.getContext("2d"), s.nBG.shadowCanvas.style.background = "transparent", s.nBG.shadowCanvas.style.opacity = 1), s.nBG.isHTML5 = !0, s.nBG.video = void 0 !== s.nBG.loadobj && void 0 !== s.nBG.loadobj.img ? s.nBG.loadobj.img : s.video, s.nBG.drawVideoCanvasImagesRecall = !1), (!s.controls || s.audio || void 0 !== s.poster) && !s.noInt) {
      0 != e.find(".tp-video-play-button").length || t.ISM || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
      var n = "video, rs-poster, .tp-video-play-button";
      void 0 !== s.poster && s.controls && (n = ".tp-video-play-button"), e.find(n).on("click", function () {
        !1 === s.loop && s.esec > 0 && s.esec <= s.video.currentTime || (e.hasClass("videoisplaying") ? t.stopVideo(e, i) : t.playVideo(e, i, !0));
      });
    }

    (e.hasClass("rs-fsv") || s.bgvideo) && (s.bgvideo || e.hasClass("rs-fsv") ? (s.html5vid.addClass("fullcoveredvideo"), void 0 !== s.ratio && 1 != s.ratio.split(":").length || (s.ratio = "16:9"), t.prepareCoveredVideo(i)) : s.html5vid.addClass("rs-fsv")), a(s.video, "canplaythrough", function () {
      t.preLoadAudioDone(e, i, "canplaythrough");
    }), a(s.video, "canplay", function () {
      t.preLoadAudioDone(e, i, "canplay");
    }), a(s.video, "progress", function () {
      t.preLoadAudioDone(e, i, "progress");
    }), a(s.video, "pause", function () {
      t.ISM && b(s, 1);
    }), a(s.video, "timeupdate", function (e) {
      this.BGrendered = !0, p(i, s), -1 === s.esec && s.loop && 1 == window.isSafari11 && (s.esec = s.video.duration - .075), void 0 !== s.lastCurrentTime ? s.fps = s.video.currentTime - s.lastCurrentTime : s.fps = .1, s.lastCurrentTime = s.video.currentTime, 0 != s.esec && -1 != s.esec && s.esec < s.video.currentTime && !s.nextslidecalled && (s.loop ? (l(s, void 0, i), s.video.currentTime = -1 === s.ssec ? .5 : s.ssec) : (s.nse && (s.nseTriggered = !0, s.nextslidecalled = !0, t[i].jcnah = !0, t[i].c.revnext(), setTimeout(function () {
        t[i].jcnah = !1;
      }, 1e3)), s.video.pause()));
    }), a(s.video, "play", function () {
      s.cSS = "playing", p(i, s), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !0, s.nBG.videoisplaying = !0, s.nBG.video = s.video, t.updateVideoFrames(i, s.nBG)), t[i].onceVideoPlayed = !0, s.nextslidecalled = !1, s.volume = null != s.volume && "mute" != s.volume ? parseFloat(s.volcache) : s.volume, s.volcache = null != s.volcache && "mute" != s.volcache ? parseFloat(s.volcache) : s.volcache, t.is_mobile() || (!0 === t[i].globalmute ? s.video.muted = !0 : s.video.muted = "mute" == s.volume, s.volcache = t.isNumeric(s.volcache) && s.volcache > 1 ? s.volcache / 100 : s.volcache, "mute" == s.volume ? s.video.muted = !0 : null != s.volcache && (s.video.volume = s.volcache)), e.addClass("videoisplaying"), y(e, i), clearTimeout(s.showCoverSoon), !0 !== s.pausetimer || "audio" == s.tag ? (t[i].stopByVideo = !1, t[i].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", s))) : (t[i].stopByVideo = !0, t[i].c.trigger("revolution.slide.onvideoplay", r(s.video, "html5", s))), s.pausetimer && "playing" == t[i].sliderstatus && (t[i].stopByVideo = !0, t[i].c.trigger("stoptimer")), t.toggleState(s.videotoggledby);
    }), a(s.video, "seeked", function () {
      s.seeking = !1;
    }), a(s.video, "seeking", function () {
      s.seeking = !0;
    }), a(s.video, "pause", function (a) {
      s.cSS = "paused", p(i, s), e.removeClass("videoisplaying"), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !1, s.nBG.videoisplaying = !1), t[i].stopByVideo = !1, w(e, i), "audio" != s.tag && t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", s)), null != t[i].videoIsPlaying && t[i].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(s.videotoggledby);
    }), a(s.video, "ended", function () {
      s.cSS = "paused", document.fullscreenElement !== s.video && document.webkitFullscreenElement !== s.video || h(), p(i, s), w(e, i), t[i].stopByVideo = !1, w(e, i), "audio" != s.tag && t[i].c.trigger("starttimer"), t[i].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", e.data())), s.nse && s.video.currentTime > 0 && (1 == !t[i].jcnah && (s.nseTriggered = !0, t[i].c.revnext(), t[i].jcnah = !0), setTimeout(function () {
        t[i].jcnah = !1;
      }, 1500)), e.removeClass("videoisplaying"), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !1, s.nBG.videoisplaying = !1), !0 !== t[i].inviewport && void 0 !== t[i].inviewport || (t[i].lastplayedvideos = []);
    }), a(s.video, "volumechange", function () {
      s.video.muted ? s.volume = "mute" : s.volume = s.volcache = s.video.volume;
    });
  },
      v = function v(e) {
    return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e;
  },
      f = function f(e, t, a) {
    e.audio = "audio" === t;
    var r = void 0 === e.video ? [] : e.video.split(";"),
        o = {
      volume: e.audio ? 1 : "mute",
      pload: "auto",
      ratio: "16:9",
      loop: !0,
      aplay: "true",
      fitCover: !0,
      afs: !0,
      controls: !1,
      nse: !0,
      npom: !1,
      opom: !1,
      inline: !0,
      notonmobile: !1,
      start: -1,
      end: -1,
      doverlay: "none",
      doverlaysize: 1,
      doverlaycolora: "transparent",
      doverlaycolorb: "#000000",
      scop: !1,
      rwd: !0,
      speed: 1,
      ploadwait: 5,
      stopAV: 1 !== e.bgvideo,
      noInt: !1,
      volcache: 75,
      crossOriginVideo: !1
    };

    for (var s in r) {
      if (r.hasOwnProperty(s)) {
        var n = r[s].split(":");

        switch (n[0]) {
          case "v":
            o.volume = n[1];
            break;

          case "twa":
            o.twaudio = n[1];
            break;

          case "vd":
            o.volcache = n[1];
            break;

          case "p":
            o.pload = n[1];
            break;

          case "ar":
            o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
            break;

          case "ap":
            o.aplay = v(n[1]);
            break;

          case "vfc":
            o.fitCover = v(n[1]);
            break;

          case "afs":
            o.afs = v(n[1]);
            break;

          case "vc":
            o.controls = n[1];
            break;

          case "nse":
            o.nse = v(n[1]);
            break;

          case "npom":
            o.npom = v(n[1]);
            break;

          case "opom":
            o.opom = v(n[1]);
            break;

          case "t":
            o.vtype = n[1];
            break;

          case "inl":
            o.inline = v(n[1]);
            break;

          case "nomo":
            o.notonmobile = v(n[1]);
            break;

          case "sta":
            o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
            break;

          case "end":
            o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
            break;

          case "do":
            o.doverlay = n[1];
            break;

          case "dos":
            o.doverlaysize = n[1];
            break;

          case "doca":
            o.doverlaycolora = n[1];
            break;

          case "docb":
            o.doverlaycolorb = n[1];
            break;

          case "scop":
            o.scop = v(n[1]);
            break;

          case "rwd":
            o.rwd = v(n[1]);
            break;

          case "sp":
            o.speed = n[1];
            break;

          case "vw":
            o.ploadwait = parseInt(n[1], 0) || 5;
            break;

          case "sav":
            o.stopAV = v(n[1]);
            break;

          case "noint":
            o.noInt = v(n[1]);
            break;

          case "l":
            o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && v(n[1]);
            break;

          case "ptimer":
            o.pausetimer = v(n[1]);
            break;

          case "sat":
            o.waitToSlideTrans = v(n[1]);
            break;

          case "crossOriginVideo":
            o.crossOriginVideo = v(n[1]);
            break;

          case "poch":
            o.pauseOnSlideChange = v(n[1]);
        }
      }
    }

    return null == e.mp4 && null == e.webm && (o.fitCover = !1), void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = a, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = i(o.start), o.esec = i(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o.aplay && o.twaudio && !o.bgvideo && (o.twaudio = !0), o;
  },
      y = function y(e, i) {
    if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array() : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0) for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) {
      t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
    }
    t[i].playingvideos.push(e), t[i].videoIsPlaying = e;
  },
      w = function w(e, i) {
    void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1);
  },
      b = function b(e, i) {
    if (void 0 !== e && (void 0 === i && (i = 0), t.ISM && !e.bgvideo)) {
      e.playPauseBtnTween && e.playPauseBtnTween.kill && e.playPauseBtnTween.kill();
      var a = t.closestNode(e.video, "RS-LAYER"),
          r = e.controls ? 1 : 0,
          o = e.controls ? 0 : .3;
      e.controls && e.poster && 0 === i && (o = 0, r = 0), a && (e.playPauseBtnTween = tpGS.gsap.to(a.querySelector(".tp-video-play-button"), {
        duration: o,
        delay: r,
        opacity: i
      }));
    }
  };

  window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.video = {
    loaded: !0,
    version: "6.5.25"
  }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal();
}(jQuery);

/***/ })

}]);