Items = ["Arancini", "Lasanga", "Osso", "Polenta", "Ravioli", "Ribollita", "Risotto", "Spagetti",
    "Anhui", "Cantonese", "Fujian", "Hunan", "Jiangsu", "Shandong", "Szechuan", "Zhejiang",
    "Affogato", "Americano", "Caffe_Latte", "Caffe_Mocha", "Caffe_Au_Lait", "Cappuccino", "Cold_Brew_Coffee", "Double_espresso",
    "AlmondMalaiKulfi", "ApplePie", "ChocolateCoffeeTruffle", "CoconutKheer", "FudgyChewyBrownies", "LemonTart", "LowFatTiramisu",
    "Risotto_Alla_Milanese", "Polenta", "Lasagna", "Ravioli", "Osso_Buco", "Arancini", "Ribollita",
    "Spaghetti_Alla_Carbonara",
]

function sendingItems(sendID) {
    var count = 1;
    var num = localStorage.getItem(sendID);
    if (num === null) {
        num = 0;
    } else {
        num = parseInt(num);
    }
    count += num;

    localStorage.setItem(sendID, count);
}

