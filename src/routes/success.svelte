<script>
	const { email, onDismiss } = $props();
	const src = '/images/icon-success.svg';
</script>

<div class="container">
	<div class="success-content">
		<img {src} alt="success icon" />
		<h1>Thanks for subscribing!</h1>
		<p>
			A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the
			button inside to confirm your subscription.
		</p>
	</div>
	<div class="button-containter">
		<button onclick={onDismiss}>Dismiss message</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		max-width: 504px;
		padding-inline: 2rem;
		padding-block: 2rem;
		box-sizing: border-box;
		justify-content: space-between;
	}

	button {
		width: 100%;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		color: white;
		background-color: hsl(234, 29%, 20%);
		padding: 1rem;
		border: none;
		border-radius: 0.5rem;
		margin-top: 1.5rem;
	}

	button:hover {
		background-image: linear-gradient(90deg, hsl(348, 100%, 66%), hsl(12, 100%, 63%));
		cursor: pointer;
		box-shadow: 0px 10px 20px 1px hsl(348, 100%, 66%);
	}

	@media (max-width: 599px) {
		.container {
			height: 100vh;
		}

		.success-content {
			margin-block: 8rem;
		}
	}

	@media (min-width: 600px) {
		.container {
			padding-inline: 4rem;
			padding-block: 2rem;
			margin: 0 auto;
		}
	}
</style>
