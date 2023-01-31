// Global variables
let form;

// Initiazling global variables and event handlers
function init() {
    form = document.querySelector("form");

    if(!BASE.isSignedIn()) {
        window.location.replace("index.html");
    }

    // Event handlers
    form.addEventListener("submit", event => {
        addBook();
    });
}

async function addBook() {
    let author = form.elements.author.value;
    let title = form.elements.title.value;
    let object = {
        "author": author,
        "title": title
    }

    let res = await postBook(object);
    
    console.log(res);

    if(res === 201) {
        console.log("OK");
    } else {
        console.log("Något gick fel!");
    }
}

/**
 * @param {} book 
 */
async function postBook(book) {
    const response = await fetch("https://localhost:7241/Book", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(book)
    });

    return response.status;
}

window.onload = init();