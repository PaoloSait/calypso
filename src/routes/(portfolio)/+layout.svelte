<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio</title>
	<meta name="description" content="At 2V3.studio we design and develop bespoke websites and apps for your business.">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="At 2V3.studio we design and develop bespoke websites and apps for your business." />
</svelte:head>

<div
    class="px-6 sm:px-20 md:px-28 lg:px-36 pt-14 lg:pt-0 pb-14 md:pb-20 flex flex-col items-center"
>
    <article class="prose prose-sm md:prose-base bg-white w-full px-8 py-14">
        <slot/>
    </article>
</div>
<a href="/" class="absolute top-24 left-6 flex flex-row gap-1 items-center">
    <span class="material-symbols-outlined" style="font-size: 20px"> arrow_back </span>
    <div>Portfolio</div>
</a>