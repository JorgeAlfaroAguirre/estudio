//JS:

const sideBarJSTemplate = `
    <ul>
        <li><button type="button" onclick="JS_Basic()">Básico</button></li>
        <div id="JS_BasicList"></div>
        <li>Intermedio</li>
        <li>Avanzado</li>
        <li>Frameworks</li>
        <li>BackEnd</li>
    </ul>
`

const contentJSTemplate = `
    <h2>JavaScript</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum quos dignissimos quis voluptatem laborum maiores reiciendis quisquam fugiat natus ad, ab doloremque eius nemo modi aperiam vel magnam. Repellat!</p>

`
let JSBool = false

const getContent = document.getElementsByTagName("content").item(0)

const JS_showContent = () => getContent.innerHTML = contentJSTemplate
const JS_hideContent = () => getContent.innerHTML = ""

const getsideBar = document.getElementById("sideBar");

const JS_showSideBar = ()=> getsideBar.innerHTML= sideBarJSTemplate
const JS_hideSideBar = ()=> getsideBar.innerHTML= ""    

document.getElementById("JS").addEventListener("click", ()=>{
    if(JSBool==false){
        JS_showSideBar()
        JS_showContent()
    }else{
        JS_hideSideBar()
        JS_hideContent()
    } JSBool = !JSBool
})

// JS BASIC


const JS_BasicList =`
    <ul>
        <li>Where To</li>
        <li>Output</li>
        <li>Commets</li>
        <li>Variables</li>
        <li>Operators</li>
        <li>Data Types</li>
        <li>Functions</li>
        <li>Objects</li>
        <li>Events</li>
        <li>Strings</li>
        <li>Numbers</li>
        <li>Arrays</li>
        <li>Dates</li>
        <li>Math</li>
        <li>Random</li>
        <li>Booleans</li>
        <li>Comparison</li>
        <li>If Else</li>
        <li>Switch</li>
        <li>Loops</li>
        <li>Break</li>
        <li>Sets</li>
        <li>Maps</li>
        <li>RegExp</li>
        <li></li>
    </ul>
`

let JS_BoolBasic = false

const showJS_BasicList = () =>document.getElementById("JS_BasicList").innerHTML = JS_BasicList;
const hideJS_BasicList = () =>document.getElementById("JS_BasicList").innerHTML = "";

const JS_Basic = ()=>{
    if(JS_BoolBasic == false){
        showJS_BasicList()
    }else{
        hideJS_BasicList()
    }JS_BoolBasic=!JS_BoolBasic
}




/* const getJSBasicList = document.getElementById("JS_BasicList");

const JS_changeJSBasicList = ()=> getJSBasicList.innerHTML= JS_BasicList
const JS_HideJSBasicList = ()=> getsideBar.innerHTML= ""
 */

/* document.getElementById("JS_Basic").addEventListener("click", ()=>{
    console.log("Probando")
}) */





//JS INTERMEDIATE



const jsintermediate = `

`
const jsAdvaced = `

`
const jsFrameworks = `

`
const jsBackEnd = `

`
