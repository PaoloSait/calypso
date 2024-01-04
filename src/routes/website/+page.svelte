<script lang="ts">
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import { fade } from "svelte/transition";
</script>

<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio | Website Development</title>
	<meta name="description" content="Commission a bespoke website to elevate your business's online presence.">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/website" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="Commission a bespoke website to elevate your business's online presence." />
</svelte:head>

<DevHeadline
    background="linear-gradient(168deg, #f1e0ff 10.21%, #f9cfe8 85.01%)"
>
    <div class="flex flex-col" slot="text">
        <div class="md:text-5xl text-3xl font-semibold mb-6">
            Website Development
        </div>
        <div class="w-full flex flex-col md:text-xl">
            <div>
                A website is essential for any business to unlock its full
                potential. We design and build websites tailored to our clients
                needs, helping them:
            </div>
            <ul class="list-disc m-4 flex flex-col gap-1 mt-6">
                <li>Find customers more easily</li>
                <li>Add new revenue streams with online stores</li>
                <li>Improve customer satisfaction with digital experiences</li>
            </ul>
        </div>
    </div>
    <!--TODO Turn this logic into an IMAGE component-->
    <div class="hidden md:block" slot="image">
        <IntersectionObserver once={true} let:intersecting>
            <div class="justify-center min-w-[50%] ml-10 h-min hidden md:flex">
                {#if intersecting}
                    <img
                        src="website_example.png"
                        alt="website_example"
                        class="rounded-xl shadow-md object-contain"
                        in:fade
                    />
                {:else}
                    <img
                        src="website_example.png"
                        alt="website_example"
                        class="rounded-xl shadow-md object-contain invisible"
                    />
                {/if}
            </div>
        </IntersectionObserver>
    </div>
</DevHeadline>

<div class="h-16" />
<Timeline
    content={[
        {
            title: "Design",
            body: "Provide us with a brief of what you want from your website. Through consultation, we will help bring your vision to life using design tools like Figma. We will continue to iterate until we have settled on a design that you love!",
        },
        {
            title: "Develop",
            body: "We will take the design and turn it into a fully functioning website. We use HTML, CSS and Javascript as well as frameworks such as Svelte and Tailwind to build websites that are user-friendly and easy to maintain.",
        },
        {
            title: "Release",
            body: "Once the code has been tested  internally, we will deploy your website to the web. We are able to host your website with a variety of different providers according to your needs and priorities. ",
        },
        {
            title: "Maintain",
            body: "We will maintain your website, making sure everything runs smoothly. We offer monthly maintenance calls to answer any questions you have about your website, and will continue to fix any bugs that may arise.",
        },
    ]}
/>
<div class="h-16" />
