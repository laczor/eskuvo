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
				alt="Kata és Isti"
				v-bind:srcset="`${kataIstiMobilePicture} 500w, ${kataIstiPicture} 800w`">
			<div class="section">
				<i>
					<div class="wedding-date">2020.08.29</div>
				</i>
			</div>
			<article class="poem is-size-6-mobile is-size-4-desktop with-background">
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
				<h2 id=helyszin class="sub-title mb-5">Helyszín</h2>
				<div><strong> <a href="https://www.csonakhaz.hu" class="lin is-info">Csónakház Mulató</a></strong></div>
				<div>Budapest, Római part 30, 1031</div>
				<div>Emelet - terasz</div>
			</div>
			<div class="section content with-background">
				<h2 id=menetrend class="sub-title mb-4">Menetrend</h2>
				<ul class="menetrend-lista">
					<li><strong>16:00</strong> Vendégvárás</li>
					<li><strong>16:30</strong> Szertartás</li>
					<li><strong>17:00</strong> Gratuláció és Ajándékozás</li>
					<li><strong>19:30</strong> Vacsora</li>
				</ul>
				<div class="mt-6"> Rendhagyó kör menyasszonytánc -  Hogy szerencsés legyen a nagy napunk, örülünk ha a perselybe egy-egy sorsjegyet kapunk.</div>
			</div>
			<div class="section content">
				<h2 id=parkolas class="sub-title mb-5">Parkolás</h2>
				<ul>
					<li>Parkolni a környező utcákban bárhol lehet, de legjobban annak örülnénk ha nem autóval jönnél, így velünk együtt felhőtlenül mulatnál és koccintanál.</li>
					<li>Taxi helyett javasoljuk a <strong><a href="https://play.google.com/store/apps/details?id=com.nerddevelopments.taxidriver.carforyou.orderapp"> car4you</a></strong> alkalmazást, szólj és segítünk megrendelni.</li>
				</ul>
			</div>
			<div class="section content with-background">
				<h2 id=egyeb class="sub-title mb-5">Egyéb</h2>
				<ul>
					<li>Teraszon leszünk, távolságot fogsz tudni tartani, amennyiben szeretnél.</li>
					<li>Közös fotó, ölelés, puszi lesz bőven, de csak akkor vegyél részt benne ha szeretnél:)</li>
					<li>A legjobb fotósaink lesznek, így kérünk bízd rájuk a munkát, szívesen látnánk ha telefon nélkül lennél rajta a képeken.</li>
					<li>A víz közelsége miatt késői órákra egy kardigán nem árthat.</li>
				</ul>
			</div>
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
	.with-background{
		background-color: #D5D9DF;
		padding: 20px;
		opacity: 0.95;
	}
	body{
		font-family: "Baskerville";
		font-size: 1.25rem;
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
		gap: 15px;
		justify-content: center;
	}
	img{
		display: block;
		width: 80%;
		margin-bottom: 30px;
		margin-left: 10%;
		margin-top: 25px;
		box-sizing: border-box;
		border: solid 8px #fff;
		box-shadow: 0 1px 4px rgba(0,0,0,0.25);
	}
	.poem{
		text-align: center;
		white-space: pre-line;
	}
	.sub-title {
		font-size: 2rem;
		font-weight: 600;
	}
	.wedding-date{
		font-size: 35px;
	}
	.menetrend-lista{
		text-align: start;
		max-width: 300px;
		margin: auto;
	}
</style>

