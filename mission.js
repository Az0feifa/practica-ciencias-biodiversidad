const missionQuestions = [
  {
    kind:"Respiración animal",
    q:"Un pez obtiene oxígeno del agua. ¿Qué estructura utiliza principalmente para respirar?",
    correct:"Branquias",
    wrong:["Pulmones","Tráqueas","Raíces"],
    explain:"Los peces usan branquias para obtener oxígeno disuelto en el agua.",
    clue:"Pista: pez + agua = branquias."
  },
  {
    kind:"Respiración animal",
    q:"Un delfín sube a la superficie para tomar aire. ¿Qué órgano utiliza para respirar?",
    correct:"Pulmones",
    wrong:["Branquias","Tráqueas","Raíces"],
    explain:"Aunque vive en el agua, el delfín es un mamífero y respira aire con pulmones.",
    clue:"Pista: el delfín necesita subir a tomar aire."
  },
  {
    kind:"Respiración animal",
    q:"Un perro toma aire por la nariz y lo lleva a órganos dentro de su pecho. ¿Qué utiliza para respirar?",
    correct:"Pulmones",
    wrong:["Branquias","Tráqueas de insecto","Piel solamente"],
    explain:"Los perros son mamíferos y realizan la respiración mediante pulmones.",
    clue:"Pista: los mamíferos como perros y delfines tienen pulmones."
  },
  {
    kind:"Respiración animal",
    q:"Una mariposa es un insecto. ¿Qué sistema utiliza para llevar aire directamente a sus tejidos?",
    correct:"Tráqueas",
    wrong:["Branquias","Pulmones","Aletas"],
    explain:"Los insectos respiran mediante un sistema de tubos llamados tráqueas.",
    clue:"Pista: insectos = tráqueas."
  },
  {
    kind:"Respiración animal",
    q:"Una rana puede intercambiar gases a través de su superficie húmeda. ¿Qué parte del cuerpo participa en esta respiración?",
    correct:"La piel",
    wrong:["Las escamas","El pelo","Las plumas"],
    explain:"Los anfibios como la rana pueden realizar respiración cutánea, es decir, intercambio de gases a través de la piel húmeda.",
    clue:"Pista: cutánea significa a través de la piel."
  },
  {
    kind:"Adaptación",
    q:"¿Por qué las branquias se consideran una adaptación de muchos animales acuáticos?",
    correct:"Les permiten obtener oxígeno del agua",
    wrong:["Les permiten producir luz solar","Les permiten fabricar alimento","Les permiten vivir sin oxígeno"],
    explain:"Una adaptación es una característica que ayuda a un ser vivo a cumplir funciones vitales y sobrevivir en su ambiente.",
    clue:"Pista: piensa qué necesita un pez para respirar bajo el agua."
  },
  {
    kind:"Energía mecánica",
    q:"Una pelota permanece sobre una mesa y luego cae. ¿Qué ocurre con su energía durante la caída?",
    correct:"La potencial disminuye y la cinética aumenta",
    wrong:["La cinética desaparece por completo","Solo existe energía eólica","La energía potencial aumenta mientras cae"],
    explain:"Antes de caer tiene energía potencial por su altura. Al caer, empieza a moverse y parte de esa energía se transforma en cinética.",
    clue:"Pista: altura = potencial; movimiento = cinética."
  },
  {
    kind:"Energía en la naturaleza",
    q:"Las hojas de un árbol se mueven por una corriente de aire. ¿Qué energía se observa?",
    correct:"Energía eólica",
    wrong:["Energía potencial","Energía nuclear","Energía química"],
    explain:"El viento y las corrientes de aire manifiestan energía eólica.",
    clue:"Pista: si hay viento, piensa en eólica."
  },
  {
    kind:"Energía en la naturaleza",
    q:"El Sol calienta una roca durante el día. ¿Qué fuente de energía está actuando?",
    correct:"Energía solar",
    wrong:["Energía eólica","Energía potencial","Energía muscular"],
    explain:"La energía que proviene del Sol se denomina energía solar.",
    clue:"Pista: Sol = solar."
  },
  {
    kind:"Costa Rica biodiversa",
    q:"Dos regiones del país están a alturas diferentes y por eso tienen distinta temperatura y vegetación. ¿Qué factor ayuda a explicar esa diferencia?",
    correct:"El relieve",
    wrong:["Que todos los lugares son iguales","La ausencia de montañas","La falta de ecosistemas"],
    explain:"El relieve incluye montañas, cordilleras, volcanes, valles y llanuras. Las distintas alturas crean condiciones ambientales diferentes.",
    clue:"Pista: la pregunta habla de alturas."
  },
  {
    kind:"Costa Rica biodiversa",
    q:"¿Cuál opción describe mejor por qué Costa Rica puede tener muchos ecosistemas y microclimas?",
    correct:"Tiene variedad de relieve, clima y condiciones ambientales",
    wrong:["Todo el territorio tiene exactamente la misma altura","No existen zonas húmedas","Solo posee un tipo de bosque"],
    explain:"La combinación de ubicación, relieve, clima y humedad favorece muchos ambientes distintos y, con ellos, gran biodiversidad.",
    clue:"Pista: muchos ambientes aparecen cuando las condiciones cambian de un lugar a otro."
  },
  {
    kind:"Amenaza humana",
    q:"Una persona corta grandes áreas de bosque y no vuelve a plantar árboles. ¿Qué amenaza ocurre?",
    correct:"Deforestación",
    wrong:["Reforestación","Polinización","Conservación"],
    explain:"La deforestación es la eliminación de bosques o cobertura arbórea y puede destruir hábitats.",
    clue:"Pista: se eliminan árboles."
  },
  {
    kind:"Amenaza humana",
    q:"Alguien caza animales silvestres para venderlos. ¿Cuál es la mejor clasificación de esta actividad?",
    correct:"Amenaza a la biodiversidad",
    wrong:["Protección de poblaciones","Restauración del hábitat","Uso sostenible"],
    explain:"La caza y el comercio ilegal pueden reducir poblaciones animales y poner especies en riesgo.",
    clue:"Pista: si disminuye una población silvestre, la biodiversidad puede verse afectada."
  },
  {
    kind:"Población",
    q:"En un bosque se estudian todos los monos congo de la misma especie que viven allí. ¿Qué se está estudiando?",
    correct:"Una población",
    wrong:["Un individuo","Un nicho","Una forma de energía"],
    explain:"Una población es un conjunto de organismos de la misma especie que viven en un área.",
    clue:"Pista: misma especie + misma área."
  },
  {
    kind:"Nicho",
    q:"Un zopilote consume restos de animales y ayuda a limpiar materia orgánica del ambiente. Esa tarea corresponde a su...",
    correct:"Nicho",
    wrong:["Hábitat","Población","Relieve"],
    explain:"El nicho describe la función o papel de un organismo dentro de su ecosistema.",
    clue:"Pista: la pregunta explica lo que hace, no dónde vive."
  },
  {
    kind:"Hábitat",
    q:"Un perezoso vive entre las copas de los árboles de un bosque húmedo. ¿Qué describe 'bosque húmedo' en esta oración?",
    correct:"Su hábitat",
    wrong:["Su energía cinética","Su población","Su respiración"],
    explain:"El hábitat es el lugar físico donde un organismo vive y encuentra condiciones para desarrollarse.",
    clue:"Pista: bosque húmedo es un lugar."
  },
  {
    kind:"Ecosistema",
    q:"En un manglar se relacionan cangrejos, peces, aves, árboles, agua salada, barro y luz solar. ¿Cuál concepto incluye todo eso?",
    correct:"Ecosistema",
    wrong:["Individuo","Población","Nicho"],
    explain:"El ecosistema reúne seres vivos, elementos no vivos y las relaciones entre ellos.",
    clue:"Pista: vivos + no vivos + interacción."
  },
  {
    kind:"Razonamiento",
    q:"¿Cuál pareja está correctamente relacionada?",
    correct:"Hábitat = lugar donde vive",
    wrong:["Nicho = cantidad de energía","Población = un solo organismo","Individuo = grupo de especies distintas"],
    explain:"Hábitat significa lugar donde vive un organismo. Nicho es su función; individuo es un solo organismo; población es un grupo de la misma especie.",
    clue:"Pista: separa las palabras lugar, función, uno y grupo."
  },
  {
    kind:"Razonamiento",
    q:"¿Cuál pareja está correctamente relacionada?",
    correct:"Nicho = función o papel del ser vivo",
    wrong:["Hábitat = energía almacenada","Ecosistema = un solo animal","Población = lugar donde vive"],
    explain:"El nicho indica la función que cumple un organismo dentro de su ambiente.",
    clue:"Pista: nicho = trabajo o papel."
  },
  {
    kind:"Razonamiento",
    q:"¿Cuál ejemplo muestra energía potencial?",
    correct:"Una manzana quieta en una rama alta",
    wrong:["Una bicicleta avanzando","Un pez nadando rápido","Una hoja moviéndose con el viento"],
    explain:"La manzana tiene energía potencial por estar a cierta altura, aunque todavía no se esté moviendo.",
    clue:"Pista: está quieta y elevada."
  },
  {
    kind:"Razonamiento",
    q:"¿Cuál ejemplo muestra energía cinética?",
    correct:"Una pelota rodando por el piso",
    wrong:["Una pelota quieta en una repisa","Una roca inmóvil en una montaña","Un libro sobre una mesa"],
    explain:"La energía cinética aparece cuando un objeto está en movimiento.",
    clue:"Pista: busca lo que se está moviendo."
  }
];
