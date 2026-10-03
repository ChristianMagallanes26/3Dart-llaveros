/* Follow the device unless the visitor explicitly selects a theme. */
(()=>{
 const system=window.matchMedia('(prefers-color-scheme: dark)');
 let preference='auto';
 try{const saved=localStorage.getItem('3dart-theme');if(['auto','light','dark'].includes(saved))preference=saved}catch{}
 function apply(){
  const theme=preference==='auto'?(system.matches?'dark':'light'):preference;
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  window.dispatchEvent(new Event('3dart-theme'));
 }
 system.addEventListener('change',()=>{if(preference==='auto')apply()});
 apply();
 document.addEventListener('DOMContentLoaded',()=>{
  const select=document.getElementById('themeSelect');select.value=preference;
  select.addEventListener('change',()=>{preference=select.value;try{localStorage.setItem('3dart-theme',preference)}catch{}apply()});
 });
})();
