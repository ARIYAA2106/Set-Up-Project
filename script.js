
document.getElementById("contact").addEventListener('click', ()=>{

const number = +6281572240336;
const message = "Hello!, can i call you !!";
const link = "https://wa.me/"+number+"?text="+encodeURIComponent(message);

window.open(link);
})
