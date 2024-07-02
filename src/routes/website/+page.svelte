<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import AnnotationCard from "$lib/components/AnnotationCard.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import FaqSection from "$lib/components/contact/FAQSection.svelte";
    import PageBio from "$lib/components/PageBio.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import WebsiteFaqSection from "$lib/components/website/WebsiteFaqSection.svelte";
</script>

<Seo
    title={"2V3.studio | Website Development"}
    description={"Commission a bespoke website to provide a standout experience for your constumers."}
    path={"/website"}
/>

<PageTitle>
    <div slot="path">
        <a class="hover:opacity-70" href="/services">Our Services /</a>
    </div>
    <div slot="heading">Websites</div>
</PageTitle>

<PageBio>
    Craft a powerful online presence with our expert website development
    services. We design and build responsive, high-performance websites that
    captivate your audience and drive conversions. From sleek landing page to
    robust web-app, our team delivers custom solutions tailored to your brand
    and business objectives.
</PageBio>

<Section>
    <div class="flex flex-col items-center gap-4 mx-32">
        <div class="flex flex-row gap-28">
            <AnnotationCard iconName="brush">
                <div slot="title">Design</div>
                <div slot="text">
                    Give us your brief and we will design it. Don’t worry, we
                    can have as many revisions as we need to make it perfect for
                    you.
                </div>
            </AnnotationCard>
            <AnnotationCard iconName="code">
                <div slot="title">Development</div>
                <div slot="text">
                    Behind the scenes we will translate the design into code.
                    Performance is on our mind with every line we code.
                </div>
            </AnnotationCard>
        </div>

        <!--TODO Turn this logic into an IMAGE component-->
        <!-- <div class="hidden md:block">
            <div class=" min-w-[30%] flex max-h-[70vh]">
                <img
                    src="app_example.png"
                    alt="app_example"
                    class="object-contain"
                    in:fade
                />
            </div>
        </div> -->

        <div class="flex flex-row gap-28">
            <AnnotationCard iconName="globe">
                <div slot="title">Release</div>
                <div slot="text">
                    Once the coding is complete, we will help you beta test the
                    app and release it onto the Apple AppStore and Google Play
                    store.
                </div>
            </AnnotationCard>
            <AnnotationCard iconName="monitoring">
                <div slot="title">Scaling</div>
                <div slot="text">
                    Successful app launch? We will continue to work with you to
                    expand the app as your user base grows.
                </div>
            </AnnotationCard>
        </div>
    </div>
</Section>

<ContactCall />

<Section>
    <WebsiteFaqSection /></Section
>
