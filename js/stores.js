const STORES = [
  { name:"Boutique Placeholder — Milano 1", city:"Milano", province:"MI", region:"Lombardia", address:"Via Montenapoleone 8", phone:"+39 02 000 0001", category:"Boutique", km:0.9 },
  { name:"Boutique Placeholder — Milano 2", city:"Milano", province:"MI", region:"Lombardia", address:"Corso Venezia 14", phone:"+39 02 000 0002", category:"Concept Store", km:1.6 },
  { name:"Boutique Placeholder — Roma",     city:"Roma",   province:"RM", region:"Lazio",         address:"Via Condotti 22",     phone:"+39 06 000 0001", category:"Boutique", km:4.2 },
  { name:"Boutique Placeholder — Firenze",  city:"Firenze",province:"FI", region:"Toscana",       address:"Via Tornabuoni 5",    phone:"+39 055 000 001", category:"Gioielleria", km:8.5 },
  { name:"Boutique Placeholder — Torino",   city:"Torino", province:"TO", region:"Piemonte",      address:"Via Roma 10",         phone:"+39 011 000 001", category:"Concept Store", km:12.3 },
  { name:"Boutique Placeholder — Bologna",  city:"Bologna",province:"BO", region:"Emilia-Romagna",address:"Via Indipendenza 3",  phone:"+39 051 000 001", category:"Boutique", km:18.7 },
  { name:"Boutique Placeholder — Venezia",  city:"Venezia",province:"VE", region:"Veneto",        address:"Calle Larga 12",      phone:"+39 041 000 001", category:"Gioielleria", km:24.0 },
  { name:"Boutique Placeholder — Napoli",   city:"Napoli", province:"NA", region:"Campania",      address:"Via Chiaia 7",        phone:"+39 081 000 001", category:"Boutique", km:38.4 },
  { name:"Boutique Placeholder — Palermo",  city:"Palermo",province:"PA", region:"Sicilia",       address:"Via Libertà 18",      phone:"+39 091 000 001", category:"Concept Store", km:62.1 },
  { name:"Boutique Placeholder — Genova",   city:"Genova", province:"GE", region:"Liguria",       address:"Via XX Settembre 9",  phone:"+39 010 000 001", category:"Gioielleria", km:89.5 },
];

function initStores() {
  const input    = document.querySelector('#sf-input');
  const results  = document.querySelector('#sf-results');
  const count    = document.querySelector('#sf-count');
  const radius   = document.querySelector('#sf-radius');
  const limit    = document.querySelector('#sf-limit');
  const category = document.querySelector('#sf-category');
  const searchBtn= document.querySelector('#sf-search-btn');
  if (!input || !results) return;

  // popola le categorie disponibili
  if (category) {
    [...new Set(STORES.map(s => s.category))].sort().forEach(c => {
      const o = document.createElement('option');
      o.value = c; o.textContent = c;
      category.appendChild(o);
    });
  }

  function apply() {
    const q   = input.value.trim().toLowerCase();
    const r   = radius ? Number(radius.value) : Infinity;
    const cat = category ? category.value : '';
    const n   = limit ? Number(limit.value) : STORES.length;
    const list = STORES
      .filter(s => !q || [s.city, s.province, s.region, s.name].some(v => v.toLowerCase().includes(q)))
      .filter(s => s.km <= r)
      .filter(s => !cat || s.category === cat)
      .sort((a, b) => a.km - b.km)
      .slice(0, n);
    render(list);
  }

  apply();
  input.addEventListener('input', apply);
  [radius, limit, category].forEach(el => el && el.addEventListener('change', apply));
  if (searchBtn) searchBtn.addEventListener('click', e => { e.preventDefault(); apply(); });

  function render(list) {
    if (count) count.textContent = list.length;
    if (!list.length) {
      results.innerHTML = `<div class="sf-empty"><p>Non trovi un rivenditore vicino a te?<br><a href="contact.html" style="border-bottom:1px solid currentColor;">Scrivici e ti aiuteremo.</a></p></div>`;
      return;
    }
    results.innerHTML = list.map(s => {
      const q = encodeURIComponent(s.name + ' ' + s.address + ' ' + s.city);
      return `
      <div class="store-card">
        <a class="store-card__name" href="https://maps.google.com/?q=${q}" target="_blank">${s.name}</a>
        <div class="store-card__addr">${s.address}<br>${s.city} (${s.province})<br>${s.region}</div>
        <div class="store-card__dist">${s.km.toFixed(1)} km</div>
        <a class="store-card__link" href="https://maps.google.com/?q=${q}" target="_blank">Indicazioni</a>
      </div>`;
    }).join('');
  }
}

document.addEventListener('DOMContentLoaded', initStores);
