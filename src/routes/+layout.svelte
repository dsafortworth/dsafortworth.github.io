<script lang="ts">
    import '../app.css';
    // Using emoji instead of Lucide icons
	let { children, data } = $props();
	let menu = $state([
		"about",
		"campaigns",
		"working groups",
		"calendar",
		"join"
	]);
</script>

<!-- CSS-based checkbox hack for mobile menu toggle -->
<div class="bg-snow_white min-h-screen flex flex-col text-sm md:text-base">
    <div class="container mx-auto px-2 flex-1 flex flex-col min-h-screen">
        <!-- Mobile menu with checkbox toggle -->
        <input type="checkbox" id="menu-toggle" class="sr-only peer" aria-hidden="true" />

        <!-- Mobile menu button -->
        <label for="menu-toggle" class="fixed top-3 left-3 z-50 p-1.5 rounded-md cursor-pointer block sm:hidden" aria-label="Toggle menu">
            <span class="sr-only">Menu</span>
            <span class="block peer-checked:hidden text-2xl" aria-hidden="true">🌹</span>
            <span class="hidden peer-checked:block text-2xl" aria-hidden="true">✖️</span>
        </label>

        <!-- Mobile navigation menu -->
        <div class="fixed inset-0 bg-snow_white z-40 hidden peer-checked:flex flex-col items-center justify-center sm:hidden">
                <nav aria-label="Mobile navigation">
                    <ul class="flex flex-col space-y-4 text-center">
                        {#each menu as item}
                            <li>
                                <a href={`/${item.replace(/\s+/g, '-')}`} class="text-lg hover:text-rosa_red transition-colors duration-200">
                                    {item}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>

        <!-- Desktop navigation (centered) -->
        <header class="py-4">
            <nav class="hidden sm:flex justify-center" id="desktop-menu" aria-label="Main navigation">
                <ul class="flex flex-row space-x-6">
                    {#each menu as item}
                        <li>
                            <a href={`/${item.replace(/\s+/g, '-')}`} class="hover:text-rosa_red transition-colors duration-200">
                                {item}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </header>
        <!-- Main content with right-aligned text (positioned based on screen size) -->
        <main class="px-4 py-8 grid grid-cols-1 sm:grid-cols-12">
            <div class="sm:col-span-8 sm:col-start-3 w-full self-center sm:-translate-y-1/4 md:translate-y-0">
                <h1 class="text-xl md:text-2xl mb-4 text-left">Lorem ipsum</h1>
                <div class="text-sm md:text-base leading-relaxed text-left">
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            {@render children()}
        </main>

        <!-- Footer -->
        <footer class="py-4 mt-auto">
            <div class="text-center text-xs md:text-sm">
                <p>&copy; 2025 Democratic Socialists of America Fort Worth</p>
            </div>
        </footer>
    </div>
</div>

<style>
    /* Using Tailwind's peer utilities for toggle functionality */
    /* No additional custom CSS needed */
</style>
