<script lang="ts">
    import ProjectCard from "../ProjectCard.svelte";
    import SectionHeader from "../SectionHeader.svelte";
    import TypeChips from "../portfolio/TypeChips.svelte";
</script>

<div
    class="flex flex-col items-center py-48 text-background-grey gap-4 relative animate-[fadeIn_2s_ease-in-out] overflow-hidden"
>
    <div class="md:text-7xl sm:text-5xl text-4xl font-semibold z-50">
        Our Work
    </div>
    <!-- <div class="md:text-2xl sm:text-lg text-base z-50">
        Contact us with an overview of your vision
    </div> -->
    <div
        class="flex md:flex-row flex-col gap-10 z-30 lg:px-32 md:px-20 sm:px-16 px-8 mt-5 w-full"
    >
        <ProjectCard href={"/portfolio/travel-chums"}>
            <div
                slot="img"
                class="bg-[#d87232] p-2 h-full flex flex-col items-center justify-center"
            >
                <img
                    src="/chums/chums-logo-white-transparent.png"
                    alt=""
                    class="w-48"
                />
            </div>

            <div slot="content" class="flex flex-col items-start gap-2">
                <div class="md:text-lg text-base font-semibold">Chums</div>
                <div class="py-1 px-4 bg-blue-200 rounded-full text-sm">
                    App
                </div>
                <div>
                    The Chums app is a social media for people travelling.
                </div>
            </div>
        </ProjectCard>
        <ProjectCard href={"/portfolio/muban-educational-trust"}>
            <div
                slot="img"
                class="bg-neutral-200 p-2 h-full flex flex-col items-center justify-center"
            >
                <img
                    src="https://images.squarespace-cdn.com/content/v1/644a805964ee682f302b079d/d32a5949-00cc-4678-8046-b72acbb2821a/MET+Logo+Steel+Stamp+%28no+backrgound%29.png?format=1500w"
                    alt=""
                    class="h-28"
                />
            </div>

            <div slot="content" class="flex flex-col items-start gap-2">
                <div class="md:text-lg text-base font-semibold">
                    Muban Educational Trust
                </div>
                <div class="py-1 px-4 bg-pink-200 rounded-full text-sm">
Website
</div>
                <div>
                    The MET is a non-profit specialising in Chinese woodcut
                    prints.
                </div>
            </div>
        </ProjectCard>
        <a
            href="/portfolio"
            class="z-30 bg-background-grey text-background-grey bg-opacity-20 hover:opacity-70 text-xl font-semibold rounded-xl px-4 md:py-8 py-8 flex-row items-center justify-center flex gap-2 w-full"
        >
            See our full portfolio <span
                class="material-symbols-outlined text-[24px]"
            >
                arrow_outward
            </span>
        </a>
    </div>

    <!-- Design Parts: -->
    <div
        class="z-20 h-[1000px] w-[1000px] border-dashed border-white border-l-2 opacity-80 rounded-full blur-[1px] absolute -top-80 md:left-80 left-10"
    ></div>
    <div
        class="z-10 h-80 w-80 rounded-full bg-[#B3A6FF] blur-[100px] opacity-80 absolute -top-20 left-56"
    ></div>
</div>
