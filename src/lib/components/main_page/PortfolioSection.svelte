<script lang="ts">
    import ProjectCard from "../ProjectCard.svelte";
    import SectionHeader from "../SectionHeader.svelte";
</script>

<SectionHeader title={"Portfolio"} subtitle={"Projects we've worked on"} />
<div class="h-8" />
<div class="flex md:flex-row flex-col gap-4 w-full">
    <ProjectCard
        description={"Unify is the digital hub every household needs. Combining shared to-do lists with bill-splitting, rotas for chores and more, the Unify app helps households stay organised!"}
        link={"/unify"}
        imgSrc={"/Unify.png"}
    >
        <a class="hover:underline" href="/">Mobile app</a>,
        <a class="hover:underline" href="https://www.unify-living.app/">Landing page</a>
    </ProjectCard>
    <ProjectCard
        description={"D1SCO is a platform for communities centred around a love for music."}
        link={"/d1sco"}
        imgSrc={"/D1SCO.png"}
        ><a class="hover:underline" href="https://d1sco.vercel.app/">Web App</a></ProjectCard
    >
</div>
<div class="h-4 md:h-8" />
<div class="flex md:flex-row flex-col gap-4 w-full">
    <ProjectCard
        description={"We replaced the client's existing website for a modern up-to-date one that works on both large screens and mobile."}
        link={"/muban-educational-trust"}
        imgSrc={"https://images.squarespace-cdn.com/content/v1/644a805964ee682f302b079d/d32a5949-00cc-4678-8046-b72acbb2821a/MET+Logo+Steel+Stamp+%28no+backrgound%29.png?format=1500w"}
        ><a class="hover:underline" href="https://www.mubaneducationaltrust.org/">Website</a
        ></ProjectCard
    >
    <ProjectCard
        description={"2V3.studio is the website you’re on right now!"}
        link={"/"}
        imgSrc={"/2V3.studio.png"}
        readMore={false}
    ><a class="hover:underline" href="/">Website</a></ProjectCard>
    <!-- <div class="w-full font-bold flex flex-row justify-center items-center pt-2 md:pt-0">
        More coming soon!
    </div> -->
</div>
