<template>
	<div class="page container">
		<header class="header container" :style="{ backgroundImage: `url('${titleBackground}')` }">
			<h1 class="title has-text-centered pt-6">Kata & Isti</h1>
		</header>
		<div>
			<nav class="navigation">
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
		</div>
		<main class="main section">
			<img
				alt="Kata és Isti"
				v-bind:srcset="`${kataIstiMobilePicture} 500w, ${kataIstiPicture} 800w`">
			<article class="poem is-size-6-mobile is-size-4-desktop ">
				<i>
					Az életnek nincsen íze só nélkül,
					Hát a lagzink sem marad el végül.
					Sok sok szeretettel meghívunk Titeket,
					Mert ünnepelni csak veletek lehet.
					Elindul az élet tengerén utazásunk,
					Legyél kezdetén velünk útitársunk,

					Ami még hiányzik már csak a házunk,
					Boritékba rakott suskával, télen sem fázunk.
					A nagy napot már izgatottan várjuk,
					A kezeinket felétek szeretettel tárjuk.
				</i>
			</article>
			<div class="section">
				<h2 id=helyszin class="sub-title mb-5">Helyszin</h2>
				<strong> <a href="https://www.csonakhaz.hu" class="lin is-info">Csónakház Mulató</a></strong>
				<span>Budapest, Római part 30, 1031</span>
				<span>Emelet - terasz</span>
			</div>
			<div class="section content">
				<h2 id=menetrend class="sub-title mb-4">Menetrend</h2>
				<ul>
					<li><strong>16:00</strong> Vendégvárás</li>
					<li><strong>16:30</strong> Szertartás</li>
					<li><strong>17:00</strong> Gratuláció és Ajándékozás</li>
					<li><strong>19:30</strong> Vacsora</li>
					<li> Rendhagyó menyasszonytánc→ Sorsjegy</li>
				</ul>
			</div>
			<div class="section content">
				<h2 id=parkolas class="sub-title mb-5">Parkolas</h2>
				<ul>
					<li>Parkolni a környező utcákban bárhol lehet, de legjobban annak örülnénk ha nem azzal jönnél s velünk együtt felhőtlenül mulatnál. </li>
					<li>Taxi helyett javasoljuk a <strong><a href="https://play.google.com/store/apps/details?id=com.nerddevelopments.taxidriver.carforyou.orderapp"> car4you</a></strong> car4you alkalmazást de szólj és segítünk.</li>
				</ul>
			</div>
			<div class="section content">
				<h2 id=egyeb class="sub-title mb-5">Egyéb</h2>
				<ul>
					<li>Teraszon leszünk, távolságot fogsz tudni tartani, amennyiben szeretnél.</li>
					<li>Közös fotó, ölelés, puszi lesz bőven, de csak akkor vegyél részt benne ha szeretnél:)</li>
					<li>A legjobb fotósaink lesznek, így kérünk bízd rájuk a munkát.</li>
					<li>A vízközelség miatt hajnalra egy kardigán nem árthat.</li>
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
	.poem{
		text-align: center;
		white-space: pre-line;
		font-family: "Baskerville";
	}
	.sub-title {
		font-size: 2rem;
		font-weight: 600;
	}
</style>

