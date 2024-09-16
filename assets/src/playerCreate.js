// Constants for attribute values
const ATT_COUNT = document.getElementById('att-count')
const SWOLE_VALUE = document.getElementById('swole-val');
const HUSTLE_VALUE = document.getElementById('hustle-val');
const VIBES_VALUE = document.getElementById('vibes-val');
const RIZZ_VALUE = document.getElementById('rizz-val');
const SMARTS_VALUE = document.getElementById('smarts-val');

//Attributes
let att_count = 15
let swole = 0
let hustle = 0
let vibes = 0
let rizz = 0
let smarts = 0

//Update attribute values
function update_attribute_values() {
    SWOLE_VALUE.textContent = swole;
    HUSTLE_VALUE.textContent = hustle;
    VIBES_VALUE.textContent = vibes;
    RIZZ_VALUE.textContent = rizz;
    SMARTS_VALUE.textContent = smarts;
    ATT_COUNT.textContent = att_count;
}

//Increment the attribute value decrement attribute count
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
        update_attribute_values();
    }
}

//Inverse
function decrement_attribute(attribute) {
    switch(attribute) {
        case 'swole': if(swole > 0) { swole--; att_count++; } break;
        case 'hustle': if(hustle > 0) { hustle--; att_count++; } break;
        case 'vibes': if(vibes > 0) { vibes--; att_count++; } break;
        case 'rizz': if(rizz > 0) { rizz--; att_count++; } break;
        case 'smarts': if(smarts > 0) { smarts--; att_count++; } break;
    }
    update_attribute_values();
}

//Skills
//Swole
let athletics = Math.ceil(swole * (hustle/2))
let mma = Math.ceil(swole * ((hustle * vibes * smarts)/4))
let intimidation = Math.ceil(swole * (rizz/2))
let laborer = Math.ceil(swole * (hustle/2))

//Hustle
let finances = Math.ceil(hustle * (smarts/2))
let gambling = Math.ceil(hustle * (smarts * (rizz * vibes)/3)/2)
let handiness = Math.ceil(hustle * (smarts * (swole/2)/2))
let shadiness = Math.ceil(hustle * (vibes/2))
let insight = Math.ceil( hustle * ((smarts)* (vibes))/3)

//Vibes
let art = Math.ceil(vibes * (smarts / hustle)/4)
let music = Math.ceil(vibes * (smarts / hustle)/4)
let nature = Math.ceil(vibes * (smarts / swole)/4)
let cooking = Math.ceil(vibes * (smarts / hustle)/3)

//Rizz
let barter = Math.ceil(rizz * (hustle/2))
let comedy = Math.ceil(rizz * (rizz * vibes * hustle * smarts)/5)
let lying = Math.ceil(rizz * (smarts * hustle)/3)
let performer = Math.ceil(rizz * (rizz * vibes * swole)/4)
let seduction = Math.ceil(rizz * ((rizz * swole * vibes * smarts) * swole)/5)

//Smarts
let science = Math.ceil(smarts * smarts)
let tech = Math.ceil(smarts * (smarts * hustle)/2)
let history = Math.ceil(smarts * (rizz * swole)/3)
let medicine = Math.ceil(smarts * (smarts * (vibes * rizz))/4)
let math = Math.ceil(smarts * smarts)

update_attribute_values() //Init value update on page load