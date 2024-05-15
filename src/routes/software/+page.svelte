<script lang="ts">
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import { fade } from "svelte/transition";
    import Section from "$lib/components/Section.svelte";
    import AnnotationCard from "$lib/components/AnnotationCard.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import FaqSection from "$lib/components/contact/FAQSection.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
    <title>2V3.studio | Mobile App Development</title>
    <meta
        name="description"
        content="Commission a bespoke mobile app to provide a standout experience for your constumers."
    />

    <!-- Meta data for open graph protocol (See: https://ogp.me/) -->
    <meta property="og:title" content="2V3.studio | Mobile App Development" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.2v3.studio/app" />
    <meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
    <meta
        property="og:description"
        content="Commission a bespoke mobile app to provide a standout experience for your constumers."
    />
</svelte:head>

<PageTitle>
    <div slot="path">
        <a class="hover:opacity-70" href="/services">Our Services /</a>
    </div>
    <div slot="heading">Bespoke Software</div>
</PageTitle>

<div class="text-background-grey text-xl mx-20 mb-12">
    A fast and fluid mobile app can elevate your customer’s experience and
    provide them with new ways of interacting with your services
</div>

<Section></Section>

<ContactCall />

<Section>
    <FaqSection /></Section
>
