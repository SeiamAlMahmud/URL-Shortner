let apiKey = 'https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1';



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


