/* main.js v3 */
document.addEventListener('DOMContentLoaded',function(){

  /* Navbar scroll */
  var navbar=document.getElementById('navbar');
  if(navbar){
    window.addEventListener('scroll',function(){
      navbar.classList.toggle('scrolled',window.scrollY>20);
    },{passive:true});
  }

  /* Mobile menu */
  var menuToggle=document.getElementById('menu-toggle');
  var mobileNav=document.getElementById('mobile-nav');
  if(menuToggle&&mobileNav){
    menuToggle.addEventListener('click',function(){
      mobileNav.classList.toggle('open');
    });
    document.addEventListener('click',function(e){
      if(!menuToggle.contains(e.target)&&!mobileNav.contains(e.target)){
        mobileNav.classList.remove('open');
      }
    });
  }

  /* Active nav link */
  var currentPage=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, #mobile-nav a').forEach(function(a){
    if(a.getAttribute('href')===currentPage) a.classList.add('active');
  });

  /* Reveal on scroll */
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });

  /* Stat counters */
  var statEls=document.querySelectorAll('[data-count]');
  if(statEls.length){
    var statObs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting)return;
        var el=e.target;
        var end=parseFloat(el.dataset.count);
        var suffix=el.dataset.suffix||'';
        var isFloat=String(end).includes('.');
        var duration=1800, startTime=performance.now();
        function step(now){
          var elapsed=now-startTime, progress=Math.min(elapsed/duration,1);
          var eased=1-Math.pow(1-progress,4);
          var val=eased*end;
          el.textContent=(isFloat?val.toFixed(1):Math.floor(val))+suffix;
          if(progress<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        statObs.unobserve(el);
      });
    },{threshold:0.5});
    statEls.forEach(function(el){ statObs.observe(el); });
  }

  /* Modals */
  document.querySelectorAll('[data-modal]').forEach(function(trigger){
    trigger.addEventListener('click',function(e){
      e.preventDefault();
      var id=trigger.dataset.modal;
      var overlay=document.getElementById(id);
      if(overlay) overlay.classList.add('open');
    });
  });
  document.querySelectorAll('.modal-close').forEach(function(btn){
    btn.addEventListener('click',function(){
      btn.closest('.modal-overlay').classList.remove('open');
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(function(overlay){
    overlay.addEventListener('click',function(e){
      if(e.target===overlay) overlay.classList.remove('open');
    });
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(function(o){ o.classList.remove('open'); });
  });

  /* Lightbox */
  var lb=document.getElementById('lightbox');
  var lbImg=document.getElementById('lightbox-img');
  var lbClose=document.getElementById('lightbox-close');
  if(lb&&lbImg){
    document.querySelectorAll('.lightbox-trigger').forEach(function(img){
      img.addEventListener('click',function(){
        lbImg.src=img.src||img.querySelector('img')?.src||'';
        lb.classList.add('open');
      });
    });
    if(lbClose) lbClose.addEventListener('click',function(){ lb.classList.remove('open'); });
    lb.addEventListener('click',function(e){ if(e.target===lb) lb.classList.remove('open'); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') lb.classList.remove('open'); });
  }

  /* Contact form */
  var form=document.getElementById('contact-form');
  if(form){
    var serviceSelect=document.getElementById('enquiry-type');
    if(serviceSelect){
      serviceSelect.addEventListener('change',function(){
        if(serviceSelect.value==='Phantom Division'){
          document.body.classList.add('phantom-mode');
        } else {
          document.body.classList.remove('phantom-mode');
        }
      });
    }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('[type=submit]');
      var orig=btn.textContent;
      btn.textContent='Transmission Sent';
      btn.disabled=true;
      setTimeout(function(){ btn.textContent=orig; btn.disabled=false; form.reset(); document.body.classList.remove('phantom-mode'); },3000);
    });
  }

  /* Cookie banner */
  var cookieBanner=document.getElementById('cookie-banner');
  if(cookieBanner){
    var consent=localStorage.getItem('kairon-cookie');
    if(!consent){
      setTimeout(function(){ cookieBanner.classList.add('visible'); },800);
    }
    var acceptBtn=document.getElementById('cookie-accept');
    var declineBtn=document.getElementById('cookie-decline');
    function dismissCookie(val){
      localStorage.setItem('kairon-cookie',val);
      cookieBanner.classList.remove('visible');
    }
    if(acceptBtn) acceptBtn.addEventListener('click',function(){ dismissCookie('accepted'); });
    if(declineBtn) declineBtn.addEventListener('click',function(){ dismissCookie('declined'); });
  }

});
