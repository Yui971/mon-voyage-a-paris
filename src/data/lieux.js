// Données des lieux touristiques. Chaque entrée alimente une page /lieux/[slug]
// ainsi que la carte correspondante sur la page d'accueil.

export const lieux = [
  {
    slug: 'tour-eiffel',
    title: 'La Tour Eiffel',
    tagline: "La dame de fer, symbole universel de Paris",
    arrondissement: '7e arrondissement',
    metro: ['Bir-Hakeim', 'Trocadéro', 'École Militaire'],
    coords: [48.8584, 2.2945],
    intro:
      "Construite par Gustave Eiffel pour l'Exposition universelle de 1889, la Tour Eiffel devait être démontée après vingt ans. Elle est aujourd'hui le monument payant le plus visité au monde.",
    description: [
      "Haute de 330 mètres, la Tour Eiffel a longtemps été la plus haute structure du monde. Ses 18 000 pièces de fer puddlé assemblées par plus de deux millions de rivets forment une dentelle métallique visible depuis presque tous les points de la ville.",
      "Le meilleur point de vue reste l'esplanade du Trocadéro, sur la rive opposée de la Seine : c'est de là que sont prises la plupart des photographies iconiques, avec les jardins et les statues dorées du Palais de Chaillot en premier plan.",
      "De nuit, la tour scintille pendant cinq minutes à chaque heure grâce à 20 000 ampoules installées pour le passage à l'an 2000. Le Champ-de-Mars, à ses pieds, et le pont d'Iéna sont des lieux de promenade incontournables aux beaux jours.",
    ],
    tip: "Pour éviter la foule, privilégiez une visite tôt le matin ou en fin de journée, et réservez vos billets en ligne à l'avance pour l'accès aux étages.",
    chapters: { one: 'Sous la dentelle de fer', two: 'Ce qu\'il faut savoir', three: 'Petites histoires de la dame de fer' },
    reviews: [
      { author: 'Camille D.', rating: 5, text: "La vue depuis le Trocadéro au coucher du soleil, c'est exactement ce qu'on voit sur les photos, en mieux. Vingt minutes d'attente avec un billet réservé en ligne." },
      { author: 'Marco T.', rating: 4, text: "Magique la nuit quand elle scintille, mais prévoyez large sur les horaires : la file sans réservation peut vite décourager." },
    ],
    cover: 'tour-eiffel--esplanade-trocadero-coucher-soleil',
    images: [
      { file: 'tour-eiffel--esplanade-trocadero-coucher-soleil', alt: 'Tour Eiffel vue depuis l\'esplanade du Trocadéro au coucher du soleil', caption: "Le soir venu, la tour s'embrase de mille éclats dorés vue depuis le Trocadéro." },
      { file: 'tour-eiffel--trocadero-statues-dorees', alt: 'Tour Eiffel encadrée par les statues dorées du Trocadéro', caption: 'Les statues dorées du Trocadéro encadrent la dame de fer comme une scène de théâtre.' },
      { file: 'tour-eiffel--trocadero-automne', alt: 'Tour Eiffel vue depuis le Trocadéro en automne', caption: "En 1937, le Palais de Chaillot remplaça l'ancien Trocadéro pour l'Exposition universelle, sans jamais perdre sa vue imprenable sur la tour." },
      { file: 'tour-eiffel--trocadero-touristes-jour', alt: 'Tour Eiffel et visiteurs sur l\'esplanade du Trocadéro en journée', caption: "Gustave Eiffel s'était réservé, tout en haut, un petit appartement privé qu'il n'ouvrait qu'à ses invités de marque." },
      { file: 'tour-eiffel--seine-bateaux-coucher-soleil', alt: 'Tour Eiffel, la Seine et des bateaux mouches au coucher du soleil', caption: "Les premiers bateaux mouches sillonnaient déjà la Seine lors de l'Exposition universelle de 1867, bien avant la tour elle-même." },
      { file: 'tour-eiffel--rue-pavee-haussmann', alt: 'Tour Eiffel aperçue depuis une rue pavée bordée d\'immeubles haussmanniens', caption: "Les immeubles haussmanniens qui l'encadrent respectent tous la même hauteur maximale, fixée au XIXe siècle." },
      { file: 'tour-eiffel--rue-saint-dominique', alt: 'Rue Saint-Dominique avec la Tour Eiffel en arrière-plan', caption: "Le 7e arrondissement, l'un des plus discrets de Paris, cache la tour au détour de chaque rue comme une surprise renouvelée." },
      { file: 'tour-eiffel--vegetation-fleurs-roses', alt: 'Tour Eiffel aperçue à travers des fleurs roses et de la végétation', caption: "Le Champ-de-Mars, aujourd'hui un jardin fleuri, servait autrefois de terrain d'exercice pour l'École militaire toute proche." },
      { file: 'tour-eiffel--cadenas-amour-pont', alt: 'Cadenas d\'amour accrochés sur un pont avec la Tour Eiffel en fond', caption: "La mode des cadenas d'amoureux a pris une telle ampleur qu'elle a fini par faire plier une partie du Pont des Arts en 2014." },
      { file: 'trocadero--palais-chaillot-vue-aerienne', alt: 'Vue aérienne du Trocadéro et du Palais de Chaillot depuis la Tour Eiffel', caption: "Les ailes du Palais de Chaillot forment un angle précis, calculé pour que leur perspective converge vers le sommet de la tour." },
    ],
  },
  {
    slug: 'louvre',
    title: 'Musée du Louvre',
    tagline: 'Le plus grand musée du monde, entre palais royal et pyramide de verre',
    arrondissement: '1er arrondissement',
    metro: ['Palais-Royal – Musée du Louvre'],
    coords: [48.8606, 2.3376],
    intro:
      "Ancienne forteresse puis résidence des rois de France, le Louvre est devenu musée en 1793. Sa célèbre pyramide de verre, conçue par l'architecte I. M. Pei, a été inaugurée en 1989.",
    description: [
      "Le Louvre conserve près de 35 000 œuvres exposées sur plus de 60 000 m², de l'Antiquité égyptienne aux peintures du XIXe siècle. La Joconde, la Vénus de Milo ou la Victoire de Samothrace en sont les pièces les plus célèbres.",
      "La cour Napoléon et sa pyramide de verre, entourée des ailes Richelieu, Sully et Denon, offrent un contraste saisissant entre architecture classique et geste contemporain. De nuit, la pyramide illuminée se reflète dans les bassins qui l'entourent.",
      "À l'intérieur, la Galerie d'Apollon avec ses plafonds dorés et la Grande Galerie, longue de 460 mètres, comptent parmi les espaces les plus spectaculaires du palais.",
    ],
    tip: "Le musée est particulièrement dense les week-ends : privilégier une entrée en nocturne (certains jours en semaine) permet une visite plus sereine.",
    chapters: { one: 'De forteresse à musée', two: 'Ce qu\'il faut savoir', three: 'Petites histoires entre verre et dorures' },
    reviews: [
      { author: 'Julien M.', rating: 5, text: "La Joconde est plus petite qu'on ne l'imagine et entourée de monde, mais la Galerie d'Apollon vaut le détour à elle seule." },
      { author: 'Amara K.', rating: 4, text: "Immense, prévoyez une vraie journée. La nocturne du vendredi est nettement plus calme que le week-end." },
    ],
    cover: 'louvre--pyramide-illuminee-nuit',
    images: [
      { file: 'louvre--pyramide-illuminee-nuit', alt: 'Pyramide du Louvre illuminée de nuit', caption: 'La pyramide s\'illumine à la tombée du jour, suspendue entre passé et modernité.' },
      { file: 'louvre--pyramide-nuit-frontale', alt: 'Vue frontale de la pyramide du Louvre de nuit', caption: 'Face à face avec la pyramide, dont chaque triangle de verre capte la lumière.' },
      { file: 'louvre--pyramide-nuit-laterale', alt: 'Vue latérale de la pyramide du Louvre de nuit avec le palais', caption: "La pyramide compte exactement 673 losanges de verre, et non 666 comme le veut une légende tenace." },
      { file: 'louvre--pyramide-jour-ciel-bleu', alt: 'Pyramide du Louvre en journée sous un ciel bleu', caption: "Vivement critiquée à son inauguration en 1989, la pyramide de I. M. Pei est devenue l'un des symboles les plus photographiés de Paris." },
      { file: 'louvre--pyramide-palais-reflet', alt: 'Pyramide du Louvre et palais se reflétant dans l\'eau', caption: "Les bassins qui l'entourent cachent l'accès à une galerie commerciale souterraine, le Carrousel du Louvre." },
      { file: 'louvre--pyramide-reflet-coucher-soleil', alt: 'Reflet de la pyramide du Louvre au coucher du soleil', caption: "Le Louvre fut d'abord une forteresse médiévale : ses fondations sont encore visibles dans les salles du sous-sol." },
      { file: 'louvre--grande-galerie-peintures', alt: 'Grande Galerie du Louvre bordée de peintures', caption: "La Grande Galerie fut percée pour permettre à la cour royale de rejoindre les Tuileries sans se mouiller les pieds les jours de pluie." },
      { file: 'louvre--grande-galerie-visiteurs', alt: 'Visiteurs dans la Grande Galerie du Louvre', caption: "Avec près de neuf millions de visiteurs par an avant la pandémie, le Louvre restait le musée le plus visité au monde." },
      { file: 'louvre--galerie-apollon-plafond-dore', alt: 'Plafond doré de la Galerie d\'Apollon au Louvre', caption: "La Galerie d'Apollon fut commandée par Louis XIV, qui jouait déjà les Roi-Soleil bien avant Versailles." },
      { file: 'louvre--galerie-apollon-plafond-gros-plan', alt: 'Gros plan sur le plafond peint de la Galerie d\'Apollon', caption: "Le peintre Charles Le Brun mit près de dix ans à peindre ce plafond, sans jamais le terminer entièrement." },
      { file: 'louvre--galerie-medicis-rubens', alt: 'Galerie Médicis avec les tableaux de Rubens', caption: "Rubens peignit les vingt-quatre toiles du cycle Médicis en quatre ans à peine, avec l'aide de tout un atelier." },
      { file: 'louvre--cour-marly-sculptures', alt: 'Sculptures de la cour Marly au Louvre', caption: "Les chevaux de Marly ornaient jadis les jardins du château de Louis XIV, avant d'être abrités ici pour les protéger des intempéries." },
      { file: 'louvre--venus-de-milo-foule', alt: 'La Vénus de Milo entourée de visiteurs', caption: "Découverte en 1820 sur l'île grecque de Milos par un paysan, la Vénus avait déjà perdu ses bras avant même d'arriver en France." },
    ],
  },
  {
    slug: 'arc-de-triomphe',
    title: "Arc de Triomphe",
    tagline: "Le monument de la place Charles-de-Gaulle, au sommet des Champs-Élysées",
    arrondissement: '8e / 16e / 17e arrondissement',
    metro: ['Charles de Gaulle – Étoile'],
    coords: [48.8738, 2.2950],
    intro:
      "Commandé par Napoléon Ier en 1806 pour célébrer ses armées, l'Arc de Triomphe ne sera achevé qu'en 1836. Il abrite depuis 1921 la tombe du Soldat inconnu et sa flamme, ravivée chaque soir.",
    description: [
      "Situé au centre de la place Charles-de-Gaulle, autrefois appelée place de l'Étoile en raison des douze avenues qui y convergent, l'Arc de Triomphe marque l'extrémité de la perspective des Champs-Élysées, dans l'axe historique qui relie le Louvre à la Grande Arche de la Défense.",
      "Haut de 50 mètres, il est orné de sculptures monumentales, dont le célèbre haut-relief de La Marseillaise. Son terrasse panoramique, accessible par un escalier de 284 marches, offre l'une des plus belles vues sur Paris et ses grandes avenues.",
      "Illuminé la nuit tombée, l'arc devient un point de repère lumineux visible depuis les Champs-Élysées comme depuis la Défense, dans l'alignement duquel il se trouve.",
    ],
    tip: "Pour rejoindre le terre-plein central en toute sécurité, empruntez impérativement le passage souterrain : la place est un rond-point à la circulation dense.",
    chapters: { one: 'Au centre de l\'étoile', two: 'Ce qu\'il faut savoir', three: 'Une petite histoire de la place' },
    reviews: [
      { author: 'Sophie L.', rating: 5, text: "Les 284 marches se méritent, mais la vue sur les douze avenues qui rayonnent depuis le sommet est unique à Paris." },
      { author: 'Ben H.', rating: 4, text: "Pensez au passage souterrain pour traverser, la place est un vrai rond-point. Sinon superbe la nuit, illuminé." },
    ],
    cover: 'arc-de-triomphe--gros-plan-coucher-soleil',
    images: [
      { file: 'arc-de-triomphe--gros-plan-coucher-soleil', alt: "Gros plan sur l'Arc de Triomphe au coucher du soleil", caption: 'La pierre se teinte d\'or aux dernières heures du jour.' },
      { file: 'arc-de-triomphe--nuit-drapeau-francais', alt: "Arc de Triomphe de nuit avec le drapeau français", caption: 'De nuit, le drapeau flotte sous l\'arche illuminée, entre les voitures qui tournent.' },
      { file: 'arc-de-triomphe--vue-aerienne-nuit', alt: "Vue aérienne de nuit de la place Charles-de-Gaulle et de l'Arc de Triomphe", caption: "Les douze avenues qui rayonnent depuis la place furent tracées par Haussmann, dit-on, pour faciliter le passage des troupes en cas d'émeute." },
    ],
  },
  {
    slug: 'notre-dame',
    title: 'Cathédrale Notre-Dame de Paris',
    tagline: "Chef-d'œuvre gothique au cœur de l'île de la Cité",
    arrondissement: '4e arrondissement',
    metro: ['Cité', 'Saint-Michel Notre-Dame'],
    coords: [48.8530, 2.3499],
    intro:
      "Édifiée entre 1163 et 1345 sur l'île de la Cité, Notre-Dame est l'un des exemples les plus aboutis de l'architecture gothique. Gravement touchée par un incendie en avril 2019, la cathédrale a rouvert ses portes au public en décembre 2024.",
    description: [
      "Sa façade occidentale, encadrée par ses deux tours et percée d'une rosace de plus de neuf mètres de diamètre, est l'une des images les plus reconnaissables de Paris. Les trois portails sculptés qui la composent racontent des scènes bibliques en pierre.",
      "Les galeries hautes de la cathédrale, avec leurs chimères et gargouilles, offrent un panorama exceptionnel sur l'île de la Cité, la Seine et les toits de Paris jusqu'à la Tour Eiffel.",
      "Depuis les quais, notamment le pont au double, la vue latérale sur le chevet et sa forêt d'arcs-boutants révèle la prouesse technique de l'édifice, l'un des premiers à généraliser ce procédé architectural.",
    ],
    tip: "Les quais autour de l'île de la Cité sont un excellent point de vue pour photographier la cathédrale au lever ou au coucher du soleil, avec moins d'affluence que le parvis.",
    chapters: { one: 'Renaissance d\'un vaisseau de pierre', two: 'Ce qu\'il faut savoir', three: 'Petites histoires de pierre' },
    reviews: [
      { author: 'Elena R.', rating: 5, text: "Émouvant de la voir rouverte après l'incendie. La rosace est encore plus impressionnante en vrai." },
      { author: 'Thomas V.', rating: 4, text: "Le parvis est bondé en journée, on a préféré passer tôt le matin depuis les quais pour les photos." },
    ],
    cover: 'notre-dame--facade-rosace',
    images: [
      { file: 'notre-dame--facade-rosace', alt: 'Façade de Notre-Dame de Paris avec sa grande rosace', caption: 'La grande rosace veille sur le parvis, cœur battant de la façade gothique.' },
      { file: 'notre-dame--facade-ciel-bleu', alt: 'Façade de Notre-Dame de Paris sous un ciel bleu', caption: "Sous un ciel sans nuage, les deux tours dessinent l'horizon de l'île de la Cité." },
      { file: 'notre-dame--vue-laterale-seine', alt: 'Vue latérale de Notre-Dame de Paris depuis la Seine', caption: "Les arcs-boutants du chevet furent ajoutés après coup, quand les premiers murs montrèrent des signes de faiblesse." },
      { file: 'notre-dame--seine-bateau-mouche', alt: 'Notre-Dame de Paris et un bateau mouche sur la Seine', caption: "L'île de la Cité, berceau de Paris, était déjà habitée par les Parisii bien avant que la cathédrale n'y soit bâtie." },
      { file: 'notre-dame--chimere-panorama-paris', alt: 'Chimère de Notre-Dame surplombant un panorama de Paris au coucher du soleil', caption: "Les chimères qui semblent veiller sur Paris ne datent pas du Moyen Âge : Viollet-le-Duc les ajouta au XIXe siècle." },
    ],
  },
  {
    slug: 'disneyland-paris',
    title: 'Disneyland Paris',
    tagline: 'La magie Disney aux portes de Paris',
    arrondissement: 'Marne-la-Vallée (Seine-et-Marne)',
    metro: ['RER A – Marne-la-Vallée / Chessy'],
    coords: [48.8722, 2.7761],
    intro:
      "Ouvert en 1992 à une trentaine de kilomètres à l'est de Paris, Disneyland Paris réunit deux parcs à thème, le Disneyland Park et les Walt Disney Studios, ainsi qu'un village de sept hôtels thématisés.",
    description: [
      "Le Château de la Belle au Bois Dormant, cœur du Disneyland Park, s'inspire des châteaux de la Loire et des illustrations des studios Disney. Il change de décor au fil des saisons, entre décorations d'Halloween et illuminations de fin d'année.",
      "Le parc propose attractions, parades et spectacles nocturnes, dont un feu d'artifice projeté sur la façade du château. Les Walt Disney Studios, second parc du site, sont consacrés au cinéma et à l'animation.",
      "Le Disneyland Hotel, à l'entrée du parc, avec son architecture victorienne rose et ses tourelles, marque traditionnellement le début de la visite pour de nombreuses familles.",
    ],
    tip: "L'application officielle permet de suivre les temps d'attente en direct et de réserver certains créneaux d'attraction à l'avance.",
    chapters: { one: 'Un royaume à l\'est de Paris', two: 'Ce qu\'il faut savoir', three: 'Petites histoires enchantées' },
    reviews: [
      { author: 'Nadia F.', rating: 5, text: "Le château est différent à chaque saison, on y est allé pour Halloween et les décorations valaient le déplacement." },
      { author: 'Kevin S.', rating: 4, text: "Prévoyez l'application pour les temps d'attente, ça change vraiment la visite. Les Walt Disney Studios sont plus calmes que le parc principal." },
    ],
    cover: 'disneyland--chateau-fleurs-jour',
    images: [
      { file: 'disneyland--chateau-fleurs-jour', alt: 'Château de la Belle au Bois Dormant à Disneyland Paris entouré de fleurs', caption: 'Le château rose s\'éveille chaque matin au milieu de parterres fleuris.' },
      { file: 'disneyland--chateau-face', alt: 'Vue de face du château de Disneyland Paris', caption: 'Face au château, les tourelles bleues et or rejouent un conte de fées.' },
      { file: 'disneyland--chateau-rails', alt: 'Château de Disneyland Paris avec les rails du petit train', caption: "Le petit train du parc emprunte un tracé pensé dès l'origine pour offrir une vue différente du château à chaque saison." },
      { file: 'disneyland--chateau-halloween', alt: "Château de Disneyland Paris décoré pour Halloween", caption: "Chaque automne, le château change de visage, une tradition importée directement des parcs américains." },
      { file: 'disneyland--chateau-spectacle-nuit', alt: 'Spectacle de projections et feu d\'artifice sur le château de nuit', caption: "Le spectacle nocturne projeté sur le château a nécessité la pose de plus de mille projecteurs et vidéoprojecteurs." },
      { file: 'disneyland--entree-hotel-famille', alt: "Entrée du Disneyland Hotel avec une famille de visiteurs", caption: "Le Disneyland Hotel fut construit avant même le parc, pour héberger les premières équipes du chantier." },
      { file: 'disneyland--hotel-entree-parc', alt: "Entrée du Disneyland Park avec l'hôtel en arrière-plan", caption: "Passer sous l'hôtel pour entrer dans le parc est un choix voulu par les architectes, comme un rideau qui se lève avant le spectacle." },
      { file: 'disneyland--walt-disney-studios', alt: 'Entrée du parc Walt Disney Studios', caption: "Ouverts en 2002, les Walt Disney Studios restent le plus récent des deux parcs du site." },
    ],
  },
  {
    slug: 'moulin-rouge',
    title: 'Moulin Rouge',
    tagline: 'Le cabaret mythique de Pigalle',
    arrondissement: '18e arrondissement',
    metro: ['Blanche'],
    coords: [48.8841, 2.3322],
    intro:
      "Ouvert en 1889 au pied de la butte Montmartre, le Moulin Rouge est le cabaret parisien le plus célèbre au monde, berceau du French Cancan popularisé par les affiches de Toulouse-Lautrec.",
    description: [
      "Son moulin rouge emblématique, planté sur le boulevard de Clichy, est visible de loin et scintille de mille feux la nuit venue. Le cabaret continue de proposer chaque soir un spectacle de revue mêlant danse, costumes à plumes et strass.",
      "Le quartier de Pigalle qui l'entoure garde une atmosphère électrique, entre néons, théâtres et cafés, à la lisière de Montmartre.",
    ],
    tip: "Les spectacles se jouent en dîner-spectacle ou en revue seule : les réservations sont fortement recommandées, surtout le week-end.",
    chapters: { one: 'Le moulin qui ne s\'arrête jamais', two: 'Ce qu\'il faut savoir', three: 'Une petite histoire de Pigalle' },
    reviews: [
      { author: 'Isabelle P.', rating: 5, text: "Le spectacle est un vrai moment de music-hall, costumes et chorégraphies impeccables. Réservez bien à l'avance." },
      { author: 'David N.', rating: 4, text: "L'enseigne de nuit est magnifique pour les photos, même sans entrer voir le spectacle." },
    ],
    cover: 'moulin-rouge--facade-nuit',
    images: [
      { file: 'moulin-rouge--facade-nuit', alt: 'Façade du Moulin Rouge illuminée de nuit', caption: 'Les ailes du moulin tournent, embrasées de rouge, au-dessus du boulevard.' },
      { file: 'moulin-rouge--enseigne-neon', alt: 'Gros plan sur l\'enseigne néon du Moulin Rouge', caption: 'L\'enseigne néon claque son nom en lettres capitales dans la nuit de Pigalle.' },
      { file: 'moulin-rouge--nuit-voiture', alt: 'Moulin Rouge de nuit avec une voiture sur le boulevard', caption: "Le boulevard de Clichy fut longtemps la frontière entre le Paris respectable et les nuits sans sommeil de Pigalle." },
    ],
  },
  {
    slug: 'opera-garnier',
    title: 'Opéra Garnier',
    tagline: "Le palais de l'Opéra national de Paris",
    arrondissement: '9e arrondissement',
    metro: ['Opéra'],
    coords: [48.8719, 2.3316],
    intro:
      "Inauguré en 1875, l'Opéra Garnier fut conçu par l'architecte Charles Garnier dans un style éclectique flamboyant, mêlant marbres, dorures et sculptures. Il abrite aujourd'hui le Ballet de l'Opéra national de Paris.",
    description: [
      "Le grand escalier en marbre, éclairé par des candélabres et surplombé de balcons, constitue l'une des mises en scène architecturales les plus spectaculaires de Paris, pensée par Garnier comme un véritable théâtre social.",
      "La salle de spectacle, à l'italienne, est coiffée d'un plafond peint par Marc Chagall en 1964, en contraste assumé avec la décoration du XIXe siècle. Le bâtiment inspira également le roman Le Fantôme de l'Opéra de Gaston Leroux.",
      "L'extérieur, avec sa façade richement sculptée et son dôme, se découvre particulièrement bien depuis l'avenue de l'Opéra ou les toits environnants.",
    ],
    tip: "Le foyer et le grand escalier se visitent en journée hors représentation, avec un billet distinct de celui des spectacles.",
    chapters: { one: 'Un théâtre pour les yeux', two: 'Ce qu\'il faut savoir', three: 'Une petite histoire du palais' },
    reviews: [
      { author: 'Chloé B.', rating: 5, text: "Le grand escalier de marbre est à lui seul un spectacle, on comprend pourquoi Garnier le voulait théâtral." },
      { author: 'Antoine G.', rating: 4, text: "Le plafond de Chagall surprend par le contraste avec le reste, très réussi. Vérifiez les horaires hors représentation." },
    ],
    cover: 'opera-garnier--interieur-grand-escalier',
    images: [
      { file: 'opera-garnier--interieur-grand-escalier', alt: "Grand escalier de l'Opéra Garnier", caption: 'Le grand escalier de marbre met en scène chaque visiteur comme sur les planches.' },
      { file: 'opera-garnier--interieur-escalier-candelabres', alt: "Escalier de l'Opéra Garnier éclairé par des candélabres", caption: 'Des candélabres éclairent les volées de marches d\'une lumière presque théâtrale.' },
      { file: 'opera-garnier--exterieur-toit-statues', alt: "Toit et statues de la façade extérieure de l'Opéra Garnier", caption: "Sous l'opéra s'étend un vaste lac souterrain, bien réel, qui inspira le décor du Fantôme de l'Opéra." },
    ],
  },
  {
    slug: 'la-defense',
    title: 'La Défense',
    tagline: "Le quartier d'affaires aux portes de Paris",
    arrondissement: 'Puteaux / Courbevoie (Hauts-de-Seine)',
    metro: ['La Défense – Grande Arche'],
    coords: [48.8918, 2.2360],
    intro:
      "Premier quartier d'affaires d'Europe, La Défense s'est développée à partir des années 1960 à l'ouest de Paris, dans le prolongement de l'axe historique du Louvre et des Champs-Élysées.",
    description: [
      "La Grande Arche, inaugurée en 1989 pour le bicentenaire de la Révolution française, referme la perspective monumentale amorcée par le Louvre, la place de la Concorde et l'Arc de Triomphe. Sa forme de cube évidé pourrait contenir Notre-Dame de Paris sous son arche.",
      "Autour d'elle se dresse une skyline de tours modernes, parmi lesquelles les tours Areva, Total ou First, qui contraste avec les toits zinc typiquement parisiens visibles en contrebas depuis les points hauts de la capitale.",
      "Le parvis piéton de la Défense, ponctué de sculptures contemporaines, relie les tours de bureaux aux quartiers résidentiels environnants.",
    ],
    tip: "Le RER A relie directement la Défense au centre de Paris en une quinzaine de minutes depuis Châtelet-les-Halles.",
    chapters: { one: 'Paris regarde vers l\'ouest', two: 'Ce qu\'il faut savoir', three: 'Petites histoires de verre et d\'acier' },
    reviews: [
      { author: 'Farah A.', rating: 5, text: "La Grande Arche vue de dessous donne le vertige, on ne s'attend pas à un tel contraste avec le Paris haussmannien." },
      { author: 'Rachid B.', rating: 4, text: "Le RER A y mène en un quart d'heure depuis Châtelet, pratique pour une après-midi entre buildings et sculptures." },
    ],
    cover: 'la-defense--grande-arche-contre-plongee',
    images: [
      { file: 'la-defense--grande-arche-contre-plongee', alt: 'Grande Arche de la Défense vue en contre-plongée', caption: 'Vue d\'en dessous, le cube évidé de la Grande Arche avale le ciel.' },
      { file: 'la-defense--tours-fidal-passerelle', alt: 'Tours modernes de la Défense et passerelle piétonne', caption: 'Une passerelle suspendue relie les tours de verre entre elles.' },
      { file: 'la-defense--vue-aerienne-tours', alt: 'Vue aérienne des tours du quartier de la Défense', caption: "La Défense doit son nom à une statue commémorant la résistance parisienne de 1870, bien avant l'arrivée des tours." },
      { file: 'la-defense--skyline-coucher-soleil', alt: 'Skyline de la Défense au coucher du soleil', caption: "La première tour du quartier, la tour Esso, fut achevée dès 1963, quand tout autour n'était encore que terrain vague." },
      { file: 'la-defense--skyline-depuis-arc-jour', alt: "Skyline de la Défense vue depuis l'Arc de Triomphe en journée", caption: "L'axe qui relie le Louvre à la Grande Arche mesure environ huit kilomètres de rectitude presque parfaite." },
      { file: 'la-defense--avenue-grande-armee-automne', alt: "Avenue de la Grande Armée en automne avec la Défense en arrière-plan", caption: "L'avenue de la Grande Armée doit son nom aux troupes napoléoniennes qui défilaient jadis vers l'Arc de Triomphe." },
    ],
  },
  {
    slug: 'jardin-des-tuileries',
    title: 'Jardin des Tuileries',
    tagline: 'Le jardin à la française entre Louvre et Concorde',
    arrondissement: '1er arrondissement',
    metro: ['Tuileries', 'Concorde'],
    coords: [48.8634, 2.3275],
    intro:
      "Aménagé au XVIe siècle puis redessiné à la française par André Le Nôtre en 1664, le jardin des Tuileries relie le Louvre à la place de la Concorde. C'est aujourd'hui l'un des jardins publics les plus visités de la capitale.",
    description: [
      "Ses allées rectilignes, ses parterres fleuris et ses bassins circulaires en font un lieu de promenade prisé, ponctué de statues et de sculptures modernes, notamment des œuvres de Maillol et de Rodin.",
      "Une grande roue et des jeux forains s'y installent traditionnellement lors des fêtes foraines saisonnières, offrant une vue dégagée sur le jardin et les toits parisiens environnants.",
      "En automne, les frondaisons dorées des marronniers et platanes contrastent avec les façades haussmanniennes qui bordent le jardin côté rue de Rivoli.",
    ],
    tip: "Les chaises vertes disposées autour du grand bassin rond sont libres d'accès : un excellent endroit pour une pause au soleil.",
    chapters: { one: 'Un jardin taillé au cordeau', two: 'Ce qu\'il faut savoir', three: 'Une petite histoire du jardin' },
    reviews: [
      { author: 'Manon C.', rating: 5, text: "Les chaises vertes autour du bassin, un vrai plaisir simple. Parfait pour souffler entre le Louvre et la Concorde." },
      { author: 'Hugo D.', rating: 4, text: "La grande roue saisonnière ajoute un charme fête foraine au jardin classique, surtout en fin de journée." },
    ],
    cover: 'tuileries--tulipes-tour-eiffel',
    images: [
      { file: 'tuileries--tulipes-tour-eiffel', alt: 'Tulipes du jardin des Tuileries avec la Tour Eiffel en arrière-plan', caption: 'Des tulipes multicolores s\'alignent, la Tour Eiffel en ligne de fuite.' },
      { file: 'tuileries--grande-roue-statues', alt: 'Grande roue et statues du jardin des Tuileries', caption: 'Une grande roue saisonnière tourne aux côtés des statues du jardin.' },
      { file: 'tuileries--statues-automne-haussmann', alt: 'Statues du jardin des Tuileries en automne devant des immeubles haussmanniens', caption: "Avant d'être un jardin public, les Tuileries étaient réservées à la seule famille royale, loin des regards." },
    ],
  },
  {
    slug: 'montmartre',
    title: 'Montmartre',
    tagline: "La butte des artistes et du Sacré-Cœur",
    arrondissement: '18e arrondissement',
    metro: ['Abbesses', 'Anvers', 'Lamarck – Caulaincourt'],
    coords: [48.8867, 2.3431],
    intro:
      "Perché sur la plus haute colline de Paris, Montmartre a conservé son atmosphère de village, avec ses rues pavées, ses escaliers et son passé de quartier des artistes fréquenté par Picasso, Renoir ou Utrillo.",
    description: [
      "La basilique du Sacré-Cœur, achevée en 1914, domine la butte et offre depuis son parvis l'un des plus larges panoramas sur Paris. Les ruelles alentour, comme la rue Lepic ou la place du Tertre, ont gardé leur charme de village.",
      "Les petits cafés et terrasses fleuries qui bordent ses rues pentues, souvent ornées de cerisiers, contribuent à l'ambiance particulière du quartier, à la fois touristique et intime.",
    ],
    tip: "Le funiculaire de Montmartre permet de gravir la butte sans effort depuis la place Saint-Pierre, avec un simple ticket de transport.",
    chapters: { one: 'Le village au-dessus de Paris', two: 'Ce qu\'il faut savoir', three: 'Flâneries sur la butte' },
    reviews: [
      { author: 'Laura M.', rating: 5, text: "On a grimpé à pied jusqu'au Sacré-Cœur, essoufflés mais la vue sur Paris valait chaque marche." },
      { author: 'Pierre-Alain S.', rating: 4, text: "Les ruelles autour de la place du Tertre sont touristiques mais gardent un vrai charme de village." },
    ],
    cover: 'montmartre--cafe-vrai-paris-cerisiers',
    images: [
      { file: 'montmartre--cafe-vrai-paris-cerisiers', alt: 'Terrasse de café à Montmartre entourée de cerisiers', caption: 'Une terrasse fleurie de cerisiers invite à s\'attarder sur la butte.' },
      { file: 'montmartre--vrai-paris-facade-fleurie', alt: 'Façade fleurie d\'un café de Montmartre sous la pluie', caption: 'Sous la pluie, les fleurs roses débordent de la façade d\'un café du quartier.' },
    ],
  },
  {
    slug: 'quartier-latin',
    title: 'Quartier Latin',
    tagline: 'Le cœur intellectuel et étudiant de la rive gauche',
    arrondissement: '5e arrondissement',
    metro: ['Saint-Michel', 'Cluny – La Sorbonne', 'Maubert – Mutualité'],
    coords: [48.8489, 2.3436],
    intro:
      "Nommé d'après le latin, langue enseignée et parlée par les étudiants de la Sorbonne jusqu'au XVIIIe siècle, le Quartier Latin est depuis le Moyen Âge le cœur universitaire de Paris.",
    description: [
      "Ses ruelles étroites concentrent librairies anciennes, cinémas d'art et essai comme le Champo, et brasseries historiques telles que le Balzar, fréquentées par générations d'étudiants et d'intellectuels.",
      "Le quartier reste marqué par la présence de la Sorbonne, du Panthéon et du jardin du Luxembourg, dans une atmosphère à la fois studieuse et animée, particulièrement vivante en soirée autour de la rue Mouffetard.",
    ],
    tip: "Les cinémas de quartier proposent souvent des rétrospectives et des versions originales : une bonne façon de découvrir le cinéma classique.",
    chapters: { one: 'Le quartier qui pense en latin', two: 'Ce qu\'il faut savoir', three: 'En images' },
    reviews: [
      { author: 'Ines H.', rating: 5, text: "Le cinéma Le Champo propose encore des séances en version originale, on s'y sent hors du temps." },
      { author: 'Victor L.', rating: 4, text: "La Brasserie Balzar juste à côté est parfaite pour prolonger la soirée après une séance." },
    ],
    cover: 'quartier-latin--cinema-champo-brasserie',
    images: [
      { file: 'quartier-latin--cinema-champo-brasserie', alt: 'Cinéma Le Champo et brasserie du Quartier Latin', caption: 'Le cinéma Le Champo et la brasserie Balzar veillent sur le même carrefour depuis des générations.' },
    ],
  },
  {
    slug: 'pont-alexandre-iii',
    title: 'Pont Alexandre III',
    tagline: "Le plus fastueux des ponts de la Seine",
    arrondissement: '7e / 8e arrondissement',
    metro: ['Invalides', 'Champs-Élysées – Clemenceau'],
    coords: [48.8639, 2.3134],
    intro:
      "Inauguré en 1900 pour l'Exposition universelle, le pont Alexandre III relie les Invalides au Grand Palais et au Petit Palais. Il porte le nom du tsar Alexandre III, en hommage à l'alliance franco-russe.",
    description: [
      "Orné de nymphes, de guirlandes et de quatre pylônes surmontés de Renommées dorées, le pont est considéré comme le plus ornemental de Paris. Ses lampadaires Art nouveau, allumés à la nuit tombée, en font un lieu de promenade romantique.",
      "Depuis le pont, la perspective s'ouvre sur le dôme des Invalides d'un côté et sur le Grand Palais de l'autre, offrant l'une des vues les plus harmonieuses sur la Seine.",
    ],
    tip: "La vue de nuit depuis le pont, avec les lampadaires allumés et le dôme des Invalides éclairé au loin, est l'une des plus photogéniques de Paris.",
    chapters: { one: 'Le pont le plus fastueux', two: 'Ce qu\'il faut savoir', three: 'En images' },
    reviews: [
      { author: 'Céline R.', rating: 5, text: "De nuit avec les lampadaires allumés et le dôme des Invalides en fond, c'est le plus bel endroit pour une photo à Paris." },
      { author: 'Samuel K.', rating: 4, text: "Traversée courte mais chaque détail sculpté mérite qu'on s'arrête, les Renommées dorées surtout." },
    ],
    cover: 'pont-alexandre-iii--nuit-lampadaires-invalides',
    images: [
      { file: 'pont-alexandre-iii--nuit-lampadaires-invalides', alt: 'Pont Alexandre III de nuit avec ses lampadaires et les Invalides en arrière-plan', caption: 'Les lampadaires Art nouveau s\'allument un à un, le dôme des Invalides en fond.' },
    ],
  },
];

// Images qui ne correspondent pas à un lieu unique : utilisées pour illustrer
// l'ambiance générale de Paris sur la page d'accueil.
export const ambiance = [
  { file: 'paris-panorama--vue-aerienne-tour-eiffel', alt: 'Vue aérienne des toits de Paris avec la Tour Eiffel et la Seine', caption: 'Vu du ciel, Paris déploie ses toits de zinc jusqu\'à la tour.' },
  { file: 'architecture--immeuble-haussmann-balcons', alt: "Immeuble haussmannien d'angle avec balcons en fer forgé", caption: 'Un immeuble d\'angle haussmannien, avec ses balcons en fer forgé caractéristiques.' },
  { file: 'architecture--vue-fenetre-rue-parisienne', alt: 'Vue depuis une fenêtre sur une rue parisienne typique', caption: 'Une fenêtre entrouverte cadre une rue parisienne, vélos en libre-service au coin.' },
  { file: 'ambiance--silhouette-noir-et-blanc', alt: "Silhouette en noir et blanc dans les rues de Paris", caption: 'Une silhouette se détache en noir et blanc dans une rue de la capitale.' },
];

// Photos du métro et des gares parisiennes, pour la page pratique "Se déplacer".
export const metro = [
  { file: 'metro--panneau-art-nouveau', alt: 'Panneau "Métro" de style Art nouveau à l\'entrée d\'une station', caption: 'Les entrées Art nouveau dessinées par Guimard sont elles-mêmes des monuments.' },
  { file: 'metro--panneau-rouge-haussmann', alt: 'Panneau Métro rouge devant un immeuble haussmannien', caption: 'Le panneau rouge Métro tranche devant une façade haussmannienne.' },
  { file: 'metro--rame-ratp-station', alt: 'Rame de métro RATP en station', caption: 'Une rame verte et blanche s\'arrête, portes ouvertes, sur le quai.' },
  { file: 'metro--station-chatelet-les-halles', alt: 'Station Châtelet – Les Halles avec panneau RATP', caption: 'Le secteur Forum de Châtelet, Les Halles, plus vaste carrefour souterrain du réseau.' },
  { file: 'metro--gare-de-lyon-interieur', alt: 'Intérieur de la gare de Lyon avec sa signalétique', caption: 'Les piliers jaunes de la gare de Lyon guident vers les grandes lignes.' },
  { file: 'metro--gare-du-nord-trains', alt: 'Trains à quai en gare du Nord', caption: 'Les trains attendent à quai sous la verrière de la gare du Nord.' },
  { file: 'metro--gare-verriere-voies', alt: 'Verrière et voies ferrées d\'une gare parisienne', caption: 'Une verrière métallique baigne les voies de lumière au crépuscule.' },
];

export function getLieuBySlug(slug) {
  return lieux.find((lieu) => lieu.slug === slug);
}
