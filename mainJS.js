//JS:

const sideBarJSTemplate = `
    <ul>
        <li id="JS_Basic">Básico</li>
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

const JS_changeContent = () => getContent.innerHTML = contentJSTemplate
const JS_hideContent = () => getContent.innerHTML = ""

const getsideBar = document.getElementById("sideBar");

const JS_changeSideBar = ()=> getsideBar.innerHTML= sideBarJSTemplate
const JS_HideSideBar = ()=> getsideBar.innerHTML= ""    

document.getElementById("JS").addEventListener("click", ()=>{
    if(JSBool==false){
        JS_changeSideBar()
        JS_changeContent()
    }else{
        JS_HideSideBar()
        JS_hideContent()
    } JSBool = !JSBool
})

// JS BASIC


const JS_Basic = `<p>Hola Mundo!</p>

`

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

const getJSBasicList = document.getElementById("JS_BasicList");

const JS_changeJSBasicList = ()=> getJSBasicList.innerHTML= JS_BasicList
const JS_HideJSBasicList = ()=> getsideBar.innerHTML= ""


document.getElementById("JS_Basic").addEventListener("click", ()=>{
    console.log("Probando")
})



//JS INTERMEDIATE



const jsintermediate = `

`
const jsAdvaced = `

`
const jsFrameworks = `

`
const jsBackEnd = `

`
