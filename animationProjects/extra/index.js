console.log('test');

var domAttributes = anime({
  targets: '#domAttributes input',
  value: 1000,
  round: 1,
  easing: 'easeInOutExpo'
});

var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
});

var lineDrawing = anime({
  targets: '#lineDrawing .lines path, #lineDrawing .lines ellipse',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});