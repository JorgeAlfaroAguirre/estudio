const sideBarJSTemplate = `
    <ul>
        <li>Básico</li>
        <li>Intermedio</li>
        <li>Avanzado</li>
        <li>Frameworks</li>
        <li>BackEnd</li>
    </ul>
`

const contentJSTemplate = `
    <h2>JavaScript</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum quos dignissimos quis voluptatem laborum maiores reiciendis quisquam fugiat natus ad, ab doloremque eius nemo modi aperiam vel magnam. Repellat!</p>

    ${sideBarJSTemplate}


`

let JSBool = false

const getContent = document.getElementsByTagName("content").item(0)

const JS_changeContent = () => getContent.innerHTML = contentJSTemplate
const JS_hideContent = () => getContent.innerHTML = ""

const getsideBar = document.getElementById("sideBar");

const JS_changeSideBar = ()=> getsideBar.innerHTML= sideBarJSTemplate
const JS_HideSideBar = ()=> getsideBar.innerHTML= ""


const getJavaScript = ()=>{
    if(JSBool==false){
        JS_changeSideBar()
        JS_changeContent()
        JSBool = true
    }else{
        JS_HideSideBar()
        JS_hideContent()
        JSBool = false
    }
}