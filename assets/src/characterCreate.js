/* ===== GLOBALS ===== */
// Counts
let att_count = 20
let skill_count = 5

//HTML Constants
const ATT_COUNT = document.getElementById('att-count')
const SKILL_COUNT = document.getElementById('skill-count')

/* ===== CLASSES ===== */
class Attribute {
    constructor(att, icon) {
        this.att = att
        this.icon =  icon
        this.value = 0
    }
}

class Skill {
    constructor(skill, icon, main, mod, mod_val) {
        this.skill = skill
        this.icon = icon
        this.main = main
        this.mod = mod
        this.mod_val = mod_val
        this.value = main * (mod * mod_val)
        this.flag = false
    }
}

class Character {
    constructor(name, portrait, swole, hustle, vibes, rizz, smarts, athl, intim,
    mma, labor, explo, finance, gamble, handy, insight, shady, art, cook, music,
    nature, survive, barter, comedy, lying, perform, seduce, history, math, med, sci) {
        this.name = name
        this.portrait = portrait
        this.level = 1
        this.exp = 0
        this.swole = swole
        this.hustle = hustle
        this.vibes = vibes
        this.rizz = rizz
        this.smarts = smarts
        this.athl = athl
        this.intim = intim
        this.mma = mma
        this.labor = labor
        this.explo = explo
        this.finance = finance
        this.gamble = gamble
        this.handy = handy
        this.insight = insight
        this.shady = shady
        this.art = art
        this.cook = cook
        this.music = music
        this.nature = nature
        this.survive = survive
        this.barter = barter
        this.comedy = comedy
        this.lying = lying
        this.perform = perform
        this.seduce = seduce
        this.history = history
        this.math = math
        this.med = med
        this.sci = sci
    }
}
/* ===== FUNCTIONS ===== */
function update_counts() {
    ATT_COUNT.textContent = att_count
    SKILL_COUNT.textContent = skill_count
}

/* ===== RUN ===== */
update_counts()



