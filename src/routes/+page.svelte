<script lang="ts">
    import AboutSection from "$lib/components/homepage/AboutSection.svelte";
    import PortfolioSection from "$lib/components/homepage/PortfolioSection.svelte";
    import StatementScreen from "$lib/components/homepage/StatementScreen.svelte";
    import TestimonialSection from "$lib/components/homepage/TestimonialSection.svelte";
    import Section from "$lib/components/Section.svelte";
    import H2 from "$lib/components/text/H2.svelte";
    import TimelineGraphic from "$lib/components/TimelineGraphic.svelte";
    import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title={"2V3.studio"}
    description={"At 2V3.studio we design and develop software for your business. Websites, mobile apps or something bespoke, we provide the full stack solution."}
    path={"/"}
/>

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
                <img src="/trail-phone.png" class="w-64 h-80 rounded-lg flex-1 object-cover overflow-visible" alt="app example"/>
            </div>

            <div class="flex md:flex-row-reverse flex-col gap-10 max-w-4xl">
                <div class="flex flex-col gap-3 flex-1">
                    <div class="text-2xl font-medium">
                        You dream it, we make it
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
<AboutSection />
