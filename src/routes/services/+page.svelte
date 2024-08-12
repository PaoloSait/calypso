<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import ServiceCard from "$lib/components/services/ServiceCard.svelte";
</script>

<Seo
    title={"2V3.studio | Services"}
    description={"alalala"}
    path={"/services"}
/>

<PageTitle>
    <div slot="heading">Our Services</div>
</PageTitle>

<Section>
    <div class="flex flex-col gap-20">
        <ServiceCard href="/app">
            <div slot="image">
                <img
                    src="/MobileGraphic.png"
                    class="h-80 rounded-lg flex-1 object-contain overflow-visible"
                    alt="A graphic of a grid of mobile phones"
                />
            </div>
            <div slot="title">Mobile Apps</div>
            <div slot="text">
                Elevate your brand with our expert mobile app design and
                development. We create bespoke, cross-platform applications that
                blend style and functionality. From concept to launch, we tailor
                solutions to your unique needs, ensuring seamless performance
                across iOS and Android.
                <!-- <br /><br />
                Leveraging cutting-edge technology, we deliver scalable, user-friendly
                apps that drive results. Whether you're a startup or established
                business, our solutions are designed to boost your digital strategy
                and keep you competitive in today's mobile-first world. -->
            </div>
        </ServiceCard>
        <ServiceCard href="/website">
            <div slot="image">
                <img
                    src="/WebGraphic.png"
                    class="h-80 rounded-lg flex-1 object-contain overflow-visible"
                    alt="A graphic of a grid of computers"
                />
            </div>
            <div slot="title">Websites</div>
            <div slot="text">
                Craft a powerful online presence with our expert website
                development services. We design and build responsive,
                high-performance websites that captivate your audience and drive
                conversions. From sleek landing page to robust web-app, our team
                delivers custom solutions tailored to your brand and business
                objectives.
                <!-- <br /><br />
                Utilising the latest web technologies and best practices, we ensure
                your site is fast, secure, and optimized for search engines. Our
                user-centric approach guarantees intuitive navigation and engaging
                experiences across all devices. Let us transform your digital vision
                into a stunning reality that sets you apart in the online landscape. -->
            </div>
        </ServiceCard>
        <ServiceCard href="/software">
            <div slot="title">Bespoke Software</div>
            <div slot="text">
                Revolutionize your business operations with our bespoke software
                solutions. We develop custom applications tailored to your
                unique processes and challenges, streamlining workflows and
                boosting productivity.
                <!-- <br /><br />
                We can create solutions that integrate seamlessly with your existing
                infrastructure, ensuring smooth adoption and maximizing ROI. With
                a focus on user-friendly interfaces and powerful functionality, we
                deliver software that empowers your team and drives your business
                forward in the digital age. -->
            </div>
        </ServiceCard>
    </div>
</Section>
