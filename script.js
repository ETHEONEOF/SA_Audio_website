document.addEventListener('DOMContentLoaded',()=>{
  const wechatTrigger=document.querySelector('.wechat-trigger'),wechatModal=document.querySelector('.wechat-modal');
  if(wechatTrigger&&wechatModal){wechatTrigger.addEventListener('click',()=>wechatModal.showModal());wechatModal.querySelector('.wechat-close').addEventListener('click',()=>wechatModal.close());wechatModal.addEventListener('click',(event)=>{if(event.target===wechatModal)wechatModal.close()})}
});
