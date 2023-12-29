<script>
	import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/45W4R3E5toS
-->
<div class="flex flex-col min-h-screen bg-blue-50 dark:bg-gray-900">
	<header class="px-4 lg:px-6 h-14 flex items-center">
		<a class="flex items-center justify-center" href="#"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6 text-blue-600 dark:text-gray-300"
				><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line
					x1="4"
					x2="4"
					y1="22"
					y2="15"
				></line></svg
			><span class="sr-only">Flexadoc</span></a
		>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300" href="#">
				Features
			</a><a
				class="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
				href="#"
			>
				Contact
			</a>
		</nav>
		<div class="ml-8">
			<ThemeToggle />
		</div>
	</header>
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100 dark:bg-gray-800">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h1
							class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-700 dark:text-gray-300"
						>
							Welcome to Flexadoc
						</h1>
						<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Flexadoc provides flexible and efficient solutions for all your documentation needs.
						</p>
					</div>
					<div class="space-x-4">
						<button
							class="ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-500"
						>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-12 md:py-24 lg:py-32 bg-blue-200 dark:bg-gray-700">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-3 items-start">
					<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
						<div class="flex flex-col space-y-1.5 p-6">
							<h3 class="text-2xl font-semibold leading-none tracking-tight dark:text-gray-300">
								Feature 1
							</h3>
						</div>
						<div class="p-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-4 h-4 mb-4 text-blue-600 dark:text-gray-300"
								><polyline points="4 7 4 4 20 4 20 7"></polyline><line
									x1="9"
									x2="15"
									y1="20"
									y2="20"
								></line><line x1="12" x2="12" y1="4" y2="20"></line></svg
							>
							<p class="text-gray-500 md:text-xl dark:text-gray-400">
								Feature 1 description goes here.
							</p>
						</div>
					</div>
					<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
						<div class="flex flex-col space-y-1.5 p-6">
							<h3 class="text-2xl font-semibold leading-none tracking-tight dark:text-gray-300">
								Feature 2
							</h3>
						</div>
						<div class="p-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-4 h-4 mb-4 text-blue-600 dark:text-gray-300"
								><polyline points="4 7 4 4 20 4 20 7"></polyline><line
									x1="9"
									x2="15"
									y1="20"
									y2="20"
								></line><line x1="12" x2="12" y1="4" y2="20"></line></svg
							>
							<p class="text-gray-500 md:text-xl dark:text-gray-400">
								Feature 2 description goes here.
							</p>
						</div>
					</div>
					<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
						<div class="flex flex-col space-y-1.5 p-6">
							<h3 class="text-2xl font-semibold leading-none tracking-tight dark:text-gray-300">
								Feature 3
							</h3>
						</div>
						<div class="p-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-4 h-4 mb-4 text-blue-600 dark:text-gray-300"
								><polyline points="4 7 4 4 20 4 20 7"></polyline><line
									x1="9"
									x2="15"
									y1="20"
									y2="20"
								></line><line x1="12" x2="12" y1="4" y2="20"></line></svg
							>
							<p class="text-gray-500 md:text-xl dark:text-gray-400">
								Feature 3 description goes here.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer class="px-4 lg:px-6 h-14 flex items-center bg-blue-100 dark:bg-gray-800">
		<p class="text-xs text-gray-500 dark:text-gray-400">© Flexadoc. All rights reserved.</p>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
				Twitter
			</a><a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
				Facebook
			</a><a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
				LinkedIn
			</a>
		</nav>
	</footer>
</div>
