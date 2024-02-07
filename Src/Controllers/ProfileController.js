import { valorant } from '../Tools/index.js';

const profileController = {};

const getTypes = {};

getTypes.getSkisn = async (res, profile) => {

}

getTypes.getProfile = async (res, profile) => {

}

getTypes.getOwner = async (res, profile) => {

}

getTypes.getCharms = async (res, profile) => {

}

getTypes.getFullProfile = async (res, profile) => {

}

profileController.getProfile = async (req, res, next) => {
    console.log(valorant.getUsageWeaponsList());
    let params = req.params;
    if (params.profile != null) {
        let query = req.query;
        if (query.type != null) {
            switch (query.type) {
                case "profile":
                    return getTypes.getProfile(res, params.profile);
                case "owner":
                    return getTypes.getOwner(res, params.profile);
                case "charms":
                    return getTypes.getCharms(res, params.profile);
                case "skins":
                    return getTypes.getSkisn(res, params.profile);
                case "full":
                    return getTypes.getFullProfile(res, params.profile);
                default:
                    break;
            }
            return res.render("Profile", { name: params.profile });
        } else {
            return res.render("Profile", { name: params.profile });
        }
    }
    return res.render("Profile", { name: "dias" });
}

export default profileController;