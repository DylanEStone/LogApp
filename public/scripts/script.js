function objectifyForm(formArray) { //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

function updateClock() {
    var now = new Date(); //current date
    if (now.getMinutes() < 10) {
        time = now.getHours() + ":" + "0" + now.getMinutes();
    } else {
        time = now.getHours() + ':' + now.getMinutes();
    }

    // set content of HTML with ID UTC to the formatted string
    document.getElementById('UTC').value = [time];
}
updateClock();
//code before the pause