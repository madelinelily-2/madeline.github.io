var rhit = rhit || {};


rhit.initializePage = function(){
	document.querySelector("#menuAboutMe").onclick = (event) =>{
        window.location.href = `/index.html`;
    }
	document.querySelector("#menuResume").onclick = (event) =>{
        window.location.href = `/resume.html`;
    }
};
   
/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.initializePage();
	
};

rhit.main();
