<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import FaqSection from "$lib/components/contact/FAQSection.svelte";
    import PageBio from "$lib/components/PageBio.svelte";
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

<PageBio>Lorum ipsum</PageBio>

<Section></Section>

<ContactCall />

<Section>
    <FaqSection /></Section
>
