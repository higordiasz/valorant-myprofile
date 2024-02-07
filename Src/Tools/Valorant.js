import Assets from "./PublicContentCatalog.js";
const valorant = {};

const classicID = "C5DE005C-4BDC-26A7-A47D-C295EAAAE9D8";
const weaponsCategory = ["Melee", "Sidearm", "Heavy", "Rifle", "Shotgun", "Sniper", "SMG"];
const weaponsNames = ["Melee", "Classic", "Frenzy", "Ghost", "Sheriff", "Shorty", "Odin", "Ares", "Vandal", "Bulldog", "Phantom", "Guardian", "Judge", "Bucky", "Operator", "Marshal", "Spectre", "Stinger", "Outlaw"];


valorant.getWeaponsList = () => {
    let list = {
        Melee: [],
        Sidearm: [],
        Heavy: [],
        Rifle: [],
        Shotgun: [],
        Sniper: [],
        SMG: [],
        Shotgun: []
    };
    for (let i = 0; i < Assets.weapons.length; i++) {
        if (weaponsCategory.includes(Assets.weapons[i].category)) {
            let weapom = {
                name: Assets.weapons[i].name.defaultText,
                localizedByCulture: Assets.weapons[i].name.localizedByCulture,
                category: Assets.weapons[i].category,
                id: Assets.weapons[i].id
            };
            switch (Assets.weapons[i].category) {
                case weaponsCategory[0]:
                    list.Melee.push(weapom);
                    break;
                case weaponsCategory[1]:
                    list.Sidearm.push(weapom);
                    break;
                case weaponsCategory[2]:
                    list.Heavy.push(weapom);
                    break;
                case weaponsCategory[3]:
                    list.Rifle.push(weapom);
                    break;
                case weaponsCategory[4]:
                    list.Shotgun.push(weapom);
                    break;
                case weaponsCategory[5]:
                    list.Sniper.push(weapom);
                    break;
                case weaponsCategory[6]:
                    list.SMG.push(weapom);
                    break;
                case weaponsCategory[7]:
                    list.Shotgun.push(weapom);
                    break;
                default:
                    break;
            }
        }
    }
    return list;
}

valorant.getUsageWeaponsList = () => {
    let list = {
        Melee: [],
        Sidearm: [],
        Heavy: [],
        Rifle: [],
        Shotgun: [],
        Sniper: [],
        SMG: [],
        Shotgun: []
    };
    for (let i = 0; i < Assets.weapons.length; i++) {
        if (weaponsCategory.includes(Assets.weapons[i].category) && weaponsNames.includes(Assets.weapons[i].name.defaultText)) {
            if (Assets.weapons[i].name.defaultText == "Classic") {
                if (Assets.weapons[i].id = classicID) {
                    let weapom = {
                        name: Assets.weapons[i].name.defaultText,
                        localizedByCulture: Assets.weapons[i].name.localizedByCulture,
                        category: Assets.weapons[i].category,
                        id: Assets.weapons[i].id
                    };
                    switch (Assets.weapons[i].category) {
                        case weaponsCategory[0]:
                            list.Melee.push(weapom);
                            break;
                        case weaponsCategory[1]:
                            list.Sidearm.push(weapom);
                            break;
                        case weaponsCategory[2]:
                            list.Heavy.push(weapom);
                            break;
                        case weaponsCategory[3]:
                            list.Rifle.push(weapom);
                            break;
                        case weaponsCategory[4]:
                            list.Shotgun.push(weapom);
                            break;
                        case weaponsCategory[5]:
                            list.Sniper.push(weapom);
                            break;
                        case weaponsCategory[6]:
                            list.SMG.push(weapom);
                            break;
                        case weaponsCategory[7]:
                            list.Shotgun.push(weapom);
                            break;
                        default:
                            break;
                    }
                }
            } else {
                let weapom = {
                    name: Assets.weapons[i].name.defaultText,
                    localizedByCulture: Assets.weapons[i].name.localizedByCulture,
                    category: Assets.weapons[i].category,
                    id: Assets.weapons[i].id
                };
                switch (Assets.weapons[i].category) {
                    case weaponsCategory[0]:
                        list.Melee.push(weapom);
                        break;
                    case weaponsCategory[1]:
                        list.Sidearm.push(weapom);
                        break;
                    case weaponsCategory[2]:
                        list.Heavy.push(weapom);
                        break;
                    case weaponsCategory[3]:
                        list.Rifle.push(weapom);
                        break;
                    case weaponsCategory[4]:
                        list.Shotgun.push(weapom);
                        break;
                    case weaponsCategory[5]:
                        list.Sniper.push(weapom);
                        break;
                    case weaponsCategory[6]:
                        list.SMG.push(weapom);
                        break;
                    case weaponsCategory[7]:
                        list.Shotgun.push(weapom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return list;
}

export {
    valorant
}