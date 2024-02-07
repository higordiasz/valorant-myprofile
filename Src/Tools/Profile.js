class Profile {
    constructor(user, weapons, shows) {
        this.name = user.name;
        this.title = user.title;
        this.level = user.level;
        this.card = user.card;
        this.rank = user.rank;
        this.rating = user.rating;
        this.classic = weapons.classic;
        this.classic_charm = weapons.classic_charm;
        this.shorty = weapons.shorty;
        this.shorty_charm = weapons.shorty_charm;
        this.frenzy = weapons.frenzy;
        this.frenzy_charm = weapons.frenzy_charm;
        this.ghost = weapons.ghost;
        this.ghost_charm = weapons.ghost_charm;
        this.sherif = weapons.sherif;
        this.sherif_charm = weapons.sherif_charm;
        this.stinger = weapons.stinger;
        this.stinger_charm = weapons.stinger_charm;
        this.spectre = weapons.spectre;
        this.spectre_charm = weapons.spectre_charm;
        this.bucky = weapons.bucky;
        this.bucky_charm = weapons.bucky_charm;
        this.judge = weapons.judge;
        this.judge_charm = weapons.judge_charm;
        this.bulldog = weapons.bulldog;
        this.bulldog_charm = weapons.bulldog_charm;
        this.guardian = weapons.guardian;
        this.guardian_charm = weapons.guardian_charm;
        this.phantom = weapons.phantom;
        this.phantom_charm = weapons.phantom_charm;
        this.vandal = weapons.vandal;
        this.vandal_charm = weapons.vandal_charm;
        this.marshal = weapons.marshal;
        this.marshal_charm = weapons.marshal_charm;
        this.outlaw = weapons.outlaw;
        this.outlaw_charm = weapons.outlaw_charm;
        this.operator = weapons.operator;
        this.operator_charm = weapons.operator_charm;
        this.ares = weapons.ares;
        this.ares_charm = weapons.ares_charm;
        this.odin = weapons.odin;
        this.odin_charm = weapons.odin_charm;
        this.melee = weapons.melee;
        this.classic_skins = shows.classic;
        this.shorty_skins = shows.shorty;
        this.frenzy_skins = shows.frenzy;
        this.ghost_skins = shows.ghost;
        this.sherif_skins = shows.sherif;
        this.stinger_skins = shows.stinger;
        this.spectre_skins = shows.spectre;
        this.bucky_skins = shows.bucky;
        this.judge_skins = shows.judge;
        this.bulldog_skins = shows.bulldog;
        this.guardian_skins = shows.guardian;
        this.phantom_skins = shows.phantom;
        this.vandal_skins = shows.vandal;
        this.marshal_skins = shows.marshal;
        this.outlaw_skins = shows.outlaw;
        this.operator_skins = shows.operator;
        this.ares_skins = shows.ares;
        this.odin_skins = shows.odin;
        this.melee_skins = shows.melee;
    }

    get skinsToJson() {
        let skins = {};
        skins.classic = this.classic
        skins.shorty = this.shorty
        skins.frenzy = this.frenzy
        skins.ghost = this.ghost
        skins.sherif = this.sherif
        skins.stinger = this.stinger
        skins.spectre = this.spectre
        skins.bucky = this.bucky
        skins.judge = this.judge
        skins.bulldog = this.bulldog
        skins.guardian = this.guardian
        skins.phantom = this.phantom
        skins.vandal = this.vandal
        skins.marshal = this.marshal
        skins.outlaw = this.outlaw
        skins.operator = this.operator
        skins.ares = this.ares
        skins.odin = this.odin
        skins.melee = this.melee
        return skins;
    }

    get profileToJson() {
        let profile = {};
        profile.name = this.name
        profile.title = this.title
        profile.level = this.level
        profile.card = this.card
        profile.rank = this.rank
        profile.rating = this.rating
        return profile;
    }

    get charmsToJson() {
        let charms = {};
        charms.sherif = this.sherif_charm
        charms.classic = this.classic_charm
        charms.shorty = this.shorty_charm
        charms.frenzy = this.frenzy_charm
        charms.ghost = this.ghost_charm
        charms.stinger = this.stinger_charm
        charms.spectre = this.spectre_charm
        charms.bucky = this.bucky_charm
        charms.judge = this.judge_charm
        charms.bulldog = this.bulldog_charm
        charms.guardian = this.guardian_charm
        charms.phantom = this.phantom_charm
        charms.vandal = this.vandal_charm
        charms.marshal = this.marshal_charm
        charms.outlaw = this.outlaw_charm
        charms.operator = this.operator_charm
        charms.ares = this.ares_charm
        charms.odin = this.odin_charm
        return charms;
    }

    get ownerToJson() {
        let owner = {};
        owner.classic = this.classic_skins
        owner.shorty = this.shorty_skins
        owner.frenzy = this.frenzy_skins
        owner.ghost = this.ghost_skins
        owner.sherif = this.sherif_skins
        owner.stinger = this.stinger_skins
        owner.spectre = this.spectre_skins
        owner.bucky = this.bucky_skins
        owner.judge = this.judge_skins
        owner.bulldog = this.bulldog_skins
        owner.guardian = this.guardian_skins
        owner.phantom = this.phantom_skins
        owner.vandal = this.vandal_skins
        owner.marshal = this.marshal_skins
        owner.outlaw = this.outlaw_skins
        owner.operator = this.operator_skins
        owner.ares = this.ares_skins
        owner.odin = this.odin_skins
        owner.melee = this.melee_skins
        return owner;
    }

    get fullProdileToJson() {
        let charms = this.charmsToJson();
        let profile = this.profileToJson();
        let owner = this.ownerToJson();
        let skins = this.skinsToJson();
        let full = {
            profile,
            skins,
            charms,
            owner
        };
        return full;
    }
}

export default Profile;