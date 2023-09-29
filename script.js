/* inspect Element 
*window
*window.document
*document.getElementById("title");
*/

/*
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);
*/



/*
function sayHello () {
	console.log(document.getElementById("name").value);
	/* value just for input Element */




// Event handling //
function sayHello (event) {
	 this.textContent = "Said it!";
	var name =
	document.getElementById("name").value;
	var message = "<h2> hello " + name + "!<h2>";
	
	document.getElementById("content")
	.innerHTML =  message;
		/*.textContent = message;*/






	/* if we write student we got a new message */
if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & welcom!";
    document
        .querySelector("h1")
        .textContent = title;
   }
  
}



/* unobstrusive event binding */
 
   document.querySelector("button" )
   .addEventListener('click', sayHello )
   
    
	/* && another methode to get the same result
	document.querySelector("button")
	.onclick = sayHello;
	*/


