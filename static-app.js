// Données produits (beaucoup)
const products = [
  {id:1,title:"Logiciel de Gestion",desc:"Ventes & stocks",owner:"Rachid M.",img:"images/1.jpg"},
  {id:2,title:"Site Web Professionnel",desc:"Vitrine & e-shop",owner:"Rachid M.",img:"images/2.jpg"},
  {id:3,title:"Plateforme Cours",desc:"E-learning",owner:"Rachid M.",img:"images/3.jpg"},
  {id:4,title:"App Transfert d'Argent",desc:"Mobile & sécurisée",owner:"Rachid M.",img:"images/4.jpg"},
  {id:5,title:"Gestion Scolaire",desc:"Élèves, notes, bulletins",owner:"Rachid M.",img:"images/5.jpg"},
  {id:6,title:"Portfolio",desc:"Site perso élégant",owner:"Rachid M.",img:"images/6.jpg"},
  {id:7,title:"POS Café",desc:"Point de vente café & resto",owner:"Rachid M.",img:"images/7.jpg"},
  {id:8,title:"App Rendez-vous",desc:"Prise de RDV rapide",owner:"Rachid M.",img:"images/8.jpg"},
];

const grid = document.getElementById('productsGrid');
products.forEach(p=>{
  const div = document.createElement('div');
  div.className='card';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <button class="owner-btn" data-owner="${p.owner}">Voir le propriétaire</button>
    <small>Prix : Sur demande</small>
  `;
  grid.appendChild(div);
});

// Popup simple pour propriétaire
document.addEventListener('click', e=>{
  if(e.target.matches('.owner-btn')){
    alert('Propriétaire : ' + e.target.dataset.owner + '\nEmail : makoiunta14@gmail.com');
  }
});

// Theme
const themeBtn = document.getElementById('themeToggle');
themeBtn && themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
