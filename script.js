document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-carousel]').forEach((carousel)=>{
    const slides=[
      {src:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85',alt:'优雅空间中的高端音响'},
      {src:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',alt:'现代住宅与聆听空间'},
      {src:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85',alt:'精致室内与音乐氛围'}
    ];
    const image=carousel.querySelector('.slide-image'),dots=carousel.querySelector('.dots');let index=0,timer;
    slides.forEach((slide,i)=>{const dot=document.createElement('button');dot.setAttribute('aria-label',`切换到第${i+1}张`);dot.addEventListener('click',()=>show(i));dots.append(dot)});
    function show(next){index=(next+slides.length)%slides.length;image.style.opacity='0';setTimeout(()=>{image.src=slides[index].src;image.alt=slides[index].alt;image.style.opacity='1'},180);[...dots.children].forEach((dot,i)=>dot.classList.toggle('active',i===index));clearInterval(timer);timer=setInterval(()=>show(index+1),6500)}
    show(0);
  });
});
