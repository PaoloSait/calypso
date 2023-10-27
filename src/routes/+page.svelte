<script>
    import InfoCard from "$lib/components/InfoCard.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<div class="background h-[700px] flex flex-col items-center ">
    <div class="flex flex-col items-center justify-between h-full w-1/2 pb-4 pt-72">
        <div class="text-6xl font-bold text-center leading-tight">
            SUPERCHARGE YOUR BRAND WITH THE WEB
        </div>
        <div class="flex flex-row gap-2">
            See our portfolio for examples of our work <span
                class="material-symbols-outlined"
            >
                arrow_forward
            </span>
        </div>
    </div>
</div>

<div class="px-28 py-16">
    <SectionHeader title={"Services"} subtitle={"Design and development"} />
    <div class="h-4" />
    <div class="flex flex-row gap-4 w-full">
        <InfoCard
            title={"Website"}
            text={"Digitise your business and reach new audiences with a custom designed website."}
            link={"/"}
        />
        <InfoCard
            title={"Mobile App"}
            text={"Give your customers a first class user experience with a fast, easy to use mobile application."}
            link={"/"}
        />
    </div>
    <div class="h-4" />
    <InfoCard
        title={"Bespoke Projects"}
        text={"Need something more than a website and mobile app? We're happy to have a discussion to see if we can help design and develop what you need. Send us a description of your project and we will get back to you shortly."}
    />
    <div class="h-16" />
    <SectionHeader
        title={"About Us"}
        subtitle={"The people behind 2V3.studio"}
    />
    <div class="h-16" />
    <SectionHeader title={"Portfolio"} subtitle={"Projects we've worked on"} />
    <div class="h-8" />
    <div class="flex flex-row gap-4 w-full">
        <ProjectCard
            tags={"Mobile app, Landing page"}
            description={"DUnify is the digital hub every household needs. Combining shared to-do lists with bill-splitting, rotas for chores and more, the Unify app helps households stay organised!"}
            link={"/"}
            imgSrc={"/Unify.png"}
        />
        <ProjectCard
            tags={"Web app"}
            description={"D1SCO helps to build and empower communities centred around music."}
            link={"https://d1sco.vercel.app/"}
            imgSrc={"/D1SCO.png"}
        />
    </div>
    <div class="h-8" />
    <div class="flex flex-row gap-4 w-full">
        <ProjectCard
            tags={"Website"}
            description={"2V3.studio is the website you’re on right now!"}
            link={"/"}
            imgSrc={"/2V3.studio.png"}
        />
        <div class="w-full font-bold flex flex-row justify-center items-center">
            More coming soon!
        </div>
    </div>
    <div class="h-16" />
</div>

<style>
    .background {
        background-color: rgb(14, 116, 144);
        background-image: radial-gradient(at 69% 6%, rgb(59, 130, 246) 0, transparent 64%), radial-gradient(at 91% 53%, rgb(254, 202, 202) 0, transparent 55%), radial-gradient(at 67% 89%, rgb(207, 250, 254) 0, transparent 96%), radial-gradient(at 26% 35%, rgb(207, 250, 254) 0, transparent 46%);
      
    }
</style>
