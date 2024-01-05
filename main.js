/*
let apiKey = 'https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1';

*/
let apitiny = 'GX8cS2kQW8htYIhafae7gNrSYw72cAV1rxW1H3hRXwfsX0gUNMgPVLWLJROT';
let urlInput = document.querySelector('#urlInput');
let btnInput = document.querySelector('#btnInput')
let inputGenerate = document.querySelector('#inputGenerate');

let hamburger = document.querySelector('#hamburger');

let sidebar = document.querySelector('#sidebar');

document.onclick = e =>{
  if(e.target.id !== 'sidebar' && e.target.id !== 'hamburger'){
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
  }
}

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
  });




btnInput.addEventListener('click', getMyLink);

async function getMyLink() {
 
  let link = urlInput.value;
  
  let apiKey = await fetch(`http://tinyurl.com/api-create.php?url=${link}`);
  
  let data = await apiKey.text();
  
  inputGenerate.value = data;
  
}

function copy() {
  inputGenerate.select();
  document.execCommand("copy");
}