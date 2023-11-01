<script lang="ts">
    import AboutUsSection from "$lib/components/AboutUsSection.svelte";
    import PortfolioSection from "$lib/components/PortfolioSection.svelte";
    import ServicesSection from "$lib/components/ServicesSection.svelte";
    import StayNotifiedCard from "$lib/components/StayNotifiedCard.svelte";
    import { scrollTo } from "svelte-scrolling";
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import { fade, fly } from "svelte/transition";
    import StatementScreen from "$lib/components/StatementScreen.svelte";
    export let form;
</script>

<StatementScreen />

<div class="px-36 py-16">
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 200, duration: 1000}}>
                <ServicesSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-16" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <PortfolioSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-16" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <AboutUsSection />
            </div>
        {/if}
    </IntersectionObserver>
    <div class="h-16" />
    <IntersectionObserver once={true} let:intersecting>
        {#if intersecting}
            <div in:fly={{y: 100, duration: 750}}>
                <StayNotifiedCard {form} />
            </div>
        {/if}
    </IntersectionObserver>
</div>

