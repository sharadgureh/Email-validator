console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}



subtm.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultcont.innerHTML = `<img width="123" src="/project/Email-validatior/image/loading.svg" alt="">`
    let key = "ema_live_hoMBlv3MIn2tcbmfIM5moCzMIM2dlmMa6ZuZqAmy";
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultcont.innerHTML = str
})