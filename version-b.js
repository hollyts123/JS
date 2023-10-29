function navigateToURL(url) {
    setTimeout(function () {
        window.location.href = url;
    }, 4000);
}

let address = prompt("Enter the URL: ");
navigateToURL(address);
