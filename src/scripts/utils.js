export function psuedoUUID() {
	let id = "XXXXXXXX-XXXX-4XXX-" + ['8', '9', 'a', 'b'][Math.round(Math.random() * 3)] + "XXX-XXXXXXXXXXXX";
	let hex = "0123456789abcdef".split('')
	id = id.replace(/X/g, () => {
		return hex[Math.round(Math.random() * (hex.length - 1))]
	})
	return id
}

export function scrollToSection (sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
	//   const navbarHeight = document.querySelector('#Navbar').offsetHeight; 
	//   const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
	  const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
  
	  window.scrollTo({
		top: sectionPosition,
		behavior: 'smooth'
	  });
	} else {
	  console.error("No Section with an ID of <== '", sectionId, "' ==> was found");
	}
  };
  
  export function focusOnElement(elementId) {
	const element = document.getElementById(elementId);
	if (element) {
		element.focus();
	} else {
		console.error(`No element with ID '${elementId}' was found.`);
	}
  }