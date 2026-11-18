document.addEventListener('DOMContentLoaded',()=>{
  const heroVideo=document.querySelector('.hero-video');
  if(heroVideo){
    heroVideo.muted=true;
    const startPlayback=()=>{if(heroVideo.paused)heroVideo.play().catch(()=>{});};
    startPlayback();
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)startPlayback()});
    window.addEventListener('pageshow',startPlayback);
  }
  const wechatTrigger=document.querySelector('.wechat-trigger'),wechatModal=document.querySelector('.wechat-modal');
  if(wechatTrigger&&wechatModal){wechatTrigger.addEventListener('click',()=>wechatModal.showModal());wechatModal.querySelector('.wechat-close').addEventListener('click',()=>wechatModal.close());wechatModal.addEventListener('click',(event)=>{if(event.target===wechatModal)wechatModal.close()})}
});
