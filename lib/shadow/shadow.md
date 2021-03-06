# Shadow

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html#/shadow">Demo</a>

Adds a configurable shadow to an element.

Other than Polymer, the shadow component does not wrap content. Instead the shadow component is added below another element's content.


## Usage

	import shadow from 'polythene/shadow/shadow';

	const myShadow = m.component(shadow, {
		z: 1
	});

Add the shadow to a Mithril template:

	const myCard = m('.card', [
        m('div.self-center', 'Card!'),
        myShadow
    ]);


To animated the shadow use `animated`:

	const myShadow = m.component(shadow, {
		z: 1,
		animated: true
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'shadow' |
| **z** | optional | Number 0-5 | 0 | Depth of the shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |


## Default generated HTML

	<div class="fit shadow">
	    <div class="fit shadow-bottom shadow-bottom-z-1"></div>
	    <div class="fit shadow-top shadow-top-z-1"></div>
	</div>


