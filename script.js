// script.js - professional CV interactions
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    form.querySelector('.form-note').textContent = 'Thanks ' + (name || '') + '! Your message has been received (demo). I will reply to your email.';
    form.reset();
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});