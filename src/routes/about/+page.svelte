<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio | About</title>
	<meta name="description" content="Learn more about the founders of 2V3.studio.">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio | About" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/about" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="Learn more about the founders of 2V3.studio." />
</svelte:head>

<PageTitle>

    <div slot="heading">About Us</div>
</PageTitle>

<div class="text-background-grey text-xl mx-20 mb-12">
   <p>
                We are <span class="font-bold">Tarun</span> and
                <span class="font-bold">Paolo</span>, two recent graduates from
                Oxford University. We are web and mobile developers with a
                passion for design and coding.
            </p>
            <p>
                We love working with new clients to understand their ideas and
                help bring them to life with the power of the internet.
            </p>
</div>

<Section>
    <div class="flex flex-row gap-8 items-center">
        <div class="rounded-full md:w-40 md:h-40 w-20 h-20 shrink-0">
            <img src="/TarunHeadshot_LR.png" alt="" />
        </div>
        <div class="flex flex-col md:gap-2 w-full">
            <div class="md:font-header md:text-5xl text-lg font-semibold">
                Tarun Koteeswaran
            </div>
            <div class="font-semibold md:text-base text-sm mb-2 md:mb-0">
                MPhys Physics, Oxford University
            </div>
            <div class="md:text-lg">
                I am a recent physics graduate from the University of
                Oxford, who is passionate about bringing client's ideas to life.
                Having gained valuable experience working at tech startups, I
                have a firm understanding of how to build resilient websites
                that scale with user demands.
            </div>
        </div>
    </div>
    <div class="md:h-20 h-5" />
    <div class="flex flex-row-reverse md:flex-row gap-8 items-center">
        <div class="flex flex-col md:gap-2 w-full">
            <div class="md:font-header md:text-5xl text-lg font-semibold">
                Paolo Sait
            </div>
            <div class="font-semibold md:text-base text-sm mb-2 md:mb-0">
                MMath Mathematics, Oxford University
            </div>
            <div class="md:text-lg">
                I hold a degree in Mathematics from the University of Oxford and
                possess a keen eye for design. During my degree, I undertook
                various coding projects, giving me a wide range of computing
                skills. During my free time, I enjoy making music and crafting
                visual media!
            </div>
        </div>
        <div class="rounded-full md:w-40 md:h-40 w-20 h-20 shrink-0">
            <img src="/PaoloHeadshot_LR.png" alt="" />
        </div>
    </div>

</Section>

