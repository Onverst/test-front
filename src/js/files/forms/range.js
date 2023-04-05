// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {



	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: 90, // [0,200000]
			connect: [true, false],
			range: {
				'min': [30],
				'max': [200]
			},
			format: {
				from: Number,
				to: function(value) {
					return (parseInt(value)+" м²");
				}
			}
		});

		let tooltip = document.querySelector('.tooltip');

		priceSlider.noUiSlider.on('update', function (values, handle) {
			tooltip.innerHTML = values[handle];
		});
	}
}
rangeInit();
