var count  = 0
function alertItemOrder(text) {
    count++;
    var alertText = document.getElementById("alert_text");
    var alertInfo = document.getElementById("alert_info");
    var alertItem = document.getElementById("alert_items");

    let new_alert_info = alertInfo.cloneNode(true);
    new_alert_info.id = text + "alert";
    alertItem.appendChild(new_alert_info);

    // alert items
    alertItem.style.display = "block";

    // alert_info
    // new_alert_info.style.float = "right";
    // new_alert_info.style.display = "block";
    new_alert_info.style.position = "relative";
    // new_alert_info.style.marginTop = "{0}rem".format(count);


    // alert_info p
    new_alert_info.children[0].style.display = "inline-block";

    // alert_info p strong
    new_alert_info.children[0].children[0].textContent = text;

    // alert_info close button
    // new_alert_info.children[1].style.display = "inline-block";
    new_alert_info.children[1].onclick = function () {
        new_alert_info.style.opacity = "0";
        setTimeout(new_alert_info.style.display = "none");
    };
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}