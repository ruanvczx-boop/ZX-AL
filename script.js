const messages = {
 personalidade:{icon:"⚡",title:"O teu jeitinho",text:"Minha gatinha, tu sabe que eu amo te irritar, né? KKKKK. Talvez seja uma das minhas formas favoritas de demonstrar carinho por ti. Teu jeitinho bravo faz parte de quem tu és, e eu não trocaria isso."},
 forca:{icon:"✦",title:"A tua força",text:"Tu és muito forte, Laura. Muito mesmo. Existe uma força dentro de ti que eu considero especial. Talvez nem sempre tu percebas o quanto és incrível, mas eu vejo isso em ti."},
 sorriso:{icon:"☼",title:"O teu sorriso",text:"Teu sorriso me encanta de um jeito que eu nem sei explicar. É daqueles que fazem a gente parar por alguns segundos só para admirar. Pra mim, ele é perfeito."},
 animais:{icon:"♡",title:"O teu coração",text:"Uma das coisas que eu admiro em ti é esse teu coração tão cheio de carinho pelos animais. Teu amor pelos felinos, pelos cachorros e por cada serzinho que precisa de cuidado mostra uma parte muito bonita de quem tu és."},
 musica:{icon:"♫",title:"Boy In Luv",text:"Essa aqui não podia ficar de fora. Uma música especial para uma pessoa especial.",links:true}
};
const modal=document.getElementById("modal"), content=document.getElementById("modalContent");
document.querySelectorAll(".memory-card").forEach(card=>card.addEventListener("click",()=>{
 const m=messages[card.dataset.card];
 content.innerHTML=`<div class="modal-icon">${m.icon}</div><h3>${m.title}</h3><p>${m.text}</p>${m.links?'<a class="external" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=BTS+Boy+In+Luv">Abrir no YouTube</a><a class="external" target="_blank" rel="noopener" href="https://open.spotify.com/search/Boy%20In%20Luv%20BTS">Abrir no Spotify</a>':''}`;
 modal.showModal();
}));
document.getElementById("closeModal").onclick=()=>modal.close();
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
document.getElementById("startBtn").onclick=()=>document.getElementById("descobertas").scrollIntoView({behavior:"smooth"});
document.getElementById("letterBtn").onclick=function(){
 this.classList.add("open");
 setTimeout(()=>{content.innerHTML=`<div class="modal-icon">♡</div><h3>Minha gatinha...</h3><p>Minha gatinha, eu te amo muito. Tu és muito importante para mim. Eu amo teu jeito, tua personalidade, até esse teu lado bravo que eu adoro provocar. Eu admiro tua força, teu sorriso e esse coração que tu tens. Espero que teu dia seja tão especial quanto tu és. Aproveita teu dia, minha gostosa.</p>`;modal.showModal()},350);
};
document.querySelectorAll(".lily").forEach(f=>f.addEventListener("click",()=>{const el=document.getElementById("flowerMessage");el.textContent=f.dataset.flower;el.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],{duration:350});}));
