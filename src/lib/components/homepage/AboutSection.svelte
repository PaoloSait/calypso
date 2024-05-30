<script>
    import Section from "../Section.svelte";
    import H2 from "../text/H2.svelte";
</script>

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
                    A tagline title
                </div>
                <div class="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
    nibh elementum imperdiet. <br><br> Mauris massa. Vestibulum lacinia arcu eget
    nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
    lacinia nunc.
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
