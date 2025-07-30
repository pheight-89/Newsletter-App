<script>
	const { onSuccess } = $props();

	let email = $state('');
	let isValidEmail = $state(true);
	let errorMessage = $state('');

	let buttonStyle = $state('background-color: hsl(234, 29%, 20%);');
	const pressedAndHoverGradient = 'linear-gradient(90deg, hsl(348, 100%, 61%), hsl(12, 100%, 58%))';

	function handleInput() {
		isValidEmail = true;
		errorMessage = '';
	}

	function handleSubmit() {
		isValidEmail = true;
		errorMessage = '';
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email) {
			isValidEmail = false;
			errorMessage = 'Email cannot be empty';
			email = '';
		} else if (!emailRegex.test(email)) {
			isValidEmail = false;
			errorMessage = 'Valid email required';
			email = '';
		}

		if (isValidEmail) {
			if (onSuccess) {
				onSuccess(email);
			}
			email = '';
		}
	}

	function handleMouseDown() {
		buttonStyle = `background-image: ${pressedAndHoverGradient}; background-color: transparent;`;
	}

	function handleMouseUp() {
		buttonStyle = 'background-color: hsl(234, 29%, 20%);';
	}

	function handleMouseLeave() {
		if (buttonStyle.includes('linear-gradient')) {
			buttonStyle = 'background-color: hsl(234, 29%, 20%);';
		}
	}
</script>

<div class="form-container">
	<label for="email" class:error={!isValidEmail}>
		Email address
		{#if !isValidEmail}
			<span class="error-message">{errorMessage}</span>
		{/if}
	</label>
	<input
		type="email"
		id="email"
		placeholder="email@company.com"
		required
		bind:value={email}
		class:error={!isValidEmail}
		oninput={handleInput}
	/>
	<button
		class="btnSubscribe"
		onclick={handleSubmit}
		onmousedown={handleMouseDown}
		onmouseup={handleMouseUp}
		onmouseleave={handleMouseLeave}
		style={buttonStyle}
	>
		Subscribe to monthly newsletter
	</button>
</div>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		display: flex;
		justify-content: space-between;
		font-size: 0.825rem;
		font-weight: 700;
		margin-top: 2rem;
	}
	input {
		border: 1px solid hsl(0, 0%, 58%);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	input.error {
		border-color: hsl(4, 100%, 67%);
		background-color: hsla(4, 100%, 67%, 0.1);
		color: hsl(4, 100%, 67%);
	}
	input.error::placeholder,
	span {
		color: hsla(4, 100%, 67%, 0.7);
	}
	input:focus {
		border-color: hsl(235, 18%, 26%);
	}

	.btnSubscribe {
		width: 100%;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		color: white;
		background-color: hsl(234, 29%, 20%);
		padding: 1rem;
		border: none;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	.btnSubscribe:hover {
		background-image: linear-gradient(90deg, hsl(348, 100%, 66%), hsl(12, 100%, 63%));
		cursor: pointer;
		box-shadow: 0px 10px 20px 1px hsl(348, 100%, 66%);
	}
</style>
