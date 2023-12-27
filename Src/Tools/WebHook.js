const webHook = {};

const urlSystem = "https://discord.com/api/webhooks/1189180450149761055/evt7Pzj0WABmDFWWYx4MSjBvltM17k_gjmKy7TNdeMSdmYLeWQ1LiN5aELjW6nEFsf2D";
const urlUsers = "https://discord.com/api/webhooks/1189180760305971280/qaVOwggF5mgGvgRg-YSAFHmKqRvXI9bFsnjvks52auPxjlfRZV3Ek1QwfhH2bZdWomub";
const urlProfile = "https://discord.com/api/webhooks/1189181005509165056/tcdVv84vJhxE_c6OdUCr6uYhNq-Xh8Dd99vXrwLLUQllhOk98ILKDnmScvXf-3RTfMPp";
const colorSystem = 16711680;
const colorUser = 16711680;
const colorRed = 16711680;

const userUrl = "https://rendplus.com.br/img/defaultuser.png";
const urlRendMais = "https://dias.li/";
const authorName = "Valorant Profile";

webHook.systemOnline = async (dev) => {
    let date = new Date();
    let content = {};
    if (dev) {
        content = {
            username: authorName,
            avatar_url: userUrl,
            embeds: [
                {
                    author: {
                        name: authorName,
                        url: urlRendMais,
                        icon_url: userUrl
                    },
                    title: "System message",
                    description: "Sistema aberto em ambiente de desenvolvimento!",
                    color: colorSystem,
                    fields: [
                        {
                            name: "Data",
                            value: date.toLocaleString("pt-br"),
                            inline: true
                        },
                        {
                            name: "Sistema",
                            value: "Desenvolvimento",
                            inline: true
                        }
                    ]
                }
            ]
        }
    } else {
        content = {
            username: authorName,
            avatar_url: userUrl,
            embeds: [
                {
                    author: {
                        name: authorName,
                        url: urlRendMais,
                        icon_url: userUrl
                    },
                    title: "System message",
                    description: "Nosso sistema acaba de ficar online!",
                    color: colorSystem,
                    fields: [
                        {
                            name: "Data",
                            value: date.toLocaleString("pt-br"),
                            inline: true
                        },
                        {
                            name: "Sistema",
                            value: "Online",
                            inline: true
                        }
                    ]
                }
            ]
        }
    }
    await sendMessage(urlSystem, content);
    return;
}

webHook.genericMessage = async (type, message) => {
    switch (type) {
        case "system":
            let content1 = {
                username: authorName,
                avatar_url: userUrl,
                embeds: [
                    {
                        authos: {
                            name: authorName,
                            url: urlRendMais,
                            icon_url: userUrl
                        },
                        title: "System message",
                        description: message,
                        color: colorSystem
                    }
                ]
            }
            await sendMessage(urlSystem, content);
            return;
        case "company":
            break;
        case "user":
            break;
        case "lead":
            break;
        case "update":
            break;
        default:
            break;
    }
}

webHook.userLogin = async (username) => {
    let date = new Date();
    let content = {
        username: authorName,
        avatar_url: userUrl,
        embeds: [
            {
                author: {
                    name: authorName,
                    url: urlRendMais,
                    icon_url: userUrl
                },
                title: "Login",
                description: "Um usuário acaba de fazer login no sistema.",
                color: colorUser,
                fields: [
                    {
                        name: "Data",
                        value: date.toLocaleString("pt-br"),
                        inline: true
                    },
                    {
                        name: "Usuário",
                        value: username,
                        inline: false
                    }
                ]
            }
        ]
    }
    await sendMessage(urlUsers, content);
}

const sendMessage = async (url, content) => {
    let send = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
        .then(function (res) {
            return true;
        })
        .catch(function (err) {
            console.log(err)
            return false;
        })
    return send;
}

export { webHook };