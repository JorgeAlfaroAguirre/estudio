//JS:


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


const show =(id, template) => document.getElementById(id).innerHTML = template
const hide =(id) => document.getElementById(id).innerHTML = ""

const showAndHide =(Select,List, template)=>{
    bool = false
    document.getElementById(Select).addEventListener("click",()=>{
        if(bool==false){
            show(List,template)
        }else{
            hide(List)
        }bool=!bool
    })
}


const JS_Basic = ()=>showAndHide("JS_Basic", "JS_BasicList", JS_BasicList)
const JS_Intermediate = ()=>showAndHide("JS_Intermediate", "JS_IntermediateList", JS_IntermediateList)
const JS_Advanced = ()=>showAndHide("JS_Advanced", "JS_AdvancedList", JS_AdvancedList)
const JS_Frameworks = ()=>showAndHide("JS_Frameworks", "JS_FrameworksList", JS_FrameworksList)
const JS_BackEnd = ()=>showAndHide("JS_BackEnd", "JS_BackEndList", JS_BackEndList)
