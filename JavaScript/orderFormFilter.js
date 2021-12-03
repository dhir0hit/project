noOrder = true;
whole_ID = ["Lasanga", "Ravioli", "Anhui", "Cantonese", "Hunan", "Jiangsu", "Shandong", "Affogato", "Americano", "Caffe_Latte", "Caffe_Mocha", "Caffe_Au_Lait", "Cappuccino", "Cold_Brew_Coffee", "Double_espresso", "AlmondMalaiKulfi", "ApplePie", "ChocolateCoffeeTruffle", "CoconutKheer", "FudgyChewyBrownies", "LemonTart", "LowFatTiramisu", "Risotto_Alla_Milanese", "Polenta", "Osso_Buco", "Arancini", "Ribollita", "Spaghetti_Alla_Carbonara"];
items_price = [26.73, 40.10, 68.77, 55.45, 11.00, 24.57, 44.95, 5.34, 3.65, 3.35, 2.95, 2.85, 3.05, 4.15, 3.35, 2.65, 17.34, 14.34, 11.23, 21.23, 23.54, 15.34, 34.45, 18.34, 14.24, 10.34, 19.34, 21.35];
function $(ID) {return document.getElementById(ID);}
var itemSubTotal = 0;
var items_sub_total = $("Items_Subtotal");
var g_s_t = $("GST");
var h_s_t = $("HST");
var grand_total = $("Grand_Total");


window.onload = function () {
    for (var i = 0; i < whole_ID.length ; i++) {
        var element = whole_ID[i];
        var item_numbers = localStorage.getItem(element);
        var no_order_placed = $("no_order");
        var per_item_total;

        if (parseInt(item_numbers) > 0) {
            no_order_placed.style.display = "none";
            $(element).style.display = "block";
            noOrder = false;

            per_item_total = items_price[i] * parseInt(item_numbers);
            $(element + "_subtotal").innerHTML = per_item_total;

            itemSubTotal += items_price[i] * parseInt(item_numbers);
        }
        $(element + "_items").value = item_numbers;

        if (noOrder) {
            no_order_placed.style.display = "block";
        }
    }

    items_sub_total.innerHTML = itemSubTotal;
    g_s_t.innerHTML = (itemSubTotal * 6 / 100).toFixed(2);
    h_s_t.innerHTML = (itemSubTotal * 14 / 100).toFixed(2);
    grand_total.innerHTML = (itemSubTotal + itemSubTotal * 6 / 100 + itemSubTotal * 14 / 100).toFixed(2);
}

//
// window.onchange = function () {
//     items_sub_total.innerHTML = itemSubTotal;
//     g_s_t.innerHTML = items_sub_total * 6 / 100;
//     h_s_t.innerHTML = items_sub_total * 14 / 100;
//     grand_total.innerHTML = items_sub_total + g_s_t + h_s_t;
// }