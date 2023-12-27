const valorant = {};

valorant.getAllWeapons = async () => {
    let send = await fetch("https://valorant-api.com/v1/weapons", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(function (res) {
            return res.json();
        })
        .catch(function (err) {
            console.log(err)
            return null;
        })
    if (send != null) {
        let guns = {
            Heavy: [],
            Rifle: [],
            Shotgun: [],
            Sniper: [],
            Sidearm: [],
            SMG: [],
            Melee: []
        }
        let aux = send.data;
        for (let i = 0; i < aux.length; i++) {
            let arm = {
                name: aux[i].displayName,
                uuid: aux[i].uuid,
                display: aux[i].displayIcon
            }
            if (aux[i].category.endsWith("Heavy"))
                guns.Heavy.push(arm);
            else
                if (aux[i].category.endsWith("Rifle"))
                    guns.Rifle.push(arm);
                else
                    if (aux[i].category.endsWith("Shotgun"))
                        guns.Shotgun.push(arm);
                    else
                        if (aux[i].category.endsWith("Sidearm"))
                            guns.Sidearm.push(arm);
                        else
                            if (aux[i].category.endsWith("Sniper"))
                                guns.Sniper.push(arm);
                            else
                                if (aux[i].category.endsWith("SMG"))
                                    guns.SMG.push(arm);
                                else
                                    if (aux[i].category.endsWith("Melee"))
                                        guns.Melee.push(arm);
        }
        return guns;
    } else {
        return null;
    }
}

export {
    valorant
}