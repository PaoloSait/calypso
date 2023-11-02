<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";
    import SectionHeader from "./SectionHeader.svelte";
</script>

<SectionHeader title={"Portfolio"} subtitle={"Projects we've worked on"} />
<div class="h-8" />
<div class="flex md:flex-row flex-col gap-4 w-full">
    <ProjectCard
        tags={"Mobile app, Landing page"}
        description={"Unify is the digital hub every household needs. Combining shared to-do lists with bill-splitting, rotas for chores and more, the Unify app helps households stay organised!"}
        link={"https://www.unify-living.app/"}
        imgSrc={"/Unify.png"}
    />
    <ProjectCard
        tags={"Web app"}
        description={"D1SCO helps to build and empower communities centred around music."}
        link={"https://d1sco.vercel.app/"}
        imgSrc={"/D1SCO.png"}
    />
</div>
<div class="h-4 md:h-8" />
<div class="flex md:flex-row flex-col gap-4 w-full">
    <ProjectCard
        tags={"Website"}
        description={"2V3.studio is the website you’re on right now!"}
        link={"/"}
        imgSrc={"/2V3.studio.png"}
    />
    <div class="w-full font-bold flex flex-row justify-center items-center pt-2 md:pt-0">
        More coming soon!
    </div>
</div>
