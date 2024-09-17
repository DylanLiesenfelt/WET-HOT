let attribute_points = 15;
let skill_points = 5;
const ATT_POINTS_ELEMENT = document.getElementById('att-count')
const SKILL_POINTS_ELEMENT = document.getElementById('skill-count')

function update_values() {
    ATT_POINTS_ELEMENT.textContent = attribute_points
    SKILL_POINTS_ELEMENT.textContent = skill_points
}
update_values();

class Attribute {
    constructor(val_id, id_plus, id_minus) {
        this.value = 0;
        this.val_id = val_id;
        this.id_plus = id_plus;
        this.id_minus = id_minus;
        this.val_id.textContent = this.value;

        this.id_plus.addEventListener('click', () => {
            if (attribute_points > 0) {
                this.value ++
                attribute_points --
                this.val_id.textContent = this.value;
                update_values()
            }
        })

        this.id_minus.addEventListener('click', () => {
            if (this.value > 0) {
                this.value--;
                attribute_points++;
                this.val_id.textContent = this.value;
                update_values();
            }
        })
    }
}

const Swole = new Attribute(
    document.getElementById('swole-val'),
    document.getElementById('swole+'),
    document.getElementById('swole-')
)
const Hustle = new Attribute(
    document.getElementById('hustle-val'),
    document.getElementById('hustle+'),
    document.getElementById('hustle-')
)
const Vibes = new Attribute(
    document.getElementById('vibes-val'),
    document.getElementById('vibes+'),
    document.getElementById('vibes-')
)
const Rizz = new Attribute(
    document.getElementById('rizz-val'),
    document.getElementById('rizz+'),
    document.getElementById('rizz-')
)
const Smarts = new Attribute(
    document.getElementById('smarts-val'),
    document.getElementById('smarts+'),
    document.getElementById('smarts-')
)

function calc_skill_value(main, mod, mod_val) {
    return main * (mod * mod_val)
}

class Skill {
    constructor(val_id, select_id, calculation) {
        this.val_id = val_id;
        this.select_id = select_id;
        this.bonus_flag = false;
        this.calculation = calculation;
        this.value = this.calculation;
        this.val_id.textContent = this.value
    }
}



const Athletics = new Skill(
    document.getElementById('athletics-val'),
    document.getElementById('athletics-sel'),
    calc_skill_value(Swole.value, Hustle.value, 0.3)
)