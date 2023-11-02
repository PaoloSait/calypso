<script>
    import SectionHeader from "./SectionHeader.svelte";
</script>

<SectionHeader title={"About Us"} subtitle={"The people behind 2V3.studio"} />
<div class="h-8" />
<div class="flex flex-col-reverse md:flex-row gap-6 w-full">
    <div class="text-lg flex flex-col gap-4 w-full">
        <p>
            We are <span class="font-bold">Tarun</span> and
            <span class="font-bold">Paolo</span>, two recent graduates from
            Oxford University. We are web and mobile developers with a passion
            for design and coding.
        </p>
        <p>
            We love working with new clients to understand their ideas and help
            bring them to life with the power of the internet.
        </p>
        <p>
            You can read more about us <a class="hover:underline font-medium" href="/about">here</a>.
        </p>
    </div>
    <div class="rounded-xl w-full overflow-hidden object-cover">
        <img src="/PainAndTurmoil.png" alt="" class="object-cover w-full">
    </div>
    
</div>

<style>
    img {
        aspect-ratio: 4/3;
    }
</style>
