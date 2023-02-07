const templateoutPut = `
    <h3>Output</h3>

    <p>JavaScript can "display" data in different ways:</p>
    <article>
        <h4>Output Básico</h4>
        <ul>
            <li>Writing into an HTML element, using innerHTML.<button type="button" onclick="outputHTML()">innerHTML = ""</button></li>
            <div id="outputHTML"></div>
            <li>Writing into an HTML element, using innerText.<button type="button" onclick="outputText()">innerText = ""</button></li>
            <div id="Text"></div>
            <li>Writing into the HTML output using document.write()<button type="button" onclick="outputWrite()">document.write()</button></li>
            <div id="write"></div>
            <li>Writing into an alert box, using window.alert().<button type="button" onclick="outputAlert()">alert()</button></li>
            <li>Writing into an alert box, using window.prompt().<button type="button" onclick="outputPrompt()">prompt()</button></li>
            <div id="outputPrompt"></div>
            <li>Writing into the browser console, using console.log().<button type="button" onclick="outputConsoleLog()">console.log()</button></li>
            <div id="consoleLog"></div>
            <li>Writing into the browser console, using console.warn().<button type="button" onclick="outputConsoleWarn()">console.warn()</button></li>
            <div id="consoleWarn"></div>
            <li>Writing into the browser console, using console.error().<button type="button" onclick="outputConsoleError()">console.error()</button></li>
            <div id="consoleError"></div>
        </ul>
    </article>

    <h3>Para poder usar adecuadamente el Output tenemos que entender de las siguientes materias</h3>

    <ul>
        <li>GetElement</li>
        <li>QuerySelector</li>
        <li>Button</li>
        <li>Inputs</li>
    </ul>

    `;

const JS_showOutput = () => getContent.innerHTML = templateoutPut
const JS_hideOutput = () => getContent.innerHTML = ""

let JS_boolOutput = false

const JS_Output = ()=>{
    if(JS_boolOutput == false){
        JS_showOutput()
    }else{
        JS_hideOutput()
    }JS_boolOutput=!JS_boolOutput
}


const outputHTML = ()=> document.getElementById("outputHTML").innerHTML = "<strong>Este es un output con innerHTML, con la etiqueta strong</strong>";
const outputText = ()=> document.getElementById("Text").innerText = "<strong>Este es un output con innerHTML, con la etiqueta strong</strong>";
const outputWrite = () => document.write("Haber")
const outputAlert = () => window.alert("Este es un window alert.")
const outputPrompt = () => {
    let a = window.prompt("Este es un window promt.","PlaceHolder")
    console.log(a)
    const getPrompt = ()=>document.getElementById("outputPrompt").innerHTML = a
    getPrompt()
}

/* const confirmar = window.confirm("confirmas")

console.log(confirmar) */


const outputConsoleLog = () => console.log("Este es un console.log()")
const outputConsoleWarn = () => console.warn("Este es un console.warn()")
const outputConsoleError = () => console.error("Este es un console.error()")

let a = 20,
    b = 30,
    c = 40,
    d = "Hola ",
    e = "Mundo!"

console.log(a,b,c,d,e)
console.log({a,b,c,d,e})

console.log('%c Este es el valor que cambia de color', 'color:blue')

console.table({a,b,c,d,e})

saludo = d+e
console.log(saludo)

const arr = new Array(10)

console.log(arr)