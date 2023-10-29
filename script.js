let url = "https://http://127.0.0.1:5500/?user=User&age=25#test";
let urlObject = new URL(url);
let searchParams = urlObject.searchParams;

console.log("query params: ");
searchParams.forEach(function (value, key) {
    console.log(key + " -> " + value + ";");
});

let hash = urlObject.hash;
console.log("hash: " + hash);
