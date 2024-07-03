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
        <div class="flex md:flex-row flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">Oxford Univeristy alumni</div>
                <div class="text-lg">
                    2V3.studio was born out of Oxford University, where the
                    founders <b>Paolo</b> and <b>Tarun</b> studied together.
                    <br /><br />
                    With masters Maths and Physics, we have the technical understanding
                    to create robust and effective software.
                </div>
            </div>
            <div
                class=" overflow-hidden object-cover max-h-[400px] rounded-lg flex-1"
            >
                <img
                    src="/about/radcam.png"
                    alt="headshot of tarun and paolo"
                    class="object-fill w-full"
                />
            </div>
        </div>

        <div class="flex md:flex-row-reverse flex-col-reverse gap-10 max-w-4xl">
            <div class="flex flex-col gap-3 flex-1">
                <div class="text-2xl font-medium">Tech enthusiasts</div>
                <div class="text-lg">
                    As passionate tech enthusiasts, we're constantly at the
                    forefront of digital innovation. This enthusiasm translates
                    into a deep understanding of the latest tools and
                    frameworks, enabling us to select the most appropriate
                    technologies for each project.
                    <br /><br />
                    Importantly, our love for technology means we care about the final product
                    just as much as you!
                </div>
            </div>
            <div class="overflow-hidden object-cover h-80 rounded-lg flex-1">
                <img
                    src="/about/double-headshot.png"
                    alt="headshot of tarun and paolo"
                    class="object-contain max-h-80"
                />
            </div>
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
