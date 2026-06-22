const base = import.meta.env.BASE_URL || '/';

export const aliens = [
  {
    id: 1,
    name: "Heatblast",
    species: "Pyronite",
    homePlanet: "Pyros",
    abilities: [
      "Fire manipulation - can generate and control intense flames",
      "Flight by propelling himself with fire",
      "Can survive in extreme temperatures and vacuum of space",
      "Creates fire constructs, walls, and projectiles",
      "Absorbs heat from surroundings to become stronger"
    ],
    weakness: "Water severely weakens him; can be extinguished. Inability to generate fire in oxygen-deprived environments limits his combat effectiveness.",
    firstAppearance: "Ben 10 (2005) - Episode 1: 'And Then There Were 10'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Heatblast was the very first alien Ben Tennyson ever transformed into. A being of living flame from the star-like planet Pyros, Heatblast is one of Ben's most iconic and powerful aliens. His body is composed of an orange, rock-like exterior with molten lava flowing through the cracks, making him look like a walking volcano.",
    interestingFacts: [
      "Heatblast was the first alien Ben ever used, accidentally transforming during his fight with Vilgax's drone",
      "He can survive in the vacuum of space and even breathe in space",
      "His species, Pyronites, are born from a sacred flame on their homeworld Pyros",
      "In Alien Force, Heatblast's design was updated with more prominent lava cracks and a taller, more muscular build",
      "Heatblast's fire can burn even underwater with enough concentration"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/c/cc/Heatblast_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/c/cc/Heatblast_classic_official.png",
    color: "#ff4500",
    gradient: "linear-gradient(135deg, #1a0a00, #ff4500)",
    universe: "Classic Series (2005–2008)",
    powerType: "fire"
  },
  {
    id: 2,
    name: "Wildmutt",
    species: "Vulpimancer",
    homePlanet: "Unknown",
    abilities: [
      "Enhanced senses - can track targets by scent across planetary distances",
      "Quadrupedal speed - can run at incredible speeds on all fours",
      "Sharp claws and teeth for close-quarters combat",
      "Spiked tail that can be used as a flail weapon",
      "Blind but can 'see' via scent, sound, and air current detection"
    ],
    weakness: "Completely blind - relies entirely on scent and sound, making him useless against odorless or silent opponents. Cannot distinguish between similar scents in polluted environments. His lack of hands limits fine manipulation and puzzle-solving.",
    firstAppearance: "Ben 10 (2005) - Episode 4: 'And Then There Were 10'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Wildmutt is a feral, dog-like Vulpimancer with no visible eyes and a body covered in orange fur with dark stripes. He has a large mouth filled with sharp teeth, clawed hands and feet, and a long spiked tail. Wildmutt is a purely physical, instinct-driven fighter who relies on his incredible senses to track and hunt his prey across any terrain.",
    interestingFacts: [
      "Wildmutt is one of the original 10 aliens in the classic Omnitrix playlist",
      "Vulpimancers have no eyes but can perceive their surroundings through enhanced smell and hearing",
      "His species evolved on an unknown planet with perpetual fog, making sight unnecessary",
      "Wildmutt can track a specific scent across interplanetary distances",
      "In the original series, Wildmutt was the first alien whose DNA sample came from a non-sentient species"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/c/c5/Wildmutt_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/c/c5/Wildmutt_classic_official.png",
    color: "#ff6600",
    gradient: "linear-gradient(135deg, #1a0a00, #ff6600)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 3,
    name: "Stinkfly",
    species: "Lepidopterran",
    homePlanet: "Lepidopterra",
    abilities: [
      "Flight with four transparent wings at high maneuverability",
      "Secretes a thick, adhesive green slime from his body",
      "Sharp tail stinger that can pierce solid metal",
      "Can shoot concentrated globs of slime as projectiles",
      "Enhanced vision with multiple compound eyes offering 360-degree view"
    ],
    weakness: "His wings are fragile and can be damaged, grounding him. The distinctive smell of his slime makes stealth impossible. Caught easily in enclosed spaces. His slime is flammable and can be used against him.",
    firstAppearance: "Ben 10 (2005) - Episode 1: 'And Then There Were 10'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Stinkfly is a large insect-like Lepidopterran with four translucent wings, multiple eyes, and a long tail ending in a sharp stinger. His name comes from the pungent odor he emits, and his body constantly secretes a sticky green substance. Stinkfly is Ben's primary aerial combatant in the original series, combining flight with ranged slime attacks and powerful stingers.",
    interestingFacts: [
      "Stinkfly's slime is non-toxic but incredibly sticky and difficult to remove",
      "Lepidopterrans communicate through pheromones and wing vibrations",
      "His homeworld Lepidopterra is a jungle planet with high-gravity conditions",
      "Stinkfly was one of the original 10 aliens in the classic Omnitrix",
      "The smell he emits is described as 'a thousand rotten eggs mixed with skunk spray'"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/f/fb/Stinkfly_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/f/fb/Stinkfly_classic_official.png",
    color: "#33cc33",
    gradient: "linear-gradient(135deg, #001a00, #33cc33)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 4,
    name: "Diamondhead",
    species: "Petrosapien",
    homePlanet: "Petropia",
    abilities: [
      "Body made of near-indestructible green diamond crystals",
      "Can regenerate from shattered pieces",
      "Can launch crystal shards as projectiles",
      "Creates crystal constructs - walls, weapons, shields",
      "Can merge with and control crystalline structures"
    ],
    weakness: "Vulnerable to sonic vibrations which can shatter his crystal body. Extreme heat can melt his diamond structure. His crystals can be used against him if controlled by someone else.",
    firstAppearance: "Ben 10 (2005) - Episode 3: 'The Krakken'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Beat'",
    description: "Diamondhead is a humanoid crystalline being made entirely of green diamonds. He is one of Ben's most durable aliens, capable of withstanding extreme forces and regenerating from near-total destruction. His body can reshape into various weapons and defensive structures.",
    interestingFacts: [
      "Diamondhead was originally supposed to be Ben's most used alien before Heatblast became the fan favorite",
      "Petrosapiens can communicate telepathically with each other through their crystalline structure",
      "The planet Petropia was destroyed, making Diamondhead one of the last of his kind",
      "He can survive in the vacuum of space and has no need for oxygen",
      "Diamondhead's crystals are harder than any known material on Earth"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/9/93/Diamondhead_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/9/93/Diamondhead_classic_official.png",
    color: "#00ff88",
    gradient: "linear-gradient(135deg, #002211, #00ff88)",
    universe: "Classic Series (2005–2008)",
    powerType: "crystal"
  },
  {
    id: 5,
    name: "XLR8",
    species: "Kineceleran",
    homePlanet: "Kinet",
    abilities: [
      "Superhuman speed - can move faster than the eye can see",
      "Can run on walls, water, and any surface",
      "Creates speed vortices and wind tunnels",
      "Razor-sharp claws on feet for traction and combat",
      "Enhanced reflexes and perception in slow motion"
    ],
    weakness: "Can be slowed or trapped by sticky substances. Difficult to control on slippery or icy surfaces. Tires quickly at top speed. Limited combat ability when forced to stand still.",
    firstAppearance: "Ben 10 (2005) - Episode 4: 'And Then There Were 10' (flashback), Full debut: Episode 2 'Washington B.C.'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Rook Tales'",
    description: "XLR8 is a sleek, blue, raptor-like Kineceleran built for one thing: speed. He can move at velocities that make him appear as nothing more than a blur. With his aerodynamic design and wheel-like feet, XLR8 is Ben's go-to alien when he needs to get somewhere fast.",
    interestingFacts: [
      "XLR8's name is a play on 'accelerate' - XLR8 = accelerate",
      "Kinecelerans have wheel-like structures instead of feet, allowing them to achieve incredible speeds",
      "His visor protects his eyes from wind friction and debris at high speeds",
      "XLR8 can create tornado-level winds just by running in circles",
      "He was Ben's first super-speed alien and remains the fastest recurring transformation"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/0/00/Xlr8_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/0/00/Xlr8_classic_official.png",
    color: "#0066ff",
    gradient: "linear-gradient(135deg, #000033, #0066ff)",
    universe: "Classic Series (2005–2008)",
    powerType: "speed"
  },
  {
    id: 6,
    name: "Grey Matter",
    species: "Galvan",
    homePlanet: "Galvan Prime",
    abilities: [
      "Superhuman intelligence - IQ of several thousand",
      "Expert in engineering, physics, chemistry, and alien technology",
      "Can build advanced devices from scrap materials",
      "Ability to interface with and reprogram any technology",
      "Small size allows for stealth and infiltration"
    ],
    weakness: "Extremely small and physically weak. Can be easily crushed, stepped on, or captured. Useless in direct physical confrontations. His intelligence is useless without time and resources to build solutions.",
    firstAppearance: "Ben 10 (2005) - Episode 2: 'Washington B.C.'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Grey Matter is a small, frog-like Galvan with the most advanced intellect of any species in the galaxy. Despite standing only a few inches tall, Grey Matter possesses an IQ in the thousands, capable of solving complex equations, hacking alien technology, and building incredible devices from spare parts. He is Ben's brain over brawn alien.",
    interestingFacts: [
      "Grey Matter was the third alien Ben ever unlocked in the original series",
      "Galvans are widely considered the smartest species in the entire universe",
      "The Omnitrix's creator, Azmuth, is himself a Galvan - the smartest of his kind",
      "Grey Matter once jury-rigged a spaceship engine from junk parts",
      "Galvans have photographic memory and can process information faster than supercomputers"
    ],
    image: base + "images/wiki_greymatter.png",
    cardImage: base + "images/wiki_greymatter.png",
    color: "#88aa00",
    gradient: "linear-gradient(135deg, #1a1a00, #88aa00)",
    universe: "Classic Series (2005–2008)",
    powerType: "tech"
  },
  {
    id: 7,
    name: "Four Arms",
    species: "Tetramand",
    homePlanet: "Khoros",
    abilities: [
      "Superhuman strength - can lift over 100 tons",
      "Four powerful arms for combat and multi-tasking",
      "Enhanced durability and stamina",
      "Can create shockwaves by clapping hands",
      "Expert hand-to-hand combatant with natural fighting instincts"
    ],
    weakness: "Large size makes him an easy target; lacks ranged attacks. His strength is useless against intangible or incorporeal enemies. Can be outsmarted by faster, more strategic foes.",
    firstAppearance: "Ben 10 (2005) - Episode 2: 'Washington B.C.'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Four Arms is a towering, red-skinned Tetramand with four muscular arms and incredible strength. He is Ben's go-to alien for physical combat and heavy lifting. Despite his intimidating appearance, Four Arms has a heroic and protective nature, always ready to stand between danger and the innocent.",
    interestingFacts: [
      "Four Arms was the second alien Ben ever unlocked, first used to stop a runaway subway train",
      "Tetramands have four eyes in addition to four arms, giving them superior peripheral vision",
      "On his homeworld Khoros, Tetramands are a warrior race with a strict code of honor",
      "Four Arms has appeared in every Ben 10 series, making him one of the most recurring aliens",
      "His impressive mustache is a cultural symbol of maturity among Tetramands"
    ],
    image: base + "images/wiki_fourarms.png",
    cardImage: base + "images/wiki_fourarms.png",
    color: "#cc0000",
    gradient: "linear-gradient(135deg, #1a0000, #cc0000)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 8,
    name: "Ripjaws",
    species: "Piscciss Volann",
    homePlanet: "Piscciss",
    abilities: [
      "Aquatic adaptation - thrives underwater with natural gills",
      "Jaw strength - can bite through steel with massive crushing force",
      "Sharp teeth that can shred virtually any material",
      "Prehensile tail for swimming and grabbing",
      "Can extend his jaw to swallow large objects whole"
    ],
    weakness: "Cannot breathe outside of water for extended periods; must stay hydrated. Slow and clumsy on land. Vulnerable to dehydration. His fish-like body is easily damaged out of water.",
    firstAppearance: "Ben 10 (2005) - Episode 9: 'The Tourist Trap'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Return of Vilgax'",
    description: "Ripjaws is a fearsome, humanoid fish-like Piscciss Volann from the aquatic planet Piscciss. He resembles a cross between a shark and an angler fish, with razor-sharp teeth, a bioluminescent lure on his head, and powerful fins. Ripjaws is Ben's premier underwater alien, capable of swimming at incredible speeds and crushing nearly anything with his powerful jaws.",
    interestingFacts: [
      "Ripjaws was one of the original 10 aliens in the classic Omnitrix playlist",
      "Piscciss Volanns are the dominant species on the water-covered planet Piscciss",
      "His species comes in many varieties, including the electric eel-like 'Piscciss Premann'",
      "Ripjaws' jaw can unhinge like a snake's to swallow prey larger than his head",
      "The lure on his head can glow to attract prey in dark waters"
    ],
    image: base + "images/wiki_ripjaws.png",
    cardImage: base + "images/wiki_ripjaws.png",
    color: "#008844",
    gradient: "linear-gradient(135deg, #001a0a, #008844)",
    universe: "Classic Series (2005–2008)",
    powerType: "fluid"
  },
  {
    id: 9,
    name: "Upgrade",
    species: "Galvanic Mechamorph",
    homePlanet: "Galvan B",
    abilities: [
      "Technopathy - can merge with and control any technology",
      "Can upgrade and enhance technological devices beyond their normal capabilities",
      "Shape-shifting - can reshape his liquid metallic body at will",
      "Can interface with computers and digital systems",
      "Can repair damaged technology and improve its functionality"
    ],
    weakness: "Cannot upgrade organic matter or biological systems. Vulnerable to electromagnetic pulses. His upgrades are temporary and revert once he transforms back. Limited effectiveness against magic-based or purely biological foes.",
    firstAppearance: "Ben 10 (2005) - Episode 6: 'Side Effects'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Upgrade is a liquid metal Galvanic Mechamorph from the moon Galvan B. His black, ooze-like body with green circuitry patterns can merge with any piece of technology, upgrading it with enhanced capabilities and futuristic features. He is Ben's go-to alien for technological threats and hacking situations.",
    interestingFacts: [
      "Upgrade's species, the Galvanic Mechamorphs, were originally created by Azmuth to help maintain the Omnitrix",
      "The green circuitry patterns on his body glow brighter when he's actively using technology",
      "Upgrade can merge with vehicles, weapons, computers, and even the Omnitrix itself",
      "He once upgraded a Rustbucket into a high-tech battle vehicle",
      "Galvanic Mechamorphs can communicate with each other through their circuitry patterns"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/e/e4/Upgrade_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/e/e4/Upgrade_classic_official.png",
    color: "#00ff00",
    gradient: "linear-gradient(135deg, #001a00, #00ff00)",
    universe: "Classic Series (2005–2008)",
    powerType: "tech"
  },
  {
    id: 10,
    name: "Ghostfreak",
    species: "Ectonurite",
    homePlanet: "Anur Phaetos",
    abilities: [
      "Intangibility - can phase through solid objects",
      "Invisibility at will",
      "Possession of living beings and technology",
      "Flight and levitation",
      "Tentacle attacks from his shadowy body"
    ],
    weakness: "Vulnerable to bright light which can trap him. Weak to mana-based magic. His own sentient second skin can rebel and take control, as it was a sentient entity trapped within the Omnitrix.",
    firstAppearance: "Ben 10 (2005) - Episode 5: 'Ghostfreak'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Ghosts of the Past'",
    description: "Ghostfreak is a terrifying, ghost-like Ectonurite with gray-and-purple striped skin, a single eye, and long claws. Unlike other aliens in the Omnitrix, Ghostfreak's original DNA sample contained a conscious, evil entity that eventually escaped and became one of Ben's most dangerous villains.",
    interestingFacts: [
      "Ghostfreak is the only alien whose DNA sample was conscious and evil, eventually escaping the Omnitrix",
      "When Ghostfreak escaped, he became the main villain of Season 2 of the original series",
      "Ectonurites come from the planet Anur Phaetos, which exists in an entirely different galaxy",
      "His true form is even more terrifying - a skeletal, one-eyed monster called 'Z'Skayr'",
      "Ghostfreak was trapped in the Omnitrix's sun-shaped core after being defeated"
    ],
    image: base + "images/wiki_ghostfreak.png",
    cardImage: base + "images/wiki_ghostfreak.png",
    color: "#9933ff",
    gradient: "linear-gradient(135deg, #1a0033, #9933ff)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 11,
    name: "Cannonbolt",
    species: "Arburian Pelarota",
    homePlanet: "Arburia",
    abilities: [
      "Can curl into an armored ball and roll at high speeds",
      "Enhanced durability - shell can withstand extreme impacts",
      "Can cause massive destruction by rolling through obstacles",
      "Uses momentum as a weapon for devastating ramming attacks",
      "Can flatten and shape his shell for various tactical uses"
    ],
    weakness: "Difficult to control direction at high speed. Vulnerable when uncurled and on his back. Tight spaces can restrict his rolling ability. Momentum-based attacks can be redirected by strong opponents.",
    firstAppearance: "Ben 10 (2005) - Episode 42: 'The Big Tick'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Cannonbolt is a large, round Arburian Pelarota whose primary defense is his incredibly tough, armored shell that he curls into for high-speed rolling attacks. He resembles a giant pill bug with a thick, segmented carapace. When curled up, Cannonbolt becomes an unstoppable wrecking ball capable of leveling buildings and bouncing off surfaces like a pinball.",
    interestingFacts: [
      "Cannonbolt was the first alien Ben unlocked using the Omnitrix's randomizer function",
      "Arburian Pelarotas use their rolling ability as their primary means of transportation on their homeworld",
      "His shell is composed of a unique alloy that becomes harder with repeated impacts",
      "Cannonbolt can uncurl instantly from his ball form, using the momentum to surprise enemies",
      "He was one of the few aliens who could survive a direct hit from Vilgax"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/2/22/Cannonbolt_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/2/22/Cannonbolt_classic_official.png",
    color: "#6699ff",
    gradient: "linear-gradient(135deg, #000033, #6699ff)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 12,
    name: "Wildvine",
    species: "Florauna",
    homePlanet: "Flors Verdance",
    abilities: [
      "Plant manipulation - can control and animate vines, roots, and other flora",
      "Underground movement - can burrow through soil and emerge anywhere",
      "Regeneration - can regrow damaged plant matter from his body",
      "Can release explosive seed pods and spore bombs",
      "Can extend his vines to entangle enemies and swing between surfaces"
    ],
    weakness: "Extreme cold can freeze his plant matter and render him brittle. Fire is highly effective against his wooden body. Defoliation and dehydration can weaken his plant-based attacks. Cannot regenerate from total incineration.",
    firstAppearance: "Ben 10 (2005) - Episode 34: 'Ben Wolf'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vengers'",
    description: "Wildvine is a plant-like Florauna from the jungle planet Flors Verdance, with a green, vine-covered body, a single large red eye, and sharp teeth. He can manipulate plant life, extend his vines like tentacles, burrow underground, and launch explosive seed pods at enemies. Wildvine's regenerative abilities make him a persistent threat that can recover from most injuries.",
    interestingFacts: [
      "Wildvine was one of the aliens Ben unlocked after the Omnitrix's failsafe mode activated",
      "Floraunas are a plant-based species whose bodies are composed of organic vines and wood",
      "He can root himself into the ground to absorb nutrients and energy from the soil",
      "Wildvine's seed pods explode on impact with enough force to damage stone",
      "His species is closely related to the plant life on Flors Verdance"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/0/07/Wildvine_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/0/07/Wildvine_classic_official.png",
    color: "#44aa00",
    gradient: "linear-gradient(135deg, #001a00, #44aa00)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 13,
    name: "Blitzwolfer",
    species: "Loboan",
    homePlanet: "Anur Luna",
    abilities: [
      "Sonic howl - can emit a devastating hypersonic howl that damages and disorients enemies",
      "Enhanced senses - superhuman hearing, smell, and night vision",
      "Sharp claws and fangs for close-quarters combat",
      "Enhanced strength, speed, and agility",
      "Can track targets across vast distances by scent"
    ],
    weakness: "His sonic howl requires him to breathe, making it useless underwater or in a vacuum. Silver-based weapons are particularly effective against him. His howl can be nullified in soundproof environments. His wolf-like instincts can sometimes override rational thought.",
    firstAppearance: "Ben 10 (2005) - Episode 33: 'Ben Wolf'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Blitzwolfer is a werewolf-like Loboan from the moon Anur Luna in the Anur system. He has a bipedal wolf-like form covered in gray and blue fur, with glowing yellow eyes, sharp claws, and large fangs. His primary weapon is his devastating sonic howl, which can shatter objects and incapacitate enemies with focused sound waves.",
    interestingFacts: [
      "Blitzwolfer was originally called 'Ben Wolf' by fans before receiving his official name",
      "Loboans are native to the Anur system, specifically the moon Anur Luna",
      "His sonic howl can reach frequencies that are painful and harmful to most organic beings",
      "Blitzwolfer was one of the 'Anur trio' aliens along with Snare-oh and Frankenstrike",
      "He can track scents across interplanetary distances using his enhanced senses"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/2/29/Blitzwolfer_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/2/29/Blitzwolfer_classic_official.png",
    color: "#3366cc",
    gradient: "linear-gradient(135deg, #000033, #3366cc)",
    universe: "Classic Series (2005–2008)",
    powerType: "sonic"
  },
  {
    id: 14,
    name: "Snare-oh",
    species: "Thep Khufan",
    homePlanet: "Anur Khufos",
    abilities: [
      "Mummy-like bandages - can control and extend his body wrappings at will",
      "Can unravel and re-form his body from bandages",
      "Can trap and constrict enemies within his wrappings",
      "Enhanced durability through layered bandage protection",
      "Can stretch and reshape his body like a living bandage"
    ],
    weakness: "Fire can burn and destroy his bandages, reducing his body mass. His bandages can be cut, torn, or unraveled by sharp objects. Slick substances like oil or slime make his wrappings ineffective for gripping. Extreme water exposure can weigh down and weaken his bandages.",
    firstAppearance: "Ben 10 (2005) - Episode 49: 'The Unnaturals'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Snare-oh is a mummy-like Thep Khufan from the planet Anur Khufos in the Anur system. His entire body is composed of living, self-wrapping bandages beneath which nothing exists but empty darkness. He can unravel and re-form his bandage body at will, extending his wrappings to grab and constrict enemies from a distance.",
    interestingFacts: [
      "Snare-oh's body is entirely made of bandages with no solid form underneath",
      "Thep Khufans come from Anur Khufos, a planet in the mysterious Anur system",
      "He was part of the 'Anur trio' alongside Blitzwolfer and Frankenstrike",
      "Snare-oh can reform himself from a single remaining strip of bandage",
      "His species is often mistaken for undead mummies, but they are living beings"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/f/fc/Snare-oh_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/f/fc/Snare-oh_classic_official.png",
    color: "#ccaa66",
    gradient: "linear-gradient(135deg, #1a1a00, #ccaa66)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 15,
    name: "Frankenstrike",
    species: "Transylian",
    homePlanet: "Anur Transyl",
    abilities: [
      "Electricity manipulation - can generate and control powerful electrical currents",
      "Electrokinesis - can shoot lightning bolts and electrocute enemies",
      "Enhanced strength and durability from his reinforced body",
      "Can absorb and redirect electrical energy from external sources",
      "Bolts on his neck can channel and release stored electricity"
    ],
    weakness: "Water and moisture can ground his electrical attacks harmlessly. His electricity-dependent powers are weaker in dry, non-conductive environments. Overuse of electrical attacks can drain his personal energy reserves. His large, heavy body makes him somewhat slow.",
    firstAppearance: "Ben 10 (2005) - Episode 49: 'The Unnaturals'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Frankenstrike is a green-skinned, stitched-together Transylian from the planet Anur Transyl, resembling a classic Frankenstein monster. He has a large, powerful body with electrode bolts on his neck that generate and channel massive amounts of electricity. Frankenstrike combines brute strength with devastating electrokinetic attacks, making him a formidable close-quarters combatant.",
    interestingFacts: [
      "Frankenstrike is inspired by the classic Frankenstein monster from Mary Shelley's novel",
      "Transylians from Anur Transyl are one of the few species with natural electrical generation",
      "He was part of the 'Anur trio' along with Blitzwolfer and Snare-oh",
      "Frankenstrike's bolts can absorb external electricity to supercharge his attacks",
      "His stitched body is the result of Transylian biology rather than surgical reconstruction"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/a/a2/Frankenstrike_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/a/a2/Frankenstrike_classic_official.png",
    color: "#33cc33",
    gradient: "linear-gradient(135deg, #001a00, #33cc33)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 16,
    name: "Upchuck",
    species: "Gourmand",
    homePlanet: "Peptos XI",
    abilities: [
      "Can eat and consume virtually any substance or material",
      "Digests matter and regurgitates it as explosive projectiles",
      "Four prehensile tongues for grabbing food and enemies",
      "Stomach can store massive amounts of matter relative to body size",
      "Can eat through solid metal, energy blasts, and even magic"
    ],
    weakness: "Vulnerable while eating - his mouth/tongues are exposed. Can be force-fed things that cause indigestion. His small size makes him physically vulnerable to direct attacks. Stomach capacity is not infinite.",
    firstAppearance: "Ben 10 (2005) - Episode 20: 'Monster Weather'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Upchuck is a small, three-legged Gourmand with four long, prehensile tongues and an incredible appetite. He can consume anything - metal, concrete, energy blasts, even magical attacks - and then regurgitate the digested matter as powerful explosive projectiles. Despite his cute appearance, Upchuck is one of Ben's most versatile and dangerous aliens.",
    interestingFacts: [
      "Upchuck's species comes in two subtypes: Perk Gourmands (green) and Murk Gourmands (purple)",
      "Ben's version of Upchuck is a Perk Gourmand, the green variety",
      "Gourmands can eat up to 100 times their body weight in a single sitting",
      "Upchuck's stomach has multiple chambers for processing different types of matter",
      "He once ate and later regurgitated Vilgax's ship's laser cannon blast"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/1/1b/Upchuck_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/1/1b/Upchuck_classic_official.png",
    color: "#00cc66",
    gradient: "linear-gradient(135deg, #001a0a, #00cc66)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 17,
    name: "Ditto",
    species: "Splixson",
    homePlanet: "Hathor",
    abilities: [
      "Self-duplication - can create up to dozens of identical copies of himself",
      "Each clone shares memories, thoughts, and experiences with the original",
      "Clones can reform back into a single being",
      "Can coordinate complex strategies through shared consciousness",
      "Can surround and overwhelm enemies with sheer numbers"
    ],
    weakness: "If one clone is hurt, all clones feel the pain equally. Damage to one clone can mentally overwhelm Ben through shared sensation. Clones can be individually captured or eliminated. His small stature makes him physically weak compared to larger aliens.",
    firstAppearance: "Ben 10 (2005) - Episode 25: 'Divided We Stand'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Ditto is a short, pink, blob-like Splixson with three toes, three fingers, and a single large eye on top of his head. His primary ability is creating multiple identical copies of himself, all sharing a single consciousness. Ditto's duplication ability makes him excellent for swarm tactics, reconnaissance, and overwhelming enemies through coordinated attacks from every direction.",
    interestingFacts: [
      "Ditto was the first alien Ben unlocked with self-duplication capabilities",
      "Splixsons from Hathor reproduce naturally through controlled duplication",
      "All Ditto clones share the same mind - if one learns something, they all know it",
      "The pain sharing across clones is Ditto's biggest drawback in combat",
      "Ditto can create up to dozens of copies, but each copy reduces his individual strength"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/f/f9/Ditto_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/f/f9/Ditto_classic_official.png",
    color: "#ff66aa",
    gradient: "linear-gradient(135deg, #1a0033, #ff66aa)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 18,
    name: "Eye Guy",
    species: "Opticoid",
    homePlanet: "Sightra",
    abilities: [
      "Multiple eyes all over his body that each fire different types of energy beams",
      "Can fire heat rays, ice blasts, lasers, and concussive beams from different eyes",
      "Eyes can move independently for 360-degree awareness",
      "Can combine multiple eye beams for compound attacks",
      "Can use his chest eye for a powerful focused energy blast"
    ],
    weakness: "If all his eyes are covered or blinded, he becomes completely helpless. Each eye can only fire one type of beam. His multiple eyes make him vulnerable to bright flashes that can temporarily blind all of them. Energy beam overuse can exhaust him.",
    firstAppearance: "Ben 10 (2005) - Episode 50: 'Ben 4 Good Buddy'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Eye Guy is a grotesque, multi-eyed Opticoid from the planet Sightra, covered in dozens of eyes of various sizes across his green body. His most prominent feature is a massive eye on his chest. Each eye can fire a different type of energy beam, from heat rays to ice beams to concussive blasts. Eye Guy can attack from multiple angles simultaneously using his various eye-mounted weapons.",
    interestingFacts: [
      "Eye Guy's eyes can each fire a different type of energy beam simultaneously",
      "Opticoids evolved on Sightra, a planet bathed in constant, intense light",
      "His chest eye is his most powerful weapon, capable of firing a devastating energy blast",
      "Eye Guy's eyes provide him with near-360-degree vision at all times",
      "He was one of the most unique alien designs from the original Ben 10 series"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/c/c5/Eyeguy_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/c/c5/Eyeguy_classic_official.png",
    color: "#44cc00",
    gradient: "linear-gradient(135deg, #001a00, #44cc00)",
    universe: "Classic Series (2005–2008)",
    powerType: "tech"
  },
  {
    id: 19,
    name: "Way Big",
    species: "To'kustar",
    homePlanet: "Space (born from cosmic storms)",
    abilities: [
      "Colossal size - stands over 100 feet tall",
      "Incredible strength proportional to his gigantic build",
      "Cosmic rays - can fire powerful energy beams from his hands",
      "Can survive and fly in the vacuum of space",
      "Creates powerful shockwaves with his footsteps"
    ],
    weakness: "His massive size makes him a huge target. Less effective in enclosed spaces or against very fast opponents. Can cause collateral damage due to his enormous scale. His cosmic ray attack requires charging time.",
    firstAppearance: "Ben 10 (2005) - Episode 49: 'The Secret of the Omnitrix'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Way Big is a colossal To'kustar standing over 100 feet tall, making him one of the largest aliens in the Omnitrix. With a silver and red body resembling a superhero, Way Big possesses immense strength proportional to his size and can fire devastating cosmic energy beams from his hands, making him Ben's ultimate heavy hitter.",
    interestingFacts: [
      "Way Big was the final alien unlocked in the original Ben 10 series during the 'Secret of the Omnitrix' movie",
      "To'kustars are born from cosmic storms in the vastness of space",
      "He was powerful enough to defeat Vilgax in single combat",
      "Way Big's design was inspired by the Japanese superhero Ultraman",
      "In Omniverse, Way Big could grow even larger than his original 100-foot height"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/4/41/Waybig_classic_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/4/41/Waybig_classic_official.png",
    color: "#ff3333",
    gradient: "linear-gradient(135deg, #1a0000, #ff3333)",
    universe: "Classic Series (2005–2008)",
    powerType: "cosmic"
  },
  {
    id: 20,
    name: "Buzzshock",
    species: "Nosedeenian",
    homePlanet: "Nosedeen's Quasar 387",
    abilities: [
      "Electricity generation and manipulation",
      "Can split into multiple smaller copies of himself",
      "Can transform into pure electrical energy and travel through wires",
      "Can possess and animate electrical devices",
      "Flight and levitation"
    ],
    weakness: "Can be absorbed by stronger electrical beings. Water grounds and disperses his electrical form. His small size makes him vulnerable to being swatted or captured. Copying himself reduces the power of each individual.",
    firstAppearance: "Ben 10 (2005) - Episode 19: 'The Unnaturals'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Something Zombozo This Way Comes'",
    description: "Buzzshock is a small, mischievous Nosedeenian composed of pure electrical energy. He resembles a tiny, black creature with glowing green eyes and jagged, electricity-like appendages. Despite his small stature, Buzzshock packs an incredible punch, capable of generating massive electrical shocks, multiplying into an army, and even traveling through power lines.",
    interestingFacts: [
      "Buzzshock was created when a Nosedeenian's species was exposed to the Omnitrix's energy signature",
      "He can clone himself infinitely when exposed to electrical energy, creating an army of copies",
      "Nosedeenians reproduce by splitting when they have excess electrical energy",
      "Buzzshock's high-pitched voice and playful personality make him unique among Ben's aliens",
      "He can inhabit any device connected to an electrical circuit"
    ],
    image: base + "images/wiki_buzzshock.png",
    cardImage: base + "images/wiki_buzzshock.png",
    color: "#22cc00",
    gradient: "linear-gradient(135deg, #001a00, #22cc00)",
    universe: "Classic Series (2005–2008)",
    powerType: "beast"
  },
  {
    id: 21,
    name: "Swampfire",
    species: "Methanosian",
    homePlanet: "Methanos",
    abilities: [
      "Plant manipulation - controls vines, roots, and flora",
      "Fire generation from methane-based body",
      "Regeneration - can regrow limbs from plant matter",
      "Can release flammable spores and toxic pollen",
      "Can root into the ground for enhanced strength and healing"
    ],
    weakness: "Extreme cold can freeze his methane-based flames. His plant-based body is vulnerable to fire and defoliation. Can be dehydrated in arid environments.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 1: 'Ben 10 Returns: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Swampfire is a plant-like Methanosian with the unique ability to combine fire and plant powers. Covered in tough, bark-like skin and topped with flaming flowers, Swampfire is both a powerful attacker and a resilient defender. His regeneration makes him nearly impossible to permanently defeat.",
    interestingFacts: [
      "Swampfire was the first alien Ben unlocked in Alien Force, marking his return as a hero",
      "Methanosians are born from methane-rich swamps on their homeworld Methanos",
      "He can set his own body on fire as a defensive mechanism without harming himself",
      "Swampfire's flowers bloom when he's fully charged with methane",
      "In Omniverse, Swampfire gained a more insect-like design with wings"
    ],
    image: base + "images/wiki_swampfire.png",
    cardImage: base + "images/wiki_swampfire.png",
    color: "#00cc44",
    gradient: "linear-gradient(135deg, #002200, #00cc44)",
    universe: "Alien Force (2008–2010)",
    powerType: "fire"
  },
  {
    id: 22,
    name: "Echo Echo",
    species: "Sonorosian",
    homePlanet: "Sonorosia",
    abilities: [
      "Sonic screams that can shatter solid objects and disorient enemies",
      "Self-duplication - can create up to dozens of identical copies",
      "Flight via sound wave propulsion",
      "Can merge copies back together to share memories and knowledge",
      "Can use sound waves for echolocation and creating force fields"
    ],
    weakness: "His sonic attacks are useless in a vacuum where sound cannot travel. Duplicates can be eliminated individually. Loud ambient noise can disrupt his control. His small physical frame is fragile in direct combat.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 5: 'Max Out'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Echo Echo is a small, white, speaker-headed Sonorosian with the ability to generate devastating sonic waves and duplicate himself into an entire army of copies. He resembles a tiny humanoid with a head shaped like a stereo speaker with glowing blue rings. Echo Echo's duplication ability combined with his sonic attacks makes him one of the most strategically versatile aliens in Ben's roster.",
    interestingFacts: [
      "Echo Echo can create dozens of copies of himself, each with full independent consciousness",
      "All Echo Echo copies share a single hive mind - if one sees something, they all know",
      "His species Sonorosia is a planet where the atmosphere transmits sound faster than light",
      "Echo Echo was a key player in defeating the Highbreed during the Alien Force series",
      "In Omniverse, Echo Echo gained a redesigned, more robotic appearance"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/a/ae/Echo_echo_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/a/ae/Echo_echo_af_official.png",
    color: "#ffffff",
    gradient: "linear-gradient(135deg, #1a1a2e, #ffffff)",
    universe: "Alien Force (2008–2010)",
    powerType: "sonic"
  },
  {
    id: 23,
    name: "Humungousaur",
    species: "Vaxasaurian",
    homePlanet: "Terradino",
    abilities: [
      "Gigantic size and proportional strength",
      "Can grow up to 60 feet tall",
      "Thick armor-like skin provides natural protection",
      "Powerful tail swipe and ground stomp attacks",
      "Surprisingly agile despite massive build"
    ],
    weakness: "Slow movement speed makes him vulnerable to fast opponents. His size makes him an obvious target. Can be defeated by clever tactics rather than brute force. Growth has an upper limit.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 2: 'Ben 10 Returns: Part 2'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Humungousaur is a massive, dinosaur-like Vaxasaurian with incredible strength that grows with his size. Standing over 12 feet tall normally and capable of growing to nearly 60 feet, he is Ben's heaviest hitter in Alien Force and beyond.",
    interestingFacts: [
      "Humungousaur can increase his size from 12 feet to nearly 60 feet, with strength increasing proportionally",
      "Vaxasaurians are based on Earth's ancient sauropod dinosaurs but evolved on Terradino",
      "He was Ben's most used alien in Alien Force, similar to Four Arms in the original series",
      "Humungousaur's species was nearly hunted to extinction by the predatory Tyrannopede",
      "Despite his size, Humungousaur is surprisingly gentle and often tries not to harm innocents"
    ],
    image: base + "images/wiki_humungousaur.png",
    cardImage: base + "images/wiki_humungousaur.png",
    color: "#8b4513",
    gradient: "linear-gradient(135deg, #1a0a00, #8b4513)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 24,
    name: "Jetray",
    species: "Aerophibian",
    homePlanet: "Aeropela",
    abilities: [
      "Supersonic flight - can reach speeds exceeding Mach 10 in atmosphere",
      "Neuroshock blasts - fires paralyzing energy beams from his eyes",
      "Can breathe and fly underwater as easily as in air",
      "Aerodynamic body with wings and tail fins for extreme maneuverability",
      "Can survive in the vacuum of space using energy-based propulsion"
    ],
    weakness: "Neuroshock blasts drain his energy quickly with continuous use. His long tail and wings can be grabbed by opponents. Less effective in tight enclosed spaces where he cannot build speed. Requires open airspace for maximum combat effectiveness.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 3: 'Everybody Talks About the Weather'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vengers'",
    description: "Jetray is a sleek, manta ray-like Aerophibian with a long tail, large wings, and the ability to fly at hypersonic speeds. His body is primarily yellow with red accents and black highlights, giving him a striking appearance in flight. Jetray is Ben's fastest flying alien, capable of reaching escape velocity within seconds and firing paralyzing neuroshock blasts from his eyes.",
    interestingFacts: [
      "Jetray can fly at speeds fast enough to break the sound barrier without creating a sonic boom",
      "Aerophibians evolved on Aeropela, a planet with a dense, breathable atmosphere",
      "His neuroshock blasts can paralyze targets without causing permanent harm",
      "Jetray can transition from outer space to underwater without any adaptation period",
      "He was Ben's primary reconnaissance and pursuit alien during the Alien Force era"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/c/cc/Jetray_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/c/cc/Jetray_af_official.png",
    color: "#ffcc00",
    gradient: "linear-gradient(135deg, #1a1a00, #ffcc00)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 25,
    name: "Big Chill",
    species: "Necrofriggian",
    homePlanet: "Kylmyys",
    abilities: [
      "Intangibility - can phase through solid matter like a ghost",
      "Ice breath - can freeze targets instantly",
      "Flight via moth-like wings",
      "Can survive in the vacuum of space",
      "Can lay eggs that hatch into young Necrofriggians"
    ],
    weakness: "Extreme heat can melt his ice and harm his body. His phased form can be disrupted by strong magnetic fields. Reproductive instincts can override his control during mating season.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 9: 'Everybody Talks About the Weather'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Mud Is Thicker Than Water'",
    description: "Big Chill is a moth-like Necrofriggian with ethereal blue wings and the chilling power of absolute zero. He can phase through walls and freeze enemies solid with a single breath. Despite his eerie appearance, Big Chill is calm and methodical in battle.",
    interestingFacts: [
      "Big Chill unintentionally became a parent when his species' reproductive instincts activated, making him lay eggs",
      "Necrofriggians from Kylmyys are composed of condensed ice crystals held together by unknown energy",
      "His wings create a hypnotic pattern that can mesmerize opponents",
      "Big Chill can enter a 'ghost mode' that makes him completely intangible and invisible",
      "He was one of the few aliens Ben used against the Highbreed invasion"
    ],
    image: base + "images/wiki_bigchill.png",
    cardImage: base + "images/wiki_bigchill.png",
    color: "#00aaff",
    gradient: "linear-gradient(135deg, #000033, #00aaff)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 26,
    name: "Chromastone",
    species: "Crystalsapien",
    homePlanet: "Petropia",
    abilities: [
      "Energy absorption - can absorb all forms of energy",
      "Energy redirection - fires absorbed energy as powerful beams",
      "Flight by levitation",
      "Can create energy shields and constructs",
      "Crystal body regeneration from damage"
    ],
    weakness: "Vulnerable to physical blunt force trauma. Can be overloaded by absorbing too much energy at once. Weak to anti-energy fields that disrupt his absorption capability.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 26: 'The Secret of Chromastone'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Chromastone is a shimmering, crystal-like Crystalsapien with the ability to absorb, manipulate, and redirect virtually any form of energy. His body, composed of purple crystalline structures, glows brilliantly when channeling power. Chromastone serves as the spiritual guardian of the Crystalsapiens and is one of Ben's most powerful defensive aliens.",
    interestingFacts: [
      "Chromastone was revealed to be the last of the Crystalsapiens, making him an endangered species",
      "He was created by the petrosapiens' sun god to protect them from the predator known as the 'Marauder'",
      "Chromastone can absorb sunlight, laser blasts, mana energy, and even Alien X's cosmic energy",
      "He shared a psychic connection with Diamondhead, as both are crystal-based beings from Petropia",
      "Chromastone's energy beams are powerful enough to harm Vilgax"
    ],
    image: base + "images/wiki_chromastone.png",
    cardImage: base + "images/wiki_chromastone.png",
    color: "#cc44ff",
    gradient: "linear-gradient(135deg, #1a0033, #cc44ff)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 27,
    name: "Brainstorm",
    species: "Cerebrocrustacean",
    homePlanet: "Encephalonus IV",
    abilities: [
      "Superhuman intelligence surpassing most known species",
      "Electrical generation - can fire powerful lightning bolts from his brain",
      "Telekinesis - can move objects with his mind at limited capacity",
      "Electrokinetic force fields for defense",
      "Can interface with and control electronic systems telepathically"
    ],
    weakness: "Physical frailty - his crab-like body is not built for direct combat. His electrical attacks require moisture in the air to conduct. Overthinking can delay his reactions in fast-paced battles. Overuse of electricity drains his mental energy.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 10: 'Pier Pressure'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Vilgax's Revenge'",
    description: "Brainstorm is a crustacean-like Cerebrocrustacean with an oversized head containing a super-intelligent brain that glows with electrical activity when in use. His body resembles a blue crab with large pincers, and his exposed brain crackles with electricity. Brainstorm combines genius-level intellect with powerful electrokinetic abilities, making him both a thinker and a fighter.",
    interestingFacts: [
      "Brainstorm's intelligence rivals that of the Galvans, though in different fields",
      "His species Encephalonus IV has an atmosphere charged with constant electrical storms",
      "The electricity Brainstorm generates comes from his hyperactive brain activity",
      "He speaks in a distinctive, overly formal vocabulary that reflects his intelligence",
      "Brainstorm once calculated the exact trajectory needed to defeat an entire Highbreed fleet"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/2/2c/Brainstorm_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/2/2c/Brainstorm_af_official.png",
    color: "#0066ff",
    gradient: "linear-gradient(135deg, #000033, #0066ff)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 28,
    name: "Spidermonkey",
    species: "Arachnichimp",
    homePlanet: "Aranhaschimmia",
    abilities: [
      "Organic web-slinging - shoots strong silk webbing from his tail",
      "Wall-crawling on any surface with prehensile feet and hands",
      "Enhanced agility, reflexes, and acrobatic abilities",
      "Four arms with powerful grip strength",
      "Can wrap enemies in cocoons and create web-based traps"
    ],
    weakness: "His webs can be dissolved by certain chemicals or extreme heat. Vulnerable to fire-based attacks that burn his fur and webs. His spider-like lower body makes him awkward on completely flat, smooth surfaces. Low stamina for prolonged web-slinging.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 12: 'Pet Project'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Color of Monster'",
    description: "Spidermonkey is a unique fusion of spider and monkey features - a blue-furred Arachnichimp with four arms, six eyes, and a spider-like lower body that produces organic webbing from his tail. He is incredibly agile and acrobatic, swinging through urban environments with ease. Spidermonkey's combination of web powers and primate agility makes him Ben's premier urban traversal alien.",
    interestingFacts: [
      "Spidermonkey's species evolved on Aranhaschimmia, a jungle planet with massive vertical forests",
      "His six eyes give him nearly 360-degree vision with exceptional depth perception",
      "The webbing from his tail can support tons of weight before breaking",
      "Spidermonkey has a playful, monkey-like personality that sometimes undermines serious missions",
      "He was one of the aliens Ben used to infiltrate the Highbreed's homeworld"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/f/f3/Spidermonkey_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/f/f3/Spidermonkey_af_official.png",
    color: "#3333cc",
    gradient: "linear-gradient(135deg, #000011, #3333cc)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 29,
    name: "Goop",
    species: "Polymorph",
    homePlanet: "Viscosia",
    abilities: [
      "Amorphous body - can reshape his liquid form into any shape",
      "Corrosive secretion - can dissolve most materials on contact",
      "Can flatten into a puddle to evade attacks or slip through gaps",
      "Regeneration - can reform from liquid state after being scattered",
      "Can envelop enemies and objects within his gelatinous body"
    ],
    weakness: "Requires an anti-gravity projector to maintain his shape; destroying it leaves him helpless as a puddle. Vulnerable to extreme heat that can evaporate him. Absorption of non-compatible liquids can destabilize his form. Electricity disperses his body.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 13: 'Grounded'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A Fistful of Brains'",
    description: "Goop is a translucent, green, gelatinous Polymorph who requires a hovering anti-gravity projector disc to maintain his humanoid shape. His body is composed of a viscous, semi-liquid substance that he can reshape at will. Goop is remarkably resilient - he can flatten himself, stretch his body, dissolve materials with his corrosive touch, and reform from even the smallest remaining glob.",
    interestingFacts: [
      "Goop's anti-gravity projector is what gives him a humanoid shape; without it he becomes a puddle",
      "Polymorphs from Viscosia evolved in a liquid environment and have no natural skeletal structure",
      "His body is composed of a unique organic acid that can dissolve most substances",
      "Goop can reconstitute himself from a single drop of his liquid body",
      "In Omniverse, Goop's design was updated with a sleeker, more fluid appearance"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/1/17/Goop_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/1/17/Goop_af_official.png",
    color: "#00ff33",
    gradient: "linear-gradient(135deg, #001a00, #00ff33)",
    universe: "Alien Force (2008–2010)",
    powerType: "fluid"
  },
  {
    id: 30,
    name: "Alien X",
    species: "Celestialsapien",
    homePlanet: "Forge of Creation",
    abilities: [
      "Omnipotence - reality warping on a universal scale",
      "Time manipulation - can stop, rewind, or fast-forward time",
      "Can create, destroy, or alter matter and energy at will",
      "Complete invulnerability - immune to all physical harm",
      "Can exist and operate in the vacuum of space without any protection"
    ],
    weakness: "Requires consensus between his three personalities (Bellicus, Serena, and Ben) to take action, causing delays in decision-making. Incomplete control over his powers can lead to unintended consequences. Personality conflicts can leave him frozen in indecision.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 31: 'X = Ben + 2'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Alien X is Ben's most powerful transformation - a Celestialsapien with god-like reality warping abilities. His body resembles a humanoid star field with a dark, featureless face and glowing white eyes. Alien X exists beyond the laws of physics and can reshape the entire universe with a thought, making him the single most powerful being in all of Ben's arsenal.",
    interestingFacts: [
      "Alien X contains three personalities: Bellicus (rage/power), Serena (love/compassion), and Ben (the wielder)",
      "All three personalities must agree before Alien X can take any action",
      "Alien X rewrote the universe after it was destroyed by the Chronosapien Time Bomb",
      "Celestialsapiens exist in the Forge of Creation, a realm beyond space and time",
      "Professor Paradox once stated that Alien X is one of the most dangerous beings he's ever encountered"
    ],
    image: base + "images/wiki_alienx.png",
    cardImage: base + "images/wiki_alienx.png",
    color: "#aaddff",
    gradient: "linear-gradient(135deg, #000011, #0a0a2e)",
    universe: "Alien Force (2008–2010)",
    powerType: "cosmic"
  },
  {
    id: 31,
    name: "Rath",
    species: "Appoplexian",
    homePlanet: "Appoplexia",
    abilities: [
      "Superhuman strength and combat prowess",
      "Retractable tiger-like claws for slashing attacks",
      "Enhanced agility and reflexes",
      "Extremely durable and pain-resistant",
      "Expert improvisational fighter using any object as a weapon"
    ],
    weakness: "His uncontrollable rage and overconfidence often cloud his judgment. Lacks ranged attacks. His impulsiveness leads him into traps and ambushes. Tends to monologue instead of acting.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 28: 'Above and Beyond'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Rath is a hot-headed, tiger-like Appoplexian with a short temper and a long list of grievances. He is incredibly strong and durable, with razor-sharp retractable claws. Rath's most distinctive trait is his sarcastic, rage-filled personality and his tendency to refer to himself in the third person while threatening his enemies with creative violence.",
    interestingFacts: [
      "Rath speaks in a distinctive third-person voice, constantly threatening his opponents",
      "Appoplexians have a cultural tradition of respecting those who can defeat them in combat",
      "Rath once humorously threatened to 'break a planet in half' - which he later actually did",
      "His catchphrase 'LEMME TELL YA SOMETHING...' became one of the most quoted lines in Ben 10",
      "Despite his rage, Rath has shown moments of surprising wisdom and loyalty"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/3/37/Rath_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/3/37/Rath_af_official.png",
    color: "#ff6600",
    gradient: "linear-gradient(135deg, #1a0a00, #ff6600)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 32,
    name: "Lodestar",
    species: "Biosovortian",
    homePlanet: "Unknown",
    abilities: [
      "Magnetism manipulation - can control and manipulate metal objects at will",
      "Can generate powerful magnetic fields for defense and offense",
      "Can attract or repel metallic objects with incredible force",
      "Can create magnetic shields that deflect metal projectiles",
      "Can manipulate the metallic components in enemy technology"
    ],
    weakness: "Completely useless against non-metallic opponents or in environments without metal. Strong opposing magnetic fields can disrupt his control. His powers weaken with distance from metallic objects. His magnetic abilities do not affect organic matter.",
    firstAppearance: "Ben 10: Alien Force (2008) - Episode 32: 'Simple'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Lodestar is a metallic, magnet-themed Biosovortian with a sleek silver body, a large magnet-like horn on his head, and glowing blue eyes. He possesses complete control over magnetic fields, allowing him to manipulate metal objects, create magnetic shields, and pull weapons from enemies' hands. Lodestar is Ben's specialist for dealing with metallic threats and mechanical opponents.",
    interestingFacts: [
      "Lodestar was one of the later aliens unlocked in Ben's Alien Force Omnitrix",
      "Biosovortians are a rare species with natural magnetic generation abilities",
      "His magnet horn can attract metal objects from miles away",
      "Lodestar can create magnetic fields strong enough to bend metal beams",
      "He was crucial in battles against mechanical enemies like the Techadons"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/9/9f/Lodestar_af_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/9/9f/Lodestar_af_official.png",
    color: "#8888aa",
    gradient: "linear-gradient(135deg, #111122, #8888aa)",
    universe: "Alien Force (2008–2010)",
    powerType: "beast"
  },
  {
    id: 33,
    name: "Water Hazard",
    species: "Orishan",
    homePlanet: "Unknown ocean world",
    abilities: [
      "Water manipulation - can control and shape water at will",
      "Can absorb water from the atmosphere and surroundings",
      "Pressurized water blasts powerful enough to cut steel",
      "Can create water shields and barriers",
      "Can survive underwater indefinitely"
    ],
    weakness: "Needs a source of water to be fully effective. His powers weaken in arid environments. Can be frozen by ice-based attacks. High-pressure blasts require concentration to aim accurately.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 22: 'The Purge'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Ballad of Mr. Baumann'",
    description: "Water Hazard is a crustacean-like Orishan with the ability to manipulate water in all its forms. He has a blue and silver armored body with a crab-like appearance and a tank on his back that stores pressurized water. Water Hazard can fire devastating high-pressure water jets, create defensive water barriers, and absorb moisture from the air.",
    interestingFacts: [
      "Water Hazard's species evolved on a planet completely covered in water",
      "The tank on his back stores water at pressures exceeding 50,000 PSI",
      "His water jets can cut through solid rock and metal",
      "Water Hazard was part of the 'Amalgam Kids' group in an alternate timeline",
      "His armor is made from crushed coral and minerals from his homeworld"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/d/df/Water_Hazard_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/d/df/Water_Hazard_ua_official.png",
    color: "#0066cc",
    gradient: "linear-gradient(135deg, #000a1a, #0066cc)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "fluid"
  },
  {
    id: 34,
    name: "AmpFibian",
    species: "Amperi",
    homePlanet: "Tesslos",
    abilities: [
      "Electricity manipulation - can generate and control massive electrical currents",
      "Intangibility - can phase through solid objects as pure energy",
      "Underwater breathing and high-speed swimming",
      "Can transform into living electricity to travel through power lines",
      "Electrokinetic flight and levitation"
    ],
    weakness: "Can be grounded by rubber or non-conductive materials. His energy form can be disrupted by strong magnetic fields. Water may conduct his electricity unpredictably. Prolonged intangibility drains his energy reserves.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 28: 'The Enemy of My Frenemy'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vengers'",
    description: "AmpFibian is a jellyfish-like Amperi with a translucent body, glowing blue energy patterns, and flowing tendrils that crackle with electricity. He can become intangible, phase through solid matter, and control immense amounts of electrical energy. AmpFibian is equally at home in water, air, or solid ground, making him one of the most versatile aliens in Ben's Ultimate Alien roster.",
    interestingFacts: [
      "AmpFibian was one of Ben's five 'original' aliens in the recalibrated Ultimatrix",
      "Amperis from Tesslos are born in the electrically charged oceans of their homeworld",
      "His intangibility works by converting his body into pure electrical energy",
      "AmpFibian can absorb electricity from external sources to grow stronger",
      "He was crucial in defeating the alien warlord known as 'The Aggregor'"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/0/07/Ampfibian_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/0/07/Ampfibian_ua_official.png",
    color: "#3366ff",
    gradient: "linear-gradient(135deg, #000a1a, #3366ff)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "beast"
  },
  {
    id: 35,
    name: "Armodrillo",
    species: "Talpaedan",
    homePlanet: "Terraexcava",
    abilities: [
      "Jackhammer arms - can drill through solid rock at incredible speeds",
      "Can create powerful seismic shockwaves and earthquakes",
      "Enhanced strength for heavy lifting and demolition",
      "Armored plating provides excellent defense",
      "Can tunnel underground at high speed"
    ],
    weakness: "Jointed armor can be penetrated at weak points. His seismic powers can cause collateral damage in populated areas. Water and mud can clog his drilling mechanisms. Slower movement speed compared to other aliens.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 21: 'Hero Time'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Armodrillo is a massive, mechanical-looking Talpaedan with powerful hydraulic jackhammer arms capable of drilling through solid rock and generating devastating seismic shockwaves. He resembles a bipedal armored mole with his entire body covered in dark gray and orange plating. Armodrillo is Ben's specialist for underground operations and demolition.",
    interestingFacts: [
      "Armodrillo was the first new alien Ben unlocked after the Omnitrix recalibrated into the Ultimatrix",
      "Talpaedans evolved on Terraexcava, a planet where natural disasters are a daily occurrence",
      "His jackhammer arms can strike 1000 times per minute",
      "Armodrillo's shockwaves can trigger controlled earthquakes visible from miles away",
      "He was one of the few aliens strong enough to fight against the Ultimatrix's evil copies"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/5/52/Armodrillo_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/5/52/Armodrillo_ua_official.png",
    color: "#ff8800",
    gradient: "linear-gradient(135deg, #1a0a00, #ff8800)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "beast"
  },
  {
    id: 36,
    name: "Terraspin",
    species: "Geochelone Aerio",
    homePlanet: "Unknown",
    abilities: [
      "Aerokinesis - can manipulate wind and create powerful gusts",
      "Can create tornadoes and hurricane-force winds",
      "Flight by spinning his shell and using wind propulsion",
      "Wind shields that deflect projectiles and energy attacks",
      "Immune to mana-based magic due to his species' natural resistance"
    ],
    weakness: "Slow movement despite flight capability. His shell can be cracked by powerful blunt force. His wind powers are less effective in enclosed spaces. Cannot create wind in a complete vacuum.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 31: 'The Ultimate Enemy: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Ballad of Mr. Baumann'",
    description: "Terraspin is a turtle-like Geochelone Aerio with the ability to manipulate wind and air currents. He spins inside his shell to generate massive tornadoes and hurricane-force winds. Terraspin is notably one of the few beings in the universe completely immune to magic, making him Ben's go-to alien for fighting magical threats.",
    interestingFacts: [
      "Terraspin is one of the few aliens immune to magic - he even resisted Dagon's possession",
      "His spinning shell can generate Category 5 hurricane-force winds",
      "Geochelone Aerios use their wind powers as their primary means of transportation",
      "Terraspin's species is herbivorous, feeding on airborne nutrients",
      "He was instrumental in defeating the magical entities known as the 'Esoterica'"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/e/ec/Terraspin_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/e/ec/Terraspin_ua_official.png",
    color: "#88ccff",
    gradient: "linear-gradient(135deg, #001a33, #88ccff)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "beast"
  },
  {
    id: 37,
    name: "NRG",
    species: "Prypiatosian-B",
    homePlanet: "Prypiatos",
    abilities: [
      "Extreme heat generation - can melt through solid metal",
      "Radiation emission - can emit deadly levels of radiation",
      "Can phase through his containment suit as pure energy",
      "Energy blasts of concentrated thermal power",
      "Can absorb heat from the environment to grow stronger"
    ],
    weakness: "Must wear a protective containment suit; without it, he emits lethal radiation that harms allies. His radiation can be contained by lead shielding. Water can absorb his heat and weaken his attacks. Cannot be used around civilians without risking their safety.",
    firstAppearance: "Ben 10: Ultimate Alien (2011) - Episode 42: 'The Night That Creatures Came'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "NRG is a being of pure nuclear energy contained within a heavily reinforced suit. His true form is a glowing, creature-like ball of green radioactive energy. Inside his containment suit, NRG is a massive, hulking figure. Outside of it, he becomes a blazing inferno of nuclear fire capable of melting anything nearby. NRG is Ben's most dangerous alien to use near allies.",
    interestingFacts: [
      "NRG's suit is made from a special alloy that can contain nuclear-level radiation",
      "In his true energy form, NRG can phase through walls and solid objects",
      "Prypiatosian-Bs evolved in the radioactive wastelands of Prypiatos",
      "NRG's radiation levels can cause severe illness in unprotected organics",
      "He was one of the few aliens who could damage the DNAliens' organic armor"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/a/a5/Nrg_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/a/a5/Nrg_ua_official.png",
    color: "#66ff00",
    gradient: "linear-gradient(135deg, #001a00, #66ff00)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "fire"
  },
  {
    id: 38,
    name: "Fasttrack",
    species: "Citrakayah",
    homePlanet: "Unknown",
    abilities: [
      "Superhuman speed - can run at velocities exceeding Mach speeds",
      "Enhanced reflexes allowing perception in bullet time",
      "Sharp claws on hands and feet for combat at high speed",
      "Can create powerful wind vortices by running in circles",
      "Able to run on vertical surfaces and across water"
    ],
    weakness: "Difficult to control on slick or unstable surfaces. His speed can cause collateral damage. Tires faster than other speed-type aliens. Momentum makes sharp turns difficult at maximum velocity.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 30: 'Hero Time'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Cat Fight'",
    description: "Fasttrack is a sleek, blue-furred Citrakayah with a feline-humanoid build, complete with cat-like ears, a tail, and clawed hands. His body is designed for pure speed, with aerodynamic contours and powerful leg muscles. Fasttrack is one of the fastest aliens in the Omnitrix, capable of running at incredible speeds and reacting to threats in what appears to be slow motion.",
    interestingFacts: [
      "Fasttrack was introduced in Ultimate Alien as a new speed-type alien alongside XLR8",
      "Citrakayahs are an extremely rare species with very little known about their homeworld",
      "His blue fur and white highlights give him a distinct hero-like appearance",
      "Fasttrack's claws can extend and retract for high-speed combat maneuvers",
      "He was part of Ben's team when facing the 'Faction' in the Ultimate Alien series"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/8/8e/Fasttrack_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/8/8e/Fasttrack_ua_official.png",
    color: "#0033cc",
    gradient: "linear-gradient(135deg, #000011, #0033cc)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "speed"
  },
  {
    id: 39,
    name: "Clockwork",
    species: "Chronosapien",
    homePlanet: "Unknown",
    abilities: [
      "Time manipulation - can slow, stop, or rewind time",
      "Age manipulation - can age or de-age targets",
      "Can generate time rays that affect temporal flow",
      "Clockwork body is made of living clockwork machinery",
      "Can open temporal portals and time travel"
    ],
    weakness: "His powers can be disrupted by other temporal beings. Overuse of time manipulation can cause temporal fatigue. His clockwork body can be jammed or damaged by physical force. Time paradoxes can render his powers ineffective.",
    firstAppearance: "Ben 10: Ultimate Alien (2011) - Episode 33: 'The Ultimate Enemy: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Clockwork is a mechanical Chronosapien with a body made entirely of intricate clockwork machinery. His head is a large clock face, and his chest houses a spinning gear mechanism. Clockwork possesses the incredible ability to manipulate time itself - slowing, stopping, or even reversing temporal flow within a localized area.",
    interestingFacts: [
      "Clockwork's species, the Chronosapiens, are among the most powerful beings in existence",
      "His 'time rays' can de-age targets to nothingness or age them to dust",
      "Clockwork was crucial in fixing the damage caused by the Chronosapien Time Bomb",
      "His internal gears must be perfectly synchronized to maintain his powers",
      "There is a 'Chronosapien Time Bomb' that can erase entire timelines from existence"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/1/18/Clockwork_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/1/18/Clockwork_ua_official.png",
    color: "#ccaa00",
    gradient: "linear-gradient(135deg, #1a1a00, #ccaa00)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "tech"
  },
  {
    id: 40,
    name: "ChamAlien",
    species: "Merlinisapien",
    homePlanet: "Unknown",
    abilities: [
      "Perfect invisibility - can become completely transparent at will",
      "Chameleonic camouflage - can blend into any background perfectly",
      "Energy blasts fired from a horn on his head",
      "Prehensile tail for grabbing and manipulation",
      "Can extend his tongue to capture distant objects"
    ],
    weakness: "His invisibility can be detected by thermal sensors and motion detectors. Making any sound gives away his position. His energy blasts require charging time. Limited durability in direct confrontations.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 26: 'The Enemy of My Frenemy'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Outbreak'",
    description: "ChamAlien is a reptilian Merlinisapien with the ability to turn completely invisible and blend into any environment. He has a green, chameleon-like body with a large horn on his head that fires energy blasts, a long prehensile tail, and independently moving eyes. ChamAlien is Ben's dedicated stealth specialist, capable of infiltrating any location undetected.",
    interestingFacts: [
      "ChamAlien was one of the five aliens unlocked in Ben's recalibrated Ultimatrix",
      "Merlinisapiens are named after the legendary wizard Merlin due to their 'magical' camouflage",
      "His invisibility is so perfect that even thermal imaging cannot detect him",
      "The horn on his head can fire concussive energy blasts that disorient enemies",
      "He was an essential asset in the infiltration of Aggregor's ship"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/b/ba/Chamalien_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/b/ba/Chamalien_ua_official.png",
    color: "#9933cc",
    gradient: "linear-gradient(135deg, #0a001a, #9933cc)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "beast"
  },
  {
    id: 41,
    name: "Eatle",
    species: "Oryctini",
    homePlanet: "Unknown",
    abilities: [
      "Can consume any matter and convert it into energy",
      "Horn on his head can fire energy beams fueled by consumed matter",
      "Enhanced strength proportional to how much he has eaten",
      "Armored exoskeleton provides natural protection",
      "Can drill through solid rock using his horn and mandibles"
    ],
    weakness: "His energy attacks consume stored matter; running out leaves him weak. Cannot consume intangible or energy-based matter. Overeating can slow him down. His armor has gaps at the joints that can be exploited.",
    firstAppearance: "Ben 10: Ultimate Alien (2010) - Episode 42: 'The Ultimate Sacrifice'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vengers'",
    description: "Eatle is a large, beetle-like Oryctini with a metallic blue exoskeleton, massive mandibles, and a powerful horn on his head. He can consume virtually any physical substance and convert it into energy that powers his strength and allows him to fire devastating energy beams from his horn. Eatle is essentially a living furnace - the more he eats, the more powerful he becomes.",
    interestingFacts: [
      "Eatle was originally designed as a darker counterpart to Upchuck in the Ultimate Alien series",
      "Oryctinis have a unique digestive system that converts matter into pure energy",
      "His horn glows with blue energy when charged from consumed matter",
      "Eatle can drill through solid steel using the combination of his horn and mandibles",
      "In Omniverse, Eatle received a complete redesign, becoming more insectoid in appearance"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/5/54/Eatle_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/5/54/Eatle_ua_official.png",
    color: "#cc6600",
    gradient: "linear-gradient(135deg, #1a0a00, #cc6600)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "beast"
  },
  {
    id: 42,
    name: "Juryrigg",
    species: "Planchaküle",
    homePlanet: "Unknown",
    abilities: [
      "Master engineer - can build advanced machines from scrap in seconds",
      "Can disassemble complex machinery instantly",
      "Enhanced intelligence specific to mechanical and electrical systems",
      "Small size allows infiltration into tight machine spaces",
      "Can pilot any vehicle or operate any control system intuitively"
    ],
    weakness: "Extremely hyperactive with a short attention span - gets bored easily. His creations are unstable and often fall apart. Physically weak and easily injured. His tinkering often makes things worse before better. Cannot create matter from nothing.",
    firstAppearance: "Ben 10: Ultimate Alien (2011) - Episode 35: 'Basic Training'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Outbreak'",
    description: "Juryrigg is a small, gremlin-like Planchaküle with mechanical goggles, sharp teeth, and an incredibly hyperactive personality. He has the innate ability to assemble, disassemble, and modify any mechanical or electronic device in seconds. Juryrigg speaks in rapid, broken English and is constantly moving, tinkering, and building contraptions that are as brilliant as they are unstable.",
    interestingFacts: [
      "Juryrigg can build a working spaceship engine from household appliances and scrap metal",
      "Planchaküles are natural mechanics who evolved on a junk planet of discarded technology",
      "His hyperactive nature makes it nearly impossible for him to stay still or focus for long",
      "Juryrigg's creations may look crude but are functionally brilliant",
      "He was originally discovered by Azmuth as a test species for the Omnitrix's adaptability"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/b/b3/Juryrigg_ua_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/b/b3/Juryrigg_ua_official.png",
    color: "#ff6600",
    gradient: "linear-gradient(135deg, #1a0a00, #ff6600)",
    universe: "Ultimate Alien (2010–2012)",
    powerType: "tech"
  },
  {
    id: 43,
    name: "Feedback",
    species: "Conductoid",
    homePlanet: "Teslavorr Nebula",
    abilities: [
      "Electricity absorption - can absorb any form of electrical energy",
      "Electric blasts - discharges stored electricity as powerful attacks",
      "Can control and manipulate nearby electrical systems",
      "Electrokinetic flight",
      "Plug-like tail can interface with power sources for maximum absorption"
    ],
    weakness: "Can be overloaded by absorbing too much electricity. Vulnerable to rubber and electrical insulators. Non-electrical enemies require him to use stored energy. His powers depend on an available electrical source nearby.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 1: 'The More Things Change: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Feedback is a sleek, black-and-green Conductoid from the Teslavorr Nebula with the ability to absorb, store, and redirect massive amounts of electricity. He has a distinctive plug-like tail that he uses to interface with power sources. Feedback was Ben's favorite alien during his early Omniverse adventures and one of the most visually striking aliens in the roster.",
    interestingFacts: [
      "Feedback was Ben's favorite alien during his childhood Omniverse adventures",
      "He was the alien Ben used when he first met his future partner, Rook Blonko",
      "Conductoids evolved in the electrically charged environment of the Teslavorr Nebula",
      "Feedback's tail can plug into any electrical outlet or generator for maximum power",
      "He absorbed enough energy to briefly fight Malware, a powerful technological enemy"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/7/7f/Feedback_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/7/7f/Feedback_ov_official.png",
    color: "#00ff66",
    gradient: "linear-gradient(135deg, #001a00, #00ff66)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 44,
    name: "Bloxx",
    species: "Segmentasapien",
    homePlanet: "Unknown",
    abilities: [
      "Body composed of living LEGO-like blocks that can be rearranged",
      "Can shape-shift into any structure - walls, bridges, cages, vehicles",
      "Enhanced strength in consolidated form",
      "Can rebuild himself after being shattered by reassembling blocks",
      "Can create construct weapons like hammers, shields, and battering rams"
    ],
    weakness: "His blocks can be scattered, requiring time to reassemble. Extreme heat can melt his plastic-like blocks. Strategic enemies can remove individual blocks to weaken his structure. Cannot create new blocks, only rearrange existing ones.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 9: 'So Long, and Thanks for All the Smoothies'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Bloxx is a massive, gorilla-like Segmentasapien made entirely of red and yellow living LEGO-style building blocks. He can reshape his body into any configuration - transforming from a gorilla into a wall, bridge, or even a battle vehicle. Bloxx is Ben's construction and defense specialist, capable of creating massive structures on the fly.",
    interestingFacts: [
      "Bloxx was the first new alien Ben unlocked in the Omniverse series",
      "Segmentasapiens are made up of individual blocks that each have a limited consciousness",
      "His blocks can separate to dodge attacks and then reassemble",
      "Bloxx can create weapons like hammers and maces from his own body mass",
      "He is often used for creating emergency shelters and defensive barriers"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/a/a5/Bloxx_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/a/a5/Bloxx_ov_official.png",
    color: "#cc0000",
    gradient: "linear-gradient(135deg, #1a0000, #cc0000)",
    universe: "Omniverse (2012–2014)",
    powerType: "crystal"
  },
  {
    id: 45,
    name: "Gravattack",
    species: "Galilean",
    homePlanet: "Unknown",
    abilities: [
      "Gravity manipulation - can increase, decrease, and reverse gravity",
      "Can create localized gravity wells to trap enemies",
      "Flight through self-generated gravitational fields",
      "Can create miniature black holes as an ultimate attack",
      "Can levitate and hurl objects by altering their gravity"
    ],
    weakness: "Creating a black hole drains his energy significantly. His powers disrupt nearby electronics and can cause unintended collateral damage. Cannot affect the gravity of some ultra-dense materials. Overuse of gravity powers disorients him.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 19: 'Special Delivery'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Gravattack is a massive, rotating Galilean who resembles a living planetoid with a rocky, cratered body and a ring system orbiting his middle. He possesses the immense power to manipulate gravity, able to crush enemies, create black holes, reverse gravitational fields, or float objects with a thought. Gravattack is a walking celestial body with the power to rewrite the physics of his surroundings.",
    interestingFacts: [
      "Gravattack is essentially a living planet with limited sentience",
      "Galileans are born from the core of dying planets and achieve consciousness over millennia",
      "The ring around his body is composed of solidified cosmic debris",
      "Gravattack can create gravity so intense that it bends light around him",
      "He was one of the most powerful aliens Ben used against the Incursean invasion"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/b/bd/Gravattack_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/b/bd/Gravattack_ov_official.png",
    color: "#66ccff",
    gradient: "linear-gradient(135deg, #001a33, #66ccff)",
    universe: "Omniverse (2012–2014)",
    powerType: "cosmic"
  },
  {
    id: 46,
    name: "Crashhopper",
    species: "Orthopterran",
    homePlanet: "Unknown",
    abilities: [
      "Superhuman jumping ability - can leap miles in a single bound",
      "Reinforced exoskeleton legs for absorbing high-impact landings",
      "Can use his body as a projectile, crashing into enemies at high speed",
      "Enhanced leg strength proportional to his jumping power",
      "Can create shockwaves upon landing"
    ],
    weakness: "Difficult to control mid-air trajectory. Predictable attack patterns - he must land between jumps. Vulnerable while airborne to ranged attacks. Sticky substances can trap his legs and prevent jumping.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 21: 'Tummy Trouble'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vengers'",
    description: "Crashhopper is a grasshopper-like Orthopterran with powerful reinforced legs, a green exoskeleton, and large compound eyes. He attacks by launching himself at enemies with incredible force, using his entire body as a living projectile. Crashhopper's fighting style is pure kinetic energy - he bounces, ricochets, and crashes through battlefields with reckless abandon.",
    interestingFacts: [
      "Crashhopper can jump high enough to reach low orbit on some planets",
      "Orthopterrans have legs that can withstand impact forces of several tons",
      "His species evolved on a high-gravity planet where jumping was the primary means of travel",
      "Crashhopper can control his trajectory mid-air using his wings as stabilizers",
      "He has a cocky, confident personality that matches his high-impact fighting style"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/f/f6/Crashhopper_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/f/f6/Crashhopper_ov_official.png",
    color: "#66ff33",
    gradient: "linear-gradient(135deg, #001a00, #66ff33)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 47,
    name: "Ball Weevil",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Can generate and roll large balls of sticky, explosive plasma",
      "Can control the size of his plasma balls up to massive proportions",
      "Plasma balls become more explosive the larger they grow",
      "Can throw plasma balls as rolling or bouncing projectiles",
      "Can use smaller plasma balls as traps or sticky obstacles"
    ],
    weakness: "His plasma balls can detonate prematurely if struck too hard. Cannot generate plasma without consuming energy matter first. Large plasma balls are slow to create and hard to control. Explosions can harm Ben if too close.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 20: 'Ben Again'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Something Zombozo This Way Comes'",
    description: "Ball Weevil is a small, insect-like alien resembling a beetle with a long proboscis and antennae. His main ability is generating sticky, glowing plasma spheres that roll along surfaces and grow larger as they absorb more of his energy. The bigger the ball gets, the more explosive it becomes, making Ball Weevil a patient but devastating area-denial fighter.",
    interestingFacts: [
      "Ball Weevil's species classification remains unknown even to Azmuth",
      "His plasma balls have a slightly sticky surface that picks up debris as they roll",
      "The plasma he generates is bright neon green and glows intensely",
      "Ball Weevil can create multiple smaller balls for tactical traps",
      "He was discovered by Ben in an alternate dimension during the Omniverse series"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/b/be/Ball_weevil_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/b/be/Ball_weevil_ov_official.png",
    color: "#66ff00",
    gradient: "linear-gradient(135deg, #001a00, #66ff00)",
    universe: "Omniverse (2012–2014)",
    powerType: "fluid"
  },
  {
    id: 48,
    name: "Walkatrout",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Extremely slippery skin - nearly impossible to grab or hold",
      "Can breathe underwater with functional gills",
      "Enhanced swimming speed in aquatic environments",
      "Can survive briefly out of water due to tough scales",
      "Small size allows escape through tiny gaps and crevices"
    ],
    weakness: "Universally considered the weakest alien in the Omnitrix. No offensive capabilities whatsoever. Cannot survive out of water for extended periods. Pathetically weak physically - can be defeated by a single strong opponent with ease. Completely useless in most combat situations.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 40: 'A Jolt from the Blue'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Walkatrout is a small, fish-like alien with pale blue skin, a permanent frown, and tiny fins that allow him to awkwardly 'walk' on land. He is widely considered the most useless alien in Ben's entire roster, possessing no combat abilities, no special powers, and barely any mobility on land. His only real asset is his incredibly slippery skin, which makes him hard to hold onto.",
    interestingFacts: [
      "Walkatrout is often ranked as the absolute worst alien in the Omnitrix",
      "His species is so unremarkable that even Azmuth does not remember adding it to the Omnitrix",
      "Walkatrout's 'walking' is a pathetic belly-crawl with his tiny fins",
      "He has literally zero combat applications and is only useful for escaping capture",
      "Despite his weakness, Walkatrout has a surprisingly resilient ego"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/a/ab/Walkatrout_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/a/ab/Walkatrout_ov_official.png",
    color: "#3399ff",
    gradient: "linear-gradient(135deg, #000a1a, #3399ff)",
    universe: "Omniverse (2012–2014)",
    powerType: "fluid"
  },
  {
    id: 49,
    name: "Pesky Dust",
    species: "Nemuina",
    homePlanet: "Unknown",
    abilities: [
      "Dream manipulation - can enter and control anyone's dreams",
      "Can induce instant sleep in targets by releasing dream dust",
      "Flight via delicate, butterfly-like wings",
      "Can create dream-based illusions that feel completely real",
      "Can extract information from sleeping minds through dream interrogation"
    ],
    weakness: "Completely physically frail - one solid hit can incapacitate her. Dream powers are useless against beings that do not sleep or dream. Her dust can be dispersed by wind or fans. Cannot affect targets with no subconscious mind.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 23: 'Night of the Living Nightmare'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Vampire Strikes Back'",
    description: "Pesky Dust is a tiny, fairy-like Nemuina with shimmering lavender wings, a small butterfly-like body, and the ability to release a sparkling dust that induces sleep and allows her to enter and manipulate dreams. She is Ben's psychological warfare specialist, capable of incapacitating enemies by trapping them in dream worlds or extracting information from their sleeping minds.",
    interestingFacts: [
      "Pesky Dust is one of the few explicitly female-coded aliens in the Omnitrix",
      "Nemuinas feed on the dream energy of sleeping beings",
      "She can create both pleasant dreams and terrifying nightmares at will",
      "Pesky Dust's dream powers are considered a form of psychic manipulation",
      "Her species was originally encountered by Azmuth on a long-forgotten research expedition"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/e/ea/Pesky_dust_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/e/ea/Pesky_dust_ov_official.png",
    color: "#ff66cc",
    gradient: "linear-gradient(135deg, #1a0033, #ff66cc)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 50,
    name: "Mole-Stache",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Mustache manipulation - his handlebar mustache can extend and move like limbs",
      "Mustache can grab objects, restrain enemies, and act as whips",
      "Enhanced digging ability using his mustache as drills",
      "Mustache can form protective shields and barriers",
      "Can use mustache hairs as projectile weapons"
    ],
    weakness: "His mustache powers are considered ridiculous and are often not taken seriously. Mustache can be cut or singed, temporarily disabling his abilities. Lacks significant physical strength beyond his mustache. His digging is slow compared to dedicated tunneling aliens.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 33: 'Mole-Stache'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Something Zombozo This Way Comes'",
    description: "Mole-Stache is a bizarre, mole-like alien with a massive, magnificent handlebar mustache that he can manipulate telekinetically as an extension of his body. He resembles a bipedal mole with brown fur, dark goggles, and his trademark enormous mustache. Mole-Stache uses his mustache for everything - grabbing enemies, digging tunnels, forming shields, and even attacking from a distance.",
    interestingFacts: [
      "Mole-Stache's mustache is fully prehensile and can lift objects many times his own weight",
      "His species is completely unknown, even the Omnitrix has no record of his homeworld",
      "Mole-Stache speaks with a thick, exaggerated accent and loves the word 'magnificent'",
      "His mustache hairs can be shot like needles at opponents",
      "Despite his silly appearance, Mole-Stache has saved the day multiple times with his mustache skills"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/7/70/Mole-Stache_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/7/70/Mole-Stache_official.png",
    color: "#8B4513",
    gradient: "linear-gradient(135deg, #1a0a00, #8B4513)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 51,
    name: "The Worst",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Complete invulnerability - cannot be harmed by any physical attack",
      "Resistant to extreme temperatures, pressure, and energy attacks",
      "Can survive impacts that would destroy entire planets",
      "Bouncy, rubbery body absorbs and redirects kinetic energy",
      "Indestructible skin cannot be cut, pierced, or burned"
    ],
    weakness: "Possesses zero offensive capabilities - cannot attack at all. Extremely weak strength output despite being indestructible. Useless in any combat scenario. Can still be restrained, trapped, or imprisoned despite being unharmed. Often considered even worse than Walkatrout in practical terms.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 72: 'The Most Dangerous Game Show'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "The Worst is a small, pudgy, orange alien with stubby limbs and a perpetually annoyed expression. His only power is being completely and utterly indestructible - no attack, no matter how powerful, can harm him. However, this comes at the cost of having absolutely no offensive abilities, making him one of the most frustrating aliens to use in a fight.",
    interestingFacts: [
      "The Worst lives up to his name - he is indestructible but completely useless in combat",
      "His species has no known designation and very little is known about them",
      "The Worst feels no pain despite being fully conscious when attacked",
      "He can survive in lava, the vacuum of space, and inside a black hole without injury",
      "Despite his durability, The Worst has a surprisingly whiny and complaining personality"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/e/e0/The_worst_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/e/e0/The_worst_ov_official.png",
    color: "#ffcc00",
    gradient: "linear-gradient(135deg, #1a1a00, #ffcc00)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 52,
    name: "Kickin Hawk",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Master martial artist specializing in powerful kick attacks",
      "Enhanced leg strength for devastating roundhouse and drop kicks",
      "Sharp talons on feet for slashing during kicks",
      "Enhanced agility and balance for acrobatic combat",
      "Feathers can be launched as sharp projectiles"
    ],
    weakness: "Primarily a close-range combatant with no ranged attacks beyond his feathers. His fighting style relies on mobility; if his legs are trapped, he is nearly helpless. Overconfidence often leads to reckless attacks. His large wingspan makes him an easier target in tight spaces.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 63: 'The Vengers'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Kickin Hawk is a tall, anthropomorphic rooster-like alien with red feathers, a yellow beak, a red comb on his head, and powerful legs ending in sharp talons. He is a master of kicking-based martial arts, using his incredible leg strength and natural agility to deliver devastating kicks from any angle. Kickin Hawk is Ben's dedicated close-quarters combat specialist in the Omniverse roster.",
    interestingFacts: [
      "Kickin Hawk's species is unknown, but he resembles an evolved avian from an Earth-like planet",
      "He is a master of a martial art style called 'Hawk Fu' that focuses entirely on kicks",
      "Kickin Hawk's talons can extend to deliver slashing kicks",
      "He has a cocky, boastful personality that matches his fighting style",
      "Kickin Hawk was part of a superhero team parody called 'The Vengers'"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/4/4b/Kicken_Hawk_Omniverse_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/4/4b/Kicken_Hawk_Omniverse_official.png",
    color: "#cc6600",
    gradient: "linear-gradient(135deg, #1a0a00, #cc6600)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 53,
    name: "Toepick",
    species: "Atrocian",
    homePlanet: "Atrocia 0",
    abilities: [
      "Grotesque face that induces paralyzing fear in anyone who sees it",
      "Can make enemies faint, flee, or become completely paralyzed",
      "Chemical-based fear generation from specialized glands",
      "Enhanced durability and resistance to damage",
      "Can control the intensity of his fear-inducing effects"
    ],
    weakness: "Fear powers are useless against blind opponents or those without eyes. His abilities can be resisted by beings with strong willpower or no concept of fear. Limited combat capability beyond his fear factor. His face can be covered to neutralize the effect.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 52: 'Something Zombozo This Way Comes'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Toepick is a horrifying Atrocian whose face is so grotesque and terrifying that it can induce madness, paralysis, and unconsciousness in anyone who gazes upon it. Ben keeps Toepick's face covered with a metal muzzle, only revealing it when absolutely necessary. Toepick is considered one of the most disturbing and dangerous aliens in the Omnitrix.",
    interestingFacts: [
      "Toepick's face is so terrifying that even Ben is afraid to look at it",
      "His species, Atrocians, evolved on an abandoned prison planet",
      "The muzzle on his face is necessary to prevent accidental fear exposure",
      "Toepick's true face is never fully shown on screen, only its effects",
      "He was created by combining DNA samples from five different alien species"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/0/0d/Toepick_art.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/0/0d/Toepick_art.png",
    color: "#884400",
    gradient: "linear-gradient(135deg, #1a0a00, #884400)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 54,
    name: "Astrodactyl",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Supersonic flight with powerful pterosaur-like wings",
      "Energy whips - can generate glowing green energy tendrils from his wings",
      "Can fire energy projectiles from his whip constructs",
      "Enhanced vision and targeting from a distance",
      "Can create energy constructs shaped like weapons"
    ],
    weakness: "His energy whips drain stamina with extended use. Wings can be damaged, temporarily grounding him. Energy constructs are unstable if overcharged. Less effective in enclosed environments where he cannot fly freely.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 103: 'An American Benwolf in London'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'Weapon XI: Part 2'",
    description: "Astrodactyl is a pterosaur-like alien with a green and yellow body, a long beak, membranous wings, and a long tail. He generates powerful energy whips from his wings that he uses both as weapons and for propulsion. Astrodactyl combines the classic pterosaur aesthetic with cosmic energy manipulation, making him one of the more visually striking flying aliens in Ben's collection.",
    interestingFacts: [
      "Astrodactyl's species classification is unknown, even to the Omnitrix's database",
      "The energy whips he generates can extend up to 100 feet in length",
      "Astrodactyl can use his energy whips to swing from buildings like grappling hooks",
      "He was introduced later in Omniverse as a replacement-style flying alien",
      "Astrodactyl's wings produce a faint glow when he generates energy constructs"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/8/8d/Astrodactyl_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/8/8d/Astrodactyl_ov_official.png",
    color: "#66cc00",
    gradient: "linear-gradient(135deg, #001a00, #66cc00)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 55,
    name: "Bullfrag",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Superhuman jumping ability from powerful frog-like legs",
      "Prehensile tongue that can grab objects from great distances",
      "Can secrete a slippery mucus that makes him hard to hold",
      "Enhanced swimming speed in water",
      "Expandable throat pouch for intimidation and vocal amplification"
    ],
    weakness: "His skin requires constant moisture; dehydration weakens him significantly. His tongue is vulnerable to being cut or grabbed. Predictable leaping patterns in combat. Limited offensive power beyond his physical abilities.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 99: 'The Frogs of War: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'The Frogs of War: Part 3'",
    description: "Bullfrag is a tall, muscular frog-like alien with green skin, a yellow underbelly, and a smooth, amphibian appearance. He has incredibly powerful legs for leaping great distances, a long sticky tongue for grabbing objects, and the ability to secrete slippery mucus. Bullfrag was specifically used by Ben to infiltrate the Incursean Empire by posing as one of their kind.",
    interestingFacts: [
      "Bullfrag was specifically used to infiltrate the Incursean Empire by disguising himself as an Incursean soldier",
      "His species is amphibious and requires regular hydration to maintain peak condition",
      "Bullfrag's tongue can extend several times his body length",
      "He was welcomed by the Incurseans who mistook him for a mutant member of their species",
      "Bullfrag's expandable throat pouch can amplify his voice to deafening levels"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/2/26/Bullfrag_OV_4.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/2/26/Bullfrag_OV_4.png",
    color: "#00cc44",
    gradient: "linear-gradient(135deg, #001a00, #00cc44)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 56,
    name: "Atomix",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Nuclear energy manipulation - can generate and control atomic power",
      "Can fire devastating nuclear energy blasts from his hands",
      "Flight via nuclear propulsion",
      "Can generate a nuclear force field for defense",
      "Can create miniature nuclear explosions at will"
    ],
    weakness: "His nuclear powers cause massive collateral damage and endanger civilians. Cannot be used in populated areas without extreme caution. His heavy armor makes him slower than other heavy hitters. Radiation output can harm allies if they are too close.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 106: 'Weapon XI: Part 1'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Atomix is a massive, nuclear-powered alien covered in thick green and white armor resembling a nuclear reactor. His head glows with atomic energy visible through a glass dome, and his entire body radiates immense power. Atomix is one of the physically strongest and most destructive aliens in the Omnitrix, capable of generating nuclear explosions and atomic energy blasts that can level mountains.",
    interestingFacts: [
      "Atomix is considered one of the most powerful aliens in the entire Omnitrix",
      "His species and homeworld remain classified even within the Omnitrix's database",
      "Atomix's armor is designed to contain his nuclear energy, similar to NRG's suit",
      "He was used as a last resort against the Weapon XI threat in Omniverse",
      "Atomix's power output rivals that of Alien X in terms of raw destructive capability"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/c/c5/OmniverseAtomix.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/c/c5/OmniverseAtomix.png",
    color: "#ff3300",
    gradient: "linear-gradient(135deg, #1a0000, #ff3300)",
    universe: "Omniverse (2012–2014)",
    powerType: "fire"
  },
  {
    id: 57,
    name: "Gutrot",
    species: "Unknown",
    homePlanet: "Unknown",
    abilities: [
      "Chemical generation - can produce any known gas from his body",
      "Can create clouds of sleeping gas, tear gas, or knockout agents",
      "Can generate corrosive gas that dissolves materials",
      "Can create breathable atmospheres in oxygen-deprived environments",
      "Can generate pheromones to confuse, calm, or repel enemies"
    ],
    weakness: "His gases can be dispersed by wind or ventilation. Cannot generate gases in a vacuum. Some gases can affect allies if wind direction changes. Overuse of chemical generation causes dizziness. His body has no physical combat capabilities.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 78: 'The Vampire Strikes Back'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Gutrot is a tall, slender alien with a pale green body, a large cylindrical head, and a tank-like stomach area. He has the remarkable ability to synthesize and release any known chemical compound as a gas from his body. Gutrot is Ben's chemical warfare specialist, capable of creating everything from sleeping gas to corrosive fumes to breathable oxygen.",
    interestingFacts: [
      "Gutrot can create any gas that exists in the known universe from his chemical stomach",
      "His species is one of the most chemically complex organisms ever catalogued by Azmuth",
      "Gutrot can combine multiple gases for compound effects",
      "He was instrumental in defeating the Vladats by creating gases that countered their abilities",
      "Gutrot's internal chemistry lab can analyze and replicate any gaseous compound on contact"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/e/eb/Gutrot_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/e/eb/Gutrot_official.png",
    color: "#88cc00",
    gradient: "linear-gradient(135deg, #1a1a00, #88cc00)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  },
  {
    id: 58,
    name: "Whampire",
    species: "Vladat",
    homePlanet: "Anur Vladlas",
    abilities: [
      "Hypnosis - can control the minds of others through eye contact",
      "Flight via large bat-like wings",
      "Can drain life force or energy from living beings",
      "Can transform into a swarm of bats for dispersal and evasion",
      "Enhanced strength, speed, and senses in darkness"
    ],
    weakness: "Extremely vulnerable to sunlight which can incapacitate or kill him. Direct sunlight causes immediate pain and weakness. Highly vulnerable to garlic and other traditional vampire repellents. His hypnosis requires direct eye contact to work. Holy symbols and crosses repel him.",
    firstAppearance: "Ben 10: Omniverse (2012) - Episode 78: 'The Vampire Strikes Back'",
    lastAppearance: "Ben 10: Omniverse (2014) - Episode: 'A New Dawn'",
    description: "Whampire is a bat-like Vladat with pale grey skin, large membranous wings, sharp fangs, and glowing red eyes. He possesses all the classic vampire powers - flight, hypnosis, life-force draining, and bat transformation. Whampire is Ben's first and only true vampire alien, with all the strengths and classic weaknesses that come with being a creature of the night.",
    interestingFacts: [
      "Whampire is the only Vladat in the Omnitrix and one of the most dangerous species catalogued",
      "Vladats come from Anur Vladlas, a planet in the Anur system with a permanent dark side",
      "His hypnosis is powerful enough to control multiple minds at once",
      "Whampire's weaknesses include sunlight, garlic, and holy symbols - classic vampire traits",
      "He was the final alien unlocked in the original Ben 10: Omniverse series"
    ],
    image: "https://static.wikia.nocookie.net/ben10/images/5/53/Whampire_ov_official.png",
    cardImage: "https://static.wikia.nocookie.net/ben10/images/5/53/Whampire_ov_official.png",
    color: "#660033",
    gradient: "linear-gradient(135deg, #1a000a, #660033)",
    universe: "Omniverse (2012–2014)",
    powerType: "beast"
  }
];


