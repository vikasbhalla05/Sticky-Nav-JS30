let nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav(){
	if(window.scrollY >= topOfNav){
		document.body.classList.add('fix-nav');
		console.log(nav.offsetWidth);
		document.body.style.paddingTop = nav.offsetHeight +"px";
	}
	else{
		document.body.classList.remove('fix-nav');
		document.body.style.paddingTop = "0px";
	}
}

window.addEventListener('scroll', fixNav);