<template>
	<div class="page container">
		<section class="header section" :style="{ backgroundImage: `url('${titleBackground}')` }">
			<header class="header section container pt-6">
				<h1 class="title has-text-centered">Kata & Isti</h1>
			</header>
			<nav class="level">
				<p class="level-item has-text-centered">
					<a class="link is-info">Home</a>
				</p>
				<p class="level-item has-text-centered">
					<a class="link is-info">Menu</a>
				</p>
				<p class="level-item has-text-centered">
					<a class="link is-info">Reservations</a>
				</p>
				<p class="level-item has-text-centered">
					<a class="link is-info">Contact</a>
				</p>
			</nav>
		</section>
		<main class="main section" />
	</div>
</template>

<script>
import titleBackground from './assets/titleBackground.png';
export default {
	data() {
		return {
			titleBackground: titleBackground,
		};
	},
};
</script>

<style lang="scss" scoped>
	.header.section {
		background-position: center top,left top;
		background-size: cover;
	}
	header{
		height: 200px;
	}
	.title {
		font-family: "Adora Bouton";
	}
</style>

