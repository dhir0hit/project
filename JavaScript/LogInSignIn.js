var $ = function (id) {
    return document.getElementById(id);
}

function isUpperCase(string) {
    var valid = false;
    for (var i=0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            valid = false;
        }
        else if (string[i].toUpperCase() === string[i]) {
            valid = true;
            break;
        }
    }
    return valid;
}

function containsDigit(string) {
    var isvalid = false;
    for (var i=0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            isvalid = true;
        }
    }
    return isvalid;
}


function containsSpecialChar(string) {
    var isvalid = false;
    var special_Char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    for (var i=0; i < string.length; i++) {
        for (var j=0; j<special_Char.length; j++) {
            if (string[i] == special_Char[j]) {
                isvalid = true;
            }
        }
    }
    return isvalid;
}

function ShowError(idname) {
    var UserInfo = $(idname).value;
    var UserInfoError = $(idname + "_Error");
    var is_valid = true;

    if (UserInfo == "") {
        is_valid = false;

        if (idname === "User_Name" || idname === "first_name" || idname === "last_name") {
            UserInfoError.innerHTML = "User Name can not be empty";
        } else if (idname === "User_Password") {
            UserInfoError.innerHTML = "User Password can not be empty";
        }
    } else {
        UserInfoError.innerHTML = "*";
        if (idname === "User_Name") {
            if (containsSpecialChar(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "User Name can not contain Special character"}
            else if (isUpperCase(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "User Name can not be uppercase"}
            else if (containsDigit(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "User Name can not contain Digits"}
        }
        if  (idname === "User_Password") {
            if (!isUpperCase(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "Password should contain Uppercase"}
            else if (!containsDigit(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "Password should contain number"}
            else if (!containsSpecialChar(UserInfo)) {is_valid = false; UserInfoError.innerHTML = "Password should contain Special character"};
        }
    }
}

function showErrorButton() {
    var UserName = $("User_Name").value;
    var UserNameError = $("User_Name_Error");
    var UserPass = $("User_Password").value;
    var UserPassError = $("User_Password_Error");

    if (UserName == "") {
        UserNameError.innerHTML = "User Name can not be empty";
    }

    if (UserPass == "") {
        UserPassError.innerHTML = "User Password can not be empty";
    }
}


var modal = document.getElementById('Sign_Log');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementsByClassName('main_body')[0].style.display = "block";
        document.getElementsByClassName("navigation_bar")[0].style.display = "block";
    }
}

function openLogin() {
    document.getElementById('Sign_Log').style.display = 'block';
    document.getElementById('Sign_Log').style.position = "absolute";
    document.getElementById('Sign_Log').style.zIndex = "4";
    document.getElementById('Sign_Log').style.width = "95vw";
    document.getElementById('Sign_Log').style.height = "100vh";
    document.getElementById('Sign_Log').style.minHeight = "70vh";
    document.getElementsByClassName("navigation_bar")[0].style.display = "none";
    document.getElementsByClassName('main_body')[0].style.display = "none";
}


function closeLogin() {
    document.getElementById('Sign_Log').style.display = 'none';
    document.getElementsByClassName("navigation_bar")[0].style.display = "block";
    document.getElementsByClassName('main_body')[0].style.display = "block";
}

function submitOrder() {
    var FirstName = $("first_name").value;
    var LastName = $("last_name").value;
    var CustStreet = $("cust_street").value;
    var CustCity = $("cust_city").value;
    var CustState = $("cust_state").value;
    var ZipCode = $("zip_code").value;
    var CountryCA = $("Cust_country_CA").value;
    var CountryUSA = $("Cust_country_USA").value;
    var CustPhone = $("cust_phone").value;

    if (FirstName === "") {$("first_name_Error").textContent = "name can not be empty"}
    if (LastName === "") {$("first_name_Error").textContent = "name can not be empty"}
    if (CustStreet === "") {$("cust_street_Error").textContent = "Street can not be empty"}
    if (CustCity === "") {$("cust_city_Error").textContent = "City can not be empty"}
    if (CustState === "") {$("cust_state_Error").textContent = "State can not be empty"}
    if (ZipCode === "") {$("zip_code_Error").textContent = "Zip Code can not be empty"}
    if (CountryCA === "") {$("cust_country_Error").textContent = "Country must be Selected"}
    if (CountryUSA === "") {$("cust_country_Error").textContent = "Country must be Selected"}
    if (CustPhone === "") {$("cust_phone_Error").textContent = "Phone can not be empty"}

    if (FirstName !== "" && LastName !== "" && CustStreet !== "" && CustCity === "" && CustState === "" && ZipCode === "" && CustPhone === "") {
        
    }
}