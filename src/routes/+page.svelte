<script>
    import AboutUsSection from "$lib/components/AboutUsSection.svelte";
    import PortfolioSection from "$lib/components/PortfolioSection.svelte";
    import ServicesSection from "$lib/components/ServicesSection.svelte";
    import StayNotifiedCard from "$lib/components/StayNotifiedCard.svelte";
    import { scrollTo } from "svelte-scrolling";
</script>

<div class="background h-[700px] flex flex-col items-center ">
    <div class="flex flex-col items-center justify-between h-full w-1/2 pb-4 pt-72">
        <div class="text-6xl font-bold text-center leading-tight">
            SUPERCHARGE YOUR BRAND WITH THE WEB
        </div>
        <div class="flex flex-row gap-2">
            See our portfolio for examples of our work <span use:scrollTo={{ ref: "Portfolio", offset: -100 }}
                class="material-symbols-outlined"
            >
                arrow_forward
            </span>
        </div>
    </div>
</div>

<div class="px-36 py-16">
    <ServicesSection />
    <div class="h-16" />
    <PortfolioSection />
    <div class="h-16" />
    <AboutUsSection />
    <div class="h-16" />
    <StayNotifiedCard />
</div>

<style>
    .background {
        background-color: rgb(14, 116, 144);
        background-image: radial-gradient(at 69% 6%, rgb(59, 130, 246) 0, transparent 64%), radial-gradient(at 91% 53%, rgb(254, 202, 202) 0, transparent 55%), radial-gradient(at 67% 89%, rgb(207, 250, 254) 0, transparent 96%), radial-gradient(at 26% 35%, rgb(207, 250, 254) 0, transparent 46%);
      
    }
</style>
