function copyToClipBoard(url_link) {

    const numbers_url = new URL("https://dileepabandara.github.io/openjsonfiles/json/numbers.json").toString();
    const users_url = new URL("https://dileepabandara.github.io/openjsonfiles/json/users.json").toString();
    const programming_languages_url = new URL("https://dileepabandara.github.io/openjsonfiles/json/programming_languages.json").toString();
    if (url_link == 'numbers') {
        navigator.clipboard.writeText(numbers_url);
    } else if (url_link == 'users') {
        navigator.clipboard.writeText(users_url);
    } else if (url_link == 'programming_languages') {
        navigator.clipboard.writeText(programming_languages_url);
    }
    showSnackBar();
}

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}