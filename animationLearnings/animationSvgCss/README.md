Created a svg from illustrator and learnt to animate paths with css animation

Learnings:

@keyframes at-rule as described in Defining the animation sequence.

eg.sliding in 

.cartoon {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
