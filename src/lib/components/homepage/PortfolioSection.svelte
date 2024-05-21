<script lang="ts">
    import ProjectCard from "../ProjectCard.svelte";
    import SectionHeader from "../SectionHeader.svelte";
</script>

<div
    class="flex flex-col items-center py-48 text-background-grey gap-4 relative overflow-hidden animate-[fadeIn_2s_ease-in-out]"
>
    <div class="md:text-7xl sm:text-5xl text-4xl font-semibold z-50">
        Our Work
    </div>
    <!-- <div class="md:text-2xl sm:text-lg text-base z-50">
        Contact us with an overview of your vision
    </div> -->
    <div class="flex flex-row gap-10 mx-32 mt-5">
        <ProjectCard
            description={"Unify is the digital hub every household needs. Combining shared to-do lists with bill-splitting, rotas for chores and more."}
            link={"/unify"}
            imgSrc={"/Unify.png"}
        >
            <a class="hover:underline" href="/">Mobile app</a>,
            <a class="hover:underline" href="https://www.unify-living.app/"
                >Landing page</a
            >
        </ProjectCard>
        <ProjectCard
            description={"D1SCO is a platform for communities centred around a love for music."}
            link={"/d1sco"}
            imgSrc={"/D1SCO.png"}
            ><a class="hover:underline" href="https://d1sco.vercel.app/"
                >Web App</a
            ></ProjectCard
        >
        <a
            href="/portfolio"
            class="z-30 bg-background-grey text-background-grey bg-opacity-20 hover:opacity-70 text-xl font-semibold rounded-xl px-4 md:py-8 py-8 flex-row items-center justify-center flex gap-2 w-full"
        >
            See our full portfolio <span class="material-symbols-outlined text-[24px]">
                    arrow_outward
                </span>
        </a>
    </div>

    <!-- Design Parts: -->
    <div
        class=" z-20 h-[1000px] w-[1000px] border-dashed border-white border-l-2 opacity-80 rounded-full blur-[1px] absolute -top-80 left-80"
    ></div>
    <div
        class="  z-10 h-80 w-80 rounded-full bg-[#B3A6FF] blur-[100px] opacity-80 absolute -top-20 left-56"
    ></div>
</div>
