var hstar = $("#halfstar"),
  star = $("#star"),
  k = $("#k"),
  k2 = $("#k2"),
  i = $("#i"),
  t = $("#t"),
  s1 = $("#s1"),
  tPath = t[0].getAttribute("d"),
  s1Path = s1[0].getAttribute("d"),
  morpht = $("#morpht"),
  satFlair = $("#shadow, #highlight"),
  repoDots = $("#repodot1, #repodot2, #repodot3"),
  c = $("#c2"),
  sl1 = $("#sl1"),
  sl2 = $("#sl2"),
  slash = $("#slash"),
  burst = $("#burst path"),
  ringB = $("#ringB"),
  ringN = $("#ringN"),
  dotExpand = $("#dotExpand"),
  dotActive = $("#dotActivate"),
  grey = '#B5B5BE';

TweenMax.set(k2, {
  visibility: "visible"
});

TweenMax.set("#rings, #burst, #slash, #repodot1, #repodot2, #repodot3, #highlight, #shadow", {
  visibility: "visible"
});

function morphLogo() {
  var tl = new TimelineMax();

  tl.add("begin");

  // tween the K shape to a star
  tl.to(k, 0.2, {
    morphSVG: {
      shape: hstar
    },
    ease: Linear.easeNone
  });
  tl.to(k, 0.2, {
    morphSVG: {
      shape: star
    },
    ease: Linear.easeNone
  });
  tl.to(k, 0.5, {
    rotation: -420,
    scale: 0.5,
    x: 25,
    y: 8,
    fill: "#E08728"
  });
  tl.from("#burst", 0.2, {
    opacity: 0
  }, "begin+=1");
  tl.staggerFromTo(burst, 0.5, {
    x: -5,
    y: 0,
    drawSVG: "50% 50%",
    strokeWidth: 3,
    opacity: 1,
    ease: Expo.easeIn
  }, {
    cycle: {
      y: [-25, -20, 25, 25, 25, -25],
      x: [0, 30, 30, 0, -75, -25]
    },
    opacity: 0,
    drawSVG: true,
    strokeWidth: 1,
    ease: Expo.easeIn
  }, 0.001, "begin+=1");
  tl.to(k, 1.25, {
    rotation: 360,
    transformOrigin: "50% 50%",
    ease: Back.easeInOut
  }, "begin+=1.25");

  // tween the t to repo
  tl.to(t, 0.5, {
    morphSVG: {
      shape: "#repofill"
    },
    ease: Linear.easeNone
  }, "begin");
  tl.from(repoDots, 0.3, {
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin+=0.4");
  tl.to(repoDots, 0.3, {
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin+=1.4");
  tl.to(t, 0.5, {
    morphSVG: {
      shape: tPath
    },
    ease: Linear.easeNone
  }, "begin+=2");

  // tween the C to saturn and K
  tl.to(c, 0.5, {
    morphSVG: {
      shape: "#body"
    },
    fill: grey,
    ease: Linear.easeNone
  }, "begin");
  tl.from(satFlair, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin");
  tl.from(ringB, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin");
  tl.from(ringN, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin");
  tl.to(ringB, 0.5, {
    morphSVG: {
      shape: "#bracket"
    },
    ease: Linear.easeNone
  }, "begin+=0.5");
  tl.to(ringN, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Back.easeIn
  }, "begin+=0.6");
  tl.to(ringB, 0.5, {
    morphSVG: {
      shape: "#kturn"
    },
    ease: Linear.easeNone
  }, "begin+=1.5");
  tl.to(ringB, 0.5, {
    rotation: -90,
    x: -15,
    y: -5,
    fill: "#000",
    ease: Linear.easeNone
  }, "begin+=2");
  tl.to(satFlair, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Back.easeIn
  }, "begin+=1");
  tl.to(c, 0.3, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Back.easeIn
  }, "begin+=1");

  // tween the first s to a link
  tl.to(s1, 0.5, {
    morphSVG: {
      shape: "#link"
    },
    ease: Linear.easeNone
  }, "begin");
  tl.to(s1, 0.5, {
    morphSVG: {
      shape: s1Path
    },
    ease: Linear.easeNone
  }, "begin+=1.5");

  // tween the first s to brackets and z
  tl.to(sl1, 0.5, {
    morphSVG: {
      shape: "#rbracket"
    },
    ease: Linear.easeNone
  }, "begin");
  tl.to(sl2, 0.5, {
    morphSVG: {
      shape: "#lbracket"
    },
    ease: Linear.easeNone
  }, "begin");
  tl.fromTo(slash, 0.5, {
    scale: 0,
    x: 0,
    y: 0,
    transformOrigin: "50% 50%"
  }, {
    scale: 0.8,
    x: -25,
    y: -4,
    ease: Linear.easeNone
  }, "begin+=1");
  tl.to(sl1, 0.5, {
    x: 60,
    y: 22,
    scale: 1,
    ease: Linear.easeNone
  }, "begin+=0.5");
  tl.to(sl2, 0.5, {
    x: -10,
    y: -25,
    scale: 1,
    ease: Linear.easeNone
  }, "begin+=1");
  tl.to(slash, 0.5, {
    scale: 0,
    x: 0,
    y: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone
  }, "begin+=2");
  tl.to(sl1, 0.5, {
    morphSVG: {
      shape: "#z1"
    },
    x: 0,
    y: 0,
    ease: Linear.easeNone
  }, "begin+=2");
  tl.to(sl2, 0.5, {
    morphSVG: {
      shape: "#z2"
    },
    x: 0,
    y: 0,
    ease: Linear.easeNone
  }, "begin+=2");

  //move the toggle
  tl.to(dotActive, 2, {
    x: -15,
    ease: Linear.easeNone
  }, "begin");
  tl.to(dotExpand, 2, {
    x: -15,
    ease: Linear.easeNone
  }, "begin");

  tl.timeScale(1.2);

  return tl;
}

var master = new TimelineMax({
  paused: true
});
master.add(morphLogo());

$(dotActive).on("click", function() {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    master.reverse();
  } else {
    $(this).addClass("active");
    master.play();
  }
});

function bloop() {
  var tl = new TimelineMax();
  tl.fromTo(dotExpand, 0.75, {
    scale: 1,
    opacity: 1
  }, {
    scale: 5,
    transformOrigin: "50% 50%",
    opacity: 0,
    repeat: 3,
    ease: Sine.easeOut
  });
  return tl;
}

var hoverOn = new TimelineMax({
    paused: true
  }),
  dash = $("#dash");
hoverOn.add(bloop());

$(dotActive).on("mouseenter", function() {
  dotExpand.removeClass("hide");
  TweenMax.to(dash, 0.3, {
    scale: 1.3,
    transformOrigin: "50% 50%",
    ease: Sine.easeOut
  });
  TweenMax.to(dotActive, 0.3, {
    scale: 1.3,
    transformOrigin: "50% 50%",
    ease: Sine.easeOut
  });
  hoverOn.restart();
});

$(dotActive).on("mouseleave", function() {
  dotExpand.addClass("hide");
  TweenMax.to(dash, 0.3, {
    scale: 1,
    transformOrigin: "50% 50%",
    ease: Sine.easeOut
  });
  TweenMax.to(dotActive, 0.3, {
    scale: 1.3,
    transformOrigin: "50% 50%",
    ease: Sine.easeOut
  });
  hoverOn.pause(0);
});