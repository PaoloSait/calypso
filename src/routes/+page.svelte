<script>
    import InfoCard from "$lib/components/InfoCard.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<div class="bg-blue-400 h-[700px] flex flex-col items-center">
    <div class="flex flex-col items-center justify-center h-full w-1/2 gap-20">
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
<SectionHeader title={"Services"} subtitle={"Design and development"} />
<SectionHeader title={"About Us"} subtitle={"The people behind 2V3.studio"} />
<SectionHeader title={"Portfolio"} subtitle={"Projects we've worked on"} />

<div class="h-[700px] px-24">
    <SectionHeader title={"Services"} subtitle={"Design and development"} />
    <div class="flex flex-row gap-4">
        <InfoCard title={"Website"} text={"We do lots"} />
        <InfoCard title={"Mobile App"} text={"We do lots"} link={"/"} />
    </div>
    <div class="h-4"></div>
    <InfoCard title={"Bespoke Projects"} text={"We do lots"} />
    <SectionHeader
        title={"About Us"}
        subtitle={"The people behind 2V3.studio"}
    />
    <SectionHeader title={"Portfolio"} subtitle={"Projects we've worked on"} />
</div>

