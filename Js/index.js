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
    resultcont.innerHTML = `<img width="123" src="image/loading.svg" alt="">`
    let key = "ema_live_G1B7Seg639rOFXSUUJQk5mqV3h9JciA1cgPeWD3o";
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let tableHTML = '<table style="border-collapse: collapse; width: 100%;">';
        
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            tableHTML += `<tr><td>${key}</td><td>${result[key]}</td></tr>`;
        }
    }
    
    tableHTML += `</table>`;
    resultcont.innerHTML = tableHTML;
    if (result.smtp_check==true) {
        setTimeout(() => {
            alert("you can send mail on this email")
        }, 3000);
    }else
    {
        setTimeout(() => {
            alert("you can't send mail on this email")
        }, 3000);
    }
    
    // if(result["smtp_check"]==false){
    //     let massge="Can't send a mail at this email address"
    //     resultcont.innerHTML=massge
        
    // }else{
    //     let massge="you can send a mail at this email address"
    //     resultcont.innerHTML=massge
        
    // }
})