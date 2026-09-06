const conceptQuestions = [
  {
    kind:"Biodiversidad",
    q:"En un bosque viven muchas especies diferentes de árboles, aves, insectos, mamíferos y hongos. ¿Qué concepto describe esa variedad de seres vivos?",
    correct:"Biodiversidad",
    wrong:["Población","Nicho","Energía"],
    explain:"Biodiversidad significa variedad de seres vivos. Si hay muchas especies distintas de plantas, animales y otros organismos, hay gran biodiversidad.",
    clue:"Pista: piensa en la palabra variedad."
  },
  {
    kind:"Costa Rica",
    q:"Costa Rica se encuentra en una zona donde recibe mucha luz solar y tiene condiciones tropicales. ¿Cómo ayuda esto a la biodiversidad?",
    correct:"Favorece muchos ambientes y formas de vida",
    wrong:["Hace que solo viva una especie","Impide que crezcan plantas","Elimina los ecosistemas"],
    explain:"La ubicación tropical de Costa Rica ayuda a crear condiciones de temperatura y humedad donde pueden vivir muchas especies.",
    clue:"Pista: más condiciones favorables pueden permitir más formas de vida."
  },
  {
    kind:"Relieve y biodiversidad",
    q:"En un país hay montañas altas, volcanes, valles y llanuras. ¿Por qué esa variedad de relieve puede aumentar la biodiversidad?",
    correct:"Crea distintos hábitats y microclimas",
    wrong:["Hace que todos los lugares sean iguales","Evita que existan animales","Hace desaparecer el agua"],
    explain:"Las diferentes alturas y formas del terreno producen condiciones distintas de temperatura, humedad y vegetación. Eso crea muchos hábitats.",
    clue:"Pista: diferentes alturas = diferentes lugares para vivir."
  },
  {
    kind:"Individuo",
    q:"En una fotografía aparece solamente un jaguar. ¿Qué nivel de organización representa?",
    correct:"Individuo",
    wrong:["Población","Ecosistema","Hábitat"],
    explain:"Un individuo es un solo ser vivo u organismo.",
    clue:"Pista: uno solo."
  },
  {
    kind:"Población",
    q:"En una playa viven 40 cangrejos de la misma especie. ¿Qué forman juntos?",
    correct:"Población",
    wrong:["Individuo","Nicho","Energía"],
    explain:"Una población es un grupo de individuos de la misma especie que vive en un área.",
    clue:"Pista: muchos de la misma especie."
  },
  {
    kind:"Hábitat",
    q:"Una rana vive en una charca rodeada de plantas y agua. La charca es su...",
    correct:"Hábitat",
    wrong:["Nicho","Población","Individuo"],
    explain:"El hábitat es el lugar físico donde vive y se desarrolla un organismo.",
    clue:"Pista: hábitat responde a ¿dónde vive?"
  },
  {
    kind:"Nicho",
    q:"Una abeja visita flores y ayuda a transportar polen. Esa función que cumple en el ambiente corresponde a su...",
    correct:"Nicho",
    wrong:["Hábitat","Población","Individuo"],
    explain:"El nicho es la función o papel que cumple un ser vivo dentro de su hábitat.",
    clue:"Pista: nicho responde a ¿qué función cumple?"
  },
  {
    kind:"Ecosistema",
    q:"En una laguna interactúan peces, plantas, insectos, agua, suelo, luz y temperatura. Todo ese conjunto forma un...",
    correct:"Ecosistema",
    wrong:["Individuo","Nicho","Población"],
    explain:"Un ecosistema incluye a los seres vivos y también los componentes no vivos del ambiente, además de sus interacciones.",
    clue:"Pista: seres vivos + elementos no vivos."
  },
  {
    kind:"Energía potencial",
    q:"Una pelota está quieta en la parte alta de una rampa. ¿Qué energía tiene almacenada por su posición?",
    correct:"Energía potencial",
    wrong:["Energía cinética","Energía eólica","Energía sonora"],
    explain:"La energía potencial es energía almacenada debido a la posición de un objeto. Cuanto más alto está, puede tener más energía potencial gravitatoria.",
    clue:"Pista: está quieta, pero está en una posición desde donde puede caer."
  },
  {
    kind:"Energía cinética",
    q:"La pelota empieza a bajar rápidamente por la rampa. ¿Qué energía se manifiesta ahora por estar en movimiento?",
    correct:"Energía cinética",
    wrong:["Energía potencial","Energía eólica","Energía química"],
    explain:"La energía cinética es la energía que tiene un objeto por estar en movimiento.",
    clue:"Pista: cinética = movimiento."
  },
  {
    kind:"Transformación de energía",
    q:"Un carrito de montaña rusa está en lo alto y luego baja a gran velocidad. ¿Qué transformación ocurre principalmente?",
    correct:"De energía potencial a energía cinética",
    wrong:["De energía cinética a solar","De energía eólica a potencial","De energía sonora a química"],
    explain:"En lo alto el carrito tiene mucha energía potencial. Al bajar y moverse rápido, esa energía se transforma principalmente en energía cinética.",
    clue:"Pista: arriba = potencial; moviéndose = cinética."
  },
  {
    kind:"Energía eólica",
    q:"Un molino gira porque el viento empuja sus aspas. ¿Qué tipo de energía está aprovechando?",
    correct:"Energía eólica",
    wrong:["Energía potencial","Energía química","Energía nuclear"],
    explain:"La energía eólica es la energía asociada al viento y las corrientes de aire.",
    clue:"Pista: eólica = viento."
  },
  {
    kind:"Amenaza a la biodiversidad",
    q:"Una persona captura monos silvestres para venderlos como mascotas. ¿Qué amenaza representa?",
    correct:"Tráfico ilegal de fauna",
    wrong:["Reforestación","Protección de especies","Ecoturismo responsable"],
    explain:"Capturar y vender animales silvestres fuera de la ley es tráfico ilegal de fauna y perjudica a las poblaciones naturales.",
    clue:"Pista: se captura un animal silvestre para venderlo."
  },
  {
    kind:"Amenaza a la biodiversidad",
    q:"Un agricultor quema vegetación seca cerca de un bosque y el fuego puede extenderse. ¿Qué riesgo produce esta práctica?",
    correct:"Incendios que dañan hábitats y especies",
    wrong:["Aumento de biodiversidad","Creación de nuevos ríos","Protección del bosque"],
    explain:"Las quemas pueden convertirse en incendios y destruir plantas, animales y hábitats completos.",
    clue:"Pista: el fuego puede extenderse al bosque."
  },
  {
    kind:"Mamíferos",
    q:"Un animal desarrolla a su cría dentro del vientre de la madre y después del nacimiento la alimenta con leche. ¿A qué grupo pertenece?",
    correct:"Mamíferos",
    wrong:["Peces","Insectos","Moluscos"],
    explain:"Una característica de los mamíferos es que las crías reciben leche materna. Muchos también se desarrollan dentro del cuerpo de la madre.",
    clue:"Pista: leche materna."
  },
  {
    kind:"Beneficio de la biodiversidad",
    q:"Personas de otros países visitan Costa Rica para conocer bosques, aves, tortugas y otros animales. ¿Qué beneficio puede producir la biodiversidad?",
    correct:"Favorece el turismo de naturaleza",
    wrong:["Reduce todos los empleos","Hace desaparecer las áreas protegidas","Evita la investigación científica"],
    explain:"La biodiversidad puede atraer visitantes interesados en la naturaleza y apoyar actividades como el ecoturismo.",
    clue:"Pista: visitantes que vienen a observar naturaleza."
  }
];
