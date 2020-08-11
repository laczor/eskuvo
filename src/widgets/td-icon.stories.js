import { library } from '@fortawesome/fontawesome-svg-core';

addExampleTo(library);

export default { title: 'widgets/td-icon' };

export const byDefault = () => '<td-icon icon="example" />';

export const withButton = () => `
	<button class="button">
		<td-icon icon="example" />
		<span>Text</span>
	</button>
`;

export const withColoredButton = () => `
	<button class="button is-primary">
		<td-icon icon="example" />
		<span>Text</span>
	</button>
`;

function addExampleTo(library) {
	/* eslint-disable max-len */
	library.add({
		prefix: 'td',
		iconName: 'example',
		icon: [512, 512, [], 'f005', 'M64 0L512 256L64 512L64 64'],
	});
}
