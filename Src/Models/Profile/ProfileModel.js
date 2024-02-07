import { Schema, model } from "mongoose";

const profileSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    classic: {
        type: String,
        required: true
    },
    frenzy: {
        type: String,
        required: true
    },
    ghost: {
        type: String,
        required: true
    },
    shorty: {
        type: String,
        required: true
    },
    sherif: {
        type: String,
        required: true
    },
    stinger: {
        type: String,
        required: true
    },
    spectre: {
        type: String,
        required: true
    },
    guardian: {
        type: String,
        required: true
    },
    phantom: {
        type: String,
        required: true
    },
    vandal: {
        type: String,
        required: true
    },
    bucky: {
        type: String,
        required: true
    },
    judge: {
        type: String,
        required: true
    },
    bulldog: {
        type: String,
        required: true
    },
    marshal: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    outlaw: {
        type: String,
        required: true
    },
    ares: {
        type: String,
        required: true
    },
    odin: {
        type: String,
        required: true
    },
    melee: {
        type: String,
        required: true
    },
    card: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    classic_owner: {
        type: Array,
        required: true
    },
    shorty_owner: {
        type: Array,
        required: true
    },
    frenzy_owner: {
        type: Array,
        required: true
    },
    ghost_owner: {
        type: Array,
        required: true
    },
    sherif_owner: {
        type: Array,
        required: true
    },
    stinger_owner: {
        type: Array,
        required: true
    },
    spectre_owner: {
        type: Array,
        required: true
    },
    bucky_owner: {
        type: Array,
        required: true
    },
    judge_owner: {
        type: Array,
        required: true
    },
    bulldog_owner: {
        type: Array,
        required: true
    },
    guardian_owner: {
        type: Array,
        required: true
    },
    phantom_owner: {
        type: Array,
        required: true
    },
    vandal_owner: {
        type: Array,
        required: true
    },
    marshal_owner: {
        type: Array,
        required: true
    },
    outlaw_owner: {
        type: Array,
        required: true
    },
    operator_owner: {
        type: Array,
        required: true
    },
    ares_owner: {
        type: Array,
        required: true
    },
    odin_owner: {
        type: Array,
        required: true
    },
    melee_owner: {
        type: Array,
        required: true
    },
    classic_charm: {
        type: String,
        required: true
    },
    frenzy_charm: {
        type: String,
        required: true
    },
    ghost_charm: {
        type: String,
        required: true
    },
    shorty_charm: {
        type: String,
        required: true
    },
    sherif_charm: {
        type: String,
        required: true
    },
    stinger_charm: {
        type: String,
        required: true
    },
    spectre_charm: {
        type: String,
        required: true
    },
    guardian_charm: {
        type: String,
        required: true
    },
    phantom_charm: {
        type: String,
        required: true
    },
    vandal_charm: {
        type: String,
        required: true
    },
    bucky_charm: {
        type: String,
        required: true
    },
    judge_charm: {
        type: String,
        required: true
    },
    bulldog_charm: {
        type: String,
        required: true
    },
    marshal_charm: {
        type: String,
        required: true
    },
    operator_charm: {
        type: String,
        required: true
    },
    outlaw_charm: {
        type: String,
        required: true
    },
    ares_charm: {
        type: String,
        required: true
    },
    odin_charm: {
        type: String,
        required: true
    },
});

const profileModel = model("profile", profileSchema);

export { profileModel };