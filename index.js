
var elementsObj = null;

module.exports = function elements(config)
{
	if (elementsObj !== null)
	{ return elementsObj; }

	if (typeof(window) === 'undefined')
	{ throw "Elements is a browser library.  Use it in a browser."; }

	var config = config || {};

	var loadedElements = {};

	function loadElements(node)
	{
		if (node.nodeName.indexOf("UI-") == 0 && !(node.nodeName in loadedElements))
		{
			loadedElements[node.nodeName] = require("./classes/" + node.nodeName);
		}

		node = node.firstChild;
		while (node)
		{
			loadElements(node);
			node = node.nextSibling;
		}
	}

	function checkLoad()
	{
		if (window.document.readyState === "interactive" ||
			window.document.readyState === "complete")
		{
			clearInterval(checkInterval);
			loadElements(window.document.body);
		}
	}

	var checkInterval = setInterval(checkLoad, 10);

	return elementsObj = {
		loadElements: loadElements
	}
}
