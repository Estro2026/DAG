const STORES = [
  { name:"Boutique Placeholder — Milano 1", city:"Milano", province:"MI", region:"Lombardia", address:"Via Montenapoleone 8", phone:"+39 02 000 0001" },
  { name:"Boutique Placeholder — Milano 2", city:"Milano", province:"MI", region:"Lombardia", address:"Corso Venezia 14", phone:"+39 02 000 0002" },
  { name:"Boutique Placeholder — Roma",     city:"Roma",   province:"RM", region:"Lazio",         address:"Via Condotti 22",     phone:"+39 06 000 0001" },
  { name:"Boutique Placeholder — Firenze",  city:"Firenze",province:"FI", region:"Toscana",       address:"Via Tornabuoni 5",    phone:"+39 055 000 001" },
  { name:"Boutique Placeholder — Torino",   city:"Torino", province:"TO", region:"Piemonte",      address:"Via Roma 10",         phone:"+39 011 000 001" },
  { name:"Boutique Placeholder — Bologna",  city:"Bologna",province:"BO", region:"Emilia-Romagna",address:"Via Indipendenza 3",  phone:"+39 051 000 001" },
  { name:"Boutique Placeholder — Venezia",  city:"Venezia",province:"VE", region:"Veneto",        address:"Calle Larga 12",      phone:"+39 041 000 001" },
  { name:"Boutique Placeholder — Napoli",   city:"Napoli", province:"NA", region:"Campania",      address:"Via Chiaia 7",        phone:"+39 081 000 001" },
  { name:"Boutique Placeholder — Palermo",  city:"Palermo",province:"PA", region:"Sicilia",       address:"Via Libertà 18",      phone:"+39 091 000 001" },
  { name:"Boutique Placeholder — Genova",   city:"Genova", province:"GE", region:"Liguria",       address:"Via XX Settembre 9",  phone:"+39 010 000 001" },
];

function initStores() {
  const input   = document.querySelector('#sf-input');
  const results = document.querySelector('#sf-results');
  const count   = document.querySelector('#sf-count');
  if (!input || !results) return;

  render(STORES);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    render(q ? STORES.filter(s => [s.city,s.province,s.region,s.name].some(v => v.toLowerCase().includes(q))) : STORES);
  });

  document.querySelectorAll('.sf-filter[data-region]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sf-filter[data-region]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      input.value = '';
      const r = btn.dataset.region;
      render(r === 'all' ? STORES : STORES.filter(s => s.region === r));
    });
  });

  function render(list) {
    if (count) count.textContent = list.length;
    if (!list.length) {
      results.innerHTML = `<div class="sf-empty"><p>Non trovi un rivenditore vicino a te?<br><a href="contact.html" style="border-bottom:1px solid currentColor;">Scrivici e ti aiuteremo.</a></p></div>`;
      return;
    }
    results.innerHTML = list.map(s => `
      <div class="store-card">
        <div class="store-card__name">${s.name}</div>
        <div class="store-card__addr">${s.address}<br>${s.city} (${s.province}) — ${s.region}</div>
        <div class="store-card__links">
          <span class="store-card__addr" style="font-size:11px;">${s.phone}</span>
          <a href="https://maps.google.com/?q=${encodeURIComponent(s.name+' '+s.city)}" target="_blank" class="store-card__link">Indicazioni →</a>
        </div>
      </div>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', initStores);
