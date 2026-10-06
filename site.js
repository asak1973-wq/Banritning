(function(){
  var btn=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
  }
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
  var links=document.querySelectorAll('.toc a');
  if(links.length&&'IntersectionObserver' in window){
    var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){links.forEach(function(a){a.classList.remove('active');});var a=map[e.target.id];if(a){a.classList.add('active');}}
    });},{rootMargin:'-20% 0px -70% 0px'});
    Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el){io.observe(el);}});
  }
})();
