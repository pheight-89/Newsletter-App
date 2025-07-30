<script>
	let mobileSrc = '/images/illustration-sign-up-mobile.svg';
	let tabletSrc = '/images/illustration-sign-up-tablet.svg';
	let desktopSrc = '/images/illustration-sign-up-desktop.svg';
</script>

<div class="imgContainer">
	<img src={mobileSrc} alt="mobile sign-up illustration" class="hero-image mobile-hero" />
	<img src={tabletSrc} alt="tablet sign-up illustration" class="hero-image tablet-hero" />
	<img src={desktopSrc} alt="desktop sign-up illustration" class="hero-image desktop-hero" />
</div>

<style>
	/* Default styles for all hero images */
	.imgContainer {
		margin: 0;
		padding: 0;
	}
	.hero-image {
		width: 100%;
		display: none;
		margin-top: -2px;
		padding: 0;
	}

	/* Mobile Styles */
	@media (max-width: 600px) {
		.mobile-hero {
			display: block;
			overflow: hidden;
		}
	}

	/* Tablet Styles */
	@media (min-width: 600px) and (max-width: 1024px) {
		.tablet-hero {
			display: block;
			overflow: hidden;
		}
	}

	@media (min-width: 1024px) {
		.desktop-hero {
			display: block;
		}
	}
</style>
