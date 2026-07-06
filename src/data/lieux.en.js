// English translations of the Paris landmark data. Mirrors the shape of
// lieux.js exactly (same slugs, coordinates and image files) so both
// locales can share the same components.

export const lieuxEn = [
  {
    slug: 'tour-eiffel',
    title: 'The Eiffel Tower',
    tagline: 'The iron lady, a universal symbol of Paris',
    arrondissement: '7th arrondissement',
    metro: ['Bir-Hakeim', 'Trocadéro', 'École Militaire'],
    coords: [48.8584, 2.2945],
    intro:
      'Built by Gustave Eiffel for the 1889 World\'s Fair, the Eiffel Tower was meant to be dismantled after twenty years. Today it is the most visited paid monument in the world.',
    description: [
      "Standing 330 metres tall, the Eiffel Tower was for decades the tallest structure on Earth. Its 18,000 pieces of wrought iron, held together by more than two million rivets, form a metal lace visible from almost every corner of the city.",
      "The best viewpoint remains the Trocadéro esplanade, on the opposite bank of the Seine: most of the iconic photographs are taken from there, with the gardens and golden statues of the Palais de Chaillot in the foreground.",
      "At night, the tower sparkles for five minutes every hour thanks to 20,000 light bulbs installed for the turn of the millennium. The Champ-de-Mars at its feet and the Pont d'Iéna nearby are essential spots for a stroll on a sunny day.",
    ],
    tip: 'To avoid the crowds, visit early in the morning or late in the day, and book your tickets online in advance for access to the floors.',
    chapters: { one: 'Beneath the iron lace', two: 'What to know before you go', three: 'Little stories of the iron lady' },
    reviews: [
      { author: 'Camille D.', rating: 5, text: "The view from Trocadéro at sunset is exactly like the photos, only better. Twenty minutes of waiting with a ticket booked online." },
      { author: 'Marco T.', rating: 4, text: "Magical at night when it sparkles, but plan around the schedule: the line without a reservation can get discouraging fast." },
    ],
    cover: 'tour-eiffel--esplanade-trocadero-coucher-soleil',
    images: [
      { file: 'tour-eiffel--esplanade-trocadero-coucher-soleil', alt: 'Eiffel Tower seen from the Trocadéro esplanade at sunset', caption: 'By evening, the tower catches fire in a thousand golden flashes seen from Trocadéro.' },
      { file: 'tour-eiffel--trocadero-statues-dorees', alt: 'Eiffel Tower framed by the golden statues of Trocadéro', caption: "Trocadéro's golden statues frame the iron lady like a theatre set." },
      { file: 'tour-eiffel--trocadero-automne', alt: 'Eiffel Tower seen from Trocadéro in autumn', caption: "In 1937, the Palais de Chaillot replaced the old Trocadéro for the World's Fair, without ever losing its unobstructed view of the tower." },
      { file: 'tour-eiffel--trocadero-touristes-jour', alt: 'Eiffel Tower and visitors on the Trocadéro esplanade during the day', caption: "Gustave Eiffel kept a small private apartment right at the top, opened only to his most distinguished guests." },
      { file: 'tour-eiffel--seine-bateaux-coucher-soleil', alt: 'Eiffel Tower, the Seine and tourist boats at sunset', caption: "The first Bateaux Mouches were already cruising the Seine during the 1867 World's Fair, well before the tower itself existed." },
      { file: 'tour-eiffel--rue-pavee-haussmann', alt: 'Eiffel Tower glimpsed from a cobbled street lined with Haussmann buildings', caption: "The Haussmann buildings framing it all follow the same maximum height, set back in the 19th century." },
      { file: 'tour-eiffel--rue-saint-dominique', alt: 'Rue Saint-Dominique with the Eiffel Tower in the background', caption: "The 7th arrondissement, one of the most discreet in Paris, hides the tower around every corner like a repeated surprise." },
      { file: 'tour-eiffel--vegetation-fleurs-roses', alt: 'Eiffel Tower glimpsed through pink flowers and greenery', caption: "The Champ-de-Mars, today a flowering garden, once served as a drill ground for the nearby Military School." },
      { file: 'tour-eiffel--cadenas-amour-pont', alt: 'Love padlocks on a bridge with the Eiffel Tower in the background', caption: "The love-padlock craze grew so large it eventually bent part of the Pont des Arts in 2014." },
      { file: 'trocadero--palais-chaillot-vue-aerienne', alt: 'Aerial view of Trocadéro and the Palais de Chaillot from the Eiffel Tower', caption: "The wings of the Palais de Chaillot form a precise angle, calculated so their perspective converges on the tower's summit." },
    ],
  },
  {
    slug: 'louvre',
    title: 'The Louvre Museum',
    tagline: 'The largest museum in the world, between royal palace and glass pyramid',
    arrondissement: '1st arrondissement',
    metro: ['Palais-Royal – Musée du Louvre'],
    coords: [48.8606, 2.3376],
    intro:
      'Once a fortress, then a residence for the kings of France, the Louvre became a museum in 1793. Its famous glass pyramid, designed by architect I. M. Pei, was inaugurated in 1989.',
    description: [
      "The Louvre holds nearly 35,000 works on display across more than 60,000 m², from Egyptian antiquity to 19th-century paintings. The Mona Lisa, the Venus de Milo and the Winged Victory of Samothrace are its most famous pieces.",
      "The Cour Napoléon and its glass pyramid, framed by the Richelieu, Sully and Denon wings, offer a striking contrast between classical architecture and a contemporary gesture. At night, the illuminated pyramid reflects in the pools that surround it.",
      "Inside, the Galerie d'Apollon with its gilded ceilings and the Grande Galerie, 460 metres long, rank among the most spectacular spaces in the palace.",
    ],
    tip: 'The museum is especially crowded on weekends: an evening entry (available certain weekdays) makes for a much calmer visit.',
    chapters: { one: 'From fortress to museum', two: 'What to know before you go', three: 'Little stories between glass and gilt' },
    reviews: [
      { author: 'Julien M.', rating: 5, text: "The Mona Lisa is smaller than you'd imagine and surrounded by crowds, but the Galerie d'Apollon is worth the trip on its own." },
      { author: 'Amara K.', rating: 4, text: "Huge, plan for a full day. Friday evening opening hours are noticeably calmer than the weekend." },
    ],
    cover: 'louvre--pyramide-illuminee-nuit',
    images: [
      { file: 'louvre--pyramide-illuminee-nuit', alt: 'Louvre pyramid illuminated at night', caption: 'The pyramid lights up at dusk, suspended between past and modernity.' },
      { file: 'louvre--pyramide-nuit-frontale', alt: 'Frontal view of the Louvre pyramid at night', caption: 'Face to face with the pyramid, each triangle of glass catching the light.' },
      { file: 'louvre--pyramide-nuit-laterale', alt: 'Side view of the Louvre pyramid at night with the palace', caption: "The pyramid holds exactly 673 glass panes, not 666 as a stubborn legend claims." },
      { file: 'louvre--pyramide-jour-ciel-bleu', alt: 'Louvre pyramid during the day under a blue sky', caption: "Fiercely criticised at its 1989 unveiling, I. M. Pei's pyramid has become one of the most photographed symbols of Paris." },
      { file: 'louvre--pyramide-palais-reflet', alt: 'Louvre pyramid and palace reflected in water', caption: "The pools around it hide the entrance to an underground shopping gallery, the Carrousel du Louvre." },
      { file: 'louvre--pyramide-reflet-coucher-soleil', alt: 'Reflection of the Louvre pyramid at sunset', caption: "The Louvre began as a medieval fortress: its foundations are still visible in the basement rooms." },
      { file: 'louvre--grande-galerie-peintures', alt: 'Grande Galerie of the Louvre lined with paintings', caption: "The Grande Galerie was built so the royal court could reach the Tuileries without getting their feet wet on rainy days." },
      { file: 'louvre--grande-galerie-visiteurs', alt: 'Visitors in the Grande Galerie of the Louvre', caption: "With nearly nine million visitors a year before the pandemic, the Louvre remained the most visited museum in the world." },
      { file: 'louvre--galerie-apollon-plafond-dore', alt: "Gilded ceiling of the Galerie d'Apollon at the Louvre", caption: "The Galerie d'Apollon was commissioned by Louis XIV, already playing the Sun King well before Versailles." },
      { file: 'louvre--galerie-apollon-plafond-gros-plan', alt: "Close-up of the painted ceiling of the Galerie d'Apollon", caption: "Painter Charles Le Brun spent nearly ten years on this ceiling, without ever fully finishing it." },
      { file: 'louvre--galerie-medicis-rubens', alt: 'Galerie Médicis with the Rubens paintings', caption: "Rubens painted the twenty-four canvases of the Medici cycle in barely four years, with the help of an entire workshop." },
      { file: 'louvre--cour-marly-sculptures', alt: 'Sculptures in the Cour Marly at the Louvre', caption: "The Marly Horses once adorned the gardens of Louis XIV's château, before being sheltered here to protect them from the weather." },
      { file: 'louvre--venus-de-milo-foule', alt: 'The Venus de Milo surrounded by visitors', caption: "Discovered in 1820 on the Greek island of Milos by a farmer, the Venus had already lost her arms before she even reached France." },
    ],
  },
  {
    slug: 'arc-de-triomphe',
    title: 'Arc de Triomphe',
    tagline: 'The monument of Place Charles-de-Gaulle, at the top of the Champs-Élysées',
    arrondissement: '8th / 16th / 17th arrondissement',
    metro: ['Charles de Gaulle – Étoile'],
    coords: [48.8738, 2.2950],
    intro:
      "Commissioned by Napoleon I in 1806 to celebrate his armies, the Arc de Triomphe was not completed until 1836. Since 1921 it has housed the Tomb of the Unknown Soldier and its flame, rekindled every evening.",
    description: [
      "Standing at the centre of Place Charles-de-Gaulle, once called Place de l'Étoile for the twelve avenues converging there, the Arc de Triomphe marks the far end of the Champs-Élysées vista, along the historic axis linking the Louvre to the Grande Arche de la Défense.",
      "Standing 50 metres tall, it is adorned with monumental sculptures, including the famous high relief La Marseillaise. Its panoramic terrace, reached by 284 steps, offers one of the finest views over Paris and its grand avenues.",
      "Lit up after nightfall, the arch becomes a glowing landmark visible from the Champs-Élysées as well as from La Défense, with which it shares the same axis.",
    ],
    tip: 'To reach the central island safely, always use the underground passage: the square is a busy roundabout.',
    chapters: { one: 'At the centre of the star', two: 'What to know before you go', three: 'A little history of the square' },
    reviews: [
      { author: 'Sophie L.', rating: 5, text: "The 284 steps have to be earned, but the view over the twelve avenues radiating out from the top is unique in Paris." },
      { author: 'Ben H.', rating: 4, text: "Remember the underground passage to cross over, the square is a real roundabout. Otherwise gorgeous at night, all lit up." },
    ],
    cover: 'arc-de-triomphe--gros-plan-coucher-soleil',
    images: [
      { file: 'arc-de-triomphe--gros-plan-coucher-soleil', alt: 'Close-up of the Arc de Triomphe at sunset', caption: 'The stone turns gold in the last hours of the day.' },
      { file: 'arc-de-triomphe--nuit-drapeau-francais', alt: 'Arc de Triomphe at night with the French flag', caption: 'By night, the flag flies beneath the lit arch, between the cars circling below.' },
      { file: 'arc-de-triomphe--vue-aerienne-nuit', alt: 'Night aerial view of Place Charles-de-Gaulle and the Arc de Triomphe', caption: "The twelve avenues radiating from the square were laid out by Haussmann, some say, to make it easier to move troops in case of unrest." },
    ],
  },
  {
    slug: 'notre-dame',
    title: 'Notre-Dame Cathedral',
    tagline: 'A gothic masterpiece at the heart of Île de la Cité',
    arrondissement: '4th arrondissement',
    metro: ['Cité', 'Saint-Michel Notre-Dame'],
    coords: [48.8530, 2.3499],
    intro:
      'Built between 1163 and 1345 on Île de la Cité, Notre-Dame is one of the finest achievements of gothic architecture. Badly damaged by a fire in April 2019, the cathedral reopened to the public in December 2024.',
    description: [
      "Its western façade, flanked by two towers and pierced by a rose window over nine metres across, is one of the most recognisable images of Paris. The three sculpted portals that make it up tell biblical scenes carved in stone.",
      "The cathedral's upper galleries, lined with chimeras and gargoyles, offer an exceptional panorama over Île de la Cité, the Seine and the Paris rooftops all the way to the Eiffel Tower.",
      "From the quays, especially the Pont au Double, the side view of the chevet and its forest of flying buttresses reveals the technical feat of the building, one of the first to generalise this architectural technique.",
    ],
    tip: 'The quays around Île de la Cité make an excellent spot to photograph the cathedral at sunrise or sunset, with far fewer crowds than the forecourt.',
    chapters: { one: 'Rebirth of a vessel of stone', two: 'What to know before you go', three: 'Little stories in stone' },
    reviews: [
      { author: 'Elena R.', rating: 5, text: "Moving to see it reopened after the fire. The rose window is even more impressive in person." },
      { author: 'Thomas V.', rating: 4, text: "The forecourt is packed during the day, we preferred going early in the morning from the quays for photos." },
    ],
    cover: 'notre-dame--facade-rosace',
    images: [
      { file: 'notre-dame--facade-rosace', alt: 'Façade of Notre-Dame de Paris with its great rose window', caption: 'The great rose window watches over the forecourt, the beating heart of the gothic façade.' },
      { file: 'notre-dame--facade-ciel-bleu', alt: 'Façade of Notre-Dame de Paris under a blue sky', caption: "Under a cloudless sky, the two towers draw the skyline of Île de la Cité." },
      { file: 'notre-dame--vue-laterale-seine', alt: 'Side view of Notre-Dame de Paris from the Seine', caption: "The flying buttresses of the chevet were added afterwards, once the first walls showed signs of weakness." },
      { file: 'notre-dame--seine-bateau-mouche', alt: 'Notre-Dame de Paris and a tourist boat on the Seine', caption: "Île de la Cité, the birthplace of Paris, was already home to the Parisii long before the cathedral was ever built there." },
      { file: 'notre-dame--chimere-panorama-paris', alt: 'Chimera of Notre-Dame overlooking a panorama of Paris at sunset', caption: "The chimeras that seem to watch over Paris aren't medieval at all: Viollet-le-Duc added them in the 19th century." },
    ],
  },
  {
    slug: 'disneyland-paris',
    title: 'Disneyland Paris',
    tagline: 'Disney magic at the gates of Paris',
    arrondissement: 'Marne-la-Vallée (Seine-et-Marne)',
    metro: ['RER A – Marne-la-Vallée / Chessy'],
    coords: [48.8722, 2.7761],
    intro:
      'Opened in 1992 about thirty kilometres east of Paris, Disneyland Paris brings together two theme parks, Disneyland Park and Walt Disney Studios, along with a village of seven themed hotels.',
    description: [
      "Sleeping Beauty Castle, the heart of Disneyland Park, draws on the châteaux of the Loire Valley and Disney studio illustrations. Its look changes with the seasons, from Halloween decorations to end-of-year illuminations.",
      "The park offers rides, parades and night-time shows, including fireworks projected onto the castle façade. Walt Disney Studios, the site's second park, is devoted to film and animation.",
      "The Disneyland Hotel, at the park's entrance, with its pink Victorian architecture and turrets, traditionally marks the start of the visit for many families.",
    ],
    tip: 'The official app lets you track wait times live and book certain ride slots in advance.',
    chapters: { one: 'A kingdom east of Paris', two: 'What to know before you go', three: 'Little enchanted stories' },
    reviews: [
      { author: 'Nadia F.', rating: 5, text: "The castle is different every season, we went for Halloween and the decorations alone were worth the trip." },
      { author: 'Kevin S.', rating: 4, text: "Get the app for the wait times, it really changes the visit. Walt Disney Studios is calmer than the main park." },
    ],
    cover: 'disneyland--chateau-fleurs-jour',
    images: [
      { file: 'disneyland--chateau-fleurs-jour', alt: 'Sleeping Beauty Castle at Disneyland Paris surrounded by flowers', caption: 'The pink castle wakes every morning amid flowerbeds in bloom.' },
      { file: 'disneyland--chateau-face', alt: 'Front view of the Disneyland Paris castle', caption: 'Facing the castle, the blue-and-gold turrets replay a fairy tale.' },
      { file: 'disneyland--chateau-rails', alt: 'Disneyland Paris castle with the little train tracks', caption: "The park's little train follows a route designed from the start to offer a different view of the castle each season." },
      { file: 'disneyland--chateau-halloween', alt: 'Disneyland Paris castle decorated for Halloween', caption: "Every autumn the castle changes face, a tradition imported straight from the American parks." },
      { file: 'disneyland--chateau-spectacle-nuit', alt: 'Projection and fireworks show on the castle at night', caption: "The night-time show projected on the castle required more than a thousand projectors and video projectors." },
      { file: 'disneyland--entree-hotel-famille', alt: 'Entrance to the Disneyland Hotel with a family of visitors', caption: "The Disneyland Hotel was built even before the park itself, to house the first construction crews." },
      { file: 'disneyland--hotel-entree-parc', alt: 'Entrance to Disneyland Park with the hotel in the background', caption: "Walking under the hotel to enter the park was a deliberate choice by the architects, like a curtain rising before the show." },
      { file: 'disneyland--walt-disney-studios', alt: 'Entrance to the Walt Disney Studios park', caption: "Opened in 2002, Walt Disney Studios remains the newer of the site's two parks." },
    ],
  },
  {
    slug: 'moulin-rouge',
    title: 'Moulin Rouge',
    tagline: 'The legendary cabaret of Pigalle',
    arrondissement: '18th arrondissement',
    metro: ['Blanche'],
    coords: [48.8841, 2.3322],
    intro:
      "Opened in 1889 at the foot of the Montmartre hill, the Moulin Rouge is the most famous cabaret in the world, birthplace of the French Cancan made popular through Toulouse-Lautrec's posters.",
    description: [
      "Its iconic red windmill, set on Boulevard de Clichy, is visible from afar and sparkles with a thousand lights after dark. The cabaret still puts on a revue every evening, mixing dance, feathered costumes and rhinestones.",
      "The surrounding Pigalle district keeps an electric atmosphere, all neon signs, theatres and cafés, right at the edge of Montmartre.",
    ],
    tip: 'Shows run as dinner-and-a-show or revue only: booking ahead is strongly recommended, especially on weekends.',
    chapters: { one: 'The windmill that never stops', two: 'What to know before you go', three: 'A little history of Pigalle' },
    reviews: [
      { author: 'Isabelle P.', rating: 5, text: "The show is a real music-hall moment, flawless costumes and choreography. Book well ahead." },
      { author: 'David N.', rating: 4, text: "The night-time sign is gorgeous for photos, even without going in to see the show." },
    ],
    cover: 'moulin-rouge--facade-nuit',
    images: [
      { file: 'moulin-rouge--facade-nuit', alt: 'Moulin Rouge façade lit up at night', caption: 'The windmill sails turn, blazing red, above the boulevard.' },
      { file: 'moulin-rouge--enseigne-neon', alt: 'Close-up of the Moulin Rouge neon sign', caption: 'The neon sign spells its name in capital letters through the Pigalle night.' },
      { file: 'moulin-rouge--nuit-voiture', alt: 'Moulin Rouge at night with a car on the boulevard', caption: "Boulevard de Clichy was long the border between respectable Paris and Pigalle's sleepless nights." },
    ],
  },
  {
    slug: 'opera-garnier',
    title: 'Palais Garnier',
    tagline: "The palace of the Paris National Opera",
    arrondissement: '9th arrondissement',
    metro: ['Opéra'],
    coords: [48.8719, 2.3316],
    intro:
      'Opened in 1875, the Palais Garnier was designed by architect Charles Garnier in a flamboyantly eclectic style, mixing marble, gilding and sculpture. It is now home to the Paris Opera Ballet.',
    description: [
      "The grand marble staircase, lit by candelabras and overlooked by balconies, is one of the most spectacular architectural set pieces in Paris, conceived by Garnier as a genuine social theatre in its own right.",
      "The Italian-style auditorium is crowned by a ceiling painted by Marc Chagall in 1964, in deliberate contrast with the 19th-century decor. The building also inspired Gaston Leroux's novel The Phantom of the Opera.",
      "The exterior, with its richly sculpted façade and dome, is best appreciated from Avenue de l'Opéra or the surrounding rooftops.",
    ],
    tip: 'The foyer and grand staircase can be visited during the day outside of performances, with a ticket separate from the shows.',
    chapters: { one: 'A theatre for the eyes', two: 'What to know before you go', three: 'A little history of the palace' },
    reviews: [
      { author: 'Chloé B.', rating: 5, text: "The grand marble staircase is a show in itself, you understand why Garnier wanted it theatrical." },
      { author: 'Antoine G.', rating: 4, text: "The Chagall ceiling is a striking contrast with everything else, really well done. Check the schedule outside of performances." },
    ],
    cover: 'opera-garnier--interieur-grand-escalier',
    images: [
      { file: 'opera-garnier--interieur-grand-escalier', alt: 'Grand staircase of the Palais Garnier', caption: 'The grand marble staircase puts every visitor on stage, as if in the spotlight.' },
      { file: 'opera-garnier--interieur-escalier-candelabres', alt: 'Staircase of the Palais Garnier lit by candelabras', caption: 'Candelabras light the flights of stairs in an almost theatrical glow.' },
      { file: 'opera-garnier--exterieur-toit-statues', alt: 'Roof and statues of the exterior façade of the Palais Garnier', caption: "Beneath the opera house lies a vast underground lake, quite real, which inspired the setting of The Phantom of the Opera." },
    ],
  },
  {
    slug: 'la-defense',
    title: 'La Défense',
    tagline: 'The business district at the gates of Paris',
    arrondissement: 'Puteaux / Courbevoie (Hauts-de-Seine)',
    metro: ['La Défense – Grande Arche'],
    coords: [48.8918, 2.2360],
    intro:
      "Europe's first business district, La Défense developed from the 1960s onward west of Paris, extending the historic axis of the Louvre and the Champs-Élysées.",
    description: [
      "The Grande Arche, inaugurated in 1989 for the bicentenary of the French Revolution, closes off the monumental vista begun by the Louvre, Place de la Concorde and the Arc de Triomphe. Its hollow-cube shape could fit Notre-Dame de Paris beneath its arch.",
      "Around it rises a skyline of modern towers, among them the Areva, Total and First towers, contrasting with the typically Parisian zinc rooftops visible below from the capital's high points.",
      "La Défense's pedestrian esplanade, dotted with contemporary sculptures, links the office towers to the surrounding residential neighbourhoods.",
    ],
    tip: 'The RER A links La Défense directly to central Paris in about fifteen minutes from Châtelet-les-Halles.',
    chapters: { one: 'Paris looks west', two: 'What to know before you go', three: 'Little stories of glass and steel' },
    reviews: [
      { author: 'Farah A.', rating: 5, text: "The Grande Arche seen from below is dizzying, you don't expect such a contrast with Haussmann's Paris." },
      { author: 'Rachid B.', rating: 4, text: "The RER A gets you there in a quarter of an hour from Châtelet, handy for an afternoon among buildings and sculptures." },
    ],
    cover: 'la-defense--grande-arche-contre-plongee',
    images: [
      { file: 'la-defense--grande-arche-contre-plongee', alt: 'Grande Arche de la Défense seen from below', caption: 'Seen from underneath, the hollow cube of the Grande Arche swallows the sky.' },
      { file: 'la-defense--tours-fidal-passerelle', alt: 'Modern towers of La Défense and a pedestrian footbridge', caption: 'A suspended footbridge links the glass towers to one another.' },
      { file: 'la-defense--vue-aerienne-tours', alt: 'Aerial view of the towers of the La Défense district', caption: "La Défense owes its name to a statue commemorating the Parisian resistance of 1870, long before the towers arrived." },
      { file: 'la-defense--skyline-coucher-soleil', alt: 'La Défense skyline at sunset', caption: "The district's first tower, the Esso tower, was completed as early as 1963, when everything around it was still wasteland." },
      { file: 'la-defense--skyline-depuis-arc-jour', alt: 'La Défense skyline seen from the Arc de Triomphe during the day', caption: "The axis linking the Louvre to the Grande Arche runs almost perfectly straight for about eight kilometres." },
      { file: 'la-defense--avenue-grande-armee-automne', alt: 'Avenue de la Grande Armée in autumn with La Défense in the background', caption: "Avenue de la Grande Armée takes its name from the Napoleonic troops who once marched toward the Arc de Triomphe." },
    ],
  },
  {
    slug: 'jardin-des-tuileries',
    title: 'Tuileries Garden',
    tagline: 'The formal French garden between the Louvre and Concorde',
    arrondissement: '1st arrondissement',
    metro: ['Tuileries', 'Concorde'],
    coords: [48.8634, 2.3275],
    intro:
      "Laid out in the 16th century then redesigned in the French formal style by André Le Nôtre in 1664, the Tuileries Garden links the Louvre to Place de la Concorde. It is today one of the most visited public gardens in the capital.",
    description: [
      "Its straight paths, flowerbeds and circular ponds make it a favourite spot for a walk, punctuated by statues and modern sculptures, including works by Maillol and Rodin.",
      "A ferris wheel and fairground rides traditionally set up here during seasonal funfairs, offering an open view over the garden and the surrounding Paris rooftops.",
      "In autumn, the golden foliage of the chestnut and plane trees contrasts with the Haussmann façades lining the garden along Rue de Rivoli.",
    ],
    tip: 'The green chairs scattered around the great round pond are free for anyone to use: an excellent spot for a break in the sun.',
    chapters: { one: 'A garden cut with a ruler', two: 'What to know before you go', three: 'A little history of the garden' },
    reviews: [
      { author: 'Manon C.', rating: 5, text: "The green chairs around the pond, such a simple pleasure. Perfect for a breather between the Louvre and Concorde." },
      { author: 'Hugo D.', rating: 4, text: "The seasonal ferris wheel adds a funfair charm to the classic garden, especially late in the day." },
    ],
    cover: 'tuileries--tulipes-tour-eiffel',
    images: [
      { file: 'tuileries--tulipes-tour-eiffel', alt: 'Tulips in the Tuileries Garden with the Eiffel Tower in the background', caption: 'Multicoloured tulips line up, the Eiffel Tower on the horizon.' },
      { file: 'tuileries--grande-roue-statues', alt: 'Ferris wheel and statues in the Tuileries Garden', caption: "A seasonal ferris wheel turns beside the garden's statues." },
      { file: 'tuileries--statues-automne-haussmann', alt: 'Statues in the Tuileries Garden in autumn in front of Haussmann buildings', caption: "Before it was a public garden, the Tuileries was reserved for the royal family alone, far from prying eyes." },
    ],
  },
  {
    slug: 'montmartre',
    title: 'Montmartre',
    tagline: "The hill of artists and the Sacré-Cœur",
    arrondissement: '18th arrondissement',
    metro: ['Abbesses', 'Anvers', 'Lamarck – Caulaincourt'],
    coords: [48.8867, 2.3431],
    intro:
      "Perched on the highest hill in Paris, Montmartre has kept its village atmosphere, with cobbled streets, staircases and a past as an artists' quarter once home to Picasso, Renoir and Utrillo.",
    description: [
      "The Sacré-Cœur basilica, completed in 1914, crowns the hill and offers one of the widest panoramas over Paris from its forecourt. The surrounding lanes, like Rue Lepic or Place du Tertre, have kept their village charm.",
      "The small cafés and flower-filled terraces lining its steep streets, often decorated with cherry trees, add to the neighbourhood's particular atmosphere, both touristy and intimate.",
    ],
    tip: 'The Montmartre funicular lets you climb the hill effortlessly from Place Saint-Pierre, with a standard transport ticket.',
    chapters: { one: 'The village above Paris', two: 'What to know before you go', three: 'Wandering the hill' },
    reviews: [
      { author: 'Laura M.', rating: 5, text: "We climbed on foot up to the Sacré-Cœur, out of breath, but the view over Paris was worth every step." },
      { author: 'Pierre-Alain S.', rating: 4, text: "The lanes around Place du Tertre are touristy but keep a genuine village charm." },
    ],
    cover: 'montmartre--cafe-vrai-paris-cerisiers',
    images: [
      { file: 'montmartre--cafe-vrai-paris-cerisiers', alt: 'Café terrace in Montmartre surrounded by cherry trees', caption: 'A terrace in bloom with cherry blossoms invites you to linger on the hill.' },
      { file: 'montmartre--vrai-paris-facade-fleurie', alt: 'Flower-covered façade of a Montmartre café in the rain', caption: "In the rain, pink flowers spill over the façade of a neighbourhood café." },
    ],
  },
  {
    slug: 'quartier-latin',
    title: 'Latin Quarter',
    tagline: "The intellectual and student heart of the Left Bank",
    arrondissement: '5th arrondissement',
    metro: ['Saint-Michel', 'Cluny – La Sorbonne', 'Maubert – Mutualité'],
    coords: [48.8489, 2.3436],
    intro:
      "Named after Latin, the language taught and spoken by Sorbonne students until the 18th century, the Latin Quarter has been the academic heart of Paris since the Middle Ages.",
    description: [
      "Its narrow streets are packed with secondhand bookshops, arthouse cinemas like Le Champo, and historic brasseries such as Balzar, frequented by generations of students and intellectuals.",
      "The neighbourhood remains defined by the presence of the Sorbonne, the Panthéon and the Jardin du Luxembourg, in an atmosphere both studious and lively, especially in the evening around Rue Mouffetard.",
    ],
    tip: 'The local cinemas often screen retrospectives and original-language versions: a good way to discover classic film.',
    chapters: { one: 'The neighbourhood that thinks in Latin', two: 'What to know before you go', three: 'In pictures' },
    reviews: [
      { author: 'Ines H.', rating: 5, text: "Le Champo cinema still shows films in their original language, you feel outside of time there." },
      { author: 'Victor L.', rating: 4, text: "Brasserie Balzar right next door is perfect for extending the evening after a screening." },
    ],
    cover: 'quartier-latin--cinema-champo-brasserie',
    images: [
      { file: 'quartier-latin--cinema-champo-brasserie', alt: 'Le Champo cinema and brasserie in the Latin Quarter', caption: 'Le Champo cinema and the Balzar brasserie have watched over the same corner for generations.' },
    ],
  },
  {
    slug: 'pont-alexandre-iii',
    title: 'Pont Alexandre III',
    tagline: 'The most lavish bridge over the Seine',
    arrondissement: '7th / 8th arrondissement',
    metro: ['Invalides', 'Champs-Élysées – Clemenceau'],
    coords: [48.8639, 2.3134],
    intro:
      "Inaugurated in 1900 for the World's Fair, Pont Alexandre III links Les Invalides to the Grand Palais and Petit Palais. It bears the name of Tsar Alexander III, in tribute to the Franco-Russian alliance.",
    description: [
      "Adorned with nymphs, garlands and four pillars topped with gilded Fames, the bridge is considered the most ornate in Paris. Its Art Nouveau lampposts, lit after dark, make it a romantic spot for a stroll.",
      "From the bridge, the view opens onto the dome of Les Invalides on one side and the Grand Palais on the other, offering one of the most harmonious views over the Seine.",
    ],
    tip: 'The night view from the bridge, with the lampposts lit and the dome of Les Invalides glowing in the distance, is one of the most photogenic in Paris.',
    chapters: { one: 'The most lavish bridge', two: 'What to know before you go', three: 'In pictures' },
    reviews: [
      { author: 'Céline R.', rating: 5, text: "At night with the lampposts lit and the dome of Les Invalides in the background, it's the most beautiful spot for a photo in Paris." },
      { author: 'Samuel K.', rating: 4, text: "A short crossing, but every carved detail is worth stopping for, especially the golden Fames." },
    ],
    cover: 'pont-alexandre-iii--nuit-lampadaires-invalides',
    images: [
      { file: 'pont-alexandre-iii--nuit-lampadaires-invalides', alt: 'Pont Alexandre III at night with its lampposts and Les Invalides in the background', caption: 'The Art Nouveau lampposts light up one by one, the dome of Les Invalides behind them.' },
    ],
  },
];

// Images not tied to a single landmark: used to illustrate the general
// atmosphere of Paris on the homepage.
export const ambianceEn = [
  { file: 'paris-panorama--vue-aerienne-tour-eiffel', alt: 'Aerial view of the Paris rooftops with the Eiffel Tower and the Seine', caption: 'Seen from the sky, Paris unfurls its zinc rooftops all the way to the tower.' },
  { file: 'architecture--immeuble-haussmann-balcons', alt: 'Haussmann corner building with wrought-iron balconies', caption: 'A Haussmann corner building, with its characteristic wrought-iron balconies.' },
  { file: 'architecture--vue-fenetre-rue-parisienne', alt: 'View from a window onto a typical Parisian street', caption: 'A half-open window frames a Parisian street, shared bikes on the corner.' },
  { file: 'ambiance--silhouette-noir-et-blanc', alt: 'Black-and-white silhouette in the streets of Paris', caption: 'A silhouette stands out in black and white on a street of the capital.' },
];

// Photos of the metro and Parisian train stations, for the practical
// "Getting around" page.
export const metroEn = [
  { file: 'metro--panneau-art-nouveau', alt: 'Art Nouveau-style "Métro" sign at a station entrance', caption: 'The Art Nouveau entrances designed by Guimard are landmarks in their own right.' },
  { file: 'metro--panneau-rouge-haussmann', alt: 'Red Métro sign in front of a Haussmann building', caption: 'The red Métro sign stands out against a Haussmann façade.' },
  { file: 'metro--rame-ratp-station', alt: 'RATP metro train at a station', caption: 'A green-and-white train pulls in, doors open, on the platform.' },
  { file: 'metro--station-chatelet-les-halles', alt: 'Châtelet – Les Halles station with RATP signage', caption: 'The Forum sector at Châtelet, Les Halles, the largest underground junction in the network.' },
  { file: 'metro--gare-de-lyon-interieur', alt: 'Interior of Gare de Lyon with its signage', caption: "Gare de Lyon's yellow pillars point the way to the main lines." },
  { file: 'metro--gare-du-nord-trains', alt: 'Trains at the platform at Gare du Nord', caption: "Trains wait at the platform beneath Gare du Nord's glass roof." },
  { file: 'metro--gare-verriere-voies', alt: 'Glass roof and tracks of a Paris train station', caption: 'A metal-and-glass roof bathes the tracks in light at dusk.' },
];
