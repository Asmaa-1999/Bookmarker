var bookmarkName = document.getElementById("bookmarkName");
var bookmarkSiteURL = document.getElementById("siteURL");
var tableBody = document.getElementById("tableBody");
var requiredName = document.getElementById("requiredName");
var requiredUrl = document.getElementById("requiredUrl");
var contenerBookmark = [];



if (localStorage.getItem("name") == null) {
    contenerBookmark = [];
}
else {
    contenerBookmark = JSON.parse(localStorage.getItem("name"));
    displayBookmark();
}




function addBookmark() {

    var Bookmark = {
        nameSide: bookmarkName.value,
        urlside: bookmarkSiteURL.value,
    }
    if
        (bookmarkName.value == 0) {
        requiredName.innerHTML = `<p class="border-1 p-2 textrequ ">Name is required</p>`
    }

    if (bookmarkSiteURL.value == 0) {

        requiredUrl.innerHTML = `<p class="border-1 p-2 textrequ ">Url Field is required</p>`;
    }
    else {
        requiredName.innerHTML = ``
        requiredUrl.innerHTML = ``;
        contenerBookmark.push(Bookmark);
        localStorage.setItem("name", JSON.stringify(contenerBookmark));
        displayBookmark();
        clearBookmark();
    }
    

}

function displayBookmark() {
    var contener = "";

    for (var i = 0; i < contenerBookmark.length; i++) {

        contener += `
                <div class="col-12 p-5 mt-4 d-flex boxdisplay" >
                <h4 class="px-5">${contenerBookmark[i].nameSide}</h4>
                <a href="${contenerBookmark[i].urlside}" target="_blank"><button onclick="" class=" btnVis btn mx-2" id="btnVisit">Visit</button></a>
                <button onclick="DeleteBookmark(${i});" class=" btnRemov btn" id="btnDelete">Delete</button>
            </div> `

    }
    tableBody.innerHTML = contener;



}

function clearBookmark() {
    bookmarkName.value = "";
    bookmarkSiteURL.value = "";
}

function DeleteBookmark(index) {

    contenerBookmark.splice(index, 1);
    localStorage.setItem("name", JSON.stringify(contenerBookmark));
    displayBookmark();
}

/*
function validation() {
    var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if (regex.test(bookmarkSiteURL) == true) {
       console.log("helo")
    }
    /*
  
    else {
        var contenerr = "";
        for (var i = 0; i < contenerBookmark.length; i++) {
            contenerr += `
            <div class="col-12 p-5 mt-4 d-flex boxdisplay" >
            <h4 class="px-5">${contenerBookmark[i].nameSide}</h4>
            <a href="file:///E:/route/assignment3-js/index.html?"><button onclick="" class=" btnVis btn mx-2" id="btnVisit">Visit</button></a>
            <button onclick="DeleteBookmark(${i});" class=" btnRemov btn" id="btnDelete">Delete</button>
        </div> `

        }
    }

    tableBody.innerHTML = contener;
} 

validation(); */



