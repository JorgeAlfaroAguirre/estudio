const JSBasicTemplate = `
    <main>
    <h2>JavaScript Básico</h2>

    <ul>
        <li><button type="button" onclick="getOutput()">Output</button></li>
        <div id="output"></div>
        <li><button type="button" onclick="">Operators</button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
        <li><button type="button" onclick=""></button></li>
    </ul>
    </main>
`

const getContent = document.getElementsByTagName("content").item(0)


const changeContent = () => getContent.innerHTML = JSBasicTemplate
