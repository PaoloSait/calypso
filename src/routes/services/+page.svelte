<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import ServiceCard from "$lib/components/services/ServiceCard.svelte";
</script>

<Seo title={"2V3.studio | Services"} description={"alalala"} path={"/services"} />

<PageTitle>
    <div slot="heading">Our Services</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <ServiceCard href="/app">
            <div slot="title">Mobile Apps</div>
            <div slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. <br /><br /> Mauris
                massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero. Sed dignissim lacinia nunc.
            </div>
        </ServiceCard>
        <ServiceCard href="/website">
            <div slot="title">Websites</div>
            <div slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. <br /><br /> Mauris
                massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero. Sed dignissim lacinia nunc.
            </div>
        </ServiceCard>
        <ServiceCard href="/software">
            <div slot="title">Bespoke Software</div>
            <div slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. <br /><br /> Mauris
                massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero. Sed dignissim lacinia nunc.
            </div>
        </ServiceCard>
    </div>
</Section>
