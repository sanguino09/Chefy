const DOM = {
  generateButton: document.getElementById('generateButton'),
  mealHint: document.getElementById('mealHint'),
  resultTitle: document.getElementById('resultTitle'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  resultDescription: document.getElementById('resultDescription'),
  resultTags: document.getElementById('resultTags'),
  resultCalories: document.getElementById('resultCalories'),

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
  shareMenu: document.getElementById('shareMenu'),
  planDaySelect: document.getElementById('planDaySelect'),
  addToPlanButton: document.getElementById('addToPlanButton'),
  historyList: document.getElementById('historyList'),
  clearHistoryButton: document.getElementById('clearHistoryButton'),
  planSelect: document.getElementById('planSelect'),
  addPlanButton: document.getElementById('addPlanButton'),
  weeklyPlanGrid: document.getElementById('weeklyPlanGrid'),
  clearPlanButton: document.getElementById('clearPlanButton'),
  sharePlanButton: document.getElementById('sharePlanButton'),
  planShareMenu: document.getElementById('planShareMenu'),
  shoppingList: document.getElementById('shoppingList'),
  copyShoppingButton: document.getElementById('copyShoppingButton'),
  cuisineChips: document.getElementById('cuisineChips'),
  cuisineQuickFilters: document.getElementById('cuisineQuickFilters'),
  adminButton: document.getElementById('adminButton'),
  adminDialog: document.getElementById('adminDialog'),
  adminRecipeList: document.getElementById('adminRecipeList'),
  adminRecipeId: document.getElementById('adminRecipeId'),
  adminRecipeName: document.getElementById('adminRecipeName'),
  adminRecipeMeal: document.getElementById('adminRecipeMeal'),
  adminRecipeCalories: document.getElementById('adminRecipeCalories'),
  adminRecipeTime: document.getElementById('adminRecipeTime'),
  adminRecipeServings: document.getElementById('adminRecipeServings'),
  adminRecipeCuisines: document.getElementById('adminRecipeCuisines'),
  adminRecipeTags: document.getElementById('adminRecipeTags'),
  adminRecipeDescription: document.getElementById('adminRecipeDescription'),
  adminRecipeIngredients: document.getElementById('adminRecipeIngredients'),
  adminRecipeSteps: document.getElementById('adminRecipeSteps'),
  adminRecipeSwaps: document.getElementById('adminRecipeSwaps'),
  adminRecipeKeywords: document.getElementById('adminRecipeKeywords'),
  adminSaveRecipeButton: document.getElementById('adminSaveRecipeButton'),
  adminNewRecipeButton: document.getElementById('adminNewRecipeButton'),
  adminDeleteRecipeButton: document.getElementById('adminDeleteRecipeButton'),
  adminFeedback: document.getElementById('adminFeedback'),
  adminUserList: document.getElementById('adminUserList'),
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


const BASE_RECIPES = [
  {
    id: 'sunrise-bowl',
    name: 'Bowl energizante de amanecer',
    meal: 'desayuno',

    cuisines: ['mediterranea', 'plant-based'],
    time: '10 minutos',
    servings: '1 ración',
    calories: 420,
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
    calories: 510,
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
    calories: 380,
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
    calories: 560,
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
    calories: 540,
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
    calories: 430,
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
    calories: 600,
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
    calories: 520,
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
    calories: 580,
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
    calories: 640,
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
    calories: 490,
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
    calories: 540,
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
  ADMIN_RECIPES: 'chefyRecipeCatalog',
  SUPER_ADMIN_EMAIL: 'chefySuperAdminEmail',
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

function createPlan(id, name, slots = createEmptyWeeklyPlan()) {
  const planId = (id ?? '').toString().trim() || 'plan-1';
  const planName = (name ?? '').toString().trim() || 'Planificación 1';
  return { id: planId, name: planName, slots: normalizeWeeklyPlan(slots) };
}

function createInitialPlannerState() {
  const initialId = 'plan-1';
  return {
    activePlanId: initialId,
    plans: {
      [initialId]: createPlan(initialId, 'Planificación 1'),
    },
  };
}

function normalizePlannerState(raw) {
  if (!raw || typeof raw !== 'object') {
    return createInitialPlannerState();
  }

  if (raw.plans && typeof raw.plans === 'object') {
    const entries = Object.values(raw.plans);
    if (!entries.length) {
      return createInitialPlannerState();
    }
    const normalized = {};
    entries.forEach((plan, index) => {
      const fallbackId = `plan-${index + 1}`;
      const planId = typeof plan?.id === 'string' && plan.id.trim() ? plan.id.trim() : fallbackId;
      const planName = typeof plan?.name === 'string' && plan.name.trim() ? plan.name.trim() : `Planificación ${index + 1}`;
      normalized[planId] = createPlan(planId, planName, plan?.slots ?? plan);
    });
    const activeId = normalized[raw.activePlanId]?.id ?? Object.keys(normalized)[0];
    return { activePlanId: activeId, plans: normalized };
  }

  // Legacy single weekly plan
  const legacy = normalizeWeeklyPlan(raw);
  const initial = createInitialPlannerState();
  initial.plans[initial.activePlanId] = createPlan(initial.activePlanId, initial.plans[initial.activePlanId].name, legacy);
  return initial;
}

function ensurePlannerState() {
  if (!Object.keys(state.weeklyPlans).length) {
    const initial = createInitialPlannerState();
    state.weeklyPlans = initial.plans;
    state.activePlanId = initial.activePlanId;
  }
  if (!state.weeklyPlans[state.activePlanId]) {
    state.activePlanId = Object.keys(state.weeklyPlans)[0];
  }
}

function ensureActivePlan() {
  ensurePlannerState();
  return state.weeklyPlans[state.activePlanId];
}

function getActivePlanSlots() {
  return ensureActivePlan().slots;
}

function planHasEntries(plan) {
  return WEEK_DAYS.some((day) => MEALS.some((meal) => Boolean(plan?.[day.id]?.[meal]?.recipeId)));
}

function generateNextPlanId() {
  ensurePlannerState();
  let index = Object.keys(state.weeklyPlans).length + 1;
  let id = `plan-${index}`;
  while (state.weeklyPlans[id]) {
    index += 1;
    id = `plan-${index}`;
  }
  return id;
}

function buildPlanShareSummary(plan, planName) {
  const sections = [];
  WEEK_DAYS.forEach((day) => {
    const entries = [];
    MEALS.forEach((meal) => {
      const slot = plan?.[day.id]?.[meal];
      if (!slot?.recipeId) return;
      const recipe = getRecipeById(slot.recipeId);
      if (recipe) {
        entries.push(`• ${MEAL_DISPLAY[meal]}: ${recipe.name}`);
      } else {
        entries.push(`• ${MEAL_DISPLAY[meal]}: Receta no disponible`);
      }
    });
    if (entries.length) {
      sections.push([`${day.label}:`, ...entries]);
    }
  });

  if (!sections.length) {
    return '';
  }

  const lines = planName ? [planName, ''] : [];
  sections.forEach((section, index) => {
    lines.push(...section);
    if (index < sections.length - 1) {
      lines.push('');
    }
  });
  lines.push('', 'Plan creado con Chefy 🍳');
  return lines.join('\n');
}

function cleanString(value) {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '';
}

function normalizeUserRole(user, superAdminEmail) {
  if (!user || typeof user !== 'object') return null;
  const normalized = { ...user };
  const isSuper = normalized.role === 'super-admin' || (superAdminEmail && normalized.email === superAdminEmail);
  normalized.role = isSuper ? 'super-admin' : 'user';
  return normalized;
}

function normalizeRecipes(rawRecipes) {
  const source = Array.isArray(rawRecipes) ? rawRecipes : [];
  const seen = new Set();
  const normalized = [];
  source.forEach((recipe, index) => {
    if (!recipe || typeof recipe !== 'object') return;
    const fallbackId = `receta-${index + 1}`;
    const baseId = cleanString(recipe.id) || fallbackId;
    let id = baseId;
    let counter = 2;
    while (seen.has(id)) {
      id = `${baseId}-${counter}`;
      counter += 1;
    }
    seen.add(id);

    const meal = MEALS.includes(recipe.meal) ? recipe.meal : 'comida';
    const caloriesValue = Number.parseInt(recipe.calories, 10);
    const calories = Number.isFinite(caloriesValue) && caloriesValue > 0 ? caloriesValue : null;
    const cuisines = (Array.isArray(recipe.cuisines) ? recipe.cuisines : [])
      .map((cuisine) => toKey(cuisine))
      .filter(Boolean);
    const tags = (Array.isArray(recipe.tags) ? recipe.tags : []).map((tag) => cleanString(tag)).filter(Boolean);
    const ingredients = (Array.isArray(recipe.ingredients) ? recipe.ingredients : [])
      .map((ingredient) => {
        if (ingredient && typeof ingredient === 'object') {
          const quantity = cleanString(ingredient.quantity);
          const item = cleanString(ingredient.item);
          if (!item) return null;
          return quantity ? { quantity, item } : { quantity: '', item };
        }
        const item = cleanString(ingredient);
        if (!item) return null;
        return { quantity: '', item };
      })
      .filter(Boolean)
      .map((ingredient) => ({
        quantity: cleanString(ingredient.quantity),
        item: cleanString(ingredient.item),
      }));
    const steps = (Array.isArray(recipe.steps) ? recipe.steps : []).map((step) => cleanString(step)).filter(Boolean);
    const swaps = (Array.isArray(recipe.swaps) ? recipe.swaps : [])
      .map((swap) => {
        if (!swap || typeof swap !== 'object') return null;
        const ingredient = cleanString(swap.ingredient);
        const alternatives = (Array.isArray(swap.alternatives) ? swap.alternatives : [])
          .map((alt) => cleanString(alt))
          .filter(Boolean);
        if (!ingredient) return null;
        return { ingredient, alternatives };
      })
      .filter(Boolean);
    const keywords = (Array.isArray(recipe.keywords) ? recipe.keywords : [])
      .map((keyword) => toKey(keyword))
      .filter(Boolean);

    normalized.push({
      ...recipe,
      id,
      name: cleanString(recipe.name) || 'Receta sin título',
      meal,
      time: cleanString(recipe.time),
      servings: cleanString(recipe.servings),
      description: cleanString(recipe.description),
      calories,
      cuisines,
      tags,
      ingredients,
      steps,
      swaps,
      keywords,
    });
  });

  if (!normalized.length && rawRecipes !== BASE_RECIPES) {
    return normalizeRecipes(BASE_RECIPES);
  }

  return normalized;
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
    const users = this.readJSON(STORAGE_KEYS.USERS, []);
    const superAdminEmail = this.getSuperAdminEmail();
    return users
      .map((user) => normalizeUserRole(user, superAdminEmail))
      .filter(Boolean);
  },
  saveUsers(users) {
    const superAdminEmail = this.getSuperAdminEmail();
    const normalized = (Array.isArray(users) ? users : [])
      .map((user) => normalizeUserRole(user, superAdminEmail))
      .filter(Boolean);
    this.writeJSON(STORAGE_KEYS.USERS, normalized);

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
  getGuestPlanner() {
    return normalizePlannerState(this.readJSON(STORAGE_KEYS.GUEST_WEEKLY_PLAN, createInitialPlannerState()));
  },
  saveGuestPlanner(planner) {
    this.writeJSON(STORAGE_KEYS.GUEST_WEEKLY_PLAN, planner);

  },
  getRecipeCatalog() {
    return this.readJSON(STORAGE_KEYS.ADMIN_RECIPES, []);
  },
  saveRecipeCatalog(recipes) {
    this.writeJSON(STORAGE_KEYS.ADMIN_RECIPES, recipes);
  },
  getSuperAdminEmail() {
    return localStorage.getItem(STORAGE_KEYS.SUPER_ADMIN_EMAIL) || '';
  },
  setSuperAdminEmail(email) {
    if (email) {
      localStorage.setItem(STORAGE_KEYS.SUPER_ADMIN_EMAIL, email);
    } else {
      localStorage.removeItem(STORAGE_KEYS.SUPER_ADMIN_EMAIL);
    }
    const users = this.getUsers();
    this.writeJSON(
      STORAGE_KEYS.USERS,
      users.map((user) => normalizeUserRole(user, email || '')),
    );
  },
};

const state = {
  currentUser: null,
  restrictions: [],

  selectedCuisines: [],
  history: [],
  weeklyPlans: {},
  activePlanId: '',
  lastRecipe: null,
  lastMeal: null,
  shoppingSummaryText: '',
  planShareText: '',
  planShareSubject: 'Planificación semanal de Chefy',
  recipes: normalizeRecipes(BASE_RECIPES),
  superAdminEmail: '',
  adminSelectedRecipeId: '',
  adminFeedbackTimeout: null,

};

const defaultPlannerState = createInitialPlannerState();
state.weeklyPlans = defaultPlannerState.plans;
state.activePlanId = defaultPlannerState.activePlanId;

function loadRecipeCatalog() {
  const previousSelection = state.adminSelectedRecipeId;
  state.recipes = normalizeRecipes(storage.getRecipeCatalog());
  if (previousSelection && !getRecipeById(previousSelection)) {
    state.adminSelectedRecipeId = '';
  }
}

function persistRecipeCatalog() {
  storage.saveRecipeCatalog(state.recipes);
}

function getRecipeById(id) {
  if (!id) return null;
  return state.recipes.find((recipe) => recipe.id === id) ?? null;
}

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

function persistPlanner() {
  const normalized = {};
  Object.entries(state.weeklyPlans).forEach(([id, plan], index) => {
    const name = typeof plan?.name === 'string' && plan.name.trim() ? plan.name.trim() : `Planificación ${index + 1}`;
    const normalizedPlan = createPlan(id, name, plan?.slots ?? plan);
    normalized[normalizedPlan.id] = normalizedPlan;
  });
  state.weeklyPlans = normalized;
  ensurePlannerState();
  const plannerPayload = { plans: state.weeklyPlans, activePlanId: state.activePlanId };
  if (state.currentUser) {
    persistUserData({ weeklyPlans: plannerPayload.plans, activePlanId: plannerPayload.activePlanId });
  } else {
    storage.saveGuestPlanner(plannerPayload);
  }
  renderPlanSelector();
  renderWeeklyPlan();
  updateShoppingList();
  updatePlanShareSummary();
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
  DOM.shareButton.setAttribute('aria-expanded', 'false');
  DOM.shareButton.disabled = disabled;
  if (disabled) {
    closeShareMenu(DOM.shareMenu);
  }
  DOM.addToPlanButton.disabled = disabled;
}

function clearResultCard() {
  DOM.resultTitle.textContent = DEFAULT_RESULT.title;
  DOM.resultSubtitle.textContent = DEFAULT_RESULT.subtitle;
  DOM.resultDescription.textContent = DEFAULT_RESULT.description;
  DOM.resultTags.hidden = true;
  DOM.resultTags.innerHTML = '';
  DOM.resultCalories.hidden = true;
  DOM.resultCalories.textContent = '';
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
function renderRecipe(recipe, meal, { recordHistory: shouldRecordHistory = false } = {}) {
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
  const calorieTag = recipe.calories ? `${recipe.calories} kcal` : '';
  const tagValues = [
    MEAL_DISPLAY[meal],
    ...cuisineLabels,
    recipe.time,
    recipe.servings,
    calorieTag,
    ...(recipe.tags ?? []),
  ];
  tagValues.filter(Boolean).forEach((text) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = text;
    DOM.resultTags.appendChild(span);
  });

  if (recipe.calories) {
    DOM.resultCalories.hidden = false;
    DOM.resultCalories.textContent = `Calorías aproximadas: ${recipe.calories} kcal`;
  } else {
    DOM.resultCalories.hidden = true;
    DOM.resultCalories.textContent = '';
  }

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
  if (shouldRecordHistory) {
    saveRecipeToHistory(recipe, meal);
  }
}

function saveRecipeToHistory(recipe, meal) {
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
    const recipe = getRecipeById(entry.recipeId);
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

function buildRecipeSharePayload(recipe, meal) {
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
  const subject = `Receta de Chefy: ${recipe.name}`;
  return { message, subject };
}

function openShareWindow(url) {
  window.open(url, '_blank', 'noopener');
}

async function copyShareText(text, optionButton) {
  if (!text) return;
  const labelNode = optionButton?.querySelector('.label');
  const originalLabel = labelNode?.textContent;
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
    if (labelNode) {
      labelNode.textContent = 'Copiado ✔';
      setTimeout(() => {
        labelNode.textContent = originalLabel;
      }, 2000);
    }
  } catch (error) {
    console.warn('No se pudo copiar el texto de compartir', error);
    if (labelNode) {
      labelNode.textContent = 'Error al copiar';
      setTimeout(() => {
        labelNode.textContent = originalLabel;
      }, 2000);
    }
  }
}

function shareViaTarget(target, { message, subject }, optionButton) {
  if (!message) return;
  switch (target) {
    case 'whatsapp':
      openShareWindow(`https://wa.me/?text=${encodeURIComponent(message)}`);
      break;
    case 'telegram':
      openShareWindow(`https://t.me/share/url?text=${encodeURIComponent(message)}`);
      break;
    case 'email': {
      const mailto = `mailto:?subject=${encodeURIComponent(subject ?? 'Compartido desde Chefy')}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
      break;
    }
    case 'copy':
      return copyShareText(message, optionButton);
    default:
      break;
  }
  return undefined;
}

function shareRecipe(target, optionButton) {
  if (!state.lastRecipe) return;
  const meal = state.lastMeal ?? detectMealType();
  const payload = buildRecipeSharePayload(state.lastRecipe, meal);
  return shareViaTarget(target, payload, optionButton);
}

function shareWeeklyPlan(target, optionButton) {
  if (!state.planShareText) return;
  const payload = { message: state.planShareText, subject: state.planShareSubject };
  return shareViaTarget(target, payload, optionButton);
}

let openShareMenuElement = null;

function closeShareMenu(menu) {
  if (!menu || menu.hidden) return;
  menu.hidden = true;
  const triggerId = menu.dataset.openedBy;
  if (triggerId) {
    const trigger = document.getElementById(triggerId);
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  }
  menu.dataset.openedBy = '';
  if (openShareMenuElement === menu) {
    openShareMenuElement = null;
  }
}

function closeAllShareMenus() {
  closeShareMenu(DOM.shareMenu);
  closeShareMenu(DOM.planShareMenu);
}

function toggleShareMenu(menu, trigger) {
  if (!menu || !trigger || trigger.disabled) return;
  const isOpen = !menu.hidden;
  if (isOpen) {
    closeShareMenu(menu);
    return;
  }
  closeAllShareMenus();
  menu.hidden = false;
  menu.dataset.openedBy = trigger.id;
  trigger.setAttribute('aria-expanded', 'true');
  openShareMenuElement = menu;
}

async function handleShareMenuClick(event) {
  const option = event.target.closest('.share-option');
  if (!option) return;
  const menu = event.currentTarget;
  const target = option.dataset.shareTarget;
  const type = menu.dataset.shareType;
  if (!target || !type) return;
  if (type === 'plan') {
    await shareWeeklyPlan(target, option);
  } else {
    await shareRecipe(target, option);
  }
  closeShareMenu(menu);
}

function handleDocumentClick(event) {
  if (!openShareMenuElement) return;
  if (event.target.closest('.share-control')) return;
  closeAllShareMenus();
}

function handleDocumentKeydown(event) {
  if (event.key === 'Escape') {
    closeAllShareMenus();
  }
}

function addCurrentRecipeToPlan() {
  if (!state.lastRecipe) return;
  const day = DOM.planDaySelect.value || WEEK_DAYS[0].id;
  const meal = state.lastMeal ?? detectMealType();
  const activePlan = ensureActivePlan();
  const slots = normalizeWeeklyPlan(activePlan.slots);
  const dayPlan = { ...(slots[day] ?? { desayuno: null, comida: null, cena: null }) };
  dayPlan[meal] = { recipeId: state.lastRecipe.id, addedAt: Date.now() };
  const updatedSlots = { ...slots, [day]: dayPlan };
  state.weeklyPlans = {
    ...state.weeklyPlans,
    [activePlan.id]: { ...activePlan, slots: updatedSlots },
  };
  persistPlanner();
}

function removeFromPlan(dayId, meal) {
  const activePlan = ensureActivePlan();
  const slots = normalizeWeeklyPlan(activePlan.slots);
  if (!slots[dayId]) return;
  slots[dayId] = { ...slots[dayId], [meal]: null };
  state.weeklyPlans = {
    ...state.weeklyPlans,
    [activePlan.id]: { ...activePlan, slots },
  };
  persistPlanner();
}

function clearHistory() {
  state.history = [];
  persistHistory();
}

function clearWeeklyPlan() {
  const activePlan = ensureActivePlan();
  state.weeklyPlans = {
    ...state.weeklyPlans,
    [activePlan.id]: { ...activePlan, slots: createEmptyWeeklyPlan() },
  };
  persistPlanner();
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

  const plan = getActivePlanSlots();

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
      const slot = plan[day.id]?.[meal];
      if (slot?.recipeId) {
        hasEntries = true;
        const recipe = getRecipeById(slot.recipeId);
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
  if (DOM.sharePlanButton) {
    DOM.sharePlanButton.disabled = !hasEntries;
  }
}

function renderPlanSelector() {
  if (!DOM.planSelect) return;
  ensurePlannerState();
  DOM.planSelect.innerHTML = '';
  const plans = Object.values(state.weeklyPlans);
  plans.forEach((plan, index) => {
    const option = document.createElement('option');
    option.value = plan.id;
    option.textContent = plan.name || `Planificación ${index + 1}`;
    DOM.planSelect.appendChild(option);
  });
  DOM.planSelect.value = state.activePlanId;
}

function setActivePlan(planId) {
  if (!planId || !state.weeklyPlans[planId]) return;
  if (planId === state.activePlanId) return;
  state.activePlanId = planId;
  persistPlanner();
}

function handlePlanSelectChange(event) {
  setActivePlan(event.target.value);
}

function handleAddPlan() {
  const newId = generateNextPlanId();
  const order = Object.keys(state.weeklyPlans).length + 1;
  const name = `Planificación ${order}`;
  state.weeklyPlans = {
    ...state.weeklyPlans,
    [newId]: createPlan(newId, name),
  };
  state.activePlanId = newId;
  persistPlanner();
  DOM.planSelect?.focus();
}

function aggregatePlanIngredients(plan) {
  const summary = new Map();
  WEEK_DAYS.forEach((day) => {
    MEALS.forEach((meal) => {
      const slot = plan[day.id]?.[meal];
      if (!slot?.recipeId) return;
      const recipe = getRecipeById(slot.recipeId);
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
  const summary = aggregatePlanIngredients(getActivePlanSlots());
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

function updatePlanShareSummary() {
  const activePlan = ensureActivePlan();
  const summary = buildPlanShareSummary(normalizeWeeklyPlan(activePlan.slots), activePlan.name);
  state.planShareText = summary;
  const subjectName = activePlan.name?.trim();
  state.planShareSubject = subjectName ? `${subjectName} · Chefy` : 'Planificación semanal de Chefy';

  if (DOM.sharePlanButton) {
    DOM.sharePlanButton.disabled = !summary;
    const label = subjectName ? `Compartir ${subjectName}` : 'Compartir planificación semanal';
    DOM.sharePlanButton.setAttribute('aria-label', label);
    DOM.sharePlanButton.title = label;
    DOM.sharePlanButton.setAttribute('aria-expanded', 'false');
    closeShareMenu(DOM.planShareMenu);
  }
}

function isSuperAdmin(user) {
  if (!user) return false;
  const superAdminEmail = state.superAdminEmail || storage.getSuperAdminEmail();
  return user.role === 'super-admin' || (!!superAdminEmail && user.email === superAdminEmail);
}

function updateAdminAvailability() {
  if (!DOM.adminButton) return;
  const available = isSuperAdmin(state.currentUser);
  DOM.adminButton.hidden = !available;
  if (!available) {
    closeDialog(DOM.adminDialog);
  }
}

function clearAdminFeedback() {
  if (state.adminFeedbackTimeout) {
    clearTimeout(state.adminFeedbackTimeout);
    state.adminFeedbackTimeout = null;
  }
  if (!DOM.adminFeedback) return;
  DOM.adminFeedback.textContent = '';
  DOM.adminFeedback.classList.remove('form-feedback--error', 'form-feedback--success');
}

function setAdminFeedback(message, type = 'info') {
  if (!DOM.adminFeedback) return;
  clearAdminFeedback();
  if (!message) return;
  DOM.adminFeedback.textContent = message;
  if (type === 'error') {
    DOM.adminFeedback.classList.add('form-feedback--error');
  } else if (type === 'success') {
    DOM.adminFeedback.classList.add('form-feedback--success');
  }
  state.adminFeedbackTimeout = setTimeout(() => {
    if (DOM.adminFeedback.textContent === message) {
      clearAdminFeedback();
    }
  }, 3500);
}

function parseCommaList(value) {
  return value
    .split(',')
    .map((item) => cleanString(item))
    .filter(Boolean);
}

function formatCommaList(list) {
  return (Array.isArray(list) ? list : []).filter(Boolean).join(', ');
}

function parseLines(value) {
  return value
    .split('\n')
    .map((line) => cleanString(line))
    .filter(Boolean);
}

function formatLines(list) {
  return (Array.isArray(list) ? list : []).map((line) => cleanString(line)).filter(Boolean).join('\n');
}

function parseIngredients(value) {
  return parseLines(value).map((line) => {
    const [first, ...rest] = line.split('|');
    const quantity = rest.length ? cleanString(first) : '';
    const item = rest.length ? cleanString(rest.join('|')) : cleanString(first);
    return { quantity, item };
  });
}

function formatIngredients(list) {
  return (Array.isArray(list) ? list : [])
    .map((ingredient) => {
      if (!ingredient || typeof ingredient !== 'object') {
        const item = cleanString(ingredient);
        return item;
      }
      const quantity = cleanString(ingredient.quantity);
      const item = cleanString(ingredient.item);
      if (!item) return '';
      return quantity ? `${quantity} | ${item}` : item;
    })
    .filter(Boolean)
    .join('\n');
}

function parseSwaps(value) {
  return parseLines(value)
    .map((line) => {
      const [first, ...rest] = line.split(':');
      const ingredient = cleanString(first);
      const alternatives = rest.length
        ? rest
            .join(':')
            .split(',')
            .map((alt) => cleanString(alt))
            .filter(Boolean)
        : [];
      if (!ingredient) return null;
      return { ingredient, alternatives };
    })
    .filter(Boolean);
}

function formatSwaps(list) {
  return (Array.isArray(list) ? list : [])
    .map((swap) => {
      if (!swap || typeof swap !== 'object') return '';
      const ingredient = cleanString(swap.ingredient);
      if (!ingredient) return '';
      const alternatives = (Array.isArray(swap.alternatives) ? swap.alternatives : [])
        .map((alt) => cleanString(alt))
        .filter(Boolean);
      return alternatives.length ? `${ingredient}: ${alternatives.join(', ')}` : ingredient;
    })
    .filter(Boolean)
    .join('\n');
}

function slugifyRecipeName(name) {
  return toKey(name)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function generateRecipeId(name) {
  const base = slugifyRecipeName(name) || `receta-${Date.now()}`;
  let candidate = base;
  let counter = 2;
  const existing = new Set(state.recipes.map((recipe) => recipe.id));
  while (existing.has(candidate)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }
  return candidate;
}

function populateAdminForm(recipe) {
  if (!DOM.adminRecipeName) return;
  DOM.adminRecipeId.value = recipe?.id ?? '';
  DOM.adminRecipeName.value = recipe?.name ?? '';
  DOM.adminRecipeMeal.value = MEALS.includes(recipe?.meal) ? recipe.meal : 'comida';
  DOM.adminRecipeCalories.value = recipe?.calories ? String(recipe.calories) : '';
  DOM.adminRecipeTime.value = recipe?.time ?? '';
  DOM.adminRecipeServings.value = recipe?.servings ?? '';
  DOM.adminRecipeCuisines.value = formatCommaList(recipe?.cuisines);
  DOM.adminRecipeTags.value = formatCommaList(recipe?.tags);
  DOM.adminRecipeKeywords.value = formatCommaList(recipe?.keywords);
  DOM.adminRecipeDescription.value = recipe?.description ?? '';
  DOM.adminRecipeIngredients.value = formatIngredients(recipe?.ingredients);
  DOM.adminRecipeSteps.value = formatLines(recipe?.steps);
  DOM.adminRecipeSwaps.value = formatSwaps(recipe?.swaps);
}

function clearAdminForm() {
  if (!DOM.adminRecipeName) return;
  DOM.adminRecipeId.value = '';
  DOM.adminRecipeName.value = '';
  DOM.adminRecipeMeal.value = 'comida';
  DOM.adminRecipeCalories.value = '';
  DOM.adminRecipeTime.value = '';
  DOM.adminRecipeServings.value = '';
  DOM.adminRecipeCuisines.value = '';
  DOM.adminRecipeTags.value = '';
  DOM.adminRecipeKeywords.value = '';
  DOM.adminRecipeDescription.value = '';
  DOM.adminRecipeIngredients.value = '';
  DOM.adminRecipeSteps.value = '';
  DOM.adminRecipeSwaps.value = '';
}

function updateAdminControls() {
  if (DOM.adminDeleteRecipeButton) {
    DOM.adminDeleteRecipeButton.disabled = !state.adminSelectedRecipeId;
  }
}

function renderAdminRecipeList() {
  if (!DOM.adminRecipeList) return;
  const recipes = [...state.recipes].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const selectedId = state.adminSelectedRecipeId && getRecipeById(state.adminSelectedRecipeId) ? state.adminSelectedRecipeId : '';
  if (!selectedId) {
    state.adminSelectedRecipeId = '';
  }
  DOM.adminRecipeList.innerHTML = '';
  if (!recipes.length) {
    const empty = document.createElement('li');
    empty.className = 'admin-recipe-list__empty';
    empty.textContent = 'Todavía no hay recetas registradas.';
    DOM.adminRecipeList.appendChild(empty);
    return;
  }
  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    const meta = [];
    if (recipe.meal && MEAL_DISPLAY[recipe.meal]) {
      meta.push(MEAL_DISPLAY[recipe.meal]);
    }
    if (recipe.calories) {
      meta.push(`${recipe.calories} kcal`);
    }
    button.textContent = meta.length ? `${recipe.name} · ${meta.join(' · ')}` : recipe.name;
    const isSelected = recipe.id === selectedId;
    button.dataset.selected = String(isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
    button.addEventListener('click', () => {
      selectAdminRecipe(recipe.id);
    });
    li.appendChild(button);
    DOM.adminRecipeList.appendChild(li);
  });
}

function renderAdminUserList() {
  if (!DOM.adminUserList) return;
  const users = storage.getUsers();
  DOM.adminUserList.innerHTML = '';
  if (!users.length) {
    const empty = document.createElement('li');
    empty.className = 'admin-user-list__empty';
    empty.textContent = 'Todavía no hay usuarios registrados.';
    DOM.adminUserList.appendChild(empty);
    return;
  }
  users
    .slice()
    .sort((a, b) => a.email.localeCompare(b.email, 'es'))
    .forEach((user) => {
      const li = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = user.email;
      const role = document.createElement('span');
      role.textContent = `Rol: ${user.role === 'super-admin' ? 'Super admin' : 'Usuario'}`;
      const historyCount = Array.isArray(user.history) ? user.history.length : 0;
      const planCount = user.weeklyPlans ? Object.keys(user.weeklyPlans).length : user.weeklyPlan ? 1 : 0;
      const summary = document.createElement('span');
      summary.textContent = `Historial guardado: ${historyCount} · Planes: ${planCount}`;
      li.append(title, role, summary);
      DOM.adminUserList.appendChild(li);
    });
}

function selectAdminRecipe(recipeId) {
  state.adminSelectedRecipeId = recipeId;
  const recipe = getRecipeById(recipeId);
  if (recipe) {
    populateAdminForm(recipe);
  } else {
    clearAdminForm();
  }
  clearAdminFeedback();
  renderAdminRecipeList();
  updateAdminControls();
}

function handleAdminNewRecipe() {
  state.adminSelectedRecipeId = '';
  clearAdminForm();
  clearAdminFeedback();
  renderAdminRecipeList();
  updateAdminControls();
  DOM.adminRecipeName?.focus();
}

function handleAdminRecipeNameInput() {
  if (state.adminSelectedRecipeId) return;
  DOM.adminRecipeId.value = slugifyRecipeName(DOM.adminRecipeName.value);
}

function buildRecipePayload() {
  const name = cleanString(DOM.adminRecipeName.value);
  if (!name) {
    setAdminFeedback('Introduce un nombre para la receta.', 'error');
    DOM.adminRecipeName?.focus();
    return null;
  }
  const mealValue = cleanString(DOM.adminRecipeMeal.value);
  const meal = MEALS.includes(mealValue) ? mealValue : 'comida';
  const caloriesValue = Number.parseInt(DOM.adminRecipeCalories.value, 10);
  const calories = Number.isFinite(caloriesValue) && caloriesValue > 0 ? caloriesValue : null;
  const cuisines = parseCommaList(DOM.adminRecipeCuisines.value).map(toKey).filter(Boolean);
  const tags = parseCommaList(DOM.adminRecipeTags.value);
  const keywords = parseCommaList(DOM.adminRecipeKeywords.value).map(toKey).filter(Boolean);
  const ingredients = parseIngredients(DOM.adminRecipeIngredients.value);
  const steps = parseLines(DOM.adminRecipeSteps.value);
  const swaps = parseSwaps(DOM.adminRecipeSwaps.value);
  return {
    id: cleanString(DOM.adminRecipeId.value) || state.adminSelectedRecipeId || generateRecipeId(name),
    name,
    meal,
    calories,
    time: cleanString(DOM.adminRecipeTime.value),
    servings: cleanString(DOM.adminRecipeServings.value),
    cuisines,
    tags,
    keywords,
    description: cleanString(DOM.adminRecipeDescription.value),
    ingredients,
    steps,
    swaps,
  };
}

function handleAdminSaveRecipe() {
  if (!isSuperAdmin(state.currentUser)) {
    setAdminFeedback('Necesitas permisos de super admin para editar el recetario.', 'error');
    return;
  }
  const payload = buildRecipePayload();
  if (!payload) return;
  const existingIndex = state.recipes.findIndex((recipe) => recipe.id === payload.id);
  if (existingIndex >= 0) {
    state.recipes[existingIndex] = { ...state.recipes[existingIndex], ...payload };
  } else {
    state.recipes = [...state.recipes, payload];
  }
  state.recipes = normalizeRecipes(state.recipes);
  state.adminSelectedRecipeId = payload.id;
  persistRecipeCatalog();
  populateAdminForm(getRecipeById(payload.id));
  renderAdminRecipeList();
  updateAdminControls();
  refreshCatalogDependents(payload.id);
  setAdminFeedback('Receta guardada correctamente.', 'success');
}

function handleAdminDeleteRecipe() {
  if (!isSuperAdmin(state.currentUser)) {
    setAdminFeedback('Necesitas permisos de super admin para editar el recetario.', 'error');
    return;
  }
  if (!state.adminSelectedRecipeId) {
    setAdminFeedback('Selecciona una receta para eliminarla.', 'error');
    return;
  }
  const recipeId = state.adminSelectedRecipeId;
  if (!getRecipeById(recipeId)) {
    setAdminFeedback('La receta seleccionada ya no existe.', 'error');
    return;
  }
  state.recipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
  state.recipes = normalizeRecipes(state.recipes);
  persistRecipeCatalog();
  state.adminSelectedRecipeId = '';
  clearAdminForm();
  renderAdminRecipeList();
  updateAdminControls();
  removeRecipeFromCollections(recipeId);
  refreshCatalogDependents();
  setAdminFeedback('Receta eliminada del recetario.', 'success');
}

function refreshCatalogDependents(updatedRecipeId) {
  renderHistory();
  renderWeeklyPlan();
  updateShoppingList();
  updatePlanShareSummary();
  if (updatedRecipeId) {
    const updatedRecipe = getRecipeById(updatedRecipeId);
    if (updatedRecipe && state.lastRecipe?.id === updatedRecipeId) {
      const meal = state.lastMeal ?? updatedRecipe.meal;
      renderRecipe(updatedRecipe, meal, { recordHistory: false });
    }
  } else if (state.lastRecipe && !getRecipeById(state.lastRecipe.id)) {
    clearResultCard();
  }
}

function removeRecipeFromCollections(recipeId) {
  if (!recipeId) return;
  const historyChanged = state.history.some((entry) => entry.recipeId === recipeId);
  state.history = state.history.filter((entry) => entry.recipeId !== recipeId);
  if (historyChanged) {
    persistHistory();
  } else {
    renderHistory();
  }

  let plannerChanged = false;
  Object.entries(state.weeklyPlans).forEach(([planId, plan]) => {
    const slots = normalizeWeeklyPlan(plan.slots);
    let changed = false;
    WEEK_DAYS.forEach((day) => {
      MEALS.forEach((meal) => {
        if (slots[day.id]?.[meal]?.recipeId === recipeId) {
          slots[day.id][meal] = null;
          changed = true;
        }
      });
    });
    if (changed) {
      state.weeklyPlans = {
        ...state.weeklyPlans,
        [planId]: { ...plan, slots },
      };
      plannerChanged = true;
    }
  });

  if (plannerChanged) {
    persistPlanner();
  } else {
    renderWeeklyPlan();
    updateShoppingList();
    updatePlanShareSummary();
  }

  if (state.lastRecipe?.id === recipeId) {
    clearResultCard();
  }
}

function openAdminPanel() {
  if (!isSuperAdmin(state.currentUser)) return;
  state.superAdminEmail = storage.getSuperAdminEmail();
  clearAdminFeedback();
  if (!state.adminSelectedRecipeId && state.recipes.length) {
    state.adminSelectedRecipeId = state.recipes[0].id;
  }
  const recipe = getRecipeById(state.adminSelectedRecipeId);
  if (recipe) {
    populateAdminForm(recipe);
  } else {
    clearAdminForm();
  }
  renderAdminRecipeList();
  renderAdminUserList();
  updateAdminControls();
  showDialog(DOM.adminDialog);
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
  const available = state.recipes.filter((recipe) => {
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
  let superAdminEmail = storage.getSuperAdminEmail();
  if (!superAdminEmail) {
    storage.setSuperAdminEmail(email);
    superAdminEmail = email;
  }

  const planner = createInitialPlannerState();
  const newUser = {
    email,
    password: hashPassword(password),
    restrictions: state.restrictions,
    cuisines: state.selectedCuisines,
    history: [],
    weeklyPlans: planner.plans,
    activePlanId: planner.activePlanId,
    role: superAdminEmail === email ? 'super-admin' : 'user',
  };
  storage.saveUsers([...users, newUser]);
  storage.setCurrentUserEmail(email);
  state.superAdminEmail = superAdminEmail;
  state.currentUser = findUserByEmail(email) ?? newUser;
  state.history = [];
  state.weeklyPlans = planner.plans;
  state.activePlanId = planner.activePlanId;
  updatePlanShareSummary();
  renderPlanSelector();
  renderWeeklyPlan();
  updateShoppingList();
  setAuthFeedback('Cuenta creada con éxito. ¡Ya puedes generar recetas!', 'success');
  updateAuthUI();
  persistRestrictions();
  persistCuisines();
  persistHistory();
  persistPlanner();

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
  state.superAdminEmail = storage.getSuperAdminEmail();
  storage.setCurrentUserEmail(email);
  state.currentUser = user;
  state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];

  state.selectedCuisines = Array.isArray(user.cuisines) ? user.cuisines : [];
  state.history = Array.isArray(user.history) ? user.history : [];
  const plannerState = normalizePlannerState(
    user.weeklyPlans ? { plans: user.weeklyPlans, activePlanId: user.activePlanId } : user.weeklyPlan,
  );
  state.weeklyPlans = plannerState.plans;
  state.activePlanId = plannerState.activePlanId;
  setAuthFeedback('Inicio de sesión exitoso.', 'success');
  updateAuthUI();
  renderDefaultChips();
  renderActiveRestrictions();
  renderCuisineSelectors();
  renderHistory();
  renderPlanSelector();
  renderWeeklyPlan();
  updateShoppingList();
  updatePlanShareSummary();

  closeDialog(DOM.authDialog);
}

function updateAuthUI() {
  if (state.currentUser) {
    DOM.authToggle.hidden = true;
    DOM.authToggle.setAttribute('aria-hidden', 'true');
    DOM.logoutButton.hidden = false;
    DOM.logoutButton.setAttribute('aria-hidden', 'false');
    DOM.userWelcome.hidden = false;
    DOM.userWelcome.textContent = `Hola, ${state.currentUser.email}`;
  } else {
    DOM.authToggle.hidden = false;
    DOM.authToggle.setAttribute('aria-hidden', 'false');
    DOM.logoutButton.hidden = true;
    DOM.logoutButton.setAttribute('aria-hidden', 'true');
    DOM.userWelcome.hidden = true;
    DOM.userWelcome.textContent = '';
  }
  updateAdminAvailability();
}

function handleLogout() {
  storage.setCurrentUserEmail(null);
  state.currentUser = null;
  closeAllShareMenus();
  closeDialog(DOM.adminDialog);
  state.adminSelectedRecipeId = '';
  clearAdminForm();
  clearAdminFeedback();

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
  state.superAdminEmail = storage.getSuperAdminEmail();
  loadRecipeCatalog();
  const email = storage.getCurrentUserEmail();
  let plannerState;
  if (email) {
    const user = findUserByEmail(email);
    if (user) {
      state.currentUser = user;
      state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];

      state.selectedCuisines = Array.isArray(user.cuisines) ? user.cuisines : [];
      state.history = Array.isArray(user.history) ? user.history : [];
      plannerState = normalizePlannerState(
        user.weeklyPlans ? { plans: user.weeklyPlans, activePlanId: user.activePlanId } : user.weeklyPlan,
      );
    } else {
      storage.setCurrentUserEmail(null);
      state.currentUser = null;
      state.restrictions = storage.getGuestRestrictions();
      state.selectedCuisines = storage.getGuestCuisines();
      state.history = storage.getGuestHistory();
      plannerState = storage.getGuestPlanner();
    }
  } else {
    state.currentUser = null;
    state.restrictions = storage.getGuestRestrictions();
    state.selectedCuisines = storage.getGuestCuisines();
    state.history = storage.getGuestHistory();
    plannerState = storage.getGuestPlanner();

  }
  if (!plannerState) {
    plannerState = createInitialPlannerState();
  }
  state.weeklyPlans = plannerState.plans;
  state.activePlanId = plannerState.activePlanId;
  ensurePlannerState();
  updateAuthUI();
  updateAdminAvailability();
  renderDefaultChips();
  renderActiveRestrictions();

  renderCuisineSelectors();
  renderHistory();
  renderPlanSelector();
  renderWeeklyPlan();
  updateShoppingList();
  updatePlanShareSummary();
  closeAllShareMenus();

  if (DOM.adminDialog?.open) {
    renderAdminRecipeList();
    renderAdminUserList();
    updateAdminControls();
  }

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

  if (DOM.shareButton && DOM.shareMenu) {
    DOM.shareButton.addEventListener('click', () => toggleShareMenu(DOM.shareMenu, DOM.shareButton));
    DOM.shareMenu.addEventListener('click', handleShareMenuClick);
  }
  if (DOM.sharePlanButton && DOM.planShareMenu) {
    DOM.sharePlanButton.addEventListener('click', () => toggleShareMenu(DOM.planShareMenu, DOM.sharePlanButton));
    DOM.planShareMenu.addEventListener('click', handleShareMenuClick);
  }
  DOM.addToPlanButton.addEventListener('click', addCurrentRecipeToPlan);
  DOM.clearHistoryButton.addEventListener('click', clearHistory);
  DOM.clearPlanButton.addEventListener('click', clearWeeklyPlan);
  DOM.copyShoppingButton.addEventListener('click', copyShoppingList);
  DOM.planSelect?.addEventListener('change', handlePlanSelectChange);
  DOM.addPlanButton?.addEventListener('click', handleAddPlan);
  DOM.adminButton?.addEventListener('click', openAdminPanel);
  DOM.adminSaveRecipeButton?.addEventListener('click', handleAdminSaveRecipe);
  DOM.adminNewRecipeButton?.addEventListener('click', handleAdminNewRecipe);
  DOM.adminDeleteRecipeButton?.addEventListener('click', handleAdminDeleteRecipe);
  DOM.adminRecipeName?.addEventListener('input', handleAdminRecipeNameInput);
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleDocumentKeydown);

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
