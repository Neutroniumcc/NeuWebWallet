const inputPrivatekey = document.getElementById("Privatekey");
const inputPublickey = document.getElementById("Publickey");
const inputPassword = document.getElementById("password")
const buttonGnerate = document.getElementById("buttongenerate");


buttonGnerate.addEventListener("click" , buttonoperation );
function buttonoperation(){
    const PrivatekeyValue = inputPrivatekey.value ;
    const PublickeyValue = inputPublickey.value ;
    const passwordValue = inputPassword.value ;
    console.log(PrivatekeyValue , PublickeyValue , passwordValue);

    saveLocalPrivate(PrivatekeyValue);
    savePublic(PublickeyValue);
    savepassword(passwordValue);
}

function savelocal(event){
    let local ;
    if(localStorage.getItem("local") === null){
        local = [];
    }else{
        local = JSON.parse(localStorage.getItem("local"))
    }
    local.push(event)
    localStorage.setItem("local" , JSON.stringify(local));
}

function saveLocalPrivate(event){
    savelocal(event);
}
function savePublic(event){
    savelocal(event);
}
function savepassword(event){
    savelocal(event);
}