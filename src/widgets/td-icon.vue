<template>
	<span class="icon">
		<font-awesome-icon
			:icon="faIcon"
			v-bind="$attrs"
			class="fas" />
	</span>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const DEFAULT_PREFIX = 'td';

export default {
	name: 'TdIcon',
	components: { FontAwesomeIcon },
	props: {
		icon: { type: [String, Array, Object], required: true },
	},
	computed: {
		faIcon() {
			return typeof this.icon === 'string' ?
				[DEFAULT_PREFIX, this.icon] :
				this.icon;
		},
	},
};
</script>
