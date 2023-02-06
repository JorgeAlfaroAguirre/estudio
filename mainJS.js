//JS:

const sideBarJSTemplate = `
    <ul>
        <li id="JS_Basic">Basic</li>
        <div id="JS_BasicList"></div>
        <li id="JS_Intermediate">Intermedio</li>
        <div id="JS_IntermediateList"></div>
        <li id="JS_Advanced">Avanzado</li>
        <div id ="JS_AdvancedList"></div>
        <li id="JS_Frameworks">Frameworks</li>
        <div id ="JS_FrameworksList"></div>
        <li id"JS_BackEnd">BackEnd</li>
        <div id="JS_BackEndList"></div>
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
        JS_Basic()
        JS_Intermediate()
        JS_Advanced()
        JS_Frameworks()
        JS_BackEnd()
    }else{
        JS_hideSideBar()
        JS_hideContent()
    } JSBool = !JSBool
})

// JS BASIC


const JS_BasicList =`
    <ul>
        <li>Script</li>
        <li>Var, Let, Const</li>
    </ul>
`

let JS_BoolBasic = false

const showJS_BasicList = () =>document.getElementById("JS_BasicList").innerHTML = JS_BasicList;
const hideJS_BasicList = () =>document.getElementById("JS_BasicList").innerHTML = "";

const JS_Basic = ()=> {document.getElementById("JS_Basic").addEventListener("click", ()=>{
    if(JS_BoolBasic == false){
        showJS_BasicList()
    }else{
        hideJS_BasicList()
    }JS_BoolBasic=!JS_BoolBasic
})}


// JS INTERMEDIATE

const JS_IntermediateList = `
    <ul>
        <li>Map</li>
        <li>ssss</li>
    </ul>

`


let JS_BoolIntermediate = false

const showJS_IntermediateList = () =>document.getElementById("JS_IntermediateList").innerHTML = JS_IntermediateList;
const hideJS_IntermediateList = () =>document.getElementById("JS_IntermediateList").innerHTML = "";

const JS_Intermediate = ()=> {document.getElementById("JS_Intermediate").addEventListener("click", ()=>{
    if(JS_BoolIntermediate == false){
        showJS_IntermediateList()
    }else{
        hideJS_IntermediateList()
    }JS_BoolIntermediate=!JS_BoolIntermediate
})}


// JS ADVANCED

const JS_AdvancedList = `
    <ul>
        <li>ssss</li>
        <li>ssaaaass</li>
    </ul>

`

let JS_BoolAdvanced = false

const showJS_AdvancedList = () =>document.getElementById("JS_AdvancedList").innerHTML = JS_AdvancedList;
const hideJS_AdvancedList = () =>document.getElementById("JS_AdvancedList").innerHTML = "";

const JS_Advanced = ()=> {document.getElementById("JS_Advanced").addEventListener("click", ()=>{
    if(JS_BoolAdvanced == false){
        showJS_AdvancedList()
    }else{
        hideJS_AdvancedList()
    }JS_BoolAdvanced=!JS_BoolAdvanced
})}


//JS FRAMEWORKS

const JS_FrameworksList = `
    <ul>
        <li>React</li>
        <li>Viu</li>
    </ul>
`


let JS_BoolFrameworks = false

const showJS_FrameworksList = () =>document.getElementById("JS_FrameworksList").innerHTML = JS_FrameworksList;
const hideJS_FrameworksList = () =>document.getElementById("JS_FrameworksList").innerHTML = "";

const JS_Frameworks = ()=> {document.getElementById("JS_Frameworks").addEventListener("click", ()=>{
    if(JS_BoolAdvanced == false){
        showJS_FrameworksList()
    }else{
        hideJS_FrameworksList()
    }JS_BoolAdvanced=!JS_BoolAdvanced
})}

// JS BACKEND No me funciona Cristhian

const JS_BackEndList = `
    <ul>
        <li>Node</li>
        <li>NestJS</li>
    </ul>
`

let JS_BoolBackEnd = false

const showJS_BackEndList = () =>document.getElementById("JS_BackEndList").innerHTML = JS_BackEndList;
const hideJS_BackEndList = () =>document.getElementById("JS_BackEndList").innerHTML = "";

const JS_BackEnd = ()=> {document.getElementById("JS_BackEnd").addEventListener("click", ()=>{
    if(JS_BoolBackEnd == false){
        showJS_BackEndList()
    }else{
        hideJS_BackEndList()
    }JS_BoolBackEnd=!JS_BoolBackEnd
})}

// JS TIPESCRIPT
