<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import PortfolioCard from "$lib/components/portfolio/PortfolioCard.svelte";
    import TypeChips from "$lib/components/portfolio/TypeChips.svelte";
    import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title={"2V3.studio | Portfolio"}
    description={"alalala"}
    path={"/portfolio"}
/>

<PageTitle>
    <div slot="heading">Our Portfolio</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <PortfolioCard href="/portfolio/travel-chums">
            <div slot="image">
                <img
                    src="/chums/triple-phone-chums-trans.png"
                    class="h-80 rounded-lg flex-1 object-contain overflow-visible"
                    alt="app example"
                />
            </div>
            <div slot="chips"><TypeChips></TypeChips></div>
            <div slot="title">Travel Chums</div>
            <div slot="text">
                Travel Chums is a startup looking to create a travel social app.
                The premise of the app is that it can be used by people
                travelling to meet and chat with other people travelling in the
                same location as them.
            </div>
        </PortfolioCard>
        <PortfolioCard href="/portfolio/d1sco">
            <div slot="image">
                <img
                    src="/portfolio/D1scoPreview.png"
                    class="rounded-lg object-contain"
                    alt="disco website screnshot"
                />
            </div>
            <div slot="title">D1SCO</div>
            <div slot="text">
                D1SCO is a platform for communities centred around music,
                allowing users to share, discuss and discover the music they
                love. <br /><br />
                The project took the form of a web-based app.
            </div>
        </PortfolioCard>
        <PortfolioCard href="/portfolio/muban-educational-trust">
            <div slot="image">
                <img
                    src="/portfolio/METWebsitePreview.png"
                    class="rounded-lg object-contain"
                    alt="met website screenshot"
                />
            </div>
            <div slot="title">Muban Educational Trust</div>
            <div slot="text">
                The Muban Educational Trust is a small non-profit dedicated to
                the preservation, conservation and development of an extensive
                collection of Chinese woodcut prints. <br /><br />
                The project involved replacing their old website to a new one with
                a modern design and security.
            </div>
        </PortfolioCard>

        <PortfolioCard href="/portfolio/unify">
            <div slot="image" class="p-12 bg-gray-200 rounded-lg">
                <img
                    src="/portfolio/Unify.png"
                    class="object-contain"
                    alt="Unify logo"
                />
            </div>
            <div slot="chips"><TypeChips></TypeChips></div>
            <div slot="title">Unify</div>
            <div slot="text">
                Unify is an app to help households organise their living.
                Features include shared lists, bill splitting, group calendar,
                notes and more.
            </div>
        </PortfolioCard>
    </div>
</Section>
