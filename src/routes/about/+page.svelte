<script lang="ts">
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio</title>
	<meta name="description" content="At 2V3.studio we design and develop bespoke websites and apps for your business.">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="At 2V3.studio we design and develop bespoke websites and apps for your business." />
</svelte:head>

<DevHeadline
    background="linear-gradient(168deg, #CED9FF 10.21%, #E4CEFF 85.01%)"
>
    <div class="flex flex-col" slot="text">
        <div class="md:text-5xl text-3xl font-semibold mb-6">About Us</div>
        <div class="w-full flex flex-col gap-4 md:text-xl">
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
    </div>
    <div
        class="flex justify-center min-w-[50%] md:ml-10 mt-6 mb-4 md:my-0 h-min"
        slot="image"
    >
        <img
            src="/PainAndTurmoil_Low_Res.png"
            alt="img_of_us"
            class="rounded-xl shadow-md object-contain"
        />
    </div>
</DevHeadline>

<div class="md:px-36 md:py-20 py-5 px-5">
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
</div>
