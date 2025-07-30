<script>
	import Header from './header.svelte';
	import Heroimage from './heroimage.svelte';
	import List from './list.svelte';
	import Subscribe from './subscribe.svelte';
	import Success from './success.svelte';
	import '../app.css';

	let showSuccessMessage = $state(false);
	let userEmail = $state('');

	function handleSubscriptionSuccess(email) {
		showSuccessMessage = true;
		userEmail = email;
	}

	function dismissSuccessMessage() {
		showSuccessMessage = false;
		userEmail = '';
	}
</script>

<main>
	{#if !showSuccessMessage}
		<div class="image-container">
			<Heroimage />
		</div>
		<div class="content-container">
			<Header />
			<p>Join 60,000+ product managers receiving monthly updates on:</p>
			<List />
			<Subscribe onSuccess={handleSubscriptionSuccess} />
		</div>
	{:else}
		<Success email={userEmail} onDismiss={dismissSuccessMessage} />
	{/if}
</main>

<style>
</style>
