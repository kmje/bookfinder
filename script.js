const sumbitSearch = document.querySelector("#search-button");
const searchQuery = document.querySelector("#search-bar");
const buttonClick = sumbitSearch.addEventListener('click', function(){
    if(searchQuery.value != "") {
        processQuery(searchQuery.value);
    }
});

function processQuery(query){
    console.log(query);
}

