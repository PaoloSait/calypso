<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import ContactCall from "$lib/components/ContactCall.svelte";
    import PageBio from "$lib/components/PageBio.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import WebsiteFaqSection from "$lib/components/website/WebsiteFaqSection.svelte";
    import TechStack from "$lib/components/website/TechStack.svelte";
    import H2 from "$lib/components/text/H2.svelte";
    import WebsiteFourStages from "$lib/components/website/WebFourStages.svelte";
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
    <H2>
        Fast, intuative,<br />
        the latest technology
    </H2>

    <div class="h-20"></div>
    <div class="flex flex-col items-center gap-16">
        <div class="flex md:flex-row flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">Completely bespoke</div>
                <div class="text-lg">
                    Our websites are tailor-made to fit your unique brand and
                    business needs. Our flexible approach allows for seamless
                    integration of custom features and functionalities, adapting
                    to your specific requirements.
                    <br /><br /> Whether you need a simple landing page or a complex
                    e-commerce platform, our websites are built to evolve with your
                    business, providing a scalable foundation for your digital presence.
                </div>
            </div>
            <div class="flex flex-col gap-4 items-center">
                <img
                    src="/portfolio/D1scoPreview.png"
                    class="h-80 rounded-lg flex-1 object-contain"
                    alt="app example"
                />
                <div class="text-xs italic">
                    Screenshot of D1SCO music discussion website
                </div>
            </div>
        </div>

        <div class="flex md:flex-row-reverse flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">
                    Utilising the latest technology
                </div>
                <div class="text-lg">
                    We leverage the power of Svelte, a cutting-edge JavaScript
                    framework, allows us to build lightning-fast, reactive user
                    interfaces.
                    <br /><br />
                    Paired with Sanity, a flexible and customizable content management
                    system. This allows us to build an intuative interface for you
                    to change the content on your website quickly and easily.
                </div>
            </div>
            <TechStack />
        </div>
    </div>
    <div class="h-32" />
    <H2>The Timeline</H2>
    <div class="h-20" />
    <WebsiteFourStages />
</Section>

<ContactCall />

<Section>
    <WebsiteFaqSection /></Section
>
