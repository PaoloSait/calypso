<script>
    import InfoCard from "$lib/components/InfoCard.svelte";
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


<style>
    .background {
        background-color: rgb(14, 116, 144);
        background-image: radial-gradient(at 69% 6%, rgb(59, 130, 246) 0, transparent 64%), radial-gradient(at 91% 53%, rgb(254, 202, 202) 0, transparent 55%), radial-gradient(at 67% 89%, rgb(207, 250, 254) 0, transparent 96%), radial-gradient(at 26% 35%, rgb(207, 250, 254) 0, transparent 46%);
      
    }
</style>
