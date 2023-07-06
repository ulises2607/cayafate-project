// creation

let data = [
    {
      name: 'Domingo Molina',
      description: 'This 100% family winery is located in Yacochuya Norte - Cafayate in the Calchaquíes Valleys, province of Salta. In its 60 hectares of vineyards located between 1,600 and 2,300 meters above sea level, the exclusive and special microclimate of the region with more than 300 days of intense sun per year, little rain, and a wide temperature range, provides excellent conditions to fully develop all the potential of the grapes grown there.',
      image: 'Images/Home/Bodega-Domingo-Molina.jpg'
    },
    {
      name: 'San Pedro de Yacochuya',
      description: `These climatic characteristics ensure a natural health of the grapes, free of fungi and other problems that occur in areas with clayey soils and higher humidity.
      The red wines produced in this terroir are powerful wines, with a lot of body and color.
      They are wines with character, elegant, different from those of other regions both in Argentina and the rest of the world.
      Yacochuya wine is born in the vineyard. Without excellent grapes, good wines cannot be made and the goal is to make the best possible wine every year.`,
      image: 'Images/Home/SPY.jpg'
    },
    {
      name: 'Piattelli Vineyards',
      description: `Our Wine Resort is designed as a dream villa for people over 18 years of age. Located in Cafayate, Salta, a magical place between landscapes and idyllic sunsets. We have 20 exclusive Casitas, with an author's style, that perfectly combine modern and autochthonous accents.
      Gastronomy and wine are the arteries of the heart of the Resort. We have a restaurant for 80 diners called "Aura", two swimming pools with a bar included in each one, and a stove called "La Bestia" that promises roast meat feasts. All in an environment surrounded by palm trees, native vegetation and flowers.
      The proposal is complemented by our exclusive Spa, where you can enjoy the water circuit or book a massage session.`,
      image: 'Images/Home/piatelli.avif'
    },
    {
      name: 'Trassoles',
      description: `The Trassoles Winery located in Banda de Arriba, Cafayate, works with the production of small winemakers from the Calchaquíes Valleys united by the same thing: love for the land and daily dedication.
      The winery has modern facilities for the production of high-quality wines, state-of-the-art oenological equipment and a processing capacity of 100,000 liters. The wine strengthening project in the Tolombón-Angastaco corridor and the Cafayate-Valles Calchaquíes cooperative began in 2011 and today is a reality in the Calchaquí Valley.`,
      image: 'Images/Home/trassoles.png'
    },
    {
      name: 'Etchart',
      description: `The centuries-old winemaking history of Bodegas Etchart, the culture of Cafayate deeply rooted in wine and the privileged natural environment of the Calchaquíes Valleys are the perfect formula to achieve unique wines, impossible to replicate.`,
      image: 'Images/Home/etchart.jpg'
    },
    {
      name: 'Amalaya',
      description: `The Calchaquíes Valleys are like nothing else in the world. Its vibrant energy comes from the altitude, the sun, the mountains, the desert, the pure air and the deep black sky nights with thousands of stars illuminating everything. Being here, that energy is felt. This gives us pleasure, calm, clarity and a sense of vitality. We believe that all this is also reflected in each bottle of Amalaya.`,
      image: 'Images/Home/amalaya.jpg'
    }
  ];
  
  const topicContainer = document.querySelector('.w-cerrars .container');
  
  data.forEach(e => {

    topicContainer.innerHTML += `
    <div class="card">
      <img class="bod-img" src=${e.image} alt="">
      <div class="card-description">
        <h3>${e.name}</h3>
        <p>${e.description}</p>
      </div>
    </div>
  `
  })

  