<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import PageBio from "$lib/components/PageBio.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import AppFaqSection from "$lib/components/app/AppFaqSection.svelte";
    import TechStack from "$lib/components/app/TechStack.svelte";
    import FourStages from "$lib/components/app/AppFourStages.svelte";
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
    <div slot="heading">Mobile Apps</div>
</PageTitle>

<PageBio>
    Elevate your brand with our expert mobile app design and development. We
    create bespoke, cross-platform applications that blend style and
    functionality. From concept to launch, we tailor solutions to your unique
    needs, ensuring seamless performance across iOS and Android. <br /><br />
</PageBio>

<Section>
    <H2>
        Fast, intuative,<br />
        super secure
    </H2>

    <div class="h-20"></div>
    <div class="flex flex-col items-center gap-16">
        <div class="flex md:flex-row flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">Completely bespoke</div>
                <div class="text-lg">
                    Our mobile apps are meticulously crafted to meet your unique
                    business needs and vision. We don't rely on templates or
                    off-the-shelf solutions; instead, every app is built from
                    scratch with your brand identity in mind.
                    <br /><br />
                    We work closely with you to create a truly unique app
                    that provides users with a purpose-built experience aligned perfectly
                    with the your business objectives.
                </div>
            </div>
            <img
                src="/chums/triple-phone-chums-trans.png"
                class="h-80 rounded-lg flex-1 object-cover overflow-visible"
                alt="app example"
            />
        </div>

        <div class="flex md:flex-row-reverse flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">
                    Utilising the latest technology
                </div>
                <div class="text-lg">
                    Our apps are built using Flutter, a Google's UI toolkit,
                    which allows us to create apps that are consistent across
                    iOS and Android. This ensures all of your user's have an
                    equal experience.<br /><br /> We pair this with a robust Firebase
                    backend. This powerful combination allows us to develop secure,
                    high-performance apps that meet the demands of today's dynamic
                    digital landscape.
                </div>
            </div>
            <TechStack />
        </div>
    </div>
    <div class="h-32" />
    <H2>The Timeline</H2>
    <div class="h-20" />
    <FourStages />
</Section>

<ContactCall />

<Section>
    <AppFaqSection />
</Section>
