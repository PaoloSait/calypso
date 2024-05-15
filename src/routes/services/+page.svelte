<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
import Section from "$lib/components/Section.svelte";
    import ServiceCard from "$lib/components/services/ServiceCard.svelte";

</script>

<PageTitle>
    <div slot="heading">Our Services</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <ServiceCard href="/app">
        <div slot="title">Mobile Apps</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    <ServiceCard href="/website">
        <div slot="title">Websites</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    <ServiceCard href="/software">
        <div slot="title">Bespoke Software</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    </div>
</Section>