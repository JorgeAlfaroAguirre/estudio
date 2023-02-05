const templateoutPut = `
    <h3>Vamos viendo</h3>

    <p>JavaScript can "display" data in different ways:</p>
    <ul>
        <li>Writing into an HTML element, using innerHTML.<button type="button" onclick="outputHTML()">innerHTML = ""</button></li>
        <div id="HTML"></div>
        <li>Writing into an HTML element, using innerText.<button type="button" onclick="outputText()">innerText = ""</button></li>
        <div id="Text"></div>
        <li>Writing into the HTML output using document.write()<button type="button" onclick="outputWrite()">document.write()</button></li>
        <div id="write"></div>
        <li>Writing into an alert box, using window.alert().<button type="button" onclick="outputAlert()">alert()</button></li>
        <div id="alert"></div>
        <li>Writing into the browser console, using console.log().<button type="button" onclick="outputConsole()">console.log()</button></li>
        <div id="console"></div>
    </ul> 
    `;

const getOutput = () =>document.getElementById("output").innerHTML = templateoutPut;

const outputHTML = ()=> document.getElementById("HTML").innerHTML = "<strong>Este es un output con innerHTML, con la etiqueta strong</strong>";
const outputText = ()=> document.getElementById("Text").innerText = "<strong>Este es un output con innerHTML, con la etiqueta strong</strong>";
const outputWrite = () => document.write("Haber")
const outputAlert = () => window.alert("Este es un window alert.")
const outputConsole = () => console.log("Este es un console.log()")