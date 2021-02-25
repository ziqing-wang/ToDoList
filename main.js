const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addNewItem);

// Create a new list item when clicking on the "Add" button
function addNewItem() {
    const inputArea = document.querySelector(".new-item-input");
    let inputValue = inputArea.value;

    let newLi = document.createElement("LI");
    newLi.className = "item";

    //create new p text in li
    let newP = document.createElement("P");
    let p_text = document.createTextNode(inputValue);
    const ul = document.querySelector(".list-box");

    newP.appendChild(p_text);
    newLi.appendChild(newP);

    if (inputValue === "") {
        alert("Oops, you didn't add anything.");
    } else {
        ul.appendChild(newLi);

        //create new close button for list item
        let close_btn = document.createElement("BUTTON");
        let btn_txt = document.createTextNode("\u00D7");
        close_btn.className = "btns";
        close_btn.appendChild(btn_txt);
        newLi.appendChild(close_btn);

        //create new checkbox for list item
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        newLi.insertBefore(checkBox, newP);

        // ******* add onclick listener to new item **********
        close_btn.addEventListener('click', deleteItem);
    }
    //clear the input .value 
    inputArea.value = "";
}

//delete the current item
let closeBtns = document.querySelectorAll(".item .btns");
closeBtns.forEach(btn => {
    btn.addEventListener('click', deleteItem);
});

function deleteItem() {
    let li_dom = this.parentNode;
    li_dom.remove();
}

//get the current date
let header = document.querySelector(".header h1");
let now = new Date();
header.innerText = dateBuilder(now);

function dateBuilder(d) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
  //  let year = d.getFullYear();

    return `${day} ${date}, ${month}`;
}