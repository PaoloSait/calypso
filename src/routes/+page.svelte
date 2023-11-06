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

