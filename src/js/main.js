var el = document.createElement('script');

el.src = '<%= path %>/app.js';
document.body.appendChild(el);



var picNum = Math.floor(Math.random() * 4) + 1;

var picEl = document.getElementById("gv-header-background");
picEl.classList.add("gv-header-image-" + picNum);
