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

