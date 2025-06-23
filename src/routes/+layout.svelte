<script lang="ts">
	import '../app.css';
	//import CalenderEmbed from '../components/CalenderEmbed.svelte';
	import NavigationBar from '../components/NavigationBar.svelte';

	let { children } = $props();
</script>

<NavigationBar></NavigationBar>


{@render children()}

