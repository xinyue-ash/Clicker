// get the element in html file that has id = counter-el
//DOM
// Document Object Model ( how to use javascript to modify a website)
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")
// var name : camelCase

//console.log(countEl)
// the element printed : <h2 id = "counter-el">
// console.log() : browser provided , for debuging, printing out the var
//  in chrome : inspect var -> console -> type js to debug

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    // modify/rander the inner text of element <h2 id = "counter-el"> 

}

function save() {
    let countTxt = count + " - "
    saveEl.textContent += countTxt
    // innertext only show human readable text
    //textContent returns every element in the Node(in this case)
    console.log(count)
    
    // reset after save
    count = 0
    countEl.textContent = count
}

// MDN is a good rescouse for google (web dev)

// string always wins
console.log("my num: " + 5 + 9)
// will print out  "my num : 59"