function $$(expr, con) {
	return Array.prototype.slice.call((con || document).querySelectorAll(expr));
}

// Generate SVG for the buttons

$$('nav > a.button').forEach(function(button, i) {
	var content = button.textContent.trim();
	
	button.innerHTML = '';
	//button.setAttribute('title', content);
	
	var svgNS = 'http://www.w3.org/2000/svg';
	var svg = document.createElementNS(svgNS, 'svg');
	
	svg.setAttribute('width', '100%');
	svg.setAttribute('height', '100%');
	svg.setAttribute('viewBox', '0 0 100 100');
	
	var path = document.createElementNS(svgNS, 'path');
	
	path.setAttribute('d', 'M 0,50 a 50,50 0 1,1 0,.001');
	path.setAttribute('id', 'textpath' + (i+1));
	
	svg.appendChild(path);
	
	var text = document.createElementNS(svgNS, 'text');
	
	text.setAttribute('transform', 'rotate(-90,50,50)')
	
	var textpath = document.createElementNS(svgNS, 'textPath');
	
	textpath.setAttribute('startOffset', '50%');
	textpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#textpath' + (i+1))
	textpath.setAttribute('baseline-shift', '-.7em');
	textpath.appendChild(path.ownerDocument.createTextNode(content.toUpperCase()));
	
	text.appendChild(textpath);
	
	svg.appendChild(text);
	
	button.appendChild(svg);
	button.appendChild(document.createElement('span'));
});

