<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
import Section from "$lib/components/Section.svelte";
    import ServiceCard from "$lib/components/services/ServiceCard.svelte";

</script>

<PageTitle>
    <div slot="heading">Our Portfolio</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <ServiceCard href="/portfolio/travel-chums">
        <div slot="title">Travel Chums</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    <ServiceCard href="/portfolio/unify">
        <div slot="title">Unify</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    <ServiceCard href="/portfolio/muban-educational-trust">
        <div slot="title">Muban Educational Trust</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    <ServiceCard href="/portfolio/d1sco">
        <div slot="title">D1SCO</div>
        <div slot="text">2V3.studio is a full stack agency, Design through development of websites and mobile applications is our expertise</div>
    </ServiceCard>
    </div>
</Section>