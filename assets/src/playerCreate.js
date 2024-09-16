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

update_attribute_values() //Init value update on page load

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
let athletics = Math.ceil(swole * ((science + cooking) / 3))
let intimidation = Math.ceil(swole * ((performer + lying + mma) / 4))
let mma = Math.ceil(swole * ((insight + performer + math + athletics) / 5))
let laborer = Math.ceil(swole * ((handiness + barter) / 3))
let explosives = Math.ceil(swole * ((science + math + tech) / 4))

//Hustle
let finance = Math.ceil(hustle * ((math + barter + history + tech) / 5))
let gambling = Math.ceil(hustle * ((math + science + finance + insight) / 5))
let handiness = Math.ceil(hustle * ((athletics + performer) / 3))
let insight = Math.ceil(hustle * ((nature + seduction + history) / 4))
let shadiness = Math.ceil(hustle * ((survival + handiness + insight + athletics) / 5))

//Vibes
let art = Math.ceil(vibes * ((handiness + nature + history) / 4))
let cooking = Math.ceil(vibes * ((nature + handiness + science) / 4))
let music = Math.ceil(vibes * ((math + handiness + history + art) / 5))
let nature = Math.ceil(vibes * ((science + medicine + athletics) / 4))
let survival = Math.ceil(vibes * ((nature + athletics) / 3))

//Rizz
let barter = Math.ceil(rizz * ((lying + intimidation + insight + shadiness + history) / 6))
let comedy = Math.ceil(rizz * ((performer + art + insight) / 4))
let lying = Math.ceil(rizz * ((performer + insight) / 3))
let performer = Math.ceil(rizz * ((art + music + athletics) / 4))
let seduction = Math.ceil(rizz * ((athletics + shadiness + nature + science) / 5))

//Smarts
let history = Math.ceil(smarts * ((science + insight + tech) / 3))
let math = Math.ceil(smarts * ((science + tech + history) / 3))
let medicine = Math.ceil(smarts * ((science + tech + math) / 3))
let science = Math.ceil(((smarts * smarts) + (math)) / 4)
let tech = Math.ceil(smarts * ((science + math + insight) / 4))

