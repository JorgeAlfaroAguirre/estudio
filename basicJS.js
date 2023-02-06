const templateoutPut = `
    <h3>Output</h3>

    <p>JavaScript can "display" data in different ways:</p>
    <article>
        <h4>Output</h4>
        <ul>
            <li>Writing into an HTML element, using innerHTML.<button type="button" onclick="outputHTML()">innerHTML = ""</button></li>
            <div id="outputHTML"></div>
            <li>Writing into an HTML element, using innerText.<button type="button" onclick="outputText()">innerText = ""</button></li>
            <div id="Text"></div>
            <li>Writing into the HTML output using document.write()<button type="button" onclick="outputWrite()">document.write()</button></li>
            <div id="write"></div>
            <li>Writing into an alert box, using window.alert().<button type="button" onclick="outputAlert()">alert()</button></li>
            <div id="alert"></div>
            <li>Writing into the browser console, using console.log().<button type="button" onclick="outputConsole()">console.log()</button></li>
            <div id="console"></div>
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
const outputConsole = () => console.log("Este es un console.log()")