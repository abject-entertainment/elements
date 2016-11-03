import path from 'path';

class UIFormattedField extends HTMLElement
{
	constructor()
	{
		console.log("UIFormattedField constructor");
	}

	connectedCallback()
	{
		console.log("UIFormattedField connected");
	}

	disconnectedCallback()
	{
		console.log("UIFormattedField disconnected");
	}

	attributeChangedCallback(attrName, oldVal, newVal, namespace)
	{
		console.log("UIFormattedField attribute changed");
	}

	adoptedCallback()
	{
		console.log("UIFormattedField adopted");
	}
}

module.exports = UIFormattedField;

if (typeof(customElements) !== 'undefined')
{ customElements.define(path.basename(__filename, '.js'), UIFormattedField); }
