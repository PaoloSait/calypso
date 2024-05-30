<script lang="ts">
    import PortfolioSection from "$lib/components/homepage/PortfolioSection.svelte";
    import StatementScreen from "$lib/components/homepage/StatementScreen.svelte";
    import TestimonialSection from "$lib/components/homepage/TestimonialSection.svelte";
    import Section from "$lib/components/Section.svelte";
    import H2 from "$lib/components/text/H2.svelte";
    import TimelineGraphic from "$lib/components/TimelineGraphic.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
    <title>2V3.studio</title>
    <meta
        name="description"
        content="At 2V3.studio we design and develop software for your business. Websites, mobile apps or something bespoke, we provide the full stack solution."
    />

    <!-- Meta data for open graph protocol (See: https://ogp.me/) -->
    <meta property="og:title" content="2V3.studio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.2v3.studio/" />
    <meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
    <meta
        property="og:description"
        content="At 2V3.studio we design and develop bespoke websites and apps for your business."
    />
</svelte:head>

<StatementScreen />
<Section>
    <div class="flex flex-col items-center">
        <H2>From design to publishing, <br /> we'll do it all</H2>

        <TimelineGraphic />
        <div class="h-12" />

        <!-- Info section -->
        <div class="flex flex-col items-center gap-16">
            <div class="flex md:flex-row flex-col gap-10 max-w-4xl">
                <div class="flex flex-col gap-3 flex-1">
                    <div class="text-2xl font-medium">
                        Your complete solution
                    </div>
                    <div class="text-lg">
                        We are a full-stack agency, meaning we do all the work
                        from designing through developing to releasing. No need
                        to get any other agency involved! <br /><br /> Simply meet
                        with us to create a plan and then we will work closely with
                        your to bring the project to life.
                    </div>
                </div>
                <div class="w-64 h-80 bg-gray-300 rounded-lg flex-1"></div>
            </div>

            <div class="flex md:flex-row-reverse flex-col gap-10 max-w-4xl">
                <div class="flex flex-col gap-3 flex-1">
                    <div class="text-2xl font-medium">
                        Your dream it, we make it
                    </div>
                    <div class="text-lg">
                        Everything we do at 2V3.studio is bespoke. This means we
                        can create something perfect for your business's
                        customers, brand and needs. <br /><br /> Whether it is a
                        mobile app, website or unique software...
                    </div>
                </div>
                <div class="w-64 h-80 bg-gray-300 rounded-lg flex-1"></div>
            </div>

            <a
                class=" hover:bg-opacity-70 bg-highlight-purple text-background-black px-6 py-2 rounded-full gap-2 flex flex-row items-center md:text-lg ms:text-sm text-xs font-semibold z-50"
                href="/services"
                ><div>See more details about the services we offer</div>
                <span
                    class="material-symbols-outlined md:text-[24px] sm:text-[22px] text-[18px]"
                >
                    arrow_outward
                </span></a
            >
        </div>

        <div class="h-32" />

        <TestimonialSection />
    </div>
</Section>
<PortfolioSection />
<Section>
    <H2>
        Scientific background,<br />
        passionate for nice things
    </H2>

    <div class="h-20"></div>
    <div class="flex flex-col items-center gap-16">
        <div class="flex md:flex-row flex-col gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">Oxford Univeristy Alumni</div>
                <div class="text-lg">
                    2V3.studio was born out of Oxford University, where the
                    founders <b>Paolo</b> and <b>Tarun</b> studied together.
                    <br /><br />
                    Both have a masters in STEM subjects (Maths and Physics respectively)
                </div>
            </div>
            <div
                class=" overflow-hidden object-cover w-64 h-80 bg-gray-300 rounded-lg flex-1"
            >
                <img
                    src="/PainAndTurmoil_Low_Res.png"
                    alt=""
                    class="object-cover w-full"
                />
            </div>
        </div>

        <div class="flex md:flex-row-reverse flex-col gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">
                    Your dream it, we make it
                </div>
                <div class="text-lg">
                    Everything we do at 2V3.studio is bespoke. This means we can
                    create something perfect for your business's customers,
                    brand and needs. <br /><br /> Whether it is a mobile app, website
                    or unique software...
                </div>
            </div>
            <div class="w-64 h-80 bg-gray-300 rounded-lg flex-1"></div>
        </div>
        <a
            class=" hover:bg-opacity-70 bg-highlight-purple text-background-black px-6 py-2 rounded-full gap-2 flex flex-row items-center md:text-lg ms:text-sm text-xs font-semibold z-50"
            href="/about"
            ><div>Read more about us here</div>
            <span
                class="material-symbols-outlined md:text-[24px] sm:text-[22px] text-[18px]"
            >
                arrow_outward
            </span></a
        >
    </div>
</Section>
