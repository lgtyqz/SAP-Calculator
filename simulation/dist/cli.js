#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// simulation/cli.ts
var import_fs = __toESM(require("fs"));

// src/app/integrations/simulation/battle-engine.ts
var import_sap_battle_engine2 = require("sap-battle-engine");

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

// simulation/simulate.ts
var import_sap_battle_engine3 = require("sap-battle-engine");

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
var replayFoodEntries = food.default ?? food;
var REPLAY_PERK_FOOD_NAMES_BY_SPELL_ID = new Map(
  replayFoodEntries.filter(
    (entry) => entry?.Id !== null && entry?.Id !== void 0 && typeof entry?.Name === "string" && /^Give one pet the .+ perk\.$/i.test(entry?.Ability ?? "")
  ).map((entry) => [String(entry.Id), entry.Name])
);
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

// simulation/simulate.ts
var import_sap_battle_engine4 = require("sap-battle-engine");

// src/app/integrations/team-presets.defaults.ts
function getDefaultTeams() {
  return [
    {
      id: "default-max-damage",
      name: "1000 Mana",
      createdAt: Date.now(),
      toyName: "Nutcracker",
      toyLevel: 3,
      pets: Array.from({ length: 5 }, () => ({
        name: "Sea Serpent",
        attack: 50,
        health: 50,
        exp: 5,
        equipment: { name: "Coconut" },
        belugaSwallowedPet: null,
        sarcasticFringeheadSwallowedPet: null,
        mana: 50,
        triggersConsumed: 0,
        abominationSwallowedPet1: null,
        abominationSwallowedPet2: null,
        abominationSwallowedPet3: null,
        abominationSwallowedPet1TimesHurt: 0,
        abominationSwallowedPet2TimesHurt: 0,
        abominationSwallowedPet3TimesHurt: 0,
        battlesFought: 0,
        timesHurt: 0,
        equipmentUses: null
      }))
    },
    {
      id: "default-great-six",
      name: "The Great Six",
      createdAt: Date.now(),
      toyName: "Evil Book",
      toyLevel: 3,
      pets: Array.from({ length: 5 }, () => ({
        name: "Beluga Whale",
        attack: 50,
        health: 50,
        exp: 5,
        equipment: { name: "White Okra" },
        belugaSwallowedPet: "Great One",
        sarcasticFringeheadSwallowedPet: null,
        mana: 50,
        triggersConsumed: 0,
        abominationSwallowedPet1: null,
        abominationSwallowedPet2: null,
        abominationSwallowedPet3: null,
        abominationSwallowedPet1TimesHurt: 0,
        abominationSwallowedPet2TimesHurt: 0,
        abominationSwallowedPet3TimesHurt: 0,
        battlesFought: 0,
        timesHurt: 0,
        equipmentUses: null
      }))
    },
    {
      id: "default-ability-removal",
      name: "Orca Scam",
      createdAt: Date.now(),
      playerToyName: "Pandoras Box",
      playerToyLevel: 1,
      opponentToyName: null,
      opponentToyLevel: 1,
      playerHardToy: null,
      playerHardToyLevel: 1,
      opponentHardToy: null,
      opponentHardToyLevel: 1,
      turn: 11,
      playerGoldSpent: 10,
      opponentGoldSpent: 10,
      allPets: true,
      tokenPets: true,
      komodoShuffle: false,
      mana: true,
      plainCopies: false,
      triggersConsumed: false,
      changeEquipmentUses: false,
      playerRollAmount: 3,
      opponentRollAmount: 1,
      playerLevel3Sold: 0,
      opponentLevel3Sold: 0,
      playerSummonedAmount: 0,
      opponentSummonedAmount: 0,
      playerTransformationAmount: 100,
      opponentTransformationAmount: 100,
      pets: [
        {
          name: "Giant Pangasius",
          attack: 49,
          health: 1,
          exp: 1,
          equipment: null,
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: null,
          abominationSwallowedPet2: null,
          abominationSwallowedPet3: null,
          abominationSwallowedPet1Level: 1,
          abominationSwallowedPet2Level: 1,
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 1,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Orca",
          abominationSwallowedPet2: "Behemoth",
          abominationSwallowedPet3: "Rat",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 50,
          health: 1,
          exp: 5,
          equipment: { name: "Silly" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Rat",
          abominationSwallowedPet2: "Phoenix",
          abominationSwallowedPet3: "Giant Pangasius",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 1,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Rat",
          abominationSwallowedPet3: "Albatross",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Cashew Nut" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Panther",
          abominationSwallowedPet3: "Guineafowl",
          abominationSwallowedPet1Level: 1,
          abominationSwallowedPet2Level: 1,
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        }
      ]
    },
    {
      id: "default-sob-snipes",
      name: "SoB Snipes",
      createdAt: Date.now(),
      toyName: "Nutcracker",
      toyLevel: 3,
      pets: Array.from({ length: 5 }, () => ({
        name: "Leopard",
        attack: 50,
        health: 50,
        exp: 5,
        equipment: { name: "Churros" },
        belugaSwallowedPet: null,
        sarcasticFringeheadSwallowedPet: null,
        mana: 50,
        triggersConsumed: 0,
        abominationSwallowedPet1: null,
        abominationSwallowedPet2: null,
        abominationSwallowedPet3: null,
        battlesFought: 0,
        timesHurt: 0,
        equipmentUses: null
      }))
    },
    {
      id: "default-infinite-damage",
      name: "Infinite Damage",
      createdAt: Date.now(),
      toyName: "Nutcracker",
      toyLevel: 1,
      rollAmount: 47,
      transformationAmount: 200,
      pets: [
        {
          name: "Giant Pangasius",
          attack: 50,
          health: 1,
          exp: 5,
          equipment: { name: "Mushroom" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: null,
          abominationSwallowedPet2: null,
          abominationSwallowedPet3: null,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2: "Leopard",
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3: "Beluga Whale",
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet3BelugaSwallowedPet: "Giant Pangasius",
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Cashew Nut" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2: "Leopard",
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3: "Beluga Whale",
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet3BelugaSwallowedPet: "Nessie",
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2: "Leopard",
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3: "Sabertooth Tiger",
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 25,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2: "Leopard",
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3: "Beluga Whale",
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet3BelugaSwallowedPet: "Slug",
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        }
      ]
    },
    {
      id: "default-layers",
      name: "Layers",
      createdAt: Date.now(),
      playerToyName: "Nutcracker",
      playerToyLevel: 3,
      opponentToyName: "Nutcracker",
      opponentToyLevel: 3,
      playerHardToy: null,
      playerHardToyLevel: 1,
      opponentHardToy: null,
      opponentHardToyLevel: 1,
      turn: 13,
      playerGoldSpent: 13,
      opponentGoldSpent: 13,
      allPets: true,
      tokenPets: true,
      komodoShuffle: false,
      mana: true,
      plainCopies: false,
      triggersConsumed: false,
      changeEquipmentUses: false,
      playerRollAmount: 1e3,
      opponentRollAmount: 1e3,
      playerLevel3Sold: 1e3,
      opponentLevel3Sold: 1e3,
      playerSummonedAmount: 1e3,
      opponentSummonedAmount: 1e3,
      playerTransformationAmount: 1e3,
      opponentTransformationAmount: 1e3,
      pets: [
        {
          name: "Giant Pangasius",
          attack: 50,
          health: 1,
          exp: 5,
          equipment: { name: "Mushroom" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: null,
          abominationSwallowedPet2: null,
          abominationSwallowedPet3: null,
          abominationSwallowedPet1Level: 1,
          abominationSwallowedPet2Level: 1,
          abominationSwallowedPet3Level: 1,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 0,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Rat",
          abominationSwallowedPet3: "Sabertooth Tiger",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 50,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Cashew Nut" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Guineafowl",
          abominationSwallowedPet3: "Vaquita",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 1,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 50,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: 1
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Rat",
          abominationSwallowedPet3: "Vaquita",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 50,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: 1
        },
        {
          name: "Abomination",
          attack: 100,
          health: 100,
          exp: 5,
          equipment: { name: "Churros" },
          belugaSwallowedPet: null,
          sarcasticFringeheadSwallowedPet: null,
          mana: 50,
          triggersConsumed: 0,
          abominationSwallowedPet1: "Behemoth",
          abominationSwallowedPet2: "Rat",
          abominationSwallowedPet3: "Sabertooth Tiger",
          abominationSwallowedPet1Level: 3,
          abominationSwallowedPet2Level: 3,
          abominationSwallowedPet3Level: 3,
          abominationSwallowedPet1TimesHurt: 0,
          abominationSwallowedPet2TimesHurt: 0,
          abominationSwallowedPet3TimesHurt: 50,
          battlesFought: 0,
          timesHurt: 0,
          equipmentUses: null
        }
      ]
    }
  ];
}

// simulation/evolution.ts
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function parseNumber(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return parsed;
}
function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}
function normalizePet(pet) {
  if (!isRecord(pet)) {
    return null;
  }
  const name = typeof pet.name === "string" ? pet.name : "";
  if (!name.trim()) {
    return null;
  }
  const normalized = { ...pet, name };
  if ("equipment" in normalized) {
    const rawEquipment = normalized.equipment;
    if (typeof rawEquipment === "string") {
      normalized.equipment = rawEquipment.trim() ? { name: rawEquipment.trim() } : null;
    } else if (isRecord(rawEquipment)) {
      const equipmentName = typeof rawEquipment.name === "string" ? rawEquipment.name.trim() : "";
      normalized.equipment = equipmentName ? { name: equipmentName } : null;
    } else {
      normalized.equipment = null;
    }
  }
  return normalized;
}
function normalizePetList(pets2, targetLength = 5) {
  const list = Array.isArray(pets2) ? pets2 : [];
  const normalized = list.slice(0, targetLength).map((pet) => normalizePet(pet));
  while (normalized.length < targetLength) {
    normalized.push(null);
  }
  return normalized;
}
function normalizeTeamSide(input) {
  const side = isRecord(input) ? input : {};
  return {
    pack: typeof side.pack === "string" && side.pack.trim() ? side.pack.trim() : void 0,
    toy: typeof side.toy === "string" ? side.toy : side.toy === null ? null : void 0,
    toyLevel: side.toyLevel == null ? void 0 : Math.max(1, Math.trunc(parseNumber(side.toyLevel, 1))),
    hardToy: typeof side.hardToy === "string" ? side.hardToy : side.hardToy === null ? null : void 0,
    hardToyLevel: side.hardToyLevel == null ? void 0 : Math.max(1, Math.trunc(parseNumber(side.hardToyLevel, 1))),
    turn: side.turn == null ? void 0 : Math.max(1, Math.trunc(parseNumber(side.turn, 11))),
    goldSpent: side.goldSpent == null ? void 0 : Math.max(0, Math.trunc(parseNumber(side.goldSpent, 10))),
    rollAmount: side.rollAmount == null ? void 0 : Math.max(0, Math.trunc(parseNumber(side.rollAmount, 4))),
    summonedAmount: side.summonedAmount == null ? void 0 : Math.max(0, Math.trunc(parseNumber(side.summonedAmount, 0))),
    level3Sold: side.level3Sold == null ? void 0 : Math.max(0, Math.trunc(parseNumber(side.level3Sold, 0))),
    transformationAmount: side.transformationAmount == null ? void 0 : Math.max(0, Math.trunc(parseNumber(side.transformationAmount, 0))),
    pets: normalizePetList(side.pets)
  };
}
function defaultSimulationConfig() {
  return {
    playerPack: "Turtle",
    opponentPack: "Turtle",
    playerToy: null,
    playerToyLevel: 1,
    playerHardToy: null,
    playerHardToyLevel: 1,
    opponentToy: null,
    opponentToyLevel: 1,
    opponentHardToy: null,
    opponentHardToyLevel: 1,
    turn: 11,
    playerGoldSpent: 10,
    opponentGoldSpent: 10,
    playerRollAmount: 4,
    opponentRollAmount: 4,
    playerSummonedAmount: 0,
    opponentSummonedAmount: 0,
    playerLevel3Sold: 0,
    opponentLevel3Sold: 0,
    playerTransformationAmount: 0,
    opponentTransformationAmount: 0,
    playerPets: [null, null, null, null, null],
    opponentPets: [null, null, null, null, null],
    customPacks: [],
    allPets: false,
    oldStork: false,
    tokenPets: true,
    komodoShuffle: false,
    mana: false,
    seed: null,
    simulationCount: 100,
    logsEnabled: false,
    maxLoggedBattles: 0
  };
}
function mergeBaseConfig(baseConfig) {
  const defaults = defaultSimulationConfig();
  if (!baseConfig) {
    return defaults;
  }
  return {
    ...defaults,
    ...deepClone(baseConfig),
    playerPets: normalizePetList(baseConfig.playerPets ?? defaults.playerPets),
    opponentPets: normalizePetList(baseConfig.opponentPets ?? defaults.opponentPets)
  };
}
function applySideToConfig(config, side, perspective) {
  if (perspective === "player") {
    config.playerPack = side.pack ?? config.playerPack;
    config.playerToy = side.toy === void 0 ? config.playerToy : side.toy;
    config.playerToyLevel = side.toyLevel ?? config.playerToyLevel;
    config.playerHardToy = side.hardToy === void 0 ? config.playerHardToy : side.hardToy;
    config.playerHardToyLevel = side.hardToyLevel ?? config.playerHardToyLevel;
    config.playerGoldSpent = side.goldSpent ?? config.playerGoldSpent;
    config.playerRollAmount = side.rollAmount ?? config.playerRollAmount;
    config.playerSummonedAmount = side.summonedAmount ?? config.playerSummonedAmount;
    config.playerLevel3Sold = side.level3Sold ?? config.playerLevel3Sold;
    config.playerTransformationAmount = side.transformationAmount ?? config.playerTransformationAmount;
    config.playerPets = normalizePetList(side.pets);
  } else {
    config.opponentPack = side.pack ?? config.opponentPack;
    config.opponentToy = side.toy === void 0 ? config.opponentToy : side.toy;
    config.opponentToyLevel = side.toyLevel ?? config.opponentToyLevel;
    config.opponentHardToy = side.hardToy === void 0 ? config.opponentHardToy : side.hardToy;
    config.opponentHardToyLevel = side.hardToyLevel ?? config.opponentHardToyLevel;
    config.opponentGoldSpent = side.goldSpent ?? config.opponentGoldSpent;
    config.opponentRollAmount = side.rollAmount ?? config.opponentRollAmount;
    config.opponentSummonedAmount = side.summonedAmount ?? config.opponentSummonedAmount;
    config.opponentLevel3Sold = side.level3Sold ?? config.opponentLevel3Sold;
    config.opponentTransformationAmount = side.transformationAmount ?? config.opponentTransformationAmount;
    config.opponentPets = normalizePetList(side.pets);
  }
  if (side.turn != null) {
    config.turn = side.turn;
  }
}
function buildMatchConfig(baseConfig, candidate, opponent, simulationsPerMatchup, seed) {
  const config = deepClone(baseConfig);
  applySideToConfig(config, candidate, "player");
  applySideToConfig(config, opponent, "opponent");
  config.simulationCount = simulationsPerMatchup;
  config.seed = seed;
  config.logsEnabled = false;
  config.maxLoggedBattles = 0;
  config.captureRandomDecisions = false;
  return config;
}
function runMatch(config) {
  return (0, import_sap_battle_engine3.runHeadlessSimulation)(config, {
    includeBattles: false,
    enableLogs: false
  });
}
function computeStdDev(values) {
  if (values.length === 0) {
    return 0;
  }
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  return Math.sqrt(Math.max(0, variance));
}
function normalizeWeights(count, weights) {
  if (!weights || weights.length === 0) {
    return Array.from({ length: count }, () => 1 / Math.max(1, count));
  }
  const normalized = Array.from({ length: count }, (_, index) => {
    const value = Number(weights[index]);
    return Number.isFinite(value) && value > 0 ? value : 0;
  });
  const sum = normalized.reduce((acc, value) => acc + value, 0);
  if (sum <= 0) {
    return Array.from({ length: count }, () => 1 / Math.max(1, count));
  }
  return normalized.map((value) => value / sum);
}
function evaluateCandidateVsPool(input) {
  const candidate = normalizeTeamSide(input.candidate);
  const opponents = Array.isArray(input.opponents) ? input.opponents.map((opponent) => normalizeTeamSide(opponent)) : [];
  if (opponents.length === 0) {
    throw new Error("Evaluation requires at least one opponent team.");
  }
  const simulationsPerMatchup = Math.max(
    1,
    Math.trunc(parseNumber(input.simulationsPerMatchup, 100))
  );
  const variancePenalty = Math.max(0, parseNumber(input.variancePenalty, 0.1));
  const baseConfig = mergeBaseConfig(input.baseConfig);
  const weights = normalizeWeights(opponents.length, input.matchupWeights);
  const matchups = [];
  const winRates = [];
  for (let index = 0; index < opponents.length; index += 1) {
    const opponent = opponents[index];
    const matchupSeed = input.seed == null ? null : Math.trunc(parseNumber(input.seed, 0)) + index;
    const config = buildMatchConfig(
      baseConfig,
      candidate,
      opponent,
      simulationsPerMatchup,
      matchupSeed
    );
    const result = runMatch(config);
    const total = Math.max(
      1,
      result.playerWins + result.opponentWins + result.draws
    );
    const winRate = result.playerWins / total;
    winRates.push(winRate);
    matchups.push({
      index,
      wins: result.playerWins,
      losses: result.opponentWins,
      draws: result.draws,
      winRate,
      weightedWinRate: winRate * weights[index],
      weight: weights[index]
    });
  }
  const meanWinRate = winRates.reduce((sum, value) => sum + value, 0) / Math.max(1, winRates.length);
  const weightedWinRate = matchups.reduce(
    (sum, matchup) => sum + matchup.weightedWinRate,
    0
  );
  const stdDev = computeStdDev(winRates);
  const fitness = weightedWinRate - variancePenalty * stdDev;
  const totalBattles = simulationsPerMatchup * opponents.length;
  const confidence95 = 1.96 * Math.sqrt(meanWinRate * (1 - meanWinRate) / Math.max(1, totalBattles));
  return {
    fitness,
    meanWinRate,
    weightedWinRate,
    stdDev,
    variancePenalty,
    confidence95,
    simulationsPerMatchup,
    opponentCount: opponents.length,
    totalBattles,
    ...input.includeMatchups ? { matchups } : {}
  };
}
function evaluateCandidateBatch(input) {
  if (!Array.isArray(input.candidates) || input.candidates.length === 0) {
    return [];
  }
  return input.candidates.map((candidate, index) => {
    const seed = input.seed == null ? null : Math.trunc(parseNumber(input.seed, 0)) + index * 1e5;
    return evaluateCandidateVsPool({
      candidate,
      opponents: input.opponents,
      simulationsPerMatchup: input.simulationsPerMatchup,
      baseConfig: input.baseConfig,
      seed,
      variancePenalty: input.variancePenalty,
      matchupWeights: input.matchupWeights,
      includeMatchups: input.includeMatchups
    });
  });
}
function getDefaultPresetPool() {
  const teams = getDefaultTeams();
  return teams.map((team) => {
    const side = {
      pack: "Turtle",
      toy: team.playerToyName ?? team.toyName ?? team.opponentToyName ?? null,
      toyLevel: team.playerToyLevel ?? team.toyLevel ?? team.opponentToyLevel ?? 1,
      hardToy: team.playerHardToy ?? team.opponentHardToy ?? null,
      hardToyLevel: team.playerHardToyLevel ?? team.opponentHardToyLevel ?? 1,
      turn: team.turn ?? 11,
      goldSpent: team.playerGoldSpent ?? team.opponentGoldSpent ?? 10,
      rollAmount: team.playerRollAmount ?? team.opponentRollAmount ?? 4,
      summonedAmount: team.playerSummonedAmount ?? team.opponentSummonedAmount ?? 0,
      level3Sold: team.playerLevel3Sold ?? team.opponentLevel3Sold ?? 0,
      transformationAmount: team.playerTransformationAmount ?? team.opponentTransformationAmount ?? 0,
      pets: normalizePetList(team.pets)
    };
    return {
      id: team.id,
      name: team.name,
      team: side
    };
  });
}

// simulation/cli.ts
function parseArgs(argv) {
  const options = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--stdin" || arg === "-") {
      options.useStdin = true;
      continue;
    }
    if (arg === "--include-battles") {
      options.includeBattles = true;
      continue;
    }
    if (arg === "--logs") {
      options.enableLogs = true;
      continue;
    }
    if (arg === "--pretty") {
      options.pretty = true;
      continue;
    }
    if (arg === "--input" || arg === "-i") {
      options.inputPath = argv[i + 1];
      i += 1;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
    if (!arg.startsWith("-") && !options.inputPath) {
      options.inputPath = arg;
    }
  }
  return options;
}
function parsePresetPoolArgs(argv) {
  const options = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--pretty") {
      options.pretty = true;
      continue;
    }
    if (arg.startsWith("--limit=")) {
      const raw = Number(arg.split("=").slice(1).join("="));
      options.limit = Number.isFinite(raw) ? Math.max(1, Math.trunc(raw)) : void 0;
      continue;
    }
    if (arg === "--limit") {
      const raw = Number(argv[i + 1]);
      options.limit = Number.isFinite(raw) ? Math.max(1, Math.trunc(raw)) : void 0;
      i += 1;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
  }
  return options;
}
function printHelp() {
  const text = [
    "Usage: sap-calculator-sim [command] [options] [path]",
    "",
    "Commands:",
    "  simulate (default)       Run a single simulation config",
    "  evaluate                 Score candidate vs opponent pool",
    "  evaluate-batch           Score many candidates vs opponent pool",
    "  preset-pool              Output default preset teams for seeding",
    "",
    "Options:",
    "  -i, --input <path>     JSON config file path",
    "  --stdin, -             Read JSON config from stdin",
    "  --include-battles      Include battles array in output",
    "  --logs                 Enable log generation",
    "  --pretty               Pretty-print JSON output",
    "  --limit <n>            (preset-pool) limit output rows",
    "  -h, --help             Show help"
  ];
  console.log(text.join("\n"));
}
function readInput(options) {
  if (options.useStdin) {
    return import_fs.default.readFileSync(0, "utf8");
  }
  if (!options.inputPath) {
    throw new Error("No input provided. Use --stdin or provide a JSON file path.");
  }
  return import_fs.default.readFileSync(options.inputPath, "utf8");
}
function printJson(value, pretty) {
  const output = pretty ? JSON.stringify(value, null, 2) : JSON.stringify(value);
  process.stdout.write(output);
}
function runPresetPool(argv) {
  const options = parsePresetPoolArgs(argv);
  const allTeams = getDefaultPresetPool();
  const teams = options.limit ? allTeams.slice(0, options.limit) : allTeams;
  printJson(
    {
      generatedAt: Date.now(),
      totalTeams: teams.length,
      teams
    },
    options.pretty
  );
}
function runEvaluate(argv) {
  const options = parseArgs(argv);
  const input = readInput(options);
  const payload = JSON.parse(input);
  const result = evaluateCandidateVsPool(payload);
  printJson(result, options.pretty);
}
function runEvaluateBatch(argv) {
  const options = parseArgs(argv);
  const input = readInput(options);
  const payload = JSON.parse(input);
  const result = evaluateCandidateBatch(payload);
  printJson(result, options.pretty);
}
function runSimulate(argv) {
  const options = parseArgs(argv);
  const input = readInput(options);
  const config = JSON.parse(input);
  const result = (0, import_sap_battle_engine3.runHeadlessSimulation)(config, {
    includeBattles: options.includeBattles,
    enableLogs: options.enableLogs
  });
  printJson(result, options.pretty);
}
function run() {
  const argv = process.argv.slice(2);
  if (argv.length === 0) {
    runSimulate(argv);
    return;
  }
  const command = argv[0];
  if (command === "--help" || command === "-h") {
    printHelp();
    return;
  }
  if (command === "preset-pool") {
    runPresetPool(argv.slice(1));
    return;
  }
  if (command === "evaluate") {
    runEvaluate(argv.slice(1));
    return;
  }
  if (command === "evaluate-batch") {
    runEvaluateBatch(argv.slice(1));
    return;
  }
  if (command === "simulate") {
    runSimulate(argv.slice(1));
    return;
  }
  runSimulate(argv);
}
run();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpLnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3NpbXVsYXRpb24vYmF0dGxlLWVuZ2luZS50cyIsICIuLi9zaGltcy50cyIsICIuLi8uLi9zcmMvYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncy50cyIsICIuLi8uLi9zcmMvYXBwL3J1bnRpbWUvYXNzZXQtY2F0YWxvZy50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9lcXVpcG1lbnQvZXF1aXBtZW50LWNhdGVnb3JpZXMudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvbG9nL2xvZy1pbmxpbmUtaWNvbnMudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvbG9nL2xvZy1tZXJnZS11dGlscy50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9sb2cvbG9nLWJvYXJkLXJlbmRlci50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9sb2cuc2VydmljZS50cyIsICIuLi9zaW11bGF0ZS50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy9yZXBsYXkvcmVwbGF5LWNhbGMtc2NoZW1hLnRzIiwgIi4uLy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3JlcGxheS9yZXBsYXktY2FsYy1wYXJzZXItdXRpbHMudHMiLCAiLi4vLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvcmVwbGF5L3JlcGxheS1jYWxjLXBhcnNlci50cyIsICIuLi8uLi9zcmMvYXBwL2ludGVncmF0aW9ucy90ZWFtLXByZXNldHMuZGVmYXVsdHMudHMiLCAiLi4vZXZvbHV0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgcnVuSGVhZGxlc3NTaW11bGF0aW9uIH0gZnJvbSAnLi9zaW11bGF0ZSc7XG5pbXBvcnQgeyBTaW11bGF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vc3JjL2FwcC9kb21haW4vaW50ZXJmYWNlcy9zaW11bGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgZXZhbHVhdGVDYW5kaWRhdGVCYXRjaCxcbiAgZXZhbHVhdGVDYW5kaWRhdGVWc1Bvb2wsXG4gIEV2YWx1YXRlQmF0Y2hSZXF1ZXN0LFxuICBFdmFsdWF0ZVJlcXVlc3QsXG4gIGdldERlZmF1bHRQcmVzZXRQb29sLFxufSBmcm9tICcuL2V2b2x1dGlvbic7XG5cbnR5cGUgQ2xpT3B0aW9ucyA9IHtcbiAgaW5wdXRQYXRoPzogc3RyaW5nO1xuICB1c2VTdGRpbj86IGJvb2xlYW47XG4gIGluY2x1ZGVCYXR0bGVzPzogYm9vbGVhbjtcbiAgZW5hYmxlTG9ncz86IGJvb2xlYW47XG4gIHByZXR0eT86IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3MoYXJndjogc3RyaW5nW10pOiBDbGlPcHRpb25zIHtcbiAgY29uc3Qgb3B0aW9uczogQ2xpT3B0aW9ucyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3YubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcmcgPSBhcmd2W2ldO1xuICAgIGlmIChhcmcgPT09ICctLXN0ZGluJyB8fCBhcmcgPT09ICctJykge1xuICAgICAgb3B0aW9ucy51c2VTdGRpbiA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJy0taW5jbHVkZS1iYXR0bGVzJykge1xuICAgICAgb3B0aW9ucy5pbmNsdWRlQmF0dGxlcyA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJy0tbG9ncycpIHtcbiAgICAgIG9wdGlvbnMuZW5hYmxlTG9ncyA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJy0tcHJldHR5Jykge1xuICAgICAgb3B0aW9ucy5wcmV0dHkgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhcmcgPT09ICctLWlucHV0JyB8fCBhcmcgPT09ICctaScpIHtcbiAgICAgIG9wdGlvbnMuaW5wdXRQYXRoID0gYXJndltpICsgMV07XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJy0taGVscCcgfHwgYXJnID09PSAnLWgnKSB7XG4gICAgICBwcmludEhlbHAoKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9XG4gICAgaWYgKCFhcmcuc3RhcnRzV2l0aCgnLScpICYmICFvcHRpb25zLmlucHV0UGF0aCkge1xuICAgICAgb3B0aW9ucy5pbnB1dFBhdGggPSBhcmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG50eXBlIFByZXNldFBvb2xPcHRpb25zID0ge1xuICBwcmV0dHk/OiBib29sZWFuO1xuICBsaW1pdD86IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlUHJlc2V0UG9vbEFyZ3MoYXJndjogc3RyaW5nW10pOiBQcmVzZXRQb29sT3B0aW9ucyB7XG4gIGNvbnN0IG9wdGlvbnM6IFByZXNldFBvb2xPcHRpb25zID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGFyZyA9IGFyZ3ZbaV07XG4gICAgaWYgKGFyZyA9PT0gJy0tcHJldHR5Jykge1xuICAgICAgb3B0aW9ucy5wcmV0dHkgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhcmcuc3RhcnRzV2l0aCgnLS1saW1pdD0nKSkge1xuICAgICAgY29uc3QgcmF3ID0gTnVtYmVyKGFyZy5zcGxpdCgnPScpLnNsaWNlKDEpLmpvaW4oJz0nKSk7XG4gICAgICBvcHRpb25zLmxpbWl0ID0gTnVtYmVyLmlzRmluaXRlKHJhdykgPyBNYXRoLm1heCgxLCBNYXRoLnRydW5jKHJhdykpIDogdW5kZWZpbmVkO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhcmcgPT09ICctLWxpbWl0Jykge1xuICAgICAgY29uc3QgcmF3ID0gTnVtYmVyKGFyZ3ZbaSArIDFdKTtcbiAgICAgIG9wdGlvbnMubGltaXQgPSBOdW1iZXIuaXNGaW5pdGUocmF3KSA/IE1hdGgubWF4KDEsIE1hdGgudHJ1bmMocmF3KSkgOiB1bmRlZmluZWQ7XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJy0taGVscCcgfHwgYXJnID09PSAnLWgnKSB7XG4gICAgICBwcmludEhlbHAoKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHByaW50SGVscCgpIHtcbiAgY29uc3QgdGV4dCA9IFtcbiAgICAnVXNhZ2U6IHNhcC1jYWxjdWxhdG9yLXNpbSBbY29tbWFuZF0gW29wdGlvbnNdIFtwYXRoXScsXG4gICAgJycsXG4gICAgJ0NvbW1hbmRzOicsXG4gICAgJyAgc2ltdWxhdGUgKGRlZmF1bHQpICAgICAgIFJ1biBhIHNpbmdsZSBzaW11bGF0aW9uIGNvbmZpZycsXG4gICAgJyAgZXZhbHVhdGUgICAgICAgICAgICAgICAgIFNjb3JlIGNhbmRpZGF0ZSB2cyBvcHBvbmVudCBwb29sJyxcbiAgICAnICBldmFsdWF0ZS1iYXRjaCAgICAgICAgICAgU2NvcmUgbWFueSBjYW5kaWRhdGVzIHZzIG9wcG9uZW50IHBvb2wnLFxuICAgICcgIHByZXNldC1wb29sICAgICAgICAgICAgICBPdXRwdXQgZGVmYXVsdCBwcmVzZXQgdGVhbXMgZm9yIHNlZWRpbmcnLFxuICAgICcnLFxuICAgICdPcHRpb25zOicsXG4gICAgJyAgLWksIC0taW5wdXQgPHBhdGg+ICAgICBKU09OIGNvbmZpZyBmaWxlIHBhdGgnLFxuICAgICcgIC0tc3RkaW4sIC0gICAgICAgICAgICAgUmVhZCBKU09OIGNvbmZpZyBmcm9tIHN0ZGluJyxcbiAgICAnICAtLWluY2x1ZGUtYmF0dGxlcyAgICAgIEluY2x1ZGUgYmF0dGxlcyBhcnJheSBpbiBvdXRwdXQnLFxuICAgICcgIC0tbG9ncyAgICAgICAgICAgICAgICAgRW5hYmxlIGxvZyBnZW5lcmF0aW9uJyxcbiAgICAnICAtLXByZXR0eSAgICAgICAgICAgICAgIFByZXR0eS1wcmludCBKU09OIG91dHB1dCcsXG4gICAgJyAgLS1saW1pdCA8bj4gICAgICAgICAgICAocHJlc2V0LXBvb2wpIGxpbWl0IG91dHB1dCByb3dzJyxcbiAgICAnICAtaCwgLS1oZWxwICAgICAgICAgICAgIFNob3cgaGVscCcsXG4gIF07XG4gIGNvbnNvbGUubG9nKHRleHQuam9pbignXFxuJykpO1xufVxuXG5mdW5jdGlvbiByZWFkSW5wdXQob3B0aW9uczogQ2xpT3B0aW9ucyk6IHN0cmluZyB7XG4gIGlmIChvcHRpb25zLnVzZVN0ZGluKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYygwLCAndXRmOCcpO1xuICB9XG4gIGlmICghb3B0aW9ucy5pbnB1dFBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHByb3ZpZGVkLiBVc2UgLS1zdGRpbiBvciBwcm92aWRlIGEgSlNPTiBmaWxlIHBhdGguJyk7XG4gIH1cbiAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhvcHRpb25zLmlucHV0UGF0aCwgJ3V0ZjgnKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRKc29uKHZhbHVlOiB1bmtub3duLCBwcmV0dHk6IGJvb2xlYW4gfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgY29uc3Qgb3V0cHV0ID0gcHJldHR5XG4gICAgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbiAgICA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gcnVuUHJlc2V0UG9vbChhcmd2OiBzdHJpbmdbXSk6IHZvaWQge1xuICBjb25zdCBvcHRpb25zID0gcGFyc2VQcmVzZXRQb29sQXJncyhhcmd2KTtcbiAgY29uc3QgYWxsVGVhbXMgPSBnZXREZWZhdWx0UHJlc2V0UG9vbCgpO1xuICBjb25zdCB0ZWFtcyA9IG9wdGlvbnMubGltaXQgPyBhbGxUZWFtcy5zbGljZSgwLCBvcHRpb25zLmxpbWl0KSA6IGFsbFRlYW1zO1xuICBwcmludEpzb24oXG4gICAge1xuICAgICAgZ2VuZXJhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICB0b3RhbFRlYW1zOiB0ZWFtcy5sZW5ndGgsXG4gICAgICB0ZWFtcyxcbiAgICB9LFxuICAgIG9wdGlvbnMucHJldHR5LFxuICApO1xufVxuXG5mdW5jdGlvbiBydW5FdmFsdWF0ZShhcmd2OiBzdHJpbmdbXSk6IHZvaWQge1xuICBjb25zdCBvcHRpb25zID0gcGFyc2VBcmdzKGFyZ3YpO1xuICBjb25zdCBpbnB1dCA9IHJlYWRJbnB1dChvcHRpb25zKTtcbiAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoaW5wdXQpIGFzIEV2YWx1YXRlUmVxdWVzdDtcbiAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGVDYW5kaWRhdGVWc1Bvb2wocGF5bG9hZCk7XG4gIHByaW50SnNvbihyZXN1bHQsIG9wdGlvbnMucHJldHR5KTtcbn1cblxuZnVuY3Rpb24gcnVuRXZhbHVhdGVCYXRjaChhcmd2OiBzdHJpbmdbXSk6IHZvaWQge1xuICBjb25zdCBvcHRpb25zID0gcGFyc2VBcmdzKGFyZ3YpO1xuICBjb25zdCBpbnB1dCA9IHJlYWRJbnB1dChvcHRpb25zKTtcbiAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoaW5wdXQpIGFzIEV2YWx1YXRlQmF0Y2hSZXF1ZXN0O1xuICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZUNhbmRpZGF0ZUJhdGNoKHBheWxvYWQpO1xuICBwcmludEpzb24ocmVzdWx0LCBvcHRpb25zLnByZXR0eSk7XG59XG5cbmZ1bmN0aW9uIHJ1blNpbXVsYXRlKGFyZ3Y6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGNvbnN0IG9wdGlvbnMgPSBwYXJzZUFyZ3MoYXJndik7XG4gIGNvbnN0IGlucHV0ID0gcmVhZElucHV0KG9wdGlvbnMpO1xuICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGlucHV0KSBhcyBTaW11bGF0aW9uQ29uZmlnO1xuICBjb25zdCByZXN1bHQgPSBydW5IZWFkbGVzc1NpbXVsYXRpb24oY29uZmlnLCB7XG4gICAgaW5jbHVkZUJhdHRsZXM6IG9wdGlvbnMuaW5jbHVkZUJhdHRsZXMsXG4gICAgZW5hYmxlTG9nczogb3B0aW9ucy5lbmFibGVMb2dzLFxuICB9KTtcbiAgcHJpbnRKc29uKHJlc3VsdCwgb3B0aW9ucy5wcmV0dHkpO1xufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGNvbnN0IGFyZ3YgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGlmIChhcmd2Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJ1blNpbXVsYXRlKGFyZ3YpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmQgPSBhcmd2WzBdO1xuICBpZiAoY29tbWFuZCA9PT0gJy0taGVscCcgfHwgY29tbWFuZCA9PT0gJy1oJykge1xuICAgIHByaW50SGVscCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21tYW5kID09PSAncHJlc2V0LXBvb2wnKSB7XG4gICAgcnVuUHJlc2V0UG9vbChhcmd2LnNsaWNlKDEpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29tbWFuZCA9PT0gJ2V2YWx1YXRlJykge1xuICAgIHJ1bkV2YWx1YXRlKGFyZ3Yuc2xpY2UoMSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21tYW5kID09PSAnZXZhbHVhdGUtYmF0Y2gnKSB7XG4gICAgcnVuRXZhbHVhdGVCYXRjaChhcmd2LnNsaWNlKDEpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29tbWFuZCA9PT0gJ3NpbXVsYXRlJykge1xuICAgIHJ1blNpbXVsYXRlKGFyZ3Yuc2xpY2UoMSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJ1blNpbXVsYXRlKGFyZ3YpO1xufVxuXG5ydW4oKTtcbiIsICJpbXBvcnQgeyBjcmVhdGVCYXR0bGVFbmdpbmUsIEJhdHRsZUV2ZW50LCBCb2FyZFNuYXBzaG90LCBQZXRTbmFwc2hvdCwgU2ltdWxhdGlvblJ1bkhvb2tzIH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuaW1wb3J0IHsgU2ltdWxhdGlvbkNvbmZpZywgU2ltdWxhdGlvblJlc3VsdCwgUGV0Q29uZmlnIH0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL3NpbXVsYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICdhcHAvZG9tYWluL2ludGVyZmFjZXMvbG9nLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BsYXllci5jbGFzcyc7XG5pbXBvcnQgeyBQZXQgfSBmcm9tICdhcHAvZG9tYWluL2VudGl0aWVzL3BldC5jbGFzcyc7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgYnVpbGRCb2FyZFN0YXRlTWVzc2FnZSB9IGZyb20gJy4uL2xvZy9sb2ctYm9hcmQtcmVuZGVyJztcbmltcG9ydCB7IEFJTE1FTlRfQ0FURUdPUklFUyB9IGZyb20gJy4uL2VxdWlwbWVudC9lcXVpcG1lbnQtY2F0ZWdvcmllcyc7XG5cbmNvbnN0IGFpbG1lbnRzID0gbmV3IFNldChPYmplY3QudmFsdWVzKEFJTE1FTlRfQ0FURUdPUklFUykuZmxhdCgpKTtcbmZ1bmN0aW9uIGRpc3BsYXlQZXQoc25hcHNob3Q6IFBldFNuYXBzaG90KTogUGV0IHtcbiAgY29uc3QgcGFyZW50ID0gbmV3IFBsYXllcigpO1xuICBwYXJlbnQuaXNPcHBvbmVudCA9IHNuYXBzaG90LnNpZGUgPT09ICdvcHBvbmVudCc7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBQZXQoKSwgc25hcHNob3QsIHtcbiAgICBwYXJlbnQsIHNhdmVkUG9zaXRpb246IHNuYXBzaG90LnBvc2l0aW9uIC0gMSxcbiAgICBlcXVpcG1lbnQ6IHNuYXBzaG90LmVxdWlwbWVudCA/IHsgbmFtZTogc25hcHNob3QuZXF1aXBtZW50LCB1c2VzOiBzbmFwc2hvdC5lcXVpcG1lbnRVc2VzIH0gOiBudWxsLFxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZDogQm9hcmRTbmFwc2hvdCwgY29uZmlnOiBTaW11bGF0aW9uQ29uZmlnKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lkZXMgPSAoWydwbGF5ZXInLCAnb3Bwb25lbnQnXSBhcyBjb25zdCkubWFwKChzaWRlKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIHBsYXllci5pc09wcG9uZW50ID0gc2lkZSA9PT0gJ29wcG9uZW50JztcbiAgICBib2FyZFtzaWRlXS5mb3JFYWNoKChwZXQsIGluZGV4KSA9PiBwbGF5ZXIuc2V0UGV0KGluZGV4LCBwZXQgPyBkaXNwbGF5UGV0KHBldCkgOiBudWxsKSk7XG4gICAgY29uc3QgdG95ID0gc2lkZSA9PT0gJ3BsYXllcicgPyBjb25maWcucGxheWVyVG95IDogY29uZmlnLm9wcG9uZW50VG95O1xuICAgIGNvbnN0IGhhcmRUb3kgPSBzaWRlID09PSAncGxheWVyJyA/IGNvbmZpZy5wbGF5ZXJIYXJkVG95IDogY29uZmlnLm9wcG9uZW50SGFyZFRveTtcbiAgICBwbGF5ZXIudG95ID0gdG95ID8geyBuYW1lOiB0b3ksIGxldmVsOiAxIH0gOiBudWxsO1xuICAgIHBsYXllci5oYXJkVG95ID0gaGFyZFRveSA/IHsgbmFtZTogaGFyZFRveSwgbGV2ZWw6IDEgfSA6IG51bGw7XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfSk7XG4gIHJldHVybiBidWlsZEJvYXJkU3RhdGVNZXNzYWdlKHNpZGVzWzBdLCBzaWRlc1sxXSwgKHBldCkgPT4gcGV0LnNhdmVkUG9zaXRpb24gKyAxLCAobmFtZSkgPT4gYWlsbWVudHMuaGFzKG5hbWUpKTtcbn1cblxuLyoqIFRoZSBvbmx5IGJyaWRnZSBiZXR3ZWVuIGJhdHRsZSBleGVjdXRpb24gYW5kIGNhbGN1bGF0b3IgcHJlc2VudGF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JCYXR0bGVFbmdpbmUge1xuICBwcml2YXRlIHJlYWRvbmx5IGVuZ2luZSA9IGNyZWF0ZUJhdHRsZUVuZ2luZSgpO1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ1NlcnZpY2UgPSBuZXcgTG9nU2VydmljZSgpO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncz86IExvZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmxvZ1NlcnZpY2Uuc2V0U2hvd1RyaWdnZXJOYW1lc0luTG9ncyhzZXR0aW5ncz8uaXNTaG93VHJpZ2dlck5hbWVzSW5Mb2dzKCkgPz8gZmFsc2UpO1xuICB9XG4gIHJ1bihjb25maWc6IFNpbXVsYXRpb25Db25maWcsIGhvb2tzPzogU2ltdWxhdGlvblJ1bkhvb2tzKTogU2ltdWxhdGlvblJlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbmdpbmUucnVuU2ltdWxhdGlvbihjb25maWcsIGhvb2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgLi4uKHJlc3VsdC5iYXR0bGVzID8geyBiYXR0bGVzOiByZXN1bHQuYmF0dGxlcy5tYXAoKGJhdHRsZSkgPT4gKHtcbiAgICAgICAgLi4uYmF0dGxlLFxuICAgICAgICBsb2dzOiB0aGlzLmZvcm1hdEV2ZW50cyhiYXR0bGUubG9ncywgY29uZmlnKSxcbiAgICAgIH0pKSB9IDoge30pLFxuICAgIH07XG4gIH1cbiAgcHJvamVjdExpbmV1cEFmdGVyRW5kVHVybihjb25maWc6IFNpbXVsYXRpb25Db25maWcsIHNpZGU6ICdwbGF5ZXInIHwgJ29wcG9uZW50JywgbGluZXVwOiAoUGV0Q29uZmlnIHwgbnVsbClbXSk6IChQZXRDb25maWcgfCBudWxsKVtdIHtcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUucHJvamVjdExpbmV1cEFmdGVyRW5kVHVybihjb25maWcsIHNpZGUsIGxpbmV1cCk7XG4gIH1cbiAgcHJpdmF0ZSBmb3JtYXRFdmVudHMoZXZlbnRzOiBCYXR0bGVFdmVudFtdLCBjb25maWc6IFNpbXVsYXRpb25Db25maWcpOiBMb2dbXSB7XG4gICAgdGhpcy5sb2dTZXJ2aWNlLnJlc2V0KCk7XG4gICAgdGhpcy5sb2dTZXJ2aWNlLnNldEVuYWJsZWQodHJ1ZSk7XG4gICAgdGhpcy5sb2dTZXJ2aWNlLnNldERlZmVyRGVjb3JhdGlvbnModHJ1ZSk7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIHRoaXMubG9nU2VydmljZS5jcmVhdGVMb2coe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgbWVzc2FnZTogZXZlbnQudHlwZSA9PT0gJ2JvYXJkJyAmJiAhZXZlbnQubWVzc2FnZSA/IGRpc3BsYXlCb2FyZChldmVudC5ib2FyZCwgY29uZmlnKSA6IGV2ZW50Lm1lc3NhZ2UsXG4gICAgICAgIHBsYXllcklzT3Bwb25lbnQ6IGV2ZW50LnNpZGUgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGV2ZW50LnNpZGUgPT09ICdvcHBvbmVudCcsXG4gICAgICAgIHRhcmdldElzT3Bwb25lbnQ6IGV2ZW50LnRhcmdldFNpZGUgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGV2ZW50LnRhcmdldFNpZGUgPT09ICdvcHBvbmVudCcsXG4gICAgICAgIHNvdXJjZVBldDogZXZlbnQuc291cmNlID8gZGlzcGxheVBldChldmVudC5zb3VyY2UpIDogdW5kZWZpbmVkLFxuICAgICAgICB0YXJnZXRQZXQ6IGV2ZW50LnRhcmdldCA/IGRpc3BsYXlQZXQoZXZlbnQudGFyZ2V0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gS2VlcCBzbmFwc2hvdCBldmVudHMgc2VwYXJhdGUgc28gdGhlaXIgaWRlbnRpdGllcyBhbmQgYm9hcmQgc3RhdGVzIHJlbWFpbiBtZWFuaW5nZnVsLlxuICAgICAgICBub0NvbGxhcHNlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvZ1NlcnZpY2UuZ2V0TG9ncygpO1xuICB9XG59XG4iLCAiLy8gTW9jayBBbmd1bGFyIERlY29yYXRvcnNcbmV4cG9ydCBmdW5jdGlvbiBJbmplY3RhYmxlKF9hcmdzPzogYW55KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KGFyZ3M6IGFueSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7fTtcbn1cblxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHt9XG5cbi8vIE1vY2sgQW5ndWxhciBGb3Jtc1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29udHJvbCB7XG4gIHZhbHVlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0KHBhdGg6IHN0cmluZyB8IChzdHJpbmcgfCBudW1iZXIpW10pOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2wgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCBfdmFsaWRhdG9yT3JPcHRzPzogYW55KSB7XG4gICAgc3VwZXIodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuICBjb250cm9sczogeyBba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2wgfTtcbiAgY29uc3RydWN0b3IoY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sIH0pIHtcbiAgICBzdXBlcihjb250cm9scyk7XG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICB9XG4gIG92ZXJyaWRlIGdldChwYXRoOiBzdHJpbmcpOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sc1twYXRoXSB8fCBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXkgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuICBjb250cm9sczogQWJzdHJhY3RDb250cm9sW107XG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSkge1xuICAgIHN1cGVyKGNvbnRyb2xzKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gIH1cbiAgb3ZlcnJpZGUgZ2V0KGluZGV4OiBhbnkpOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhdIHx8IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JzIHtcbiAgc3RhdGljIHJlcXVpcmVkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn0gfCBudWxsO1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xuIiwgImltcG9ydCB7IGNhdGFsb2dzIH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuLy8gQ29uc3VtZXJzIHJlY2VpdmUgbXV0YWJsZSBtZXRhZGF0YSBjb3BpZXMgZm9yIGV4aXN0aW5nIGZvcm0gYW5kIHBhcnNlciBBUElzLlxudHlwZSBNdXRhYmxlPFQ+ID0gVCBleHRlbmRzIG9iamVjdCA/IHsgLXJlYWRvbmx5IFtLIGluIGtleW9mIFRdOiBNdXRhYmxlPFRbS10+IH0gOiBUO1xuZXhwb3J0IGNvbnN0IHBldHMgPSBzdHJ1Y3R1cmVkQ2xvbmUoY2F0YWxvZ3MucGV0cykgYXMgTXV0YWJsZTx0eXBlb2YgY2F0YWxvZ3MucGV0cz47XG5leHBvcnQgY29uc3QgdG95cyA9IHN0cnVjdHVyZWRDbG9uZShjYXRhbG9ncy50b3lzKSBhcyBNdXRhYmxlPHR5cGVvZiBjYXRhbG9ncy50b3lzPjtcbmV4cG9ydCBjb25zdCBmb29kID0gc3RydWN0dXJlZENsb25lKGNhdGFsb2dzLmZvb2QpIGFzIE11dGFibGU8dHlwZW9mIGNhdGFsb2dzLmZvb2Q+O1xuZXhwb3J0IGNvbnN0IHBlcmtzID0gc3RydWN0dXJlZENsb25lKGNhdGFsb2dzLnBlcmtzKSBhcyBNdXRhYmxlPHR5cGVvZiBjYXRhbG9ncy5wZXJrcz47XG4iLCAiaW1wb3J0IHsgcGV0cyBhcyBwZXRzSnNvbiB9IGZyb20gJ2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MnO1xuaW1wb3J0IHsgdG95cyBhcyB0b3lzSnNvbiB9IGZyb20gJ2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MnO1xuaW1wb3J0IHsgcGVya3MgYXMgcGVya3NKc29uIH0gZnJvbSAnYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncyc7XG5cbmludGVyZmFjZSBOYW1lSWRFbnRyeSB7XG4gIE5hbWU/OiBzdHJpbmc7XG4gIE5hbWVJZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFiaWxpdHlFbnRyeSB7XG4gIExldmVsPzogbnVtYmVyO1xuICBBYm91dD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFBldEFiaWxpdHlFbnRyeSBleHRlbmRzIE5hbWVJZEVudHJ5IHtcbiAgQWJpbGl0aWVzPzogQWJpbGl0eUVudHJ5W107XG4gIFBlcmtOb3RlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVG95QWJpbGl0eUVudHJ5IGV4dGVuZHMgTmFtZUlkRW50cnkge1xuICBBYmlsaXRpZXM/OiBBYmlsaXR5RW50cnlbXTtcbn1cblxuaW50ZXJmYWNlIEVxdWlwbWVudEFiaWxpdHlFbnRyeSBleHRlbmRzIE5hbWVJZEVudHJ5IHtcbiAgQWJpbGl0eT86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0TmFtZUxpc3QgPSAoZW50cmllczogTmFtZUlkRW50cnlbXSk6IHN0cmluZ1tdID0+XG4gIGVudHJpZXNcbiAgICAubWFwKChlbnRyeSkgPT4gZW50cnk/Lk5hbWUpXG4gICAgLmZpbHRlcigobmFtZSk6IG5hbWUgaXMgc3RyaW5nID0+IEJvb2xlYW4obmFtZSkpO1xuXG5jb25zdCBwZXROYW1lT3ZlcnJpZGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnQmVsdWdhIFdoYWxlJzogJ1doaXRlV2hhbGUnLFxuICAnR3JlYXQgT25lJzogJ0N0aHVsdScsXG4gICdTbWFsbCBPbmUnOiAnQmFieUN0aHVsaHUnLFxuICBBYm9taW5hdGlvbjogJ1Nob2dnb3RoJyxcbiAgVmlzaXRvcjogJ1hlbm9tb3JwaCcsXG4gIFN3b3JkZmlzaDogJ1N3b3JkRmlzaCcsXG4gIERvYmVybWFuOiAnRG9iZXJtYW5Eb2cnLFxuICAnSGlnaGxhbmQgQ293JzogJ0hpZ2hsYW5kQ293JyxcbiAgJ1NhYmVydG9vdGggVGlnZXInOiAnU2FiZXJUb290aFRpZ2VyJyxcbiAgJ01vYnkgRGljayc6ICdNb2NoYURpY2snLFxuICAnQ2hpbWVyYSBHb2F0JzogJ0NoaW1lcmFHb2F0JyxcbiAgJ0NoaW1lcmEgTGlvbic6ICdDaGltZXJhTGlvbicsXG4gICdDaGltZXJhIFNuYWtlJzogJ0NoaW1lcmFTbmFrZScsXG4gIENyYWNrZWRFZ2c6ICdFZ2dMYWRDcmFja2VkJyxcbiAgJ0Zha2UgTmVzc2llJzogJ0Zha2VOZXNzaWUnLFxuICAnVGFuZCBhbmQgVGFuZCc6ICdUaG9yR29hdHMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmtOYW1lT3ZlcnJpZGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBDb3JuY29iOiAnQ29ybicsXG4gICdDYWtlIFNsaWNlJzogJ0JpcnRoZGF5Q2FrZVNsaWNlJyxcbiAgJ1BlYW51dCBCdXR0ZXInOiAnUGVhbnV0QnV0dGVyJyxcbiAgJ01hbmEgUG90aW9uJzogJ01hbmFQb3Rpb24nLFxuICAnRmFpbnQgQnJlYWQnOiAnRGVhZEJyZWFkJyxcbiAgS2l3aWZydWl0OiAnS2l3aScsXG4gIEVnZ3BsYW50OiAnRWdnUGxhbnQnLFxuICBSaWNlOiAnUmljZUJhbGwnLFxuICBEb251dDogJ0RvdWdobnV0JyxcbiAgQ2hlcnJ5OiAnQ2hlcnJpZXMnLFxuICAnTWVsb24gU2xpY2UnOiAnV2F0ZXJNZWxvbicsXG4gIENvbGQ6ICdGcm96ZW4nLFxuICBDcmlzcDogJ0J1cm4nLFxuICBEYXplZDogJ0RlYWYnLFxuICBJY2t5OiAnQWNpZCcsXG4gIElua2VkOiAnSW5rJyxcbiAgU3Bvb2tlZDogJ1NjYXJlZCcsXG4gIFNsZWVweTogJ0Ryb3dzeScsXG4gIFdlYmJlZDogJ1dlYicsXG4gIEN1cnNlZDogJ0N1cnNlJyxcbiAgU2lsbHk6ICdTaWxseScsXG4gIEJsb2F0ZWQ6ICdCbG9hdGVkJyxcbn07XG5jb25zdCBwZXJrTmFtZU92ZXJyaWRlc0xvd2VyID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBPYmplY3QuZW50cmllcyhwZXJrTmFtZU92ZXJyaWRlcykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtcbiAgICBrZXkudG9Mb3dlckNhc2UoKSxcbiAgICB2YWx1ZSxcbiAgXSksXG4pO1xuXG5jb25zdCBub3JtYWxpemUgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnJyk7XG59O1xuXG5jb25zdCBidWlsZE5hbWVJZE1hcCA9IChlbnRyaWVzOiBOYW1lSWRFbnRyeVtdKTogTWFwPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIGlmIChlbnRyeT8uTmFtZSAmJiBlbnRyeT8uTmFtZUlkKSB7XG4gICAgICBtYXAuc2V0KGVudHJ5Lk5hbWUsIGVudHJ5Lk5hbWVJZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXA7XG59O1xuXG5jb25zdCBmb3JtYXRBYmlsaXR5VGV4dCA9IChcbiAgYWJpbGl0aWVzPzogQWJpbGl0eUVudHJ5W10sXG4gIHBlcmtOb3RlPzogc3RyaW5nLFxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlzTm9BYmlsaXR5VGV4dCA9ICh0ZXh0Pzogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAgICF0ZXh0IHx8IC9ebm8gYWJpbGl0eVxcLj8kL2kudGVzdCh0ZXh0LnRyaW0oKSk7XG5cbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gIGlmIChBcnJheS5pc0FycmF5KGFiaWxpdGllcykpIHtcbiAgICBmb3IgKGNvbnN0IGFiaWxpdHkgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBpZiAoIWFiaWxpdHk/LkFib3V0IHx8IGlzTm9BYmlsaXR5VGV4dChhYmlsaXR5LkFib3V0KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhYmlsaXR5LkxldmVsICE9IG51bGwpIHtcbiAgICAgICAgbGluZXMucHVzaChgTHYke2FiaWxpdHkuTGV2ZWx9OiAke2FiaWxpdHkuQWJvdXR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGFiaWxpdHkuQWJvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocGVya05vdGUpIHtcbiAgICBsaW5lcy5wdXNoKHBlcmtOb3RlKTtcbiAgfVxuICByZXR1cm4gbGluZXMubGVuZ3RoID8gbGluZXMuam9pbignXFxuJykgOiBudWxsO1xufTtcblxuY29uc3QgcGV0TmFtZUlkcyA9IGJ1aWxkTmFtZUlkTWFwKFxuICAocGV0c0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBOYW1lSWRFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgICAocGV0c0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcbmNvbnN0IHBldElkQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbmNvbnN0IHBldElkRW50cmllcyA9XG4gIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IEFycmF5PE5hbWVJZEVudHJ5ICYgeyBJZD86IHN0cmluZyB9PiB9KVxuICAgIC5kZWZhdWx0ID8/XG4gIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIEFycmF5PE5hbWVJZEVudHJ5ICYgeyBJZD86IHN0cmluZyB9PikgPz9cbiAgW107XG5mb3IgKGNvbnN0IGVudHJ5IG9mIHBldElkRW50cmllcykge1xuICBpZiAoIWVudHJ5Py5OYW1lIHx8ICFlbnRyeT8uSWQpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuICBwZXRJZEJ5TmFtZS5zZXQoZW50cnkuTmFtZSwgZW50cnkuSWQpO1xufVxuY29uc3QgcGV0QWJpbGl0eU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5jb25zdCBwZXRBYmlsaXR5RW50cmllcyA9XG4gIChwZXRzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IFBldEFiaWxpdHlFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgKHBldHNKc29uIGFzIHVua25vd24gYXMgUGV0QWJpbGl0eUVudHJ5W10pID8/XG4gIFtdO1xuZm9yIChjb25zdCBlbnRyeSBvZiBwZXRBYmlsaXR5RW50cmllcykge1xuICBpZiAoIWVudHJ5Py5OYW1lKSB7XG4gICAgY29udGludWU7XG4gIH1cbiAgY29uc3QgYWJpbGl0eVRleHQgPSBmb3JtYXRBYmlsaXR5VGV4dChlbnRyeS5BYmlsaXRpZXMsIGVudHJ5LlBlcmtOb3RlKTtcbiAgaWYgKGFiaWxpdHlUZXh0KSB7XG4gICAgcGV0QWJpbGl0eU1hcC5zZXQoZW50cnkuTmFtZSwgYWJpbGl0eVRleHQpO1xuICB9XG59XG5jb25zdCBwZXROYW1lcyA9IGdldE5hbWVMaXN0KFxuICAocGV0c0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBOYW1lSWRFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgICAocGV0c0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcbmNvbnN0IHRveU5hbWVJZHMgPSBidWlsZE5hbWVJZE1hcChcbiAgKHRveXNKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogTmFtZUlkRW50cnlbXSB9KS5kZWZhdWx0ID8/XG4gICAgKHRveXNKc29uIGFzIHVua25vd24gYXMgTmFtZUlkRW50cnlbXSkgPz9cbiAgICBbXSxcbik7XG5jb25zdCB0b3lBYmlsaXR5TWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbmNvbnN0IHRveUFiaWxpdHlFbnRyaWVzID1cbiAgKHRveXNKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogVG95QWJpbGl0eUVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAodG95c0pzb24gYXMgdW5rbm93biBhcyBUb3lBYmlsaXR5RW50cnlbXSkgPz9cbiAgW107XG5mb3IgKGNvbnN0IGVudHJ5IG9mIHRveUFiaWxpdHlFbnRyaWVzKSB7XG4gIGlmICghZW50cnk/Lk5hbWUpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuICBjb25zdCBhYmlsaXR5VGV4dCA9IGZvcm1hdEFiaWxpdHlUZXh0KGVudHJ5LkFiaWxpdGllcyk7XG4gIGlmIChhYmlsaXR5VGV4dCkge1xuICAgIHRveUFiaWxpdHlNYXAuc2V0KGVudHJ5Lk5hbWUsIGFiaWxpdHlUZXh0KTtcbiAgfVxufVxuY29uc3QgdG95TmFtZXMgPSBnZXROYW1lTGlzdChcbiAgKHRveXNKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogTmFtZUlkRW50cnlbXSB9KS5kZWZhdWx0ID8/XG4gICAgKHRveXNKc29uIGFzIHVua25vd24gYXMgTmFtZUlkRW50cnlbXSkgPz9cbiAgICBbXSxcbik7XG5jb25zdCBlcXVpcG1lbnROYW1lSWRzID0gYnVpbGROYW1lSWRNYXAoXG4gIChwZXJrc0pzb24gYXMgdW5rbm93biBhcyB7IGRlZmF1bHQ/OiBOYW1lSWRFbnRyeVtdIH0pLmRlZmF1bHQgPz9cbiAgICAocGVya3NKc29uIGFzIHVua25vd24gYXMgTmFtZUlkRW50cnlbXSkgPz9cbiAgICBbXSxcbik7XG5jb25zdCBlcXVpcG1lbnROYW1lSWRzTG93ZXIgPSBuZXcgTWFwKFxuICBBcnJheS5mcm9tKGVxdWlwbWVudE5hbWVJZHMuZW50cmllcygpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW1xuICAgIGtleS50b0xvd2VyQ2FzZSgpLFxuICAgIHZhbHVlLFxuICBdKSxcbik7XG5jb25zdCBlcXVpcG1lbnROYW1lSWRzTm9ybWFsaXplZCA9IG5ldyBNYXAoXG4gIEFycmF5LmZyb20oZXF1aXBtZW50TmFtZUlkcy5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBbXG4gICAgbm9ybWFsaXplKGtleSksXG4gICAgdmFsdWUsXG4gIF0pLFxuKTtcbmNvbnN0IGVxdWlwbWVudEFiaWxpdHlNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuY29uc3QgZXF1aXBtZW50QWJpbGl0eUVudHJpZXMgPVxuICAocGVya3NKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogRXF1aXBtZW50QWJpbGl0eUVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAocGVya3NKc29uIGFzIHVua25vd24gYXMgRXF1aXBtZW50QWJpbGl0eUVudHJ5W10pID8/XG4gIFtdO1xuZm9yIChjb25zdCBlbnRyeSBvZiBlcXVpcG1lbnRBYmlsaXR5RW50cmllcykge1xuICBpZiAoIWVudHJ5Py5OYW1lKSB7XG4gICAgY29udGludWU7XG4gIH1cbiAgaWYgKGVudHJ5LkFiaWxpdHkpIHtcbiAgICBlcXVpcG1lbnRBYmlsaXR5TWFwLnNldChlbnRyeS5OYW1lLCBlbnRyeS5BYmlsaXR5KTtcbiAgfVxufVxuY29uc3QgZXF1aXBtZW50TmFtZXMgPSBnZXROYW1lTGlzdChcbiAgKHBlcmtzSnNvbiBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IE5hbWVJZEVudHJ5W10gfSkuZGVmYXVsdCA/P1xuICAgIChwZXJrc0pzb24gYXMgdW5rbm93biBhcyBOYW1lSWRFbnRyeVtdKSA/P1xuICAgIFtdLFxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXNzZXRGaWxlTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbm9ybWFsaXplKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGV0SWNvbkZpbGVOYW1lKHBldE5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFwZXROYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbmFtZUlkID0gcGV0TmFtZUlkcy5nZXQocGV0TmFtZSk7XG4gIGlmIChuYW1lSWQpIHtcbiAgICByZXR1cm4gbmFtZUlkO1xuICB9XG4gIGNvbnN0IG1hcHBlZCA9IHBldE5hbWVPdmVycmlkZXNbcGV0TmFtZV07XG4gIGlmIChtYXBwZWQpIHtcbiAgICByZXR1cm4gbWFwcGVkO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGV0SWNvblBhdGgocGV0TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBmaWxlTmFtZSA9IGdldFBldEljb25GaWxlTmFtZShwZXROYW1lKTtcbiAgaWYgKCFmaWxlTmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBgYXNzZXRzL2FydC9QdWJsaWMvUHVibGljL1BldHMvJHtmaWxlTmFtZX0ucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBldEFiaWxpdHlUZXh0KHBldE5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFwZXROYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBldEFiaWxpdHlNYXAuZ2V0KHBldE5hbWUpID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXRTb3VuZExvb2t1cEluZm8oXG4gIHBldE5hbWU/OiBzdHJpbmcsXG4pOiB7IG5hbWVJZDogc3RyaW5nIHwgbnVsbDsgcGV0SWQ6IHN0cmluZyB8IG51bGwgfSB8IG51bGwge1xuICBpZiAoIXBldE5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWVJZDogcGV0TmFtZUlkcy5nZXQocGV0TmFtZSkgPz8gbnVsbCxcbiAgICBwZXRJZDogcGV0SWRCeU5hbWUuZ2V0KHBldE5hbWUpID8/IG51bGwsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQZXROYW1lcygpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbLi4ucGV0TmFtZXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG95SWNvblBhdGgodG95TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXRveU5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBuYW1lSWQgPSB0b3lOYW1lSWRzLmdldCh0b3lOYW1lKTtcbiAgY29uc3QgZmlsZU5hbWUgPSBuYW1lSWQgPz8gbm9ybWFsaXplKHRveU5hbWUpO1xuICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGBhc3NldHMvYXJ0L1B1YmxpYy9QdWJsaWMvVG95cy8ke2ZpbGVOYW1lfS5wbmdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG95QWJpbGl0eVRleHQodG95TmFtZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXRveU5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gdG95QWJpbGl0eU1hcC5nZXQodG95TmFtZSkgPz8gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRveU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFsuLi50b3lOYW1lc107XG59XG5cbmNvbnN0IGdldEVxdWlwbWVudEZpbGVOYW1lID0gKGVxdWlwbWVudE5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKCFlcXVpcG1lbnROYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZShlcXVpcG1lbnROYW1lKTtcbiAgY29uc3QgbmFtZUlkID1cbiAgICBlcXVpcG1lbnROYW1lSWRzLmdldChlcXVpcG1lbnROYW1lKSA/P1xuICAgIGVxdWlwbWVudE5hbWVJZHNMb3dlci5nZXQoZXF1aXBtZW50TmFtZS50b0xvd2VyQ2FzZSgpKSA/P1xuICAgIGVxdWlwbWVudE5hbWVJZHNOb3JtYWxpemVkLmdldChub3JtYWxpemVkKTtcbiAgY29uc3Qgb3ZlcnJpZGUgPVxuICAgIHBlcmtOYW1lT3ZlcnJpZGVzW2VxdWlwbWVudE5hbWVdID8/XG4gICAgcGVya05hbWVPdmVycmlkZXNMb3dlcltlcXVpcG1lbnROYW1lLnRvTG93ZXJDYXNlKCldO1xuICBjb25zdCBmaWxlTmFtZSA9IG5hbWVJZCA/PyBvdmVycmlkZSA/PyBub3JtYWxpemVkO1xuICByZXR1cm4gZmlsZU5hbWUgfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcXVpcG1lbnRJY29uUGF0aChcbiAgZXF1aXBtZW50TmFtZT86IHN0cmluZyxcbiAgaXNBaWxtZW50ID0gZmFsc2UsXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZmlsZU5hbWUgPSBnZXRFcXVpcG1lbnRGaWxlTmFtZShlcXVpcG1lbnROYW1lKTtcbiAgaWYgKCFmaWxlTmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChpc0FpbG1lbnQpIHtcbiAgICByZXR1cm4gYGFzc2V0cy9hcnQvQWlsbWVudHMvQWlsbWVudHMvJHtmaWxlTmFtZX0ucG5nYDtcbiAgfVxuICByZXR1cm4gYGFzc2V0cy9hcnQvUHVibGljL1B1YmxpYy9Gb29kLyR7ZmlsZU5hbWV9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcXVpcG1lbnRBYmlsaXR5VGV4dChlcXVpcG1lbnROYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghZXF1aXBtZW50TmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBlcXVpcG1lbnRBYmlsaXR5TWFwLmdldChlcXVpcG1lbnROYW1lKSA/PyBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRXF1aXBtZW50TmFtZXMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gWy4uLmVxdWlwbWVudE5hbWVzXTtcbn1cblxuY29uc3QgcGFja05hbWVUb1BldE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgVHVydGxlOiAnVHVydGxlJyxcbiAgR29sZGVuOiAnR29sZGVuIFJldHJpZXZlcicsXG4gIFB1cHB5OiAnUHVwcHknLFxuICBTdGFyOiAnU3RhcmZpc2gnLFxuICBVbmljb3JuOiAnVW5pY29ybicsXG4gIERhbmdlcjogJ0JsdWUgV2hhbGUnLFxuICBDdXN0b206ICdXaGl0ZSBUaWdlcicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja0ljb25QYXRoKHBhY2tOYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcGFja05hbWUgfHwgcGFja05hbWUgPT09ICdBZGQgQ3VzdG9tIFBhY2snKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcGV0TmFtZSA9IHBhY2tOYW1lVG9QZXRNYXBbcGFja05hbWVdO1xuICBpZiAocGV0TmFtZSkge1xuICAgIHJldHVybiBnZXRQZXRJY29uUGF0aChwZXROYW1lKTtcbiAgfVxuICAvLyBGb3IgY3VzdG9tIHBhY2tzICh1c2VyLWNyZWF0ZWQpLCB1c2UgV2hpdGUgVGlnZXIgYXMgZGVmYXVsdFxuICByZXR1cm4gZ2V0UGV0SWNvblBhdGgoJ1doaXRlIFRpZ2VyJyk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IEVRVUlQTUVOVF9DQVRFR09SSUVTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gIFR1cnRsZTogW1xuICAgICdCcmVhZCcsXG4gICAgJ0Nha2UnLFxuICAgICdDaGlsaScsXG4gICAgJ0NvY29udXQnLFxuICAgICdHYXJsaWMnLFxuICAgICdIb25leScsXG4gICAgJ01lYXQgQm9uZScsXG4gICAgJ01lbG9uJyxcbiAgICAnTXVzaHJvb20nLFxuICAgICdQZWFudXQnLFxuICAgICdTdGVhaycsXG4gIF0sXG4gIFB1cHB5OiBbXG4gICAgJ0JsYWNrYmVycnknLFxuICAgICdDcm9pc3NhbnQnLFxuICAgICdFZ2cnLFxuICAgICdFdWNhbHlwdHVzJyxcbiAgICAnTGVtb24nLFxuICAgICdMaW1lJyxcbiAgICAnTWlsZCBDaGlsaScsXG4gICAgJ1BhbmNha2VzJyxcbiAgICAnUGllJyxcbiAgICAnUmljZScsXG4gICAgJ1NhbHQnLFxuICAgICdTa2V3ZXInLFxuICAgICdTcXVhc2gnLFxuICAgICdXYWxudXQnLFxuICBdLFxuICBTdGFyOiBbXG4gICAgJ0JhZ3VldHRlJyxcbiAgICAnQ2FyYW1lbCcsXG4gICAgJ0NhcnJvdCcsXG4gICAgJ0NoZWVzZScsXG4gICAgJ0N1Y3VtYmVyJyxcbiAgICAnR3JhcGVzJyxcbiAgICAnUGVwcGVyJyxcbiAgICAnUG9wY29ybicsXG4gICAgJ1NlYXdlZWQnLFxuICAgICdTdHJhd2JlcnJ5JyxcbiAgXSxcbiAgR29sZGVuOiBbXG4gICAgJ0JhbmFuYScsXG4gICAgJ0JvayBDaG95JyxcbiAgICAnQ2hlcnJ5JyxcbiAgICAnQ2hvY29sYXRlIENha2UnLFxuICAgICdEdXJpYW4nLFxuICAgICdFZ2dwbGFudCcsXG4gICAgJ0ZpZycsXG4gICAgJ0hvbmV5ZGV3IE1lbG9uJyxcbiAgICAnTWFwbGUgU3lydXAnLFxuICAgICdPbmlvbicsXG4gICAgJ1BpdGEgQnJlYWQnLFxuICAgICdQb3RhdG8nLFxuICAgICdUb21hdG8nLFxuICBdLFxuICBVbmljb3JuOiBbXG4gICAgJ0FtYnJvc2lhJyxcbiAgICAnRWFzdGVyIEVnZycsXG4gICAgJ0ZhaW50IEJyZWFkJyxcbiAgICAnRmFpcnkgRHVzdCcsXG4gICAgJ0dpbmdlcmJyZWFkIE1hbicsXG4gICAgJ0dvbGRlbiBFZ2cnLFxuICAgICdIZWFsdGggUG90aW9uJyxcbiAgICAnTG92ZSBQb3Rpb24nLFxuICAgICdNYWdpYyBCZWFucycsXG4gICAgJ1JhbWJ1dGFuJyxcbiAgICAnWWdnZHJhc2lsIEZydWl0JyxcbiAgXSxcbiAgRGFuZ2VyOiBbXG4gICAgJ0NvY29hIEJlYW4nLFxuICAgICdDb2QgUm9lJyxcbiAgICAnR3JvcyBNaWNoZWwgQmFuYW5hJyxcbiAgICAnR2VlY2hlZSBSZWQgUGVhJyxcbiAgICAnU3VkZHV0aCBUb21hdG8nLFxuICAgICdXaGl0ZSBPa3JhJyxcbiAgICAnV2hpdGUgVHJ1ZmZsZScsXG4gIF0sXG4gIEN1c3RvbTogW1xuICAgICdCbHVlYmVycnknLFxuICAgICdCcnVzc2VscyBTcHJvdXQnLFxuICAgICdDYXNoZXcgTnV0JyxcbiAgICAnQ2F1bGlmbG93ZXInLFxuICAgICdDaHVycm9zJyxcbiAgICAnRG9udXQnLFxuICAgICdGb3J0dW5lIENvb2tpZScsXG4gICAgJ0d1YXZhJyxcbiAgICAnS2l3YW5vJyxcbiAgICAnS2l3aWZydWl0JyxcbiAgICAnTWFjYXJvbicsXG4gICAgJ01lbG9uIFNsaWNlJyxcbiAgICAnTmFjaG9zJyxcbiAgICAnT3lzdGVyIE11c2hyb29tJyxcbiAgICAnUGluZWFwcGxlJyxcbiAgICAnUmFkaXNoJyxcbiAgICAnU2FyZGluaWFuIEN1cnJhbnQnLFxuICAgICdTYXVzYWdlJyxcbiAgICAnVW5hZ2knLFxuICBdLFxuICBIaWRkZW46IFsnQ2FrZSBTbGljZScsICdQZWFudXQgQnV0dGVyJ10sXG59O1xuXG5leHBvcnQgY29uc3QgQUlMTUVOVF9DQVRFR09SSUVTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gIEFpbG1lbnRzOiBbXG4gICAgJ0Jsb2F0ZWQnLFxuICAgICdDb2xkJyxcbiAgICAnQ29uZnVzZWQnLFxuICAgICdDb3dhcmRseScsXG4gICAgJ0NyaXNwJyxcbiAgICAnQ3Vyc2VkJyxcbiAgICAnRGF6ZWQnLFxuICAgICdJY2t5JyxcbiAgICAnSW5rZWQnLFxuICAgICdTYWQnLFxuICAgICdTaWxseScsXG4gICAgJ1NsZWVweScsXG4gICAgJ1Nwb29rZWQnLFxuICAgICdUYXN0eScsXG4gICAgJ1RvYXN0eScsXG4gICAgJ1dlYWsnLFxuICAgICdXZWJiZWQnLFxuICBdLFxufTtcbiIsICJpbXBvcnQge1xuICBnZXRFcXVpcG1lbnRJY29uUGF0aCxcbiAgZ2V0UGV0SWNvblBhdGgsXG4gIGdldFRveUljb25QYXRoLFxufSBmcm9tICdhcHAvcnVudGltZS9hc3NldC1jYXRhbG9nJztcblxuZXhwb3J0IHR5cGUgSW5saW5lSWNvblR5cGUgPSAncGV0JyB8ICd0b3knIHwgJ2VxdWlwbWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hbWVSZWdleChuYW1lczogc3RyaW5nW10pOiBSZWdFeHAgfCBudWxsIHtcbiAgY29uc3QgZXNjYXBlZCA9IG5hbWVzXG4gICAgLmZpbHRlcigobmFtZSkgPT4gQm9vbGVhbihuYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAubWFwKChuYW1lKSA9PiBlc2NhcGVSZWdFeHAobmFtZSkpO1xuICBpZiAoIWVzY2FwZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgYCg/PCFbQS1aYS16MC05XSkoJHtlc2NhcGVkLmpvaW4oJ3wnKX0pKD8hW0EtWmEtejAtOV0pYCxcbiAgICAnZycsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZElubGluZU5hbWVUeXBlTWFwKFxuICBwZXROYW1lczogc3RyaW5nW10sXG4gIHRveU5hbWVzOiBzdHJpbmdbXSxcbiAgZXF1aXBtZW50TmFtZXM6IHN0cmluZ1tdLFxuKTogTWFwPHN0cmluZywgSW5saW5lSWNvblR5cGU+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIElubGluZUljb25UeXBlPigpO1xuICBmb3IgKGNvbnN0IG5hbWUgb2YgZXF1aXBtZW50TmFtZXMpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgbWFwLnNldChuYW1lLCAnZXF1aXBtZW50Jyk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgbmFtZSBvZiB0b3lOYW1lcykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBtYXAuc2V0KG5hbWUsICd0b3knKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBuYW1lIG9mIHBldE5hbWVzKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIG1hcC5zZXQobmFtZSwgJ3BldCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbmxpbmVOYW1lUmVnZXgoXG4gIHBldE5hbWVzOiBzdHJpbmdbXSxcbiAgdG95TmFtZXM6IHN0cmluZ1tdLFxuICBlcXVpcG1lbnROYW1lczogc3RyaW5nW10sXG4pOiBSZWdFeHAgfCBudWxsIHtcbiAgY29uc3QgY29tYmluZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcGV0TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gbmFtZSAmJiBjb21iaW5lZC5hZGQobmFtZSkpO1xuICB0b3lOYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBuYW1lICYmIGNvbWJpbmVkLmFkZChuYW1lKSk7XG4gIGVxdWlwbWVudE5hbWVzLmZvckVhY2goKG5hbWUpID0+IG5hbWUgJiYgY29tYmluZWQuYWRkKG5hbWUpKTtcbiAgcmV0dXJuIGJ1aWxkTmFtZVJlZ2V4KEFycmF5LmZyb20oY29tYmluZWQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29yYXRlSW5saW5lSWNvbnMoXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgaW5saW5lTmFtZVJlZ2V4OiBSZWdFeHAgfCBudWxsLFxuICBpbmxpbmVOYW1lVHlwZU1hcDogTWFwPHN0cmluZywgSW5saW5lSWNvblR5cGU+LFxuICBhaWxtZW50TmFtZXM6IFNldDxzdHJpbmc+LFxuKTogc3RyaW5nIHtcbiAgaWYgKCFtZXNzYWdlIHx8IG1lc3NhZ2UuaW5jbHVkZXMoJzxpbWcnKSB8fCAhaW5saW5lTmFtZVJlZ2V4KSB7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cbiAgbGV0IHVwZGF0ZWQgPSByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKFxuICAgIG1lc3NhZ2UsXG4gICAgaW5saW5lTmFtZVJlZ2V4LFxuICAgIChuYW1lKSA9PiBnZXRJbmxpbmVJY29uUGF0aChuYW1lLCBpbmxpbmVOYW1lVHlwZU1hcCwgYWlsbWVudE5hbWVzKSxcbiAgICAobmFtZSkgPT4gZ2V0SW5saW5lSWNvbkh0bWwobmFtZSwgaW5saW5lTmFtZVR5cGVNYXAsIGFpbG1lbnROYW1lcyksXG4gICk7XG4gIGNvbnN0IG1hbmFJY29uID1cbiAgICAnYXNzZXRzL2FydC9QdWJsaWMvUHVibGljL0ljb25zL1RleHRNYXAtcmVzb3VyY2VzLmFzc2V0cy0zMS1zcGxpdC9tYW5hLnBuZyc7XG4gIGNvbnN0IG1hbmFSZWdleCA9IC8oPzwhW0EtWmEtejAtOV0pbWFuYSg/IVtBLVphLXowLTldKSg/IVxccytQb3Rpb24pL2dpO1xuICB1cGRhdGVkID0gcmVwbGFjZU1hdGNoZXNXaXRoSWNvbnNPdXRzaWRlVGFncyh1cGRhdGVkLCBtYW5hUmVnZXgsICgpID0+IG1hbmFJY29uKTtcbiAgY29uc3QgZXhwSWNvbiA9XG4gICAgJ2Fzc2V0cy9hcnQvUHVibGljL1B1YmxpYy9JY29ucy9UZXh0TWFwLXJlc291cmNlcy5hc3NldHMtMzEtc3BsaXQveHAucG5nJztcbiAgY29uc3QgZXhwUmVnZXggPSAvKD88IVtBLVphLXowLTldKSg/OnhwfGV4cCkoPyFbQS1aYS16MC05XSkvZ2k7XG4gIHVwZGF0ZWQgPSByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKHVwZGF0ZWQsIGV4cFJlZ2V4LCAoKSA9PiBleHBJY29uKTtcbiAgY29uc3QgZ29sZEljb24gPVxuICAgICdhc3NldHMvYXJ0L1B1YmxpYy9QdWJsaWMvSWNvbnMvVGV4dE1hcC1yZXNvdXJjZXMuYXNzZXRzLTMxLXNwbGl0L2dvbGQucG5nJztcbiAgY29uc3QgZ29sZFJlZ2V4ID0gLyg/PCFbQS1aYS16MC05XSlnb2xkKD8hW0EtWmEtejAtOV0pL2dpO1xuICB1cGRhdGVkID0gcmVwbGFjZU1hdGNoZXNXaXRoSWNvbnNPdXRzaWRlVGFncyh1cGRhdGVkLCBnb2xkUmVnZXgsICgpID0+IGdvbGRJY29uKTtcbiAgY29uc3QgdHJ1bXBldEljb24gPVxuICAgICdhc3NldHMvYXJ0L1B1YmxpYy9QdWJsaWMvSWNvbnMvVGV4dE1hcC1yZXNvdXJjZXMuYXNzZXRzLTMxLXNwbGl0L3RydW1wZXQucG5nJztcbiAgY29uc3QgdHJ1bXBldFJlZ2V4ID0gLyg/PCFbQS1aYS16MC05XSl0cnVtcGV0cz8oPyFbQS1aYS16MC05XSkvZ2k7XG4gIHVwZGF0ZWQgPSByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKFxuICAgIHVwZGF0ZWQsXG4gICAgdHJ1bXBldFJlZ2V4LFxuICAgICgpID0+IHRydW1wZXRJY29uLFxuICApO1xuICByZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElubGluZUljb25QYXRoKFxuICBuYW1lOiBzdHJpbmcsXG4gIGlubGluZU5hbWVUeXBlTWFwOiBNYXA8c3RyaW5nLCBJbmxpbmVJY29uVHlwZT4sXG4gIGFpbG1lbnROYW1lczogU2V0PHN0cmluZz4sXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgdHlwZSA9IGlubGluZU5hbWVUeXBlTWFwLmdldChuYW1lKSA/PyBudWxsO1xuICBpZiAodHlwZSA9PT0gJ3BldCcpIHtcbiAgICByZXR1cm4gZ2V0UGV0SWNvblBhdGgobmFtZSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICd0b3knKSB7XG4gICAgcmV0dXJuIGdldFRveUljb25QYXRoKG5hbWUpO1xuICB9XG4gIGlmICh0eXBlID09PSAnZXF1aXBtZW50Jykge1xuICAgIGNvbnN0IGlzQWlsbWVudCA9IGFpbG1lbnROYW1lcy5oYXMobmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIGdldEVxdWlwbWVudEljb25QYXRoKG5hbWUsIGlzQWlsbWVudCkgPz8gZ2V0RXF1aXBtZW50SWNvblBhdGgobmFtZSwgIWlzQWlsbWVudClcbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5saW5lSWNvbkh0bWwoXG4gIG5hbWU6IHN0cmluZyxcbiAgaW5saW5lTmFtZVR5cGVNYXA6IE1hcDxzdHJpbmcsIElubGluZUljb25UeXBlPixcbiAgYWlsbWVudE5hbWVzOiBTZXQ8c3RyaW5nPixcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB0eXBlID0gaW5saW5lTmFtZVR5cGVNYXAuZ2V0KG5hbWUpID8/IG51bGw7XG4gIGlmICh0eXBlICE9PSAnZXF1aXBtZW50Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGlzQWlsbWVudCA9IGFpbG1lbnROYW1lcy5oYXMobmFtZSk7XG4gIGNvbnN0IHByaW1hcnkgPSBnZXRFcXVpcG1lbnRJY29uUGF0aChuYW1lLCBpc0FpbG1lbnQpO1xuICBpZiAoIXByaW1hcnkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzZWNvbmRhcnkgPSBnZXRFcXVpcG1lbnRJY29uUGF0aChuYW1lLCAhaXNBaWxtZW50KTtcbiAgY29uc3Qgc2Vjb25kYXJ5QXR0ciA9IHNlY29uZGFyeVxuICAgID8gYHRoaXMuZGF0YXNldC5zdGVwPScxJzt0aGlzLnNyYz0nJHtzZWNvbmRhcnl9JztgXG4gICAgOiBgdGhpcy5kYXRhc2V0LnN0ZXA9JzEnO2A7XG4gIHJldHVybiBgPGltZyBzcmM9XCIke3ByaW1hcnl9XCIgY2xhc3M9XCJsb2ctaW5saW5lLWljb25cIiBhbHQ9XCIke25hbWV9XCIgb25lcnJvcj1cImlmKCF0aGlzLmRhdGFzZXQuc3RlcCl7JHtzZWNvbmRhcnlBdHRyfXJldHVybjt9dGhpcy5yZW1vdmUoKTtcIj4gJHtuYW1lfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTWF0Y2hlc1dpdGhJY29uc091dHNpZGVUYWdzKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHJlZ2V4OiBSZWdFeHAsXG4gIGdldEljb246IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZyB8IG51bGwsXG4gIGdldEh0bWw/OiAobmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcgfCBudWxsKSA9PiBzdHJpbmcgfCBudWxsLFxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1lc3NhZ2VcbiAgICAuc3BsaXQoLyg8W14+XSs+KS9nKVxuICAgIC5tYXAoKHNlZ21lbnQpID0+XG4gICAgICBzZWdtZW50LnN0YXJ0c1dpdGgoJzwnKVxuICAgICAgICA/IHNlZ21lbnRcbiAgICAgICAgOiByZXBsYWNlTWF0Y2hlc1dpdGhJY29ucyhzZWdtZW50LCByZWdleCwgZ2V0SWNvbiwgZ2V0SHRtbCksXG4gICAgKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU1hdGNoZXNXaXRoSWNvbnMoXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgcmVnZXg6IFJlZ0V4cCxcbiAgZ2V0SWNvbjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nIHwgbnVsbCxcbiAgZ2V0SHRtbD86IChuYW1lOiBzdHJpbmcsIGljb246IHN0cmluZyB8IG51bGwpID0+IHN0cmluZyB8IG51bGwsXG4pOiBzdHJpbmcge1xuICBpZiAoIXJlZ2V4KSB7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShyZWdleCwgKG1hdGNoKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IGdldEljb24obWF0Y2gpO1xuICAgIGlmIChnZXRIdG1sKSB7XG4gICAgICBjb25zdCBodG1sID0gZ2V0SHRtbChtYXRjaCwgaWNvbik7XG4gICAgICBpZiAoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuICAgIHJldHVybiBgPGltZyBzcmM9XCIke2ljb259XCIgY2xhc3M9XCJsb2ctaW5saW5lLWljb25cIiBhbHQ9XCIke21hdGNofVwiIG9uZXJyb3I9XCJ0aGlzLnJlbW92ZSgpXCI+ICR7bWF0Y2h9YDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG4iLCAiaW1wb3J0IHsgTG9nIH0gZnJvbSAnYXBwL2RvbWFpbi9pbnRlcmZhY2VzL2xvZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVyZ2VkQXR0YWNrSGVhbHRoTWVzc2FnZShcbiAgbGFzdExvZzogTG9nIHwgdW5kZWZpbmVkLFxuICBuZXh0TG9nOiBMb2csXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFsYXN0TG9nIHx8ICFuZXh0TG9nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cubm9Db2xsYXBzZSB8fCBuZXh0TG9nLm5vQ29sbGFwc2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5wbGF5ZXIgIT09IG5leHRMb2cucGxheWVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cudHlwZSAhPT0gbmV4dExvZy50eXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cucmFuZG9tRXZlbnQgIT09IG5leHRMb2cucmFuZG9tRXZlbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobGFzdExvZy5yYW5kb21FdmVudFJlYXNvbiAhPT0gbmV4dExvZy5yYW5kb21FdmVudFJlYXNvbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChcbiAgICBsYXN0TG9nLnNvdXJjZVBldCAhPT0gbmV4dExvZy5zb3VyY2VQZXQgfHxcbiAgICBsYXN0TG9nLnNvdXJjZUluZGV4ICE9PSBuZXh0TG9nLnNvdXJjZUluZGV4XG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChcbiAgICBsYXN0TG9nLnRhcmdldFBldCAhPT0gbmV4dExvZy50YXJnZXRQZXQgfHxcbiAgICBsYXN0TG9nLnRhcmdldEluZGV4ICE9PSBuZXh0TG9nLnRhcmdldEluZGV4XG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChsYXN0TG9nLnRpZ2VyICE9PSBuZXh0TG9nLnRpZ2VyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cucHVtYSAhPT0gbmV4dExvZy5wdW1hKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGxhc3RMb2cucHRlcmFub2RvbiAhPT0gbmV4dExvZy5wdGVyYW5vZG9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbGFzdFBhbnRoZXIgPSBsYXN0TG9nLnBhbnRoZXJNdWx0aXBsaWVyID8/IG51bGw7XG4gIGNvbnN0IG5leHRQYW50aGVyID0gbmV4dExvZy5wYW50aGVyTXVsdGlwbGllciA/PyBudWxsO1xuICBpZiAobGFzdFBhbnRoZXIgIT09IG5leHRQYW50aGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsYXN0VGV4dCA9IHN0cmlwVGFncyhsYXN0TG9nLnJhd01lc3NhZ2UgPz8gbGFzdExvZy5tZXNzYWdlID8/ICcnKTtcbiAgY29uc3QgbmV4dFRleHQgPSBzdHJpcFRhZ3MobmV4dExvZy5yYXdNZXNzYWdlID8/IG5leHRMb2cubWVzc2FnZSA/PyAnJyk7XG4gIGlmICghbGFzdFRleHQgfHwgIW5leHRUZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKFxuICAgIGxhc3RUZXh0LmluY2x1ZGVzKCcgYXR0YWNrIGFuZCAnKSB8fFxuICAgIGxhc3RUZXh0LmluY2x1ZGVzKCcgaGVhbHRoIGFuZCAnKSB8fFxuICAgIG5leHRUZXh0LmluY2x1ZGVzKCcgYXR0YWNrIGFuZCAnKSB8fFxuICAgIG5leHRUZXh0LmluY2x1ZGVzKCcgaGVhbHRoIGFuZCAnKVxuICApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgY29tYmluZUF0dGFja0hlYWx0aExvZ3MobGFzdFRleHQsIG5leHRUZXh0KSA/P1xuICAgIGNvbWJpbmVBdHRhY2tIZWFsdGhMb2dzKG5leHRUZXh0LCBsYXN0VGV4dClcbiAgKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUF0dGFja0hlYWx0aExvZ3MoXG4gIGF0dGFja0xvZzogc3RyaW5nLFxuICBoZWFsdGhMb2c6IHN0cmluZyxcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBsb3NzQXR0YWNrID0gcGFyc2VTdGF0TG9nKGF0dGFja0xvZywgJ2xvc3QnLCAnYXR0YWNrJyk7XG4gIGNvbnN0IGxvc3NIZWFsdGggPSBwYXJzZVN0YXRMb2coaGVhbHRoTG9nLCAnbG9zdCcsICdoZWFsdGgnKTtcbiAgaWYgKGxvc3NBdHRhY2sgJiYgbG9zc0hlYWx0aCkge1xuICAgIGlmIChcbiAgICAgIGxvc3NBdHRhY2sucHJlZml4ID09PSBsb3NzSGVhbHRoLnByZWZpeCAmJlxuICAgICAgbG9zc0F0dGFjay5zdWZmaXggPT09IGxvc3NIZWFsdGguc3VmZml4XG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7bG9zc0F0dGFjay5wcmVmaXh9JHtsb3NzQXR0YWNrLnZhbHVlfSBhdHRhY2sgYW5kICR7bG9zc0hlYWx0aC52YWx1ZX0gaGVhbHRoJHtsb3NzQXR0YWNrLnN1ZmZpeH1gO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhaW5BdHRhY2sgPSBwYXJzZVN0YXRMb2coYXR0YWNrTG9nLCAnZ2F2ZScsICdhdHRhY2snKTtcbiAgY29uc3QgZ2FpbkhlYWx0aCA9IHBhcnNlU3RhdExvZyhoZWFsdGhMb2csICdnYXZlJywgJ2hlYWx0aCcpO1xuICBpZiAoZ2FpbkF0dGFjayAmJiBnYWluSGVhbHRoKSB7XG4gICAgaWYgKFxuICAgICAgZ2FpbkF0dGFjay5wcmVmaXggPT09IGdhaW5IZWFsdGgucHJlZml4ICYmXG4gICAgICBnYWluQXR0YWNrLnN1ZmZpeCA9PT0gZ2FpbkhlYWx0aC5zdWZmaXhcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtnYWluQXR0YWNrLnByZWZpeH0ke2dhaW5BdHRhY2sucGx1c30ke2dhaW5BdHRhY2sudmFsdWV9IGF0dGFjayBhbmQgJHtnYWluSGVhbHRoLnBsdXN9JHtnYWluSGVhbHRoLnZhbHVlfSBoZWFsdGgke2dhaW5BdHRhY2suc3VmZml4fWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhdExvZyhcbiAgbWVzc2FnZTogc3RyaW5nLFxuICB2ZXJiOiAnbG9zdCcgfCAnZ2F2ZScsXG4gIHN0YXQ6ICdhdHRhY2snIHwgJ2hlYWx0aCcsXG4pOiB7IHByZWZpeDogc3RyaW5nOyBwbHVzOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHN1ZmZpeDogc3RyaW5nIH0gfCBudWxsIHtcbiAgaWYgKHZlcmIgPT09ICdsb3N0Jykge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiguKlxcXFxibG9zdFxcXFxzKykoXFxcXGQrKVxcXFxzKyR7c3RhdH1cXFxcYiguKikkYCwgJ2knKTtcbiAgICBjb25zdCBtYXRjaCA9IG1lc3NhZ2UubWF0Y2gocmVnZXgpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBtYXRjaFsxXSxcbiAgICAgIHBsdXM6ICcnLFxuICAgICAgdmFsdWU6IG1hdGNoWzJdLFxuICAgICAgc3VmZml4OiBtYXRjaFszXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIGBeKC4qXFxcXGIoPzpnYXZlfGdpdmV8Z2l2ZXMpXFxcXGIuKj9cXFxccyspKFxcXFwrPykoXFxcXGQrKVxcXFxzKyR7c3RhdH1cXFxcYiguKikkYCxcbiAgICAnaScsXG4gICk7XG4gIGNvbnN0IG1hdGNoID0gbWVzc2FnZS5tYXRjaChyZWdleCk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWZpeDogbWF0Y2hbMV0sXG4gICAgcGx1czogbWF0Y2hbMl0gPz8gJycsXG4gICAgdmFsdWU6IG1hdGNoWzNdLFxuICAgIHN1ZmZpeDogbWF0Y2hbNF0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmlwVGFncyhtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC88W14+XSs+L2csICcnKS50cmltKCk7XG59XG4iLCAiaW1wb3J0IHsgUGV0IH0gZnJvbSAnYXBwL2RvbWFpbi9lbnRpdGllcy9wZXQuY2xhc3MnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnYXBwL2RvbWFpbi9lbnRpdGllcy9wbGF5ZXIuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RXF1aXBtZW50SWNvblBhdGgsIGdldFBldEljb25QYXRoIH0gZnJvbSAnYXBwL3J1bnRpbWUvYXNzZXQtY2F0YWxvZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEJvYXJkU3RhdGVNZXNzYWdlKFxuICBwbGF5ZXI6IFBsYXllcixcbiAgb3Bwb25lbnQ6IFBsYXllcixcbiAgZ2V0RnJvbnRJbmRleDogKHBldDogUGV0KSA9PiBudW1iZXIgfCBudWxsLFxuICBpc0FpbG1lbnROYW1lOiAobmFtZTogc3RyaW5nKSA9PiBib29sZWFuLFxuKTogc3RyaW5nIHtcbiAgbGV0IHBsYXllclN0YXRlID0gJyc7XG4gIGlmIChwbGF5ZXIudG95KSB7XG4gICAgcGxheWVyU3RhdGUgKz0gYHt7dG95OiR7cGxheWVyLnRveS5uYW1lfX19IGA7XG4gIH1cbiAgaWYgKHBsYXllci5oYXJkVG95KSB7XG4gICAgcGxheWVyU3RhdGUgKz0gYHt7aGFyZHRveToke3BsYXllci5oYXJkVG95Lm5hbWV9fX0gYDtcbiAgfVxuICBwbGF5ZXJTdGF0ZSArPSByZW5kZXJQZXRUZXh0KHBsYXllci5wZXQ0LCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgcGxheWVyU3RhdGUgKz0gcmVuZGVyUGV0VGV4dChwbGF5ZXIucGV0MywgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIHBsYXllclN0YXRlICs9IHJlbmRlclBldFRleHQocGxheWVyLnBldDIsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBwbGF5ZXJTdGF0ZSArPSByZW5kZXJQZXRUZXh0KHBsYXllci5wZXQxLCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgcGxheWVyU3RhdGUgKz0gcmVuZGVyUGV0VGV4dChwbGF5ZXIucGV0MCwgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG5cbiAgbGV0IG9wcG9uZW50U3RhdGUgPSAnJztcbiAgb3Bwb25lbnRTdGF0ZSArPSByZW5kZXJQZXRUZXh0KG9wcG9uZW50LnBldDAsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBvcHBvbmVudFN0YXRlICs9IHJlbmRlclBldFRleHQob3Bwb25lbnQucGV0MSwgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIG9wcG9uZW50U3RhdGUgKz0gcmVuZGVyUGV0VGV4dChvcHBvbmVudC5wZXQyLCBnZXRGcm9udEluZGV4LCBpc0FpbG1lbnROYW1lKTtcbiAgb3Bwb25lbnRTdGF0ZSArPSByZW5kZXJQZXRUZXh0KG9wcG9uZW50LnBldDMsIGdldEZyb250SW5kZXgsIGlzQWlsbWVudE5hbWUpO1xuICBvcHBvbmVudFN0YXRlICs9IHJlbmRlclBldFRleHQob3Bwb25lbnQucGV0NCwgZ2V0RnJvbnRJbmRleCwgaXNBaWxtZW50TmFtZSk7XG4gIGlmIChvcHBvbmVudC50b3kpIHtcbiAgICBvcHBvbmVudFN0YXRlICs9IGB7e3RveToke29wcG9uZW50LnRveS5uYW1lfX19IGA7XG4gIH1cbiAgaWYgKG9wcG9uZW50LmhhcmRUb3kpIHtcbiAgICBvcHBvbmVudFN0YXRlICs9IGB7e2hhcmR0b3k6JHtvcHBvbmVudC5oYXJkVG95Lm5hbWV9fX0gYDtcbiAgfVxuXG4gIHJldHVybiBgJHtwbGF5ZXJTdGF0ZX18ICR7b3Bwb25lbnRTdGF0ZX1gO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQZXRUZXh0KFxuICBwZXQ6IFBldCB8IHVuZGVmaW5lZCxcbiAgZ2V0RnJvbnRJbmRleDogKHBldDogUGV0KSA9PiBudW1iZXIgfCBudWxsLFxuICBpc0FpbG1lbnROYW1lOiAobmFtZTogc3RyaW5nKSA9PiBib29sZWFuLFxuKTogc3RyaW5nIHtcbiAgaWYgKHBldCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICdfX18gKC0vLSkgJztcbiAgfVxuICBjb25zdCBpbmRleCA9IGdldEZyb250SW5kZXgocGV0KTtcbiAgY29uc3QgbGFiZWwgPSBpbmRleCAhPSBudWxsID8gYCR7cGV0LnBhcmVudD8uaXNPcHBvbmVudCA/ICdPJyA6ICdQJ30ke2luZGV4fSBgIDogJyc7XG4gIGNvbnN0IGljb25QYXRoID0gZ2V0UGV0SWNvblBhdGgocGV0Lm5hbWUpO1xuICBjb25zdCBwZXREaXNwbGF5ID0gaWNvblBhdGhcbiAgICA/IGA8aW1nIHNyYz1cIiR7aWNvblBhdGh9XCIgY2xhc3M9XCJsb2ctcGV0LWljb25cIiBhbHQ9XCIke3BldC5uYW1lfVwiPmBcbiAgICA6ICcnO1xuICBjb25zdCBlcXVpcG1lbnROYW1lID1cbiAgICB0eXBlb2YgKHBldC5lcXVpcG1lbnQgYXMgeyBuYW1lPzogc3RyaW5nIH0pPy5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgPyAocGV0LmVxdWlwbWVudCBhcyB7IG5hbWU/OiBzdHJpbmcgfSkubmFtZVxuICAgICAgOiBudWxsO1xuICBjb25zdCBlcXVpcG1lbnREaXNwbGF5ID0gZXF1aXBtZW50TmFtZVxuICAgID8gKCgpID0+IHtcbiAgICAgIGNvbnN0IGlzQWlsbWVudCA9IGlzQWlsbWVudE5hbWUoZXF1aXBtZW50TmFtZSk7XG4gICAgICBjb25zdCBwcmltYXJ5ID1cbiAgICAgICAgZ2V0RXF1aXBtZW50SWNvblBhdGgoZXF1aXBtZW50TmFtZSwgaXNBaWxtZW50KSA/P1xuICAgICAgICBnZXRFcXVpcG1lbnRJY29uUGF0aChlcXVpcG1lbnROYW1lLCAhaXNBaWxtZW50KTtcbiAgICAgIGlmICghcHJpbWFyeSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWNvbmRhcnkgPSBnZXRFcXVpcG1lbnRJY29uUGF0aChlcXVpcG1lbnROYW1lLCAhaXNBaWxtZW50KTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeUF0dHIgPSBzZWNvbmRhcnlcbiAgICAgICAgPyBgdGhpcy5kYXRhc2V0LnN0ZXA9JzEnO3RoaXMuc3JjPScke3NlY29uZGFyeX0nO2BcbiAgICAgICAgOiBgdGhpcy5kYXRhc2V0LnN0ZXA9JzEnO2A7XG4gICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtwcmltYXJ5fVwiIGNsYXNzPVwibG9nLWlubGluZS1pY29uXCIgYWx0PVwiJHtlcXVpcG1lbnROYW1lfVwiIG9uZXJyb3I9XCJpZighdGhpcy5kYXRhc2V0LnN0ZXApeyR7c2Vjb25kYXJ5QXR0cn1yZXR1cm47fXRoaXMucmVtb3ZlKClcIj5gO1xuICAgIH0pKClcbiAgICA6ICcnO1xuICBjb25zdCBtYW5hVmFsdWUgPSBOdW1iZXIuaXNGaW5pdGUocGV0Lm1hbmEpID8gTWF0aC5tYXgoMCwgTWF0aC50cnVuYyhwZXQubWFuYSkpIDogMDtcbiAgY29uc3QgbWFuYVN1ZmZpeCA9IG1hbmFWYWx1ZSA+IDAgPyBgLyR7bWFuYVZhbHVlfW1hbmFgIDogJyc7XG5cbiAgcmV0dXJuIGAke2xhYmVsfSR7cGV0RGlzcGxheX0ke2VxdWlwbWVudERpc3BsYXl9KCR7cGV0LmF0dGFja30vJHtwZXQuaGVhbHRofS8ke3BldC5leHB9eHAke21hbmFTdWZmaXh9KSBgO1xufVxuIiwgImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZyB9IGZyb20gJ2FwcC9kb21haW4vaW50ZXJmYWNlcy9sb2cuaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIGdldEFsbEVxdWlwbWVudE5hbWVzLFxuICBnZXRBbGxQZXROYW1lcyxcbiAgZ2V0QWxsVG95TmFtZXMsXG59IGZyb20gJ2FwcC9ydW50aW1lL2Fzc2V0LWNhdGFsb2cnO1xuaW1wb3J0IHsgUGV0IH0gZnJvbSAnYXBwL2RvbWFpbi9lbnRpdGllcy9wZXQuY2xhc3MnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnYXBwL2RvbWFpbi9lbnRpdGllcy9wbGF5ZXIuY2xhc3MnO1xuaW1wb3J0IHsgQUlMTUVOVF9DQVRFR09SSUVTIH0gZnJvbSAnLi9lcXVpcG1lbnQvZXF1aXBtZW50LWNhdGVnb3JpZXMnO1xuaW1wb3J0IHtcbiAgYnVpbGRJbmxpbmVOYW1lUmVnZXgsXG4gIGJ1aWxkSW5saW5lTmFtZVR5cGVNYXAsXG4gIGJ1aWxkTmFtZVJlZ2V4LFxuICBkZWNvcmF0ZUlubGluZUljb25zLFxufSBmcm9tICcuL2xvZy9sb2ctaW5saW5lLWljb25zJztcbmltcG9ydCB7IGdldE1lcmdlZEF0dGFja0hlYWx0aE1lc3NhZ2UgfSBmcm9tICcuL2xvZy9sb2ctbWVyZ2UtdXRpbHMnO1xuaW1wb3J0IHsgYnVpbGRCb2FyZFN0YXRlTWVzc2FnZSB9IGZyb20gJy4vbG9nL2xvZy1ib2FyZC1yZW5kZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG4gIHByaXZhdGUgbG9nczogTG9nW10gPSBbXTtcbiAgcHJpdmF0ZSBwZXROYW1lUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSB0b3lOYW1lUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBlcXVpcG1lbnROYW1lUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBpbmxpbmVOYW1lUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBpbmxpbmVOYW1lVHlwZU1hcDogTWFwPHN0cmluZywgJ3BldCcgfCAndG95JyB8ICdlcXVpcG1lbnQnPjtcbiAgcHJpdmF0ZSBhaWxtZW50TmFtZXM6IFNldDxzdHJpbmc+O1xuICBwcml2YXRlIGVuYWJsZWQgPSB0cnVlO1xuICBwcml2YXRlIGRlZmVyRGVjb3JhdGlvbnMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaG93VHJpZ2dlck5hbWVzSW5Mb2dzID0gZmFsc2U7XG4gIHByaXZhdGUgZGVidWdTdW1tb25Cb2FyZFN0YXRlTG9ncyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwZXROYW1lcyA9IGdldEFsbFBldE5hbWVzKCk7XG4gICAgY29uc3QgdG95TmFtZXMgPSBnZXRBbGxUb3lOYW1lcygpO1xuICAgIGNvbnN0IGVxdWlwbWVudE5hbWVzID0gZ2V0QWxsRXF1aXBtZW50TmFtZXMoKTtcbiAgICB0aGlzLnBldE5hbWVSZWdleCA9IGJ1aWxkTmFtZVJlZ2V4KHBldE5hbWVzKTtcbiAgICB0aGlzLnRveU5hbWVSZWdleCA9IGJ1aWxkTmFtZVJlZ2V4KHRveU5hbWVzKTtcbiAgICB0aGlzLmVxdWlwbWVudE5hbWVSZWdleCA9IGJ1aWxkTmFtZVJlZ2V4KGVxdWlwbWVudE5hbWVzKTtcbiAgICB0aGlzLmlubGluZU5hbWVUeXBlTWFwID0gYnVpbGRJbmxpbmVOYW1lVHlwZU1hcChcbiAgICAgIHBldE5hbWVzLFxuICAgICAgdG95TmFtZXMsXG4gICAgICBlcXVpcG1lbnROYW1lcyxcbiAgICApO1xuICAgIHRoaXMuaW5saW5lTmFtZVJlZ2V4ID0gYnVpbGRJbmxpbmVOYW1lUmVnZXgoXG4gICAgICBwZXROYW1lcyxcbiAgICAgIHRveU5hbWVzLFxuICAgICAgZXF1aXBtZW50TmFtZXMsXG4gICAgKTtcbiAgICB0aGlzLmFpbG1lbnROYW1lcyA9IG5ldyBTZXQoXG4gICAgICBPYmplY3QudmFsdWVzKEFJTE1FTlRfQ0FURUdPUklFUykuZmxhdCgpLmZpbHRlcihCb29sZWFuKSxcbiAgICApO1xuICB9XG5cbiAgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbmFibGVkID0gQm9vbGVhbihlbmFibGVkKTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5sb2dzID0gW107XG4gICAgfVxuICB9XG5cbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWQ7XG4gIH1cblxuICBzZXREZWZlckRlY29yYXRpb25zKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRlZmVyRGVjb3JhdGlvbnMgPSBCb29sZWFuKGVuYWJsZWQpO1xuICB9XG5cbiAgaXNEZWZlckRlY29yYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmVyRGVjb3JhdGlvbnM7XG4gIH1cblxuICBzZXRTaG93VHJpZ2dlck5hbWVzSW5Mb2dzKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dUcmlnZ2VyTmFtZXNJbkxvZ3MgPSBCb29sZWFuKGVuYWJsZWQpO1xuICB9XG5cbiAgaXNTaG93VHJpZ2dlck5hbWVzSW5Mb2dzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dUcmlnZ2VyTmFtZXNJbkxvZ3M7XG4gIH1cblxuICBzZXREZWJ1Z1N1bW1vbkJvYXJkU3RhdGVMb2dzKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRlYnVnU3VtbW9uQm9hcmRTdGF0ZUxvZ3MgPSBCb29sZWFuKGVuYWJsZWQpO1xuICB9XG5cbiAgaXNEZWJ1Z1N1bW1vbkJvYXJkU3RhdGVMb2dzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlYnVnU3VtbW9uQm9hcmRTdGF0ZUxvZ3M7XG4gIH1cblxuICBkZWNvcmF0ZUxvZ0lmTmVlZGVkKGxvZzogTG9nKSB7XG4gICAgaWYgKCFsb2cgfHwgbG9nLmRlY29yYXRlZCB8fCAhbG9nLnJhd01lc3NhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZGVjb3JhdGVNZXNzYWdlV2l0aE5hbWVzKFxuICAgICAgbG9nLnJhd01lc3NhZ2UsXG4gICAgICBsb2cuc291cmNlUGV0LFxuICAgICAgbG9nLnRhcmdldFBldCxcbiAgICAgIGxvZy5zb3VyY2VJbmRleCxcbiAgICAgIGxvZy50YXJnZXRJbmRleCxcbiAgICApO1xuICAgIGxvZy5tZXNzYWdlID0gZGVjb3JhdGVJbmxpbmVJY29ucyhcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aGlzLmlubGluZU5hbWVSZWdleCxcbiAgICAgIHRoaXMuaW5saW5lTmFtZVR5cGVNYXAsXG4gICAgICB0aGlzLmFpbG1lbnROYW1lcyxcbiAgICApO1xuICAgIGxvZy5kZWNvcmF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgY3JlYXRlTG9nKGxvZzogTG9nKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxvZy5tZXNzYWdlPy5zdGFydHNXaXRoKCdQaGFzZSAnKSkge1xuICAgICAgbG9nLmJvbGQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnJlc29sdmVMb2dNZXRhZGF0YShsb2cpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmRlY29yYXRlTG9nTWVzc2FnZShsb2cpO1xuICAgIG1lc3NhZ2UgPSB0aGlzLmFwcGVuZFRhZ1N1ZmZpeGVzKG1lc3NhZ2UsIGxvZyk7XG4gICAgdGhpcy5wZXJzaXN0RGVjb3JhdGVkTWVzc2FnZShsb2csIG1lc3NhZ2UpO1xuXG4gICAgY29uc3QgbGFzdExvZyA9IHRoaXMubG9nc1t0aGlzLmxvZ3MubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgc2hvdWxkQXBwZW5kU3VtbW9uQm9hcmQgPSB0aGlzLnNob3VsZEFwcGVuZFN1bW1vbkJvYXJkU3RhdGUobG9nKTtcbiAgICBpZiAodGhpcy50cnlNZXJnZUF0dGFja0hlYWx0aExvZ3MobGFzdExvZywgbG9nKSkge1xuICAgICAgaWYgKHNob3VsZEFwcGVuZFN1bW1vbkJvYXJkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3VtbW9uQm9hcmRTdGF0ZUxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG91bGRDb2xsYXBzZUxvZyhsYXN0TG9nLCBsb2cpKSB7XG4gICAgICBsYXN0TG9nLmNvdW50ID0gKGxhc3RMb2cuY291bnQgPz8gMSkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ3MucHVzaChsb2cpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRBcHBlbmRTdW1tb25Cb2FyZCkge1xuICAgICAgdGhpcy5hcHBlbmRTdW1tb25Cb2FyZFN0YXRlTG9nKGxvZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTG9nTWV0YWRhdGEobG9nOiBMb2cpOiB2b2lkIHtcbiAgICBpZiAoIWxvZy5zb3VyY2VQZXQgJiYgbG9nLnBsYXllciAmJiBsb2cubWVzc2FnZSkge1xuICAgICAgY29uc3QgcG9zc2libGVQZXRzID0gbG9nLnBsYXllci5wZXRBcnJheS5maWx0ZXIoXG4gICAgICAgIChwKSA9PiBwICYmIGxvZy5tZXNzYWdlLnN0YXJ0c1dpdGgocC5uYW1lKSxcbiAgICAgICk7XG4gICAgICBpZiAocG9zc2libGVQZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBsb2cuc291cmNlUGV0ID0gcG9zc2libGVQZXRzWzBdIGFzIFBldDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxvZy50eXBlID09PSAnYXR0YWNrJyAmJiBsb2cucGxheWVyICYmIGxvZy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLnJlc29sdmVBdHRhY2tQZXRzRnJvbU1lc3NhZ2UobG9nKTtcbiAgICB9XG4gICAgaWYgKCFsb2cucmFuZG9tRXZlbnRSZWFzb24gJiYgbG9nLnJhbmRvbUV2ZW50ID09PSB0cnVlKSB7XG4gICAgICBsb2cucmFuZG9tRXZlbnRSZWFzb24gPSAndHJ1ZS1yYW5kb20nO1xuICAgIH1cbiAgICBpZiAobG9nLnBsYXllciAmJiBsb2cubWVzc2FnZSkge1xuICAgICAgdGhpcy5yZXNvbHZlU291cmNlVGFyZ2V0RnJvbU1lc3NhZ2UobG9nKTtcbiAgICB9XG4gICAgaWYgKGxvZy5zb3VyY2VQZXQgJiYgbG9nLnNvdXJjZUluZGV4ID09IG51bGwpIHtcbiAgICAgIGxvZy5zb3VyY2VJbmRleCA9IHRoaXMuZ2V0RnJvbnRJbmRleChsb2cuc291cmNlUGV0KSA/PyB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChsb2cudGFyZ2V0UGV0ICYmIGxvZy50YXJnZXRJbmRleCA9PSBudWxsKSB7XG4gICAgICBsb2cudGFyZ2V0SW5kZXggPSB0aGlzLmdldEZyb250SW5kZXgobG9nLnRhcmdldFBldCkgPz8gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGVMb2dNZXNzYWdlKGxvZzogTG9nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXNzYWdlID0gbG9nLm1lc3NhZ2UgPz8gJyc7XG4gICAgaWYgKHRoaXMuZGVmZXJEZWNvcmF0aW9ucykge1xuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlY29yYXRlTWVzc2FnZVdpdGhOYW1lcyhcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBsb2cuc291cmNlUGV0LFxuICAgICAgbG9nLnRhcmdldFBldCxcbiAgICAgIGxvZy5zb3VyY2VJbmRleCxcbiAgICAgIGxvZy50YXJnZXRJbmRleCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRUYWdTdWZmaXhlcyhtZXNzYWdlOiBzdHJpbmcsIGxvZzogTG9nKTogc3RyaW5nIHtcbiAgICBsZXQgdXBkYXRlZCA9IG1lc3NhZ2U7XG4gICAgaWYgKGxvZy50aWdlcikge1xuICAgICAgdXBkYXRlZCArPSAnIChUaWdlciknO1xuICAgIH1cbiAgICBpZiAobG9nLnB1bWEpIHtcbiAgICAgIHVwZGF0ZWQgKz0gJyAoUHVtYSknO1xuICAgIH1cbiAgICBpZiAobG9nLnB0ZXJhbm9kb24pIHtcbiAgICAgIHVwZGF0ZWQgKz0gJyAoUHRlcmFub2RvbiknO1xuICAgIH1cbiAgICBpZiAobG9nLnBhbnRoZXJNdWx0aXBsaWVyICE9IG51bGwgJiYgbG9nLnBhbnRoZXJNdWx0aXBsaWVyID4gMSkge1xuICAgICAgdXBkYXRlZCArPSBgIHgke2xvZy5wYW50aGVyTXVsdGlwbGllcn0gKFBhbnRoZXIpYDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH1cblxuICBwcml2YXRlIHBlcnNpc3REZWNvcmF0ZWRNZXNzYWdlKGxvZzogTG9nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWZlckRlY29yYXRpb25zKSB7XG4gICAgICBsb2cucmF3TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICBsb2cubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICBsb2cuZGVjb3JhdGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9nLm1lc3NhZ2UgPSBkZWNvcmF0ZUlubGluZUljb25zKFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRoaXMuaW5saW5lTmFtZVJlZ2V4LFxuICAgICAgdGhpcy5pbmxpbmVOYW1lVHlwZU1hcCxcbiAgICAgIHRoaXMuYWlsbWVudE5hbWVzLFxuICAgICk7XG4gICAgbG9nLmRlY29yYXRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZENvbGxhcHNlTG9nKGxhc3RMb2c6IExvZyB8IHVuZGVmaW5lZCwgbG9nOiBMb2cpOiBsYXN0TG9nIGlzIExvZyB7XG4gICAgaWYgKCFsYXN0TG9nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChsYXN0TG9nLm5vQ29sbGFwc2UgfHwgbG9nLm5vQ29sbGFwc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW1lUGxheWVyID0gbGFzdExvZy5wbGF5ZXIgPT09IGxvZy5wbGF5ZXI7XG4gICAgY29uc3Qgc2FtZU1lc3NhZ2UgPSBsYXN0TG9nLm1lc3NhZ2U/LnRyaW0oKSA9PT0gbG9nLm1lc3NhZ2U/LnRyaW0oKTtcbiAgICBjb25zdCBzYW1lUmFuZG9tID0gbGFzdExvZy5yYW5kb21FdmVudCA9PT0gbG9nLnJhbmRvbUV2ZW50O1xuICAgIGNvbnN0IHNhbWVSYW5kb21SZWFzb24gPVxuICAgICAgbGFzdExvZy5yYW5kb21FdmVudFJlYXNvbiA9PT0gbG9nLnJhbmRvbUV2ZW50UmVhc29uO1xuICAgIGNvbnN0IHNhbWVTb3VyY2UgPVxuICAgICAgbGFzdExvZy5zb3VyY2VQZXQgPT09IGxvZy5zb3VyY2VQZXQgJiZcbiAgICAgIGxhc3RMb2cuc291cmNlSW5kZXggPT09IGxvZy5zb3VyY2VJbmRleDtcbiAgICBjb25zdCBzYW1lVGFyZ2V0ID1cbiAgICAgIGxhc3RMb2cudGFyZ2V0UGV0ID09PSBsb2cudGFyZ2V0UGV0ICYmXG4gICAgICBsYXN0TG9nLnRhcmdldEluZGV4ID09PSBsb2cudGFyZ2V0SW5kZXg7XG4gICAgY29uc3QgaGFzU291cmNlT3JUYXJnZXQgPVxuICAgICAgbG9nLnNvdXJjZVBldCAhPSBudWxsIHx8XG4gICAgICBsb2cudGFyZ2V0UGV0ICE9IG51bGwgfHxcbiAgICAgIGxvZy5zb3VyY2VJbmRleCAhPSBudWxsIHx8XG4gICAgICBsb2cudGFyZ2V0SW5kZXggIT0gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICBzYW1lTWVzc2FnZSAmJlxuICAgICAgc2FtZVBsYXllciAmJlxuICAgICAgc2FtZVJhbmRvbSAmJlxuICAgICAgc2FtZVJhbmRvbVJlYXNvbiAmJlxuICAgICAgKCFoYXNTb3VyY2VPclRhcmdldCB8fCAoc2FtZVNvdXJjZSAmJiBzYW1lVGFyZ2V0KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dzO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5sb2dzID0gW107XG4gIH1cblxuICBwcml2YXRlIGdldEZyb250SW5kZXgocGV0OiBQZXQpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBwYXJlbnQgPSBwZXQ/LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwYXJlbnQucGV0MCA9PT0gcGV0KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHBhcmVudC5wZXQxID09PSBwZXQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBpZiAocGFyZW50LnBldDIgPT09IHBldCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGlmIChwYXJlbnQucGV0MyA9PT0gcGV0KSB7XG4gICAgICByZXR1cm4gNDtcbiAgICB9XG4gICAgaWYgKHBhcmVudC5wZXQ0ID09PSBwZXQpIHtcbiAgICAgIHJldHVybiA1O1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHBldC5zYXZlZFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHBldC5zYXZlZFBvc2l0aW9uICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGRlY29yYXRlTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHBldDogUGV0KTogc3RyaW5nIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RnJvbnRJbmRleChwZXQpO1xuICAgIGlmIChpbmRleCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG4gICAgY29uc3QgbGFiZWwgPSBwZXQucGFyZW50Py5pc09wcG9uZW50ID8gJ08nIDogJ1AnO1xuICAgIGNvbnN0IGZ1bGxMYWJlbCA9IGAke2xhYmVsfSR7aW5kZXh9ICR7cGV0Lm5hbWV9YDtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlRmlyc3QobWVzc2FnZSwgcGV0Lm5hbWUsIGZ1bGxMYWJlbCk7XG4gIH1cblxuICBwcml2YXRlIGRlY29yYXRlQXR0YWNrTWVzc2FnZShcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc291cmNlUGV0OiBQZXQsXG4gICAgdGFyZ2V0UGV0OiBQZXQsXG4gICAgc291cmNlSW5kZXhPdmVycmlkZT86IG51bWJlcixcbiAgICB0YXJnZXRJbmRleE92ZXJyaWRlPzogbnVtYmVyLFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHNvdXJjZUluZGV4ID1cbiAgICAgIHNvdXJjZUluZGV4T3ZlcnJpZGUgPz8gdGhpcy5nZXRGcm9udEluZGV4KHNvdXJjZVBldCk7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPVxuICAgICAgdGFyZ2V0SW5kZXhPdmVycmlkZSA/PyB0aGlzLmdldEZyb250SW5kZXgodGFyZ2V0UGV0KTtcbiAgICBpZiAoc291cmNlSW5kZXggPT0gbnVsbCB8fCB0YXJnZXRJbmRleCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VMYWJlbCA9IHNvdXJjZVBldC5wYXJlbnQ/LmlzT3Bwb25lbnQgPyAnTycgOiAnUCc7XG4gICAgY29uc3QgdGFyZ2V0TGFiZWwgPSB0YXJnZXRQZXQucGFyZW50Py5pc09wcG9uZW50ID8gJ08nIDogJ1AnO1xuXG4gICAgY29uc3Qgc291cmNlRnVsbExhYmVsID0gYCR7c291cmNlTGFiZWx9JHtzb3VyY2VJbmRleH0gJHtzb3VyY2VQZXQubmFtZX1gO1xuICAgIGNvbnN0IHRhcmdldEZ1bGxMYWJlbCA9IGAke3RhcmdldExhYmVsfSR7dGFyZ2V0SW5kZXh9ICR7dGFyZ2V0UGV0Lm5hbWV9YDtcblxuICAgIC8vIElmIG5hbWVzIGFyZSB0aGUgc2FtZSwgd2UgbXVzdCB1c2UgdW5pcXVlIHRva2VucyBkdXJpbmcgcmVwbGFjZW1lbnQgdG8gYXZvaWQgcmVjdXJzaW9uL2Nsb2JiZXJpbmdcbiAgICBjb25zdCBTT1VSQ0VfSE9MREVSID0gJ19fX1NPVVJDRV9IT0xERVJfX18nO1xuICAgIGNvbnN0IFRBUkdFVF9IT0xERVIgPSAnX19fVEFSR0VUX0hPTERFUl9fXyc7XG5cbiAgICBsZXQgdXBkYXRlZCA9IHRoaXMucmVwbGFjZUZpcnN0KG1lc3NhZ2UsIHNvdXJjZVBldC5uYW1lLCBTT1VSQ0VfSE9MREVSKTtcbiAgICB1cGRhdGVkID0gdGhpcy5yZXBsYWNlRmlyc3QodXBkYXRlZCwgdGFyZ2V0UGV0Lm5hbWUsIFRBUkdFVF9IT0xERVIpO1xuXG4gICAgdXBkYXRlZCA9IHVwZGF0ZWQucmVwbGFjZShTT1VSQ0VfSE9MREVSLCBzb3VyY2VGdWxsTGFiZWwpO1xuICAgIHVwZGF0ZWQgPSB1cGRhdGVkLnJlcGxhY2UoVEFSR0VUX0hPTERFUiwgdGFyZ2V0RnVsbExhYmVsKTtcblxuICAgIHJldHVybiB1cGRhdGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWNvcmF0ZU1lc3NhZ2VXaXRoTmFtZXMoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHNvdXJjZVBldD86IFBldCxcbiAgICB0YXJnZXRQZXQ/OiBQZXQsXG4gICAgc291cmNlSW5kZXg/OiBudW1iZXIsXG4gICAgdGFyZ2V0SW5kZXg/OiBudW1iZXIsXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVBldCAmJiB0YXJnZXRQZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRlQXR0YWNrTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgc291cmNlUGV0LFxuICAgICAgICB0YXJnZXRQZXQsXG4gICAgICAgIHNvdXJjZUluZGV4LFxuICAgICAgICB0YXJnZXRJbmRleCxcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VQZXQpIHtcbiAgICAgIGlmIChzb3VyY2VJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gc291cmNlUGV0LnBhcmVudD8uaXNPcHBvbmVudCA/ICdPJyA6ICdQJztcbiAgICAgICAgY29uc3QgZnVsbExhYmVsID0gYCR7bGFiZWx9JHtzb3VyY2VJbmRleH0gJHtzb3VyY2VQZXQubmFtZX1gO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlRmlyc3QobWVzc2FnZSwgc291cmNlUGV0Lm5hbWUsIGZ1bGxMYWJlbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0ZU1lc3NhZ2UobWVzc2FnZSwgc291cmNlUGV0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VGaXJzdChcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICBzZWFyY2g6IHN0cmluZyxcbiAgICByZXBsYWNlbWVudDogc3RyaW5nLFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGluZGV4ID0gc291cmNlLmluZGV4T2Yoc2VhcmNoKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgc291cmNlLnNsaWNlKDAsIGluZGV4KSArIHJlcGxhY2VtZW50ICsgc291cmNlLnNsaWNlKGluZGV4ICsgc2VhcmNoLmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQXR0YWNrUGV0c0Zyb21NZXNzYWdlKGxvZzogTG9nKTogdm9pZCB7XG4gICAgaWYgKCFsb2c/Lm1lc3NhZ2UgfHwgIWxvZy5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxvZy5zb3VyY2VQZXQgJiYgbG9nLnRhcmdldFBldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0gbG9nLm1lc3NhZ2U7XG4gICAgY29uc3Qgc25pcGVkTWF0Y2ggPSAvXiguKz8pXFxzK3NuaXBlZFxccysoLis/KVxccytmb3JcXHMrL2kuZXhlYyhtZXNzYWdlKTtcbiAgICBjb25zdCBhdHRhY2tNYXRjaCA9XG4gICAgICAvXiguKz8pXFxzKyg/Omp1bXAtKT9hdHRhY2tzP1xccysoLis/KVxccytmb3JcXHMrL2kuZXhlYyhtZXNzYWdlKTtcbiAgICBjb25zdCBtYXRjaCA9IHNuaXBlZE1hdGNoID8/IGF0dGFja01hdGNoO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlTmFtZSA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICBjb25zdCB0YXJnZXROYW1lID0gbWF0Y2hbMl0udHJpbSgpO1xuICAgIGNvbnN0IHBsYXllclBldHMgPSBsb2cucGxheWVyLnBldEFycmF5ID8/IFtdO1xuICAgIGNvbnN0IG9wcG9uZW50UGV0cyA9IGxvZy5wbGF5ZXIub3Bwb25lbnQ/LnBldEFycmF5ID8/IFtdO1xuXG4gICAgaWYgKCFsb2cuc291cmNlUGV0KSB7XG4gICAgICBsb2cuc291cmNlUGV0ID1cbiAgICAgICAgcGxheWVyUGV0cy5maW5kKChwZXQpID0+IHBldD8ubmFtZSA9PT0gc291cmNlTmFtZSkgPz8gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFsb2cudGFyZ2V0UGV0KSB7XG4gICAgICBsb2cudGFyZ2V0UGV0ID1cbiAgICAgICAgb3Bwb25lbnRQZXRzLmZpbmQoKHBldCkgPT4gcGV0Py5uYW1lID09PSB0YXJnZXROYW1lKSA/P1xuICAgICAgICBwbGF5ZXJQZXRzLmZpbmQoKHBldCkgPT4gcGV0Py5uYW1lID09PSB0YXJnZXROYW1lKSA/P1xuICAgICAgICBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBaWxtZW50TmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5haWxtZW50TmFtZXMuaGFzKG5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlU291cmNlVGFyZ2V0RnJvbU1lc3NhZ2UobG9nOiBMb2cpOiB2b2lkIHtcbiAgICBpZiAobG9nLnNvdXJjZVBldCAmJiBsb2cudGFyZ2V0UGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBsb2cubWVzc2FnZTtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLmV4dHJhY3RQZXROYW1lcyhtZXNzYWdlKTtcbiAgICBpZiAobmFtZXMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllclBldHMgPSBsb2cucGxheWVyPy5wZXRBcnJheSA/PyBbXTtcbiAgICBjb25zdCBvcHBvbmVudFBldHMgPSBsb2cucGxheWVyPy5vcHBvbmVudD8ucGV0QXJyYXkgPz8gW107XG5cbiAgICBjb25zdCBmaW5kUGV0ID0gKFxuICAgICAgcGV0czogUGV0W10sXG4gICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICBleGNsdWRlPzogUGV0IHwgbnVsbCxcbiAgICApOiBQZXQgfCBudWxsID0+XG4gICAgICBwZXRzLmZpbmQoKHBldCkgPT4gcGV0Py5uYW1lID09PSBuYW1lICYmIHBldCAhPT0gZXhjbHVkZSkgPz8gbnVsbDtcblxuICAgIGlmICghbG9nLnNvdXJjZVBldCkge1xuICAgICAgbG9nLnNvdXJjZVBldCA9XG4gICAgICAgIGZpbmRQZXQocGxheWVyUGV0cywgbmFtZXNbMF0pID8/IGZpbmRQZXQob3Bwb25lbnRQZXRzLCBuYW1lc1swXSk7XG4gICAgfVxuXG4gICAgaWYgKCFsb2cudGFyZ2V0UGV0KSB7XG4gICAgICBpZiAobmFtZXNbMV0gPT09IG5hbWVzWzBdKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VTdGFydHNXaXRoU291cmNlID1cbiAgICAgICAgICBsb2cuc291cmNlUGV0ICYmIG1lc3NhZ2Uuc3RhcnRzV2l0aChsb2cuc291cmNlUGV0Lm5hbWUpO1xuICAgICAgICBpZiAobWVzc2FnZVN0YXJ0c1dpdGhTb3VyY2UgJiYgbG9nLnNvdXJjZVBldCkge1xuICAgICAgICAgIC8vIFByZWZlciBzZWxmLXRhcmdldCB3aGVuIHRoZSBtZXNzYWdlIGJlZ2lucyB3aXRoIHRoZSBzb3VyY2UgbmFtZSBhbmQgdGhlIG5hbWVzIG1hdGNoLlxuICAgICAgICAgIGxvZy50YXJnZXRQZXQgPSBsb2cuc291cmNlUGV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZy50YXJnZXRQZXQgPVxuICAgICAgICAgICAgZmluZFBldChwbGF5ZXJQZXRzLCBuYW1lc1sxXSwgbG9nLnNvdXJjZVBldCkgPz9cbiAgICAgICAgICAgIGZpbmRQZXQob3Bwb25lbnRQZXRzLCBuYW1lc1sxXSwgbG9nLnNvdXJjZVBldCkgPz9cbiAgICAgICAgICAgIGxvZy5zb3VyY2VQZXQgPz9cbiAgICAgICAgICAgIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy50YXJnZXRQZXQgPVxuICAgICAgICAgIGZpbmRQZXQob3Bwb25lbnRQZXRzLCBuYW1lc1sxXSkgPz8gZmluZFBldChwbGF5ZXJQZXRzLCBuYW1lc1sxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UGV0TmFtZXMobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGlmICghdGhpcy5wZXROYW1lUmVnZXggfHwgIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlcyA9IG1lc3NhZ2UubWF0Y2godGhpcy5wZXROYW1lUmVnZXgpO1xuICAgIHJldHVybiBtYXRjaGVzID8/IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlNZXJnZUF0dGFja0hlYWx0aExvZ3MoXG4gICAgbGFzdExvZzogTG9nIHwgdW5kZWZpbmVkLFxuICAgIG5leHRMb2c6IExvZyxcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tYmluZWQgPSBnZXRNZXJnZWRBdHRhY2tIZWFsdGhNZXNzYWdlKGxhc3RMb2csIG5leHRMb2cpO1xuICAgIGlmICghY29tYmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWZlckRlY29yYXRpb25zKSB7XG4gICAgICBsYXN0TG9nLnJhd01lc3NhZ2UgPSBjb21iaW5lZDtcbiAgICAgIGxhc3RMb2cubWVzc2FnZSA9IGNvbWJpbmVkO1xuICAgICAgbGFzdExvZy5kZWNvcmF0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVjb3JhdGVkID0gdGhpcy5kZWNvcmF0ZU1lc3NhZ2VXaXRoTmFtZXMoXG4gICAgICAgIGNvbWJpbmVkLFxuICAgICAgICBsYXN0TG9nLnNvdXJjZVBldCxcbiAgICAgICAgbGFzdExvZy50YXJnZXRQZXQsXG4gICAgICAgIGxhc3RMb2cuc291cmNlSW5kZXgsXG4gICAgICAgIGxhc3RMb2cudGFyZ2V0SW5kZXgsXG4gICAgICApO1xuICAgICAgbGFzdExvZy5tZXNzYWdlID0gZGVjb3JhdGVJbmxpbmVJY29ucyhcbiAgICAgICAgZGVjb3JhdGVkLFxuICAgICAgICB0aGlzLmlubGluZU5hbWVSZWdleCxcbiAgICAgICAgdGhpcy5pbmxpbmVOYW1lVHlwZU1hcCxcbiAgICAgICAgdGhpcy5haWxtZW50TmFtZXMsXG4gICAgICApO1xuICAgICAgbGFzdExvZy5kZWNvcmF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRBcHBlbmRTdW1tb25Cb2FyZFN0YXRlKGxvZzogTG9nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmRlYnVnU3VtbW9uQm9hcmRTdGF0ZUxvZ3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsb2c/Lm1lc3NhZ2UgfHwgbG9nLnR5cGUgPT09ICdib2FyZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsb2cucGxheWVyIHx8ICFsb2cucGxheWVyLm9wcG9uZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAvXFxiKHN1bW1vbmVkfHNwYXduZWQpXFxifF5ObyByb29tIHRvIHNwYXduXFxiL2kudGVzdChsb2cubWVzc2FnZSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN1bW1vbkJvYXJkU3RhdGVMb2cobG9nOiBMb2cpOiB2b2lkIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBsb2cucGxheWVyO1xuICAgIGNvbnN0IG9wcG9uZW50ID0gbG9nLnBsYXllcj8ub3Bwb25lbnQ7XG4gICAgaWYgKCFwbGF5ZXIgfHwgIW9wcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2dzLnB1c2goe1xuICAgICAgbWVzc2FnZTogdGhpcy5idWlsZFBsYWluQm9hcmRTdGF0ZU1lc3NhZ2UocGxheWVyLCBvcHBvbmVudCksXG4gICAgICB0eXBlOiAnYm9hcmQnLFxuICAgICAgcGxheWVyLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFBsYWluQm9hcmRTdGF0ZU1lc3NhZ2UocGxheWVyOiBQbGF5ZXIsIG9wcG9uZW50OiBQbGF5ZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBsYXllclN0YXRlID0gW1xuICAgICAgcGxheWVyLnBldDQsXG4gICAgICBwbGF5ZXIucGV0MyxcbiAgICAgIHBsYXllci5wZXQyLFxuICAgICAgcGxheWVyLnBldDEsXG4gICAgICBwbGF5ZXIucGV0MCxcbiAgICBdXG4gICAgICAubWFwKChwZXQpID0+IHRoaXMucmVuZGVyUGxhaW5QZXRUZXh0KHBldCkpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgY29uc3Qgb3Bwb25lbnRTdGF0ZSA9IFtcbiAgICAgIG9wcG9uZW50LnBldDAsXG4gICAgICBvcHBvbmVudC5wZXQxLFxuICAgICAgb3Bwb25lbnQucGV0MixcbiAgICAgIG9wcG9uZW50LnBldDMsXG4gICAgICBvcHBvbmVudC5wZXQ0LFxuICAgIF1cbiAgICAgIC5tYXAoKHBldCkgPT4gdGhpcy5yZW5kZXJQbGFpblBldFRleHQocGV0KSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gYCR7cGxheWVyU3RhdGV9IHwgJHtvcHBvbmVudFN0YXRlfWA7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBsYWluUGV0VGV4dChwZXQ6IFBldCB8IG51bGwgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIGlmICghcGV0KSB7XG4gICAgICByZXR1cm4gJ19fXyAoLS8tKSc7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRGcm9udEluZGV4KHBldCk7XG4gICAgY29uc3QgbGFiZWwgPSBpbmRleCAhPSBudWxsID8gYCR7cGV0LnBhcmVudD8uaXNPcHBvbmVudCA/ICdPJyA6ICdQJ30ke2luZGV4fWAgOiAnUD8nO1xuICAgIHJldHVybiBgJHtsYWJlbH0gJHtwZXQubmFtZX0oJHtwZXQuYXR0YWNrfS8ke3BldC5oZWFsdGh9LyR7cGV0LmV4cH14cClgO1xuICB9XG5cbiAgcHJpbnRTdGF0ZShwbGF5ZXI6IFBsYXllciwgb3Bwb25lbnQ6IFBsYXllciwgbWVzc2FnZT86IHN0cmluZykge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUxvZyh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHR5cGU6ICdib2FyZCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgYm9hcmRNZXNzYWdlID0gYnVpbGRCb2FyZFN0YXRlTWVzc2FnZShcbiAgICAgIHBsYXllcixcbiAgICAgIG9wcG9uZW50LFxuICAgICAgKHBldCkgPT4gdGhpcy5nZXRGcm9udEluZGV4KHBldCksXG4gICAgICAobmFtZSkgPT4gdGhpcy5pc0FpbG1lbnROYW1lKG5hbWUpLFxuICAgICk7XG5cbiAgICB0aGlzLmNyZWF0ZUxvZyh7XG4gICAgICBtZXNzYWdlOiBib2FyZE1lc3NhZ2UsXG4gICAgICB0eXBlOiAnYm9hcmQnLFxuICAgIH0pO1xuICB9XG59XG5cblxuXG4iLCAiaW1wb3J0IHsgQ2FsY3VsYXRvckJhdHRsZUVuZ2luZSB9IGZyb20gJy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3NpbXVsYXRpb24vYmF0dGxlLWVuZ2luZSc7XG5pbXBvcnQgeyBydW5IZWFkbGVzc1NpbXVsYXRpb24gYXMgZW5naW5lSGVhZGxlc3NTaW11bGF0aW9uIH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuaW1wb3J0IHtcbiAgU2ltdWxhdGlvbkNvbmZpZyxcbiAgU2ltdWxhdGlvblJlc3VsdCxcbn0gZnJvbSAnLi4vc3JjL2FwcC9kb21haW4vaW50ZXJmYWNlcy9zaW11bGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgcGFyc2VUZWFtd29vZFJlcGxheUZvckNhbGN1bGF0b3IsXG4gIFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uLFxuICBSZXBsYXlCb3RUdXJuc0NvbnRhaW5lckpzb24sXG4gIFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgUmVwbGF5TWV0YUJvYXJkcyxcbiAgUmVwbGF5UGFyc2VPcHRpb25zLFxuICBSZXBsYXlDYWxjUGFyc2VyLFxufSBmcm9tICcuLi9zcmMvYXBwL2ludGVncmF0aW9ucy9yZXBsYXkvcmVwbGF5LWNhbGMtcGFyc2VyJztcbmltcG9ydCB7XG4gIFBvc2l0aW9uaW5nT3B0aW1pemF0aW9uUmVzdWx0LFxuICBQb3NpdGlvbmluZ09wdGltaXphdGlvblNpZGUsXG4gIHJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uLFxufSBmcm9tICcuLi9zcmMvYXBwL2ludGVncmF0aW9ucy9zaW11bGF0aW9uL3Bvc2l0aW9uaW5nLW9wdGltaXplcic7XG5pbXBvcnQge1xuICBCb2FyZFN0cmVuZ3RoUHJlY2lzaW9uLFxuICBCb2FyZFN0cmVuZ3RoUmVzdWx0LFxuICBydW5Cb2FyZFN0cmVuZ3RoRXZhbHVhdGlvbixcbn0gZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9ib2FyZC1zdHJlbmd0aC1ldmFsdWF0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVuU2ltdWxhdGlvbihjb25maWc6IFNpbXVsYXRpb25Db25maWcpOiBTaW11bGF0aW9uUmVzdWx0IHtcbiAgcmV0dXJuIG5ldyBDYWxjdWxhdG9yQmF0dGxlRW5naW5lKCkucnVuKGNvbmZpZyk7XG59XG5leHBvcnQgeyBlbmdpbmVIZWFkbGVzc1NpbXVsYXRpb24gYXMgcnVuSGVhZGxlc3NTaW11bGF0aW9uIH07XG5leHBvcnQgdHlwZSB7IEhlYWRsZXNzU2ltdWxhdGlvbk9wdGlvbnMgfSBmcm9tICdzYXAtYmF0dGxlLWVuZ2luZSc7XG5cbmV4cG9ydCB0eXBlIFJlcGxheVBheWxvYWRKc29uID1cbiAgfCBSZXBsYXlBY3Rpb25zQ29udGFpbmVySnNvblxuICB8IFJlcGxheUJvdFR1cm5zQ29udGFpbmVySnNvbjtcblxuZnVuY3Rpb24gdG9OdW1iZXJPckZhbGxiYWNrKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSB7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNhbGN1bGF0b3JCYXNlVXJsKGJhc2VVcmw/OiBzdHJpbmcpOiBVUkwge1xuICBjb25zdCBmYWxsYmFja1VybCA9ICdodHRwczovL3NhcC1jYWxjdWxhdG9yLmNvbS8nO1xuICBjb25zdCBjYW5kaWRhdGUgPSB0eXBlb2YgYmFzZVVybCA9PT0gJ3N0cmluZycgJiYgYmFzZVVybC50cmltKCkubGVuZ3RoID4gMFxuICAgID8gYmFzZVVybC50cmltKClcbiAgICA6IGZhbGxiYWNrVXJsO1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKGNhbmRpZGF0ZSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBuZXcgVVJMKGZhbGxiYWNrVXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXBsYXlDYWxjdWxhdG9yU3RhdGUoXG4gIHJlcGxheTogUmVwbGF5UGF5bG9hZEpzb24sXG4gIHR1cm5OdW1iZXI6IG51bWJlcixcbiAgbWV0YUJvYXJkcz86IFJlcGxheU1ldGFCb2FyZHMsXG4gIG9wdGlvbnM/OiBSZXBsYXlQYXJzZU9wdGlvbnMsXG4pOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgfCBudWxsIHtcbiAgcmV0dXJuIHBhcnNlVGVhbXdvb2RSZXBsYXlGb3JDYWxjdWxhdG9yKFxuICAgIHJlcGxheSxcbiAgICB0dXJuTnVtYmVyLFxuICAgIG1ldGFCb2FyZHMsXG4gICAgb3B0aW9ucyxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbXVsYXRpb25Db25maWdGcm9tQ2FsY3VsYXRvclN0YXRlKFxuICBjYWxjdWxhdG9yU3RhdGU6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgc2ltdWxhdGlvbkNvdW50OiBudW1iZXIsXG4pOiBTaW11bGF0aW9uQ29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJQYWNrOiBjYWxjdWxhdG9yU3RhdGUucGxheWVyUGFjayxcbiAgICBvcHBvbmVudFBhY2s6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFBhY2ssXG4gICAgcGxheWVyVG95OiBjYWxjdWxhdG9yU3RhdGUucGxheWVyVG95LFxuICAgIHBsYXllclRveUxldmVsOiB0b051bWJlck9yRmFsbGJhY2soY2FsY3VsYXRvclN0YXRlLnBsYXllclRveUxldmVsLCAxKSxcbiAgICBwbGF5ZXJIYXJkVG95OiBjYWxjdWxhdG9yU3RhdGUucGxheWVySGFyZFRveSxcbiAgICBwbGF5ZXJIYXJkVG95TGV2ZWw6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJIYXJkVG95TGV2ZWwsXG4gICAgb3Bwb25lbnRUb3k6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFRveSxcbiAgICBvcHBvbmVudFRveUxldmVsOiB0b051bWJlck9yRmFsbGJhY2soY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50VG95TGV2ZWwsIDEpLFxuICAgIG9wcG9uZW50SGFyZFRveTogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50SGFyZFRveSxcbiAgICBvcHBvbmVudEhhcmRUb3lMZXZlbDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50SGFyZFRveUxldmVsLFxuICAgIHR1cm46IGNhbGN1bGF0b3JTdGF0ZS50dXJuLFxuICAgIHBsYXllckdvbGRTcGVudDogY2FsY3VsYXRvclN0YXRlLnBsYXllckdvbGRTcGVudCxcbiAgICBvcHBvbmVudEdvbGRTcGVudDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50R29sZFNwZW50LFxuICAgIHBsYXllclJvbGxBbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJSb2xsQW1vdW50LFxuICAgIG9wcG9uZW50Um9sbEFtb3VudDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50Um9sbEFtb3VudCxcbiAgICBwbGF5ZXJTdW1tb25lZEFtb3VudDogY2FsY3VsYXRvclN0YXRlLnBsYXllclN1bW1vbmVkQW1vdW50LFxuICAgIG9wcG9uZW50U3VtbW9uZWRBbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFN1bW1vbmVkQW1vdW50LFxuICAgIHBsYXllckxldmVsM1NvbGQ6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJMZXZlbDNTb2xkLFxuICAgIG9wcG9uZW50TGV2ZWwzU29sZDogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50TGV2ZWwzU29sZCxcbiAgICBwbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDogY2FsY3VsYXRvclN0YXRlLnBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50LFxuICAgIG9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQ6IGNhbGN1bGF0b3JTdGF0ZS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50LFxuICAgIHBsYXllclBldHM6IGNhbGN1bGF0b3JTdGF0ZS5wbGF5ZXJQZXRzLFxuICAgIG9wcG9uZW50UGV0czogY2FsY3VsYXRvclN0YXRlLm9wcG9uZW50UGV0cyxcbiAgICBjdXN0b21QYWNrczogY2FsY3VsYXRvclN0YXRlLmN1c3RvbVBhY2tzLFxuICAgIGFsbFBldHM6IGNhbGN1bGF0b3JTdGF0ZS5hbGxQZXRzLFxuICAgIG9sZFN0b3JrOiBjYWxjdWxhdG9yU3RhdGUub2xkU3RvcmssXG4gICAgdG9rZW5QZXRzOiBjYWxjdWxhdG9yU3RhdGUudG9rZW5QZXRzLFxuICAgIGtvbW9kb1NodWZmbGU6IGNhbGN1bGF0b3JTdGF0ZS5rb21vZG9TaHVmZmxlLFxuICAgIG1hbmE6IGNhbGN1bGF0b3JTdGF0ZS5tYW5hLFxuICAgIHNlZWQ6IGNhbGN1bGF0b3JTdGF0ZS5zZWVkLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgICBsb2dzRW5hYmxlZDogZmFsc2UsXG4gICAgbWF4TG9nZ2VkQmF0dGxlczogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blJlcGxheU9kZHNGcm9tQ2FsY3VsYXRvclN0YXRlKFxuICBjYWxjdWxhdG9yU3RhdGU6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSxcbiAgc2ltdWxhdGlvbkNvdW50OiBudW1iZXIsXG4pOiBTaW11bGF0aW9uUmVzdWx0IHtcbiAgY29uc3QgY29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgY2FsY3VsYXRvclN0YXRlLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgKTtcbiAgcmV0dXJuIHJ1blNpbXVsYXRpb24oY29uZmlnKTtcbn1cblxuZXhwb3J0IHR5cGUgUmVwbGF5QW5hbHlzaXNQcmVjaXNpb24gPSAncXVpY2snIHwgJ3N0YW5kYXJkJyB8ICdoaWdoJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlQb3NpdGlvbmluZ09wdGlvbnMge1xuICBzaWRlOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblNpZGU7XG4gIHByZWNpc2lvbj86IFJlcGxheUFuYWx5c2lzUHJlY2lzaW9uO1xuICBzaW11bGF0aW9uQ291bnQ/OiBudW1iZXI7XG4gIHByb2plY3RFbmRUdXJuRWZmZWN0cz86IGJvb2xlYW47XG4gIHJlY29tcHV0ZVBhcnJvdENvcGllcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5UG9zaXRpb25pbmdSZXN1bHQge1xuICBwcmVjaXNpb246IFJlcGxheUFuYWx5c2lzUHJlY2lzaW9uO1xuICBzaW11bGF0aW9uQ291bnQ6IG51bWJlcjtcbiAgYmFzZWxpbmU6IFNpbXVsYXRpb25SZXN1bHQ7XG4gIG9wdGltaXplZDogU2ltdWxhdGlvblJlc3VsdDtcbiAgb3B0aW1pemF0aW9uOiBQb3NpdGlvbmluZ09wdGltaXphdGlvblJlc3VsdDtcbiAgb3B0aW1pemVkQ2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5U3RyZW5ndGhSZXN1bHQge1xuICBwcmVjaXNpb246IEJvYXJkU3RyZW5ndGhQcmVjaXNpb247XG4gIHBsYXllcjogQm9hcmRTdHJlbmd0aFJlc3VsdDtcbiAgb3Bwb25lbnQ6IEJvYXJkU3RyZW5ndGhSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5U3RyZW5ndGhSYW5nZSB7XG4gIG1pblN0YXQ/OiBudW1iZXI7XG4gIG1heFN0YXQ/OiBudW1iZXI7XG59XG5cbmNvbnN0IFBPU0lUSU9OSU5HX1NJTVVMQVRJT05TOiBSZWFkb25seTxSZWNvcmQ8UmVwbGF5QW5hbHlzaXNQcmVjaXNpb24sIG51bWJlcj4+ID0ge1xuICBxdWljazogMTAwLFxuICBzdGFuZGFyZDogMjUwLFxuICBoaWdoOiA1MDAsXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVTaW11bGF0aW9uQ291bnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgxLCBNYXRoLnRydW5jKHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lUGV0TGluZXVwKFxuICBsaW5ldXA6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZVsncGxheWVyUGV0cyddLFxuKTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlWydwbGF5ZXJQZXRzJ10ge1xuICByZXR1cm4gKGxpbmV1cCA/PyBbXSkubWFwKChwZXQpID0+XG4gICAgcGV0XG4gICAgICA/IHtcbiAgICAgICAgICAuLi5wZXQsXG4gICAgICAgICAgZXF1aXBtZW50OiBwZXQuZXF1aXBtZW50ID8geyAuLi5wZXQuZXF1aXBtZW50IH0gOiBudWxsLFxuICAgICAgICB9XG4gICAgICA6IG51bGwsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SZXBsYXlQb3NpdGlvbmluZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gIGNhbGN1bGF0b3JTdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlLFxuICBvcHRpb25zOiBSZXBsYXlQb3NpdGlvbmluZ09wdGlvbnMsXG4pOiBSZXBsYXlQb3NpdGlvbmluZ1Jlc3VsdCB7XG4gIGNvbnN0IHByZWNpc2lvbiA9IG9wdGlvbnMucHJlY2lzaW9uID8/ICdxdWljayc7XG4gIGNvbnN0IHNpbXVsYXRpb25Db3VudCA9IG5vcm1hbGl6ZVNpbXVsYXRpb25Db3VudChcbiAgICBvcHRpb25zLnNpbXVsYXRpb25Db3VudCxcbiAgICBQT1NJVElPTklOR19TSU1VTEFUSU9OU1twcmVjaXNpb25dLFxuICApO1xuICBjb25zdCBiYXNlQ29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgY2FsY3VsYXRvclN0YXRlLFxuICAgIHNpbXVsYXRpb25Db3VudCxcbiAgKTtcbiAgY29uc3QgcnVubmVyID0gbmV3IENhbGN1bGF0b3JCYXR0bGVFbmdpbmUoKTtcbiAgY29uc3QgcHJvamVjdGlvblJ1bm5lciA9IG5ldyBDYWxjdWxhdG9yQmF0dGxlRW5naW5lKCk7XG4gIGNvbnN0IGJhc2VsaW5lID0gcnVubmVyLnJ1bihiYXNlQ29uZmlnKTtcbiAgY29uc3QgcHJvamVjdEVuZFR1cm5FZmZlY3RzID0gb3B0aW9ucy5wcm9qZWN0RW5kVHVybkVmZmVjdHMgIT09IGZhbHNlO1xuICBjb25zdCByZWNvbXB1dGVQYXJyb3RDb3BpZXMgPSBvcHRpb25zLnJlY29tcHV0ZVBhcnJvdENvcGllcyAhPT0gZmFsc2U7XG4gIGNvbnN0IG9wdGltaXphdGlvbiA9IHJ1blBvc2l0aW9uaW5nT3B0aW1pemF0aW9uKHtcbiAgICBiYXNlQ29uZmlnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHNpZGU6IG9wdGlvbnMuc2lkZSxcbiAgICAgIG1heFNpbXVsYXRpb25zUGVyUGVybXV0YXRpb246IHNpbXVsYXRpb25Db3VudCxcbiAgICAgIGJhdGNoU2l6ZTogTWF0aC5taW4oMjUsIHNpbXVsYXRpb25Db3VudCksXG4gICAgICBtaW5TYW1wbGVzQmVmb3JlRWxpbWluYXRpb246IE1hdGgubWluKDUwLCBzaW11bGF0aW9uQ291bnQpLFxuICAgICAgY29uZmlkZW5jZVo6IDEuOTYsXG4gICAgICBrZWVwU2FtZUJ1ZmZUYXJnZXRzOiAhcHJvamVjdEVuZFR1cm5FZmZlY3RzLFxuICAgICAgcmVjb21wdXRlUGFycm90Q29waWVzLFxuICAgIH0sXG4gICAgc2ltdWxhdGVCYXRjaDogKGNvbmZpZykgPT4gcnVubmVyLnJ1bihjb25maWcpLFxuICAgIHByb2plY3RFbmRUdXJuTGluZXVwOiBwcm9qZWN0RW5kVHVybkVmZmVjdHNcbiAgICAgID8gKHsgYmFzZUNvbmZpZzogcHJvamVjdGlvbkNvbmZpZywgc2lkZSwgbGluZXVwIH0pID0+XG4gICAgICAgICAgcHJvamVjdGlvblJ1bm5lci5wcm9qZWN0TGluZXVwQWZ0ZXJFbmRUdXJuKFxuICAgICAgICAgICAgcHJvamVjdGlvbkNvbmZpZyxcbiAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICBsaW5ldXAsXG4gICAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQsXG4gIH0pO1xuICBjb25zdCBvcHRpbWl6ZWRMaW5ldXAgPVxuICAgIG9wdGltaXphdGlvbi5iZXN0UGVybXV0YXRpb24uc2ltdWxhdGlvbkxpbmV1cC5sZW5ndGggPiAwXG4gICAgICA/IG9wdGltaXphdGlvbi5iZXN0UGVybXV0YXRpb24uc2ltdWxhdGlvbkxpbmV1cFxuICAgICAgOiBvcHRpbWl6YXRpb24uYmVzdFBlcm11dGF0aW9uLmxpbmV1cDtcbiAgY29uc3Qgb3B0aW1pemVkQ2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgPSB7XG4gICAgLi4uY2FsY3VsYXRvclN0YXRlLFxuICAgIHBsYXllclBldHM6IGNsb25lUGV0TGluZXVwKFxuICAgICAgb3B0aW1pemF0aW9uLnNpZGUgPT09ICdwbGF5ZXInXG4gICAgICAgID8gb3B0aW1pemVkTGluZXVwXG4gICAgICAgIDogY2FsY3VsYXRvclN0YXRlLnBsYXllclBldHMsXG4gICAgKSxcbiAgICBvcHBvbmVudFBldHM6IGNsb25lUGV0TGluZXVwKFxuICAgICAgb3B0aW1pemF0aW9uLnNpZGUgPT09ICdvcHBvbmVudCdcbiAgICAgICAgPyBvcHRpbWl6ZWRMaW5ldXBcbiAgICAgICAgOiBjYWxjdWxhdG9yU3RhdGUub3Bwb25lbnRQZXRzLFxuICAgICksXG4gIH07XG4gIGNvbnN0IG9wdGltaXplZCA9IHJ1bm5lci5ydW4oXG4gICAgY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoXG4gICAgICBvcHRpbWl6ZWRDYWxjdWxhdG9yU3RhdGUsXG4gICAgICBzaW11bGF0aW9uQ291bnQsXG4gICAgKSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByZWNpc2lvbixcbiAgICBzaW11bGF0aW9uQ291bnQsXG4gICAgYmFzZWxpbmUsXG4gICAgb3B0aW1pemVkLFxuICAgIG9wdGltaXphdGlvbixcbiAgICBvcHRpbWl6ZWRDYWxjdWxhdG9yU3RhdGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SZXBsYXlTdHJlbmd0aEZyb21DYWxjdWxhdG9yU3RhdGUoXG4gIGNhbGN1bGF0b3JTdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlLFxuICBwcmVjaXNpb246IEJvYXJkU3RyZW5ndGhQcmVjaXNpb24gPSAncXVpY2snLFxuICByYW5nZTogUmVwbGF5U3RyZW5ndGhSYW5nZSA9IHt9LFxuKTogUmVwbGF5U3RyZW5ndGhSZXN1bHQge1xuICBjb25zdCBiYXNlQ29uZmlnID0gY3JlYXRlU2ltdWxhdGlvbkNvbmZpZ0Zyb21DYWxjdWxhdG9yU3RhdGUoY2FsY3VsYXRvclN0YXRlLCAxKTtcbiAgY29uc3QgcnVubmVyID0gbmV3IENhbGN1bGF0b3JCYXR0bGVFbmdpbmUoKTtcbiAgY29uc3QgZXZhbHVhdGUgPSAoc2lkZTogJ3BsYXllcicgfCAnb3Bwb25lbnQnKTogQm9hcmRTdHJlbmd0aFJlc3VsdCA9PlxuICAgIHJ1bkJvYXJkU3RyZW5ndGhFdmFsdWF0aW9uKHtcbiAgICAgIGJhc2VDb25maWcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNpZGUsXG4gICAgICAgIHByZWNpc2lvbixcbiAgICAgICAgbWluU3RhdDogcmFuZ2UubWluU3RhdCxcbiAgICAgICAgbWF4U3RhdDogcmFuZ2UubWF4U3RhdCxcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUJhdGNoOiAoY29uZmlnKSA9PiBydW5uZXIucnVuKGNvbmZpZyksXG4gICAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcmVjaXNpb24sXG4gICAgcGxheWVyOiBldmFsdWF0ZSgncGxheWVyJyksXG4gICAgb3Bwb25lbnQ6IGV2YWx1YXRlKCdvcHBvbmVudCcpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYXlDYWxjdWxhdG9yTGluayhcbiAgY2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUsXG4gIGJhc2VVcmw/OiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgUmVwbGF5Q2FsY1BhcnNlcigpO1xuICBjb25zdCBub3JtYWxpemVkQmFzZVVybCA9IG5vcm1hbGl6ZUNhbGN1bGF0b3JCYXNlVXJsKGJhc2VVcmwpO1xuXG4gIGNvbnN0IGdsb2JhbFdpdGhXaW5kb3cgPSBnbG9iYWxUaGlzIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYge1xuICAgIHdpbmRvdz86IFdpbmRvdyAmIHR5cGVvZiBnbG9iYWxUaGlzO1xuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzV2luZG93ID0gZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3c7XG4gIGNvbnN0IGhhZFdpbmRvdyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnbG9iYWxXaXRoV2luZG93LCAnd2luZG93Jyk7XG5cbiAgZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3cgPSB7XG4gICAgbG9jYXRpb246IHtcbiAgICAgIG9yaWdpbjogbm9ybWFsaXplZEJhc2VVcmwub3JpZ2luLFxuICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZWRCYXNlVXJsLnBhdGhuYW1lLFxuICAgIH0sXG4gIH0gYXMgV2luZG93ICYgdHlwZW9mIGdsb2JhbFRoaXM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBoYXNoTGluayA9IHBhcnNlci5nZW5lcmF0ZUNhbGN1bGF0b3JMaW5rKGNhbGN1bGF0b3JTdGF0ZSk7XG4gICAgcmV0dXJuIGhhc2hMaW5rLnJlcGxhY2UoJyNjPScsICc/Yz0nKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoaGFkV2luZG93KSB7XG4gICAgICBnbG9iYWxXaXRoV2luZG93LndpbmRvdyA9IHByZXZpb3VzV2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgZ2xvYmFsV2l0aFdpbmRvdy53aW5kb3c7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4uL3NyYy9hcHAvZG9tYWluL2ludGVyZmFjZXMvc2ltdWxhdGlvbi1jb25maWcuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3JlcGxheS9yZXBsYXktY2FsYy1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9wb3NpdGlvbmluZy1vcHRpbWl6ZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vc3JjL2FwcC9pbnRlZ3JhdGlvbnMvc2ltdWxhdGlvbi9ib2FyZC1zdHJlbmd0aC1ldmFsdWF0b3InO1xuXG5cblxuXG5leHBvcnQgeyBjcmVhdGVCYXR0bGVFbmdpbmUsIGNhdGFsb2dzLCBvcHRpbWl6ZUZpZ2h0IH0gZnJvbSAnc2FwLWJhdHRsZS1lbmdpbmUnO1xuIiwgImltcG9ydCB7IHBlcmtzIGFzIHBlcmtzIH0gZnJvbSAnYXBwL3J1bnRpbWUvY29udGVudC1jYXRhbG9ncyc7XG5pbXBvcnQgeyB0b3lzIGFzIHRveXMgfSBmcm9tICdhcHAvcnVudGltZS9jb250ZW50LWNhdGFsb2dzJztcbmltcG9ydCB7IHBldHMgYXMgcGV0c0J5VGllciB9IGZyb20gJ2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MnO1xuXG5leHBvcnQgY29uc3QgUEVUU19CWV9JRCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5leHBvcnQgY29uc3QgUEVUU19NRVRBX0JZX0lEID0gbmV3IE1hcDxcbiAgc3RyaW5nLFxuICB7IG5hbWU6IHN0cmluZzsgdGllcjogbnVtYmVyIH1cbj4oKTtcblxuZXhwb3J0IGNvbnN0IFBFVF9JRFNfQllfTkFNRSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbnR5cGUgUmVwbGF5RGF0YVBldCA9IHtcbiAgSWQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBUaWVyPzogbnVtYmVyIHwgc3RyaW5nO1xuICB0aWVyPzogbnVtYmVyIHwgc3RyaW5nO1xuICBOYW1lPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufTtcblxudHlwZSBSZXBsYXlEYXRhQ29udGFpbmVyPFQ+ID0ge1xuICBkZWZhdWx0PzogVDtcbn07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0UmVjb3JkKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuY29uc3QgcGV0c01vZHVsZSA9IHBldHNCeVRpZXIgYXMgdW5rbm93biBhcyBSZXBsYXlEYXRhQ29udGFpbmVyPHVua25vd24+O1xuY29uc3QgcGV0TGlzdFJhdyA9IHBldHNNb2R1bGUuZGVmYXVsdCA/PyBwZXRzQnlUaWVyO1xuY29uc3QgcGV0TGlzdCA9IEFycmF5LmlzQXJyYXkocGV0TGlzdFJhdylcbiAgPyBwZXRMaXN0UmF3XG4gIDogaXNPYmplY3RSZWNvcmQocGV0TGlzdFJhdylcbiAgICA/IE9iamVjdC52YWx1ZXMocGV0TGlzdFJhdykuZmlsdGVyKHYgPT4gdHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgKCdJZCcgaW4gdiB8fCAnaWQnIGluIHYpKVxuICAgIDogW107XG5cbnBldExpc3QuZm9yRWFjaCgocGV0VW5rbm93bikgPT4ge1xuICBpZiAoIWlzT2JqZWN0UmVjb3JkKHBldFVua25vd24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBldCA9IHBldFVua25vd24gYXMgUmVwbGF5RGF0YVBldDtcbiAgY29uc3QgcGV0SWQgPSBTdHJpbmcocGV0LklkID8/IHBldC5pZCk7XG4gIGNvbnN0IHRpZXJWYWx1ZSA9IE51bWJlcihwZXQuVGllciA/PyBwZXQudGllcik7XG4gIGNvbnN0IG5hbWUgPSBwZXQuTmFtZSA/PyBwZXQubmFtZTtcblxuICBpZiAobmFtZSkge1xuICAgIFBFVFNfQllfSUQuc2V0KHBldElkLCBuYW1lKTtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xuICAgIFBFVF9JRFNfQllfTkFNRS5zZXQobm9ybWFsaXplZE5hbWUsIHBldElkKTtcbiAgfVxuXG4gIGlmIChOdW1iZXIuaXNGaW5pdGUodGllclZhbHVlKSAmJiBuYW1lKSB7XG4gICAgUEVUU19NRVRBX0JZX0lELnNldChwZXRJZCwgeyBuYW1lLCB0aWVyOiB0aWVyVmFsdWUgfSk7XG4gIH1cbn0pO1xuXG5jb25zdCBwZXJrTGlzdCA9XG4gIChwZXJrcyBhcyB1bmtub3duIGFzIHsgZGVmYXVsdD86IEFycmF5PHsgSWQ6IHN0cmluZzsgTmFtZTogc3RyaW5nIH0+IH0pXG4gICAgLmRlZmF1bHQgPz8gKHBlcmtzIGFzIHVua25vd24gYXMgQXJyYXk8eyBJZDogc3RyaW5nOyBOYW1lOiBzdHJpbmcgfT4pO1xuY29uc3QgdG95TGlzdCA9XG4gICh0b3lzIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogQXJyYXk8eyBJZDogc3RyaW5nOyBOYW1lOiBzdHJpbmcgfT4gfSlcbiAgICAuZGVmYXVsdCA/PyAodG95cyBhcyB1bmtub3duIGFzIEFycmF5PHsgSWQ6IHN0cmluZzsgTmFtZTogc3RyaW5nIH0+KTtcblxuZXhwb3J0IGNvbnN0IFBFUktTX0JZX0lEID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oXG4gIHBlcmtMaXN0Lm1hcCgocGVyaykgPT4gW1N0cmluZyhwZXJrLklkKSwgcGVyay5OYW1lXSksXG4pO1xuZXhwb3J0IGNvbnN0IFRPWVNfQllfSUQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihcbiAgdG95TGlzdC5tYXAoKHRveSkgPT4gW1N0cmluZyh0b3kuSWQpLCB0b3kuTmFtZV0pLFxuKTtcblxuZXhwb3J0IGNvbnN0IFBBQ0tfTUFQOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAwOiAnVHVydGxlJyxcbiAgMTogJ1B1cHB5JyxcbiAgMjogJ1N0YXInLFxuICA1OiAnR29sZGVuJyxcbiAgNjogJ1VuaWNvcm4nLFxuICA3OiAnRGFuZ2VyJyxcbn07XG5cbmNvbnN0IFBBUlJPVF9DT1BZX1BFVF9BQk9NSU5BVElPTl9LRVlfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gKCgpID0+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGZvciAobGV0IG91dGVyID0gMTsgb3V0ZXIgPD0gMzsgb3V0ZXIrKykge1xuICAgIGNvbnN0IGJhc2UgPSBgcGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0JHtvdXRlcn1gO1xuICAgIGNvbnN0IG91dGVyUHJlZml4ID0gYHBDUEFTJHtvdXRlcn1gO1xuICAgIG1hcFtiYXNlXSA9IG91dGVyUHJlZml4O1xuICAgIG1hcFtgJHtiYXNlfUJlbHVnYVN3YWxsb3dlZFBldGBdID0gYCR7b3V0ZXJQcmVmaXh9QmA7XG4gICAgbWFwW2Ake2Jhc2V9TGV2ZWxgXSA9IGAke291dGVyUHJlZml4fUxgO1xuICAgIG1hcFtgJHtiYXNlfVRpbWVzSHVydGBdID0gYCR7b3V0ZXJQcmVmaXh9VGA7XG4gICAgbWFwW2Ake2Jhc2V9UGFycm90Q29weVBldGBdID0gYCR7b3V0ZXJQcmVmaXh9UENQYDtcbiAgICBtYXBbYCR7YmFzZX1QYXJyb3RDb3B5UGV0QmVsdWdhU3dhbGxvd2VkUGV0YF0gPSBgJHtvdXRlclByZWZpeH1QQ1BCYDtcbiAgICBmb3IgKGxldCBpbm5lciA9IDE7IGlubmVyIDw9IDM7IGlubmVyKyspIHtcbiAgICAgIGNvbnN0IGlubmVyQmFzZSA9IGAke2Jhc2V9UGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0JHtpbm5lcn1gO1xuICAgICAgY29uc3QgaW5uZXJQcmVmaXggPSBgJHtvdXRlclByZWZpeH1QQ1BBUyR7aW5uZXJ9YDtcbiAgICAgIG1hcFtpbm5lckJhc2VdID0gaW5uZXJQcmVmaXg7XG4gICAgICBtYXBbYCR7aW5uZXJCYXNlfUJlbHVnYVN3YWxsb3dlZFBldGBdID0gYCR7aW5uZXJQcmVmaXh9QmA7XG4gICAgICBtYXBbYCR7aW5uZXJCYXNlfUxldmVsYF0gPSBgJHtpbm5lclByZWZpeH1MYDtcbiAgICAgIG1hcFtgJHtpbm5lckJhc2V9VGltZXNIdXJ0YF0gPSBgJHtpbm5lclByZWZpeH1UYDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBLRVlfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBwbGF5ZXJQYWNrOiAncFAnLFxuICBvcHBvbmVudFBhY2s6ICdvUCcsXG4gIHBsYXllclRveTogJ3BUJyxcbiAgcGxheWVyVG95TGV2ZWw6ICdwVEwnLFxuICBwbGF5ZXJIYXJkVG95OiAncEhUJyxcbiAgcGxheWVySGFyZFRveUxldmVsOiAncEhUTCcsXG4gIG9wcG9uZW50VG95OiAnb1QnLFxuICBvcHBvbmVudFRveUxldmVsOiAnb1RMJyxcbiAgb3Bwb25lbnRIYXJkVG95OiAnb0hUJyxcbiAgb3Bwb25lbnRIYXJkVG95TGV2ZWw6ICdvSFRMJyxcbiAgdHVybjogJ3QnLFxuICBwbGF5ZXJHb2xkU3BlbnQ6ICdwR1MnLFxuICBvcHBvbmVudEdvbGRTcGVudDogJ29HUycsXG4gIHBsYXllclJvbGxBbW91bnQ6ICdwUkEnLFxuICBvcHBvbmVudFJvbGxBbW91bnQ6ICdvUkEnLFxuICBwbGF5ZXJTdW1tb25lZEFtb3VudDogJ3BTQScsXG4gIG9wcG9uZW50U3VtbW9uZWRBbW91bnQ6ICdvU0EnLFxuICBwbGF5ZXJMZXZlbDNTb2xkOiAncEwzJyxcbiAgb3Bwb25lbnRMZXZlbDNTb2xkOiAnb0wzJyxcbiAgcGxheWVyVHJhbnNmb3JtYXRpb25BbW91bnQ6ICdwVEEnLFxuICBvcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50OiAnb1RBJyxcbiAgcGxheWVyUGV0czogJ3AnLFxuICBvcHBvbmVudFBldHM6ICdvJyxcbiAgYWxsUGV0czogJ2FwJyxcbiAgbG9nRmlsdGVyOiAnbGYnLFxuICBjdXN0b21QYWNrczogJ2NwJyxcbiAgb2xkU3Rvcms6ICdvcycsXG4gIHRva2VuUGV0czogJ3RwJyxcbiAga29tb2RvU2h1ZmZsZTogJ2tzJyxcbiAgbWFuYTogJ20nLFxuICBzZWVkOiAnc2QnLFxuICB0cmlnZ2Vyc0NvbnN1bWVkOiAndGMnLFxuICBzaG93QWR2YW5jZWQ6ICdzYScsXG4gIHNob3dUcmlnZ2VyTmFtZXNJbkxvZ3M6ICdzdG4nLFxuICBzaG93UG9zaXRpb25hbEFyZ3NJbkxvZ3M6ICdzcGEnLFxuICBhaWxtZW50RXF1aXBtZW50OiAnYWUnLFxuICBuYW1lOiAnbicsXG4gIGF0dGFjazogJ2EnLFxuICBoZWFsdGg6ICdoJyxcbiAgZXhwOiAnZScsXG4gIGVxdWlwbWVudDogJ2VxJyxcbiAgYmVsdWdhU3dhbGxvd2VkUGV0OiAnYlNQJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiAnYVNQMScsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogJ2FTUDInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6ICdhU1AzJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0OiAnYVNQMUInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdhU1AyQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0JlbHVnYVN3YWxsb3dlZFBldDogJ2FTUDNCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogJ2FTUDFTRlMnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiAnYVNQMlNGUycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1NhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6ICdhU1AzU0ZTJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6ICdhU1AxTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOiAnYVNQMkwnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogJ2FTUDNMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAnYVNQMVQnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6ICdhU1AyVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogJ2FTUDNUJyxcbiAgcGFycm90Q29weVBldDogJ3BDUCcsXG4gIHBhcnJvdENvcHlQZXRCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdwQ1BCJyxcbiAgLi4uUEFSUk9UX0NPUFlfUEVUX0FCT01JTkFUSU9OX0tFWV9NQVAsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXQ6ICdhU1AxUENQJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldDogJ2FTUDJQQ1AnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0OiAnYVNQM1BDUCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdhU1AxUENQQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdhU1AyUENQQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdhU1AzUENQQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdhU1AxUENQQVMxJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogJ2FTUDFQQ1BBUzInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnYVNQMVBDUEFTMycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdhU1AyUENQQVMxJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogJ2FTUDJQQ1BBUzInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnYVNQMlBDUEFTMycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdhU1AzUENQQVMxJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogJ2FTUDNQQ1BBUzInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnYVNQM1BDUEFTMycsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDFQQ1BBUzFCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkJlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQMVBDUEFTMkInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AxUENQQVMzQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDJQQ1BBUzFCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkJlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQMlBDUEFTMkInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AyUENQQVMzQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFCZWx1Z2FTd2FsbG93ZWRQZXQ6XG4gICAgJ2FTUDNQQ1BBUzFCJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkJlbHVnYVN3YWxsb3dlZFBldDpcbiAgICAnYVNQM1BDUEFTMkInLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0OlxuICAgICdhU1AzUENQQVMzQicsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDpcbiAgICAnYVNQMVBDUEFTMUwnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6XG4gICAgJ2FTUDFQQ1BBUzJMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOlxuICAgICdhU1AxUENQQVMzTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDpcbiAgICAnYVNQMlBDUEFTMUwnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6XG4gICAgJ2FTUDJQQ1BBUzJMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOlxuICAgICdhU1AyUENQQVMzTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDpcbiAgICAnYVNQM1BDUEFTMUwnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6XG4gICAgJ2FTUDNQQ1BBUzJMJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOlxuICAgICdhU1AzUENQQVMzTCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6XG4gICAgJ2FTUDFQQ1BBUzFUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDpcbiAgICAnYVNQMVBDUEFTMlQnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OlxuICAgICdhU1AxUENQQVMzVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlBhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6XG4gICAgJ2FTUDJQQ1BBUzFUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDpcbiAgICAnYVNQMlBDUEFTMlQnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OlxuICAgICdhU1AyUENQQVMzVCcsXG4gIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1BhcnJvdENvcHlQZXRBYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6XG4gICAgJ2FTUDNQQ1BBUzFUJyxcbiAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzUGFycm90Q29weVBldEFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDpcbiAgICAnYVNQM1BDUEFTMlQnLFxuICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNQYXJyb3RDb3B5UGV0QWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OlxuICAgICdhU1AzUENQQVMzVCcsXG4gIHRpbWVzSHVydDogJ3RIJyxcbiAgYWlsbWVudHNDb3VudDogJ2FDJyxcbiAgZnJpZW5kc0h1cnRCZWZvcmVCYXR0bGU6ICdmSEJCJyxcbn07XG4iLCAiLyogVXRpbGl0aWVzIHBvcnRlZC9hZGFwdGVkIGZyb20gcmVwbGF5IHBhcml0eSBmaXhlcyBQUi5cbiAgIFB1cnBvc2U6IHJvYnVzdCBwZXQvdG95IGlkIHJlc29sdXRpb24sIGFiaWxpdHkgZmFsbGJhY2tzLCBhYm9taW5hdGlvblxuICAgc3dhbGxvd2VkLXBldCBpbmZlcmVuY2UsIGFuZCBzbWFsbCBoZWxwZXJzIHVzZWQgYnkgdGhlIHJlcGxheSBwYXJzZXIuXG4qL1xuXG50eXBlIFJlcGxheVVua25vd25SZWNvcmQgPSBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbnR5cGUgUmVwbGF5TmFtZUxvb2t1cCA9XG4gIHwgTWFwPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPlxuICB8IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5UGFyc2VyTG9va3VwTWFwcyB7XG4gIHBldElkc0J5TmFtZT86IFJlcGxheU5hbWVMb29rdXA7XG4gIFBFVF9JRFNfQllfTkFNRT86IFJlcGxheU5hbWVMb29rdXA7XG4gIGFiaWxpdHlJZHNCeVBldElkPzogUmVjb3JkPHN0cmluZywgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB8IHVuZGVmaW5lZD47XG4gIHRveUlkc0J5TmFtZT86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD47XG59XG5cbmludGVyZmFjZSBSZXBsYXlNZW1vcnlQYXlsb2FkIHtcbiAgTHN0czogUmVjb3JkPHN0cmluZywgUmVwbGF5VW5rbm93blJlY29yZFtdPjtcbn1cblxuaW50ZXJmYWNlIFJlcGxheU1lbW9yeUVudHJ5IGV4dGVuZHMgUmVwbGF5VW5rbm93blJlY29yZCB7XG4gIEVudTogbnVtYmVyO1xuICBBdD86IG51bWJlcjtcbiAgSHA/OiBudW1iZXI7XG4gIE1hbmE/OiBudW1iZXIgfCBudWxsO1xuICBMdmw/OiBudW1iZXI7XG4gIEV4cD86IG51bWJlciB8IG51bGw7XG4gIFBlcms/OiBudW1iZXIgfCBudWxsO1xuICBQb3dhPzogbnVtYmVyIHwgbnVsbDtcbiAgSHJ0Qz86IG51bWJlciB8IG51bGw7XG4gIE1pTXM/OiBSZXBsYXlNZW1vcnlQYXlsb2FkO1xufVxuXG5pbnRlcmZhY2UgQWJvbWluYXRpb25TbG90Q29uZmlnIHtcbiAgcGV0S2V5OiBzdHJpbmc7XG4gIGxldmVsS2V5OiBzdHJpbmc7XG4gIGJlbHVnYUtleTogc3RyaW5nO1xuICBzZnNLZXk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFib21pbmF0aW9uU3dhbGxvd2VkRW50cnkge1xuICBzd2FsbG93ZWRQZXRJZDogbnVtYmVyO1xuICBzd2FsbG93ZWRBYmlsaXR5RW51bXM6IG51bWJlcltdO1xuICBtZW1vcnlFbnRyeTogUmVwbGF5TWVtb3J5RW50cnk7XG4gIGJlbHVnYVN3YWxsb3dlZEVudHJ5PzogUmVwbGF5TWVtb3J5UGF5bG9hZCB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlXYXJuaW5nQmFnIHtcbiAgdW5rbm93blRveXM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5QWJpbGl0eUVudHJ5IHtcbiAgRW51OiBudW1iZXI7XG4gIEx2bDogbnVtYmVyO1xuICBOYXQ6IGJvb2xlYW47XG4gIER1cjogbnVtYmVyO1xuICBUckNvOiBudW1iZXI7XG4gIENoYXI6IG51bGw7XG4gIERpczogYm9vbGVhbjtcbiAgQUlNTDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFJlcGxheVJlbGljSXRlbSB7XG4gIE93bjogbnVtYmVyO1xuICBFbnU6IG51bWJlcjtcbiAgTG9jOiBudW1iZXI7XG4gIFBvaTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBFeHA6IG51bWJlcjtcbiAgTHZsOiBudW1iZXI7XG4gIEhwOiB7IFBlcm06IG51bWJlcjsgVGVtcDogbnVtYmVyOyBNYXg6IG51bWJlciB8IG51bGwgfTtcbiAgQXQ6IHsgUGVybTogbnVtYmVyOyBUZW1wOiBudW1iZXI7IE1heDogbnVtYmVyIHwgbnVsbCB9O1xuICBNYW5hOiBudW1iZXI7XG4gIENvdTogbnVtYmVyO1xuICBQZUJvOiBib29sZWFuO1xuICBQZUR1OiBudWxsO1xuICBQZURNOiBudWxsO1xuICBQZU11OiBudWxsO1xuICBQZURyOiBudW1iZXI7XG4gIEFiaWw6IFJlcGxheUFiaWxpdHlFbnRyeVtdO1xuICBBYkRpOiBib29sZWFuO1xuICBDb3NtOiBudW1iZXI7XG4gIERlYWQ6IGJvb2xlYW47XG4gIERlc3Q6IGJvb2xlYW47XG4gIERlQnk6IG51bGw7XG4gIExpbms6IG51bGw7XG4gIFBvdzogbnVsbDtcbiAgU2VWOiBudWxsO1xuICBSd2RzOiBudW1iZXI7XG4gIFJ3cmQ6IGJvb2xlYW47XG4gIE1pTXM6IG51bGw7XG4gIFNwTWU6IG51bGw7XG4gIFRyaTogbnVsbDtcbiAgQXRrQzogbnVtYmVyO1xuICBIcnRDOiBudW1iZXI7XG4gIFNwQ1Q6IG51bWJlcjtcbiAgT2xUczogbnVsbDtcbiAgTGFzdFRhcmdldHNUaGlzVHVybjogbnVsbDtcbiAgSWQ6IHsgQm9JZDogc3RyaW5nOyBVbmk6IG51bWJlciB9O1xuICBQcmk6IG51bWJlcjtcbiAgRnJvOiBib29sZWFuO1xuICBXRnJvOiBib29sZWFuO1xuICBBRnJvOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfQUJJTElUWV9JRFNfQllfUEVUX0lEOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXJbXT4gPSB7XG4gICczMzgnOiBbMzY4XSxcbiAgJzM3Myc6IFs0MDNdLFxuICAnNjM1JzogWzY2OV0sXG4gIC8vIFNhcmNhc3RpYyBGcmluZ2VoZWFkIG9ic2VydmVkIG11bHRpcGxlIGFiaWxpdHkgZW51bXMgaW4gcGF5bG9hZHNcbiAgJzc2Myc6IFs4NTMsIDk3MF0sXG59O1xuXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfVE9ZX0lEU19CWV9OQU1FOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xuICBhY3Rpb25maWd1cmU6IDI5NCxcbiAgYWlycGFsbXRyZWU6IDUxMSxcbiAgYmFsbG9vbjogNDc5LFxuICBib290OiAyOTksXG4gIGJvd2xpbmdiYWxsOiAzMDAsXG4gIGJyb2tlbnBpZ2d5YmFuazogMzEwLFxuICBicm9vbTogMzAxLFxuICBjYXJkYm9hcmRib3g6IDMwMixcbiAgLy8gKHRyaW1tZWQgbGlzdCAtIGluY2x1ZGUgY29tbW9uIGZhbGxiYWNrcyB1c2VkIGluIGxpdmUgcGF5bG9hZHMpXG4gIHRlbGV2aXNpb246IDQ5MSxcbiAgdG95bW91c2U6IDMyNyxcbn07XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZXBsYXlVbmtub3duUmVjb3JkIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWNvcmQodmFsdWU6IHVua25vd24pOiBSZXBsYXlVbmtub3duUmVjb3JkIHwgbnVsbCB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0QnlOYW1lTG9va3VwKFxuICBsb29rdXA6IFJlcGxheU5hbWVMb29rdXAgfCB1bmRlZmluZWQsXG4gIGtleTogc3RyaW5nLFxuKTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFsb29rdXApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChsb29rdXAgaW5zdGFuY2VvZiBNYXApIHtcbiAgICByZXR1cm4gbG9va3VwLmdldChrZXkpO1xuICB9XG4gIHJldHVybiBsb29rdXBba2V5XTtcbn1cblxuZnVuY3Rpb24gdG9JbnRPck51bGwodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgbiA9IE51bWJlcih2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBNYXRoLnRydW5jKG4pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9OdWxsYWJsZU51bWJlcih2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBuID0gTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9GaW5pdGVOdW1iZXIodmFsdWU6IHVua25vd24sIGZhbGxiYWNrID0gMCk6IG51bWJlciB7XG4gIGNvbnN0IG51bWVyaWMgPSBOdW1iZXIodmFsdWUpO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG51bWVyaWMpID8gbnVtZXJpYyA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBldElkRnJvbVVua25vd24oXG4gIHZhbHVlOiB1bmtub3duLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIGNvbnN0IGRpcmVjdElkQ2FuZGlkYXRlcyA9IFtcbiAgICAgIHZhbHVlWydpZCddLFxuICAgICAgdmFsdWVbJ0lkJ10sXG4gICAgICB2YWx1ZVsncGV0SWQnXSxcbiAgICAgIHZhbHVlWydQZXRJZCddLFxuICAgICAgdmFsdWVbJ2VudW0nXSxcbiAgICAgIHZhbHVlWydFbnVtJ10sXG4gICAgICB2YWx1ZVsnRW51J10sXG4gICAgICB2YWx1ZVsnZW51J10sXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBkaXJlY3RJZENhbmRpZGF0ZXMpIHtcbiAgICAgIGlmIChjYW5kaWRhdGUgPT09IHVuZGVmaW5lZCB8fCBjYW5kaWRhdGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBudW1lcmljID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShudW1lcmljKSkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYyhudW1lcmljKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuYW1lUmF3ID0gdmFsdWVbJ25hbWUnXSA/PyB2YWx1ZVsnTmFtZSddO1xuICAgIGlmICh0eXBlb2YgbmFtZVJhdyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGtleSA9IG5hbWVSYXcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xuICAgICAgY29uc3QgcGV0SWRzQnlOYW1lID0gbWFwcz8ucGV0SWRzQnlOYW1lID8/IG1hcHM/LlBFVF9JRFNfQllfTkFNRTtcbiAgICAgIGNvbnN0IGlkID0gZ2V0QnlOYW1lTG9va3VwKHBldElkc0J5TmFtZSwga2V5KTtcbiAgICAgIGNvbnN0IG51bWVyaWMgPSB0b0ludE9yTnVsbChpZCk7XG4gICAgICBpZiAobnVtZXJpYyAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVtZXJpYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKCk7XG4gICAgaWYgKHMgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbnVtZXJpYyA9IHRvRmluaXRlTnVtYmVyKHMsIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShudW1lcmljKSkge1xuICAgICAgcmV0dXJuIE1hdGgudHJ1bmMobnVtZXJpYyk7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xuICAgIGNvbnN0IHBldElkc0J5TmFtZSA9IG1hcHM/LnBldElkc0J5TmFtZSA/PyBtYXBzPy5QRVRfSURTX0JZX05BTUU7XG4gICAgY29uc3QgaWQgPSBnZXRCeU5hbWVMb29rdXAocGV0SWRzQnlOYW1lLCBrZXkpO1xuICAgIGNvbnN0IG1hcHBlZCA9IHRvSW50T3JOdWxsKGlkKTtcbiAgICBpZiAobWFwcGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG51bWVyaWMgPSB0b0Zpbml0ZU51bWJlcih2YWx1ZSwgTmFOKTtcbiAgaWYgKE51bWJlci5pc0Zpbml0ZShudW1lcmljKSkge1xuICAgIHJldHVybiBNYXRoLnRydW5jKG51bWVyaWMpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlTnVtYmVycyh2YWx1ZXM6IHVua25vd25bXSk6IG51bWJlcltdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBzZWVuID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIGZvciAoY29uc3QgdiBvZiB2YWx1ZXMpIHtcbiAgICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBuID0gTnVtYmVyKHYpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE1hdGgudHJ1bmMobik7XG4gICAgaWYgKHNlZW4uaGFzKG5vcm1hbGl6ZWQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgc2Vlbi5hZGQobm9ybWFsaXplZCk7XG4gICAgb3V0LnB1c2gobm9ybWFsaXplZCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFiaWxpdHlFbnVtc0ZvclBldChcbiAgcGV0SWQ6IG51bWJlcixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGFiaWxpdHlNYXAgPSBtYXBzPy5hYmlsaXR5SWRzQnlQZXRJZCA/PyB7fTtcbiAgY29uc3Qga2V5ID0gU3RyaW5nKHBldElkKTtcbiAgY29uc3QgbWFwcGVkID0gQXJyYXkuaXNBcnJheShhYmlsaXR5TWFwW2tleV0pID8gYWJpbGl0eU1hcFtrZXldID8/IFtdIDogW107XG4gIGNvbnN0IGZhbGxiYWNrID0gQXJyYXkuaXNBcnJheShGQUxMQkFDS19BQklMSVRZX0lEU19CWV9QRVRfSURba2V5XSlcbiAgICA/IEZBTExCQUNLX0FCSUxJVFlfSURTX0JZX1BFVF9JRFtrZXldXG4gICAgOiBbXTtcbiAgcmV0dXJuIHVuaXF1ZU51bWJlcnMoWy4uLm1hcHBlZCwgLi4uZmFsbGJhY2tdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRCZWx1Z2FTd2FsbG93ZWRFbnRyeShzd2FsbG93ZWRSYXc6IHVua25vd24pOiBSZXBsYXlNZW1vcnlFbnRyeSB8IG51bGwge1xuICBjb25zdCBzd2FsbG93ZWRQZXRJZCA9IHJlc29sdmVQZXRJZEZyb21Vbmtub3duKHN3YWxsb3dlZFJhdyk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHN3YWxsb3dlZFBldElkKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGVudHJ5OiBSZXBsYXlNZW1vcnlFbnRyeSA9IHsgRW51OiBzd2FsbG93ZWRQZXRJZCB9O1xuICBjb25zdCBzd2FsbG93ZWQgPSBnZXRSZWNvcmQoc3dhbGxvd2VkUmF3KTtcbiAgaWYgKCFzd2FsbG93ZWQpIHtcbiAgICByZXR1cm4gZW50cnk7XG4gIH1cbiAgY29uc3QgYXR0YWNrID0gdG9GaW5pdGVOdW1iZXIoXG4gICAgc3dhbGxvd2VkWydhdHRhY2snXSA/PyBzd2FsbG93ZWRbJ0F0J10gPz8gc3dhbGxvd2VkWydhdCddLFxuICAgIE5hTixcbiAgKTtcbiAgaWYgKE51bWJlci5pc0Zpbml0ZShhdHRhY2spKSB7XG4gICAgZW50cnkuQXQgPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKGF0dGFjaykpO1xuICB9XG4gIGNvbnN0IGhlYWx0aCA9IHRvRmluaXRlTnVtYmVyKFxuICAgIHN3YWxsb3dlZFsnaGVhbHRoJ10gPz8gc3dhbGxvd2VkWydIcCddID8/IHN3YWxsb3dlZFsnaHAnXSxcbiAgICBOYU4sXG4gICk7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUoaGVhbHRoKSkge1xuICAgIGVudHJ5LkhwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWFsdGgpKTtcbiAgfVxuICBjb25zdCBtYW5hID0gdG9GaW5pdGVOdW1iZXIoc3dhbGxvd2VkWydtYW5hJ10gPz8gc3dhbGxvd2VkWydNYW5hJ10sIE5hTik7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUobWFuYSkpIHtcbiAgICBlbnRyeS5NYW5hID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChtYW5hKSk7XG4gIH1cbiAgY29uc3QgbGV2ZWwgPSB0b0Zpbml0ZU51bWJlcihcbiAgICBzd2FsbG93ZWRbJ2xldmVsJ10gPz8gc3dhbGxvd2VkWydsdmwnXSA/PyBzd2FsbG93ZWRbJ0x2bCddLFxuICAgIE5hTixcbiAgKTtcbiAgaWYgKE51bWJlci5pc0Zpbml0ZShsZXZlbCkpIHtcbiAgICBlbnRyeS5MdmwgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigzLCBNYXRoLnJvdW5kKGxldmVsKSkpO1xuICB9XG4gIGNvbnN0IGV4cCA9IHRvRmluaXRlTnVtYmVyKHN3YWxsb3dlZFsnZXhwJ10gPz8gc3dhbGxvd2VkWydFeHAnXSwgTmFOKTtcbiAgaWYgKE51bWJlci5pc0Zpbml0ZShleHApKSB7XG4gICAgZW50cnkuRXhwID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChleHApKTtcbiAgfVxuICBjb25zdCBwZXJrID0gc3dhbGxvd2VkWydwZXJrJ10gPz8gc3dhbGxvd2VkWydQZXJrJ107XG4gIGNvbnN0IHBlcmtOdW1iZXIgPSB0b051bGxhYmxlTnVtYmVyKHBlcmspO1xuICBpZiAocGVya051bWJlciAhPT0gbnVsbCkge1xuICAgIGVudHJ5LlBlcmsgPSBwZXJrTnVtYmVyO1xuICB9XG4gIGNvbnN0IHRpbWVzSHVydCA9IHRvRmluaXRlTnVtYmVyKFxuICAgIHN3YWxsb3dlZFsndGltZXNIdXJ0J10gPz8gc3dhbGxvd2VkWydUaW1lc0h1cnQnXSA/PyBzd2FsbG93ZWRbJ0hydEMnXSxcbiAgICBOYU4sXG4gICk7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUodGltZXNIdXJ0KSkge1xuICAgIGVudHJ5LkhydEMgPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHRpbWVzSHVydCkpO1xuICB9XG4gIHJldHVybiBlbnRyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RBYm9taW5hdGlvblN3YWxsb3dlZEVudHJpZXMoXG4gIHJhd1BldDogdW5rbm93bixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBBYm9taW5hdGlvblN3YWxsb3dlZEVudHJ5W10ge1xuICBjb25zdCBzbG90Q29uZmlnczogQWJvbWluYXRpb25TbG90Q29uZmlnW10gPSBbXG4gICAge1xuICAgICAgcGV0S2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxJyxcbiAgICAgIGxldmVsS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWwnLFxuICAgICAgYmVsdWdhS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICAgIHNmc0tleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MVNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGV0S2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyJyxcbiAgICAgIGxldmVsS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWwnLFxuICAgICAgYmVsdWdhS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICAgIHNmc0tleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MlNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGV0S2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzJyxcbiAgICAgIGxldmVsS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWwnLFxuICAgICAgYmVsdWdhS2V5OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0JyxcbiAgICAgIHNmc0tleTogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0M1NhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQnLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHJvb3QgPSBnZXRSZWNvcmQocmF3UGV0KTtcbiAgY29uc3QgZW50cmllczogQWJvbWluYXRpb25Td2FsbG93ZWRFbnRyeVtdID0gW107XG4gIGZvciAoY29uc3Qgc2xvdENvbmZpZyBvZiBzbG90Q29uZmlncykge1xuICAgIGNvbnN0IHN3YWxsb3dlZFJhdyA9IHJvb3Q/LltzbG90Q29uZmlnLnBldEtleV07XG4gICAgY29uc3Qgc3dhbGxvd2VkUGV0SWQgPSByZXNvbHZlUGV0SWRGcm9tVW5rbm93bihzd2FsbG93ZWRSYXcsIG1hcHMpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHN3YWxsb3dlZFBldElkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHN3YWxsb3dlZFJlY29yZCA9IGdldFJlY29yZChzd2FsbG93ZWRSYXcpO1xuICAgIGNvbnN0IHN3YWxsb3dlZEFiaWxpdHlFbnVtcyA9IGdldEFiaWxpdHlFbnVtc0ZvclBldChzd2FsbG93ZWRQZXRJZCwgbWFwcyk7XG4gICAgY29uc3QgbWVtb3J5RW50cnkgPVxuICAgICAgYnVpbGRCZWx1Z2FTd2FsbG93ZWRFbnRyeShzd2FsbG93ZWRSYXcpID8/ICh7IEVudTogc3dhbGxvd2VkUGV0SWQgfSBhcyBSZXBsYXlNZW1vcnlFbnRyeSk7XG4gICAgY29uc3Qgc3dhbGxvd2VkTGV2ZWwgPSB0b0Zpbml0ZU51bWJlcihyb290Py5bc2xvdENvbmZpZy5sZXZlbEtleV0sIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShzd2FsbG93ZWRMZXZlbCkpIHtcbiAgICAgIG1lbW9yeUVudHJ5Lkx2bCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDMsIE1hdGgucm91bmQoc3dhbGxvd2VkTGV2ZWwpKSk7XG4gICAgfVxuXG4gICAgaWYgKHN3YWxsb3dlZFBldElkID09PSAxODIpIHtcbiAgICAgIGNvbnN0IGJlbHVnYVJhdyA9XG4gICAgICAgIHJvb3Q/LltzbG90Q29uZmlnLmJlbHVnYUtleV0gPz8gc3dhbGxvd2VkUmVjb3JkPy5bJ2JlbHVnYVN3YWxsb3dlZFBldCddID8/IG51bGw7XG4gICAgICBjb25zdCBiZWx1Z2FFbnRyeSA9IGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoYmVsdWdhUmF3KTtcbiAgICAgIGlmIChiZWx1Z2FFbnRyeSkge1xuICAgICAgICBjb25zdCBiZWx1Z2FBYmlsaXR5RW51bXMgPSBnZXRBYmlsaXR5RW51bXNGb3JQZXQoMTgyLCBtYXBzKTtcbiAgICAgICAgY29uc3QgYmVsdWdhTGlzdHM6IFJlY29yZDxzdHJpbmcsIFJlcGxheVVua25vd25SZWNvcmRbXT4gPSB7XG4gICAgICAgICAgV2hpdGVXaGFsZUFiaWxpdHk6IFt7IC4uLmJlbHVnYUVudHJ5IH1dLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGFiaWxpdHlFbnVtIG9mIGJlbHVnYUFiaWxpdHlFbnVtcykge1xuICAgICAgICAgIGJlbHVnYUxpc3RzW1N0cmluZyhhYmlsaXR5RW51bSldID0gW3sgLi4uYmVsdWdhRW50cnkgfV07XG4gICAgICAgIH1cbiAgICAgICAgbWVtb3J5RW50cnkuTWlNcyA9IHsgTHN0czogYmVsdWdhTGlzdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3dhbGxvd2VkUGV0SWQgPT09IDc2Mykge1xuICAgICAgY29uc3Qgc2ZzUmF3ID1cbiAgICAgICAgcm9vdD8uW3Nsb3RDb25maWcuc2ZzS2V5XSA/P1xuICAgICAgICBzd2FsbG93ZWRSZWNvcmQ/Llsnc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCddID8/XG4gICAgICAgIG51bGw7XG4gICAgICBjb25zdCBzZnNFbnRyeSA9IGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoc2ZzUmF3KTtcbiAgICAgIGlmIChzZnNFbnRyeSkge1xuICAgICAgICBjb25zdCBzZnNMaXN0czogUmVjb3JkPHN0cmluZywgUmVwbGF5VW5rbm93blJlY29yZFtdPiA9IHtcbiAgICAgICAgICBTYXJjYXN0aWNGcmluZ2VoZWFkQWJpbGl0eTogW3sgLi4uc2ZzRW50cnkgfV0sXG4gICAgICAgIH07XG4gICAgICAgIG1lbW9yeUVudHJ5Lk1pTXMgPSB7IExzdHM6IHNmc0xpc3RzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZW50cmllcy5wdXNoKHtcbiAgICAgIHN3YWxsb3dlZFBldElkLFxuICAgICAgc3dhbGxvd2VkQWJpbGl0eUVudW1zLFxuICAgICAgbWVtb3J5RW50cnksXG4gICAgICBiZWx1Z2FTd2FsbG93ZWRFbnRyeTogbWVtb3J5RW50cnkuTWlNcyA/PyBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3dhbGxvd2VkQ2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkocm9vdD8uWydhYm9taW5hdGlvblN3YWxsb3dlZFBldHMnXSlcbiAgICA/IChyb290Py5bJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0cyddIGFzIHVua25vd25bXSlcbiAgICA6IFtdO1xuICBmb3IgKGNvbnN0IHN3YWxsb3dlZCBvZiBzd2FsbG93ZWRDYW5kaWRhdGVzKSB7XG4gICAgY29uc3Qgc3dhbGxvd2VkUGV0SWQgPSByZXNvbHZlUGV0SWRGcm9tVW5rbm93bihzd2FsbG93ZWQsIG1hcHMpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHN3YWxsb3dlZFBldElkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHN3YWxsb3dlZEFiaWxpdHlFbnVtcyA9IGdldEFiaWxpdHlFbnVtc0ZvclBldChzd2FsbG93ZWRQZXRJZCwgbWFwcyk7XG4gICAgZW50cmllcy5wdXNoKHtcbiAgICAgIHN3YWxsb3dlZFBldElkLFxuICAgICAgc3dhbGxvd2VkQWJpbGl0eUVudW1zLFxuICAgICAgbWVtb3J5RW50cnk6XG4gICAgICAgIGJ1aWxkQmVsdWdhU3dhbGxvd2VkRW50cnkoc3dhbGxvd2VkKSA/P1xuICAgICAgICAoeyBFbnU6IHN3YWxsb3dlZFBldElkIH0gYXMgUmVwbGF5TWVtb3J5RW50cnkpLFxuICAgICAgYmVsdWdhU3dhbGxvd2VkRW50cnk6IG51bGwsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bXNGcm9tU3dhbGxvd2VkUGV0cyhcbiAgcmF3UGV0OiB1bmtub3duLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IG51bWJlcltdIHtcbiAgY29uc3QgZW50cmllcyA9IGNvbGxlY3RBYm9taW5hdGlvblN3YWxsb3dlZEVudHJpZXMocmF3UGV0LCBtYXBzKTtcbiAgY29uc3QgYWJpbGl0eUVudW1zOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXMpKSB7XG4gICAgICBhYmlsaXR5RW51bXMucHVzaCguLi5lbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5pcXVlTnVtYmVycyhhYmlsaXR5RW51bXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5mZXJBYm9taW5hdGlvbkFiaWxpdHlMZXZlbHNGcm9tU3dhbGxvd2VkUGV0cyhcbiAgcmF3UGV0OiB1bmtub3duLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4ge1xuICBjb25zdCBlbnRyaWVzID0gY29sbGVjdEFib21pbmF0aW9uU3dhbGxvd2VkRW50cmllcyhyYXdQZXQsIG1hcHMpO1xuICBjb25zdCBsZXZlbEJ5QWJpbGl0eTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICBjb25zdCBmYWxsYmFja0xldmVsID0gMTtcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3Qgc3dhbGxvd2VkTGV2ZWwgPSB0b0Zpbml0ZU51bWJlcihlbnRyeS5tZW1vcnlFbnRyeT8uTHZsLCBOYU4pO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRMZXZlbCA9IE51bWJlci5pc0Zpbml0ZShzd2FsbG93ZWRMZXZlbClcbiAgICAgID8gTWF0aC5tYXgoMSwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChzd2FsbG93ZWRMZXZlbCkpKVxuICAgICAgOiBmYWxsYmFja0xldmVsO1xuICAgIGNvbnN0IHN3YWxsb3dlZEFiaWxpdHlFbnVtcyA9IHVuaXF1ZU51bWJlcnMoXG4gICAgICBBcnJheS5pc0FycmF5KGVudHJ5LnN3YWxsb3dlZEFiaWxpdHlFbnVtcylcbiAgICAgICAgPyBlbnRyeS5zd2FsbG93ZWRBYmlsaXR5RW51bXNcbiAgICAgICAgOiBbXSxcbiAgICApO1xuICAgIGZvciAoY29uc3QgYWJpbGl0eUVudW0gb2Ygc3dhbGxvd2VkQWJpbGl0eUVudW1zKSB7XG4gICAgICBjb25zdCBrZXkgPSBTdHJpbmcoYWJpbGl0eUVudW0pO1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0b0Zpbml0ZU51bWJlcihsZXZlbEJ5QWJpbGl0eVtrZXldLCBOYU4pO1xuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZXhpc3RpbmcpIHx8IG5vcm1hbGl6ZWRMZXZlbCA+IGV4aXN0aW5nKSB7XG4gICAgICAgIGxldmVsQnlBYmlsaXR5W2tleV0gPSBub3JtYWxpemVkTGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsZXZlbEJ5QWJpbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bUZyb21Td2FsbG93ZWRQZXRzKFxuICByYXdQZXQ6IHVua25vd24sXG4gIG1hcHM/OiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzLFxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IGluZmVycmVkID0gaW5mZXJBYm9taW5hdGlvbkFiaWxpdHlFbnVtc0Zyb21Td2FsbG93ZWRQZXRzKHJhd1BldCwgbWFwcyk7XG4gIHJldHVybiBpbmZlcnJlZC5sZW5ndGggPiAwID8gaW5mZXJyZWRbMF0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpbWFyeUFiaWxpdHlFbnVtRm9yTWVtb3J5KFxuICByYXdQZXQ6IHVua25vd24sXG4gIHBldElkOiBudW1iZXIsXG4gIG1hcHM/OiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzLFxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHBldCA9IGdldFJlY29yZChyYXdQZXQpO1xuICBjb25zdCBhYmlsID0gQXJyYXkuaXNBcnJheShwZXQ/LlsnQWJpbCddKSA/IChwZXQ/LlsnQWJpbCddIGFzIHVua25vd25bXSkgOiBbXTtcbiAgY29uc3QgYWJpbGl0aWVzID0gQXJyYXkuaXNBcnJheShwZXQ/LlsnYWJpbGl0aWVzJ10pXG4gICAgPyAocGV0Py5bJ2FiaWxpdGllcyddIGFzIHVua25vd25bXSlcbiAgICA6IFtdO1xuICBjb25zdCBkaXJlY3RDYW5kaWRhdGVzID0gW1xuICAgIHBldD8uWydhYmlsaXR5RW51bSddLFxuICAgIHBldD8uWydhYmlsaXR5SWQnXSxcbiAgICBnZXRSZWNvcmQoYWJpbFswXSk/LlsnRW51J10sXG4gICAgZ2V0UmVjb3JkKGFiaWxpdGllc1swXSk/LlsnRW51J10sXG4gIF07XG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdENhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCBudW0gPSB0b0Zpbml0ZU51bWJlcihjYW5kaWRhdGUsIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShudW0pKSB7XG4gICAgICByZXR1cm4gTWF0aC50cnVuYyhudW0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwZXRJZCA9PT0gMzczIHx8IHBldElkID09PSAzMzgpIHtcbiAgICBjb25zdCBpbmZlcnJlZCA9IGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bUZyb21Td2FsbG93ZWRQZXRzKHJhd1BldCwgbWFwcyk7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShpbmZlcnJlZCkpIHtcbiAgICAgIHJldHVybiBNYXRoLnRydW5jKGluZmVycmVkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBwZWQgPSBnZXRBYmlsaXR5RW51bXNGb3JQZXQocGV0SWQsIG1hcHMpO1xuICByZXR1cm4gbWFwcGVkLmxlbmd0aCA+IDAgPyBtYXBwZWRbMF0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBYm9taW5hdGlvbk1lbW9yeShcbiAgcmF3UGV0OiB1bmtub3duLFxuICBwZXRJZDogbnVtYmVyLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IFJlcGxheU1lbW9yeVBheWxvYWQgfCBudWxsIHtcbiAgY29uc3Qgc3dhbGxvd2VkRW50cmllcyA9IGNvbGxlY3RBYm9taW5hdGlvblN3YWxsb3dlZEVudHJpZXMocmF3UGV0LCBtYXBzKTtcbiAgaWYgKHN3YWxsb3dlZEVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZmFsbGJhY2tBYmlsaXR5RW51bSA9IGdldFByaW1hcnlBYmlsaXR5RW51bUZvck1lbW9yeShyYXdQZXQsIHBldElkLCBtYXBzKTtcbiAgY29uc3QgZmFsbGJhY2tMaXN0ID1cbiAgICBmYWxsYmFja0FiaWxpdHlFbnVtICE9PSBudWxsID8gW01hdGgudHJ1bmMoZmFsbGJhY2tBYmlsaXR5RW51bSldIDogW107XG4gIGNvbnN0IGxpc3RzOiBSZWNvcmQ8c3RyaW5nLCBSZXBsYXlVbmtub3duUmVjb3JkW10+ID0ge307XG4gIGZvciAoY29uc3QgZW50cnkgb2Ygc3dhbGxvd2VkRW50cmllcykge1xuICAgIGNvbnN0IG93bkVudW1zID0gdW5pcXVlTnVtYmVycyhcbiAgICAgIEFycmF5LmlzQXJyYXkoZW50cnkuc3dhbGxvd2VkQWJpbGl0eUVudW1zKSA/IGVudHJ5LnN3YWxsb3dlZEFiaWxpdHlFbnVtcyA6IFtdLFxuICAgICk7XG4gICAgY29uc3Qga2V5RW51bXMgPSBvd25FbnVtcy5sZW5ndGggPiAwID8gb3duRW51bXMgOiBmYWxsYmFja0xpc3Q7XG4gICAgaWYgKGtleUVudW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYWJpbGl0eUVudW0gb2Yga2V5RW51bXMpIHtcbiAgICAgIGNvbnN0IGtleSA9IFN0cmluZyhhYmlsaXR5RW51bSk7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdHNba2V5XSkpIHtcbiAgICAgICAgbGlzdHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlQmVsdWdhID1cbiAgICAgICAgZW50cnkuc3dhbGxvd2VkUGV0SWQgPT09IDE4MiAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5LnN3YWxsb3dlZEFiaWxpdHlFbnVtcykgJiZcbiAgICAgICAgZW50cnkuc3dhbGxvd2VkQWJpbGl0eUVudW1zLmluY2x1ZGVzKGFiaWxpdHlFbnVtKSAmJlxuICAgICAgICBlbnRyeS5iZWx1Z2FTd2FsbG93ZWRFbnRyeTtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB1c2VCZWx1Z2FcbiAgICAgICAgPyAoZW50cnkuYmVsdWdhU3dhbGxvd2VkRW50cnkgYXMgdW5rbm93biBhcyBSZXBsYXlVbmtub3duUmVjb3JkKVxuICAgICAgICA6IChlbnRyeS5tZW1vcnlFbnRyeSBhcyBSZXBsYXlVbmtub3duUmVjb3JkKTtcbiAgICAgIGxpc3RzW2tleV0ucHVzaChwYXlsb2FkKTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5rZXlzKGxpc3RzKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4geyBMc3RzOiBsaXN0cyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCZWx1Z2FNZW1vcnkoXG4gIHJhd1BldDogdW5rbm93bixcbiAgcGV0SWQ6IG51bWJlcixcbiAgbWFwcz86IFJlcGxheVBhcnNlckxvb2t1cE1hcHMsXG4pOiBSZXBsYXlNZW1vcnlQYXlsb2FkIHwgbnVsbCB7XG4gIGNvbnN0IHBldCA9IGdldFJlY29yZChyYXdQZXQpO1xuICBjb25zdCBzd2FsbG93ZWRSYXcgPSBwZXQ/LlsnYmVsdWdhU3dhbGxvd2VkUGV0J10gPz8gcGV0Py5bJ3N3YWxsb3dlZFBldCddID8/IG51bGw7XG4gIGNvbnN0IHN3YWxsb3dlZEVudHJ5ID0gYnVpbGRCZWx1Z2FTd2FsbG93ZWRFbnRyeShzd2FsbG93ZWRSYXcpO1xuICBpZiAoIXN3YWxsb3dlZEVudHJ5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbWFwcGVkID0gZ2V0QWJpbGl0eUVudW1zRm9yUGV0KHBldElkLCBtYXBzKTtcbiAgY29uc3QgcHJpbWFyeSA9IGdldFByaW1hcnlBYmlsaXR5RW51bUZvck1lbW9yeShyYXdQZXQsIHBldElkLCBtYXBzKTtcbiAgY29uc3QgYmVsdWdhQWJpbGl0eUVudW1zID1cbiAgICBtYXBwZWQubGVuZ3RoID4gMFxuICAgICAgPyBtYXBwZWRcbiAgICAgIDogcHJpbWFyeSAhPT0gbnVsbFxuICAgICAgICA/IFtNYXRoLnRydW5jKHByaW1hcnkpXVxuICAgICAgICA6IFtdO1xuICBpZiAoYmVsdWdhQWJpbGl0eUVudW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGxpc3RzOiBSZWNvcmQ8c3RyaW5nLCBSZXBsYXlVbmtub3duUmVjb3JkW10+ID0ge1xuICAgIFdoaXRlV2hhbGVBYmlsaXR5OiBbeyAuLi5zd2FsbG93ZWRFbnRyeSB9XSxcbiAgfTtcbiAgZm9yIChjb25zdCBhYmlsaXR5RW51bSBvZiBiZWx1Z2FBYmlsaXR5RW51bXMpIHtcbiAgICBsaXN0c1tTdHJpbmcoYWJpbGl0eUVudW0pXSA9IFt7IC4uLnN3YWxsb3dlZEVudHJ5IH1dO1xuICB9XG4gIHJldHVybiB7IExzdHM6IGxpc3RzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNhcmNhc3RpY0ZyaW5nZWhlYWRNZW1vcnkoXG4gIHJhd1BldDogdW5rbm93bixcbiAgX3BldElkOiBudW1iZXIsXG4gIF9tYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IFJlcGxheU1lbW9yeVBheWxvYWQgfCBudWxsIHtcbiAgY29uc3QgcGV0ID0gZ2V0UmVjb3JkKHJhd1BldCk7XG4gIGNvbnN0IHN3YWxsb3dlZFJhdyA9IHBldD8uWydzYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0J10gPz8gbnVsbDtcbiAgY29uc3Qgc3dhbGxvd2VkRW50cnkgPSBidWlsZEJlbHVnYVN3YWxsb3dlZEVudHJ5KHN3YWxsb3dlZFJhdyk7XG4gIGlmICghc3dhbGxvd2VkRW50cnkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0b0Zpbml0ZU51bWJlcihzd2FsbG93ZWRFbnRyeS5MdmwsIE5hTikpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuTHZsID0gMTtcbiAgfVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0b0Zpbml0ZU51bWJlcihzd2FsbG93ZWRFbnRyeS5BdCwgTmFOKSkpIHtcbiAgICBzd2FsbG93ZWRFbnRyeS5BdCA9IDE7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodG9GaW5pdGVOdW1iZXIoc3dhbGxvd2VkRW50cnkuSHAsIE5hTikpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuSHAgPSAxO1xuICB9XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN3YWxsb3dlZEVudHJ5LCAnTWFuYScpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuTWFuYSA9IG51bGw7XG4gIH1cbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3dhbGxvd2VkRW50cnksICdQZXJrJykpIHtcbiAgICBzd2FsbG93ZWRFbnRyeS5QZXJrID0gbnVsbDtcbiAgfVxuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzd2FsbG93ZWRFbnRyeSwgJ0V4cCcpKSB7XG4gICAgc3dhbGxvd2VkRW50cnkuRXhwID0gbnVsbDtcbiAgfVxuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzd2FsbG93ZWRFbnRyeSwgJ1Bvd2EnKSkge1xuICAgIHN3YWxsb3dlZEVudHJ5LlBvd2EgPSBudWxsO1xuICB9XG4gIHJldHVybiB7IExzdHM6IHsgU2FyY2FzdGljRnJpbmdlaGVhZEFiaWxpdHk6IFt7IC4uLnN3YWxsb3dlZEVudHJ5IH1dIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQWJpbGl0eUVudHJ5KFxuICBhYmlsaXR5RW51bTogbnVtYmVyLFxuICBsZXZlbDogbnVtYmVyLFxuICB0cmlnZ2Vyc0NvbnN1bWVkID0gMCxcbik6IFJlcGxheUFiaWxpdHlFbnRyeSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRUcmlnZ2VycyA9IE51bWJlci5pc0Zpbml0ZSh0cmlnZ2Vyc0NvbnN1bWVkKVxuICAgID8gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZCh0cmlnZ2Vyc0NvbnN1bWVkKSlcbiAgICA6IDA7XG4gIHJldHVybiB7XG4gICAgRW51OiBhYmlsaXR5RW51bSxcbiAgICBMdmw6IGxldmVsLFxuICAgIE5hdDogdHJ1ZSxcbiAgICBEdXI6IDAsXG4gICAgVHJDbzogbm9ybWFsaXplZFRyaWdnZXJzLFxuICAgIENoYXI6IG51bGwsXG4gICAgRGlzOiBmYWxzZSxcbiAgICBBSU1MOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEZpbml0ZU51bWJlckJ5S2V5UHJlZGljYXRlKFxuICBzb3VyY2U6IHVua25vd24sXG4gIGtleVByZWRpY2F0ZTogKGs6IHN0cmluZykgPT4gYm9vbGVhbixcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCByZWNvcmQgPSBnZXRSZWNvcmQoc291cmNlKTtcbiAgaWYgKCFyZWNvcmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyZWNvcmQpKSB7XG4gICAgaWYgKCFrZXlQcmVkaWNhdGUoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IG4gPSB0b0Zpbml0ZU51bWJlcih2YWx1ZSwgTmFOKTtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmlnZ2Vyc0NvbnN1bWVkRnJvbVJhd1BldChyYXdQZXQ6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgcGV0ID0gZ2V0UmVjb3JkKHJhd1BldCk7XG4gIGNvbnN0IGRpcmVjdCA9IFtcbiAgICBwZXQ/LlsndHJpZ2dlcnNDb25zdW1lZCddLFxuICAgIHBldD8uWydUckNvJ10sXG4gICAgcGV0Py5bJ3RyY28nXSxcbiAgICBwZXQ/LlsndHJpZ2dlckNvbnN1bWVkJ10sXG4gIF07XG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGRpcmVjdCkge1xuICAgIGNvbnN0IG4gPSB0b0Zpbml0ZU51bWJlcihjYW5kaWRhdGUsIE5hTik7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgucm91bmQobikpO1xuICAgIH1cbiAgfVxuICBjb25zdCBwcmVkaWNhdGUgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaGFzVHJpZ2dlciA9XG4gICAgICBub3JtYWxpemVkLmluY2x1ZGVzKCd0cmlnZ2VyJykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygndHJpZycpO1xuICAgIGNvbnN0IGhhc0NvbnN1bWVkID0gbm9ybWFsaXplZC5pbmNsdWRlcygnY29uc3VtJyk7XG4gICAgY29uc3QgaXNBYmJyZXYgPSBbJ3RyZ2MnLCAndHJnY24nLCAndHJjJywgJ3RyY24nLCAndHJjbyddLmluY2x1ZGVzKG5vcm1hbGl6ZWQpO1xuICAgIHJldHVybiAoaGFzVHJpZ2dlciAmJiBoYXNDb25zdW1lZCkgfHwgaXNBYmJyZXY7XG4gIH07XG4gIGNvbnN0IG9iamVjdENhbmRpZGF0ZXMgPSBbcGV0LCBnZXRSZWNvcmQocGV0Py5bJ3BvdyddKSwgZ2V0UmVjb3JkKHBldD8uWydQb3cnXSldO1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBvYmplY3RDYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgbiA9IGZpbmRGaW5pdGVOdW1iZXJCeUtleVByZWRpY2F0ZShjYW5kaWRhdGUsIHByZWRpY2F0ZSk7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgucm91bmQobikpO1xuICAgIH1cbiAgfVxuICBjb25zdCBhYmlsaXRpZXMgPSBBcnJheS5pc0FycmF5KHBldD8uWydhYmlsaXRpZXMnXSlcbiAgICA/IChwZXQ/LlsnYWJpbGl0aWVzJ10gYXMgdW5rbm93bltdKVxuICAgIDogW107XG4gIGNvbnN0IGFiaWwgPSBBcnJheS5pc0FycmF5KHBldD8uWydBYmlsJ10pID8gKHBldD8uWydBYmlsJ10gYXMgdW5rbm93bltdKSA6IFtdO1xuICBjb25zdCBhYmlsaXR5VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGFiaWxpdHlBcnJheSBvZiBbYWJpbGl0aWVzLCBhYmlsXSkge1xuICAgIGZvciAoY29uc3QgYWJpbGl0eSBvZiBhYmlsaXR5QXJyYXkpIHtcbiAgICAgIGNvbnN0IG4gPSBmaW5kRmluaXRlTnVtYmVyQnlLZXlQcmVkaWNhdGUoYWJpbGl0eSwgcHJlZGljYXRlKTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgICAgYWJpbGl0eVZhbHVlcy5wdXNoKG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYWJpbGl0eVZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgucm91bmQoTWF0aC5tYXgoLi4uYWJpbGl0eVZhbHVlcykpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzSHVydEZyb21SYXdQZXQocmF3UGV0OiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHBldCA9IGdldFJlY29yZChyYXdQZXQpO1xuICBjb25zdCBwb3cgPSBnZXRSZWNvcmQocGV0Py5bJ1BvdyddKTtcbiAgY29uc3QgcG93TG93ZXIgPSBnZXRSZWNvcmQocGV0Py5bJ3BvdyddKTtcbiAgY29uc3QgZGlyZWN0ID0gW1xuICAgIHBldD8uWyd0aW1lc0h1cnQnXSxcbiAgICBwZXQ/LlsnVGltZXNIdXJ0J10sXG4gICAgcGV0Py5bJ0hydEMnXSxcbiAgICBwZXQ/LlsnaHJ0YyddLFxuICAgIHBvdz8uWydTYWJlcnRvb3RoVGlnZXJBYmlsaXR5J10sXG4gICAgcG93TG93ZXI/LlsnU2FiZXJ0b290aFRpZ2VyQWJpbGl0eSddLFxuICBdO1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBkaXJlY3QpIHtcbiAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKG4pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVsbENvdW50RnJvbVJhd1BldChyYXdQZXQ6IHVua25vd24pOiBudW1iZXIge1xuICBjb25zdCBwZXQgPSBnZXRSZWNvcmQocmF3UGV0KTtcbiAgY29uc3QgZGlyZWN0ID0gW1xuICAgIHBldD8uWydzcGVsbENvdW50J10sXG4gICAgcGV0Py5bJ3NwZWxsc0Nhc3QnXSxcbiAgICBwZXQ/Llsnc3BlbGxzQ2FzdFRoaXNUdXJuJ10sXG4gICAgcGV0Py5bJ1NwQ1QnXSxcbiAgXTtcbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgY29uc3QgbiA9IHRvRmluaXRlTnVtYmVyKGNhbmRpZGF0ZSwgTmFOKTtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChuKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG95TmFtZShyYXdUb3k6IHVua25vd24pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiByYXdUb3kgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHJhd1RveTtcbiAgfVxuICBjb25zdCB0b3kgPSBnZXRSZWNvcmQocmF3VG95KTtcbiAgcmV0dXJuIHR5cGVvZiB0b3k/LlsnbmFtZSddID09PSAnc3RyaW5nJyA/IHRveVsnbmFtZSddIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUb3lJZChcbiAgcmF3VG95OiB1bmtub3duLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAocmF3VG95ID09PSBudWxsIHx8IHJhd1RveSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdG95ID0gZ2V0UmVjb3JkKHJhd1RveSk7XG4gIGlmICh0b3kpIHtcbiAgICBjb25zdCBkaXJlY3QgPSBbXG4gICAgICB0b3lbJ2lkJ10sXG4gICAgICB0b3lbJ0lkJ10sXG4gICAgICB0b3lbJ3RveUlkJ10sXG4gICAgICB0b3lbJ3RveUlEJ10sXG4gICAgICB0b3lbJ2VudW0nXSxcbiAgICAgIHRveVsnRW51J10sXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBkaXJlY3QpIHtcbiAgICAgIGNvbnN0IG4gPSB0b0Zpbml0ZU51bWJlcihjYW5kaWRhdGUsIE5hTik7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB0b3lOYW1lID0gZ2V0VG95TmFtZShyYXdUb3kpID8/IHJhd1RveTtcbiAgY29uc3QgbG9va3VwS2V5ID1cbiAgICB0eXBlb2YgdG95TmFtZSA9PT0gJ3N0cmluZydcbiAgICAgID8gdG95TmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLCAnJylcbiAgICAgIDogJyc7XG4gIGlmICghbG9va3VwS2V5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbWFwcGVkID0gdG9JbnRPck51bGwobWFwcz8udG95SWRzQnlOYW1lPy5bbG9va3VwS2V5XSk7XG4gIGlmIChtYXBwZWQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gbWFwcGVkO1xuICB9XG4gIGNvbnN0IGZhbGxiYWNrID0gRkFMTEJBQ0tfVE9ZX0lEU19CWV9OQU1FW2xvb2t1cEtleV07XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoZmFsbGJhY2spID8gZmFsbGJhY2sgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVRveUFiaWxpdHlFbnVtKFxuICByYXdUb3k6IHVua25vd24sXG4gIHRveUlkOiBudW1iZXIgfCBudWxsLFxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHRveSA9IGdldFJlY29yZChyYXdUb3kpO1xuICBpZiAodG95KSB7XG4gICAgY29uc3QgYWJpbCA9IEFycmF5LmlzQXJyYXkodG95WydBYmlsJ10pID8gKHRveVsnQWJpbCddIGFzIHVua25vd25bXSkgOiBbXTtcbiAgICBjb25zdCBhYmlsaXRpZXMgPSBBcnJheS5pc0FycmF5KHRveVsnYWJpbGl0aWVzJ10pXG4gICAgICA/ICh0b3lbJ2FiaWxpdGllcyddIGFzIHVua25vd25bXSlcbiAgICAgIDogW107XG4gICAgY29uc3QgZGlyZWN0ID0gW1xuICAgICAgdG95WydhYmlsaXR5RW51bSddLFxuICAgICAgdG95WydhYmlsaXR5SWQnXSxcbiAgICAgIGdldFJlY29yZChhYmlsWzBdKT8uWydFbnUnXSxcbiAgICAgIGdldFJlY29yZChhYmlsaXRpZXNbMF0pPy5bJ0VudSddLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYyhuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKE51bWJlci5pc0Zpbml0ZShOdW1iZXIodG95SWQpKSkge1xuICAgIHJldHVybiBNYXRoLnRydW5jKE51bWJlcih0b3lJZCkgKyAzMik7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVG95VXNlc0xlZnQocmF3VG95OiB1bmtub3duLCB0b3lMZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgdG95ID0gZ2V0UmVjb3JkKHJhd1RveSk7XG4gIGlmICh0b3kpIHtcbiAgICBjb25zdCBkaXJlY3QgPSBbdG95Wydjb3UnXSwgdG95WydDb3UnXSwgdG95Wyd1c2VzTGVmdCddLCB0b3lbJ2NoYXJnZXMnXV07XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChuKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBNYXRoLm1heCgxLCAzIC0gdG95TGV2ZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVRveUhlYWx0aFBlcm0ocmF3VG95OiB1bmtub3duLCB0b3lMZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgdG95ID0gZ2V0UmVjb3JkKHJhd1RveSk7XG4gIGlmICh0b3kpIHtcbiAgICBjb25zdCBocCA9IGdldFJlY29yZCh0b3lbJ0hwJ10pO1xuICAgIGNvbnN0IGRpcmVjdCA9IFt0b3lbJ2hwJ10sIHRveVsnaGVhbHRoJ10sIGhwPy5bJ1Blcm0nXV07XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgZGlyZWN0KSB7XG4gICAgICBjb25zdCBuID0gdG9GaW5pdGVOdW1iZXIoY2FuZGlkYXRlLCBOYU4pO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChuKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBNYXRoLm1heCgxLCAzICsgKHRveUxldmVsIC0gMSkgKiA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVsaWNJdGVtcyhcbiAgYm9hcmRJZDogc3RyaW5nLFxuICByYXdUb3k6IHVua25vd24sXG4gIHJhd1RveUxldmVsOiB1bmtub3duLFxuICB3YXJuaW5nQmFnOiBSZXBsYXlXYXJuaW5nQmFnLFxuICBtYXBzPzogUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbik6IFtudWxsLCBSZXBsYXlSZWxpY0l0ZW0gfCBudWxsXSB7XG4gIGNvbnN0IHRveUlkID0gcmVzb2x2ZVRveUlkKHJhd1RveSwgbWFwcyk7XG4gIGNvbnN0IHRveU5hbWUgPSBnZXRUb3lOYW1lKHJhd1RveSkgPz8gKHR5cGVvZiByYXdUb3kgPT09ICdzdHJpbmcnID8gcmF3VG95IDogJycpO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShOdW1iZXIodG95SWQpKSkge1xuICAgIGlmICh0b3lOYW1lKSB7XG4gICAgICB3YXJuaW5nQmFnLnVua25vd25Ub3lzLnB1c2goU3RyaW5nKHRveU5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuICBjb25zdCB0b3lMZXZlbCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQodG9GaW5pdGVOdW1iZXIocmF3VG95TGV2ZWwsIDEpKSk7XG4gIGNvbnN0IHRveUFiaWxpdHlFbnVtID0gcmVzb2x2ZVRveUFiaWxpdHlFbnVtKHJhd1RveSwgdG95SWQpO1xuICBjb25zdCB0b3lVc2VzTGVmdCA9IHJlc29sdmVUb3lVc2VzTGVmdChyYXdUb3ksIHRveUxldmVsKTtcbiAgY29uc3QgdG95SGVhbHRoUGVybSA9IHJlc29sdmVUb3lIZWFsdGhQZXJtKHJhd1RveSwgdG95TGV2ZWwpO1xuICBjb25zdCB0b3lSZWxpYzogUmVwbGF5UmVsaWNJdGVtID0ge1xuICAgIE93bjogMSxcbiAgICBFbnU6IHRveUlkLFxuICAgIExvYzogNCxcbiAgICBQb2k6IHsgeDogMSwgeTogMCB9LFxuICAgIEV4cDogMCxcbiAgICBMdmw6IHRveUxldmVsLFxuICAgIEhwOiB7IFBlcm06IHRveUhlYWx0aFBlcm0sIFRlbXA6IDAsIE1heDogbnVsbCB9LFxuICAgIEF0OiB7IFBlcm06IDEwMDAsIFRlbXA6IDAsIE1heDogMTAwMCB9LFxuICAgIE1hbmE6IDAsXG4gICAgQ291OiB0b3lVc2VzTGVmdCxcbiAgICBQZUJvOiBmYWxzZSxcbiAgICBQZUR1OiBudWxsLFxuICAgIFBlRE06IG51bGwsXG4gICAgUGVNdTogbnVsbCxcbiAgICBQZURyOiAwLFxuICAgIEFiaWw6XG4gICAgICB0b3lBYmlsaXR5RW51bSAhPT0gbnVsbCA/IFtidWlsZEFiaWxpdHlFbnRyeSh0b3lBYmlsaXR5RW51bSwgdG95TGV2ZWwsIDApXSA6IFtdLFxuICAgIEFiRGk6IGZhbHNlLFxuICAgIENvc206IDAsXG4gICAgRGVhZDogZmFsc2UsXG4gICAgRGVzdDogZmFsc2UsXG4gICAgRGVCeTogbnVsbCxcbiAgICBMaW5rOiBudWxsLFxuICAgIFBvdzogbnVsbCxcbiAgICBTZVY6IG51bGwsXG4gICAgUndkczogMCxcbiAgICBSd3JkOiBmYWxzZSxcbiAgICBNaU1zOiBudWxsLFxuICAgIFNwTWU6IG51bGwsXG4gICAgVHJpOiBudWxsLFxuICAgIEF0a0M6IDAsXG4gICAgSHJ0QzogMCxcbiAgICBTcENUOiAwLFxuICAgIE9sVHM6IG51bGwsXG4gICAgTGFzdFRhcmdldHNUaGlzVHVybjogbnVsbCxcbiAgICBJZDogeyBCb0lkOiBib2FyZElkLCBVbmk6IDkwMCB9LFxuICAgIFByaTogMyxcbiAgICBGcm86IGZhbHNlLFxuICAgIFdGcm86IGZhbHNlLFxuICAgIEFGcm86IGZhbHNlLFxuICB9O1xuICByZXR1cm4gW251bGwsIHRveVJlbGljXTtcbn1cblxuZXhwb3J0IGNvbnN0IFJFUExBWV9ERUJVR19FTkFCTEVEID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXBSZXBsYXlEZWJ1ZycpO1xuICAgIGlmIChmcm9tU3RvcmFnZSA9PT0gJzEnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KCdzYXBSZXBsYXlEZWJ1ZycpID09PSAnMSc7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxheURlYnVnKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICBpZiAoIVJFUExBWV9ERUJVR19FTkFCTEVEKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUubG9nKCdbU0FQIFJlcGxheSBEZWJ1Z10nLCAuLi5hcmdzKTtcbn1cbiIsICJpbXBvcnQge1xuICBDdXN0b21QYWNrSXRlbSxcbiAgQ3VzdG9tUGFja0NvbmZpZyxcbiAgUGV0Q29uZmlnLFxufSBmcm9tICdhcHAvZG9tYWluL2ludGVyZmFjZXMvc2ltdWxhdGlvbi1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IGVuY29kZUJhc2U2NFVybCB9IGZyb20gJ2FwcC9ydW50aW1lL2Jhc2U2NC11cmwnO1xuaW1wb3J0IHsgZm9vZCBhcyBmb29kSnNvbiB9IGZyb20gJ2FwcC9ydW50aW1lL2NvbnRlbnQtY2F0YWxvZ3MnO1xuaW1wb3J0IHtcbiAgS0VZX01BUCxcbiAgUEFDS19NQVAsXG4gIFBFUktTX0JZX0lELFxuICBQRVRTX0JZX0lELFxuICBQRVRfSURTX0JZX05BTUUsXG4gIFBFVFNfTUVUQV9CWV9JRCxcbiAgVE9ZU19CWV9JRCxcbn0gZnJvbSAnLi9yZXBsYXktY2FsYy1zY2hlbWEnO1xuaW1wb3J0IHtcbiAgcmVzb2x2ZVBldElkRnJvbVVua25vd24sXG4gIGdldFRpbWVzSHVydEZyb21SYXdQZXQsXG4gIGdldFRyaWdnZXJzQ29uc3VtZWRGcm9tUmF3UGV0LFxuICAvLyBvdGhlciBoZWxwZXJzIGF2YWlsYWJsZSBmb3IgZnV0dXJlIHdpcmluZ1xuICByZXNvbHZlVG95SWQsXG4gIGdldFRveU5hbWUsXG4gIGJ1aWxkQWJvbWluYXRpb25NZW1vcnksXG4gIGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bXNGcm9tU3dhbGxvd2VkUGV0cyxcbiAgUmVwbGF5UGFyc2VyTG9va3VwTWFwcyxcbn0gZnJvbSAnLi9yZXBsYXktY2FsYy1wYXJzZXItdXRpbHMnO1xuXG5pbnRlcmZhY2UgUmVwbGF5QWJpbGl0eUpzb24ge1xuICBFbnU/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBMdmw/OiBudW1iZXIgfCBudWxsO1xuICBHcm9wPzogbnVtYmVyIHwgbnVsbDtcbiAgVHJDbz86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlQZXRTdGF0c0pzb24ge1xuICBUZW1wPzogbnVtYmVyIHwgbnVsbDtcbiAgUGVybT86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlQZXRKc29uIHtcbiAgRW51PzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgQXQ/OiBSZXBsYXlQZXRTdGF0c0pzb24gfCBudWxsO1xuICBIcD86IFJlcGxheVBldFN0YXRzSnNvbiB8IG51bGw7XG4gIEV4cD86IG51bWJlciB8IG51bGw7XG4gIEx2bD86IG51bWJlciB8IG51bGw7XG4gIFBlcms/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBNYW5hPzogbnVtYmVyIHwgbnVsbDtcbiAgUG93Pzoge1xuICAgIFNhYmVydG9vdGhUaWdlckFiaWxpdHk/OiBudW1iZXIgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgQWJpbD86IFJlcGxheUFiaWxpdHlKc29uW10gfCBudWxsO1xuICBQb2k/OiB7XG4gICAgeD86IG51bWJlciB8IG51bGw7XG4gIH0gfCBudWxsO1xuICBNaU1zPzoge1xuICAgIExzdHM/OiB7XG4gICAgICBXaGl0ZVdoYWxlQWJpbGl0eT86IFJlcGxheVBldEpzb25bXSB8IG51bGw7XG4gICAgfSB8IG51bGw7XG4gIH0gfCBudWxsO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5TWVtb3J5RW50cnlKc29uIHtcbiAgRW51PzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgTHZsPzogbnVtYmVyIHwgbnVsbDtcbiAgSWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBpZD86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIGVudT86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIE1pTXM/OiB7XG4gICAgTHN0cz86IFJlY29yZDxzdHJpbmcsIEFycmF5PFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGw+IHwgbnVsbD4gfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIFJlcGxheVRveUpzb24ge1xuICBFbnU/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBMdmw/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheURlY2tKc29uIHtcbiAgSWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBUaXRsZT86IHN0cmluZyB8IG51bGw7XG4gIE1pbmlvbnM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgbnVsbDtcbiAgU3BlbGxzPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5Qm9hcmRKc29uIHtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbiAgTWlucz86IHtcbiAgICBJdGVtcz86IEFycmF5PFJlcGxheVBldEpzb24gfCBudWxsPiB8IG51bGw7XG4gIH0gfCBudWxsO1xuICBSZWw/OiB7XG4gICAgSXRlbXM/OiBBcnJheTxSZXBsYXlUb3lKc29uIHwgbnVsbD4gfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgRGVjaz86IFJlcGxheURlY2tKc29uIHwgbnVsbDtcbiAgUGFjaz86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5QmF0dGxlSnNvbiB7XG4gIFVzZXJCb2FyZD86IFJlcGxheUJvYXJkSnNvbiB8IG51bGw7XG4gIE9wcG9uZW50Qm9hcmQ/OiBSZXBsYXlCb2FyZEpzb24gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUJ1aWxkTW9kZWxKc29uIHtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbiAgQm9yPzoge1xuICAgIERlY2s/OiBSZXBsYXlEZWNrSnNvbiB8IG51bGw7XG4gIH0gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheU1ldGFCb2FyZHMge1xuICB1c2VyQm9hcmQ/OiBSZXBsYXlCb2FyZEpzb24gfCBudWxsO1xuICBvcHBvbmVudEJvYXJkPzogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlQYXJzZU9wdGlvbnMge1xuICBhYmlsaXR5UGV0TWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiB8IG51bGw7XG4gIC8qKiBSZXBsYXktZGVyaXZlZCBwZXJrIG5hbWVzIGtleWVkIGJ5IHRoZSByYXcgcGV0IGVudW0uICovXG4gIHBlcmtOYW1lQnlQZXRJZD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUFjdGlvbkpzb24ge1xuICBUeXBlPzogbnVtYmVyIHwgbnVsbDtcbiAgVHVybj86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIEJ1aWxkPzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuICBCYXR0bGU/OiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG4gIE1vZGU/OiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG4gIFJlc3BvbnNlPzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uIHtcbiAgQWN0aW9ucz86IFJlYWRvbmx5QXJyYXk8UmVwbGF5QWN0aW9uSnNvbj4gfCBudWxsO1xuICBHZW5lc2lzQnVpbGRNb2RlbD86IFJlcGxheUJ1aWxkTW9kZWxKc29uIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5BYmlsaXR5SnNvbiB7XG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgbGV2ZWw/OiBudW1iZXIgfCBudWxsO1xuICBncm91cD86IG51bWJlciB8IG51bGw7XG4gIHRyaWdnZXJzQ29uc3VtZWQ/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5Qm90VHVyblN0YXRCbG9ja0pzb24ge1xuICBwZXJtYW5lbnQ/OiBudW1iZXIgfCBudWxsO1xuICB0ZW1wb3Jhcnk/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5Qm90VHVyblBldEpzb24ge1xuICBzbG90PzogbnVtYmVyIHwgbnVsbDtcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBsZXZlbD86IG51bWJlciB8IG51bGw7XG4gIGV4cGVyaWVuY2U/OiBudW1iZXIgfCBudWxsO1xuICBwZXJrSWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBhdHRhY2s/OiBSZXBsYXlCb3RUdXJuU3RhdEJsb2NrSnNvbiB8IG51bGw7XG4gIGhlYWx0aD86IFJlcGxheUJvdFR1cm5TdGF0QmxvY2tKc29uIHwgbnVsbDtcbiAgbWFuYT86IG51bWJlciB8IG51bGw7XG4gIGFiaWxpdGllcz86IFJlcGxheUJvdFR1cm5BYmlsaXR5SnNvbltdIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5TdGF0c0pzb24ge1xuICB0dXJuPzogbnVtYmVyIHwgbnVsbDtcbiAgZ29sZFNwZW50PzogbnVtYmVyIHwgbnVsbDtcbiAgcm9sbHM/OiBudW1iZXIgfCBudWxsO1xuICBzdW1tb25zPzogbnVtYmVyIHwgbnVsbDtcbiAgbGV2ZWwzU29sZD86IG51bWJlciB8IG51bGw7XG4gIHRyYW5zZm9ybWVkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5TaWRlSnNvbiB7XG4gIHN0YXRzPzogUmVwbGF5Qm90VHVyblN0YXRzSnNvbiB8IG51bGw7XG4gIHBldHM/OiBSZXBsYXlCb3RUdXJuUGV0SnNvbltdIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFJlcGxheUJvdFR1cm5Kc29uIHtcbiAgdHVybj86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIHVzZXI/OiBSZXBsYXlCb3RUdXJuU2lkZUpzb24gfCBudWxsO1xuICBvcHBvbmVudD86IFJlcGxheUJvdFR1cm5TaWRlSnNvbiB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZXBsYXlCb3RSZXBsYXlNZXRhSnNvbiB7XG4gIHBhY2s/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBvcHBvbmVudF9wYWNrPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlCb3RUdXJuc0NvbnRhaW5lckpzb24ge1xuICB0dXJucz86IFJlYWRvbmx5QXJyYXk8UmVwbGF5Qm90VHVybkpzb24+IHwgbnVsbDtcbiAgZ2VuZXNpc0J1aWxkTW9kZWw/OiBSZXBsYXlCdWlsZE1vZGVsSnNvbiB8IG51bGw7XG4gIGFiaWxpdHlQZXRNYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+IHwgbnVsbDtcbiAgcmVwbGF5TWV0YT86IFJlcGxheUJvdFJlcGxheU1ldGFKc29uIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBsYXlDdXN0b21QYWNrIGV4dGVuZHMgQ3VzdG9tUGFja0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVja0lkPzogc3RyaW5nIHwgbnVsbDtcbiAgdGllcjFQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgdGllcjJQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgdGllcjNQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgdGllcjRQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgdGllcjVQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgdGllcjZQZXRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgc3BlbGxzOiBDdXN0b21QYWNrSXRlbVtdO1xufVxuXG5pbnRlcmZhY2UgUmVwbGF5UGFyc2VkVG95IHtcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxudHlwZSBTdHJpcHBlZFJlcGxheVBldCA9IFBpY2s8UGV0Q29uZmlnLCAnbmFtZSc+ICYgUGFydGlhbDxPbWl0PFBldENvbmZpZywgJ25hbWUnPj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwbGF5Q2FsY3VsYXRvclN0YXRlIHtcbiAgcGxheWVyUGFjazogc3RyaW5nO1xuICBvcHBvbmVudFBhY2s6IHN0cmluZztcbiAgcGxheWVyVG95OiBzdHJpbmcgfCBudWxsO1xuICBwbGF5ZXJUb3lMZXZlbDogc3RyaW5nO1xuICBwbGF5ZXJIYXJkVG95OiBudWxsO1xuICBwbGF5ZXJIYXJkVG95TGV2ZWw6IG51bWJlcjtcbiAgb3Bwb25lbnRUb3k6IHN0cmluZyB8IG51bGw7XG4gIG9wcG9uZW50VG95TGV2ZWw6IHN0cmluZztcbiAgb3Bwb25lbnRIYXJkVG95OiBudWxsO1xuICBvcHBvbmVudEhhcmRUb3lMZXZlbDogbnVtYmVyO1xuICB0dXJuOiBudW1iZXI7XG4gIHBsYXllckdvbGRTcGVudDogbnVtYmVyO1xuICBvcHBvbmVudEdvbGRTcGVudDogbnVtYmVyO1xuICBwbGF5ZXJSb2xsQW1vdW50OiBudW1iZXI7XG4gIG9wcG9uZW50Um9sbEFtb3VudDogbnVtYmVyO1xuICBwbGF5ZXJTdW1tb25lZEFtb3VudDogbnVtYmVyO1xuICBvcHBvbmVudFN1bW1vbmVkQW1vdW50OiBudW1iZXI7XG4gIHBsYXllckxldmVsM1NvbGQ6IG51bWJlcjtcbiAgb3Bwb25lbnRMZXZlbDNTb2xkOiBudW1iZXI7XG4gIHBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50OiBudW1iZXI7XG4gIG9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQ6IG51bWJlcjtcbiAgcGxheWVyUGV0czogKFBldENvbmZpZyB8IG51bGwpW107XG4gIG9wcG9uZW50UGV0czogKFBldENvbmZpZyB8IG51bGwpW107XG4gIGFsbFBldHM6IGJvb2xlYW47XG4gIGxvZ0ZpbHRlcjogc3RyaW5nIHwgbnVsbDtcbiAgY3VzdG9tUGFja3M6IFJlcGxheUN1c3RvbVBhY2tbXTtcbiAgb2xkU3Rvcms6IGJvb2xlYW47XG4gIHRva2VuUGV0czogYm9vbGVhbjtcbiAga29tb2RvU2h1ZmZsZTogYm9vbGVhbjtcbiAgbWFuYTogYm9vbGVhbjtcbiAgc2VlZDogbnVtYmVyIHwgbnVsbDtcbiAgdHJpZ2dlcnNDb25zdW1lZDogYm9vbGVhbjtcbiAgZm9vZHNFYXRlbj86IGJvb2xlYW47XG4gIHNob3dBZHZhbmNlZDogYm9vbGVhbjtcbiAgc2hvd1RyaWdnZXJOYW1lc0luTG9nczogYm9vbGVhbjtcbiAgc2hvd1Bvc2l0aW9uYWxBcmdzSW5Mb2dzOiBib29sZWFuO1xuICBhaWxtZW50RXF1aXBtZW50OiBib29sZWFuO1xufVxuXG50eXBlIFJlcGxheUN1c3RvbVBhY2tDb3JlID0gT21pdDxSZXBsYXlDdXN0b21QYWNrLCAnZGVja0lkJz47XG5cbmZ1bmN0aW9uIHRvRmluaXRlTnVtYmVyKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyT3JGYWxsYmFjayh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHBhcnNlZCA9IHRvRmluaXRlTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuIHBhcnNlZCA/PyBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gaXNSZWNvcmQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYXNSZWNvcmQodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwge1xuICByZXR1cm4gaXNSZWNvcmQodmFsdWUpID8gdmFsdWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBhc1JlcGxheU1lbW9yeUVudHJ5KFxuICB2YWx1ZTogdW5rbm93bixcbik6IFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGwge1xuICByZXR1cm4gaXNSZWNvcmQodmFsdWUpID8gKHZhbHVlIGFzIFJlcGxheU1lbW9yeUVudHJ5SnNvbikgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRSZXBsYXlNZW1vcnlMaXN0cyhcbiAgdmFsdWU6IFJlcGxheVBldEpzb24gfCBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogUmVjb3JkPHN0cmluZywgQXJyYXk8UmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbD4gfCBudWxsPiB8IG51bGwge1xuICBjb25zdCBsaXN0cyA9IHZhbHVlPy5NaU1zPy5Mc3RzO1xuICByZXR1cm4gaXNSZWNvcmQobGlzdHMpXG4gICAgPyAobGlzdHMgYXMgUmVjb3JkPHN0cmluZywgQXJyYXk8UmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbD4gfCBudWxsPilcbiAgICA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0UmVwbGF5TWVtb3J5RW50cnkoXG4gIHZhbHVlOiBSZXBsYXlQZXRKc29uIHwgUmVwbGF5TWVtb3J5RW50cnlKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGwge1xuICBjb25zdCBsaXN0cyA9IGdldFJlcGxheU1lbW9yeUxpc3RzKHZhbHVlKTtcbiAgaWYgKCFsaXN0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyaWVzIG9mIE9iamVjdC52YWx1ZXMobGlzdHMpKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBtZW1vcnlFbnRyeSA9IGFzUmVwbGF5TWVtb3J5RW50cnkoZW50cnkpO1xuICAgICAgaWYgKG1lbW9yeUVudHJ5KSB7XG4gICAgICAgIHJldHVybiBtZW1vcnlFbnRyeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0UmVwbGF5TWVtb3J5RW50cnlCeUFiaWxpdHlJZChcbiAgdmFsdWU6IFJlcGxheVBldEpzb24gfCBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuICBhYmlsaXR5SWQ6IHVua25vd24sXG4pOiBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHtcbiAgY29uc3Qga2V5ID0gdG9SZXBsYXlJZChhYmlsaXR5SWQpO1xuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZW50cmllcyA9IGdldFJlcGxheU1lbW9yeUxpc3RzKHZhbHVlKT8uW2tleV07XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgbWVtb3J5RW50cnkgPSBhc1JlcGxheU1lbW9yeUVudHJ5KGVudHJ5KTtcbiAgICBpZiAobWVtb3J5RW50cnkpIHtcbiAgICAgIHJldHVybiBtZW1vcnlFbnRyeTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlcGxheU1lbW9yeVBldE5hbWUoXG4gIHZhbHVlOiBSZXBsYXlNZW1vcnlFbnRyeUpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHJhd1BldFJlZiA9XG4gICAgdmFsdWU/LkVudSA/P1xuICAgIHZhbHVlPy5lbnUgPz9cbiAgICB2YWx1ZT8uSWQgPz9cbiAgICB2YWx1ZT8uaWQ7XG4gIGNvbnN0IHJlc29sdmVkUGV0SWQgPSByZXNvbHZlUGV0SWRGcm9tVW5rbm93bihyYXdQZXRSZWYsIHsgUEVUX0lEU19CWV9OQU1FIH0pO1xuICBpZiAocmVzb2x2ZWRQZXRJZCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIFBFVFNfQllfSUQuZ2V0KFN0cmluZyhyZXNvbHZlZFBldElkKSkgPz8gYFBldCAjJHtyZXNvbHZlZFBldElkfWA7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRTd2FsbG93ZWRQZXROYW1lKFxuICB2YWx1ZTogUmVwbGF5UGV0SnNvbiB8IFJlcGxheU1lbW9yeUVudHJ5SnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgbmVzdGVkRW50cnkgPSBnZXRGaXJzdFJlcGxheU1lbW9yeUVudHJ5KHZhbHVlKTtcbiAgaWYgKG5lc3RlZEVudHJ5KSB7XG4gICAgcmV0dXJuIHJlc29sdmVSZXBsYXlNZW1vcnlQZXROYW1lKG5lc3RlZEVudHJ5KTtcbiAgfVxuXG4gIC8vIEEgZnVsbCBwZXQgaXMgbm90IGl0cyBvd24gc3dhbGxvd2VkLW1lbW9yeSBlbnRyeS4gVGhpcyBtYXR0ZXJzIHdoZW4gdGhlXG4gIC8vIHJlcGxheSBzdW1tYXJ5IG9taXRzIE1pTXM6IHRyZWF0aW5nIHRoZSByb290IEVudSBhcyBtZW1vcnkgbWFkZSBCZWx1Z2FcbiAgLy8gc3dhbGxvdyBhbm90aGVyIEJlbHVnYSAoYW5kIGRpZCB0aGUgc2FtZSBmb3IgU2FyY2FzdGljIEZyaW5nZWhlYWQpLlxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZT8uQWJpbCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlUmVwbGF5TWVtb3J5UGV0TmFtZShhc1JlcGxheU1lbW9yeUVudHJ5KHZhbHVlKSk7XG59XG5cbmNvbnN0IENPUFlfU09VUkNFX1BFVF9JRFMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAnNTMnLCAvLyBQYXJyb3RcbiAgJzE4MicsIC8vIEJlbHVnYSBXaGFsZVxuICAnMzczJywgLy8gQWJvbWluYXRpb25cbiAgJzc2MycsIC8vIFNhcmNhc3RpYyBGcmluZ2VoZWFkXG5dKTtcblxuLy8gU29tZSBzdG9yZWQvY29weSBhYmlsaXRpZXMgaGF2ZSB0aGVpciBvd24gZW51bSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZVxuLy8gcmVjb3ZlcmVkIGZyb20gdGhlIGhvbGRlci1iYXNlZCBhYmlsaXR5UGV0TWFwIGVtaXR0ZWQgYnkgcmVwbGF5IGluZGV4aW5nLlxuLy8gS2VlcCB0aGVzZSBleHBsaWNpdCBzbyBhIGNvcGllZCBhYmlsaXR5IGlzIG5ldmVyIGd1ZXNzZWQgZnJvbSBhbiB1bnJlbGF0ZWRcbi8vIG5laWdoYm9yaW5nIHBhY2sncyBlbnVtIG9mZnNldC5cbmNvbnN0IFNUT1JFRF9DT1BZX0FCSUxJVFlfT1dORVJfQllfSUQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihbXG4gIFsnMjk2JywgJ1dvbGYnXSxcbl0pO1xuXG5jb25zdCBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUyA9IFtcbiAge1xuICAgIHBldDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MScsXG4gICAgbGV2ZWw6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbCcsXG4gICAgdGltZXNIdXJ0OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0JyxcbiAgICBiZWx1Z2E6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDFCZWx1Z2FTd2FsbG93ZWRQZXQnLFxuICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDFTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgfSxcbiAge1xuICAgIHBldDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MicsXG4gICAgbGV2ZWw6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbCcsXG4gICAgdGltZXNIdXJ0OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0JyxcbiAgICBiZWx1Z2E6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQnLFxuICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDJTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgfSxcbiAge1xuICAgIHBldDogJ2Fib21pbmF0aW9uU3dhbGxvd2VkUGV0MycsXG4gICAgbGV2ZWw6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbCcsXG4gICAgdGltZXNIdXJ0OiAnYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0JyxcbiAgICBiZWx1Z2E6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDNCZWx1Z2FTd2FsbG93ZWRQZXQnLFxuICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWQ6ICdhYm9taW5hdGlvblN3YWxsb3dlZFBldDNTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0JyxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbnR5cGUgQWJpbGl0eU93bmVyQ291bnRzID0gTWFwPHN0cmluZywgTWFwPHN0cmluZywgbnVtYmVyPj47XG5cbnR5cGUgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRGaWVsZCA9ICh0eXBlb2YgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMpW251bWJlcl1bJ3BldCddO1xudHlwZSBBYm9taW5hdGlvblN3YWxsb3dlZFBldExldmVsRmllbGQgPVxuICAodHlwZW9mIEFCT01JTkFUSU9OX1NMT1RfRklFTERTKVtudW1iZXJdWydsZXZlbCddO1xudHlwZSBBYm9taW5hdGlvblN3YWxsb3dlZFBldFRpbWVzSHVydEZpZWxkID1cbiAgKHR5cGVvZiBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUylbbnVtYmVyXVsndGltZXNIdXJ0J107XG50eXBlIEFib21pbmF0aW9uU3dhbGxvd2VkUGV0TmVzdGVkRmllbGQgPVxuICAodHlwZW9mIEFCT01JTkFUSU9OX1NMT1RfRklFTERTKVtudW1iZXJdWydiZWx1Z2EnXSB8XG4gICh0eXBlb2YgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMpW251bWJlcl1bJ3NhcmNhc3RpY0ZyaW5nZWhlYWQnXTtcblxudHlwZSBBYm9taW5hdGlvblN3YWxsb3dlZFN0YXRlID0gUGljazxcbiAgUGV0Q29uZmlnLFxuICBBYm9taW5hdGlvblN3YWxsb3dlZFBldEZpZWxkIHxcbiAgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRMZXZlbEZpZWxkIHxcbiAgQWJvbWluYXRpb25Td2FsbG93ZWRQZXRUaW1lc0h1cnRGaWVsZCB8XG4gIEFib21pbmF0aW9uU3dhbGxvd2VkUGV0TmVzdGVkRmllbGRcbj47XG5cbmZ1bmN0aW9uIHRvUmVwbGF5SWQodmFsdWU6IHVua25vd24pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudEFiaWxpdHlPd25lckNvdW50KFxuICBhYmlsaXR5T3duZXJDb3VudHM6IEFiaWxpdHlPd25lckNvdW50cyxcbiAgYWJpbGl0eUlkOiBzdHJpbmcsXG4gIHBldElkOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgbGV0IHBldENvdW50QnlJZCA9IGFiaWxpdHlPd25lckNvdW50cy5nZXQoYWJpbGl0eUlkKTtcbiAgaWYgKCFwZXRDb3VudEJ5SWQpIHtcbiAgICBwZXRDb3VudEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGFiaWxpdHlPd25lckNvdW50cy5zZXQoYWJpbGl0eUlkLCBwZXRDb3VudEJ5SWQpO1xuICB9XG4gIHBldENvdW50QnlJZC5zZXQocGV0SWQsIChwZXRDb3VudEJ5SWQuZ2V0KHBldElkKSA/PyAwKSArIDEpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKFxuICB2YWx1ZTogdW5rbm93bixcbiAgYWJpbGl0eU93bmVyQ291bnRzOiBBYmlsaXR5T3duZXJDb3VudHMsXG4pOiB2b2lkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaCgoZW50cnkpID0+IGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMoZW50cnksIGFiaWxpdHlPd25lckNvdW50cykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaXNSZWNvcmQodmFsdWUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGV0SWQgPSB0b1JlcGxheUlkKHZhbHVlLkVudSk7XG4gIGNvbnN0IGFiaWxpdGllcyA9IHZhbHVlLkFiaWw7XG4gIGlmIChwZXRJZCAmJiBBcnJheS5pc0FycmF5KGFiaWxpdGllcykgJiYgIUNPUFlfU09VUkNFX1BFVF9JRFMuaGFzKHBldElkKSkge1xuICAgIGFiaWxpdGllcy5mb3JFYWNoKChhYmlsaXR5KSA9PiB7XG4gICAgICBpZiAoIWlzUmVjb3JkKGFiaWxpdHkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IHRvUmVwbGF5SWQoYWJpbGl0eS5FbnUpO1xuICAgICAgaWYgKCFhYmlsaXR5SWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5jcmVtZW50QWJpbGl0eU93bmVyQ291bnQoYWJpbGl0eU93bmVyQ291bnRzLCBhYmlsaXR5SWQsIHBldElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgY29sbGVjdEFiaWxpdHlPd25lckNvdW50cyhlbnRyeSwgYWJpbGl0eU93bmVyQ291bnRzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBpY2tNb3N0TGlrZWx5UGV0SWQocGV0Q291bnRCeUlkOiBNYXA8c3RyaW5nLCBudW1iZXI+KTogc3RyaW5nIHwgbnVsbCB7XG4gIGxldCBiZXN0UGV0SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBsZXQgYmVzdENvdW50ID0gLTE7XG5cbiAgZm9yIChjb25zdCBbcGV0SWQsIGNvdW50XSBvZiBwZXRDb3VudEJ5SWQuZW50cmllcygpKSB7XG4gICAgaWYgKFxuICAgICAgY291bnQgPiBiZXN0Q291bnQgfHxcbiAgICAgIChjb3VudCA9PT0gYmVzdENvdW50ICYmIChiZXN0UGV0SWQgPT09IG51bGwgfHwgcGV0SWQgPCBiZXN0UGV0SWQpKVxuICAgICkge1xuICAgICAgYmVzdFBldElkID0gcGV0SWQ7XG4gICAgICBiZXN0Q291bnQgPSBjb3VudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdFBldElkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlcGxheUFiaWxpdHlQZXRNYXBGcm9tQ291bnRzKFxuICBhYmlsaXR5T3duZXJDb3VudHM6IEFiaWxpdHlPd25lckNvdW50cyxcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBhYmlsaXR5UGV0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGZvciAoY29uc3QgW2FiaWxpdHlJZCwgcGV0Q291bnRCeUlkXSBvZiBhYmlsaXR5T3duZXJDb3VudHMuZW50cmllcygpKSB7XG4gICAgY29uc3QgcGV0SWQgPSBwaWNrTW9zdExpa2VseVBldElkKHBldENvdW50QnlJZCk7XG4gICAgaWYgKHBldElkKSB7XG4gICAgICBhYmlsaXR5UGV0TWFwW2FiaWxpdHlJZF0gPSBwZXRJZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFiaWxpdHlQZXRNYXA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSnNvblZhbHVlKHJhdzogdW5rbm93bik6IHVua25vd24ge1xuICBpZiAoaXNSZWNvcmQocmF3KSB8fCBBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICByZXR1cm4gcmF3O1xuICB9XG4gIGlmICh0eXBlb2YgcmF3ICE9PSAnc3RyaW5nJyB8fCByYXcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmludGVyZmFjZSBSZXBsYXlGb29kRW50cnlKc29uIHtcbiAgSWQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBOYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgQWJpbGl0eT86IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHJlcGxheUZvb2RFbnRyaWVzID1cbiAgKGZvb2RKc29uIGFzIHVua25vd24gYXMgeyBkZWZhdWx0PzogUmVwbGF5Rm9vZEVudHJ5SnNvbltdIH0pLmRlZmF1bHQgPz9cbiAgKGZvb2RKc29uIGFzIHVua25vd24gYXMgUmVwbGF5Rm9vZEVudHJ5SnNvbltdKTtcblxuLy8gVGhlIHJlcGxheSBBUEkgc3RvcmVzIHRoZSBmb29kLWNhcmQgZW51bSBpbiBhIHNwZWxsIHJlc3BvbnNlLCB3aGlsZSB0aGVcbi8vIHBldCBzbmFwc2hvdCBzdG9yZXMgdGhlIHJlc3VsdGluZyBwZXJrIHVuZGVyIGEgc2VwYXJhdGUgZW51bS4gUmVzb2x2ZSB0aGVcbi8vIGZvcm1lciBmcm9tIGNhbm9uaWNhbCBmb29kIG1ldGFkYXRhIHNvIG5ld2x5IGFkZGVkIHBlcmsgZm9vZHMgZG8gbm90IG5lZWQgYVxuLy8gc2Vjb25kIGhhbmQtbWFpbnRhaW5lZCByZXBsYXkgbWFwcGluZy5cbmNvbnN0IFJFUExBWV9QRVJLX0ZPT0RfTkFNRVNfQllfU1BFTExfSUQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihcbiAgcmVwbGF5Rm9vZEVudHJpZXNcbiAgICAuZmlsdGVyKFxuICAgICAgKGVudHJ5KTogZW50cnkgaXMgUmVwbGF5Rm9vZEVudHJ5SnNvbiAmIHsgSWQ6IG51bWJlciB8IHN0cmluZzsgTmFtZTogc3RyaW5nIH0gPT5cbiAgICAgICAgZW50cnk/LklkICE9PSBudWxsICYmXG4gICAgICAgIGVudHJ5Py5JZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHR5cGVvZiBlbnRyeT8uTmFtZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgL15HaXZlIG9uZSBwZXQgdGhlIC4rIHBlcmtcXC4kL2kudGVzdChlbnRyeT8uQWJpbGl0eSA/PyAnJyksXG4gICAgKVxuICAgIC5tYXAoKGVudHJ5KSA9PiBbU3RyaW5nKGVudHJ5LklkKSwgZW50cnkuTmFtZV0pLFxuKTtcblxuZnVuY3Rpb24gZ2V0UmVwbGF5RW50aXR5S2V5KHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHJlY29yZCA9IGFzUmVjb3JkKHZhbHVlKTtcbiAgaWYgKCFyZWNvcmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvYXJkSWQgPSByZWNvcmRbJ0JvSWQnXSA/PyByZWNvcmRbJ2JvSWQnXTtcbiAgY29uc3QgdW5pcXVlSWQgPSByZWNvcmRbJ1VuaSddID8/IHJlY29yZFsndW5pJ107XG4gIGlmIChib2FyZElkID09PSBudWxsIHx8IGJvYXJkSWQgPT09IHVuZGVmaW5lZCB8fCB1bmlxdWVJZCA9PT0gbnVsbCB8fCB1bmlxdWVJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gYCR7U3RyaW5nKGJvYXJkSWQpfToke1N0cmluZyh1bmlxdWVJZCl9YDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXBsYXlQZXRJZEJ5RW50aXR5S2V5KFxuICBiYXR0bGVKc29uOiBSZXBsYXlCYXR0bGVKc29uLFxuKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IHBldElkQnlFbnRpdHlLZXkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IGJvYXJkIG9mIFtiYXR0bGVKc29uLlVzZXJCb2FyZCwgYmF0dGxlSnNvbi5PcHBvbmVudEJvYXJkXSkge1xuICAgIGNvbnN0IGl0ZW1zID0gYm9hcmQ/Lk1pbnM/Lkl0ZW1zID8/IFtdO1xuICAgIGZvciAoY29uc3QgcGV0IG9mIGl0ZW1zKSB7XG4gICAgICBpZiAoIXBldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBldElkID0gdG9SZXBsYXlJZChwZXQuRW51KTtcbiAgICAgIGNvbnN0IGVudGl0eUtleSA9IGdldFJlcGxheUVudGl0eUtleShwZXRbJ0lkJ10pO1xuICAgICAgaWYgKHBldElkICYmIGVudGl0eUtleSkge1xuICAgICAgICBwZXRJZEJ5RW50aXR5S2V5LnNldChlbnRpdHlLZXksIHBldElkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBldElkQnlFbnRpdHlLZXk7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGxheVNwZWxsUGVya1RhcmdldChcbiAgYWN0aW9uOiBSZXBsYXlBY3Rpb25Kc29uLFxuKTogeyBwZXJrTmFtZTogc3RyaW5nOyB0YXJnZXRLZXk6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGlmIChhY3Rpb24uVHlwZSAhPT0gOCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhc1JlY29yZChwYXJzZUpzb25WYWx1ZShhY3Rpb24uUmVzcG9uc2UpKTtcbiAgY29uc3QgcmVzcG9uc2VFdmVudCA9IGFzUmVjb3JkKHJlc3BvbnNlPy5bJ0V2ZW50J10pO1xuICBjb25zdCBldmVudCA9IGFzUmVjb3JkKHJlc3BvbnNlRXZlbnQ/LlsnRXZlbnQnXSkgPz8gcmVzcG9uc2VFdmVudDtcbiAgY29uc3Qgc3BlbGwgPSBhc1JlY29yZChldmVudD8uWydTcGVsbCddKTtcbiAgY29uc3QgdGFyZ2V0ID0gYXNSZWNvcmQoZXZlbnQ/LlsnVGFyZ2V0J10pO1xuICBjb25zdCBzcGVsbElkID0gdG9SZXBsYXlJZChzcGVsbD8uWydFbnUnXSk7XG4gIGNvbnN0IHBlcmtOYW1lID0gc3BlbGxJZFxuICAgID8gUkVQTEFZX1BFUktfRk9PRF9OQU1FU19CWV9TUEVMTF9JRC5nZXQoc3BlbGxJZClcbiAgICA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdGFyZ2V0S2V5ID0gZ2V0UmVwbGF5RW50aXR5S2V5KHRhcmdldCk7XG5cbiAgcmV0dXJuIHBlcmtOYW1lICYmIHRhcmdldEtleSA/IHsgcGVya05hbWUsIHRhcmdldEtleSB9IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VCYXR0bGVBY3Rpb24ocmF3OiB1bmtub3duKTogUmVwbGF5QmF0dGxlSnNvbiB8IG51bGwge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUpzb25WYWx1ZShyYXcpO1xuICBpZiAoIWlzUmVjb3JkKHBhcnNlZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGFyc2VkIGFzIFJlcGxheUJhdHRsZUpzb247XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFja0lkQnlOYW1lTG9va3VwKCk6IE1hcDxzdHJpbmcsIG51bWJlcj4ge1xuICBjb25zdCBsb29rdXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICBPYmplY3QuZW50cmllcyhQQUNLX01BUCkuZm9yRWFjaCgoW3BhY2tJZFJhdywgcGFja05hbWVdKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwYWNrTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFja0lkID0gTnVtYmVyKHBhY2tJZFJhdyk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUocGFja0lkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb29rdXAuc2V0KHBhY2tOYW1lLnRvTG93ZXJDYXNlKCksIHBhY2tJZCk7XG4gIH0pO1xuICByZXR1cm4gbG9va3VwO1xufVxuXG5jb25zdCBQQUNLX0lEX0JZX05BTUUgPSBidWlsZFBhY2tJZEJ5TmFtZUxvb2t1cCgpO1xuXG5mdW5jdGlvbiByZXNvbHZlUGFja0lkRnJvbVVua25vd24odmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgbnVtZXJpYyA9IHRvRmluaXRlTnVtYmVyKHZhbHVlKTtcbiAgaWYgKG51bWVyaWMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVtZXJpYztcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGJ5TmFtZSA9IFBBQ0tfSURfQllfTkFNRS5nZXQodmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYnlOYW1lO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUdXJuUGV0VG9SZXBsYXlQZXQoXG4gIHJhd1BldDogUmVwbGF5Qm90VHVyblBldEpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogUmVwbGF5UGV0SnNvbiB8IG51bGwge1xuICBpZiAoIXJhd1BldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGV0SWQgPSB0b1JlcGxheUlkKHJhd1BldC5pZCk7XG4gIGlmICghcGV0SWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNsb3QgPSB0b0Zpbml0ZU51bWJlcihyYXdQZXQuc2xvdCk7XG4gIGNvbnN0IGFiaWxpdGllcyA9IChyYXdQZXQuYWJpbGl0aWVzID8/IFtdKVxuICAgIC5tYXAoKGFiaWxpdHkpOiBSZXBsYXlBYmlsaXR5SnNvbiB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5Py5pZCk7XG4gICAgICBpZiAoIWFiaWxpdHlJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIEVudTogYWJpbGl0eUlkLFxuICAgICAgICBMdmw6IHRvRmluaXRlTnVtYmVyKGFiaWxpdHk/LmxldmVsKSxcbiAgICAgICAgR3JvcDogdG9GaW5pdGVOdW1iZXIoYWJpbGl0eT8uZ3JvdXApLFxuICAgICAgICBUckNvOiB0b0Zpbml0ZU51bWJlcihhYmlsaXR5Py50cmlnZ2Vyc0NvbnN1bWVkKSxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKChhYmlsaXR5KTogYWJpbGl0eSBpcyBSZXBsYXlBYmlsaXR5SnNvbiA9PiBhYmlsaXR5ICE9PSBudWxsKTtcblxuICByZXR1cm4ge1xuICAgIEVudTogcGV0SWQsXG4gICAgTHZsOiB0b0Zpbml0ZU51bWJlcihyYXdQZXQubGV2ZWwpLFxuICAgIEV4cDogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmV4cGVyaWVuY2UpLFxuICAgIFBlcms6IHRvUmVwbGF5SWQocmF3UGV0LnBlcmtJZCksXG4gICAgTWFuYTogdG9GaW5pdGVOdW1iZXIocmF3UGV0Lm1hbmEpLFxuICAgIEF0OiB7XG4gICAgICBQZXJtOiB0b0Zpbml0ZU51bWJlcihyYXdQZXQuYXR0YWNrPy5wZXJtYW5lbnQpLFxuICAgICAgVGVtcDogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmF0dGFjaz8udGVtcG9yYXJ5KSxcbiAgICB9LFxuICAgIEhwOiB7XG4gICAgICBQZXJtOiB0b0Zpbml0ZU51bWJlcihyYXdQZXQuaGVhbHRoPy5wZXJtYW5lbnQpLFxuICAgICAgVGVtcDogdG9GaW5pdGVOdW1iZXIocmF3UGV0LmhlYWx0aD8udGVtcG9yYXJ5KSxcbiAgICB9LFxuICAgIFBvaToge1xuICAgICAgeDogc2xvdCxcbiAgICB9LFxuICAgIEFiaWw6IGFiaWxpdGllcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUdXJuU2lkZVRvUmVwbGF5Qm9hcmQoXG4gIHNpZGU6IFJlcGxheUJvdFR1cm5TaWRlSnNvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIGZhbGxiYWNrVHVybjogbnVtYmVyLFxuICBwYWNrUmF3PzogdW5rbm93bixcbik6IFJlcGxheUJvYXJkSnNvbiB7XG4gIHJldHVybiB7XG4gICAgVHVyOiB0b051bWJlck9yRmFsbGJhY2soc2lkZT8uc3RhdHM/LnR1cm4sIGZhbGxiYWNrVHVybiksXG4gICAgR29TcDogdG9OdW1iZXJPckZhbGxiYWNrKHNpZGU/LnN0YXRzPy5nb2xkU3BlbnQsIDApLFxuICAgIFJvbGQ6IHRvTnVtYmVyT3JGYWxsYmFjayhzaWRlPy5zdGF0cz8ucm9sbHMsIDApLFxuICAgIE1pU3U6IHRvTnVtYmVyT3JGYWxsYmFjayhzaWRlPy5zdGF0cz8uc3VtbW9ucywgMCksXG4gICAgTVNGTDogdG9OdW1iZXJPckZhbGxiYWNrKHNpZGU/LnN0YXRzPy5sZXZlbDNTb2xkLCAwKSxcbiAgICBUclRUOiB0b051bWJlck9yRmFsbGJhY2soc2lkZT8uc3RhdHM/LnRyYW5zZm9ybWVkLCAwKSxcbiAgICBQYWNrOiByZXNvbHZlUGFja0lkRnJvbVVua25vd24ocGFja1JhdyksXG4gICAgTWluczoge1xuICAgICAgSXRlbXM6IChzaWRlPy5wZXRzID8/IFtdKS5tYXAoKHBldCkgPT4gcGFyc2VUdXJuUGV0VG9SZXBsYXlQZXQocGV0KSksXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UmVwbGF5QmF0dGxlRnJvbVR1cm5zKFxuICB0dXJuczogUmVhZG9ubHlBcnJheTxSZXBsYXlCb3RUdXJuSnNvbj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICB0dXJuTnVtYmVyOiBudW1iZXIsXG4gIHJlcGxheU1ldGE/OiBSZXBsYXlCb3RSZXBsYXlNZXRhSnNvbiB8IG51bGwsXG4pOiBSZXBsYXlCYXR0bGVKc29uIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHR1cm5OdW1iZXIpIHx8IHR1cm5OdW1iZXIgPD0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdHVybkVudHJ5ID1cbiAgICAodHVybnMgPz8gW10pLmZpbmQoKGVudHJ5KSA9PiBOdW1iZXIoZW50cnk/LnR1cm4pID09PSB0dXJuTnVtYmVyKSA/P1xuICAgICh0dXJucyA/PyBbXSlbdHVybk51bWJlciAtIDFdID8/XG4gICAgbnVsbDtcbiAgaWYgKCF0dXJuRW50cnkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZhbGxiYWNrVHVybiA9IHRvTnVtYmVyT3JGYWxsYmFjayh0dXJuRW50cnkudHVybiwgdHVybk51bWJlcik7XG4gIHJldHVybiB7XG4gICAgVXNlckJvYXJkOiBwYXJzZVR1cm5TaWRlVG9SZXBsYXlCb2FyZChcbiAgICAgIHR1cm5FbnRyeS51c2VyLFxuICAgICAgZmFsbGJhY2tUdXJuLFxuICAgICAgcmVwbGF5TWV0YT8ucGFjayxcbiAgICApLFxuICAgIE9wcG9uZW50Qm9hcmQ6IHBhcnNlVHVyblNpZGVUb1JlcGxheUJvYXJkKFxuICAgICAgdHVybkVudHJ5Lm9wcG9uZW50LFxuICAgICAgZmFsbGJhY2tUdXJuLFxuICAgICAgcmVwbGF5TWV0YT8ub3Bwb25lbnRfcGFjayxcbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVwbGF5QmF0dGxlRnJvbUFjdGlvbnMoXG4gIGFjdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwbGF5QWN0aW9uSnNvbj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICB0dXJuTnVtYmVyOiBudW1iZXIsXG4pOiBSZXBsYXlCYXR0bGVKc29uIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHR1cm5OdW1iZXIpIHx8IHR1cm5OdW1iZXIgPD0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgYmF0dGxlQWN0aW9ucyA9IChhY3Rpb25zID8/IFtdKS5maWx0ZXIoXG4gICAgKGFjdGlvbikgPT5cbiAgICAgIEJvb2xlYW4oYWN0aW9uPy5CYXR0bGUpICYmXG4gICAgICAoYWN0aW9uPy5UeXBlID09PSAwIHx8IGFjdGlvbj8uVHlwZSA9PT0gbnVsbCB8fCBhY3Rpb24/LlR5cGUgPT09IHVuZGVmaW5lZCksXG4gICk7XG5cbiAgY29uc3QgYWN0aW9uRm9yVHVybiA9XG4gICAgYmF0dGxlQWN0aW9ucy5maW5kKChhY3Rpb24pID0+IE51bWJlcihhY3Rpb24/LlR1cm4pID09PSB0dXJuTnVtYmVyKSA/P1xuICAgIGJhdHRsZUFjdGlvbnNbdHVybk51bWJlciAtIDFdID8/XG4gICAgbnVsbDtcblxuICByZXR1cm4gcGFyc2VCYXR0bGVBY3Rpb24oYWN0aW9uRm9yVHVybj8uQmF0dGxlID8/IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXBsYXlBYmlsaXR5UGV0TWFwRnJvbUFjdGlvbnMoXG4gIGFjdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwbGF5QWN0aW9uSnNvbj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IGFiaWxpdHlPd25lckNvdW50czogQWJpbGl0eU93bmVyQ291bnRzID0gbmV3IE1hcCgpO1xuICAoYWN0aW9ucyA/PyBbXSkuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkQnVpbGQgPSBwYXJzZUpzb25WYWx1ZShhY3Rpb24/LkJ1aWxkKTtcbiAgICBjb25zdCBwYXJzZWRCYXR0bGUgPSBwYXJzZUpzb25WYWx1ZShhY3Rpb24/LkJhdHRsZSk7XG4gICAgY29uc3QgcGFyc2VkTW9kZSA9IHBhcnNlSnNvblZhbHVlKGFjdGlvbj8uTW9kZSk7XG4gICAgY29sbGVjdEFiaWxpdHlPd25lckNvdW50cyhwYXJzZWRCdWlsZCwgYWJpbGl0eU93bmVyQ291bnRzKTtcbiAgICBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKHBhcnNlZEJhdHRsZSwgYWJpbGl0eU93bmVyQ291bnRzKTtcbiAgICBjb2xsZWN0QWJpbGl0eU93bmVyQ291bnRzKHBhcnNlZE1vZGUsIGFiaWxpdHlPd25lckNvdW50cyk7XG4gIH0pO1xuICByZXR1cm4gYnVpbGRSZXBsYXlBYmlsaXR5UGV0TWFwRnJvbUNvdW50cyhhYmlsaXR5T3duZXJDb3VudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXBsYXlQZXJrTmFtZUJ5UGV0SWRGcm9tQWN0aW9ucyhcbiAgYWN0aW9uczogUmVhZG9ubHlBcnJheTxSZXBsYXlBY3Rpb25Kc29uPiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHR1cm5OdW1iZXI6IG51bWJlcixcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBiYXR0bGVKc29uID0gc2VsZWN0UmVwbGF5QmF0dGxlRnJvbUFjdGlvbnMoYWN0aW9ucywgdHVybk51bWJlcik7XG4gIGlmICghYmF0dGxlSnNvbikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IHBldElkQnlFbnRpdHlLZXkgPSBidWlsZFJlcGxheVBldElkQnlFbnRpdHlLZXkoYmF0dGxlSnNvbik7XG4gIGNvbnN0IHBlcmtOYW1lQnlQZXRJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIChhY3Rpb25zID8/IFtdKS5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBhY3Rpb25UdXJuID0gdG9GaW5pdGVOdW1iZXIoYWN0aW9uLlR1cm4pO1xuICAgIGlmIChhY3Rpb25UdXJuICE9PSBudWxsICYmIGFjdGlvblR1cm4gPiB0dXJuTnVtYmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlbGxQZXJrVGFyZ2V0ID0gZ2V0UmVwbGF5U3BlbGxQZXJrVGFyZ2V0KGFjdGlvbik7XG4gICAgaWYgKCFzcGVsbFBlcmtUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwZXRJZCA9IHBldElkQnlFbnRpdHlLZXkuZ2V0KHNwZWxsUGVya1RhcmdldC50YXJnZXRLZXkpO1xuICAgIGlmIChwZXRJZCkge1xuICAgICAgcGVya05hbWVCeVBldElkW3BldElkXSA9IHNwZWxsUGVya1RhcmdldC5wZXJrTmFtZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwZXJrTmFtZUJ5UGV0SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlcGxheUZvckNhbGN1bGF0b3JGcm9tQWN0aW9ucyhcbiAgYWN0aW9uczogUmVhZG9ubHlBcnJheTxSZXBsYXlBY3Rpb25Kc29uPiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHR1cm5OdW1iZXI6IG51bWJlcixcbiAgYnVpbGRNb2RlbD86IFJlcGxheUJ1aWxkTW9kZWxKc29uIHwgbnVsbCxcbiAgbWV0YUJvYXJkcz86IFJlcGxheU1ldGFCb2FyZHMsXG4gIG9wdGlvbnM/OiBSZXBsYXlQYXJzZU9wdGlvbnMsXG4pOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUgfCBudWxsIHtcbiAgY29uc3QgYmF0dGxlSnNvbiA9IHNlbGVjdFJlcGxheUJhdHRsZUZyb21BY3Rpb25zKGFjdGlvbnMsIHR1cm5OdW1iZXIpO1xuICBpZiAoIWJhdHRsZUpzb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGluZmVycmVkQWJpbGl0eVBldE1hcCA9IGJ1aWxkUmVwbGF5QWJpbGl0eVBldE1hcEZyb21BY3Rpb25zKGFjdGlvbnMpO1xuICBjb25zdCBtZXJnZWRBYmlsaXR5UGV0TWFwID0ge1xuICAgIC4uLmluZmVycmVkQWJpbGl0eVBldE1hcCxcbiAgICAuLi4ob3B0aW9ucz8uYWJpbGl0eVBldE1hcCA/PyB7fSksXG4gIH07XG4gIGNvbnN0IGluZmVycmVkUGVya05hbWVCeVBldElkID0gYnVpbGRSZXBsYXlQZXJrTmFtZUJ5UGV0SWRGcm9tQWN0aW9ucyhcbiAgICBhY3Rpb25zLFxuICAgIHR1cm5OdW1iZXIsXG4gICk7XG4gIGNvbnN0IG1lcmdlZFBlcmtOYW1lQnlQZXRJZCA9IHtcbiAgICAuLi5pbmZlcnJlZFBlcmtOYW1lQnlQZXRJZCxcbiAgICAuLi4ob3B0aW9ucz8ucGVya05hbWVCeVBldElkID8/IHt9KSxcbiAgfTtcblxuICBjb25zdCBwYXJzZXIgPSBuZXcgUmVwbGF5Q2FsY1BhcnNlcigpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlUmVwbGF5Rm9yQ2FsY3VsYXRvcihcbiAgICBiYXR0bGVKc29uLFxuICAgIGJ1aWxkTW9kZWwgPz8gdW5kZWZpbmVkLFxuICAgIG1ldGFCb2FyZHMsXG4gICAge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGFiaWxpdHlQZXRNYXA6IG1lcmdlZEFiaWxpdHlQZXRNYXAsXG4gICAgICBwZXJrTmFtZUJ5UGV0SWQ6IG1lcmdlZFBlcmtOYW1lQnlQZXRJZCxcbiAgICB9LFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUZWFtd29vZFJlcGxheUZvckNhbGN1bGF0b3IoXG4gIHJlcGxheTpcbiAgICB8IFJlcGxheUFjdGlvbnNDb250YWluZXJKc29uXG4gICAgfCBSZXBsYXlCb3RUdXJuc0NvbnRhaW5lckpzb25cbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZCxcbiAgdHVybk51bWJlcjogbnVtYmVyLFxuICBtZXRhQm9hcmRzPzogUmVwbGF5TWV0YUJvYXJkcyxcbiAgb3B0aW9ucz86IFJlcGxheVBhcnNlT3B0aW9ucyxcbik6IFJlcGxheUNhbGN1bGF0b3JTdGF0ZSB8IG51bGwge1xuICBjb25zdCByZXBsYXlSZWNvcmQgPSBhc1JlY29yZChyZXBsYXkpO1xuICBjb25zdCBoYXNUdXJuUGF5bG9hZCA9IEFycmF5LmlzQXJyYXkocmVwbGF5UmVjb3JkPy5bJ3R1cm5zJ10pO1xuICBpZiAoaGFzVHVyblBheWxvYWQpIHtcbiAgICBjb25zdCB0dXJuc1JlcGxheSA9IHJlcGxheSBhcyBSZXBsYXlCb3RUdXJuc0NvbnRhaW5lckpzb247XG4gICAgY29uc3QgYmF0dGxlSnNvbiA9IHNlbGVjdFJlcGxheUJhdHRsZUZyb21UdXJucyhcbiAgICAgIHR1cm5zUmVwbGF5LnR1cm5zLFxuICAgICAgdHVybk51bWJlcixcbiAgICAgIHR1cm5zUmVwbGF5LnJlcGxheU1ldGEsXG4gICAgKTtcbiAgICBpZiAoIWJhdHRsZUpzb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtZXJnZWRBYmlsaXR5UGV0TWFwID0ge1xuICAgICAgLi4uKHR1cm5zUmVwbGF5LmFiaWxpdHlQZXRNYXAgPz8ge30pLFxuICAgICAgLi4uKG9wdGlvbnM/LmFiaWxpdHlQZXRNYXAgPz8ge30pLFxuICAgIH07XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFJlcGxheUNhbGNQYXJzZXIoKTtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlUmVwbGF5Rm9yQ2FsY3VsYXRvcihcbiAgICAgIGJhdHRsZUpzb24sXG4gICAgICB0dXJuc1JlcGxheS5nZW5lc2lzQnVpbGRNb2RlbCA/PyB1bmRlZmluZWQsXG4gICAgICBtZXRhQm9hcmRzLFxuICAgICAge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBhYmlsaXR5UGV0TWFwOiBtZXJnZWRBYmlsaXR5UGV0TWFwLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlUmVwbGF5Rm9yQ2FsY3VsYXRvckZyb21BY3Rpb25zKFxuICAgIChyZXBsYXkgYXMgUmVwbGF5QWN0aW9uc0NvbnRhaW5lckpzb24gfCBudWxsIHwgdW5kZWZpbmVkKT8uQWN0aW9ucyxcbiAgICB0dXJuTnVtYmVyLFxuICAgIChyZXBsYXkgYXMgUmVwbGF5QWN0aW9uc0NvbnRhaW5lckpzb24gfCBudWxsIHwgdW5kZWZpbmVkKT8uR2VuZXNpc0J1aWxkTW9kZWwgPz9cbiAgICAgIHVuZGVmaW5lZCxcbiAgICBtZXRhQm9hcmRzLFxuICAgIG9wdGlvbnMsXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBYm9taW5hdGlvblN3YWxsb3dlZFN0YXRlKCk6IEFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUJlbHVnYVN3YWxsb3dlZFBldDogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJCZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzQmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyU2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNTYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiAwLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUxldmVsOiAxLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOiAxLFxuICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOiAxLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgUmVwbGF5Q2FsY1BhcnNlciB7XG4gIHBhcnNlUmVwbGF5Rm9yQ2FsY3VsYXRvcihcbiAgICBiYXR0bGVKc29uOiBSZXBsYXlCYXR0bGVKc29uLFxuICAgIGJ1aWxkTW9kZWw/OiBSZXBsYXlCdWlsZE1vZGVsSnNvbixcbiAgICBtZXRhQm9hcmRzPzogUmVwbGF5TWV0YUJvYXJkcyxcbiAgICBvcHRpb25zPzogUmVwbGF5UGFyc2VPcHRpb25zLFxuICApOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUge1xuICAgIGNvbnNvbGUubG9nKGBbUmVwbGF5Q2FsY1BhcnNlcl0gUEVUU19CWV9JRCBzaXplOiAke1BFVFNfQllfSUQuc2l6ZX1gKTtcbiAgICBjb25zdCB1c2VyQm9hcmQgPSBiYXR0bGVKc29uPy5Vc2VyQm9hcmQgPz8gbWV0YUJvYXJkcz8udXNlckJvYXJkO1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBiYXR0bGVKc29uPy5PcHBvbmVudEJvYXJkID8/IG1ldGFCb2FyZHM/Lm9wcG9uZW50Qm9hcmQ7XG5cbiAgICBjb25zdCByZWFkQm9hcmROdW1iZXIgPSAoXG4gICAgICBib2FyZDogUmVwbGF5Qm9hcmRKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgZmFsbGJhY2s6IG51bWJlcixcbiAgICApOiBudW1iZXIgPT4ge1xuICAgICAgcmV0dXJuIHRvTnVtYmVyT3JGYWxsYmFjayhib2FyZD8uW2tleV0sIGZhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWJpbGl0eVBldE5hbWVCeUFiaWxpdHlJZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgY29uc3QgYWJpbGl0eVBldElkQnlBYmlsaXR5SWQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IGFwcGx5QWJpbGl0eVBldE1hcCA9IChcbiAgICAgIGFiaWxpdHlQZXRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFhYmlsaXR5UGV0TWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5lbnRyaWVzKGFiaWxpdHlQZXRNYXApLmZvckVhY2goKFthYmlsaXR5SWRSYXcsIHBldElkT3JOYW1lXSkgPT4ge1xuICAgICAgICBjb25zdCBhYmlsaXR5SWQgPSB0b1JlcGxheUlkKGFiaWxpdHlJZFJhdyk7XG4gICAgICAgIGlmICghYWJpbGl0eUlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYXBwZWRQZXRJZCA9XG4gICAgICAgICAgdHlwZW9mIHBldElkT3JOYW1lID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGV0SWRPck5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IFN0cmluZyhwZXRJZE9yTmFtZSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAvLyBJZiB0aGUgbWFwcGVkIHBldCBpZCBpcyBudW1lcmljIGJ1dCBub3QgZm91bmQgaW4gUEVUU19CWV9JRCxcbiAgICAgICAgLy8gdHJ5IGEgbGVnYWN5IG9mZnNldCBmYWxsYmFjayAocGV0IGlkIC0gMzApIHdoaWNoIHNvbWUgYmFja2VuZHNcbiAgICAgICAgLy8gZW1pdC4gVGhpcyBlbnN1cmVzIGFiaWxpdHktPnBldCBtYXBwaW5ncyB1c2luZyB0aGUgLTMwIHNjaGVtZVxuICAgICAgICAvLyBzdGlsbCByZXNvbHZlIHRvIGtub3duIHBldCBpZHMuXG4gICAgICAgIGlmIChtYXBwZWRQZXRJZCAmJiAhUEVUU19CWV9JRC5oYXMobWFwcGVkUGV0SWQpKSB7XG4gICAgICAgICAgY29uc3QgYXNOdW0gPSBOdW1iZXIobWFwcGVkUGV0SWQpO1xuICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGFzTnVtKSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tOdW0gPSBhc051bSAtIDMwO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoZmFsbGJhY2tOdW0pICYmIGZhbGxiYWNrTnVtID4gMCkge1xuICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja0lkID0gU3RyaW5nKGZhbGxiYWNrTnVtKTtcbiAgICAgICAgICAgICAgaWYgKFBFVFNfQllfSUQuaGFzKGZhbGxiYWNrSWQpKSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkUGV0SWQgPSBmYWxsYmFja0lkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwcGVkUGV0TmFtZSA9XG4gICAgICAgICAgKG1hcHBlZFBldElkID8gUEVUU19CWV9JRC5nZXQobWFwcGVkUGV0SWQpIDogbnVsbCkgfHxcbiAgICAgICAgICAodHlwZW9mIHBldElkT3JOYW1lID09PSAnc3RyaW5nJyA/IHBldElkT3JOYW1lIDogbnVsbCk7XG5cbiAgICAgICAgaWYgKG1hcHBlZFBldE5hbWUpIHtcbiAgICAgICAgICBhYmlsaXR5UGV0TmFtZUJ5QWJpbGl0eUlkLnNldChhYmlsaXR5SWQsIG1hcHBlZFBldE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXBwZWRQZXRJZCAmJiBQRVRTX0JZX0lELmhhcyhtYXBwZWRQZXRJZCkpIHtcbiAgICAgICAgICBhYmlsaXR5UGV0SWRCeUFiaWxpdHlJZC5zZXQoYWJpbGl0eUlkLCBtYXBwZWRQZXRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbmZlcnJlZEFiaWxpdHlPd25lckNvdW50czogQWJpbGl0eU93bmVyQ291bnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMoYmF0dGxlSnNvbiwgaW5mZXJyZWRBYmlsaXR5T3duZXJDb3VudHMpO1xuICAgIGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMoYnVpbGRNb2RlbCwgaW5mZXJyZWRBYmlsaXR5T3duZXJDb3VudHMpO1xuICAgIGNvbGxlY3RBYmlsaXR5T3duZXJDb3VudHMobWV0YUJvYXJkcywgaW5mZXJyZWRBYmlsaXR5T3duZXJDb3VudHMpO1xuICAgIGFwcGx5QWJpbGl0eVBldE1hcChcbiAgICAgIGJ1aWxkUmVwbGF5QWJpbGl0eVBldE1hcEZyb21Db3VudHMoaW5mZXJyZWRBYmlsaXR5T3duZXJDb3VudHMpLFxuICAgICk7XG4gICAgYXBwbHlBYmlsaXR5UGV0TWFwKG9wdGlvbnM/LmFiaWxpdHlQZXRNYXAgPz8gbnVsbCk7XG5cbiAgICBjb25zdCByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZUJ5TmVhcmJ5TWFwID0gKFxuICAgICAgYWJpbGl0eUlkOiBzdHJpbmcsXG4gICAgKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRBYmlsaXR5SWQgPSBOdW1iZXIoYWJpbGl0eUlkKTtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihwYXJzZWRBYmlsaXR5SWQpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvZmZzZXRDb3VudHMgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xuICAgICAgZm9yIChjb25zdCBbbWFwcGVkQWJpbGl0eUlkLCBtYXBwZWRQZXRJZF0gb2YgYWJpbGl0eVBldElkQnlBYmlsaXR5SWQuZW50cmllcygpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZE1hcHBlZEFiaWxpdHlJZCA9IE51bWJlcihtYXBwZWRBYmlsaXR5SWQpO1xuICAgICAgICBjb25zdCBwYXJzZWRNYXBwZWRQZXRJZCA9IE51bWJlcihtYXBwZWRQZXRJZCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhTnVtYmVyLmlzSW50ZWdlcihwYXJzZWRNYXBwZWRBYmlsaXR5SWQpIHx8XG4gICAgICAgICAgIU51bWJlci5pc0ludGVnZXIocGFyc2VkTWFwcGVkUGV0SWQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhwYXJzZWRNYXBwZWRBYmlsaXR5SWQgLSBwYXJzZWRBYmlsaXR5SWQpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDAgfHwgZGlzdGFuY2UgPiAyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZWRNYXBwZWRBYmlsaXR5SWQgLSBwYXJzZWRNYXBwZWRQZXRJZDtcbiAgICAgICAgb2Zmc2V0Q291bnRzLnNldChvZmZzZXQsIChvZmZzZXRDb3VudHMuZ2V0KG9mZnNldCkgPz8gMCkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJlc3RPZmZzZXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IGJlc3RPZmZzZXRDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IFtvZmZzZXQsIGNvdW50XSBvZiBvZmZzZXRDb3VudHMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb3VudCA+IGJlc3RPZmZzZXRDb3VudCB8fFxuICAgICAgICAgIChjb3VudCA9PT0gYmVzdE9mZnNldENvdW50ICYmXG4gICAgICAgICAgICAoYmVzdE9mZnNldCA9PT0gbnVsbCB8fCBNYXRoLmFicyhvZmZzZXQpIDwgTWF0aC5hYnMoYmVzdE9mZnNldCkpKVxuICAgICAgICApIHtcbiAgICAgICAgICBiZXN0T2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgIGJlc3RPZmZzZXRDb3VudCA9IGNvdW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChiZXN0T2Zmc2V0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmZlcnJlZFBldElkID0gU3RyaW5nKHBhcnNlZEFiaWxpdHlJZCAtIGJlc3RPZmZzZXQpO1xuICAgICAgcmV0dXJuIFBFVFNfQllfSUQuZ2V0KGluZmVycmVkUGV0SWQpID8/IG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc29sdmVBYmlsaXR5T3duZXJQZXROYW1lID0gKGFiaWxpdHlJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhYmlsaXR5UGV0TmFtZUJ5QWJpbGl0eUlkLmdldChhYmlsaXR5SWQpID8/XG4gICAgICAgIHJlc29sdmVBYmlsaXR5T3duZXJQZXROYW1lQnlOZWFyYnlNYXAoYWJpbGl0eUlkKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGltZXNIdXJ0ID0gKHBldEpzb246IFJlcGxheVBldEpzb24pOiBudW1iZXIgfCBudWxsID0+IHtcbiAgICAgIHJldHVybiBnZXRUaW1lc0h1cnRGcm9tUmF3UGV0KHBldEpzb24pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbmZlckNvcGllZFBldE5hbWUgPSAoXG4gICAgICBwZXRKc29uOiBSZXBsYXlQZXRKc29uLFxuICAgICAgY29weVBldE5hbWU6IHN0cmluZyxcbiAgICApOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIC8vIFN0b3JlZC1hYmlsaXR5IGVudW1zIGFyZSBkZWZpbml0aXZlLiBDaGVjayBldmVyeSBhYmlsaXR5IGZvciBvbmUgYmVmb3JlXG4gICAgICAvLyBhdHRlbXB0aW5nIG5lYXJieS1tYXAgaW5mZXJlbmNlOyBvdGhlcndpc2UgdGhlIGhvbGRlcidzIG5hdGl2ZSBhYmlsaXR5XG4gICAgICAvLyBjYW4gcHJvZHVjZSBhIHBsYXVzaWJsZSBidXQgaW5jb3JyZWN0IHBldCAoZm9yIGV4YW1wbGUgQWFyZHZhcmsgYmVmb3JlXG4gICAgICAvLyByZWFjaGluZyBCZWx1Z2EncyBzdG9yZWQgV29sZiBlbnVtKS5cbiAgICAgIGZvciAoY29uc3QgYWJpbGl0eSBvZiBwZXRKc29uLkFiaWwgPz8gW10pIHtcbiAgICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5Py5FbnUpO1xuICAgICAgICBjb25zdCBzdG9yZWRDb3B5T3duZXIgPSBhYmlsaXR5SWRcbiAgICAgICAgICA/IFNUT1JFRF9DT1BZX0FCSUxJVFlfT1dORVJfQllfSUQuZ2V0KGFiaWxpdHlJZClcbiAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChzdG9yZWRDb3B5T3duZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmVkQ29weU93bmVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgYWJpbGl0eSBvZiBwZXRKc29uLkFiaWwgPz8gW10pIHtcbiAgICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5Py5FbnUpO1xuICAgICAgICBpZiAoIWFiaWxpdHlJZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvd25lclBldE5hbWUgPSByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZShhYmlsaXR5SWQpO1xuICAgICAgICAvLyBSZXBsYXkgaW5kZXhlcyBjYW4gYXR0cmlidXRlIGEgY29waWVkIGFiaWxpdHkgdG8gaXRzIGN1cnJlbnQgaG9sZGVyLlxuICAgICAgICAvLyBXaGVuIHRoYXQgaGFwcGVucywgdXNlIHRoZSBzdXJyb3VuZGluZyBjYW5vbmljYWwgYWJpbGl0eSBtYXAgdG8gZmluZFxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb3duZXIgaW5zdGVhZC5cbiAgICAgICAgaWYgKG93bmVyUGV0TmFtZSA9PT0gY29weVBldE5hbWUpIHtcbiAgICAgICAgICBvd25lclBldE5hbWUgPSByZXNvbHZlQWJpbGl0eU93bmVyUGV0TmFtZUJ5TmVhcmJ5TWFwKGFiaWxpdHlJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG93bmVyUGV0TmFtZSAmJiBvd25lclBldE5hbWUgIT09IGNvcHlQZXROYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG93bmVyUGV0TmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhcnNlQWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSA9IChcbiAgICAgIHBldEpzb246IFJlcGxheVBldEpzb24sXG4gICAgKTogQWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSA9PiB7XG4gICAgICBjb25zdCBhYm9taW5hdGlvblN0YXRlID0gZGVmYXVsdEFib21pbmF0aW9uU3dhbGxvd2VkU3RhdGUoKTtcbiAgICAgIGNvbnN0IGFwcGx5TmVzdGVkTWVtb3J5U3RhdGUgPSAoXG4gICAgICAgIHNsb3RGaWVsZHM6ICh0eXBlb2YgQUJPTUlOQVRJT05fU0xPVF9GSUVMRFMpW251bWJlcl0sXG4gICAgICAgIG93bmVyUGV0TmFtZTogc3RyaW5nLFxuICAgICAgICBhYmlsaXR5OiBSZXBsYXlBYmlsaXR5SnNvbixcbiAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBtZW1vcnlFbnRyeSA9IGdldFJlcGxheU1lbW9yeUVudHJ5QnlBYmlsaXR5SWQocGV0SnNvbiwgYWJpbGl0eS5FbnUpO1xuICAgICAgICBjb25zdCBuZXN0ZWRUaW1lc0h1cnQgPSBnZXRUaW1lc0h1cnRGcm9tUmF3UGV0KG1lbW9yeUVudHJ5KTtcbiAgICAgICAgaWYgKG5lc3RlZFRpbWVzSHVydCAhPT0gbnVsbCkge1xuICAgICAgICAgIGFib21pbmF0aW9uU3RhdGVbc2xvdEZpZWxkcy50aW1lc0h1cnRdID0gbmVzdGVkVGltZXNIdXJ0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5lc3RlZFN3YWxsb3dlZFBldCA9IHJlc29sdmVOZXN0ZWRTd2FsbG93ZWRQZXROYW1lKG1lbW9yeUVudHJ5KTtcbiAgICAgICAgaWYgKCFuZXN0ZWRTd2FsbG93ZWRQZXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG93bmVyUGV0TmFtZSA9PT0gJ0JlbHVnYSBXaGFsZScpIHtcbiAgICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMuYmVsdWdhXSA9IG5lc3RlZFN3YWxsb3dlZFBldDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG93bmVyUGV0TmFtZSA9PT0gJ1NhcmNhc3RpYyBGcmluZ2VoZWFkJykge1xuICAgICAgICAgIGFib21pbmF0aW9uU3RhdGVbc2xvdEZpZWxkcy5zYXJjYXN0aWNGcmluZ2VoZWFkXSA9IG5lc3RlZFN3YWxsb3dlZFBldDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgY29waWVkQWJpbGl0aWVzID0gKHBldEpzb24/LkFiaWwgPz8gW10pXG4gICAgICAgIC5tYXAoKGFiaWxpdHksIGluZGV4KSA9PiAoeyBhYmlsaXR5LCBpbmRleCB9KSlcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhYmlsaXR5RW50cnksXG4gICAgICAgICAgKTogYWJpbGl0eUVudHJ5IGlzIHsgYWJpbGl0eTogUmVwbGF5QWJpbGl0eUpzb247IGluZGV4OiBudW1iZXIgfSA9PlxuICAgICAgICAgICAgYWJpbGl0eUVudHJ5LmFiaWxpdHkgIT09IG51bGwgJiZcbiAgICAgICAgICAgIHRvUmVwbGF5SWQoYWJpbGl0eUVudHJ5LmFiaWxpdHk/LkVudSkgIT09IG51bGwsXG4gICAgICAgICk7XG5cbiAgICAgIGlmIChjb3BpZWRBYmlsaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhYm9taW5hdGlvblN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBncm91cGVkQWJpbGl0aWVzID0gbmV3IE1hcDxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICB7IGFiaWxpdHk6IFJlcGxheUFiaWxpdHlKc29uOyBpbmRleDogbnVtYmVyIH1bXVxuICAgICAgPigpO1xuICAgICAgY29uc3Qgb3JkZXJlZEdyb3VwS2V5czogbnVtYmVyW10gPSBbXTtcbiAgICAgIGNvcGllZEFiaWxpdGllcy5mb3JFYWNoKChhYmlsaXR5RW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSB0b0Zpbml0ZU51bWJlcihhYmlsaXR5RW50cnkuYWJpbGl0eT8uR3JvcCkgPz8gMDtcbiAgICAgICAgaWYgKCFncm91cGVkQWJpbGl0aWVzLmhhcyhncm91cEtleSkpIHtcbiAgICAgICAgICBncm91cGVkQWJpbGl0aWVzLnNldChncm91cEtleSwgW10pO1xuICAgICAgICAgIG9yZGVyZWRHcm91cEtleXMucHVzaChncm91cEtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBlZEFiaWxpdGllcy5nZXQoZ3JvdXBLZXkpPy5wdXNoKGFiaWxpdHlFbnRyeSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdXNlZEFiaWxpdHlJbmRleGVzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgICBjb25zdCB1bnJlc29sdmVkU2xvdEluZGV4ZXM6IG51bWJlcltdID0gW107XG5cbiAgICAgIEFCT01JTkFUSU9OX1NMT1RfRklFTERTLmZvckVhY2goKHNsb3RGaWVsZHMsIHNsb3RJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEtleSA9IG9yZGVyZWRHcm91cEtleXNbc2xvdEluZGV4XTtcbiAgICAgICAgaWYgKGdyb3VwS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB1bnJlc29sdmVkU2xvdEluZGV4ZXMucHVzaChzbG90SW5kZXgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncm91cEFiaWxpdGllcyA9IGdyb3VwZWRBYmlsaXRpZXMuZ2V0KGdyb3VwS2V5KTtcbiAgICAgICAgaWYgKCFncm91cEFiaWxpdGllcyB8fCBncm91cEFiaWxpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB1bnJlc29sdmVkU2xvdEluZGV4ZXMucHVzaChzbG90SW5kZXgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNvbHZlZEFiaWxpdHlFbnRyeTpcbiAgICAgICAgICB8IHsgYWJpbGl0eTogUmVwbGF5QWJpbGl0eUpzb247IGluZGV4OiBudW1iZXIgfVxuICAgICAgICAgIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCByZXNvbHZlZFBldE5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgICAgIGZvciAoY29uc3QgYWJpbGl0eUVudHJ5IG9mIGdyb3VwQWJpbGl0aWVzKSB7XG4gICAgICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5RW50cnkuYWJpbGl0eT8uRW51KTtcbiAgICAgICAgICBpZiAoIWFiaWxpdHlJZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG93bmVyUGV0TmFtZSA9IHJlc29sdmVBYmlsaXR5T3duZXJQZXROYW1lKGFiaWxpdHlJZCk7XG4gICAgICAgICAgaWYgKCFvd25lclBldE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlZEFiaWxpdHlFbnRyeSA9IGFiaWxpdHlFbnRyeTtcbiAgICAgICAgICByZXNvbHZlZFBldE5hbWUgPSBvd25lclBldE5hbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc29sdmVkQWJpbGl0eUVudHJ5IHx8ICFyZXNvbHZlZFBldE5hbWUpIHtcbiAgICAgICAgICB1bnJlc29sdmVkU2xvdEluZGV4ZXMucHVzaChzbG90SW5kZXgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFib21pbmF0aW9uU3RhdGVbc2xvdEZpZWxkcy5wZXRdID0gcmVzb2x2ZWRQZXROYW1lO1xuICAgICAgICBjb25zdCBpbmZlcnJlZExldmVsID0gdG9GaW5pdGVOdW1iZXIocmVzb2x2ZWRBYmlsaXR5RW50cnkuYWJpbGl0eT8uTHZsKTtcbiAgICAgICAgaWYgKGluZmVycmVkTGV2ZWwgIT09IG51bGwpIHtcbiAgICAgICAgICBhYm9taW5hdGlvblN0YXRlW3Nsb3RGaWVsZHMubGV2ZWxdID0gaW5mZXJyZWRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBhcHBseU5lc3RlZE1lbW9yeVN0YXRlKFxuICAgICAgICAgIHNsb3RGaWVsZHMsXG4gICAgICAgICAgcmVzb2x2ZWRQZXROYW1lLFxuICAgICAgICAgIHJlc29sdmVkQWJpbGl0eUVudHJ5LmFiaWxpdHksXG4gICAgICAgICk7XG4gICAgICAgIHVzZWRBYmlsaXR5SW5kZXhlcy5hZGQocmVzb2x2ZWRBYmlsaXR5RW50cnkuaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh1bnJlc29sdmVkU2xvdEluZGV4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhYm9taW5hdGlvblN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmYWxsYmFja1Jlc29sdmVkQWJpbGl0aWVzID0gY29waWVkQWJpbGl0aWVzXG4gICAgICAgIC5maWx0ZXIoKGFiaWxpdHlFbnRyeSkgPT4gIXVzZWRBYmlsaXR5SW5kZXhlcy5oYXMoYWJpbGl0eUVudHJ5LmluZGV4KSlcbiAgICAgICAgLm1hcCgoYWJpbGl0eUVudHJ5KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWJpbGl0eUlkID0gdG9SZXBsYXlJZChhYmlsaXR5RW50cnkuYWJpbGl0eT8uRW51KTtcbiAgICAgICAgICBpZiAoIWFiaWxpdHlJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG93bmVyUGV0TmFtZSA9IHJlc29sdmVBYmlsaXR5T3duZXJQZXROYW1lKGFiaWxpdHlJZCk7XG4gICAgICAgICAgaWYgKCFvd25lclBldE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3duZXJQZXROYW1lLFxuICAgICAgICAgICAgbGV2ZWw6IHRvRmluaXRlTnVtYmVyKGFiaWxpdHlFbnRyeS5hYmlsaXR5Py5MdmwpLFxuICAgICAgICAgICAgYWJpbGl0eTogYWJpbGl0eUVudHJ5LmFiaWxpdHksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhYmlsaXR5RW50cnksXG4gICAgICAgICAgKTogYWJpbGl0eUVudHJ5IGlzIHtcbiAgICAgICAgICAgIG93bmVyUGV0TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV2ZWw6IG51bWJlciB8IG51bGw7XG4gICAgICAgICAgICBhYmlsaXR5OiBSZXBsYXlBYmlsaXR5SnNvbjtcbiAgICAgICAgICB9ID0+XG4gICAgICAgICAgICBhYmlsaXR5RW50cnkgIT09IG51bGwsXG4gICAgICAgICk7XG5cbiAgICAgIHVucmVzb2x2ZWRTbG90SW5kZXhlcy5mb3JFYWNoKChzbG90SW5kZXgsIGZhbGxiYWNrSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZmFsbGJhY2tBYmlsaXR5ID0gZmFsbGJhY2tSZXNvbHZlZEFiaWxpdGllc1tmYWxsYmFja0luZGV4XTtcbiAgICAgICAgaWYgKCFmYWxsYmFja0FiaWxpdHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2xvdEZpZWxkcyA9IEFCT01JTkFUSU9OX1NMT1RfRklFTERTW3Nsb3RJbmRleF07XG4gICAgICAgIGFib21pbmF0aW9uU3RhdGVbc2xvdEZpZWxkcy5wZXRdID0gZmFsbGJhY2tBYmlsaXR5Lm93bmVyUGV0TmFtZTtcbiAgICAgICAgaWYgKGZhbGxiYWNrQWJpbGl0eS5sZXZlbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGFib21pbmF0aW9uU3RhdGVbc2xvdEZpZWxkcy5sZXZlbF0gPSBmYWxsYmFja0FiaWxpdHkubGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgYXBwbHlOZXN0ZWRNZW1vcnlTdGF0ZShcbiAgICAgICAgICBzbG90RmllbGRzLFxuICAgICAgICAgIGZhbGxiYWNrQWJpbGl0eS5vd25lclBldE5hbWUsXG4gICAgICAgICAgZmFsbGJhY2tBYmlsaXR5LmFiaWxpdHksXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFib21pbmF0aW9uU3RhdGU7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhcnNlUGV0ID0gKHBldEpzb246IFJlcGxheVBldEpzb24gfCBudWxsIHwgdW5kZWZpbmVkKTogUGV0Q29uZmlnIHwgbnVsbCA9PiB7XG4gICAgICBpZiAoIXBldEpzb24pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGhlbHBlciBtYXBzIGZvciBtb3JlIGFkdmFuY2VkIGluZmVyZW5jZSAodXNlZCBmb3IgQWJvbWluYXRpb24gbWVtb3J5KVxuICAgICAgY29uc3QgcGV0UmVjb3JkID0gYXNSZWNvcmQocGV0SnNvbik7XG4gICAgICBjb25zdCBtYXBzOiBSZXBsYXlQYXJzZXJMb29rdXBNYXBzID0geyBQRVRfSURTX0JZX05BTUUgfTtcblxuICAgICAgY29uc3QgcmF3UGV0UmVmID1cbiAgICAgICAgcGV0SnNvbi5FbnUgPz9cbiAgICAgICAgcGV0UmVjb3JkPy5bJ2VudSddID8/XG4gICAgICAgIHBldFJlY29yZD8uWydJZCddID8/XG4gICAgICAgIHBldFJlY29yZD8uWydpZCddO1xuICAgICAgY29uc3QgcmVzb2x2ZWRQZXRJZCA9IHJlc29sdmVQZXRJZEZyb21Vbmtub3duKHJhd1BldFJlZiwgbWFwcyk7XG4gICAgICBjb25zdCBwZXRJZCA9IHJlc29sdmVkUGV0SWQgIT09IG51bGwgPyBTdHJpbmcocmVzb2x2ZWRQZXRJZCkgOiBTdHJpbmcocmF3UGV0UmVmID8/IDApO1xuXG4gICAgICBjb25zdCBwZXROYW1lID1cbiAgICAgICAgUEVUU19CWV9JRC5nZXQocGV0SWQpIHx8XG4gICAgICAgICh0eXBlb2YgcGV0UmVjb3JkPy5bJ25hbWUnXSA9PT0gJ3N0cmluZycgPyBwZXRSZWNvcmRbJ25hbWUnXSA6IG51bGwpIHx8XG4gICAgICAgICh0eXBlb2YgcGV0UmVjb3JkPy5bJ05hbWUnXSA9PT0gJ3N0cmluZycgPyBwZXRSZWNvcmRbJ05hbWUnXSA6IG51bGwpIHx8XG4gICAgICAgICh0eXBlb2YgcmF3UGV0UmVmID09PSAnc3RyaW5nJyAmJiByYXdQZXRSZWYudHJpbSgpLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHJhd1BldFJlZi50cmltKClcbiAgICAgICAgICA6IGBQZXQgIyR7cGV0SWR9YCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbUmVwbGF5Q2FsY1BhcnNlcl0gUGV0IEVudToke3Jhd1BldFJlZn0gLT4gSWQ6JHtwZXRJZH0gLT4gTmFtZToke3BldE5hbWV9YCk7XG5cbiAgICAgIGNvbnN0IGF0SnNvbiA9IHBldEpzb24uQXQgPz8gYXNSZWNvcmQocGV0UmVjb3JkPy5bJ2F0J10pO1xuICAgICAgY29uc3QgaHBKc29uID0gcGV0SnNvbi5IcCA/PyBhc1JlY29yZChwZXRSZWNvcmQ/LlsnaHAnXSk7XG4gICAgICBjb25zdCBhdEpzb25SZWNvcmQgPSBhc1JlY29yZChhdEpzb24pO1xuICAgICAgY29uc3QgaHBKc29uUmVjb3JkID0gYXNSZWNvcmQoaHBKc29uKTtcblxuICAgICAgY29uc3QgcGV0VGVtcEF0ayA9IHRvTnVtYmVyT3JGYWxsYmFjayhcbiAgICAgICAgYXRKc29uPy5UZW1wID8/IGF0SnNvblJlY29yZD8uWyd0ZW1wJ10sXG4gICAgICAgIDAsXG4gICAgICApO1xuICAgICAgY29uc3QgcGV0VGVtcEhwID0gdG9OdW1iZXJPckZhbGxiYWNrKFxuICAgICAgICBocEpzb24/LlRlbXAgPz8gaHBKc29uUmVjb3JkPy5bJ3RlbXAnXSxcbiAgICAgICAgMCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGJlbHVnYVN3YWxsb3dlZFBldCA9XG4gICAgICAgIHBldElkID09PSAnMTgyJ1xuICAgICAgICAgID8gcmVzb2x2ZU5lc3RlZFN3YWxsb3dlZFBldE5hbWUocGV0SnNvbikgPz9cbiAgICAgICAgICAgIGluZmVyQ29waWVkUGV0TmFtZShwZXRKc29uLCAnQmVsdWdhIFdoYWxlJylcbiAgICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBzYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0ID1cbiAgICAgICAgcGV0SWQgPT09ICc3NjMnXG4gICAgICAgICAgPyByZXNvbHZlTmVzdGVkU3dhbGxvd2VkUGV0TmFtZShwZXRKc29uKSA/P1xuICAgICAgICAgICAgaW5mZXJDb3BpZWRQZXROYW1lKHBldEpzb24sICdTYXJjYXN0aWMgRnJpbmdlaGVhZCcpXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgY29uc3QgYWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSA9XG4gICAgICAgIHBldElkID09PSAnMzczJ1xuICAgICAgICAgID8gcGFyc2VBYm9taW5hdGlvblN3YWxsb3dlZFN0YXRlKHBldEpzb24pXG4gICAgICAgICAgOiBkZWZhdWx0QWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSgpO1xuXG4gICAgICAvLyBhYmlsaXR5UGV0SWRCeUFiaWxpdHlJZCBpcyBhIE1hcDxhYmlsaXR5SWQsIHBldElkPlxuICAgICAgLy8gV2UgaW52ZXJ0IGl0IGludG8gYWJpbGl0eUlkc0J5UGV0SWQ6IHsgW3BldElkXTogW2FiaWxpdHlJZCwgLi4uXSB9XG4gICAgICBjb25zdCBhYmlsaXR5SWRzQnlQZXRJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG4gICAgICBmb3IgKGNvbnN0IFthYmlsaXR5SWQsIG1hcHBlZFBldElkXSBvZiBhYmlsaXR5UGV0SWRCeUFiaWxpdHlJZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgY29uc3QgcGlkID0gU3RyaW5nKG1hcHBlZFBldElkKTtcbiAgICAgICAgYWJpbGl0eUlkc0J5UGV0SWRbcGlkXSA9IGFiaWxpdHlJZHNCeVBldElkW3BpZF0gfHwgW107XG4gICAgICAgIGFiaWxpdHlJZHNCeVBldElkW3BpZF0ucHVzaChTdHJpbmcoYWJpbGl0eUlkKSk7XG4gICAgICB9XG4gICAgICBtYXBzLmFiaWxpdHlJZHNCeVBldElkID0gYWJpbGl0eUlkc0J5UGV0SWQ7XG5cbiAgICAgIGNvbnN0IHRpbWVzSHVydCA9IGdldFRpbWVzSHVydChwZXRKc29uKTtcbiAgICAgIGNvbnN0IGFiaWxpdHlUcmlnZ2Vyc0NvbnN1bWVkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGdldFRyaWdnZXJzQ29uc3VtZWRGcm9tUmF3UGV0KHBldEpzb24pO1xuICAgICAgICByZXR1cm4gdiA9PT0gbnVsbCA/IFtdIDogW3ZdO1xuICAgICAgfSkoKTtcblxuICAgICAgY29uc3QgcGVya1ZhbHVlID0gcGV0SnNvbi5QZXJrO1xuICAgICAgY29uc3QgcmVwbGF5UGVya05hbWUgPVxuICAgICAgICBwZXRJZCAhPT0gbnVsbFxuICAgICAgICAgID8gb3B0aW9ucz8ucGVya05hbWVCeVBldElkPy5bU3RyaW5nKHBldElkKV0gPz8gbnVsbFxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IHBlcmtOYW1lID1cbiAgICAgICAgcmVwbGF5UGVya05hbWUgPz9cbiAgICAgICAgKHBlcmtWYWx1ZSAhPT0gbnVsbCAmJiBwZXJrVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gUEVSS1NfQllfSUQuZ2V0KFN0cmluZyhwZXJrVmFsdWUpKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBwZXJrVmFsdWUgPT09ICdzdHJpbmcnID8gcGVya1ZhbHVlIDogJ1Vua25vd24gUGVyaycpXG4gICAgICAgICAgOiBudWxsKTtcblxuICAgICAgY29uc3QgcGFyc2VkUGV0OiBQZXRDb25maWcgPSB7XG4gICAgICAgIG5hbWU6IHBldE5hbWUsXG4gICAgICAgIGF0dGFjazpcbiAgICAgICAgICB0b051bWJlck9yRmFsbGJhY2soXG4gICAgICAgICAgICBhdEpzb24/LlBlcm0gPz8gYXRKc29uUmVjb3JkPy5bJ3Blcm0nXSA/PyBwZXRSZWNvcmQ/LlsnYXR0YWNrJ10sXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICkgKyBwZXRUZW1wQXRrLFxuICAgICAgICBoZWFsdGg6XG4gICAgICAgICAgdG9OdW1iZXJPckZhbGxiYWNrKFxuICAgICAgICAgICAgaHBKc29uPy5QZXJtID8/IGhwSnNvblJlY29yZD8uWydwZXJtJ10gPz8gcGV0UmVjb3JkPy5bJ2hlYWx0aCddLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICApICsgcGV0VGVtcEhwLFxuICAgICAgICBleHA6ICgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhwID0gdG9GaW5pdGVOdW1iZXIocGV0SnNvbi5FeHApO1xuICAgICAgICAgIGlmIChleHAgIT09IG51bGwgJiYgZXhwID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbHZsID0gdG9GaW5pdGVOdW1iZXIocGV0SnNvbi5MdmwpO1xuICAgICAgICAgIGlmIChsdmwgPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobHZsID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGV4cCA/PyAwO1xuICAgICAgICB9KSgpLFxuICAgICAgICBlcXVpcG1lbnQ6IHBlcmtOYW1lID8geyBuYW1lOiBwZXJrTmFtZSB9IDogbnVsbCxcbiAgICAgICAgbWFuYTogdG9OdW1iZXJPckZhbGxiYWNrKHBldEpzb24uTWFuYSwgMCksXG4gICAgICAgIGJlbHVnYVN3YWxsb3dlZFBldCxcbiAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldCxcbiAgICAgICAgLi4uYWJvbWluYXRpb25Td2FsbG93ZWRTdGF0ZSxcbiAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDpcbiAgICAgICAgICBhYmlsaXR5VHJpZ2dlcnNDb25zdW1lZC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IE1hdGgubWF4KC4uLmFiaWxpdHlUcmlnZ2Vyc0NvbnN1bWVkKVxuICAgICAgICAgICAgOiAwLFxuICAgICAgfTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhbiBBYm9taW5hdGlvbiwgYXR0ZW1wdCB0byBhdHRhY2ggaW5mZXJyZWQgbWVtb3J5L2FiaWxpdGllc1xuICAgICAgaWYgKFN0cmluZyhwZXRJZCkgPT09ICczNzMnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbWVtID0gYnVpbGRBYm9taW5hdGlvbk1lbW9yeShwZXRKc29uLCBOdW1iZXIocGV0SWQpLCBtYXBzKTtcbiAgICAgICAgICBpZiAobWVtKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9taW5hdGlvblBldCA9IHBhcnNlZFBldCBhcyBQZXRDb25maWcgJiB7XG4gICAgICAgICAgICAgIGFib21pbmF0aW9uTWVtb3J5PzogdW5rbm93bjtcbiAgICAgICAgICAgICAgYWJvbWluYXRpb25JbmZlcnJlZEFiaWxpdHlFbnVtcz86IG51bWJlcltdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFib21pbmF0aW9uUGV0LmFib21pbmF0aW9uTWVtb3J5ID0gbWVtO1xuICAgICAgICAgICAgY29uc3QgaW5mZXJyZWRFbnVtcyA9IGluZmVyQWJvbWluYXRpb25BYmlsaXR5RW51bXNGcm9tU3dhbGxvd2VkUGV0cyhcbiAgICAgICAgICAgICAgcGV0SnNvbixcbiAgICAgICAgICAgICAgbWFwcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmZlcnJlZEVudW1zKSAmJiBpbmZlcnJlZEVudW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgYWJvbWluYXRpb25QZXQuYWJvbWluYXRpb25JbmZlcnJlZEFiaWxpdHlFbnVtcyA9IGluZmVycmVkRW51bXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHZvaWQgZXJyb3I7XG4gICAgICAgICAgLyogYmVzdC1lZmZvcnQgb25seSAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGltZXNIdXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZFBldC50aW1lc0h1cnQgPSB0aW1lc0h1cnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWRQZXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhcnNlQm9hcmRQZXRzID0gKFxuICAgICAgYm9hcmRKc29uOiBSZXBsYXlCb2FyZEpzb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgICk6IChQZXRDb25maWcgfCBudWxsKVtdID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gYm9hcmRKc29uPy5NaW5zPy5JdGVtcyA/PyBbXTtcbiAgICAgIGNvbnN0IHBldEFycmF5OiAoUGV0Q29uZmlnIHwgbnVsbClbXSA9IEFycmF5KDUpLmZpbGwobnVsbCk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChwZXQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghcGV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3MgPSB0b051bWJlck9yRmFsbGJhY2socGV0LlBvaT8ueCwgLTEpO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgIHBvcyA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MgPj0gMCAmJiBwb3MgPCA1KSB7XG4gICAgICAgICAgcGV0QXJyYXlbcG9zXSA9IHBhcnNlUGV0KHBldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGV0QXJyYXkucmV2ZXJzZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb3kgPSAoYm9hcmRKc29uOiBSZXBsYXlCb2FyZEpzb24gfCBudWxsIHwgdW5kZWZpbmVkKTogUmVwbGF5UGFyc2VkVG95ID0+IHtcbiAgICAgIGNvbnN0IHRveUl0ZW0gPSAoYm9hcmRKc29uPy5SZWw/Lkl0ZW1zID8/IFtdKS5maW5kKChpdGVtKSA9PiBCb29sZWFuKGl0ZW0pKTtcbiAgICAgIGlmICh0b3lJdGVtKSB7XG4gICAgICAgIGNvbnN0IHRveVJlY29yZCA9IGFzUmVjb3JkKHRveUl0ZW0pO1xuICAgICAgICBjb25zdCB0b3lJZCA9IHJlc29sdmVUb3lJZCh0b3lJdGVtKSA/PyBudWxsO1xuICAgICAgICBjb25zdCB0b3lOYW1lID0gdG95SWQgPyBUT1lTX0JZX0lELmdldChTdHJpbmcodG95SWQpKSA6IGdldFRveU5hbWUodG95SXRlbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogdG95TmFtZSB8fCBudWxsLFxuICAgICAgICAgIGxldmVsOiB0b051bWJlck9yRmFsbGJhY2sodG95UmVjb3JkPy5bJ0x2bCddLCAxKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6IG51bGwsIGxldmVsOiAxIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXllclRveSA9IGdldFRveSh1c2VyQm9hcmQpO1xuICAgIGNvbnN0IG9wcG9uZW50VG95ID0gZ2V0VG95KG9wcG9uZW50Qm9hcmQpO1xuXG4gICAgY29uc3QgY3VzdG9tUGFja3MgPSB0aGlzLmJ1aWxkQ3VzdG9tUGFja3NGcm9tR2VuZXNpcyhidWlsZE1vZGVsLCBiYXR0bGVKc29uKTtcbiAgICAvLyBHZW5lc2lzQnVpbGRNb2RlbCBiZWxvbmdzIHRvIHRoZSBwYXJ0aWNpcGF0aW9uIElEIHVzZWQgdG8gZmV0Y2ggdGhlXG4gICAgLy8gcmVwbGF5LCB3aGljaCBpcyB0aGUgcGxheWVyIHBlcnNwZWN0aXZlLiBTdW1tYXJpemVkIHJlcGxheSBiYXR0bGVzIG9mdGVuXG4gICAgLy8gb21pdCBVc2VyQm9hcmQuRGVjaywgc28gdXNlIHRoZSBnZW5lc2lzIGRlY2sgYXMgdGhlIHBsYXllcidzIGZhbGxiYWNrLlxuICAgIC8vIE5ldmVyIHVzZSBpdCBmb3IgdGhlIG9wcG9uZW50OiB0aGVpciBjdXN0b20gZGVjayByZXF1aXJlcyB0aGVpciBvd25cbiAgICAvLyBwYXJ0aWNpcGF0aW9uIHJlcGxheS5cbiAgICBjb25zdCBwbGF5ZXJEZWNrID0gdXNlckJvYXJkPy5EZWNrID8/IGJ1aWxkTW9kZWw/LkJvcj8uRGVjaztcbiAgICBjb25zdCBwbGF5ZXJDdXN0b21QYWNrID0gdGhpcy5maW5kQ3VzdG9tUGFja0Zyb21EZWNrKFxuICAgICAgY3VzdG9tUGFja3MsXG4gICAgICBwbGF5ZXJEZWNrLFxuICAgICk7XG4gICAgY29uc3Qgb3Bwb25lbnRDdXN0b21QYWNrID0gdGhpcy5maW5kQ3VzdG9tUGFja0Zyb21EZWNrKFxuICAgICAgY3VzdG9tUGFja3MsXG4gICAgICBvcHBvbmVudEJvYXJkPy5EZWNrLFxuICAgICk7XG4gICAgY29uc3QgcGxheWVyUGFja0lkID0gcmVzb2x2ZVBhY2tJZEZyb21Vbmtub3duKHVzZXJCb2FyZD8uUGFjayk7XG4gICAgY29uc3Qgb3Bwb25lbnRQYWNrSWQgPSByZXNvbHZlUGFja0lkRnJvbVVua25vd24ob3Bwb25lbnRCb2FyZD8uUGFjayk7XG4gICAgY29uc3QgcGxheWVyUGFja05hbWUgPVxuICAgICAgcGxheWVyQ3VzdG9tUGFjaz8ubmFtZSB8fFxuICAgICAgKHBsYXllclBhY2tJZCAhPT0gbnVsbCA/IFBBQ0tfTUFQW3BsYXllclBhY2tJZF0gOiBudWxsKSB8fFxuICAgICAgJ1R1cnRsZSc7XG4gICAgY29uc3Qgb3Bwb25lbnRQYWNrTmFtZSA9XG4gICAgICBvcHBvbmVudEN1c3RvbVBhY2s/Lm5hbWUgfHxcbiAgICAgIChvcHBvbmVudFBhY2tJZCAhPT0gbnVsbCA/IFBBQ0tfTUFQW29wcG9uZW50UGFja0lkXSA6IG51bGwpIHx8XG4gICAgICAnVHVydGxlJztcblxuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXJQYWNrOiBwbGF5ZXJQYWNrTmFtZSxcbiAgICAgIG9wcG9uZW50UGFjazogb3Bwb25lbnRQYWNrTmFtZSxcbiAgICAgIHBsYXllclRveTogcGxheWVyVG95Lm5hbWUsXG4gICAgICBwbGF5ZXJUb3lMZXZlbDogU3RyaW5nKHBsYXllclRveS5sZXZlbCksXG4gICAgICBwbGF5ZXJIYXJkVG95OiBudWxsLFxuICAgICAgcGxheWVySGFyZFRveUxldmVsOiAxLFxuICAgICAgb3Bwb25lbnRUb3k6IG9wcG9uZW50VG95Lm5hbWUsXG4gICAgICBvcHBvbmVudFRveUxldmVsOiBTdHJpbmcob3Bwb25lbnRUb3kubGV2ZWwpLFxuICAgICAgb3Bwb25lbnRIYXJkVG95OiBudWxsLFxuICAgICAgb3Bwb25lbnRIYXJkVG95TGV2ZWw6IDEsXG4gICAgICB0dXJuOiByZWFkQm9hcmROdW1iZXIodXNlckJvYXJkLCAnVHVyJywgMSkgfHwgMSxcbiAgICAgIHBsYXllckdvbGRTcGVudDogcmVhZEJvYXJkTnVtYmVyKHVzZXJCb2FyZCwgJ0dvU3AnLCAwKSB8fCAwLFxuICAgICAgb3Bwb25lbnRHb2xkU3BlbnQ6IHJlYWRCb2FyZE51bWJlcihvcHBvbmVudEJvYXJkLCAnR29TcCcsIDApIHx8IDAsXG4gICAgICBwbGF5ZXJSb2xsQW1vdW50OiByZWFkQm9hcmROdW1iZXIodXNlckJvYXJkLCAnUm9sZCcsIDApIHx8IDAsXG4gICAgICBvcHBvbmVudFJvbGxBbW91bnQ6IHJlYWRCb2FyZE51bWJlcihvcHBvbmVudEJvYXJkLCAnUm9sZCcsIDApIHx8IDAsXG4gICAgICBwbGF5ZXJTdW1tb25lZEFtb3VudDogcmVhZEJvYXJkTnVtYmVyKHVzZXJCb2FyZCwgJ01pU3UnLCAwKSB8fCAwLFxuICAgICAgb3Bwb25lbnRTdW1tb25lZEFtb3VudDogcmVhZEJvYXJkTnVtYmVyKG9wcG9uZW50Qm9hcmQsICdNaVN1JywgMCkgfHwgMCxcbiAgICAgIHBsYXllckxldmVsM1NvbGQ6IHJlYWRCb2FyZE51bWJlcih1c2VyQm9hcmQsICdNU0ZMJywgMCkgfHwgMCxcbiAgICAgIG9wcG9uZW50TGV2ZWwzU29sZDogcmVhZEJvYXJkTnVtYmVyKG9wcG9uZW50Qm9hcmQsICdNU0ZMJywgMCkgfHwgMCxcbiAgICAgIHBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50OiByZWFkQm9hcmROdW1iZXIodXNlckJvYXJkLCAnVHJUVCcsIDApIHx8IDAsXG4gICAgICBvcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50OiByZWFkQm9hcmROdW1iZXIob3Bwb25lbnRCb2FyZCwgJ1RyVFQnLCAwKSB8fCAwLFxuICAgICAgcGxheWVyUGV0czogcGFyc2VCb2FyZFBldHModXNlckJvYXJkKSxcbiAgICAgIG9wcG9uZW50UGV0czogcGFyc2VCb2FyZFBldHMob3Bwb25lbnRCb2FyZCksXG4gICAgICBhbGxQZXRzOiBmYWxzZSxcbiAgICAgIGxvZ0ZpbHRlcjogbnVsbCxcbiAgICAgIGN1c3RvbVBhY2tzLFxuICAgICAgb2xkU3Rvcms6IGZhbHNlLFxuICAgICAgdG9rZW5QZXRzOiBmYWxzZSxcbiAgICAgIGtvbW9kb1NodWZmbGU6IGZhbHNlLFxuICAgICAgbWFuYTogdHJ1ZSxcbiAgICAgIHNlZWQ6IG51bGwsXG4gICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiB0cnVlLFxuICAgICAgc2hvd0FkdmFuY2VkOiB0cnVlLFxuICAgICAgc2hvd1RyaWdnZXJOYW1lc0luTG9nczogZmFsc2UsXG4gICAgICBzaG93UG9zaXRpb25hbEFyZ3NJbkxvZ3M6IHRydWUsXG4gICAgICBhaWxtZW50RXF1aXBtZW50OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYnVpbGRDdXN0b21QYWNrc0Zyb21HZW5lc2lzKFxuICAgIGJ1aWxkTW9kZWw/OiBSZXBsYXlCdWlsZE1vZGVsSnNvbixcbiAgICBiYXR0bGVKc29uPzogUmVwbGF5QmF0dGxlSnNvbixcbiAgKTogUmVwbGF5Q3VzdG9tUGFja1tdIHtcbiAgICBjb25zdCBkZWNrcyA9IFtcbiAgICAgIGJ1aWxkTW9kZWw/LkJvcj8uRGVjayxcbiAgICAgIGJhdHRsZUpzb24/LlVzZXJCb2FyZD8uRGVjayxcbiAgICAgIGJhdHRsZUpzb24/Lk9wcG9uZW50Qm9hcmQ/LkRlY2ssXG4gICAgXS5maWx0ZXIoXG4gICAgICAoZGVjayk6IGRlY2sgaXMgUmVwbGF5RGVja0pzb24gPT5cbiAgICAgICAgZGVjayAhPT0gbnVsbCAmJiBkZWNrICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheShkZWNrLk1pbmlvbnMpLFxuICAgICk7XG5cbiAgICBjb25zdCBwYWNrczogUmVwbGF5Q3VzdG9tUGFja1tdID0gW107XG4gICAgY29uc3Qgc2VlbkRlY2tJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCB1c2VkTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGZvciAoY29uc3QgZGVjayBvZiBkZWNrcykge1xuICAgICAgY29uc3QgZGVja0lkID0gZGVjaz8uSWQgIT0gbnVsbCA/IFN0cmluZyhkZWNrLklkKSA6IG51bGw7XG4gICAgICBpZiAoZGVja0lkICYmIHNlZW5EZWNrSWRzLmhhcyhkZWNrSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGRlY2tJZCkge1xuICAgICAgICBzZWVuRGVja0lkcy5hZGQoZGVja0lkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhY2sgPSB0aGlzLmJ1aWxkQ3VzdG9tUGFja0Zyb21EZWNrKGRlY2ssIHVzZWROYW1lcyk7XG4gICAgICBpZiAocGFjaykge1xuICAgICAgICBwYWNrcy5wdXNoKHsgLi4ucGFjaywgZGVja0lkIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWNrcztcbiAgfVxuXG4gIGdlbmVyYXRlQ2FsY3VsYXRvckxpbmsoY2FsY3VsYXRvclN0YXRlOiBSZXBsYXlDYWxjdWxhdG9yU3RhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IHN0cmlwcGVkU3RhdGUgPSB0aGlzLnN0cmlwRGVmYXVsdFZhbHVlcyhjYWxjdWxhdG9yU3RhdGUpO1xuICAgIGNvbnN0IHRydW5jYXRlZFN0YXRlID0gdGhpcy50cnVuY2F0ZUtleXMoc3RyaXBwZWRTdGF0ZSk7XG4gICAgY29uc3Qgc3RhdGVTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0cnVuY2F0ZWRTdGF0ZSk7XG4gICAgY29uc3QgYmFzZTY0RGF0YSA9IGVuY29kZUJhc2U2NFVybChzdGF0ZVN0cmluZyk7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9I2M9JHtiYXNlNjREYXRhfWA7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ3VzdG9tUGFja0Zyb21EZWNrKFxuICAgIGRlY2s6IFJlcGxheURlY2tKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICB1c2VkTmFtZXM6IFNldDxzdHJpbmc+LFxuICApOiBSZXBsYXlDdXN0b21QYWNrQ29yZSB8IG51bGwge1xuICAgIGlmICghZGVjayB8fCAhQXJyYXkuaXNBcnJheShkZWNrLk1pbmlvbnMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5pb25zID0gZGVjay5NaW5pb25zLm1hcCgoaWQpID0+IFN0cmluZyhpZCkpO1xuICAgIC8vIEtlZXAgdGhlIHJlcGxheSdzIG51bWVyaWMgc3BlbGwgSURzIGludGFjdC4gU0FQIGN1c3RvbS1wYWNrIEpTT04gdXNlc1xuICAgIC8vIG51bWVyaWMgSURzIGhlcmUsIHNvIGNvZXJjaW5nIHRoZW0gdG8gc3RyaW5ncyBtYWtlcyBjb3BpZWQgcGFjayBKU09OXG4gICAgLy8gZGlmZmVyIGZyb20gdGhlIHNvdXJjZSBkZWNrLlxuICAgIGNvbnN0IHNwZWxscyA9IEFycmF5LmlzQXJyYXkoZGVjay5TcGVsbHMpID8gWy4uLmRlY2suU3BlbGxzXSA6IFtdO1xuICAgIGNvbnN0IHRpZXJQZXRzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmdbXT4gPSB7XG4gICAgICAxOiBbXSxcbiAgICAgIDI6IFtdLFxuICAgICAgMzogW10sXG4gICAgICA0OiBbXSxcbiAgICAgIDU6IFtdLFxuICAgICAgNjogW10sXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgbWluaW9uSWQgb2YgbWluaW9ucykge1xuICAgICAgY29uc3QgcGV0TWV0YSA9IFBFVFNfTUVUQV9CWV9JRC5nZXQobWluaW9uSWQpO1xuICAgICAgaWYgKCFwZXRNZXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRpZXJQZXRzW3BldE1ldGEudGllcl0pIHtcbiAgICAgICAgdGllclBldHNbcGV0TWV0YS50aWVyXS5wdXNoKHBldE1ldGEubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplVGllclBldHMgPSAocGV0czogc3RyaW5nW10pOiAoc3RyaW5nIHwgbnVsbClbXSA9PiB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcGV0cy5zbGljZSgwLCAxMCk7XG4gICAgICB3aGlsZSAobm9ybWFsaXplZC5sZW5ndGggPCAxMCkge1xuICAgICAgICBub3JtYWxpemVkLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICB9O1xuXG4gICAgbGV0IGRlY2tOYW1lID0gZGVjay5UaXRsZSB8fCAnQ3VzdG9tIFBhY2snO1xuICAgIGlmICh1c2VkTmFtZXMuaGFzKGRlY2tOYW1lKSkge1xuICAgICAgbGV0IHN1ZmZpeCA9IDI7XG4gICAgICB3aGlsZSAodXNlZE5hbWVzLmhhcyhgJHtkZWNrTmFtZX0gKCR7c3VmZml4fSlgKSkge1xuICAgICAgICBzdWZmaXggKz0gMTtcbiAgICAgIH1cbiAgICAgIGRlY2tOYW1lID0gYCR7ZGVja05hbWV9ICgke3N1ZmZpeH0pYDtcbiAgICB9XG4gICAgdXNlZE5hbWVzLmFkZChkZWNrTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogZGVja05hbWUsXG4gICAgICB0aWVyMVBldHM6IG5vcm1hbGl6ZVRpZXJQZXRzKHRpZXJQZXRzWzFdKSxcbiAgICAgIHRpZXIyUGV0czogbm9ybWFsaXplVGllclBldHModGllclBldHNbMl0pLFxuICAgICAgdGllcjNQZXRzOiBub3JtYWxpemVUaWVyUGV0cyh0aWVyUGV0c1szXSksXG4gICAgICB0aWVyNFBldHM6IG5vcm1hbGl6ZVRpZXJQZXRzKHRpZXJQZXRzWzRdKSxcbiAgICAgIHRpZXI1UGV0czogbm9ybWFsaXplVGllclBldHModGllclBldHNbNV0pLFxuICAgICAgdGllcjZQZXRzOiBub3JtYWxpemVUaWVyUGV0cyh0aWVyUGV0c1s2XSksXG4gICAgICBzcGVsbHMsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEN1c3RvbVBhY2tGcm9tRGVjayhcbiAgICBjdXN0b21QYWNrczogUmVwbGF5Q3VzdG9tUGFja1tdLFxuICAgIGRlY2s6IFJlcGxheURlY2tKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgKTogUmVwbGF5Q3VzdG9tUGFjayB8IG51bGwge1xuICAgIGlmICghZGVjaykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRlY2tJZCA9IGRlY2s/LklkICE9IG51bGwgPyBTdHJpbmcoZGVjay5JZCkgOiBudWxsO1xuICAgIGlmIChkZWNrSWQpIHtcbiAgICAgIGNvbnN0IGJ5SWQgPSBjdXN0b21QYWNrcy5maW5kKChwYWNrKSA9PiBwYWNrLmRlY2tJZCA9PT0gZGVja0lkKTtcbiAgICAgIGlmIChieUlkKSB7XG4gICAgICAgIHJldHVybiBieUlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlY2tDb250ZW50cyA9IHRoaXMuYnVpbGRDdXN0b21QYWNrRnJvbURlY2soZGVjaywgbmV3IFNldCgpKTtcbiAgICBpZiAoZGVja0NvbnRlbnRzKSB7XG4gICAgICBjb25zdCBieUNvbnRlbnRzID0gY3VzdG9tUGFja3MuZmluZCgocGFjaykgPT5cbiAgICAgICAgdGhpcy5jdXN0b21QYWNrQ29udGVudHNNYXRjaChwYWNrLCBkZWNrQ29udGVudHMpLFxuICAgICAgKTtcbiAgICAgIGlmIChieUNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBieUNvbnRlbnRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlY2tOYW1lID0gZGVjaz8uVGl0bGU7XG4gICAgaWYgKGRlY2tOYW1lKSB7XG4gICAgICByZXR1cm4gY3VzdG9tUGFja3MuZmluZCgocGFjaykgPT4gcGFjay5uYW1lID09PSBkZWNrTmFtZSkgfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGN1c3RvbVBhY2tDb250ZW50c01hdGNoKFxuICAgIHBhY2s6IFJlcGxheUN1c3RvbVBhY2ssXG4gICAgZGVja0NvbnRlbnRzOiBSZXBsYXlDdXN0b21QYWNrQ29yZSxcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGllcktleXMgPSBbXG4gICAgICAndGllcjFQZXRzJyxcbiAgICAgICd0aWVyMlBldHMnLFxuICAgICAgJ3RpZXIzUGV0cycsXG4gICAgICAndGllcjRQZXRzJyxcbiAgICAgICd0aWVyNVBldHMnLFxuICAgICAgJ3RpZXI2UGV0cycsXG4gICAgXSBhcyBjb25zdDtcblxuICAgIHJldHVybiAoXG4gICAgICB0aWVyS2V5cy5ldmVyeSgodGllcktleSkgPT5cbiAgICAgICAgdGhpcy5zdHJpbmdBcnJheXNNYXRjaChwYWNrW3RpZXJLZXldLCBkZWNrQ29udGVudHNbdGllcktleV0pLFxuICAgICAgKSAmJiB0aGlzLmN1c3RvbVBhY2tJdGVtc01hdGNoKHBhY2suc3BlbGxzLCBkZWNrQ29udGVudHMuc3BlbGxzKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGN1c3RvbVBhY2tJdGVtc01hdGNoKFxuICAgIGxlZnQ6IFJlYWRvbmx5QXJyYXk8Q3VzdG9tUGFja0l0ZW0+LFxuICAgIHJpZ2h0OiBSZWFkb25seUFycmF5PEN1c3RvbVBhY2tJdGVtPixcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGxlZnQubGVuZ3RoID09PSByaWdodC5sZW5ndGggJiZcbiAgICAgIGxlZnQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IHJpZ2h0W2luZGV4XSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpbmdBcnJheXNNYXRjaChcbiAgICBsZWZ0OiBSZWFkb25seUFycmF5PHN0cmluZyB8IG51bGw+LFxuICAgIHJpZ2h0OiBSZWFkb25seUFycmF5PHN0cmluZyB8IG51bGw+LFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbGVmdC5sZW5ndGggPT09IHJpZ2h0Lmxlbmd0aCAmJlxuICAgICAgbGVmdC5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcmlnaHRbaW5kZXhdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0cmlwRGVmYXVsdFZhbHVlcyhcbiAgICBzdGF0ZTogUmVwbGF5Q2FsY3VsYXRvclN0YXRlLFxuICApOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgY29uc3Qgc3RyaXBwZWRTdGF0ZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcblxuICAgIGlmIChzdGF0ZS5wbGF5ZXJQYWNrICE9PSAnVHVydGxlJykge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJQYWNrID0gc3RhdGUucGxheWVyUGFjaztcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wcG9uZW50UGFjayAhPT0gJ1R1cnRsZScpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRQYWNrID0gc3RhdGUub3Bwb25lbnRQYWNrO1xuICAgIH1cbiAgICBpZiAoc3RhdGUucGxheWVyVG95KSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclRveSA9IHN0YXRlLnBsYXllclRveTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllclRveUxldmVsICYmIHN0YXRlLnBsYXllclRveUxldmVsICE9PSAnMScpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUucGxheWVyVG95TGV2ZWwgPSBzdGF0ZS5wbGF5ZXJUb3lMZXZlbDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wcG9uZW50VG95KSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50VG95ID0gc3RhdGUub3Bwb25lbnRUb3k7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFRveUxldmVsICYmIHN0YXRlLm9wcG9uZW50VG95TGV2ZWwgIT09ICcxJykge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5vcHBvbmVudFRveUxldmVsID0gc3RhdGUub3Bwb25lbnRUb3lMZXZlbDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnR1cm4gIT09IDExKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnR1cm4gPSBzdGF0ZS50dXJuO1xuICAgIH1cbiAgICBpZiAoc3RhdGUucGxheWVyR29sZFNwZW50ICE9PSAxMCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5wbGF5ZXJHb2xkU3BlbnQgPSBzdGF0ZS5wbGF5ZXJHb2xkU3BlbnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudEdvbGRTcGVudCAhPT0gMTApIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRHb2xkU3BlbnQgPSBzdGF0ZS5vcHBvbmVudEdvbGRTcGVudDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllclJvbGxBbW91bnQgIT09IDQpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUucGxheWVyUm9sbEFtb3VudCA9IHN0YXRlLnBsYXllclJvbGxBbW91bnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFJvbGxBbW91bnQgIT09IDQpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRSb2xsQW1vdW50ID0gc3RhdGUub3Bwb25lbnRSb2xsQW1vdW50O1xuICAgIH1cbiAgICBpZiAoc3RhdGUucGxheWVyU3VtbW9uZWRBbW91bnQgIT09IDApIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUucGxheWVyU3VtbW9uZWRBbW91bnQgPSBzdGF0ZS5wbGF5ZXJTdW1tb25lZEFtb3VudDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wcG9uZW50U3VtbW9uZWRBbW91bnQgIT09IDApIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRTdW1tb25lZEFtb3VudCA9IHN0YXRlLm9wcG9uZW50U3VtbW9uZWRBbW91bnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5wbGF5ZXJMZXZlbDNTb2xkICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllckxldmVsM1NvbGQgPSBzdGF0ZS5wbGF5ZXJMZXZlbDNTb2xkO1xuICAgIH1cbiAgICBpZiAoc3RhdGUub3Bwb25lbnRMZXZlbDNTb2xkICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50TGV2ZWwzU29sZCA9IHN0YXRlLm9wcG9uZW50TGV2ZWwzU29sZDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50ICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50ID0gc3RhdGUucGxheWVyVHJhbnNmb3JtYXRpb25BbW91bnQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50ICE9PSAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLm9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQgPSBzdGF0ZS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5hbGxQZXRzKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLmFsbFBldHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUub2xkU3RvcmspIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub2xkU3RvcmsgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUudG9rZW5QZXRzKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnRva2VuUGV0cyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5rb21vZG9TaHVmZmxlKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLmtvbW9kb1NodWZmbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUubWFuYSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5tYW5hID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnNlZWQgIT0gbnVsbCkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5zZWVkID0gc3RhdGUuc2VlZDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnRyaWdnZXJzQ29uc3VtZWQpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUudHJpZ2dlcnNDb25zdW1lZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5mb29kc0VhdGVuKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLmZvb2RzRWF0ZW4gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuc2hvd0FkdmFuY2VkKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnNob3dBZHZhbmNlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5zaG93VHJpZ2dlck5hbWVzSW5Mb2dzKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnNob3dUcmlnZ2VyTmFtZXNJbkxvZ3MgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuc2hvd1Bvc2l0aW9uYWxBcmdzSW5Mb2dzID09PSBmYWxzZSkge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5zaG93UG9zaXRpb25hbEFyZ3NJbkxvZ3MgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFpbG1lbnRFcXVpcG1lbnQpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUuYWlsbWVudEVxdWlwbWVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxvZ0ZpbHRlcikge1xuICAgICAgc3RyaXBwZWRTdGF0ZS5sb2dGaWx0ZXIgPSBzdGF0ZS5sb2dGaWx0ZXI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jdXN0b21QYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLmN1c3RvbVBhY2tzID0gc3RhdGUuY3VzdG9tUGFja3M7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBQZXREZWZhdWx0cyA9IChwZXQ6IFBldENvbmZpZyB8IG51bGwpOiBTdHJpcHBlZFJlcGxheVBldCB8IG51bGwgPT4ge1xuICAgICAgaWYgKCFwZXQgfHwgIXBldC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdQZXQ6IFN0cmlwcGVkUmVwbGF5UGV0ID0geyBuYW1lOiBwZXQubmFtZSB9O1xuXG4gICAgICBpZiAodHlwZW9mIHBldC5hdHRhY2sgPT09ICdudW1iZXInICYmIHBldC5hdHRhY2sgIT09IDApIHtcbiAgICAgICAgbmV3UGV0LmF0dGFjayA9IHBldC5hdHRhY2s7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBldC5oZWFsdGggPT09ICdudW1iZXInICYmIHBldC5oZWFsdGggIT09IDApIHtcbiAgICAgICAgbmV3UGV0LmhlYWx0aCA9IHBldC5oZWFsdGg7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBldC5leHAgPT09ICdudW1iZXInICYmIHBldC5leHAgIT09IDApIHtcbiAgICAgICAgbmV3UGV0LmV4cCA9IHBldC5leHA7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBldC5tYW5hID09PSAnbnVtYmVyJyAmJiBwZXQubWFuYSAhPT0gMCkge1xuICAgICAgICBuZXdQZXQubWFuYSA9IHBldC5tYW5hO1xuICAgICAgfVxuICAgICAgaWYgKHBldC5lcXVpcG1lbnQpIHtcbiAgICAgICAgbmV3UGV0LmVxdWlwbWVudCA9IHBldC5lcXVpcG1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAocGV0LnRyaWdnZXJzQ29uc3VtZWQpIHtcbiAgICAgICAgbmV3UGV0LnRyaWdnZXJzQ29uc3VtZWQgPSBwZXQudHJpZ2dlcnNDb25zdW1lZDtcbiAgICAgIH1cbiAgICAgIGlmIChwZXQuZm9vZHNFYXRlbikge1xuICAgICAgICBuZXdQZXQuZm9vZHNFYXRlbiA9IHBldC5mb29kc0VhdGVuO1xuICAgICAgfVxuICAgICAgaWYgKHBldC5haWxtZW50c0NvdW50KSB7XG4gICAgICAgIG5ld1BldC5haWxtZW50c0NvdW50ID0gcGV0LmFpbG1lbnRzQ291bnQ7XG4gICAgICB9XG4gICAgICBpZiAocGV0LmZyaWVuZHNIdXJ0QmVmb3JlQmF0dGxlKSB7XG4gICAgICAgIG5ld1BldC5mcmllbmRzSHVydEJlZm9yZUJhdHRsZSA9IHBldC5mcmllbmRzSHVydEJlZm9yZUJhdHRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChwZXQuYmVsdWdhU3dhbGxvd2VkUGV0ICE9IG51bGwpIHtcbiAgICAgICAgbmV3UGV0LmJlbHVnYVN3YWxsb3dlZFBldCA9IHBldC5iZWx1Z2FTd2FsbG93ZWRQZXQ7XG4gICAgICB9XG4gICAgICBBQk9NSU5BVElPTl9TTE9UX0ZJRUxEUy5mb3JFYWNoKChzbG90RmllbGRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN3YWxsb3dlZFBldCA9IHBldFtzbG90RmllbGRzLnBldF07XG4gICAgICAgIGlmIChzd2FsbG93ZWRQZXQgIT0gbnVsbCkge1xuICAgICAgICAgIG5ld1BldFtzbG90RmllbGRzLnBldF0gPSBzd2FsbG93ZWRQZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3dhbGxvd2VkTGV2ZWwgPSBwZXRbc2xvdEZpZWxkcy5sZXZlbF07XG4gICAgICAgIGlmICh0eXBlb2Ygc3dhbGxvd2VkTGV2ZWwgPT09ICdudW1iZXInICYmIHN3YWxsb3dlZExldmVsICE9PSAxKSB7XG4gICAgICAgICAgbmV3UGV0W3Nsb3RGaWVsZHMubGV2ZWxdID0gc3dhbGxvd2VkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBldC50aW1lc0h1cnQpIHtcbiAgICAgICAgbmV3UGV0LnRpbWVzSHVydCA9IHBldC50aW1lc0h1cnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdQZXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0cmlwcGVkUGxheWVyUGV0cyA9IHN0YXRlLnBsYXllclBldHMubWFwKHN0cmlwUGV0RGVmYXVsdHMpO1xuICAgIGlmIChzdHJpcHBlZFBsYXllclBldHMuc29tZSgocGV0KSA9PiBwZXQgIT09IG51bGwpKSB7XG4gICAgICBzdHJpcHBlZFN0YXRlLnBsYXllclBldHMgPSBzdHJpcHBlZFBsYXllclBldHM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBwZWRPcHBvbmVudFBldHMgPSBzdGF0ZS5vcHBvbmVudFBldHMubWFwKHN0cmlwUGV0RGVmYXVsdHMpO1xuICAgIGlmIChzdHJpcHBlZE9wcG9uZW50UGV0cy5zb21lKChwZXQpID0+IHBldCAhPT0gbnVsbCkpIHtcbiAgICAgIHN0cmlwcGVkU3RhdGUub3Bwb25lbnRQZXRzID0gc3RyaXBwZWRPcHBvbmVudFBldHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmlwcGVkU3RhdGU7XG4gIH1cblxuICBwcml2YXRlIHRydW5jYXRlS2V5cyhkYXRhOiB1bmtub3duKTogdW5rbm93biB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gdGhpcy50cnVuY2F0ZUtleXMoaXRlbSkpO1xuICAgIH1cbiAgICBpZiAoaXNSZWNvcmQoZGF0YSkpIHtcbiAgICAgIGNvbnN0IG5ld09iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IG5ld0tleSA9IEtFWV9NQVBba2V5XSB8fCBrZXk7XG4gICAgICAgIG5ld09ialtuZXdLZXldID0gdGhpcy50cnVuY2F0ZUtleXMoZGF0YVtrZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUZWFtUHJlc2V0IH0gZnJvbSAnLi90ZWFtLXByZXNldHMuc2VydmljZSc7XG5cbnR5cGUgVGVhbVByZXNldFBldCA9IFRlYW1QcmVzZXRbJ3BldHMnXVtudW1iZXJdO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFRlYW1zKCk6IFRlYW1QcmVzZXRbXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6ICdkZWZhdWx0LW1heC1kYW1hZ2UnLFxuICAgICAgbmFtZTogJzEwMDAgTWFuYScsXG4gICAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICB0b3lOYW1lOiAnTnV0Y3JhY2tlcicsXG4gICAgICB0b3lMZXZlbDogMyxcbiAgICAgIHBldHM6IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCk6IFRlYW1QcmVzZXRQZXQgPT4gKHtcbiAgICAgICAgbmFtZTogJ1NlYSBTZXJwZW50JyxcbiAgICAgICAgYXR0YWNrOiA1MCxcbiAgICAgICAgaGVhbHRoOiA1MCxcbiAgICAgICAgZXhwOiA1LFxuICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NvY29udXQnIH0sXG4gICAgICAgIGJlbHVnYVN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgbWFuYTogNTAsXG4gICAgICAgIHRyaWdnZXJzQ29uc3VtZWQ6IDAsXG4gICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogbnVsbCxcbiAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiBudWxsLFxuICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6IG51bGwsXG4gICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6IDAsXG4gICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgZXF1aXBtZW50VXNlczogbnVsbCxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGVmYXVsdC1ncmVhdC1zaXgnLFxuICAgICAgbmFtZTogJ1RoZSBHcmVhdCBTaXgnLFxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgdG95TmFtZTogJ0V2aWwgQm9vaycsXG4gICAgICB0b3lMZXZlbDogMyxcbiAgICAgIHBldHM6IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCk6IFRlYW1QcmVzZXRQZXQgPT4gKHtcbiAgICAgICAgbmFtZTogJ0JlbHVnYSBXaGFsZScsXG4gICAgICAgIGF0dGFjazogNTAsXG4gICAgICAgIGhlYWx0aDogNTAsXG4gICAgICAgIGV4cDogNSxcbiAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdXaGl0ZSBPa3JhJyB9LFxuICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6ICdHcmVhdCBPbmUnLFxuICAgICAgICBzYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiBudWxsLFxuICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6IG51bGwsXG4gICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogbnVsbCxcbiAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAwLFxuICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICBlcXVpcG1lbnRVc2VzOiBudWxsLFxuICAgICAgfSkpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkZWZhdWx0LWFiaWxpdHktcmVtb3ZhbCcsXG4gICAgICBuYW1lOiAnT3JjYSBTY2FtJyxcbiAgICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgIHBsYXllclRveU5hbWU6ICdQYW5kb3JhcyBCb3gnLFxuICAgICAgcGxheWVyVG95TGV2ZWw6IDEsXG4gICAgICBvcHBvbmVudFRveU5hbWU6IG51bGwsXG4gICAgICBvcHBvbmVudFRveUxldmVsOiAxLFxuICAgICAgcGxheWVySGFyZFRveTogbnVsbCxcbiAgICAgIHBsYXllckhhcmRUb3lMZXZlbDogMSxcbiAgICAgIG9wcG9uZW50SGFyZFRveTogbnVsbCxcbiAgICAgIG9wcG9uZW50SGFyZFRveUxldmVsOiAxLFxuICAgICAgdHVybjogMTEsXG4gICAgICBwbGF5ZXJHb2xkU3BlbnQ6IDEwLFxuICAgICAgb3Bwb25lbnRHb2xkU3BlbnQ6IDEwLFxuICAgICAgYWxsUGV0czogdHJ1ZSxcbiAgICAgIHRva2VuUGV0czogdHJ1ZSxcbiAgICAgIGtvbW9kb1NodWZmbGU6IGZhbHNlLFxuICAgICAgbWFuYTogdHJ1ZSxcbiAgICAgIHBsYWluQ29waWVzOiBmYWxzZSxcbiAgICAgIHRyaWdnZXJzQ29uc3VtZWQ6IGZhbHNlLFxuICAgICAgY2hhbmdlRXF1aXBtZW50VXNlczogZmFsc2UsXG4gICAgICBwbGF5ZXJSb2xsQW1vdW50OiAzLFxuICAgICAgb3Bwb25lbnRSb2xsQW1vdW50OiAxLFxuICAgICAgcGxheWVyTGV2ZWwzU29sZDogMCxcbiAgICAgIG9wcG9uZW50TGV2ZWwzU29sZDogMCxcbiAgICAgIHBsYXllclN1bW1vbmVkQW1vdW50OiAwLFxuICAgICAgb3Bwb25lbnRTdW1tb25lZEFtb3VudDogMCxcbiAgICAgIHBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50OiAxMDAsXG4gICAgICBvcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50OiAxMDAsXG4gICAgICBwZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2lhbnQgUGFuZ2FzaXVzJyxcbiAgICAgICAgICBhdHRhY2s6IDQ5LFxuICAgICAgICAgIGhlYWx0aDogMSxcbiAgICAgICAgICBleHA6IDEsXG4gICAgICAgICAgZXF1aXBtZW50OiBudWxsLFxuICAgICAgICAgIGJlbHVnYVN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBzYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIG1hbmE6IDUwLFxuICAgICAgICAgIHRyaWdnZXJzQ29uc3VtZWQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiBudWxsLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogbnVsbCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6IG51bGwsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDEsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDEsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWw6IDEsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgICB0aW1lc0h1cnQ6IDAsXG4gICAgICAgICAgZXF1aXBtZW50VXNlczogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBYm9taW5hdGlvbicsXG4gICAgICAgICAgYXR0YWNrOiAxMDAsXG4gICAgICAgICAgaGVhbHRoOiAxLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NodXJyb3MnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdPcmNhJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnUmF0JyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgICBlcXVpcG1lbnRVc2VzOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Fib21pbmF0aW9uJyxcbiAgICAgICAgICBhdHRhY2s6IDUwLFxuICAgICAgICAgIGhlYWx0aDogMSxcbiAgICAgICAgICBleHA6IDUsXG4gICAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdTaWxseScgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ1JhdCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnUGhvZW5peCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnR2lhbnQgUGFuZ2FzaXVzJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgICBlcXVpcG1lbnRVc2VzOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Fib21pbmF0aW9uJyxcbiAgICAgICAgICBhdHRhY2s6IDEwMCxcbiAgICAgICAgICBoZWFsdGg6IDEsXG4gICAgICAgICAgZXhwOiA1LFxuICAgICAgICAgIGVxdWlwbWVudDogeyBuYW1lOiAnQ2h1cnJvcycgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ0JlaGVtb3RoJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdSYXQnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogJ0FsYmF0cm9zcycsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgICB0aW1lc0h1cnQ6IDAsXG4gICAgICAgICAgZXF1aXBtZW50VXNlczogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBYm9taW5hdGlvbicsXG4gICAgICAgICAgYXR0YWNrOiAxMDAsXG4gICAgICAgICAgaGVhbHRoOiAxMDAsXG4gICAgICAgICAgZXhwOiA1LFxuICAgICAgICAgIGVxdWlwbWVudDogeyBuYW1lOiAnQ2FzaGV3IE51dCcgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ0JlaGVtb3RoJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdQYW50aGVyJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6ICdHdWluZWFmb3dsJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgICBlcXVpcG1lbnRVc2VzOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGVmYXVsdC1zb2Itc25pcGVzJyxcbiAgICAgIG5hbWU6ICdTb0IgU25pcGVzJyxcbiAgICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgIHRveU5hbWU6ICdOdXRjcmFja2VyJyxcbiAgICAgIHRveUxldmVsOiAzLFxuICAgICAgcGV0czogQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoKTogVGVhbVByZXNldFBldCA9PiAoe1xuICAgICAgICBuYW1lOiAnTGVvcGFyZCcsXG4gICAgICAgIGF0dGFjazogNTAsXG4gICAgICAgIGhlYWx0aDogNTAsXG4gICAgICAgIGV4cDogNSxcbiAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdDaHVycm9zJyB9LFxuICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgIG1hbmE6IDUwLFxuICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6IG51bGwsXG4gICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogbnVsbCxcbiAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiBudWxsLFxuICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICB0aW1lc0h1cnQ6IDAsXG4gICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICB9KSksXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RlZmF1bHQtaW5maW5pdGUtZGFtYWdlJyxcbiAgICAgIG5hbWU6ICdJbmZpbml0ZSBEYW1hZ2UnLFxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgdG95TmFtZTogJ051dGNyYWNrZXInLFxuICAgICAgdG95TGV2ZWw6IDEsXG4gICAgICByb2xsQW1vdW50OiA0NyxcbiAgICAgIHRyYW5zZm9ybWF0aW9uQW1vdW50OiAyMDAsXG4gICAgICBwZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2lhbnQgUGFuZ2FzaXVzJyxcbiAgICAgICAgICBhdHRhY2s6IDUwLFxuICAgICAgICAgIGhlYWx0aDogMSxcbiAgICAgICAgICBleHA6IDUsXG4gICAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdNdXNocm9vbScgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogbnVsbCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6IG51bGwsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiBudWxsLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWJvbWluYXRpb24nLFxuICAgICAgICAgIGF0dGFjazogMTAwLFxuICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NodXJyb3MnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnTGVvcGFyZCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnQmVsdWdhIFdoYWxlJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdHaWFudCBQYW5nYXNpdXMnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWJvbWluYXRpb24nLFxuICAgICAgICAgIGF0dGFjazogMTAwLFxuICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0Nhc2hldyBOdXQnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnTGVvcGFyZCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnQmVsdWdhIFdoYWxlJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdOZXNzaWUnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWJvbWluYXRpb24nLFxuICAgICAgICAgIGF0dGFjazogMTAwLFxuICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NodXJyb3MnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnTGVvcGFyZCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnU2FiZXJ0b290aCBUaWdlcicsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6IDI1LFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWJvbWluYXRpb24nLFxuICAgICAgICAgIGF0dGFjazogMTAwLFxuICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NodXJyb3MnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnTGVvcGFyZCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnQmVsdWdhIFdoYWxlJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNCZWx1Z2FTd2FsbG93ZWRQZXQ6ICdTbHVnJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogMCxcbiAgICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgICBlcXVpcG1lbnRVc2VzOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGVmYXVsdC1sYXllcnMnLFxuICAgICAgbmFtZTogJ0xheWVycycsXG4gICAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICBwbGF5ZXJUb3lOYW1lOiAnTnV0Y3JhY2tlcicsXG4gICAgICBwbGF5ZXJUb3lMZXZlbDogMyxcbiAgICAgIG9wcG9uZW50VG95TmFtZTogJ051dGNyYWNrZXInLFxuICAgICAgb3Bwb25lbnRUb3lMZXZlbDogMyxcbiAgICAgIHBsYXllckhhcmRUb3k6IG51bGwsXG4gICAgICBwbGF5ZXJIYXJkVG95TGV2ZWw6IDEsXG4gICAgICBvcHBvbmVudEhhcmRUb3k6IG51bGwsXG4gICAgICBvcHBvbmVudEhhcmRUb3lMZXZlbDogMSxcbiAgICAgIHR1cm46IDEzLFxuICAgICAgcGxheWVyR29sZFNwZW50OiAxMyxcbiAgICAgIG9wcG9uZW50R29sZFNwZW50OiAxMyxcbiAgICAgIGFsbFBldHM6IHRydWUsXG4gICAgICB0b2tlblBldHM6IHRydWUsXG4gICAgICBrb21vZG9TaHVmZmxlOiBmYWxzZSxcbiAgICAgIG1hbmE6IHRydWUsXG4gICAgICBwbGFpbkNvcGllczogZmFsc2UsXG4gICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiBmYWxzZSxcbiAgICAgIGNoYW5nZUVxdWlwbWVudFVzZXM6IGZhbHNlLFxuICAgICAgcGxheWVyUm9sbEFtb3VudDogMTAwMCxcbiAgICAgIG9wcG9uZW50Um9sbEFtb3VudDogMTAwMCxcbiAgICAgIHBsYXllckxldmVsM1NvbGQ6IDEwMDAsXG4gICAgICBvcHBvbmVudExldmVsM1NvbGQ6IDEwMDAsXG4gICAgICBwbGF5ZXJTdW1tb25lZEFtb3VudDogMTAwMCxcbiAgICAgIG9wcG9uZW50U3VtbW9uZWRBbW91bnQ6IDEwMDAsXG4gICAgICBwbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDogMTAwMCxcbiAgICAgIG9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQ6IDEwMDAsXG4gICAgICBwZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2lhbnQgUGFuZ2FzaXVzJyxcbiAgICAgICAgICBhdHRhY2s6IDUwLFxuICAgICAgICAgIGhlYWx0aDogMSxcbiAgICAgICAgICBleHA6IDUsXG4gICAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdNdXNocm9vbScgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogbnVsbCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6IG51bGwsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiBudWxsLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUxldmVsOiAxLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOiAxLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOiAxLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQWJvbWluYXRpb24nLFxuICAgICAgICAgIGF0dGFjazogMTAwLFxuICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgIGV4cDogNSxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHsgbmFtZTogJ0NodXJyb3MnIH0sXG4gICAgICAgICAgYmVsdWdhU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIHNhcmNhc3RpY0ZyaW5nZWhlYWRTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgbWFuYTogNTAsXG4gICAgICAgICAgdHJpZ2dlcnNDb25zdW1lZDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDE6ICdCZWhlbW90aCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyOiAnUmF0JyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6ICdTYWJlcnRvb3RoIFRpZ2VyJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogNTAsXG4gICAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgICB0aW1lc0h1cnQ6IDAsXG4gICAgICAgICAgZXF1aXBtZW50VXNlczogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBYm9taW5hdGlvbicsXG4gICAgICAgICAgYXR0YWNrOiAxMDAsXG4gICAgICAgICAgaGVhbHRoOiAxMDAsXG4gICAgICAgICAgZXhwOiA1LFxuICAgICAgICAgIGVxdWlwbWVudDogeyBuYW1lOiAnQ2FzaGV3IE51dCcgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ0JlaGVtb3RoJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdHdWluZWFmb3dsJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDM6ICdWYXF1aXRhJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJMZXZlbDogMSxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNMZXZlbDogMyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDFUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M1RpbWVzSHVydDogNTAsXG4gICAgICAgICAgYmF0dGxlc0ZvdWdodDogMCxcbiAgICAgICAgICB0aW1lc0h1cnQ6IDAsXG4gICAgICAgICAgZXF1aXBtZW50VXNlczogMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBYm9taW5hdGlvbicsXG4gICAgICAgICAgYXR0YWNrOiAxMDAsXG4gICAgICAgICAgaGVhbHRoOiAxMDAsXG4gICAgICAgICAgZXhwOiA1LFxuICAgICAgICAgIGVxdWlwbWVudDogeyBuYW1lOiAnQ2h1cnJvcycgfSxcbiAgICAgICAgICBiZWx1Z2FTd2FsbG93ZWRQZXQ6IG51bGwsXG4gICAgICAgICAgc2FyY2FzdGljRnJpbmdlaGVhZFN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBtYW5hOiA1MCxcbiAgICAgICAgICB0cmlnZ2Vyc0NvbnN1bWVkOiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MTogJ0JlaGVtb3RoJyxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDI6ICdSYXQnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MzogJ1ZhcXVpdGEnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MUxldmVsOiAzLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MkxldmVsOiAzLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0M0xldmVsOiAzLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MVRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDJUaW1lc0h1cnQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzVGltZXNIdXJ0OiA1MCxcbiAgICAgICAgICBiYXR0bGVzRm91Z2h0OiAwLFxuICAgICAgICAgIHRpbWVzSHVydDogMCxcbiAgICAgICAgICBlcXVpcG1lbnRVc2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Fib21pbmF0aW9uJyxcbiAgICAgICAgICBhdHRhY2s6IDEwMCxcbiAgICAgICAgICBoZWFsdGg6IDEwMCxcbiAgICAgICAgICBleHA6IDUsXG4gICAgICAgICAgZXF1aXBtZW50OiB7IG5hbWU6ICdDaHVycm9zJyB9LFxuICAgICAgICAgIGJlbHVnYVN3YWxsb3dlZFBldDogbnVsbCxcbiAgICAgICAgICBzYXJjYXN0aWNGcmluZ2VoZWFkU3dhbGxvd2VkUGV0OiBudWxsLFxuICAgICAgICAgIG1hbmE6IDUwLFxuICAgICAgICAgIHRyaWdnZXJzQ29uc3VtZWQ6IDAsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxOiAnQmVoZW1vdGgnLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MjogJ1JhdCcsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzOiAnU2FiZXJ0b290aCBUaWdlcicsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQyTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQzTGV2ZWw6IDMsXG4gICAgICAgICAgYWJvbWluYXRpb25Td2FsbG93ZWRQZXQxVGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGFib21pbmF0aW9uU3dhbGxvd2VkUGV0MlRpbWVzSHVydDogMCxcbiAgICAgICAgICBhYm9taW5hdGlvblN3YWxsb3dlZFBldDNUaW1lc0h1cnQ6IDUwLFxuICAgICAgICAgIGJhdHRsZXNGb3VnaHQ6IDAsXG4gICAgICAgICAgdGltZXNIdXJ0OiAwLFxuICAgICAgICAgIGVxdWlwbWVudFVzZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG4iLCAiaW1wb3J0IHtcbiAgU2ltdWxhdGlvbkNvbmZpZyxcbiAgU2ltdWxhdGlvblJlc3VsdCxcbiAgUGV0Q29uZmlnLFxufSBmcm9tICcuLi9zcmMvYXBwL2RvbWFpbi9pbnRlcmZhY2VzL3NpbXVsYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBydW5IZWFkbGVzc1NpbXVsYXRpb24gfSBmcm9tICcuL3NpbXVsYXRlJztcbmltcG9ydCB7IGdldERlZmF1bHRUZWFtcyB9IGZyb20gJy4uL3NyYy9hcHAvaW50ZWdyYXRpb25zL3RlYW0tcHJlc2V0cy5kZWZhdWx0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVhbVNpZGVDb25maWcge1xuICBwYWNrPzogc3RyaW5nO1xuICB0b3k/OiBzdHJpbmcgfCBudWxsO1xuICB0b3lMZXZlbD86IG51bWJlcjtcbiAgaGFyZFRveT86IHN0cmluZyB8IG51bGw7XG4gIGhhcmRUb3lMZXZlbD86IG51bWJlcjtcbiAgdHVybj86IG51bWJlcjtcbiAgZ29sZFNwZW50PzogbnVtYmVyO1xuICByb2xsQW1vdW50PzogbnVtYmVyO1xuICBzdW1tb25lZEFtb3VudD86IG51bWJlcjtcbiAgbGV2ZWwzU29sZD86IG51bWJlcjtcbiAgdHJhbnNmb3JtYXRpb25BbW91bnQ/OiBudW1iZXI7XG4gIHBldHM6IChQZXRDb25maWcgfCBudWxsKVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWx1YXRlUmVxdWVzdCB7XG4gIGNhbmRpZGF0ZTogVGVhbVNpZGVDb25maWc7XG4gIG9wcG9uZW50czogVGVhbVNpZGVDb25maWdbXTtcbiAgc2ltdWxhdGlvbnNQZXJNYXRjaHVwPzogbnVtYmVyO1xuICBiYXNlQ29uZmlnPzogUGFydGlhbDxTaW11bGF0aW9uQ29uZmlnPjtcbiAgc2VlZD86IG51bWJlciB8IG51bGw7XG4gIHZhcmlhbmNlUGVuYWx0eT86IG51bWJlcjtcbiAgbWF0Y2h1cFdlaWdodHM/OiBudW1iZXJbXTtcbiAgaW5jbHVkZU1hdGNodXBzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWF0ZUJhdGNoUmVxdWVzdCB7XG4gIGNhbmRpZGF0ZXM6IFRlYW1TaWRlQ29uZmlnW107XG4gIG9wcG9uZW50czogVGVhbVNpZGVDb25maWdbXTtcbiAgc2ltdWxhdGlvbnNQZXJNYXRjaHVwPzogbnVtYmVyO1xuICBiYXNlQ29uZmlnPzogUGFydGlhbDxTaW11bGF0aW9uQ29uZmlnPjtcbiAgc2VlZD86IG51bWJlciB8IG51bGw7XG4gIHZhcmlhbmNlUGVuYWx0eT86IG51bWJlcjtcbiAgbWF0Y2h1cFdlaWdodHM/OiBudW1iZXJbXTtcbiAgaW5jbHVkZU1hdGNodXBzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWF0ZWRNYXRjaHVwIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgd2luczogbnVtYmVyO1xuICBsb3NzZXM6IG51bWJlcjtcbiAgZHJhd3M6IG51bWJlcjtcbiAgd2luUmF0ZTogbnVtYmVyO1xuICB3ZWlnaHRlZFdpblJhdGU6IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZhbHVhdGVSZXNwb25zZSB7XG4gIGZpdG5lc3M6IG51bWJlcjtcbiAgbWVhbldpblJhdGU6IG51bWJlcjtcbiAgd2VpZ2h0ZWRXaW5SYXRlOiBudW1iZXI7XG4gIHN0ZERldjogbnVtYmVyO1xuICB2YXJpYW5jZVBlbmFsdHk6IG51bWJlcjtcbiAgY29uZmlkZW5jZTk1OiBudW1iZXI7XG4gIHNpbXVsYXRpb25zUGVyTWF0Y2h1cDogbnVtYmVyO1xuICBvcHBvbmVudENvdW50OiBudW1iZXI7XG4gIHRvdGFsQmF0dGxlczogbnVtYmVyO1xuICBtYXRjaHVwcz86IEV2YWx1YXRlZE1hdGNodXBbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRQb29sRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRlYW06IFRlYW1TaWRlQ29uZmlnO1xufVxuXG5mdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUocGFyc2VkKSkge1xuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBkZWVwQ2xvbmU8VD4odmFsdWU6IFQpOiBUIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGV0KHBldDogdW5rbm93bik6IFBldENvbmZpZyB8IG51bGwge1xuICBpZiAoIWlzUmVjb3JkKHBldCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBuYW1lID0gdHlwZW9mIHBldC5uYW1lID09PSAnc3RyaW5nJyA/IHBldC5uYW1lIDogJyc7XG4gIGlmICghbmFtZS50cmltKCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHsgLi4ucGV0LCBuYW1lIH07XG4gIGlmICgnZXF1aXBtZW50JyBpbiBub3JtYWxpemVkKSB7XG4gICAgY29uc3QgcmF3RXF1aXBtZW50ID0gbm9ybWFsaXplZC5lcXVpcG1lbnQ7XG4gICAgaWYgKHR5cGVvZiByYXdFcXVpcG1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub3JtYWxpemVkLmVxdWlwbWVudCA9IHJhd0VxdWlwbWVudC50cmltKClcbiAgICAgICAgPyB7IG5hbWU6IHJhd0VxdWlwbWVudC50cmltKCkgfVxuICAgICAgICA6IG51bGw7XG4gICAgfSBlbHNlIGlmIChpc1JlY29yZChyYXdFcXVpcG1lbnQpKSB7XG4gICAgICBjb25zdCBlcXVpcG1lbnROYW1lID1cbiAgICAgICAgdHlwZW9mIHJhd0VxdWlwbWVudC5uYW1lID09PSAnc3RyaW5nJyA/IHJhd0VxdWlwbWVudC5uYW1lLnRyaW0oKSA6ICcnO1xuICAgICAgbm9ybWFsaXplZC5lcXVpcG1lbnQgPSBlcXVpcG1lbnROYW1lID8geyBuYW1lOiBlcXVpcG1lbnROYW1lIH0gOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWxpemVkLmVxdWlwbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkIGFzIFBldENvbmZpZztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGV0TGlzdChcbiAgcGV0czogdW5rbm93bixcbiAgdGFyZ2V0TGVuZ3RoOiBudW1iZXIgPSA1LFxuKTogKFBldENvbmZpZyB8IG51bGwpW10ge1xuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShwZXRzKSA/IHBldHMgOiBbXTtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGxpc3Quc2xpY2UoMCwgdGFyZ2V0TGVuZ3RoKS5tYXAoKHBldCkgPT4gbm9ybWFsaXplUGV0KHBldCkpO1xuICB3aGlsZSAobm9ybWFsaXplZC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBub3JtYWxpemVkLnB1c2gobnVsbCk7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRlYW1TaWRlKGlucHV0OiB1bmtub3duKTogVGVhbVNpZGVDb25maWcge1xuICBjb25zdCBzaWRlID0gaXNSZWNvcmQoaW5wdXQpID8gaW5wdXQgOiB7fTtcbiAgcmV0dXJuIHtcbiAgICBwYWNrOiB0eXBlb2Ygc2lkZS5wYWNrID09PSAnc3RyaW5nJyAmJiBzaWRlLnBhY2sudHJpbSgpXG4gICAgICA/IHNpZGUucGFjay50cmltKClcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHRveTogdHlwZW9mIHNpZGUudG95ID09PSAnc3RyaW5nJyA/IHNpZGUudG95IDogc2lkZS50b3kgPT09IG51bGwgPyBudWxsIDogdW5kZWZpbmVkLFxuICAgIHRveUxldmVsOlxuICAgICAgc2lkZS50b3lMZXZlbCA9PSBudWxsID8gdW5kZWZpbmVkIDogTWF0aC5tYXgoMSwgTWF0aC50cnVuYyhwYXJzZU51bWJlcihzaWRlLnRveUxldmVsLCAxKSkpLFxuICAgIGhhcmRUb3k6XG4gICAgICB0eXBlb2Ygc2lkZS5oYXJkVG95ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHNpZGUuaGFyZFRveVxuICAgICAgICA6IHNpZGUuaGFyZFRveSA9PT0gbnVsbFxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgIGhhcmRUb3lMZXZlbDpcbiAgICAgIHNpZGUuaGFyZFRveUxldmVsID09IG51bGxcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBNYXRoLm1heCgxLCBNYXRoLnRydW5jKHBhcnNlTnVtYmVyKHNpZGUuaGFyZFRveUxldmVsLCAxKSkpLFxuICAgIHR1cm46XG4gICAgICBzaWRlLnR1cm4gPT0gbnVsbFxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IE1hdGgubWF4KDEsIE1hdGgudHJ1bmMocGFyc2VOdW1iZXIoc2lkZS50dXJuLCAxMSkpKSxcbiAgICBnb2xkU3BlbnQ6XG4gICAgICBzaWRlLmdvbGRTcGVudCA9PSBudWxsXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC50cnVuYyhwYXJzZU51bWJlcihzaWRlLmdvbGRTcGVudCwgMTApKSksXG4gICAgcm9sbEFtb3VudDpcbiAgICAgIHNpZGUucm9sbEFtb3VudCA9PSBudWxsXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC50cnVuYyhwYXJzZU51bWJlcihzaWRlLnJvbGxBbW91bnQsIDQpKSksXG4gICAgc3VtbW9uZWRBbW91bnQ6XG4gICAgICBzaWRlLnN1bW1vbmVkQW1vdW50ID09IG51bGxcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLnRydW5jKHBhcnNlTnVtYmVyKHNpZGUuc3VtbW9uZWRBbW91bnQsIDApKSksXG4gICAgbGV2ZWwzU29sZDpcbiAgICAgIHNpZGUubGV2ZWwzU29sZCA9PSBudWxsXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC50cnVuYyhwYXJzZU51bWJlcihzaWRlLmxldmVsM1NvbGQsIDApKSksXG4gICAgdHJhbnNmb3JtYXRpb25BbW91bnQ6XG4gICAgICBzaWRlLnRyYW5zZm9ybWF0aW9uQW1vdW50ID09IG51bGxcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLnRydW5jKHBhcnNlTnVtYmVyKHNpZGUudHJhbnNmb3JtYXRpb25BbW91bnQsIDApKSksXG4gICAgcGV0czogbm9ybWFsaXplUGV0TGlzdChzaWRlLnBldHMpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U2ltdWxhdGlvbkNvbmZpZygpOiBTaW11bGF0aW9uQ29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJQYWNrOiAnVHVydGxlJyxcbiAgICBvcHBvbmVudFBhY2s6ICdUdXJ0bGUnLFxuICAgIHBsYXllclRveTogbnVsbCxcbiAgICBwbGF5ZXJUb3lMZXZlbDogMSxcbiAgICBwbGF5ZXJIYXJkVG95OiBudWxsLFxuICAgIHBsYXllckhhcmRUb3lMZXZlbDogMSxcbiAgICBvcHBvbmVudFRveTogbnVsbCxcbiAgICBvcHBvbmVudFRveUxldmVsOiAxLFxuICAgIG9wcG9uZW50SGFyZFRveTogbnVsbCxcbiAgICBvcHBvbmVudEhhcmRUb3lMZXZlbDogMSxcbiAgICB0dXJuOiAxMSxcbiAgICBwbGF5ZXJHb2xkU3BlbnQ6IDEwLFxuICAgIG9wcG9uZW50R29sZFNwZW50OiAxMCxcbiAgICBwbGF5ZXJSb2xsQW1vdW50OiA0LFxuICAgIG9wcG9uZW50Um9sbEFtb3VudDogNCxcbiAgICBwbGF5ZXJTdW1tb25lZEFtb3VudDogMCxcbiAgICBvcHBvbmVudFN1bW1vbmVkQW1vdW50OiAwLFxuICAgIHBsYXllckxldmVsM1NvbGQ6IDAsXG4gICAgb3Bwb25lbnRMZXZlbDNTb2xkOiAwLFxuICAgIHBsYXllclRyYW5zZm9ybWF0aW9uQW1vdW50OiAwLFxuICAgIG9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQ6IDAsXG4gICAgcGxheWVyUGV0czogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIG9wcG9uZW50UGV0czogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIGN1c3RvbVBhY2tzOiBbXSxcbiAgICBhbGxQZXRzOiBmYWxzZSxcbiAgICBvbGRTdG9yazogZmFsc2UsXG4gICAgdG9rZW5QZXRzOiB0cnVlLFxuICAgIGtvbW9kb1NodWZmbGU6IGZhbHNlLFxuICAgIG1hbmE6IGZhbHNlLFxuICAgIHNlZWQ6IG51bGwsXG4gICAgc2ltdWxhdGlvbkNvdW50OiAxMDAsXG4gICAgbG9nc0VuYWJsZWQ6IGZhbHNlLFxuICAgIG1heExvZ2dlZEJhdHRsZXM6IDAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQmFzZUNvbmZpZyhiYXNlQ29uZmlnPzogUGFydGlhbDxTaW11bGF0aW9uQ29uZmlnPik6IFNpbXVsYXRpb25Db25maWcge1xuICBjb25zdCBkZWZhdWx0cyA9IGRlZmF1bHRTaW11bGF0aW9uQ29uZmlnKCk7XG4gIGlmICghYmFzZUNvbmZpZykge1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRzLFxuICAgIC4uLmRlZXBDbG9uZShiYXNlQ29uZmlnKSxcbiAgICBwbGF5ZXJQZXRzOiBub3JtYWxpemVQZXRMaXN0KGJhc2VDb25maWcucGxheWVyUGV0cyA/PyBkZWZhdWx0cy5wbGF5ZXJQZXRzKSxcbiAgICBvcHBvbmVudFBldHM6IG5vcm1hbGl6ZVBldExpc3QoYmFzZUNvbmZpZy5vcHBvbmVudFBldHMgPz8gZGVmYXVsdHMub3Bwb25lbnRQZXRzKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXBwbHlTaWRlVG9Db25maWcoXG4gIGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZyxcbiAgc2lkZTogVGVhbVNpZGVDb25maWcsXG4gIHBlcnNwZWN0aXZlOiAncGxheWVyJyB8ICdvcHBvbmVudCcsXG4pOiB2b2lkIHtcbiAgaWYgKHBlcnNwZWN0aXZlID09PSAncGxheWVyJykge1xuICAgIGNvbmZpZy5wbGF5ZXJQYWNrID0gc2lkZS5wYWNrID8/IGNvbmZpZy5wbGF5ZXJQYWNrO1xuICAgIGNvbmZpZy5wbGF5ZXJUb3kgPSBzaWRlLnRveSA9PT0gdW5kZWZpbmVkID8gY29uZmlnLnBsYXllclRveSA6IHNpZGUudG95O1xuICAgIGNvbmZpZy5wbGF5ZXJUb3lMZXZlbCA9IHNpZGUudG95TGV2ZWwgPz8gY29uZmlnLnBsYXllclRveUxldmVsO1xuICAgIGNvbmZpZy5wbGF5ZXJIYXJkVG95ID1cbiAgICAgIHNpZGUuaGFyZFRveSA9PT0gdW5kZWZpbmVkID8gY29uZmlnLnBsYXllckhhcmRUb3kgOiBzaWRlLmhhcmRUb3k7XG4gICAgY29uZmlnLnBsYXllckhhcmRUb3lMZXZlbCA9IHNpZGUuaGFyZFRveUxldmVsID8/IGNvbmZpZy5wbGF5ZXJIYXJkVG95TGV2ZWw7XG4gICAgY29uZmlnLnBsYXllckdvbGRTcGVudCA9IHNpZGUuZ29sZFNwZW50ID8/IGNvbmZpZy5wbGF5ZXJHb2xkU3BlbnQ7XG4gICAgY29uZmlnLnBsYXllclJvbGxBbW91bnQgPSBzaWRlLnJvbGxBbW91bnQgPz8gY29uZmlnLnBsYXllclJvbGxBbW91bnQ7XG4gICAgY29uZmlnLnBsYXllclN1bW1vbmVkQW1vdW50ID1cbiAgICAgIHNpZGUuc3VtbW9uZWRBbW91bnQgPz8gY29uZmlnLnBsYXllclN1bW1vbmVkQW1vdW50O1xuICAgIGNvbmZpZy5wbGF5ZXJMZXZlbDNTb2xkID0gc2lkZS5sZXZlbDNTb2xkID8/IGNvbmZpZy5wbGF5ZXJMZXZlbDNTb2xkO1xuICAgIGNvbmZpZy5wbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudCA9XG4gICAgICBzaWRlLnRyYW5zZm9ybWF0aW9uQW1vdW50ID8/IGNvbmZpZy5wbGF5ZXJUcmFuc2Zvcm1hdGlvbkFtb3VudDtcbiAgICBjb25maWcucGxheWVyUGV0cyA9IG5vcm1hbGl6ZVBldExpc3Qoc2lkZS5wZXRzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3Bwb25lbnRQYWNrID0gc2lkZS5wYWNrID8/IGNvbmZpZy5vcHBvbmVudFBhY2s7XG4gICAgY29uZmlnLm9wcG9uZW50VG95ID0gc2lkZS50b3kgPT09IHVuZGVmaW5lZCA/IGNvbmZpZy5vcHBvbmVudFRveSA6IHNpZGUudG95O1xuICAgIGNvbmZpZy5vcHBvbmVudFRveUxldmVsID0gc2lkZS50b3lMZXZlbCA/PyBjb25maWcub3Bwb25lbnRUb3lMZXZlbDtcbiAgICBjb25maWcub3Bwb25lbnRIYXJkVG95ID1cbiAgICAgIHNpZGUuaGFyZFRveSA9PT0gdW5kZWZpbmVkID8gY29uZmlnLm9wcG9uZW50SGFyZFRveSA6IHNpZGUuaGFyZFRveTtcbiAgICBjb25maWcub3Bwb25lbnRIYXJkVG95TGV2ZWwgPVxuICAgICAgc2lkZS5oYXJkVG95TGV2ZWwgPz8gY29uZmlnLm9wcG9uZW50SGFyZFRveUxldmVsO1xuICAgIGNvbmZpZy5vcHBvbmVudEdvbGRTcGVudCA9IHNpZGUuZ29sZFNwZW50ID8/IGNvbmZpZy5vcHBvbmVudEdvbGRTcGVudDtcbiAgICBjb25maWcub3Bwb25lbnRSb2xsQW1vdW50ID0gc2lkZS5yb2xsQW1vdW50ID8/IGNvbmZpZy5vcHBvbmVudFJvbGxBbW91bnQ7XG4gICAgY29uZmlnLm9wcG9uZW50U3VtbW9uZWRBbW91bnQgPVxuICAgICAgc2lkZS5zdW1tb25lZEFtb3VudCA/PyBjb25maWcub3Bwb25lbnRTdW1tb25lZEFtb3VudDtcbiAgICBjb25maWcub3Bwb25lbnRMZXZlbDNTb2xkID0gc2lkZS5sZXZlbDNTb2xkID8/IGNvbmZpZy5vcHBvbmVudExldmVsM1NvbGQ7XG4gICAgY29uZmlnLm9wcG9uZW50VHJhbnNmb3JtYXRpb25BbW91bnQgPVxuICAgICAgc2lkZS50cmFuc2Zvcm1hdGlvbkFtb3VudCA/PyBjb25maWcub3Bwb25lbnRUcmFuc2Zvcm1hdGlvbkFtb3VudDtcbiAgICBjb25maWcub3Bwb25lbnRQZXRzID0gbm9ybWFsaXplUGV0TGlzdChzaWRlLnBldHMpO1xuICB9XG5cbiAgaWYgKHNpZGUudHVybiAhPSBudWxsKSB7XG4gICAgY29uZmlnLnR1cm4gPSBzaWRlLnR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaENvbmZpZyhcbiAgYmFzZUNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZyxcbiAgY2FuZGlkYXRlOiBUZWFtU2lkZUNvbmZpZyxcbiAgb3Bwb25lbnQ6IFRlYW1TaWRlQ29uZmlnLFxuICBzaW11bGF0aW9uc1Blck1hdGNodXA6IG51bWJlcixcbiAgc2VlZDogbnVtYmVyIHwgbnVsbCxcbik6IFNpbXVsYXRpb25Db25maWcge1xuICBjb25zdCBjb25maWcgPSBkZWVwQ2xvbmUoYmFzZUNvbmZpZyk7XG4gIGFwcGx5U2lkZVRvQ29uZmlnKGNvbmZpZywgY2FuZGlkYXRlLCAncGxheWVyJyk7XG4gIGFwcGx5U2lkZVRvQ29uZmlnKGNvbmZpZywgb3Bwb25lbnQsICdvcHBvbmVudCcpO1xuICBjb25maWcuc2ltdWxhdGlvbkNvdW50ID0gc2ltdWxhdGlvbnNQZXJNYXRjaHVwO1xuICBjb25maWcuc2VlZCA9IHNlZWQ7XG4gIGNvbmZpZy5sb2dzRW5hYmxlZCA9IGZhbHNlO1xuICBjb25maWcubWF4TG9nZ2VkQmF0dGxlcyA9IDA7XG4gIGNvbmZpZy5jYXB0dXJlUmFuZG9tRGVjaXNpb25zID0gZmFsc2U7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIHJ1bk1hdGNoKGNvbmZpZzogU2ltdWxhdGlvbkNvbmZpZyk6IFNpbXVsYXRpb25SZXN1bHQge1xuICByZXR1cm4gcnVuSGVhZGxlc3NTaW11bGF0aW9uKGNvbmZpZywge1xuICAgIGluY2x1ZGVCYXR0bGVzOiBmYWxzZSxcbiAgICBlbmFibGVMb2dzOiBmYWxzZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdGREZXYodmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgbWVhbiA9IHZhbHVlcy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSAvIHZhbHVlcy5sZW5ndGg7XG4gIGNvbnN0IHZhcmlhbmNlID1cbiAgICB2YWx1ZXMucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyAodmFsdWUgLSBtZWFuKSAqKiAyLCAwKSAvIHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgdmFyaWFuY2UpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplV2VpZ2h0cyhjb3VudDogbnVtYmVyLCB3ZWlnaHRzPzogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIGlmICghd2VpZ2h0cyB8fCB3ZWlnaHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoKSA9PiAxIC8gTWF0aC5tYXgoMSwgY291bnQpKTtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIod2VpZ2h0c1tpbmRleF0pO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCA/IHZhbHVlIDogMDtcbiAgfSk7XG4gIGNvbnN0IHN1bSA9IG5vcm1hbGl6ZWQucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIGlmIChzdW0gPD0gMCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoKSA9PiAxIC8gTWF0aC5tYXgoMSwgY291bnQpKTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZC5tYXAoKHZhbHVlKSA9PiB2YWx1ZSAvIHN1bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZUNhbmRpZGF0ZVZzUG9vbChpbnB1dDogRXZhbHVhdGVSZXF1ZXN0KTogRXZhbHVhdGVSZXNwb25zZSB7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IG5vcm1hbGl6ZVRlYW1TaWRlKGlucHV0LmNhbmRpZGF0ZSk7XG4gIGNvbnN0IG9wcG9uZW50cyA9IEFycmF5LmlzQXJyYXkoaW5wdXQub3Bwb25lbnRzKVxuICAgID8gaW5wdXQub3Bwb25lbnRzLm1hcCgob3Bwb25lbnQpID0+IG5vcm1hbGl6ZVRlYW1TaWRlKG9wcG9uZW50KSlcbiAgICA6IFtdO1xuXG4gIGlmIChvcHBvbmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFdmFsdWF0aW9uIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBvcHBvbmVudCB0ZWFtLicpO1xuICB9XG5cbiAgY29uc3Qgc2ltdWxhdGlvbnNQZXJNYXRjaHVwID0gTWF0aC5tYXgoXG4gICAgMSxcbiAgICBNYXRoLnRydW5jKHBhcnNlTnVtYmVyKGlucHV0LnNpbXVsYXRpb25zUGVyTWF0Y2h1cCwgMTAwKSksXG4gICk7XG4gIGNvbnN0IHZhcmlhbmNlUGVuYWx0eSA9IE1hdGgubWF4KDAsIHBhcnNlTnVtYmVyKGlucHV0LnZhcmlhbmNlUGVuYWx0eSwgMC4xKSk7XG4gIGNvbnN0IGJhc2VDb25maWcgPSBtZXJnZUJhc2VDb25maWcoaW5wdXQuYmFzZUNvbmZpZyk7XG4gIGNvbnN0IHdlaWdodHMgPSBub3JtYWxpemVXZWlnaHRzKG9wcG9uZW50cy5sZW5ndGgsIGlucHV0Lm1hdGNodXBXZWlnaHRzKTtcbiAgY29uc3QgbWF0Y2h1cHM6IEV2YWx1YXRlZE1hdGNodXBbXSA9IFtdO1xuICBjb25zdCB3aW5SYXRlczogbnVtYmVyW10gPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3Bwb25lbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gb3Bwb25lbnRzW2luZGV4XTtcbiAgICBjb25zdCBtYXRjaHVwU2VlZCA9XG4gICAgICBpbnB1dC5zZWVkID09IG51bGwgPyBudWxsIDogTWF0aC50cnVuYyhwYXJzZU51bWJlcihpbnB1dC5zZWVkLCAwKSkgKyBpbmRleDtcbiAgICBjb25zdCBjb25maWcgPSBidWlsZE1hdGNoQ29uZmlnKFxuICAgICAgYmFzZUNvbmZpZyxcbiAgICAgIGNhbmRpZGF0ZSxcbiAgICAgIG9wcG9uZW50LFxuICAgICAgc2ltdWxhdGlvbnNQZXJNYXRjaHVwLFxuICAgICAgbWF0Y2h1cFNlZWQsXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQgPSBydW5NYXRjaChjb25maWcpO1xuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoXG4gICAgICAxLFxuICAgICAgcmVzdWx0LnBsYXllcldpbnMgKyByZXN1bHQub3Bwb25lbnRXaW5zICsgcmVzdWx0LmRyYXdzLFxuICAgICk7XG4gICAgY29uc3Qgd2luUmF0ZSA9IHJlc3VsdC5wbGF5ZXJXaW5zIC8gdG90YWw7XG4gICAgd2luUmF0ZXMucHVzaCh3aW5SYXRlKTtcbiAgICBtYXRjaHVwcy5wdXNoKHtcbiAgICAgIGluZGV4LFxuICAgICAgd2luczogcmVzdWx0LnBsYXllcldpbnMsXG4gICAgICBsb3NzZXM6IHJlc3VsdC5vcHBvbmVudFdpbnMsXG4gICAgICBkcmF3czogcmVzdWx0LmRyYXdzLFxuICAgICAgd2luUmF0ZSxcbiAgICAgIHdlaWdodGVkV2luUmF0ZTogd2luUmF0ZSAqIHdlaWdodHNbaW5kZXhdLFxuICAgICAgd2VpZ2h0OiB3ZWlnaHRzW2luZGV4XSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG1lYW5XaW5SYXRlID1cbiAgICB3aW5SYXRlcy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSAvIE1hdGgubWF4KDEsIHdpblJhdGVzLmxlbmd0aCk7XG4gIGNvbnN0IHdlaWdodGVkV2luUmF0ZSA9IG1hdGNodXBzLnJlZHVjZShcbiAgICAoc3VtLCBtYXRjaHVwKSA9PiBzdW0gKyBtYXRjaHVwLndlaWdodGVkV2luUmF0ZSxcbiAgICAwLFxuICApO1xuICBjb25zdCBzdGREZXYgPSBjb21wdXRlU3RkRGV2KHdpblJhdGVzKTtcbiAgY29uc3QgZml0bmVzcyA9IHdlaWdodGVkV2luUmF0ZSAtIHZhcmlhbmNlUGVuYWx0eSAqIHN0ZERldjtcbiAgY29uc3QgdG90YWxCYXR0bGVzID0gc2ltdWxhdGlvbnNQZXJNYXRjaHVwICogb3Bwb25lbnRzLmxlbmd0aDtcbiAgY29uc3QgY29uZmlkZW5jZTk1ID1cbiAgICAxLjk2ICogTWF0aC5zcXJ0KChtZWFuV2luUmF0ZSAqICgxIC0gbWVhbldpblJhdGUpKSAvIE1hdGgubWF4KDEsIHRvdGFsQmF0dGxlcykpO1xuXG4gIHJldHVybiB7XG4gICAgZml0bmVzcyxcbiAgICBtZWFuV2luUmF0ZSxcbiAgICB3ZWlnaHRlZFdpblJhdGUsXG4gICAgc3RkRGV2LFxuICAgIHZhcmlhbmNlUGVuYWx0eSxcbiAgICBjb25maWRlbmNlOTUsXG4gICAgc2ltdWxhdGlvbnNQZXJNYXRjaHVwLFxuICAgIG9wcG9uZW50Q291bnQ6IG9wcG9uZW50cy5sZW5ndGgsXG4gICAgdG90YWxCYXR0bGVzLFxuICAgIC4uLihpbnB1dC5pbmNsdWRlTWF0Y2h1cHMgPyB7IG1hdGNodXBzIH0gOiB7fSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZUNhbmRpZGF0ZUJhdGNoKGlucHV0OiBFdmFsdWF0ZUJhdGNoUmVxdWVzdCk6IEV2YWx1YXRlUmVzcG9uc2VbXSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dC5jYW5kaWRhdGVzKSB8fCBpbnB1dC5jYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gaW5wdXQuY2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzZWVkID1cbiAgICAgIGlucHV0LnNlZWQgPT0gbnVsbFxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBNYXRoLnRydW5jKHBhcnNlTnVtYmVyKGlucHV0LnNlZWQsIDApKSArIGluZGV4ICogMTAwMDAwO1xuICAgIHJldHVybiBldmFsdWF0ZUNhbmRpZGF0ZVZzUG9vbCh7XG4gICAgICBjYW5kaWRhdGUsXG4gICAgICBvcHBvbmVudHM6IGlucHV0Lm9wcG9uZW50cyxcbiAgICAgIHNpbXVsYXRpb25zUGVyTWF0Y2h1cDogaW5wdXQuc2ltdWxhdGlvbnNQZXJNYXRjaHVwLFxuICAgICAgYmFzZUNvbmZpZzogaW5wdXQuYmFzZUNvbmZpZyxcbiAgICAgIHNlZWQsXG4gICAgICB2YXJpYW5jZVBlbmFsdHk6IGlucHV0LnZhcmlhbmNlUGVuYWx0eSxcbiAgICAgIG1hdGNodXBXZWlnaHRzOiBpbnB1dC5tYXRjaHVwV2VpZ2h0cyxcbiAgICAgIGluY2x1ZGVNYXRjaHVwczogaW5wdXQuaW5jbHVkZU1hdGNodXBzLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRQcmVzZXRQb29sKCk6IFByZXNldFBvb2xFbnRyeVtdIHtcbiAgY29uc3QgdGVhbXMgPSBnZXREZWZhdWx0VGVhbXMoKTtcbiAgcmV0dXJuIHRlYW1zLm1hcCgodGVhbSkgPT4ge1xuICAgIGNvbnN0IHNpZGU6IFRlYW1TaWRlQ29uZmlnID0ge1xuICAgICAgcGFjazogJ1R1cnRsZScsXG4gICAgICB0b3k6XG4gICAgICAgIHRlYW0ucGxheWVyVG95TmFtZSA/PyB0ZWFtLnRveU5hbWUgPz8gdGVhbS5vcHBvbmVudFRveU5hbWUgPz8gbnVsbCxcbiAgICAgIHRveUxldmVsOlxuICAgICAgICB0ZWFtLnBsYXllclRveUxldmVsID8/IHRlYW0udG95TGV2ZWwgPz8gdGVhbS5vcHBvbmVudFRveUxldmVsID8/IDEsXG4gICAgICBoYXJkVG95OiB0ZWFtLnBsYXllckhhcmRUb3kgPz8gdGVhbS5vcHBvbmVudEhhcmRUb3kgPz8gbnVsbCxcbiAgICAgIGhhcmRUb3lMZXZlbDpcbiAgICAgICAgdGVhbS5wbGF5ZXJIYXJkVG95TGV2ZWwgPz8gdGVhbS5vcHBvbmVudEhhcmRUb3lMZXZlbCA/PyAxLFxuICAgICAgdHVybjogdGVhbS50dXJuID8/IDExLFxuICAgICAgZ29sZFNwZW50OiB0ZWFtLnBsYXllckdvbGRTcGVudCA/PyB0ZWFtLm9wcG9uZW50R29sZFNwZW50ID8/IDEwLFxuICAgICAgcm9sbEFtb3VudDogdGVhbS5wbGF5ZXJSb2xsQW1vdW50ID8/IHRlYW0ub3Bwb25lbnRSb2xsQW1vdW50ID8/IDQsXG4gICAgICBzdW1tb25lZEFtb3VudDpcbiAgICAgICAgdGVhbS5wbGF5ZXJTdW1tb25lZEFtb3VudCA/PyB0ZWFtLm9wcG9uZW50U3VtbW9uZWRBbW91bnQgPz8gMCxcbiAgICAgIGxldmVsM1NvbGQ6IHRlYW0ucGxheWVyTGV2ZWwzU29sZCA/PyB0ZWFtLm9wcG9uZW50TGV2ZWwzU29sZCA/PyAwLFxuICAgICAgdHJhbnNmb3JtYXRpb25BbW91bnQ6XG4gICAgICAgIHRlYW0ucGxheWVyVHJhbnNmb3JtYXRpb25BbW91bnQgPz8gdGVhbS5vcHBvbmVudFRyYW5zZm9ybWF0aW9uQW1vdW50ID8/IDAsXG4gICAgICBwZXRzOiBub3JtYWxpemVQZXRMaXN0KHRlYW0ucGV0cyksXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogdGVhbS5pZCxcbiAgICAgIG5hbWU6IHRlYW0ubmFtZSxcbiAgICAgIHRlYW06IHNpZGUsXG4gICAgfTtcbiAgfSk7XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0JBQWU7OztBQ0RmLElBQUFBLDRCQUFnRzs7O0FDQ3pGLFNBQVMsV0FBVyxPQUFhO0FBQ3RDLFNBQU8sU0FBVSxRQUFhO0FBQUEsRUFBQztBQUNqQzs7O0FDSEEsK0JBQXlCO0FBR2xCLElBQU0sT0FBTyxnQkFBZ0Isa0NBQVMsSUFBSTtBQUMxQyxJQUFN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LFFBQVEsVUFBVSxPQUFPO0FBQy9CLFFBQU0sVUFBVSxLQUFLLE1BQU0sS0FBSztBQUNoQyxRQUFNLFNBQVMsd0JBQXdCLE9BQU87QUFDOUMsWUFBVSxRQUFRLFFBQVEsTUFBTTtBQUNsQztBQUVBLFNBQVMsaUJBQWlCLE1BQXNCO0FBQzlDLFFBQU0sVUFBVSxVQUFVLElBQUk7QUFDOUIsUUFBTSxRQUFRLFVBQVUsT0FBTztBQUMvQixRQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUs7QUFDaEMsUUFBTSxTQUFTLHVCQUF1QixPQUFPO0FBQzdDLFlBQVUsUUFBUSxRQUFRLE1BQU07QUFDbEM7QUFFQSxTQUFTLFlBQVksTUFBc0I7QUFDekMsUUFBTSxVQUFVLFVBQVUsSUFBSTtBQUM5QixRQUFNLFFBQVEsVUFBVSxPQUFPO0FBQy9CLFFBQU0sU0FBUyxLQUFLLE1BQU0sS0FBSztBQUMvQixRQUFNLGFBQVMsMEJBQUFDLHVCQUFzQixRQUFRO0FBQUEsSUFDM0MsZ0JBQWdCLFFBQVE7QUFBQSxJQUN4QixZQUFZLFFBQVE7QUFBQSxFQUN0QixDQUFDO0FBQ0QsWUFBVSxRQUFRLFFBQVEsTUFBTTtBQUNsQztBQUVBLFNBQVMsTUFBTTtBQUNiLFFBQU0sT0FBTyxRQUFRLEtBQUssTUFBTSxDQUFDO0FBQ2pDLE1BQUksS0FBSyxXQUFXLEdBQUc7QUFDckIsZ0JBQVksSUFBSTtBQUNoQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFVBQVUsS0FBSyxDQUFDO0FBQ3RCLE1BQUksWUFBWSxZQUFZLFlBQVksTUFBTTtBQUM1QyxjQUFVO0FBQ1Y7QUFBQSxFQUNGO0FBRUEsTUFBSSxZQUFZLGVBQWU7QUFDN0Isa0JBQWMsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUMzQjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFlBQVksWUFBWTtBQUMxQixnQkFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCO0FBQUEsRUFDRjtBQUVBLE1BQUksWUFBWSxrQkFBa0I7QUFDaEMscUJBQWlCLEtBQUssTUFBTSxDQUFDLENBQUM7QUFDOUI7QUFBQSxFQUNGO0FBRUEsTUFBSSxZQUFZLFlBQVk7QUFDMUIsZ0JBQVksS0FBSyxNQUFNLENBQUMsQ0FBQztBQUN6QjtBQUFBLEVBQ0Y7QUFFQSxjQUFZLElBQUk7QUFDbEI7QUFFQSxJQUFJOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfc2FwX2JhdHRsZV9lbmdpbmUiLCAicGV0TmFtZXMiLCAidG95TmFtZXMiLCAiZXF1aXBtZW50TmFtZXMiLCAicmVnZXgiLCAibWF0Y2giLCAicGV0TmFtZXMiLCAidG95TmFtZXMiLCAiZXF1aXBtZW50TmFtZXMiLCAicGV0cyIsICJpbXBvcnRfc2FwX2JhdHRsZV9lbmdpbmUiLCAiaW1wb3J0X3NhcF9iYXR0bGVfZW5naW5lIiwgInBldHMiLCAiZW5naW5lSGVhZGxlc3NTaW11bGF0aW9uIiwgImZzIiwgImVuZ2luZUhlYWRsZXNzU2ltdWxhdGlvbiJdCn0K
