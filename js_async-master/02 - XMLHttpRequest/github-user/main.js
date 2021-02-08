
const postBtn = document.getElementById("post-Btn");

const input = document.querySelector("input")


function showParsedData(obj) {

    console.log(obj)

    if (obj.message === "Not Found") {
        return document.querySelector("body").innerHTML += `<p class="userNotFound">User Not Found!</p>`
    }
    // obj.data.forEach(function(elm) {
        // += is appending all the elements to the body in the loop
        return document.querySelector("body").innerHTML += `
        <div class="searchResult">
            <div class="imageContainer">
                <img src="${obj.avatar_url}">
            </div>
            <div class="gitProfile">
                <p class="profileText">Name : ${obj.name}</p>
                <p class="profileText">ID : ${obj.id}</p>
                <p class="profileText">Bio : ${obj.bio}</p>
            </div>
        </div>`
    // }) 
}


const getData = () => {
    console.log("lelee")
    fetch(`https://api.github.com/users/${input.value}`).then((response) => response.json()).then((data) => showParsedData(data))
    // document.querySelector("body").innerHTML = ""
};


postBtn.addEventListener("click", getData);


// const sendHttpRequest = (method, url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     // xhr.responseType = "json";

//     xhr.onload = () => {
//         const data = xhr.response; // The received data will not JS but a JSON data which is a large stringified object(large string), to be able to read the data, we convert it to JS object using JSON.parse(xhr.response)
//         const parsedData = JSON.parse(data)
//         console.log(data)
//         console.log(parsedData);
//         showParsedData(parsedData)

//     };

//     xhr.send();
// }