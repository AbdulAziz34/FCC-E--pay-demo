const navbar = document.getElementById("man");
navbar.style.backgroundColor = "white";



function mynavbar(){
    navbar.style.right = "0";

}

function money(){
    navbar.style.right = "-300px"
    
}

let method = 'Orange Money';
function selectPay(m){
    method = m==='orange' ? 'Orange Money' : 'Afrimoney';
    document.getElementById('btnOrange').style.background = m==='orange' ? '#FF6600' : 'white';
    document.getElementById('btnOrange').style.color = m==='orange' ? 'white' : '#FF6600';
    document.getElementById('btnAfri').style.background = m==='afri' ? '#FF0000' : 'white';
    document.getElementById('btnAfri').style.color = m==='afri' ? 'white' : '#FF0000';

}

function payNow(e){
    e.preventDefault();
    const box = document.getElementById('msg');
    box.style.display='block';
    box.innerHTML = `Request sent! You will received a <b>${method}</b> prompt on your phone to confirm. <br><small>Transaction ID: FCC-${Date.now().toString().slice(-6)}</small>`;
}

