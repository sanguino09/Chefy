const DOM = {
  generateButton: document.getElementById('generateButton'),
  mealHint: document.getElementById('mealHint'),
  resultTitle: document.getElementById('resultTitle'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  resultDescription: document.getElementById('resultDescription'),
  resultTags: document.getElementById('resultTags'),
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

const RECIPES = [
  {
    id: 'sunrise-bowl',
    name: 'Bowl energizante de amanecer',
    meal: 'desayuno',
    description:
      'Yogur griego con granola casera, frutas frescas de temporada y un toque de miel cítrica para comenzar el día con energía.',
    tags: ['alto en proteínas', 'listo en 10 minutos'],
    ingredients: ['yogur', 'granola', 'frutas', 'miel'],
  },
  {
    id: 'green-toast',
    name: 'Tostada verde mediterránea',
    meal: 'desayuno',
    description:
      'Pan integral crujiente con crema de aguacate, tomate asado y semillas tostadas. Refrescante y saciante.',
    tags: ['vegana', 'fibra'],
    ingredients: ['pan integral', 'aguacate', 'tomate', 'semillas'],
  },
  {
    id: 'zen-bento',
    name: 'Bento zen de quinoa y tofu',
    meal: 'comida',
    description:
      'Quinoa esponjosa con tofu glaseado en salsa tamari, verduras al vapor y crujientes encurtidos asiáticos.',
    tags: ['sin gluten', 'plant-based'],
    ingredients: ['quinoa', 'tofu', 'tamari', 'verduras mixtas'],
  },
  {
    id: 'citrus-salmon',
    name: 'Salmón cítrico con ensalada templada',
    meal: 'comida',
    description:
      'Filete de salmón al horno con glaseado de naranja y jengibre, servido con ensalada tibia de espárragos y couscous.',
    tags: ['omega 3', 'horno'],
    ingredients: ['salmón', 'naranja', 'jengibre', 'espárragos', 'couscous'],
  },
  {
    id: 'midnight-ramen',
    name: 'Ramen nocturno reconfortante',
    meal: 'cena',
    description:
      'Caldo ligero con fideos integrales, pak choi y huevo marinado. Perfume de sésamo tostado para cerrar el día.',
    tags: ['confort', 'rápido'],
    ingredients: ['fideos', 'pak choi', 'huevo', 'sésamo'],
  },
  {
    id: 'veggie-tacos',
    name: 'Tacos de calabaza especiada',
    meal: 'cena',
    description:
      'Tortillas de maíz con calabaza asada al chipotle, cebolla encurtida y crema de anacardos. Explosión de sabor.',
    tags: ['sin lácteos', 'street food'],
    ingredients: ['calabaza', 'chipotle', 'tortillas', 'anacardos'],
  },
  {
    id: 'sunny-smoothie',
    name: 'Smoothie dorado tropical',
    meal: 'desayuno',
    description:
      'Smoothie cremoso de mango, piña y cúrcuma con bebida vegetal de coco para un arranque soleado.',
    tags: ['sin lácteos', 'vitamina C'],
    ingredients: ['mango', 'piña', 'cúrcuma', 'coco'],
  },
  {
    id: 'garden-bowl',
    name: 'Bol mediterráneo fresco',
    meal: 'comida',
    description:
      'Base de farro con garbanzos especiados, hojas verdes, pepino crujiente y aderezo de limón tahini.',
    tags: ['rico en fibra', 'meal prep'],
    ingredients: ['farro', 'garbanzos', 'tahini', 'pepino'],
  },
  {
    id: 'moonlight-curry',
    name: 'Curry de coco y berenjena a la luz de la luna',
    meal: 'cena',
    description:
      'Curry suave de berenjena y garbanzos en leche de coco con arroz jazmín aromático.',
    tags: ['sin gluten', 'cena ligera'],
    ingredients: ['berenjena', 'garbanzos', 'coco', 'arroz jazmín'],
  },
];

const MEAL_LABELS = {
  desayuno: 'un desayuno',
  comida: 'una comida',
  cena: 'una cena',
};

const STORAGE_KEYS = {
  USERS: 'chefyUsers',
  CURRENT_USER: 'chefyCurrentUser',
  GUEST_RESTRICTIONS: 'chefyGuestRestrictions',
};

const storage = {
  getUsers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) ?? [];
    } catch (error) {
      console.warn('No se pudieron leer los usuarios almacenados', error);
      return [];
    }
  },
  saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
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
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.GUEST_RESTRICTIONS)) ?? [];
    } catch (error) {
      console.warn('No se pudieron leer las restricciones de invitado', error);
      return [];
    }
  },
  saveGuestRestrictions(restrictions) {
    localStorage.setItem(STORAGE_KEYS.GUEST_RESTRICTIONS, JSON.stringify(restrictions));
  },
};

const state = {
  currentUser: null,
  restrictions: [],
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

function toKey(value) {
  return value.trim().toLowerCase();
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

function persistRestrictions() {
  if (state.currentUser) {
    const users = storage.getUsers();
    const updated = users.map((user) =>
      user.email === state.currentUser.email
        ? { ...user, restrictions: state.restrictions }
        : user,
    );
    storage.saveUsers(updated);
    state.currentUser = updated.find((user) => user.email === state.currentUser.email) ?? null;
  } else {
    storage.saveGuestRestrictions(state.restrictions);
  }
  renderActiveRestrictions();
  renderDefaultChips();
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

function displayRecipe(recipe, meal) {
  DOM.resultTitle.textContent = recipe.name;
  DOM.resultSubtitle.textContent = `Perfecto para ${MEAL_LABELS[meal]} sin ingredientes no deseados.`;
  DOM.resultDescription.textContent = recipe.description;
  DOM.resultTags.hidden = false;
  DOM.resultTags.innerHTML = '';
  const mealTag = document.createElement('span');
  mealTag.className = 'tag';
  mealTag.textContent = meal;
  DOM.resultTags.appendChild(mealTag);
  recipe.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    DOM.resultTags.appendChild(span);
  });
}

function displayNoRecipe(meal) {
  DOM.resultTitle.textContent = 'Vaya, no encontramos una receta adecuada';
  DOM.resultSubtitle.textContent = `Revisa tus restricciones para desbloquear más opciones de ${MEAL_LABELS[meal]}.`;
  DOM.resultDescription.textContent = '';
  DOM.resultTags.hidden = true;
}

function generateRecipe() {
  if (!ensureAuthenticated()) return;
  const meal = detectMealType();
  const restricted = new Set(state.restrictions.map(toKey));
  const available = RECIPES.filter(
    (recipe) =>
      recipe.meal === meal && !recipe.ingredients.some((ingredient) => restricted.has(toKey(ingredient))),
  );
  if (!available.length) {
    displayNoRecipe(meal);
    return;
  }
  const recipe = available[Math.floor(Math.random() * available.length)];
  displayRecipe(recipe, meal);
}

function ensureAuthenticated() {
  if (state.currentUser) return true;
  DOM.resultTitle.textContent = 'Necesitas iniciar sesión';
  DOM.resultSubtitle.textContent = 'Crea una cuenta gratuita para guardar tus restricciones y generar recetas personalizadas.';
  DOM.resultDescription.textContent = '';
  DOM.resultTags.hidden = true;
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
  const newUser = { email, password: hashPassword(password), restrictions: state.restrictions };
  storage.saveUsers([...users, newUser]);
  storage.setCurrentUserEmail(email);
  state.currentUser = newUser;
  setAuthFeedback('Cuenta creada con éxito. ¡Ya puedes generar recetas!', 'success');
  updateAuthUI();
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
  setAuthFeedback('Inicio de sesión exitoso.', 'success');
  updateAuthUI();
  persistRestrictions();
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
  state.restrictions = storage.getGuestRestrictions();
  updateAuthUI();
  persistRestrictions();
  DOM.resultTitle.textContent = '¿Qué vamos a cocinar?';
  DOM.resultSubtitle.textContent = 'Inicia sesión y pulsa el botón para que Chefy te recomiende una receta increíble.';
  DOM.resultDescription.textContent = '';
  DOM.resultTags.hidden = true;
}

function handleSettingsOpen() {
  if (state.currentUser) {
    DOM.settingsStatus.textContent = 'Tus preferencias se guardan automáticamente en tu cuenta.';
  } else {
    DOM.settingsStatus.textContent = 'Modo invitado: inicia sesión para sincronizar tus restricciones en todos tus dispositivos.';
  }
  renderDefaultChips();
  renderActiveRestrictions();
  showDialog(DOM.settingsPanel);
}

function hydrateFromStorage() {
  const email = storage.getCurrentUserEmail();
  if (email) {
    const user = findUserByEmail(email);
    if (user) {
      state.currentUser = user;
      state.restrictions = Array.isArray(user.restrictions) ? user.restrictions : [];
    } else {
      storage.setCurrentUserEmail(null);
      state.restrictions = storage.getGuestRestrictions();
    }
  } else {
    state.restrictions = storage.getGuestRestrictions();
  }
  updateAuthUI();
  renderDefaultChips();
  renderActiveRestrictions();
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
  setInterval(updateMealUI, 60 * 1000);
}

init();
