const DOM = {
  generateButton: document.getElementById('generateButton'),
  mealHint: document.getElementById('mealHint'),
  mealButtons: document.querySelectorAll('.hero__activity-button'),
  resultTitle: document.getElementById('resultTitle'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  resultDescription: document.getElementById('resultDescription'),
  resultTags: document.getElementById('resultTags'),
  resultCalories: document.getElementById('resultCalories'),
  ratingPanel: document.getElementById('ratingPanel'),
  ratingAverage: document.getElementById('ratingAverage'),
  ratingCount: document.getElementById('ratingCount'),
  ratingControls: document.getElementById('ratingControls'),
  ratingResetButton: document.getElementById('ratingResetButton'),
  ratingNote: document.getElementById('ratingNote'),
  resultDetails: document.getElementById('resultDetails'),
  resultIngredients: document.getElementById('resultIngredients'),
  resultSteps: document.getElementById('resultSteps'),
  resultAlternatives: document.getElementById('resultAlternatives'),
  stepModeToggle: document.getElementById('stepModeToggle'),
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
  googleLoginButton: document.getElementById('googleLoginButton'),
  appleLoginButton: document.getElementById('appleLoginButton'),
  phoneLoginToggle: document.getElementById('phoneLoginToggle'),
  phoneLoginContainer: document.getElementById('phoneLoginContainer'),
  phoneNumberInput: document.getElementById('phoneNumberInput'),
  phoneSendCodeButton: document.getElementById('phoneSendCodeButton'),
  phoneCodeContainer: document.getElementById('phoneCodeContainer'),
  phoneCodeInput: document.getElementById('phoneCodeInput'),
  phoneVerifyButton: document.getElementById('phoneVerifyButton'),
  phoneLoginStatus: document.getElementById('phoneLoginStatus'),

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
  cookTab: document.getElementById('cookTab'),
  discoverTab: document.getElementById('discoverTab'),
  cookPanel: document.getElementById('cookPanel'),
  discoverPanel: document.getElementById('discoverPanel'),
  discoverFeed: document.getElementById('discoverFeed'),
  discoverForm: document.getElementById('discoverForm'),
  discoverType: document.getElementById('discoverType'),
  discoverAuthor: document.getElementById('discoverAuthor'),
  discoverTitleInput: document.getElementById('discoverTitleInput'),
  discoverSummary: document.getElementById('discoverSummary'),
  discoverDetails: document.getElementById('discoverDetails'),
  discoverPrefillRecipe: document.getElementById('discoverPrefillRecipe'),
  discoverPrefillPlan: document.getElementById('discoverPrefillPlan'),
  discoverFeedback: document.getElementById('discoverFeedback'),
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
  adminRecipeIngredientUnits: document.getElementById('adminRecipeIngredientUnits'),
  adminRecipeIngredientStores: document.getElementById('adminRecipeIngredientStores'),
  adminRecipeStepsCasero: document.getElementById('adminRecipeStepsCasero'),
  adminRecipeStepsThermomix: document.getElementById('adminRecipeStepsThermomix'),

  
 
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

const STEP_MODES = ['tradicional', 'thermomix'];

const STEP_MODE_LABELS = {
  tradicional: 'Modo casero',
  thermomix: 'Thermomix',
};

const SUPERMARKETS = [
  { id: 'mercadona', label: 'Mercadona', brand: 'Hacendado' },
  { id: 'carrefour', label: 'Carrefour', brand: 'Carrefour' },
  { id: 'alcampo', label: 'Alcampo', brand: 'Auchan' },
  { id: 'lidl', label: 'Lidl', brand: 'Chef Select' },
];

const SUPERMARKET_LABELS = Object.fromEntries(SUPERMARKETS.map((store) => [store.id, store.label]));

const RELATIVE_TIME_FORMAT = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' });
const DATE_FORMATTER = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' });

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
    stepModes: {
      tradicional: [
        'Coloca el yogur en un bol ancho y suavízalo con una cuchara.',
        'Distribuye la granola por encima creando capas crujientes.',
        'Añade los frutos rojos y espolvorea la chía.',
        'Termina con la miel y la ralladura de naranja para perfumar.',
      ],
      thermomix: [
        'Pon la granola en el vaso y trocea 4 seg/vel 4 si prefieres piezas más finas. Reserva.',
        'Añade el yogur al vaso y mezcla 10 seg/vel 2 para airearlo. Sirve en un bol ancho.',
        'Introduce los frutos rojos y la miel y mezcla 5 seg/giro inverso/vel 2 para glasearlos suavemente.',
        'Reparte la fruta sobre el yogur, añade la granola reservada, la chía y la ralladura de naranja.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Mezcla la harina, el matcha y el polvo de hornear en un bol.',
        'Incorpora el plátano triturado, el huevo, la leche y el sirope hasta obtener una masa homogénea.',
        'Engrasa una sartén antiadherente y vierte porciones de masa.',
        'Cocina dos minutos por lado y sirve con sirope de arce y frutos rojos.',
      ],
      thermomix: [
        'Añade al vaso la harina, el matcha y el polvo de hornear. Mezcla 5 seg/vel 5.',
        'Incorpora el plátano en trozos, el huevo, la leche y el sirope. Programa 15 seg/vel 4.',
        'Deja reposar la masa en el vaso 5 minutos mientras calientas una sartén ligeramente engrasada.',
        'Vierte porciones de masa y cocina 2 minutos por cada lado a fuego medio antes de servir con frutos rojos.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Mezcla la leche de coco con el sirope y la ralladura de lima.',
        'Añade la chía, remueve y deja reposar diez minutos; vuelve a mezclar.',
        'Refrigera mínimo dos horas o durante la noche.',
        'Sirve con el mango fresco, jugo de lima y coco tostado.',
      ],
      thermomix: [
        'Vierte en el vaso la leche de coco, el sirope y la ralladura. Mezcla 10 seg/vel 3.',
        'Añade las semillas de chía y mezcla 5 seg/vel 2. Deja reposar 10 minutos y vuelve a mezclar 5 seg/vel 2.',
        'Reparte la mezcla en vasos y refrigera al menos dos horas o toda la noche.',
        'Coloca el mango en cubos en el vaso limpio y pica 3 seg/giro inverso/vel 4. Sirve sobre el pudin con zumo de lima y coco tostado.',
      ],
    },
    swaps: [
      { ingredient: 'leche de coco ligera', alternatives: ['leche de almendras', 'leche de anacardos'] },
      { ingredient: 'mango', alternatives: ['piña fresca', 'papaya madura'] },
    ],
    chefTip: 'Para un contraste crujiente, añade cacahuetes tostados justo antes de servir.',
    keywords: ['chía', 'leche de coco', 'mango', 'lima', 'coco', 'sirope'],

  },
  {
    id: 'aurora-overnight',
    name: 'Parfait aurora de yogur y chía',
    meal: 'desayuno',
    cuisines: ['fusion', 'plant-based'],
    time: '8 minutos + reposo',
    servings: '2 raciones',
    calories: 360,
    description:
      'Capas de yogur aireado, chía cremosa y frutas luminosas para despertar con energía sin esfuerzo.',
    tags: ['meal prep', 'alto en proteínas'],
    ingredients: [
      { quantity: '200 ml', item: 'leche de coco ligera' },
      { quantity: '3 cdas', item: 'semillas de chía' },
      { quantity: '1 cda', item: 'sirope de arce' },
      { quantity: '400 g', item: 'yogur griego natural' },
      { quantity: '1/2 taza', item: 'granola de frutos secos' },
      { quantity: '1/2 taza', item: 'frutos rojos frescos' },
      { quantity: '1/2 taza', item: 'mango maduro en cubos' },
      { quantity: '1', item: 'naranja (zumo y ralladura)' },
      { quantity: '2 cdas', item: 'coco tostado en láminas' },
    ],
    stepModes: {
      tradicional: [
        'Mezcla la leche de coco con la chía y el sirope y deja reposar cinco minutos; remueve de nuevo.',
        'Bate el yogur con la ralladura y un chorrito de zumo de naranja hasta que quede sedoso.',
        'Alterna capas de chía, yogur y fruta en vasos fríos, terminando con granola y coco tostado.',
        'Refrigera toda la noche o al menos dos horas para servir bien frío a la mañana siguiente.',
      ],
      thermomix: [
        'Vierte la leche de coco, la chía y el sirope en el vaso. Mezcla 5 seg/vel 3 y deja reposar 5 minutos en el vaso.',
        'Añade el yogur y 20 g de zumo de naranja y bate 8 seg/vel 3 para airearlo.',
        'Distribuye la chía en vasos, añade el yogur y alterna con capas de mango y frutos rojos.',
        'Espolvorea la granola y el coco tostado antes de refrigerar al menos dos horas.',
      ],
    },
    swaps: [
      { ingredient: 'leche de coco ligera', alternatives: ['leche de almendras', 'leche de avena'] },
      { ingredient: 'yogur griego natural', alternatives: ['skyr natural', 'yogur vegetal'] },
    ],
    chefTip: 'Añade unas gotas de extracto de vainilla o cardamomo molido para perfumar las capas.',
    keywords: ['yogur', 'chía', 'frutos rojos', 'mango', 'desayuno', 'meal prep'],
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
    stepModes: {
      tradicional: [
        'Cuece la quinoa en el caldo durante quince minutos y airea con un tenedor.',
        'Dora el tofu en cubos con aceite de sésamo y glasea con tamari.',
        'Prepara las verduras al vapor y escurre los encurtidos.',
        'Monta el bento con capas de quinoa, tofu y verduras, espolvorea semillas de sésamo.',
      ],
      thermomix: [
        'Coloca la quinoa en el cestillo, vierte el caldo en el vaso e introduce el cestillo. Cocina 15 min/100 °C/vel 2. Retira y airea con un tenedor.',
        'Mezcla en el vaso limpio la salsa tamari y el aceite 5 seg/vel 3. Vierte sobre el tofu en cubos colocado en el recipiente Varoma.',
        'Añade 500 ml de agua al vaso, sitúa el Varoma con el tofu y cocina 8 min/Varoma/vel 1. Incorpora el pak choi al Varoma en los últimos 3 minutos.',
        'Monta el bento con la quinoa, el tofu glaseado, el pak choi, la zanahoria y los encurtidos. Termina con semillas de sésamo.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Precalienta el horno a 200 °C y coloca el salmón en una bandeja con papel sulfurizado.',
        'Mezcla el zumo de naranja, la miel y el jengibre rallado; pincela los lomos con el glaseado.',
        'Hornea durante doce minutos y saltea los espárragos en una sartén con aceite de oliva hasta que queden tiernos.',
        'Hidrata el couscous con agua caliente, airea con un tenedor y sirve todo junto con el jugo del asado.',
      ],
      thermomix: [
        'Precalienta el horno a 200 °C. Coloca en el vaso el zumo de naranja, la miel y el jengibre; mezcla 10 seg/vel 4.',
        'Sitúa los lomos en una fuente, báñalos con la mezcla y hornea 12 minutos mientras continúas con la guarnición.',
        'Sin lavar el vaso, añade 500 ml de agua, coloca los espárragos en el Varoma y cocina 8 min/Varoma/vel 1. Reserva.',
        'Retira el agua, pon 250 ml de agua limpia y calienta 4 min/100 °C/vel 1. Vierte sobre el couscous en un bol, deja reposar 3 minutos, suelta con un tenedor y sirve con el salmón, los espárragos y el glaseado.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Hidrata los fideos de arroz siguiendo el paquete, enfría bajo el grifo y escurre bien.',
        'Bate la crema de cacahuete con el zumo de lima y la salsa de soja hasta obtener un aliño sedoso.',
        'Corta la zanahoria, el pepino y el pimiento en tiras finas y mézclalos con los brotes y las hierbas.',
        'Incorpora los fideos, añade el aliño y termina con los cacahuetes tostados ligeramente picados.',
      ],
      thermomix: [
        'Coloca los cacahuetes en el vaso y trocea 3 seg/vel 5. Reserva.',
        'Hidrata los fideos según el paquete, enjuágalos con agua fría y escúrrelos muy bien.',
        'Sin lavar el vaso, añade la crema de cacahuete, el zumo de lima, la salsa de soja y 10 g de agua; mezcla 15 seg/vel 4.',
        'Agrega al vaso la zanahoria en trozos, el pepino sin semillas y el pimiento. Pica 4 seg/giro inverso/vel 4, añade las hierbas y mezcla 5 seg/giro inverso/vel 2.',
        'Combina en un bol grande los fideos con las verduras, los brotes de soja, el aliño y termina con los cacahuetes reservados.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Deshilacha el jackfruit con dos tenedores y sofríelo en una sartén con el ajo picado y un chorrito de aceite.',
        'Disuelve la pasta de achiote en 50 ml de agua, incorpórala al jackfruit y cocina a fuego medio diez minutos hasta que reduzca.',
        'Calienta el arroz integral y los frijoles negros, y prepara el pico de gallo fresco.',
        'Sirve el jackfruit achiotado sobre el arroz con frijoles, pico de gallo, aguacate y gajos de lima para exprimir al final.',
      ],
      thermomix: [
        'Escurre el jackfruit, colócalo en el vaso y trocea 4 seg/vel 4. Añade el ajo y 15 g de aceite y sofríe 6 min/120 °C/giro inverso/vel cuchara.',
        'Agrega la pasta de achiote disuelta en 50 ml de agua y cocina 12 min/100 °C/giro inverso/vel cuchara sin cubilete, colocando el cestillo para evitar salpicaduras.',
        'Calienta el arroz y los frijoles en el Varoma durante 6 min/Varoma/vel 1 y prepara el pico de gallo mientras tanto.',
        'Reparte en cuencos el arroz, los frijoles y el jackfruit jugoso, añade pico de gallo, aguacate y termina con lima exprimida.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Seca los garbanzos, mézclalos con aceite y ras el hanout y saltéalos en una sartén hasta dorarlos.',
        'Bate el tahini con el zumo de limón, agua y una pizca de sal hasta lograr un aderezo cremoso.',
        'Combina el farro con los brotes verdes, el pepino y los tomates cherry.',
        'Añade los garbanzos crujientes, aliña con la salsa y termina con aceite de oliva virgen extra.',
      ],
      thermomix: [
        'Coloca los garbanzos escurridos en el vaso con el aceite y el ras el hanout. Sofríe 8 min/120 °C/giro inverso/vel cuchara con el cestillo sobre la tapa.',
        'Retira los garbanzos crujientes y, sin lavar el vaso, añade el tahini, el zumo de limón, 40 g de agua y una pizca de sal; mezcla 12 seg/vel 4.',
        'Prepara un bol con el farro, los brotes, el pepino y los tomates.',
        'Incorpora los garbanzos y baña con el aderezo de tahini antes de servir.',
      ],
    },
    swaps: [
      { ingredient: 'farro', alternatives: ['cuscús perlado', 'arroz integral'] },
      { ingredient: 'tahini', alternatives: ['yogur natural', 'mantequilla de anacardo'] },
    ],
    chefTip: 'Añade ralladura de limón y menta fresca para un final aromático.',
    keywords: ['farro', 'garbanzos', 'tahini', 'limón', 'pepino', 'brotes'],
  },
  {
    id: 'iberian-pot',
    name: 'Cazuela ibérica de garbanzos y quinoa',
    meal: 'comida',
    cuisines: ['mediterranea'],
    time: '35 minutos',
    servings: '4 raciones',
    calories: 540,
    description:
      'Un guiso aromático con pimientos dulces, quinoa esponjosa y caldo suave perfumado con pimentón ahumado.',
    tags: ['alto en fibra', 'comfort food'],
    ingredients: [
      { quantity: '2 cdas', item: 'aceite de oliva virgen extra' },
      { quantity: '1', item: 'cebolla morada picada' },
      { quantity: '2', item: 'dientes de ajo laminados' },
      { quantity: '1', item: 'pimiento rojo en láminas' },
      { quantity: '1', item: 'pimiento amarillo en tiras' },
      { quantity: '1 cda', item: 'pimentón ahumado dulce' },
      { quantity: '1 taza', item: 'garbanzos cocidos' },
      { quantity: '1 taza', item: 'quinoa enjuagada' },
      { quantity: '2 tazas', item: 'caldo vegetal' },
      { quantity: '1/2 taza', item: 'tomates cherry' },
      { quantity: '2 cdas', item: 'zumo de limón' },
      { quantity: '1 puñado', item: 'brotes verdes' },
    ],
    stepModes: {
      tradicional: [
        'Calienta el aceite en una cazuela amplia y sofríe la cebolla con el ajo hasta que comiencen a dorarse.',
        'Añade los pimientos y cocina cinco minutos. Incorpora el pimentón ahumado y remueve rápidamente para que no se queme.',
        'Agrega los garbanzos y la quinoa, vierte el caldo y cuece a fuego medio 18 minutos hasta que la quinoa esté tierna.',
        'Integra los tomates cherry y el zumo de limón, apaga el fuego y deja reposar cinco minutos antes de servir con los brotes verdes.',
      ],
      thermomix: [
        'Introduce la cebolla y el ajo en el vaso, trocea 4 seg/vel 5 y sofríe 6 min/120 °C/vel 1 con 20 g de aceite.',
        'Añade los pimientos en tiras y sofríe 5 min/120 °C/giro inverso/vel cuchara.',
        'Incorpora el pimentón, los garbanzos, la quinoa y el caldo. Cocina 18 min/100 °C/giro inverso/vel cuchara con el cestillo sobre la tapa.',
        'Añade los tomates cherry y el zumo de limón y mezcla 10 seg/giro inverso/vel 2. Deja reposar cinco minutos antes de servir con brotes verdes.',
      ],
    },
    swaps: [
      { ingredient: 'quinoa enjuagada', alternatives: ['farro cocido', 'arroz integral cocido'] },
      { ingredient: 'pimentón ahumado dulce', alternatives: ['especias ras el hanout', 'hierbas provenzales'] },
    ],
    chefTip: 'Termina con un hilo de aceite de oliva crudo y ralladura de limón para potenciar los aromas.',
    keywords: ['garbanzos', 'quinoa', 'pimentón', 'pimientos', 'guiso'],
    ingredientGuides: {
      'pimentón ahumado dulce': {
        unit: 'lata 75 g',
        stores: {
          mercadona: { product: 'Pimentón ahumado dulce Hacendado', unit: '75 g' },
          carrefour: { product: 'Pimentón de la Vera dulce Carrefour', unit: '70 g' },
        },
      },
    },
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
    stepModes: {
      tradicional: [
        'Calienta el caldo con la salsa de soja en una olla hasta que hierva suavemente.',
        'Cocina los fideos según el paquete en agua abundante, escurre y reserva.',
        'Blanquea el pak choi en el caldo durante un minuto para que quede tierno.',
        'Sirve los fideos en cuencos con el caldo caliente, el pak choi, los huevos marinados y un hilo de aceite de sésamo.',
      ],
      thermomix: [
        'Vierte el caldo y la salsa de soja en el vaso y calienta 10 min/100 °C/vel 1.',
        'Introduce el cestillo con los fideos y cocina 4 min/100 °C/vel 1. Retira el cestillo, enjuaga los fideos y reserva.',
        'Coloca el pak choi en el Varoma y cocina 3 min/Varoma/vel 1 aprovechando el calor del caldo. Retira el Varoma.',
        'Reparte los fideos en cuencos, vierte el caldo, añade pak choi, huevos y termina con aceite de sésamo y cebolleta.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Dora la berenjena en cubos en una sartén amplia con un poco de aceite hasta que quede tierna y reserva.',
        'Sofríe la cebolla y el ajo, incorpora la pasta de curry y cocina dos minutos para perfumar.',
        'Añade la leche de coco y los garbanzos, devuelve la berenjena y deja cocer doce minutos a fuego medio.',
        'Sirve el curry sobre arroz jazmín caliente y decora con hojas de cilantro fresco.',
      ],
      thermomix: [
        'Pon en el vaso la cebolla y el ajo, trocea 4 seg/vel 5 y sofríe 6 min/120 °C/vel 1 con 15 g de aceite.',
        'Añade la pasta de curry y sofríe 2 min/120 °C/vel 1.',
        'Incorpora la berenjena en cubos, los garbanzos y la leche de coco. Cocina 15 min/100 °C/giro inverso/vel cuchara con el cestillo sobre la tapa.',
        'Calienta el arroz jazmín en el Varoma durante los últimos 5 minutos y sirve el curry con cilantro fresco.',
      ],
    },
    swaps: [
      { ingredient: 'pasta de curry amarillo', alternatives: ['curry rojo suave', 'garam masala con leche de coco'] },
      { ingredient: 'leche de coco', alternatives: ['leche evaporada', 'leche de almendra espesa'] },
    ],
    chefTip: 'Tuesta ligeramente el arroz jazmín antes de hervirlo para intensificar su aroma.',
    keywords: ['berenjena', 'curry', 'leche de coco', 'garbanzos', 'arroz jazmín', 'cilantro'],
  },
  {
    id: 'stellar-polenta',
    name: 'Polenta estelar con verduras glaseadas',
    meal: 'cena',
    cuisines: ['fusion', 'plant-based'],
    time: '30 minutos',
    servings: '3 raciones',
    calories: 520,
    description:
      'Polenta cremosa enriquecida con leche vegetal y tahini, acompañada de calabaza asada, tofu glaseado y espárragos crujientes.',
    tags: ['confort', 'sin gluten'],
    ingredients: [
      { quantity: '1 taza', item: 'polenta instantánea' },
      { quantity: '3 tazas', item: 'caldo vegetal' },
      { quantity: '1/2 taza', item: 'leche de almendras' },
      { quantity: '1 cda', item: 'tahini' },
      { quantity: '200 g', item: 'tofu firme' },
      { quantity: '1 taza', item: 'calabaza en cubos' },
      { quantity: '1 taza', item: 'espárragos verdes' },
      { quantity: '2 cdas', item: 'salsa tamari' },
      { quantity: '1 cda', item: 'aceite de sésamo tostado' },
      { quantity: '1 cda', item: 'sirope de arce' },
    ],
    stepModes: {
      tradicional: [
        'Precalienta el horno a 200 °C, mezcla la calabaza con un chorrito de aceite y ásala 15 minutos hasta que se dore.',
        'Calienta el caldo con la leche de almendras en una olla, vierte la polenta en lluvia y remueve sin parar hasta que espese. Incorpora el tahini para darle cremosidad.',
        'Dora el tofu en cubos en una sartén con aceite de sésamo, tamari y sirope de arce hasta glasearlo. Saltea los espárragos en la misma sartén dos minutos.',
        'Sirve la polenta cremosa en cuencos y coloca encima la calabaza asada, el tofu glaseado y los espárragos crujientes.',
      ],
      thermomix: [
        'Coloca la calabaza en dados en el Varoma, añade 500 ml de agua al vaso y cocina 18 min/Varoma/vel 1. Reserva la calabaza caliente.',
        'Vacía el vaso, añade el caldo y la leche de almendras y calienta 5 min/95 °C/vel 1. Con la máquina en marcha a vel 2, vierte la polenta por el bocal y cocina 12 min/95 °C/vel 2.',
        'Agrega el tahini y mezcla 10 seg/vel 3 para emulsionar. Mantén la polenta caliente en el vaso tapado.',
        'En una sartén aparte, dora el tofu con el aceite de sésamo, la tamari y el sirope hasta glasear. Saltea los espárragos un minuto y sirve sobre la polenta con la calabaza cocinada al vapor.',
      ],
    },
    swaps: [
      { ingredient: 'polenta instantánea', alternatives: ['cuscús perlado', 'puré de coliflor'] },
      { ingredient: 'tofu firme', alternatives: ['tempeh', 'setas portobello salteadas'] },
    ],
    chefTip: 'Finaliza con ralladura de limón y pimienta recién molida para un contraste brillante.',
    keywords: ['polenta', 'calabaza', 'tofu', 'tamari', 'espárragos'],
    ingredientGuides: {
      'polenta instantánea': {
        unit: 'caja 500 g',
        stores: {
          mercadona: { product: 'Polenta rápida Hacendado', unit: '500 g' },
          alcampo: { product: 'Polenta instantánea Auchan', unit: '500 g' },
        },
      },
    },
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
    stepModes: {
      tradicional: [
        'Precalienta el horno a 200 °C, mezcla la calabaza con el adobo de chipotle y el aceite y hornea 18 minutos.',
        'Calienta las tortillas de maíz en una plancha o sartén hasta que estén flexibles.',
        'Rellena cada tortilla con la calabaza asada, añade crema de anacardos y cebolla morada encurtida.',
        'Termina con cilantro picado y unas gotas de limón antes de servir.',
      ],
      thermomix: [
        'Precalienta el horno a 200 °C. Pon en el vaso el adobo de chipotle, el aceite y 20 g de agua; mezcla 12 seg/vel 4.',
        'Añade la calabaza en cubos y mezcla 10 seg/giro inverso/vel 2 para impregnarla. Extiéndela en una bandeja y hornea 18 minutos.',
        'Vierte 250 ml de agua en el vaso limpio, coloca las tortillas en el Varoma envueltas en un paño húmedo y calienta 5 min/Varoma/vel 1.',
        'Monta los tacos con la calabaza asada, la crema de anacardos, la cebolla encurtida, el cilantro y el jugo de limón.',
      ],
    },
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
    stepModes: {
      tradicional: [
        'Pica la citronela y mezcla con la ralladura y el zumo de lima, la salsa de soja y el tofu en cubos para marinar 15 minutos.',
        'Fríe brevemente los fideos de arroz en abundante aceite caliente hasta que se inflen y queden crujientes. Escurre y reserva.',
        'Saltea el tofu escurrido con aceite de coco hasta dorar, añade las verduras y cocina cinco minutos manteniendo el punto crujiente.',
        'Sirve sobre los fideos crujientes, espolvorea cacahuetes tostados y añade más lima al gusto.',
      ],
      thermomix: [
        'Coloca los cacahuetes en el vaso y trocea 3 seg/vel 6. Reserva.',
        'Añade al vaso la citronela, la ralladura de lima y la salsa de soja; pica 5 seg/vel 7 y mezcla con el zumo de lima y el tofu en cubos. Marina 15 minutos.',
        'Calienta aceite abundante en una sartén y fríe los fideos hasta que se inflen. Escurre en papel absorbente.',
        'Pon el aceite de coco en el vaso, incorpora el tofu escurrido y las verduras. Cocina 8 min/120 °C/giro inverso/vel cuchara con el cestillo sobre la tapa y sirve sobre los fideos con los cacahuetes reservados.',
      ],
    },
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
  GUEST_RATINGS: 'chefyGuestRatings',
  GUEST_WEEKLY_PLAN: 'chefyGuestWeeklyPlan',
  ADMIN_RECIPES: 'chefyRecipeCatalog',
  SUPER_ADMIN_EMAIL: 'chefySuperAdminEmail',

  DISCOVER_ENTRIES: 'chefyDiscoverEntries',

 
};

function toKey(value) {
  return (value ?? '').toString().trim().toLowerCase();
}

function trimText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function formatGuideBaseLabel(name) {
  return trimText(name).replace(/\s*\(.*?\)\s*/g, '').replace(/\s+/g, ' ').trim();
}

function buildStoreProductName(label, store, unit) {
  const base = formatGuideBaseLabel(label);
  const words = base.split(' ').filter(Boolean);
  const title = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const unitText = trimText(unit);
  return `${store.brand} ${title}${unitText ? ` (${unitText})` : ''}`;
}

function createIngredientGuideConfig(name, config = {}) {
  const label = trimText(config.label) || formatGuideBaseLabel(name);
  const unit = trimText(config.unit);
  const stores = {};
  const overrides = config.overrides && typeof config.overrides === 'object' ? config.overrides : {};

  SUPERMARKETS.forEach((store) => {
    const overrideEntry = Object.entries(overrides).find(([key]) => toKey(key) === store.id);
    const override = overrideEntry ? overrideEntry[1] : null;
    const overrideLabel = trimText(override?.label);
    const storeUnit = trimText(override?.unit ?? unit);
    const product =
      trimText(override?.product) || buildStoreProductName(overrideLabel || label, store, storeUnit);
    if (product) {
      stores[store.id] = { product };
    }
  });

  const guide = {};
  if (unit) {
    guide.unit = unit;
  }
  if (Object.keys(stores).length) {
    guide.stores = stores;
  }
  return guide;
}

function createMarketGuide(definitions = {}) {
  const guide = {};
  Object.entries(definitions).forEach(([name, config]) => {
    const key = toKey(name);
    if (!key) return;
    guide[key] = createIngredientGuideConfig(name, config);
  });
  return guide;
}

const MARKET_GUIDE_PRESETS = createMarketGuide({
  'aceite de coco': { amount: 3.85, unit: 'tarro 200 ml', label: 'Aceite de coco virgen' },
  'aceite de oliva': { amount: 5.5, unit: 'botella 1 l', label: 'Aceite de oliva suave' },
  'aceite de oliva virgen extra': { amount: 5.8, unit: 'botella 500 ml', label: 'Aceite de oliva virgen extra' },
  'aceite de sésamo': { amount: 4.6, unit: 'botella 250 ml', label: 'Aceite de sésamo' },
  'aceite de sésamo tostado': { amount: 4.9, unit: 'botella 250 ml', label: 'Aceite de sésamo tostado' },
  'adobo de chipotle': { amount: 2.95, unit: 'lata 200 g', label: 'Adobo de chipotle' },
  'aguacate en láminas': { amount: 2.5, unit: 'bandeja 2 uds', label: 'Aguacate maduro' },
  'arroz integral cocido': { amount: 1.8, unit: 'pack 2x125 g', label: 'Arroz integral vasitos' },
  'arroz jazmín cocido': { amount: 2.1, unit: 'pack 250 g', label: 'Arroz jazmín vaporizado' },
  'berenjenas pequeñas en cubos': { amount: 2.3, unit: 'bandeja 2 uds', label: 'Berenjenas mini' },
  'brotes de soja': { amount: 1.65, unit: 'tarro 330 g', label: 'Brotes de soja' },
  'brotes verdes': { amount: 1.75, unit: 'bolsa 150 g', label: 'Brotes verdes mixtos' },
  'cacahuetes tostados': { amount: 2.1, unit: 'bolsa 200 g', label: 'Cacahuetes tostados' },
  'calabaza en cubos': { amount: 2.2, unit: 'bandeja 600 g', label: 'Calabaza cortada' },
  'caldo dashi ligero': { amount: 3.5, unit: 'pack 4 sobres', label: 'Caldo dashi' },
  'caldo vegetal': { amount: 1.6, unit: 'brick 1 l', label: 'Caldo vegetal' },
  'cebolla morada encurtida': { amount: 2.2, unit: 'tarro 300 g', label: 'Cebolla morada encurtida' },
  'cebolla morada picada': { amount: 1, unit: 'pieza', label: 'Cebolla morada fresca' },
  'cebolleta picada': { amount: 1.2, unit: 'manojo', label: 'Cebolleta fresca' },
  'cilantro fresco picado': { amount: 0.95, unit: 'manojo', label: 'Cilantro fresco' },
  'citronela picada': { amount: 1.6, unit: 'pack 3 tallos', label: 'Citronela fresca' },
  'coco tostado en láminas': { amount: 1.9, unit: 'bolsa 125 g', label: 'Coco tostado' },
  'couscous integral': { amount: 2.5, unit: 'caja 500 g', label: 'Cuscús integral' },
  'crema de anacardos': { amount: 5.7, unit: 'tarro 170 g', label: 'Crema de anacardos' },
  'crema de cacahuete': { amount: 3.1, unit: 'tarro 340 g', label: 'Crema de cacahuete' },
  'diente de ajo picado': { amount: 0.9, unit: 'malla 3 cabezas', label: 'Ajo morado' },
  'dientes de ajo laminados': { amount: 1.9, unit: 'tarro 110 g', label: 'Ajo laminado' },
  'encurtidos japoneses': { amount: 4.3, unit: 'tarro 250 g', label: 'Encurtidos estilo japonés' },
  'especias ras el hanout': { amount: 2.4, unit: 'tarro 45 g', label: 'Ras el hanout' },
  'espárragos verdes': { amount: 2.8, unit: 'manojo 300 g', label: 'Espárragos verdes' },
  'farro cocido': { amount: 2.6, unit: 'pack 250 g', label: 'Farro cocido' },
  'fideos de arroz': { amount: 2.3, unit: 'paquete 340 g', label: 'Fideos de arroz' },
  'fideos de arroz finos': { amount: 2, unit: 'paquete 250 g', label: 'Fideos de arroz finos' },
  'fideos ramen integrales': { amount: 3.2, unit: 'pack 2 raciones', label: 'Ramen integral' },
  'frijoles negros cocidos': { amount: 1.4, unit: 'tarro 400 g', label: 'Frijoles negros cocidos' },
  'frutos rojos': { amount: 2.6, unit: 'tarrina 150 g', label: 'Frutos rojos' },
  'frutos rojos frescos': { amount: 2.9, unit: 'tarrina 200 g', label: 'Frutos rojos frescos' },
  'garbanzos cocidos': { amount: 1.25, unit: 'tarro 400 g', label: 'Garbanzos cocidos' },
  'granola de frutos secos': { amount: 3.8, unit: 'bolsa 375 g', label: 'Granola frutos secos' },
  'harina de avena': { amount: 1.8, unit: 'bolsa 500 g', label: 'Harina de avena' },
  'hojas de cilantro fresco': { amount: 0.95, unit: 'manojo', label: 'Cilantro' },
  'hojas de menta y cilantro': { amount: 1.6, unit: 'pack mixto', label: 'Menta y cilantro frescos' },
  'huevo': { amount: 2.4, unit: 'docena', label: 'Huevos camperos' },
  'huevos marinados': { amount: 2.8, unit: 'pack 2 uds', label: 'Huevos marinados' },
  'jackfruit en salmuera escurrido': { amount: 2.7, unit: 'lata 400 g', label: 'Jackfruit en salmuera' },
  'jengibre fresco rallado': { amount: 1.2, unit: 'raíz 150 g', label: 'Jengibre fresco' },
  'judías verdes troceadas': { amount: 2.1, unit: 'bolsa 400 g', label: 'Judías verdes troceadas' },
  'leche de almendras': { amount: 1.9, unit: 'brick 1 l', label: 'Bebida de almendras' },
  'leche de coco': { amount: 2.25, unit: 'lata 400 ml', label: 'Leche de coco' },
  'leche de coco ligera': { amount: 2.05, unit: 'lata 400 ml', label: 'Leche de coco ligera' },
  'lima (zumo y ralladura)': { amount: 1.4, unit: 'malla 3 uds', label: 'Limas frescas' },
  'lima en gajos': { amount: 1, unit: '2 uds', label: 'Limas' },
  'limón verde': { amount: 1, unit: '2 uds', label: 'Limón verde' },
  'lomos de salmón': { amount: 7.5, unit: 'pack 2 lomos', label: 'Lomos de salmón fresco' },
  'mango maduro en cubos': { amount: 2.5, unit: 'pieza', label: 'Mango maduro' },
  'matcha en polvo': { amount: 9.8, unit: 'lata 30 g', label: 'Matcha ceremonial' },
  'miel': { amount: 4.2, unit: 'tarro 500 g', label: 'Miel multifloral' },
  'miel de azahar': { amount: 4.6, unit: 'tarro 250 g', label: 'Miel de azahar' },
  'naranja (zumo y ralladura)': { amount: 1.5, unit: 'malla 3 uds', label: 'Naranjas de mesa' },
  'pak choi al vapor': { amount: 2.6, unit: '2 piezas', label: 'Pak choi fresco' },
  'pak choi cortados': { amount: 2.3, unit: 'bolsa 300 g', label: 'Pak choi cortado' },
  'pasta de achiote': { amount: 2.3, unit: 'tableta 100 g', label: 'Pasta de achiote' },
  'pasta de curry amarillo': { amount: 3.4, unit: 'tarro 114 g', label: 'Pasta de curry amarillo' },
  'pepino en medias lunas': { amount: 1, unit: 'pieza', label: 'Pepino fresco' },
  'pepino en tiras': { amount: 1, unit: 'pieza', label: 'Pepino' },
  'pico de gallo': { amount: 2.7, unit: 'tarrina 250 g', label: 'Pico de gallo fresco' },
  'pimiento amarillo en tiras': { amount: 1.4, unit: 'pieza', label: 'Pimiento amarillo' },
  'pimiento rojo en láminas': { amount: 1.5, unit: 'pieza', label: 'Pimiento rojo' },
  'plátano maduro triturado': { amount: 1.5, unit: 'manojo 4 uds', label: 'Plátano maduro' },
  'polvo de hornear': { amount: 1.6, unit: 'bote 200 g', label: 'Polvo de hornear' },
  'quinoa enjuagada': { amount: 3.5, unit: 'bolsa 500 g', label: 'Quinoa blanca' },
  'ralladura de naranja': { amount: 1.5, unit: 'malla 3 uds', label: 'Naranja de postre' },
  'salsa de soja': { amount: 1.9, unit: 'botella 150 ml', label: 'Salsa de soja' },
  'salsa de soja ligera': { amount: 2.1, unit: 'botella 150 ml', label: 'Salsa de soja ligera' },
  'salsa tamari': { amount: 3.5, unit: 'botella 250 ml', label: 'Salsa tamari' },
  'semillas de chía': { amount: 3.6, unit: 'bolsa 250 g', label: 'Semillas de chía' },
  'sirope de arce': { amount: 6.8, unit: 'botella 250 ml', label: 'Sirope de arce' },
  'sirope de coco': { amount: 5.4, unit: 'botella 250 ml', label: 'Sirope de coco' },
  'tahini': { amount: 3.9, unit: 'tarro 300 g', label: 'Tahini' },
  'tofu firme': { amount: 2.6, unit: 'bloque 400 g', label: 'Tofu firme' },
  'tomates cherry': { amount: 2.2, unit: 'tarrina 250 g', label: 'Tomates cherry' },
  'tortillas de maíz': { amount: 1.9, unit: 'pack 10 uds', label: 'Tortillas de maíz' },
  'yogur griego natural': { amount: 1.6, unit: 'pack 4x125 g', label: 'Yogur griego natural' },
  'zanahoria en juliana': { amount: 1.3, unit: 'bolsa 200 g', label: 'Zanahoria en tiras' },
  'zanahoria rallada': { amount: 1.2, unit: 'bolsa 200 g', label: 'Zanahoria rallada' },
  'zumo de lima': { amount: 1.4, unit: 'botella 200 ml', label: 'Zumo de lima' },
  'zumo de limón': { amount: 1.3, unit: 'botella 200 ml', label: 'Zumo de limón' },
});

const COMMUNITY_RATINGS = {
  'sunrise-bowl': { average: 4.8, votes: 214 },
  'matcha-hotcakes': { average: 4.7, votes: 198 },
  'bangkok-chia': { average: 4.6, votes: 152 },
  'zen-bento': { average: 4.5, votes: 187 },
  'citrus-salmon': { average: 4.7, votes: 165 },
  'bangkok-salad': { average: 4.4, votes: 133 },
  'yucatan-bowl': { average: 4.6, votes: 142 },
  'garden-bowl': { average: 4.5, votes: 176 },
  'midnight-ramen': { average: 4.8, votes: 205 },
  'moonlight-curry': { average: 4.7, votes: 188 },
  'veggie-tacos': { average: 4.6, votes: 173 },
  'lemongrass-tofu': { average: 4.5, votes: 159 },
  'aurora-overnight': { average: 4.7, votes: 138 },
  'iberian-pot': { average: 4.6, votes: 164 },
  'stellar-polenta': { average: 4.8, votes: 121 },
};
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

const featuredPlanTemplate = createEmptyWeeklyPlan();
featuredPlanTemplate.lunes.comida = { recipeId: 'garden-bowl', addedAt: Date.now() - 4 * 86400000 };
featuredPlanTemplate.martes.cena = { recipeId: 'midnight-ramen', addedAt: Date.now() - 3 * 86400000 };
featuredPlanTemplate.miércoles.comida = { recipeId: 'bangkok-salad', addedAt: Date.now() - 2 * 86400000 };
featuredPlanTemplate.jueves.cena = { recipeId: 'lemongrass-tofu', addedAt: Date.now() - 86400000 };

const DISCOVER_FEATURED = [
  {
    id: 'featured-plan-verde',
    type: 'plan',
    title: 'Batch cooking verde en tres tandas',
    summary: 'Una planificación vegetal para las cenas entre semana con bases adelantadas.',
    details:
      'Asa calabaza y pak choi el domingo, cuece quinoa y deja listos los adobos. Cada noche solo tendrás que regenerar y emplatar.',
    author: 'Equipo Chefy',
    createdAt: Date.parse('2024-04-12T09:00:00Z'),
    planSnapshot: {
      name: 'Plan verde exprés',
      slots: normalizeWeeklyPlan(featuredPlanTemplate),
    },
  },
  {
    id: 'featured-hotcakes-matcha',
    type: 'recipe',
    title: 'Hotcakes de matcha para brunch',
    summary: 'Nuestra mezcla favorita para sorprender en el desayuno con contraste ácido-dulce.',
    details: 'Sírvelos con yogur griego frío, frutos rojos y un hilo de miel de azahar para equilibrar.',
    author: 'Equipo Chefy',
    createdAt: Date.parse('2024-04-05T10:30:00Z'),
    recipeId: 'matcha-hotcakes',
    meal: 'desayuno',
  },
  {
    id: 'featured-salmon-citrico',
    type: 'recipe',
    title: 'Cena exprés de salmón cítrico',
    summary: 'Listo en 20 minutos con salsa de soja ligera y guarnición de arroz jazmín.',
    details: 'Marina los lomos mientras cueces el arroz y termina con pak choi al vapor y gajos de lima.',
    author: 'Equipo Chefy',
    createdAt: Date.parse('2024-04-25T18:15:00Z'),
    recipeId: 'citrus-salmon',
    meal: 'cena',
  },
  {
    id: 'featured-stellar-polenta',
    type: 'recipe',
    title: 'Polenta estelar en 30 minutos',
    summary: 'Cremosa, con calabaza asada y tofu glaseado para una cena que abraza.',
    details: 'Añade ralladura de limón antes de servir para un brillo final y comparte tu valoración en segundos.',
    author: 'Equipo Chefy',
    createdAt: Date.parse('2024-05-02T19:45:00Z'),
    recipeId: 'stellar-polenta',
    meal: 'cena',
  },
];

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

 
function normalizeStepModes(recipe = {}) {
  const modes = {};
  STEP_MODES.forEach((mode) => {
    modes[mode] = [];
  });

  const rawStepModes = recipe.stepModes;
  if (rawStepModes && typeof rawStepModes === 'object' && !Array.isArray(rawStepModes)) {
    STEP_MODES.forEach((mode) => {
      const steps = rawStepModes[mode];
      if (Array.isArray(steps)) {
        modes[mode] = steps.map((step) => cleanString(step)).filter(Boolean);
      } else if (typeof steps === 'string') {
        modes[mode] = [cleanString(steps)].filter(Boolean);
      }
    });
  } else if (Array.isArray(rawStepModes)) {
    modes.tradicional = rawStepModes.map((step) => cleanString(step)).filter(Boolean);
  }

  if (!modes.tradicional.length && Array.isArray(recipe.steps)) {
    modes.tradicional = recipe.steps.map((step) => cleanString(step)).filter(Boolean);
  }

  const available = STEP_MODES.filter((mode) => modes[mode]?.length);
  const defaultMode = available.length ? available[0] : STEP_MODES[0];
  return { modes, defaultMode };
}

function normalizeIngredientGuides(rawGuides, ingredients = []) {
  if (!rawGuides || typeof rawGuides !== 'object') return {};
  const ingredientKeys = new Set(ingredients.map((ingredient) => toKey(ingredient.item)));
  const guides = {};

  Object.entries(rawGuides).forEach(([name, guide]) => {
    if (!guide || typeof guide !== 'object') return;
    const key = toKey(name);
    if (!key || (ingredientKeys.size && !ingredientKeys.has(key))) return;

    const normalized = {};
    const unit = cleanString(guide.unit ?? guide.format);
    if (unit) {
      normalized.unit = unit;
    }

    if (guide.stores && typeof guide.stores === 'object') {
      const stores = {};
      Object.entries(guide.stores).forEach(([storeKey, storeValue]) => {
        const storeId = toKey(storeKey);
        if (!SUPERMARKET_LABELS[storeId]) return;
        if (!storeValue) return;
        let product = '';
        let unitOverride = '';
        if (typeof storeValue === 'string') {
          product = cleanString(storeValue);
        } else if (typeof storeValue === 'object') {
          product = cleanString(storeValue.product) || cleanString(storeValue.label) || cleanString(storeValue.name);
          unitOverride = cleanString(storeValue.unit ?? storeValue.size);
        }
        if (!product) return;
        const entry = { product };
        if (unitOverride) {
          entry.unit = unitOverride;
        }
        stores[storeId] = entry;
      });
      if (Object.keys(stores).length) {
        normalized.stores = stores;
      }
    }

    if (normalized.unit || normalized.stores) {
      guides[key] = normalized;
    }
  });

  return guides;
}



function normalizeRatings(rawRatings) {
  if (!rawRatings || typeof rawRatings !== 'object') return {};
  const normalized = {};
  Object.entries(rawRatings).forEach(([recipeId, score]) => {
    const id = toKey(recipeId);
    const value = Number.parseInt(score, 10);
    if (!id) return;
    if (Number.isFinite(value) && value >= 1 && value <= 5) {
      normalized[id] = value;
    }
  });
  return normalized;
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
 
    const { modes: stepModes, defaultMode } = normalizeStepModes(recipe);
    const ingredientGuides = normalizeIngredientGuides(recipe.ingredientGuides, ingredients);

   
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
 
      steps: stepModes[defaultMode] ?? [],
      stepModes,
      defaultStepMode: defaultMode,
      ingredientGuides,

      
 
      swaps,
      keywords,
    });
  });

  if (!normalized.length && rawRecipes !== BASE_RECIPES) {
    return normalizeRecipes(BASE_RECIPES);
  }

  return normalized;
}

 
function normalizeDiscoverEntries(entries) {
  const list = Array.isArray(entries) ? entries : [];
  return list
    .map((entry, index) => {
      if (!entry || typeof entry !== 'object') return null;
      const id = cleanString(entry.id) || `idea-${index + 1}`;
      const type = entry.type === 'plan' ? 'plan' : 'recipe';
      const title = cleanString(entry.title) || 'Idea sin título';
      const summary = cleanString(entry.summary);
      const details = cleanString(entry.details);
      const author = cleanString(entry.author) || 'Anónimo';
      const createdAtValue = Number.parseInt(entry.createdAt, 10);
      const createdAt = Number.isFinite(createdAtValue) ? createdAtValue : Date.now();
      const normalized = { id, type, title, summary, details, author, createdAt };
      if (type === 'recipe') {
        const recipeId = cleanString(entry.recipeId);
        if (recipeId) {
          normalized.recipeId = recipeId;
        }
        const meal = cleanString(entry.meal);
        if (MEALS.includes(meal)) {
          normalized.meal = meal;
        }
      } else if (type === 'plan') {
        const snapshotName = cleanString(entry.planSnapshot?.name ?? entry.name) || title;
        const slots = normalizeWeeklyPlan(entry.planSnapshot?.slots ?? entry.slots ?? {});
        normalized.planSnapshot = { name: snapshotName, slots };
      }
      return normalized;
    })
    .filter(Boolean);
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
  getGuestRatings() {
    return normalizeRatings(this.readJSON(STORAGE_KEYS.GUEST_RATINGS, {}));
  },
  saveGuestRatings(ratings) {
    this.writeJSON(STORAGE_KEYS.GUEST_RATINGS, ratings);
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
 
  getDiscoverEntries() {
    return this.readJSON(STORAGE_KEYS.DISCOVER_ENTRIES, []);
  },
  saveDiscoverEntries(entries) {
    const list = Array.isArray(entries) ? entries.filter((entry) => entry && typeof entry === 'object') : [];
    this.writeJSON(STORAGE_KEYS.DISCOVER_ENTRIES, list);
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
  userRatings: {},
  weeklyPlans: {},
  activePlanId: '',
  lastRecipe: null,
  lastMeal: null,
  preferredMeal: null,
  activeStepMode: 'tradicional',
  shoppingSummaryText: '',
  planShareText: '',
  planShareSubject: 'Planificación semanal de Chefy',
  recipes: normalizeRecipes(BASE_RECIPES),
  superAdminEmail: '',
  adminSelectedRecipeId: '',
  adminFeedbackTimeout: null,
  ratingNoteTimeout: null,
  pendingPhoneLogin: null,

  discoverUserEntries: [],
  discoverEntries: [],
  discoverFeedbackTimeout: null,
  discoverDraftRecipeId: '',
  discoverDraftMeal: '',
  discoverDraftPlan: null,


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

 
function loadDiscoverEntries() {
  state.discoverUserEntries = normalizeDiscoverEntries(storage.getDiscoverEntries());
  refreshDiscoverEntries();
}

function persistDiscoverEntries() {
  storage.saveDiscoverEntries(state.discoverUserEntries);
}

function computePlanRatingSummary(slots) {
  if (!slots) return null;
  const normalized = normalizeWeeklyPlan(slots);
  const recipeIds = new Set();
  WEEK_DAYS.forEach((day) => {
    MEALS.forEach((meal) => {
      const entry = normalized[day.id]?.[meal];
      if (entry?.recipeId) {
        recipeIds.add(entry.recipeId);
      }
    });
  });
  if (!recipeIds.size) return null;
  const summaries = [];
  recipeIds.forEach((recipeId) => {
    const summary = getRecipeRatingSummary(recipeId);
    if (summary.average) {
      summaries.push(summary);
    }
  });
  if (!summaries.length) return null;
  const average =
    summaries.reduce((sum, item) => sum + item.average, 0) / summaries.length;
  const votes = summaries.reduce((sum, item) => sum + item.votes, 0);
  return {
    average: Number.parseFloat(average.toFixed(2)),
    votes,
    recipes: summaries.length,
  };
}

function getEntryScore(entry) {
  if (!entry) return 0;
  if (entry.type === 'recipe' && entry.recipeId) {
    const summary = getRecipeRatingSummary(entry.recipeId);
    if (summary.average) {
      return summary.average * 1000 + summary.votes;
    }
  }
  if (entry.type === 'plan' && entry.planSnapshot?.slots) {
    const summary = computePlanRatingSummary(entry.planSnapshot.slots);
    if (summary?.average) {
      return summary.average * 1000 + summary.votes;
    }
  }
  return entry.createdAt ?? 0;
}

function refreshDiscoverEntries() {
  const combined = [...DISCOVER_FEATURED, ...state.discoverUserEntries];
  combined.sort((a, b) => {
    const scoreA = getEntryScore(a);
    const scoreB = getEntryScore(b);
    if (scoreA !== scoreB) return scoreB - scoreA;
    return (b.createdAt ?? 0) - (a.createdAt ?? 0);
  });
  state.discoverEntries = combined;
  renderDiscoverFeed();
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
  const preferred = MEALS.includes(state.preferredMeal) ? state.preferredMeal : null;
  const meal = preferred ?? detectMealType();
  DOM.generateButton.textContent = formatMealButtonLabel(meal);
  DOM.mealHint.textContent = preferred
    ? `Has fijado la actividad en ${MEAL_LABELS[meal]}. Pulsa de nuevo la actividad para volver a las sugerencias automáticas.`
    : `Según la hora, te recomendamos ${MEAL_LABELS[meal]}. ¡Personalízala a tu gusto!`;
  if (DOM.mealButtons?.forEach) {
    DOM.mealButtons.forEach((button) => {
      const option = button.dataset.mealOption;
      if (!option) return;
      const isPreferred = preferred === option;
      const isSuggested = !preferred && option === meal;
      button.classList.toggle('hero__activity-button--active', isPreferred);
      button.classList.toggle('hero__activity-button--suggested', isSuggested);
      button.setAttribute('aria-pressed', isPreferred ? 'true' : 'false');
    });
  }
}

function setPreferredMeal(meal) {
  if (!MEALS.includes(meal)) return;
  state.preferredMeal = state.preferredMeal === meal ? null : meal;
  updateMealUI();
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
  resetRatingPanel();
  setActionAvailability(false);
  state.lastRecipe = null;
  state.lastMeal = null;
}

function getCuisineLabels(cuisines = []) {
  return cuisines.map((id) => CUISINE_LABELS[id] ?? id);
}

function resolveIngredientGuide(ingredient, recipe) {
  const key = toKey(ingredient.item);
  const custom = recipe?.ingredientGuides?.[key];
  const preset = MARKET_GUIDE_PRESETS[key];
  const unit = cleanString(custom?.unit ?? preset?.unit);
  const stores = [];
  SUPERMARKETS.forEach((store) => {
    const storeData = custom?.stores?.[store.id] ?? preset?.stores?.[store.id];
    if (!storeData) return;
    const storeUnit = cleanString(storeData.unit ?? unit);
    const product =
      cleanString(storeData.product) || buildStoreProductName(ingredient.item, store, storeUnit || unit);
    if (!product) return;
    const entry = { store: store.label, product };
    if (storeUnit) {
      entry.unit = storeUnit;
    }
    stores.push(entry);
  });
  return { unit, stores };
}

function getCommunityRating(recipeId) {
  const base = COMMUNITY_RATINGS[recipeId];
  if (base && Number.isFinite(base.average) && Number.isFinite(base.votes)) {
    return {
      average: Number.parseFloat(Number(base.average).toFixed(2)),
      votes: Math.max(0, Math.trunc(base.votes)),
    };
  }
  return { average: 4.5, votes: 24 };
}

function getRecipeRatingSummary(recipeOrId) {
  const recipeId = typeof recipeOrId === 'string' ? recipeOrId : recipeOrId?.id;
  if (!recipeId) {
    return { average: null, votes: 0, userRating: null, baseAverage: null, baseVotes: 0 };
  }
  const { average: baseAverage, votes: baseVotes } = getCommunityRating(recipeId);
  const userRating = state.userRatings?.[recipeId];
  let combinedAverage = baseAverage;
  let combinedVotes = baseVotes;
  if (Number.isFinite(userRating)) {
    combinedVotes += 1;
    combinedAverage = Number.parseFloat(((baseAverage * baseVotes + userRating) / combinedVotes).toFixed(2));
  }
  return {
    average: combinedAverage,
    votes: combinedVotes,
    userRating: Number.isFinite(userRating) ? userRating : null,
    baseAverage,
    baseVotes,
  };
}

function resetRatingPanel() {
  if (!DOM.ratingPanel) return;
  DOM.ratingPanel.hidden = true;
  if (DOM.ratingAverage) {
    DOM.ratingAverage.textContent = '0.0';
  }
  if (DOM.ratingCount) {
    DOM.ratingCount.textContent = 'Sin valoraciones';
  }
  if (DOM.ratingNote) {
    DOM.ratingNote.textContent = '';
    DOM.ratingNote.classList.remove('rating__note--success', 'rating__note--error');
  }
  if (DOM.ratingResetButton) {
    DOM.ratingResetButton.hidden = true;
    DOM.ratingResetButton.setAttribute('hidden', 'true');
  }
  if (DOM.ratingControls) {
    const stars = DOM.ratingControls.querySelectorAll('.rating__star');
    stars.forEach((star, index) => {
      star.classList.remove('rating__star--active');
      star.setAttribute('aria-checked', 'false');
      star.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
  }
}

function setRatingNote(message, type = 'info') {
  if (!DOM.ratingNote) return;
  if (state.ratingNoteTimeout) {
    clearTimeout(state.ratingNoteTimeout);
    state.ratingNoteTimeout = null;
  }
  DOM.ratingNote.textContent = message;
  DOM.ratingNote.classList.toggle('rating__note--success', type === 'success');
  DOM.ratingNote.classList.toggle('rating__note--error', type === 'error');
  if (message) {
    state.ratingNoteTimeout = setTimeout(() => {
      DOM.ratingNote.textContent = '';
      DOM.ratingNote.classList.remove('rating__note--success', 'rating__note--error');
      state.ratingNoteTimeout = null;
    }, 4000);
  }
}

function updateRatingPanel(recipe) {
  if (!DOM.ratingPanel || !recipe) {
    resetRatingPanel();
    return;
  }
  const summary = getRecipeRatingSummary(recipe.id);
  DOM.ratingPanel.hidden = false;
  if (DOM.ratingAverage) {
    DOM.ratingAverage.textContent = summary.average ? summary.average.toFixed(1) : '—';
  }
  if (DOM.ratingCount) {
    const votesText = summary.votes
      ? `${summary.votes} valoración${summary.votes === 1 ? '' : 'es'}`
      : 'Sé la primera persona en valorar';
    DOM.ratingCount.textContent = votesText;
  }
  if (DOM.ratingControls) {
    const stars = DOM.ratingControls.querySelectorAll('.rating__star');
    const highlight = summary.userRating ?? Math.round(summary.average ?? 0);
    stars.forEach((star, index) => {
      const score = Number.parseInt(star.dataset.score, 10);
      const active = highlight > 0 && score <= highlight;
      star.classList.toggle('rating__star--active', active);
      star.setAttribute('role', 'radio');
      const isChecked = Number.isFinite(summary.userRating) && score === summary.userRating;
      star.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      const shouldFocus = isChecked || (!Number.isFinite(summary.userRating) && index === 0);
      star.setAttribute('tabindex', shouldFocus ? '0' : '-1');
    });
  }
  if (DOM.ratingResetButton) {
    if (Number.isFinite(summary.userRating)) {
      DOM.ratingResetButton.hidden = false;
      DOM.ratingResetButton.removeAttribute('hidden');
      DOM.ratingNote.textContent = `Tu valoración: ${summary.userRating} estrella${summary.userRating === 1 ? '' : 's'}.`;
      DOM.ratingNote.classList.remove('rating__note--error');
      DOM.ratingNote.classList.remove('rating__note--success');
    } else {
      DOM.ratingResetButton.hidden = true;
      DOM.ratingResetButton.setAttribute('hidden', 'true');
      DOM.ratingNote.textContent = 'Valora para personalizar tus recomendaciones y destacar en Descubrir.';
      DOM.ratingNote.classList.remove('rating__note--success', 'rating__note--error');
    }
  }
}

function persistRatings() {
  if (state.currentUser) {
    persistUserData({ ratings: state.userRatings });
  } else {
    storage.saveGuestRatings(state.userRatings);
  }
  refreshDiscoverEntries();
}

function setRecipeRating(recipeId, rating) {
  if (!recipeId || !Number.isFinite(rating)) return;
  const normalized = Math.min(5, Math.max(1, Math.round(rating)));
  if (state.userRatings[recipeId] === normalized) {
    setRatingNote('Ya habías dado esa valoración.', 'info');
    return;
  }
  state.userRatings = { ...state.userRatings, [recipeId]: normalized };
  persistRatings();
  if (state.lastRecipe?.id === recipeId) {
    updateRatingPanel(state.lastRecipe);
    setRatingNote('⭐ ¡Gracias por tu valoración!', 'success');
  }
}

function removeRecipeRating(recipeId) {
  if (!recipeId || !state.userRatings[recipeId]) return;
  const { [recipeId]: _removed, ...rest } = state.userRatings;
  state.userRatings = rest;
  persistRatings();
  if (state.lastRecipe?.id === recipeId) {
    updateRatingPanel(state.lastRecipe);
    setRatingNote('Valoración eliminada.', 'info');
  }
}

function handleRatingClick(event) {
  const button = event.target.closest('.rating__star');
  if (!button || !state.lastRecipe) return;
  const score = Number.parseInt(button.dataset.score, 10);
  if (!Number.isFinite(score)) return;
  setRecipeRating(state.lastRecipe.id, score);
}

function handleRatingKeydown(event) {
  if (!DOM.ratingControls || !state.lastRecipe) return;
  const stars = Array.from(DOM.ratingControls.querySelectorAll('.rating__star'));
  if (!stars.length) return;
  const currentIndex = stars.findIndex((star) => star.getAttribute('aria-checked') === 'true');
  let targetIndex = currentIndex;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    targetIndex = Math.min(stars.length - 1, currentIndex >= 0 ? currentIndex + 1 : 0);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    targetIndex = Math.max(0, currentIndex >= 0 ? currentIndex - 1 : 0);
  } else if (event.key === 'Home') {
    targetIndex = 0;
  } else if (event.key === 'End') {
    targetIndex = stars.length - 1;
  } else {
    return;
  }
  event.preventDefault();
  const star = stars[targetIndex];
  if (!star) return;
  star.focus();
  const score = Number.parseInt(star.dataset.score, 10);
  if (Number.isFinite(score)) {
    setRecipeRating(state.lastRecipe.id, score);
  }
}

function handleRatingReset() {
  if (!state.lastRecipe) return;
  removeRecipeRating(state.lastRecipe.id);
}

function formatRelativeTimeLabel(timestamp) {
  if (!Number.isFinite(timestamp)) return '';
  const now = Date.now();
  const diff = timestamp - now;
  if (Math.abs(diff) < 60000) {
    return 'hace un momento';
  }
  const units = [
    { unit: 'day', ms: 86400000 },
    { unit: 'hour', ms: 3600000 },
    { unit: 'minute', ms: 60000 },
  ];
  for (const { unit, ms } of units) {
    const value = Math.round(diff / ms);
    if (Math.abs(value) >= 1) {
      return RELATIVE_TIME_FORMAT.format(value, unit);
    }
  }
  return DATE_FORMATTER.format(new Date(timestamp));
}

function updateStepModeControls(recipe, preferredMode) {
  if (!DOM.stepModeToggle) return;
  const available = new Set(
    STEP_MODES.filter((mode) => Array.isArray(recipe.stepModes?.[mode]) && recipe.stepModes[mode].length),
  );
  const buttons = DOM.stepModeToggle.querySelectorAll('.steps-toggle__button');
  let activeMode = preferredMode && available.has(preferredMode) ? preferredMode : recipe.defaultStepMode;
  if (!available.has(activeMode)) {
    activeMode = available.values().next()?.value ?? STEP_MODES[0];
  }
  state.activeStepMode = activeMode;
  DOM.stepModeToggle.hidden = available.size <= 1;
  buttons.forEach((button) => {
    const mode = button.dataset.mode;
    if (!mode) return;
    const isAvailable = available.has(mode);
    button.disabled = !isAvailable;
    button.classList.toggle('steps-toggle__button--disabled', !isAvailable);
    button.classList.toggle('steps-toggle__button--active', mode === state.activeStepMode);
    button.setAttribute('aria-pressed', mode === state.activeStepMode ? 'true' : 'false');
  });
}

function renderRecipeStepsForMode(recipe, mode) {
  DOM.resultSteps.innerHTML = '';
  const steps = recipe.stepModes?.[mode] ?? [];
  if (!steps.length) {
    const li = document.createElement('li');
    li.textContent = 'Todavía no hay pasos disponibles para este modo.';
    DOM.resultSteps.appendChild(li);
    return;
  }
  steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    DOM.resultSteps.appendChild(li);
  });
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
    item.className = 'ingredient';
    const header = document.createElement('div');
    header.className = 'ingredient__header';
    const label = document.createElement('span');
    label.className = 'ingredient__label';
    if (ingredient && typeof ingredient === 'object') {
      const quantity = ingredient.quantity ? `${ingredient.quantity} · ` : '';
      label.textContent = `${quantity}${ingredient.item}`;
    } else {
      label.textContent = ingredient;
    }
    header.appendChild(label);

    const guide = resolveIngredientGuide(ingredient, recipe);
    if (guide.unit) {
      const unit = document.createElement('span');
      unit.className = 'ingredient__unit';
      unit.textContent = `Formato sugerido: ${guide.unit}`;
      header.appendChild(unit);
    }

    item.appendChild(header);

    if (guide.stores?.length) {
      const details = document.createElement('details');
      details.className = 'ingredient__markets';
      const summary = document.createElement('summary');
      summary.textContent = 'Ver en supermercados';
      details.appendChild(summary);
      const list = document.createElement('ul');
      list.className = 'ingredient__market-list';
      guide.stores.forEach((storeInfo) => {
        const storeItem = document.createElement('li');
        storeItem.className = 'ingredient__market';
        const storeName = document.createElement('span');
        storeName.className = 'ingredient__market-store';
        storeName.textContent = storeInfo.store;
        const product = document.createElement('span');
        product.className = 'ingredient__market-product';
        product.textContent = storeInfo.product;
        storeItem.append(storeName, product);
        if (storeInfo.unit) {
          const unit = document.createElement('span');
          unit.className = 'ingredient__market-unit';
          unit.textContent = storeInfo.unit;
          storeItem.appendChild(unit);
        }
        list.appendChild(storeItem);
      });
      details.appendChild(list);
      item.appendChild(details);
    }

    DOM.resultIngredients.appendChild(item);
  });

  updateStepModeControls(recipe, recipe.defaultStepMode);
  renderRecipeStepsForMode(recipe, state.activeStepMode);

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

  updateRatingPanel(recipe);
  setActionAvailability(true);
  if (shouldRecordHistory) {
    saveRecipeToHistory(recipe, meal);
  }
}

function handleStepModeToggle(event) {
  const button = event.target.closest('.steps-toggle__button');
  if (!button || button.disabled) return;
  const mode = button.dataset.mode;
  if (!STEP_MODES.includes(mode)) return;
  if (!state.lastRecipe) return;
  updateStepModeControls(state.lastRecipe, mode);
  renderRecipeStepsForMode(state.lastRecipe, state.activeStepMode);
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

function switchPrimaryPanel(targetPanelId) {
  const panels = [
    { tab: DOM.cookTab, panel: DOM.cookPanel, id: 'cookPanel' },
    { tab: DOM.discoverTab, panel: DOM.discoverPanel, id: 'discoverPanel' },
  ];
  panels.forEach(({ tab, panel, id }) => {
    const isActive = id === targetPanelId;
    if (tab) {
      tab.classList.toggle('primary-tabs__tab--active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    }
    if (panel) {
      panel.classList.toggle('primary-panel--active', isActive);
      panel.hidden = !isActive;
    }
  });
}

function handlePrimaryTabClick(event) {
  const button = event.target.closest('.primary-tabs__tab');
  if (!button) return;
  const targetPanel = button.dataset.panel;
  if (!targetPanel) return;
  switchPrimaryPanel(targetPanel);
}

function renderDiscoverFeed() {
  if (!DOM.discoverFeed) return;
  DOM.discoverFeed.innerHTML = '';
  if (!state.discoverEntries.length) {
    const empty = document.createElement('p');
    empty.className = 'discover__empty';
    empty.textContent = 'Todavía no hay publicaciones. ¡Comparte la primera desde el formulario!';
    DOM.discoverFeed.appendChild(empty);
    return;
  }

  state.discoverEntries.forEach((entry) => {
    const card = document.createElement('article');
    card.className = `discover-card discover-card--${entry.type}`;
    card.dataset.entryId = entry.id;
    card.dataset.type = entry.type;

    const header = document.createElement('header');
    header.className = 'discover-card__header';
    const typeBadge = document.createElement('span');
    typeBadge.className = 'discover-card__type';
    typeBadge.textContent = entry.type === 'plan' ? 'Plan semanal' : 'Receta destacada';
    const title = document.createElement('h3');
    title.textContent = entry.title;
    header.append(typeBadge, title);
    if (entry.type === 'recipe' && entry.recipeId) {
      const ratingSummary = getRecipeRatingSummary(entry.recipeId);
      if (ratingSummary.average) {
        const rating = document.createElement('div');
        rating.className = 'discover-card__rating';
        const badge = document.createElement('span');
        badge.className = 'discover-card__rating-badge';
        badge.textContent = ratingSummary.average.toFixed(1);
        const votes = document.createElement('span');
        votes.textContent = `${ratingSummary.votes} valoración${ratingSummary.votes === 1 ? '' : 'es'}`;
        rating.append(badge, votes);
        if (Number.isFinite(ratingSummary.userRating)) {
          const yours = document.createElement('span');
          yours.textContent = `Tu nota: ${ratingSummary.userRating}`;
          rating.appendChild(yours);
        }
        header.appendChild(rating);
      }
    } else if (entry.type === 'plan' && entry.planSnapshot?.slots) {
      const planRating = computePlanRatingSummary(entry.planSnapshot.slots);
      if (planRating?.average) {
        const rating = document.createElement('div');
        rating.className = 'discover-card__rating';
        const badge = document.createElement('span');
        badge.className = 'discover-card__rating-badge';
        badge.textContent = planRating.average.toFixed(1);
        const votes = document.createElement('span');
        votes.textContent = `${planRating.recipes} recetas · ${planRating.votes} valoración${planRating.votes === 1 ? '' : 'es'}`;
        rating.append(badge, votes);
        header.appendChild(rating);
      }
    }
    card.appendChild(header);

    if (entry.summary) {
      const summary = document.createElement('p');
      summary.className = 'discover-card__summary';
      summary.textContent = entry.summary;
      card.appendChild(summary);
    }

    if (entry.details) {
      const details = document.createElement('details');
      details.className = 'discover-card__details';
      const summaryToggle = document.createElement('summary');
      summaryToggle.textContent = 'Leer detalle';
      const body = document.createElement('p');
      body.textContent = entry.details;
      details.append(summaryToggle, body);
      card.appendChild(details);
    }

    const meta = document.createElement('p');
    meta.className = 'discover-card__meta';
    meta.textContent = `${entry.author} · ${formatRelativeTimeLabel(entry.createdAt)}`;
    card.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'discover-card__actions';
    if (entry.type === 'recipe' && entry.recipeId && getRecipeById(entry.recipeId)) {
      const viewBtn = document.createElement('button');
      viewBtn.type = 'button';
      viewBtn.className = 'ghost';
      viewBtn.dataset.action = 'load-recipe';
      viewBtn.dataset.entryId = entry.id;
      viewBtn.textContent = 'Ver en Chefy';
      actions.appendChild(viewBtn);
    }
    if (entry.type === 'plan' && entry.planSnapshot?.slots) {
      const adoptBtn = document.createElement('button');
      adoptBtn.type = 'button';
      adoptBtn.className = 'ghost';
      adoptBtn.dataset.action = 'adopt-plan';
      adoptBtn.dataset.entryId = entry.id;
      adoptBtn.textContent = 'Añadir a mis planes';
      actions.appendChild(adoptBtn);
    }
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'ghost';
    copyBtn.dataset.action = 'copy-entry';
    copyBtn.dataset.entryId = entry.id;
    copyBtn.textContent = 'Copiar detalle';
    actions.appendChild(copyBtn);
    card.appendChild(actions);

    DOM.discoverFeed.appendChild(card);
  });
}

function clearDiscoverFeedback() {
  if (state.discoverFeedbackTimeout) {
    clearTimeout(state.discoverFeedbackTimeout);
    state.discoverFeedbackTimeout = null;
  }
  if (DOM.discoverFeedback) {
    DOM.discoverFeedback.textContent = '';
    DOM.discoverFeedback.classList.remove('form-feedback--error', 'form-feedback--success');
  }
}

function setDiscoverFeedback(message, type = 'success') {
  clearDiscoverFeedback();
  if (!DOM.discoverFeedback || !message) return;
  DOM.discoverFeedback.textContent = message;
  DOM.discoverFeedback.classList.add(type === 'error' ? 'form-feedback--error' : 'form-feedback--success');
  state.discoverFeedbackTimeout = setTimeout(clearDiscoverFeedback, 4000);
}

function handleDiscoverSubmit(event) {
  event.preventDefault();
  const typeValue = cleanString(DOM.discoverType.value);
  const type = typeValue === 'plan' ? 'plan' : 'recipe';
  const title = cleanString(DOM.discoverTitleInput.value);
  if (!title) {
    setDiscoverFeedback('Añade un título inspirador para tu publicación.', 'error');
    DOM.discoverTitleInput?.focus();
    return;
  }
  const summary = cleanString(DOM.discoverSummary.value);
  const details = cleanString(DOM.discoverDetails.value);
  const author = cleanString(DOM.discoverAuthor.value) || state.currentUser?.email || 'Anónimo';
  const entry = {
    id: `idea-${Date.now()}`,
    type,
    title,
    summary,
    details,
    author,
    createdAt: Date.now(),
  };

  if (type === 'recipe') {
    const recipeId = state.discoverDraftRecipeId || state.lastRecipe?.id || '';
    if (recipeId) {
      entry.recipeId = recipeId;
      entry.meal = MEALS.includes(state.discoverDraftMeal) ? state.discoverDraftMeal : getRecipeById(recipeId)?.meal;
    }
  } else if (type === 'plan') {
    if (state.discoverDraftPlan) {
      entry.planSnapshot = state.discoverDraftPlan;
    }
  }

  state.discoverUserEntries = [entry, ...state.discoverUserEntries];
  persistDiscoverEntries();
  refreshDiscoverEntries();
  DOM.discoverForm?.reset();
  DOM.discoverType.value = 'recipe';
  state.discoverDraftRecipeId = '';
  state.discoverDraftMeal = '';
  state.discoverDraftPlan = null;
  setDiscoverFeedback('Tu publicación se ha añadido a la pestaña Descubrir.', 'success');
}

function prefillDiscoverFromRecipe() {
  if (!state.lastRecipe) {
    setDiscoverFeedback('Genera o abre una receta antes de compartirla.', 'error');
    return;
  }
  const recipe = state.lastRecipe;
  const meal = state.lastMeal ?? recipe.meal;
  DOM.discoverType.value = 'recipe';
  DOM.discoverTitleInput.value = `Mi versión de ${recipe.name}`;
  DOM.discoverSummary.value = `Perfecta para ${MEAL_DISPLAY[meal]} con ${getCuisineLabels(recipe.cuisines).join(', ') || 'sabor global'}.`;
  const payload = buildRecipeSharePayload(recipe, meal);
  DOM.discoverDetails.value = payload.message;
  state.discoverDraftRecipeId = recipe.id;
  state.discoverDraftMeal = meal;
  state.discoverDraftPlan = null;
  setDiscoverFeedback('Hemos cargado tu última receta en el formulario.', 'success');
}

function prefillDiscoverFromPlan() {
  const activePlan = ensureActivePlan();
  if (!planHasEntries(activePlan.slots)) {
    setDiscoverFeedback('Tu planificador está vacío. Añade recetas antes de compartirlo.', 'error');
    return;
  }
  DOM.discoverType.value = 'plan';
  const planName = activePlan.name || 'Plan semanal de Chefy';
  DOM.discoverTitleInput.value = `Plan destacado: ${planName}`;
  DOM.discoverSummary.value = 'Incluye recetas variadas listas para reutilizar durante la semana.';
  DOM.discoverDetails.value = buildPlanShareSummary(normalizeWeeklyPlan(activePlan.slots), planName);
  state.discoverDraftPlan = {
    name: planName,
    slots: normalizeWeeklyPlan(activePlan.slots),
  };
  state.discoverDraftRecipeId = '';
  state.discoverDraftMeal = '';
  setDiscoverFeedback('El plan activo se ha añadido al formulario para compartir.', 'success');
}

function handleDiscoverFeedClick(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const entryId = button.dataset.entryId;
  const entry = state.discoverEntries.find((item) => item.id === entryId);
  if (!entry) return;
  const action = button.dataset.action;
  if (action === 'load-recipe' && entry.recipeId) {
    const recipe = getRecipeById(entry.recipeId);
    if (!recipe) {
      setDiscoverFeedback('No encontramos la receta compartida en tu catálogo actual.', 'error');
      return;
    }
    switchPrimaryPanel('cookPanel');
    renderRecipe(recipe, entry.meal && MEALS.includes(entry.meal) ? entry.meal : recipe.meal);
    setDiscoverFeedback('Receta cargada en el panel principal.', 'success');
  } else if (action === 'adopt-plan' && entry.planSnapshot?.slots) {
    const newId = generateNextPlanId();
    state.weeklyPlans[newId] = createPlan(newId, entry.planSnapshot.name || 'Plan compartido', entry.planSnapshot.slots);
    state.activePlanId = newId;
    persistPlanner();
    renderPlanSelector();
    renderWeeklyPlan();
    updateShoppingList();
    updatePlanShareSummary();
    switchPrimaryPanel('cookPanel');
    setDiscoverFeedback('Plan copiado a tu planificador semanal.', 'success');
  } else if (action === 'copy-entry') {
    const text = entry.details || entry.summary || entry.title;
    if (!text) return;
    copyShareText(text, button);
  }
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
  const ratingSummary = getRecipeRatingSummary(recipe.id);
  const stepSections = STEP_MODES.map((mode) => {
    const steps = recipe.stepModes?.[mode] ?? [];
    if (!steps.length) return '';
    const label = STEP_MODE_LABELS[mode] ?? mode;
    const lines = steps.map((step, index) => `${index + 1}. ${step}`).join('\n');
    return `${label}:\n${lines}`;
  })
    .filter(Boolean)
    .join('\n\n');
  const ratingLine = ratingSummary.average
    ? `\n\n⭐ Valoración media: ${ratingSummary.average.toFixed(1)} (${ratingSummary.votes} valoraciones)`
    : '';
  const userRatingLine = Number.isFinite(ratingSummary.userRating)
    ? `\nMi nota personal: ${ratingSummary.userRating} estrella${ratingSummary.userRating === 1 ? '' : 's'}`
    : '';
  const stepsText = stepSections || 'Esta receta admite improvisación en ambos modos.';
  const message = `${intro}${ratingLine}${userRatingLine}\n\nIngredientes:\n${ingredients}\n\nPasos:\n${stepsText}\n\nGenerado con Chefy 🍳`;
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
function parseIngredientUnits(value) {
  const lines = parseLines(value);
  const result = {};
  lines.forEach((line) => {
    const [itemPart, unitPart] = line.split('|');
    const itemName = cleanString(itemPart);
    const unit = cleanString(unitPart);
    if (!itemName || !unit) return;
    const key = toKey(itemName);
    result[key] = { unit };
  });
  return result;
}

function formatIngredientStores(recipe) {
  const ingredients = recipe?.ingredients ?? [];
  const guides = recipe?.ingredientGuides ?? {};
  const lines = ingredients
    .map((ingredient) => {
      const key = toKey(ingredient.item);
      const stores = guides[key]?.stores;
      if (!stores || typeof stores !== 'object') return '';
      const entries = Object.entries(stores)
        .filter(([storeId]) => SUPERMARKET_LABELS[storeId])
        .map(([storeId, data]) => {
          const product = cleanString(data?.product);
          if (!product) return '';
          const unit = cleanString(data?.unit);
          return unit
            ? `${SUPERMARKET_LABELS[storeId]}:${product} ~ ${unit}`
            : `${SUPERMARKET_LABELS[storeId]}:${product}`;
        })
        .filter(Boolean);
      if (!entries.length) return '';
      return `${ingredient.item} | ${entries.join(' | ')}`;
    })
    .filter(Boolean);
  return lines.join('\n');
}

function parseIngredientStores(value) {
  const lines = parseLines(value);
  const result = {};
  lines.forEach((line) => {
    const [itemPart, ...storeEntries] = line.split('|');
    const itemName = cleanString(itemPart);
    if (!itemName || !storeEntries.length) return;
    const key = toKey(itemName);
    storeEntries.forEach((entry) => {
      const [storePart, rest] = entry.split(':');
      const storeId = toKey(storePart);
      if (!SUPERMARKET_LABELS[storeId]) return;
      const [productPart, unitPart] = (rest ?? '').split('~');
      const product = cleanString(productPart);
      if (!product) return;
      const storeUnit = cleanString(unitPart);
      if (!result[key]) {
        result[key] = {};
      }
      result[key].stores = result[key].stores || {};
      const storeData = { product };
      if (storeUnit) {
        storeData.unit = storeUnit;
      }
      result[key].stores[storeId] = storeData;
    });
  });
  return result;
}

function formatIngredientUnits(recipe) {
  const ingredients = recipe?.ingredients ?? [];
  const guides = recipe?.ingredientGuides ?? {};
  const lines = ingredients
    .map((ingredient) => {
      const key = toKey(ingredient.item);
      const unit = cleanString(guides[key]?.unit);
      if (!unit) return '';
      return `${ingredient.item} | ${unit}`;
    })
    .filter(Boolean);
  return lines.join('\n');
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
  DOM.adminRecipeIngredientUnits.value = formatIngredientUnits(recipe);
  DOM.adminRecipeIngredientStores.value = formatIngredientStores(recipe);
  DOM.adminRecipeStepsCasero.value = formatLines(recipe?.stepModes?.tradicional ?? recipe?.steps);
  DOM.adminRecipeStepsThermomix.value = formatLines(recipe?.stepModes?.thermomix);

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
 
  DOM.adminRecipeIngredientUnits.value = '';
  DOM.adminRecipeIngredientStores.value = '';
  DOM.adminRecipeStepsCasero.value = '';
  DOM.adminRecipeStepsThermomix.value = '';

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
 
  const stepCasero = parseLines(DOM.adminRecipeStepsCasero.value);
  const stepThermomix = parseLines(DOM.adminRecipeStepsThermomix.value);
  const unitGuide = parseIngredientUnits(DOM.adminRecipeIngredientUnits.value);
  const storeGuide = parseIngredientStores(DOM.adminRecipeIngredientStores.value);
  const ingredientGuides = {};
  ingredients.forEach((ingredient) => {
    const key = toKey(ingredient.item);
    if (!key) return;
    const entry = {};
    const unit = unitGuide[key]?.unit;
    const stores = storeGuide[key]?.stores;
    if (unit) {
      entry.unit = unit;
    }
    if (stores && Object.keys(stores).length) {
      entry.stores = stores;
    }
    if (entry.unit || entry.stores) {
      ingredientGuides[key] = entry;
    }
  });

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
 
    steps: stepCasero,
    stepModes: {
      tradicional: stepCasero,
      thermomix: stepThermomix,
    },
    ingredientGuides,

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
  resetRatingPanel();
  setActionAvailability(false);
  state.lastRecipe = null;
  state.lastMeal = meal;

}

function generateRecipe() {
  if (!ensureAuthenticated()) return;
  const preferredMeal = MEALS.includes(state.preferredMeal) ? state.preferredMeal : null;
  const meal = preferredMeal ?? detectMealType();
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
  ensurePlannerState();
  const plannerClone = JSON.parse(JSON.stringify(state.weeklyPlans));
  const newUser = {
    email,
    password: hashPassword(password),
    displayName: email.split('@')[0] || 'Chef Chefy',
    provider: 'password',
    restrictions: state.restrictions,
    cuisines: state.selectedCuisines,
    history: state.history,
    ratings: state.userRatings,
    weeklyPlans: plannerClone,
    activePlanId: state.activePlanId,
    role: superAdminEmail === email ? 'super-admin' : 'user',
  };
  storage.saveUsers([...users, newUser]);
  const storedUser = findUserByEmail(email) ?? newUser;
  applyUserSession(storedUser, { feedback: 'Cuenta creada con éxito. ¡Ya puedes generar recetas!' });
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
  applyUserSession(user, { feedback: 'Inicio de sesión exitoso.' });
}

function applyUserSession(user, { feedback } = {}) {
  if (!user) return;
  state.superAdminEmail = storage.getSuperAdminEmail();
  storage.setCurrentUserEmail(user.email);
  state.currentUser = user;
  state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];
  state.selectedCuisines = Array.isArray(user.cuisines) ? user.cuisines : [];
  state.history = Array.isArray(user.history) ? user.history : [];
  state.userRatings = normalizeRatings(user.ratings);
  const plannerState = normalizePlannerState(
    user.weeklyPlans ? { plans: user.weeklyPlans, activePlanId: user.activePlanId } : user.weeklyPlan,
  );
  state.weeklyPlans = plannerState.plans;
  state.activePlanId = plannerState.activePlanId;
  updatePlanShareSummary();
  renderPlanSelector();
  renderWeeklyPlan();
  updateShoppingList();
  renderDefaultChips();
  renderActiveRestrictions();
  renderCuisineSelectors();
  renderHistory();
  refreshDiscoverEntries();
  updateAuthUI();
  if (state.lastRecipe) {
    updateRatingPanel(state.lastRecipe);
  } else {
    resetRatingPanel();
  }
  if (feedback) {
    setAuthFeedback(feedback, 'success');
  } else {
    clearAuthFeedback();
  }
  closeDialog(DOM.authDialog);
}

function normalizePhoneNumber(value) {
  if (!value) return '';
  const trimmed = value.toString().trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/[^\d]/g, '');
  if (!digits) return '';
  return hasPlus ? `+${digits}` : digits;
}

function setPhoneStatus(message, type = 'info') {
  if (!DOM.phoneLoginStatus) return;
  DOM.phoneLoginStatus.textContent = message;
  DOM.phoneLoginStatus.classList.toggle('form-feedback--error', type === 'error');
  DOM.phoneLoginStatus.classList.toggle('form-feedback--success', type === 'success');
}

function togglePhoneLogin() {
  if (!DOM.phoneLoginContainer) return;
  const shouldShow = DOM.phoneLoginContainer.hidden;
  DOM.phoneLoginContainer.hidden = !shouldShow;
  const label = DOM.phoneLoginToggle?.querySelector('span:nth-of-type(2)');
  if (label) {
    label.textContent = shouldShow ? 'Ocultar acceso con teléfono' : 'Usar número de teléfono';
  }
  if (shouldShow) {
    DOM.phoneNumberInput?.focus();
  } else {
    if (DOM.phoneNumberInput) DOM.phoneNumberInput.value = '';
    if (DOM.phoneCodeInput) DOM.phoneCodeInput.value = '';
    if (DOM.phoneCodeContainer) DOM.phoneCodeContainer.hidden = true;
    setPhoneStatus('');
    state.pendingPhoneLogin = null;
  }
}

function handleSendPhoneCode() {
  if (!DOM.phoneNumberInput) return;
  const raw = DOM.phoneNumberInput.value.trim();
  const normalized = normalizePhoneNumber(raw);
  if (!normalized || normalized.length < 6) {
    setPhoneStatus('Introduce un número válido para recibir tu código.', 'error');
    return;
  }
  const code = String(Math.floor(100000 + Math.random() * 900000));
  state.pendingPhoneLogin = {
    number: normalized,
    displayNumber: raw || normalized,
    code,
    expiresAt: Date.now() + 2 * 60 * 1000,
  };
  if (DOM.phoneCodeContainer) {
    DOM.phoneCodeContainer.hidden = false;
  }
  if (DOM.phoneCodeInput) {
    DOM.phoneCodeInput.value = '';
    DOM.phoneCodeInput.focus();
  }
  setPhoneStatus(`Tu código temporal es ${code}. Tiene validez durante 2 minutos.`, 'success');
}

function handleVerifyPhoneCode() {
  if (!state.pendingPhoneLogin) {
    setPhoneStatus('Solicita un código antes de verificar.', 'error');
    return;
  }
  const entered = DOM.phoneCodeInput?.value.trim();
  if (!entered) {
    setPhoneStatus('Introduce el código que aparece en pantalla.', 'error');
    return;
  }
  if (Date.now() > state.pendingPhoneLogin.expiresAt) {
    setPhoneStatus('El código ha caducado. Solicita uno nuevo.', 'error');
    return;
  }
  if (entered !== state.pendingPhoneLogin.code) {
    setPhoneStatus('Código incorrecto. Vuelve a intentarlo.', 'error');
    return;
  }
  completePhoneLogin(state.pendingPhoneLogin.number, state.pendingPhoneLogin.displayNumber);
}

function completePhoneLogin(number, displayNumber) {
  const users = storage.getUsers();
  let user = users.find((item) => item.provider === 'phone' && item.phoneNumber === number);
  if (!user) {
    ensurePlannerState();
    const sanitized = number.replace(/[^\d]/g, '') || Date.now().toString();
    const email = `phone-${sanitized}@chefy.app`;
    let superAdminEmail = storage.getSuperAdminEmail();
    const newUser = {
      email,
      provider: 'phone',
      phoneNumber: number,
      displayName: displayNumber || `Teléfono ${number}`,
      restrictions: state.restrictions,
      cuisines: state.selectedCuisines,
      history: state.history,
      ratings: state.userRatings,
      weeklyPlans: JSON.parse(JSON.stringify(state.weeklyPlans)),
      activePlanId: state.activePlanId,
      role: superAdminEmail ? 'user' : 'super-admin',
    };
    storage.saveUsers([...users, newUser]);
    if (!superAdminEmail) {
      storage.setSuperAdminEmail(email);
    }
    user = findUserByEmail(email) ?? newUser;
  }
  state.pendingPhoneLogin = null;
  if (DOM.phoneCodeContainer) DOM.phoneCodeContainer.hidden = true;
  if (DOM.phoneNumberInput) DOM.phoneNumberInput.value = '';
  if (DOM.phoneCodeInput) DOM.phoneCodeInput.value = '';
  setPhoneStatus('Iniciando sesión...', 'success');
  applyUserSession(user, { feedback: 'Inicio de sesión con teléfono completado.' });
  if (DOM.phoneLoginToggle) {
    const label = DOM.phoneLoginToggle.querySelector('span:nth-of-type(2)');
    if (label) label.textContent = 'Usar número de teléfono';
  }
  if (DOM.phoneLoginContainer) {
    DOM.phoneLoginContainer.hidden = true;
  }
}

function handleProviderLogin(provider) {
  const users = storage.getUsers();
  const existing = users.find((user) => user.provider === provider);
  if (existing) {
    const label = provider === 'apple' ? 'Apple' : 'Google';
    applyUserSession(existing, { feedback: `Inicio de sesión con ${label} listo.` });
    return;
  }
  ensurePlannerState();
  const timestamp = Date.now();
  const email = `${provider}-${timestamp}@chefy.app`;
  const displayMap = { google: 'Cuenta Google', apple: 'Cuenta Apple' };
  let superAdminEmail = storage.getSuperAdminEmail();
  const newUser = {
    email,
    provider,
    displayName: displayMap[provider] ?? 'Cuenta Chefy',
    restrictions: state.restrictions,
    cuisines: state.selectedCuisines,
    history: state.history,
    ratings: state.userRatings,
    weeklyPlans: JSON.parse(JSON.stringify(state.weeklyPlans)),
    activePlanId: state.activePlanId,
    role: superAdminEmail ? 'user' : 'super-admin',
  };
  storage.saveUsers([...users, newUser]);
  if (!superAdminEmail) {
    storage.setSuperAdminEmail(email);
  }
  const storedUser = findUserByEmail(email) ?? newUser;
  const label = provider === 'apple' ? 'Apple' : 'Google';
  applyUserSession(storedUser, { feedback: `Inicio de sesión con ${label} completado.` });
}

function updateAuthUI() {
  if (state.currentUser) {
    DOM.authToggle.hidden = true;
    DOM.authToggle.setAttribute('aria-hidden', 'true');
    DOM.logoutButton.hidden = false;
    DOM.logoutButton.setAttribute('aria-hidden', 'false');
    DOM.userWelcome.hidden = false;
    const displayName = state.currentUser.displayName || state.currentUser.email;
    DOM.userWelcome.textContent = `Hola, ${displayName}`;
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
  state.userRatings = storage.getGuestRatings();
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
      state.userRatings = normalizeRatings(user.ratings);
      plannerState = normalizePlannerState(
        user.weeklyPlans ? { plans: user.weeklyPlans, activePlanId: user.activePlanId } : user.weeklyPlan,
      );
    } else {
      storage.setCurrentUserEmail(null);
      state.currentUser = null;
      state.restrictions = storage.getGuestRestrictions();
      state.selectedCuisines = storage.getGuestCuisines();
      state.history = storage.getGuestHistory();
      state.userRatings = storage.getGuestRatings();
      plannerState = storage.getGuestPlanner();
    }
  } else {
    state.currentUser = null;
    state.restrictions = storage.getGuestRestrictions();
    state.selectedCuisines = storage.getGuestCuisines();
    state.history = storage.getGuestHistory();
    state.userRatings = storage.getGuestRatings();
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
  loadDiscoverEntries();

  if (DOM.adminDialog?.open) {
    renderAdminRecipeList();
    renderAdminUserList();
    updateAdminControls();
  }

}

function registerEventListeners() {
  DOM.generateButton.addEventListener('click', generateRecipe);
  if (DOM.mealButtons?.forEach) {
    DOM.mealButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const meal = button.dataset.mealOption;
        if (!meal) return;
        setPreferredMeal(meal);
      });
    });
  }
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
  DOM.ratingControls?.addEventListener('click', handleRatingClick);
  DOM.ratingControls?.addEventListener('keydown', handleRatingKeydown);
  DOM.ratingResetButton?.addEventListener('click', handleRatingReset);
  DOM.googleLoginButton?.addEventListener('click', () => handleProviderLogin('google'));
  DOM.appleLoginButton?.addEventListener('click', () => handleProviderLogin('apple'));
  DOM.phoneLoginToggle?.addEventListener('click', togglePhoneLogin);
  DOM.phoneSendCodeButton?.addEventListener('click', handleSendPhoneCode);
  DOM.phoneVerifyButton?.addEventListener('click', handleVerifyPhoneCode);
  DOM.phoneNumberInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendPhoneCode();
    }
  });
  DOM.phoneCodeInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleVerifyPhoneCode();
    }
  });

  if (DOM.shareButton && DOM.shareMenu) {
    DOM.shareButton.addEventListener('click', () => toggleShareMenu(DOM.shareMenu, DOM.shareButton));
    DOM.shareMenu.addEventListener('click', handleShareMenuClick);
  }
  if (DOM.sharePlanButton && DOM.planShareMenu) {
    DOM.sharePlanButton.addEventListener('click', () => toggleShareMenu(DOM.planShareMenu, DOM.sharePlanButton));
    DOM.planShareMenu.addEventListener('click', handleShareMenuClick);
  }
  DOM.stepModeToggle?.addEventListener('click', handleStepModeToggle);
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
 
  DOM.cookTab?.addEventListener('click', handlePrimaryTabClick);
  DOM.discoverTab?.addEventListener('click', handlePrimaryTabClick);
  DOM.discoverForm?.addEventListener('submit', handleDiscoverSubmit);
  DOM.discoverPrefillRecipe?.addEventListener('click', prefillDiscoverFromRecipe);
  DOM.discoverPrefillPlan?.addEventListener('click', prefillDiscoverFromPlan);
  DOM.discoverFeed?.addEventListener('click', handleDiscoverFeedClick);

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
  switchPrimaryPanel('cookPanel');

  clearResultCard();

  setInterval(updateMealUI, 60 * 1000);
}

init();
