function checkField(field){
    if (field==null){
    return false
} else{
    return true
}
}
function checkLength(field){
    if(field.length < 8){
        return false
    } else{
        return true
    }
}
function checkMail(field){
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test (field)==false){
        return false
    }else{
        return true
    }
}
function checkPassword(pw1, pw2){
    if (pw1 != pw2){
    return false}
    else{
        return true
    }
}
let signUpBtn = document.getElementById('sign-up-btn').value
function checkRegister(){
    let username = document.getElementById('username').value
let email = document.getElementById('email').value
let pw= document.getElementById('password').value
let confirmed_pw = document.getElementById('confirmed-password').value

    if(checkField(username)== false || checkField(email)== false||
    checkField(pw)== false || checkField(confirmed_pw)== false ){
        alert('one or more fields is empty!')
        return
    } else if(checkLength(username) == false || checkLength(pw) == false  
    || checkLength(confirmed_pw)){
        alert('username or passwword must have 8 character length!')
        return
    } else if( checkMail(email) ==false){
        alert('wrong email format')
        return
    } else if( checkPassword(pw, confirmed_pw)== false){
        alert('password not matched!')
        return
    }else {
        alert('Sign up successfully!')
        return
    }
}