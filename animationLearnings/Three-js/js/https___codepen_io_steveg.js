;(function(){
  
	var html = `
			<svg viewBox="0 -8 63.3 55">
			  <title>creative coding club logo</title>
			<g>
			  <path fill="#fff" d="M1093.5,81.7V81.5a1,1,0,0,1,.4-0.7l14.8-9a0.8,0.8,0,0,1,1.2.7v3.7a0.9,0.9,0,0,1-.3.6l-8.1,4.8,8.1,4.6a0.9,0.9,0,0,1,.3.6v3.7a0.8,0.8,0,0,1-1.2.7l-14.8-8.7A1,1,0,0,1,1093.5,81.7Z" transform="translate(-1093.5 -63.9)"></path>
			  <path fill="#fff" d="M1140.4,86.7a0.9,0.9,0,0,1,.3-0.6l8.1-4.6-8.1-4.8a0.9,0.9,0,0,1-.3-0.6V72.5a0.8,0.8,0,0,1,1.2-.7l14.8,9a1,1,0,0,1,.4.7v0.2a1,1,0,0,1-.4.7L1141.6,91a0.8,0.8,0,0,1-1.2-.7V86.7Z" transform="translate(-1093.5 -63.9)"></path>
			</g>
				<g class="brush">
				<path fill="#fff" d="M1113.5,97c-4.4,1-1.5,5.8-8.3,6.3,2.1,1.3,6.1,1.4,8.2.9s4.6-2.4,4.1-4.8A3.3,3.3,0,0,0,1113.5,97Z" transform="translate(-1093.5 -63.9)"></path>
				  <path fill="#fff" d="M1134.8,64.1a0.6,0.6,0,0,1,.7-0.2l1.7,1.2a0.6,0.6,0,0,1,.2.7l-17.6,31.6a0.6,0.6,0,0,1-.7.2L1115,95a0.6,0.6,0,0,1-.2-0.7Z" transform="translate(-1093.5 -63.9)"></path>
				</g>
			</svg>

			<div class="h1-container">
				<h1>
					<span>C</span>
					<span>r</span>
					<span>e</span>
					<span>a</span>
					<span>t</span>
					<span>i</span>
					<span>v</span>
					<span>e</span>
					<br>
					<span>C</span>
					<span>o</span>
					<span>d</span>
					<span>i</span>
					<span>n</span>
					<span>g</span>
					<br>
					<span>C</span>
					<span>l</span>
					<span>u</span>
					<span>b</span>	
				</h1>
			</div>`;
	
	var css = `<style>
			@import url("https://fonts.googleapis.com/css?family=Catamaran:900");
			.ccc-box {
			  z-index: 10000;
			  background-color: #032C3F;
			  width: 46px;
			  height: 46px;
			  border-radius: 6px;
			  position: fixed;
			  bottom: 10px;
			  left: 10px;
			  display: block;
			  overflow: hidden;
			  transition: width 0.3s cubic-bezier(0.77, 0, 0.175, 1), height 0.3s cubic-bezier(0.77, 0, 0.175, 1);
			}
			.ccc-box svg {
			  width: 30px !important;
			height: auto !important;
			  position: absolute !important;
			  bottom: 10px;
			  left: 8px;
			}
			.ccc-box .h1-container {
			  display: block;
			  width: 280px;
			  height: 240px;
			  position: absolute;
			  bottom: 0;
			  left: 0;
			}
			.ccc-box .h1-container h1 {
			  font-size: 1em;
			  display: block;
			  position: absolute;
			  font-family: 'Catamaran', sans-serif;
			  font-size: 50px;
			  text-align: left;
			  letter-spacing: -8px;
			  line-height: 40px;
			  margin: 55px 0 0 26px;
			  text-decoration: none;
			  text-transform: uppercase;
			}
			.ccc-box .h1-container h1 span {
			  mix-blend-mode: screen;
			  position: relative;
			  opacity: 0;
			  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), top 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
			}
			.ccc-box .h1-container h1 span:first-of-type,
			.ccc-box .h1-container h1 span:nth-of-type(11) {
			  color: rgba(2, 166, 209, 0.8);
			  transition-delay: 0.4s;
			  top: 10px;
			  left: 10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(2),
			.ccc-box .h1-container h1 span:nth-of-type(13),
			.ccc-box .h1-container h1 span:nth-of-type(18) {
			  color: rgba(239, 71, 111, 0.8);
			  transition-delay: 0.15s;
			  top: -10px;
			  left: 10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(3),
			.ccc-box .h1-container h1 span:nth-of-type(17) {
			  color: rgba(255, 209, 102, 0.8);
			  transition-delay: 0.2s;
			  top: -10px;
			  left: -10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(4),
			.ccc-box .h1-container h1 span:nth-of-type(14),
			.ccc-box .h1-container h1 span:nth-of-type(16) {
			  color: rgba(6, 214, 160, 0.8);
			  transition-delay: 0.5s;
			  top: 10px;
			  left: -10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(5),
			.ccc-box .h1-container h1 span:nth-of-type(9) {
			  color: rgba(172, 78, 221, 0.8);
			  transition-delay: 0.12s;
			  top: -8px;
			  left: 0px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(6),
			.ccc-box .h1-container h1 span:nth-of-type(12) {
			  color: rgba(187, 228, 255, 0.8);
			  transition-delay: 0.3s;
			  top: 5px;
			  left: -5px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(7),
			.ccc-box .h1-container h1 span:nth-of-type(10) {
			  color: rgba(255, 140, 62, 0.8);
			  transition-delay: 0.23s;
			  top: -10px;
			  left: 10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(8),
			.ccc-box .h1-container h1 span:nth-of-type(15) {
			  color: rgba(5, 116, 206, 0.8);
			  transition-delay: 0.37s;
			  top: -10px;
			  left: -10px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(9) {
			  padding-left: 60px;
			}
			.ccc-box .h1-container h1 span:nth-of-type(15) {
			  padding-left: 40px;
			}
			.ccc-box:focus {
			  outline: thin dotted;
			}
			.ccc-box:active, .ccc-box:hover {
			  outline: 0;
			  width: 280px;
			  height: 240px;
			  box-shadow: 10px 10px 144px -32px rgba(0, 0, 0, 0.69);
			}
			.ccc-box:active h1 span, .ccc-box:hover h1 span {
			  opacity: 1;
			  left: 0 !important;
			  top: 0 !important;
			}

		</style>`

	document.head.insertAdjacentHTML('beforeend', css); 
  
	var a = document.createElement('a');
	a.setAttribute('href','http://creativecoding.club/');
	a.setAttribute('target','_blank');
	a.setAttribute('class','ccc-box');
	a.innerHTML = html;
    
 	document.body.appendChild(a);
})();