<template>
	<div class="page">
		<header class="header container" :style="{ backgroundImage: `url('${titleBackground}')` }">
			<h1 class="title has-text-centered pt-6">Kata & Isti</h1>
		</header>
		<nav class="navigation mt-6 is-size-5-mobile is-size-4-desktop ">
			<p class="has-text-centered">
				<a href="#helyszin" class="link is-info">Helyszín</a>
			</p>
			<p class="has-text-centered">
				<a href="#menetrend" class="link is-info">Menetrend</a>
			</p>
			<p class="has-text-centered">
				<a href="#parkolas" class="link is-info">Parkolás</a>
			</p>
			<p class="has-text-centered">
				<a href="#egyeb" class="link is-info">Egyéb</a>
			</p>
		</nav>
		<main class="main has-text-centered">
			<img
				class="main-picture"
				alt="Kata és Isti"
				v-bind:srcset="`${kataIstiMobilePicture} 500w, ${kataIstiPicture} 800w`">
			<div class="section leafs-container">
				<img class="leaf left" v-bind:src="level" alt="fa levél">
				<i>
					<div class="wedding-date">2020.08.29</div>
				</i>
				<img class="leaf" v-bind:src="level" alt="fa levél">
			</div>
			<article class="poem with-background" :style="{ backgroundImage: `url('${titleBackground}')` }">
				<i>
					Az életnek nincsen íze só nélkül,
					Hát a lagzink sem marad el végül.

					Sok sok szeretettel meghívunk Titeket,
					Mert ünnepelni csak veletek lehet.

					Elindul az élet tengerén utazásunk,
					Legyél kezdetén velünk útitársunk.

					A nagy napot már izgatottan várjuk,
					A kezeinket felétek szeretettel tárjuk.

					Ami még hiányzik már csak a házunk,
					Boritékba rakott suskával, télen sem fázunk.


				</i>
			</article>
			<div class="section">
				<h2 id=helyszin class="sub-title mb-4">Helyszín</h2>
				<div><strong> <a href="https://www.csonakhaz.hu" class="lin is-info">Csónakház Mulató</a></strong></div>
				<div>Budapest, 1031 Római part 30</div>
				<div>Emelet - terasz</div>
			</div>
			<div class="section content with-background" :style="{ backgroundImage: `url('${titleBackground}')` }">
				<h2 id=menetrend class="sub-title mb-4">Menetrend</h2>
				<ul class="menetrend-lista">
					<li><strong>16:00</strong> Vendégvárás</li>
					<li><strong>16:30</strong> Szertartás </li>
					<li><strong>17:00</strong> Gratuláció és Ajándékozás</li>
					<li><strong>19:30</strong> Vacsora</li>
				</ul>
				<div class="mt-6"> Menyasszonytánc -  Hogy szerencsés legyen a nagy napunk, örülünk ha a perselybe egy-egy sorsjegyet kapunk.</div>
			</div>
			<div class="section content">
				<h2 id=parkolas class="sub-title mb-4">Parkolás</h2>
				<ul>
					<li>Parkolni a környező utcákban bárhol lehet (Kadosa, Rozgonyi), de legjobban annak örülnénk ha nem autóval jönnél, így velünk együtt felhőtlenül mulatnál és koccintanál.</li>
					<li>Taxi helyett javasoljuk a <strong><a href="https://play.google.com/store/apps/details?id=com.nerddevelopments.taxidriver.carforyou.orderapp"> car4you</a></strong> alkalmazást, szólj és segítünk megrendelni.</li>
				</ul>
			</div>
			<div class="section content with-background upside-down pb-6" :style="{ backgroundImage: `url('${titleBackground_upside}')` }">
				<h2 id=egyeb class="sub-title mb-4">Egyéb</h2>
				<ul>
					<li>Teraszon leszünk, távolságot fogsz tudni tartani, amennyiben szeretnél.</li>
					<li>Közös fotó, ölelés, puszi lesz bőven, de csak akkor vegyél részt benne ha szeretnél:)</li>
					<li>A legjobb fotósaink lesznek, így kérünk bízd rájuk a munkát, szívesen látnánk ha <strong>telefon nélkül </strong> lennél rajta a képeken.</li>
					<li>A víz közelsége miatt késői órákra egy kardigán nem árthat.</li>
				</ul>
			</div>
		</main>
	</div>
</template>


<script>
import titleBackground from './assets/titleBackground.png';
import titleBackground_upside from './assets/titleBackground_upside.png';
import kataIstiPicture from './assets/KataIsti.jpg';
import kataIstiMobilePicture from './assets/KataIstiMobile.jpg';
import level from './assets/level.png';

export default {
	data() {
		return {
			titleBackground: titleBackground,
			kataIstiPicture: kataIstiPicture,
			titleBackground_upside: titleBackground_upside,
			kataIstiMobilePicture: kataIstiMobilePicture,
			level: level,
		};
	},
};
</script>

<style lang="scss">
	.with-background{
		background-color: #D5D9DF;
		background-position: center top,left top;
		background-size: auto;
		padding: 20px;
		opacity: 0.95;
		&.upside-down{
			background-position: bottom;
		}
	}
	body{
		font-family: "Baskerville";
		font-size: 1.5rem;
	}
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
		gap: 3vw;
		justify-content: center;
	}
	.main-picture{
		display: block;
		width: 80%;
		margin-bottom: 30px;
		margin-left: 10%;
		margin-top: 25px;
		box-sizing: border-box;
		border: solid 8px #fff;
		box-shadow: 0 1px 4px rgba(0,0,0,0.25);
	}
	.leaf{
		width: 100px;
		height: 25px;
		&.left{
			transform: rotateY(180deg);
		}
    }
	.poem{
		font-size: 1.25rem;
		text-align: center;
		white-space: pre-line;
	}
	.sub-title {
		font-size: 2rem;
		font-weight: 600;
	}
	.leafs-container{
		align-items: center;
		display: flex;
		gap: 10px;
		justify-content: center;
	}
	.wedding-date{
		font-weight: 900;
		font-size: 35px;
	}
	.menetrend-lista{
		font-size: 1.42rem;
		text-align: start;
		max-width: 350px;
		margin: auto;

		strong{
			padding-right: 10px;
		}
	}
	li{
		padding: 5px 0px;
	}
</style>

