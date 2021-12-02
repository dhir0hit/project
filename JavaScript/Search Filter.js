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
localStorage.clear();

window.onload = function () {
    Items = ["Arancini", "Lasanga", "Osso", "Polenta", "Ravioli", "Ribollita", "Risotto", "Spagetti",
        "Anhui", "Cantonese", "Fujian", "Hunan", "Jiangsu", "Shandong", "Szechuan", "Zhejiang",
        "Affogato", "Americano", "Caffe_Latte", "Caffe_Mocha", "Caffe_Au_Lait", "Cappuccino", "Cold_Brew_Coffee", "Double_espresso",
        "AlmondMalaiKulfi", "ApplePie", "ChocolateCoffeeTruffle", "CoconutKheer", "FudgyChewyBrownies", "LemonTart", "LowFatTiramisu", "PistachioPhirni"
    ]
    for (var i=0; i < Items.length; i++) {
        localStorage.setItem(Items[i], '0');
    }
}