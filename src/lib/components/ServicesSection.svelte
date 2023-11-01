<script lang="ts">
    import InfoCard from "./InfoCard.svelte";
    import SectionHeader from "./SectionHeader.svelte";
</script>

<SectionHeader title={"Services"} subtitle={"Design and development"} />
    <div class="h-8" />
    <div class="flex flex-row gap-4 w-full">
        <InfoCard
            title={"Website"}
            text={"Digitise your business and reach new audiences with a custom designed website."}
            link={"/website"}
            icon={"computer"}
        />
        <InfoCard
            title={"Mobile App"}
            text={"Give your customers a first class user experience with a fast, easy to use mobile application."}
            link={"/app"}
            icon={"smartphone"}
        />
    </div>
    <div class="h-4" />
    <InfoCard
        title={"Bespoke Projects"}
        text={"Need something more than a website and mobile app? We're happy to have a discussion to see if we can help design and develop what you need. Send us a description of your project and we will get back to you shortly."}
    />
    