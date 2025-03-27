const demo = false;
const demo_czasy = [1000]

const searchButton = document.getElementById("search")


if(demo) {
    setTimeout(() => {searchButton.classList.add("with-bar"); document.getElementById("search-input").style.display = ""}, demo_czasy[0]);
}

else {

    searchButton.onclick = () => {
        if (!searchButton.classList.contains("with-bar")) {
            searchButton.classList.add("with-bar")
            document.getElementById("search-input").style.display = ""
        }
    }
}