function click_burger_menu() {
	let button = document.getElementsByClassName('burger_btn');
	let overlay = document.getElementsByClassName('burger_overlay');
	let links_list = document.getElementsByClassName('mobile_nav');
	if(links_list[0].classList.contains('mobile_nav_active')){
		links_list[0].classList.toggle('mobile_nav_hide');
		setTimeout(function () {
			links_list[0].classList.toggle('mobile_nav_active');
		},300)
	}else{
		links_list[0].classList.toggle('mobile_nav_active');
		links_list[0].classList.toggle('mobile_nav_hide');
	}
	overlay[0].classList.toggle('overlay_active')
}

function click_overlay(){
	let overlay = document.getElementsByClassName('burger_overlay');
	let links_list = document.getElementsByClassName('mobile_nav');
	if(links_list[0].classList.contains('mobile_nav_active')){
		links_list[0].classList.toggle('mobile_nav_hide');
		setTimeout(function () {
			links_list[0].classList.toggle('mobile_nav_active');
		},300)
	}else{
		links_list[0].classList.toggle('mobile_nav_active');
		links_list[0].classList.toggle('mobile_nav_hide');
	}
	overlay[0].classList.toggle('overlay_active')
}

document.onscroll = function() {
 
  if (window.scrollY > 0 && !document.getElementsByClassName('mobile_nav')[0].classList.contains('fixed')) {
    document.getElementsByClassName('mobile_nav')[0].style.padding = "20px 0px 20px 0px";
    document.getElementsByClassName('mobile_nav')[0].style.backgroundColor = "#fff";
    document.getElementsByClassName('mobile_nav')[0].classList.add("fixed");
  }
 
  if (window.scrollY <= 0 && document.getElementsByClassName('mobile_nav')[0].classList.contains('fixed')) {
    document.getElementsByClassName('mobile_nav')[0].style.padding = "60px 0px 20px 0px";
    document.getElementsByClassName('mobile_nav')[0].style.backgroundColor = "transparent";
    document.getElementsByClassName('mobile_nav')[0].classList.remove("fixed");
  }
  
};


