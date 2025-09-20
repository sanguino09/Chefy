const DOM = {
  generateButton: document.getElementById('generateButton'),
  mealHint: document.getElementById('mealHint'),
  resultTitle: document.getElementById('resultTitle'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  resultDescription: document.getElementById('resultDescription'),
  resultTags: document.getElementById('resultTags'),

  resultDetails: document.getElementById('resultDetails'),
  resultIngredients: document.getElementById('resultIngredients'),
  resultSteps: document.getElementById('resultSteps'),
  resultAlternatives: document.getElementById('resultAlternatives'),
  chefTip: document.getElementById('chefTip'),

  currentYear: document.getElementById('currentYear'),
  authToggle: document.getElementById('authToggle'),
  logoutButton: document.getElementById('logoutButton'),
  authDialog: document.getElementById('authDialog'),
  settingsPanel: document.getElementById('settingsPanel'),
  settingsButton: document.getElementById('settingsButton'),
  settingsStatus: document.getElementById('settingsStatus'),
  addRestriction: document.getElementById('addRestriction'),
  customRestriction: document.getElementById('customRestriction'),
  defaultRestrictions: document.getElementById('defaultRestrictions'),
  activeRestrictions: document.getElementById('activeRestrictions'),
  authFeedback: document.getElementById('authFeedback'),
  loginEmail: document.getElementById('loginEmail'),
  loginPassword: document.getElementById('loginPassword'),
  registerEmail: document.getElementById('registerEmail'),
  registerPassword: document.getElementById('registerPassword'),
  loginButton: document.getElementById('loginButton'),
  registerButton: document.getElementById('registerButton'),
  loginTab: document.getElementById('loginTab'),
  registerTab: document.getElementById('registerTab'),
  loginPanel: document.getElementById('loginPanel'),
  registerPanel: document.getElementById('registerPanel'),
  authTitle: document.getElementById('authTitle'),
  userWelcome: document.getElementById('userWelcome'),

  shareButton: document.getElementById('shareButton'),
  planDaySelect: document.getElementById('planDaySelect'),
  addToPlanButton: document.getElementById('addToPlanButton'),
  historyList: document.getElementById('historyList'),
  clearHistoryButton: document.getElementById('clearHistoryButton'),
  weeklyPlanGrid: document.getElementById('weeklyPlanGrid'),
  clearPlanButton: document.getElementById('clearPlanButton'),
  shoppingList: document.getElementById('shoppingList'),
  copyShoppingButton: document.getElementById('copyShoppingButton'),
  cuisineChips: document.getElementById('cuisineChips'),
  cuisineQuickFilters: document.getElementById('cuisineQuickFilters'),
};

const DEFAULT_RESULT = {
  title: '¿Qué vamos a cocinar?',
  subtitle: 'Inicia sesión y pulsa el botón para que Chefy te recomiende una receta increíble.',
  description: '',

};

const DEFAULT_RESTRICTIONS = [
  'gluten',
  'lácteos',
  'judías verdes',
  'mariscos',
  'picante',
  'cilantro',
  'frutos secos',
  'huevo',
  'carne roja',
  'azúcar refinado',
];


const CUISINE_OPTIONS = [
  { id: 'mediterranea', label: 'Mediterránea' },
  { id: 'japonesa', label: 'Japonesa' },
  { id: 'tailandesa', label: 'Tailandesa' },
  { id: 'mexicana', label: 'Mexicana' },
  { id: 'india', label: 'India' },
  { id: 'fusion', label: 'Fusión creativa' },
  { id: 'plant-based', label: 'Plant-based' },
];

const CUISINE_LABELS = Object.fromEntries(CUISINE_OPTIONS.map((option) => [option.id, option.label]));

const WEEK_DAYS = [
  { id: 'lunes', label: 'Lunes' },
  { id: 'martes', label: 'Martes' },
  { id: 'miércoles', label: 'Miércoles' },
  { id: 'jueves', label: 'Jueves' },
  { id: 'viernes', label: 'Viernes' },
  { id: 'sábado', label: 'Sábado' },
  { id: 'domingo', label: 'Domingo' },
];

const MEALS = ['desayuno', 'comida', 'cena'];

const MEAL_LABELS = {
  desayuno: 'un desayuno',
  comida: 'una comida',
  cena: 'una cena',
};

const MEAL_DISPLAY = {
  desayuno: 'Desayuno',
  comida: 'Comida',
  cena: 'Cena',
};

const HISTORY_LIMIT = 20;

const HISTORY_FORMATTER = new Intl.DateTimeFormat('es-ES', {
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
});


const RECIPES = [
  {
    id: 'sunrise-bowl',
    name: 'Bowl energizante de amanecer',
    meal: 'desayuno',

    cuisines: ['mediterranea', 'plant-based'],
    time: '10 minutos',
    servings: '1 ración',
    description:
      'Yogur griego con granola casera, frutas frescas de temporada y un toque de miel cítrica para comenzar el día con energía.',
    tags: ['alto en proteínas', 'sin gluten'],
    ingredients: [
      { quantity: '200 g', item: 'yogur griego natural' },
      { quantity: '1/2 taza', item: 'granola de frutos secos' },
      { quantity: '1/2 taza', item: 'frutos rojos frescos' },
      { quantity: '1 cda', item: 'miel de azahar' },
      { quantity: '1 cdita', item: 'semillas de chía' },
      { quantity: '1/4 cdita', item: 'ralladura de naranja' },
    ],
    steps: [
      'Coloca el yogur en un bol ancho y suavízalo con una cuchara.',
      'Distribuye la granola por encima creando capas crujientes.',
      'Añade los frutos rojos y espolvorea la chía.',
      'Termina con la miel y la ralladura de naranja para perfumar.',
    ],
    swaps: [
      { ingredient: 'yogur griego natural', alternatives: ['yogur vegetal de coco', 'queso fresco batido'] },
      { ingredient: 'granola de frutos secos', alternatives: ['muesli crujiente', 'avena tostada con semillas'] },
    ],
    chefTip: 'Sirve el bol bien frío y añade hojas de menta para un contraste refrescante.',
    keywords: ['yogur', 'granola', 'frutos secos', 'fruta', 'miel', 'chía', 'naranja'],
  },
  {
    id: 'matcha-hotcakes',
    name: 'Hotcakes de matcha con frutos rojos',
    meal: 'desayuno',
    cuisines: ['japonesa', 'fusion'],
    time: '20 minutos',
    servings: '2 raciones',
    description: 'Tortitas esponjosas con té verde matcha y sirope de arce para un brunch vibrante.',
    tags: ['antioxidantes', 'brunch'],
    ingredients: [
      { quantity: '1 taza', item: 'harina de avena' },
      { quantity: '1 cda', item: 'matcha en polvo' },
      { quantity: '1 cdita', item: 'polvo de hornear' },
      { quantity: '1', item: 'plátano maduro triturado' },
      { quantity: '1', item: 'huevo' },
      { quantity: '180 ml', item: 'leche de almendras' },
      { quantity: '1 cda', item: 'sirope de arce' },
      { quantity: '1 taza', item: 'frutos rojos' },
    ],
    steps: [
      'Mezcla la harina, el matcha y el polvo de hornear en un bol.',
      'Incorpora el plátano, el huevo y la leche hasta obtener una masa homogénea.',
      'Engrasa una sartén antiadherente y vierte porciones de masa.',
      'Cocina dos minutos por lado, sirve con sirope de arce y frutos rojos.',
    ],
    swaps: [
      { ingredient: 'huevo', alternatives: ['1 cda de semillas de lino + 3 cdas de agua', 'puré de manzana'] },
      { ingredient: 'leche de almendras', alternatives: ['leche de avena', 'leche tradicional'] },
    ],
    chefTip: 'Tamiza el matcha para evitar grumos y bate poco la mezcla para conservar la esponjosidad.',
    keywords: ['matcha', 'harina de avena', 'plátano', 'huevo', 'leche de almendras', 'sirope'],
  },
  {
    id: 'bangkok-chia',
    name: 'Pudin tropical de chía y mango',
    meal: 'desayuno',
    cuisines: ['tailandesa', 'plant-based'],
    time: '15 minutos + reposo',
    servings: '2 raciones',
    description: 'Semillas de chía infusionadas en leche de coco con mango y lima para un desayuno listo desde la noche anterior.',
    tags: ['sin lácteos', 'meal prep'],
    ingredients: [
      { quantity: '6 cdas', item: 'semillas de chía' },
      { quantity: '400 ml', item: 'leche de coco ligera' },
      { quantity: '2 cdas', item: 'sirope de coco' },
      { quantity: '1', item: 'mango maduro en cubos' },
      { quantity: '1', item: 'lima (zumo y ralladura)' },
      { quantity: '2 cdas', item: 'coco tostado en láminas' },
    ],
    steps: [
      'Mezcla la leche de coco con el sirope y la ralladura de lima.',
      'Añade la chía, remueve y deja reposar diez minutos; vuelve a mezclar.',
      'Refrigera mínimo dos horas o durante la noche.',
      'Sirve con el mango fresco, jugo de lima y coco tostado.',
    ],
    swaps: [
      { ingredient: 'leche de coco ligera', alternatives: ['leche de almendras', 'leche de anacardos'] },
      { ingredient: 'mango', alternatives: ['piña fresca', 'papaya madura'] },
    ],
    chefTip: 'Para un contraste crujiente, añade cacahuetes tostados justo antes de servir.',
    keywords: ['chía', 'leche de coco', 'mango', 'lima', 'coco', 'sirope'],

  },
  {
    id: 'zen-bento',
    name: 'Bento zen de quinoa y tofu',
    meal: 'comida',

    cuisines: ['japonesa', 'plant-based'],
    time: '25 minutos',
    servings: '2 raciones',
    description: 'Quinoa esponjosa con tofu glaseado en salsa tamari, verduras al vapor y encurtidos asiáticos.',
    tags: ['alto en proteínas', 'meal prep'],
    ingredients: [
      { quantity: '1 taza', item: 'quinoa enjuagada' },
      { quantity: '2 tazas', item: 'caldo vegetal' },
      { quantity: '200 g', item: 'tofu firme' },
      { quantity: '2 cdas', item: 'salsa tamari' },
      { quantity: '1 cda', item: 'aceite de sésamo' },
      { quantity: '1 taza', item: 'pak choi al vapor' },
      { quantity: '1/2 taza', item: 'zanahoria rallada' },
      { quantity: '1/4 taza', item: 'encurtidos japoneses' },
    ],
    steps: [
      'Cuece la quinoa en el caldo durante quince minutos y airea con un tenedor.',
      'Dora el tofu en cubos con aceite de sésamo y glasea con tamari.',
      'Prepara las verduras al vapor y escurre los encurtidos.',
      'Monta el bento con capas de quinoa, tofu y verduras, espolvorea semillas de sésamo.',
    ],
    swaps: [
      { ingredient: 'quinoa', alternatives: ['arroz integral', 'bulgur'] },
      { ingredient: 'tofu firme', alternatives: ['tempeh', 'pollo a la plancha'] },
    ],
    chefTip: 'Añade jengibre rallado al glaseado para potenciar el aroma.',
    keywords: ['quinoa', 'tofu', 'tamari', 'pak choi', 'encurtidos', 'zanahoria'],

  },
  {
    id: 'citrus-salmon',
    name: 'Salmón cítrico con ensalada templada',
    meal: 'comida',

    cuisines: ['mediterranea'],
    time: '30 minutos',
    servings: '2 raciones',
    description:
      'Filete de salmón al horno con glaseado de naranja y jengibre, acompañado de espárragos y couscous integral.',
    tags: ['omega 3', 'horno'],
    ingredients: [
      { quantity: '2', item: 'lomos de salmón' },
      { quantity: '1', item: 'naranja (zumo y ralladura)' },
      { quantity: '1 cdita', item: 'jengibre fresco rallado' },
      { quantity: '1 cda', item: 'miel' },
      { quantity: '1 manojo', item: 'espárragos verdes' },
      { quantity: '1 taza', item: 'couscous integral' },
      { quantity: '1 cda', item: 'aceite de oliva' },
    ],
    steps: [
      'Precalienta el horno a 200 °C y coloca el salmón en una bandeja.',
      'Mezcla el zumo de naranja, miel y jengibre; pincela el salmón.',
      'Hornea doce minutos y saltea los espárragos con aceite de oliva.',
      'Hidrata el couscous con agua caliente, suelta con un tenedor y sirve todo junto.',
    ],
    swaps: [
      { ingredient: 'salmón', alternatives: ['trucha', 'tofu ahumado'] },
      { ingredient: 'couscous integral', alternatives: ['quinua', 'bulgur'] },
    ],
    chefTip: 'Termina con semillas de granada para un contraste crujiente y ácido.',
    keywords: ['salmón', 'naranja', 'jengibre', 'espárragos', 'couscous', 'miel'],
  },
  {
    id: 'bangkok-salad',
    name: 'Ensalada thai de fideos de arroz',
    meal: 'comida',
    cuisines: ['tailandesa', 'fusion'],
    time: '20 minutos',
    servings: '2 raciones',
    description:
      'Fideos de arroz con verduras frescas, hierbas aromáticas y aliño cremoso de cacahuete y lima.',
    tags: ['refrescante', 'sin gluten'],
    ingredients: [
      { quantity: '150 g', item: 'fideos de arroz' },
      { quantity: '1', item: 'zanahoria en juliana' },
      { quantity: '1', item: 'pepino en tiras' },
      { quantity: '1', item: 'pimiento rojo en láminas' },
      { quantity: '1/2 taza', item: 'brotes de soja' },
      { quantity: '1/4 taza', item: 'cacahuetes tostados' },
      { quantity: '1 puñado', item: 'hojas de menta y cilantro' },
      { quantity: '3 cdas', item: 'crema de cacahuete' },
      { quantity: '2 cdas', item: 'zumo de lima' },
      { quantity: '1 cda', item: 'salsa de soja ligera' },
    ],
    steps: [
      'Hidrata los fideos siguiendo las instrucciones y enjuaga con agua fría.',
      'Mezcla la crema de cacahuete con el zumo de lima y la salsa de soja hasta lograr un aliño suave.',
      'Combina los fideos con las verduras y las hierbas.',
      'Añade el aliño y termina con los cacahuetes tostados triturados.',
    ],
    swaps: [
      { ingredient: 'crema de cacahuete', alternatives: ['tahini', 'mantequilla de almendra'] },
      { ingredient: 'fideos de arroz', alternatives: ['fideos de trigo sarraceno', 'espirales de calabacín'] },
    ],
    chefTip: 'Añade chile fresco si buscas un punto picante auténtico.',
    keywords: ['fideos', 'arroz', 'cacahuete', 'lima', 'menta', 'cilantro', 'soja'],
  },
  {
    id: 'yucatan-bowl',
    name: 'Bowl yucateco de jackfruit achiote',
    meal: 'comida',
    cuisines: ['mexicana', 'plant-based'],
    time: '35 minutos',
    servings: '2 raciones',
    description:
      'Jackfruit deshebrado con achiote servido con arroz integral, frijoles negros y pico de gallo cítrico.',
    tags: ['alto en fibra', 'meal prep'],
    ingredients: [
      { quantity: '1 lata', item: 'jackfruit en salmuera escurrido' },
      { quantity: '2 cdas', item: 'pasta de achiote' },
      { quantity: '1', item: 'diente de ajo picado' },
      { quantity: '1 taza', item: 'arroz integral cocido' },
      { quantity: '1 taza', item: 'frijoles negros cocidos' },
      { quantity: '1/2 taza', item: 'pico de gallo' },
      { quantity: '1', item: 'aguacate en láminas' },
      { quantity: '1', item: 'lima en gajos' },
    ],
    steps: [
      'Deshilacha el jackfruit con un tenedor y sofríelo con ajo.',
      'Añade la pasta de achiote disuelta en un poco de agua y cocina diez minutos.',
      'Sirve el jackfruit sobre el arroz con los frijoles, el pico de gallo y el aguacate.',
      'Exprime la lima antes de comer para potenciar los sabores.',
    ],
    swaps: [
      { ingredient: 'jackfruit', alternatives: ['setas deshebradas', 'pollo desmenuzado'] },
      { ingredient: 'arroz integral', alternatives: ['quinua', 'coliflor rallada salteada'] },
    ],
    chefTip: 'Marina el jackfruit con jugo de naranja agria para un resultado más auténtico.',
    keywords: ['jackfruit', 'achiote', 'arroz', 'frijoles', 'pico de gallo', 'aguacate'],
  },
  {
    id: 'garden-bowl',
    name: 'Bol mediterráneo fresco',
    meal: 'comida',
    cuisines: ['mediterranea', 'plant-based'],
    time: '20 minutos',
    servings: '2 raciones',
    description:
      'Farro con garbanzos especiados, hojas verdes, pepino crujiente y aderezo de limón tahini.',
    tags: ['rico en fibra', 'listo en 20 minutos'],
    ingredients: [
      { quantity: '1 taza', item: 'farro cocido' },
      { quantity: '1 taza', item: 'garbanzos cocidos' },
      { quantity: '1 cda', item: 'especias ras el hanout' },
      { quantity: '2 tazas', item: 'brotes verdes' },
      { quantity: '1', item: 'pepino en medias lunas' },
      { quantity: '1/4 taza', item: 'tomates cherry' },
      { quantity: '2 cdas', item: 'tahini' },
      { quantity: '2 cdas', item: 'zumo de limón' },
      { quantity: '1 cda', item: 'aceite de oliva virgen extra' },
    ],
    steps: [
      'Saltea los garbanzos con aceite y ras el hanout hasta dorarlos.',
      'Mezcla el tahini con limón y agua hasta lograr un aderezo cremoso.',
      'Combina el farro con los brotes, el pepino y los tomates.',
      'Corona con los garbanzos crujientes y baña con el aderezo.',
    ],
    swaps: [
      { ingredient: 'farro', alternatives: ['cuscús perlado', 'arroz integral'] },
      { ingredient: 'tahini', alternatives: ['yogur natural', 'mantequilla de anacardo'] },
    ],
    chefTip: 'Añade ralladura de limón y menta fresca para un final aromático.',
    keywords: ['farro', 'garbanzos', 'tahini', 'limón', 'pepino', 'brotes'],
  },
  {
    id: 'midnight-ramen',
    name: 'Ramen nocturno reconfortante',
    meal: 'cena',
    cuisines: ['japonesa'],
    time: '25 minutos',
    servings: '2 raciones',
    description:
      'Caldo ligero con fideos integrales, pak choi y huevo marinado con perfume de sésamo tostado.',
    tags: ['confort', 'rápido'],
    ingredients: [
      { quantity: '1 l', item: 'caldo dashi ligero' },
      { quantity: '2', item: 'huevos marinados' },
      { quantity: '200 g', item: 'fideos ramen integrales' },
      { quantity: '2', item: 'pak choi cortados' },
      { quantity: '2 cdas', item: 'salsa de soja' },
      { quantity: '1 cda', item: 'aceite de sésamo tostado' },
      { quantity: '1', item: 'cebolleta picada' },
    ],
    steps: [
      'Calienta el caldo con la salsa de soja hasta que hierva suavemente.',
      'Cocina los fideos según el paquete y escurre.',
      'Blanquea el pak choi un minuto en el caldo.',
      'Sirve los fideos con el caldo, el pak choi, los huevos y aceite de sésamo.',
    ],
    swaps: [
      { ingredient: 'caldo dashi ligero', alternatives: ['caldo vegetal', 'caldo de pollo ligero'] },
      { ingredient: 'huevos marinados', alternatives: ['tofu suave', 'setas shiitake salteadas'] },
    ],
    chefTip: 'Añade un toque de rayu o aceite picante justo antes de servir.',
    keywords: ['ramen', 'caldo', 'huevo', 'pak choi', 'fideos', 'sésamo'],

  },
  {
    id: 'moonlight-curry',
    name: 'Curry de coco y berenjena a la luz de la luna',
    meal: 'cena',

    cuisines: ['india', 'plant-based'],
    time: '30 minutos',
    servings: '3 raciones',
    description:
      'Curry suave de berenjena y garbanzos en leche de coco con arroz jazmín aromático.',
    tags: ['sin gluten', 'confort nocturno'],
    ingredients: [
      { quantity: '2', item: 'berenjenas pequeñas en cubos' },
      { quantity: '1', item: 'cebolla morada picada' },
      { quantity: '2', item: 'dientes de ajo laminados' },
      { quantity: '1 cda', item: 'pasta de curry amarillo' },
      { quantity: '400 ml', item: 'leche de coco' },
      { quantity: '1 taza', item: 'garbanzos cocidos' },
      { quantity: '1 taza', item: 'arroz jazmín cocido' },
      { quantity: '1 puñado', item: 'hojas de cilantro fresco' },
    ],
    steps: [
      'Dora la berenjena con un poco de aceite hasta que esté dorada y reserva.',
      'Sofríe la cebolla y el ajo, añade la pasta de curry y cocina dos minutos.',
      'Incorpora la leche de coco, los garbanzos y la berenjena; cocina doce minutos.',
      'Sirve sobre arroz jazmín y decora con cilantro.',
    ],
    swaps: [
      { ingredient: 'pasta de curry amarillo', alternatives: ['curry rojo suave', 'garam masala con leche de coco'] },
      { ingredient: 'leche de coco', alternatives: ['leche evaporada', 'leche de almendra espesa'] },
    ],
    chefTip: 'Tuesta ligeramente el arroz jazmín antes de hervirlo para intensificar su aroma.',
    keywords: ['berenjena', 'curry', 'leche de coco', 'garbanzos', 'arroz jazmín', 'cilantro'],
  },
  {
    id: 'veggie-tacos',
    name: 'Tacos de calabaza especiada',
    meal: 'cena',
    cuisines: ['mexicana', 'plant-based'],
    time: '25 minutos',
    servings: '3 raciones',
    description:
      'Tortillas de maíz con calabaza asada al chipotle, cebolla encurtida y crema de anacardos.',
    tags: ['sin lácteos', 'street food'],
    ingredients: [
      { quantity: '400 g', item: 'calabaza en cubos' },
      { quantity: '1 cda', item: 'adobo de chipotle' },
      { quantity: '1 cda', item: 'aceite de oliva' },
      { quantity: '8', item: 'tortillas de maíz' },
      { quantity: '1/2 taza', item: 'cebolla morada encurtida' },
      { quantity: '1/2 taza', item: 'crema de anacardos' },
      { quantity: '1/4 taza', item: 'cilantro fresco picado' },
      { quantity: '1', item: 'limón verde' },
    ],
    steps: [
      'Mezcla la calabaza con chipotle y aceite y hornea dieciocho minutos a 200 °C.',
      'Calienta las tortillas en una plancha hasta que estén flexibles.',
      'Rellena con la calabaza, añade crema de anacardos y cebolla encurtida.',
      'Finaliza con cilantro y unas gotas de limón.',
    ],
    swaps: [
      { ingredient: 'calabaza', alternatives: ['boniato', 'coliflor asada'] },
      { ingredient: 'crema de anacardos', alternatives: ['yogur vegetal', 'crema agria tradicional'] },
    ],
    chefTip: 'Sirve con unas rodajas de rábanos para aportar frescor y color.',
    keywords: ['calabaza', 'chipotle', 'tortillas', 'anacardos', 'cebolla morada', 'cilantro'],
  },
  {
    id: 'lemongrass-tofu',
    name: 'Tofu a la citronela con fideos crujientes',
    meal: 'cena',
    cuisines: ['tailandesa', 'fusion', 'plant-based'],
    time: '30 minutos',
    servings: '2 raciones',
    description:
      'Tofu marinado en citronela y lima, salteado con verduras y servido con fideos crujientes.',
    tags: ['aromático', 'alto en proteínas'],
    ingredients: [
      { quantity: '250 g', item: 'tofu firme' },
      { quantity: '2 tallos', item: 'citronela picada' },
      { quantity: '1', item: 'lima (zumo y ralladura)' },
      { quantity: '1 cda', item: 'salsa de soja' },
      { quantity: '1 cda', item: 'aceite de coco' },
      { quantity: '1 taza', item: 'pimiento amarillo en tiras' },
      { quantity: '1 taza', item: 'judías verdes troceadas' },
      { quantity: '150 g', item: 'fideos de arroz finos' },
      { quantity: '1 cda', item: 'cacahuetes tostados' },
    ],
    steps: [
      'Marina el tofu en cubos con citronela, lima y salsa de soja durante quince minutos.',
      'Fríe brevemente los fideos para que queden crujientes y reserva.',
      'Saltea el tofu marinado con aceite de coco hasta dorar, añade las verduras y cocina cinco minutos.',
      'Sirve sobre los fideos crujientes y espolvorea cacahuetes.',
    ],
    swaps: [
      { ingredient: 'tofu firme', alternatives: ['seitán', 'pollo a la plancha'] },
      { ingredient: 'judías verdes', alternatives: ['espárragos', 'brócoli en tiras'] },
    ],
    chefTip: 'Añade unas hojas de albahaca thai al final para un aroma intenso.',
    keywords: ['tofu', 'citronela', 'lima', 'soja', 'pimiento', 'judías verdes', 'fideos'],
  },
];

const STORAGE_KEYS = {
  USERS: 'chefyUsers',
  CURRENT_USER: 'chefyCurrentUser',
  GUEST_RESTRICTIONS: 'chefyGuestRestrictions',

  GUEST_CUISINES: 'chefyGuestCuisines',
  GUEST_HISTORY: 'chefyGuestHistory',
  GUEST_WEEKLY_PLAN: 'chefyGuestWeeklyPlan',
};

function toKey(value) {
  return (value ?? '').toString().trim().toLowerCase();
}

function createEmptyWeeklyPlan() {
  return WEEK_DAYS.reduce((plan, day) => {
    plan[day.id] = { desayuno: null, comida: null, cena: null };
    return plan;
  }, {});
}

function normalizeWeeklyPlan(plan) {
  const base = createEmptyWeeklyPlan();
  if (!plan || typeof plan !== 'object') return base;
  WEEK_DAYS.forEach((day) => {
    const storedDay = plan[day.id];
    if (!storedDay || typeof storedDay !== 'object') return;
    MEALS.forEach((meal) => {
      const entry = storedDay[meal];
      if (entry && typeof entry === 'object' && entry.recipeId) {
        base[day.id][meal] = { recipeId: entry.recipeId, addedAt: entry.addedAt ?? Date.now() };
      }
    });
  });
  return base;
}

const storage = {
  readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.warn('No se pudo leer el valor almacenado', key, error);
      return fallback;
    }
  },
  writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getUsers() {
    return this.readJSON(STORAGE_KEYS.USERS, []);
  },
  saveUsers(users) {
    this.writeJSON(STORAGE_KEYS.USERS, users);

  },
  getCurrentUserEmail() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  },
  setCurrentUserEmail(email) {
    if (email) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, email);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  },
  getGuestRestrictions() {

    return this.readJSON(STORAGE_KEYS.GUEST_RESTRICTIONS, []);
  },
  saveGuestRestrictions(restrictions) {
    this.writeJSON(STORAGE_KEYS.GUEST_RESTRICTIONS, restrictions);
  },
  getGuestCuisines() {
    return this.readJSON(STORAGE_KEYS.GUEST_CUISINES, []);
  },
  saveGuestCuisines(cuisines) {
    this.writeJSON(STORAGE_KEYS.GUEST_CUISINES, cuisines);
  },
  getGuestHistory() {
    return this.readJSON(STORAGE_KEYS.GUEST_HISTORY, []);
  },
  saveGuestHistory(history) {
    this.writeJSON(STORAGE_KEYS.GUEST_HISTORY, history);
  },
  getGuestWeeklyPlan() {
    return normalizeWeeklyPlan(this.readJSON(STORAGE_KEYS.GUEST_WEEKLY_PLAN, createEmptyWeeklyPlan()));
  },
  saveGuestWeeklyPlan(plan) {
    this.writeJSON(STORAGE_KEYS.GUEST_WEEKLY_PLAN, plan);

  },
};

const state = {
  currentUser: null,
  restrictions: [],

  selectedCuisines: [],
  history: [],
  weeklyPlan: createEmptyWeeklyPlan(),
  lastRecipe: null,
  lastMeal: null,
  shoppingSummaryText: '',

};

function detectMealType(date = new Date()) {
  const hour = date.getHours();
  if (hour < 11) return 'desayuno';
  if (hour < 17) return 'comida';
  return 'cena';
}

function formatMealButtonLabel(meal) {
  const label = {
    desayuno: 'Generar desayuno sorpresa',
    comida: 'Generar comida creativa',
    cena: 'Generar cena deliciosa',
  };
  return label[meal];
}

function updateMealUI() {
  const meal = detectMealType();
  DOM.generateButton.textContent = formatMealButtonLabel(meal);
  DOM.mealHint.textContent = `Según la hora, te recomendamos ${MEAL_LABELS[meal]}. ¡Personalízala a tu gusto!`;
}

function updateCurrentYear() {
  const year = new Date().getFullYear();
  DOM.currentYear.textContent = String(year);
}

function showDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === 'function' && !dialog.open) {
    dialog.showModal();
  }
}

function closeDialog(dialog) {
  if (dialog?.open) {
    dialog.close();
  }
}


function setAuthFeedback(message, type = 'info') {
  DOM.authFeedback.textContent = message;
  DOM.authFeedback.classList.toggle('form-feedback--error', type === 'error');
  DOM.authFeedback.classList.toggle('form-feedback--success', type === 'success');
}

function clearAuthFeedback() {
  setAuthFeedback('');
}

function findUserByEmail(email) {
  return storage.getUsers().find((user) => user.email === email);
}


function persistUserData(partial) {
  if (!state.currentUser) return;
  const users = storage.getUsers();
  const updatedUsers = users.map((user) =>
    user.email === state.currentUser.email ? { ...user, ...partial } : user,
  );
  storage.saveUsers(updatedUsers);
  state.currentUser = updatedUsers.find((user) => user.email === state.currentUser.email) ?? null;
}

function persistRestrictions() {
  if (state.currentUser) {
    persistUserData({ restrictions: state.restrictions });

  } else {
    storage.saveGuestRestrictions(state.restrictions);
  }
  renderActiveRestrictions();
  renderDefaultChips();
}


function persistCuisines() {
  if (state.currentUser) {
    persistUserData({ cuisines: state.selectedCuisines });
  } else {
    storage.saveGuestCuisines(state.selectedCuisines);
  }
  renderCuisineSelectors();
}

function persistHistory() {
  if (state.currentUser) {
    persistUserData({ history: state.history });
  } else {
    storage.saveGuestHistory(state.history);
  }
  renderHistory();
}

function persistWeeklyPlan() {
  if (state.currentUser) {
    persistUserData({ weeklyPlan: state.weeklyPlan });
  } else {
    storage.saveGuestWeeklyPlan(state.weeklyPlan);
  }
  renderWeeklyPlan();
  updateShoppingList();
}

function renderActiveRestrictions() {
  DOM.activeRestrictions.innerHTML = '';
  if (!state.restrictions.length) {
    const empty = document.createElement('li');
    empty.textContent = 'Ningún ingrediente bloqueado por ahora.';
    DOM.activeRestrictions.appendChild(empty);
    return;
  }

  state.restrictions.forEach((restriction) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${restriction}</span>`;
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.setAttribute('aria-label', `Quitar ${restriction}`);
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', () => {
      removeRestriction(restriction);
    });
    item.appendChild(removeBtn);
    DOM.activeRestrictions.appendChild(item);
  });
}

function renderDefaultChips() {
  DOM.defaultRestrictions.innerHTML = '';
  DEFAULT_RESTRICTIONS.forEach((ingredient) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = ingredient;
    chip.dataset.active = String(state.restrictions.includes(ingredient));
    chip.addEventListener('click', () => {
      toggleRestriction(ingredient);
    });
    DOM.defaultRestrictions.appendChild(chip);
  });
}


function renderCuisineSelectors() {
  renderCuisineChips(DOM.cuisineChips);
  renderCuisineChips(DOM.cuisineQuickFilters);
}

function renderCuisineChips(container) {
  if (!container) return;
  container.innerHTML = '';
  CUISINE_OPTIONS.forEach((option) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = option.label;
    const selected = state.selectedCuisines.includes(option.id);
    chip.dataset.selected = String(selected);
    chip.setAttribute('aria-pressed', String(selected));
    chip.addEventListener('click', () => toggleCuisine(option.id));
    container.appendChild(chip);
  });
}


function toggleRestriction(rawValue) {
  const value = toKey(rawValue);
  if (!value) return;
  if (state.restrictions.includes(value)) {
    state.restrictions = state.restrictions.filter((item) => item !== value);
  } else {
    state.restrictions = [...state.restrictions, value];
  }
  persistRestrictions();
}

function addRestriction(rawValue) {
  const value = toKey(rawValue);
  if (!value) return;
  if (state.restrictions.includes(value)) {
    persistRestrictions();
    return;
  }
  state.restrictions = [...state.restrictions, value];
  DOM.customRestriction.value = '';
  persistRestrictions();
}

function removeRestriction(value) {
  state.restrictions = state.restrictions.filter((item) => item !== value);
  persistRestrictions();
}

function toggleCuisine(id) {
  const value = toKey(id);
  if (!value) return;
  if (state.selectedCuisines.includes(value)) {
    state.selectedCuisines = state.selectedCuisines.filter((item) => item !== value);
  } else {
    state.selectedCuisines = [...state.selectedCuisines, value];
  }
  persistCuisines();
}

function setActionAvailability(enabled) {
  const disabled = !enabled;
  DOM.shareButton.disabled = disabled;
  DOM.addToPlanButton.disabled = disabled;
}

function clearResultCard() {
  DOM.resultTitle.textContent = DEFAULT_RESULT.title;
  DOM.resultSubtitle.textContent = DEFAULT_RESULT.subtitle;
  DOM.resultDescription.textContent = DEFAULT_RESULT.description;
  DOM.resultTags.hidden = true;
  DOM.resultTags.innerHTML = '';
  DOM.resultDetails.hidden = true;
  DOM.resultIngredients.innerHTML = '';
  DOM.resultSteps.innerHTML = '';
  DOM.resultAlternatives.innerHTML = '';
  DOM.chefTip.hidden = true;
  DOM.chefTip.textContent = '';
  setActionAvailability(false);
  state.lastRecipe = null;
  state.lastMeal = null;
}

function getCuisineLabels(cuisines = []) {
  return cuisines.map((id) => CUISINE_LABELS[id] ?? id);
}
function renderRecipe(recipe, meal, { recordHistory = false } = {}) {
  if (!recipe) return;
  state.lastRecipe = recipe;
  state.lastMeal = meal;

  const cuisineLabels = getCuisineLabels(recipe.cuisines);
  DOM.resultTitle.textContent = recipe.name;
  const cuisineText = cuisineLabels.length ? ` con un toque ${cuisineLabels.join(', ')}` : '';
  DOM.resultSubtitle.textContent = `Perfecto para ${MEAL_LABELS[meal]}${cuisineText} sin ingredientes no deseados.`;
  DOM.resultDescription.textContent = recipe.description;

  DOM.resultTags.hidden = false;
  DOM.resultTags.innerHTML = '';
  const tagValues = [MEAL_DISPLAY[meal], ...cuisineLabels, recipe.time, recipe.servings, ...(recipe.tags ?? [])];
  tagValues.filter(Boolean).forEach((text) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = text;
    DOM.resultTags.appendChild(span);
  });

  DOM.resultDetails.hidden = false;
  DOM.resultIngredients.innerHTML = '';
  DOM.resultSteps.innerHTML = '';
  DOM.resultAlternatives.innerHTML = '';

  (recipe.ingredients ?? []).forEach((ingredient) => {
    const item = document.createElement('li');
    if (ingredient && typeof ingredient === 'object') {
      const quantity = ingredient.quantity ? `${ingredient.quantity} · ` : '';
      item.textContent = `${quantity}${ingredient.item}`;
    } else {
      item.textContent = ingredient;
    }
    DOM.resultIngredients.appendChild(item);
  });

  (recipe.steps ?? []).forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    DOM.resultSteps.appendChild(li);
  });

  const swaps = recipe.swaps ?? [];
  if (swaps.length) {
    swaps.forEach((swap) => {
      const li = document.createElement('li');
      li.textContent = `Si te falta ${swap.ingredient}: ${swap.alternatives.join(', ')}`;
      DOM.resultAlternatives.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Esta receta es flexible, no necesitas sustituciones especiales.';
    DOM.resultAlternatives.appendChild(li);
  }

  if (recipe.chefTip) {
    DOM.chefTip.hidden = false;
    DOM.chefTip.textContent = `Tip del chef: ${recipe.chefTip}`;
  } else {
    DOM.chefTip.hidden = true;
    DOM.chefTip.textContent = '';
  }

  setActionAvailability(true);
  if (recordHistory) {
    recordHistory(recipe, meal);
  }
}

function recordHistory(recipe, meal) {
  const entry = { recipeId: recipe.id, meal, timestamp: Date.now() };
  const filtered = state.history.filter((item) => item.recipeId !== recipe.id || item.meal !== meal);
  state.history = [entry, ...filtered].slice(0, HISTORY_LIMIT);
  persistHistory();
}

function renderHistory() {
  DOM.historyList.innerHTML = '';
  if (!state.history.length) {
    const empty = document.createElement('li');
    empty.className = 'history__empty';
    empty.textContent = 'Todavía no has generado recetas. ¡Empieza con el botón mágico!';
    DOM.historyList.appendChild(empty);
    return;
  }

  state.history.forEach((entry) => {
    const recipe = RECIPES.find((item) => item.id === entry.recipeId);
    if (!recipe) return;
    const item = document.createElement('li');
    item.className = 'history__item';

    const meta = document.createElement('span');
    meta.className = 'history__meta';
    const cuisines = getCuisineLabels(recipe.cuisines).join(' · ');
    meta.textContent = `${MEAL_DISPLAY[entry.meal]} · ${HISTORY_FORMATTER.format(entry.timestamp)}${cuisines ? ` · ${cuisines}` : ''}`;

    const title = document.createElement('strong');
    title.textContent = recipe.name;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ghost';
    button.textContent = 'Ver receta';
    button.addEventListener('click', () => {
      renderRecipe(recipe, entry.meal);
    });

    item.append(meta, title, button);
    DOM.historyList.appendChild(item);
  });
}

function shareCurrentRecipe() {
  if (!state.lastRecipe) return;
  const recipe = state.lastRecipe;
  const meal = state.lastMeal ?? detectMealType();
  const intro = `¡Hola! Chefy me recomendó "${recipe.name}" para ${MEAL_LABELS[meal]}.`;
  const ingredients = (recipe.ingredients ?? [])
    .map((ingredient) => {
      if (ingredient && typeof ingredient === 'object') {
        const quantity = ingredient.quantity ? `${ingredient.quantity} ` : '';
        return `• ${quantity}${ingredient.item}`;
      }
      return `• ${ingredient}`;
    })
    .join('\n');
  const steps = (recipe.steps ?? [])
    .map((step, index) => `${index + 1}. ${step}`)
    .join('\n');
  const message = `${intro}\n\nIngredientes:\n${ingredients}\n\nPasos:\n${steps}\n\nGenerado con Chefy 🍳`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function addCurrentRecipeToPlan() {
  if (!state.lastRecipe) return;
  const day = DOM.planDaySelect.value || WEEK_DAYS[0].id;
  const meal = state.lastMeal ?? detectMealType();
  const plan = { ...state.weeklyPlan };
  const dayPlan = { ...(plan[day] ?? { desayuno: null, comida: null, cena: null }) };
  dayPlan[meal] = { recipeId: state.lastRecipe.id, addedAt: Date.now() };
  plan[day] = dayPlan;
  state.weeklyPlan = plan;
  persistWeeklyPlan();
}

function removeFromPlan(dayId, meal) {
  const plan = { ...state.weeklyPlan };
  if (!plan[dayId]) return;
  plan[dayId] = { ...plan[dayId], [meal]: null };
  state.weeklyPlan = plan;
  persistWeeklyPlan();
}

function clearHistory() {
  state.history = [];
  persistHistory();
}

function clearWeeklyPlan() {
  state.weeklyPlan = createEmptyWeeklyPlan();
  persistWeeklyPlan();
}

function renderWeeklyPlan() {
  DOM.weeklyPlanGrid.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'planner__row planner__row--head';
  ['', ...MEALS.map((meal) => MEAL_DISPLAY[meal])].forEach((label) => {
    const cell = document.createElement('div');
    cell.textContent = label;
    header.appendChild(cell);
  });
  DOM.weeklyPlanGrid.appendChild(header);

  let hasEntries = false;

  WEEK_DAYS.forEach((day) => {
    const row = document.createElement('div');
    row.className = 'planner__row';

    const dayCell = document.createElement('div');
    dayCell.className = 'planner__cell planner__cell--head';
    dayCell.textContent = day.label;
    row.appendChild(dayCell);

    MEALS.forEach((meal) => {
      const cell = document.createElement('div');
      cell.className = 'planner__cell';
      const slot = state.weeklyPlan[day.id]?.[meal];
      if (slot?.recipeId) {
        hasEntries = true;
        const recipe = RECIPES.find((item) => item.id === slot.recipeId);
        if (recipe) {
          const container = document.createElement('div');
          container.className = 'planner__meal';
          const info = document.createElement('span');
          info.innerHTML = `<strong>${recipe.name}</strong><small>${getCuisineLabels(recipe.cuisines).join(' · ') || 'Personalizada'}</small>`;
          const remove = document.createElement('button');
          remove.type = 'button';
          remove.className = 'planner__remove';
          remove.setAttribute('aria-label', `Quitar ${recipe.name} de ${day.label} (${MEAL_DISPLAY[meal]})`);
          remove.textContent = '✕';
          remove.addEventListener('click', () => removeFromPlan(day.id, meal));
          container.append(info, remove);
          cell.appendChild(container);
        } else {
          cell.innerHTML = '<p class="planner__empty">Receta no disponible.</p>';
        }
      } else {
        const empty = document.createElement('p');
        empty.className = 'planner__empty';
        empty.textContent = 'Sin plan todavía';
        cell.appendChild(empty);
      }
      row.appendChild(cell);
    });

    DOM.weeklyPlanGrid.appendChild(row);
  });

  DOM.clearPlanButton.disabled = !hasEntries;
}

function aggregatePlanIngredients(plan) {
  const summary = new Map();
  WEEK_DAYS.forEach((day) => {
    MEALS.forEach((meal) => {
      const slot = plan[day.id]?.[meal];
      if (!slot?.recipeId) return;
      const recipe = RECIPES.find((item) => item.id === slot.recipeId);
      if (!recipe) return;
      (recipe.ingredients ?? []).forEach((ingredient) => {
        const itemName = typeof ingredient === 'object' ? ingredient.item : ingredient;
        if (!itemName) return;
        const key = toKey(itemName);
        const entry = summary.get(key) ?? { item: itemName, quantities: [] };
        const quantity = typeof ingredient === 'object' ? ingredient.quantity : '';
        if (quantity) {
          entry.quantities.push(quantity);
        }
        summary.set(key, entry);
      });
    });
  });
  return Array.from(summary.values()).sort((a, b) => a.item.localeCompare(b.item, 'es'));
}

function updateShoppingList() {
  DOM.shoppingList.innerHTML = '';
  const summary = aggregatePlanIngredients(state.weeklyPlan);
  if (!summary.length) {
    const empty = document.createElement('li');
    empty.className = 'shopping__empty';
    empty.textContent = 'Tu lista está vacía. Añade recetas al plan semanal para comenzar.';
    DOM.shoppingList.appendChild(empty);
    DOM.copyShoppingButton.disabled = true;
    state.shoppingSummaryText = '';
    return;
  }

  summary.forEach((entry) => {
    const li = document.createElement('li');
    const quantities = entry.quantities.length ? ` — ${entry.quantities.join(' + ')}` : '';
    li.textContent = `${entry.item}${quantities}`;
    DOM.shoppingList.appendChild(li);
  });

  state.shoppingSummaryText = summary
    .map((entry) => {
      const quantities = entry.quantities.length ? ` — ${entry.quantities.join(' + ')}` : '';
      return `${entry.item}${quantities}`;
    })
    .join('\n');
  DOM.copyShoppingButton.disabled = false;
}

async function copyShoppingList() {
  if (!state.shoppingSummaryText) return;
  const text = state.shoppingSummaryText;
  const originalLabel = DOM.copyShoppingButton.textContent;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    DOM.copyShoppingButton.textContent = 'Copiado ✔';
  } catch (error) {
    console.warn('No se pudo copiar la lista de la compra', error);
    DOM.copyShoppingButton.textContent = 'Error al copiar';
  } finally {
    DOM.copyShoppingButton.disabled = !state.shoppingSummaryText;
    setTimeout(() => {
      DOM.copyShoppingButton.textContent = originalLabel;
    }, 2000);
  }
}

function matchesRestrictions(recipe, restricted) {
  const ingredientNames = (recipe.ingredients ?? []).map((ingredient) =>
    typeof ingredient === 'object' ? ingredient.item : ingredient,
  );
  const keywords = recipe.keywords ?? [];
  return [...ingredientNames, ...keywords].some((name) => restricted.has(toKey(name)));
}

function displayNoRecipe(meal) {
  const cuisineNote = state.selectedCuisines.length ? ' en esas categorías' : '';
  DOM.resultTitle.textContent = 'Vaya, no encontramos una receta adecuada';
  DOM.resultSubtitle.textContent = `Revisa tus restricciones${cuisineNote} para desbloquear más opciones de ${MEAL_LABELS[meal]}.`;
  DOM.resultDescription.textContent = '';
  DOM.resultTags.hidden = true;
  DOM.resultDetails.hidden = true;
  DOM.resultIngredients.innerHTML = '';
  DOM.resultSteps.innerHTML = '';
  DOM.resultAlternatives.innerHTML = '';
  DOM.chefTip.hidden = true;
  setActionAvailability(false);
  state.lastRecipe = null;
  state.lastMeal = meal;

}

function generateRecipe() {
  if (!ensureAuthenticated()) return;
  const meal = detectMealType();
  const restricted = new Set(state.restrictions.map(toKey));

  const selected = new Set(state.selectedCuisines.map(toKey));
  const available = RECIPES.filter((recipe) => {
    if (recipe.meal !== meal) return false;
    if (selected.size && !recipe.cuisines.some((cuisine) => selected.has(toKey(cuisine)))) {
      return false;
    }
    return !matchesRestrictions(recipe, restricted);
  });


  if (!available.length) {
    displayNoRecipe(meal);
    return;
  }


  const recipe = available[Math.floor(Math.random() * available.length)];
  renderRecipe(recipe, meal, { recordHistory: true });

}

function ensureAuthenticated() {
  if (state.currentUser) return true;
  DOM.resultTitle.textContent = 'Necesitas iniciar sesión';

  DOM.resultSubtitle.textContent = 'Crea una cuenta gratuita para guardar tus configuraciones y generar recetas avanzadas.';
  DOM.resultDescription.textContent = '';
  DOM.resultTags.hidden = true;
  DOM.resultDetails.hidden = true;
  DOM.chefTip.hidden = true;
  setActionAvailability(false);

  openAuthDialog('login');
  return false;
}

function openAuthDialog(initialTab) {
  activateTab(initialTab === 'register' ? DOM.registerTab : DOM.loginTab);
  clearAuthFeedback();
  showDialog(DOM.authDialog);
}

function activateTab(tabButton) {
  const isLogin = tabButton === DOM.loginTab;
  DOM.loginTab.classList.toggle('tab--active', isLogin);
  DOM.registerTab.classList.toggle('tab--active', !isLogin);
  DOM.loginTab.setAttribute('aria-selected', String(isLogin));
  DOM.registerTab.setAttribute('aria-selected', String(!isLogin));
  DOM.loginPanel.classList.toggle('tab-panel--active', isLogin);
  DOM.registerPanel.classList.toggle('tab-panel--active', !isLogin);
  DOM.authTitle.textContent = isLogin ? 'Bienvenido a Chefy' : 'Crea tu cuenta en segundos';
}

function hashPassword(password) {
  return btoa(password);
}

function handleRegister() {
  const email = DOM.registerEmail.value.trim().toLowerCase();
  const password = DOM.registerPassword.value.trim();
  if (!email || !password) {
    setAuthFeedback('Introduce un correo y una contraseña válidos.', 'error');
    return;
  }
  if (password.length < 6) {
    setAuthFeedback('La contraseña debe tener al menos 6 caracteres.', 'error');
    return;
  }
  if (findUserByEmail(email)) {
    setAuthFeedback('Ya existe una cuenta con ese correo.', 'error');
    return;
  }
  const users = storage.getUsers();

  const newUser = {
    email,
    password: hashPassword(password),
    restrictions: state.restrictions,
    cuisines: state.selectedCuisines,
    history: [],
    weeklyPlan: createEmptyWeeklyPlan(),
  };
  storage.saveUsers([...users, newUser]);
  storage.setCurrentUserEmail(email);
  state.currentUser = newUser;
  state.history = [];
  state.weeklyPlan = createEmptyWeeklyPlan();
  setAuthFeedback('Cuenta creada con éxito. ¡Ya puedes generar recetas!', 'success');
  updateAuthUI();
  persistRestrictions();
  persistCuisines();
  persistHistory();
  persistWeeklyPlan();

  closeDialog(DOM.authDialog);
}

function handleLogin() {
  const email = DOM.loginEmail.value.trim().toLowerCase();
  const password = DOM.loginPassword.value.trim();
  if (!email || !password) {
    setAuthFeedback('Introduce tus credenciales para continuar.', 'error');
    return;
  }
  const user = findUserByEmail(email);
  if (!user || user.password !== hashPassword(password)) {
    setAuthFeedback('Correo o contraseña incorrectos.', 'error');
    return;
  }
  storage.setCurrentUserEmail(email);
  state.currentUser = user;
  state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];

  state.selectedCuisines = Array.isArray(user.cuisines) ? user.cuisines : [];
  state.history = Array.isArray(user.history) ? user.history : [];
  state.weeklyPlan = normalizeWeeklyPlan(user.weeklyPlan);
  setAuthFeedback('Inicio de sesión exitoso.', 'success');
  updateAuthUI();
  renderDefaultChips();
  renderActiveRestrictions();
  renderCuisineSelectors();
  renderHistory();
  renderWeeklyPlan();
  updateShoppingList();

  closeDialog(DOM.authDialog);
}

function updateAuthUI() {
  if (state.currentUser) {
    DOM.authToggle.hidden = true;
    DOM.logoutButton.hidden = false;
    DOM.userWelcome.hidden = false;
    DOM.userWelcome.textContent = `Hola, ${state.currentUser.email}`;
  } else {
    DOM.authToggle.hidden = false;
    DOM.logoutButton.hidden = true;
    DOM.userWelcome.hidden = true;
    DOM.userWelcome.textContent = '';
  }
}

function handleLogout() {
  storage.setCurrentUserEmail(null);
  state.currentUser = null;

  hydrateFromStorage();
  clearResultCard();

}

function handleSettingsOpen() {
  if (state.currentUser) {
    DOM.settingsStatus.textContent = 'Tus preferencias se guardan automáticamente en tu cuenta.';
  } else {

    DOM.settingsStatus.textContent = 'Modo invitado: inicia sesión para sincronizar tus restricciones y categorías en todos tus dispositivos.';
  }
  renderDefaultChips();
  renderActiveRestrictions();
  renderCuisineSelectors();

  showDialog(DOM.settingsPanel);
}

function hydrateFromStorage() {
  const email = storage.getCurrentUserEmail();
  if (email) {
    const user = findUserByEmail(email);
    if (user) {
      state.currentUser = user;
      state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];

      state.selectedCuisines = Array.isArray(user.cuisines) ? user.cuisines : [];
      state.history = Array.isArray(user.history) ? user.history : [];
      state.weeklyPlan = normalizeWeeklyPlan(user.weeklyPlan);
    } else {
      storage.setCurrentUserEmail(null);
      state.currentUser = null;
      state.restrictions = storage.getGuestRestrictions();
      state.selectedCuisines = storage.getGuestCuisines();
      state.history = storage.getGuestHistory();
      state.weeklyPlan = storage.getGuestWeeklyPlan();
    }
  } else {
    state.currentUser = null;
    state.restrictions = storage.getGuestRestrictions();
    state.selectedCuisines = storage.getGuestCuisines();
    state.history = storage.getGuestHistory();
    state.weeklyPlan = storage.getGuestWeeklyPlan();

  }
  updateAuthUI();
  renderDefaultChips();
  renderActiveRestrictions();

  renderCuisineSelectors();
  renderHistory();
  renderWeeklyPlan();
  updateShoppingList();

}

function registerEventListeners() {
  DOM.generateButton.addEventListener('click', generateRecipe);
  DOM.settingsButton.addEventListener('click', handleSettingsOpen);
  DOM.addRestriction.addEventListener('click', () => addRestriction(DOM.customRestriction.value));
  DOM.customRestriction.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addRestriction(DOM.customRestriction.value);
    }
  });
  DOM.loginTab.addEventListener('click', () => activateTab(DOM.loginTab));
  DOM.registerTab.addEventListener('click', () => activateTab(DOM.registerTab));
  DOM.registerButton.addEventListener('click', handleRegister);
  DOM.loginButton.addEventListener('click', handleLogin);
  DOM.logoutButton.addEventListener('click', handleLogout);
  DOM.authToggle.addEventListener('click', () => openAuthDialog('login'));

  DOM.shareButton.addEventListener('click', shareCurrentRecipe);
  DOM.addToPlanButton.addEventListener('click', addCurrentRecipeToPlan);
  DOM.clearHistoryButton.addEventListener('click', clearHistory);
  DOM.clearPlanButton.addEventListener('click', clearWeeklyPlan);
  DOM.copyShoppingButton.addEventListener('click', copyShoppingList);

  document.querySelectorAll('button[data-modal]').forEach((button) => {
    const modalId = button.getAttribute('data-modal');
    const dialog = document.getElementById(modalId);
    if (!dialog) return;
    button.addEventListener('click', () => showDialog(dialog));
  });
  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeDialog(dialog);
    });
  });
}

function init() {
  updateCurrentYear();
  updateMealUI();
  hydrateFromStorage();
  registerEventListeners();

  clearResultCard();

  setInterval(updateMealUI, 60 * 1000);
}

init();
