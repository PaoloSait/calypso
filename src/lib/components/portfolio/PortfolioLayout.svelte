<script>
	import PageTitle from "$lib/components/PageTitle.svelte";
	import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
	<!-- Meta data for search results -->
	<title>2V3.studio</title>
	<meta
		name="description"
		content="At 2V3.studio we design and develop bespoke websites and apps for your business."
	/>

	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta
		property="og:description"
		content="At 2V3.studio we design and develop bespoke websites and apps for your business."
	/>
</svelte:head>

<PageTitle>
	<div slot="path">
		<a class="hover:opacity-70" href="/portfolio">Our Portfolio /</a>
	</div>
	<div slot="heading"><slot name="title"></slot></div>
</PageTitle>

<Section>
	<div
		class="flex flex-col items-center"
	>
		<article
			class="prose prose-sm md:prose-base w-full px-8 py-14"
		>
			<slot name="content" />
		</article>
	</div>
</Section>