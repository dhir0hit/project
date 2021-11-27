function filterFunction() {
    var input, filter, a, i;

    input = document.getElementById("search_bar");
    filter = input.value.toUpperCase();
    a = document.getElementsByClassName("dropdown-link");

    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}