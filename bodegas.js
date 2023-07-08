// creation

const data = [
  {
    name: 'Domingo Molina',
    legend: 'Monday - Saturday || 10:00am - 17:00pm',
    description: 'Discover Bodegas Etchart, a family winery in Cafayate s Calchaquíes Valleys. With 60 hectares of vineyards, high altitude, intense sun, and exceptional microclimate, our grapes thrive, creating wines of unrivaled quality.',
    image: 'Images/Home/Bodega-Domingo-Molina.jpg',
  },
  {
    name: 'San Pedro de Yacochuya',
    legend: 'Monday - Saturday || 10:00am - 18:00pm',
    description: 'Experience Bodegas Etcharts exceptional terroir: healthy grapes, powerful red wines with body and color. Our elegant, characterful wines are distinct from other regions. Yacochuya wine is born in our vineyard, where excellence is our goal every year.',
    image: 'Images/Home/SPY.jpg',
  },
  {
    name: 'Piattelli Vineyards',
    legend: 'Monday - Saturday || 9:00am - 20:00pm',
    description: 'Experience our Wine Resort in Cafayate, Salta: a dream villa for adults. Idyllic landscapes, 20 exclusive Casitas blending modern and autochthonous styles. Indulge in gastronomy at "Aura" restaurant, unwind at our pools with bars, and savor roasted feasts at "La Bestia" stove. Surround yourself with palm trees, native flora, and Spa indulgence.',
    image: 'Images/Home/piatelli.avif',
  },
  {
    name: 'Trassoles',
    legend: 'Monday - Saturday || 9:00am - 16:00pm',
    description: 'Discover Trassoles Winery, a cooperative in Banda de Arriba, Cafayate. Small winemakers united by their love for the land create high-quality wines. With modern facilities, state-of-the-art equipment, and a capacity of 100,000 liters, we bring the wine strengthening project to life in the Calchaquí Valley.',
    image: 'Images/Home/almanativa.jpg',
  },
  {
    name: 'Etchart',
    legend: 'Monday - Saturday || 9:00am - 17:00pm',
    description: 'The centuries-old winemaking history of Bodegas Etchart, the wine-rooted culture of Cafayate, and the Calchaquíes Valleys natural beauty create unique, irreplicable wines.',
    image: 'Images/Home/etchart.jpg',
  },
  {
    name: 'Amalaya',
    legend: 'Monday - Saturday || 11:30am - 20:00pm',
    description: 'Experience the unmatched energy of Calchaquíes Valleys in every sip of Amalaya wine. Altitude, sun, mountains, and pure air create a unique essence that brings pleasure, clarity, and vitality to every bottle. Feel the extraordinary here.',
    image: 'Images/Home/amalaya.jpg',
  },
];

const topicContainer = document.querySelector('.wc-container');

data.forEach((e) => {
  topicContainer.innerHTML += `
    <div class="card">
      <img class="bod-img" src=${e.image} alt="">
      <div class="card-description">
        <h3>${e.name}</h3>
        <span class="legend">${e.legend}</span>
        <p>${e.description}</p>
      </div>
    </div>
  `;
});
