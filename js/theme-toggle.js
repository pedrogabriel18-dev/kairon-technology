/* theme-toggle.js v3 — fixed */
(function(){
  const KEY='kairon-theme';
  function get(){ return localStorage.getItem(KEY)||(window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'); }
  function apply(t){
    document.documentElement.setAttribute('data-theme',t);
    localStorage.setItem(KEY,t);
    const btn=document.getElementById('theme-toggle');
    if(!btn)return;
    btn.innerHTML=t==='dark'
      ?'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      :'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  /* Apply immediately before DOM ready to avoid flash */
  apply(get());
  document.addEventListener('DOMContentLoaded',function(){
    apply(get());
    var btn=document.getElementById('theme-toggle');
    if(btn){
      btn.addEventListener('click',function(){
        var cur=document.documentElement.getAttribute('data-theme')||'dark';
        apply(cur==='dark'?'light':'dark');
      });
    }
  });
})();
