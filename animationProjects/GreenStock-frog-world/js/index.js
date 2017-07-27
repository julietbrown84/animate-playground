MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

  var $monstaP = $(".monsta path"),
      $frogPath = $(".frog path"),
      $cartoonPath = $(".cartoon path"),
      $tmx = $(".tmx"),
      $tmx2 = $(".tmx2"),
      $antt = $(".antt"),
      $eye = $(".eye"),
      $pupil = $(".pupil"),
      $arms = $("#arms"),
      $code = $(".code"),
      $comment = $(".comment");

TweenMax.set($monstaP,  {
  stroke: "#3a506b"
});

TweenMax.set($frogPath,  {
  stroke: "#44aa00"
});

TweenMax.set($cartoonPath, {
  stroke: "#FC0"
});

TweenMax.set(".code, .bye, .monsta, .cartoon, .frog", {
  visibility: "visible"
});

// draw the characters + first TweenMax
function sceneOne() {
  var character = new TimelineLite(),
      codeST = new SplitText($tmx, {type:"words, chars"});
  
  character.fromTo($monstaP, 4, {drawSVG:"50% 50%"}, {drawSVG:true, ease:Power2.easeOut});
  character.from($monstaP, 3, {fill:"none", ease:Power2.easeOut}, "-=1");
  character.to($monstaP, 2, {stroke:"none", ease:Power2.easeOut}, "-=2");

  character.fromTo($frogPath, 4, {drawSVG:"50% 50%"}, {drawSVG:true, ease:Power2.easeOut});
  character.from($frogPath, 3, {fill:"none", ease:Power2.easeOut}, "-=1");
  character.to($frogPath, 2, {stroke:"none", ease:Power2.easeOut}, "-=2");

  character.fromTo($cartoonPath, 4, {drawSVG:"50% 50%"}, {drawSVG:true, ease:Power2.easeOut});
  character.from($cartoonPath, 3, {fill:"none", ease:Power2.easeOut}, "-=1");
  character.to($cartoonPath, 2, {stroke:"none", ease:Power2.easeOut}, "-=2");

  character.add("blink-=1");
  character.from($comment, 0.7, {opacity:0, scale:0, transformOrigin:"0% 50%", ease:Power4.easeOut}, "blink");
  character.staggerFrom(codeST.chars, 0.1, {opacity:0, scale:0.8, ease:Power4.easeOut}, 0.03, "blink+=1");
  character.staggerTo(codeST.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "blink+=1.1");
  character.to($eye, 0.23, {scaleY:0, repeat:100, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "blink+=4.3");
  character.to($pupil, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "blink+=4.3");
  character.to($comment, 0.8, {opacity:0, scale:0.8, transformOrigin:"50% 50%", ease:Power4.easeOut}, "blink+=4.5");
  
  return character;
}

// two TweenMax 
function sceneTwo() {
  var tl = new TimelineLite()
      codeST = new SplitText($tmx2, {type:"words, chars"});
  
  tl.add("anten", "+=1");

  tl.call(function() {
    $(".comment").replaceWith('<p class="comment1">//Two Tweens</p>');
  });

  tl.to(".comment1", 2, {opacity:1, transformOrigin:"0% 50%", ease:Power4.easeOut}, "anten+=0.1");

  tl.staggerFrom(codeST.chars, 0.1, {opacity:0, scale:0, ease:Power4.easeOut}, 0.03, "anten+=1");
  tl.staggerTo(codeST.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "anten+=1.1");

  tl.to($eye, 0.23, {scaleY:0, repeat:100, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "anten+=4.3");
  tl.to($pupil, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "anten+=4.3");
  //antenna
  tl.to($antt, 0.15, {scaleY:1.1, rotation:10, repeat:100, yoyo:true, transformOrigin: "50% 50%", ease:Bounce.easeInOut}, "anten+=4.3");
  
// return tl;
}

// timeline 
function sceneThree() {
//   var tl = new TimelineLite(),
//       tll = $(".tll"),
//       newTL = new SplitText(".tll", {type:"words, chars"});
  
//   tl.add("timeline1");
//   tl.call(function() {
//     $(".comment1").replaceWith('<p class="comment2">//A Simple Timeline</p>');
    
//     $(".tmx div").filter(":first").replaceWith('<span class="spacer"></span>tl.to(".eye",');
//     $(".tmx").css("color", "#509EA4");
    
//     $(".tmx2 div").filter(":first").replaceWith('<span class="spacer"></span>tl.to(".antenna",');
//     $(".tmx2").css("color", "#509EA4");
    
//     TweenMax.set(tll, {
//       display: "block",
//       opacity: 1
//     });
    
//     TweenMax.set(newTL.chars, {
//       opacity: 0,
//       scale: 0
//     });
//   });
//   tl.to(".comment2", 2, {opacity:1, transformOrigin:"0% 50%", ease:Power4.easeOut}, "timeline1+=0.1");
//   tl.to(tll, 2, {scaleY:1, transformOrigin:"50% 50%", ease:Circ.easeOut}, "timeline1+=0.1");
//   tl.staggerTo(newTL.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "timeline1+=1");
//   tl.staggerTo(newTL.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "timeline1+=1.1");
//   tl.to($eye, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "timeline1+=2.5");
//   tl.to($pupil, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "timeline1+=2.5");
//   tl.to($antt, 0.15, {scaleY:1, rotation:0, repeat:4, yoyo:true, transformOrigin: "50% 50%", ease:Bounce.easeInOut}, "timeline1+=3.5");
  
// return tl;
}

// master1 
function sceneFour() {
//   var tl = new TimelineLite(),
//       func1 = new SplitText(".function1", {type:"words, chars"}),
//       func2 = new SplitText(".function2", {type:"words, chars"}),
//       master1 = new SplitText(".master", {type:"words, chars"});
  
//   tl.add("master1", "+=1");
//   tl.call(function() {
//     $(".comment2").replaceWith('<p class="comment3">//A Master Timeline</p>');
    
//     TweenMax.set(".function1, .function2, .master", {
//       display: "block"
//     });
    
//     TweenMax.set([func1.chars, func2.chars, master1.chars], {
//       opacity: 0,
//       scale: 0
//     });
//   });
//   tl.to(".comment3", 2, {opacity:1, transformOrigin:"0% 50%", ease:Power4.easeOut}, "timeline1+=0.1");
//   tl.to($code, 2, {scale:0.7, transformOrigin:"0% 0%", ease:Circ.easeOut}, "timeline1+=0.1");
//   tl.to(".function1", 2, {scaleY:1, transformOrigin:"50% 50%", ease:Circ.easeOut}, "timeline1+=0.1");
  
//   tl.staggerTo(func1.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "timeline1+=1");
//   tl.staggerTo(func1.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "timeline1+=1.1");
  
//   tl.staggerTo(func2.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "timeline1+=2");
//   tl.staggerTo(func2.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "timeline1+=2.1");
  
//   tl.staggerTo(master1.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "timeline1+=3");
//   tl.staggerTo(master1.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "timeline1+=3.1");
  
//   tl.to($eye, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "timeline1+=6");
//   tl.to($pupil, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "timeline1+=6");
//   tl.to($antt, 0.15, {scaleY:0.9, rotation:4, repeat:4, yoyo:true, transformOrigin: "50% 50%", ease:Bounce.easeInOut}, "timeline1+=7");
  
// return tl;
}

// master2 
function sceneFive() {
//   var tl = new TimelineLite(),
//       addM = new SplitText(".addMaster", {type:"words, chars"}),
//       master2 = new SplitText(".addFunction p", {type:"words, chars"});
  
//   tl.add("master2", "+=1");
//   tl.call(function() { 
//     TweenMax.set(".addFunction, .addMaster", {
//       display: "block"
//     });
    
//     TweenMax.set([master2.chars, addM.chars], {
//       opacity: 0,
//       scale: 0
//     });
//   });
//   tl.staggerTo(master2.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "master2");
//   tl.staggerTo(master2.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "master2+=0.1");
  
//   tl.staggerTo(addM.chars, 0.1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.03, "master2+=6.5");
//   tl.staggerTo(addM.chars, 0.1, {color:"#509EA4", ease:Power4.easeOut}, 0.03, "master2+=6.6");
  
//   tl.to($eye, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "master2+=8");
//   tl.to($pupil, 0.23, {scaleY:0, repeat:3, yoyo:true, transformOrigin: "50% 50%", ease:Power4.easeInOut}, "master2+=8");
//   tl.to($antt, 0.15, {scaleY:1.1, rotation:0, repeat:4, yoyo:true, transformOrigin: "50% 50%", ease:Bounce.easeInOut}, "master2+=9");
//   tl.to(".wings", 0.1, {scaleY:0.8, rotation:-5, repeat:7, yoyo:true, transformOrigin: "50% 50%", ease:Bounce.easeInOut}, "master2+=10");
  
// return tl;
}

// waves
function waves() {
//   var tl = new TimelineLite(),
//       bye = new SplitText(".bye", {type:"words, chars"}),
//       arms2 = $("#arms-second"),
//       arms3 = $("#arms-third");
  
//   tl.add("arms");
//   tl.call(function() { 
//     TweenMax.set(".bye", {
//       display:"block"
//     });
    
//     TweenMax.set(bye.chars, {
//       opacity: 0,
//       scaleX: 0,
//       css:{
//         transformPerspective:400, 
//         perspective:400, 
//         transformStyle:"preserve-3d"
//       }
//     });
//   });
//   tl.to($code, 1.8, {opacity: 0, ease:Circ.easeIn}, "arms");
//   tl.to($code, 0.1, {display:"none"}, "arms+=1.9");
//   tl.staggerTo(bye.chars, 3, {opacity:1, css:{rotationX:720, scaleX:1, z:50, color:"#BC5B80"}, ease:Bounce.easeOut}, "arms+=2");
//   tl.to($arms, 0.1, {morphSVG:arms2, ease:Linear.easeNone}, "arms+=5");
//   tl.to($arms, 0.1, {morphSVG:arms3, ease:Linear.easeNone}, "arms+=5.1");
//   tl.to($arms, 0.1, {morphSVG:arms2, ease:Linear.easeNone}, "arms+=5.2");
//   tl.to($arms, 0.1, {morphSVG:$arms, ease:Linear.easeNone}, "arms+=5.3");
  
//   tl.to($arms, 0.1, {morphSVG:arms2, ease:Linear.easeNone}, "arms+=5.4");
//   tl.to($arms, 0.1, {morphSVG:arms3, ease:Linear.easeNone}, "arms+=5.5");
//   tl.to($arms, 0.1, {morphSVG:arms2, ease:Linear.easeNone}, "arms+=5.6");
//   tl.to($arms, 0.1, {morphSVG:$arms, ease:Linear.easeNone}, "arms+=5.7");
  
// return tl;
}


var master = new TimelineLite();
master.add(sceneOne(), "scene1")
      .add(sceneTwo(), "scene2+=2")
      .add(sceneThree(), "scene3+=2")
      .add(sceneFour(), "scene4+=1")
      .add(sceneFive(), "scene5+=1.5")
      .add(waves(), "wavey");

//master.seek("wavey");