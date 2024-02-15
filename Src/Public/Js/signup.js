async function singup() {
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let check = document.querySelector('#check').checked;
    if (!(username != null && username != "")) return alert("Preencha o nome de usuario.")
    if (!(email != null && email != "")) return alert("Preencha o email.")
    if (!(password != null && password != "")) return alert("Preencha o campo de senha.")
    if (!check) return alert("Deve estar de acordo com nossos termos para utilizar nosso sistema.")
    const data = { username, email, password };
    let host = window.location.protocol + '//' + window.location.host + '/';
    let res = await fetch(`${host}create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.console.error("Error: ", error);
            return { message: "Error", error: true };
        })
    if (res.error == false)
        document.querySelector("#login-form").click();
    return alert(res.message);
}