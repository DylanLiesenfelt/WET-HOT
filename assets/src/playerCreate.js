// Constants for attribute values
const ATT_COUNT = document.getElementById('att-count');
const SWOLE_VALUE = document.getElementById('swole-val');
const HUSTLE_VALUE = document.getElementById('hustle-val');
const VIBES_VALUE = document.getElementById('vibes-val');
const RIZZ_VALUE = document.getElementById('rizz-val');
const SMARTS_VALUE = document.getElementById('smarts-val');

const SKILL_COUNT = document.getElementById('skill-count');
const ATHLETICS_VALUE = document.getElementById('athletics-val');
const INTIMIDATION_VALUE = document.getElementById('intimidation-val');
const MMA_VALUE = document.getElementById('mma-val');
const LABOR_VALUE = document.getElementById('labor-val');
const EXPLOSIVES_VALUE = document.getElementById('explosives-val');

const FINANCE_VALUE = document.getElementById('finance-val');
const GAMBLING_VALUE = document.getElementById('gambling-val');
const HANDINESS_VALUE = document.getElementById('handiness-val');
const SHADINESS_VALUE = document.getElementById('shadiness-val');
const INSIGHT_VALUE = document.getElementById('insight-val');

const ART_VALUE = document.getElementById('art-val');
const COOKING_VALUE = document.getElementById('cooking-val');
const MUSIC_VALUE = document.getElementById('music-val');
const NATURE_VALUE = document.getElementById('nature-val');
const SURVIVAL_VALUE = document.getElementById('survival-val');

const BARTER_VALUE = document.getElementById('barter-val');
const COMEDY_VALUE = document.getElementById('comedy-val');
const LYING_VALUE = document.getElementById('lying-val');
const PERFORMER_VALUE = document.getElementById('performer-val');
const SEDUCTION_VALUE = document.getElementById('seduction-val');

const SCIENCE_VALUE = document.getElementById('science-val');
const TECH_VALUE = document.getElementById('tech-val');
const HISTORY_VALUE = document.getElementById('history-val');
const MEDICINE_VALUE = document.getElementById('medicine-val');
const MATH_VALUE = document.getElementById('math-val');

// Attributes
let att_count = 10;
let swole = 1;
let hustle = 1;
let vibes = 1;
let rizz = 1;
let smarts = 1;

// Skills
let skill_count = 5
let athletics, intimidation, mma, labor, explosives;
let finance, gambling, handiness, insight, shadiness;
let art, cooking, music, nature, survival;
let barter, comedy, lying, performer, seduction;
let history, math, medicine, science, tech;

function recalculateSkills() {
    // Swole Skills
    athletics = Math.ceil(swole * 0.4 + vibes * 0.3 + smarts * 0.3);
    intimidation = Math.ceil(swole * 0.5 + rizz * 0.3 + smarts * 0.2);
    mma = Math.ceil(swole * 0.6 + hustle * 0.2 + vibes * 0.2);
    labor = Math.ceil(swole * 0.5 + hustle * 0.3 + smarts * 0.2);
    explosives = Math.ceil(swole * 0.4 + smarts * 0.4);

    // Hustle Skills
    finance = Math.ceil(hustle * 0.5 + smarts * 0.3 + vibes * 0.2);
    gambling = Math.ceil(hustle * 0.6 + rizz * 0.3 + smarts * 0.1);
    handiness = Math.ceil(hustle * 0.4 + vibes * 0.4 + smarts * 0.2);
    insight = Math.ceil(hustle * 0.4 + vibes * 0.3 + smarts * 0.3);
    shadiness = Math.ceil(hustle * 0.5 + rizz * 0.3 + vibes * 0.2);

    // Vibes Skills
    art = Math.ceil(vibes * 0.5 + smarts * 0.3 + rizz * 0.2);
    cooking = Math.ceil(vibes * 0.6 + smarts * 0.3 + hustle * 0.1);
    music = Math.ceil(vibes * 0.4 + rizz * 0.4 + smarts * 0.2);
    nature = Math.ceil(vibes * 0.5 + smarts * 0.3 + hustle * 0.2);
    survival = Math.ceil(vibes * 0.4 + smarts * 0.3 + swole * 0.3);

    // Rizz Skills
    barter = Math.ceil(rizz * 0.5 + hustle * 0.3 + smarts * 0.2);
    comedy = Math.ceil(rizz * 0.4 + vibes * 0.4 + smarts * 0.2);
    lying = Math.ceil(rizz * 0.5 + smarts * 0.3 + hustle * 0.2);
    performer = Math.ceil(rizz * 0.6 + vibes * 0.3 + swole * 0.1);
    seduction = Math.ceil(rizz * 0.4 + vibes * 0.3 + smarts * 0.3);

    // Smarts Skills
    history = Math.ceil(smarts * 0.5 + hustle * 0.3 + vibes * 0.2);
    math = Math.ceil(smarts * 0.6 + hustle * 0.1);
    medicine = Math.ceil(smarts * 0.7  + vibes * 0.1);
    science = Math.ceil(smarts * 0.6 + hustle * 0.1);
    tech = Math.ceil(smarts * 0.5 + hustle * 0.2);
}

function updateValues() {
    recalculateSkills();

    SKILL_COUNT.textContent = skill_count

    SWOLE_VALUE.textContent = swole;
    HUSTLE_VALUE.textContent = hustle;
    VIBES_VALUE.textContent = vibes;
    RIZZ_VALUE.textContent = rizz;
    SMARTS_VALUE.textContent = smarts;
    ATT_COUNT.textContent = att_count;

    ATHLETICS_VALUE.textContent = athletics;
    INTIMIDATION_VALUE.textContent = intimidation;
    MMA_VALUE.textContent = mma;
    LABOR_VALUE.textContent = labor;
    EXPLOSIVES_VALUE.textContent = explosives;

    FINANCE_VALUE.textContent = finance;
    GAMBLING_VALUE.textContent = gambling;
    HANDINESS_VALUE.textContent = handiness;
    SHADINESS_VALUE.textContent = shadiness;
    INSIGHT_VALUE.textContent = insight;

    ART_VALUE.textContent = art;
    COOKING_VALUE.textContent = cooking;
    MUSIC_VALUE.textContent = music;
    NATURE_VALUE.textContent = nature;
    SURVIVAL_VALUE.textContent = survival;

    BARTER_VALUE.textContent = barter;
    COMEDY_VALUE.textContent = comedy;
    LYING_VALUE.textContent = lying;
    PERFORMER_VALUE.textContent = performer;
    SEDUCTION_VALUE.textContent = seduction;

    SCIENCE_VALUE.textContent = science;
    TECH_VALUE.textContent = tech;
    HISTORY_VALUE.textContent = history;
    MEDICINE_VALUE.textContent = medicine;
    MATH_VALUE.textContent = math;
}

// Increment the attribute value decrement attribute count
function increment_attribute(attribute) {
    if (att_count > 0) {
        switch(attribute) {
            case 'swole': swole++; break;
            case 'hustle': hustle++; break;
            case 'vibes': vibes++; break;
            case 'rizz': rizz++; break;
            case 'smarts': smarts++; break;
        }
        att_count--;
        updateValues();
    }
}

// Decrement the attribute value increment attribute count
function decrement_attribute(attribute) {
    switch(attribute) {
        case 'swole': if(swole > 0) { swole--; att_count++; } break;
        case 'hustle': if(hustle > 0) { hustle--; att_count++; } break;
        case 'vibes': if(vibes > 0) { vibes--; att_count++; } break;
        case 'rizz': if(rizz > 0) { rizz--; att_count++; } break;
        case 'smarts': if(smarts > 0) { smarts--; att_count++; } break;
    }
    updateValues();
}

function bonus_skill(skill) {
    if (skill_count > 0) {
        skill += 2
        skill_count --
        updateValues()
    }
}


window.onload = function() {
    updateValues();
};