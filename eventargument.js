document.addEventListener("DOMContentLoaded",
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
			 
			 /* event argument*/
			 document.querySelector("body")
			 .addEventListener('mousemove', 
			   function (event) {
				if (event.shiftKey === true)  {	
			   console.log("x:" + event.clientX);
			   console.log("Y:" + event.clientY);
	
			   /* &&  you can use this    
				console.log(event.clientX);
				console.log(event.clientY);
				*/
				}
			   }
			  );
	}
  );	

	

