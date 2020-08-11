<template>
	<div class="page container">
		<header class="header container" :style="{ backgroundImage: `url('${titleBackground}')` }">
			<h1 class="title has-text-centered pt-6">Kata & Isti</h1>
		</header>
		<div>
			<nav class="navigation">
				<p class="has-text-centered">
					<a class="link is-info">Helyszín</a>
				</p>
				<p class="has-text-centered">
					<a class="link is-info">Menetrend</a>
				</p>
				<p class="has-text-centered">
					<a class="link is-info">Parkolás</a>
				</p>
				<p class="has-text-centered">
					<a class="link is-info">Egyéb</a>
				</p>
			</nav>
		</div>
		<main class="main section">
			<img
				alt="Kata és Isti"
				v-bind:srcset="`${kataIstiMobilePicture} 500w, ${kataIstiPicture} 800w`">
		</main>
	</div>
</template>

<script>
import titleBackground from './assets/titleBackground.png';
import kataIstiPicture from './assets/KataIsti.jpg';
import kataIstiMobilePicture from './assets/KataIstiMobile.jpg';
export default {
	data() {
		return {
			titleBackground: titleBackground,
			kataIstiPicture: kataIstiPicture,
			kataIstiMobilePicture: kataIstiMobilePicture,
		};
	},
};
</script>

<style lang="scss">
	header{
		background-position: center top,left top;
		background-size: cover;
		height: 15vh;
	}
	.title {
		font-family: "Adora Bouton";
		font-size: 3rem;
	}
	.navigation{
		display: flex;
		gap: 15px;
		justify-content: center;
	}
	.link{
		font-family: "Baskerville";
	}
	img{
		display: block;
		width: 100%;
		margin-bottom: 30px;
		box-sizing: border-box;
		border: solid 8px #fff;
		box-shadow: 0 1px 4px rgba(0,0,0,0.25);
	}
</style>

