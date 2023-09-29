document.addEventListener("DOMContentLoaded",
/* method 2 to change the bottom from say it  in to said it */
 function (event) {

  function sayHello (event) {
            this.textContent = "Said it!";
		var name =
		document.getElementById("name").value;
		var message = "<h2>hello " + name + "!</h2>"
		document.getElementById("content")
		.innerHTML = message;
			
			if (name === "student") {
			var title =
			document
			.querySelector("#title")
		    .textcontent;
		   title = "welcom again ";
			document
			.querySelector("h1")
		    .textcontent = title;
				
				
			}

		  }		  
		     document.querySelector("button") 
			 .addEventListener("click",sayHello);
			 
			
	}
  );	

	

