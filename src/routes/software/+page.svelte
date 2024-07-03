<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import FaqSection from "$lib/components/contact/FAQSection.svelte";
    import PageBio from "$lib/components/PageBio.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import H2 from "$lib/components/text/H2.svelte";
</script>

<Seo
    title={"2V3.studio | Mobile App Development"}
    description={"Commission a bespoke mobile app to provide a standout experience for your constumers."}
    path={"/app"}
/>

<PageTitle>
    <div slot="path">
        <a class="hover:opacity-70" href="/services">Our Services /</a>
    </div>
    <div slot="heading">Bespoke Software</div>
</PageTitle>

<Section>
    <H2>Interested? Please <a class="underline" href="/contact">contact us</a>.</H2>
</Section>

