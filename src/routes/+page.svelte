<script lang="ts">
    import AboutUsSection from "$lib/components/main_page/AboutUsSection.svelte";
    import PortfolioSection from "$lib/components/main_page/PortfolioSection.svelte";
    import ServicesSection from "$lib/components/main_page/ServicesSection.svelte";
    import StayNotifiedCard from "$lib/components/main_page/StayNotifiedCard.svelte";
    import { scrollTo } from "svelte-scrolling";
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import { fade, fly } from "svelte/transition";
    import StatementScreen from "$lib/components/main_page/StatementScreen.svelte";
    export let form;
</script>

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

<StatementScreen />

<div class="px-6 sm:px-20 md:px-28 lg:px-36 pt-20 pb-12 md:pb-20">
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 200, duration: 1000}}>
                <ServicesSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-20" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <PortfolioSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-20" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <AboutUsSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-12 md:h-20" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <StayNotifiedCard {form} />
            </div>
        {/if}
    </IntersectionObserver>
</div>

