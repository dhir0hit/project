whole_ID = ["Arancini", "Lasanga", "Osso", "Polenta", "Ravioli", "Ribollita", "Risotto", "Spagetti",
    "Anhui", "Cantonese", "Fujian", "Hunan", "Jiangsu", "Shandong", "Szechuan", "Zhejiang",
    "Affogato", "Americano", "Caffe_Latte", "Caffe_Mocha", "Caffe_Au_Lait", "Cappuccino", "Cold_Brew_Coffee", "Double_espresso",
    "AlmondMalaiKulfi", "ApplePie", "ChocolateCoffeeTruffle", "CoconutKheer", "FudgyChewyBrownies", "LemonTart", "LowFatTiramisu",
    "Risotto_Alla_Milanese", "Polenta", "Lasagna", "Ravioli", "Osso_Buco", "Arancini", "Ribollita",
    "Spaghetti_Alla_Carbonara",
    ]

function $(ID) {
    return document.getElementById(ID);
}

window.onload = function () {

    for (var i = 0; i < whole_ID.length ; i++) {
        var ID = whole_ID[i];
        if (localStorage.ID != undefined) {
            var item_numbers = $(ID);


            alert(ID);
            $(ID).style.display = "block";
            $(ID + "_items").value = item_numbers;
        }
    }
}
