var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// simulation/simulate.ts
var simulate_exports = {};
__export(simulate_exports, {
  ReplayCalcParser: () => ReplayCalcParser,
  buildReplayAbilityPetMapFromActions: () => buildReplayAbilityPetMapFromActions,
  buildReplayPerkNameByPetIdFromActions: () => buildReplayPerkNameByPetIdFromActions,
  catalogs: () => import_sap_battle_engine4.catalogs,
  createBattleEngine: () => import_sap_battle_engine4.createBattleEngine,
  createBoardStrengthFingerprint: () => createBoardStrengthFingerprint,
  createBoardStrengthMatchConfig: () => createBoardStrengthMatchConfig,
  createSimulationConfigFromCalculatorState: () => createSimulationConfigFromCalculatorState,
  generateReplayCalculatorLink: () => generateReplayCalculatorLink,
  getBoardStrengthPrecisionProfile: () => getBoardStrengthPrecisionProfile,
  getPositioningSimulationCount: () => getPositioningSimulationCount,
  optimizeFight: () => import_sap_battle_engine4.optimizeFight,
  parseReplayCalculatorState: () => parseReplayCalculatorState,
  parseReplayForCalculatorFromActions: () => parseReplayForCalculatorFromActions,
  parseTeamwoodReplayForCalculator: () => parseTeamwoodReplayForCalculator,
  runBoardStrengthEvaluation: () => runBoardStrengthEvaluation,
  runHeadlessSimulation: () => import_sap_battle_engine3.runHeadlessSimulation,
  runPositioningOptimization: () => runPositioningOptimization,
  runReplayOddsFromCalculatorState: () => runReplayOddsFromCalculatorState,
  runReplayPositioningFromCalculatorState: () => runReplayPositioningFromCalculatorState,
  runReplayStrengthFromCalculatorState: () => runReplayStrengthFromCalculatorState,
  runSimulation: () => runSimulation,
  selectReplayBattleFromActions: () => selectReplayBattleFromActions
});
module.exports = __toCommonJS(simulate_exports);

// src/app/integrations/simulation/battle-engine.ts
var import_sap_battle_engine2 = require("sap-battle-engine");

// src/app/domain/entities/player.class.ts
var Player = class {
  constructor() {
    this.pack = "Turtle";
    this.toy = null;
    this.hardToy = null;
    this.originalToy = null;
    this.isOpponent = false;
    this.allPets = false;
    this.tokenPets = false;
  }
  getPet(index) {
    return [this.pet0, this.pet1, this.pet2, this.pet3, this.pet4][index] ?? null;
  }
  setPet(index, pet, _init2 = false) {
    switch (index) {
      case 0:
        this.pet0 = pet;
        break;
      case 1:
        this.pet1 = pet;
        break;
      case 2:
        this.pet2 = pet;
        break;
      case 3:
        this.pet3 = pet;
        break;
      case 4:
        this.pet4 = pet;
        break;
      default:
        return;
    }
    if (pet) {
      pet.parent = this;
      pet.savedPosition = index;
    }
  }
  get petArray() {
    return [this.pet0, this.pet1, this.pet2, this.pet3, this.pet4].filter((pet) => pet != null);
  }
};

// src/app/domain/entities/pet.class.ts
var Pet = class {
  constructor() {
    this.exp = 0;
    this.mana = 0;
    this.equipment = null;
    this.plainCopy = false;
    this.triggersConsumed = 0;
    this.foodsEaten = 0;
    this.timesGaveHealth = 0;
    this.battlesFought = 0;
    this.timesHurt = 0;
    this.friendsDiedBeforeBattle = 0;
    this.friendsHurtBeforeBattle = 0;
    this.ailmentsCount = 0;
    this.savedPosition = 0;
  }
  get level() {
    return this.exp >= 5 ? 3 : this.exp >= 2 ? 2 : 1;
  }
};

// simulation/shims.ts
function Injectable(_args) {
  return function(target) {
  };
}

// src/app/runtime/content-catalogs.ts
var import_sap_battle_engine = require("sap-battle-engine");
var pets = structuredClone(import_sap_battle_engine.catalogs.pets);
var toys = structuredClone(import_sap_battle_engine.catalogs.toys);
var food = structuredClone(import_sap_battle_engine.catalogs.food);
var perks = structuredClone(import_sap_battle_engine.catalogs.perks);

// src/app/runtime/asset-catalog.ts
var getNameList = (entries) => entries.map((entry) => entry?.Name).filter((name) => Boolean(name));
var petNameOverrides = {
  "Beluga Whale": "WhiteWhale",
  "Great One": "Cthulu",
  "Small One": "BabyCthulhu",
  Abomination: "Shoggoth",
  Visitor: "Xenomorph",
  Swordfish: "SwordFish",
  Doberman: "DobermanDog",
  "Highland Cow": "HighlandCow",
  "Sabertooth Tiger": "SaberToothTiger",
  "Moby Dick": "MochaDick",
  "Chimera Goat": "ChimeraGoat",
  "Chimera Lion": "ChimeraLion",
  "Chimera Snake": "ChimeraSnake",
  CrackedEgg: "EggLadCracked",
  "Fake Nessie": "FakeNessie",
  "Tand and Tand": "ThorGoats"
};
var perkNameOverrides = {
  Corncob: "Corn",
  "Cake Slice": "BirthdayCakeSlice",
  "Peanut Butter": "PeanutButter",
  "Mana Potion": "ManaPotion",
  "Faint Bread": "DeadBread",
  Kiwifruit: "Kiwi",
  Eggplant: "EggPlant",
  Rice: "RiceBall",
  Donut: "Doughnut",
  Cherry: "Cherries",
  "Melon Slice": "WaterMelon",
  Cold: "Frozen",
  Crisp: "Burn",
  Dazed: "Deaf",
  Icky: "Acid",
  Inked: "Ink",
  Spooked: "Scared",
  Sleepy: "Drowsy",
  Webbed: "Web",
  Cursed: "Curse",
  Silly: "Silly",
  Bloated: "Bloated"
};
var perkNameOverridesLower = Object.fromEntries(
  Object.entries(perkNameOverrides).map(([key, value]) => [
    key.toLowerCase(),
    value
  ])
);
var normalize = (name) => {
  if (!name) {
    return "";
  }
  return name.replace(/[^a-zA-Z0-9]/g, "");
};
var buildNameIdMap = (entries) => {
  const map = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    if (entry?.Name && entry?.NameId) {
      map.set(entry.Name, entry.NameId);
    }
  }
  return map;
};
var formatAbilityText = (abilities, perkNote) => {
  const isNoAbilityText = (text) => !text || /^no ability\.?$/i.test(text.trim());
  const lines = [];
  if (Array.isArray(abilities)) {
    for (const ability of abilities) {
      if (!ability?.About || isNoAbilityText(ability.About)) {
        continue;
      }
      if (ability.Level != null) {
        lines.push(`Lv${ability.Level}: ${ability.About}`);
      } else {
        lines.push(ability.About);
      }
    }
  }
  if (perkNote) {
    lines.push(perkNote);
  }
  return lines.length ? lines.join("\n") : null;
};
var petNameIds = buildNameIdMap(
  pets.default ?? pets ?? []
);
var petIdByName = /* @__PURE__ */ new Map();
var petIdEntries = pets.default ?? pets ?? [];
for (const entry of petIdEntries) {
  if (!entry?.Name || !entry?.Id) {
    continue;
  }
  petIdByName.set(entry.Name, entry.Id);
}
var petAbilityMap = /* @__PURE__ */ new Map();
var petAbilityEntries = pets.default ?? pets ?? [];
for (const entry of petAbilityEntries) {
  if (!entry?.Name) {
    continue;
  }
  const abilityText = formatAbilityText(entry.Abilities, entry.PerkNote);
  if (abilityText) {
    petAbilityMap.set(entry.Name, abilityText);
  }
}
var petNames = getNameList(
  pets.default ?? pets ?? []
);
var toyNameIds = buildNameIdMap(
  toys.default ?? toys ?? []
);
var toyAbilityMap = /* @__PURE__ */ new Map();
var toyAbilityEntries = toys.default ?? toys ?? [];
for (const entry of toyAbilityEntries) {
  if (!entry?.Name) {
    continue;
  }
  const abilityText = formatAbilityText(entry.Abilities);
  if (abilityText) {
    toyAbilityMap.set(entry.Name, abilityText);
  }
}
var toyNames = getNameList(
  toys.default ?? toys ?? []
);
var equipmentNameIds = buildNameIdMap(
  perks.default ?? perks ?? []
);
var equipmentNameIdsLower = new Map(
  Array.from(equipmentNameIds.entries()).map(([key, value]) => [
    key.toLowerCase(),
    value
  ])
);
var equipmentNameIdsNormalized = new Map(
  Array.from(equipmentNameIds.entries()).map(([key, value]) => [
    normalize(key),
    value
  ])
);
var equipmentAbilityMap = /* @__PURE__ */ new Map();
var equipmentAbilityEntries = perks.default ?? perks ?? [];
for (const entry of equipmentAbilityEntries) {
  if (!entry?.Name) {
    continue;
  }
  if (entry.Ability) {
    equipmentAbilityMap.set(entry.Name, entry.Ability);
  }
}
var equipmentNames = getNameList(
  perks.default ?? perks ?? []
);
function getPetIconFileName(petName) {
  if (!petName) {
    return null;
  }
  const nameId = petNameIds.get(petName);
  if (nameId) {
    return nameId;
  }
  const mapped = petNameOverrides[petName];
  if (mapped) {
    return mapped;
  }
  return null;
}
function getPetIconPath(petName) {
  const fileName = getPetIconFileName(petName);
  if (!fileName) {
    return null;
  }
  return `assets/art/Public/Public/Pets/${fileName}.png`;
}
function getAllPetNames() {
  return [...petNames];
}
function getToyIconPath(toyName) {
  if (!toyName) {
    return null;
  }
  const nameId = toyNameIds.get(toyName);
  const fileName = nameId ?? normalize(toyName);
  if (!fileName) {
    return null;
  }
  return `assets/art/Public/Public/Toys/${fileName}.png`;
}
function getAllToyNames() {
  return [...toyNames];
}
var getEquipmentFileName = (equipmentName) => {
  if (!equipmentName) {
    return null;
  }
  const normalized = normalize(equipmentName);
  const nameId = equipmentNameIds.get(equipmentName) ?? equipmentNameIdsLower.get(equipmentName.toLowerCase()) ?? equipmentNameIdsNormalized.get(normalized);
  const override = perkNameOverrides[equipmentName] ?? perkNameOverridesLower[equipmentName.toLowerCase()];
  const fileName = nameId ?? override ?? normalized;
  return fileName || null;
};
function getEquipmentIconPath(equipmentName, isAilment = false) {
  const fileName = getEquipmentFileName(equipmentName);
  if (!fileName) {
    return null;
  }
  if (isAilment) {
    return `assets/art/Ailments/Ailments/${fileName}.png`;
  }
  return `assets/art/Public/Public/Food/${fileName}.png`;
}
function getAllEquipmentNames() {
  return [...equipmentNames];
}

// src/app/integrations/equipment/equipment-categories.ts
var AILMENT_CATEGORIES = {
  Ailments: [
    "Bloated",
    "Cold",
    "Confused",
    "Cowardly",
    "Crisp",
    "Cursed",
    "Dazed",
    "Icky",
    "Inked",
    "Sad",
    "Silly",
    "Sleepy",
    "Spooked",
    "Tasty",
    "Toasty",
    "Weak",
    "Webbed"
  ]
};

// src/app/integrations/log/log-inline-icons.ts
function buildNameRegex(names) {
  const escaped = names.filter((name) => Boolean(name)).sort((a, b) => b.length - a.length).map((name) => escapeRegExp(name));
  if (!escaped.length) {
    return null;
  }
  return new RegExp(
    `(?<![A-Za-z0-9])(${escaped.join("|")})(?![A-Za-z0-9])`,
    "g"
  );
}
function buildInlineNameTypeMap(petNames2, toyNames2, equipmentNames2) {
  const map = /* @__PURE__ */ new Map();
  for (const name of equipmentNames2) {
    if (name) {
      map.set(name, "equipment");
    }
  }
  for (const name of toyNames2) {
    if (name) {
      map.set(name, "toy");
    }
  }
  for (const name of petNames2) {
    if (name) {
      map.set(name, "pet");
    }
  }
  return map;
}
function buildInlineNameRegex(petNames2, toyNames2, equipmentNames2) {
  const combined = /* @__PURE__ */ new Set();
  petNames2.forEach((name) => name && combined.add(name));
  toyNames2.forEach((name) => name && combined.add(name));
  equipmentNames2.forEach((name) => name && combined.add(name));
  return buildNameRegex(Array.from(combined));
}
function decorateInlineIcons(message, inlineNameRegex, inlineNameTypeMap, ailmentNames) {
  if (!message || message.includes("<img") || !inlineNameRegex) {
    return message;
  }
  let updated = replaceMatchesWithIconsOutsideTags(
    message,
    inlineNameRegex,
    (name) => getInlineIconPath(name, inlineNameTypeMap, ailmentNames),
    (name) => getInlineIconHtml(name, inlineNameTypeMap, ailmentNames)
  );
  const manaIcon = "assets/art/Public/Public/Icons/TextMap-resources.assets-31-split/mana.png";
  const manaRegex = /(?<![A-Za-z0-9])mana(?![A-Za-z0-9])(?!\s+Potion)/gi;
  updated = replaceMatchesWithIconsOutsideTags(updated, manaRegex, () => manaIcon);
  const expIcon = "assets/art/Public/Public/Icons/TextMap-resources.assets-31-split/xp.png";
  const expRegex = /(?<![A-Za-z0-9])(?:xp|exp)(?![A-Za-z0-9])/gi;
  updated = replaceMatchesWithIconsOutsideTags(updated, expRegex, () => expIcon);
  const goldIcon = "assets/art/Public/Public/Icons/TextMap-resources.assets-31-split/gold.png";
  const goldRegex = /(?<![A-Za-z0-9])gold(?![A-Za-z0-9])/gi;
  updated = replaceMatchesWithIconsOutsideTags(updated, goldRegex, () => goldIcon);
  const trumpetIcon = "assets/art/Public/Public/Icons/TextMap-resources.assets-31-split/trumpet.png";
  const trumpetRegex = /(?<![A-Za-z0-9])trumpets?(?![A-Za-z0-9])/gi;
  updated = replaceMatchesWithIconsOutsideTags(
    updated,
    trumpetRegex,
    () => trumpetIcon
  );
  return updated;
}
function getInlineIconPath(name, inlineNameTypeMap, ailmentNames) {
  const type = inlineNameTypeMap.get(name) ?? null;
  if (type === "pet") {
    return getPetIconPath(name);
  }
  if (type === "toy") {
    return getToyIconPath(name);
  }
  if (type === "equipment") {
    const isAilment = ailmentNames.has(name);
    return getEquipmentIconPath(name, isAilment) ?? getEquipmentIconPath(name, !isAilment);
  }
  return null;
}
function getInlineIconHtml(name, inlineNameTypeMap, ailmentNames) {
  const type = inlineNameTypeMap.get(name) ?? null;
  if (type !== "equipment") {
    return null;
  }
  const isAilment = ailmentNames.has(name);
  const primary = getEquipmentIconPath(name, isAilment);
  if (!primary) {
    return null;
  }
  const secondary = getEquipmentIconPath(name, !isAilment);
  const secondaryAttr = secondary ? `this.dataset.step='1';this.src='${secondary}';` : `this.dataset.step='1';`;
  return `<img src="${primary}" class="log-inline-icon" alt="${name}" onerror="if(!this.dataset.step){${secondaryAttr}return;}this.remove();"> ${name}`;
}
function replaceMatchesWithIconsOutsideTags(message, regex, getIcon, getHtml) {
  return message.split(/(<[^>]+>)/g).map(
    (segment) => segment.startsWith("<") ? segment : replaceMatchesWithIcons(segment, regex, getIcon, getHtml)
  ).join("");
}
function replaceMatchesWithIcons(message, regex, getIcon, getHtml) {
  if (!regex) {
    return message;
  }
  return message.replace(regex, (match) => {
    const icon = getIcon(match);
    if (getHtml) {
      const html = getHtml(match, icon);
      if (html) {
        return html;
      }
    }
    if (!icon) {
      return match;
    }
    return `<img src="${icon}" class="log-inline-icon" alt="${match}" onerror="this.remove()"> ${match}`;
  });
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/app/integrations/log/log-merge-utils.ts
function getMergedAttackHealthMessage(lastLog, nextLog) {
  if (!lastLog || !nextLog) {
    return null;
  }
  if (lastLog.noCollapse || nextLog.noCollapse) {
    return null;
  }
  if (lastLog.player !== nextLog.player) {
    return null;
  }
  if (lastLog.type !== nextLog.type) {
    return null;
  }
  if (lastLog.randomEvent !== nextLog.randomEvent) {
    return null;
  }
  if (lastLog.randomEventReason !== nextLog.randomEventReason) {
    return null;
  }
  if (lastLog.sourcePet !== nextLog.sourcePet || lastLog.sourceIndex !== nextLog.sourceIndex) {
    return null;
  }
  if (lastLog.targetPet !== nextLog.targetPet || lastLog.targetIndex !== nextLog.targetIndex) {
    return null;
  }
  if (lastLog.tiger !== nextLog.tiger) {
    return null;
  }
  if (lastLog.puma !== nextLog.puma) {
    return null;
  }
  if (lastLog.pteranodon !== nextLog.pteranodon) {
    return null;
  }
  const lastPanther = lastLog.pantherMultiplier ?? null;
  const nextPanther = nextLog.pantherMultiplier ?? null;
  if (lastPanther !== nextPanther) {
    return null;
  }
  const lastText = stripTags(lastLog.rawMessage ?? lastLog.message ?? "");
  const nextText = stripTags(nextLog.rawMessage ?? nextLog.message ?? "");
  if (!lastText || !nextText) {
    return null;
  }
  if (lastText.includes(" attack and ") || lastText.includes(" health and ") || nextText.includes(" attack and ") || nextText.includes(" health and ")) {
    return null;
  }
  return combineAttackHealthLogs(lastText, nextText) ?? combineAttackHealthLogs(nextText, lastText);
}
function combineAttackHealthLogs(attackLog, healthLog) {
  const lossAttack = parseStatLog(attackLog, "lost", "attack");
  const lossHealth = parseStatLog(healthLog, "lost", "health");
  if (lossAttack && lossHealth) {
    if (lossAttack.prefix === lossHealth.prefix && lossAttack.suffix === lossHealth.suffix) {
      return `${lossAttack.prefix}${lossAttack.value} attack and ${lossHealth.value} health${lossAttack.suffix}`;
    }
  }
  const gainAttack = parseStatLog(attackLog, "gave", "attack");
  const gainHealth = parseStatLog(healthLog, "gave", "health");
  if (gainAttack && gainHealth) {
    if (gainAttack.prefix === gainHealth.prefix && gainAttack.suffix === gainHealth.suffix) {
      return `${gainAttack.prefix}${gainAttack.plus}${gainAttack.value} attack and ${gainHealth.plus}${gainHealth.value} health${gainAttack.suffix}`;
    }
  }
  return null;
}
function parseStatLog(message, verb, stat) {
  if (verb === "lost") {
    const regex2 = new RegExp(`^(.*\\blost\\s+)(\\d+)\\s+${stat}\\b(.*)$`, "i");
    const match2 = message.match(regex2);
    if (!match2) {
      return null;
    }
    return {
      prefix: match2[1],
      plus: "",
      value: match2[2],
      suffix: match2[3]
    };
  }
  const regex = new RegExp(
    `^(.*\\b(?:gave|give|gives)\\b.*?\\s+)(\\+?)(\\d+)\\s+${stat}\\b(.*)$`,
    "i"
  );
  const match = message.match(regex);
  if (!match) {
    return null;
  }
  return {
    prefix: match[1],
    plus: match[2] ?? "",
    value: match[3],
    suffix: match[4]
  };
}
function stripTags(message) {
  return message.replace(/<[^>]+>/g, "").trim();
}

// src/app/integrations/log/log-board-render.ts
function buildBoardStateMessage(player, opponent, getFrontIndex, isAilmentName) {
  let playerState = "";
  if (player.toy) {
    playerState += `{{toy:${player.toy.name}}} `;
  }
  if (player.hardToy) {
    playerState += `{{hardtoy:${player.hardToy.name}}} `;
  }
  playerState += renderPetText(player.pet4, getFrontIndex, isAilmentName);
  playerState += renderPetText(player.pet3, getFrontIndex, isAilmentName);
  playerState += renderPetText(player.pet2, getFrontIndex, isAilmentName);
  playerState += renderPetText(player.pet1, getFrontIndex, isAilmentName);
  playerState += renderPetText(player.pet0, getFrontIndex, isAilmentName);
  let opponentState = "";
  opponentState += renderPetText(opponent.pet0, getFrontIndex, isAilmentName);
  opponentState += renderPetText(opponent.pet1, getFrontIndex, isAilmentName);
  opponentState += renderPetText(opponent.pet2, getFrontIndex, isAilmentName);
  opponentState += renderPetText(opponent.pet3, getFrontIndex, isAilmentName);
  opponentState += renderPetText(opponent.pet4, getFrontIndex, isAilmentName);
  if (opponent.toy) {
    opponentState += `{{toy:${opponent.toy.name}}} `;
  }
  if (opponent.hardToy) {
    opponentState += `{{hardtoy:${opponent.hardToy.name}}} `;
  }
  return `${playerState}| ${opponentState}`;
}
function renderPetText(pet, getFrontIndex, isAilmentName) {
  if (pet == null) {
    return "___ (-/-) ";
  }
  const index = getFrontIndex(pet);
  const label = index != null ? `${pet.parent?.isOpponent ? "O" : "P"}${index} ` : "";
  const iconPath = getPetIconPath(pet.name);
  const petDisplay = iconPath ? `<img src="${iconPath}" class="log-pet-icon" alt="${pet.name}">` : "";
  const equipmentName = typeof pet.equipment?.name === "string" ? pet.equipment.name : null;
  const equipmentDisplay = equipmentName ? (() => {
    const isAilment = isAilmentName(equipmentName);
    const primary = getEquipmentIconPath(equipmentName, isAilment) ?? getEquipmentIconPath(equipmentName, !isAilment);
    if (!primary) {
      return "";
    }
    const secondary = getEquipmentIconPath(equipmentName, !isAilment);
    const secondaryAttr = secondary ? `this.dataset.step='1';this.src='${secondary}';` : `this.dataset.step='1';`;
    return `<img src="${primary}" class="log-inline-icon" alt="${equipmentName}" onerror="if(!this.dataset.step){${secondaryAttr}return;}this.remove()">`;
  })() : "";
  const manaValue = Number.isFinite(pet.mana) ? Math.max(0, Math.trunc(pet.mana)) : 0;
  const manaSuffix = manaValue > 0 ? `/${manaValue}mana` : "";
  return `${label}${petDisplay}${equipmentDisplay}(${pet.attack}/${pet.health}/${pet.exp}xp${manaSuffix}) `;
}

// src/app/integrations/log.service.ts
var _LogService_decorators, _init;
_LogService_decorators = [Injectable({
  providedIn: "root"
})];
var LogService = class {
  constructor() {
    this.logs = [];
    this.petNameRegex = void 0;
    this.toyNameRegex = void 0;
    this.equipmentNameRegex = void 0;
    this.inlineNameRegex = void 0;
    this.inlineNameTypeMap = void 0;
    this.ailmentNames = void 0;
    this.enabled = true;
    this.deferDecorations = false;
    this.showTriggerNamesInLogs = false;
    this.debugSummonBoardStateLogs = false;
    const petNames2 = getAllPetNames();
    const toyNames2 = getAllToyNames();
    const equipmentNames2 = getAllEquipmentNames();
    this.petNameRegex = buildNameRegex(petNames2);
    this.toyNameRegex = buildNameRegex(toyNames2);
    this.equipmentNameRegex = buildNameRegex(equipmentNames2);
    this.inlineNameTypeMap = buildInlineNameTypeMap(
      petNames2,
      toyNames2,
      equipmentNames2
    );
    this.inlineNameRegex = buildInlineNameRegex(
      petNames2,
      toyNames2,
      equipmentNames2
    );
    this.ailmentNames = new Set(
      Object.values(AILMENT_CATEGORIES).flat().filter(Boolean)
    );
  }
  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    if (!this.enabled) {
      this.logs = [];
    }
  }
  isEnabled() {
    return this.enabled;
  }
  setDeferDecorations(enabled) {
    this.deferDecorations = Boolean(enabled);
  }
  isDeferDecorations() {
    return this.deferDecorations;
  }
  setShowTriggerNamesInLogs(enabled) {
    this.showTriggerNamesInLogs = Boolean(enabled);
  }
  isShowTriggerNamesInLogs() {
    return this.showTriggerNamesInLogs;
  }
  setDebugSummonBoardStateLogs(enabled) {
    this.debugSummonBoardStateLogs = Boolean(enabled);
  }
  isDebugSummonBoardStateLogs() {
    return this.debugSummonBoardStateLogs;
  }
  decorateLogIfNeeded(log) {
    if (!log || log.decorated || !log.rawMessage) {
      return;
    }
    const message = this.decorateMessageWithNames(
      log.rawMessage,
      log.sourcePet,
      log.targetPet,
      log.sourceIndex,
      log.targetIndex
    );
    log.message = decorateInlineIcons(
      message,
      this.inlineNameRegex,
      this.inlineNameTypeMap,
      this.ailmentNames
    );
    log.decorated = true;
  }
  createLog(log) {
    if (!this.enabled) {
      return;
    }
    if (log.message?.startsWith("Phase ")) {
      log.bold = true;
    }
    this.resolveLogMetadata(log);
    let message = this.decorateLogMessage(log);
    message = this.appendTagSuffixes(message, log);
    this.persistDecoratedMessage(log, message);
    const lastLog = this.logs[this.logs.length - 1];
    const shouldAppendSummonBoard = this.shouldAppendSummonBoardState(log);
    if (this.tryMergeAttackHealthLogs(lastLog, log)) {
      if (shouldAppendSummonBoard) {
        this.appendSummonBoardStateLog(log);
      }
      return;
    }
    if (this.shouldCollapseLog(lastLog, log)) {
      lastLog.count = (lastLog.count ?? 1) + 1;
    } else {
      this.logs.push(log);
    }
    if (shouldAppendSummonBoard) {
      this.appendSummonBoardStateLog(log);
    }
  }
  resolveLogMetadata(log) {
    if (!log.sourcePet && log.player && log.message) {
      const possiblePets = log.player.petArray.filter(
        (p) => p && log.message.startsWith(p.name)
      );
      if (possiblePets.length === 1) {
        log.sourcePet = possiblePets[0];
      }
    }
    if (log.type === "attack" && log.player && log.message) {
      this.resolveAttackPetsFromMessage(log);
    }
    if (!log.randomEventReason && log.randomEvent === true) {
      log.randomEventReason = "true-random";
    }
    if (log.player && log.message) {
      this.resolveSourceTargetFromMessage(log);
    }
    if (log.sourcePet && log.sourceIndex == null) {
      log.sourceIndex = this.getFrontIndex(log.sourcePet) ?? void 0;
    }
    if (log.targetPet && log.targetIndex == null) {
      log.targetIndex = this.getFrontIndex(log.targetPet) ?? void 0;
    }
  }
  decorateLogMessage(log) {
    const message = log.message ?? "";
    if (this.deferDecorations) {
      return message;
    }
    return this.decorateMessageWithNames(
      message,
      log.sourcePet,
      log.targetPet,
      log.sourceIndex,
      log.targetIndex
    );
  }
  appendTagSuffixes(message, log) {
    let updated = message;
    if (log.tiger) {
      updated += " (Tiger)";
    }
    if (log.puma) {
      updated += " (Puma)";
    }
    if (log.pteranodon) {
      updated += " (Pteranodon)";
    }
    if (log.pantherMultiplier != null && log.pantherMultiplier > 1) {
      updated += ` x${log.pantherMultiplier} (Panther)`;
    }
    return updated;
  }
  persistDecoratedMessage(log, message) {
    if (!message) {
      return;
    }
    if (this.deferDecorations) {
      log.rawMessage = message;
      log.message = message;
      log.decorated = false;
      return;
    }
    log.message = decorateInlineIcons(
      message,
      this.inlineNameRegex,
      this.inlineNameTypeMap,
      this.ailmentNames
    );
    log.decorated = true;
  }
  shouldCollapseLog(lastLog, log) {
    if (!lastLog) {
      return false;
    }
    if (lastLog.noCollapse || log.noCollapse) {
      return false;
    }
    const samePlayer = lastLog.player === log.player;
    const sameMessage = lastLog.message?.trim() === log.message?.trim();
    const sameRandom = lastLog.randomEvent === log.randomEvent;
    const sameRandomReason = lastLog.randomEventReason === log.randomEventReason;
    const sameSource = lastLog.sourcePet === log.sourcePet && lastLog.sourceIndex === log.sourceIndex;
    const sameTarget = lastLog.targetPet === log.targetPet && lastLog.targetIndex === log.targetIndex;
    const hasSourceOrTarget = log.sourcePet != null || log.targetPet != null || log.sourceIndex != null || log.targetIndex != null;
    return sameMessage && samePlayer && sameRandom && sameRandomReason && (!hasSourceOrTarget || sameSource && sameTarget);
  }
  getLogs() {
    return this.logs;
  }
  reset() {
    this.logs = [];
  }
  getFrontIndex(pet) {
    const parent = pet?.parent;
    if (!parent) {
      return null;
    }
    if (parent.pet0 === pet) {
      return 1;
    }
    if (parent.pet1 === pet) {
      return 2;
    }
    if (parent.pet2 === pet) {
      return 3;
    }
    if (parent.pet3 === pet) {
      return 4;
    }
    if (parent.pet4 === pet) {
      return 5;
    }
    if (Number.isFinite(pet.savedPosition)) {
      return pet.savedPosition + 1;
    }
    return null;
  }
  decorateMessage(message, pet) {
    const index = this.getFrontIndex(pet);
    if (index == null) {
      return message;
    }
    const label = pet.parent?.isOpponent ? "O" : "P";
    const fullLabel = `${label}${index} ${pet.name}`;
    return this.replaceFirst(message, pet.name, fullLabel);
  }
  decorateAttackMessage(message, sourcePet, targetPet, sourceIndexOverride, targetIndexOverride) {
    const sourceIndex = sourceIndexOverride ?? this.getFrontIndex(sourcePet);
    const targetIndex = targetIndexOverride ?? this.getFrontIndex(targetPet);
    if (sourceIndex == null || targetIndex == null) {
      return message;
    }
    const sourceLabel = sourcePet.parent?.isOpponent ? "O" : "P";
    const targetLabel = targetPet.parent?.isOpponent ? "O" : "P";
    const sourceFullLabel = `${sourceLabel}${sourceIndex} ${sourcePet.name}`;
    const targetFullLabel = `${targetLabel}${targetIndex} ${targetPet.name}`;
    const SOURCE_HOLDER = "___SOURCE_HOLDER___";
    const TARGET_HOLDER = "___TARGET_HOLDER___";
    let updated = this.replaceFirst(message, sourcePet.name, SOURCE_HOLDER);
    updated = this.replaceFirst(updated, targetPet.name, TARGET_HOLDER);
    updated = updated.replace(SOURCE_HOLDER, sourceFullLabel);
    updated = updated.replace(TARGET_HOLDER, targetFullLabel);
    return updated;
  }
  decorateMessageWithNames(message, sourcePet, targetPet, sourceIndex, targetIndex) {
    if (!message) {
      return message;
    }
    if (sourcePet && targetPet) {
      return this.decorateAttackMessage(
        message,
        sourcePet,
        targetPet,
        sourceIndex,
        targetIndex
      );
    }
    if (sourcePet) {
      if (sourceIndex != null) {
        const label = sourcePet.parent?.isOpponent ? "O" : "P";
        const fullLabel = `${label}${sourceIndex} ${sourcePet.name}`;
        return this.replaceFirst(message, sourcePet.name, fullLabel);
      }
      return this.decorateMessage(message, sourcePet);
    }
    return message;
  }
  replaceFirst(source, search, replacement) {
    const index = source.indexOf(search);
    if (index === -1) {
      return source;
    }
    return source.slice(0, index) + replacement + source.slice(index + search.length);
  }
  resolveAttackPetsFromMessage(log) {
    if (!log?.message || !log.player) {
      return;
    }
    if (log.sourcePet && log.targetPet) {
      return;
    }
    const message = log.message;
    const snipedMatch = /^(.+?)\s+sniped\s+(.+?)\s+for\s+/i.exec(message);
    const attackMatch = /^(.+?)\s+(?:jump-)?attacks?\s+(.+?)\s+for\s+/i.exec(message);
    const match = snipedMatch ?? attackMatch;
    if (!match) {
      return;
    }
    const sourceName = match[1].trim();
    const targetName = match[2].trim();
    const playerPets = log.player.petArray ?? [];
    const opponentPets = log.player.opponent?.petArray ?? [];
    if (!log.sourcePet) {
      log.sourcePet = playerPets.find((pet) => pet?.name === sourceName) ?? null;
    }
    if (!log.targetPet) {
      log.targetPet = opponentPets.find((pet) => pet?.name === targetName) ?? playerPets.find((pet) => pet?.name === targetName) ?? null;
    }
  }
  isAilmentName(name) {
    return this.ailmentNames.has(name);
  }
  resolveSourceTargetFromMessage(log) {
    if (log.sourcePet && log.targetPet) {
      return;
    }
    const message = log.message;
    if (!message) {
      return;
    }
    const names = this.extractPetNames(message);
    if (names.length < 2) {
      return;
    }
    const playerPets = log.player?.petArray ?? [];
    const opponentPets = log.player?.opponent?.petArray ?? [];
    const findPet = (pets2, name, exclude) => pets2.find((pet) => pet?.name === name && pet !== exclude) ?? null;
    if (!log.sourcePet) {
      log.sourcePet = findPet(playerPets, names[0]) ?? findPet(opponentPets, names[0]);
    }
    if (!log.targetPet) {
      if (names[1] === names[0]) {
        const messageStartsWithSource = log.sourcePet && message.startsWith(log.sourcePet.name);
        if (messageStartsWithSource && log.sourcePet) {
          log.targetPet = log.sourcePet;
        } else {
          log.targetPet = findPet(playerPets, names[1], log.sourcePet) ?? findPet(opponentPets, names[1], log.sourcePet) ?? log.sourcePet ?? null;
        }
      } else {
        log.targetPet = findPet(opponentPets, names[1]) ?? findPet(playerPets, names[1]);
      }
    }
  }
  extractPetNames(message) {
    if (!this.petNameRegex || !message) {
      return [];
    }
    const matches = message.match(this.petNameRegex);
    return matches ?? [];
  }
  tryMergeAttackHealthLogs(lastLog, nextLog) {
    const combined = getMergedAttackHealthMessage(lastLog, nextLog);
    if (!combined) {
      return false;
    }
    if (this.deferDecorations) {
      lastLog.rawMessage = combined;
      lastLog.message = combined;
      lastLog.decorated = false;
    } else {
      const decorated = this.decorateMessageWithNames(
        combined,
        lastLog.sourcePet,
        lastLog.targetPet,
        lastLog.sourceIndex,
        lastLog.targetIndex
      );
      lastLog.message = decorateInlineIcons(
        decorated,
        this.inlineNameRegex,
        this.inlineNameTypeMap,
        this.ailmentNames
      );
      lastLog.decorated = true;
    }
    return true;
  }
  shouldAppendSummonBoardState(log) {
    if (!this.debugSummonBoardStateLogs) {
      return false;
    }
    if (!log?.message || log.type === "board") {
      return false;
    }
    if (!log.player || !log.player.opponent) {
      return false;
    }
    return /\b(summoned|spawned)\b|^No room to spawn\b/i.test(log.message);
  }
  appendSummonBoardStateLog(log) {
    const player = log.player;
    const opponent = log.player?.opponent;
    if (!player || !opponent) {
      return;
    }
    this.logs.push({
      message: this.buildPlainBoardStateMessage(player, opponent),
      type: "board",
      player
    });
  }
  buildPlainBoardStateMessage(player, opponent) {
    const playerState = [
      player.pet4,
      player.pet3,
      player.pet2,
      player.pet1,
      player.pet0
    ].map((pet) => this.renderPlainPetText(pet)).join(" ");
    const opponentState = [
      opponent.pet0,
      opponent.pet1,
      opponent.pet2,
      opponent.pet3,
      opponent.pet4
    ].map((pet) => this.renderPlainPetText(pet)).join(" ");
    return `${playerState} | ${opponentState}`;
  }
  renderPlainPetText(pet) {
    if (!pet) {
      return "___ (-/-)";
    }
    const index = this.getFrontIndex(pet);
    const label = index != null ? `${pet.parent?.isOpponent ? "O" : "P"}${index}` : "P?";
    return `${label} ${pet.name}(${pet.attack}/${pet.health}/${pet.exp}xp)`;
  }
  printState(player, opponent, message) {
    if (!this.enabled) {
      return;
    }
    if (message) {
      this.createLog({
        message,
        type: "board"
      });
    }
    const boardMessage = buildBoardStateMessage(
      player,
      opponent,
      (pet) => this.getFrontIndex(pet),
      (name) => this.isAilmentName(name)
    );
    this.createLog({
      message: boardMessage,
      type: "board"
    });
  }
};
_init = __decoratorStart(null);
LogService = __decorateElement(_init, 0, "LogService", _LogService_decorators, LogService);
__runInitializers(_init, 1, LogService);

// src/app/integrations/simulation/battle-engine.ts
var ailments = new Set(Object.values(AILMENT_CATEGORIES).flat());
function displayPet(snapshot) {
  const parent = new Player();
  parent.isOpponent = snapshot.side === "opponent";
  return Object.assign(new Pet(), snapshot, {
    parent,
    savedPosition: snapshot.position - 1,
    equipment: snapshot.equipment ? { name: snapshot.equipment, uses: snapshot.equipmentUses } : null
  });
}
function displayBoard(board, config) {
  const sides = ["player", "opponent"].map((side) => {
    const player = new Player();
    player.isOpponent = side === "opponent";
    board[side].forEach((pet, index) => player.setPet(index, pet ? displayPet(pet) : null));
    const toy = side === "player" ? config.playerToy : config.opponentToy;
    const hardToy = side === "player" ? config.playerHardToy : config.opponentHardToy;
    player.toy = toy ? { name: toy, level: 1 } : null;
    player.hardToy = hardToy ? { name: hardToy, level: 1 } : null;
    return player;
  });
  return buildBoardStateMessage(sides[0], sides[1], (pet) => pet.savedPosition + 1, (name) => ailments.has(name));
}
var CalculatorBattleEngine = class {
  constructor(settings) {
    this.engine = (0, import_sap_battle_engine2.createBattleEngine)();
    this.logService = new LogService();
    this.logService.setShowTriggerNamesInLogs(settings?.isShowTriggerNamesInLogs() ?? false);
  }
  run(config, hooks) {
    const result = this.engine.runSimulation(config, hooks);
    return {
      ...result,
      ...result.battles ? { battles: result.battles.map((battle) => ({
        ...battle,
        logs: this.formatEvents(battle.logs, config)
      })) } : {}
    };
  }
  projectLineupAfterEndTurn(config, side, lineup) {
    return this.engine.projectLineupAfterEndTurn(config, side, lineup);
  }
  formatEvents(events, config) {
    this.logService.reset();
    this.logService.setEnabled(true);
    this.logService.setDeferDecorations(true);
    for (const event of events) {
      this.logService.createLog({
        ...event,
        message: event.type === "board" && !event.message ? displayBoard(event.board, config) : event.message,
        playerIsOpponent: event.side == null ? void 0 : event.side === "opponent",
        targetIsOpponent: event.targetSide == null ? void 0 : event.targetSide === "opponent",
        sourcePet: event.source ? displayPet(event.source) : void 0,
        targetPet: event.target ? displayPet(event.target) : void 0,
        // Keep snapshot events separate so their identities and board states remain meaningful.
        noCollapse: true
      });
    }
    return this.logService.getLogs();
  }
};

// simulation/simulate.ts
var import_sap_battle_engine3 = require("sap-battle-engine");

// src/app/runtime/base64-url.ts
var BYTE_CHUNK_SIZE = 32768;
function encodeBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (let index = 0; index < bytes.length; index += BYTE_CHUNK_SIZE) {
    binary += String.fromCharCode(
      ...bytes.subarray(index, index + BYTE_CHUNK_SIZE)
    );
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

// src/app/integrations/replay/replay-calc-schema.ts
var PETS_BY_ID = /* @__PURE__ */ new Map();
var PETS_META_BY_ID = /* @__PURE__ */ new Map();
var PET_IDS_BY_NAME = /* @__PURE__ */ new Map();
function isObjectRecord(value) {
  return value !== null && typeof value === "object";
}
var petsModule = pets;
var petListRaw = petsModule.default ?? pets;
var petList = Array.isArray(petListRaw) ? petListRaw : isObjectRecord(petListRaw) ? Object.values(petListRaw).filter((v) => typeof v === "object" && v !== null && ("Id" in v || "id" in v)) : [];
petList.forEach((petUnknown) => {
  if (!isObjectRecord(petUnknown)) {
    return;
  }
  const pet = petUnknown;
  const petId = String(pet.Id ?? pet.id);
  const tierValue = Number(pet.Tier ?? pet.tier);
  const name = pet.Name ?? pet.name;
  if (name) {
    PETS_BY_ID.set(petId, name);
    const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    PET_IDS_BY_NAME.set(normalizedName, petId);
  }
  if (Number.isFinite(tierValue) && name) {
    PETS_META_BY_ID.set(petId, { name, tier: tierValue });
  }
});
var perkList = perks.default ?? perks;
var toyList = toys.default ?? toys;
var PERKS_BY_ID = new Map(
  perkList.map((perk) => [String(perk.Id), perk.Name])
);
var TOYS_BY_ID = new Map(
  toyList.map((toy) => [String(toy.Id), toy.Name])
);
var PACK_MAP = {
  0: "Turtle",
  1: "Puppy",
  2: "Star",
  5: "Golden",
  6: "Unicorn",
  7: "Danger"
};
var PARROT_COPY_PET_ABOMINATION_KEY_MAP = (() => {
  const map = {};
  for (let outer = 1; outer <= 3; outer++) {
    const base = `parrotCopyPetAbominationSwallowedPet${outer}`;
    const outerPrefix = `pCPAS${outer}`;
    map[base] = outerPrefix;
    map[`${base}BelugaSwallowedPet`] = `${outerPrefix}B`;
    map[`${base}Level`] = `${outerPrefix}L`;
    map[`${base}TimesHurt`] = `${outerPrefix}T`;
    map[`${base}ParrotCopyPet`] = `${outerPrefix}PCP`;
    map[`${base}ParrotCopyPetBelugaSwallowedPet`] = `${outerPrefix}PCPB`;
    for (let inner = 1; inner <= 3; inner++) {
      const innerBase = `${base}ParrotCopyPetAbominationSwallowedPet${inner}`;
      const innerPrefix = `${outerPrefix}PCPAS${inner}`;
      map[innerBase] = innerPrefix;
      map[`${innerBase}BelugaSwallowedPet`] = `${innerPrefix}B`;
      map[`${innerBase}Level`] = `${innerPrefix}L`;
      map[`${innerBase}TimesHurt`] = `${innerPrefix}T`;
    }
  }
  return map;
})();
var KEY_MAP = {
  playerPack: "pP",
  opponentPack: "oP",
  playerToy: "pT",
  playerToyLevel: "pTL",
  playerHardToy: "pHT",
  playerHardToyLevel: "pHTL",
  opponentToy: "oT",
  opponentToyLevel: "oTL",
  opponentHardToy: "oHT",
  opponentHardToyLevel: "oHTL",
  turn: "t",
  playerGoldSpent: "pGS",
  opponentGoldSpent: "oGS",
  playerRollAmount: "pRA",
  opponentRollAmount: "oRA",
  playerSummonedAmount: "pSA",
  opponentSummonedAmount: "oSA",
  playerLevel3Sold: "pL3",
  opponentLevel3Sold: "oL3",
  playerTransformationAmount: "pTA",
  opponentTransformationAmount: "oTA",
  playerPets: "p",
  opponentPets: "o",
  allPets: "ap",
  logFilter: "lf",
  customPacks: "cp",
  oldStork: "os",
  tokenPets: "tp",
  komodoShuffle: "ks",
  mana: "m",
  seed: "sd",
  triggersConsumed: "tc",
  showAdvanced: "sa",
  showTriggerNamesInLogs: "stn",
  showPositionalArgsInLogs: "spa",
  ailmentEquipment: "ae",
  name: "n",
  attack: "a",
  health: "h",
  exp: "e",
  equipment: "eq",
  belugaSwallowedPet: "bSP",
  abominationSwallowedPet1: "aSP1",
  abominationSwallowedPet2: "aSP2",
  abominationSwallowedPet3: "aSP3",
  abominationSwallowedPet1BelugaSwallowedPet: "aSP1B",
  abominationSwallowedPet2BelugaSwallowedPet: "aSP2B",
  abominationSwallowedPet3BelugaSwallowedPet: "aSP3B",
  abominationSwallowedPet1SarcasticFringeheadSwallowedPet: "aSP1SFS",
  abominationSwallowedPet2SarcasticFringeheadSwallowedPet: "aSP2SFS",
  abominationSwallowedPet3SarcasticFringeheadSwallowedPet: "aSP3SFS",
  abominationSwallowedPet1Level: "aSP1L",
  abominationSwallowedPet2Level: "aSP2L",
  abominationSwallowedPet3Level: "aSP3L",
  abominationSwallowedPet1TimesHurt: "aSP1T",
  abominationSwallowedPet2TimesHurt: "aSP2T",
  abominationSwallowedPet3TimesHurt: "aSP3T",
  parrotCopyPet: "pCP",
  parrotCopyPetBelugaSwallowedPet: "pCPB",
  ...PARROT_COPY_PET_ABOMINATION_KEY_MAP,
  abominationSwallowedPet1ParrotCopyPet: "aSP1PCP",
  abominationSwallowedPet2ParrotCopyPet: "aSP2PCP",
  abominationSwallowedPet3ParrotCopyPet: "aSP3PCP",
  abominationSwallowedPet1ParrotCopyPetBelugaSwallowedPet: "aSP1PCPB",
  abominationSwallowedPet2ParrotCopyPetBelugaSwallowedPet: "aSP2PCPB",
  abominationSwallowedPet3ParrotCopyPetBelugaSwallowedPet: "aSP3PCPB",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet1: "aSP1PCPAS1",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet2: "aSP1PCPAS2",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet3: "aSP1PCPAS3",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet1: "aSP2PCPAS1",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet2: "aSP2PCPAS2",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet3: "aSP2PCPAS3",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet1: "aSP3PCPAS1",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet2: "aSP3PCPAS2",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet3: "aSP3PCPAS3",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet1BelugaSwallowedPet: "aSP1PCPAS1B",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet2BelugaSwallowedPet: "aSP1PCPAS2B",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet3BelugaSwallowedPet: "aSP1PCPAS3B",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet1BelugaSwallowedPet: "aSP2PCPAS1B",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet2BelugaSwallowedPet: "aSP2PCPAS2B",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet3BelugaSwallowedPet: "aSP2PCPAS3B",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet1BelugaSwallowedPet: "aSP3PCPAS1B",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet2BelugaSwallowedPet: "aSP3PCPAS2B",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet3BelugaSwallowedPet: "aSP3PCPAS3B",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet1Level: "aSP1PCPAS1L",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet2Level: "aSP1PCPAS2L",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet3Level: "aSP1PCPAS3L",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet1Level: "aSP2PCPAS1L",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet2Level: "aSP2PCPAS2L",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet3Level: "aSP2PCPAS3L",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet1Level: "aSP3PCPAS1L",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet2Level: "aSP3PCPAS2L",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet3Level: "aSP3PCPAS3L",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet1TimesHurt: "aSP1PCPAS1T",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet2TimesHurt: "aSP1PCPAS2T",
  abominationSwallowedPet1ParrotCopyPetAbominationSwallowedPet3TimesHurt: "aSP1PCPAS3T",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet1TimesHurt: "aSP2PCPAS1T",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet2TimesHurt: "aSP2PCPAS2T",
  abominationSwallowedPet2ParrotCopyPetAbominationSwallowedPet3TimesHurt: "aSP2PCPAS3T",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet1TimesHurt: "aSP3PCPAS1T",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet2TimesHurt: "aSP3PCPAS2T",
  abominationSwallowedPet3ParrotCopyPetAbominationSwallowedPet3TimesHurt: "aSP3PCPAS3T",
  timesHurt: "tH",
  ailmentsCount: "aC",
  friendsHurtBeforeBattle: "fHBB"
};

// src/app/integrations/replay/replay-calc-parser-utils.ts
var FALLBACK_ABILITY_IDS_BY_PET_ID = {
  "338": [368],
  "373": [403],
  "635": [669],
  // Sarcastic Fringehead observed multiple ability enums in payloads
  "763": [853, 970]
};
var FALLBACK_TOY_IDS_BY_NAME = {
  actionfigure: 294,
  airpalmtree: 511,
  balloon: 479,
  boot: 299,
  bowlingball: 300,
  brokenpiggybank: 310,
  broom: 301,
  cardboardbox: 302,
  // (trimmed list - include common fallbacks used in live payloads)
  television: 491,
  toymouse: 327
};
function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function getRecord(value) {
  return isPlainObject(value) ? value : null;
}
function getByNameLookup(lookup, key) {
  if (!lookup) {
    return void 0;
  }
  if (lookup instanceof Map) {
    return lookup.get(key);
  }
  return lookup[key];
}
function toIntOrNull(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.trunc(n) : null;
}
function toNullableNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}
function toFiniteNumber(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}
function resolvePetIdFromUnknown(value, maps) {
  if (value === null || value === void 0) {
    return null;
  }
  if (isPlainObject(value)) {
    const directIdCandidates = [
      value["id"],
      value["Id"],
      value["petId"],
      value["PetId"],
      value["enum"],
      value["Enum"],
      value["Enu"],
      value["enu"]
    ];
    for (const candidate of directIdCandidates) {
      if (candidate === void 0 || candidate === null) {
        continue;
      }
      const numeric2 = toFiniteNumber(candidate, NaN);
      if (Number.isFinite(numeric2)) {
        return Math.trunc(numeric2);
      }
    }
    const nameRaw = value["name"] ?? value["Name"];
    if (typeof nameRaw === "string") {
      const key = nameRaw.toLowerCase().replace(/[^a-z0-9]/g, "");
      const petIdsByName = maps?.petIdsByName ?? maps?.PET_IDS_BY_NAME;
      const id = getByNameLookup(petIdsByName, key);
      const numeric2 = toIntOrNull(id);
      if (numeric2 !== null) {
        return numeric2;
      }
    }
    return null;
  }
  if (typeof value === "string") {
    const s = value.trim();
    if (s === "") {
      return null;
    }
    const numeric2 = toFiniteNumber(s, NaN);
    if (Number.isFinite(numeric2)) {
      return Math.trunc(numeric2);
    }
    const key = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const petIdsByName = maps?.petIdsByName ?? maps?.PET_IDS_BY_NAME;
    const id = getByNameLookup(petIdsByName, key);
    const mapped = toIntOrNull(id);
    if (mapped !== null) {
      return mapped;
    }
    return null;
  }
  const numeric = toFiniteNumber(value, NaN);
  if (Number.isFinite(numeric)) {
    return Math.trunc(numeric);
  }
  return null;
}
function uniqueNumbers(values) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const v of values) {
    if (v === null || v === void 0) {
      continue;
    }
    const n = Number(v);
    if (!Number.isFinite(n)) {
      continue;
    }
    const normalized = Math.trunc(n);
    if (seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);
    out.push(normalized);
  }
  return out;
}
function getAbilityEnumsForPet(petId, maps) {
  const abilityMap = maps?.abilityIdsByPetId ?? {};
  const key = String(petId);
  const mapped = Array.isArray(abilityMap[key]) ? abilityMap[key] ?? [] : [];
  const fallback = Array.isArray(FALLBACK_ABILITY_IDS_BY_PET_ID[key]) ? FALLBACK_ABILITY_IDS_BY_PET_ID[key] : [];
  return uniqueNumbers([...mapped, ...fallback]);
}
function buildBelugaSwallowedEntry(swallowedRaw) {
  const swallowedPetId = resolvePetIdFromUnknown(swallowedRaw);
  if (!Number.isFinite(swallowedPetId)) {
    return null;
  }
  const entry = { Enu: swallowedPetId };
  const swallowed = getRecord(swallowedRaw);
  if (!swallowed) {
    return entry;
  }
  const attack = toFiniteNumber(
    swallowed["attack"] ?? swallowed["At"] ?? swallowed["at"],
    NaN
  );
  if (Number.isFinite(attack)) {
    entry.At = Math.max(0, Math.round(attack));
  }
  const health = toFiniteNumber(
    swallowed["health"] ?? swallowed["Hp"] ?? swallowed["hp"],
    NaN
  );
  if (Number.isFinite(health)) {
    entry.Hp = Math.max(1, Math.round(health));
  }
  const mana = toFiniteNumber(swallowed["mana"] ?? swallowed["Mana"], NaN);
  if (Number.isFinite(mana)) {
    entry.Mana = Math.max(0, Math.round(mana));
  }
  const level = toFiniteNumber(
    swallowed["level"] ?? swallowed["lvl"] ?? swallowed["Lvl"],
    NaN
  );
  if (Number.isFinite(level)) {
    entry.Lvl = Math.max(1, Math.min(3, Math.round(level)));
  }
  const exp = toFiniteNumber(swallowed["exp"] ?? swallowed["Exp"], NaN);
  if (Number.isFinite(exp)) {
    entry.Exp = Math.max(0, Math.round(exp));
  }
  const perk = swallowed["perk"] ?? swallowed["Perk"];
  const perkNumber = toNullableNumber(perk);
  if (perkNumber !== null) {
    entry.Perk = perkNumber;
  }
  const timesHurt = toFiniteNumber(
    swallowed["timesHurt"] ?? swallowed["TimesHurt"] ?? swallowed["HrtC"],
    NaN
  );
  if (Number.isFinite(timesHurt)) {
    entry.HrtC = Math.max(0, Math.round(timesHurt));
  }
  return entry;
}
function collectAbominationSwallowedEntries(rawPet, maps) {
  const slotConfigs = [
    {
      petKey: "abominationSwallowedPet1",
      levelKey: "abominationSwallowedPet1Level",
      belugaKey: "abominationSwallowedPet1BelugaSwallowedPet",
      sfsKey: "abominationSwallowedPet1SarcasticFringeheadSwallowedPet"
    },
    {
      petKey: "abominationSwallowedPet2",
      levelKey: "abominationSwallowedPet2Level",
      belugaKey: "abominationSwallowedPet2BelugaSwallowedPet",
      sfsKey: "abominationSwallowedPet2SarcasticFringeheadSwallowedPet"
    },
    {
      petKey: "abominationSwallowedPet3",
      levelKey: "abominationSwallowedPet3Level",
      belugaKey: "abominationSwallowedPet3BelugaSwallowedPet",
      sfsKey: "abominationSwallowedPet3SarcasticFringeheadSwallowedPet"
    }
  ];
  const root = getRecord(rawPet);
  const entries = [];
  for (const slotConfig of slotConfigs) {
    const swallowedRaw = root?.[slotConfig.petKey];
    const swallowedPetId = resolvePetIdFromUnknown(swallowedRaw, maps);
    if (!Number.isFinite(swallowedPetId)) {
      continue;
    }
    const swallowedRecord = getRecord(swallowedRaw);
    const swallowedAbilityEnums = getAbilityEnumsForPet(swallowedPetId, maps);
    const memoryEntry = buildBelugaSwallowedEntry(swallowedRaw) ?? { Enu: swallowedPetId };
    const swallowedLevel = toFiniteNumber(root?.[slotConfig.levelKey], NaN);
    if (Number.isFinite(swallowedLevel)) {
      memoryEntry.Lvl = Math.max(1, Math.min(3, Math.round(swallowedLevel)));
    }
    if (swallowedPetId === 182) {
      const belugaRaw = root?.[slotConfig.belugaKey] ?? swallowedRecord?.["belugaSwallowedPet"] ?? null;
      const belugaEntry = buildBelugaSwallowedEntry(belugaRaw);
      if (belugaEntry) {
        const belugaAbilityEnums = getAbilityEnumsForPet(182, maps);
        const belugaLists = {
          WhiteWhaleAbility: [{ ...belugaEntry }]
        };
        for (const abilityEnum of belugaAbilityEnums) {
          belugaLists[String(abilityEnum)] = [{ ...belugaEntry }];
        }
        memoryEntry.MiMs = { Lsts: belugaLists };
      }
    }
    if (swallowedPetId === 763) {
      const sfsRaw = root?.[slotConfig.sfsKey] ?? swallowedRecord?.["sarcasticFringeheadSwallowedPet"] ?? null;
      const sfsEntry = buildBelugaSwallowedEntry(sfsRaw);
      if (sfsEntry) {
        const sfsLists = {
          SarcasticFringeheadAbility: [{ ...sfsEntry }]
        };
        memoryEntry.MiMs = { Lsts: sfsLists };
      }
    }
    entries.push({
      swallowedPetId,
      swallowedAbilityEnums,
      memoryEntry,
      belugaSwallowedEntry: memoryEntry.MiMs ?? null
    });
  }
  const swallowedCandidates = Array.isArray(root?.["abominationSwallowedPets"]) ? root?.["abominationSwallowedPets"] : [];
  for (const swallowed of swallowedCandidates) {
    const swallowedPetId = resolvePetIdFromUnknown(swallowed, maps);
    if (!Number.isFinite(swallowedPetId)) {
      continue;
    }
    const swallowedAbilityEnums = getAbilityEnumsForPet(swallowedPetId, maps);
    entries.push({
      swallowedPetId,
      swallowedAbilityEnums,
      memoryEntry: buildBelugaSwallowedEntry(swallowed) ?? { Enu: swallowedPetId },
      belugaSwallowedEntry: null
    });
  }
  return entries;
}
function inferAbominationAbilityEnumsFromSwallowedPets(rawPet, maps) {
  const entries = collectAbominationSwallowedEntries(rawPet, maps);
  const abilityEnums = [];
  for (const entry of entries) {
    if (Array.isArray(entry.swallowedAbilityEnums)) {
      abilityEnums.push(...entry.swallowedAbilityEnums);
    }
  }
  return uniqueNumbers(abilityEnums);
}
function inferAbominationAbilityEnumFromSwallowedPets(rawPet, maps) {
  const inferred = inferAbominationAbilityEnumsFromSwallowedPets(rawPet, maps);
  return inferred.length > 0 ? inferred[0] : null;
}
function getPrimaryAbilityEnumForMemory(rawPet, petId, maps) {
  const pet = getRecord(rawPet);
  const abil = Array.isArray(pet?.["Abil"]) ? pet?.["Abil"] : [];
  const abilities = Array.isArray(pet?.["abilities"]) ? pet?.["abilities"] : [];
  const directCandidates = [
    pet?.["abilityEnum"],
    pet?.["abilityId"],
    getRecord(abil[0])?.["Enu"],
    getRecord(abilities[0])?.["Enu"]
  ];
  for (const candidate of directCandidates) {
    const num = toFiniteNumber(candidate, NaN);
    if (Number.isFinite(num)) {
      return Math.trunc(num);
    }
  }
  if (petId === 373 || petId === 338) {
    const inferred = inferAbominationAbilityEnumFromSwallowedPets(rawPet, maps);
    if (Number.isFinite(inferred)) {
      return Math.trunc(inferred);
    }
  }
  const mapped = getAbilityEnumsForPet(petId, maps);
  return mapped.length > 0 ? mapped[0] : null;
}
function buildAbominationMemory(rawPet, petId, maps) {
  const swallowedEntries = collectAbominationSwallowedEntries(rawPet, maps);
  if (swallowedEntries.length === 0) {
    return null;
  }
  const fallbackAbilityEnum = getPrimaryAbilityEnumForMemory(rawPet, petId, maps);
  const fallbackList = fallbackAbilityEnum !== null ? [Math.trunc(fallbackAbilityEnum)] : [];
  const lists = {};
  for (const entry of swallowedEntries) {
    const ownEnums = uniqueNumbers(
      Array.isArray(entry.swallowedAbilityEnums) ? entry.swallowedAbilityEnums : []
    );
    const keyEnums = ownEnums.length > 0 ? ownEnums : fallbackList;
    if (keyEnums.length === 0) {
      continue;
    }
    for (const abilityEnum of keyEnums) {
      const key = String(abilityEnum);
      if (!Array.isArray(lists[key])) {
        lists[key] = [];
      }
      const useBeluga = entry.swallowedPetId === 182 && Array.isArray(entry.swallowedAbilityEnums) && entry.swallowedAbilityEnums.includes(abilityEnum) && entry.belugaSwallowedEntry;
      const payload = useBeluga ? entry.belugaSwallowedEntry : entry.memoryEntry;
      lists[key].push(payload);
    }
  }
  if (Object.keys(lists).length === 0) {
    return null;
  }
  return { Lsts: lists };
}
function findFiniteNumberByKeyPredicate(source, keyPredicate) {
  const record = getRecord(source);
  if (!record) {
    return null;
  }
  for (const [key, value] of Object.entries(record)) {
    if (!keyPredicate(key)) {
      continue;
    }
    const n = toFiniteNumber(value, NaN);
    if (Number.isFinite(n)) {
      return n;
    }
  }
  return null;
}
function getTriggersConsumedFromRawPet(rawPet) {
  const pet = getRecord(rawPet);
  const direct = [
    pet?.["triggersConsumed"],
    pet?.["TrCo"],
    pet?.["trco"],
    pet?.["triggerConsumed"]
  ];
  for (const candidate of direct) {
    const n = toFiniteNumber(candidate, NaN);
    if (Number.isFinite(n)) {
      return Math.max(0, Math.round(n));
    }
  }
  const predicate = (key) => {
    const normalized = key.toLowerCase();
    const hasTrigger = normalized.includes("trigger") || normalized.includes("trig");
    const hasConsumed = normalized.includes("consum");
    const isAbbrev = ["trgc", "trgcn", "trc", "trcn", "trco"].includes(normalized);
    return hasTrigger && hasConsumed || isAbbrev;
  };
  const objectCandidates = [pet, getRecord(pet?.["pow"]), getRecord(pet?.["Pow"])];
  for (const candidate of objectCandidates) {
    const n = findFiniteNumberByKeyPredicate(candidate, predicate);
    if (Number.isFinite(n)) {
      return Math.max(0, Math.round(n));
    }
  }
  const abilities = Array.isArray(pet?.["abilities"]) ? pet?.["abilities"] : [];
  const abil = Array.isArray(pet?.["Abil"]) ? pet?.["Abil"] : [];
  const abilityValues = [];
  for (const abilityArray of [abilities, abil]) {
    for (const ability of abilityArray) {
      const n = findFiniteNumberByKeyPredicate(ability, predicate);
      if (Number.isFinite(n)) {
        abilityValues.push(n);
      }
    }
  }
  if (abilityValues.length > 0) {
    return Math.max(0, Math.round(Math.max(...abilityValues)));
  }
  return null;
}
function getTimesHurtFromRawPet(rawPet) {
  const pet = getRecord(rawPet);
  const pow = getRecord(pet?.["Pow"]);
  const powLower = getRecord(pet?.["pow"]);
  const direct = [
    pet?.["timesHurt"],
    pet?.["TimesHurt"],
    pet?.["HrtC"],
    pet?.["hrtc"],
    pow?.["SabertoothTigerAbility"],
    powLower?.["SabertoothTigerAbility"]
  ];
  for (const candidate of direct) {
    const n = toFiniteNumber(candidate, NaN);
    if (Number.isFinite(n)) {
      return Math.max(0, Math.round(n));
    }
  }
  return null;
}
function getToyName(rawToy) {
  if (typeof rawToy === "string") {
    return rawToy;
  }
  const toy = getRecord(rawToy);
  return typeof toy?.["name"] === "string" ? toy["name"] : null;
}
function resolveToyId(rawToy, maps) {
  if (rawToy === null || rawToy === void 0) {
    return null;
  }
  const toy = getRecord(rawToy);
  if (toy) {
    const direct = [
      toy["id"],
      toy["Id"],
      toy["toyId"],
      toy["toyID"],
      toy["enum"],
      toy["Enu"]
    ];
    for (const candidate of direct) {
      const n = toFiniteNumber(candidate, NaN);
      if (Number.isFinite(n)) {
        return Math.trunc(n);
      }
    }
  }
  const toyName = getToyName(rawToy) ?? rawToy;
  const lookupKey = typeof toyName === "string" ? toyName.toLowerCase().replace(/[^a-z0-9]/g, "") : "";
  if (!lookupKey) {
    return null;
  }
  const mapped = toIntOrNull(maps?.toyIdsByName?.[lookupKey]);
  if (mapped !== null) {
    return mapped;
  }
  const fallback = FALLBACK_TOY_IDS_BY_NAME[lookupKey];
  return Number.isFinite(fallback) ? fallback : null;
}
var REPLAY_DEBUG_ENABLED = (() => {
  try {
    const fromStorage = localStorage.getItem("sapReplayDebug");
    if (fromStorage === "1") {
      return true;
    }
  } catch {
    return false;
  }
  try {
    return new URL(window.location.href).searchParams.get("sapReplayDebug") === "1";
  } catch {
    return false;
  }
})();

// src/app/integrations/replay/replay-calc-parser.ts
function toFiniteNumber2(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function toNumberOrFallback(value, fallback) {
  const parsed = toFiniteNumber2(value);
  return parsed ?? fallback;
}
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function asRecord(value) {
  return isRecord(value) ? value : null;
}
function asReplayMemoryEntry(value) {
  return isRecord(value) ? value : null;
}
function getReplayMemoryLists(value) {
  const lists = value?.MiMs?.Lsts;
  return isRecord(lists) ? lists : null;
}
function getFirstReplayMemoryEntry(value) {
  const lists = getReplayMemoryLists(value);
  if (!lists) {
    return null;
  }
  for (const entries of Object.values(lists)) {
    if (!Array.isArray(entries)) {
      continue;
    }
    for (const entry of entries) {
      const memoryEntry = asReplayMemoryEntry(entry);
      if (memoryEntry) {
        return memoryEntry;
      }
    }
  }
  return null;
}
function getReplayMemoryEntryByAbilityId(value, abilityId) {
  const key = toReplayId(abilityId);
  if (!key) {
    return null;
  }
  const entries = getReplayMemoryLists(value)?.[key];
  if (!Array.isArray(entries)) {
    return null;
  }
  for (const entry of entries) {
    const memoryEntry = asReplayMemoryEntry(entry);
    if (memoryEntry) {
      return memoryEntry;
    }
  }
  return null;
}
function resolveReplayMemoryPetName(value) {
  const rawPetRef = value?.Enu ?? value?.enu ?? value?.Id ?? value?.id;
  const resolvedPetId = resolvePetIdFromUnknown(rawPetRef, { PET_IDS_BY_NAME });
  if (resolvedPetId === null) {
    return null;
  }
  return PETS_BY_ID.get(String(resolvedPetId)) ?? `Pet #${resolvedPetId}`;
}
function resolveNestedSwallowedPetName(value) {
  const nestedEntry = getFirstReplayMemoryEntry(value);
  if (nestedEntry) {
    return resolveReplayMemoryPetName(nestedEntry);
  }
  if (Array.isArray(value?.Abil)) {
    return null;
  }
  return resolveReplayMemoryPetName(asReplayMemoryEntry(value));
}
var COPY_SOURCE_PET_IDS = /* @__PURE__ */ new Set([
  "53",
  // Parrot
  "182",
  // Beluga Whale
  "373",
  // Abomination
  "763"
  // Sarcastic Fringehead
]);
var STORED_COPY_ABILITY_OWNER_BY_ID = /* @__PURE__ */ new Map([
  ["296", "Wolf"]
]);
var ABOMINATION_SLOT_FIELDS = [
  {
    pet: "abominationSwallowedPet1",
    level: "abominationSwallowedPet1Level",
    timesHurt: "abominationSwallowedPet1TimesHurt",
    beluga: "abominationSwallowedPet1BelugaSwallowedPet",
    sarcasticFringehead: "abominationSwallowedPet1SarcasticFringeheadSwallowedPet"
  },
  {
    pet: "abominationSwallowedPet2",
    level: "abominationSwallowedPet2Level",
    timesHurt: "abominationSwallowedPet2TimesHurt",
    beluga: "abominationSwallowedPet2BelugaSwallowedPet",
    sarcasticFringehead: "abominationSwallowedPet2SarcasticFringeheadSwallowedPet"
  },
  {
    pet: "abominationSwallowedPet3",
    level: "abominationSwallowedPet3Level",
    timesHurt: "abominationSwallowedPet3TimesHurt",
    beluga: "abominationSwallowedPet3BelugaSwallowedPet",
    sarcasticFringehead: "abominationSwallowedPet3SarcasticFringeheadSwallowedPet"
  }
];
function toReplayId(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  return null;
}
function incrementAbilityOwnerCount(abilityOwnerCounts, abilityId, petId) {
  let petCountById = abilityOwnerCounts.get(abilityId);
  if (!petCountById) {
    petCountById = /* @__PURE__ */ new Map();
    abilityOwnerCounts.set(abilityId, petCountById);
  }
  petCountById.set(petId, (petCountById.get(petId) ?? 0) + 1);
}
function collectAbilityOwnerCounts(value, abilityOwnerCounts) {
  if (Array.isArray(value)) {
    value.forEach((entry) => collectAbilityOwnerCounts(entry, abilityOwnerCounts));
    return;
  }
  if (!isRecord(value)) {
    return;
  }
  const petId = toReplayId(value.Enu);
  const abilities = value.Abil;
  if (petId && Array.isArray(abilities) && !COPY_SOURCE_PET_IDS.has(petId)) {
    abilities.forEach((ability) => {
      if (!isRecord(ability)) {
        return;
      }
      const abilityId = toReplayId(ability.Enu);
      if (!abilityId) {
        return;
      }
      incrementAbilityOwnerCount(abilityOwnerCounts, abilityId, petId);
    });
  }
  Object.values(value).forEach((entry) => {
    collectAbilityOwnerCounts(entry, abilityOwnerCounts);
  });
}
function pickMostLikelyPetId(petCountById) {
  let bestPetId = null;
  let bestCount = -1;
  for (const [petId, count] of petCountById.entries()) {
    if (count > bestCount || count === bestCount && (bestPetId === null || petId < bestPetId)) {
      bestPetId = petId;
      bestCount = count;
    }
  }
  return bestPetId;
}
function buildReplayAbilityPetMapFromCounts(abilityOwnerCounts) {
  const abilityPetMap = {};
  for (const [abilityId, petCountById] of abilityOwnerCounts.entries()) {
    const petId = pickMostLikelyPetId(petCountById);
    if (petId) {
      abilityPetMap[abilityId] = petId;
    }
  }
  return abilityPetMap;
}
function parseJsonValue(raw) {
  if (isRecord(raw) || Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw !== "string" || raw.length === 0) {
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
var replayFoodEntries = food.default ?? food;
var REPLAY_PERK_FOOD_NAMES_BY_SPELL_ID = new Map(
  replayFoodEntries.filter(
    (entry) => entry?.Id !== null && entry?.Id !== void 0 && typeof entry?.Name === "string" && /^Give one pet the .+ perk\.$/i.test(entry?.Ability ?? "")
  ).map((entry) => [String(entry.Id), entry.Name])
);
function getReplayEntityKey(value) {
  const record = asRecord(value);
  if (!record) {
    return null;
  }
  const boardId = record["BoId"] ?? record["boId"];
  const uniqueId = record["Uni"] ?? record["uni"];
  if (boardId === null || boardId === void 0 || uniqueId === null || uniqueId === void 0) {
    return null;
  }
  return `${String(boardId)}:${String(uniqueId)}`;
}
function buildReplayPetIdByEntityKey(battleJson) {
  const petIdByEntityKey = /* @__PURE__ */ new Map();
  for (const board of [battleJson.UserBoard, battleJson.OpponentBoard]) {
    const items = board?.Mins?.Items ?? [];
    for (const pet of items) {
      if (!pet) {
        continue;
      }
      const petId = toReplayId(pet.Enu);
      const entityKey = getReplayEntityKey(pet["Id"]);
      if (petId && entityKey) {
        petIdByEntityKey.set(entityKey, petId);
      }
    }
  }
  return petIdByEntityKey;
}
function getReplaySpellPerkTarget(action) {
  if (action.Type !== 8) {
    return null;
  }
  const response = asRecord(parseJsonValue(action.Response));
  const responseEvent = asRecord(response?.["Event"]);
  const event = asRecord(responseEvent?.["Event"]) ?? responseEvent;
  const spell = asRecord(event?.["Spell"]);
  const target = asRecord(event?.["Target"]);
  const spellId = toReplayId(spell?.["Enu"]);
  const perkName = spellId ? REPLAY_PERK_FOOD_NAMES_BY_SPELL_ID.get(spellId) : void 0;
  const targetKey = getReplayEntityKey(target);
  return perkName && targetKey ? { perkName, targetKey } : null;
}
function parseBattleAction(raw) {
  const parsed = parseJsonValue(raw);
  if (!isRecord(parsed)) {
    return null;
  }
  return parsed;
}
function buildPackIdByNameLookup() {
  const lookup = /* @__PURE__ */ new Map();
  Object.entries(PACK_MAP).forEach(([packIdRaw, packName]) => {
    if (typeof packName !== "string") {
      return;
    }
    const packId = Number(packIdRaw);
    if (!Number.isFinite(packId)) {
      return;
    }
    lookup.set(packName.toLowerCase(), packId);
  });
  return lookup;
}
var PACK_ID_BY_NAME = buildPackIdByNameLookup();
function resolvePackIdFromUnknown(value) {
  const numeric = toFiniteNumber2(value);
  if (numeric !== null) {
    return numeric;
  }
  if (typeof value === "string") {
    const byName = PACK_ID_BY_NAME.get(value.toLowerCase());
    if (byName !== void 0) {
      return byName;
    }
  }
  return null;
}
function parseTurnPetToReplayPet(rawPet) {
  if (!rawPet) {
    return null;
  }
  const petId = toReplayId(rawPet.id);
  if (!petId) {
    return null;
  }
  const slot = toFiniteNumber2(rawPet.slot);
  const abilities = (rawPet.abilities ?? []).map((ability) => {
    const abilityId = toReplayId(ability?.id);
    if (!abilityId) {
      return null;
    }
    return {
      Enu: abilityId,
      Lvl: toFiniteNumber2(ability?.level),
      Grop: toFiniteNumber2(ability?.group),
      TrCo: toFiniteNumber2(ability?.triggersConsumed)
    };
  }).filter((ability) => ability !== null);
  return {
    Enu: petId,
    Lvl: toFiniteNumber2(rawPet.level),
    Exp: toFiniteNumber2(rawPet.experience),
    Perk: toReplayId(rawPet.perkId),
    Mana: toFiniteNumber2(rawPet.mana),
    At: {
      Perm: toFiniteNumber2(rawPet.attack?.permanent),
      Temp: toFiniteNumber2(rawPet.attack?.temporary)
    },
    Hp: {
      Perm: toFiniteNumber2(rawPet.health?.permanent),
      Temp: toFiniteNumber2(rawPet.health?.temporary)
    },
    Poi: {
      x: slot
    },
    Abil: abilities
  };
}
function parseTurnSideToReplayBoard(side, fallbackTurn, packRaw) {
  return {
    Tur: toNumberOrFallback(side?.stats?.turn, fallbackTurn),
    GoSp: toNumberOrFallback(side?.stats?.goldSpent, 0),
    Rold: toNumberOrFallback(side?.stats?.rolls, 0),
    MiSu: toNumberOrFallback(side?.stats?.summons, 0),
    MSFL: toNumberOrFallback(side?.stats?.level3Sold, 0),
    TrTT: toNumberOrFallback(side?.stats?.transformed, 0),
    Pack: resolvePackIdFromUnknown(packRaw),
    Mins: {
      Items: (side?.pets ?? []).map((pet) => parseTurnPetToReplayPet(pet))
    }
  };
}
function selectReplayBattleFromTurns(turns, turnNumber, replayMeta) {
  if (!Number.isFinite(turnNumber) || turnNumber <= 0) {
    return null;
  }
  const turnEntry = (turns ?? []).find((entry) => Number(entry?.turn) === turnNumber) ?? (turns ?? [])[turnNumber - 1] ?? null;
  if (!turnEntry) {
    return null;
  }
  const fallbackTurn = toNumberOrFallback(turnEntry.turn, turnNumber);
  return {
    UserBoard: parseTurnSideToReplayBoard(
      turnEntry.user,
      fallbackTurn,
      replayMeta?.pack
    ),
    OpponentBoard: parseTurnSideToReplayBoard(
      turnEntry.opponent,
      fallbackTurn,
      replayMeta?.opponent_pack
    )
  };
}
function selectReplayBattleFromActions(actions, turnNumber) {
  if (!Number.isFinite(turnNumber) || turnNumber <= 0) {
    return null;
  }
  const battleActions = (actions ?? []).filter(
    (action) => Boolean(action?.Battle) && (action?.Type === 0 || action?.Type === null || action?.Type === void 0)
  );
  const actionForTurn = battleActions.find((action) => Number(action?.Turn) === turnNumber) ?? battleActions[turnNumber - 1] ?? null;
  return parseBattleAction(actionForTurn?.Battle ?? null);
}
function buildReplayAbilityPetMapFromActions(actions) {
  const abilityOwnerCounts = /* @__PURE__ */ new Map();
  (actions ?? []).forEach((action) => {
    const parsedBuild = parseJsonValue(action?.Build);
    const parsedBattle = parseJsonValue(action?.Battle);
    const parsedMode = parseJsonValue(action?.Mode);
    collectAbilityOwnerCounts(parsedBuild, abilityOwnerCounts);
    collectAbilityOwnerCounts(parsedBattle, abilityOwnerCounts);
    collectAbilityOwnerCounts(parsedMode, abilityOwnerCounts);
  });
  return buildReplayAbilityPetMapFromCounts(abilityOwnerCounts);
}
function buildReplayPerkNameByPetIdFromActions(actions, turnNumber) {
  const battleJson = selectReplayBattleFromActions(actions, turnNumber);
  if (!battleJson) {
    return {};
  }
  const petIdByEntityKey = buildReplayPetIdByEntityKey(battleJson);
  const perkNameByPetId = {};
  (actions ?? []).forEach((action) => {
    const actionTurn = toFiniteNumber2(action.Turn);
    if (actionTurn !== null && actionTurn > turnNumber) {
      return;
    }
    const spellPerkTarget = getReplaySpellPerkTarget(action);
    if (!spellPerkTarget) {
      return;
    }
    const petId = petIdByEntityKey.get(spellPerkTarget.targetKey);
    if (petId) {
      perkNameByPetId[petId] = spellPerkTarget.perkName;
    }
  });
  return perkNameByPetId;
}
function parseReplayForCalculatorFromActions(actions, turnNumber, buildModel, metaBoards, options) {
  const battleJson = selectReplayBattleFromActions(actions, turnNumber);
  if (!battleJson) {
    return null;
  }
  const inferredAbilityPetMap = buildReplayAbilityPetMapFromActions(actions);
  const mergedAbilityPetMap = {
    ...inferredAbilityPetMap,
    ...options?.abilityPetMap ?? {}
  };
  const inferredPerkNameByPetId = buildReplayPerkNameByPetIdFromActions(
    actions,
    turnNumber
  );
  const mergedPerkNameByPetId = {
    ...inferredPerkNameByPetId,
    ...options?.perkNameByPetId ?? {}
  };
  const parser = new ReplayCalcParser();
  return parser.parseReplayForCalculator(
    battleJson,
    buildModel ?? void 0,
    metaBoards,
    {
      ...options,
      abilityPetMap: mergedAbilityPetMap,
      perkNameByPetId: mergedPerkNameByPetId
    }
  );
}
function parseTeamwoodReplayForCalculator(replay, turnNumber, metaBoards, options) {
  const replayRecord = asRecord(replay);
  const hasTurnPayload = Array.isArray(replayRecord?.["turns"]);
  if (hasTurnPayload) {
    const turnsReplay = replay;
    const battleJson = selectReplayBattleFromTurns(
      turnsReplay.turns,
      turnNumber,
      turnsReplay.replayMeta
    );
    if (!battleJson) {
      return null;
    }
    const mergedAbilityPetMap = {
      ...turnsReplay.abilityPetMap ?? {},
      ...options?.abilityPetMap ?? {}
    };
    const parser = new ReplayCalcParser();
    return parser.parseReplayForCalculator(
      battleJson,
      turnsReplay.genesisBuildModel ?? void 0,
      metaBoards,
      {
        ...options,
        abilityPetMap: mergedAbilityPetMap
      }
    );
  }
  return parseReplayForCalculatorFromActions(
    replay?.Actions,
    turnNumber,
    replay?.GenesisBuildModel ?? void 0,
    metaBoards,
    options
  );
}
function defaultAbominationSwallowedState() {
  return {
    abominationSwallowedPet1: null,
    abominationSwallowedPet2: null,
    abominationSwallowedPet3: null,
    abominationSwallowedPet1BelugaSwallowedPet: null,
    abominationSwallowedPet2BelugaSwallowedPet: null,
    abominationSwallowedPet3BelugaSwallowedPet: null,
    abominationSwallowedPet1SarcasticFringeheadSwallowedPet: null,
    abominationSwallowedPet2SarcasticFringeheadSwallowedPet: null,
    abominationSwallowedPet3SarcasticFringeheadSwallowedPet: null,
    abominationSwallowedPet1TimesHurt: 0,
    abominationSwallowedPet2TimesHurt: 0,
    abominationSwallowedPet3TimesHurt: 0,
    abominationSwallowedPet1Level: 1,
    abominationSwallowedPet2Level: 1,
    abominationSwallowedPet3Level: 1
  };
}
var ReplayCalcParser = class {
  parseReplayForCalculator(battleJson, buildModel, metaBoards, options) {
    console.log(`[ReplayCalcParser] PETS_BY_ID size: ${PETS_BY_ID.size}`);
    const userBoard = battleJson?.UserBoard ?? metaBoards?.userBoard;
    const opponentBoard = battleJson?.OpponentBoard ?? metaBoards?.opponentBoard;
    const readBoardNumber = (board, key, fallback) => {
      return toNumberOrFallback(board?.[key], fallback);
    };
    const abilityPetNameByAbilityId = /* @__PURE__ */ new Map();
    const abilityPetIdByAbilityId = /* @__PURE__ */ new Map();
    const applyAbilityPetMap = (abilityPetMap) => {
      if (!abilityPetMap) {
        return;
      }
      Object.entries(abilityPetMap).forEach(([abilityIdRaw, petIdOrName]) => {
        const abilityId = toReplayId(abilityIdRaw);
        if (!abilityId) {
          return;
        }
        let mappedPetId = typeof petIdOrName === "number" || typeof petIdOrName === "string" ? String(petIdOrName) : null;
        if (mappedPetId && !PETS_BY_ID.has(mappedPetId)) {
          const asNum = Number(mappedPetId);
          if (Number.isInteger(asNum)) {
            const fallbackNum = asNum - 30;
            if (Number.isInteger(fallbackNum) && fallbackNum > 0) {
              const fallbackId = String(fallbackNum);
              if (PETS_BY_ID.has(fallbackId)) {
                mappedPetId = fallbackId;
              }
            }
          }
        }
        const mappedPetName = (mappedPetId ? PETS_BY_ID.get(mappedPetId) : null) || (typeof petIdOrName === "string" ? petIdOrName : null);
        if (mappedPetName) {
          abilityPetNameByAbilityId.set(abilityId, mappedPetName);
        }
        if (mappedPetId && PETS_BY_ID.has(mappedPetId)) {
          abilityPetIdByAbilityId.set(abilityId, mappedPetId);
        }
      });
    };
    const inferredAbilityOwnerCounts = /* @__PURE__ */ new Map();
    collectAbilityOwnerCounts(battleJson, inferredAbilityOwnerCounts);
    collectAbilityOwnerCounts(buildModel, inferredAbilityOwnerCounts);
    collectAbilityOwnerCounts(metaBoards, inferredAbilityOwnerCounts);
    applyAbilityPetMap(
      buildReplayAbilityPetMapFromCounts(inferredAbilityOwnerCounts)
    );
    applyAbilityPetMap(options?.abilityPetMap ?? null);
    const resolveAbilityOwnerPetNameByNearbyMap = (abilityId) => {
      const parsedAbilityId = Number(abilityId);
      if (!Number.isInteger(parsedAbilityId)) {
        return null;
      }
      const offsetCounts = /* @__PURE__ */ new Map();
      for (const [mappedAbilityId, mappedPetId] of abilityPetIdByAbilityId.entries()) {
        const parsedMappedAbilityId = Number(mappedAbilityId);
        const parsedMappedPetId = Number(mappedPetId);
        if (!Number.isInteger(parsedMappedAbilityId) || !Number.isInteger(parsedMappedPetId)) {
          continue;
        }
        const distance = Math.abs(parsedMappedAbilityId - parsedAbilityId);
        if (distance === 0 || distance > 2) {
          continue;
        }
        const offset = parsedMappedAbilityId - parsedMappedPetId;
        offsetCounts.set(offset, (offsetCounts.get(offset) ?? 0) + 1);
      }
      let bestOffset = null;
      let bestOffsetCount = 0;
      for (const [offset, count] of offsetCounts.entries()) {
        if (count > bestOffsetCount || count === bestOffsetCount && (bestOffset === null || Math.abs(offset) < Math.abs(bestOffset))) {
          bestOffset = offset;
          bestOffsetCount = count;
        }
      }
      if (bestOffset === null) {
        return null;
      }
      const inferredPetId = String(parsedAbilityId - bestOffset);
      return PETS_BY_ID.get(inferredPetId) ?? null;
    };
    const resolveAbilityOwnerPetName = (abilityId) => {
      return abilityPetNameByAbilityId.get(abilityId) ?? resolveAbilityOwnerPetNameByNearbyMap(abilityId);
    };
    const getTimesHurt = (petJson) => {
      return getTimesHurtFromRawPet(petJson);
    };
    const inferCopiedPetName = (petJson, copyPetName) => {
      for (const ability of petJson.Abil ?? []) {
        const abilityId = toReplayId(ability?.Enu);
        const storedCopyOwner = abilityId ? STORED_COPY_ABILITY_OWNER_BY_ID.get(abilityId) : null;
        if (storedCopyOwner) {
          return storedCopyOwner;
        }
      }
      for (const ability of petJson.Abil ?? []) {
        const abilityId = toReplayId(ability?.Enu);
        if (!abilityId) {
          continue;
        }
        let ownerPetName = resolveAbilityOwnerPetName(abilityId);
        if (ownerPetName === copyPetName) {
          ownerPetName = resolveAbilityOwnerPetNameByNearbyMap(abilityId);
        }
        if (ownerPetName && ownerPetName !== copyPetName) {
          return ownerPetName;
        }
      }
      return null;
    };
    const parseAbominationSwallowedState = (petJson) => {
      const abominationState = defaultAbominationSwallowedState();
      const applyNestedMemoryState = (slotFields, ownerPetName, ability) => {
        const memoryEntry = getReplayMemoryEntryByAbilityId(petJson, ability.Enu);
        const nestedTimesHurt = getTimesHurtFromRawPet(memoryEntry);
        if (nestedTimesHurt !== null) {
          abominationState[slotFields.timesHurt] = nestedTimesHurt;
        }
        const nestedSwallowedPet = resolveNestedSwallowedPetName(memoryEntry);
        if (!nestedSwallowedPet) {
          return;
        }
        if (ownerPetName === "Beluga Whale") {
          abominationState[slotFields.beluga] = nestedSwallowedPet;
          return;
        }
        if (ownerPetName === "Sarcastic Fringehead") {
          abominationState[slotFields.sarcasticFringehead] = nestedSwallowedPet;
        }
      };
      const copiedAbilities = (petJson?.Abil ?? []).map((ability, index) => ({ ability, index })).filter(
        (abilityEntry) => abilityEntry.ability !== null && toReplayId(abilityEntry.ability?.Enu) !== null
      );
      if (copiedAbilities.length === 0) {
        return abominationState;
      }
      const groupedAbilities = /* @__PURE__ */ new Map();
      const orderedGroupKeys = [];
      copiedAbilities.forEach((abilityEntry) => {
        const groupKey = toFiniteNumber2(abilityEntry.ability?.Grop) ?? 0;
        if (!groupedAbilities.has(groupKey)) {
          groupedAbilities.set(groupKey, []);
          orderedGroupKeys.push(groupKey);
        }
        groupedAbilities.get(groupKey)?.push(abilityEntry);
      });
      const usedAbilityIndexes = /* @__PURE__ */ new Set();
      const unresolvedSlotIndexes = [];
      ABOMINATION_SLOT_FIELDS.forEach((slotFields, slotIndex) => {
        const groupKey = orderedGroupKeys[slotIndex];
        if (groupKey === void 0) {
          unresolvedSlotIndexes.push(slotIndex);
          return;
        }
        const groupAbilities = groupedAbilities.get(groupKey);
        if (!groupAbilities || groupAbilities.length === 0) {
          unresolvedSlotIndexes.push(slotIndex);
          return;
        }
        let resolvedAbilityEntry = null;
        let resolvedPetName = null;
        for (const abilityEntry of groupAbilities) {
          const abilityId = toReplayId(abilityEntry.ability?.Enu);
          if (!abilityId) {
            continue;
          }
          const ownerPetName = resolveAbilityOwnerPetName(abilityId);
          if (!ownerPetName) {
            continue;
          }
          resolvedAbilityEntry = abilityEntry;
          resolvedPetName = ownerPetName;
          break;
        }
        if (!resolvedAbilityEntry || !resolvedPetName) {
          unresolvedSlotIndexes.push(slotIndex);
          return;
        }
        abominationState[slotFields.pet] = resolvedPetName;
        const inferredLevel = toFiniteNumber2(resolvedAbilityEntry.ability?.Lvl);
        if (inferredLevel !== null) {
          abominationState[slotFields.level] = inferredLevel;
        }
        applyNestedMemoryState(
          slotFields,
          resolvedPetName,
          resolvedAbilityEntry.ability
        );
        usedAbilityIndexes.add(resolvedAbilityEntry.index);
      });
      if (unresolvedSlotIndexes.length === 0) {
        return abominationState;
      }
      const fallbackResolvedAbilities = copiedAbilities.filter((abilityEntry) => !usedAbilityIndexes.has(abilityEntry.index)).map((abilityEntry) => {
        const abilityId = toReplayId(abilityEntry.ability?.Enu);
        if (!abilityId) {
          return null;
        }
        const ownerPetName = resolveAbilityOwnerPetName(abilityId);
        if (!ownerPetName) {
          return null;
        }
        return {
          ownerPetName,
          level: toFiniteNumber2(abilityEntry.ability?.Lvl),
          ability: abilityEntry.ability
        };
      }).filter(
        (abilityEntry) => abilityEntry !== null
      );
      unresolvedSlotIndexes.forEach((slotIndex, fallbackIndex) => {
        const fallbackAbility = fallbackResolvedAbilities[fallbackIndex];
        if (!fallbackAbility) {
          return;
        }
        const slotFields = ABOMINATION_SLOT_FIELDS[slotIndex];
        abominationState[slotFields.pet] = fallbackAbility.ownerPetName;
        if (fallbackAbility.level !== null) {
          abominationState[slotFields.level] = fallbackAbility.level;
        }
        applyNestedMemoryState(
          slotFields,
          fallbackAbility.ownerPetName,
          fallbackAbility.ability
        );
      });
      return abominationState;
    };
    const parsePet = (petJson) => {
      if (!petJson) {
        return null;
      }
      const petRecord = asRecord(petJson);
      const maps = { PET_IDS_BY_NAME };
      const rawPetRef = petJson.Enu ?? petRecord?.["enu"] ?? petRecord?.["Id"] ?? petRecord?.["id"];
      const resolvedPetId = resolvePetIdFromUnknown(rawPetRef, maps);
      const petId = resolvedPetId !== null ? String(resolvedPetId) : String(rawPetRef ?? 0);
      const petName = PETS_BY_ID.get(petId) || (typeof petRecord?.["name"] === "string" ? petRecord["name"] : null) || (typeof petRecord?.["Name"] === "string" ? petRecord["Name"] : null) || (typeof rawPetRef === "string" && rawPetRef.trim().length > 0 ? rawPetRef.trim() : `Pet #${petId}`);
      console.log(`[ReplayCalcParser] Pet Enu:${rawPetRef} -> Id:${petId} -> Name:${petName}`);
      const atJson = petJson.At ?? asRecord(petRecord?.["at"]);
      const hpJson = petJson.Hp ?? asRecord(petRecord?.["hp"]);
      const atJsonRecord = asRecord(atJson);
      const hpJsonRecord = asRecord(hpJson);
      const petTempAtk = toNumberOrFallback(
        atJson?.Temp ?? atJsonRecord?.["temp"],
        0
      );
      const petTempHp = toNumberOrFallback(
        hpJson?.Temp ?? hpJsonRecord?.["temp"],
        0
      );
      const belugaSwallowedPet = petId === "182" ? resolveNestedSwallowedPetName(petJson) ?? inferCopiedPetName(petJson, "Beluga Whale") : null;
      const sarcasticFringeheadSwallowedPet = petId === "763" ? resolveNestedSwallowedPetName(petJson) ?? inferCopiedPetName(petJson, "Sarcastic Fringehead") : null;
      const abominationSwallowedState = petId === "373" ? parseAbominationSwallowedState(petJson) : defaultAbominationSwallowedState();
      const abilityIdsByPetId = {};
      for (const [abilityId, mappedPetId] of abilityPetIdByAbilityId.entries()) {
        const pid = String(mappedPetId);
        abilityIdsByPetId[pid] = abilityIdsByPetId[pid] || [];
        abilityIdsByPetId[pid].push(String(abilityId));
      }
      maps.abilityIdsByPetId = abilityIdsByPetId;
      const timesHurt = getTimesHurt(petJson);
      const abilityTriggersConsumed = (() => {
        const v = getTriggersConsumedFromRawPet(petJson);
        return v === null ? [] : [v];
      })();
      const perkValue = petJson.Perk;
      const replayPerkName = petId !== null ? options?.perkNameByPetId?.[String(petId)] ?? null : null;
      const perkName = replayPerkName ?? (perkValue !== null && perkValue !== void 0 ? PERKS_BY_ID.get(String(perkValue)) || (typeof perkValue === "string" ? perkValue : "Unknown Perk") : null);
      const parsedPet = {
        name: petName,
        attack: toNumberOrFallback(
          atJson?.Perm ?? atJsonRecord?.["perm"] ?? petRecord?.["attack"],
          0
        ) + petTempAtk,
        health: toNumberOrFallback(
          hpJson?.Perm ?? hpJsonRecord?.["perm"] ?? petRecord?.["health"],
          0
        ) + petTempHp,
        exp: (() => {
          const exp = toFiniteNumber2(petJson.Exp);
          if (exp !== null && exp > 0) {
            return exp;
          }
          const lvl = toFiniteNumber2(petJson.Lvl);
          if (lvl === 2) {
            return 2;
          }
          if (lvl === 3) {
            return 5;
          }
          return exp ?? 0;
        })(),
        equipment: perkName ? { name: perkName } : null,
        mana: toNumberOrFallback(petJson.Mana, 0),
        belugaSwallowedPet,
        sarcasticFringeheadSwallowedPet,
        ...abominationSwallowedState,
        battlesFought: 0,
        triggersConsumed: abilityTriggersConsumed.length > 0 ? Math.max(...abilityTriggersConsumed) : 0
      };
      if (String(petId) === "373") {
        try {
          const mem = buildAbominationMemory(petJson, Number(petId), maps);
          if (mem) {
            const abominationPet = parsedPet;
            abominationPet.abominationMemory = mem;
            const inferredEnums = inferAbominationAbilityEnumsFromSwallowedPets(
              petJson,
              maps
            );
            if (Array.isArray(inferredEnums) && inferredEnums.length > 0) {
              abominationPet.abominationInferredAbilityEnums = inferredEnums;
            }
          }
        } catch (error) {
          void error;
        }
      }
      if (timesHurt !== null) {
        parsedPet.timesHurt = timesHurt;
      }
      return parsedPet;
    };
    const parseBoardPets = (boardJson) => {
      const items = boardJson?.Mins?.Items ?? [];
      const petArray = Array(5).fill(null);
      items.forEach((pet, index) => {
        if (!pet) {
          return;
        }
        let pos = toNumberOrFallback(pet.Poi?.x, -1);
        if (pos === -1) {
          pos = index;
        }
        if (pos >= 0 && pos < 5) {
          petArray[pos] = parsePet(pet);
        }
      });
      return petArray.reverse();
    };
    const getToy = (boardJson) => {
      const toyItem = (boardJson?.Rel?.Items ?? []).find((item) => Boolean(item));
      if (toyItem) {
        const toyRecord = asRecord(toyItem);
        const toyId = resolveToyId(toyItem) ?? null;
        const toyName = toyId ? TOYS_BY_ID.get(String(toyId)) : getToyName(toyItem);
        return {
          name: toyName || null,
          level: toNumberOrFallback(toyRecord?.["Lvl"], 1)
        };
      }
      return { name: null, level: 1 };
    };
    const playerToy = getToy(userBoard);
    const opponentToy = getToy(opponentBoard);
    const customPacks = this.buildCustomPacksFromGenesis(buildModel, battleJson);
    const playerDeck = userBoard?.Deck ?? buildModel?.Bor?.Deck;
    const playerCustomPack = this.findCustomPackFromDeck(
      customPacks,
      playerDeck
    );
    const opponentCustomPack = this.findCustomPackFromDeck(
      customPacks,
      opponentBoard?.Deck
    );
    const playerPackId = resolvePackIdFromUnknown(userBoard?.Pack);
    const opponentPackId = resolvePackIdFromUnknown(opponentBoard?.Pack);
    const playerPackName = playerCustomPack?.name || (playerPackId !== null ? PACK_MAP[playerPackId] : null) || "Turtle";
    const opponentPackName = opponentCustomPack?.name || (opponentPackId !== null ? PACK_MAP[opponentPackId] : null) || "Turtle";
    return {
      playerPack: playerPackName,
      opponentPack: opponentPackName,
      playerToy: playerToy.name,
      playerToyLevel: String(playerToy.level),
      playerHardToy: null,
      playerHardToyLevel: 1,
      opponentToy: opponentToy.name,
      opponentToyLevel: String(opponentToy.level),
      opponentHardToy: null,
      opponentHardToyLevel: 1,
      turn: readBoardNumber(userBoard, "Tur", 1) || 1,
      playerGoldSpent: readBoardNumber(userBoard, "GoSp", 0) || 0,
      opponentGoldSpent: readBoardNumber(opponentBoard, "GoSp", 0) || 0,
      playerRollAmount: readBoardNumber(userBoard, "Rold", 0) || 0,
      opponentRollAmount: readBoardNumber(opponentBoard, "Rold", 0) || 0,
      playerSummonedAmount: readBoardNumber(userBoard, "MiSu", 0) || 0,
      opponentSummonedAmount: readBoardNumber(opponentBoard, "MiSu", 0) || 0,
      playerLevel3Sold: readBoardNumber(userBoard, "MSFL", 0) || 0,
      opponentLevel3Sold: readBoardNumber(opponentBoard, "MSFL", 0) || 0,
      playerTransformationAmount: readBoardNumber(userBoard, "TrTT", 0) || 0,
      opponentTransformationAmount: readBoardNumber(opponentBoard, "TrTT", 0) || 0,
      playerPets: parseBoardPets(userBoard),
      opponentPets: parseBoardPets(opponentBoard),
      allPets: false,
      logFilter: null,
      customPacks,
      oldStork: false,
      tokenPets: false,
      komodoShuffle: false,
      mana: true,
      seed: null,
      triggersConsumed: true,
      showAdvanced: true,
      showTriggerNamesInLogs: false,
      showPositionalArgsInLogs: true,
      ailmentEquipment: false
    };
  }
  buildCustomPacksFromGenesis(buildModel, battleJson) {
    const decks = [
      buildModel?.Bor?.Deck,
      battleJson?.UserBoard?.Deck,
      battleJson?.OpponentBoard?.Deck
    ].filter(
      (deck) => deck !== null && deck !== void 0 && Array.isArray(deck.Minions)
    );
    const packs = [];
    const seenDeckIds = /* @__PURE__ */ new Set();
    const usedNames = /* @__PURE__ */ new Set();
    for (const deck of decks) {
      const deckId = deck?.Id != null ? String(deck.Id) : null;
      if (deckId && seenDeckIds.has(deckId)) {
        continue;
      }
      if (deckId) {
        seenDeckIds.add(deckId);
      }
      const pack = this.buildCustomPackFromDeck(deck, usedNames);
      if (pack) {
        packs.push({ ...pack, deckId });
      }
    }
    return packs;
  }
  generateCalculatorLink(calculatorState) {
    const baseUrl = window.location.origin + window.location.pathname;
    const strippedState = this.stripDefaultValues(calculatorState);
    const truncatedState = this.truncateKeys(strippedState);
    const stateString = JSON.stringify(truncatedState);
    const base64Data = encodeBase64Url(stateString);
    return `${baseUrl}#c=${base64Data}`;
  }
  buildCustomPackFromDeck(deck, usedNames) {
    if (!deck || !Array.isArray(deck.Minions)) {
      return null;
    }
    const minions = deck.Minions.map((id) => String(id));
    const spells = Array.isArray(deck.Spells) ? [...deck.Spells] : [];
    const tierPets = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    };
    for (const minionId of minions) {
      const petMeta = PETS_META_BY_ID.get(minionId);
      if (!petMeta) {
        continue;
      }
      if (tierPets[petMeta.tier]) {
        tierPets[petMeta.tier].push(petMeta.name);
      }
    }
    const normalizeTierPets = (pets2) => {
      const normalized = pets2.slice(0, 10);
      while (normalized.length < 10) {
        normalized.push(null);
      }
      return normalized;
    };
    let deckName = deck.Title || "Custom Pack";
    if (usedNames.has(deckName)) {
      let suffix = 2;
      while (usedNames.has(`${deckName} (${suffix})`)) {
        suffix += 1;
      }
      deckName = `${deckName} (${suffix})`;
    }
    usedNames.add(deckName);
    return {
      name: deckName,
      tier1Pets: normalizeTierPets(tierPets[1]),
      tier2Pets: normalizeTierPets(tierPets[2]),
      tier3Pets: normalizeTierPets(tierPets[3]),
      tier4Pets: normalizeTierPets(tierPets[4]),
      tier5Pets: normalizeTierPets(tierPets[5]),
      tier6Pets: normalizeTierPets(tierPets[6]),
      spells
    };
  }
  findCustomPackFromDeck(customPacks, deck) {
    if (!deck) {
      return null;
    }
    const deckId = deck?.Id != null ? String(deck.Id) : null;
    if (deckId) {
      const byId = customPacks.find((pack) => pack.deckId === deckId);
      if (byId) {
        return byId;
      }
    }
    const deckContents = this.buildCustomPackFromDeck(deck, /* @__PURE__ */ new Set());
    if (deckContents) {
      const byContents = customPacks.find(
        (pack) => this.customPackContentsMatch(pack, deckContents)
      );
      if (byContents) {
        return byContents;
      }
    }
    const deckName = deck?.Title;
    if (deckName) {
      return customPacks.find((pack) => pack.name === deckName) || null;
    }
    return null;
  }
  customPackContentsMatch(pack, deckContents) {
    const tierKeys = [
      "tier1Pets",
      "tier2Pets",
      "tier3Pets",
      "tier4Pets",
      "tier5Pets",
      "tier6Pets"
    ];
    return tierKeys.every(
      (tierKey) => this.stringArraysMatch(pack[tierKey], deckContents[tierKey])
    ) && this.customPackItemsMatch(pack.spells, deckContents.spells);
  }
  customPackItemsMatch(left, right) {
    return left.length === right.length && left.every((value, index) => value === right[index]);
  }
  stringArraysMatch(left, right) {
    return left.length === right.length && left.every((value, index) => value === right[index]);
  }
  stripDefaultValues(state) {
    const strippedState = {};
    if (state.playerPack !== "Turtle") {
      strippedState.playerPack = state.playerPack;
    }
    if (state.opponentPack !== "Turtle") {
      strippedState.opponentPack = state.opponentPack;
    }
    if (state.playerToy) {
      strippedState.playerToy = state.playerToy;
    }
    if (state.playerToyLevel && state.playerToyLevel !== "1") {
      strippedState.playerToyLevel = state.playerToyLevel;
    }
    if (state.opponentToy) {
      strippedState.opponentToy = state.opponentToy;
    }
    if (state.opponentToyLevel && state.opponentToyLevel !== "1") {
      strippedState.opponentToyLevel = state.opponentToyLevel;
    }
    if (state.turn !== 11) {
      strippedState.turn = state.turn;
    }
    if (state.playerGoldSpent !== 10) {
      strippedState.playerGoldSpent = state.playerGoldSpent;
    }
    if (state.opponentGoldSpent !== 10) {
      strippedState.opponentGoldSpent = state.opponentGoldSpent;
    }
    if (state.playerRollAmount !== 4) {
      strippedState.playerRollAmount = state.playerRollAmount;
    }
    if (state.opponentRollAmount !== 4) {
      strippedState.opponentRollAmount = state.opponentRollAmount;
    }
    if (state.playerSummonedAmount !== 0) {
      strippedState.playerSummonedAmount = state.playerSummonedAmount;
    }
    if (state.opponentSummonedAmount !== 0) {
      strippedState.opponentSummonedAmount = state.opponentSummonedAmount;
    }
    if (state.playerLevel3Sold !== 0) {
      strippedState.playerLevel3Sold = state.playerLevel3Sold;
    }
    if (state.opponentLevel3Sold !== 0) {
      strippedState.opponentLevel3Sold = state.opponentLevel3Sold;
    }
    if (state.playerTransformationAmount !== 0) {
      strippedState.playerTransformationAmount = state.playerTransformationAmount;
    }
    if (state.opponentTransformationAmount !== 0) {
      strippedState.opponentTransformationAmount = state.opponentTransformationAmount;
    }
    if (state.allPets) {
      strippedState.allPets = true;
    }
    if (state.oldStork) {
      strippedState.oldStork = true;
    }
    if (state.tokenPets) {
      strippedState.tokenPets = true;
    }
    if (state.komodoShuffle) {
      strippedState.komodoShuffle = true;
    }
    if (state.mana) {
      strippedState.mana = true;
    }
    if (state.seed != null) {
      strippedState.seed = state.seed;
    }
    if (state.triggersConsumed) {
      strippedState.triggersConsumed = true;
    }
    if (state.foodsEaten) {
      strippedState.foodsEaten = true;
    }
    if (state.showAdvanced) {
      strippedState.showAdvanced = true;
    }
    if (state.showTriggerNamesInLogs) {
      strippedState.showTriggerNamesInLogs = true;
    }
    if (state.showPositionalArgsInLogs === false) {
      strippedState.showPositionalArgsInLogs = false;
    }
    if (state.ailmentEquipment) {
      strippedState.ailmentEquipment = true;
    }
    if (state.logFilter) {
      strippedState.logFilter = state.logFilter;
    }
    if (state.customPacks.length > 0) {
      strippedState.customPacks = state.customPacks;
    }
    const stripPetDefaults = (pet) => {
      if (!pet || !pet.name) {
        return null;
      }
      const newPet = { name: pet.name };
      if (typeof pet.attack === "number" && pet.attack !== 0) {
        newPet.attack = pet.attack;
      }
      if (typeof pet.health === "number" && pet.health !== 0) {
        newPet.health = pet.health;
      }
      if (typeof pet.exp === "number" && pet.exp !== 0) {
        newPet.exp = pet.exp;
      }
      if (typeof pet.mana === "number" && pet.mana !== 0) {
        newPet.mana = pet.mana;
      }
      if (pet.equipment) {
        newPet.equipment = pet.equipment;
      }
      if (pet.triggersConsumed) {
        newPet.triggersConsumed = pet.triggersConsumed;
      }
      if (pet.foodsEaten) {
        newPet.foodsEaten = pet.foodsEaten;
      }
      if (pet.ailmentsCount) {
        newPet.ailmentsCount = pet.ailmentsCount;
      }
      if (pet.friendsHurtBeforeBattle) {
        newPet.friendsHurtBeforeBattle = pet.friendsHurtBeforeBattle;
      }
      if (pet.belugaSwallowedPet != null) {
        newPet.belugaSwallowedPet = pet.belugaSwallowedPet;
      }
      ABOMINATION_SLOT_FIELDS.forEach((slotFields) => {
        const swallowedPet = pet[slotFields.pet];
        if (swallowedPet != null) {
          newPet[slotFields.pet] = swallowedPet;
        }
        const swallowedLevel = pet[slotFields.level];
        if (typeof swallowedLevel === "number" && swallowedLevel !== 1) {
          newPet[slotFields.level] = swallowedLevel;
        }
      });
      if (pet.timesHurt) {
        newPet.timesHurt = pet.timesHurt;
      }
      return newPet;
    };
    const strippedPlayerPets = state.playerPets.map(stripPetDefaults);
    if (strippedPlayerPets.some((pet) => pet !== null)) {
      strippedState.playerPets = strippedPlayerPets;
    }
    const strippedOpponentPets = state.opponentPets.map(stripPetDefaults);
    if (strippedOpponentPets.some((pet) => pet !== null)) {
      strippedState.opponentPets = strippedOpponentPets;
    }
    return strippedState;
  }
  truncateKeys(data) {
    if (Array.isArray(data)) {
      return data.map((item) => this.truncateKeys(item));
    }
    if (isRecord(data)) {
      const newObj = {};
      for (const key of Object.keys(data)) {
        const newKey = KEY_MAP[key] || key;
        newObj[newKey] = this.truncateKeys(data[key]);
      }
      return newObj;
    }
    return data;
  }
};

// src/app/integrations/equipment/pet-config-equipment.ts
function clonePetConfigEquipment(equipment) {
  if (!equipment) {
    return null;
  }
  return typeof equipment === "string" ? { name: equipment } : { ...equipment };
}

// src/app/integrations/simulation/positioning-lineup-memory.ts
var PARROT_MEMORY_PREFIX = "parrotCopyPet";
var ABOMINATION_MEMORY_PREFIX = "abominationSwallowedPet";
function clonePet(pet) {
  if (!pet) {
    return null;
  }
  return {
    ...pet,
    equipment: clonePetConfigEquipment(pet.equipment)
  };
}
function clearParrotMemory(pet) {
  Object.keys(pet).forEach((key) => {
    if (key.startsWith(PARROT_MEMORY_PREFIX)) {
      delete pet[key];
    }
  });
  pet.parrotCopyPet = null;
}
function copyResolvedParrotMemory(target, parrot) {
  Object.entries(target).forEach(([key, value]) => {
    if (key.startsWith(PARROT_MEMORY_PREFIX)) {
      parrot[key] = value;
    }
  });
}
function copyTargetMemory(target, parrot) {
  parrot.parrotCopyPet = target.name ?? null;
  if (target.name === "Beluga Whale") {
    parrot.parrotCopyPetBelugaSwallowedPet = target.belugaSwallowedPet ?? null;
  }
  if (target.name !== "Abomination") {
    return;
  }
  Object.entries(target).forEach(([key, value]) => {
    if (!key.startsWith(ABOMINATION_MEMORY_PREFIX)) {
      return;
    }
    parrot[`${PARROT_MEMORY_PREFIX}${key[0].toUpperCase()}${key.slice(1)}`] = value;
  });
}
function findNearestPetAhead(lineup, index) {
  for (let aheadIndex = index - 1; aheadIndex >= 0; aheadIndex -= 1) {
    const candidate = lineup[aheadIndex];
    if (candidate?.name) {
      return candidate;
    }
  }
  return null;
}
function refreshPositioningLineupMemory(lineup) {
  const refreshed = lineup.map(clonePet);
  for (let index = 0; index < refreshed.length; index += 1) {
    const pet = refreshed[index];
    if (pet?.name !== "Parrot") {
      continue;
    }
    const petRecord = pet;
    clearParrotMemory(petRecord);
    const target = findNearestPetAhead(refreshed, index);
    if (!target) {
      continue;
    }
    const targetRecord = target;
    if (target.name === "Parrot") {
      copyResolvedParrotMemory(targetRecord, petRecord);
    } else {
      copyTargetMemory(targetRecord, petRecord);
    }
  }
  return refreshed;
}

// src/app/integrations/simulation/positioning-optimizer.ts
var POSITIONING_SIMULATION_BUDGETS = {
  quick: { total: 12e3, maximum: 1e3 },
  extended: { total: 6e4, maximum: 5e3 }
};
function getPositioningSimulationCount(lineup, precision = "quick") {
  const occupiedSlots = Math.min(
    5,
    lineup.reduce((count, pet) => count + (pet ? 1 : 0), 0)
  );
  const meaningfulOrders = permutationCount(5, occupiedSlots);
  const profile = POSITIONING_SIMULATION_BUDGETS[precision];
  return Math.max(
    25,
    Math.min(profile.maximum, Math.floor(profile.total / meaningfulOrders))
  );
}
function permutationCount(slotCount, occupiedSlots) {
  let result = 1;
  for (let index = 0; index < occupiedSlots; index += 1) {
    result *= slotCount - index;
  }
  return result;
}
var DEFAULT_MAX_SIMULATIONS_PER_PERMUTATION = 250;
var DEFAULT_BATCH_SIZE = 25;
var DEFAULT_CONFIDENCE_Z = 1.96;
var DEFAULT_MIN_SAMPLES_BEFORE_ELIMINATION = 50;
var DEFAULT_BASE_SEED = 123456789;
function runPositioningOptimization(params) {
  const {
    baseConfig,
    simulateBatch,
    shouldAbort,
    onProgress,
    projectEndTurnLineup
  } = params;
  const side = params.options.side;
  const keepSameBuffTargets = params.options.keepSameBuffTargets === true;
  const recomputeParrotCopies = params.options.recomputeParrotCopies !== false;
  const successiveHalving = params.options.successiveHalving === true;
  const successiveHalvingRate = Math.min(
    0.9,
    Math.max(0.1, params.options.successiveHalvingRate ?? 0.5)
  );
  const projectedLineupCache = /* @__PURE__ */ new Map();
  const maxSimulationsPerPermutation = Math.max(
    1,
    Math.trunc(
      params.options.maxSimulationsPerPermutation ?? baseConfig.simulationCount ?? DEFAULT_MAX_SIMULATIONS_PER_PERMUTATION
    )
  );
  const batchSize = Math.max(
    1,
    Math.trunc(params.options.batchSize ?? DEFAULT_BATCH_SIZE)
  );
  const confidenceZ = params.options.confidenceZ != null && Number.isFinite(params.options.confidenceZ) ? Math.max(0, params.options.confidenceZ) : DEFAULT_CONFIDENCE_Z;
  const minSamplesBeforeElimination = Math.max(
    1,
    Math.trunc(
      params.options.minSamplesBeforeElimination ?? DEFAULT_MIN_SAMPLES_BEFORE_ELIMINATION
    )
  );
  const baseSeed = params.options.baseSeed != null && Number.isFinite(params.options.baseSeed) ? Math.trunc(params.options.baseSeed) : baseConfig.seed != null && Number.isFinite(baseConfig.seed) ? Math.trunc(baseConfig.seed) : DEFAULT_BASE_SEED;
  const petsKey = side === "player" ? "playerPets" : "opponentPets";
  const sidePets = (baseConfig[petsKey] ?? []).slice();
  const baselineLineupDeltas = projectEndTurnLineup && !keepSameBuffTargets ? computeLineupNumericDeltas(
    sidePets,
    normalizeLineupLength(
      projectEndTurnLineup({
        baseConfig,
        side,
        lineup: sidePets
      }),
      sidePets.length
    )
  ) : null;
  const permutations = generateIndexPermutations(sidePets);
  const candidates = permutations.map((order) => {
    const lineup = applyOrder(sidePets, order);
    return {
      order: [...order],
      lineup,
      simulations: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      score: 0,
      lowerBound: 0,
      upperBound: 1,
      eliminated: false,
      rounds: 0,
      simulationLineup: keepSameBuffTargets ? recomputeParrotCopies ? refreshPositioningLineupMemory(lineup) : lineup : null,
      lineupSignature: ""
    };
  });
  candidates.forEach((candidate) => {
    candidate.lineupSignature = buildLineupSignature(candidate.lineup);
  });
  let completedBattles = 0;
  const totalBattlesEstimate = permutations.length * maxSimulationsPerPermutation;
  let round = 0;
  let aborted = false;
  if (candidates.length === 0) {
    throw new Error("Could not generate any board permutations.");
  }
  while (true) {
    if (shouldAbort?.()) {
      aborted = true;
      break;
    }
    const activeCandidates = candidates.filter((candidate) => !candidate.eliminated);
    if (activeCandidates.length <= 1) {
      break;
    }
    const seedForRound = baseSeed + round;
    let ranAnyBatch = false;
    for (const candidate of activeCandidates) {
      if (shouldAbort?.()) {
        aborted = true;
        break;
      }
      if (candidate.simulations >= maxSimulationsPerPermutation) {
        continue;
      }
      const remaining = maxSimulationsPerPermutation - candidate.simulations;
      const simulationsToRun = Math.min(batchSize, remaining);
      if (simulationsToRun <= 0) {
        continue;
      }
      ranAnyBatch = true;
      const simulationLineup = getCandidateSimulationLineup(
        candidate,
        {
          keepSameBuffTargets,
          recomputeParrotCopies,
          baseConfig,
          side,
          sidePets,
          baselineLineupDeltas,
          projectEndTurnLineup
        },
        projectedLineupCache
      );
      const batchConfig = {
        ...baseConfig,
        [petsKey]: simulationLineup,
        simulationCount: simulationsToRun,
        logsEnabled: false,
        maxLoggedBattles: 0,
        captureRandomDecisions: false,
        randomDecisionOverrides: [],
        seed: seedForRound
      };
      const result = simulateBatch(batchConfig);
      const objectiveWins = side === "player" ? result.playerWins : result.opponentWins;
      const objectiveLosses = side === "player" ? result.opponentWins : result.playerWins;
      candidate.simulations += simulationsToRun;
      candidate.rounds += 1;
      candidate.wins += objectiveWins;
      candidate.draws += result.draws;
      candidate.losses += objectiveLosses;
      updateCandidateStats(candidate, confidenceZ);
      completedBattles += simulationsToRun;
      const testedPermutations = candidates.filter((entry) => entry.simulations > 0).length;
      const bestScore = Math.max(...candidates.map((entry) => entry.score));
      onProgress?.({
        completedBattles,
        totalBattlesEstimate,
        testedPermutations,
        activePermutations: candidates.filter((entry) => !entry.eliminated).length,
        bestScore
      });
    }
    if (aborted) {
      break;
    }
    if (!ranAnyBatch) {
      break;
    }
    const activeAfterRound = candidates.filter((candidate) => !candidate.eliminated);
    for (const candidate of activeAfterRound) {
      updateCandidateStats(candidate, confidenceZ);
    }
    const eligibleForElimination = activeAfterRound.filter(
      (candidate) => candidate.simulations >= minSamplesBeforeElimination
    );
    if (eligibleForElimination.length > 1) {
      const bestLowerBound = Math.max(
        ...eligibleForElimination.map((candidate) => candidate.lowerBound)
      );
      for (const candidate of eligibleForElimination) {
        if (candidate.upperBound < bestLowerBound) {
          candidate.eliminated = true;
        }
      }
    }
    if (successiveHalving) {
      const halvingCandidates = candidates.filter(
        (candidate) => !candidate.eliminated
      );
      if (halvingCandidates.length > 1) {
        const survivors = Math.max(
          1,
          Math.ceil(halvingCandidates.length * successiveHalvingRate)
        );
        const rankedForScreening = [...halvingCandidates].sort(
          (left, right) => right.score - left.score || right.lowerBound - left.lowerBound || right.wins - left.wins || left.losses - right.losses
        );
        rankedForScreening.slice(survivors).forEach((candidate) => {
          candidate.eliminated = true;
        });
      }
    }
    round += 1;
  }
  for (const candidate of candidates) {
    updateCandidateStats(candidate, confidenceZ);
  }
  const rankedPermutations = [...candidates].sort((left, right) => {
    if (right.score !== left.score) {
      return right.score - left.score;
    }
    if (right.lowerBound !== left.lowerBound) {
      return right.lowerBound - left.lowerBound;
    }
    if (right.simulations !== left.simulations) {
      return right.simulations - left.simulations;
    }
    return 0;
  });
  const bestPermutation = rankedPermutations[0];
  if (!bestPermutation) {
    throw new Error("Positioning optimization failed to rank candidates.");
  }
  return {
    side,
    totalPermutations: candidates.length,
    prunedPermutations: candidates.filter((candidate) => candidate.eliminated).length,
    simulatedBattles: completedBattles,
    aborted,
    bestPermutation: cloneCandidateStats(bestPermutation, recomputeParrotCopies),
    rankedPermutations: rankedPermutations.map(
      (candidate) => cloneCandidateStats(candidate, recomputeParrotCopies)
    )
  };
}
function cloneCandidateStats(candidate, recomputeParrotCopies) {
  return {
    order: [...candidate.order],
    lineup: [...candidate.lineup],
    simulationLineup: [
      ...candidate.simulationLineup ?? (recomputeParrotCopies ? refreshPositioningLineupMemory(candidate.lineup) : candidate.lineup)
    ],
    simulations: candidate.simulations,
    wins: candidate.wins,
    draws: candidate.draws,
    losses: candidate.losses,
    score: candidate.score,
    lowerBound: candidate.lowerBound,
    upperBound: candidate.upperBound,
    eliminated: candidate.eliminated
  };
}
function updateCandidateStats(candidate, zScore) {
  const simulations = candidate.simulations;
  if (simulations <= 0) {
    candidate.score = 0;
    candidate.lowerBound = 0;
    candidate.upperBound = 1;
    return;
  }
  const score = scoreFromTallies(candidate.wins, candidate.draws, simulations);
  const variance = Math.max(0, score * (1 - score));
  const margin = zScore * Math.sqrt(variance / simulations);
  candidate.score = score;
  candidate.lowerBound = Math.max(0, score - margin);
  candidate.upperBound = Math.min(1, score + margin);
}
function scoreFromTallies(wins, draws, simulations) {
  if (simulations <= 0) {
    return 0;
  }
  return (wins + draws * 0.5) / simulations;
}
function applyOrder(source, order) {
  return order.map((index) => source[index]);
}
function buildProjectedCandidateLineup(baseConfig, side, sidePets, order, baselineLineupDeltas, projectEndTurnLineup) {
  const candidateLineup = applyOrder(sidePets, order);
  const projectedCandidateLineup = normalizeLineupLength(
    projectEndTurnLineup({
      baseConfig,
      side,
      lineup: candidateLineup
    }),
    candidateLineup.length
  );
  const candidateLineupDeltas = computeLineupNumericDeltas(
    candidateLineup,
    projectedCandidateLineup
  );
  return candidateLineup.map((pet, targetIndex) => {
    if (!pet) {
      return null;
    }
    const sourceIndex = order[targetIndex] ?? targetIndex;
    const baselineDelta = baselineLineupDeltas[sourceIndex] ?? {};
    const candidateDelta = candidateLineupDeltas[targetIndex] ?? {};
    const numericKeys = /* @__PURE__ */ new Set([
      ...Object.keys(candidateDelta),
      ...Object.keys(baselineDelta)
    ]);
    if (numericKeys.size <= 0) {
      return pet;
    }
    const petRecord = pet;
    const projectedPet = {
      ...petRecord,
      equipment: petRecord.equipment && typeof petRecord.equipment === "object" ? { ...petRecord.equipment } : petRecord.equipment ?? null
    };
    for (const key of numericKeys) {
      const currentValue = toFiniteNumber3(petRecord[key]) ?? 0;
      const projectedValue = currentValue + (candidateDelta[key] ?? 0) - (baselineDelta[key] ?? 0);
      projectedPet[key] = projectedValue;
    }
    return projectedPet;
  });
}
function computeLineupNumericDeltas(beforeLineup, afterLineup) {
  const maxLength = Math.max(beforeLineup.length, afterLineup.length);
  const deltas = [];
  for (let index = 0; index < maxLength; index += 1) {
    deltas.push(
      computePetNumericDelta(
        beforeLineup[index] ?? null,
        afterLineup[index] ?? null
      )
    );
  }
  return deltas;
}
function computePetNumericDelta(beforePet, afterPet) {
  if (!beforePet || !afterPet) {
    return {};
  }
  const beforeRecord = beforePet;
  const afterRecord = afterPet;
  const numericKeys = /* @__PURE__ */ new Set();
  Object.entries(beforeRecord).forEach(([key, value]) => {
    if (toFiniteNumber3(value) != null) {
      numericKeys.add(key);
    }
  });
  Object.entries(afterRecord).forEach(([key, value]) => {
    if (toFiniteNumber3(value) != null) {
      numericKeys.add(key);
    }
  });
  const delta = {};
  for (const key of numericKeys) {
    const beforeValue = toFiniteNumber3(beforeRecord[key]) ?? 0;
    const afterValue = toFiniteNumber3(afterRecord[key]) ?? 0;
    const difference = afterValue - beforeValue;
    if (difference !== 0) {
      delta[key] = difference;
    }
  }
  return delta;
}
function normalizeLineupLength(lineup, length) {
  const normalized = lineup.slice(0, length);
  while (normalized.length < length) {
    normalized.push(null);
  }
  return normalized;
}
function toFiniteNumber3(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function generateIndexPermutations(source) {
  const size = source.length;
  if (size <= 0) {
    return [[]];
  }
  const groups = groupEquivalentValues(source);
  const remainingCounts = groups.map((group) => group.indices.length);
  const groupOrder = new Array(size);
  const groupPermutations = [];
  generateGroupOrderPermutations(
    0,
    groupOrder,
    remainingCounts,
    groupPermutations
  );
  return groupPermutations.map(
    (permutation) => materializeIndexPermutation(permutation, groups)
  );
}
function groupEquivalentValues(source) {
  const groupsBySignature = /* @__PURE__ */ new Map();
  for (let index = 0; index < source.length; index += 1) {
    const value = source[index];
    const signature = buildValueSignature(value);
    const existingGroup = groupsBySignature.get(signature);
    if (existingGroup) {
      existingGroup.indices.push(index);
      continue;
    }
    groupsBySignature.set(signature, {
      representative: value,
      indices: [index]
    });
  }
  return Array.from(groupsBySignature.values());
}
function generateGroupOrderPermutations(depth, groupOrder, remainingCounts, output) {
  if (depth >= groupOrder.length) {
    output.push(groupOrder.slice());
    return;
  }
  for (let groupIndex = 0; groupIndex < remainingCounts.length; groupIndex += 1) {
    if (remainingCounts[groupIndex] <= 0) {
      continue;
    }
    groupOrder[depth] = groupIndex;
    remainingCounts[groupIndex] -= 1;
    generateGroupOrderPermutations(
      depth + 1,
      groupOrder,
      remainingCounts,
      output
    );
    remainingCounts[groupIndex] += 1;
  }
}
function materializeIndexPermutation(groupOrder, groups) {
  const groupOffsets = groups.map(() => 0);
  return groupOrder.map((groupIndex) => {
    const offset = groupOffsets[groupIndex];
    groupOffsets[groupIndex] += 1;
    const index = groups[groupIndex].indices[offset];
    if (index == null) {
      throw new Error("Failed to map grouped permutation to index permutation.");
    }
    return index;
  });
}
function getCandidateSimulationLineup(candidate, context, projectedLineupCache) {
  if (candidate.simulationLineup) {
    return candidate.simulationLineup;
  }
  const cached = projectedLineupCache.get(candidate.lineupSignature);
  if (cached) {
    candidate.simulationLineup = cached;
    return cached;
  }
  const projectedOrRawLineup = context.keepSameBuffTargets || !context.baselineLineupDeltas || !context.projectEndTurnLineup ? candidate.lineup : buildProjectedCandidateLineup(
    context.baseConfig,
    context.side,
    context.sidePets,
    candidate.order,
    context.baselineLineupDeltas,
    context.projectEndTurnLineup
  );
  const simulationLineup = context.recomputeParrotCopies ? refreshPositioningLineupMemory(projectedOrRawLineup) : projectedOrRawLineup;
  projectedLineupCache.set(candidate.lineupSignature, simulationLineup);
  candidate.simulationLineup = simulationLineup;
  return simulationLineup;
}
var objectSignatureCache = /* @__PURE__ */ new WeakMap();
function buildLineupSignature(lineup) {
  return lineup.map((pet) => buildValueSignature(pet)).join("|");
}
function buildValueSignature(value) {
  if (value == null) {
    return `${value}`;
  }
  if (typeof value === "string") {
    return `s:${value}`;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return `${typeof value}:${value}`;
  }
  if (Array.isArray(value)) {
    return `[${value.map((entry) => buildValueSignature(entry)).join(",")}]`;
  }
  if (typeof value !== "object") {
    return `${typeof value}:${String(value)}`;
  }
  const cached = objectSignatureCache.get(value);
  if (cached) {
    return cached;
  }
  const record = value;
  const keys = Object.keys(record).sort();
  const signature = `{${keys.map((key) => `${key}:${buildValueSignature(record[key])}`).join(",")}}`;
  objectSignatureCache.set(value, signature);
  return signature;
}

// src/app/integrations/simulation/board-strength-evaluator.ts
var DEFAULT_SEED = 730241;
var AUTO_INITIAL_MAX_STAT = 100;
var AUTO_MAX_STAT = 5e3;
var AUTO_SIGNAL_THRESHOLD = 5e-3;
var PRECISION_PROFILES = {
  quick: {
    initialBattles: 25,
    batchSize: 25,
    maxBattlesPerStat: 100,
    targetStandardError: 0.055
  },
  standard: {
    initialBattles: 50,
    batchSize: 50,
    maxBattlesPerStat: 200,
    targetStandardError: 0.04
  },
  high: {
    initialBattles: 100,
    batchSize: 100,
    maxBattlesPerStat: 400,
    targetStandardError: 0.025
  }
};
function getBoardStrengthPrecisionProfile(precision) {
  return PRECISION_PROFILES[precision];
}
function runBoardStrengthEvaluation(context) {
  const precision = context.options.precision ?? "standard";
  const profile = PRECISION_PROFILES[precision];
  const minStat = normalizePositiveInteger(context.options.minStat ?? 1);
  const explicitMaxStat = context.options.maxStat === void 0 ? null : Math.max(minStat, normalizePositiveInteger(context.options.maxStat));
  const pointsByStat = /* @__PURE__ */ new Map();
  let battlesCompleted = 0;
  let completedStats = 0;
  let refinementRound = 0;
  let rangeTruncated = false;
  const getPoint = (stat) => {
    const existing = pointsByStat.get(stat);
    if (existing) {
      return existing;
    }
    const point = { stat, wins: 0, draws: 0, losses: 0, battles: 0 };
    pointsByStat.set(stat, point);
    return point;
  };
  const simulatePoint = (point, count) => {
    const config = createBoardStrengthMatchConfig(
      context.baseConfig,
      context.options.side,
      point.stat,
      count,
      (context.options.seed ?? context.baseConfig.seed ?? DEFAULT_SEED) + point.stat * 1e4 + point.battles
    );
    const result = context.simulateBatch(config);
    const candidateWins = context.options.side === "player" ? result.playerWins : result.opponentWins;
    const candidateLosses = context.options.side === "player" ? result.opponentWins : result.playerWins;
    const completed = candidateWins + candidateLosses + result.draws;
    point.wins += candidateWins;
    point.losses += candidateLosses;
    point.draws += result.draws;
    point.battles += completed;
    battlesCompleted += completed;
  };
  let maxStat = explicitMaxStat ?? Math.max(minStat, AUTO_INITIAL_MAX_STAT);
  if (explicitMaxStat === null) {
    let probeStat = maxStat;
    let consecutiveMisses = 0;
    let sawSignal = false;
    let coverageBoundary = maxStat;
    while (true) {
      if (context.shouldAbort?.()) {
        const partial = [...pointsByStat.values()].sort((a, b) => a.stat - b.stat);
        return buildResult(partial, context.options.side, precision, minStat, probeStat, true, false);
      }
      const point = getPoint(probeStat);
      simulatePoint(point, profile.initialBattles);
      const hasSignal = getExpectedScore(point) > AUTO_SIGNAL_THRESHOLD;
      if (hasSignal) {
        sawSignal = true;
        consecutiveMisses = 0;
      } else {
        consecutiveMisses += 1;
        if (sawSignal && consecutiveMisses === 1) {
          coverageBoundary = probeStat;
        }
      }
      context.onProgress?.({
        phase: "scout",
        completedStats: 0,
        totalStats: 0,
        currentStat: probeStat,
        battlesCompleted,
        maximumBattles: 0,
        refinementRound
      });
      if (probeStat >= AUTO_MAX_STAT) {
        rangeTruncated = hasSignal;
        maxStat = rangeTruncated ? AUTO_MAX_STAT : coverageBoundary;
        break;
      }
      probeStat = Math.min(
        AUTO_MAX_STAT,
        probeStat < 1e3 ? probeStat + 100 : probeStat * 2
      );
    }
  }
  const stats = Array.from({ length: maxStat - minStat + 1 }, (_, index) => minStat + index);
  const points = stats.map(getPoint);
  const maximumBattles = stats.length * profile.maxBattlesPerStat;
  for (const point of points) {
    if (context.shouldAbort?.()) {
      return buildResult(points, context.options.side, precision, minStat, maxStat, true, rangeTruncated);
    }
    if (point.battles === 0) {
      simulatePoint(point, profile.initialBattles);
    }
    completedStats += 1;
    context.onProgress?.({
      phase: "scan",
      completedStats,
      totalStats: stats.length,
      currentStat: point.stat,
      battlesCompleted,
      maximumBattles,
      refinementRound
    });
  }
  while (true) {
    const candidates = points.filter(
      (point) => point.battles < profile.maxBattlesPerStat && estimateStandardError(point) > profile.targetStandardError
    );
    if (candidates.length === 0) {
      break;
    }
    refinementRound += 1;
    for (const point of candidates) {
      if (context.shouldAbort?.()) {
        return buildResult(points, context.options.side, precision, minStat, maxStat, true, rangeTruncated);
      }
      const remaining = profile.maxBattlesPerStat - point.battles;
      simulatePoint(point, Math.min(profile.batchSize, remaining));
      context.onProgress?.({
        phase: "refine",
        completedStats,
        totalStats: stats.length,
        currentStat: point.stat,
        battlesCompleted,
        maximumBattles,
        refinementRound
      });
    }
  }
  context.onProgress?.({
    phase: "complete",
    completedStats: stats.length,
    totalStats: stats.length,
    currentStat: maxStat,
    battlesCompleted,
    maximumBattles,
    refinementRound
  });
  return buildResult(
    points,
    context.options.side,
    precision,
    minStat,
    maxStat,
    false,
    rangeTruncated
  );
}
function createBoardStrengthMatchConfig(baseConfig, side, stat, simulationCount, seed) {
  const config = deepClone(baseConfig);
  const benchmarkPets = createBenchmarkPets(stat);
  const candidatePack = side === "player" ? config.playerPack : config.opponentPack;
  if (side === "player") {
    config.opponentPets = benchmarkPets;
    config.opponentPack = candidatePack;
    config.opponentToy = null;
    config.opponentHardToy = null;
    config.opponentGoldSpent = 0;
    config.opponentRollAmount = 0;
    config.opponentSummonedAmount = 0;
    config.opponentLevel3Sold = 0;
    config.opponentTransformationAmount = 0;
    config.opponentLostLastBattle = false;
  } else {
    config.playerPets = benchmarkPets;
    config.playerPack = candidatePack;
    config.playerToy = null;
    config.playerHardToy = null;
    config.playerGoldSpent = 0;
    config.playerRollAmount = 0;
    config.playerSummonedAmount = 0;
    config.playerLevel3Sold = 0;
    config.playerTransformationAmount = 0;
    config.playerLostLastBattle = false;
  }
  config.simulationCount = simulationCount;
  config.seed = Math.trunc(seed);
  config.logsEnabled = false;
  config.maxLoggedBattles = 0;
  config.captureRandomDecisions = false;
  config.randomDecisionOverrides = [];
  config.optimizeDeterministicSimulations = false;
  return config;
}
function createBoardStrengthFingerprint(baseConfig, side) {
  const normalized = createBoardStrengthMatchConfig(
    baseConfig,
    side,
    1,
    1,
    DEFAULT_SEED
  );
  normalized.seed = null;
  normalized.simulationCount = 1;
  return JSON.stringify(normalized);
}
function createBenchmarkPets(stat) {
  const normalizedStat = normalizePositiveInteger(stat);
  return Array.from({ length: 5 }, () => {
    const pet = {
      name: "Benchmark Pet",
      benchmark: true,
      attack: normalizedStat,
      health: normalizedStat,
      exp: 0,
      equipment: null,
      mana: 0
    };
    return pet;
  });
}
function buildResult(mutablePoints, side, precision, minStat, maxStat, aborted, rangeTruncated) {
  const rawScores = mutablePoints.map((point) => getExpectedScore(point));
  const points = mutablePoints.map((point, index) => ({
    ...point,
    expectedScore: rawScores[index],
    smoothedScore: rawScores[index]
  }));
  const score = rawScores.reduce((sum, value) => sum + value, 0);
  const varianceOfScore = mutablePoints.reduce((sum, point) => {
    const standardError = estimateStandardError(point);
    return sum + standardError * standardError;
  }, 0);
  return {
    version: "BS1",
    side,
    precision,
    score,
    benchmark50: findBenchmark50(points),
    estimatedPrecision95: 1.96 * Math.sqrt(varianceOfScore),
    totalBattles: mutablePoints.reduce(
      (sum, point) => sum + point.battles,
      0
    ),
    minStat,
    maxStat,
    points,
    aborted,
    rangeTruncated
  };
}
function getExpectedScore(point) {
  if (point.battles === 0) {
    return 0;
  }
  return (point.wins + point.draws * 0.5) / point.battles;
}
function estimateStandardError(point) {
  if (point.battles === 0) {
    return Number.POSITIVE_INFINITY;
  }
  const mean = getExpectedScore(point);
  const secondMoment = (point.wins + point.draws * 0.25) / point.battles;
  const empiricalVariance = Math.max(0, secondMoment - mean * mean);
  const smoothedMean = (point.wins + point.draws * 0.5 + 1) / (point.battles + 2);
  const conservativeVariance = Math.max(
    empiricalVariance,
    smoothedMean * (1 - smoothedMean)
  );
  return Math.sqrt(conservativeVariance / point.battles);
}
function findBenchmark50(points) {
  let highestPassingStat = null;
  for (const point of points) {
    if (point.expectedScore >= 0.5) {
      highestPassingStat = point.stat;
    }
  }
  return highestPassingStat;
}
function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}
function normalizePositiveInteger(value) {
  const normalized = Number.isFinite(value) ? Math.trunc(value) : 1;
  return Math.max(1, normalized);
}

// simulation/simulate.ts
var import_sap_battle_engine4 = require("sap-battle-engine");
function runSimulation(config) {
  return new CalculatorBattleEngine().run(config);
}
function toNumberOrFallback2(value, fallback) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return fallback;
}
function normalizeCalculatorBaseUrl(baseUrl) {
  const fallbackUrl = "https://sap-calculator.com/";
  const candidate = typeof baseUrl === "string" && baseUrl.trim().length > 0 ? baseUrl.trim() : fallbackUrl;
  try {
    return new URL(candidate);
  } catch {
    return new URL(fallbackUrl);
  }
}
function parseReplayCalculatorState(replay, turnNumber, metaBoards, options) {
  return parseTeamwoodReplayForCalculator(
    replay,
    turnNumber,
    metaBoards,
    options
  );
}
function createSimulationConfigFromCalculatorState(calculatorState, simulationCount) {
  return {
    playerPack: calculatorState.playerPack,
    opponentPack: calculatorState.opponentPack,
    playerToy: calculatorState.playerToy,
    playerToyLevel: toNumberOrFallback2(calculatorState.playerToyLevel, 1),
    playerHardToy: calculatorState.playerHardToy,
    playerHardToyLevel: calculatorState.playerHardToyLevel,
    opponentToy: calculatorState.opponentToy,
    opponentToyLevel: toNumberOrFallback2(calculatorState.opponentToyLevel, 1),
    opponentHardToy: calculatorState.opponentHardToy,
    opponentHardToyLevel: calculatorState.opponentHardToyLevel,
    turn: calculatorState.turn,
    playerGoldSpent: calculatorState.playerGoldSpent,
    opponentGoldSpent: calculatorState.opponentGoldSpent,
    playerRollAmount: calculatorState.playerRollAmount,
    opponentRollAmount: calculatorState.opponentRollAmount,
    playerSummonedAmount: calculatorState.playerSummonedAmount,
    opponentSummonedAmount: calculatorState.opponentSummonedAmount,
    playerLevel3Sold: calculatorState.playerLevel3Sold,
    opponentLevel3Sold: calculatorState.opponentLevel3Sold,
    playerTransformationAmount: calculatorState.playerTransformationAmount,
    opponentTransformationAmount: calculatorState.opponentTransformationAmount,
    playerPets: calculatorState.playerPets,
    opponentPets: calculatorState.opponentPets,
    customPacks: calculatorState.customPacks,
    allPets: calculatorState.allPets,
    oldStork: calculatorState.oldStork,
    tokenPets: calculatorState.tokenPets,
    komodoShuffle: calculatorState.komodoShuffle,
    mana: calculatorState.mana,
    seed: calculatorState.seed,
    simulationCount,
    logsEnabled: false,
    maxLoggedBattles: 0
  };
}
function runReplayOddsFromCalculatorState(calculatorState, simulationCount) {
  const config = createSimulationConfigFromCalculatorState(
    calculatorState,
    simulationCount
  );
  return runSimulation(config);
}
var POSITIONING_SIMULATIONS = {
  quick: 100,
  standard: 250,
  high: 500
};
function normalizeSimulationCount(value, fallback) {
  if (value == null || !Number.isFinite(value)) {
    return fallback;
  }
  return Math.max(1, Math.trunc(value));
}
function clonePetLineup(lineup) {
  return (lineup ?? []).map(
    (pet) => pet ? {
      ...pet,
      equipment: pet.equipment ? { ...pet.equipment } : null
    } : null
  );
}
function runReplayPositioningFromCalculatorState(calculatorState, options) {
  const precision = options.precision ?? "quick";
  const simulationCount = normalizeSimulationCount(
    options.simulationCount,
    POSITIONING_SIMULATIONS[precision]
  );
  const baseConfig = createSimulationConfigFromCalculatorState(
    calculatorState,
    simulationCount
  );
  const runner = new CalculatorBattleEngine();
  const projectionRunner = new CalculatorBattleEngine();
  const baseline = runner.run(baseConfig);
  const projectEndTurnEffects = options.projectEndTurnEffects !== false;
  const recomputeParrotCopies = options.recomputeParrotCopies !== false;
  const optimization = runPositioningOptimization({
    baseConfig,
    options: {
      side: options.side,
      maxSimulationsPerPermutation: simulationCount,
      batchSize: Math.min(25, simulationCount),
      minSamplesBeforeElimination: Math.min(50, simulationCount),
      confidenceZ: 1.96,
      keepSameBuffTargets: !projectEndTurnEffects,
      recomputeParrotCopies
    },
    simulateBatch: (config) => runner.run(config),
    projectEndTurnLineup: projectEndTurnEffects ? ({ baseConfig: projectionConfig, side, lineup }) => projectionRunner.projectLineupAfterEndTurn(
      projectionConfig,
      side,
      lineup
    ) : void 0
  });
  const optimizedLineup = optimization.bestPermutation.simulationLineup.length > 0 ? optimization.bestPermutation.simulationLineup : optimization.bestPermutation.lineup;
  const optimizedCalculatorState = {
    ...calculatorState,
    playerPets: clonePetLineup(
      optimization.side === "player" ? optimizedLineup : calculatorState.playerPets
    ),
    opponentPets: clonePetLineup(
      optimization.side === "opponent" ? optimizedLineup : calculatorState.opponentPets
    )
  };
  const optimized = runner.run(
    createSimulationConfigFromCalculatorState(
      optimizedCalculatorState,
      simulationCount
    )
  );
  return {
    precision,
    simulationCount,
    baseline,
    optimized,
    optimization,
    optimizedCalculatorState
  };
}
function runReplayStrengthFromCalculatorState(calculatorState, precision = "quick", range = {}) {
  const baseConfig = createSimulationConfigFromCalculatorState(calculatorState, 1);
  const runner = new CalculatorBattleEngine();
  const evaluate = (side) => runBoardStrengthEvaluation({
    baseConfig,
    options: {
      side,
      precision,
      minStat: range.minStat,
      maxStat: range.maxStat
    },
    simulateBatch: (config) => runner.run(config)
  });
  return {
    precision,
    player: evaluate("player"),
    opponent: evaluate("opponent")
  };
}
function generateReplayCalculatorLink(calculatorState, baseUrl) {
  const parser = new ReplayCalcParser();
  const normalizedBaseUrl = normalizeCalculatorBaseUrl(baseUrl);
  const globalWithWindow = globalThis;
  const previousWindow = globalWithWindow.window;
  const hadWindow = Object.prototype.hasOwnProperty.call(globalWithWindow, "window");
  globalWithWindow.window = {
    location: {
      origin: normalizedBaseUrl.origin,
      pathname: normalizedBaseUrl.pathname
    }
  };
  try {
    const hashLink = parser.generateCalculatorLink(calculatorState);
    return hashLink.replace("#c=", "?c=");
  } finally {
    if (hadWindow) {
      globalWithWindow.window = previousWindow;
    } else {
      delete globalWithWindow.window;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReplayCalcParser,
  buildReplayAbilityPetMapFromActions,
  buildReplayPerkNameByPetIdFromActions,
  catalogs,
  createBattleEngine,
  createBoardStrengthFingerprint,
  createBoardStrengthMatchConfig,
  createSimulationConfigFromCalculatorState,
  generateReplayCalculatorLink,
  getBoardStrengthPrecisionProfile,
  getPositioningSimulationCount,
  optimizeFight,
  parseReplayCalculatorState,
  parseReplayForCalculatorFromActions,
  parseTeamwoodReplayForCalculator,
  runBoardStrengthEvaluation,
  runHeadlessSimulation,
  runPositioningOptimization,
  runReplayOddsFromCalculatorState,
  runReplayPositioningFromCalculatorState,
  runReplayStrengthFromCalculatorState,
  runSimulation,
  selectReplayBattleFromActions
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2ltdWxhdGUudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9iYXR0bGUtZW5naW5lLnRzIiwgIi4uLy4uL3NyYy9hcHAvZG9tYWluL2VudGl0aWVzL3BsYXllci5jbGFzcy50cyIsICIuLi8uLi9zcmMvYXBwL2RvbWFpbi9lbnRpdGllcy9wZXQuY2xhc3MudHMiLCAiLi4vc2hpbXMudHMiLCAiLi4vLi4vc3JjL2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MudHMiLCAiLi4vLi4vc3JjL2FwcC9ydW50aW1lL2Fzc2V0LWNhdGFsb2cudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvZXF1aXBtZW50L2VxdWlwbWVudC1jYXRlZ29yaWVzLnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL2xvZy9sb2ctaW5saW5lLWljb25zLnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL2xvZy9sb2ctbWVyZ2UtdXRpbHMudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvbG9nL2xvZy1ib2FyZC1yZW5kZXIudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvbG9nLnNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2FwcC9ydW50aW1lL2Jhc2U2NC11cmwudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvcmVwbGF5L3JlcGxheS1jYWxjLXNjaGVtYS50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9yZXBsYXkvcmVwbGF5LWNhbGMtcGFyc2VyLXV0aWxzLnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3JlcGxheS9yZXBsYXktY2FsYy1wYXJzZXIudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvZXF1aXBtZW50L3BldC1jb25maWctZXF1aXBtZW50LnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3NpbXVsYXRpb24vcG9zaXRpb25pbmctbGluZXVwLW1lbW9yeS50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9zaW11bGF0aW9uL3Bvc2l0aW9uaW5nLW9wdGltaXplci50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9zaW11bGF0aW9uL2JvYXJkLXN0cmVuZ3RoLWV2YWx1YXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ2FsY3VsYXRvckJhdHRsZUVuZ2luZSB9IGZyb20gJy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3NpbXVsYXRpb24vYmF0dGxlLWVuZ2luZSc7XG5pbXBvcnQgeyBydW5IZWFkbGVzc1NpbXVsYXRpb24gYXMgZW5naW5lSGVhZGxlc3NTaW11bGF0aW9uIH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuaW1wb3J0IHtcbiAgU2ltdWxhdGlvbkNvbmZpZyxcbiAgU2ltdWxhdGlvblJlc3VsdCxcbn0gZnJvbSAnLi4vc3JjL2FwcC9kb21haW4vaW50ZXJmYWNlcy9zaW11bGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgcGFyc2VUZWFtd29vZFJlcGxheUZvckNhbGN1bGF0b3IsXG4gIFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uLFxuICBSZXBsYXlCb3RUdXJuc0NvbnRhaW5lckpzb24sXG4gIFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgUmVwbGF5TWV0YUJvYXJkcyxcbiAgUmVwbGF5UGFyc2VPcHRpb25zLFxuICBSZXBsYXlDYWxjUGFyc2VyLFxufSBmcm9tICcuLi9zcmMvYXBwL2ludGVncmF0aW9ucy9yZXBsYXkvcmVwbGF5LWNhbGMtcGFyc2VyJztcbmltcG9ydCB7XG4gIFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUmVzdWx0LFxuICBQb3NpdGlvbmluZ09wdGltaXphdGlvblNpZGUsXG4gIHJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uLFxufSBmcm9tICcuLi9zcmMvYXBwL2ludGVncmF0aW9ucy9zaW11bGF0aW9uL3Bvc2l0aW9uaW5nLW9wdGltaXplcic7XG5pbXBvcnQge1xuICBCb2FyZFN0cmVuZ3RoUHJlY2lzaW9uLFxuICBCb2FyZFN0cmVuZ3RoUmVzdWx0LFxuICBydW5Cb2FyZFN0cmVuZ3RoRXZhbHVhdGlvbixcbn0gZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9ib2FyZC1zdHJlbmd0aC1ldmFsdWF0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVuU2ltdWxhdGlvbihjb25maWc6IFNpbXVsYXRpb25Db25maWcpOiBTaW11bGF0aW9uUmVzdWx0IHtcbiAgcmV0dXJuIG5ldyBDYWxjdWxhdG9yQmF0dGxlRW5naW5lKCkucnVuKGNvbmZpZyk7XG59XG5leHBvcnQgeyBlbmdpbmVIZWFkbGVzc1NpbXVsYXRpb24gYXMgcnVuSGVhZGxlc3NTaW11bGF0aW9uIH07XG5leHBvcnQgdHlwZSB7IEhlYWRsZXNzU2ltdWxhdGlvbk9wdGlvbnMgfSBmcm9tICdzYXAtYmF0dGxlLWVuZ2luZSc7XG5cbmV4cG9ydCB0eXBlIFJlcGxheVBheWxvYWRKc29uID1cbiAgfCBSZXBsYXlBY3Rpb25zQ29udGFpbmVySnNvblxuICB8IFJlcGxheUJvdFR1cm5zQ29udGFpbmVySnNvbjtcblxuZnVuY3Rpb24gdG9OdW1iZXJPckZhbGxiYWNrKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSB7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNhbGN1bGF0b3JCYXNlVXJsKGJhc2VVcmw/OiBzdHJpbmcpOiBVUkwge1xuICBjb25zdCBmYWxsYmFja1VybCA9ICdodHRwczovL3NhcC1jYWxjdWxhdG9yLmNvbS8nO1xuICBjb25zdCBjYW5kaWRhdGUgPSB0eXBlb2YgYmFzZVVybCA9PT0gJ3N0cmluZycgJiYgYmFzZVVybC50cmltKCkubGVuZ3RoID4gMFxuICAgID8gYmFzZVVybC50cmltKClcbiAgICA6IGZhbGxiYWNrVXJsO1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKGNhbmRpZGF0ZSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBuZXcgVVJMKGZhbGxiYWNrVXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXBsYXlDYWxjdWxhdG9yU3RhdGUoXG4gIHJlcGxheTogUmVwbGF5UGF5bG9hZEpzb24sXG4gIHR1cm5OdW1iZXI6IG51bWJlcixcbiAgbWV0YUJvYXJkcz86IFJlcGxheU1ldGFCb2FyZHMsXG4gIG9wdGlvbnM/OiBSZXBsYXlQYXJzZU9wdGlvbnMsXG4pOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgfCBudWxsIHtcbiAgcmV0dXJuIHBhcnNlVGVhbXdvb2RSZXBsYXlGb3JDYWxjdWxhdG9yKFxuICAgIHJlcGxheSxcbiAgICB0dXJuTnVtYmVyLFxuICAgIG1ldGFCb2FyZHMsXG4gICAgb3B0aW9ucyxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbXVsYXRpb25Db25maWdGcm9tQ2FsY3VsYXRvclN0YXRlKFxuICBjYWxjdWxhdG9yU3RhdGU6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgc2ltdWxhdGlvbkNvdW50OiBudW1iZXIsXG4pOiBTaW11bGF0aW9uQ29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJQYWNrOiBjYWxjdWxhdG9yU3RhdGUucGxheWVyUGFjayxcbiAgICBvcHBvbmVudFBhY2s6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFBhY2ssXG4gICAgcGxheWVyVG95OiBjYWxjdWxhdG9yU3RhdGUucGxheWVyVG95LFxuICAgIHBsYXllclRveUxldmVsOiB0b051bWJlck9yRmFsbGJhY2soY2FsY3VsYXRvclN0YXRlLnBsYXllclRveUxldmVsLCAxKSxcbiAgICBwbGF5ZXJIYXJkVG95OiBjYWxjdWxhdG9yU3RhdGUucGxheWVySGFyZFRveSxcbiAgICBwbGF5ZXJIYXJkVG95TGV2ZWw6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJIYXJkVG95TGV2ZWwsXG4gICAgb3Bwb25lbnRUb3k6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFRveSxcbiAgICBvcHBvbmVudFRveUxldmVsOiB0b051bWJlck9yRmFsbGJhY2soY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50VG95TGV2ZWwsIDEpLFxuICAgIG9wcG9uZW50SGFyZFRveTogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50SGFyZFRveSxcbiAgICBvcHBvbmVudEhhcmRUb3lMZXZlbDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50SGFyZFRveUxldmVsLFxuICAgIHR1cm46IGNhbGN1bGF0b3JTdGF0ZS50dXJuLFxuICAgIHBsYXllckdvbGRTcGVudDogY2FsY3VsYXRvclN0YXRlLnBsYXllckdvbGRTcGVudCxcbiAgICBvcHBvbmVudEdvbGRTcGVudDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50R29sZFNwZW50LFxuICAgIHBsYXllclJvbGxBbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJSb2xsQW1vdW50LFxuICAgIG9wcG9uZW50Um9sbEFtb3VudDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50Um9sbEFtb3VudCxcbiAgICBwbGF5ZXJTdW1tb25lZEFtb3VudDogY2FsY3VsYXRvclN0YXRlLnBsYXllclN1bW1vbmVkQW1vdW50LFxuICAgIG9wcG9uZW50U3VtbW9uZWRBbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFN1bW1vbmVkQW1vdW50LFxuICAgIHBsYXllckxldmVsM1NvbGQ6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJMZXZlbDNTb2xkLFxuICAgIG9wcG9uZW50TGV2ZWwzU29sZDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50TGV2ZWwzU29sZCxcbiAgICBwbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDogY2FsY3VsYXRvclN0YXRlLnBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50LFxuICAgIG9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50LFxuICAgIHBsYXllclBldHM6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJQZXRzLFxuICAgIG9wcG9uZW50UGV0czogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50UGV0cyxcbiAgICBjdXN0b21QYWNrczogY2FsY3VsYXRvclN0YXRlLmN1c3RvbVBhY2tzLFxuICAgIGFsbFBldHM6IGNhbGN1bGF0b3JTdGF0ZS5hbGxQZXRzLFxuICAgIG9sZFN0b3JrOiBjYWxjdWxhdG9yU3RhdGUub2xkU3RvcmssXG4gICAgdG9rZW5QZXRzOiBjYWxjdWxhdG9yU3RhdGUudG9rZW5QZXRzLFxuICAgIGtvbW9kb1NodWZmbGU6IGNhbGN1bGF0b3JTdGF0ZS5rb21vZG9TaHVmZmxlLFxuICAgIG1hbmE6IGNhbGN1bGF0b3JTdGF0ZS5tYW5hLFxuICAgIHNlZWQ6IGNhbGN1bGF0b3JTdGF0ZS5zZWVkLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgICBsb2dzRW5hYmxlZDogZmFsc2UsXG4gICAgbWF4TG9nZ2VkQmF0dGxlczogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blJlcGxheU9kZHNGcm9tQ2FsY3VsYXRvclN0YXRlKFxuICBjYWxjdWxhdG9yU3RhdGU6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgc2ltdWxhdGlvbkNvdW50OiBudW1iZXIsXG4pOiBTaW11bGF0aW9uUmVzdWx0IHtcbiAgY29uc3QgY29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgY2FsY3VsYXRvclN0YXRlLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgKTtcbiAgcmV0dXJuIHJ1blNpbXVsYXRpb24oY29uZmlnKTtcbn1cblxuZXhwb3J0IHR5cGUgUmVwbGF5QW5hbHlzaXNQcmVjaXNpb24gPSAncXVpY2snIHwgJ3N0YW5kYXJkJyB8ICdoaWdoJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlQb3NpdGlvbmluZ09wdGlvbnMge1xuICBzaWRlOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblNpZGU7XG4gIHByZWNpc2lvbj86IFJlcGxheUFuYWx5c2lzUHJlY2lzaW9uO1xuICBzaW11bGF0aW9uQ291bnQ/OiBudW1iZXI7XG4gIHByb2plY3RFbmRUdXJuRWZmZWN0cz86IGJvb2xlYW47XG4gIHJlY29tcHV0ZVBhcnJvdENvcGllcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5UG9zaXRpb25pbmdSZXN1bHQge1xuICBwcmVjaXNpb246IFJlcGxheUFuYWx5c2lzUHJlY2lzaW9uO1xuICBzaW11bGF0aW9uQ291bnQ6IG51bWJlcjtcbiAgYmFzZWxpbmU6IFNpbXVsYXRpb25SZXN1bHQ7XG4gIG9wdGltaXplZDogU2ltdWxhdGlvblJlc3VsdDtcbiAgb3B0aW1pemF0aW9uOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblJlc3VsdDtcbiAgb3B0aW1pemVkQ2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5U3RyZW5ndGhSZXN1bHQge1xuICBwcmVjaXNpb246IEJvYXJkU3RyZW5ndGhQcmVjaXNpb247XG4gIHBsYXllcjogQm9hcmRTdHJlbmd0aFJlc3VsdDtcbiAgb3Bwb25lbnQ6IEJvYXJkU3RyZW5ndGhSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5U3RyZW5ndGhSYW5nZSB7XG4gIG1pblN0YXQ/OiBudW1iZXI7XG4gIG1heFN0YXQ/OiBudW1iZXI7XG59XG5cbmNvbnN0IFBPU0lUSU9OSU5HX1NJTVVMQVRJT05TOiBSZWFkb25seTxSZWNvcmQ8UmVwbGF5QW5hbHlzaXNQcmVjaXNpb24sIG51bWJlcj4+ID0ge1xuICBxdWljazogMTAwLFxuICBzdGFuZGFyZDogMjUwLFxuICBoaWdoOiA1MDAsXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVTaW11bGF0aW9uQ291bnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgxLCBNYXRoLnRydW5jKHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lUGV0TGluZXVwKFxuICBsaW5ldXA6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZVsncGxheWVyUGV0cyddLFxuKTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlWydwbGF5ZXJQZXRzJ10ge1xuICByZXR1cm4gKGxpbmV1cCA/PyBbXSkubWFwKChwZXQpID0+XG4gICAgcGV0XG4gICAgICA/IHtcbiAgICAgICAgICAuLi5wZXQsXG4gICAgICAgICAgZXF1aXBtZW50OiBwZXQuZXF1aXBtZW50ID8geyAuLi5wZXQuZXF1aXBtZW50IH0gOiBudWxsLFxuICAgICAgICB9XG4gICAgICA6IG51bGwsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SZXBsYXlQb3NpdGlvbmluZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gIGNhbGN1bGF0b3JTdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlLFxuICBvcHRpb25zOiBSZXBsYXlQb3NpdGlvbmluZ09wdGlvbnMsXG4pOiBSZXBsYXlQb3NpdGlvbmluZ1Jlc3VsdCB7XG4gIGNvbnN0IHByZWNpc2lvbiA9IG9wdGlvbnMucHJlY2lzaW9uID8/ICdxdWljayc7XG4gIGNvbnN0IHNpbXVsYXRpb25Db3VudCA9IG5vcm1hbGl6ZVNpbXVsYXRpb25Db3VudChcbiAgICBvcHRpb25zLnNpbXVsYXRpb25Db3VudCxcbiAgICBQT1NJVElPTklOR19TSU1VTEFUSU9OU1twcmVjaXNpb25dLFxuICApO1xuICBjb25zdCBiYXNlQ29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgY2FsY3VsYXRvclN0YXRlLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgKTtcbiAgY29uc3QgcnVubmVyID0gbmV3IENhbGN1bGF0b3JCYXR0bGVFbmdpbmUoKTtcbiAgY29uc3QgcHJvamVjdGlvblJ1bm5lciA9IG5ldyBDYWxjdWxhdG9yQmF0dGxlRW5naW5lKCk7XG4gIGNvbnN0IGJhc2VsaW5lID0gcnVubmVyLnJ1bihiYXNlQ29uZmlnKTtcbiAgY29uc3QgcHJvamVjdEVuZFR1cm5FZmZlY3RzID0gb3B0aW9ucy5wcm9qZWN0RW5kVHVybkVmZmVjdHMgIT09IGZhbHNlO1xuICBjb25zdCByZWNvbXB1dGVQYXJyb3RDb3BpZXMgPSBvcHRpb25zLnJlY29tcHV0ZVBhcnJvdENvcGllcyAhPT0gZmFsc2U7XG4gIGNvbnN0IG9wdGltaXphdGlvbiA9IHJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uKHtcbiAgICBiYXNlQ29uZmlnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHNpZGU6IG9wdGlvbnMuc2lkZSxcbiAgICAgIG1heFNpbXVsYXRpb25zUGVyUGVybXV0YXRpb246IHNpbXVsYXRpb25Db3VudCxcbiAgICAgIGJhdGNoU2l6ZTogTWF0aC5taW4oMjUsIHNpbXVsYXRpb25Db3VudCksXG4gICAgICBtaW5TYW1wbGVzQmVmb3JlRWxpbWluYXRpb246IE1hdGgubWluKDUwLCBzaW11bGF0aW9uQ291bnQpLFxuICAgICAgY29uZmlkZW5jZVo6IDEuOTYsXG4gICAgICBrZWVwU2FtZUJ1ZmZUYXJnZXRzOiAhcHJvamVjdEVuZFR1cm5FZmZlY3RzLFxuICAgICAgcmVjb21wdXRlUGFycm90Q29waWVzLFxuICAgIH0sXG4gICAgc2ltdWxhdGVCYXRjaDogKGNvbmZpZykgPT4gcnVubmVyLnJ1bihjb25maWcpLFxuICAgIHByb2plY3RFbmRUdXJuTGluZXVwOiBwcm9qZWN0RW5kVHVybkVmZmVjdHNcbiAgICAgID8gKHsgYmFzZUNvbmZpZzogcHJvamVjdGlvbkNvbmZpZywgc2lkZSwgbGluZXVwIH0pID0+XG4gICAgICAgICAgcHJvamVjdGlvblJ1bm5lci5wcm9qZWN0TGluZXVwQWZ0ZXJFbmRUdXJuKFxuICAgICAgICAgICAgcHJvamVjdGlvbkNvbmZpZyxcbiAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICBsaW5ldXAsXG4gICAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQsXG4gIH0pO1xuICBjb25zdCBvcHRpbWl6ZWRMaW5ldXAgPVxuICAgIG9wdGltaXphdGlvbi5iZXN0UGVybXV0YXRpb24uc2ltdWxhdGlvbkxpbmV1cC5sZW5ndGggPiAwXG4gICAgICA/IG9wdGltaXphdGlvbi5iZXN0UGVybXV0YXRpb24uc2ltdWxhdGlvbkxpbmV1cFxuICAgICAgOiBvcHRpbWl6YXRpb24uYmVzdFBlcm11dGF0aW9uLmxpbmV1cDtcbiAgY29uc3Qgb3B0aW1pemVkQ2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgPSB7XG4gICAgLi4uY2FsY3VsYXRvclN0YXRlLFxuICAgIHBsYXllclBldHM6IGNsb25lUGV0TGluZXVwKFxuICAgICAgb3B0aW1pemF0aW9uLnNpZGUgPT09ICdwbGF5ZXInXG4gICAgICAgID8gb3B0aW1pemVkTGluZXVwXG4gICAgICAgIDogY2FsY3VsYXRvclN0YXRlLnBsYXllclBldHMsXG4gICAgKSxcbiAgICBvcHBvbmVudFBldHM6IGNsb25lUGV0TGluZXVwKFxuICAgICAgb3B0aW1pemF0aW9uLnNpZGUgPT09ICdvcHBvbmVudCdcbiAgICAgICAgPyBvcHRpbWl6ZWRMaW5ldXBcbiAgICAgICAgOiBjYWxjdWxhdG9yU3RhdGUub3Bwb25lbnRQZXRzLFxuICAgICksXG4gIH07XG4gIGNvbnN0IG9wdGltaXplZCA9IHJ1bm5lci5ydW4oXG4gICAgY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgICBvcHRpbWl6ZWRDYWxjdWxhdG9yU3RhdGUsXG4gICAgICBzaW11bGF0aW9uQ291bnQsXG4gICAgKSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByZWNpc2lvbixcbiAgICBzaW11bGF0aW9uQ291bnQsXG4gICAgYmFzZWxpbmUsXG4gICAgb3B0aW1pemVkLFxuICAgIG9wdGltaXphdGlvbixcbiAgICBvcHRpbWl6ZWRDYWxjdWxhdG9yU3RhdGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SZXBsYXlTdHJlbmd0aEZyb21DYWxjdWxhdG9yU3RhdGUoXG4gIGNhbGN1bGF0b3JTdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlLFxuICBwcmVjaXNpb246IEJvYXJkU3RyZW5ndGhQcmVjaXNpb24gPSAncXVpY2snLFxuICByYW5nZTogUmVwbGF5U3RyZW5ndGhSYW5nZSA9IHt9LFxuKTogUmVwbGF5U3RyZW5ndGhSZXN1bHQge1xuICBjb25zdCBiYXNlQ29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoY2FsY3VsYXRvclN0YXRlLCAxKTtcbiAgY29uc3QgcnVubmVyID0gbmV3IENhbGN1bGF0b3JCYXR0bGVFbmdpbmUoKTtcbiAgY29uc3QgZXZhbHVhdGUgPSAoc2lkZTogJ3BsYXllcicgfCAnb3Bwb25lbnQnKTogQm9hcmRTdHJlbmd0aFJlc3VsdCA9PlxuICAgIHJ1bkJvYXJkU3RyZW5ndGhFdmFsdWF0aW9uKHtcbiAgICAgIGJhc2VDb25maWcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNpZGUsXG4gICAgICAgIHByZWNpc2lvbixcbiAgICAgICAgbWluU3RhdDogcmFuZ2UubWluU3RhdCxcbiAgICAgICAgbWF4U3RhdDogcmFuZ2UubWF4U3RhdCxcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUJhdGNoOiAoY29uZmlnKSA9PiBydW5uZXIucnVuKGNvbmZpZyksXG4gICAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcmVjaXNpb24sXG4gICAgcGxheWVyOiBldmFsdWF0ZSgncGxheWVyJyksXG4gICAgb3Bwb25lbnQ6IGV2YWx1YXRlKCdvcHBvbmVudCcpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYXlDYWxjdWxhdG9yTGluayhcbiAgY2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUsXG4gIGJhc2VVcmw/OiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgUmVwbGF5Q2FsY1BhcnNlcigpO1xuICBjb25zdCBub3JtYWxpemVkQmFzZVVybCA9IG5vcm1hbGl6ZUNhbGN1bGF0b3JCYXNlVXJsKGJhc2VVcmwpO1xuXG4gIGNvbnN0IGdsb2JhbFdpdGhXaW5kb3cgPSBnbG9iYWxUaGlzIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYge1xuICAgIHdpbmRvdz86IFdpbmRvdyAmIHR5cGVvZiBnbG9iYWxUaGlzO1xuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzV2luZG93ID0gZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3c7XG4gIGNvbnN0IGhhZFdpbmRvdyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnbG9iYWxXaXRoV2luZG93LCAnd2luZG93Jyk7XG5cbiAgZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3cgPSB7XG4gICAgbG9jYXRpb246IHtcbiAgICAgIG9yaWdpbjogbm9ybWFsaXplZEJhc2VVcmwub3JpZ2luLFxuICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZWRCYXNlVXJsLnBhdGhuYW1lLFxuICAgIH0sXG4gIH0gYXMgV2luZG93ICYgdHlwZW9mIGdsb2JhbFRoaXM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBoYXNoTGluayA9IHBhcnNlci5nZW5lcmF0ZUNhbGN1bGF0b3JMaW5rKGNhbGN1bGF0b3JTdGF0ZSk7XG4gICAgcmV0dXJuIGhhc2hMaW5rLnJlcGxhY2UoJyNjPScsICc/Yz0nKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoaGFkV2luZG93KSB7XG4gICAgICBnbG9iYWxXaXRoV2luZG93LndpbmRvdyA9IHByZXZpb3VzV2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3c7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4uL3NyYy9hcHAvZG9tYWluL2ludGVyZmFjZXMvc2ltdWxhdGlvbi1jb25maWcuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3JlcGxheS9yZXBsYXktY2FsYy1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9wb3NpdGlvbmluZy1vcHRpbWl6ZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9ib2FyZC1zdHJlbmd0aC1ldmFsdWF0b3InO1xuXG5cblxuXG5leHBvcnQgeyBjcmVhdGVCYXR0bGVFbmdpbmUsIGNhdGFsb2dzLCBvcHRpbWl6ZUZpZ2h0IH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuIiwgImltcG9ydCB7IGNyZWF0ZUJhdHRsZUVuZ2luZSwgQmF0dGxlRXZlbnQsIEJvYXJkU25hcHNob3QsIFBldFNuYXBzaG90LCBTaW11bGF0aW9uUnVuSG9va3MgfSBmcm9tICdzYXAtYmF0dGxlLWVuZ2luZSc7XG5pbXBvcnQgeyBTaW11bGF0aW9uQ29uZmlnLCBTaW11bGF0aW9uUmVzdWx0LCBQZXRDb25maWcgfSBmcm9tICdhcHAvZG9tYWluL2ludGVyZmFjZXMvc2ltdWxhdGlvbi1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IExvZyB9IGZyb20gJ2FwcC9kb21haW4vaW50ZXJmYWNlcy9sb2cuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ2FwcC9kb21haW4vZW50aXRpZXMvcGxheWVyLmNsYXNzJztcbmltcG9ydCB7IFBldCB9IGZyb20gJ2FwcC9kb21haW4vZW50aXRpZXMvcGV0LmNsYXNzJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2cuc2VydmljZSc7XG5pbXBvcnQgeyBidWlsZEJvYXJkU3RhdGVNZXNzYWdlIH0gZnJvbSAnLi4vbG9nL2xvZy1ib2FyZC1yZW5kZXInO1xuaW1wb3J0IHsgQUlMTUVOVF9DQVRFR09SSUVTIH0gZnJvbSAnLi4vZXF1aXBtZW50L2VxdWlwbWVudC1jYXRlZ29yaWVzJztcblxuY29uc3QgYWlsbWVudHMgPSBuZXcgU2V0KE9iamVjdC52YWx1ZXMoQUlMTUVOVF9DQVRFR09SSUVTKS5mbGF0KCkpO1xuZnVuY3Rpb24gZGlzcGxheVBldChzbmFwc2hvdDogUGV0U25hcHNob3QpOiBQZXQge1xuICBjb25zdCBwYXJlbnQgPSBuZXcgUGxheWVyKCk7XG4gIHBhcmVudC5pc09wcG9uZW50ID0gc25hcHNob3Quc2lkZSA9PT0gJ29wcG9uZW50JztcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFBldCgpLCBzbmFwc2hvdCwge1xuICAgIHBhcmVudCwgc2F2ZWRQb3NpdGlvbjogc25hcHNob3QucG9zaXRpb24gLSAxLFxuICAgIGVxdWlwbWVudDogc25hcHNob3QuZXF1aXBtZW50ID8geyBuYW1lOiBzbmFwc2hvdC5lcXVpcG1lbnQsIHVzZXM6IHNuYXBzaG90LmVxdWlwbWVudFVzZXMgfSA6IG51bGwsXG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkOiBCb2FyZFNuYXBzaG90LCBjb25maWc6IFNpbXVsYXRpb25Db25maWcpOiBzdHJpbmcge1xuICBjb25zdCBzaWRlcyA9IChbJ3BsYXllcicsICdvcHBvbmVudCddIGFzIGNvbnN0KS5tYXAoKHNpZGUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgcGxheWVyLmlzT3Bwb25lbnQgPSBzaWRlID09PSAnb3Bwb25lbnQnO1xuICAgIGJvYXJkW3NpZGVdLmZvckVhY2goKHBldCwgaW5kZXgpID0+IHBsYXllci5zZXRQZXQoaW5kZXgsIHBldCA/IGRpc3BsYXlQZXQocGV0KSA6IG51bGwpKTtcbiAgICBjb25zdCB0b3kgPSBzaWRlID09PSAncGxheWVyJyA/IGNvbmZpZy5wbGF5ZXJUb3kgOiBjb25maWcub3Bwb25lbnRUb3k7XG4gICAgY29uc3QgaGFyZFRveSA9IHNpZGUgPT09ICdwbGF5ZXInID8gY29uZmlnLnBsYXllckhhcmRUb3kgOiBjb25maWcub3Bwb25lbnRIYXJkVG95O1xuICAgIHBsYXllci50b3kgPSB0b3kgPyB7IG5hbWU6IHRveSwgbGV2ZWw6IDEgfSA6IG51bGw7XG4gICAgcGxheWVyLmhhcmRUb3kgPSBoYXJkVG95ID8geyBuYW1lOiBoYXJkVG95LCBsZXZlbDogMSB9IDogbnVsbDtcbiAgICByZXR1cm4gcGxheWVyO1xuICB9KTtcbiAgcmV0dXJuIGJ1aWxkQm9hcmRTdGF0ZU1lc3NhZ2Uoc2lkZXNbMF0sIHNpZGVzWzFdLCAocGV0KSA9PiBwZXQuc2F2ZWRQb3NpdGlvbiArIDEsIChuYW1lKSA9PiBhaWxtZW50cy5oYXMobmFtZSkpO1xufVxuXG4vKiogVGhlIG9ubHkgYnJpZGdlIGJldHdlZW4gYmF0dGxlIGV4ZWN1dGlvbiBhbmQgY2FsY3VsYXRvciBwcmVzZW50YXRpb24uICovXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckJhdHRsZUVuZ2luZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZW5naW5lID0gY3JlYXRlQmF0dGxlRW5naW5lKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nU2VydmljZSA9IG5ldyBMb2dTZXJ2aWNlKCk7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzPzogTG9nU2VydmljZSkge1xuICAgIHRoaXMubG9nU2VydmljZS5zZXRTaG93VHJpZ2dlck5hbWVzSW5Mb2dzKHNldHRpbmdzPy5pc1Nob3dUcmlnZ2VyTmFtZXNJbkxvZ3MoKSA/PyBmYWxzZSk7XG4gIH1cbiAgcnVuKGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZywgaG9va3M/OiBTaW11bGF0aW9uUnVuSG9va3MpOiBTaW11bGF0aW9uUmVzdWx0IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVuZ2luZS5ydW5TaW11bGF0aW9uKGNvbmZpZywgaG9va3MpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICAuLi4ocmVzdWx0LmJhdHRsZXMgPyB7IGJhdHRsZXM6IHJlc3VsdC5iYXR0bGVzLm1hcCgoYmF0dGxlKSA9PiAoe1xuICAgICAgICAuLi5iYXR0bGUsXG4gICAgICAgIGxvZ3M6IHRoaXMuZm9ybWF0RXZlbnRzKGJhdHRsZS5sb2dzLCBjb25maWcpLFxuICAgICAgfSkpIH0gOiB7fSksXG4gICAgfTtcbiAgfVxuICBwcm9qZWN0TGluZXVwQWZ0ZXJFbmRUdXJuKGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZywgc2lkZTogJ3BsYXllcicgfCAnb3Bwb25lbnQnLCBsaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdKTogKFBldENvbmZpZyB8IG51bGwpW10ge1xuICAgIHJldHVybiB0aGlzLmVuZ2luZS5wcm9qZWN0TGluZXVwQWZ0ZXJFbmRUdXJuKGNvbmZpZywgc2lkZSwgbGluZXVwKTtcbiAgfVxuICBwcml2YXRlIGZvcm1hdEV2ZW50cyhldmVudHM6IEJhdHRsZUV2ZW50W10sIGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZyk6IExvZ1tdIHtcbiAgICB0aGlzLmxvZ1NlcnZpY2UucmVzZXQoKTtcbiAgICB0aGlzLmxvZ1NlcnZpY2Uuc2V0RW5hYmxlZCh0cnVlKTtcbiAgICB0aGlzLmxvZ1NlcnZpY2Uuc2V0RGVmZXJEZWNvcmF0aW9ucyh0cnVlKTtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmNyZWF0ZUxvZyh7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICBtZXNzYWdlOiBldmVudC50eXBlID09PSAnYm9hcmQnICYmICFldmVudC5tZXNzYWdlID8gZGlzcGxheUJvYXJkKGV2ZW50LmJvYXJkLCBjb25maWcpIDogZXZlbnQubWVzc2FnZSxcbiAgICAgICAgcGxheWVySXNPcHBvbmVudDogZXZlbnQuc2lkZSA9PSBudWxsID8gdW5kZWZpbmVkIDogZXZlbnQuc2lkZSA9PT0gJ29wcG9uZW50JyxcbiAgICAgICAgdGFyZ2V0SXNPcHBvbmVudDogZXZlbnQudGFyZ2V0U2lkZSA9PSBudWxsID8gdW5kZWZpbmVkIDogZXZlbnQudGFyZ2V0U2lkZSA9PT0gJ29wcG9uZW50JyxcbiAgICAgICAgc291cmNlUGV0OiBldmVudC5zb3VyY2UgPyBkaXNwbGF5UGV0KGV2ZW50LnNvdXJjZSkgOiB1bmRlZmluZWQsXG4gICAgICAgIHRhcmdldFBldDogZXZlbnQudGFyZ2V0ID8gZGlzcGxheVBldChldmVudC50YXJnZXQpIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBLZWVwIHNuYXBzaG90IGV2ZW50cyBzZXBhcmF0ZSBzbyB0aGVpciBpZGVudGl0aWVzIGFuZCBib2FyZCBzdGF0ZXMgcmVtYWluIG1lYW5pbmdmdWwuXG4gICAgICAgIG5vQ29sbGFwc2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubG9nU2VydmljZS5nZXRMb2dzKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBQZXQgfSBmcm9tICcuL3BldC5jbGFzcyc7XG5pbXBvcnQgeyBUb3kgfSBmcm9tICcuL3RveS5jbGFzcyc7XG5cbi8qKiBNdXRhYmxlIGJvYXJkLWVkaXRvciBzdGF0ZS4gQmF0dGxlcyBvcGVyYXRlIG9uIHNlcmlhbGl6ZWQgY29uZmlncyBpbiBzYXAtYmF0dGxlLWVuZ2luZS4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBvcHBvbmVudD86IFBsYXllcjtcbiAgcGV0MD86IFBldDsgcGV0MT86IFBldDsgcGV0Mj86IFBldDsgcGV0Mz86IFBldDsgcGV0ND86IFBldDtcbiAgcGFjazogc3RyaW5nID0gJ1R1cnRsZSc7XG4gIHRveTogVG95IHwgbnVsbCA9IG51bGw7XG4gIGhhcmRUb3k6IFRveSB8IG51bGwgPSBudWxsO1xuICBvcmlnaW5hbFRveTogVG95IHwgbnVsbCA9IG51bGw7XG4gIGlzT3Bwb25lbnQgPSBmYWxzZTtcbiAgYWxsUGV0cyA9IGZhbHNlO1xuICB0b2tlblBldHMgPSBmYWxzZTtcbiAgZ2V0UGV0KGluZGV4OiBudW1iZXIpOiBQZXQgfCBudWxsIHtcbiAgICByZXR1cm4gW3RoaXMucGV0MCwgdGhpcy5wZXQxLCB0aGlzLnBldDIsIHRoaXMucGV0MywgdGhpcy5wZXQ0XVtpbmRleF0gPz8gbnVsbDtcbiAgfVxuICBzZXRQZXQoaW5kZXg6IG51bWJlciwgcGV0OiBQZXQgfCBudWxsLCBfaW5pdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOiB0aGlzLnBldDAgPSBwZXQ7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLnBldDEgPSBwZXQ7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLnBldDIgPSBwZXQ7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLnBldDMgPSBwZXQ7IGJyZWFrO1xuICAgICAgY2FzZSA0OiB0aGlzLnBldDQgPSBwZXQ7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGV0KSB7IHBldC5wYXJlbnQgPSB0aGlzOyBwZXQuc2F2ZWRQb3NpdGlvbiA9IGluZGV4OyB9XG4gIH1cbiAgZ2V0IHBldEFycmF5KCk6IFBldFtdIHtcbiAgICByZXR1cm4gW3RoaXMucGV0MCwgdGhpcy5wZXQxLCB0aGlzLnBldDIsIHRoaXMucGV0MywgdGhpcy5wZXQ0XS5maWx0ZXIoKHBldCk6IHBldCBpcyBQZXQgPT4gcGV0ICE9IG51bGwpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuY2xhc3MnO1xuaW1wb3J0IHsgRXF1aXBtZW50IH0gZnJvbSAnLi9lcXVpcG1lbnQuY2xhc3MnO1xuaW1wb3J0IHsgUGV0TWVtb3J5U3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BldC1tZW1vcnkuaW50ZXJmYWNlJztcblxuLyoqIERpc3BsYXkgYW5kIGZvcm0gc3RhdGUgb25seTsgbm8gYmF0dGxlIGFiaWxpdGllcyBvciBtdXRhYmxlIGNvbWJhdCBydW50aW1lLiAqL1xuLy8gVGhlIGludGVyZmFjZSBhZGRzIG9ubHkgb3B0aW9uYWwgZm9ybS1tZW1vcnkgZmllbGRzIHRvIHRoaXMgZGF0YSBtb2RlbC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWRlY2xhcmF0aW9uLW1lcmdpbmdcbmV4cG9ydCBjbGFzcyBQZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpZXI6IG51bWJlcjtcbiAgcGFyZW50OiBQbGF5ZXI7XG4gIGF0dGFjazogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZXhwID0gMDtcbiAgbWFuYSA9IDA7XG4gIGVxdWlwbWVudDogRXF1aXBtZW50IHwgbnVsbCA9IG51bGw7XG4gIGVxdWlwbWVudFVzZXNPdmVycmlkZT86IG51bWJlciB8IG51bGw7XG4gIHBsYWluQ29weSA9IGZhbHNlO1xuICB0cmlnZ2Vyc0NvbnN1bWVkID0gMDtcbiAgZm9vZHNFYXRlbiA9IDA7XG4gIHRpbWVzR2F2ZUhlYWx0aCA9IDA7XG4gIGJhdHRsZXNGb3VnaHQgPSAwO1xuICB0aW1lc0h1cnQgPSAwO1xuICBmcmllbmRzRGllZEJlZm9yZUJhdHRsZSA9IDA7XG4gIGZyaWVuZHNIdXJ0QmVmb3JlQmF0dGxlID0gMDtcbiAgYWlsbWVudHNDb3VudCA9IDA7XG4gIHNhdmVkUG9zaXRpb24gPSAwO1xuICBnZXQgbGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZXhwID49IDUgPyAzIDogdGhpcy5leHAgPj0gMiA/IDIgOiAxOyB9XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1kZWNsYXJhdGlvbi1tZXJnaW5nLCBuby1yZWRlY2xhcmVcbmV4cG9ydCBpbnRlcmZhY2UgUGV0IGV4dGVuZHMgUGV0TWVtb3J5U3RhdGUge31cbiIsICIvLyBNb2NrIEFuZ3VsYXIgRGVjb3JhdG9yc1xuZXhwb3J0IGZ1bmN0aW9uIEluamVjdGFibGUoX2FyZ3M/OiBhbnkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQoYXJnczogYW55KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHt9O1xufVxuXG5leHBvcnQgY2xhc3MgSW5qZWN0b3Ige31cblxuLy8gTW9jayBBbmd1bGFyIEZvcm1zXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb250cm9sIHtcbiAgdmFsdWU6IGFueTtcbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQocGF0aDogc3RyaW5nIHwgKHN0cmluZyB8IG51bWJlcilbXSk6IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIF92YWxpZGF0b3JPck9wdHM/OiBhbnkpIHtcbiAgICBzdXBlcih2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4gIGNvbnRyb2xzOiB7IFtrZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbCB9O1xuICBjb25zdHJ1Y3Rvcihjb250cm9sczogeyBba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2wgfSkge1xuICAgIHN1cGVyKGNvbnRyb2xzKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gIH1cbiAgb3ZlcnJpZGUgZ2V0KHBhdGg6IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW3BhdGhdIHx8IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1BcnJheSBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4gIGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXTtcbiAgY29uc3RydWN0b3IoY29udHJvbHM6IEFic3RyYWN0Q29udHJvbFtdKSB7XG4gICAgc3VwZXIoY29udHJvbHMpO1xuICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgfVxuICBvdmVycmlkZSBnZXQoaW5kZXg6IGFueSk6IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF0gfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcmVxdWlyZWQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbkVycm9ycyA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufSB8IG51bGw7XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gVmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG4iLCAiaW1wb3J0IHsgY2F0YWxvZ3MgfSBmcm9tICdzYXAtYmF0dGxlLWVuZ2luZSc7XG4vLyBDb25zdW1lcnMgcmVjZWl2ZSBtdXRhYmxlIG1ldGFkYXRhIGNvcGllcyBmb3IgZXhpc3RpbmcgZm9ybSBhbmQgcGFyc2VyIEFQSXMuXG50eXBlIE11dGFibGU8VD4gPSBUIGV4dGVuZHMgb2JqZWN0ID8geyAtcmVhZG9ubHkgW0sgaW4ga2V5b2YgVF06IE11dGFibGU8VFtLXT4gfSA6IFQ7XG5leHBvcnQgY29uc3QgcGV0cyA9IHN0cnVjdHVyZWRDbG9uZShjYXRhbG9ncy5wZXRzKSBhcyBNdXRhYmxlPHR5cGVvZiBjYXRhbG9ncy5wZXRzPjtcbmV4cG9ydCBjb25zdCB0b3lzID0gc3RydWN0dXJlZENsb25lKGNhdGFsb2dzLnRveXMpIGFzIE11dGFibGU8dHlwZW9mIGNhdGFsb2dzLnRveXM+O1xuZXhwb3J0IGNvbnN0IGZvb2QgPSBzdHJ1Y3R1cmVkQ2xvbmUoY2F0YWxvZ3MuZm9vZCkgYXMgTXV0YWJsZTx0eXBlb2YgY2F0YWxvZ3MuZm9vZD47XG5leHBvcnQgY29uc3QgcGVya3MgPSBzdHJ1Y3R1cmVkQ2xvbmUoY2F0YWxvZ3MucGVya3MpIGFzIE11dGFibGU8dHlwZW9mIGNhdGFsb2dzLnBlcmtzPjtcbiIsICJpbXBvcnQgeyBwZXRzIGFzIHBldHNKc29uIH0gZnJvbSAnYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncyc7XG5pbXBvcnQgeyB0b3lzIGFzIHRveXNKc29uIH0gZnJvbSAnYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncyc7XG5pbXBvcnQgeyBwZXJrcyBhcyBwZXJrc0pzb24gfSBmcm9tICdhcHAvcnVudGltZS9jb250ZW50LWNhdGFsb2dzJztcblxuaW50ZXJmYWNlIE5hbWVJZEVudHJ5IHtcbiAgTmFtZT86IHN0cmluZztcbiAgTmFtZUlkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQWJpbGl0eUVudHJ5IHtcbiAgTGV2ZWw/OiBudW1iZXI7XG4gIEFib3V0Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUGV0QWJpbGl0eUVudHJ5IGV4dGVuZHMgTmFtZUlkRW50cnkge1xuICBBYmlsaXRpZXM/OiBBYmlsaXR5RW50cnlbXTtcbiAgUGVya05vdGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUb3lBYmlsaXR5RW50cnkgZXh0ZW5kcyBOYW1lSWRFbnRyeSB7XG4gIEFiaWxpdGllcz86IEFiaWxpdHlFbnRyeVtdO1xufVxuXG5pbnRlcmZhY2UgRXF1aXBtZW50QWJpbGl0eUVudHJ5IGV4dGVuZHMgTmFtZUlkRW50cnkge1xuICBBYmlsaXR5Pzogc3RyaW5nO1xufVxuXG5jb25zdCBnZXROYW1lTGlzdCA9IChlbnRyaWVzOiBOYW1lSWRFbnRyeVtdKTogc3RyaW5nW10gPT5cbiAgZW50cmllc1xuICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeT8uTmFtZSlcbiAgICAuZmlsdGVyKChuYW1lKTogbmFtZSBpcyBzdHJpbmcgPT4gQm9vbGVhbihuYW1lKSk7XG5cbmNvbnN0IHBldE5hbWVPdmVycmlkZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICdCZWx1Z2EgV2hhbGUnOiAnV2hpdGVXaGFsZScsXG4gICdHcmVhdCBPbmUnOiAnQ3RodWx1JyxcbiAgJ1NtYWxsIE9uZSc6ICdCYWJ5Q3RodWxodScsXG4gIEFib21pbmF0aW9uOiAnU2hvZ2dvdGgnLFxuICBWaXNpdG9yOiAnWGVub21vcnBoJyxcbiAgU3dvcmRmaXNoOiAnU3dvcmRGaXNoJyxcbiAgRG9iZXJtYW46ICdEb2Jlcm1hbkRvZycsXG4gICdIaWdobGFuZCBDb3cnOiAnSGlnaGxhbmRDb3cnLFxuICAnU2FiZXJ0b290aCBUaWdlcic6ICdTYWJlclRvb3RoVGlnZXInLFxuICAnTW9ieSBEaWNrJzogJ01vY2hhRGljaycsXG4gICdDaGltZXJhIEdvYXQnOiAnQ2hpbWVyYUdvYXQnLFxuICAnQ2hpbWVyYSBMaW9uJzogJ0NoaW1lcmFMaW9uJyxcbiAgJ0NoaW1lcmEgU25ha2UnOiAnQ2hpbWVyYVNuYWtlJyxcbiAgQ3JhY2tlZEVnZzogJ0VnZ0xhZENyYWNrZWQnLFxuICAnRmFrZSBOZXNzaWUnOiAnRmFrZU5lc3NpZScsXG4gICdUYW5kIGFuZCBUYW5kJzogJ1Rob3JHb2F0cycsXG59O1xuXG5leHBvcnQgY29uc3QgcGVya05hbWVPdmVycmlkZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIENvcm5jb2I6ICdDb3JuJyxcbiAgJ0Nha2UgU2xpY2UnOiAnQmlydGhkYXlDYWtlU2xpY2UnLFxuICAnUGVhbnV0IEJ1dHRlcic6ICdQZWFudXRCdXR0ZXInLFxuICAnTWFuYSBQb3Rpb24nOiAnTWFuYVBvdGlvbicsXG4gICdGYWludCBCcmVhZCc6ICdEZWFkQnJlYWQnLFxuICBLaXdpZnJ1aXQ6ICdLaXdpJyxcbiAgRWdncGxhbnQ6ICdFZ2dQbGFudCcsXG4gIFJpY2U6ICdSaWNlQmFsbCcsXG4gIERvbnV0OiAnRG91Z2hudXQnLFxuICBDaGVycnk6ICdDaGVycmllcycsXG4gICdNZWxvbiBTbGljZSc6ICdXYXRlck1lbG9uJyxcbiAgQ29sZDogJ0Zyb3plbicsXG4gIENyaXNwOiAnQnVybicsXG4gIERhemVkOiAnRGVhZicsXG4gIElja3k6ICdBY2lkJyxcbiAgSW5rZWQ6ICdJbmsnLFxuICBTcG9va2VkOiAnU2NhcmVkJyxcbiAgU2xlZXB5OiAnRHJvd3N5JyxcbiAgV2ViYmVkOiAnV2ViJyxcbiAgQ3Vyc2VkOiAnQ3Vyc2UnLFxuICBTaWxseTogJ1NpbGx5JyxcbiAgQmxvYXRlZDogJ0Jsb2F0ZWQnLFxufTtcbmNvbnN0IHBlcmtOYW1lT3ZlcnJpZGVzTG93ZXIgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIE9iamVjdC5lbnRyaWVzKHBlcmtOYW1lT3ZlcnJpZGVzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW1xuICAgIGtleS50b0xvd2VyQ2FzZSgpLFxuICAgIHZhbHVlLFxuICBdKSxcbik7XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKTtcbn07XG5cbmNvbnN0IGJ1aWxkTmFtZUlkTWFwID0gKGVudHJpZXM6IE5hbWVJZEVudHJ5W10pOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgaWYgKGVudHJ5Py5OYW1lICYmIGVudHJ5Py5OYW1lSWQpIHtcbiAgICAgIG1hcC5zZXQoZW50cnkuTmFtZSwgZW50cnkuTmFtZUlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn07XG5cbmNvbnN0IGZvcm1hdEFiaWxpdHlUZXh0ID0gKFxuICBhYmlsaXRpZXM/OiBBYmlsaXR5RW50cnlbXSxcbiAgcGVya05vdGU/OiBzdHJpbmcsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgY29uc3QgaXNOb0FiaWxpdHlUZXh0ID0gKHRleHQ/OiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgIXRleHQgfHwgL15ubyBhYmlsaXR5XFwuPyQvaS50ZXN0KHRleHQudHJpbSgpKTtcblxuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYWJpbGl0aWVzKSkge1xuICAgIGZvciAoY29uc3QgYWJpbGl0eSBvZiBhYmlsaXRpZXMpIHtcbiAgICAgIGlmICghYWJpbGl0eT8uQWJvdXQgfHwgaXNOb0FiaWxpdHlUZXh0KGFiaWxpdHkuQWJvdXQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFiaWxpdHkuTGV2ZWwgIT0gbnVsbCkge1xuICAgICAgICBsaW5lcy5wdXNoKGBMdiR7YWJpbGl0eS5MZXZlbH06ICR7YWJpbGl0eS5BYm91dH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVzLnB1c2goYWJpbGl0eS5BYm91dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChwZXJrTm90ZSkge1xuICAgIGxpbmVzLnB1c2gocGVya05vdGUpO1xuICB9XG4gIHJldHVybiBsaW5lcy5sZW5ndGggPyBsaW5lcy5qb2luKCdcXG4nKSA6IG51bGw7XG59O1xuXG5jb25zdCBwZXROYW1lSWRzID0gYnVpbGROYW1lSWRNYXAoXG4gIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IE5hbWVJZEVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAgIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIE5hbWVJZEVudHJ5W10pID8/XG4gICAgW10sXG4pO1xuY29uc3QgcGV0SWRCeU5hbWUgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuY29uc3QgcGV0SWRFbnRyaWVzID1cbiAgKHBldHNKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogQXJyYXk8TmFtZUlkRW50cnkgJiB7IElkPzogc3RyaW5nIH0+IH0pXG4gICAgLmRlZmF1bHQgPz9cbiAgKHBldHNKc29uIGFzIHVua25vd24gYXMgQXJyYXk8TmFtZUlkRW50cnkgJiB7IElkPzogc3RyaW5nIH0+KSA/P1xuICBbXTtcbmZvciAoY29uc3QgZW50cnkgb2YgcGV0SWRFbnRyaWVzKSB7XG4gIGlmICghZW50cnk/Lk5hbWUgfHwgIWVudHJ5Py5JZCkge1xuICAgIGNvbnRpbnVlO1xuICB9XG4gIHBldElkQnlOYW1lLnNldChlbnRyeS5OYW1lLCBlbnRyeS5JZCk7XG59XG5jb25zdCBwZXRBYmlsaXR5TWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbmNvbnN0IHBldEFiaWxpdHlFbnRyaWVzID1cbiAgKHBldHNKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogUGV0QWJpbGl0eUVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAocGV0c0pzb24gYXMgdW5rbm93biBhcyBQZXRBYmlsaXR5RW50cnlbXSkgPz9cbiAgW107XG5mb3IgKGNvbnN0IGVudHJ5IG9mIHBldEFiaWxpdHlFbnRyaWVzKSB7XG4gIGlmICghZW50cnk/Lk5hbWUpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuICBjb25zdCBhYmlsaXR5VGV4dCA9IGZvcm1hdEFiaWxpdHlUZXh0KGVudHJ5LkFiaWxpdGllcywgZW50cnkuUGVya05vdGUpO1xuICBpZiAoYWJpbGl0eVRleHQpIHtcbiAgICBwZXRBYmlsaXR5TWFwLnNldChlbnRyeS5OYW1lLCBhYmlsaXR5VGV4dCk7XG4gIH1cbn1cbmNvbnN0IHBldE5hbWVzID0gZ2V0TmFtZUxpc3QoXG4gIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IE5hbWVJZEVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAgIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIE5hbWVJZEVudHJ5W10pID8/XG4gICAgW10sXG4pO1xuY29uc3QgdG95TmFtZUlkcyA9IGJ1aWxkTmFtZUlkTWFwKFxuICAodG95c0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBOYW1lSWRFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgICAodG95c0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcbmNvbnN0IHRveUFiaWxpdHlNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuY29uc3QgdG95QWJpbGl0eUVudHJpZXMgPVxuICAodG95c0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBUb3lBYmlsaXR5RW50cnlbXSB9KS5kZWZhdWx0ID8/XG4gICh0b3lzSnNvbiBhcyB1bmtub3duIGFzIFRveUFiaWxpdHlFbnRyeVtdKSA/P1xuICBbXTtcbmZvciAoY29uc3QgZW50cnkgb2YgdG95QWJpbGl0eUVudHJpZXMpIHtcbiAgaWYgKCFlbnRyeT8uTmFtZSkge1xuICAgIGNvbnRpbnVlO1xuICB9XG4gIGNvbnN0IGFiaWxpdHlUZXh0ID0gZm9ybWF0QWJpbGl0eVRleHQoZW50cnkuQWJpbGl0aWVzKTtcbiAgaWYgKGFiaWxpdHlUZXh0KSB7XG4gICAgdG95QWJpbGl0eU1hcC5zZXQoZW50cnkuTmFtZSwgYWJpbGl0eVRleHQpO1xuICB9XG59XG5jb25zdCB0b3lOYW1lcyA9IGdldE5hbWVMaXN0KFxuICAodG95c0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBOYW1lSWRFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgICAodG95c0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcbmNvbnN0IGVxdWlwbWVudE5hbWVJZHMgPSBidWlsZE5hbWVJZE1hcChcbiAgKHBlcmtzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IE5hbWVJZEVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAgIChwZXJrc0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcbmNvbnN0IGVxdWlwbWVudE5hbWVJZHNMb3dlciA9IG5ldyBNYXAoXG4gIEFycmF5LmZyb20oZXF1aXBtZW50TmFtZUlkcy5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBbXG4gICAga2V5LnRvTG93ZXJDYXNlKCksXG4gICAgdmFsdWUsXG4gIF0pLFxuKTtcbmNvbnN0IGVxdWlwbWVudE5hbWVJZHNOb3JtYWxpemVkID0gbmV3IE1hcChcbiAgQXJyYXkuZnJvbShlcXVpcG1lbnROYW1lSWRzLmVudHJpZXMoKSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtcbiAgICBub3JtYWxpemUoa2V5KSxcbiAgICB2YWx1ZSxcbiAgXSksXG4pO1xuY29uc3QgZXF1aXBtZW50QWJpbGl0eU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5jb25zdCBlcXVpcG1lbnRBYmlsaXR5RW50cmllcyA9XG4gIChwZXJrc0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBFcXVpcG1lbnRBYmlsaXR5RW50cnlbXSB9KS5kZWZhdWx0ID8/XG4gIChwZXJrc0pzb24gYXMgdW5rbm93biBhcyBFcXVpcG1lbnRBYmlsaXR5RW50cnlbXSkgPz9cbiAgW107XG5mb3IgKGNvbnN0IGVudHJ5IG9mIGVxdWlwbWVudEFiaWxpdHlFbnRyaWVzKSB7XG4gIGlmICghZW50cnk/Lk5hbWUpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuICBpZiAoZW50cnkuQWJpbGl0eSkge1xuICAgIGVxdWlwbWVudEFiaWxpdHlNYXAuc2V0KGVudHJ5Lk5hbWUsIGVudHJ5LkFiaWxpdHkpO1xuICB9XG59XG5jb25zdCBlcXVpcG1lbnROYW1lcyA9IGdldE5hbWVMaXN0KFxuICAocGVya3NKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogTmFtZUlkRW50cnlbXSB9KS5kZWZhdWx0ID8/XG4gICAgKHBlcmtzSnNvbiBhcyB1bmtub3duIGFzIE5hbWVJZEVudHJ5W10pID8/XG4gICAgW10sXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Bc3NldEZpbGVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBub3JtYWxpemUobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXRJY29uRmlsZU5hbWUocGV0TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXBldE5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBuYW1lSWQgPSBwZXROYW1lSWRzLmdldChwZXROYW1lKTtcbiAgaWYgKG5hbWVJZCkge1xuICAgIHJldHVybiBuYW1lSWQ7XG4gIH1cbiAgY29uc3QgbWFwcGVkID0gcGV0TmFtZU92ZXJyaWRlc1twZXROYW1lXTtcbiAgaWYgKG1hcHBlZCkge1xuICAgIHJldHVybiBtYXBwZWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXRJY29uUGF0aChwZXROYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGZpbGVOYW1lID0gZ2V0UGV0SWNvbkZpbGVOYW1lKHBldE5hbWUpO1xuICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGBhc3NldHMvYXJ0L1B1YmxpYy9QdWJsaWMvUGV0cy8ke2ZpbGVOYW1lfS5wbmdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGV0QWJpbGl0eVRleHQocGV0TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXBldE5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGV0QWJpbGl0eU1hcC5nZXQocGV0TmFtZSkgPz8gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBldFNvdW5kTG9va3VwSW5mbyhcbiAgcGV0TmFtZT86IHN0cmluZyxcbik6IHsgbmFtZUlkOiBzdHJpbmcgfCBudWxsOyBwZXRJZDogc3RyaW5nIHwgbnVsbCB9IHwgbnVsbCB7XG4gIGlmICghcGV0TmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZUlkOiBwZXROYW1lSWRzLmdldChwZXROYW1lKSA/PyBudWxsLFxuICAgIHBldElkOiBwZXRJZEJ5TmFtZS5nZXQocGV0TmFtZSkgPz8gbnVsbCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBldE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFsuLi5wZXROYW1lc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3lJY29uUGF0aCh0b3lOYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghdG95TmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG5hbWVJZCA9IHRveU5hbWVJZHMuZ2V0KHRveU5hbWUpO1xuICBjb25zdCBmaWxlTmFtZSA9IG5hbWVJZCA/PyBub3JtYWxpemUodG95TmFtZSk7XG4gIGlmICghZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gYGFzc2V0cy9hcnQvUHVibGljL1B1YmxpYy9Ub3lzLyR7ZmlsZU5hbWV9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3lBYmlsaXR5VGV4dCh0b3lOYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghdG95TmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB0b3lBYmlsaXR5TWFwLmdldCh0b3lOYW1lKSA/PyBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVG95TmFtZXMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gWy4uLnRveU5hbWVzXTtcbn1cblxuY29uc3QgZ2V0RXF1aXBtZW50RmlsZU5hbWUgPSAoZXF1aXBtZW50TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoIWVxdWlwbWVudE5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplKGVxdWlwbWVudE5hbWUpO1xuICBjb25zdCBuYW1lSWQgPVxuICAgIGVxdWlwbWVudE5hbWVJZHMuZ2V0KGVxdWlwbWVudE5hbWUpID8/XG4gICAgZXF1aXBtZW50TmFtZUlkc0xvd2VyLmdldChlcXVpcG1lbnROYW1lLnRvTG93ZXJDYXNlKCkpID8/XG4gICAgZXF1aXBtZW50TmFtZUlkc05vcm1hbGl6ZWQuZ2V0KG5vcm1hbGl6ZWQpO1xuICBjb25zdCBvdmVycmlkZSA9XG4gICAgcGVya05hbWVPdmVycmlkZXNbZXF1aXBtZW50TmFtZV0gPz9cbiAgICBwZXJrTmFtZU92ZXJyaWRlc0xvd2VyW2VxdWlwbWVudE5hbWUudG9Mb3dlckNhc2UoKV07XG4gIGNvbnN0IGZpbGVOYW1lID0gbmFtZUlkID8/IG92ZXJyaWRlID8/IG5vcm1hbGl6ZWQ7XG4gIHJldHVybiBmaWxlTmFtZSB8fCBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVxdWlwbWVudEljb25QYXRoKFxuICBlcXVpcG1lbnROYW1lPzogc3RyaW5nLFxuICBpc0FpbG1lbnQgPSBmYWxzZSxcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBmaWxlTmFtZSA9IGdldEVxdWlwbWVudEZpbGVOYW1lKGVxdWlwbWVudE5hbWUpO1xuICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGlzQWlsbWVudCkge1xuICAgIHJldHVybiBgYXNzZXRzL2FydC9BaWxtZW50cy9BaWxtZW50cy8ke2ZpbGVOYW1lfS5wbmdgO1xuICB9XG4gIHJldHVybiBgYXNzZXRzL2FydC9QdWJsaWMvUHVibGljL0Zvb2QvJHtmaWxlTmFtZX0ucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVxdWlwbWVudEFiaWxpdHlUZXh0KGVxdWlwbWVudE5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFlcXVpcG1lbnROYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGVxdWlwbWVudEFiaWxpdHlNYXAuZ2V0KGVxdWlwbWVudE5hbWUpID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxFcXVpcG1lbnROYW1lcygpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbLi4uZXF1aXBtZW50TmFtZXNdO1xufVxuXG5jb25zdCBwYWNrTmFtZVRvUGV0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBUdXJ0bGU6ICdUdXJ0bGUnLFxuICBHb2xkZW46ICdHb2xkZW4gUmV0cmlldmVyJyxcbiAgUHVwcHk6ICdQdXBweScsXG4gIFN0YXI6ICdTdGFyZmlzaCcsXG4gIFVuaWNvcm46ICdVbmljb3JuJyxcbiAgRGFuZ2VyOiAnQmx1ZSBXaGFsZScsXG4gIEN1c3RvbTogJ1doaXRlIFRpZ2VyJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrSWNvblBhdGgocGFja05hbWU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFwYWNrTmFtZSB8fCBwYWNrTmFtZSA9PT0gJ0FkZCBDdXN0b20gUGFjaycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBwZXROYW1lID0gcGFja05hbWVUb1BldE1hcFtwYWNrTmFtZV07XG4gIGlmIChwZXROYW1lKSB7XG4gICAgcmV0dXJuIGdldFBldEljb25QYXRoKHBldE5hbWUpO1xuICB9XG4gIC8vIEZvciBjdXN0b20gcGFja3MgKHVzZXItY3JlYXRlZCksIHVzZSBXaGl0ZSBUaWdlciBhcyBkZWZhdWx0XG4gIHJldHVybiBnZXRQZXRJY29uUGF0aCgnV2hpdGUgVGlnZXInKTtcbn1cbiIsICJleHBvcnQgY29uc3QgRVFVSVBNRU5UX0NBVEVHT1JJRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgVHVydGxlOiBbXG4gICAgJ0JyZWFkJyxcbiAgICAnQ2FrZScsXG4gICAgJ0NoaWxpJyxcbiAgICAnQ29jb251dCcsXG4gICAgJ0dhcmxpYycsXG4gICAgJ0hvbmV5JyxcbiAgICAnTWVhdCBCb25lJyxcbiAgICAnTWVsb24nLFxuICAgICdNdXNocm9vbScsXG4gICAgJ1BlYW51dCcsXG4gICAgJ1N0ZWFrJyxcbiAgXSxcbiAgUHVwcHk6IFtcbiAgICAnQmxhY2tiZXJyeScsXG4gICAgJ0Nyb2lzc2FudCcsXG4gICAgJ0VnZycsXG4gICAgJ0V1Y2FseXB0dXMnLFxuICAgICdMZW1vbicsXG4gICAgJ0xpbWUnLFxuICAgICdNaWxkIENoaWxpJyxcbiAgICAnUGFuY2FrZXMnLFxuICAgICdQaWUnLFxuICAgICdSaWNlJyxcbiAgICAnU2FsdCcsXG4gICAgJ1NrZXdlcicsXG4gICAgJ1NxdWFzaCcsXG4gICAgJ1dhbG51dCcsXG4gIF0sXG4gIFN0YXI6IFtcbiAgICAnQmFndWV0dGUnLFxuICAgICdDYXJhbWVsJyxcbiAgICAnQ2Fycm90JyxcbiAgICAnQ2hlZXNlJyxcbiAgICAnQ3VjdW1iZXInLFxuICAgICdHcmFwZXMnLFxuICAgICdQZXBwZXInLFxuICAgICdQb3Bjb3JuJyxcbiAgICAnU2Vhd2VlZCcsXG4gICAgJ1N0cmF3YmVycnknLFxuICBdLFxuICBHb2xkZW46IFtcbiAgICAnQmFuYW5hJyxcbiAgICAnQm9rIENob3knLFxuICAgICdDaGVycnknLFxuICAgICdDaG9jb2xhdGUgQ2FrZScsXG4gICAgJ0R1cmlhbicsXG4gICAgJ0VnZ3BsYW50JyxcbiAgICAnRmlnJyxcbiAgICAnSG9uZXlkZXcgTWVsb24nLFxuICAgICdNYXBsZSBTeXJ1cCcsXG4gICAgJ09uaW9uJyxcbiAgICAnUGl0YSBCcmVhZCcsXG4gICAgJ1BvdGF0bycsXG4gICAgJ1RvbWF0bycsXG4gIF0sXG4gIFVuaWNvcm46IFtcbiAgICAnQW1icm9zaWEnLFxuICAgICdFYXN0ZXIgRWdnJyxcbiAgICAnRmFpbnQgQnJlYWQnLFxuICAgICdGYWlyeSBEdXN0JyxcbiAgICAnR2luZ2VyYnJlYWQgTWFuJyxcbiAgICAnR29sZGVuIEVnZycsXG4gICAgJ0hlYWx0aCBQb3Rpb24nLFxuICAgICdMb3ZlIFBvdGlvbicsXG4gICAgJ01hZ2ljIEJlYW5zJyxcbiAgICAnUmFtYnV0YW4nLFxuICAgICdZZ2dkcmFzaWwgRnJ1aXQnLFxuICBdLFxuICBEYW5nZXI6IFtcbiAgICAnQ29jb2EgQmVhbicsXG4gICAgJ0NvZCBSb2UnLFxuICAgICdHcm9zIE1pY2hlbCBCYW5hbmEnLFxuICAgICdHZWVjaGVlIFJlZCBQZWEnLFxuICAgICdTdWRkdXRoIFRvbWF0bycsXG4gICAgJ1doaXRlIE9rcmEnLFxuICAgICdXaGl0ZSBUcnVmZmxlJyxcbiAgXSxcbiAgQ3VzdG9tOiBbXG4gICAgJ0JsdWViZXJyeScsXG4gICAgJ0JydXNzZWxzIFNwcm91dCcsXG4gICAgJ0Nhc2hldyBOdXQnLFxuICAgICdDYXVsaWZsb3dlcicsXG4gICAgJ0NodXJyb3MnLFxuICAgICdEb251dCcsXG4gICAgJ0ZvcnR1bmUgQ29va2llJyxcbiAgICAnR3VhdmEnLFxuICAgICdLaXdhbm8nLFxuICAgICdLaXdpZnJ1aXQnLFxuICAgICdNYWNhcm9uJyxcbiAgICAnTWVsb24gU2xpY2UnLFxuICAgICdOYWNob3MnLFxuICAgICdPeXN0ZXIgTXVzaHJvb20nLFxuICAgICdQaW5lYXBwbGUnLFxuICAgICdSYWRpc2gnLFxuICAgICdTYXJkaW5pYW4gQ3VycmFudCcsXG4gICAgJ1NhdXNhZ2UnLFxuICAgICdVbmFnaScsXG4gIF0sXG4gIEhpZGRlbjogWydDYWtlIFNsaWNlJywgJ1BlYW51dCBCdXR0ZXInXSxcbn07XG5cbmV4cG9ydCBjb25zdCBBSUxNRU5UX0NBVEVHT1JJRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgQWlsbWVudHM6IFtcbiAgICAnQmxvYXRlZCcsXG4gICAgJ0NvbGQnLFxuICAgICdDb25mdXNlZCcsXG4gICAgJ0Nvd2FyZGx5JyxcbiAgICAnQ3Jpc3AnLFxuICAgICdDdXJzZWQnLFxuICAgICdEYXplZCcsXG4gICAgJ0lja3knLFxuICAgICdJbmtlZCcsXG4gICAgJ1NhZCcsXG4gICAgJ1NpbGx5JyxcbiAgICAnU2xlZXB5JyxcbiAgICAnU3Bvb2tlZCcsXG4gICAgJ1Rhc3R5JyxcbiAgICAnVG9hc3R5JyxcbiAgICAnV2VhaycsXG4gICAgJ1dlYmJlZCcsXG4gIF0sXG59O1xuIiwgImltcG9ydCB7XG4gIGdldEVxdWlwbWVudEljb25QYXRoLFxuICBnZXRQZXRJY29uUGF0aCxcbiAgZ2V0VG95SWNvblBhdGgsXG59IGZyb20gJ2FwcC9ydW50aW1lL2Fzc2V0LWNhdGFsb2cnO1xuXG5leHBvcnQgdHlwZSBJbmxpbmVJY29uVHlwZSA9ICdwZXQnIHwgJ3RveScgfCAnZXF1aXBtZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmFtZVJlZ2V4KG5hbWVzOiBzdHJpbmdbXSk6IFJlZ0V4cCB8IG51bGwge1xuICBjb25zdCBlc2NhcGVkID0gbmFtZXNcbiAgICAuZmlsdGVyKChuYW1lKSA9PiBCb29sZWFuKG5hbWUpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgIC5tYXAoKG5hbWUpID0+IGVzY2FwZVJlZ0V4cChuYW1lKSk7XG4gIGlmICghZXNjYXBlZC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICBgKD88IVtBLVphLXowLTldKSgke2VzY2FwZWQuam9pbignfCcpfSkoPyFbQS1aYS16MC05XSlgLFxuICAgICdnJyxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5saW5lTmFtZVR5cGVNYXAoXG4gIHBldE5hbWVzOiBzdHJpbmdbXSxcbiAgdG95TmFtZXM6IHN0cmluZ1tdLFxuICBlcXVpcG1lbnROYW1lczogc3RyaW5nW10sXG4pOiBNYXA8c3RyaW5nLCBJbmxpbmVJY29uVHlwZT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgSW5saW5lSWNvblR5cGU+KCk7XG4gIGZvciAoY29uc3QgbmFtZSBvZiBlcXVpcG1lbnROYW1lcykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBtYXAuc2V0KG5hbWUsICdlcXVpcG1lbnQnKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBuYW1lIG9mIHRveU5hbWVzKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIG1hcC5zZXQobmFtZSwgJ3RveScpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgcGV0TmFtZXMpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgbWFwLnNldChuYW1lLCAncGV0Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZElubGluZU5hbWVSZWdleChcbiAgcGV0TmFtZXM6IHN0cmluZ1tdLFxuICB0b3lOYW1lczogc3RyaW5nW10sXG4gIGVxdWlwbWVudE5hbWVzOiBzdHJpbmdbXSxcbik6IFJlZ0V4cCB8IG51bGwge1xuICBjb25zdCBjb21iaW5lZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwZXROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBuYW1lICYmIGNvbWJpbmVkLmFkZChuYW1lKSk7XG4gIHRveU5hbWVzLmZvckVhY2goKG5hbWUpID0+IG5hbWUgJiYgY29tYmluZWQuYWRkKG5hbWUpKTtcbiAgZXF1aXBtZW50TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gbmFtZSAmJiBjb21iaW5lZC5hZGQobmFtZSkpO1xuICByZXR1cm4gYnVpbGROYW1lUmVnZXgoQXJyYXkuZnJvbShjb21iaW5lZCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVJbmxpbmVJY29ucyhcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBpbmxpbmVOYW1lUmVnZXg6IFJlZ0V4cCB8IG51bGwsXG4gIGlubGluZU5hbWVUeXBlTWFwOiBNYXA8c3RyaW5nLCBJbmxpbmVJY29uVHlwZT4sXG4gIGFpbG1lbnROYW1lczogU2V0PHN0cmluZz4sXG4pOiBzdHJpbmcge1xuICBpZiAoIW1lc3NhZ2UgfHwgbWVzc2FnZS5pbmNsdWRlcygnPGltZycpIHx8ICFpbmxpbmVOYW1lUmVnZXgpIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuICBsZXQgdXBkYXRlZCA9IHJlcGxhY2VNYXRjaGVzV2l0aEljb25zT3V0c2lkZVRhZ3MoXG4gICAgbWVzc2FnZSxcbiAgICBpbmxpbmVOYW1lUmVnZXgsXG4gICAgKG5hbWUpID0+IGdldElubGluZUljb25QYXRoKG5hbWUsIGlubGluZU5hbWVUeXBlTWFwLCBhaWxtZW50TmFtZXMpLFxuICAgIChuYW1lKSA9PiBnZXRJbmxpbmVJY29uSHRtbChuYW1lLCBpbmxpbmVOYW1lVHlwZU1hcCwgYWlsbWVudE5hbWVzKSxcbiAgKTtcbiAgY29uc3QgbWFuYUljb24gPVxuICAgICdhc3NldHMvYXJ0L1B1YmxpYy9QdWJsaWMvSWNvbnMvVGV4dE1hcC1yZXNvdXJjZXMuYXNzZXRzLTMxLXNwbGl0L21hbmEucG5nJztcbiAgY29uc3QgbWFuYVJlZ2V4ID0gLyg/PCFbQS1aYS16MC05XSltYW5hKD8hW0EtWmEtejAtOV0pKD8hXFxzK1BvdGlvbikvZ2k7XG4gIHVwZGF0ZWQgPSByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKHVwZGF0ZWQsIG1hbmFSZWdleCwgKCkgPT4gbWFuYUljb24pO1xuICBjb25zdCBleHBJY29uID1cbiAgICAnYXNzZXRzL2FydC9QdWJsaWMvUHVibGljL0ljb25zL1RleHRNYXAtcmVzb3VyY2VzLmFzc2V0cy0zMS1zcGxpdC94cC5wbmcnO1xuICBjb25zdCBleHBSZWdleCA9IC8oPzwhW0EtWmEtejAtOV0pKD86eHB8ZXhwKSg/IVtBLVphLXowLTldKS9naTtcbiAgdXBkYXRlZCA9IHJlcGxhY2VNYXRjaGVzV2l0aEljb25zT3V0c2lkZVRhZ3ModXBkYXRlZCwgZXhwUmVnZXgsICgpID0+IGV4cEljb24pO1xuICBjb25zdCBnb2xkSWNvbiA9XG4gICAgJ2Fzc2V0cy9hcnQvUHVibGljL1B1YmxpYy9JY29ucy9UZXh0TWFwLXJlc291cmNlcy5hc3NldHMtMzEtc3BsaXQvZ29sZC5wbmcnO1xuICBjb25zdCBnb2xkUmVnZXggPSAvKD88IVtBLVphLXowLTldKWdvbGQoPyFbQS1aYS16MC05XSkvZ2k7XG4gIHVwZGF0ZWQgPSByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKHVwZGF0ZWQsIGdvbGRSZWdleCwgKCkgPT4gZ29sZEljb24pO1xuICBjb25zdCB0cnVtcGV0SWNvbiA9XG4gICAgJ2Fzc2V0cy9hcnQvUHVibGljL1B1YmxpYy9JY29ucy9UZXh0TWFwLXJlc291cmNlcy5hc3NldHMtMzEtc3BsaXQvdHJ1bXBldC5wbmcnO1xuICBjb25zdCB0cnVtcGV0UmVnZXggPSAvKD88IVtBLVphLXowLTldKXRydW1wZXRzPyg/IVtBLVphLXowLTldKS9naTtcbiAgdXBkYXRlZCA9IHJlcGxhY2VNYXRjaGVzV2l0aEljb25zT3V0c2lkZVRhZ3MoXG4gICAgdXBkYXRlZCxcbiAgICB0cnVtcGV0UmVnZXgsXG4gICAgKCkgPT4gdHJ1bXBldEljb24sXG4gICk7XG4gIHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5saW5lSWNvblBhdGgoXG4gIG5hbWU6IHN0cmluZyxcbiAgaW5saW5lTmFtZVR5cGVNYXA6IE1hcDxzdHJpbmcsIElubGluZUljb25UeXBlPixcbiAgYWlsbWVudE5hbWVzOiBTZXQ8c3RyaW5nPixcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB0eXBlID0gaW5saW5lTmFtZVR5cGVNYXAuZ2V0KG5hbWUpID8/IG51bGw7XG4gIGlmICh0eXBlID09PSAncGV0Jykge1xuICAgIHJldHVybiBnZXRQZXRJY29uUGF0aChuYW1lKTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ3RveScpIHtcbiAgICByZXR1cm4gZ2V0VG95SWNvblBhdGgobmFtZSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdlcXVpcG1lbnQnKSB7XG4gICAgY29uc3QgaXNBaWxtZW50ID0gYWlsbWVudE5hbWVzLmhhcyhuYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0RXF1aXBtZW50SWNvblBhdGgobmFtZSwgaXNBaWxtZW50KSA/PyBnZXRFcXVpcG1lbnRJY29uUGF0aChuYW1lLCAhaXNBaWxtZW50KVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmxpbmVJY29uSHRtbChcbiAgbmFtZTogc3RyaW5nLFxuICBpbmxpbmVOYW1lVHlwZU1hcDogTWFwPHN0cmluZywgSW5saW5lSWNvblR5cGU+LFxuICBhaWxtZW50TmFtZXM6IFNldDxzdHJpbmc+LFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHR5cGUgPSBpbmxpbmVOYW1lVHlwZU1hcC5nZXQobmFtZSkgPz8gbnVsbDtcbiAgaWYgKHR5cGUgIT09ICdlcXVpcG1lbnQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgaXNBaWxtZW50ID0gYWlsbWVudE5hbWVzLmhhcyhuYW1lKTtcbiAgY29uc3QgcHJpbWFyeSA9IGdldEVxdWlwbWVudEljb25QYXRoKG5hbWUsIGlzQWlsbWVudCk7XG4gIGlmICghcHJpbWFyeSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHNlY29uZGFyeSA9IGdldEVxdWlwbWVudEljb25QYXRoKG5hbWUsICFpc0FpbG1lbnQpO1xuICBjb25zdCBzZWNvbmRhcnlBdHRyID0gc2Vjb25kYXJ5XG4gICAgPyBgdGhpcy5kYXRhc2V0LnN0ZXA9JzEnO3RoaXMuc3JjPScke3NlY29uZGFyeX0nO2BcbiAgICA6IGB0aGlzLmRhdGFzZXQuc3RlcD0nMSc7YDtcbiAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7cHJpbWFyeX1cIiBjbGFzcz1cImxvZy1pbmxpbmUtaWNvblwiIGFsdD1cIiR7bmFtZX1cIiBvbmVycm9yPVwiaWYoIXRoaXMuZGF0YXNldC5zdGVwKXske3NlY29uZGFyeUF0dHJ9cmV0dXJuO310aGlzLnJlbW92ZSgpO1wiPiAke25hbWV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VNYXRjaGVzV2l0aEljb25zT3V0c2lkZVRhZ3MoXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgcmVnZXg6IFJlZ0V4cCxcbiAgZ2V0SWNvbjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nIHwgbnVsbCxcbiAgZ2V0SHRtbD86IChuYW1lOiBzdHJpbmcsIGljb246IHN0cmluZyB8IG51bGwpID0+IHN0cmluZyB8IG51bGwsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gbWVzc2FnZVxuICAgIC5zcGxpdCgvKDxbXj5dKz4pL2cpXG4gICAgLm1hcCgoc2VnbWVudCkgPT5cbiAgICAgIHNlZ21lbnQuc3RhcnRzV2l0aCgnPCcpXG4gICAgICAgID8gc2VnbWVudFxuICAgICAgICA6IHJlcGxhY2VNYXRjaGVzV2l0aEljb25zKHNlZ21lbnQsIHJlZ2V4LCBnZXRJY29uLCBnZXRIdG1sKSxcbiAgICApXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTWF0Y2hlc1dpdGhJY29ucyhcbiAgbWVzc2FnZTogc3RyaW5nLFxuICByZWdleDogUmVnRXhwLFxuICBnZXRJY29uOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsLFxuICBnZXRIdG1sPzogKG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nIHwgbnVsbCkgPT4gc3RyaW5nIHwgbnVsbCxcbik6IHN0cmluZyB7XG4gIGlmICghcmVnZXgpIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IHtcbiAgICBjb25zdCBpY29uID0gZ2V0SWNvbihtYXRjaCk7XG4gICAgaWYgKGdldEh0bWwpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBnZXRIdG1sKG1hdGNoLCBpY29uKTtcbiAgICAgIGlmIChodG1sKSB7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWljb24pIHtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG4gICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7aWNvbn1cIiBjbGFzcz1cImxvZy1pbmxpbmUtaWNvblwiIGFsdD1cIiR7bWF0Y2h9XCIgb25lcnJvcj1cInRoaXMucmVtb3ZlKClcIj4gJHttYXRjaH1gO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cbiIsICJpbXBvcnQgeyBMb2cgfSBmcm9tICdhcHAvZG9tYWluL2ludGVyZmFjZXMvbG9nLmludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRBdHRhY2tIZWFsdGhNZXNzYWdlKFxuICBsYXN0TG9nOiBMb2cgfCB1bmRlZmluZWQsXG4gIG5leHRMb2c6IExvZyxcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWxhc3RMb2cgfHwgIW5leHRMb2cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5ub0NvbGxhcHNlIHx8IG5leHRMb2cubm9Db2xsYXBzZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChsYXN0TG9nLnBsYXllciAhPT0gbmV4dExvZy5wbGF5ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy50eXBlICE9PSBuZXh0TG9nLnR5cGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5yYW5kb21FdmVudCAhPT0gbmV4dExvZy5yYW5kb21FdmVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChsYXN0TG9nLnJhbmRvbUV2ZW50UmVhc29uICE9PSBuZXh0TG9nLnJhbmRvbUV2ZW50UmVhc29uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKFxuICAgIGxhc3RMb2cuc291cmNlUGV0ICE9PSBuZXh0TG9nLnNvdXJjZVBldCB8fFxuICAgIGxhc3RMb2cuc291cmNlSW5kZXggIT09IG5leHRMb2cuc291cmNlSW5kZXhcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKFxuICAgIGxhc3RMb2cudGFyZ2V0UGV0ICE9PSBuZXh0TG9nLnRhcmdldFBldCB8fFxuICAgIGxhc3RMb2cudGFyZ2V0SW5kZXggIT09IG5leHRMb2cudGFyZ2V0SW5kZXhcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cudGlnZXIgIT09IG5leHRMb2cudGlnZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5wdW1hICE9PSBuZXh0TG9nLnB1bWEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5wdGVyYW5vZG9uICE9PSBuZXh0TG9nLnB0ZXJhbm9kb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBsYXN0UGFudGhlciA9IGxhc3RMb2cucGFudGhlck11bHRpcGxpZXIgPz8gbnVsbDtcbiAgY29uc3QgbmV4dFBhbnRoZXIgPSBuZXh0TG9nLnBhbnRoZXJNdWx0aXBsaWVyID8/IG51bGw7XG4gIGlmIChsYXN0UGFudGhlciAhPT0gbmV4dFBhbnRoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxhc3RUZXh0ID0gc3RyaXBUYWdzKGxhc3RMb2cucmF3TWVzc2FnZSA/PyBsYXN0TG9nLm1lc3NhZ2UgPz8gJycpO1xuICBjb25zdCBuZXh0VGV4dCA9IHN0cmlwVGFncyhuZXh0TG9nLnJhd01lc3NhZ2UgPz8gbmV4dExvZy5tZXNzYWdlID8/ICcnKTtcbiAgaWYgKCFsYXN0VGV4dCB8fCAhbmV4dFRleHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoXG4gICAgbGFzdFRleHQuaW5jbHVkZXMoJyBhdHRhY2sgYW5kICcpIHx8XG4gICAgbGFzdFRleHQuaW5jbHVkZXMoJyBoZWFsdGggYW5kICcpIHx8XG4gICAgbmV4dFRleHQuaW5jbHVkZXMoJyBhdHRhY2sgYW5kICcpIHx8XG4gICAgbmV4dFRleHQuaW5jbHVkZXMoJyBoZWFsdGggYW5kICcpXG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBjb21iaW5lQXR0YWNrSGVhbHRoTG9ncyhsYXN0VGV4dCwgbmV4dFRleHQpID8/XG4gICAgY29tYmluZUF0dGFja0hlYWx0aExvZ3MobmV4dFRleHQsIGxhc3RUZXh0KVxuICApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lQXR0YWNrSGVhbHRoTG9ncyhcbiAgYXR0YWNrTG9nOiBzdHJpbmcsXG4gIGhlYWx0aExvZzogc3RyaW5nLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGxvc3NBdHRhY2sgPSBwYXJzZVN0YXRMb2coYXR0YWNrTG9nLCAnbG9zdCcsICdhdHRhY2snKTtcbiAgY29uc3QgbG9zc0hlYWx0aCA9IHBhcnNlU3RhdExvZyhoZWFsdGhMb2csICdsb3N0JywgJ2hlYWx0aCcpO1xuICBpZiAobG9zc0F0dGFjayAmJiBsb3NzSGVhbHRoKSB7XG4gICAgaWYgKFxuICAgICAgbG9zc0F0dGFjay5wcmVmaXggPT09IGxvc3NIZWFsdGgucHJlZml4ICYmXG4gICAgICBsb3NzQXR0YWNrLnN1ZmZpeCA9PT0gbG9zc0hlYWx0aC5zdWZmaXhcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtsb3NzQXR0YWNrLnByZWZpeH0ke2xvc3NBdHRhY2sudmFsdWV9IGF0dGFjayBhbmQgJHtsb3NzSGVhbHRoLnZhbHVlfSBoZWFsdGgke2xvc3NBdHRhY2suc3VmZml4fWA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FpbkF0dGFjayA9IHBhcnNlU3RhdExvZyhhdHRhY2tMb2csICdnYXZlJywgJ2F0dGFjaycpO1xuICBjb25zdCBnYWluSGVhbHRoID0gcGFyc2VTdGF0TG9nKGhlYWx0aExvZywgJ2dhdmUnLCAnaGVhbHRoJyk7XG4gIGlmIChnYWluQXR0YWNrICYmIGdhaW5IZWFsdGgpIHtcbiAgICBpZiAoXG4gICAgICBnYWluQXR0YWNrLnByZWZpeCA9PT0gZ2FpbkhlYWx0aC5wcmVmaXggJiZcbiAgICAgIGdhaW5BdHRhY2suc3VmZml4ID09PSBnYWluSGVhbHRoLnN1ZmZpeFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke2dhaW5BdHRhY2sucHJlZml4fSR7Z2FpbkF0dGFjay5wbHVzfSR7Z2FpbkF0dGFjay52YWx1ZX0gYXR0YWNrIGFuZCAke2dhaW5IZWFsdGgucGx1c30ke2dhaW5IZWFsdGgudmFsdWV9IGhlYWx0aCR7Z2FpbkF0dGFjay5zdWZmaXh9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGF0TG9nKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHZlcmI6ICdsb3N0JyB8ICdnYXZlJyxcbiAgc3RhdDogJ2F0dGFjaycgfCAnaGVhbHRoJyxcbik6IHsgcHJlZml4OiBzdHJpbmc7IHBsdXM6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgc3VmZml4OiBzdHJpbmcgfSB8IG51bGwge1xuICBpZiAodmVyYiA9PT0gJ2xvc3QnKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeKC4qXFxcXGJsb3N0XFxcXHMrKShcXFxcZCspXFxcXHMrJHtzdGF0fVxcXFxiKC4qKSRgLCAnaScpO1xuICAgIGNvbnN0IG1hdGNoID0gbWVzc2FnZS5tYXRjaChyZWdleCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IG1hdGNoWzFdLFxuICAgICAgcGx1czogJycsXG4gICAgICB2YWx1ZTogbWF0Y2hbMl0sXG4gICAgICBzdWZmaXg6IG1hdGNoWzNdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgYF4oLipcXFxcYig/OmdhdmV8Z2l2ZXxnaXZlcylcXFxcYi4qP1xcXFxzKykoXFxcXCs/KShcXFxcZCspXFxcXHMrJHtzdGF0fVxcXFxiKC4qKSRgLFxuICAgICdpJyxcbiAgKTtcbiAgY29uc3QgbWF0Y2ggPSBtZXNzYWdlLm1hdGNoKHJlZ2V4KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBtYXRjaFsxXSxcbiAgICBwbHVzOiBtYXRjaFsyXSA/PyAnJyxcbiAgICB2YWx1ZTogbWF0Y2hbM10sXG4gICAgc3VmZml4OiBtYXRjaFs0XSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaXBUYWdzKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLzxbXj5dKz4vZywgJycpLnRyaW0oKTtcbn1cbiIsICJpbXBvcnQgeyBQZXQgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BldC5jbGFzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BsYXllci5jbGFzcyc7XG5pbXBvcnQgeyBnZXRFcXVpcG1lbnRJY29uUGF0aCwgZ2V0UGV0SWNvblBhdGggfSBmcm9tICdhcHAvcnVudGltZS9hc3NldC1jYXRhbG9nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQm9hcmRTdGF0ZU1lc3NhZ2UoXG4gIHBsYXllcjogUGxheWVyLFxuICBvcHBvbmVudDogUGxheWVyLFxuICBnZXRGcm9udEluZGV4OiAocGV0OiBQZXQpID0+IG51bWJlciB8IG51bGwsXG4gIGlzQWlsbWVudE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW4sXG4pOiBzdHJpbmcge1xuICBsZXQgcGxheWVyU3RhdGUgPSAnJztcbiAgaWYgKHBsYXllci50b3kpIHtcbiAgICBwbGF5ZXJTdGF0ZSArPSBge3t0b3k6JHtwbGF5ZXIudG95Lm5hbWV9fX0gYDtcbiAgfVxuICBpZiAocGxheWVyLmhhcmRUb3kpIHtcbiAgICBwbGF5ZXJTdGF0ZSArPSBge3toYXJkdG95OiR7cGxheWVyLmhhcmRUb3kubmFtZX19fSBgO1xuICB9XG4gIHBsYXllclN0YXRlICs9IHJlbmRlclBldFRleHQocGxheWVyLnBldDQsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBwbGF5ZXJTdGF0ZSArPSByZW5kZXJQZXRUZXh0KHBsYXllci5wZXQzLCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgcGxheWVyU3RhdGUgKz0gcmVuZGVyUGV0VGV4dChwbGF5ZXIucGV0MiwgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIHBsYXllclN0YXRlICs9IHJlbmRlclBldFRleHQocGxheWVyLnBldDEsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBwbGF5ZXJTdGF0ZSArPSByZW5kZXJQZXRUZXh0KHBsYXllci5wZXQwLCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcblxuICBsZXQgb3Bwb25lbnRTdGF0ZSA9ICcnO1xuICBvcHBvbmVudFN0YXRlICs9IHJlbmRlclBldFRleHQob3Bwb25lbnQucGV0MCwgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIG9wcG9uZW50U3RhdGUgKz0gcmVuZGVyUGV0VGV4dChvcHBvbmVudC5wZXQxLCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgb3Bwb25lbnRTdGF0ZSArPSByZW5kZXJQZXRUZXh0KG9wcG9uZW50LnBldDIsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBvcHBvbmVudFN0YXRlICs9IHJlbmRlclBldFRleHQob3Bwb25lbnQucGV0MywgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIG9wcG9uZW50U3RhdGUgKz0gcmVuZGVyUGV0VGV4dChvcHBvbmVudC5wZXQ0LCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgaWYgKG9wcG9uZW50LnRveSkge1xuICAgIG9wcG9uZW50U3RhdGUgKz0gYHt7dG95OiR7b3Bwb25lbnQudG95Lm5hbWV9fX0gYDtcbiAgfVxuICBpZiAob3Bwb25lbnQuaGFyZFRveSkge1xuICAgIG9wcG9uZW50U3RhdGUgKz0gYHt7aGFyZHRveToke29wcG9uZW50LmhhcmRUb3kubmFtZX19fSBgO1xuICB9XG5cbiAgcmV0dXJuIGAke3BsYXllclN0YXRlfXwgJHtvcHBvbmVudFN0YXRlfWA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBldFRleHQoXG4gIHBldDogUGV0IHwgdW5kZWZpbmVkLFxuICBnZXRGcm9udEluZGV4OiAocGV0OiBQZXQpID0+IG51bWJlciB8IG51bGwsXG4gIGlzQWlsbWVudE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW4sXG4pOiBzdHJpbmcge1xuICBpZiAocGV0ID09IG51bGwpIHtcbiAgICByZXR1cm4gJ19fXyAoLS8tKSAnO1xuICB9XG4gIGNvbnN0IGluZGV4ID0gZ2V0RnJvbnRJbmRleChwZXQpO1xuICBjb25zdCBsYWJlbCA9IGluZGV4ICE9IG51bGwgPyBgJHtwZXQucGFyZW50Py5pc09wcG9uZW50ID8gJ08nIDogJ1AnfSR7aW5kZXh9IGAgOiAnJztcbiAgY29uc3QgaWNvblBhdGggPSBnZXRQZXRJY29uUGF0aChwZXQubmFtZSk7XG4gIGNvbnN0IHBldERpc3BsYXkgPSBpY29uUGF0aFxuICAgID8gYDxpbWcgc3JjPVwiJHtpY29uUGF0aH1cIiBjbGFzcz1cImxvZy1wZXQtaWNvblwiIGFsdD1cIiR7cGV0Lm5hbWV9XCI+YFxuICAgIDogJyc7XG4gIGNvbnN0IGVxdWlwbWVudE5hbWUgPVxuICAgIHR5cGVvZiAocGV0LmVxdWlwbWVudCBhcyB7IG5hbWU/OiBzdHJpbmcgfSk/Lm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICA/IChwZXQuZXF1aXBtZW50IGFzIHsgbmFtZT86IHN0cmluZyB9KS5uYW1lXG4gICAgICA6IG51bGw7XG4gIGNvbnN0IGVxdWlwbWVudERpc3BsYXkgPSBlcXVpcG1lbnROYW1lXG4gICAgPyAoKCkgPT4ge1xuICAgICAgY29uc3QgaXNBaWxtZW50ID0gaXNBaWxtZW50TmFtZShlcXVpcG1lbnROYW1lKTtcbiAgICAgIGNvbnN0IHByaW1hcnkgPVxuICAgICAgICBnZXRFcXVpcG1lbnRJY29uUGF0aChlcXVpcG1lbnROYW1lLCBpc0FpbG1lbnQpID8/XG4gICAgICAgIGdldEVxdWlwbWVudEljb25QYXRoKGVxdWlwbWVudE5hbWUsICFpc0FpbG1lbnQpO1xuICAgICAgaWYgKCFwcmltYXJ5KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGdldEVxdWlwbWVudEljb25QYXRoKGVxdWlwbWVudE5hbWUsICFpc0FpbG1lbnQpO1xuICAgICAgY29uc3Qgc2Vjb25kYXJ5QXR0ciA9IHNlY29uZGFyeVxuICAgICAgICA/IGB0aGlzLmRhdGFzZXQuc3RlcD0nMSc7dGhpcy5zcmM9JyR7c2Vjb25kYXJ5fSc7YFxuICAgICAgICA6IGB0aGlzLmRhdGFzZXQuc3RlcD0nMSc7YDtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3ByaW1hcnl9XCIgY2xhc3M9XCJsb2ctaW5saW5lLWljb25cIiBhbHQ9XCIke2VxdWlwbWVudE5hbWV9XCIgb25lcnJvcj1cImlmKCF0aGlzLmRhdGFzZXQuc3RlcCl7JHtzZWNvbmRhcnlBdHRyfXJldHVybjt9dGhpcy5yZW1vdmUoKVwiPmA7XG4gICAgfSkoKVxuICAgIDogJyc7XG4gIGNvbnN0IG1hbmFWYWx1ZSA9IE51bWJlci5pc0Zpbml0ZShwZXQubWFuYSkgPyBNYXRoLm1heCgwLCBNYXRoLnRydW5jKHBldC5tYW5hKSkgOiAwO1xuICBjb25zdCBtYW5hU3VmZml4ID0gbWFuYVZhbHVlID4gMCA/IGAvJHttYW5hVmFsdWV9bWFuYWAgOiAnJztcblxuICByZXR1cm4gYCR7bGFiZWx9JHtwZXREaXNwbGF5fSR7ZXF1aXBtZW50RGlzcGxheX0oJHtwZXQuYXR0YWNrfS8ke3BldC5oZWFsdGh9LyR7cGV0LmV4cH14cCR7bWFuYVN1ZmZpeH0pIGA7XG59XG4iLCAiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL2xvZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsRXF1aXBtZW50TmFtZXMsXG4gIGdldEFsbFBldE5hbWVzLFxuICBnZXRBbGxUb3lOYW1lcyxcbn0gZnJvbSAnYXBwL3J1bnRpbWUvYXNzZXQtY2F0YWxvZyc7XG5pbXBvcnQgeyBQZXQgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BldC5jbGFzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BsYXllci5jbGFzcyc7XG5pbXBvcnQgeyBBSUxNRU5UX0NBVEVHT1JJRVMgfSBmcm9tICcuL2VxdWlwbWVudC9lcXVpcG1lbnQtY2F0ZWdvcmllcyc7XG5pbXBvcnQge1xuICBidWlsZElubGluZU5hbWVSZWdleCxcbiAgYnVpbGRJbmxpbmVOYW1lVHlwZU1hcCxcbiAgYnVpbGROYW1lUmVnZXgsXG4gIGRlY29yYXRlSW5saW5lSWNvbnMsXG59IGZyb20gJy4vbG9nL2xvZy1pbmxpbmUtaWNvbnMnO1xuaW1wb3J0IHsgZ2V0TWVyZ2VkQXR0YWNrSGVhbHRoTWVzc2FnZSB9IGZyb20gJy4vbG9nL2xvZy1tZXJnZS11dGlscyc7XG5pbXBvcnQgeyBidWlsZEJvYXJkU3RhdGVNZXNzYWdlIH0gZnJvbSAnLi9sb2cvbG9nLWJvYXJkLXJlbmRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2dzOiBMb2dbXSA9IFtdO1xuICBwcml2YXRlIHBldE5hbWVSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIHRveU5hbWVSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIGVxdWlwbWVudE5hbWVSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIGlubGluZU5hbWVSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIGlubGluZU5hbWVUeXBlTWFwOiBNYXA8c3RyaW5nLCAncGV0JyB8ICd0b3knIHwgJ2VxdWlwbWVudCc+O1xuICBwcml2YXRlIGFpbG1lbnROYW1lczogU2V0PHN0cmluZz47XG4gIHByaXZhdGUgZW5hYmxlZCA9IHRydWU7XG4gIHByaXZhdGUgZGVmZXJEZWNvcmF0aW9ucyA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dUcmlnZ2VyTmFtZXNJbkxvZ3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZWJ1Z1N1bW1vbkJvYXJkU3RhdGVMb2dzID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBldE5hbWVzID0gZ2V0QWxsUGV0TmFtZXMoKTtcbiAgICBjb25zdCB0b3lOYW1lcyA9IGdldEFsbFRveU5hbWVzKCk7XG4gICAgY29uc3QgZXF1aXBtZW50TmFtZXMgPSBnZXRBbGxFcXVpcG1lbnROYW1lcygpO1xuICAgIHRoaXMucGV0TmFtZVJlZ2V4ID0gYnVpbGROYW1lUmVnZXgocGV0TmFtZXMpO1xuICAgIHRoaXMudG95TmFtZVJlZ2V4ID0gYnVpbGROYW1lUmVnZXgodG95TmFtZXMpO1xuICAgIHRoaXMuZXF1aXBtZW50TmFtZVJlZ2V4ID0gYnVpbGROYW1lUmVnZXgoZXF1aXBtZW50TmFtZXMpO1xuICAgIHRoaXMuaW5saW5lTmFtZVR5cGVNYXAgPSBidWlsZElubGluZU5hbWVUeXBlTWFwKFxuICAgICAgcGV0TmFtZXMsXG4gICAgICB0b3lOYW1lcyxcbiAgICAgIGVxdWlwbWVudE5hbWVzLFxuICAgICk7XG4gICAgdGhpcy5pbmxpbmVOYW1lUmVnZXggPSBidWlsZElubGluZU5hbWVSZWdleChcbiAgICAgIHBldE5hbWVzLFxuICAgICAgdG95TmFtZXMsXG4gICAgICBlcXVpcG1lbnROYW1lcyxcbiAgICApO1xuICAgIHRoaXMuYWlsbWVudE5hbWVzID0gbmV3IFNldChcbiAgICAgIE9iamVjdC52YWx1ZXMoQUlMTUVOVF9DQVRFR09SSUVTKS5mbGF0KCkuZmlsdGVyKEJvb2xlYW4pLFxuICAgICk7XG4gIH1cblxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBCb29sZWFuKGVuYWJsZWQpO1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmxvZ3MgPSBbXTtcbiAgICB9XG4gIH1cblxuICBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZDtcbiAgfVxuXG4gIHNldERlZmVyRGVjb3JhdGlvbnMoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGVmZXJEZWNvcmF0aW9ucyA9IEJvb2xlYW4oZW5hYmxlZCk7XG4gIH1cblxuICBpc0RlZmVyRGVjb3JhdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGVmZXJEZWNvcmF0aW9ucztcbiAgfVxuXG4gIHNldFNob3dUcmlnZ2VyTmFtZXNJbkxvZ3MoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1RyaWdnZXJOYW1lc0luTG9ncyA9IEJvb2xlYW4oZW5hYmxlZCk7XG4gIH1cblxuICBpc1Nob3dUcmlnZ2VyTmFtZXNJbkxvZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1RyaWdnZXJOYW1lc0luTG9ncztcbiAgfVxuXG4gIHNldERlYnVnU3VtbW9uQm9hcmRTdGF0ZUxvZ3MoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGVidWdTdW1tb25Cb2FyZFN0YXRlTG9ncyA9IEJvb2xlYW4oZW5hYmxlZCk7XG4gIH1cblxuICBpc0RlYnVnU3VtbW9uQm9hcmRTdGF0ZUxvZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGVidWdTdW1tb25Cb2FyZFN0YXRlTG9ncztcbiAgfVxuXG4gIGRlY29yYXRlTG9nSWZOZWVkZWQobG9nOiBMb2cpIHtcbiAgICBpZiAoIWxvZyB8fCBsb2cuZGVjb3JhdGVkIHx8ICFsb2cucmF3TWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5kZWNvcmF0ZU1lc3NhZ2VXaXRoTmFtZXMoXG4gICAgICBsb2cucmF3TWVzc2FnZSxcbiAgICAgIGxvZy5zb3VyY2VQZXQsXG4gICAgICBsb2cudGFyZ2V0UGV0LFxuICAgICAgbG9nLnNvdXJjZUluZGV4LFxuICAgICAgbG9nLnRhcmdldEluZGV4LFxuICAgICk7XG4gICAgbG9nLm1lc3NhZ2UgPSBkZWNvcmF0ZUlubGluZUljb25zKFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRoaXMuaW5saW5lTmFtZVJlZ2V4LFxuICAgICAgdGhpcy5pbmxpbmVOYW1lVHlwZU1hcCxcbiAgICAgIHRoaXMuYWlsbWVudE5hbWVzLFxuICAgICk7XG4gICAgbG9nLmRlY29yYXRlZCA9IHRydWU7XG4gIH1cblxuICBjcmVhdGVMb2cobG9nOiBMb2cpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobG9nLm1lc3NhZ2U/LnN0YXJ0c1dpdGgoJ1BoYXNlICcpKSB7XG4gICAgICBsb2cuYm9sZCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMucmVzb2x2ZUxvZ01ldGFkYXRhKGxvZyk7XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZGVjb3JhdGVMb2dNZXNzYWdlKGxvZyk7XG4gICAgbWVzc2FnZSA9IHRoaXMuYXBwZW5kVGFnU3VmZml4ZXMobWVzc2FnZSwgbG9nKTtcbiAgICB0aGlzLnBlcnNpc3REZWNvcmF0ZWRNZXNzYWdlKGxvZywgbWVzc2FnZSk7XG5cbiAgICBjb25zdCBsYXN0TG9nID0gdGhpcy5sb2dzW3RoaXMubG9ncy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzaG91bGRBcHBlbmRTdW1tb25Cb2FyZCA9IHRoaXMuc2hvdWxkQXBwZW5kU3VtbW9uQm9hcmRTdGF0ZShsb2cpO1xuICAgIGlmICh0aGlzLnRyeU1lcmdlQXR0YWNrSGVhbHRoTG9ncyhsYXN0TG9nLCBsb2cpKSB7XG4gICAgICBpZiAoc2hvdWxkQXBwZW5kU3VtbW9uQm9hcmQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdW1tb25Cb2FyZFN0YXRlTG9nKGxvZyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3VsZENvbGxhcHNlTG9nKGxhc3RMb2csIGxvZykpIHtcbiAgICAgIGxhc3RMb2cuY291bnQgPSAobGFzdExvZy5jb3VudCA/PyAxKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9ncy5wdXNoKGxvZyk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZEFwcGVuZFN1bW1vbkJvYXJkKSB7XG4gICAgICB0aGlzLmFwcGVuZFN1bW1vbkJvYXJkU3RhdGVMb2cobG9nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVMb2dNZXRhZGF0YShsb2c6IExvZyk6IHZvaWQge1xuICAgIGlmICghbG9nLnNvdXJjZVBldCAmJiBsb2cucGxheWVyICYmIGxvZy5tZXNzYWdlKSB7XG4gICAgICBjb25zdCBwb3NzaWJsZVBldHMgPSBsb2cucGxheWVyLnBldEFycmF5LmZpbHRlcihcbiAgICAgICAgKHApID0+IHAgJiYgbG9nLm1lc3NhZ2Uuc3RhcnRzV2l0aChwLm5hbWUpLFxuICAgICAgKTtcbiAgICAgIGlmIChwb3NzaWJsZVBldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGxvZy5zb3VyY2VQZXQgPSBwb3NzaWJsZVBldHNbMF0gYXMgUGV0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobG9nLnR5cGUgPT09ICdhdHRhY2snICYmIGxvZy5wbGF5ZXIgJiYgbG9nLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMucmVzb2x2ZUF0dGFja1BldHNGcm9tTWVzc2FnZShsb2cpO1xuICAgIH1cbiAgICBpZiAoIWxvZy5yYW5kb21FdmVudFJlYXNvbiAmJiBsb2cucmFuZG9tRXZlbnQgPT09IHRydWUpIHtcbiAgICAgIGxvZy5yYW5kb21FdmVudFJlYXNvbiA9ICd0cnVlLXJhbmRvbSc7XG4gICAgfVxuICAgIGlmIChsb2cucGxheWVyICYmIGxvZy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLnJlc29sdmVTb3VyY2VUYXJnZXRGcm9tTWVzc2FnZShsb2cpO1xuICAgIH1cbiAgICBpZiAobG9nLnNvdXJjZVBldCAmJiBsb2cuc291cmNlSW5kZXggPT0gbnVsbCkge1xuICAgICAgbG9nLnNvdXJjZUluZGV4ID0gdGhpcy5nZXRGcm9udEluZGV4KGxvZy5zb3VyY2VQZXQpID8/IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGxvZy50YXJnZXRQZXQgJiYgbG9nLnRhcmdldEluZGV4ID09IG51bGwpIHtcbiAgICAgIGxvZy50YXJnZXRJbmRleCA9IHRoaXMuZ2V0RnJvbnRJbmRleChsb2cudGFyZ2V0UGV0KSA/PyB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWNvcmF0ZUxvZ01lc3NhZ2UobG9nOiBMb2cpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBsb2cubWVzc2FnZSA/PyAnJztcbiAgICBpZiAodGhpcy5kZWZlckRlY29yYXRpb25zKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVjb3JhdGVNZXNzYWdlV2l0aE5hbWVzKFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGxvZy5zb3VyY2VQZXQsXG4gICAgICBsb2cudGFyZ2V0UGV0LFxuICAgICAgbG9nLnNvdXJjZUluZGV4LFxuICAgICAgbG9nLnRhcmdldEluZGV4LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFRhZ1N1ZmZpeGVzKG1lc3NhZ2U6IHN0cmluZywgbG9nOiBMb2cpOiBzdHJpbmcge1xuICAgIGxldCB1cGRhdGVkID0gbWVzc2FnZTtcbiAgICBpZiAobG9nLnRpZ2VyKSB7XG4gICAgICB1cGRhdGVkICs9ICcgKFRpZ2VyKSc7XG4gICAgfVxuICAgIGlmIChsb2cucHVtYSkge1xuICAgICAgdXBkYXRlZCArPSAnIChQdW1hKSc7XG4gICAgfVxuICAgIGlmIChsb2cucHRlcmFub2Rvbikge1xuICAgICAgdXBkYXRlZCArPSAnIChQdGVyYW5vZG9uKSc7XG4gICAgfVxuICAgIGlmIChsb2cucGFudGhlck11bHRpcGxpZXIgIT0gbnVsbCAmJiBsb2cucGFudGhlck11bHRpcGxpZXIgPiAxKSB7XG4gICAgICB1cGRhdGVkICs9IGAgeCR7bG9nLnBhbnRoZXJNdWx0aXBsaWVyfSAoUGFudGhlcilgO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlZDtcbiAgfVxuXG4gIHByaXZhdGUgcGVyc2lzdERlY29yYXRlZE1lc3NhZ2UobG9nOiBMb2csIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlZmVyRGVjb3JhdGlvbnMpIHtcbiAgICAgIGxvZy5yYXdNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIGxvZy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIGxvZy5kZWNvcmF0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2cubWVzc2FnZSA9IGRlY29yYXRlSW5saW5lSWNvbnMoXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGhpcy5pbmxpbmVOYW1lUmVnZXgsXG4gICAgICB0aGlzLmlubGluZU5hbWVUeXBlTWFwLFxuICAgICAgdGhpcy5haWxtZW50TmFtZXMsXG4gICAgKTtcbiAgICBsb2cuZGVjb3JhdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkQ29sbGFwc2VMb2cobGFzdExvZzogTG9nIHwgdW5kZWZpbmVkLCBsb2c6IExvZyk6IGxhc3RMb2cgaXMgTG9nIHtcbiAgICBpZiAoIWxhc3RMb2cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxhc3RMb2cubm9Db2xsYXBzZSB8fCBsb2cubm9Db2xsYXBzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbWVQbGF5ZXIgPSBsYXN0TG9nLnBsYXllciA9PT0gbG9nLnBsYXllcjtcbiAgICBjb25zdCBzYW1lTWVzc2FnZSA9IGxhc3RMb2cubWVzc2FnZT8udHJpbSgpID09PSBsb2cubWVzc2FnZT8udHJpbSgpO1xuICAgIGNvbnN0IHNhbWVSYW5kb20gPSBsYXN0TG9nLnJhbmRvbUV2ZW50ID09PSBsb2cucmFuZG9tRXZlbnQ7XG4gICAgY29uc3Qgc2FtZVJhbmRvbVJlYXNvbiA9XG4gICAgICBsYXN0TG9nLnJhbmRvbUV2ZW50UmVhc29uID09PSBsb2cucmFuZG9tRXZlbnRSZWFzb247XG4gICAgY29uc3Qgc2FtZVNvdXJjZSA9XG4gICAgICBsYXN0TG9nLnNvdXJjZVBldCA9PT0gbG9nLnNvdXJjZVBldCAmJlxuICAgICAgbGFzdExvZy5zb3VyY2VJbmRleCA9PT0gbG9nLnNvdXJjZUluZGV4O1xuICAgIGNvbnN0IHNhbWVUYXJnZXQgPVxuICAgICAgbGFzdExvZy50YXJnZXRQZXQgPT09IGxvZy50YXJnZXRQZXQgJiZcbiAgICAgIGxhc3RMb2cudGFyZ2V0SW5kZXggPT09IGxvZy50YXJnZXRJbmRleDtcbiAgICBjb25zdCBoYXNTb3VyY2VPclRhcmdldCA9XG4gICAgICBsb2cuc291cmNlUGV0ICE9IG51bGwgfHxcbiAgICAgIGxvZy50YXJnZXRQZXQgIT0gbnVsbCB8fFxuICAgICAgbG9nLnNvdXJjZUluZGV4ICE9IG51bGwgfHxcbiAgICAgIGxvZy50YXJnZXRJbmRleCAhPSBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHNhbWVNZXNzYWdlICYmXG4gICAgICBzYW1lUGxheWVyICYmXG4gICAgICBzYW1lUmFuZG9tICYmXG4gICAgICBzYW1lUmFuZG9tUmVhc29uICYmXG4gICAgICAoIWhhc1NvdXJjZU9yVGFyZ2V0IHx8IChzYW1lU291cmNlICYmIHNhbWVUYXJnZXQpKVxuICAgICk7XG4gIH1cblxuICBnZXRMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmxvZ3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RnJvbnRJbmRleChwZXQ6IFBldCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHBhcmVudCA9IHBldD8ucGFyZW50O1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHBhcmVudC5wZXQwID09PSBwZXQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAocGFyZW50LnBldDEgPT09IHBldCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmIChwYXJlbnQucGV0MiA9PT0gcGV0KSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHBhcmVudC5wZXQzID09PSBwZXQpIHtcbiAgICAgIHJldHVybiA0O1xuICAgIH1cbiAgICBpZiAocGFyZW50LnBldDQgPT09IHBldCkge1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUocGV0LnNhdmVkUG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gcGV0LnNhdmVkUG9zaXRpb24gKyAxO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGVNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgcGV0OiBQZXQpOiBzdHJpbmcge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRGcm9udEluZGV4KHBldCk7XG4gICAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbCA9IHBldC5wYXJlbnQ/LmlzT3Bwb25lbnQgPyAnTycgOiAnUCc7XG4gICAgY29uc3QgZnVsbExhYmVsID0gYCR7bGFiZWx9JHtpbmRleH0gJHtwZXQubmFtZX1gO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VGaXJzdChtZXNzYWdlLCBwZXQubmFtZSwgZnVsbExhYmVsKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGVBdHRhY2tNZXNzYWdlKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzb3VyY2VQZXQ6IFBldCxcbiAgICB0YXJnZXRQZXQ6IFBldCxcbiAgICBzb3VyY2VJbmRleE92ZXJyaWRlPzogbnVtYmVyLFxuICAgIHRhcmdldEluZGV4T3ZlcnJpZGU/OiBudW1iZXIsXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3Qgc291cmNlSW5kZXggPVxuICAgICAgc291cmNlSW5kZXhPdmVycmlkZSA/PyB0aGlzLmdldEZyb250SW5kZXgoc291cmNlUGV0KTtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9XG4gICAgICB0YXJnZXRJbmRleE92ZXJyaWRlID8/IHRoaXMuZ2V0RnJvbnRJbmRleCh0YXJnZXRQZXQpO1xuICAgIGlmIChzb3VyY2VJbmRleCA9PSBudWxsIHx8IHRhcmdldEluZGV4ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZUxhYmVsID0gc291cmNlUGV0LnBhcmVudD8uaXNPcHBvbmVudCA/ICdPJyA6ICdQJztcbiAgICBjb25zdCB0YXJnZXRMYWJlbCA9IHRhcmdldFBldC5wYXJlbnQ/LmlzT3Bwb25lbnQgPyAnTycgOiAnUCc7XG5cbiAgICBjb25zdCBzb3VyY2VGdWxsTGFiZWwgPSBgJHtzb3VyY2VMYWJlbH0ke3NvdXJjZUluZGV4fSAke3NvdXJjZVBldC5uYW1lfWA7XG4gICAgY29uc3QgdGFyZ2V0RnVsbExhYmVsID0gYCR7dGFyZ2V0TGFiZWx9JHt0YXJnZXRJbmRleH0gJHt0YXJnZXRQZXQubmFtZX1gO1xuXG4gICAgLy8gSWYgbmFtZXMgYXJlIHRoZSBzYW1lLCB3ZSBtdXN0IHVzZSB1bmlxdWUgdG9rZW5zIGR1cmluZyByZXBsYWNlbWVudCB0byBhdm9pZCByZWN1cnNpb24vY2xvYmJlcmluZ1xuICAgIGNvbnN0IFNPVVJDRV9IT0xERVIgPSAnX19fU09VUkNFX0hPTERFUl9fXyc7XG4gICAgY29uc3QgVEFSR0VUX0hPTERFUiA9ICdfX19UQVJHRVRfSE9MREVSX19fJztcblxuICAgIGxldCB1cGRhdGVkID0gdGhpcy5yZXBsYWNlRmlyc3QobWVzc2FnZSwgc291cmNlUGV0Lm5hbWUsIFNPVVJDRV9IT0xERVIpO1xuICAgIHVwZGF0ZWQgPSB0aGlzLnJlcGxhY2VGaXJzdCh1cGRhdGVkLCB0YXJnZXRQZXQubmFtZSwgVEFSR0VUX0hPTERFUik7XG5cbiAgICB1cGRhdGVkID0gdXBkYXRlZC5yZXBsYWNlKFNPVVJDRV9IT0xERVIsIHNvdXJjZUZ1bGxMYWJlbCk7XG4gICAgdXBkYXRlZCA9IHVwZGF0ZWQucmVwbGFjZShUQVJHRVRfSE9MREVSLCB0YXJnZXRGdWxsTGFiZWwpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH1cblxuICBwcml2YXRlIGRlY29yYXRlTWVzc2FnZVdpdGhOYW1lcyhcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc291cmNlUGV0PzogUGV0LFxuICAgIHRhcmdldFBldD86IFBldCxcbiAgICBzb3VyY2VJbmRleD86IG51bWJlcixcbiAgICB0YXJnZXRJbmRleD86IG51bWJlcixcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgICBpZiAoc291cmNlUGV0ICYmIHRhcmdldFBldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdGVBdHRhY2tNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBzb3VyY2VQZXQsXG4gICAgICAgIHRhcmdldFBldCxcbiAgICAgICAgc291cmNlSW5kZXgsXG4gICAgICAgIHRhcmdldEluZGV4LFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVBldCkge1xuICAgICAgaWYgKHNvdXJjZUluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzb3VyY2VQZXQucGFyZW50Py5pc09wcG9uZW50ID8gJ08nIDogJ1AnO1xuICAgICAgICBjb25zdCBmdWxsTGFiZWwgPSBgJHtsYWJlbH0ke3NvdXJjZUluZGV4fSAke3NvdXJjZVBldC5uYW1lfWA7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VGaXJzdChtZXNzYWdlLCBzb3VyY2VQZXQubmFtZSwgZnVsbExhYmVsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRlTWVzc2FnZShtZXNzYWdlLCBzb3VyY2VQZXQpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwbGFjZUZpcnN0KFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHNlYXJjaDogc3RyaW5nLFxuICAgIHJlcGxhY2VtZW50OiBzdHJpbmcsXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgaW5kZXggPSBzb3VyY2UuaW5kZXhPZihzZWFyY2gpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBzb3VyY2Uuc2xpY2UoMCwgaW5kZXgpICsgcmVwbGFjZW1lbnQgKyBzb3VyY2Uuc2xpY2UoaW5kZXggKyBzZWFyY2gubGVuZ3RoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVBdHRhY2tQZXRzRnJvbU1lc3NhZ2UobG9nOiBMb2cpOiB2b2lkIHtcbiAgICBpZiAoIWxvZz8ubWVzc2FnZSB8fCAhbG9nLnBsYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobG9nLnNvdXJjZVBldCAmJiBsb2cudGFyZ2V0UGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBsb2cubWVzc2FnZTtcbiAgICBjb25zdCBzbmlwZWRNYXRjaCA9IC9eKC4rPylcXHMrc25pcGVkXFxzKyguKz8pXFxzK2ZvclxccysvaS5leGVjKG1lc3NhZ2UpO1xuICAgIGNvbnN0IGF0dGFja01hdGNoID1cbiAgICAgIC9eKC4rPylcXHMrKD86anVtcC0pP2F0dGFja3M/XFxzKyguKz8pXFxzK2ZvclxccysvaS5leGVjKG1lc3NhZ2UpO1xuICAgIGNvbnN0IG1hdGNoID0gc25pcGVkTWF0Y2ggPz8gYXR0YWNrTWF0Y2g7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VOYW1lID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgIGNvbnN0IHRhcmdldE5hbWUgPSBtYXRjaFsyXS50cmltKCk7XG4gICAgY29uc3QgcGxheWVyUGV0cyA9IGxvZy5wbGF5ZXIucGV0QXJyYXkgPz8gW107XG4gICAgY29uc3Qgb3Bwb25lbnRQZXRzID0gbG9nLnBsYXllci5vcHBvbmVudD8ucGV0QXJyYXkgPz8gW107XG5cbiAgICBpZiAoIWxvZy5zb3VyY2VQZXQpIHtcbiAgICAgIGxvZy5zb3VyY2VQZXQgPVxuICAgICAgICBwbGF5ZXJQZXRzLmZpbmQoKHBldCkgPT4gcGV0Py5uYW1lID09PSBzb3VyY2VOYW1lKSA/PyBudWxsO1xuICAgIH1cbiAgICBpZiAoIWxvZy50YXJnZXRQZXQpIHtcbiAgICAgIGxvZy50YXJnZXRQZXQgPVxuICAgICAgICBvcHBvbmVudFBldHMuZmluZCgocGV0KSA9PiBwZXQ/Lm5hbWUgPT09IHRhcmdldE5hbWUpID8/XG4gICAgICAgIHBsYXllclBldHMuZmluZCgocGV0KSA9PiBwZXQ/Lm5hbWUgPT09IHRhcmdldE5hbWUpID8/XG4gICAgICAgIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FpbG1lbnROYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFpbG1lbnROYW1lcy5oYXMobmFtZSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVTb3VyY2VUYXJnZXRGcm9tTWVzc2FnZShsb2c6IExvZyk6IHZvaWQge1xuICAgIGlmIChsb2cuc291cmNlUGV0ICYmIGxvZy50YXJnZXRQZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IGxvZy5tZXNzYWdlO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuYW1lcyA9IHRoaXMuZXh0cmFjdFBldE5hbWVzKG1lc3NhZ2UpO1xuICAgIGlmIChuYW1lcy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyUGV0cyA9IGxvZy5wbGF5ZXI/LnBldEFycmF5ID8/IFtdO1xuICAgIGNvbnN0IG9wcG9uZW50UGV0cyA9IGxvZy5wbGF5ZXI/Lm9wcG9uZW50Py5wZXRBcnJheSA/PyBbXTtcblxuICAgIGNvbnN0IGZpbmRQZXQgPSAoXG4gICAgICBwZXRzOiBQZXRbXSxcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGV4Y2x1ZGU/OiBQZXQgfCBudWxsLFxuICAgICk6IFBldCB8IG51bGwgPT5cbiAgICAgIHBldHMuZmluZCgocGV0KSA9PiBwZXQ/Lm5hbWUgPT09IG5hbWUgJiYgcGV0ICE9PSBleGNsdWRlKSA/PyBudWxsO1xuXG4gICAgaWYgKCFsb2cuc291cmNlUGV0KSB7XG4gICAgICBsb2cuc291cmNlUGV0ID1cbiAgICAgICAgZmluZFBldChwbGF5ZXJQZXRzLCBuYW1lc1swXSkgPz8gZmluZFBldChvcHBvbmVudFBldHMsIG5hbWVzWzBdKTtcbiAgICB9XG5cbiAgICBpZiAoIWxvZy50YXJnZXRQZXQpIHtcbiAgICAgIGlmIChuYW1lc1sxXSA9PT0gbmFtZXNbMF0pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZVN0YXJ0c1dpdGhTb3VyY2UgPVxuICAgICAgICAgIGxvZy5zb3VyY2VQZXQgJiYgbWVzc2FnZS5zdGFydHNXaXRoKGxvZy5zb3VyY2VQZXQubmFtZSk7XG4gICAgICAgIGlmIChtZXNzYWdlU3RhcnRzV2l0aFNvdXJjZSAmJiBsb2cuc291cmNlUGV0KSB7XG4gICAgICAgICAgLy8gUHJlZmVyIHNlbGYtdGFyZ2V0IHdoZW4gdGhlIG1lc3NhZ2UgYmVnaW5zIHdpdGggdGhlIHNvdXJjZSBuYW1lIGFuZCB0aGUgbmFtZXMgbWF0Y2guXG4gICAgICAgICAgbG9nLnRhcmdldFBldCA9IGxvZy5zb3VyY2VQZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nLnRhcmdldFBldCA9XG4gICAgICAgICAgICBmaW5kUGV0KHBsYXllclBldHMsIG5hbWVzWzFdLCBsb2cuc291cmNlUGV0KSA/P1xuICAgICAgICAgICAgZmluZFBldChvcHBvbmVudFBldHMsIG5hbWVzWzFdLCBsb2cuc291cmNlUGV0KSA/P1xuICAgICAgICAgICAgbG9nLnNvdXJjZVBldCA/P1xuICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLnRhcmdldFBldCA9XG4gICAgICAgICAgZmluZFBldChvcHBvbmVudFBldHMsIG5hbWVzWzFdKSA/PyBmaW5kUGV0KHBsYXllclBldHMsIG5hbWVzWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RQZXROYW1lcyhtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgaWYgKCF0aGlzLnBldE5hbWVSZWdleCB8fCAhbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVzID0gbWVzc2FnZS5tYXRjaCh0aGlzLnBldE5hbWVSZWdleCk7XG4gICAgcmV0dXJuIG1hdGNoZXMgPz8gW107XG4gIH1cblxuICBwcml2YXRlIHRyeU1lcmdlQXR0YWNrSGVhbHRoTG9ncyhcbiAgICBsYXN0TG9nOiBMb2cgfCB1bmRlZmluZWQsXG4gICAgbmV4dExvZzogTG9nLFxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IGdldE1lcmdlZEF0dGFja0hlYWx0aE1lc3NhZ2UobGFzdExvZywgbmV4dExvZyk7XG4gICAgaWYgKCFjb21iaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlZmVyRGVjb3JhdGlvbnMpIHtcbiAgICAgIGxhc3RMb2cucmF3TWVzc2FnZSA9IGNvbWJpbmVkO1xuICAgICAgbGFzdExvZy5tZXNzYWdlID0gY29tYmluZWQ7XG4gICAgICBsYXN0TG9nLmRlY29yYXRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWNvcmF0ZWQgPSB0aGlzLmRlY29yYXRlTWVzc2FnZVdpdGhOYW1lcyhcbiAgICAgICAgY29tYmluZWQsXG4gICAgICAgIGxhc3RMb2cuc291cmNlUGV0LFxuICAgICAgICBsYXN0TG9nLnRhcmdldFBldCxcbiAgICAgICAgbGFzdExvZy5zb3VyY2VJbmRleCxcbiAgICAgICAgbGFzdExvZy50YXJnZXRJbmRleCxcbiAgICAgICk7XG4gICAgICBsYXN0TG9nLm1lc3NhZ2UgPSBkZWNvcmF0ZUlubGluZUljb25zKFxuICAgICAgICBkZWNvcmF0ZWQsXG4gICAgICAgIHRoaXMuaW5saW5lTmFtZVJlZ2V4LFxuICAgICAgICB0aGlzLmlubGluZU5hbWVUeXBlTWFwLFxuICAgICAgICB0aGlzLmFpbG1lbnROYW1lcyxcbiAgICAgICk7XG4gICAgICBsYXN0TG9nLmRlY29yYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEFwcGVuZFN1bW1vbkJvYXJkU3RhdGUobG9nOiBMb2cpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZGVidWdTdW1tb25Cb2FyZFN0YXRlTG9ncykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWxvZz8ubWVzc2FnZSB8fCBsb2cudHlwZSA9PT0gJ2JvYXJkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWxvZy5wbGF5ZXIgfHwgIWxvZy5wbGF5ZXIub3Bwb25lbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXGIoc3VtbW9uZWR8c3Bhd25lZClcXGJ8Xk5vIHJvb20gdG8gc3Bhd25cXGIvaS50ZXN0KGxvZy5tZXNzYWdlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU3VtbW9uQm9hcmRTdGF0ZUxvZyhsb2c6IExvZyk6IHZvaWQge1xuICAgIGNvbnN0IHBsYXllciA9IGxvZy5wbGF5ZXI7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBsb2cucGxheWVyPy5vcHBvbmVudDtcbiAgICBpZiAoIXBsYXllciB8fCAhb3Bwb25lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ3MucHVzaCh7XG4gICAgICBtZXNzYWdlOiB0aGlzLmJ1aWxkUGxhaW5Cb2FyZFN0YXRlTWVzc2FnZShwbGF5ZXIsIG9wcG9uZW50KSxcbiAgICAgIHR5cGU6ICdib2FyZCcsXG4gICAgICBwbGF5ZXIsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGxhaW5Cb2FyZFN0YXRlTWVzc2FnZShwbGF5ZXI6IFBsYXllciwgb3Bwb25lbnQ6IFBsYXllcik6IHN0cmluZyB7XG4gICAgY29uc3QgcGxheWVyU3RhdGUgPSBbXG4gICAgICBwbGF5ZXIucGV0NCxcbiAgICAgIHBsYXllci5wZXQzLFxuICAgICAgcGxheWVyLnBldDIsXG4gICAgICBwbGF5ZXIucGV0MSxcbiAgICAgIHBsYXllci5wZXQwLFxuICAgIF1cbiAgICAgIC5tYXAoKHBldCkgPT4gdGhpcy5yZW5kZXJQbGFpblBldFRleHQocGV0KSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBvcHBvbmVudFN0YXRlID0gW1xuICAgICAgb3Bwb25lbnQucGV0MCxcbiAgICAgIG9wcG9uZW50LnBldDEsXG4gICAgICBvcHBvbmVudC5wZXQyLFxuICAgICAgb3Bwb25lbnQucGV0MyxcbiAgICAgIG9wcG9uZW50LnBldDQsXG4gICAgXVxuICAgICAgLm1hcCgocGV0KSA9PiB0aGlzLnJlbmRlclBsYWluUGV0VGV4dChwZXQpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBgJHtwbGF5ZXJTdGF0ZX0gfCAke29wcG9uZW50U3RhdGV9YDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUGxhaW5QZXRUZXh0KHBldDogUGV0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKCFwZXQpIHtcbiAgICAgIHJldHVybiAnX19fICgtLy0pJztcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEZyb250SW5kZXgocGV0KTtcbiAgICBjb25zdCBsYWJlbCA9IGluZGV4ICE9IG51bGwgPyBgJHtwZXQucGFyZW50Py5pc09wcG9uZW50ID8gJ08nIDogJ1AnfSR7aW5kZXh9YCA6ICdQPyc7XG4gICAgcmV0dXJuIGAke2xhYmVsfSAke3BldC5uYW1lfSgke3BldC5hdHRhY2t9LyR7cGV0LmhlYWx0aH0vJHtwZXQuZXhwfXhwKWA7XG4gIH1cblxuICBwcmludFN0YXRlKHBsYXllcjogUGxheWVyLCBvcHBvbmVudDogUGxheWVyLCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuY3JlYXRlTG9nKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgdHlwZTogJ2JvYXJkJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBib2FyZE1lc3NhZ2UgPSBidWlsZEJvYXJkU3RhdGVNZXNzYWdlKFxuICAgICAgcGxheWVyLFxuICAgICAgb3Bwb25lbnQsXG4gICAgICAocGV0KSA9PiB0aGlzLmdldEZyb250SW5kZXgocGV0KSxcbiAgICAgIChuYW1lKSA9PiB0aGlzLmlzQWlsbWVudE5hbWUobmFtZSksXG4gICAgKTtcblxuICAgIHRoaXMuY3JlYXRlTG9nKHtcbiAgICAgIG1lc3NhZ2U6IGJvYXJkTWVzc2FnZSxcbiAgICAgIHR5cGU6ICdib2FyZCcsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbiIsICJjb25zdCBCWVRFX0NIVU5LX1NJWkUgPSAweDgwMDA7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJhc2U2NFVybCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYmFzZTY0ID0gdmFsdWVcbiAgICAucmVwbGFjZSgvXFxzL2csICcrJylcbiAgICAucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgY29uc3QgcGFkTGVuZ3RoID0gKDQgLSAoYmFzZTY0Lmxlbmd0aCAlIDQpKSAlIDQ7XG4gIHJldHVybiBgJHtiYXNlNjR9JHsnPScucmVwZWF0KHBhZExlbmd0aCl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUJhc2U2NFVybCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUodmFsdWUpO1xuICBsZXQgYmluYXJ5ID0gJyc7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBieXRlcy5sZW5ndGg7IGluZGV4ICs9IEJZVEVfQ0hVTktfU0laRSkge1xuICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgLi4uYnl0ZXMuc3ViYXJyYXkoaW5kZXgsIGluZGV4ICsgQllURV9DSFVOS19TSVpFKSxcbiAgICApO1xuICB9XG4gIHJldHVybiBidG9hKGJpbmFyeSlcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAucmVwbGFjZSgvPSskL2csICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUJhc2U2NFVybCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYmluYXJ5ID0gYXRvYihub3JtYWxpemVCYXNlNjRVcmwodmFsdWUpKTtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oYmluYXJ5LCAoY2hhcmFjdGVyKSA9PlxuICAgIGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApLFxuICApO1xuICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGJ5dGVzKTtcbn1cbiIsICJpbXBvcnQgeyBwZXJrcyBhcyBwZXJrcyB9IGZyb20gJ2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MnO1xuaW1wb3J0IHsgdG95cyBhcyB0b3lzIH0gZnJvbSAnYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncyc7XG5pbXBvcnQgeyBwZXRzIGFzIHBldHNCeVRpZXIgfSBmcm9tICdhcHAvcnVudGltZS9jb250ZW50LWNhdGFsb2dzJztcblxuZXhwb3J0IGNvbnN0IFBFVFNfQllfSUQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuZXhwb3J0IGNvbnN0IFBFVFNfTUVUQV9CWV9JRCA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAgeyBuYW1lOiBzdHJpbmc7IHRpZXI6IG51bWJlciB9XG4+KCk7XG5cbmV4cG9ydCBjb25zdCBQRVRfSURTX0JZX05BTUUgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG50eXBlIFJlcGxheURhdGFQZXQgPSB7XG4gIElkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpZD86IHN0cmluZyB8IG51bWJlcjtcbiAgVGllcj86IG51bWJlciB8IHN0cmluZztcbiAgdGllcj86IG51bWJlciB8IHN0cmluZztcbiAgTmFtZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn07XG5cbnR5cGUgUmVwbGF5RGF0YUNvbnRhaW5lcjxUPiA9IHtcbiAgZGVmYXVsdD86IFQ7XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdFJlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IHBldHNNb2R1bGUgPSBwZXRzQnlUaWVyIGFzIHVua25vd24gYXMgUmVwbGF5RGF0YUNvbnRhaW5lcjx1bmtub3duPjtcbmNvbnN0IHBldExpc3RSYXcgPSBwZXRzTW9kdWxlLmRlZmF1bHQgPz8gcGV0c0J5VGllcjtcbmNvbnN0IHBldExpc3QgPSBBcnJheS5pc0FycmF5KHBldExpc3RSYXcpXG4gID8gcGV0TGlzdFJhd1xuICA6IGlzT2JqZWN0UmVjb3JkKHBldExpc3RSYXcpXG4gICAgPyBPYmplY3QudmFsdWVzKHBldExpc3RSYXcpLmZpbHRlcih2ID0+IHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICgnSWQnIGluIHYgfHwgJ2lkJyBpbiB2KSlcbiAgICA6IFtdO1xuXG5wZXRMaXN0LmZvckVhY2goKHBldFVua25vd24pID0+IHtcbiAgaWYgKCFpc09iamVjdFJlY29yZChwZXRVbmtub3duKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwZXQgPSBwZXRVbmtub3duIGFzIFJlcGxheURhdGFQZXQ7XG4gIGNvbnN0IHBldElkID0gU3RyaW5nKHBldC5JZCA/PyBwZXQuaWQpO1xuICBjb25zdCB0aWVyVmFsdWUgPSBOdW1iZXIocGV0LlRpZXIgPz8gcGV0LnRpZXIpO1xuICBjb25zdCBuYW1lID0gcGV0Lk5hbWUgPz8gcGV0Lm5hbWU7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBQRVRTX0JZX0lELnNldChwZXRJZCwgbmFtZSk7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICcnKTtcbiAgICBQRVRfSURTX0JZX05BTUUuc2V0KG5vcm1hbGl6ZWROYW1lLCBwZXRJZCk7XG4gIH1cblxuICBpZiAoTnVtYmVyLmlzRmluaXRlKHRpZXJWYWx1ZSkgJiYgbmFtZSkge1xuICAgIFBFVFNfTUVUQV9CWV9JRC5zZXQocGV0SWQsIHsgbmFtZSwgdGllcjogdGllclZhbHVlIH0pO1xuICB9XG59KTtcblxuY29uc3QgcGVya0xpc3QgPVxuICAocGVya3MgYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBBcnJheTx7IElkOiBzdHJpbmc7IE5hbWU6IHN0cmluZyB9PiB9KVxuICAgIC5kZWZhdWx0ID8/IChwZXJrcyBhcyB1bmtub3duIGFzIEFycmF5PHsgSWQ6IHN0cmluZzsgTmFtZTogc3RyaW5nIH0+KTtcbmNvbnN0IHRveUxpc3QgPVxuICAodG95cyBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IEFycmF5PHsgSWQ6IHN0cmluZzsgTmFtZTogc3RyaW5nIH0+IH0pXG4gICAgLmRlZmF1bHQgPz8gKHRveXMgYXMgdW5rbm93biBhcyBBcnJheTx7IElkOiBzdHJpbmc7IE5hbWU6IHN0cmluZyB9Pik7XG5cbmV4cG9ydCBjb25zdCBQRVJLU19CWV9JRCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KFxuICBwZXJrTGlzdC5tYXAoKHBlcmspID0+IFtTdHJpbmcocGVyay5JZCksIHBlcmsuTmFtZV0pLFxuKTtcbmV4cG9ydCBjb25zdCBUT1lTX0JZX0lEID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oXG4gIHRveUxpc3QubWFwKCh0b3kpID0+IFtTdHJpbmcodG95LklkKSwgdG95Lk5hbWVdKSxcbik7XG5cbmV4cG9ydCBjb25zdCBQQUNLX01BUDogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgMDogJ1R1cnRsZScsXG4gIDE6ICdQdXBweScsXG4gIDI6ICdTdGFyJyxcbiAgNTogJ0dvbGRlbicsXG4gIDY6ICdVbmljb3JuJyxcbiAgNzogJ0RhbmdlcicsXG59O1xuXG5jb25zdCBQQVJST1RfQ09QWV9QRVRfQUJPTUlOQVRJT05fS0VZX01BUDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBmb3IgKGxldCBvdXRlciA9IDE7IG91dGVyIDw9IDM7IG91dGVyKyspIHtcbiAgICBjb25zdCBiYXNlID0gYHBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldCR7b3V0ZXJ9YDtcbiAgICBjb25zdCBvdXRlclByZWZpeCA9IGBwQ1BBUyR7b3V0ZXJ9YDtcbiAgICBtYXBbYmFzZV0gPSBvdXRlclByZWZpeDtcbiAgICBtYXBbYCR7YmFzZX1CZWx1Z2FTd2FsbG93ZWRQZXRgXSA9IGAke291dGVyUHJlZml4fUJgO1xuICAgIG1hcFtgJHtiYXNlfUxldmVsYF0gPSBgJHtvdXRlclByZWZpeH1MYDtcbiAgICBtYXBbYCR7YmFzZX1UaW1lc0h1cnRgXSA9IGAke291dGVyUHJlZml4fVRgO1xuICAgIG1hcFtgJHtiYXNlfVBhcnJvdENvcHlQZXRgXSA9IGAke291dGVyUHJlZml4fVBDUGA7XG4gICAgbWFwW2Ake2Jhc2V9UGFycm90Q29weVBldEJlbHVnYVN3YWxsb3dlZFBldGBdID0gYCR7b3V0ZXJQcmVmaXh9UENQQmA7XG4gICAgZm9yIChsZXQgaW5uZXIgPSAxOyBpbm5lciA8PSAzOyBpbm5lcisrKSB7XG4gICAgICBjb25zdCBpbm5lckJhc2UgPSBgJHtiYXNlfVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldCR7aW5uZXJ9YDtcbiAgICAgIGNvbnN0IGlubmVyUHJlZml4ID0gYCR7b3V0ZXJQcmVmaXh9UENQQVMke2lubmVyfWA7XG4gICAgICBtYXBbaW5uZXJCYXNlXSA9IGlubmVyUHJlZml4O1xuICAgICAgbWFwW2Ake2lubmVyQmFzZX1CZWx1Z2FTd2FsbG93ZWRQZXRgXSA9IGAke2lubmVyUHJlZml4fUJgO1xuICAgICAgbWFwW2Ake2lubmVyQmFzZX1MZXZlbGBdID0gYCR7aW5uZXJQcmVmaXh9TGA7XG4gICAgICBtYXBbYCR7aW5uZXJCYXNlfVRpbWVzSHVydGBdID0gYCR7aW5uZXJQcmVmaXh9VGA7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXA7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgS0VZX01BUDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgcGxheWVyUGFjazogJ3BQJyxcbiAgb3Bwb25lbnRQYWNrOiAnb1AnLFxuICBwbGF5ZXJUb3k6ICdwVCcsXG4gIHBsYXllclRveUxldmVsOiAncFRMJyxcbiAgcGxheWVySGFyZFRveTogJ3BIVCcsXG4gIHBsYXllckhhcmRUb3lMZXZlbDogJ3BIVEwnLFxuICBvcHBvbmVudFRveTogJ29UJyxcbiAgb3Bwb25lbnRUb3lMZXZlbDogJ29UTCcsXG4gIG9wcG9uZW50SGFyZFRveTogJ29IVCcsXG4gIG9wcG9uZW50SGFyZFRveUxldmVsOiAnb0hUTCcsXG4gIHR1cm46ICd0JyxcbiAgcGxheWVyR29sZFNwZW50OiAncEdTJyxcbiAgb3Bwb25lbnRHb2xkU3BlbnQ6ICdvR1MnLFxuICBwbGF5ZXJSb2xsQW1vdW50OiAncFJBJyxcbiAgb3Bwb25lbnRSb2xsQW1vdW50OiAnb1JBJyxcbiAgcGxheWVyU3VtbW9uZWRBbW91bnQ6ICdwU0EnLFxuICBvcHBvbmVudFN1bW1vbmVkQW1vdW50OiAnb1NBJyxcbiAgcGxheWVyTGV2ZWwzU29sZDogJ3BMMycsXG4gIG9wcG9uZW50TGV2ZWwzU29sZDogJ29MMycsXG4gIHBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50OiAncFRBJyxcbiAgb3Bwb25lbnRUcmFuc2Zvcm1hdGlvbkFtb3VudDogJ29UQScsXG4gIHBsYXllclBldHM6ICdwJyxcbiAgb3Bwb25lbnRQZXRzOiAnbycsXG4gIGFsbFBldHM6ICdhcCcsXG4gIGxvZ0ZpbHRlcjogJ2xmJyxcbiAgY3VzdG9tUGFja3M6ICdjcCcsXG4gIG9sZFN0b3JrOiAnb3MnLFxuICB0b2tlblBldHM6ICd0cCcsXG4gIGtvbW9kb1NodWZmbGU6ICdrcycsXG4gIG1hbmE6ICdtJyxcbiAgc2VlZDogJ3NkJyxcbiAgdHJpZ2dlcnNDb25zdW1lZDogJ3RjJyxcbiAgc2hvd0FkdmFuY2VkOiAnc2EnLFxuICBzaG93VHJpZ2dlck5hbWVzSW5Mb2dzOiAnc3RuJyxcbiAgc2hvd1Bvc2l0aW9uYWxBcmdzSW5Mb2dzOiAnc3BhJyxcbiAgYWlsbWVudEVxdWlwbWVudDogJ2FlJyxcbiAgbmFtZTogJ24nLFxuICBhdHRhY2s6ICdhJyxcbiAgaGVhbHRoOiAnaCcsXG4gIGV4cDogJ2UnLFxuICBlcXVpcG1lbnQ6ICdlcScsXG4gIGJlbHVnYVN3YWxsb3dlZFBldDogJ2JTUCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ2FTUDEnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdhU1AyJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnYVNQMycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUJlbHVnYVN3YWxsb3dlZFBldDogJ2FTUDFCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyQmVsdWdhU3dhbGxvd2VkUGV0OiAnYVNQMkInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdhU1AzQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6ICdhU1AxU0ZTJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogJ2FTUDJTRlMnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiAnYVNQM1NGUycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUxldmVsOiAnYVNQMUwnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogJ2FTUDJMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWw6ICdhU1AzTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogJ2FTUDFUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAnYVNQMlQnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6ICdhU1AzVCcsXG4gIHBhcnJvdENvcHlQZXQ6ICdwQ1AnLFxuICBwYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0OiAncENQQicsXG4gIC4uLlBBUlJPVF9DT1BZX1BFVF9BQk9NSU5BVElPTl9LRVlfTUFQLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0OiAnYVNQMVBDUCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXQ6ICdhU1AyUENQJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldDogJ2FTUDNQQ1AnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0OiAnYVNQMVBDUEInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0OiAnYVNQMlBDUEInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0OiAnYVNQM1BDUEInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiAnYVNQMVBDUEFTMScsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdhU1AxUENQQVMyJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogJ2FTUDFQQ1BBUzMnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiAnYVNQMlBDUEFTMScsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdhU1AyUENQQVMyJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogJ2FTUDJQQ1BBUzMnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiAnYVNQM1BDUEFTMScsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdhU1AzUENQQVMyJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogJ2FTUDNQQ1BBUzMnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AxUENQQVMxQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDFQQ1BBUzJCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQMVBDUEFTM0InLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AyUENQQVMxQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDJQQ1BBUzJCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQMlBDUEFTM0InLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AzUENQQVMxQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDNQQ1BBUzJCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQM1BDUEFTM0InLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6XG4gICAgJ2FTUDFQQ1BBUzFMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOlxuICAgICdhU1AxUENQQVMyTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDpcbiAgICAnYVNQMVBDUEFTM0wnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6XG4gICAgJ2FTUDJQQ1BBUzFMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOlxuICAgICdhU1AyUENQQVMyTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDpcbiAgICAnYVNQMlBDUEFTM0wnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6XG4gICAgJ2FTUDNQQ1BBUzFMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOlxuICAgICdhU1AzUENQQVMyTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDpcbiAgICAnYVNQM1BDUEFTM0wnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OlxuICAgICdhU1AxUENQQVMxVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6XG4gICAgJ2FTUDFQQ1BBUzJUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDpcbiAgICAnYVNQMVBDUEFTM1QnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OlxuICAgICdhU1AyUENQQVMxVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6XG4gICAgJ2FTUDJQQ1BBUzJUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDpcbiAgICAnYVNQMlBDUEFTM1QnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OlxuICAgICdhU1AzUENQQVMxVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6XG4gICAgJ2FTUDNQQ1BBUzJUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDpcbiAgICAnYVNQM1BDUEFTM1QnLFxuICB0aW1lc0h1cnQ6ICd0SCcsXG4gIGFpbG1lbnRzQ291bnQ6ICdhQycsXG4gIGZyaWVuZHNIdXJ0QmVmb3JlQmF0dGxlOiAnZkhCQicsXG59O1xuIiwgIi8qIFV0aWxpdGllcyBwb3J0ZWQvYWRhcHRlZCBmcm9tIHJlcGxheSBwYXJpdHkgZml4ZXMgUFIuXG4gICBQdXJwb3NlOiByb2J1c3QgcGV0L3RveSBpZCByZXNvbHV0aW9uLCBhYmlsaXR5IGZhbGxiYWNrcywgYWJvbWluYXRpb25cbiAgIHN3YWxsb3dlZC1wZXQgaW5mZXJlbmNlLCBhbmQgc21hbGwgaGVscGVycyB1c2VkIGJ5IHRoZSByZXBsYXkgcGFyc2VyLlxuKi9cblxudHlwZSBSZXBsYXlVbmtub3duUmVjb3JkID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG50eXBlIFJlcGxheU5hbWVMb29rdXAgPVxuICB8IE1hcDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj5cbiAgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheVBhcnNlckxvb2t1cE1hcHMge1xuICBwZXRJZHNCeU5hbWU/OiBSZXBsYXlOYW1lTG9va3VwO1xuICBQRVRfSURTX0JZX05BTUU/OiBSZXBsYXlOYW1lTG9va3VwO1xuICBhYmlsaXR5SWRzQnlQZXRJZD86IFJlY29yZDxzdHJpbmcsIEFycmF5PHN0cmluZyB8IG51bWJlcj4gfCB1bmRlZmluZWQ+O1xuICB0b3lJZHNCeU5hbWU/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+O1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5TWVtb3J5UGF5bG9hZCB7XG4gIExzdHM6IFJlY29yZDxzdHJpbmcsIFJlcGxheVVua25vd25SZWNvcmRbXT47XG59XG5cbmludGVyZmFjZSBSZXBsYXlNZW1vcnlFbnRyeSBleHRlbmRzIFJlcGxheVVua25vd25SZWNvcmQge1xuICBFbnU6IG51bWJlcjtcbiAgQXQ/OiBudW1iZXI7XG4gIEhwPzogbnVtYmVyO1xuICBNYW5hPzogbnVtYmVyIHwgbnVsbDtcbiAgTHZsPzogbnVtYmVyO1xuICBFeHA/OiBudW1iZXIgfCBudWxsO1xuICBQZXJrPzogbnVtYmVyIHwgbnVsbDtcbiAgUG93YT86IG51bWJlciB8IG51bGw7XG4gIEhydEM/OiBudW1iZXIgfCBudWxsO1xuICBNaU1zPzogUmVwbGF5TWVtb3J5UGF5bG9hZDtcbn1cblxuaW50ZXJmYWNlIEFib21pbmF0aW9uU2xvdENvbmZpZyB7XG4gIHBldEtleTogc3RyaW5nO1xuICBsZXZlbEtleTogc3RyaW5nO1xuICBiZWx1Z2FLZXk6IHN0cmluZztcbiAgc2ZzS2V5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBYm9taW5hdGlvblN3YWxsb3dlZEVudHJ5IHtcbiAgc3dhbGxvd2VkUGV0SWQ6IG51bWJlcjtcbiAgc3dhbGxvd2VkQWJpbGl0eUVudW1zOiBudW1iZXJbXTtcbiAgbWVtb3J5RW50cnk6IFJlcGxheU1lbW9yeUVudHJ5O1xuICBiZWx1Z2FTd2FsbG93ZWRFbnRyeT86IFJlcGxheU1lbW9yeVBheWxvYWQgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5V2FybmluZ0JhZyB7XG4gIHVua25vd25Ub3lzOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUFiaWxpdHlFbnRyeSB7XG4gIEVudTogbnVtYmVyO1xuICBMdmw6IG51bWJlcjtcbiAgTmF0OiBib29sZWFuO1xuICBEdXI6IG51bWJlcjtcbiAgVHJDbzogbnVtYmVyO1xuICBDaGFyOiBudWxsO1xuICBEaXM6IGJvb2xlYW47XG4gIEFJTUw6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBSZXBsYXlSZWxpY0l0ZW0ge1xuICBPd246IG51bWJlcjtcbiAgRW51OiBudW1iZXI7XG4gIExvYzogbnVtYmVyO1xuICBQb2k6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgRXhwOiBudW1iZXI7XG4gIEx2bDogbnVtYmVyO1xuICBIcDogeyBQZXJtOiBudW1iZXI7IFRlbXA6IG51bWJlcjsgTWF4OiBudW1iZXIgfCBudWxsIH07XG4gIEF0OiB7IFBlcm06IG51bWJlcjsgVGVtcDogbnVtYmVyOyBNYXg6IG51bWJlciB8IG51bGwgfTtcbiAgTWFuYTogbnVtYmVyO1xuICBDb3U6IG51bWJlcjtcbiAgUGVCbzogYm9vbGVhbjtcbiAgUGVEdTogbnVsbDtcbiAgUGVETTogbnVsbDtcbiAgUGVNdTogbnVsbDtcbiAgUGVEcjogbnVtYmVyO1xuICBBYmlsOiBSZXBsYXlBYmlsaXR5RW50cnlbXTtcbiAgQWJEaTogYm9vbGVhbjtcbiAgQ29zbTogbnVtYmVyO1xuICBEZWFkOiBib29sZWFuO1xuICBEZXN0OiBib29sZWFuO1xuICBEZUJ5OiBudWxsO1xuICBMaW5rOiBudWxsO1xuICBQb3c6IG51bGw7XG4gIFNlVjogbnVsbDtcbiAgUndkczogbnVtYmVyO1xuICBSd3JkOiBib29sZWFuO1xuICBNaU1zOiBudWxsO1xuICBTcE1lOiBudWxsO1xuICBUcmk6IG51bGw7XG4gIEF0a0M6IG51bWJlcjtcbiAgSHJ0QzogbnVtYmVyO1xuICBTcENUOiBudW1iZXI7XG4gIE9sVHM6IG51bGw7XG4gIExhc3RUYXJnZXRzVGhpc1R1cm46IG51bGw7XG4gIElkOiB7IEJvSWQ6IHN0cmluZzsgVW5pOiBudW1iZXIgfTtcbiAgUHJpOiBudW1iZXI7XG4gIEZybzogYm9vbGVhbjtcbiAgV0ZybzogYm9vbGVhbjtcbiAgQUZybzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEZBTExCQUNLX0FCSUxJVFlfSURTX0JZX1BFVF9JRDogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+ID0ge1xuICAnMzM4JzogWzM2OF0sXG4gICczNzMnOiBbNDAzXSxcbiAgJzYzNSc6IFs2NjldLFxuICAvLyBTYXJjYXN0aWMgRnJpbmdlaGVhZCBvYnNlcnZlZCBtdWx0aXBsZSBhYmlsaXR5IGVudW1zIGluIHBheWxvYWRzXG4gICc3NjMnOiBbODUzLCA5NzBdLFxufTtcblxuZXhwb3J0IGNvbnN0IEZBTExCQUNLX1RPWV9JRFNfQllfTkFNRTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcbiAgYWN0aW9uZmlndXJlOiAyOTQsXG4gIGFpcnBhbG10cmVlOiA1MTEsXG4gIGJhbGxvb246IDQ3OSxcbiAgYm9vdDogMjk5LFxuICBib3dsaW5nYmFsbDogMzAwLFxuICBicm9rZW5waWdneWJhbms6IDMxMCxcbiAgYnJvb206IDMwMSxcbiAgY2FyZGJvYXJkYm94OiAzMDIsXG4gIC8vICh0cmltbWVkIGxpc3QgLSBpbmNsdWRlIGNvbW1vbiBmYWxsYmFja3MgdXNlZCBpbiBsaXZlIHBheWxvYWRzKVxuICB0ZWxldmlzaW9uOiA0OTEsXG4gIHRveW1vdXNlOiAzMjcsXG59O1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVwbGF5VW5rbm93blJlY29yZCB7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjb3JkKHZhbHVlOiB1bmtub3duKTogUmVwbGF5VW5rbm93blJlY29yZCB8IG51bGwge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEJ5TmFtZUxvb2t1cChcbiAgbG9va3VwOiBSZXBsYXlOYW1lTG9va3VwIHwgdW5kZWZpbmVkLFxuICBrZXk6IHN0cmluZyxcbik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICghbG9va3VwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAobG9va3VwIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgcmV0dXJuIGxvb2t1cC5nZXQoa2V5KTtcbiAgfVxuICByZXR1cm4gbG9va3VwW2tleV07XG59XG5cbmZ1bmN0aW9uIHRvSW50T3JOdWxsKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IG4gPSBOdW1iZXIodmFsdWUpO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gTWF0aC50cnVuYyhuKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRvTnVsbGFibGVOdW1iZXIodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgbiA9IE51bWJlcih2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRmluaXRlTnVtYmVyKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjayA9IDApOiBudW1iZXIge1xuICBjb25zdCBudW1lcmljID0gTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShudW1lcmljKSA/IG51bWVyaWMgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQZXRJZEZyb21Vbmtub3duKFxuICB2YWx1ZTogdW5rbm93bixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICBjb25zdCBkaXJlY3RJZENhbmRpZGF0ZXMgPSBbXG4gICAgICB2YWx1ZVsnaWQnXSxcbiAgICAgIHZhbHVlWydJZCddLFxuICAgICAgdmFsdWVbJ3BldElkJ10sXG4gICAgICB2YWx1ZVsnUGV0SWQnXSxcbiAgICAgIHZhbHVlWydlbnVtJ10sXG4gICAgICB2YWx1ZVsnRW51bSddLFxuICAgICAgdmFsdWVbJ0VudSddLFxuICAgICAgdmFsdWVbJ2VudSddLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0SWRDYW5kaWRhdGVzKSB7XG4gICAgICBpZiAoY2FuZGlkYXRlID09PSB1bmRlZmluZWQgfHwgY2FuZGlkYXRlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgbnVtZXJpYyA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMobnVtZXJpYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZVJhdyA9IHZhbHVlWyduYW1lJ10gPz8gdmFsdWVbJ05hbWUnXTtcbiAgICBpZiAodHlwZW9mIG5hbWVSYXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBrZXkgPSBuYW1lUmF3LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICcnKTtcbiAgICAgIGNvbnN0IHBldElkc0J5TmFtZSA9IG1hcHM/LnBldElkc0J5TmFtZSA/PyBtYXBzPy5QRVRfSURTX0JZX05BTUU7XG4gICAgICBjb25zdCBpZCA9IGdldEJ5TmFtZUxvb2t1cChwZXRJZHNCeU5hbWUsIGtleSk7XG4gICAgICBjb25zdCBudW1lcmljID0gdG9JbnRPck51bGwoaWQpO1xuICAgICAgaWYgKG51bWVyaWMgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bWVyaWM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpO1xuICAgIGlmIChzID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG51bWVyaWMgPSB0b0Zpbml0ZU51bWJlcihzLCBOYU4pO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHtcbiAgICAgIHJldHVybiBNYXRoLnRydW5jKG51bWVyaWMpO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICcnKTtcbiAgICBjb25zdCBwZXRJZHNCeU5hbWUgPSBtYXBzPy5wZXRJZHNCeU5hbWUgPz8gbWFwcz8uUEVUX0lEU19CWV9OQU1FO1xuICAgIGNvbnN0IGlkID0gZ2V0QnlOYW1lTG9va3VwKHBldElkc0J5TmFtZSwga2V5KTtcbiAgICBjb25zdCBtYXBwZWQgPSB0b0ludE9yTnVsbChpZCk7XG4gICAgaWYgKG1hcHBlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBudW1lcmljID0gdG9GaW5pdGVOdW1iZXIodmFsdWUsIE5hTik7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHtcbiAgICByZXR1cm4gTWF0aC50cnVuYyhudW1lcmljKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZU51bWJlcnModmFsdWVzOiB1bmtub3duW10pOiBudW1iZXJbXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBmb3IgKGNvbnN0IHYgb2YgdmFsdWVzKSB7XG4gICAgaWYgKHYgPT09IG51bGwgfHwgdiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcih2KTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBNYXRoLnRydW5jKG4pO1xuICAgIGlmIChzZWVuLmhhcyhub3JtYWxpemVkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHNlZW4uYWRkKG5vcm1hbGl6ZWQpO1xuICAgIG91dC5wdXNoKG5vcm1hbGl6ZWQpO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBYmlsaXR5RW51bXNGb3JQZXQoXG4gIHBldElkOiBudW1iZXIsXG4gIG1hcHM/OiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzLFxuKTogbnVtYmVyW10ge1xuICBjb25zdCBhYmlsaXR5TWFwID0gbWFwcz8uYWJpbGl0eUlkc0J5UGV0SWQgPz8ge307XG4gIGNvbnN0IGtleSA9IFN0cmluZyhwZXRJZCk7XG4gIGNvbnN0IG1hcHBlZCA9IEFycmF5LmlzQXJyYXkoYWJpbGl0eU1hcFtrZXldKSA/IGFiaWxpdHlNYXBba2V5XSA/PyBbXSA6IFtdO1xuICBjb25zdCBmYWxsYmFjayA9IEFycmF5LmlzQXJyYXkoRkFMTEJBQ0tfQUJJTElUWV9JRFNfQllfUEVUX0lEW2tleV0pXG4gICAgPyBGQUxMQkFDS19BQklMSVRZX0lEU19CWV9QRVRfSURba2V5XVxuICAgIDogW107XG4gIHJldHVybiB1bmlxdWVOdW1iZXJzKFsuLi5tYXBwZWQsIC4uLmZhbGxiYWNrXSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoc3dhbGxvd2VkUmF3OiB1bmtub3duKTogUmVwbGF5TWVtb3J5RW50cnkgfCBudWxsIHtcbiAgY29uc3Qgc3dhbGxvd2VkUGV0SWQgPSByZXNvbHZlUGV0SWRGcm9tVW5rbm93bihzd2FsbG93ZWRSYXcpO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShzd2FsbG93ZWRQZXRJZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBlbnRyeTogUmVwbGF5TWVtb3J5RW50cnkgPSB7IEVudTogc3dhbGxvd2VkUGV0SWQgfTtcbiAgY29uc3Qgc3dhbGxvd2VkID0gZ2V0UmVjb3JkKHN3YWxsb3dlZFJhdyk7XG4gIGlmICghc3dhbGxvd2VkKSB7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG4gIGNvbnN0IGF0dGFjayA9IHRvRmluaXRlTnVtYmVyKFxuICAgIHN3YWxsb3dlZFsnYXR0YWNrJ10gPz8gc3dhbGxvd2VkWydBdCddID8/IHN3YWxsb3dlZFsnYXQnXSxcbiAgICBOYU4sXG4gICk7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUoYXR0YWNrKSkge1xuICAgIGVudHJ5LkF0ID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChhdHRhY2spKTtcbiAgfVxuICBjb25zdCBoZWFsdGggPSB0b0Zpbml0ZU51bWJlcihcbiAgICBzd2FsbG93ZWRbJ2hlYWx0aCddID8/IHN3YWxsb3dlZFsnSHAnXSA/PyBzd2FsbG93ZWRbJ2hwJ10sXG4gICAgTmFOLFxuICApO1xuICBpZiAoTnVtYmVyLmlzRmluaXRlKGhlYWx0aCkpIHtcbiAgICBlbnRyeS5IcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVhbHRoKSk7XG4gIH1cbiAgY29uc3QgbWFuYSA9IHRvRmluaXRlTnVtYmVyKHN3YWxsb3dlZFsnbWFuYSddID8/IHN3YWxsb3dlZFsnTWFuYSddLCBOYU4pO1xuICBpZiAoTnVtYmVyLmlzRmluaXRlKG1hbmEpKSB7XG4gICAgZW50cnkuTWFuYSA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQobWFuYSkpO1xuICB9XG4gIGNvbnN0IGxldmVsID0gdG9GaW5pdGVOdW1iZXIoXG4gICAgc3dhbGxvd2VkWydsZXZlbCddID8/IHN3YWxsb3dlZFsnbHZsJ10gPz8gc3dhbGxvd2VkWydMdmwnXSxcbiAgICBOYU4sXG4gICk7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUobGV2ZWwpKSB7XG4gICAgZW50cnkuTHZsID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChsZXZlbCkpKTtcbiAgfVxuICBjb25zdCBleHAgPSB0b0Zpbml0ZU51bWJlcihzd2FsbG93ZWRbJ2V4cCddID8/IHN3YWxsb3dlZFsnRXhwJ10sIE5hTik7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUoZXhwKSkge1xuICAgIGVudHJ5LkV4cCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoZXhwKSk7XG4gIH1cbiAgY29uc3QgcGVyayA9IHN3YWxsb3dlZFsncGVyayddID8/IHN3YWxsb3dlZFsnUGVyayddO1xuICBjb25zdCBwZXJrTnVtYmVyID0gdG9OdWxsYWJsZU51bWJlcihwZXJrKTtcbiAgaWYgKHBlcmtOdW1iZXIgIT09IG51bGwpIHtcbiAgICBlbnRyeS5QZXJrID0gcGVya051bWJlcjtcbiAgfVxuICBjb25zdCB0aW1lc0h1cnQgPSB0b0Zpbml0ZU51bWJlcihcbiAgICBzd2FsbG93ZWRbJ3RpbWVzSHVydCddID8/IHN3YWxsb3dlZFsnVGltZXNIdXJ0J10gPz8gc3dhbGxvd2VkWydIcnRDJ10sXG4gICAgTmFOLFxuICApO1xuICBpZiAoTnVtYmVyLmlzRmluaXRlKHRpbWVzSHVydCkpIHtcbiAgICBlbnRyeS5IcnRDID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZCh0aW1lc0h1cnQpKTtcbiAgfVxuICByZXR1cm4gZW50cnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0QWJvbWluYXRpb25Td2FsbG93ZWRFbnRyaWVzKFxuICByYXdQZXQ6IHVua25vd24sXG4gIG1hcHM/OiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzLFxuKTogQWJvbWluYXRpb25Td2FsbG93ZWRFbnRyeVtdIHtcbiAgY29uc3Qgc2xvdENvbmZpZ3M6IEFib21pbmF0aW9uU2xvdENvbmZpZ1tdID0gW1xuICAgIHtcbiAgICAgIHBldEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MScsXG4gICAgICBsZXZlbEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MUxldmVsJyxcbiAgICAgIGJlbHVnYUtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MUJlbHVnYVN3YWxsb3dlZFBldCcsXG4gICAgICBzZnNLZXk6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDFTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBldEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MicsXG4gICAgICBsZXZlbEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsJyxcbiAgICAgIGJlbHVnYUtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MkJlbHVnYVN3YWxsb3dlZFBldCcsXG4gICAgICBzZnNLZXk6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDJTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBldEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MycsXG4gICAgICBsZXZlbEtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsJyxcbiAgICAgIGJlbHVnYUtleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldCcsXG4gICAgICBzZnNLZXk6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDNTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgICB9LFxuICBdO1xuICBjb25zdCByb290ID0gZ2V0UmVjb3JkKHJhd1BldCk7XG4gIGNvbnN0IGVudHJpZXM6IEFib21pbmF0aW9uU3dhbGxvd2VkRW50cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHNsb3RDb25maWcgb2Ygc2xvdENvbmZpZ3MpIHtcbiAgICBjb25zdCBzd2FsbG93ZWRSYXcgPSByb290Py5bc2xvdENvbmZpZy5wZXRLZXldO1xuICAgIGNvbnN0IHN3YWxsb3dlZFBldElkID0gcmVzb2x2ZVBldElkRnJvbVVua25vd24oc3dhbGxvd2VkUmF3LCBtYXBzKTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShzd2FsbG93ZWRQZXRJZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBzd2FsbG93ZWRSZWNvcmQgPSBnZXRSZWNvcmQoc3dhbGxvd2VkUmF3KTtcbiAgICBjb25zdCBzd2FsbG93ZWRBYmlsaXR5RW51bXMgPSBnZXRBYmlsaXR5RW51bXNGb3JQZXQoc3dhbGxvd2VkUGV0SWQsIG1hcHMpO1xuICAgIGNvbnN0IG1lbW9yeUVudHJ5ID1cbiAgICAgIGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoc3dhbGxvd2VkUmF3KSA/PyAoeyBFbnU6IHN3YWxsb3dlZFBldElkIH0gYXMgUmVwbGF5TWVtb3J5RW50cnkpO1xuICAgIGNvbnN0IHN3YWxsb3dlZExldmVsID0gdG9GaW5pdGVOdW1iZXIocm9vdD8uW3Nsb3RDb25maWcubGV2ZWxLZXldLCBOYU4pO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoc3dhbGxvd2VkTGV2ZWwpKSB7XG4gICAgICBtZW1vcnlFbnRyeS5MdmwgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigzLCBNYXRoLnJvdW5kKHN3YWxsb3dlZExldmVsKSkpO1xuICAgIH1cblxuICAgIGlmIChzd2FsbG93ZWRQZXRJZCA9PT0gMTgyKSB7XG4gICAgICBjb25zdCBiZWx1Z2FSYXcgPVxuICAgICAgICByb290Py5bc2xvdENvbmZpZy5iZWx1Z2FLZXldID8/IHN3YWxsb3dlZFJlY29yZD8uWydiZWx1Z2FTd2FsbG93ZWRQZXQnXSA/PyBudWxsO1xuICAgICAgY29uc3QgYmVsdWdhRW50cnkgPSBidWlsZEJlbHVnYVN3YWxsb3dlZEVudHJ5KGJlbHVnYVJhdyk7XG4gICAgICBpZiAoYmVsdWdhRW50cnkpIHtcbiAgICAgICAgY29uc3QgYmVsdWdhQWJpbGl0eUVudW1zID0gZ2V0QWJpbGl0eUVudW1zRm9yUGV0KDE4MiwgbWFwcyk7XG4gICAgICAgIGNvbnN0IGJlbHVnYUxpc3RzOiBSZWNvcmQ8c3RyaW5nLCBSZXBsYXlVbmtub3duUmVjb3JkW10+ID0ge1xuICAgICAgICAgIFdoaXRlV2hhbGVBYmlsaXR5OiBbeyAuLi5iZWx1Z2FFbnRyeSB9XSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBhYmlsaXR5RW51bSBvZiBiZWx1Z2FBYmlsaXR5RW51bXMpIHtcbiAgICAgICAgICBiZWx1Z2FMaXN0c1tTdHJpbmcoYWJpbGl0eUVudW0pXSA9IFt7IC4uLmJlbHVnYUVudHJ5IH1dO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9yeUVudHJ5Lk1pTXMgPSB7IExzdHM6IGJlbHVnYUxpc3RzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3YWxsb3dlZFBldElkID09PSA3NjMpIHtcbiAgICAgIGNvbnN0IHNmc1JhdyA9XG4gICAgICAgIHJvb3Q/LltzbG90Q29uZmlnLnNmc0tleV0gPz9cbiAgICAgICAgc3dhbGxvd2VkUmVjb3JkPy5bJ3NhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQnXSA/P1xuICAgICAgICBudWxsO1xuICAgICAgY29uc3Qgc2ZzRW50cnkgPSBidWlsZEJlbHVnYVN3YWxsb3dlZEVudHJ5KHNmc1Jhdyk7XG4gICAgICBpZiAoc2ZzRW50cnkpIHtcbiAgICAgICAgY29uc3Qgc2ZzTGlzdHM6IFJlY29yZDxzdHJpbmcsIFJlcGxheVVua25vd25SZWNvcmRbXT4gPSB7XG4gICAgICAgICAgU2FyY2FzdGljRnJpbmdlaGVhZEFiaWxpdHk6IFt7IC4uLnNmc0VudHJ5IH1dLFxuICAgICAgICB9O1xuICAgICAgICBtZW1vcnlFbnRyeS5NaU1zID0geyBMc3RzOiBzZnNMaXN0cyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGVudHJpZXMucHVzaCh7XG4gICAgICBzd2FsbG93ZWRQZXRJZCxcbiAgICAgIHN3YWxsb3dlZEFiaWxpdHlFbnVtcyxcbiAgICAgIG1lbW9yeUVudHJ5LFxuICAgICAgYmVsdWdhU3dhbGxvd2VkRW50cnk6IG1lbW9yeUVudHJ5Lk1pTXMgPz8gbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN3YWxsb3dlZENhbmRpZGF0ZXMgPSBBcnJheS5pc0FycmF5KHJvb3Q/LlsnYWJvbWluYXRpb25Td2FsbG93ZWRQZXRzJ10pXG4gICAgPyAocm9vdD8uWydhYm9taW5hdGlvblN3YWxsb3dlZFBldHMnXSBhcyB1bmtub3duW10pXG4gICAgOiBbXTtcbiAgZm9yIChjb25zdCBzd2FsbG93ZWQgb2Ygc3dhbGxvd2VkQ2FuZGlkYXRlcykge1xuICAgIGNvbnN0IHN3YWxsb3dlZFBldElkID0gcmVzb2x2ZVBldElkRnJvbVVua25vd24oc3dhbGxvd2VkLCBtYXBzKTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShzd2FsbG93ZWRQZXRJZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBzd2FsbG93ZWRBYmlsaXR5RW51bXMgPSBnZXRBYmlsaXR5RW51bXNGb3JQZXQoc3dhbGxvd2VkUGV0SWQsIG1hcHMpO1xuICAgIGVudHJpZXMucHVzaCh7XG4gICAgICBzd2FsbG93ZWRQZXRJZCxcbiAgICAgIHN3YWxsb3dlZEFiaWxpdHlFbnVtcyxcbiAgICAgIG1lbW9yeUVudHJ5OlxuICAgICAgICBidWlsZEJlbHVnYVN3YWxsb3dlZEVudHJ5KHN3YWxsb3dlZCkgPz9cbiAgICAgICAgKHsgRW51OiBzd2FsbG93ZWRQZXRJZCB9IGFzIFJlcGxheU1lbW9yeUVudHJ5KSxcbiAgICAgIGJlbHVnYVN3YWxsb3dlZEVudHJ5OiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZlckFib21pbmF0aW9uQWJpbGl0eUVudW1zRnJvbVN3YWxsb3dlZFBldHMoXG4gIHJhd1BldDogdW5rbm93bixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGVudHJpZXMgPSBjb2xsZWN0QWJvbWluYXRpb25Td2FsbG93ZWRFbnRyaWVzKHJhd1BldCwgbWFwcyk7XG4gIGNvbnN0IGFiaWxpdHlFbnVtczogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkuc3dhbGxvd2VkQWJpbGl0eUVudW1zKSkge1xuICAgICAgYWJpbGl0eUVudW1zLnB1c2goLi4uZW50cnkuc3dhbGxvd2VkQWJpbGl0eUVudW1zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuaXF1ZU51bWJlcnMoYWJpbGl0eUVudW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyQWJvbWluYXRpb25BYmlsaXR5TGV2ZWxzRnJvbVN3YWxsb3dlZFBldHMoXG4gIHJhd1BldDogdW5rbm93bixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IHtcbiAgY29uc3QgZW50cmllcyA9IGNvbGxlY3RBYm9taW5hdGlvblN3YWxsb3dlZEVudHJpZXMocmF3UGV0LCBtYXBzKTtcbiAgY29uc3QgbGV2ZWxCeUFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgY29uc3QgZmFsbGJhY2tMZXZlbCA9IDE7XG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIGNvbnN0IHN3YWxsb3dlZExldmVsID0gdG9GaW5pdGVOdW1iZXIoZW50cnkubWVtb3J5RW50cnk/Lkx2bCwgTmFOKTtcbiAgICBjb25zdCBub3JtYWxpemVkTGV2ZWwgPSBOdW1iZXIuaXNGaW5pdGUoc3dhbGxvd2VkTGV2ZWwpXG4gICAgICA/IE1hdGgubWF4KDEsIE1hdGgubWluKDMsIE1hdGgucm91bmQoc3dhbGxvd2VkTGV2ZWwpKSlcbiAgICAgIDogZmFsbGJhY2tMZXZlbDtcbiAgICBjb25zdCBzd2FsbG93ZWRBYmlsaXR5RW51bXMgPSB1bmlxdWVOdW1iZXJzKFxuICAgICAgQXJyYXkuaXNBcnJheShlbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXMpXG4gICAgICAgID8gZW50cnkuc3dhbGxvd2VkQWJpbGl0eUVudW1zXG4gICAgICAgIDogW10sXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGFiaWxpdHlFbnVtIG9mIHN3YWxsb3dlZEFiaWxpdHlFbnVtcykge1xuICAgICAgY29uc3Qga2V5ID0gU3RyaW5nKGFiaWxpdHlFbnVtKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdG9GaW5pdGVOdW1iZXIobGV2ZWxCeUFiaWxpdHlba2V5XSwgTmFOKTtcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGV4aXN0aW5nKSB8fCBub3JtYWxpemVkTGV2ZWwgPiBleGlzdGluZykge1xuICAgICAgICBsZXZlbEJ5QWJpbGl0eVtrZXldID0gbm9ybWFsaXplZExldmVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbGV2ZWxCeUFiaWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZlckFib21pbmF0aW9uQWJpbGl0eUVudW1Gcm9tU3dhbGxvd2VkUGV0cyhcbiAgcmF3UGV0OiB1bmtub3duLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBpbmZlcnJlZCA9IGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bXNGcm9tU3dhbGxvd2VkUGV0cyhyYXdQZXQsIG1hcHMpO1xuICByZXR1cm4gaW5mZXJyZWQubGVuZ3RoID4gMCA/IGluZmVycmVkWzBdIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaW1hcnlBYmlsaXR5RW51bUZvck1lbW9yeShcbiAgcmF3UGV0OiB1bmtub3duLFxuICBwZXRJZDogbnVtYmVyLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBwZXQgPSBnZXRSZWNvcmQocmF3UGV0KTtcbiAgY29uc3QgYWJpbCA9IEFycmF5LmlzQXJyYXkocGV0Py5bJ0FiaWwnXSkgPyAocGV0Py5bJ0FiaWwnXSBhcyB1bmtub3duW10pIDogW107XG4gIGNvbnN0IGFiaWxpdGllcyA9IEFycmF5LmlzQXJyYXkocGV0Py5bJ2FiaWxpdGllcyddKVxuICAgID8gKHBldD8uWydhYmlsaXRpZXMnXSBhcyB1bmtub3duW10pXG4gICAgOiBbXTtcbiAgY29uc3QgZGlyZWN0Q2FuZGlkYXRlcyA9IFtcbiAgICBwZXQ/LlsnYWJpbGl0eUVudW0nXSxcbiAgICBwZXQ/LlsnYWJpbGl0eUlkJ10sXG4gICAgZ2V0UmVjb3JkKGFiaWxbMF0pPy5bJ0VudSddLFxuICAgIGdldFJlY29yZChhYmlsaXRpZXNbMF0pPy5bJ0VudSddLFxuICBdO1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBkaXJlY3RDYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgbnVtID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtKSkge1xuICAgICAgcmV0dXJuIE1hdGgudHJ1bmMobnVtKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGV0SWQgPT09IDM3MyB8fCBwZXRJZCA9PT0gMzM4KSB7XG4gICAgY29uc3QgaW5mZXJyZWQgPSBpbmZlckFib21pbmF0aW9uQWJpbGl0eUVudW1Gcm9tU3dhbGxvd2VkUGV0cyhyYXdQZXQsIG1hcHMpO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoaW5mZXJyZWQpKSB7XG4gICAgICByZXR1cm4gTWF0aC50cnVuYyhpbmZlcnJlZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwcGVkID0gZ2V0QWJpbGl0eUVudW1zRm9yUGV0KHBldElkLCBtYXBzKTtcbiAgcmV0dXJuIG1hcHBlZC5sZW5ndGggPiAwID8gbWFwcGVkWzBdIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQWJvbWluYXRpb25NZW1vcnkoXG4gIHJhd1BldDogdW5rbm93bixcbiAgcGV0SWQ6IG51bWJlcixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBSZXBsYXlNZW1vcnlQYXlsb2FkIHwgbnVsbCB7XG4gIGNvbnN0IHN3YWxsb3dlZEVudHJpZXMgPSBjb2xsZWN0QWJvbWluYXRpb25Td2FsbG93ZWRFbnRyaWVzKHJhd1BldCwgbWFwcyk7XG4gIGlmIChzd2FsbG93ZWRFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGZhbGxiYWNrQWJpbGl0eUVudW0gPSBnZXRQcmltYXJ5QWJpbGl0eUVudW1Gb3JNZW1vcnkocmF3UGV0LCBwZXRJZCwgbWFwcyk7XG4gIGNvbnN0IGZhbGxiYWNrTGlzdCA9XG4gICAgZmFsbGJhY2tBYmlsaXR5RW51bSAhPT0gbnVsbCA/IFtNYXRoLnRydW5jKGZhbGxiYWNrQWJpbGl0eUVudW0pXSA6IFtdO1xuICBjb25zdCBsaXN0czogUmVjb3JkPHN0cmluZywgUmVwbGF5VW5rbm93blJlY29yZFtdPiA9IHt9O1xuICBmb3IgKGNvbnN0IGVudHJ5IG9mIHN3YWxsb3dlZEVudHJpZXMpIHtcbiAgICBjb25zdCBvd25FbnVtcyA9IHVuaXF1ZU51bWJlcnMoXG4gICAgICBBcnJheS5pc0FycmF5KGVudHJ5LnN3YWxsb3dlZEFiaWxpdHlFbnVtcykgPyBlbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXMgOiBbXSxcbiAgICApO1xuICAgIGNvbnN0IGtleUVudW1zID0gb3duRW51bXMubGVuZ3RoID4gMCA/IG93bkVudW1zIDogZmFsbGJhY2tMaXN0O1xuICAgIGlmIChrZXlFbnVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGFiaWxpdHlFbnVtIG9mIGtleUVudW1zKSB7XG4gICAgICBjb25zdCBrZXkgPSBTdHJpbmcoYWJpbGl0eUVudW0pO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3RzW2tleV0pKSB7XG4gICAgICAgIGxpc3RzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZUJlbHVnYSA9XG4gICAgICAgIGVudHJ5LnN3YWxsb3dlZFBldElkID09PSAxODIgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXMpICYmXG4gICAgICAgIGVudHJ5LnN3YWxsb3dlZEFiaWxpdHlFbnVtcy5pbmNsdWRlcyhhYmlsaXR5RW51bSkgJiZcbiAgICAgICAgZW50cnkuYmVsdWdhU3dhbGxvd2VkRW50cnk7XG4gICAgICBjb25zdCBwYXlsb2FkID0gdXNlQmVsdWdhXG4gICAgICAgID8gKGVudHJ5LmJlbHVnYVN3YWxsb3dlZEVudHJ5IGFzIHVua25vd24gYXMgUmVwbGF5VW5rbm93blJlY29yZClcbiAgICAgICAgOiAoZW50cnkubWVtb3J5RW50cnkgYXMgUmVwbGF5VW5rbm93blJlY29yZCk7XG4gICAgICBsaXN0c1trZXldLnB1c2gocGF5bG9hZCk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3Qua2V5cyhsaXN0cykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHsgTHN0czogbGlzdHMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQmVsdWdhTWVtb3J5KFxuICByYXdQZXQ6IHVua25vd24sXG4gIHBldElkOiBudW1iZXIsXG4gIG1hcHM/OiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzLFxuKTogUmVwbGF5TWVtb3J5UGF5bG9hZCB8IG51bGwge1xuICBjb25zdCBwZXQgPSBnZXRSZWNvcmQocmF3UGV0KTtcbiAgY29uc3Qgc3dhbGxvd2VkUmF3ID0gcGV0Py5bJ2JlbHVnYVN3YWxsb3dlZFBldCddID8/IHBldD8uWydzd2FsbG93ZWRQZXQnXSA/PyBudWxsO1xuICBjb25zdCBzd2FsbG93ZWRFbnRyeSA9IGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoc3dhbGxvd2VkUmF3KTtcbiAgaWYgKCFzd2FsbG93ZWRFbnRyeSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG1hcHBlZCA9IGdldEFiaWxpdHlFbnVtc0ZvclBldChwZXRJZCwgbWFwcyk7XG4gIGNvbnN0IHByaW1hcnkgPSBnZXRQcmltYXJ5QWJpbGl0eUVudW1Gb3JNZW1vcnkocmF3UGV0LCBwZXRJZCwgbWFwcyk7XG4gIGNvbnN0IGJlbHVnYUFiaWxpdHlFbnVtcyA9XG4gICAgbWFwcGVkLmxlbmd0aCA+IDBcbiAgICAgID8gbWFwcGVkXG4gICAgICA6IHByaW1hcnkgIT09IG51bGxcbiAgICAgICAgPyBbTWF0aC50cnVuYyhwcmltYXJ5KV1cbiAgICAgICAgOiBbXTtcbiAgaWYgKGJlbHVnYUFiaWxpdHlFbnVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBsaXN0czogUmVjb3JkPHN0cmluZywgUmVwbGF5VW5rbm93blJlY29yZFtdPiA9IHtcbiAgICBXaGl0ZVdoYWxlQWJpbGl0eTogW3sgLi4uc3dhbGxvd2VkRW50cnkgfV0sXG4gIH07XG4gIGZvciAoY29uc3QgYWJpbGl0eUVudW0gb2YgYmVsdWdhQWJpbGl0eUVudW1zKSB7XG4gICAgbGlzdHNbU3RyaW5nKGFiaWxpdHlFbnVtKV0gPSBbeyAuLi5zd2FsbG93ZWRFbnRyeSB9XTtcbiAgfVxuICByZXR1cm4geyBMc3RzOiBsaXN0cyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTYXJjYXN0aWNGcmluZ2VoZWFkTWVtb3J5KFxuICByYXdQZXQ6IHVua25vd24sXG4gIF9wZXRJZDogbnVtYmVyLFxuICBfbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBSZXBsYXlNZW1vcnlQYXlsb2FkIHwgbnVsbCB7XG4gIGNvbnN0IHBldCA9IGdldFJlY29yZChyYXdQZXQpO1xuICBjb25zdCBzd2FsbG93ZWRSYXcgPSBwZXQ/Llsnc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCddID8/IG51bGw7XG4gIGNvbnN0IHN3YWxsb3dlZEVudHJ5ID0gYnVpbGRCZWx1Z2FTd2FsbG93ZWRFbnRyeShzd2FsbG93ZWRSYXcpO1xuICBpZiAoIXN3YWxsb3dlZEVudHJ5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodG9GaW5pdGVOdW1iZXIoc3dhbGxvd2VkRW50cnkuTHZsLCBOYU4pKSkge1xuICAgIHN3YWxsb3dlZEVudHJ5Lkx2bCA9IDE7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodG9GaW5pdGVOdW1iZXIoc3dhbGxvd2VkRW50cnkuQXQsIE5hTikpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuQXQgPSAxO1xuICB9XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHRvRmluaXRlTnVtYmVyKHN3YWxsb3dlZEVudHJ5LkhwLCBOYU4pKSkge1xuICAgIHN3YWxsb3dlZEVudHJ5LkhwID0gMTtcbiAgfVxuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzd2FsbG93ZWRFbnRyeSwgJ01hbmEnKSkge1xuICAgIHN3YWxsb3dlZEVudHJ5Lk1hbmEgPSBudWxsO1xuICB9XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN3YWxsb3dlZEVudHJ5LCAnUGVyaycpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuUGVyayA9IG51bGw7XG4gIH1cbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3dhbGxvd2VkRW50cnksICdFeHAnKSkge1xuICAgIHN3YWxsb3dlZEVudHJ5LkV4cCA9IG51bGw7XG4gIH1cbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3dhbGxvd2VkRW50cnksICdQb3dhJykpIHtcbiAgICBzd2FsbG93ZWRFbnRyeS5Qb3dhID0gbnVsbDtcbiAgfVxuICByZXR1cm4geyBMc3RzOiB7IFNhcmNhc3RpY0ZyaW5nZWhlYWRBYmlsaXR5OiBbeyAuLi5zd2FsbG93ZWRFbnRyeSB9XSB9IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEFiaWxpdHlFbnRyeShcbiAgYWJpbGl0eUVudW06IG51bWJlcixcbiAgbGV2ZWw6IG51bWJlcixcbiAgdHJpZ2dlcnNDb25zdW1lZCA9IDAsXG4pOiBSZXBsYXlBYmlsaXR5RW50cnkge1xuICBjb25zdCBub3JtYWxpemVkVHJpZ2dlcnMgPSBOdW1iZXIuaXNGaW5pdGUodHJpZ2dlcnNDb25zdW1lZClcbiAgICA/IE1hdGgubWF4KDAsIE1hdGgucm91bmQodHJpZ2dlcnNDb25zdW1lZCkpXG4gICAgOiAwO1xuICByZXR1cm4ge1xuICAgIEVudTogYWJpbGl0eUVudW0sXG4gICAgTHZsOiBsZXZlbCxcbiAgICBOYXQ6IHRydWUsXG4gICAgRHVyOiAwLFxuICAgIFRyQ286IG5vcm1hbGl6ZWRUcmlnZ2VycyxcbiAgICBDaGFyOiBudWxsLFxuICAgIERpczogZmFsc2UsXG4gICAgQUlNTDogZmFsc2UsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRGaW5pdGVOdW1iZXJCeUtleVByZWRpY2F0ZShcbiAgc291cmNlOiB1bmtub3duLFxuICBrZXlQcmVkaWNhdGU6IChrOiBzdHJpbmcpID0+IGJvb2xlYW4sXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgcmVjb3JkID0gZ2V0UmVjb3JkKHNvdXJjZSk7XG4gIGlmICghcmVjb3JkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVjb3JkKSkge1xuICAgIGlmICgha2V5UHJlZGljYXRlKGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIodmFsdWUsIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJpZ2dlcnNDb25zdW1lZEZyb21SYXdQZXQocmF3UGV0OiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHBldCA9IGdldFJlY29yZChyYXdQZXQpO1xuICBjb25zdCBkaXJlY3QgPSBbXG4gICAgcGV0Py5bJ3RyaWdnZXJzQ29uc3VtZWQnXSxcbiAgICBwZXQ/LlsnVHJDbyddLFxuICAgIHBldD8uWyd0cmNvJ10sXG4gICAgcGV0Py5bJ3RyaWdnZXJDb25zdW1lZCddLFxuICBdO1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBkaXJlY3QpIHtcbiAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKG4pKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcHJlZGljYXRlID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGhhc1RyaWdnZXIgPVxuICAgICAgbm9ybWFsaXplZC5pbmNsdWRlcygndHJpZ2dlcicpIHx8IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3RyaWcnKTtcbiAgICBjb25zdCBoYXNDb25zdW1lZCA9IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2NvbnN1bScpO1xuICAgIGNvbnN0IGlzQWJicmV2ID0gWyd0cmdjJywgJ3RyZ2NuJywgJ3RyYycsICd0cmNuJywgJ3RyY28nXS5pbmNsdWRlcyhub3JtYWxpemVkKTtcbiAgICByZXR1cm4gKGhhc1RyaWdnZXIgJiYgaGFzQ29uc3VtZWQpIHx8IGlzQWJicmV2O1xuICB9O1xuICBjb25zdCBvYmplY3RDYW5kaWRhdGVzID0gW3BldCwgZ2V0UmVjb3JkKHBldD8uWydwb3cnXSksIGdldFJlY29yZChwZXQ/LlsnUG93J10pXTtcbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygb2JqZWN0Q2FuZGlkYXRlcykge1xuICAgIGNvbnN0IG4gPSBmaW5kRmluaXRlTnVtYmVyQnlLZXlQcmVkaWNhdGUoY2FuZGlkYXRlLCBwcmVkaWNhdGUpO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKG4pKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYWJpbGl0aWVzID0gQXJyYXkuaXNBcnJheShwZXQ/LlsnYWJpbGl0aWVzJ10pXG4gICAgPyAocGV0Py5bJ2FiaWxpdGllcyddIGFzIHVua25vd25bXSlcbiAgICA6IFtdO1xuICBjb25zdCBhYmlsID0gQXJyYXkuaXNBcnJheShwZXQ/LlsnQWJpbCddKSA/IChwZXQ/LlsnQWJpbCddIGFzIHVua25vd25bXSkgOiBbXTtcbiAgY29uc3QgYWJpbGl0eVZhbHVlczogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChjb25zdCBhYmlsaXR5QXJyYXkgb2YgW2FiaWxpdGllcywgYWJpbF0pIHtcbiAgICBmb3IgKGNvbnN0IGFiaWxpdHkgb2YgYWJpbGl0eUFycmF5KSB7XG4gICAgICBjb25zdCBuID0gZmluZEZpbml0ZU51bWJlckJ5S2V5UHJlZGljYXRlKGFiaWxpdHksIHByZWRpY2F0ZSk7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICAgIGFiaWxpdHlWYWx1ZXMucHVzaChuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGFiaWxpdHlWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKE1hdGgubWF4KC4uLmFiaWxpdHlWYWx1ZXMpKSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc0h1cnRGcm9tUmF3UGV0KHJhd1BldDogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBwZXQgPSBnZXRSZWNvcmQocmF3UGV0KTtcbiAgY29uc3QgcG93ID0gZ2V0UmVjb3JkKHBldD8uWydQb3cnXSk7XG4gIGNvbnN0IHBvd0xvd2VyID0gZ2V0UmVjb3JkKHBldD8uWydwb3cnXSk7XG4gIGNvbnN0IGRpcmVjdCA9IFtcbiAgICBwZXQ/LlsndGltZXNIdXJ0J10sXG4gICAgcGV0Py5bJ1RpbWVzSHVydCddLFxuICAgIHBldD8uWydIcnRDJ10sXG4gICAgcGV0Py5bJ2hydGMnXSxcbiAgICBwb3c/LlsnU2FiZXJ0b290aFRpZ2VyQWJpbGl0eSddLFxuICAgIHBvd0xvd2VyPy5bJ1NhYmVydG9vdGhUaWdlckFiaWxpdHknXSxcbiAgXTtcbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgY29uc3QgbiA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChuKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BlbGxDb3VudEZyb21SYXdQZXQocmF3UGV0OiB1bmtub3duKTogbnVtYmVyIHtcbiAgY29uc3QgcGV0ID0gZ2V0UmVjb3JkKHJhd1BldCk7XG4gIGNvbnN0IGRpcmVjdCA9IFtcbiAgICBwZXQ/Llsnc3BlbGxDb3VudCddLFxuICAgIHBldD8uWydzcGVsbHNDYXN0J10sXG4gICAgcGV0Py5bJ3NwZWxsc0Nhc3RUaGlzVHVybiddLFxuICAgIHBldD8uWydTcENUJ10sXG4gIF07XG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdCkge1xuICAgIGNvbnN0IG4gPSB0b0Zpbml0ZU51bWJlcihjYW5kaWRhdGUsIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgucm91bmQobikpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRveU5hbWUocmF3VG95OiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgcmF3VG95ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiByYXdUb3k7XG4gIH1cbiAgY29uc3QgdG95ID0gZ2V0UmVjb3JkKHJhd1RveSk7XG4gIHJldHVybiB0eXBlb2YgdG95Py5bJ25hbWUnXSA9PT0gJ3N0cmluZycgPyB0b3lbJ25hbWUnXSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVG95SWQoXG4gIHJhd1RveTogdW5rbm93bixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHJhd1RveSA9PT0gbnVsbCB8fCByYXdUb3kgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHRveSA9IGdldFJlY29yZChyYXdUb3kpO1xuICBpZiAodG95KSB7XG4gICAgY29uc3QgZGlyZWN0ID0gW1xuICAgICAgdG95WydpZCddLFxuICAgICAgdG95WydJZCddLFxuICAgICAgdG95Wyd0b3lJZCddLFxuICAgICAgdG95Wyd0b3lJRCddLFxuICAgICAgdG95WydlbnVtJ10sXG4gICAgICB0b3lbJ0VudSddLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYyhuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgdG95TmFtZSA9IGdldFRveU5hbWUocmF3VG95KSA/PyByYXdUb3k7XG4gIGNvbnN0IGxvb2t1cEtleSA9XG4gICAgdHlwZW9mIHRveU5hbWUgPT09ICdzdHJpbmcnXG4gICAgICA/IHRveU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpXG4gICAgICA6ICcnO1xuICBpZiAoIWxvb2t1cEtleSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG1hcHBlZCA9IHRvSW50T3JOdWxsKG1hcHM/LnRveUlkc0J5TmFtZT8uW2xvb2t1cEtleV0pO1xuICBpZiAobWFwcGVkICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIG1hcHBlZDtcbiAgfVxuICBjb25zdCBmYWxsYmFjayA9IEZBTExCQUNLX1RPWV9JRFNfQllfTkFNRVtsb29rdXBLZXldO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGZhbGxiYWNrKSA/IGZhbGxiYWNrIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUb3lBYmlsaXR5RW51bShcbiAgcmF3VG95OiB1bmtub3duLFxuICB0b3lJZDogbnVtYmVyIHwgbnVsbCxcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCB0b3kgPSBnZXRSZWNvcmQocmF3VG95KTtcbiAgaWYgKHRveSkge1xuICAgIGNvbnN0IGFiaWwgPSBBcnJheS5pc0FycmF5KHRveVsnQWJpbCddKSA/ICh0b3lbJ0FiaWwnXSBhcyB1bmtub3duW10pIDogW107XG4gICAgY29uc3QgYWJpbGl0aWVzID0gQXJyYXkuaXNBcnJheSh0b3lbJ2FiaWxpdGllcyddKVxuICAgICAgPyAodG95WydhYmlsaXRpZXMnXSBhcyB1bmtub3duW10pXG4gICAgICA6IFtdO1xuICAgIGNvbnN0IGRpcmVjdCA9IFtcbiAgICAgIHRveVsnYWJpbGl0eUVudW0nXSxcbiAgICAgIHRveVsnYWJpbGl0eUlkJ10sXG4gICAgICBnZXRSZWNvcmQoYWJpbFswXSk/LlsnRW51J10sXG4gICAgICBnZXRSZWNvcmQoYWJpbGl0aWVzWzBdKT8uWydFbnUnXSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdCkge1xuICAgICAgY29uc3QgbiA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMobik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKHRveUlkKSkpIHtcbiAgICByZXR1cm4gTWF0aC50cnVuYyhOdW1iZXIodG95SWQpICsgMzIpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVRveVVzZXNMZWZ0KHJhd1RveTogdW5rbm93biwgdG95TGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHRveSA9IGdldFJlY29yZChyYXdUb3kpO1xuICBpZiAodG95KSB7XG4gICAgY29uc3QgZGlyZWN0ID0gW3RveVsnY291J10sIHRveVsnQ291J10sIHRveVsndXNlc0xlZnQnXSwgdG95WydjaGFyZ2VzJ11dO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdCkge1xuICAgICAgY29uc3QgbiA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgucm91bmQobikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gTWF0aC5tYXgoMSwgMyAtIHRveUxldmVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUb3lIZWFsdGhQZXJtKHJhd1RveTogdW5rbm93biwgdG95TGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHRveSA9IGdldFJlY29yZChyYXdUb3kpO1xuICBpZiAodG95KSB7XG4gICAgY29uc3QgaHAgPSBnZXRSZWNvcmQodG95WydIcCddKTtcbiAgICBjb25zdCBkaXJlY3QgPSBbdG95WydocCddLCB0b3lbJ2hlYWx0aCddLCBocD8uWydQZXJtJ11dO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdCkge1xuICAgICAgY29uc3QgbiA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDEsIE1hdGgucm91bmQobikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gTWF0aC5tYXgoMSwgMyArICh0b3lMZXZlbCAtIDEpICogNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJlbGljSXRlbXMoXG4gIGJvYXJkSWQ6IHN0cmluZyxcbiAgcmF3VG95OiB1bmtub3duLFxuICByYXdUb3lMZXZlbDogdW5rbm93bixcbiAgd2FybmluZ0JhZzogUmVwbGF5V2FybmluZ0JhZyxcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBbbnVsbCwgUmVwbGF5UmVsaWNJdGVtIHwgbnVsbF0ge1xuICBjb25zdCB0b3lJZCA9IHJlc29sdmVUb3lJZChyYXdUb3ksIG1hcHMpO1xuICBjb25zdCB0b3lOYW1lID0gZ2V0VG95TmFtZShyYXdUb3kpID8/ICh0eXBlb2YgcmF3VG95ID09PSAnc3RyaW5nJyA/IHJhd1RveSA6ICcnKTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKHRveUlkKSkpIHtcbiAgICBpZiAodG95TmFtZSkge1xuICAgICAgd2FybmluZ0JhZy51bmtub3duVG95cy5wdXNoKFN0cmluZyh0b3lOYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBbbnVsbCwgbnVsbF07XG4gIH1cbiAgY29uc3QgdG95TGV2ZWwgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRvRmluaXRlTnVtYmVyKHJhd1RveUxldmVsLCAxKSkpO1xuICBjb25zdCB0b3lBYmlsaXR5RW51bSA9IHJlc29sdmVUb3lBYmlsaXR5RW51bShyYXdUb3ksIHRveUlkKTtcbiAgY29uc3QgdG95VXNlc0xlZnQgPSByZXNvbHZlVG95VXNlc0xlZnQocmF3VG95LCB0b3lMZXZlbCk7XG4gIGNvbnN0IHRveUhlYWx0aFBlcm0gPSByZXNvbHZlVG95SGVhbHRoUGVybShyYXdUb3ksIHRveUxldmVsKTtcbiAgY29uc3QgdG95UmVsaWM6IFJlcGxheVJlbGljSXRlbSA9IHtcbiAgICBPd246IDEsXG4gICAgRW51OiB0b3lJZCxcbiAgICBMb2M6IDQsXG4gICAgUG9pOiB7IHg6IDEsIHk6IDAgfSxcbiAgICBFeHA6IDAsXG4gICAgTHZsOiB0b3lMZXZlbCxcbiAgICBIcDogeyBQZXJtOiB0b3lIZWFsdGhQZXJtLCBUZW1wOiAwLCBNYXg6IG51bGwgfSxcbiAgICBBdDogeyBQZXJtOiAxMDAwLCBUZW1wOiAwLCBNYXg6IDEwMDAgfSxcbiAgICBNYW5hOiAwLFxuICAgIENvdTogdG95VXNlc0xlZnQsXG4gICAgUGVCbzogZmFsc2UsXG4gICAgUGVEdTogbnVsbCxcbiAgICBQZURNOiBudWxsLFxuICAgIFBlTXU6IG51bGwsXG4gICAgUGVEcjogMCxcbiAgICBBYmlsOlxuICAgICAgdG95QWJpbGl0eUVudW0gIT09IG51bGwgPyBbYnVpbGRBYmlsaXR5RW50cnkodG95QWJpbGl0eUVudW0sIHRveUxldmVsLCAwKV0gOiBbXSxcbiAgICBBYkRpOiBmYWxzZSxcbiAgICBDb3NtOiAwLFxuICAgIERlYWQ6IGZhbHNlLFxuICAgIERlc3Q6IGZhbHNlLFxuICAgIERlQnk6IG51bGwsXG4gICAgTGluazogbnVsbCxcbiAgICBQb3c6IG51bGwsXG4gICAgU2VWOiBudWxsLFxuICAgIFJ3ZHM6IDAsXG4gICAgUndyZDogZmFsc2UsXG4gICAgTWlNczogbnVsbCxcbiAgICBTcE1lOiBudWxsLFxuICAgIFRyaTogbnVsbCxcbiAgICBBdGtDOiAwLFxuICAgIEhydEM6IDAsXG4gICAgU3BDVDogMCxcbiAgICBPbFRzOiBudWxsLFxuICAgIExhc3RUYXJnZXRzVGhpc1R1cm46IG51bGwsXG4gICAgSWQ6IHsgQm9JZDogYm9hcmRJZCwgVW5pOiA5MDAgfSxcbiAgICBQcmk6IDMsXG4gICAgRnJvOiBmYWxzZSxcbiAgICBXRnJvOiBmYWxzZSxcbiAgICBBRnJvOiBmYWxzZSxcbiAgfTtcbiAgcmV0dXJuIFtudWxsLCB0b3lSZWxpY107XG59XG5cbmV4cG9ydCBjb25zdCBSRVBMQVlfREVCVUdfRU5BQkxFRCA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2FwUmVwbGF5RGVidWcnKTtcbiAgICBpZiAoZnJvbVN0b3JhZ2UgPT09ICcxJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldCgnc2FwUmVwbGF5RGVidWcnKSA9PT0gJzEnO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYXlEZWJ1ZyguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgaWYgKCFSRVBMQVlfREVCVUdfRU5BQkxFRCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZygnW1NBUCBSZXBsYXkgRGVidWddJywgLi4uYXJncyk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQ3VzdG9tUGFja0l0ZW0sXG4gIEN1c3RvbVBhY2tDb25maWcsXG4gIFBldENvbmZpZyxcbn0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL3NpbXVsYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBlbmNvZGVCYXNlNjRVcmwgfSBmcm9tICdhcHAvcnVudGltZS9iYXNlNjQtdXJsJztcbmltcG9ydCB7IGZvb2QgYXMgZm9vZEpzb24gfSBmcm9tICdhcHAvcnVudGltZS9jb250ZW50LWNhdGFsb2dzJztcbmltcG9ydCB7XG4gIEtFWV9NQVAsXG4gIFBBQ0tfTUFQLFxuICBQRVJLU19CWV9JRCxcbiAgUEVUU19CWV9JRCxcbiAgUEVUX0lEU19CWV9OQU1FLFxuICBQRVRTX01FVEFfQllfSUQsXG4gIFRPWVNfQllfSUQsXG59IGZyb20gJy4vcmVwbGF5LWNhbGMtc2NoZW1hJztcbmltcG9ydCB7XG4gIHJlc29sdmVQZXRJZEZyb21Vbmtub3duLFxuICBnZXRUaW1lc0h1cnRGcm9tUmF3UGV0LFxuICBnZXRUcmlnZ2Vyc0NvbnN1bWVkRnJvbVJhd1BldCxcbiAgLy8gb3RoZXIgaGVscGVycyBhdmFpbGFibGUgZm9yIGZ1dHVyZSB3aXJpbmdcbiAgcmVzb2x2ZVRveUlkLFxuICBnZXRUb3lOYW1lLFxuICBidWlsZEFib21pbmF0aW9uTWVtb3J5LFxuICBpbmZlckFib21pbmF0aW9uQWJpbGl0eUVudW1zRnJvbVN3YWxsb3dlZFBldHMsXG4gIFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG59IGZyb20gJy4vcmVwbGF5LWNhbGMtcGFyc2VyLXV0aWxzJztcblxuaW50ZXJmYWNlIFJlcGxheUFiaWxpdHlKc29uIHtcbiAgRW51PzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgTHZsPzogbnVtYmVyIHwgbnVsbDtcbiAgR3JvcD86IG51bWJlciB8IG51bGw7XG4gIFRyQ28/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5UGV0U3RhdHNKc29uIHtcbiAgVGVtcD86IG51bWJlciB8IG51bGw7XG4gIFBlcm0/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5UGV0SnNvbiB7XG4gIEVudT86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIEF0PzogUmVwbGF5UGV0U3RhdHNKc29uIHwgbnVsbDtcbiAgSHA/OiBSZXBsYXlQZXRTdGF0c0pzb24gfCBudWxsO1xuICBFeHA/OiBudW1iZXIgfCBudWxsO1xuICBMdmw/OiBudW1iZXIgfCBudWxsO1xuICBQZXJrPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgTWFuYT86IG51bWJlciB8IG51bGw7XG4gIFBvdz86IHtcbiAgICBTYWJlcnRvb3RoVGlnZXJBYmlsaXR5PzogbnVtYmVyIHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIEFiaWw/OiBSZXBsYXlBYmlsaXR5SnNvbltdIHwgbnVsbDtcbiAgUG9pPzoge1xuICAgIHg/OiBudW1iZXIgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgTWlNcz86IHtcbiAgICBMc3RzPzoge1xuICAgICAgV2hpdGVXaGFsZUFiaWxpdHk/OiBSZXBsYXlQZXRKc29uW10gfCBudWxsO1xuICAgIH0gfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIFJlcGxheU1lbW9yeUVudHJ5SnNvbiB7XG4gIEVudT86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIEx2bD86IG51bWJlciB8IG51bGw7XG4gIElkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBlbnU/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBNaU1zPzoge1xuICAgIExzdHM/OiBSZWNvcmQ8c3RyaW5nLCBBcnJheTxSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsPiB8IG51bGw+IHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmludGVyZmFjZSBSZXBsYXlUb3lKc29uIHtcbiAgRW51PzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgTHZsPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlEZWNrSnNvbiB7XG4gIElkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgVGl0bGU/OiBzdHJpbmcgfCBudWxsO1xuICBNaW5pb25zPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IG51bGw7XG4gIFNwZWxscz86IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUJvYXJkSnNvbiB7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG4gIE1pbnM/OiB7XG4gICAgSXRlbXM/OiBBcnJheTxSZXBsYXlQZXRKc29uIHwgbnVsbD4gfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgUmVsPzoge1xuICAgIEl0ZW1zPzogQXJyYXk8UmVwbGF5VG95SnNvbiB8IG51bGw+IHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIERlY2s/OiBSZXBsYXlEZWNrSnNvbiB8IG51bGw7XG4gIFBhY2s/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUJhdHRsZUpzb24ge1xuICBVc2VyQm9hcmQ/OiBSZXBsYXlCb2FyZEpzb24gfCBudWxsO1xuICBPcHBvbmVudEJvYXJkPzogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlCdWlsZE1vZGVsSnNvbiB7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG4gIEJvcj86IHtcbiAgICBEZWNrPzogUmVwbGF5RGVja0pzb24gfCBudWxsO1xuICB9IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlNZXRhQm9hcmRzIHtcbiAgdXNlckJvYXJkPzogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbDtcbiAgb3Bwb25lbnRCb2FyZD86IFJlcGxheUJvYXJkSnNvbiB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5UGFyc2VPcHRpb25zIHtcbiAgYWJpbGl0eVBldE1hcD86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4gfCBudWxsO1xuICAvKiogUmVwbGF5LWRlcml2ZWQgcGVyayBuYW1lcyBrZXllZCBieSB0aGUgcmF3IHBldCBlbnVtLiAqL1xuICBwZXJrTmFtZUJ5UGV0SWQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlBY3Rpb25Kc29uIHtcbiAgVHlwZT86IG51bWJlciB8IG51bGw7XG4gIFR1cm4/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBCdWlsZD86IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcbiAgQmF0dGxlPzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuICBNb2RlPzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuICBSZXNwb25zZT86IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlBY3Rpb25zQ29udGFpbmVySnNvbiB7XG4gIEFjdGlvbnM/OiBSZWFkb25seUFycmF5PFJlcGxheUFjdGlvbkpzb24+IHwgbnVsbDtcbiAgR2VuZXNpc0J1aWxkTW9kZWw/OiBSZXBsYXlCdWlsZE1vZGVsSnNvbiB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlCb3RUdXJuQWJpbGl0eUpzb24ge1xuICBpZD86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIGxldmVsPzogbnVtYmVyIHwgbnVsbDtcbiAgZ3JvdXA/OiBudW1iZXIgfCBudWxsO1xuICB0cmlnZ2Vyc0NvbnN1bWVkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5TdGF0QmxvY2tKc29uIHtcbiAgcGVybWFuZW50PzogbnVtYmVyIHwgbnVsbDtcbiAgdGVtcG9yYXJ5PzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5QZXRKc29uIHtcbiAgc2xvdD86IG51bWJlciB8IG51bGw7XG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgbGV2ZWw/OiBudW1iZXIgfCBudWxsO1xuICBleHBlcmllbmNlPzogbnVtYmVyIHwgbnVsbDtcbiAgcGVya0lkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgYXR0YWNrPzogUmVwbGF5Qm90VHVyblN0YXRCbG9ja0pzb24gfCBudWxsO1xuICBoZWFsdGg/OiBSZXBsYXlCb3RUdXJuU3RhdEJsb2NrSnNvbiB8IG51bGw7XG4gIG1hbmE/OiBudW1iZXIgfCBudWxsO1xuICBhYmlsaXRpZXM/OiBSZXBsYXlCb3RUdXJuQWJpbGl0eUpzb25bXSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlCb3RUdXJuU3RhdHNKc29uIHtcbiAgdHVybj86IG51bWJlciB8IG51bGw7XG4gIGdvbGRTcGVudD86IG51bWJlciB8IG51bGw7XG4gIHJvbGxzPzogbnVtYmVyIHwgbnVsbDtcbiAgc3VtbW9ucz86IG51bWJlciB8IG51bGw7XG4gIGxldmVsM1NvbGQ/OiBudW1iZXIgfCBudWxsO1xuICB0cmFuc2Zvcm1lZD86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlCb3RUdXJuU2lkZUpzb24ge1xuICBzdGF0cz86IFJlcGxheUJvdFR1cm5TdGF0c0pzb24gfCBudWxsO1xuICBwZXRzPzogUmVwbGF5Qm90VHVyblBldEpzb25bXSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlCb3RUdXJuSnNvbiB7XG4gIHR1cm4/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICB1c2VyPzogUmVwbGF5Qm90VHVyblNpZGVKc29uIHwgbnVsbDtcbiAgb3Bwb25lbnQ/OiBSZXBsYXlCb3RUdXJuU2lkZUpzb24gfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5Qm90UmVwbGF5TWV0YUpzb24ge1xuICBwYWNrPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgb3Bwb25lbnRfcGFjaz86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5Qm90VHVybnNDb250YWluZXJKc29uIHtcbiAgdHVybnM/OiBSZWFkb25seUFycmF5PFJlcGxheUJvdFR1cm5Kc29uPiB8IG51bGw7XG4gIGdlbmVzaXNCdWlsZE1vZGVsPzogUmVwbGF5QnVpbGRNb2RlbEpzb24gfCBudWxsO1xuICBhYmlsaXR5UGV0TWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiB8IG51bGw7XG4gIHJlcGxheU1ldGE/OiBSZXBsYXlCb3RSZXBsYXlNZXRhSnNvbiB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5Q3VzdG9tUGFjayBleHRlbmRzIEN1c3RvbVBhY2tDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlY2tJZD86IHN0cmluZyB8IG51bGw7XG4gIHRpZXIxUGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHRpZXIyUGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHRpZXIzUGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHRpZXI0UGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHRpZXI1UGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHRpZXI2UGV0czogKHN0cmluZyB8IG51bGwpW107XG4gIHNwZWxsczogQ3VzdG9tUGFja0l0ZW1bXTtcbn1cblxuaW50ZXJmYWNlIFJlcGxheVBhcnNlZFRveSB7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbnR5cGUgU3RyaXBwZWRSZXBsYXlQZXQgPSBQaWNrPFBldENvbmZpZywgJ25hbWUnPiAmIFBhcnRpYWw8T21pdDxQZXRDb25maWcsICduYW1lJz4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUNhbGN1bGF0b3JTdGF0ZSB7XG4gIHBsYXllclBhY2s6IHN0cmluZztcbiAgb3Bwb25lbnRQYWNrOiBzdHJpbmc7XG4gIHBsYXllclRveTogc3RyaW5nIHwgbnVsbDtcbiAgcGxheWVyVG95TGV2ZWw6IHN0cmluZztcbiAgcGxheWVySGFyZFRveTogbnVsbDtcbiAgcGxheWVySGFyZFRveUxldmVsOiBudW1iZXI7XG4gIG9wcG9uZW50VG95OiBzdHJpbmcgfCBudWxsO1xuICBvcHBvbmVudFRveUxldmVsOiBzdHJpbmc7XG4gIG9wcG9uZW50SGFyZFRveTogbnVsbDtcbiAgb3Bwb25lbnRIYXJkVG95TGV2ZWw6IG51bWJlcjtcbiAgdHVybjogbnVtYmVyO1xuICBwbGF5ZXJHb2xkU3BlbnQ6IG51bWJlcjtcbiAgb3Bwb25lbnRHb2xkU3BlbnQ6IG51bWJlcjtcbiAgcGxheWVyUm9sbEFtb3VudDogbnVtYmVyO1xuICBvcHBvbmVudFJvbGxBbW91bnQ6IG51bWJlcjtcbiAgcGxheWVyU3VtbW9uZWRBbW91bnQ6IG51bWJlcjtcbiAgb3Bwb25lbnRTdW1tb25lZEFtb3VudDogbnVtYmVyO1xuICBwbGF5ZXJMZXZlbDNTb2xkOiBudW1iZXI7XG4gIG9wcG9uZW50TGV2ZWwzU29sZDogbnVtYmVyO1xuICBwbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDogbnVtYmVyO1xuICBvcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50OiBudW1iZXI7XG4gIHBsYXllclBldHM6IChQZXRDb25maWcgfCBudWxsKVtdO1xuICBvcHBvbmVudFBldHM6IChQZXRDb25maWcgfCBudWxsKVtdO1xuICBhbGxQZXRzOiBib29sZWFuO1xuICBsb2dGaWx0ZXI6IHN0cmluZyB8IG51bGw7XG4gIGN1c3RvbVBhY2tzOiBSZXBsYXlDdXN0b21QYWNrW107XG4gIG9sZFN0b3JrOiBib29sZWFuO1xuICB0b2tlblBldHM6IGJvb2xlYW47XG4gIGtvbW9kb1NodWZmbGU6IGJvb2xlYW47XG4gIG1hbmE6IGJvb2xlYW47XG4gIHNlZWQ6IG51bWJlciB8IG51bGw7XG4gIHRyaWdnZXJzQ29uc3VtZWQ6IGJvb2xlYW47XG4gIGZvb2RzRWF0ZW4/OiBib29sZWFuO1xuICBzaG93QWR2YW5jZWQ6IGJvb2xlYW47XG4gIHNob3dUcmlnZ2VyTmFtZXNJbkxvZ3M6IGJvb2xlYW47XG4gIHNob3dQb3NpdGlvbmFsQXJnc0luTG9nczogYm9vbGVhbjtcbiAgYWlsbWVudEVxdWlwbWVudDogYm9vbGVhbjtcbn1cblxudHlwZSBSZXBsYXlDdXN0b21QYWNrQ29yZSA9IE9taXQ8UmVwbGF5Q3VzdG9tUGFjaywgJ2RlY2tJZCc+O1xuXG5mdW5jdGlvbiB0b0Zpbml0ZU51bWJlcih2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHBhcnNlZCkgPyBwYXJzZWQgOiBudWxsO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b051bWJlck9yRmFsbGJhY2sodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBwYXJzZWQgPSB0b0Zpbml0ZU51bWJlcih2YWx1ZSk7XG4gIHJldHVybiBwYXJzZWQgPz8gZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGlzUmVjb3JkKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGFzUmVjb3JkKHZhbHVlOiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgcmV0dXJuIGlzUmVjb3JkKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gYXNSZXBsYXlNZW1vcnlFbnRyeShcbiAgdmFsdWU6IHVua25vd24sXG4pOiBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHtcbiAgcmV0dXJuIGlzUmVjb3JkKHZhbHVlKSA/ICh2YWx1ZSBhcyBSZXBsYXlNZW1vcnlFbnRyeUpzb24pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0UmVwbGF5TWVtb3J5TGlzdHMoXG4gIHZhbHVlOiBSZXBsYXlQZXRKc29uIHwgUmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IFJlY29yZDxzdHJpbmcsIEFycmF5PFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGw+IHwgbnVsbD4gfCBudWxsIHtcbiAgY29uc3QgbGlzdHMgPSB2YWx1ZT8uTWlNcz8uTHN0cztcbiAgcmV0dXJuIGlzUmVjb3JkKGxpc3RzKVxuICAgID8gKGxpc3RzIGFzIFJlY29yZDxzdHJpbmcsIEFycmF5PFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGw+IHwgbnVsbD4pXG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRGaXJzdFJlcGxheU1lbW9yeUVudHJ5KFxuICB2YWx1ZTogUmVwbGF5UGV0SnNvbiB8IFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4pOiBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHtcbiAgY29uc3QgbGlzdHMgPSBnZXRSZXBsYXlNZW1vcnlMaXN0cyh2YWx1ZSk7XG4gIGlmICghbGlzdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAoY29uc3QgZW50cmllcyBvZiBPYmplY3QudmFsdWVzKGxpc3RzKSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgY29uc3QgbWVtb3J5RW50cnkgPSBhc1JlcGxheU1lbW9yeUVudHJ5KGVudHJ5KTtcbiAgICAgIGlmIChtZW1vcnlFbnRyeSkge1xuICAgICAgICByZXR1cm4gbWVtb3J5RW50cnk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGxheU1lbW9yeUVudHJ5QnlBYmlsaXR5SWQoXG4gIHZhbHVlOiBSZXBsYXlQZXRKc29uIHwgUmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgYWJpbGl0eUlkOiB1bmtub3duLFxuKTogUmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbCB7XG4gIGNvbnN0IGtleSA9IHRvUmVwbGF5SWQoYWJpbGl0eUlkKTtcbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGVudHJpZXMgPSBnZXRSZXBsYXlNZW1vcnlMaXN0cyh2YWx1ZSk/LltrZXldO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIGNvbnN0IG1lbW9yeUVudHJ5ID0gYXNSZXBsYXlNZW1vcnlFbnRyeShlbnRyeSk7XG4gICAgaWYgKG1lbW9yeUVudHJ5KSB7XG4gICAgICByZXR1cm4gbWVtb3J5RW50cnk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZXBsYXlNZW1vcnlQZXROYW1lKFxuICB2YWx1ZTogUmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCByYXdQZXRSZWYgPVxuICAgIHZhbHVlPy5FbnUgPz9cbiAgICB2YWx1ZT8uZW51ID8/XG4gICAgdmFsdWU/LklkID8/XG4gICAgdmFsdWU/LmlkO1xuICBjb25zdCByZXNvbHZlZFBldElkID0gcmVzb2x2ZVBldElkRnJvbVVua25vd24ocmF3UGV0UmVmLCB7IFBFVF9JRFNfQllfTkFNRSB9KTtcbiAgaWYgKHJlc29sdmVkUGV0SWQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBQRVRTX0JZX0lELmdldChTdHJpbmcocmVzb2x2ZWRQZXRJZCkpID8/IGBQZXQgIyR7cmVzb2x2ZWRQZXRJZH1gO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTmVzdGVkU3dhbGxvd2VkUGV0TmFtZShcbiAgdmFsdWU6IFJlcGxheVBldEpzb24gfCBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG5lc3RlZEVudHJ5ID0gZ2V0Rmlyc3RSZXBsYXlNZW1vcnlFbnRyeSh2YWx1ZSk7XG4gIGlmIChuZXN0ZWRFbnRyeSkge1xuICAgIHJldHVybiByZXNvbHZlUmVwbGF5TWVtb3J5UGV0TmFtZShuZXN0ZWRFbnRyeSk7XG4gIH1cblxuICAvLyBBIGZ1bGwgcGV0IGlzIG5vdCBpdHMgb3duIHN3YWxsb3dlZC1tZW1vcnkgZW50cnkuIFRoaXMgbWF0dGVycyB3aGVuIHRoZVxuICAvLyByZXBsYXkgc3VtbWFyeSBvbWl0cyBNaU1zOiB0cmVhdGluZyB0aGUgcm9vdCBFbnUgYXMgbWVtb3J5IG1hZGUgQmVsdWdhXG4gIC8vIHN3YWxsb3cgYW5vdGhlciBCZWx1Z2EgKGFuZCBkaWQgdGhlIHNhbWUgZm9yIFNhcmNhc3RpYyBGcmluZ2VoZWFkKS5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWU/LkFiaWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZVJlcGxheU1lbW9yeVBldE5hbWUoYXNSZXBsYXlNZW1vcnlFbnRyeSh2YWx1ZSkpO1xufVxuXG5jb25zdCBDT1BZX1NPVVJDRV9QRVRfSURTID0gbmV3IFNldDxzdHJpbmc+KFtcbiAgJzUzJywgLy8gUGFycm90XG4gICcxODInLCAvLyBCZWx1Z2EgV2hhbGVcbiAgJzM3MycsIC8vIEFib21pbmF0aW9uXG4gICc3NjMnLCAvLyBTYXJjYXN0aWMgRnJpbmdlaGVhZFxuXSk7XG5cbi8vIFNvbWUgc3RvcmVkL2NvcHkgYWJpbGl0aWVzIGhhdmUgdGhlaXIgb3duIGVudW0gYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmVcbi8vIHJlY292ZXJlZCBmcm9tIHRoZSBob2xkZXItYmFzZWQgYWJpbGl0eVBldE1hcCBlbWl0dGVkIGJ5IHJlcGxheSBpbmRleGluZy5cbi8vIEtlZXAgdGhlc2UgZXhwbGljaXQgc28gYSBjb3BpZWQgYWJpbGl0eSBpcyBuZXZlciBndWVzc2VkIGZyb20gYW4gdW5yZWxhdGVkXG4vLyBuZWlnaGJvcmluZyBwYWNrJ3MgZW51bSBvZmZzZXQuXG5jb25zdCBTVE9SRURfQ09QWV9BQklMSVRZX09XTkVSX0JZX0lEID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1xuICBbJzI5NicsICdXb2xmJ10sXG5dKTtcblxuY29uc3QgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMgPSBbXG4gIHtcbiAgICBwZXQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDEnLFxuICAgIGxldmVsOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWwnLFxuICAgIHRpbWVzSHVydDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydCcsXG4gICAgYmVsdWdhOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICBzYXJjYXN0aWNGcmluZ2VoZWFkOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCcsXG4gIH0sXG4gIHtcbiAgICBwZXQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDInLFxuICAgIGxldmVsOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWwnLFxuICAgIHRpbWVzSHVydDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydCcsXG4gICAgYmVsdWdhOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICBzYXJjYXN0aWNGcmluZ2VoZWFkOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCcsXG4gIH0sXG4gIHtcbiAgICBwZXQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDMnLFxuICAgIGxldmVsOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWwnLFxuICAgIHRpbWVzSHVydDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydCcsXG4gICAgYmVsdWdhOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICBzYXJjYXN0aWNGcmluZ2VoZWFkOiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCcsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG50eXBlIEFiaWxpdHlPd25lckNvdW50cyA9IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIG51bWJlcj4+O1xuXG50eXBlIEFib21pbmF0aW9uU3dhbGxvd2VkUGV0RmllbGQgPSAodHlwZW9mIEFCT01JTkFUSU9OX1NMT1RfRklFTERTKVtudW1iZXJdWydwZXQnXTtcbnR5cGUgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRMZXZlbEZpZWxkID1cbiAgKHR5cGVvZiBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUylbbnVtYmVyXVsnbGV2ZWwnXTtcbnR5cGUgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRUaW1lc0h1cnRGaWVsZCA9XG4gICh0eXBlb2YgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMpW251bWJlcl1bJ3RpbWVzSHVydCddO1xudHlwZSBBYm9taW5hdGlvblN3YWxsb3dlZFBldE5lc3RlZEZpZWxkID1cbiAgKHR5cGVvZiBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUylbbnVtYmVyXVsnYmVsdWdhJ10gfFxuICAodHlwZW9mIEFCT01JTkFUSU9OX1NMT1RfRklFTERTKVtudW1iZXJdWydzYXJjYXN0aWNGcmluZ2VoZWFkJ107XG5cbnR5cGUgQWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSA9IFBpY2s8XG4gIFBldENvbmZpZyxcbiAgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRGaWVsZCB8XG4gIEFib21pbmF0aW9uU3dhbGxvd2VkUGV0TGV2ZWxGaWVsZCB8XG4gIEFib21pbmF0aW9uU3dhbGxvd2VkUGV0VGltZXNIdXJ0RmllbGQgfFxuICBBYm9taW5hdGlvblN3YWxsb3dlZFBldE5lc3RlZEZpZWxkXG4+O1xuXG5mdW5jdGlvbiB0b1JlcGxheUlkKHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRBYmlsaXR5T3duZXJDb3VudChcbiAgYWJpbGl0eU93bmVyQ291bnRzOiBBYmlsaXR5T3duZXJDb3VudHMsXG4gIGFiaWxpdHlJZDogc3RyaW5nLFxuICBwZXRJZDogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGxldCBwZXRDb3VudEJ5SWQgPSBhYmlsaXR5T3duZXJDb3VudHMuZ2V0KGFiaWxpdHlJZCk7XG4gIGlmICghcGV0Q291bnRCeUlkKSB7XG4gICAgcGV0Q291bnRCeUlkID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBhYmlsaXR5T3duZXJDb3VudHMuc2V0KGFiaWxpdHlJZCwgcGV0Q291bnRCeUlkKTtcbiAgfVxuICBwZXRDb3VudEJ5SWQuc2V0KHBldElkLCAocGV0Q291bnRCeUlkLmdldChwZXRJZCkgPz8gMCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdEFiaWxpdHlPd25lckNvdW50cyhcbiAgdmFsdWU6IHVua25vd24sXG4gIGFiaWxpdHlPd25lckNvdW50czogQWJpbGl0eU93bmVyQ291bnRzLFxuKTogdm9pZCB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKGVudHJ5KSA9PiBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKGVudHJ5LCBhYmlsaXR5T3duZXJDb3VudHMpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWlzUmVjb3JkKHZhbHVlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBldElkID0gdG9SZXBsYXlJZCh2YWx1ZS5FbnUpO1xuICBjb25zdCBhYmlsaXRpZXMgPSB2YWx1ZS5BYmlsO1xuICBpZiAocGV0SWQgJiYgQXJyYXkuaXNBcnJheShhYmlsaXRpZXMpICYmICFDT1BZX1NPVVJDRV9QRVRfSURTLmhhcyhwZXRJZCkpIHtcbiAgICBhYmlsaXRpZXMuZm9yRWFjaCgoYWJpbGl0eSkgPT4ge1xuICAgICAgaWYgKCFpc1JlY29yZChhYmlsaXR5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhYmlsaXR5SWQgPSB0b1JlcGxheUlkKGFiaWxpdHkuRW51KTtcbiAgICAgIGlmICghYWJpbGl0eUlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluY3JlbWVudEFiaWxpdHlPd25lckNvdW50KGFiaWxpdHlPd25lckNvdW50cywgYWJpbGl0eUlkLCBwZXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICBPYmplY3QudmFsdWVzKHZhbHVlKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMoZW50cnksIGFiaWxpdHlPd25lckNvdW50cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwaWNrTW9zdExpa2VseVBldElkKHBldENvdW50QnlJZDogTWFwPHN0cmluZywgbnVtYmVyPik6IHN0cmluZyB8IG51bGwge1xuICBsZXQgYmVzdFBldElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgbGV0IGJlc3RDb3VudCA9IC0xO1xuXG4gIGZvciAoY29uc3QgW3BldElkLCBjb3VudF0gb2YgcGV0Q291bnRCeUlkLmVudHJpZXMoKSkge1xuICAgIGlmIChcbiAgICAgIGNvdW50ID4gYmVzdENvdW50IHx8XG4gICAgICAoY291bnQgPT09IGJlc3RDb3VudCAmJiAoYmVzdFBldElkID09PSBudWxsIHx8IHBldElkIDwgYmVzdFBldElkKSlcbiAgICApIHtcbiAgICAgIGJlc3RQZXRJZCA9IHBldElkO1xuICAgICAgYmVzdENvdW50ID0gY291bnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RQZXRJZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXBsYXlBYmlsaXR5UGV0TWFwRnJvbUNvdW50cyhcbiAgYWJpbGl0eU93bmVyQ291bnRzOiBBYmlsaXR5T3duZXJDb3VudHMsXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgYWJpbGl0eVBldE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBmb3IgKGNvbnN0IFthYmlsaXR5SWQsIHBldENvdW50QnlJZF0gb2YgYWJpbGl0eU93bmVyQ291bnRzLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHBldElkID0gcGlja01vc3RMaWtlbHlQZXRJZChwZXRDb3VudEJ5SWQpO1xuICAgIGlmIChwZXRJZCkge1xuICAgICAgYWJpbGl0eVBldE1hcFthYmlsaXR5SWRdID0gcGV0SWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBhYmlsaXR5UGV0TWFwO1xufVxuXG5mdW5jdGlvbiBwYXJzZUpzb25WYWx1ZShyYXc6IHVua25vd24pOiB1bmtub3duIHtcbiAgaWYgKGlzUmVjb3JkKHJhdykgfHwgQXJyYXkuaXNBcnJheShyYXcpKSB7XG4gICAgcmV0dXJuIHJhdztcbiAgfVxuICBpZiAodHlwZW9mIHJhdyAhPT0gJ3N0cmluZycgfHwgcmF3Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KSBhcyB1bmtub3duO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUmVwbGF5Rm9vZEVudHJ5SnNvbiB7XG4gIElkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgTmFtZT86IHN0cmluZyB8IG51bGw7XG4gIEFiaWxpdHk/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCByZXBsYXlGb29kRW50cmllcyA9XG4gIChmb29kSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IFJlcGxheUZvb2RFbnRyeUpzb25bXSB9KS5kZWZhdWx0ID8/XG4gIChmb29kSnNvbiBhcyB1bmtub3duIGFzIFJlcGxheUZvb2RFbnRyeUpzb25bXSk7XG5cbi8vIFRoZSByZXBsYXkgQVBJIHN0b3JlcyB0aGUgZm9vZC1jYXJkIGVudW0gaW4gYSBzcGVsbCByZXNwb25zZSwgd2hpbGUgdGhlXG4vLyBwZXQgc25hcHNob3Qgc3RvcmVzIHRoZSByZXN1bHRpbmcgcGVyayB1bmRlciBhIHNlcGFyYXRlIGVudW0uIFJlc29sdmUgdGhlXG4vLyBmb3JtZXIgZnJvbSBjYW5vbmljYWwgZm9vZCBtZXRhZGF0YSBzbyBuZXdseSBhZGRlZCBwZXJrIGZvb2RzIGRvIG5vdCBuZWVkIGFcbi8vIHNlY29uZCBoYW5kLW1haW50YWluZWQgcmVwbGF5IG1hcHBpbmcuXG5jb25zdCBSRVBMQVlfUEVSS19GT09EX05BTUVTX0JZX1NQRUxMX0lEID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oXG4gIHJlcGxheUZvb2RFbnRyaWVzXG4gICAgLmZpbHRlcihcbiAgICAgIChlbnRyeSk6IGVudHJ5IGlzIFJlcGxheUZvb2RFbnRyeUpzb24gJiB7IElkOiBudW1iZXIgfCBzdHJpbmc7IE5hbWU6IHN0cmluZyB9ID0+XG4gICAgICAgIGVudHJ5Py5JZCAhPT0gbnVsbCAmJlxuICAgICAgICBlbnRyeT8uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0eXBlb2YgZW50cnk/Lk5hbWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgIC9eR2l2ZSBvbmUgcGV0IHRoZSAuKyBwZXJrXFwuJC9pLnRlc3QoZW50cnk/LkFiaWxpdHkgPz8gJycpLFxuICAgIClcbiAgICAubWFwKChlbnRyeSkgPT4gW1N0cmluZyhlbnRyeS5JZCksIGVudHJ5Lk5hbWVdKSxcbik7XG5cbmZ1bmN0aW9uIGdldFJlcGxheUVudGl0eUtleSh2YWx1ZTogdW5rbm93bik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCByZWNvcmQgPSBhc1JlY29yZCh2YWx1ZSk7XG4gIGlmICghcmVjb3JkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBib2FyZElkID0gcmVjb3JkWydCb0lkJ10gPz8gcmVjb3JkWydib0lkJ107XG4gIGNvbnN0IHVuaXF1ZUlkID0gcmVjb3JkWydVbmknXSA/PyByZWNvcmRbJ3VuaSddO1xuICBpZiAoYm9hcmRJZCA9PT0gbnVsbCB8fCBib2FyZElkID09PSB1bmRlZmluZWQgfHwgdW5pcXVlSWQgPT09IG51bGwgfHwgdW5pcXVlSWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGAke1N0cmluZyhib2FyZElkKX06JHtTdHJpbmcodW5pcXVlSWQpfWA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVwbGF5UGV0SWRCeUVudGl0eUtleShcbiAgYmF0dGxlSnNvbjogUmVwbGF5QmF0dGxlSnNvbixcbik6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBwZXRJZEJ5RW50aXR5S2V5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBib2FyZCBvZiBbYmF0dGxlSnNvbi5Vc2VyQm9hcmQsIGJhdHRsZUpzb24uT3Bwb25lbnRCb2FyZF0pIHtcbiAgICBjb25zdCBpdGVtcyA9IGJvYXJkPy5NaW5zPy5JdGVtcyA/PyBbXTtcbiAgICBmb3IgKGNvbnN0IHBldCBvZiBpdGVtcykge1xuICAgICAgaWYgKCFwZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwZXRJZCA9IHRvUmVwbGF5SWQocGV0LkVudSk7XG4gICAgICBjb25zdCBlbnRpdHlLZXkgPSBnZXRSZXBsYXlFbnRpdHlLZXkocGV0WydJZCddKTtcbiAgICAgIGlmIChwZXRJZCAmJiBlbnRpdHlLZXkpIHtcbiAgICAgICAgcGV0SWRCeUVudGl0eUtleS5zZXQoZW50aXR5S2V5LCBwZXRJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwZXRJZEJ5RW50aXR5S2V5O1xufVxuXG5mdW5jdGlvbiBnZXRSZXBsYXlTcGVsbFBlcmtUYXJnZXQoXG4gIGFjdGlvbjogUmVwbGF5QWN0aW9uSnNvbixcbik6IHsgcGVya05hbWU6IHN0cmluZzsgdGFyZ2V0S2V5OiBzdHJpbmcgfSB8IG51bGwge1xuICBpZiAoYWN0aW9uLlR5cGUgIT09IDgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXNSZWNvcmQocGFyc2VKc29uVmFsdWUoYWN0aW9uLlJlc3BvbnNlKSk7XG4gIGNvbnN0IHJlc3BvbnNlRXZlbnQgPSBhc1JlY29yZChyZXNwb25zZT8uWydFdmVudCddKTtcbiAgY29uc3QgZXZlbnQgPSBhc1JlY29yZChyZXNwb25zZUV2ZW50Py5bJ0V2ZW50J10pID8/IHJlc3BvbnNlRXZlbnQ7XG4gIGNvbnN0IHNwZWxsID0gYXNSZWNvcmQoZXZlbnQ/LlsnU3BlbGwnXSk7XG4gIGNvbnN0IHRhcmdldCA9IGFzUmVjb3JkKGV2ZW50Py5bJ1RhcmdldCddKTtcbiAgY29uc3Qgc3BlbGxJZCA9IHRvUmVwbGF5SWQoc3BlbGw/LlsnRW51J10pO1xuICBjb25zdCBwZXJrTmFtZSA9IHNwZWxsSWRcbiAgICA/IFJFUExBWV9QRVJLX0ZPT0RfTkFNRVNfQllfU1BFTExfSUQuZ2V0KHNwZWxsSWQpXG4gICAgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHRhcmdldEtleSA9IGdldFJlcGxheUVudGl0eUtleSh0YXJnZXQpO1xuXG4gIHJldHVybiBwZXJrTmFtZSAmJiB0YXJnZXRLZXkgPyB7IHBlcmtOYW1lLCB0YXJnZXRLZXkgfSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQmF0dGxlQWN0aW9uKHJhdzogdW5rbm93bik6IFJlcGxheUJhdHRsZUpzb24gfCBudWxsIHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VKc29uVmFsdWUocmF3KTtcbiAgaWYgKCFpc1JlY29yZChwYXJzZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZCBhcyBSZXBsYXlCYXR0bGVKc29uO1xufVxuXG5mdW5jdGlvbiBidWlsZFBhY2tJZEJ5TmFtZUxvb2t1cCgpOiBNYXA8c3RyaW5nLCBudW1iZXI+IHtcbiAgY29uc3QgbG9va3VwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgT2JqZWN0LmVudHJpZXMoUEFDS19NQVApLmZvckVhY2goKFtwYWNrSWRSYXcsIHBhY2tOYW1lXSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcGFja05hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhY2tJZCA9IE51bWJlcihwYWNrSWRSYXcpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHBhY2tJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9va3VwLnNldChwYWNrTmFtZS50b0xvd2VyQ2FzZSgpLCBwYWNrSWQpO1xuICB9KTtcbiAgcmV0dXJuIGxvb2t1cDtcbn1cblxuY29uc3QgUEFDS19JRF9CWV9OQU1FID0gYnVpbGRQYWNrSWRCeU5hbWVMb29rdXAoKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVBhY2tJZEZyb21Vbmtub3duKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IG51bWVyaWMgPSB0b0Zpbml0ZU51bWJlcih2YWx1ZSk7XG4gIGlmIChudW1lcmljICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bWVyaWM7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBieU5hbWUgPSBQQUNLX0lEX0JZX05BTUUuZ2V0KHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChieU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGJ5TmFtZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHVyblBldFRvUmVwbGF5UGV0KFxuICByYXdQZXQ6IFJlcGxheUJvdFR1cm5QZXRKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IFJlcGxheVBldEpzb24gfCBudWxsIHtcbiAgaWYgKCFyYXdQZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBldElkID0gdG9SZXBsYXlJZChyYXdQZXQuaWQpO1xuICBpZiAoIXBldElkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzbG90ID0gdG9GaW5pdGVOdW1iZXIocmF3UGV0LnNsb3QpO1xuICBjb25zdCBhYmlsaXRpZXMgPSAocmF3UGV0LmFiaWxpdGllcyA/PyBbXSlcbiAgICAubWFwKChhYmlsaXR5KTogUmVwbGF5QWJpbGl0eUpzb24gfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eT8uaWQpO1xuICAgICAgaWYgKCFhYmlsaXR5SWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBFbnU6IGFiaWxpdHlJZCxcbiAgICAgICAgTHZsOiB0b0Zpbml0ZU51bWJlcihhYmlsaXR5Py5sZXZlbCksXG4gICAgICAgIEdyb3A6IHRvRmluaXRlTnVtYmVyKGFiaWxpdHk/Lmdyb3VwKSxcbiAgICAgICAgVHJDbzogdG9GaW5pdGVOdW1iZXIoYWJpbGl0eT8udHJpZ2dlcnNDb25zdW1lZCksXG4gICAgICB9O1xuICAgIH0pXG4gICAgLmZpbHRlcigoYWJpbGl0eSk6IGFiaWxpdHkgaXMgUmVwbGF5QWJpbGl0eUpzb24gPT4gYWJpbGl0eSAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBFbnU6IHBldElkLFxuICAgIEx2bDogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmxldmVsKSxcbiAgICBFeHA6IHRvRmluaXRlTnVtYmVyKHJhd1BldC5leHBlcmllbmNlKSxcbiAgICBQZXJrOiB0b1JlcGxheUlkKHJhd1BldC5wZXJrSWQpLFxuICAgIE1hbmE6IHRvRmluaXRlTnVtYmVyKHJhd1BldC5tYW5hKSxcbiAgICBBdDoge1xuICAgICAgUGVybTogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmF0dGFjaz8ucGVybWFuZW50KSxcbiAgICAgIFRlbXA6IHRvRmluaXRlTnVtYmVyKHJhd1BldC5hdHRhY2s/LnRlbXBvcmFyeSksXG4gICAgfSxcbiAgICBIcDoge1xuICAgICAgUGVybTogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmhlYWx0aD8ucGVybWFuZW50KSxcbiAgICAgIFRlbXA6IHRvRmluaXRlTnVtYmVyKHJhd1BldC5oZWFsdGg/LnRlbXBvcmFyeSksXG4gICAgfSxcbiAgICBQb2k6IHtcbiAgICAgIHg6IHNsb3QsXG4gICAgfSxcbiAgICBBYmlsOiBhYmlsaXRpZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHVyblNpZGVUb1JlcGxheUJvYXJkKFxuICBzaWRlOiBSZXBsYXlCb3RUdXJuU2lkZUpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuICBmYWxsYmFja1R1cm46IG51bWJlcixcbiAgcGFja1Jhdz86IHVua25vd24sXG4pOiBSZXBsYXlCb2FyZEpzb24ge1xuICByZXR1cm4ge1xuICAgIFR1cjogdG9OdW1iZXJPckZhbGxiYWNrKHNpZGU/LnN0YXRzPy50dXJuLCBmYWxsYmFja1R1cm4pLFxuICAgIEdvU3A6IHRvTnVtYmVyT3JGYWxsYmFjayhzaWRlPy5zdGF0cz8uZ29sZFNwZW50LCAwKSxcbiAgICBSb2xkOiB0b051bWJlck9yRmFsbGJhY2soc2lkZT8uc3RhdHM/LnJvbGxzLCAwKSxcbiAgICBNaVN1OiB0b051bWJlck9yRmFsbGJhY2soc2lkZT8uc3RhdHM/LnN1bW1vbnMsIDApLFxuICAgIE1TRkw6IHRvTnVtYmVyT3JGYWxsYmFjayhzaWRlPy5zdGF0cz8ubGV2ZWwzU29sZCwgMCksXG4gICAgVHJUVDogdG9OdW1iZXJPckZhbGxiYWNrKHNpZGU/LnN0YXRzPy50cmFuc2Zvcm1lZCwgMCksXG4gICAgUGFjazogcmVzb2x2ZVBhY2tJZEZyb21Vbmtub3duKHBhY2tSYXcpLFxuICAgIE1pbnM6IHtcbiAgICAgIEl0ZW1zOiAoc2lkZT8ucGV0cyA/PyBbXSkubWFwKChwZXQpID0+IHBhcnNlVHVyblBldFRvUmVwbGF5UGV0KHBldCkpLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJlcGxheUJhdHRsZUZyb21UdXJucyhcbiAgdHVybnM6IFJlYWRvbmx5QXJyYXk8UmVwbGF5Qm90VHVybkpzb24+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgdHVybk51bWJlcjogbnVtYmVyLFxuICByZXBsYXlNZXRhPzogUmVwbGF5Qm90UmVwbGF5TWV0YUpzb24gfCBudWxsLFxuKTogUmVwbGF5QmF0dGxlSnNvbiB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0dXJuTnVtYmVyKSB8fCB0dXJuTnVtYmVyIDw9IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHR1cm5FbnRyeSA9XG4gICAgKHR1cm5zID8/IFtdKS5maW5kKChlbnRyeSkgPT4gTnVtYmVyKGVudHJ5Py50dXJuKSA9PT0gdHVybk51bWJlcikgPz9cbiAgICAodHVybnMgPz8gW10pW3R1cm5OdW1iZXIgLSAxXSA/P1xuICAgIG51bGw7XG4gIGlmICghdHVybkVudHJ5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBmYWxsYmFja1R1cm4gPSB0b051bWJlck9yRmFsbGJhY2sodHVybkVudHJ5LnR1cm4sIHR1cm5OdW1iZXIpO1xuICByZXR1cm4ge1xuICAgIFVzZXJCb2FyZDogcGFyc2VUdXJuU2lkZVRvUmVwbGF5Qm9hcmQoXG4gICAgICB0dXJuRW50cnkudXNlcixcbiAgICAgIGZhbGxiYWNrVHVybixcbiAgICAgIHJlcGxheU1ldGE/LnBhY2ssXG4gICAgKSxcbiAgICBPcHBvbmVudEJvYXJkOiBwYXJzZVR1cm5TaWRlVG9SZXBsYXlCb2FyZChcbiAgICAgIHR1cm5FbnRyeS5vcHBvbmVudCxcbiAgICAgIGZhbGxiYWNrVHVybixcbiAgICAgIHJlcGxheU1ldGE/Lm9wcG9uZW50X3BhY2ssXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlcGxheUJhdHRsZUZyb21BY3Rpb25zKFxuICBhY3Rpb25zOiBSZWFkb25seUFycmF5PFJlcGxheUFjdGlvbkpzb24+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgdHVybk51bWJlcjogbnVtYmVyLFxuKTogUmVwbGF5QmF0dGxlSnNvbiB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0dXJuTnVtYmVyKSB8fCB0dXJuTnVtYmVyIDw9IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJhdHRsZUFjdGlvbnMgPSAoYWN0aW9ucyA/PyBbXSkuZmlsdGVyKFxuICAgIChhY3Rpb24pID0+XG4gICAgICBCb29sZWFuKGFjdGlvbj8uQmF0dGxlKSAmJlxuICAgICAgKGFjdGlvbj8uVHlwZSA9PT0gMCB8fCBhY3Rpb24/LlR5cGUgPT09IG51bGwgfHwgYWN0aW9uPy5UeXBlID09PSB1bmRlZmluZWQpLFxuICApO1xuXG4gIGNvbnN0IGFjdGlvbkZvclR1cm4gPVxuICAgIGJhdHRsZUFjdGlvbnMuZmluZCgoYWN0aW9uKSA9PiBOdW1iZXIoYWN0aW9uPy5UdXJuKSA9PT0gdHVybk51bWJlcikgPz9cbiAgICBiYXR0bGVBY3Rpb25zW3R1cm5OdW1iZXIgLSAxXSA/P1xuICAgIG51bGw7XG5cbiAgcmV0dXJuIHBhcnNlQmF0dGxlQWN0aW9uKGFjdGlvbkZvclR1cm4/LkJhdHRsZSA/PyBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVwbGF5QWJpbGl0eVBldE1hcEZyb21BY3Rpb25zKFxuICBhY3Rpb25zOiBSZWFkb25seUFycmF5PFJlcGxheUFjdGlvbkpzb24+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBhYmlsaXR5T3duZXJDb3VudHM6IEFiaWxpdHlPd25lckNvdW50cyA9IG5ldyBNYXAoKTtcbiAgKGFjdGlvbnMgPz8gW10pLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZEJ1aWxkID0gcGFyc2VKc29uVmFsdWUoYWN0aW9uPy5CdWlsZCk7XG4gICAgY29uc3QgcGFyc2VkQmF0dGxlID0gcGFyc2VKc29uVmFsdWUoYWN0aW9uPy5CYXR0bGUpO1xuICAgIGNvbnN0IHBhcnNlZE1vZGUgPSBwYXJzZUpzb25WYWx1ZShhY3Rpb24/Lk1vZGUpO1xuICAgIGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMocGFyc2VkQnVpbGQsIGFiaWxpdHlPd25lckNvdW50cyk7XG4gICAgY29sbGVjdEFiaWxpdHlPd25lckNvdW50cyhwYXJzZWRCYXR0bGUsIGFiaWxpdHlPd25lckNvdW50cyk7XG4gICAgY29sbGVjdEFiaWxpdHlPd25lckNvdW50cyhwYXJzZWRNb2RlLCBhYmlsaXR5T3duZXJDb3VudHMpO1xuICB9KTtcbiAgcmV0dXJuIGJ1aWxkUmVwbGF5QWJpbGl0eVBldE1hcEZyb21Db3VudHMoYWJpbGl0eU93bmVyQ291bnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVwbGF5UGVya05hbWVCeVBldElkRnJvbUFjdGlvbnMoXG4gIGFjdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwbGF5QWN0aW9uSnNvbj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICB0dXJuTnVtYmVyOiBudW1iZXIsXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgYmF0dGxlSnNvbiA9IHNlbGVjdFJlcGxheUJhdHRsZUZyb21BY3Rpb25zKGFjdGlvbnMsIHR1cm5OdW1iZXIpO1xuICBpZiAoIWJhdHRsZUpzb24pIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCBwZXRJZEJ5RW50aXR5S2V5ID0gYnVpbGRSZXBsYXlQZXRJZEJ5RW50aXR5S2V5KGJhdHRsZUpzb24pO1xuICBjb25zdCBwZXJrTmFtZUJ5UGV0SWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAoYWN0aW9ucyA/PyBbXSkuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uVHVybiA9IHRvRmluaXRlTnVtYmVyKGFjdGlvbi5UdXJuKTtcbiAgICBpZiAoYWN0aW9uVHVybiAhPT0gbnVsbCAmJiBhY3Rpb25UdXJuID4gdHVybk51bWJlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWxsUGVya1RhcmdldCA9IGdldFJlcGxheVNwZWxsUGVya1RhcmdldChhY3Rpb24pO1xuICAgIGlmICghc3BlbGxQZXJrVGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGV0SWQgPSBwZXRJZEJ5RW50aXR5S2V5LmdldChzcGVsbFBlcmtUYXJnZXQudGFyZ2V0S2V5KTtcbiAgICBpZiAocGV0SWQpIHtcbiAgICAgIHBlcmtOYW1lQnlQZXRJZFtwZXRJZF0gPSBzcGVsbFBlcmtUYXJnZXQucGVya05hbWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGVya05hbWVCeVBldElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXBsYXlGb3JDYWxjdWxhdG9yRnJvbUFjdGlvbnMoXG4gIGFjdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwbGF5QWN0aW9uSnNvbj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICB0dXJuTnVtYmVyOiBudW1iZXIsXG4gIGJ1aWxkTW9kZWw/OiBSZXBsYXlCdWlsZE1vZGVsSnNvbiB8IG51bGwsXG4gIG1ldGFCb2FyZHM/OiBSZXBsYXlNZXRhQm9hcmRzLFxuICBvcHRpb25zPzogUmVwbGF5UGFyc2VPcHRpb25zLFxuKTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlIHwgbnVsbCB7XG4gIGNvbnN0IGJhdHRsZUpzb24gPSBzZWxlY3RSZXBsYXlCYXR0bGVGcm9tQWN0aW9ucyhhY3Rpb25zLCB0dXJuTnVtYmVyKTtcbiAgaWYgKCFiYXR0bGVKc29uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpbmZlcnJlZEFiaWxpdHlQZXRNYXAgPSBidWlsZFJlcGxheUFiaWxpdHlQZXRNYXBGcm9tQWN0aW9ucyhhY3Rpb25zKTtcbiAgY29uc3QgbWVyZ2VkQWJpbGl0eVBldE1hcCA9IHtcbiAgICAuLi5pbmZlcnJlZEFiaWxpdHlQZXRNYXAsXG4gICAgLi4uKG9wdGlvbnM/LmFiaWxpdHlQZXRNYXAgPz8ge30pLFxuICB9O1xuICBjb25zdCBpbmZlcnJlZFBlcmtOYW1lQnlQZXRJZCA9IGJ1aWxkUmVwbGF5UGVya05hbWVCeVBldElkRnJvbUFjdGlvbnMoXG4gICAgYWN0aW9ucyxcbiAgICB0dXJuTnVtYmVyLFxuICApO1xuICBjb25zdCBtZXJnZWRQZXJrTmFtZUJ5UGV0SWQgPSB7XG4gICAgLi4uaW5mZXJyZWRQZXJrTmFtZUJ5UGV0SWQsXG4gICAgLi4uKG9wdGlvbnM/LnBlcmtOYW1lQnlQZXRJZCA/PyB7fSksXG4gIH07XG5cbiAgY29uc3QgcGFyc2VyID0gbmV3IFJlcGxheUNhbGNQYXJzZXIoKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZVJlcGxheUZvckNhbGN1bGF0b3IoXG4gICAgYmF0dGxlSnNvbixcbiAgICBidWlsZE1vZGVsID8/IHVuZGVmaW5lZCxcbiAgICBtZXRhQm9hcmRzLFxuICAgIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBhYmlsaXR5UGV0TWFwOiBtZXJnZWRBYmlsaXR5UGV0TWFwLFxuICAgICAgcGVya05hbWVCeVBldElkOiBtZXJnZWRQZXJrTmFtZUJ5UGV0SWQsXG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVhbXdvb2RSZXBsYXlGb3JDYWxjdWxhdG9yKFxuICByZXBsYXk6XG4gICAgfCBSZXBsYXlBY3Rpb25zQ29udGFpbmVySnNvblxuICAgIHwgUmVwbGF5Qm90VHVybnNDb250YWluZXJKc29uXG4gICAgfCBudWxsXG4gICAgfCB1bmRlZmluZWQsXG4gIHR1cm5OdW1iZXI6IG51bWJlcixcbiAgbWV0YUJvYXJkcz86IFJlcGxheU1ldGFCb2FyZHMsXG4gIG9wdGlvbnM/OiBSZXBsYXlQYXJzZU9wdGlvbnMsXG4pOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgfCBudWxsIHtcbiAgY29uc3QgcmVwbGF5UmVjb3JkID0gYXNSZWNvcmQocmVwbGF5KTtcbiAgY29uc3QgaGFzVHVyblBheWxvYWQgPSBBcnJheS5pc0FycmF5KHJlcGxheVJlY29yZD8uWyd0dXJucyddKTtcbiAgaWYgKGhhc1R1cm5QYXlsb2FkKSB7XG4gICAgY29uc3QgdHVybnNSZXBsYXkgPSByZXBsYXkgYXMgUmVwbGF5Qm90VHVybnNDb250YWluZXJKc29uO1xuICAgIGNvbnN0IGJhdHRsZUpzb24gPSBzZWxlY3RSZXBsYXlCYXR0bGVGcm9tVHVybnMoXG4gICAgICB0dXJuc1JlcGxheS50dXJucyxcbiAgICAgIHR1cm5OdW1iZXIsXG4gICAgICB0dXJuc1JlcGxheS5yZXBsYXlNZXRhLFxuICAgICk7XG4gICAgaWYgKCFiYXR0bGVKc29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWVyZ2VkQWJpbGl0eVBldE1hcCA9IHtcbiAgICAgIC4uLih0dXJuc1JlcGxheS5hYmlsaXR5UGV0TWFwID8/IHt9KSxcbiAgICAgIC4uLihvcHRpb25zPy5hYmlsaXR5UGV0TWFwID8/IHt9KSxcbiAgICB9O1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBSZXBsYXlDYWxjUGFyc2VyKCk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZVJlcGxheUZvckNhbGN1bGF0b3IoXG4gICAgICBiYXR0bGVKc29uLFxuICAgICAgdHVybnNSZXBsYXkuZ2VuZXNpc0J1aWxkTW9kZWwgPz8gdW5kZWZpbmVkLFxuICAgICAgbWV0YUJvYXJkcyxcbiAgICAgIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgYWJpbGl0eVBldE1hcDogbWVyZ2VkQWJpbGl0eVBldE1hcCxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVJlcGxheUZvckNhbGN1bGF0b3JGcm9tQWN0aW9ucyhcbiAgICAocmVwbGF5IGFzIFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCk/LkFjdGlvbnMsXG4gICAgdHVybk51bWJlcixcbiAgICAocmVwbGF5IGFzIFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCk/LkdlbmVzaXNCdWlsZE1vZGVsID8/XG4gICAgICB1bmRlZmluZWQsXG4gICAgbWV0YUJvYXJkcyxcbiAgICBvcHRpb25zLFxuICApO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0QWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSgpOiBBYm9taW5hdGlvblN3YWxsb3dlZFN0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFCZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyQmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldDogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMSxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMSxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlcGxheUNhbGNQYXJzZXIge1xuICBwYXJzZVJlcGxheUZvckNhbGN1bGF0b3IoXG4gICAgYmF0dGxlSnNvbjogUmVwbGF5QmF0dGxlSnNvbixcbiAgICBidWlsZE1vZGVsPzogUmVwbGF5QnVpbGRNb2RlbEpzb24sXG4gICAgbWV0YUJvYXJkcz86IFJlcGxheU1ldGFCb2FyZHMsXG4gICAgb3B0aW9ucz86IFJlcGxheVBhcnNlT3B0aW9ucyxcbiAgKTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlIHtcbiAgICBjb25zb2xlLmxvZyhgW1JlcGxheUNhbGNQYXJzZXJdIFBFVFNfQllfSUQgc2l6ZTogJHtQRVRTX0JZX0lELnNpemV9YCk7XG4gICAgY29uc3QgdXNlckJvYXJkID0gYmF0dGxlSnNvbj8uVXNlckJvYXJkID8/IG1ldGFCb2FyZHM/LnVzZXJCb2FyZDtcbiAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gYmF0dGxlSnNvbj8uT3Bwb25lbnRCb2FyZCA/PyBtZXRhQm9hcmRzPy5vcHBvbmVudEJvYXJkO1xuXG4gICAgY29uc3QgcmVhZEJvYXJkTnVtYmVyID0gKFxuICAgICAgYm9hcmQ6IFJlcGxheUJvYXJkSnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgICBrZXk6IHN0cmluZyxcbiAgICAgIGZhbGxiYWNrOiBudW1iZXIsXG4gICAgKTogbnVtYmVyID0+IHtcbiAgICAgIHJldHVybiB0b051bWJlck9yRmFsbGJhY2soYm9hcmQ/LltrZXldLCBmYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFiaWxpdHlQZXROYW1lQnlBYmlsaXR5SWQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IGFiaWxpdHlQZXRJZEJ5QWJpbGl0eUlkID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICBjb25zdCBhcHBseUFiaWxpdHlQZXRNYXAgPSAoXG4gICAgICBhYmlsaXR5UGV0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICApOiB2b2lkID0+IHtcbiAgICAgIGlmICghYWJpbGl0eVBldE1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBPYmplY3QuZW50cmllcyhhYmlsaXR5UGV0TWFwKS5mb3JFYWNoKChbYWJpbGl0eUlkUmF3LCBwZXRJZE9yTmFtZV0pID0+IHtcbiAgICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5SWRSYXcpO1xuICAgICAgICBpZiAoIWFiaWxpdHlJZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFwcGVkUGV0SWQgPVxuICAgICAgICAgIHR5cGVvZiBwZXRJZE9yTmFtZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHBldElkT3JOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBTdHJpbmcocGV0SWRPck5hbWUpXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgLy8gSWYgdGhlIG1hcHBlZCBwZXQgaWQgaXMgbnVtZXJpYyBidXQgbm90IGZvdW5kIGluIFBFVFNfQllfSUQsXG4gICAgICAgIC8vIHRyeSBhIGxlZ2FjeSBvZmZzZXQgZmFsbGJhY2sgKHBldCBpZCAtIDMwKSB3aGljaCBzb21lIGJhY2tlbmRzXG4gICAgICAgIC8vIGVtaXQuIFRoaXMgZW5zdXJlcyBhYmlsaXR5LT5wZXQgbWFwcGluZ3MgdXNpbmcgdGhlIC0zMCBzY2hlbWVcbiAgICAgICAgLy8gc3RpbGwgcmVzb2x2ZSB0byBrbm93biBwZXQgaWRzLlxuICAgICAgICBpZiAobWFwcGVkUGV0SWQgJiYgIVBFVFNfQllfSUQuaGFzKG1hcHBlZFBldElkKSkge1xuICAgICAgICAgIGNvbnN0IGFzTnVtID0gTnVtYmVyKG1hcHBlZFBldElkKTtcbiAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihhc051bSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrTnVtID0gYXNOdW0gLSAzMDtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGZhbGxiYWNrTnVtKSAmJiBmYWxsYmFja051bSA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tJZCA9IFN0cmluZyhmYWxsYmFja051bSk7XG4gICAgICAgICAgICAgIGlmIChQRVRTX0JZX0lELmhhcyhmYWxsYmFja0lkKSkge1xuICAgICAgICAgICAgICAgIG1hcHBlZFBldElkID0gZmFsbGJhY2tJZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcHBlZFBldE5hbWUgPVxuICAgICAgICAgIChtYXBwZWRQZXRJZCA/IFBFVFNfQllfSUQuZ2V0KG1hcHBlZFBldElkKSA6IG51bGwpIHx8XG4gICAgICAgICAgKHR5cGVvZiBwZXRJZE9yTmFtZSA9PT0gJ3N0cmluZycgPyBwZXRJZE9yTmFtZSA6IG51bGwpO1xuXG4gICAgICAgIGlmIChtYXBwZWRQZXROYW1lKSB7XG4gICAgICAgICAgYWJpbGl0eVBldE5hbWVCeUFiaWxpdHlJZC5zZXQoYWJpbGl0eUlkLCBtYXBwZWRQZXROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFwcGVkUGV0SWQgJiYgUEVUU19CWV9JRC5oYXMobWFwcGVkUGV0SWQpKSB7XG4gICAgICAgICAgYWJpbGl0eVBldElkQnlBYmlsaXR5SWQuc2V0KGFiaWxpdHlJZCwgbWFwcGVkUGV0SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5mZXJyZWRBYmlsaXR5T3duZXJDb3VudHM6IEFiaWxpdHlPd25lckNvdW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKGJhdHRsZUpzb24sIGluZmVycmVkQWJpbGl0eU93bmVyQ291bnRzKTtcbiAgICBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKGJ1aWxkTW9kZWwsIGluZmVycmVkQWJpbGl0eU93bmVyQ291bnRzKTtcbiAgICBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKG1ldGFCb2FyZHMsIGluZmVycmVkQWJpbGl0eU93bmVyQ291bnRzKTtcbiAgICBhcHBseUFiaWxpdHlQZXRNYXAoXG4gICAgICBidWlsZFJlcGxheUFiaWxpdHlQZXRNYXBGcm9tQ291bnRzKGluZmVycmVkQWJpbGl0eU93bmVyQ291bnRzKSxcbiAgICApO1xuICAgIGFwcGx5QWJpbGl0eVBldE1hcChvcHRpb25zPy5hYmlsaXR5UGV0TWFwID8/IG51bGwpO1xuXG4gICAgY29uc3QgcmVzb2x2ZUFiaWxpdHlPd25lclBldE5hbWVCeU5lYXJieU1hcCA9IChcbiAgICAgIGFiaWxpdHlJZDogc3RyaW5nLFxuICAgICk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkQWJpbGl0eUlkID0gTnVtYmVyKGFiaWxpdHlJZCk7XG4gICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIocGFyc2VkQWJpbGl0eUlkKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2Zmc2V0Q291bnRzID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgIGZvciAoY29uc3QgW21hcHBlZEFiaWxpdHlJZCwgbWFwcGVkUGV0SWRdIG9mIGFiaWxpdHlQZXRJZEJ5QWJpbGl0eUlkLmVudHJpZXMoKSkge1xuICAgICAgICBjb25zdCBwYXJzZWRNYXBwZWRBYmlsaXR5SWQgPSBOdW1iZXIobWFwcGVkQWJpbGl0eUlkKTtcbiAgICAgICAgY29uc3QgcGFyc2VkTWFwcGVkUGV0SWQgPSBOdW1iZXIobWFwcGVkUGV0SWQpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIU51bWJlci5pc0ludGVnZXIocGFyc2VkTWFwcGVkQWJpbGl0eUlkKSB8fFxuICAgICAgICAgICFOdW1iZXIuaXNJbnRlZ2VyKHBhcnNlZE1hcHBlZFBldElkKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMocGFyc2VkTWFwcGVkQWJpbGl0eUlkIC0gcGFyc2VkQWJpbGl0eUlkKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwIHx8IGRpc3RhbmNlID4gMikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VkTWFwcGVkQWJpbGl0eUlkIC0gcGFyc2VkTWFwcGVkUGV0SWQ7XG4gICAgICAgIG9mZnNldENvdW50cy5zZXQob2Zmc2V0LCAob2Zmc2V0Q291bnRzLmdldChvZmZzZXQpID8/IDApICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBiZXN0T2Zmc2V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBiZXN0T2Zmc2V0Q291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBbb2Zmc2V0LCBjb3VudF0gb2Ygb2Zmc2V0Q291bnRzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY291bnQgPiBiZXN0T2Zmc2V0Q291bnQgfHxcbiAgICAgICAgICAoY291bnQgPT09IGJlc3RPZmZzZXRDb3VudCAmJlxuICAgICAgICAgICAgKGJlc3RPZmZzZXQgPT09IG51bGwgfHwgTWF0aC5hYnMob2Zmc2V0KSA8IE1hdGguYWJzKGJlc3RPZmZzZXQpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmVzdE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICBiZXN0T2Zmc2V0Q291bnQgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYmVzdE9mZnNldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5mZXJyZWRQZXRJZCA9IFN0cmluZyhwYXJzZWRBYmlsaXR5SWQgLSBiZXN0T2Zmc2V0KTtcbiAgICAgIHJldHVybiBQRVRTX0JZX0lELmdldChpbmZlcnJlZFBldElkKSA/PyBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZSA9IChhYmlsaXR5SWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWJpbGl0eVBldE5hbWVCeUFiaWxpdHlJZC5nZXQoYWJpbGl0eUlkKSA/P1xuICAgICAgICByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZUJ5TmVhcmJ5TWFwKGFiaWxpdHlJZClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRpbWVzSHVydCA9IChwZXRKc29uOiBSZXBsYXlQZXRKc29uKTogbnVtYmVyIHwgbnVsbCA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGltZXNIdXJ0RnJvbVJhd1BldChwZXRKc29uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5mZXJDb3BpZWRQZXROYW1lID0gKFxuICAgICAgcGV0SnNvbjogUmVwbGF5UGV0SnNvbixcbiAgICAgIGNvcHlQZXROYW1lOiBzdHJpbmcsXG4gICAgKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICAvLyBTdG9yZWQtYWJpbGl0eSBlbnVtcyBhcmUgZGVmaW5pdGl2ZS4gQ2hlY2sgZXZlcnkgYWJpbGl0eSBmb3Igb25lIGJlZm9yZVxuICAgICAgLy8gYXR0ZW1wdGluZyBuZWFyYnktbWFwIGluZmVyZW5jZTsgb3RoZXJ3aXNlIHRoZSBob2xkZXIncyBuYXRpdmUgYWJpbGl0eVxuICAgICAgLy8gY2FuIHByb2R1Y2UgYSBwbGF1c2libGUgYnV0IGluY29ycmVjdCBwZXQgKGZvciBleGFtcGxlIEFhcmR2YXJrIGJlZm9yZVxuICAgICAgLy8gcmVhY2hpbmcgQmVsdWdhJ3Mgc3RvcmVkIFdvbGYgZW51bSkuXG4gICAgICBmb3IgKGNvbnN0IGFiaWxpdHkgb2YgcGV0SnNvbi5BYmlsID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eT8uRW51KTtcbiAgICAgICAgY29uc3Qgc3RvcmVkQ29weU93bmVyID0gYWJpbGl0eUlkXG4gICAgICAgICAgPyBTVE9SRURfQ09QWV9BQklMSVRZX09XTkVSX0JZX0lELmdldChhYmlsaXR5SWQpXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAoc3RvcmVkQ29weU93bmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlZENvcHlPd25lcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGFiaWxpdHkgb2YgcGV0SnNvbi5BYmlsID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eT8uRW51KTtcbiAgICAgICAgaWYgKCFhYmlsaXR5SWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3duZXJQZXROYW1lID0gcmVzb2x2ZUFiaWxpdHlPd25lclBldE5hbWUoYWJpbGl0eUlkKTtcbiAgICAgICAgLy8gUmVwbGF5IGluZGV4ZXMgY2FuIGF0dHJpYnV0ZSBhIGNvcGllZCBhYmlsaXR5IHRvIGl0cyBjdXJyZW50IGhvbGRlci5cbiAgICAgICAgLy8gV2hlbiB0aGF0IGhhcHBlbnMsIHVzZSB0aGUgc3Vycm91bmRpbmcgY2Fub25pY2FsIGFiaWxpdHkgbWFwIHRvIGZpbmRcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG93bmVyIGluc3RlYWQuXG4gICAgICAgIGlmIChvd25lclBldE5hbWUgPT09IGNvcHlQZXROYW1lKSB7XG4gICAgICAgICAgb3duZXJQZXROYW1lID0gcmVzb2x2ZUFiaWxpdHlPd25lclBldE5hbWVCeU5lYXJieU1hcChhYmlsaXR5SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvd25lclBldE5hbWUgJiYgb3duZXJQZXROYW1lICE9PSBjb3B5UGV0TmFtZSkge1xuICAgICAgICAgIHJldHVybiBvd25lclBldE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBwYXJzZUFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUgPSAoXG4gICAgICBwZXRKc29uOiBSZXBsYXlQZXRKc29uLFxuICAgICk6IEFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUgPT4ge1xuICAgICAgY29uc3QgYWJvbWluYXRpb25TdGF0ZSA9IGRlZmF1bHRBYm9taW5hdGlvblN3YWxsb3dlZFN0YXRlKCk7XG4gICAgICBjb25zdCBhcHBseU5lc3RlZE1lbW9yeVN0YXRlID0gKFxuICAgICAgICBzbG90RmllbGRzOiAodHlwZW9mIEFCT01JTkFUSU9OX1NMT1RfRklFTERTKVtudW1iZXJdLFxuICAgICAgICBvd25lclBldE5hbWU6IHN0cmluZyxcbiAgICAgICAgYWJpbGl0eTogUmVwbGF5QWJpbGl0eUpzb24sXG4gICAgICApOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbWVtb3J5RW50cnkgPSBnZXRSZXBsYXlNZW1vcnlFbnRyeUJ5QWJpbGl0eUlkKHBldEpzb24sIGFiaWxpdHkuRW51KTtcbiAgICAgICAgY29uc3QgbmVzdGVkVGltZXNIdXJ0ID0gZ2V0VGltZXNIdXJ0RnJvbVJhd1BldChtZW1vcnlFbnRyeSk7XG4gICAgICAgIGlmIChuZXN0ZWRUaW1lc0h1cnQgIT09IG51bGwpIHtcbiAgICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMudGltZXNIdXJ0XSA9IG5lc3RlZFRpbWVzSHVydDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXN0ZWRTd2FsbG93ZWRQZXQgPSByZXNvbHZlTmVzdGVkU3dhbGxvd2VkUGV0TmFtZShtZW1vcnlFbnRyeSk7XG4gICAgICAgIGlmICghbmVzdGVkU3dhbGxvd2VkUGV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvd25lclBldE5hbWUgPT09ICdCZWx1Z2EgV2hhbGUnKSB7XG4gICAgICAgICAgYWJvbWluYXRpb25TdGF0ZVtzbG90RmllbGRzLmJlbHVnYV0gPSBuZXN0ZWRTd2FsbG93ZWRQZXQ7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvd25lclBldE5hbWUgPT09ICdTYXJjYXN0aWMgRnJpbmdlaGVhZCcpIHtcbiAgICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMuc2FyY2FzdGljRnJpbmdlaGVhZF0gPSBuZXN0ZWRTd2FsbG93ZWRQZXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvcGllZEFiaWxpdGllcyA9IChwZXRKc29uPy5BYmlsID8/IFtdKVxuICAgICAgICAubWFwKChhYmlsaXR5LCBpbmRleCkgPT4gKHsgYWJpbGl0eSwgaW5kZXggfSkpXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgYWJpbGl0eUVudHJ5LFxuICAgICAgICAgICk6IGFiaWxpdHlFbnRyeSBpcyB7IGFiaWxpdHk6IFJlcGxheUFiaWxpdHlKc29uOyBpbmRleDogbnVtYmVyIH0gPT5cbiAgICAgICAgICAgIGFiaWxpdHlFbnRyeS5hYmlsaXR5ICE9PSBudWxsICYmXG4gICAgICAgICAgICB0b1JlcGxheUlkKGFiaWxpdHlFbnRyeS5hYmlsaXR5Py5FbnUpICE9PSBudWxsLFxuICAgICAgICApO1xuXG4gICAgICBpZiAoY29waWVkQWJpbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYWJvbWluYXRpb25TdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ3JvdXBlZEFiaWxpdGllcyA9IG5ldyBNYXA8XG4gICAgICAgIG51bWJlcixcbiAgICAgICAgeyBhYmlsaXR5OiBSZXBsYXlBYmlsaXR5SnNvbjsgaW5kZXg6IG51bWJlciB9W11cbiAgICAgID4oKTtcbiAgICAgIGNvbnN0IG9yZGVyZWRHcm91cEtleXM6IG51bWJlcltdID0gW107XG4gICAgICBjb3BpZWRBYmlsaXRpZXMuZm9yRWFjaCgoYWJpbGl0eUVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gdG9GaW5pdGVOdW1iZXIoYWJpbGl0eUVudHJ5LmFiaWxpdHk/Lkdyb3ApID8/IDA7XG4gICAgICAgIGlmICghZ3JvdXBlZEFiaWxpdGllcy5oYXMoZ3JvdXBLZXkpKSB7XG4gICAgICAgICAgZ3JvdXBlZEFiaWxpdGllcy5zZXQoZ3JvdXBLZXksIFtdKTtcbiAgICAgICAgICBvcmRlcmVkR3JvdXBLZXlzLnB1c2goZ3JvdXBLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwZWRBYmlsaXRpZXMuZ2V0KGdyb3VwS2V5KT8ucHVzaChhYmlsaXR5RW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVzZWRBYmlsaXR5SW5kZXhlcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAgICAgY29uc3QgdW5yZXNvbHZlZFNsb3RJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUy5mb3JFYWNoKChzbG90RmllbGRzLCBzbG90SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBvcmRlcmVkR3JvdXBLZXlzW3Nsb3RJbmRleF07XG4gICAgICAgIGlmIChncm91cEtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdW5yZXNvbHZlZFNsb3RJbmRleGVzLnB1c2goc2xvdEluZGV4KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JvdXBBYmlsaXRpZXMgPSBncm91cGVkQWJpbGl0aWVzLmdldChncm91cEtleSk7XG4gICAgICAgIGlmICghZ3JvdXBBYmlsaXRpZXMgfHwgZ3JvdXBBYmlsaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdW5yZXNvbHZlZFNsb3RJbmRleGVzLnB1c2goc2xvdEluZGV4KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzb2x2ZWRBYmlsaXR5RW50cnk6XG4gICAgICAgICAgfCB7IGFiaWxpdHk6IFJlcGxheUFiaWxpdHlKc29uOyBpbmRleDogbnVtYmVyIH1cbiAgICAgICAgICB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgcmVzb2x2ZWRQZXROYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAgICAgICBmb3IgKGNvbnN0IGFiaWxpdHlFbnRyeSBvZiBncm91cEFiaWxpdGllcykge1xuICAgICAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eUVudHJ5LmFiaWxpdHk/LkVudSk7XG4gICAgICAgICAgaWYgKCFhYmlsaXR5SWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvd25lclBldE5hbWUgPSByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZShhYmlsaXR5SWQpO1xuICAgICAgICAgIGlmICghb3duZXJQZXROYW1lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZWRBYmlsaXR5RW50cnkgPSBhYmlsaXR5RW50cnk7XG4gICAgICAgICAgcmVzb2x2ZWRQZXROYW1lID0gb3duZXJQZXROYW1lO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNvbHZlZEFiaWxpdHlFbnRyeSB8fCAhcmVzb2x2ZWRQZXROYW1lKSB7XG4gICAgICAgICAgdW5yZXNvbHZlZFNsb3RJbmRleGVzLnB1c2goc2xvdEluZGV4KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMucGV0XSA9IHJlc29sdmVkUGV0TmFtZTtcbiAgICAgICAgY29uc3QgaW5mZXJyZWRMZXZlbCA9IHRvRmluaXRlTnVtYmVyKHJlc29sdmVkQWJpbGl0eUVudHJ5LmFiaWxpdHk/Lkx2bCk7XG4gICAgICAgIGlmIChpbmZlcnJlZExldmVsICE9PSBudWxsKSB7XG4gICAgICAgICAgYWJvbWluYXRpb25TdGF0ZVtzbG90RmllbGRzLmxldmVsXSA9IGluZmVycmVkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgYXBwbHlOZXN0ZWRNZW1vcnlTdGF0ZShcbiAgICAgICAgICBzbG90RmllbGRzLFxuICAgICAgICAgIHJlc29sdmVkUGV0TmFtZSxcbiAgICAgICAgICByZXNvbHZlZEFiaWxpdHlFbnRyeS5hYmlsaXR5LFxuICAgICAgICApO1xuICAgICAgICB1c2VkQWJpbGl0eUluZGV4ZXMuYWRkKHJlc29sdmVkQWJpbGl0eUVudHJ5LmluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodW5yZXNvbHZlZFNsb3RJbmRleGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYWJvbWluYXRpb25TdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFsbGJhY2tSZXNvbHZlZEFiaWxpdGllcyA9IGNvcGllZEFiaWxpdGllc1xuICAgICAgICAuZmlsdGVyKChhYmlsaXR5RW50cnkpID0+ICF1c2VkQWJpbGl0eUluZGV4ZXMuaGFzKGFiaWxpdHlFbnRyeS5pbmRleCkpXG4gICAgICAgIC5tYXAoKGFiaWxpdHlFbnRyeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eUVudHJ5LmFiaWxpdHk/LkVudSk7XG4gICAgICAgICAgaWYgKCFhYmlsaXR5SWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvd25lclBldE5hbWUgPSByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZShhYmlsaXR5SWQpO1xuICAgICAgICAgIGlmICghb3duZXJQZXROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG93bmVyUGV0TmFtZSxcbiAgICAgICAgICAgIGxldmVsOiB0b0Zpbml0ZU51bWJlcihhYmlsaXR5RW50cnkuYWJpbGl0eT8uTHZsKSxcbiAgICAgICAgICAgIGFiaWxpdHk6IGFiaWxpdHlFbnRyeS5hYmlsaXR5LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgYWJpbGl0eUVudHJ5LFxuICAgICAgICAgICk6IGFiaWxpdHlFbnRyeSBpcyB7XG4gICAgICAgICAgICBvd25lclBldE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldmVsOiBudW1iZXIgfCBudWxsO1xuICAgICAgICAgICAgYWJpbGl0eTogUmVwbGF5QWJpbGl0eUpzb247XG4gICAgICAgICAgfSA9PlxuICAgICAgICAgICAgYWJpbGl0eUVudHJ5ICE9PSBudWxsLFxuICAgICAgICApO1xuXG4gICAgICB1bnJlc29sdmVkU2xvdEluZGV4ZXMuZm9yRWFjaCgoc2xvdEluZGV4LCBmYWxsYmFja0luZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrQWJpbGl0eSA9IGZhbGxiYWNrUmVzb2x2ZWRBYmlsaXRpZXNbZmFsbGJhY2tJbmRleF07XG4gICAgICAgIGlmICghZmFsbGJhY2tBYmlsaXR5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNsb3RGaWVsZHMgPSBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEU1tzbG90SW5kZXhdO1xuICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMucGV0XSA9IGZhbGxiYWNrQWJpbGl0eS5vd25lclBldE5hbWU7XG4gICAgICAgIGlmIChmYWxsYmFja0FiaWxpdHkubGV2ZWwgIT09IG51bGwpIHtcbiAgICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMubGV2ZWxdID0gZmFsbGJhY2tBYmlsaXR5LmxldmVsO1xuICAgICAgICB9XG4gICAgICAgIGFwcGx5TmVzdGVkTWVtb3J5U3RhdGUoXG4gICAgICAgICAgc2xvdEZpZWxkcyxcbiAgICAgICAgICBmYWxsYmFja0FiaWxpdHkub3duZXJQZXROYW1lLFxuICAgICAgICAgIGZhbGxiYWNrQWJpbGl0eS5hYmlsaXR5LFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhYm9taW5hdGlvblN0YXRlO1xuICAgIH07XG5cbiAgICBjb25zdCBwYXJzZVBldCA9IChwZXRKc29uOiBSZXBsYXlQZXRKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFBldENvbmZpZyB8IG51bGwgPT4ge1xuICAgICAgaWYgKCFwZXRKc29uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBoZWxwZXIgbWFwcyBmb3IgbW9yZSBhZHZhbmNlZCBpbmZlcmVuY2UgKHVzZWQgZm9yIEFib21pbmF0aW9uIG1lbW9yeSlcbiAgICAgIGNvbnN0IHBldFJlY29yZCA9IGFzUmVjb3JkKHBldEpzb24pO1xuICAgICAgY29uc3QgbWFwczogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyA9IHsgUEVUX0lEU19CWV9OQU1FIH07XG5cbiAgICAgIGNvbnN0IHJhd1BldFJlZiA9XG4gICAgICAgIHBldEpzb24uRW51ID8/XG4gICAgICAgIHBldFJlY29yZD8uWydlbnUnXSA/P1xuICAgICAgICBwZXRSZWNvcmQ/LlsnSWQnXSA/P1xuICAgICAgICBwZXRSZWNvcmQ/LlsnaWQnXTtcbiAgICAgIGNvbnN0IHJlc29sdmVkUGV0SWQgPSByZXNvbHZlUGV0SWRGcm9tVW5rbm93bihyYXdQZXRSZWYsIG1hcHMpO1xuICAgICAgY29uc3QgcGV0SWQgPSByZXNvbHZlZFBldElkICE9PSBudWxsID8gU3RyaW5nKHJlc29sdmVkUGV0SWQpIDogU3RyaW5nKHJhd1BldFJlZiA/PyAwKTtcblxuICAgICAgY29uc3QgcGV0TmFtZSA9XG4gICAgICAgIFBFVFNfQllfSUQuZ2V0KHBldElkKSB8fFxuICAgICAgICAodHlwZW9mIHBldFJlY29yZD8uWyduYW1lJ10gPT09ICdzdHJpbmcnID8gcGV0UmVjb3JkWyduYW1lJ10gOiBudWxsKSB8fFxuICAgICAgICAodHlwZW9mIHBldFJlY29yZD8uWydOYW1lJ10gPT09ICdzdHJpbmcnID8gcGV0UmVjb3JkWydOYW1lJ10gOiBudWxsKSB8fFxuICAgICAgICAodHlwZW9mIHJhd1BldFJlZiA9PT0gJ3N0cmluZycgJiYgcmF3UGV0UmVmLnRyaW0oKS5sZW5ndGggPiAwXG4gICAgICAgICAgPyByYXdQZXRSZWYudHJpbSgpXG4gICAgICAgICAgOiBgUGV0ICMke3BldElkfWApO1xuXG4gICAgICBjb25zb2xlLmxvZyhgW1JlcGxheUNhbGNQYXJzZXJdIFBldCBFbnU6JHtyYXdQZXRSZWZ9IC0+IElkOiR7cGV0SWR9IC0+IE5hbWU6JHtwZXROYW1lfWApO1xuXG4gICAgICBjb25zdCBhdEpzb24gPSBwZXRKc29uLkF0ID8/IGFzUmVjb3JkKHBldFJlY29yZD8uWydhdCddKTtcbiAgICAgIGNvbnN0IGhwSnNvbiA9IHBldEpzb24uSHAgPz8gYXNSZWNvcmQocGV0UmVjb3JkPy5bJ2hwJ10pO1xuICAgICAgY29uc3QgYXRKc29uUmVjb3JkID0gYXNSZWNvcmQoYXRKc29uKTtcbiAgICAgIGNvbnN0IGhwSnNvblJlY29yZCA9IGFzUmVjb3JkKGhwSnNvbik7XG5cbiAgICAgIGNvbnN0IHBldFRlbXBBdGsgPSB0b051bWJlck9yRmFsbGJhY2soXG4gICAgICAgIGF0SnNvbj8uVGVtcCA/PyBhdEpzb25SZWNvcmQ/LlsndGVtcCddLFxuICAgICAgICAwLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBldFRlbXBIcCA9IHRvTnVtYmVyT3JGYWxsYmFjayhcbiAgICAgICAgaHBKc29uPy5UZW1wID8/IGhwSnNvblJlY29yZD8uWyd0ZW1wJ10sXG4gICAgICAgIDAsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBiZWx1Z2FTd2FsbG93ZWRQZXQgPVxuICAgICAgICBwZXRJZCA9PT0gJzE4MidcbiAgICAgICAgICA/IHJlc29sdmVOZXN0ZWRTd2FsbG93ZWRQZXROYW1lKHBldEpzb24pID8/XG4gICAgICAgICAgICBpbmZlckNvcGllZFBldE5hbWUocGV0SnNvbiwgJ0JlbHVnYSBXaGFsZScpXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgY29uc3Qgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCA9XG4gICAgICAgIHBldElkID09PSAnNzYzJ1xuICAgICAgICAgID8gcmVzb2x2ZU5lc3RlZFN3YWxsb3dlZFBldE5hbWUocGV0SnNvbikgPz9cbiAgICAgICAgICAgIGluZmVyQ29waWVkUGV0TmFtZShwZXRKc29uLCAnU2FyY2FzdGljIEZyaW5nZWhlYWQnKVxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IGFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUgPVxuICAgICAgICBwZXRJZCA9PT0gJzM3MydcbiAgICAgICAgICA/IHBhcnNlQWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZShwZXRKc29uKVxuICAgICAgICAgIDogZGVmYXVsdEFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUoKTtcblxuICAgICAgLy8gYWJpbGl0eVBldElkQnlBYmlsaXR5SWQgaXMgYSBNYXA8YWJpbGl0eUlkLCBwZXRJZD5cbiAgICAgIC8vIFdlIGludmVydCBpdCBpbnRvIGFiaWxpdHlJZHNCeVBldElkOiB7IFtwZXRJZF06IFthYmlsaXR5SWQsIC4uLl0gfVxuICAgICAgY29uc3QgYWJpbGl0eUlkc0J5UGV0SWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuICAgICAgZm9yIChjb25zdCBbYWJpbGl0eUlkLCBtYXBwZWRQZXRJZF0gb2YgYWJpbGl0eVBldElkQnlBYmlsaXR5SWQuZW50cmllcygpKSB7XG4gICAgICAgIGNvbnN0IHBpZCA9IFN0cmluZyhtYXBwZWRQZXRJZCk7XG4gICAgICAgIGFiaWxpdHlJZHNCeVBldElkW3BpZF0gPSBhYmlsaXR5SWRzQnlQZXRJZFtwaWRdIHx8IFtdO1xuICAgICAgICBhYmlsaXR5SWRzQnlQZXRJZFtwaWRdLnB1c2goU3RyaW5nKGFiaWxpdHlJZCkpO1xuICAgICAgfVxuICAgICAgbWFwcy5hYmlsaXR5SWRzQnlQZXRJZCA9IGFiaWxpdHlJZHNCeVBldElkO1xuXG4gICAgICBjb25zdCB0aW1lc0h1cnQgPSBnZXRUaW1lc0h1cnQocGV0SnNvbik7XG4gICAgICBjb25zdCBhYmlsaXR5VHJpZ2dlcnNDb25zdW1lZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBnZXRUcmlnZ2Vyc0NvbnN1bWVkRnJvbVJhd1BldChwZXRKc29uKTtcbiAgICAgICAgcmV0dXJuIHYgPT09IG51bGwgPyBbXSA6IFt2XTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IHBlcmtWYWx1ZSA9IHBldEpzb24uUGVyaztcbiAgICAgIGNvbnN0IHJlcGxheVBlcmtOYW1lID1cbiAgICAgICAgcGV0SWQgIT09IG51bGxcbiAgICAgICAgICA/IG9wdGlvbnM/LnBlcmtOYW1lQnlQZXRJZD8uW1N0cmluZyhwZXRJZCldID8/IG51bGxcbiAgICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBwZXJrTmFtZSA9XG4gICAgICAgIHJlcGxheVBlcmtOYW1lID8/XG4gICAgICAgIChwZXJrVmFsdWUgIT09IG51bGwgJiYgcGVya1ZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IFBFUktTX0JZX0lELmdldChTdHJpbmcocGVya1ZhbHVlKSkgfHxcbiAgICAgICAgICAgICh0eXBlb2YgcGVya1ZhbHVlID09PSAnc3RyaW5nJyA/IHBlcmtWYWx1ZSA6ICdVbmtub3duIFBlcmsnKVxuICAgICAgICAgIDogbnVsbCk7XG5cbiAgICAgIGNvbnN0IHBhcnNlZFBldDogUGV0Q29uZmlnID0ge1xuICAgICAgICBuYW1lOiBwZXROYW1lLFxuICAgICAgICBhdHRhY2s6XG4gICAgICAgICAgdG9OdW1iZXJPckZhbGxiYWNrKFxuICAgICAgICAgICAgYXRKc29uPy5QZXJtID8/IGF0SnNvblJlY29yZD8uWydwZXJtJ10gPz8gcGV0UmVjb3JkPy5bJ2F0dGFjayddLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICApICsgcGV0VGVtcEF0ayxcbiAgICAgICAgaGVhbHRoOlxuICAgICAgICAgIHRvTnVtYmVyT3JGYWxsYmFjayhcbiAgICAgICAgICAgIGhwSnNvbj8uUGVybSA/PyBocEpzb25SZWNvcmQ/LlsncGVybSddID8/IHBldFJlY29yZD8uWydoZWFsdGgnXSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgKSArIHBldFRlbXBIcCxcbiAgICAgICAgZXhwOiAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4cCA9IHRvRmluaXRlTnVtYmVyKHBldEpzb24uRXhwKTtcbiAgICAgICAgICBpZiAoZXhwICE9PSBudWxsICYmIGV4cCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleHA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGx2bCA9IHRvRmluaXRlTnVtYmVyKHBldEpzb24uTHZsKTtcbiAgICAgICAgICBpZiAobHZsID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGx2bCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBleHAgPz8gMDtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgZXF1aXBtZW50OiBwZXJrTmFtZSA/IHsgbmFtZTogcGVya05hbWUgfSA6IG51bGwsXG4gICAgICAgIG1hbmE6IHRvTnVtYmVyT3JGYWxsYmFjayhwZXRKc29uLk1hbmEsIDApLFxuICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQsXG4gICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQsXG4gICAgICAgIC4uLmFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUsXG4gICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgIHRyaWdnZXJzQ29uc3VtZWQ6XG4gICAgICAgICAgYWJpbGl0eVRyaWdnZXJzQ29uc3VtZWQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBNYXRoLm1heCguLi5hYmlsaXR5VHJpZ2dlcnNDb25zdW1lZClcbiAgICAgICAgICAgIDogMCxcbiAgICAgIH07XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYW4gQWJvbWluYXRpb24sIGF0dGVtcHQgdG8gYXR0YWNoIGluZmVycmVkIG1lbW9yeS9hYmlsaXRpZXNcbiAgICAgIGlmIChTdHJpbmcocGV0SWQpID09PSAnMzczJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1lbSA9IGJ1aWxkQWJvbWluYXRpb25NZW1vcnkocGV0SnNvbiwgTnVtYmVyKHBldElkKSwgbWFwcyk7XG4gICAgICAgICAgaWYgKG1lbSkge1xuICAgICAgICAgICAgY29uc3QgYWJvbWluYXRpb25QZXQgPSBwYXJzZWRQZXQgYXMgUGV0Q29uZmlnICYge1xuICAgICAgICAgICAgICBhYm9taW5hdGlvbk1lbW9yeT86IHVua25vd247XG4gICAgICAgICAgICAgIGFib21pbmF0aW9uSW5mZXJyZWRBYmlsaXR5RW51bXM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhYm9taW5hdGlvblBldC5hYm9taW5hdGlvbk1lbW9yeSA9IG1lbTtcbiAgICAgICAgICAgIGNvbnN0IGluZmVycmVkRW51bXMgPSBpbmZlckFib21pbmF0aW9uQWJpbGl0eUVudW1zRnJvbVN3YWxsb3dlZFBldHMoXG4gICAgICAgICAgICAgIHBldEpzb24sXG4gICAgICAgICAgICAgIG1hcHMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5mZXJyZWRFbnVtcykgJiYgaW5mZXJyZWRFbnVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGFib21pbmF0aW9uUGV0LmFib21pbmF0aW9uSW5mZXJyZWRBYmlsaXR5RW51bXMgPSBpbmZlcnJlZEVudW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB2b2lkIGVycm9yO1xuICAgICAgICAgIC8qIGJlc3QtZWZmb3J0IG9ubHkgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVzSHVydCAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZWRQZXQudGltZXNIdXJ0ID0gdGltZXNIdXJ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkUGV0O1xuICAgIH07XG5cbiAgICBjb25zdCBwYXJzZUJvYXJkUGV0cyA9IChcbiAgICAgIGJvYXJkSnNvbjogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICApOiAoUGV0Q29uZmlnIHwgbnVsbClbXSA9PiB7XG4gICAgICBjb25zdCBpdGVtcyA9IGJvYXJkSnNvbj8uTWlucz8uSXRlbXMgPz8gW107XG4gICAgICBjb25zdCBwZXRBcnJheTogKFBldENvbmZpZyB8IG51bGwpW10gPSBBcnJheSg1KS5maWxsKG51bGwpO1xuICAgICAgaXRlbXMuZm9yRWFjaCgocGV0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIXBldCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9zID0gdG9OdW1iZXJPckZhbGxiYWNrKHBldC5Qb2k/LngsIC0xKTtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICBwb3MgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zID49IDAgJiYgcG9zIDwgNSkge1xuICAgICAgICAgIHBldEFycmF5W3Bvc10gPSBwYXJzZVBldChwZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBldEFycmF5LnJldmVyc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG95ID0gKGJvYXJkSnNvbjogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFJlcGxheVBhcnNlZFRveSA9PiB7XG4gICAgICBjb25zdCB0b3lJdGVtID0gKGJvYXJkSnNvbj8uUmVsPy5JdGVtcyA/PyBbXSkuZmluZCgoaXRlbSkgPT4gQm9vbGVhbihpdGVtKSk7XG4gICAgICBpZiAodG95SXRlbSkge1xuICAgICAgICBjb25zdCB0b3lSZWNvcmQgPSBhc1JlY29yZCh0b3lJdGVtKTtcbiAgICAgICAgY29uc3QgdG95SWQgPSByZXNvbHZlVG95SWQodG95SXRlbSkgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgdG95TmFtZSA9IHRveUlkID8gVE9ZU19CWV9JRC5nZXQoU3RyaW5nKHRveUlkKSkgOiBnZXRUb3lOYW1lKHRveUl0ZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHRveU5hbWUgfHwgbnVsbCxcbiAgICAgICAgICBsZXZlbDogdG9OdW1iZXJPckZhbGxiYWNrKHRveVJlY29yZD8uWydMdmwnXSwgMSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBuYW1lOiBudWxsLCBsZXZlbDogMSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5ZXJUb3kgPSBnZXRUb3kodXNlckJvYXJkKTtcbiAgICBjb25zdCBvcHBvbmVudFRveSA9IGdldFRveShvcHBvbmVudEJvYXJkKTtcblxuICAgIGNvbnN0IGN1c3RvbVBhY2tzID0gdGhpcy5idWlsZEN1c3RvbVBhY2tzRnJvbUdlbmVzaXMoYnVpbGRNb2RlbCwgYmF0dGxlSnNvbik7XG4gICAgLy8gR2VuZXNpc0J1aWxkTW9kZWwgYmVsb25ncyB0byB0aGUgcGFydGljaXBhdGlvbiBJRCB1c2VkIHRvIGZldGNoIHRoZVxuICAgIC8vIHJlcGxheSwgd2hpY2ggaXMgdGhlIHBsYXllciBwZXJzcGVjdGl2ZS4gU3VtbWFyaXplZCByZXBsYXkgYmF0dGxlcyBvZnRlblxuICAgIC8vIG9taXQgVXNlckJvYXJkLkRlY2ssIHNvIHVzZSB0aGUgZ2VuZXNpcyBkZWNrIGFzIHRoZSBwbGF5ZXIncyBmYWxsYmFjay5cbiAgICAvLyBOZXZlciB1c2UgaXQgZm9yIHRoZSBvcHBvbmVudDogdGhlaXIgY3VzdG9tIGRlY2sgcmVxdWlyZXMgdGhlaXIgb3duXG4gICAgLy8gcGFydGljaXBhdGlvbiByZXBsYXkuXG4gICAgY29uc3QgcGxheWVyRGVjayA9IHVzZXJCb2FyZD8uRGVjayA/PyBidWlsZE1vZGVsPy5Cb3I/LkRlY2s7XG4gICAgY29uc3QgcGxheWVyQ3VzdG9tUGFjayA9IHRoaXMuZmluZEN1c3RvbVBhY2tGcm9tRGVjayhcbiAgICAgIGN1c3RvbVBhY2tzLFxuICAgICAgcGxheWVyRGVjayxcbiAgICApO1xuICAgIGNvbnN0IG9wcG9uZW50Q3VzdG9tUGFjayA9IHRoaXMuZmluZEN1c3RvbVBhY2tGcm9tRGVjayhcbiAgICAgIGN1c3RvbVBhY2tzLFxuICAgICAgb3Bwb25lbnRCb2FyZD8uRGVjayxcbiAgICApO1xuICAgIGNvbnN0IHBsYXllclBhY2tJZCA9IHJlc29sdmVQYWNrSWRGcm9tVW5rbm93bih1c2VyQm9hcmQ/LlBhY2spO1xuICAgIGNvbnN0IG9wcG9uZW50UGFja0lkID0gcmVzb2x2ZVBhY2tJZEZyb21Vbmtub3duKG9wcG9uZW50Qm9hcmQ/LlBhY2spO1xuICAgIGNvbnN0IHBsYXllclBhY2tOYW1lID1cbiAgICAgIHBsYXllckN1c3RvbVBhY2s/Lm5hbWUgfHxcbiAgICAgIChwbGF5ZXJQYWNrSWQgIT09IG51bGwgPyBQQUNLX01BUFtwbGF5ZXJQYWNrSWRdIDogbnVsbCkgfHxcbiAgICAgICdUdXJ0bGUnO1xuICAgIGNvbnN0IG9wcG9uZW50UGFja05hbWUgPVxuICAgICAgb3Bwb25lbnRDdXN0b21QYWNrPy5uYW1lIHx8XG4gICAgICAob3Bwb25lbnRQYWNrSWQgIT09IG51bGwgPyBQQUNLX01BUFtvcHBvbmVudFBhY2tJZF0gOiBudWxsKSB8fFxuICAgICAgJ1R1cnRsZSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxheWVyUGFjazogcGxheWVyUGFja05hbWUsXG4gICAgICBvcHBvbmVudFBhY2s6IG9wcG9uZW50UGFja05hbWUsXG4gICAgICBwbGF5ZXJUb3k6IHBsYXllclRveS5uYW1lLFxuICAgICAgcGxheWVyVG95TGV2ZWw6IFN0cmluZyhwbGF5ZXJUb3kubGV2ZWwpLFxuICAgICAgcGxheWVySGFyZFRveTogbnVsbCxcbiAgICAgIHBsYXllckhhcmRUb3lMZXZlbDogMSxcbiAgICAgIG9wcG9uZW50VG95OiBvcHBvbmVudFRveS5uYW1lLFxuICAgICAgb3Bwb25lbnRUb3lMZXZlbDogU3RyaW5nKG9wcG9uZW50VG95LmxldmVsKSxcbiAgICAgIG9wcG9uZW50SGFyZFRveTogbnVsbCxcbiAgICAgIG9wcG9uZW50SGFyZFRveUxldmVsOiAxLFxuICAgICAgdHVybjogcmVhZEJvYXJkTnVtYmVyKHVzZXJCb2FyZCwgJ1R1cicsIDEpIHx8IDEsXG4gICAgICBwbGF5ZXJHb2xkU3BlbnQ6IHJlYWRCb2FyZE51bWJlcih1c2VyQm9hcmQsICdHb1NwJywgMCkgfHwgMCxcbiAgICAgIG9wcG9uZW50R29sZFNwZW50OiByZWFkQm9hcmROdW1iZXIob3Bwb25lbnRCb2FyZCwgJ0dvU3AnLCAwKSB8fCAwLFxuICAgICAgcGxheWVyUm9sbEFtb3VudDogcmVhZEJvYXJkTnVtYmVyKHVzZXJCb2FyZCwgJ1JvbGQnLCAwKSB8fCAwLFxuICAgICAgb3Bwb25lbnRSb2xsQW1vdW50OiByZWFkQm9hcmROdW1iZXIob3Bwb25lbnRCb2FyZCwgJ1JvbGQnLCAwKSB8fCAwLFxuICAgICAgcGxheWVyU3VtbW9uZWRBbW91bnQ6IHJlYWRCb2FyZE51bWJlcih1c2VyQm9hcmQsICdNaVN1JywgMCkgfHwgMCxcbiAgICAgIG9wcG9uZW50U3VtbW9uZWRBbW91bnQ6IHJlYWRCb2FyZE51bWJlcihvcHBvbmVudEJvYXJkLCAnTWlTdScsIDApIHx8IDAsXG4gICAgICBwbGF5ZXJMZXZlbDNTb2xkOiByZWFkQm9hcmROdW1iZXIodXNlckJvYXJkLCAnTVNGTCcsIDApIHx8IDAsXG4gICAgICBvcHBvbmVudExldmVsM1NvbGQ6IHJlYWRCb2FyZE51bWJlcihvcHBvbmVudEJvYXJkLCAnTVNGTCcsIDApIHx8IDAsXG4gICAgICBwbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDogcmVhZEJvYXJkTnVtYmVyKHVzZXJCb2FyZCwgJ1RyVFQnLCAwKSB8fCAwLFxuICAgICAgb3Bwb25lbnRUcmFuc2Zvcm1hdGlvbkFtb3VudDogcmVhZEJvYXJkTnVtYmVyKG9wcG9uZW50Qm9hcmQsICdUclRUJywgMCkgfHwgMCxcbiAgICAgIHBsYXllclBldHM6IHBhcnNlQm9hcmRQZXRzKHVzZXJCb2FyZCksXG4gICAgICBvcHBvbmVudFBldHM6IHBhcnNlQm9hcmRQZXRzKG9wcG9uZW50Qm9hcmQpLFxuICAgICAgYWxsUGV0czogZmFsc2UsXG4gICAgICBsb2dGaWx0ZXI6IG51bGwsXG4gICAgICBjdXN0b21QYWNrcyxcbiAgICAgIG9sZFN0b3JrOiBmYWxzZSxcbiAgICAgIHRva2VuUGV0czogZmFsc2UsXG4gICAgICBrb21vZG9TaHVmZmxlOiBmYWxzZSxcbiAgICAgIG1hbmE6IHRydWUsXG4gICAgICBzZWVkOiBudWxsLFxuICAgICAgdHJpZ2dlcnNDb25zdW1lZDogdHJ1ZSxcbiAgICAgIHNob3dBZHZhbmNlZDogdHJ1ZSxcbiAgICAgIHNob3dUcmlnZ2VyTmFtZXNJbkxvZ3M6IGZhbHNlLFxuICAgICAgc2hvd1Bvc2l0aW9uYWxBcmdzSW5Mb2dzOiB0cnVlLFxuICAgICAgYWlsbWVudEVxdWlwbWVudDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGJ1aWxkQ3VzdG9tUGFja3NGcm9tR2VuZXNpcyhcbiAgICBidWlsZE1vZGVsPzogUmVwbGF5QnVpbGRNb2RlbEpzb24sXG4gICAgYmF0dGxlSnNvbj86IFJlcGxheUJhdHRsZUpzb24sXG4gICk6IFJlcGxheUN1c3RvbVBhY2tbXSB7XG4gICAgY29uc3QgZGVja3MgPSBbXG4gICAgICBidWlsZE1vZGVsPy5Cb3I/LkRlY2ssXG4gICAgICBiYXR0bGVKc29uPy5Vc2VyQm9hcmQ/LkRlY2ssXG4gICAgICBiYXR0bGVKc29uPy5PcHBvbmVudEJvYXJkPy5EZWNrLFxuICAgIF0uZmlsdGVyKFxuICAgICAgKGRlY2spOiBkZWNrIGlzIFJlcGxheURlY2tKc29uID0+XG4gICAgICAgIGRlY2sgIT09IG51bGwgJiYgZGVjayAhPT0gdW5kZWZpbmVkICYmIEFycmF5LmlzQXJyYXkoZGVjay5NaW5pb25zKSxcbiAgICApO1xuXG4gICAgY29uc3QgcGFja3M6IFJlcGxheUN1c3RvbVBhY2tbXSA9IFtdO1xuICAgIGNvbnN0IHNlZW5EZWNrSWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgdXNlZE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBmb3IgKGNvbnN0IGRlY2sgb2YgZGVja3MpIHtcbiAgICAgIGNvbnN0IGRlY2tJZCA9IGRlY2s/LklkICE9IG51bGwgPyBTdHJpbmcoZGVjay5JZCkgOiBudWxsO1xuICAgICAgaWYgKGRlY2tJZCAmJiBzZWVuRGVja0lkcy5oYXMoZGVja0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWNrSWQpIHtcbiAgICAgICAgc2VlbkRlY2tJZHMuYWRkKGRlY2tJZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwYWNrID0gdGhpcy5idWlsZEN1c3RvbVBhY2tGcm9tRGVjayhkZWNrLCB1c2VkTmFtZXMpO1xuICAgICAgaWYgKHBhY2spIHtcbiAgICAgICAgcGFja3MucHVzaCh7IC4uLnBhY2ssIGRlY2tJZCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFja3M7XG4gIH1cblxuICBnZW5lcmF0ZUNhbGN1bGF0b3JMaW5rKGNhbGN1bGF0b3JTdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBzdHJpcHBlZFN0YXRlID0gdGhpcy5zdHJpcERlZmF1bHRWYWx1ZXMoY2FsY3VsYXRvclN0YXRlKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRTdGF0ZSA9IHRoaXMudHJ1bmNhdGVLZXlzKHN0cmlwcGVkU3RhdGUpO1xuICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodHJ1bmNhdGVkU3RhdGUpO1xuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBlbmNvZGVCYXNlNjRVcmwoc3RhdGVTdHJpbmcpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfSNjPSR7YmFzZTY0RGF0YX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEN1c3RvbVBhY2tGcm9tRGVjayhcbiAgICBkZWNrOiBSZXBsYXlEZWNrSnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgdXNlZE5hbWVzOiBTZXQ8c3RyaW5nPixcbiAgKTogUmVwbGF5Q3VzdG9tUGFja0NvcmUgfCBudWxsIHtcbiAgICBpZiAoIWRlY2sgfHwgIUFycmF5LmlzQXJyYXkoZGVjay5NaW5pb25zKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWluaW9ucyA9IGRlY2suTWluaW9ucy5tYXAoKGlkKSA9PiBTdHJpbmcoaWQpKTtcbiAgICAvLyBLZWVwIHRoZSByZXBsYXkncyBudW1lcmljIHNwZWxsIElEcyBpbnRhY3QuIFNBUCBjdXN0b20tcGFjayBKU09OIHVzZXNcbiAgICAvLyBudW1lcmljIElEcyBoZXJlLCBzbyBjb2VyY2luZyB0aGVtIHRvIHN0cmluZ3MgbWFrZXMgY29waWVkIHBhY2sgSlNPTlxuICAgIC8vIGRpZmZlciBmcm9tIHRoZSBzb3VyY2UgZGVjay5cbiAgICBjb25zdCBzcGVsbHMgPSBBcnJheS5pc0FycmF5KGRlY2suU3BlbGxzKSA/IFsuLi5kZWNrLlNwZWxsc10gOiBbXTtcbiAgICBjb25zdCB0aWVyUGV0czogUmVjb3JkPG51bWJlciwgc3RyaW5nW10+ID0ge1xuICAgICAgMTogW10sXG4gICAgICAyOiBbXSxcbiAgICAgIDM6IFtdLFxuICAgICAgNDogW10sXG4gICAgICA1OiBbXSxcbiAgICAgIDY6IFtdLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IG1pbmlvbklkIG9mIG1pbmlvbnMpIHtcbiAgICAgIGNvbnN0IHBldE1ldGEgPSBQRVRTX01FVEFfQllfSUQuZ2V0KG1pbmlvbklkKTtcbiAgICAgIGlmICghcGV0TWV0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aWVyUGV0c1twZXRNZXRhLnRpZXJdKSB7XG4gICAgICAgIHRpZXJQZXRzW3BldE1ldGEudGllcl0ucHVzaChwZXRNZXRhLm5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5vcm1hbGl6ZVRpZXJQZXRzID0gKHBldHM6IHN0cmluZ1tdKTogKHN0cmluZyB8IG51bGwpW10gPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHBldHMuc2xpY2UoMCwgMTApO1xuICAgICAgd2hpbGUgKG5vcm1hbGl6ZWQubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgfTtcblxuICAgIGxldCBkZWNrTmFtZSA9IGRlY2suVGl0bGUgfHwgJ0N1c3RvbSBQYWNrJztcbiAgICBpZiAodXNlZE5hbWVzLmhhcyhkZWNrTmFtZSkpIHtcbiAgICAgIGxldCBzdWZmaXggPSAyO1xuICAgICAgd2hpbGUgKHVzZWROYW1lcy5oYXMoYCR7ZGVja05hbWV9ICgke3N1ZmZpeH0pYCkpIHtcbiAgICAgICAgc3VmZml4ICs9IDE7XG4gICAgICB9XG4gICAgICBkZWNrTmFtZSA9IGAke2RlY2tOYW1lfSAoJHtzdWZmaXh9KWA7XG4gICAgfVxuICAgIHVzZWROYW1lcy5hZGQoZGVja05hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGRlY2tOYW1lLFxuICAgICAgdGllcjFQZXRzOiBub3JtYWxpemVUaWVyUGV0cyh0aWVyUGV0c1sxXSksXG4gICAgICB0aWVyMlBldHM6IG5vcm1hbGl6ZVRpZXJQZXRzKHRpZXJQZXRzWzJdKSxcbiAgICAgIHRpZXIzUGV0czogbm9ybWFsaXplVGllclBldHModGllclBldHNbM10pLFxuICAgICAgdGllcjRQZXRzOiBub3JtYWxpemVUaWVyUGV0cyh0aWVyUGV0c1s0XSksXG4gICAgICB0aWVyNVBldHM6IG5vcm1hbGl6ZVRpZXJQZXRzKHRpZXJQZXRzWzVdKSxcbiAgICAgIHRpZXI2UGV0czogbm9ybWFsaXplVGllclBldHModGllclBldHNbNl0pLFxuICAgICAgc3BlbGxzLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGZpbmRDdXN0b21QYWNrRnJvbURlY2soXG4gICAgY3VzdG9tUGFja3M6IFJlcGxheUN1c3RvbVBhY2tbXSxcbiAgICBkZWNrOiBSZXBsYXlEZWNrSnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICk6IFJlcGxheUN1c3RvbVBhY2sgfCBudWxsIHtcbiAgICBpZiAoIWRlY2spIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBkZWNrSWQgPSBkZWNrPy5JZCAhPSBudWxsID8gU3RyaW5nKGRlY2suSWQpIDogbnVsbDtcbiAgICBpZiAoZGVja0lkKSB7XG4gICAgICBjb25zdCBieUlkID0gY3VzdG9tUGFja3MuZmluZCgocGFjaykgPT4gcGFjay5kZWNrSWQgPT09IGRlY2tJZCk7XG4gICAgICBpZiAoYnlJZCkge1xuICAgICAgICByZXR1cm4gYnlJZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNrQ29udGVudHMgPSB0aGlzLmJ1aWxkQ3VzdG9tUGFja0Zyb21EZWNrKGRlY2ssIG5ldyBTZXQoKSk7XG4gICAgaWYgKGRlY2tDb250ZW50cykge1xuICAgICAgY29uc3QgYnlDb250ZW50cyA9IGN1c3RvbVBhY2tzLmZpbmQoKHBhY2spID0+XG4gICAgICAgIHRoaXMuY3VzdG9tUGFja0NvbnRlbnRzTWF0Y2gocGFjaywgZGVja0NvbnRlbnRzKSxcbiAgICAgICk7XG4gICAgICBpZiAoYnlDb250ZW50cykge1xuICAgICAgICByZXR1cm4gYnlDb250ZW50cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNrTmFtZSA9IGRlY2s/LlRpdGxlO1xuICAgIGlmIChkZWNrTmFtZSkge1xuICAgICAgcmV0dXJuIGN1c3RvbVBhY2tzLmZpbmQoKHBhY2spID0+IHBhY2submFtZSA9PT0gZGVja05hbWUpIHx8IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXN0b21QYWNrQ29udGVudHNNYXRjaChcbiAgICBwYWNrOiBSZXBsYXlDdXN0b21QYWNrLFxuICAgIGRlY2tDb250ZW50czogUmVwbGF5Q3VzdG9tUGFja0NvcmUsXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRpZXJLZXlzID0gW1xuICAgICAgJ3RpZXIxUGV0cycsXG4gICAgICAndGllcjJQZXRzJyxcbiAgICAgICd0aWVyM1BldHMnLFxuICAgICAgJ3RpZXI0UGV0cycsXG4gICAgICAndGllcjVQZXRzJyxcbiAgICAgICd0aWVyNlBldHMnLFxuICAgIF0gYXMgY29uc3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGllcktleXMuZXZlcnkoKHRpZXJLZXkpID0+XG4gICAgICAgIHRoaXMuc3RyaW5nQXJyYXlzTWF0Y2gocGFja1t0aWVyS2V5XSwgZGVja0NvbnRlbnRzW3RpZXJLZXldKSxcbiAgICAgICkgJiYgdGhpcy5jdXN0b21QYWNrSXRlbXNNYXRjaChwYWNrLnNwZWxscywgZGVja0NvbnRlbnRzLnNwZWxscylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXN0b21QYWNrSXRlbXNNYXRjaChcbiAgICBsZWZ0OiBSZWFkb25seUFycmF5PEN1c3RvbVBhY2tJdGVtPixcbiAgICByaWdodDogUmVhZG9ubHlBcnJheTxDdXN0b21QYWNrSXRlbT4sXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBsZWZ0Lmxlbmd0aCA9PT0gcmlnaHQubGVuZ3RoICYmXG4gICAgICBsZWZ0LmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSByaWdodFtpbmRleF0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RyaW5nQXJyYXlzTWF0Y2goXG4gICAgbGVmdDogUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudWxsPixcbiAgICByaWdodDogUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudWxsPixcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGxlZnQubGVuZ3RoID09PSByaWdodC5sZW5ndGggJiZcbiAgICAgIGxlZnQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IHJpZ2h0W2luZGV4XSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpcERlZmF1bHRWYWx1ZXMoXG4gICAgc3RhdGU6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIGNvbnN0IHN0cmlwcGVkU3RhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cbiAgICBpZiAoc3RhdGUucGxheWVyUGFjayAhPT0gJ1R1cnRsZScpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUucGxheWVyUGFjayA9IHN0YXRlLnBsYXllclBhY2s7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFBhY2sgIT09ICdUdXJ0bGUnKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50UGFjayA9IHN0YXRlLm9wcG9uZW50UGFjaztcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllclRveSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJUb3kgPSBzdGF0ZS5wbGF5ZXJUb3k7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5wbGF5ZXJUb3lMZXZlbCAmJiBzdGF0ZS5wbGF5ZXJUb3lMZXZlbCAhPT0gJzEnKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclRveUxldmVsID0gc3RhdGUucGxheWVyVG95TGV2ZWw7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFRveSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5vcHBvbmVudFRveSA9IHN0YXRlLm9wcG9uZW50VG95O1xuICAgIH1cbiAgICBpZiAoc3RhdGUub3Bwb25lbnRUb3lMZXZlbCAmJiBzdGF0ZS5vcHBvbmVudFRveUxldmVsICE9PSAnMScpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRUb3lMZXZlbCA9IHN0YXRlLm9wcG9uZW50VG95TGV2ZWw7XG4gICAgfVxuICAgIGlmIChzdGF0ZS50dXJuICE9PSAxMSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS50dXJuID0gc3RhdGUudHVybjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllckdvbGRTcGVudCAhPT0gMTApIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUucGxheWVyR29sZFNwZW50ID0gc3RhdGUucGxheWVyR29sZFNwZW50O1xuICAgIH1cbiAgICBpZiAoc3RhdGUub3Bwb25lbnRHb2xkU3BlbnQgIT09IDEwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50R29sZFNwZW50ID0gc3RhdGUub3Bwb25lbnRHb2xkU3BlbnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5wbGF5ZXJSb2xsQW1vdW50ICE9PSA0KSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclJvbGxBbW91bnQgPSBzdGF0ZS5wbGF5ZXJSb2xsQW1vdW50O1xuICAgIH1cbiAgICBpZiAoc3RhdGUub3Bwb25lbnRSb2xsQW1vdW50ICE9PSA0KSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50Um9sbEFtb3VudCA9IHN0YXRlLm9wcG9uZW50Um9sbEFtb3VudDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllclN1bW1vbmVkQW1vdW50ICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclN1bW1vbmVkQW1vdW50ID0gc3RhdGUucGxheWVyU3VtbW9uZWRBbW91bnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFN1bW1vbmVkQW1vdW50ICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50U3VtbW9uZWRBbW91bnQgPSBzdGF0ZS5vcHBvbmVudFN1bW1vbmVkQW1vdW50O1xuICAgIH1cbiAgICBpZiAoc3RhdGUucGxheWVyTGV2ZWwzU29sZCAhPT0gMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJMZXZlbDNTb2xkID0gc3RhdGUucGxheWVyTGV2ZWwzU29sZDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wcG9uZW50TGV2ZWwzU29sZCAhPT0gMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5vcHBvbmVudExldmVsM1NvbGQgPSBzdGF0ZS5vcHBvbmVudExldmVsM1NvbGQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5wbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudCAhPT0gMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudCA9IHN0YXRlLnBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50O1xuICAgIH1cbiAgICBpZiAoc3RhdGUub3Bwb25lbnRUcmFuc2Zvcm1hdGlvbkFtb3VudCAhPT0gMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50ID0gc3RhdGUub3Bwb25lbnRUcmFuc2Zvcm1hdGlvbkFtb3VudDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuYWxsUGV0cykge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5hbGxQZXRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9sZFN0b3JrKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9sZFN0b3JrID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnRva2VuUGV0cykge1xuICAgICAgc3RyaXBwZWRTdGF0ZS50b2tlblBldHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUua29tb2RvU2h1ZmZsZSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5rb21vZG9TaHVmZmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm1hbmEpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUubWFuYSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5zZWVkICE9IG51bGwpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUuc2VlZCA9IHN0YXRlLnNlZWQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS50cmlnZ2Vyc0NvbnN1bWVkKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnRyaWdnZXJzQ29uc3VtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuZm9vZHNFYXRlbikge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5mb29kc0VhdGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnNob3dBZHZhbmNlZCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5zaG93QWR2YW5jZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuc2hvd1RyaWdnZXJOYW1lc0luTG9ncykge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5zaG93VHJpZ2dlck5hbWVzSW5Mb2dzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnNob3dQb3NpdGlvbmFsQXJnc0luTG9ncyA9PT0gZmFsc2UpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUuc2hvd1Bvc2l0aW9uYWxBcmdzSW5Mb2dzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5haWxtZW50RXF1aXBtZW50KSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLmFpbG1lbnRFcXVpcG1lbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sb2dGaWx0ZXIpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUubG9nRmlsdGVyID0gc3RhdGUubG9nRmlsdGVyO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY3VzdG9tUGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5jdXN0b21QYWNrcyA9IHN0YXRlLmN1c3RvbVBhY2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmlwUGV0RGVmYXVsdHMgPSAocGV0OiBQZXRDb25maWcgfCBudWxsKTogU3RyaXBwZWRSZXBsYXlQZXQgfCBudWxsID0+IHtcbiAgICAgIGlmICghcGV0IHx8ICFwZXQubmFtZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UGV0OiBTdHJpcHBlZFJlcGxheVBldCA9IHsgbmFtZTogcGV0Lm5hbWUgfTtcblxuICAgICAgaWYgKHR5cGVvZiBwZXQuYXR0YWNrID09PSAnbnVtYmVyJyAmJiBwZXQuYXR0YWNrICE9PSAwKSB7XG4gICAgICAgIG5ld1BldC5hdHRhY2sgPSBwZXQuYXR0YWNrO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwZXQuaGVhbHRoID09PSAnbnVtYmVyJyAmJiBwZXQuaGVhbHRoICE9PSAwKSB7XG4gICAgICAgIG5ld1BldC5oZWFsdGggPSBwZXQuaGVhbHRoO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwZXQuZXhwID09PSAnbnVtYmVyJyAmJiBwZXQuZXhwICE9PSAwKSB7XG4gICAgICAgIG5ld1BldC5leHAgPSBwZXQuZXhwO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwZXQubWFuYSA9PT0gJ251bWJlcicgJiYgcGV0Lm1hbmEgIT09IDApIHtcbiAgICAgICAgbmV3UGV0Lm1hbmEgPSBwZXQubWFuYTtcbiAgICAgIH1cbiAgICAgIGlmIChwZXQuZXF1aXBtZW50KSB7XG4gICAgICAgIG5ld1BldC5lcXVpcG1lbnQgPSBwZXQuZXF1aXBtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHBldC50cmlnZ2Vyc0NvbnN1bWVkKSB7XG4gICAgICAgIG5ld1BldC50cmlnZ2Vyc0NvbnN1bWVkID0gcGV0LnRyaWdnZXJzQ29uc3VtZWQ7XG4gICAgICB9XG4gICAgICBpZiAocGV0LmZvb2RzRWF0ZW4pIHtcbiAgICAgICAgbmV3UGV0LmZvb2RzRWF0ZW4gPSBwZXQuZm9vZHNFYXRlbjtcbiAgICAgIH1cbiAgICAgIGlmIChwZXQuYWlsbWVudHNDb3VudCkge1xuICAgICAgICBuZXdQZXQuYWlsbWVudHNDb3VudCA9IHBldC5haWxtZW50c0NvdW50O1xuICAgICAgfVxuICAgICAgaWYgKHBldC5mcmllbmRzSHVydEJlZm9yZUJhdHRsZSkge1xuICAgICAgICBuZXdQZXQuZnJpZW5kc0h1cnRCZWZvcmVCYXR0bGUgPSBwZXQuZnJpZW5kc0h1cnRCZWZvcmVCYXR0bGU7XG4gICAgICB9XG4gICAgICBpZiAocGV0LmJlbHVnYVN3YWxsb3dlZFBldCAhPSBudWxsKSB7XG4gICAgICAgIG5ld1BldC5iZWx1Z2FTd2FsbG93ZWRQZXQgPSBwZXQuYmVsdWdhU3dhbGxvd2VkUGV0O1xuICAgICAgfVxuICAgICAgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMuZm9yRWFjaCgoc2xvdEZpZWxkcykgPT4ge1xuICAgICAgICBjb25zdCBzd2FsbG93ZWRQZXQgPSBwZXRbc2xvdEZpZWxkcy5wZXRdO1xuICAgICAgICBpZiAoc3dhbGxvd2VkUGV0ICE9IG51bGwpIHtcbiAgICAgICAgICBuZXdQZXRbc2xvdEZpZWxkcy5wZXRdID0gc3dhbGxvd2VkUGV0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN3YWxsb3dlZExldmVsID0gcGV0W3Nsb3RGaWVsZHMubGV2ZWxdO1xuICAgICAgICBpZiAodHlwZW9mIHN3YWxsb3dlZExldmVsID09PSAnbnVtYmVyJyAmJiBzd2FsbG93ZWRMZXZlbCAhPT0gMSkge1xuICAgICAgICAgIG5ld1BldFtzbG90RmllbGRzLmxldmVsXSA9IHN3YWxsb3dlZExldmVsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwZXQudGltZXNIdXJ0KSB7XG4gICAgICAgIG5ld1BldC50aW1lc0h1cnQgPSBwZXQudGltZXNIdXJ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3UGV0O1xuICAgIH07XG5cbiAgICBjb25zdCBzdHJpcHBlZFBsYXllclBldHMgPSBzdGF0ZS5wbGF5ZXJQZXRzLm1hcChzdHJpcFBldERlZmF1bHRzKTtcbiAgICBpZiAoc3RyaXBwZWRQbGF5ZXJQZXRzLnNvbWUoKHBldCkgPT4gcGV0ICE9PSBudWxsKSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJQZXRzID0gc3RyaXBwZWRQbGF5ZXJQZXRzO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmlwcGVkT3Bwb25lbnRQZXRzID0gc3RhdGUub3Bwb25lbnRQZXRzLm1hcChzdHJpcFBldERlZmF1bHRzKTtcbiAgICBpZiAoc3RyaXBwZWRPcHBvbmVudFBldHMuc29tZSgocGV0KSA9PiBwZXQgIT09IG51bGwpKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50UGV0cyA9IHN0cmlwcGVkT3Bwb25lbnRQZXRzO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpcHBlZFN0YXRlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnVuY2F0ZUtleXMoZGF0YTogdW5rbm93bik6IHVua25vd24ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IHRoaXMudHJ1bmNhdGVLZXlzKGl0ZW0pKTtcbiAgICB9XG4gICAgaWYgKGlzUmVjb3JkKGRhdGEpKSB7XG4gICAgICBjb25zdCBuZXdPYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBLRVlfTUFQW2tleV0gfHwga2V5O1xuICAgICAgICBuZXdPYmpbbmV3S2V5XSA9IHRoaXMudHJ1bmNhdGVLZXlzKGRhdGFba2V5XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUGV0Q29uZmlnIH0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL3NpbXVsYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5cbnR5cGUgRXF1aXBtZW50T2JqZWN0ID0gRXhjbHVkZTxcbiAgUGV0Q29uZmlnWydlcXVpcG1lbnQnXSxcbiAgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBldENvbmZpZ0VxdWlwbWVudE5hbWUoXG4gIGVxdWlwbWVudDogUGV0Q29uZmlnWydlcXVpcG1lbnQnXSxcbik6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gdHlwZW9mIGVxdWlwbWVudCA9PT0gJ3N0cmluZycgPyBlcXVpcG1lbnQgOiAoZXF1aXBtZW50Py5uYW1lID8/IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQZXRDb25maWdFcXVpcG1lbnQoXG4gIGVxdWlwbWVudDogUGV0Q29uZmlnWydlcXVpcG1lbnQnXSxcbik6IEVxdWlwbWVudE9iamVjdCB8IG51bGwge1xuICBpZiAoIWVxdWlwbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB0eXBlb2YgZXF1aXBtZW50ID09PSAnc3RyaW5nJyA/IHsgbmFtZTogZXF1aXBtZW50IH0gOiB7IC4uLmVxdWlwbWVudCB9O1xufVxuIiwgImltcG9ydCB7IFBldENvbmZpZyB9IGZyb20gJ2FwcC9kb21haW4vaW50ZXJmYWNlcy9zaW11bGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgY2xvbmVQZXRDb25maWdFcXVpcG1lbnQgfSBmcm9tICcuLi9lcXVpcG1lbnQvcGV0LWNvbmZpZy1lcXVpcG1lbnQnO1xuXG5jb25zdCBQQVJST1RfTUVNT1JZX1BSRUZJWCA9ICdwYXJyb3RDb3B5UGV0JztcbmNvbnN0IEFCT01JTkFUSU9OX01FTU9SWV9QUkVGSVggPSAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQnO1xuXG5mdW5jdGlvbiBjbG9uZVBldChwZXQ6IFBldENvbmZpZyB8IG51bGwpOiBQZXRDb25maWcgfCBudWxsIHtcbiAgaWYgKCFwZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnBldCxcbiAgICBlcXVpcG1lbnQ6IGNsb25lUGV0Q29uZmlnRXF1aXBtZW50KHBldC5lcXVpcG1lbnQpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjbGVhclBhcnJvdE1lbW9yeShwZXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gIE9iamVjdC5rZXlzKHBldCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFBBUlJPVF9NRU1PUllfUFJFRklYKSkge1xuICAgICAgZGVsZXRlIHBldFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHBldC5wYXJyb3RDb3B5UGV0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29weVJlc29sdmVkUGFycm90TWVtb3J5KFxuICB0YXJnZXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwYXJyb3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogdm9pZCB7XG4gIE9iamVjdC5lbnRyaWVzKHRhcmdldCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFBBUlJPVF9NRU1PUllfUFJFRklYKSkge1xuICAgICAgcGFycm90W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb3B5VGFyZ2V0TWVtb3J5KFxuICB0YXJnZXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwYXJyb3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogdm9pZCB7XG4gIHBhcnJvdC5wYXJyb3RDb3B5UGV0ID0gdGFyZ2V0Lm5hbWUgPz8gbnVsbDtcbiAgaWYgKHRhcmdldC5uYW1lID09PSAnQmVsdWdhIFdoYWxlJykge1xuICAgIHBhcnJvdC5wYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0ID1cbiAgICAgIHRhcmdldC5iZWx1Z2FTd2FsbG93ZWRQZXQgPz8gbnVsbDtcbiAgfVxuICBpZiAodGFyZ2V0Lm5hbWUgIT09ICdBYm9taW5hdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgT2JqZWN0LmVudHJpZXModGFyZ2V0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoIWtleS5zdGFydHNXaXRoKEFCT01JTkFUSU9OX01FTU9SWV9QUkVGSVgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcnJvdFtgJHtQQVJST1RfTUVNT1JZX1BSRUZJWH0ke2tleVswXS50b1VwcGVyQ2FzZSgpfSR7a2V5LnNsaWNlKDEpfWBdID1cbiAgICAgIHZhbHVlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZE5lYXJlc3RQZXRBaGVhZChcbiAgbGluZXVwOiAoUGV0Q29uZmlnIHwgbnVsbClbXSxcbiAgaW5kZXg6IG51bWJlcixcbik6IFBldENvbmZpZyB8IG51bGwge1xuICBmb3IgKGxldCBhaGVhZEluZGV4ID0gaW5kZXggLSAxOyBhaGVhZEluZGV4ID49IDA7IGFoZWFkSW5kZXggLT0gMSkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGxpbmV1cFthaGVhZEluZGV4XTtcbiAgICBpZiAoY2FuZGlkYXRlPy5uYW1lKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWZyZXNoZXMgbWVtb3J5IHRoYXQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgY2FuZGlkYXRlJ3MgcG9zaXRpb25zIHJhdGhlclxuICogdGhhbiBieSB0aGUgcGV0IGlkZW50aXR5IHRoYXQgbW92ZWQgaW50byB0aGF0IHBvc2l0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFBvc2l0aW9uaW5nTGluZXVwTWVtb3J5KFxuICBsaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdLFxuKTogKFBldENvbmZpZyB8IG51bGwpW10ge1xuICBjb25zdCByZWZyZXNoZWQgPSBsaW5ldXAubWFwKGNsb25lUGV0KTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlZnJlc2hlZC5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBwZXQgPSByZWZyZXNoZWRbaW5kZXhdO1xuICAgIGlmIChwZXQ/Lm5hbWUgIT09ICdQYXJyb3QnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgcGV0UmVjb3JkID0gcGV0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgY2xlYXJQYXJyb3RNZW1vcnkocGV0UmVjb3JkKTtcbiAgICBjb25zdCB0YXJnZXQgPSBmaW5kTmVhcmVzdFBldEFoZWFkKHJlZnJlc2hlZCwgaW5kZXgpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0UmVjb3JkID0gdGFyZ2V0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgaWYgKHRhcmdldC5uYW1lID09PSAnUGFycm90Jykge1xuICAgICAgY29weVJlc29sdmVkUGFycm90TWVtb3J5KHRhcmdldFJlY29yZCwgcGV0UmVjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVRhcmdldE1lbW9yeSh0YXJnZXRSZWNvcmQsIHBldFJlY29yZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWZyZXNoZWQ7XG59XG4iLCAiaW1wb3J0IHtcbiAgUGV0Q29uZmlnLFxuICBTaW11bGF0aW9uQ29uZmlnLFxuICBTaW11bGF0aW9uUmVzdWx0LFxufSBmcm9tICdhcHAvZG9tYWluL2ludGVyZmFjZXMvc2ltdWxhdGlvbi1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlZnJlc2hQb3NpdGlvbmluZ0xpbmV1cE1lbW9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmctbGluZXVwLW1lbW9yeSc7XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZSA9ICdwbGF5ZXInIHwgJ29wcG9uZW50JztcbmV4cG9ydCB0eXBlIFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUHJlY2lzaW9uID0gJ3F1aWNrJyB8ICdleHRlbmRlZCc7XG5cbmNvbnN0IFBPU0lUSU9OSU5HX1NJTVVMQVRJT05fQlVER0VUUzogUmVhZG9ubHk8XG4gIFJlY29yZDxQb3NpdGlvbmluZ09wdGltaXphdGlvblByZWNpc2lvbiwgeyB0b3RhbDogbnVtYmVyOyBtYXhpbXVtOiBudW1iZXIgfT5cbj4gPSB7XG4gIHF1aWNrOiB7IHRvdGFsOiAxMl8wMDAsIG1heGltdW06IDFfMDAwIH0sXG4gIGV4dGVuZGVkOiB7IHRvdGFsOiA2MF8wMDAsIG1heGltdW06IDVfMDAwIH0sXG59O1xuXG4vKipcbiAqIEtlZXBzIG9wdGltaXplciB3b3JrIHByZWRpY3RhYmxlIGFzIHRoZSBudW1iZXIgb2YgbWVhbmluZ2Z1bCBib2FyZCBvcmRlcnNcbiAqIGdyb3dzLiBFbXB0eSBzbG90cyBzdGlsbCBtYXR0ZXIgYmVjYXVzZSBwZXRzIGNhbiBiZSBtb3ZlZCBpbnRvIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbmluZ1NpbXVsYXRpb25Db3VudChcbiAgbGluZXVwOiByZWFkb25seSAoUGV0Q29uZmlnIHwgbnVsbCB8IHVuZGVmaW5lZClbXSxcbiAgcHJlY2lzaW9uOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblByZWNpc2lvbiA9ICdxdWljaycsXG4pOiBudW1iZXIge1xuICBjb25zdCBvY2N1cGllZFNsb3RzID0gTWF0aC5taW4oXG4gICAgNSxcbiAgICBsaW5ldXAucmVkdWNlKChjb3VudCwgcGV0KSA9PiBjb3VudCArIChwZXQgPyAxIDogMCksIDApLFxuICApO1xuICBjb25zdCBtZWFuaW5nZnVsT3JkZXJzID0gcGVybXV0YXRpb25Db3VudCg1LCBvY2N1cGllZFNsb3RzKTtcbiAgY29uc3QgcHJvZmlsZSA9IFBPU0lUSU9OSU5HX1NJTVVMQVRJT05fQlVER0VUU1twcmVjaXNpb25dO1xuICByZXR1cm4gTWF0aC5tYXgoXG4gICAgMjUsXG4gICAgTWF0aC5taW4ocHJvZmlsZS5tYXhpbXVtLCBNYXRoLmZsb29yKHByb2ZpbGUudG90YWwgLyBtZWFuaW5nZnVsT3JkZXJzKSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBlcm11dGF0aW9uQ291bnQoc2xvdENvdW50OiBudW1iZXIsIG9jY3VwaWVkU2xvdHM6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2NjdXBpZWRTbG90czsgaW5kZXggKz0gMSkge1xuICAgIHJlc3VsdCAqPSBzbG90Q291bnQgLSBpbmRleDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW1pemVyT3B0aW9ucyB7XG4gIHNpZGU6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZTtcbiAgbWF4U2ltdWxhdGlvbnNQZXJQZXJtdXRhdGlvbjogbnVtYmVyO1xuICBiYXRjaFNpemU6IG51bWJlcjtcbiAgY29uZmlkZW5jZVo6IG51bWJlcjtcbiAgbWluU2FtcGxlc0JlZm9yZUVsaW1pbmF0aW9uOiBudW1iZXI7XG4gIGJhc2VTZWVkOiBudW1iZXI7XG4gIGtlZXBTYW1lQnVmZlRhcmdldHM6IGJvb2xlYW47XG4gIHJlY29tcHV0ZVBhcnJvdENvcGllczogYm9vbGVhbjtcbiAgc3VjY2Vzc2l2ZUhhbHZpbmc6IGJvb2xlYW47XG4gIHN1Y2Nlc3NpdmVIYWx2aW5nUmF0ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW1pemVyUHJvZ3Jlc3Mge1xuICBjb21wbGV0ZWRCYXR0bGVzOiBudW1iZXI7XG4gIHRvdGFsQmF0dGxlc0VzdGltYXRlOiBudW1iZXI7XG4gIHRlc3RlZFBlcm11dGF0aW9uczogbnVtYmVyO1xuICBhY3RpdmVQZXJtdXRhdGlvbnM6IG51bWJlcjtcbiAgYmVzdFNjb3JlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdQZXJtdXRhdGlvblN0YXRzIHtcbiAgb3JkZXI6IG51bWJlcltdO1xuICBsaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdO1xuICBzaW11bGF0aW9uTGluZXVwOiAoUGV0Q29uZmlnIHwgbnVsbClbXTtcbiAgc2ltdWxhdGlvbnM6IG51bWJlcjtcbiAgd2luczogbnVtYmVyO1xuICBkcmF3czogbnVtYmVyO1xuICBsb3NzZXM6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgbG93ZXJCb3VuZDogbnVtYmVyO1xuICB1cHBlckJvdW5kOiBudW1iZXI7XG4gIGVsaW1pbmF0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdPcHRpbWl6YXRpb25SZXN1bHQge1xuICBzaWRlOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblNpZGU7XG4gIHRvdGFsUGVybXV0YXRpb25zOiBudW1iZXI7XG4gIHBydW5lZFBlcm11dGF0aW9uczogbnVtYmVyO1xuICBzaW11bGF0ZWRCYXR0bGVzOiBudW1iZXI7XG4gIGFib3J0ZWQ6IGJvb2xlYW47XG4gIGJlc3RQZXJtdXRhdGlvbjogUG9zaXRpb25pbmdQZXJtdXRhdGlvblN0YXRzO1xuICByYW5rZWRQZXJtdXRhdGlvbnM6IFBvc2l0aW9uaW5nUGVybXV0YXRpb25TdGF0c1tdO1xufVxuXG5pbnRlcmZhY2UgQ2FuZGlkYXRlU3RhdGUgZXh0ZW5kcyBQb3NpdGlvbmluZ1Blcm11dGF0aW9uU3RhdHMge1xuICByb3VuZHM6IG51bWJlcjtcbiAgc2ltdWxhdGlvbkxpbmV1cDogKFBldENvbmZpZyB8IG51bGwpW10gfCBudWxsO1xuICBsaW5ldXBTaWduYXR1cmU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUGFyYW1zIHtcbiAgYmFzZUNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZztcbiAgb3B0aW9uczogUGFydGlhbDxQb3NpdGlvbmluZ09wdGltaXplck9wdGlvbnM+ICYge1xuICAgIHNpZGU6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZTtcbiAgfTtcbiAgc2hvdWxkQWJvcnQ/OiAoKSA9PiBib29sZWFuO1xuICBvblByb2dyZXNzPzogKHByb2dyZXNzOiBQb3NpdGlvbmluZ09wdGltaXplclByb2dyZXNzKSA9PiB2b2lkO1xuICBzaW11bGF0ZUJhdGNoOiAoY29uZmlnOiBTaW11bGF0aW9uQ29uZmlnKSA9PiBTaW11bGF0aW9uUmVzdWx0O1xuICBwcm9qZWN0RW5kVHVybkxpbmV1cD86IChwYXJhbXM6IHtcbiAgICBiYXNlQ29uZmlnOiBTaW11bGF0aW9uQ29uZmlnO1xuICAgIHNpZGU6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZTtcbiAgICBsaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdO1xuICB9KSA9PiAoUGV0Q29uZmlnIHwgbnVsbClbXTtcbn1cblxuY29uc3QgREVGQVVMVF9NQVhfU0lNVUxBVElPTlNfUEVSX1BFUk1VVEFUSU9OID0gMjUwO1xuY29uc3QgREVGQVVMVF9CQVRDSF9TSVpFID0gMjU7XG5jb25zdCBERUZBVUxUX0NPTkZJREVOQ0VfWiA9IDEuOTY7XG5jb25zdCBERUZBVUxUX01JTl9TQU1QTEVTX0JFRk9SRV9FTElNSU5BVElPTiA9IDUwO1xuY29uc3QgREVGQVVMVF9CQVNFX1NFRUQgPSAxMjM0NTY3ODk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5Qb3NpdGlvbmluZ09wdGltaXphdGlvbihcbiAgcGFyYW1zOiBSdW5Qb3NpdGlvbmluZ09wdGltaXphdGlvblBhcmFtcyxcbik6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUmVzdWx0IHtcbiAgY29uc3Qge1xuICAgIGJhc2VDb25maWcsXG4gICAgc2ltdWxhdGVCYXRjaCxcbiAgICBzaG91bGRBYm9ydCxcbiAgICBvblByb2dyZXNzLFxuICAgIHByb2plY3RFbmRUdXJuTGluZXVwLFxuICB9ID0gcGFyYW1zO1xuICBjb25zdCBzaWRlID0gcGFyYW1zLm9wdGlvbnMuc2lkZTtcbiAgY29uc3Qga2VlcFNhbWVCdWZmVGFyZ2V0cyA9IHBhcmFtcy5vcHRpb25zLmtlZXBTYW1lQnVmZlRhcmdldHMgPT09IHRydWU7XG4gIGNvbnN0IHJlY29tcHV0ZVBhcnJvdENvcGllcyA9XG4gICAgcGFyYW1zLm9wdGlvbnMucmVjb21wdXRlUGFycm90Q29waWVzICE9PSBmYWxzZTtcbiAgY29uc3Qgc3VjY2Vzc2l2ZUhhbHZpbmcgPSBwYXJhbXMub3B0aW9ucy5zdWNjZXNzaXZlSGFsdmluZyA9PT0gdHJ1ZTtcbiAgY29uc3Qgc3VjY2Vzc2l2ZUhhbHZpbmdSYXRlID0gTWF0aC5taW4oXG4gICAgMC45LFxuICAgIE1hdGgubWF4KDAuMSwgcGFyYW1zLm9wdGlvbnMuc3VjY2Vzc2l2ZUhhbHZpbmdSYXRlID8/IDAuNSksXG4gICk7XG4gIGNvbnN0IHByb2plY3RlZExpbmV1cENhY2hlID0gbmV3IE1hcDxzdHJpbmcsIChQZXRDb25maWcgfCBudWxsKVtdPigpO1xuXG4gIGNvbnN0IG1heFNpbXVsYXRpb25zUGVyUGVybXV0YXRpb24gPSBNYXRoLm1heChcbiAgICAxLFxuICAgIE1hdGgudHJ1bmMoXG4gICAgICBwYXJhbXMub3B0aW9ucy5tYXhTaW11bGF0aW9uc1BlclBlcm11dGF0aW9uID8/XG4gICAgICAgIGJhc2VDb25maWcuc2ltdWxhdGlvbkNvdW50ID8/XG4gICAgICAgIERFRkFVTFRfTUFYX1NJTVVMQVRJT05TX1BFUl9QRVJNVVRBVElPTixcbiAgICApLFxuICApO1xuICBjb25zdCBiYXRjaFNpemUgPSBNYXRoLm1heChcbiAgICAxLFxuICAgIE1hdGgudHJ1bmMocGFyYW1zLm9wdGlvbnMuYmF0Y2hTaXplID8/IERFRkFVTFRfQkFUQ0hfU0laRSksXG4gICk7XG4gIGNvbnN0IGNvbmZpZGVuY2VaID1cbiAgICBwYXJhbXMub3B0aW9ucy5jb25maWRlbmNlWiAhPSBudWxsICYmXG4gICAgTnVtYmVyLmlzRmluaXRlKHBhcmFtcy5vcHRpb25zLmNvbmZpZGVuY2VaKVxuICAgICAgPyBNYXRoLm1heCgwLCBwYXJhbXMub3B0aW9ucy5jb25maWRlbmNlWilcbiAgICAgIDogREVGQVVMVF9DT05GSURFTkNFX1o7XG4gIGNvbnN0IG1pblNhbXBsZXNCZWZvcmVFbGltaW5hdGlvbiA9IE1hdGgubWF4KFxuICAgIDEsXG4gICAgTWF0aC50cnVuYyhcbiAgICAgIHBhcmFtcy5vcHRpb25zLm1pblNhbXBsZXNCZWZvcmVFbGltaW5hdGlvbiA/P1xuICAgICAgICBERUZBVUxUX01JTl9TQU1QTEVTX0JFRk9SRV9FTElNSU5BVElPTixcbiAgICApLFxuICApO1xuICBjb25zdCBiYXNlU2VlZCA9XG4gICAgcGFyYW1zLm9wdGlvbnMuYmFzZVNlZWQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUocGFyYW1zLm9wdGlvbnMuYmFzZVNlZWQpXG4gICAgICA/IE1hdGgudHJ1bmMocGFyYW1zLm9wdGlvbnMuYmFzZVNlZWQpXG4gICAgICA6IGJhc2VDb25maWcuc2VlZCAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZShiYXNlQ29uZmlnLnNlZWQpXG4gICAgICAgID8gTWF0aC50cnVuYyhiYXNlQ29uZmlnLnNlZWQpXG4gICAgICAgIDogREVGQVVMVF9CQVNFX1NFRUQ7XG5cbiAgY29uc3QgcGV0c0tleSA9IHNpZGUgPT09ICdwbGF5ZXInID8gJ3BsYXllclBldHMnIDogJ29wcG9uZW50UGV0cyc7XG4gIGNvbnN0IHNpZGVQZXRzID0gKGJhc2VDb25maWdbcGV0c0tleV0gPz8gW10pLnNsaWNlKCk7XG4gIGNvbnN0IGJhc2VsaW5lTGluZXVwRGVsdGFzID0gcHJvamVjdEVuZFR1cm5MaW5ldXAgJiYgIWtlZXBTYW1lQnVmZlRhcmdldHNcbiAgICA/IGNvbXB1dGVMaW5ldXBOdW1lcmljRGVsdGFzKFxuICAgICAgICBzaWRlUGV0cyxcbiAgICAgICAgbm9ybWFsaXplTGluZXVwTGVuZ3RoKFxuICAgICAgICAgIHByb2plY3RFbmRUdXJuTGluZXVwKHtcbiAgICAgICAgICAgIGJhc2VDb25maWcsXG4gICAgICAgICAgICBzaWRlLFxuICAgICAgICAgICAgbGluZXVwOiBzaWRlUGV0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaWRlUGV0cy5sZW5ndGgsXG4gICAgICAgICksXG4gICAgICApXG4gICAgOiBudWxsO1xuICBjb25zdCBwZXJtdXRhdGlvbnMgPSBnZW5lcmF0ZUluZGV4UGVybXV0YXRpb25zKHNpZGVQZXRzKTtcbiAgY29uc3QgY2FuZGlkYXRlczogQ2FuZGlkYXRlU3RhdGVbXSA9IHBlcm11dGF0aW9ucy5tYXAoKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgbGluZXVwID0gYXBwbHlPcmRlcihzaWRlUGV0cywgb3JkZXIpO1xuICAgIHJldHVybiB7XG4gICAgICBvcmRlcjogWy4uLm9yZGVyXSxcbiAgICAgIGxpbmV1cCxcbiAgICAgIHNpbXVsYXRpb25zOiAwLFxuICAgICAgd2luczogMCxcbiAgICAgIGRyYXdzOiAwLFxuICAgICAgbG9zc2VzOiAwLFxuICAgICAgc2NvcmU6IDAsXG4gICAgICBsb3dlckJvdW5kOiAwLFxuICAgICAgdXBwZXJCb3VuZDogMSxcbiAgICAgIGVsaW1pbmF0ZWQ6IGZhbHNlLFxuICAgICAgcm91bmRzOiAwLFxuICAgICAgc2ltdWxhdGlvbkxpbmV1cDoga2VlcFNhbWVCdWZmVGFyZ2V0c1xuICAgICAgICA/IHJlY29tcHV0ZVBhcnJvdENvcGllc1xuICAgICAgICAgID8gcmVmcmVzaFBvc2l0aW9uaW5nTGluZXVwTWVtb3J5KGxpbmV1cClcbiAgICAgICAgICA6IGxpbmV1cFxuICAgICAgICA6IG51bGwsXG4gICAgICBsaW5ldXBTaWduYXR1cmU6ICcnLFxuICAgIH07XG4gIH0pO1xuICBjYW5kaWRhdGVzLmZvckVhY2goKGNhbmRpZGF0ZSkgPT4ge1xuICAgIGNhbmRpZGF0ZS5saW5ldXBTaWduYXR1cmUgPSBidWlsZExpbmV1cFNpZ25hdHVyZShjYW5kaWRhdGUubGluZXVwKTtcbiAgfSk7XG5cbiAgbGV0IGNvbXBsZXRlZEJhdHRsZXMgPSAwO1xuICBjb25zdCB0b3RhbEJhdHRsZXNFc3RpbWF0ZSA9IHBlcm11dGF0aW9ucy5sZW5ndGggKiBtYXhTaW11bGF0aW9uc1BlclBlcm11dGF0aW9uO1xuICBsZXQgcm91bmQgPSAwO1xuICBsZXQgYWJvcnRlZCA9IGZhbHNlO1xuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdlbmVyYXRlIGFueSBib2FyZCBwZXJtdXRhdGlvbnMuJyk7XG4gIH1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChzaG91bGRBYm9ydD8uKCkpIHtcbiAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlQ2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKChjYW5kaWRhdGUpID0+ICFjYW5kaWRhdGUuZWxpbWluYXRlZCk7XG4gICAgaWYgKGFjdGl2ZUNhbmRpZGF0ZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHNlZWRGb3JSb3VuZCA9IGJhc2VTZWVkICsgcm91bmQ7XG4gICAgbGV0IHJhbkFueUJhdGNoID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBhY3RpdmVDYW5kaWRhdGVzKSB7XG4gICAgICBpZiAoc2hvdWxkQWJvcnQ/LigpKSB7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmRpZGF0ZS5zaW11bGF0aW9ucyA+PSBtYXhTaW11bGF0aW9uc1BlclBlcm11dGF0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZW1haW5pbmcgPSBtYXhTaW11bGF0aW9uc1BlclBlcm11dGF0aW9uIC0gY2FuZGlkYXRlLnNpbXVsYXRpb25zO1xuICAgICAgY29uc3Qgc2ltdWxhdGlvbnNUb1J1biA9IE1hdGgubWluKGJhdGNoU2l6ZSwgcmVtYWluaW5nKTtcbiAgICAgIGlmIChzaW11bGF0aW9uc1RvUnVuIDw9IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJhbkFueUJhdGNoID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHNpbXVsYXRpb25MaW5ldXAgPSBnZXRDYW5kaWRhdGVTaW11bGF0aW9uTGluZXVwKFxuICAgICAgICBjYW5kaWRhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBrZWVwU2FtZUJ1ZmZUYXJnZXRzLFxuICAgICAgICAgIHJlY29tcHV0ZVBhcnJvdENvcGllcyxcbiAgICAgICAgICBiYXNlQ29uZmlnLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgc2lkZVBldHMsXG4gICAgICAgICAgYmFzZWxpbmVMaW5ldXBEZWx0YXMsXG4gICAgICAgICAgcHJvamVjdEVuZFR1cm5MaW5ldXAsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3RlZExpbmV1cENhY2hlLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGJhdGNoQ29uZmlnID0ge1xuICAgICAgICAuLi5iYXNlQ29uZmlnLFxuICAgICAgICBbcGV0c0tleV06IHNpbXVsYXRpb25MaW5ldXAsXG4gICAgICAgIHNpbXVsYXRpb25Db3VudDogc2ltdWxhdGlvbnNUb1J1bixcbiAgICAgICAgbG9nc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBtYXhMb2dnZWRCYXR0bGVzOiAwLFxuICAgICAgICBjYXB0dXJlUmFuZG9tRGVjaXNpb25zOiBmYWxzZSxcbiAgICAgICAgcmFuZG9tRGVjaXNpb25PdmVycmlkZXM6IFtdLFxuICAgICAgICBzZWVkOiBzZWVkRm9yUm91bmQsXG4gICAgICB9IGFzIFNpbXVsYXRpb25Db25maWc7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNpbXVsYXRlQmF0Y2goYmF0Y2hDb25maWcpO1xuICAgICAgY29uc3Qgb2JqZWN0aXZlV2lucyA9XG4gICAgICAgIHNpZGUgPT09ICdwbGF5ZXInID8gcmVzdWx0LnBsYXllcldpbnMgOiByZXN1bHQub3Bwb25lbnRXaW5zO1xuICAgICAgY29uc3Qgb2JqZWN0aXZlTG9zc2VzID1cbiAgICAgICAgc2lkZSA9PT0gJ3BsYXllcicgPyByZXN1bHQub3Bwb25lbnRXaW5zIDogcmVzdWx0LnBsYXllcldpbnM7XG4gICAgICBjYW5kaWRhdGUuc2ltdWxhdGlvbnMgKz0gc2ltdWxhdGlvbnNUb1J1bjtcbiAgICAgIGNhbmRpZGF0ZS5yb3VuZHMgKz0gMTtcbiAgICAgIGNhbmRpZGF0ZS53aW5zICs9IG9iamVjdGl2ZVdpbnM7XG4gICAgICBjYW5kaWRhdGUuZHJhd3MgKz0gcmVzdWx0LmRyYXdzO1xuICAgICAgY2FuZGlkYXRlLmxvc3NlcyArPSBvYmplY3RpdmVMb3NzZXM7XG4gICAgICB1cGRhdGVDYW5kaWRhdGVTdGF0cyhjYW5kaWRhdGUsIGNvbmZpZGVuY2VaKTtcbiAgICAgIGNvbXBsZXRlZEJhdHRsZXMgKz0gc2ltdWxhdGlvbnNUb1J1bjtcblxuICAgICAgY29uc3QgdGVzdGVkUGVybXV0YXRpb25zID0gY2FuZGlkYXRlcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5zaW11bGF0aW9ucyA+IDApXG4gICAgICAgIC5sZW5ndGg7XG4gICAgICBjb25zdCBiZXN0U2NvcmUgPSBNYXRoLm1heCguLi5jYW5kaWRhdGVzLm1hcCgoZW50cnkpID0+IGVudHJ5LnNjb3JlKSk7XG4gICAgICBvblByb2dyZXNzPy4oe1xuICAgICAgICBjb21wbGV0ZWRCYXR0bGVzLFxuICAgICAgICB0b3RhbEJhdHRsZXNFc3RpbWF0ZSxcbiAgICAgICAgdGVzdGVkUGVybXV0YXRpb25zLFxuICAgICAgICBhY3RpdmVQZXJtdXRhdGlvbnM6IGNhbmRpZGF0ZXMuZmlsdGVyKChlbnRyeSkgPT4gIWVudHJ5LmVsaW1pbmF0ZWQpLmxlbmd0aCxcbiAgICAgICAgYmVzdFNjb3JlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghcmFuQW55QmF0Y2gpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUFmdGVyUm91bmQgPSBjYW5kaWRhdGVzLmZpbHRlcigoY2FuZGlkYXRlKSA9PiAhY2FuZGlkYXRlLmVsaW1pbmF0ZWQpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGFjdGl2ZUFmdGVyUm91bmQpIHtcbiAgICAgIHVwZGF0ZUNhbmRpZGF0ZVN0YXRzKGNhbmRpZGF0ZSwgY29uZmlkZW5jZVopO1xuICAgIH1cblxuICAgIGNvbnN0IGVsaWdpYmxlRm9yRWxpbWluYXRpb24gPSBhY3RpdmVBZnRlclJvdW5kLmZpbHRlcihcbiAgICAgIChjYW5kaWRhdGUpID0+IGNhbmRpZGF0ZS5zaW11bGF0aW9ucyA+PSBtaW5TYW1wbGVzQmVmb3JlRWxpbWluYXRpb24sXG4gICAgKTtcbiAgICBpZiAoZWxpZ2libGVGb3JFbGltaW5hdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBiZXN0TG93ZXJCb3VuZCA9IE1hdGgubWF4KFxuICAgICAgICAuLi5lbGlnaWJsZUZvckVsaW1pbmF0aW9uLm1hcCgoY2FuZGlkYXRlKSA9PiBjYW5kaWRhdGUubG93ZXJCb3VuZCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZWxpZ2libGVGb3JFbGltaW5hdGlvbikge1xuICAgICAgICBpZiAoY2FuZGlkYXRlLnVwcGVyQm91bmQgPCBiZXN0TG93ZXJCb3VuZCkge1xuICAgICAgICAgIGNhbmRpZGF0ZS5lbGltaW5hdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWNjZXNzaXZlSGFsdmluZykge1xuICAgICAgY29uc3QgaGFsdmluZ0NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihcbiAgICAgICAgKGNhbmRpZGF0ZSkgPT4gIWNhbmRpZGF0ZS5lbGltaW5hdGVkLFxuICAgICAgKTtcbiAgICAgIGlmIChoYWx2aW5nQ2FuZGlkYXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHN1cnZpdm9ycyA9IE1hdGgubWF4KFxuICAgICAgICAgIDEsXG4gICAgICAgICAgTWF0aC5jZWlsKGhhbHZpbmdDYW5kaWRhdGVzLmxlbmd0aCAqIHN1Y2Nlc3NpdmVIYWx2aW5nUmF0ZSksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJhbmtlZEZvclNjcmVlbmluZyA9IFsuLi5oYWx2aW5nQ2FuZGlkYXRlc10uc29ydChcbiAgICAgICAgICAobGVmdCwgcmlnaHQpID0+XG4gICAgICAgICAgICByaWdodC5zY29yZSAtIGxlZnQuc2NvcmUgfHxcbiAgICAgICAgICAgIHJpZ2h0Lmxvd2VyQm91bmQgLSBsZWZ0Lmxvd2VyQm91bmQgfHxcbiAgICAgICAgICAgIHJpZ2h0LndpbnMgLSBsZWZ0LndpbnMgfHxcbiAgICAgICAgICAgIGxlZnQubG9zc2VzIC0gcmlnaHQubG9zc2VzLFxuICAgICAgICApO1xuICAgICAgICByYW5rZWRGb3JTY3JlZW5pbmcuc2xpY2Uoc3Vydml2b3JzKS5mb3JFYWNoKChjYW5kaWRhdGUpID0+IHtcbiAgICAgICAgICBjYW5kaWRhdGUuZWxpbWluYXRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJvdW5kICs9IDE7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgdXBkYXRlQ2FuZGlkYXRlU3RhdHMoY2FuZGlkYXRlLCBjb25maWRlbmNlWik7XG4gIH1cblxuICBjb25zdCByYW5rZWRQZXJtdXRhdGlvbnMgPSBbLi4uY2FuZGlkYXRlc10uc29ydCgobGVmdCwgcmlnaHQpID0+IHtcbiAgICBpZiAocmlnaHQuc2NvcmUgIT09IGxlZnQuc2NvcmUpIHtcbiAgICAgIHJldHVybiByaWdodC5zY29yZSAtIGxlZnQuc2NvcmU7XG4gICAgfVxuICAgIGlmIChyaWdodC5sb3dlckJvdW5kICE9PSBsZWZ0Lmxvd2VyQm91bmQpIHtcbiAgICAgIHJldHVybiByaWdodC5sb3dlckJvdW5kIC0gbGVmdC5sb3dlckJvdW5kO1xuICAgIH1cbiAgICBpZiAocmlnaHQuc2ltdWxhdGlvbnMgIT09IGxlZnQuc2ltdWxhdGlvbnMpIHtcbiAgICAgIHJldHVybiByaWdodC5zaW11bGF0aW9ucyAtIGxlZnQuc2ltdWxhdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuICBjb25zdCBiZXN0UGVybXV0YXRpb24gPSByYW5rZWRQZXJtdXRhdGlvbnNbMF07XG4gIGlmICghYmVzdFBlcm11dGF0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbmluZyBvcHRpbWl6YXRpb24gZmFpbGVkIHRvIHJhbmsgY2FuZGlkYXRlcy4nKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2lkZSxcbiAgICB0b3RhbFBlcm11dGF0aW9uczogY2FuZGlkYXRlcy5sZW5ndGgsXG4gICAgcHJ1bmVkUGVybXV0YXRpb25zOiBjYW5kaWRhdGVzLmZpbHRlcigoY2FuZGlkYXRlKSA9PiBjYW5kaWRhdGUuZWxpbWluYXRlZClcbiAgICAgIC5sZW5ndGgsXG4gICAgc2ltdWxhdGVkQmF0dGxlczogY29tcGxldGVkQmF0dGxlcyxcbiAgICBhYm9ydGVkLFxuICAgIGJlc3RQZXJtdXRhdGlvbjogY2xvbmVDYW5kaWRhdGVTdGF0cyhiZXN0UGVybXV0YXRpb24sIHJlY29tcHV0ZVBhcnJvdENvcGllcyksXG4gICAgcmFua2VkUGVybXV0YXRpb25zOiByYW5rZWRQZXJtdXRhdGlvbnMubWFwKChjYW5kaWRhdGUpID0+XG4gICAgICBjbG9uZUNhbmRpZGF0ZVN0YXRzKGNhbmRpZGF0ZSwgcmVjb21wdXRlUGFycm90Q29waWVzKSxcbiAgICApLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjbG9uZUNhbmRpZGF0ZVN0YXRzKFxuICBjYW5kaWRhdGU6IENhbmRpZGF0ZVN0YXRlLFxuICByZWNvbXB1dGVQYXJyb3RDb3BpZXM6IGJvb2xlYW4sXG4pOiBQb3NpdGlvbmluZ1Blcm11dGF0aW9uU3RhdHMge1xuICByZXR1cm4ge1xuICAgIG9yZGVyOiBbLi4uY2FuZGlkYXRlLm9yZGVyXSxcbiAgICBsaW5ldXA6IFsuLi5jYW5kaWRhdGUubGluZXVwXSxcbiAgICBzaW11bGF0aW9uTGluZXVwOiBbXG4gICAgICAuLi4oY2FuZGlkYXRlLnNpbXVsYXRpb25MaW5ldXAgPz9cbiAgICAgICAgKHJlY29tcHV0ZVBhcnJvdENvcGllc1xuICAgICAgICAgID8gcmVmcmVzaFBvc2l0aW9uaW5nTGluZXVwTWVtb3J5KGNhbmRpZGF0ZS5saW5ldXApXG4gICAgICAgICAgOiBjYW5kaWRhdGUubGluZXVwKSksXG4gICAgXSxcbiAgICBzaW11bGF0aW9uczogY2FuZGlkYXRlLnNpbXVsYXRpb25zLFxuICAgIHdpbnM6IGNhbmRpZGF0ZS53aW5zLFxuICAgIGRyYXdzOiBjYW5kaWRhdGUuZHJhd3MsXG4gICAgbG9zc2VzOiBjYW5kaWRhdGUubG9zc2VzLFxuICAgIHNjb3JlOiBjYW5kaWRhdGUuc2NvcmUsXG4gICAgbG93ZXJCb3VuZDogY2FuZGlkYXRlLmxvd2VyQm91bmQsXG4gICAgdXBwZXJCb3VuZDogY2FuZGlkYXRlLnVwcGVyQm91bmQsXG4gICAgZWxpbWluYXRlZDogY2FuZGlkYXRlLmVsaW1pbmF0ZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXRzKGNhbmRpZGF0ZTogQ2FuZGlkYXRlU3RhdGUsIHpTY29yZTogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHNpbXVsYXRpb25zID0gY2FuZGlkYXRlLnNpbXVsYXRpb25zO1xuICBpZiAoc2ltdWxhdGlvbnMgPD0gMCkge1xuICAgIGNhbmRpZGF0ZS5zY29yZSA9IDA7XG4gICAgY2FuZGlkYXRlLmxvd2VyQm91bmQgPSAwO1xuICAgIGNhbmRpZGF0ZS51cHBlckJvdW5kID0gMTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzY29yZSA9IHNjb3JlRnJvbVRhbGxpZXMoY2FuZGlkYXRlLndpbnMsIGNhbmRpZGF0ZS5kcmF3cywgc2ltdWxhdGlvbnMpO1xuICBjb25zdCB2YXJpYW5jZSA9IE1hdGgubWF4KDAsIHNjb3JlICogKDEgLSBzY29yZSkpO1xuICBjb25zdCBtYXJnaW4gPSB6U2NvcmUgKiBNYXRoLnNxcnQodmFyaWFuY2UgLyBzaW11bGF0aW9ucyk7XG4gIGNhbmRpZGF0ZS5zY29yZSA9IHNjb3JlO1xuICBjYW5kaWRhdGUubG93ZXJCb3VuZCA9IE1hdGgubWF4KDAsIHNjb3JlIC0gbWFyZ2luKTtcbiAgY2FuZGlkYXRlLnVwcGVyQm91bmQgPSBNYXRoLm1pbigxLCBzY29yZSArIG1hcmdpbik7XG59XG5cbmZ1bmN0aW9uIHNjb3JlRnJvbVRhbGxpZXMoXG4gIHdpbnM6IG51bWJlcixcbiAgZHJhd3M6IG51bWJlcixcbiAgc2ltdWxhdGlvbnM6IG51bWJlcixcbik6IG51bWJlciB7XG4gIGlmIChzaW11bGF0aW9ucyA8PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuICh3aW5zICsgZHJhd3MgKiAwLjUpIC8gc2ltdWxhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGFwcGx5T3JkZXI8VD4oc291cmNlOiBUW10sIG9yZGVyOiBudW1iZXJbXSk6IFRbXSB7XG4gIHJldHVybiBvcmRlci5tYXAoKGluZGV4KSA9PiBzb3VyY2VbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcm9qZWN0ZWRDYW5kaWRhdGVMaW5ldXAoXG4gIGJhc2VDb25maWc6IFNpbXVsYXRpb25Db25maWcsXG4gIHNpZGU6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZSxcbiAgc2lkZVBldHM6IChQZXRDb25maWcgfCBudWxsKVtdLFxuICBvcmRlcjogbnVtYmVyW10sXG4gIGJhc2VsaW5lTGluZXVwRGVsdGFzOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PixcbiAgcHJvamVjdEVuZFR1cm5MaW5ldXA6IE5vbk51bGxhYmxlPFxuICAgIFJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUGFyYW1zWydwcm9qZWN0RW5kVHVybkxpbmV1cCddXG4gID4sXG4pOiAoUGV0Q29uZmlnIHwgbnVsbClbXSB7XG4gIGNvbnN0IGNhbmRpZGF0ZUxpbmV1cCA9IGFwcGx5T3JkZXIoc2lkZVBldHMsIG9yZGVyKTtcbiAgY29uc3QgcHJvamVjdGVkQ2FuZGlkYXRlTGluZXVwID0gbm9ybWFsaXplTGluZXVwTGVuZ3RoKFxuICAgIHByb2plY3RFbmRUdXJuTGluZXVwKHtcbiAgICAgIGJhc2VDb25maWcsXG4gICAgICBzaWRlLFxuICAgICAgbGluZXVwOiBjYW5kaWRhdGVMaW5ldXAsXG4gICAgfSksXG4gICAgY2FuZGlkYXRlTGluZXVwLmxlbmd0aCxcbiAgKTtcbiAgY29uc3QgY2FuZGlkYXRlTGluZXVwRGVsdGFzID0gY29tcHV0ZUxpbmV1cE51bWVyaWNEZWx0YXMoXG4gICAgY2FuZGlkYXRlTGluZXVwLFxuICAgIHByb2plY3RlZENhbmRpZGF0ZUxpbmV1cCxcbiAgKTtcblxuICByZXR1cm4gY2FuZGlkYXRlTGluZXVwLm1hcCgocGV0LCB0YXJnZXRJbmRleCkgPT4ge1xuICAgIGlmICghcGV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlSW5kZXggPSBvcmRlclt0YXJnZXRJbmRleF0gPz8gdGFyZ2V0SW5kZXg7XG4gICAgY29uc3QgYmFzZWxpbmVEZWx0YSA9IGJhc2VsaW5lTGluZXVwRGVsdGFzW3NvdXJjZUluZGV4XSA/PyB7fTtcbiAgICBjb25zdCBjYW5kaWRhdGVEZWx0YSA9IGNhbmRpZGF0ZUxpbmV1cERlbHRhc1t0YXJnZXRJbmRleF0gPz8ge307XG4gICAgY29uc3QgbnVtZXJpY0tleXMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgLi4uT2JqZWN0LmtleXMoY2FuZGlkYXRlRGVsdGEpLFxuICAgICAgLi4uT2JqZWN0LmtleXMoYmFzZWxpbmVEZWx0YSksXG4gICAgXSk7XG4gICAgaWYgKG51bWVyaWNLZXlzLnNpemUgPD0gMCkge1xuICAgICAgcmV0dXJuIHBldDtcbiAgICB9XG5cbiAgICBjb25zdCBwZXRSZWNvcmQgPSBwZXQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICBjb25zdCBwcm9qZWN0ZWRQZXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgICAgLi4ucGV0UmVjb3JkLFxuICAgICAgZXF1aXBtZW50OlxuICAgICAgICBwZXRSZWNvcmQuZXF1aXBtZW50ICYmIHR5cGVvZiBwZXRSZWNvcmQuZXF1aXBtZW50ID09PSAnb2JqZWN0J1xuICAgICAgICAgID8geyAuLi4ocGV0UmVjb3JkLmVxdWlwbWVudCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgfVxuICAgICAgICAgIDogcGV0UmVjb3JkLmVxdWlwbWVudCA/PyBudWxsLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBudW1lcmljS2V5cykge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdG9GaW5pdGVOdW1iZXIocGV0UmVjb3JkW2tleV0pID8/IDA7XG4gICAgICBjb25zdCBwcm9qZWN0ZWRWYWx1ZSA9XG4gICAgICAgIGN1cnJlbnRWYWx1ZSArIChjYW5kaWRhdGVEZWx0YVtrZXldID8/IDApIC0gKGJhc2VsaW5lRGVsdGFba2V5XSA/PyAwKTtcbiAgICAgIHByb2plY3RlZFBldFtrZXldID0gcHJvamVjdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3RlZFBldCBhcyB1bmtub3duIGFzIFBldENvbmZpZztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVMaW5ldXBOdW1lcmljRGVsdGFzKFxuICBiZWZvcmVMaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdLFxuICBhZnRlckxpbmV1cDogKFBldENvbmZpZyB8IG51bGwpW10sXG4pOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiB7XG4gIGNvbnN0IG1heExlbmd0aCA9IE1hdGgubWF4KGJlZm9yZUxpbmV1cC5sZW5ndGgsIGFmdGVyTGluZXVwLmxlbmd0aCk7XG4gIGNvbnN0IGRlbHRhczogQXJyYXk8UmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1heExlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGRlbHRhcy5wdXNoKFxuICAgICAgY29tcHV0ZVBldE51bWVyaWNEZWx0YShcbiAgICAgICAgYmVmb3JlTGluZXVwW2luZGV4XSA/PyBudWxsLFxuICAgICAgICBhZnRlckxpbmV1cFtpbmRleF0gPz8gbnVsbCxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZGVsdGFzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlUGV0TnVtZXJpY0RlbHRhKFxuICBiZWZvcmVQZXQ6IFBldENvbmZpZyB8IG51bGwsXG4gIGFmdGVyUGV0OiBQZXRDb25maWcgfCBudWxsLFxuKTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiB7XG4gIGlmICghYmVmb3JlUGV0IHx8ICFhZnRlclBldCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IGJlZm9yZVJlY29yZCA9IGJlZm9yZVBldCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBjb25zdCBhZnRlclJlY29yZCA9IGFmdGVyUGV0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGNvbnN0IG51bWVyaWNLZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgT2JqZWN0LmVudHJpZXMoYmVmb3JlUmVjb3JkKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAodG9GaW5pdGVOdW1iZXIodmFsdWUpICE9IG51bGwpIHtcbiAgICAgIG51bWVyaWNLZXlzLmFkZChrZXkpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5lbnRyaWVzKGFmdGVyUmVjb3JkKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAodG9GaW5pdGVOdW1iZXIodmFsdWUpICE9IG51bGwpIHtcbiAgICAgIG51bWVyaWNLZXlzLmFkZChrZXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZGVsdGE6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgbnVtZXJpY0tleXMpIHtcbiAgICBjb25zdCBiZWZvcmVWYWx1ZSA9IHRvRmluaXRlTnVtYmVyKGJlZm9yZVJlY29yZFtrZXldKSA/PyAwO1xuICAgIGNvbnN0IGFmdGVyVmFsdWUgPSB0b0Zpbml0ZU51bWJlcihhZnRlclJlY29yZFtrZXldKSA/PyAwO1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBhZnRlclZhbHVlIC0gYmVmb3JlVmFsdWU7XG4gICAgaWYgKGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgIGRlbHRhW2tleV0gPSBkaWZmZXJlbmNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmV1cExlbmd0aChcbiAgbGluZXVwOiAoUGV0Q29uZmlnIHwgbnVsbClbXSxcbiAgbGVuZ3RoOiBudW1iZXIsXG4pOiAoUGV0Q29uZmlnIHwgbnVsbClbXSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBsaW5ldXAuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgd2hpbGUgKG5vcm1hbGl6ZWQubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgbm9ybWFsaXplZC5wdXNoKG51bGwpO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5mdW5jdGlvbiB0b0Zpbml0ZU51bWJlcih2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluZGV4UGVybXV0YXRpb25zPFQ+KHNvdXJjZTogVFtdKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHNpemUgPSBzb3VyY2UubGVuZ3RoO1xuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIFtbXV07XG4gIH1cblxuICBjb25zdCBncm91cHMgPSBncm91cEVxdWl2YWxlbnRWYWx1ZXMoc291cmNlKTtcbiAgY29uc3QgcmVtYWluaW5nQ291bnRzID0gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IGdyb3VwLmluZGljZXMubGVuZ3RoKTtcbiAgY29uc3QgZ3JvdXBPcmRlciA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpO1xuICBjb25zdCBncm91cFBlcm11dGF0aW9uczogbnVtYmVyW11bXSA9IFtdO1xuXG4gIGdlbmVyYXRlR3JvdXBPcmRlclBlcm11dGF0aW9ucyhcbiAgICAwLFxuICAgIGdyb3VwT3JkZXIsXG4gICAgcmVtYWluaW5nQ291bnRzLFxuICAgIGdyb3VwUGVybXV0YXRpb25zLFxuICApO1xuXG4gIHJldHVybiBncm91cFBlcm11dGF0aW9ucy5tYXAoKHBlcm11dGF0aW9uKSA9PlxuICAgIG1hdGVyaWFsaXplSW5kZXhQZXJtdXRhdGlvbihwZXJtdXRhdGlvbiwgZ3JvdXBzKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBFcXVpdmFsZW50VmFsdWVzPFQ+KFxuICBzb3VyY2U6IFRbXSxcbik6IEFycmF5PHsgcmVwcmVzZW50YXRpdmU6IFQ7IGluZGljZXM6IG51bWJlcltdIH0+IHtcbiAgY29uc3QgZ3JvdXBzQnlTaWduYXR1cmUgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICB7IHJlcHJlc2VudGF0aXZlOiBUOyBpbmRpY2VzOiBudW1iZXJbXSB9XG4gID4oKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc291cmNlLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2luZGV4XTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBidWlsZFZhbHVlU2lnbmF0dXJlKHZhbHVlKTtcbiAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZ3JvdXBzQnlTaWduYXR1cmUuZ2V0KHNpZ25hdHVyZSk7XG4gICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgIGV4aXN0aW5nR3JvdXAuaW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBncm91cHNCeVNpZ25hdHVyZS5zZXQoc2lnbmF0dXJlLCB7XG4gICAgICByZXByZXNlbnRhdGl2ZTogdmFsdWUsXG4gICAgICBpbmRpY2VzOiBbaW5kZXhdLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20oZ3JvdXBzQnlTaWduYXR1cmUudmFsdWVzKCkpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUdyb3VwT3JkZXJQZXJtdXRhdGlvbnMoXG4gIGRlcHRoOiBudW1iZXIsXG4gIGdyb3VwT3JkZXI6IG51bWJlcltdLFxuICByZW1haW5pbmdDb3VudHM6IG51bWJlcltdLFxuICBvdXRwdXQ6IG51bWJlcltdW10sXG4pOiB2b2lkIHtcbiAgaWYgKGRlcHRoID49IGdyb3VwT3JkZXIubGVuZ3RoKSB7XG4gICAgb3V0cHV0LnB1c2goZ3JvdXBPcmRlci5zbGljZSgpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKFxuICAgIGxldCBncm91cEluZGV4ID0gMDtcbiAgICBncm91cEluZGV4IDwgcmVtYWluaW5nQ291bnRzLmxlbmd0aDtcbiAgICBncm91cEluZGV4ICs9IDFcbiAgKSB7XG4gICAgaWYgKHJlbWFpbmluZ0NvdW50c1tncm91cEluZGV4XSA8PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBncm91cE9yZGVyW2RlcHRoXSA9IGdyb3VwSW5kZXg7XG4gICAgcmVtYWluaW5nQ291bnRzW2dyb3VwSW5kZXhdIC09IDE7XG4gICAgZ2VuZXJhdGVHcm91cE9yZGVyUGVybXV0YXRpb25zKFxuICAgICAgZGVwdGggKyAxLFxuICAgICAgZ3JvdXBPcmRlcixcbiAgICAgIHJlbWFpbmluZ0NvdW50cyxcbiAgICAgIG91dHB1dCxcbiAgICApO1xuICAgIHJlbWFpbmluZ0NvdW50c1tncm91cEluZGV4XSArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGVyaWFsaXplSW5kZXhQZXJtdXRhdGlvbjxUPihcbiAgZ3JvdXBPcmRlcjogbnVtYmVyW10sXG4gIGdyb3VwczogQXJyYXk8eyByZXByZXNlbnRhdGl2ZTogVDsgaW5kaWNlczogbnVtYmVyW10gfT4sXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGdyb3VwT2Zmc2V0cyA9IGdyb3Vwcy5tYXAoKCkgPT4gMCk7XG5cbiAgcmV0dXJuIGdyb3VwT3JkZXIubWFwKChncm91cEluZGV4KSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZ3JvdXBPZmZzZXRzW2dyb3VwSW5kZXhdO1xuICAgIGdyb3VwT2Zmc2V0c1tncm91cEluZGV4XSArPSAxO1xuICAgIGNvbnN0IGluZGV4ID0gZ3JvdXBzW2dyb3VwSW5kZXhdLmluZGljZXNbb2Zmc2V0XTtcbiAgICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gbWFwIGdyb3VwZWQgcGVybXV0YXRpb24gdG8gaW5kZXggcGVybXV0YXRpb24uJyk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENhbmRpZGF0ZVNpbXVsYXRpb25MaW5ldXAoXG4gIGNhbmRpZGF0ZTogQ2FuZGlkYXRlU3RhdGUsXG4gIGNvbnRleHQ6IHtcbiAgICBrZWVwU2FtZUJ1ZmZUYXJnZXRzOiBib29sZWFuO1xuICAgIHJlY29tcHV0ZVBhcnJvdENvcGllczogYm9vbGVhbjtcbiAgICBiYXNlQ29uZmlnOiBTaW11bGF0aW9uQ29uZmlnO1xuICAgIHNpZGU6IFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uU2lkZTtcbiAgICBzaWRlUGV0czogKFBldENvbmZpZyB8IG51bGwpW107XG4gICAgYmFzZWxpbmVMaW5ldXBEZWx0YXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIG51bWJlcj4+IHwgbnVsbDtcbiAgICBwcm9qZWN0RW5kVHVybkxpbmV1cDogUnVuUG9zaXRpb25pbmdPcHRpbWl6YXRpb25QYXJhbXNbJ3Byb2plY3RFbmRUdXJuTGluZXVwJ107XG4gIH0sXG4gIHByb2plY3RlZExpbmV1cENhY2hlOiBNYXA8c3RyaW5nLCAoUGV0Q29uZmlnIHwgbnVsbClbXT4sXG4pOiAoUGV0Q29uZmlnIHwgbnVsbClbXSB7XG4gIGlmIChjYW5kaWRhdGUuc2ltdWxhdGlvbkxpbmV1cCkge1xuICAgIHJldHVybiBjYW5kaWRhdGUuc2ltdWxhdGlvbkxpbmV1cDtcbiAgfVxuXG4gIGNvbnN0IGNhY2hlZCA9IHByb2plY3RlZExpbmV1cENhY2hlLmdldChjYW5kaWRhdGUubGluZXVwU2lnbmF0dXJlKTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNhbmRpZGF0ZS5zaW11bGF0aW9uTGluZXVwID0gY2FjaGVkO1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0ZWRPclJhd0xpbmV1cCA9XG4gICAgY29udGV4dC5rZWVwU2FtZUJ1ZmZUYXJnZXRzIHx8ICFjb250ZXh0LmJhc2VsaW5lTGluZXVwRGVsdGFzIHx8ICFjb250ZXh0LnByb2plY3RFbmRUdXJuTGluZXVwXG4gICAgICA/IGNhbmRpZGF0ZS5saW5ldXBcbiAgICAgIDogYnVpbGRQcm9qZWN0ZWRDYW5kaWRhdGVMaW5ldXAoXG4gICAgICAgICAgY29udGV4dC5iYXNlQ29uZmlnLFxuICAgICAgICAgIGNvbnRleHQuc2lkZSxcbiAgICAgICAgICBjb250ZXh0LnNpZGVQZXRzLFxuICAgICAgICAgIGNhbmRpZGF0ZS5vcmRlcixcbiAgICAgICAgICBjb250ZXh0LmJhc2VsaW5lTGluZXVwRGVsdGFzLFxuICAgICAgICAgIGNvbnRleHQucHJvamVjdEVuZFR1cm5MaW5ldXAsXG4gICAgICAgICk7XG4gIGNvbnN0IHNpbXVsYXRpb25MaW5ldXAgPSBjb250ZXh0LnJlY29tcHV0ZVBhcnJvdENvcGllc1xuICAgID8gcmVmcmVzaFBvc2l0aW9uaW5nTGluZXVwTWVtb3J5KHByb2plY3RlZE9yUmF3TGluZXVwKVxuICAgIDogcHJvamVjdGVkT3JSYXdMaW5ldXA7XG5cbiAgcHJvamVjdGVkTGluZXVwQ2FjaGUuc2V0KGNhbmRpZGF0ZS5saW5ldXBTaWduYXR1cmUsIHNpbXVsYXRpb25MaW5ldXApO1xuICBjYW5kaWRhdGUuc2ltdWxhdGlvbkxpbmV1cCA9IHNpbXVsYXRpb25MaW5ldXA7XG4gIHJldHVybiBzaW11bGF0aW9uTGluZXVwO1xufVxuXG5jb25zdCBvYmplY3RTaWduYXR1cmVDYWNoZSA9IG5ldyBXZWFrTWFwPG9iamVjdCwgc3RyaW5nPigpO1xuXG5mdW5jdGlvbiBidWlsZExpbmV1cFNpZ25hdHVyZShsaW5ldXA6IChQZXRDb25maWcgfCBudWxsKVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxpbmV1cC5tYXAoKHBldCkgPT4gYnVpbGRWYWx1ZVNpZ25hdHVyZShwZXQpKS5qb2luKCd8Jyk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVmFsdWVTaWduYXR1cmUodmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBzOiR7dmFsdWV9YDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBgJHt0eXBlb2YgdmFsdWV9OiR7dmFsdWV9YDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYFske3ZhbHVlLm1hcCgoZW50cnkpID0+IGJ1aWxkVmFsdWVTaWduYXR1cmUoZW50cnkpKS5qb2luKCcsJyl9XWA7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYCR7dHlwZW9mIHZhbHVlfToke1N0cmluZyh2YWx1ZSl9YDtcbiAgfVxuXG4gIGNvbnN0IGNhY2hlZCA9IG9iamVjdFNpZ25hdHVyZUNhY2hlLmdldCh2YWx1ZSk7XG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG5cbiAgY29uc3QgcmVjb3JkID0gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWNvcmQpLnNvcnQoKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gYHske2tleXNcbiAgICAubWFwKChrZXkpID0+IGAke2tleX06JHtidWlsZFZhbHVlU2lnbmF0dXJlKHJlY29yZFtrZXldKX1gKVxuICAgIC5qb2luKCcsJyl9fWA7XG4gIG9iamVjdFNpZ25hdHVyZUNhY2hlLnNldCh2YWx1ZSwgc2lnbmF0dXJlKTtcbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuIiwgImltcG9ydCB7XG4gIFBldENvbmZpZyxcbiAgU2ltdWxhdGlvbkNvbmZpZyxcbiAgU2ltdWxhdGlvblJlc3VsdCxcbn0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL3NpbXVsYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCB0eXBlIEJvYXJkU3RyZW5ndGhTaWRlID0gJ3BsYXllcicgfCAnb3Bwb25lbnQnO1xuZXhwb3J0IHR5cGUgQm9hcmRTdHJlbmd0aFByZWNpc2lvbiA9ICdxdWljaycgfCAnc3RhbmRhcmQnIHwgJ2hpZ2gnO1xuZXhwb3J0IHR5cGUgQm9hcmRTdHJlbmd0aFBoYXNlID0gJ3Njb3V0JyB8ICdzY2FuJyB8ICdyZWZpbmUnIHwgJ2NvbXBsZXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBCb2FyZFN0cmVuZ3RoT3B0aW9ucyB7XG4gIHNpZGU6IEJvYXJkU3RyZW5ndGhTaWRlO1xuICBwcmVjaXNpb24/OiBCb2FyZFN0cmVuZ3RoUHJlY2lzaW9uO1xuICBtaW5TdGF0PzogbnVtYmVyO1xuICBtYXhTdGF0PzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb2FyZFN0cmVuZ3RoUG9pbnQge1xuICBzdGF0OiBudW1iZXI7XG4gIHdpbnM6IG51bWJlcjtcbiAgZHJhd3M6IG51bWJlcjtcbiAgbG9zc2VzOiBudW1iZXI7XG4gIGJhdHRsZXM6IG51bWJlcjtcbiAgZXhwZWN0ZWRTY29yZTogbnVtYmVyO1xuICBzbW9vdGhlZFNjb3JlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9hcmRTdHJlbmd0aFByb2dyZXNzIHtcbiAgcGhhc2U6IEJvYXJkU3RyZW5ndGhQaGFzZTtcbiAgY29tcGxldGVkU3RhdHM6IG51bWJlcjtcbiAgdG90YWxTdGF0czogbnVtYmVyO1xuICBjdXJyZW50U3RhdDogbnVtYmVyO1xuICBiYXR0bGVzQ29tcGxldGVkOiBudW1iZXI7XG4gIG1heGltdW1CYXR0bGVzOiBudW1iZXI7XG4gIHJlZmluZW1lbnRSb3VuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvYXJkU3RyZW5ndGhSZXN1bHQge1xuICB2ZXJzaW9uOiAnQlMxJztcbiAgc2lkZTogQm9hcmRTdHJlbmd0aFNpZGU7XG4gIHByZWNpc2lvbjogQm9hcmRTdHJlbmd0aFByZWNpc2lvbjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmVuY2htYXJrNTA6IG51bWJlciB8IG51bGw7XG4gIGVzdGltYXRlZFByZWNpc2lvbjk1OiBudW1iZXI7XG4gIHRvdGFsQmF0dGxlczogbnVtYmVyO1xuICBtaW5TdGF0OiBudW1iZXI7XG4gIG1heFN0YXQ6IG51bWJlcjtcbiAgcG9pbnRzOiBCb2FyZFN0cmVuZ3RoUG9pbnRbXTtcbiAgYWJvcnRlZDogYm9vbGVhbjtcbiAgcmFuZ2VUcnVuY2F0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9hcmRTdHJlbmd0aFJ1bkNvbnRleHQge1xuICBiYXNlQ29uZmlnOiBTaW11bGF0aW9uQ29uZmlnO1xuICBvcHRpb25zOiBCb2FyZFN0cmVuZ3RoT3B0aW9ucztcbiAgc2ltdWxhdGVCYXRjaDogKGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZykgPT4gU2ltdWxhdGlvblJlc3VsdDtcbiAgc2hvdWxkQWJvcnQ/OiAoKSA9PiBib29sZWFuO1xuICBvblByb2dyZXNzPzogKHByb2dyZXNzOiBCb2FyZFN0cmVuZ3RoUHJvZ3Jlc3MpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBQcmVjaXNpb25Qcm9maWxlIHtcbiAgaW5pdGlhbEJhdHRsZXM6IG51bWJlcjtcbiAgYmF0Y2hTaXplOiBudW1iZXI7XG4gIG1heEJhdHRsZXNQZXJTdGF0OiBudW1iZXI7XG4gIHRhcmdldFN0YW5kYXJkRXJyb3I6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIE11dGFibGVQb2ludCB7XG4gIHN0YXQ6IG51bWJlcjtcbiAgd2luczogbnVtYmVyO1xuICBkcmF3czogbnVtYmVyO1xuICBsb3NzZXM6IG51bWJlcjtcbiAgYmF0dGxlczogbnVtYmVyO1xufVxuXG5jb25zdCBERUZBVUxUX1NFRUQgPSA3MzAyNDE7XG5jb25zdCBBVVRPX0lOSVRJQUxfTUFYX1NUQVQgPSAxMDA7XG5jb25zdCBBVVRPX01BWF9TVEFUID0gNTAwMDtcbmNvbnN0IEFVVE9fU0lHTkFMX1RIUkVTSE9MRCA9IDAuMDA1O1xuXG5jb25zdCBQUkVDSVNJT05fUFJPRklMRVM6IFJlYWRvbmx5PFJlY29yZDxCb2FyZFN0cmVuZ3RoUHJlY2lzaW9uLCBQcmVjaXNpb25Qcm9maWxlPj4gPSB7XG4gIHF1aWNrOiB7XG4gICAgaW5pdGlhbEJhdHRsZXM6IDI1LFxuICAgIGJhdGNoU2l6ZTogMjUsXG4gICAgbWF4QmF0dGxlc1BlclN0YXQ6IDEwMCxcbiAgICB0YXJnZXRTdGFuZGFyZEVycm9yOiAwLjA1NSxcbiAgfSxcbiAgc3RhbmRhcmQ6IHtcbiAgICBpbml0aWFsQmF0dGxlczogNTAsXG4gICAgYmF0Y2hTaXplOiA1MCxcbiAgICBtYXhCYXR0bGVzUGVyU3RhdDogMjAwLFxuICAgIHRhcmdldFN0YW5kYXJkRXJyb3I6IDAuMDQsXG4gIH0sXG4gIGhpZ2g6IHtcbiAgICBpbml0aWFsQmF0dGxlczogMTAwLFxuICAgIGJhdGNoU2l6ZTogMTAwLFxuICAgIG1heEJhdHRsZXNQZXJTdGF0OiA0MDAsXG4gICAgdGFyZ2V0U3RhbmRhcmRFcnJvcjogMC4wMjUsXG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRTdHJlbmd0aFByZWNpc2lvblByb2ZpbGUoXG4gIHByZWNpc2lvbjogQm9hcmRTdHJlbmd0aFByZWNpc2lvbixcbik6IFJlYWRvbmx5PFByZWNpc2lvblByb2ZpbGU+IHtcbiAgcmV0dXJuIFBSRUNJU0lPTl9QUk9GSUxFU1twcmVjaXNpb25dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQm9hcmRTdHJlbmd0aEV2YWx1YXRpb24oXG4gIGNvbnRleHQ6IEJvYXJkU3RyZW5ndGhSdW5Db250ZXh0LFxuKTogQm9hcmRTdHJlbmd0aFJlc3VsdCB7XG4gIGNvbnN0IHByZWNpc2lvbiA9IGNvbnRleHQub3B0aW9ucy5wcmVjaXNpb24gPz8gJ3N0YW5kYXJkJztcbiAgY29uc3QgcHJvZmlsZSA9IFBSRUNJU0lPTl9QUk9GSUxFU1twcmVjaXNpb25dO1xuICBjb25zdCBtaW5TdGF0ID0gbm9ybWFsaXplUG9zaXRpdmVJbnRlZ2VyKGNvbnRleHQub3B0aW9ucy5taW5TdGF0ID8/IDEpO1xuICBjb25zdCBleHBsaWNpdE1heFN0YXQgPSBjb250ZXh0Lm9wdGlvbnMubWF4U3RhdCA9PT0gdW5kZWZpbmVkXG4gICAgPyBudWxsXG4gICAgOiBNYXRoLm1heChtaW5TdGF0LCBub3JtYWxpemVQb3NpdGl2ZUludGVnZXIoY29udGV4dC5vcHRpb25zLm1heFN0YXQpKTtcbiAgY29uc3QgcG9pbnRzQnlTdGF0ID0gbmV3IE1hcDxudW1iZXIsIE11dGFibGVQb2ludD4oKTtcbiAgbGV0IGJhdHRsZXNDb21wbGV0ZWQgPSAwO1xuICBsZXQgY29tcGxldGVkU3RhdHMgPSAwO1xuICBsZXQgcmVmaW5lbWVudFJvdW5kID0gMDtcbiAgbGV0IHJhbmdlVHJ1bmNhdGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0UG9pbnQgPSAoc3RhdDogbnVtYmVyKTogTXV0YWJsZVBvaW50ID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IHBvaW50c0J5U3RhdC5nZXQoc3RhdCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxuICAgIGNvbnN0IHBvaW50OiBNdXRhYmxlUG9pbnQgPSB7IHN0YXQsIHdpbnM6IDAsIGRyYXdzOiAwLCBsb3NzZXM6IDAsIGJhdHRsZXM6IDAgfTtcbiAgICBwb2ludHNCeVN0YXQuc2V0KHN0YXQsIHBvaW50KTtcbiAgICByZXR1cm4gcG9pbnQ7XG4gIH07XG5cbiAgY29uc3Qgc2ltdWxhdGVQb2ludCA9IChwb2ludDogTXV0YWJsZVBvaW50LCBjb3VudDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlQm9hcmRTdHJlbmd0aE1hdGNoQ29uZmlnKFxuICAgICAgY29udGV4dC5iYXNlQ29uZmlnLFxuICAgICAgY29udGV4dC5vcHRpb25zLnNpZGUsXG4gICAgICBwb2ludC5zdGF0LFxuICAgICAgY291bnQsXG4gICAgICAoY29udGV4dC5vcHRpb25zLnNlZWQgPz8gY29udGV4dC5iYXNlQ29uZmlnLnNlZWQgPz8gREVGQVVMVF9TRUVEKSArXG4gICAgICAgIHBvaW50LnN0YXQgKiAxMDAwMCArXG4gICAgICAgIHBvaW50LmJhdHRsZXMsXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LnNpbXVsYXRlQmF0Y2goY29uZmlnKTtcbiAgICBjb25zdCBjYW5kaWRhdGVXaW5zID1cbiAgICAgIGNvbnRleHQub3B0aW9ucy5zaWRlID09PSAncGxheWVyJ1xuICAgICAgICA/IHJlc3VsdC5wbGF5ZXJXaW5zXG4gICAgICAgIDogcmVzdWx0Lm9wcG9uZW50V2lucztcbiAgICBjb25zdCBjYW5kaWRhdGVMb3NzZXMgPVxuICAgICAgY29udGV4dC5vcHRpb25zLnNpZGUgPT09ICdwbGF5ZXInXG4gICAgICAgID8gcmVzdWx0Lm9wcG9uZW50V2luc1xuICAgICAgICA6IHJlc3VsdC5wbGF5ZXJXaW5zO1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNhbmRpZGF0ZVdpbnMgKyBjYW5kaWRhdGVMb3NzZXMgKyByZXN1bHQuZHJhd3M7XG5cbiAgICBwb2ludC53aW5zICs9IGNhbmRpZGF0ZVdpbnM7XG4gICAgcG9pbnQubG9zc2VzICs9IGNhbmRpZGF0ZUxvc3NlcztcbiAgICBwb2ludC5kcmF3cyArPSByZXN1bHQuZHJhd3M7XG4gICAgcG9pbnQuYmF0dGxlcyArPSBjb21wbGV0ZWQ7XG4gICAgYmF0dGxlc0NvbXBsZXRlZCArPSBjb21wbGV0ZWQ7XG4gIH07XG5cbiAgbGV0IG1heFN0YXQgPSBleHBsaWNpdE1heFN0YXQgPz8gTWF0aC5tYXgobWluU3RhdCwgQVVUT19JTklUSUFMX01BWF9TVEFUKTtcbiAgaWYgKGV4cGxpY2l0TWF4U3RhdCA9PT0gbnVsbCkge1xuICAgIGxldCBwcm9iZVN0YXQgPSBtYXhTdGF0O1xuICAgIGxldCBjb25zZWN1dGl2ZU1pc3NlcyA9IDA7XG4gICAgbGV0IHNhd1NpZ25hbCA9IGZhbHNlO1xuICAgIGxldCBjb3ZlcmFnZUJvdW5kYXJ5ID0gbWF4U3RhdDtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY29udGV4dC5zaG91bGRBYm9ydD8uKCkpIHtcbiAgICAgICAgY29uc3QgcGFydGlhbCA9IFsuLi5wb2ludHNCeVN0YXQudmFsdWVzKCldLnNvcnQoKGEsIGIpID0+IGEuc3RhdCAtIGIuc3RhdCk7XG4gICAgICAgIHJldHVybiBidWlsZFJlc3VsdChwYXJ0aWFsLCBjb250ZXh0Lm9wdGlvbnMuc2lkZSwgcHJlY2lzaW9uLCBtaW5TdGF0LCBwcm9iZVN0YXQsIHRydWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvaW50ID0gZ2V0UG9pbnQocHJvYmVTdGF0KTtcbiAgICAgIHNpbXVsYXRlUG9pbnQocG9pbnQsIHByb2ZpbGUuaW5pdGlhbEJhdHRsZXMpO1xuICAgICAgY29uc3QgaGFzU2lnbmFsID0gZ2V0RXhwZWN0ZWRTY29yZShwb2ludCkgPiBBVVRPX1NJR05BTF9USFJFU0hPTEQ7XG4gICAgICBpZiAoaGFzU2lnbmFsKSB7XG4gICAgICAgIHNhd1NpZ25hbCA9IHRydWU7XG4gICAgICAgIGNvbnNlY3V0aXZlTWlzc2VzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNlY3V0aXZlTWlzc2VzICs9IDE7XG4gICAgICAgIGlmIChzYXdTaWduYWwgJiYgY29uc2VjdXRpdmVNaXNzZXMgPT09IDEpIHtcbiAgICAgICAgICBjb3ZlcmFnZUJvdW5kYXJ5ID0gcHJvYmVTdGF0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250ZXh0Lm9uUHJvZ3Jlc3M/Lih7XG4gICAgICAgIHBoYXNlOiAnc2NvdXQnLCBjb21wbGV0ZWRTdGF0czogMCwgdG90YWxTdGF0czogMCwgY3VycmVudFN0YXQ6IHByb2JlU3RhdCxcbiAgICAgICAgYmF0dGxlc0NvbXBsZXRlZCwgbWF4aW11bUJhdHRsZXM6IDAsIHJlZmluZW1lbnRSb3VuZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvYmVTdGF0ID49IEFVVE9fTUFYX1NUQVQpIHtcbiAgICAgICAgcmFuZ2VUcnVuY2F0ZWQgPSBoYXNTaWduYWw7XG4gICAgICAgIG1heFN0YXQgPSByYW5nZVRydW5jYXRlZCA/IEFVVE9fTUFYX1NUQVQgOiBjb3ZlcmFnZUJvdW5kYXJ5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHByb2JlU3RhdCA9IE1hdGgubWluKFxuICAgICAgICBBVVRPX01BWF9TVEFULFxuICAgICAgICBwcm9iZVN0YXQgPCAxMDAwID8gcHJvYmVTdGF0ICsgMTAwIDogcHJvYmVTdGF0ICogMixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhdHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXhTdGF0IC0gbWluU3RhdCArIDEgfSwgKF8sIGluZGV4KSA9PiBtaW5TdGF0ICsgaW5kZXgpO1xuICBjb25zdCBwb2ludHMgPSBzdGF0cy5tYXAoZ2V0UG9pbnQpO1xuICBjb25zdCBtYXhpbXVtQmF0dGxlcyA9IHN0YXRzLmxlbmd0aCAqIHByb2ZpbGUubWF4QmF0dGxlc1BlclN0YXQ7XG5cbiAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICBpZiAoY29udGV4dC5zaG91bGRBYm9ydD8uKCkpIHtcbiAgICAgIHJldHVybiBidWlsZFJlc3VsdChwb2ludHMsIGNvbnRleHQub3B0aW9ucy5zaWRlLCBwcmVjaXNpb24sIG1pblN0YXQsIG1heFN0YXQsIHRydWUsIHJhbmdlVHJ1bmNhdGVkKTtcbiAgICB9XG4gICAgaWYgKHBvaW50LmJhdHRsZXMgPT09IDApIHtcbiAgICAgIHNpbXVsYXRlUG9pbnQocG9pbnQsIHByb2ZpbGUuaW5pdGlhbEJhdHRsZXMpO1xuICAgIH1cbiAgICBjb21wbGV0ZWRTdGF0cyArPSAxO1xuICAgIGNvbnRleHQub25Qcm9ncmVzcz8uKHtcbiAgICAgIHBoYXNlOiAnc2NhbicsXG4gICAgICBjb21wbGV0ZWRTdGF0cyxcbiAgICAgIHRvdGFsU3RhdHM6IHN0YXRzLmxlbmd0aCxcbiAgICAgIGN1cnJlbnRTdGF0OiBwb2ludC5zdGF0LFxuICAgICAgYmF0dGxlc0NvbXBsZXRlZCxcbiAgICAgIG1heGltdW1CYXR0bGVzLFxuICAgICAgcmVmaW5lbWVudFJvdW5kLFxuICAgIH0pO1xuICB9XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gcG9pbnRzLmZpbHRlcihcbiAgICAgIChwb2ludCkgPT5cbiAgICAgICAgcG9pbnQuYmF0dGxlcyA8IHByb2ZpbGUubWF4QmF0dGxlc1BlclN0YXQgJiZcbiAgICAgICAgZXN0aW1hdGVTdGFuZGFyZEVycm9yKHBvaW50KSA+IHByb2ZpbGUudGFyZ2V0U3RhbmRhcmRFcnJvcixcbiAgICApO1xuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmVmaW5lbWVudFJvdW5kICs9IDE7XG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBpZiAoY29udGV4dC5zaG91bGRBYm9ydD8uKCkpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkUmVzdWx0KHBvaW50cywgY29udGV4dC5vcHRpb25zLnNpZGUsIHByZWNpc2lvbiwgbWluU3RhdCwgbWF4U3RhdCwgdHJ1ZSwgcmFuZ2VUcnVuY2F0ZWQpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVtYWluaW5nID0gcHJvZmlsZS5tYXhCYXR0bGVzUGVyU3RhdCAtIHBvaW50LmJhdHRsZXM7XG4gICAgICBzaW11bGF0ZVBvaW50KHBvaW50LCBNYXRoLm1pbihwcm9maWxlLmJhdGNoU2l6ZSwgcmVtYWluaW5nKSk7XG4gICAgICBjb250ZXh0Lm9uUHJvZ3Jlc3M/Lih7XG4gICAgICAgIHBoYXNlOiAncmVmaW5lJyxcbiAgICAgICAgY29tcGxldGVkU3RhdHMsXG4gICAgICAgIHRvdGFsU3RhdHM6IHN0YXRzLmxlbmd0aCxcbiAgICAgICAgY3VycmVudFN0YXQ6IHBvaW50LnN0YXQsXG4gICAgICAgIGJhdHRsZXNDb21wbGV0ZWQsXG4gICAgICAgIG1heGltdW1CYXR0bGVzLFxuICAgICAgICByZWZpbmVtZW50Um91bmQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb250ZXh0Lm9uUHJvZ3Jlc3M/Lih7XG4gICAgcGhhc2U6ICdjb21wbGV0ZScsXG4gICAgY29tcGxldGVkU3RhdHM6IHN0YXRzLmxlbmd0aCxcbiAgICB0b3RhbFN0YXRzOiBzdGF0cy5sZW5ndGgsXG4gICAgY3VycmVudFN0YXQ6IG1heFN0YXQsXG4gICAgYmF0dGxlc0NvbXBsZXRlZCxcbiAgICBtYXhpbXVtQmF0dGxlcyxcbiAgICByZWZpbmVtZW50Um91bmQsXG4gIH0pO1xuXG4gIHJldHVybiBidWlsZFJlc3VsdChcbiAgICBwb2ludHMsXG4gICAgY29udGV4dC5vcHRpb25zLnNpZGUsXG4gICAgcHJlY2lzaW9uLFxuICAgIG1pblN0YXQsXG4gICAgbWF4U3RhdCxcbiAgICBmYWxzZSxcbiAgICByYW5nZVRydW5jYXRlZCxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkU3RyZW5ndGhNYXRjaENvbmZpZyhcbiAgYmFzZUNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZyxcbiAgc2lkZTogQm9hcmRTdHJlbmd0aFNpZGUsXG4gIHN0YXQ6IG51bWJlcixcbiAgc2ltdWxhdGlvbkNvdW50OiBudW1iZXIsXG4gIHNlZWQ6IG51bWJlcixcbik6IFNpbXVsYXRpb25Db25maWcge1xuICBjb25zdCBjb25maWcgPSBkZWVwQ2xvbmUoYmFzZUNvbmZpZyk7XG4gIGNvbnN0IGJlbmNobWFya1BldHMgPSBjcmVhdGVCZW5jaG1hcmtQZXRzKHN0YXQpO1xuICBjb25zdCBjYW5kaWRhdGVQYWNrID1cbiAgICBzaWRlID09PSAncGxheWVyJyA/IGNvbmZpZy5wbGF5ZXJQYWNrIDogY29uZmlnLm9wcG9uZW50UGFjaztcblxuICBpZiAoc2lkZSA9PT0gJ3BsYXllcicpIHtcbiAgICBjb25maWcub3Bwb25lbnRQZXRzID0gYmVuY2htYXJrUGV0cztcbiAgICBjb25maWcub3Bwb25lbnRQYWNrID0gY2FuZGlkYXRlUGFjaztcbiAgICBjb25maWcub3Bwb25lbnRUb3kgPSBudWxsO1xuICAgIGNvbmZpZy5vcHBvbmVudEhhcmRUb3kgPSBudWxsO1xuICAgIGNvbmZpZy5vcHBvbmVudEdvbGRTcGVudCA9IDA7XG4gICAgY29uZmlnLm9wcG9uZW50Um9sbEFtb3VudCA9IDA7XG4gICAgY29uZmlnLm9wcG9uZW50U3VtbW9uZWRBbW91bnQgPSAwO1xuICAgIGNvbmZpZy5vcHBvbmVudExldmVsM1NvbGQgPSAwO1xuICAgIGNvbmZpZy5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50ID0gMDtcbiAgICBjb25maWcub3Bwb25lbnRMb3N0TGFzdEJhdHRsZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5wbGF5ZXJQZXRzID0gYmVuY2htYXJrUGV0cztcbiAgICBjb25maWcucGxheWVyUGFjayA9IGNhbmRpZGF0ZVBhY2s7XG4gICAgY29uZmlnLnBsYXllclRveSA9IG51bGw7XG4gICAgY29uZmlnLnBsYXllckhhcmRUb3kgPSBudWxsO1xuICAgIGNvbmZpZy5wbGF5ZXJHb2xkU3BlbnQgPSAwO1xuICAgIGNvbmZpZy5wbGF5ZXJSb2xsQW1vdW50ID0gMDtcbiAgICBjb25maWcucGxheWVyU3VtbW9uZWRBbW91bnQgPSAwO1xuICAgIGNvbmZpZy5wbGF5ZXJMZXZlbDNTb2xkID0gMDtcbiAgICBjb25maWcucGxheWVyVHJhbnNmb3JtYXRpb25BbW91bnQgPSAwO1xuICAgIGNvbmZpZy5wbGF5ZXJMb3N0TGFzdEJhdHRsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29uZmlnLnNpbXVsYXRpb25Db3VudCA9IHNpbXVsYXRpb25Db3VudDtcbiAgY29uZmlnLnNlZWQgPSBNYXRoLnRydW5jKHNlZWQpO1xuICBjb25maWcubG9nc0VuYWJsZWQgPSBmYWxzZTtcbiAgY29uZmlnLm1heExvZ2dlZEJhdHRsZXMgPSAwO1xuICBjb25maWcuY2FwdHVyZVJhbmRvbURlY2lzaW9ucyA9IGZhbHNlO1xuICBjb25maWcucmFuZG9tRGVjaXNpb25PdmVycmlkZXMgPSBbXTtcbiAgY29uZmlnLm9wdGltaXplRGV0ZXJtaW5pc3RpY1NpbXVsYXRpb25zID0gZmFsc2U7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZFN0cmVuZ3RoRmluZ2VycHJpbnQoXG4gIGJhc2VDb25maWc6IFNpbXVsYXRpb25Db25maWcsXG4gIHNpZGU6IEJvYXJkU3RyZW5ndGhTaWRlLFxuKTogc3RyaW5nIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGNyZWF0ZUJvYXJkU3RyZW5ndGhNYXRjaENvbmZpZyhcbiAgICBiYXNlQ29uZmlnLFxuICAgIHNpZGUsXG4gICAgMSxcbiAgICAxLFxuICAgIERFRkFVTFRfU0VFRCxcbiAgKTtcbiAgbm9ybWFsaXplZC5zZWVkID0gbnVsbDtcbiAgbm9ybWFsaXplZC5zaW11bGF0aW9uQ291bnQgPSAxO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJlbmNobWFya1BldHMoc3RhdDogbnVtYmVyKTogUGV0Q29uZmlnW10ge1xuICBjb25zdCBub3JtYWxpemVkU3RhdCA9IG5vcm1hbGl6ZVBvc2l0aXZlSW50ZWdlcihzdGF0KTtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4ge1xuICAgIGNvbnN0IHBldDogUGV0Q29uZmlnID0ge1xuICAgICAgbmFtZTogJ0JlbmNobWFyayBQZXQnLFxuICAgICAgYmVuY2htYXJrOiB0cnVlLFxuICAgICAgYXR0YWNrOiBub3JtYWxpemVkU3RhdCxcbiAgICAgIGhlYWx0aDogbm9ybWFsaXplZFN0YXQsXG4gICAgICBleHA6IDAsXG4gICAgICBlcXVpcG1lbnQ6IG51bGwsXG4gICAgICBtYW5hOiAwLFxuICAgIH07XG4gICAgcmV0dXJuIHBldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVzdWx0KFxuICBtdXRhYmxlUG9pbnRzOiBNdXRhYmxlUG9pbnRbXSxcbiAgc2lkZTogQm9hcmRTdHJlbmd0aFNpZGUsXG4gIHByZWNpc2lvbjogQm9hcmRTdHJlbmd0aFByZWNpc2lvbixcbiAgbWluU3RhdDogbnVtYmVyLFxuICBtYXhTdGF0OiBudW1iZXIsXG4gIGFib3J0ZWQ6IGJvb2xlYW4sXG4gIHJhbmdlVHJ1bmNhdGVkOiBib29sZWFuLFxuKTogQm9hcmRTdHJlbmd0aFJlc3VsdCB7XG4gIGNvbnN0IHJhd1Njb3JlcyA9IG11dGFibGVQb2ludHMubWFwKChwb2ludCkgPT4gZ2V0RXhwZWN0ZWRTY29yZShwb2ludCkpO1xuICBjb25zdCBwb2ludHMgPSBtdXRhYmxlUG9pbnRzLm1hcDxCb2FyZFN0cmVuZ3RoUG9pbnQ+KChwb2ludCwgaW5kZXgpID0+ICh7XG4gICAgLi4ucG9pbnQsXG4gICAgZXhwZWN0ZWRTY29yZTogcmF3U2NvcmVzW2luZGV4XSxcbiAgICBzbW9vdGhlZFNjb3JlOiByYXdTY29yZXNbaW5kZXhdLFxuICB9KSk7XG4gIGNvbnN0IHNjb3JlID0gcmF3U2NvcmVzLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApO1xuICBjb25zdCB2YXJpYW5jZU9mU2NvcmUgPSBtdXRhYmxlUG9pbnRzLnJlZHVjZSgoc3VtLCBwb2ludCkgPT4ge1xuICAgIGNvbnN0IHN0YW5kYXJkRXJyb3IgPSBlc3RpbWF0ZVN0YW5kYXJkRXJyb3IocG9pbnQpO1xuICAgIHJldHVybiBzdW0gKyBzdGFuZGFyZEVycm9yICogc3RhbmRhcmRFcnJvcjtcbiAgfSwgMCk7XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnQlMxJyxcbiAgICBzaWRlLFxuICAgIHByZWNpc2lvbixcbiAgICBzY29yZSxcbiAgICBiZW5jaG1hcms1MDogZmluZEJlbmNobWFyazUwKHBvaW50cyksXG4gICAgZXN0aW1hdGVkUHJlY2lzaW9uOTU6IDEuOTYgKiBNYXRoLnNxcnQodmFyaWFuY2VPZlNjb3JlKSxcbiAgICB0b3RhbEJhdHRsZXM6IG11dGFibGVQb2ludHMucmVkdWNlKFxuICAgICAgKHN1bSwgcG9pbnQpID0+IHN1bSArIHBvaW50LmJhdHRsZXMsXG4gICAgICAwLFxuICAgICksXG4gICAgbWluU3RhdCxcbiAgICBtYXhTdGF0LFxuICAgIHBvaW50cyxcbiAgICBhYm9ydGVkLFxuICAgIHJhbmdlVHJ1bmNhdGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFeHBlY3RlZFNjb3JlKHBvaW50OiBNdXRhYmxlUG9pbnQpOiBudW1iZXIge1xuICBpZiAocG9pbnQuYmF0dGxlcyA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiAocG9pbnQud2lucyArIHBvaW50LmRyYXdzICogMC41KSAvIHBvaW50LmJhdHRsZXM7XG59XG5cbmZ1bmN0aW9uIGVzdGltYXRlU3RhbmRhcmRFcnJvcihwb2ludDogTXV0YWJsZVBvaW50KTogbnVtYmVyIHtcbiAgaWYgKHBvaW50LmJhdHRsZXMgPT09IDApIHtcbiAgICByZXR1cm4gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICB9XG4gIGNvbnN0IG1lYW4gPSBnZXRFeHBlY3RlZFNjb3JlKHBvaW50KTtcbiAgY29uc3Qgc2Vjb25kTW9tZW50ID1cbiAgICAocG9pbnQud2lucyArIHBvaW50LmRyYXdzICogMC4yNSkgLyBwb2ludC5iYXR0bGVzO1xuICBjb25zdCBlbXBpcmljYWxWYXJpYW5jZSA9IE1hdGgubWF4KDAsIHNlY29uZE1vbWVudCAtIG1lYW4gKiBtZWFuKTtcbiAgY29uc3Qgc21vb3RoZWRNZWFuID1cbiAgICAocG9pbnQud2lucyArIHBvaW50LmRyYXdzICogMC41ICsgMSkgLyAocG9pbnQuYmF0dGxlcyArIDIpO1xuICBjb25zdCBjb25zZXJ2YXRpdmVWYXJpYW5jZSA9IE1hdGgubWF4KFxuICAgIGVtcGlyaWNhbFZhcmlhbmNlLFxuICAgIHNtb290aGVkTWVhbiAqICgxIC0gc21vb3RoZWRNZWFuKSxcbiAgKTtcbiAgcmV0dXJuIE1hdGguc3FydChjb25zZXJ2YXRpdmVWYXJpYW5jZSAvIHBvaW50LmJhdHRsZXMpO1xufVxuXG5mdW5jdGlvbiBmaW5kQmVuY2htYXJrNTAocG9pbnRzOiBCb2FyZFN0cmVuZ3RoUG9pbnRbXSk6IG51bWJlciB8IG51bGwge1xuICBsZXQgaGlnaGVzdFBhc3NpbmdTdGF0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICBpZiAocG9pbnQuZXhwZWN0ZWRTY29yZSA+PSAwLjUpIHtcbiAgICAgIGhpZ2hlc3RQYXNzaW5nU3RhdCA9IHBvaW50LnN0YXQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBoaWdoZXN0UGFzc2luZ1N0YXQ7XG59XG5cbmZ1bmN0aW9uIGRlZXBDbG9uZTxUPih2YWx1ZTogVCk6IFQge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIGFzIFQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyBNYXRoLnRydW5jKHZhbHVlKSA6IDE7XG4gIHJldHVybiBNYXRoLm1heCgxLCBub3JtYWxpemVkKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBQUE7QUFBQSxFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFDLDRCQUFnRzs7O0FDSXpGLElBQU0sU0FBTixNQUFhO0FBQUEsRUFBYjtBQUdMLGdCQUFlO0FBQ2YsZUFBa0I7QUFDbEIsbUJBQXNCO0FBQ3RCLHVCQUEwQjtBQUMxQixzQkFBYTtBQUNiLG1CQUFVO0FBQ1YscUJBQVk7QUFBQTtBQUFBLEVBQ1osT0FBTyxPQUEyQjtBQUNoQyxXQUFPLENBQUMsS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSSxFQUFFLEtBQUssS0FBSztBQUFBLEVBQzNFO0FBQUEsRUFDQSxPQUFPLE9BQWUsS0FBaUJDLFNBQVEsT0FBYTtBQUMxRCxZQUFRLE9BQU87QUFBQSxNQUNiLEtBQUs7QUFBRyxhQUFLLE9BQU87QUFBSztBQUFBLE1BQ3pCLEtBQUs7QUFBRyxhQUFLLE9BQU87QUFBSztBQUFBLE1BQ3pCLEtBQUs7QUFBRyxhQUFLLE9BQU87QUFBSztBQUFBLE1BQ3pCLEtBQUs7QUFBRyxhQUFLLE9BQU87QUFBSztBQUFBLE1BQ3pCLEtBQUs7QUFBRyxhQUFLLE9BQU87QUFBSztBQUFBLE1BQ3pCO0FBQVM7QUFBQSxJQUNYO0FBQ0EsUUFBSSxLQUFLO0FBQUUsVUFBSSxTQUFTO0FBQU0sVUFBSSxnQkFBZ0I7QUFBQSxJQUFPO0FBQUEsRUFDM0Q7QUFBQSxFQUNBLElBQUksV0FBa0I7QUFDcEIs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QUNGO0FBRU8sU0FBUyxxQ0FDZCxpQkFDQSxZQUFvQyxTQUNwQyxRQUE2QixDQUFDLEdBQ1I7QUFDdEIsUUFBTSxhQUFhLDBDQUEwQyxpQkFBaUIsQ0FBQztBQUMvRSxRQUFNLFNBQVMsSUFBSSx1QkFBdUI7QUFDMUMsUUFBTSxXQUFXLENBQUMsU0FDaEIsMkJBQTJCO0FBQUEsSUFDekI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0EsU0FBUyxNQUFNO0FBQUEsTUFDZixTQUFTLE1BQU07QUFBQSxJQUNqQjtBQUFBLElBQ0EsZUFBZSxDQUFDLFdBQVcsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUM5QyxDQUFDO0FBRUgsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLFFBQVEsU0FBUyxRQUFRO0FBQUEsSUFDekIsVUFBVSxTQUFTLFVBQVU7QUFBQSxFQUMvQjtBQUNGO0FBRU8sU0FBUyw2QkFDZCxpQkFDQSxTQUNRO0FBQ1IsUUFBTSxTQUFTLElBQUksaUJBQWlCO0FBQ3BDLFFBQU0sb0JBQW9CLDJCQUEyQixPQUFPO0FBRTVELFFBQU0sbUJBQW1CO0FBSXpCLFFBQU0saUJBQWlCLGlCQUFpQjtBQUN4QyxRQUFNLFlBQVksT0FBTyxVQUFVLGVBQWUsS0FBSyxrQkFBa0IsUUFBUTtBQUVqRixtQkFBaUIsU0FBUztBQUFBLElBQ3hCLFVBQVU7QUFBQSxNQUNSLFFBQVEsa0JBQWtCO0FBQUEsTUFDMUIsVUFBVSxrQkFBa0I7QUFBQSxJQUM5QjtBQUFBLEVBQ0Y7QUFFQSxNQUFJO0FBQ0YsVUFBTSxXQUFXLE9BQU8sdUJBQXVCLGVBQWU7QUFDOUQsV0FBTyxTQUFTLFFBQVEsT0FBTyxLQUFLO0FBQUEsRUFDdEMsVUFBRTtBQUNBLFFBQUksV0FBVztBQUNiLHVCQUFpQixTQUFTO0FBQUEsSUFDNUIsT0FBTztBQUNMLGFBQU8saUJBQWlCO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbImVuZ2luZUhlYWRsZXNzU2ltdWxhdGlvbiIsICJpbXBvcnRfc2FwX2JhdHRsZV9lbmdpbmUiLCAiX2luaXQiLCAicGV0TmFtZXMiLCAidG95TmFtZXMiLCAiZXF1aXBtZW50TmFtZXMiLCAicmVnZXgiLCAibWF0Y2giLCAicGV0TmFtZXMiLCAidG95TmFtZXMiLCAiZXF1aXBtZW50TmFtZXMiLCAicGV0cyIsICJpbXBvcnRfc2FwX2JhdHRsZV9lbmdpbmUiLCAibnVtZXJpYyIsICJ0b0Zpbml0ZU51bWJlciIsICJwZXRzIiwgInRvRmluaXRlTnVtYmVyIiwgImltcG9ydF9zYXBfYmF0dGxlX2VuZ2luZSIsICJ0b051bWJlck9yRmFsbGJhY2siXQp9Cg==
