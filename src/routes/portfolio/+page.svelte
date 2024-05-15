<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import PortfolioCard from "$lib/components/portfolio/PortfolioCard.svelte";
    import TypeChips from "$lib/components/portfolio/TypeChips.svelte";
</script>

<PageTitle>
    <div slot="heading">Our Portfolio</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <PortfolioCard href="/portfolio/travel-chums">
            <div slot="chips"><TypeChips></TypeChips></div>
            <div slot="title">Travel Chums</div>
            <div slot="text">
                2V3.studio is a full stack agency, Design through development of
                websites and mobile applications is our expertise
            </div>
        </PortfolioCard>
        <PortfolioCard href="/portfolio/unify">
            <div slot="chips"><TypeChips></TypeChips></div>
            <div slot="title">Unify</div>
            <div slot="text">
                2V3.studio is a full stack agency, Design through development of
                websites and mobile applications is our expertise
            </div>
        </PortfolioCard>
        <PortfolioCard href="/portfolio/muban-educational-trust">
            <div slot="title">Muban Educational Trust</div>
            <div slot="text">
                2V3.studio is a full stack agency, Design through development of
                websites and mobile applications is our expertise
            </div>
        </PortfolioCard>
        <PortfolioCard href="/portfolio/d1sco">
            <div slot="title">D1SCO</div>
            <div slot="text">
                2V3.studio is a full stack agency, Design through development of
                websites and mobile applications is our expertise
            </div>
        </PortfolioCard>
    </div>
</Section>
