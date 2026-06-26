/* DOM = Document Object Model
        Object{}  that represents the structure of a web page and provides you a API to interact with it.
        Dom is tree structure of the HTML document. It is a representation of the HTML document as a tree of nodes.
        javscript can be used to interact with the dom and dynamically change the content and structure of the web page.
*/
const username ="Akhil";
const welcomeMessage=document.getElementById("welcome-msg");
welcomeMessage.textContent += username === "" ? "Guest" : username;