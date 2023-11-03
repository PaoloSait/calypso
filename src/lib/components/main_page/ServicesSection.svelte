<script lang="ts">
    import InfoCard from "../InfoCard.svelte";
    import SectionHeader from "../SectionHeader.svelte";
</script>

<SectionHeader title={"Services"} subtitle={"Design and development"} />
<div class="h-8" />
<div class="flex md:flex-row flex-col gap-4 w-full">
    <InfoCard title={"Website"} link={"/website"} icon={"computer"}>
        <div slot="content" class="flex flex-col">
            <div>
                Digitise your business and reach new audiences with a custom
                designed website.
            </div>
            <ul class="list-disc m-4 flex flex-col gap-1 mt-4">
                <li>In-depth Design Consultations</li>
                <li>Built using the latest Tech</li>
                <li>Monthly Maintenance Calls</li>
            </ul>
        </div>
    </InfoCard>
    <InfoCard title={"Mobile App"} link={"/app"} icon={"smartphone"}>
        <div slot="content" class="flex flex-col">
            <div>
                Give your customers a first class user experience with a fast,
                easy to use mobile application.
            </div>
            <ul class="list-disc m-4 flex flex-col gap-1 mt-4">
                <li>In-depth Design Consultations</li>
                <li>Cross-platform Support</li>
                <li>Monthly Maintenance Calls</li>
            </ul>
        </div>
    </InfoCard>
</div>
<div class="h-4" />

<div
    class="bg-white rounded-xl flex-row flex gap-2 w-full overflow-hidden h-min"
>
    <div class="flex flex-col p-4 gap-1 md:gap-2 w-full">
        <div class="text-2xl md:text-3xl font-medium">Bespoke Projects</div>
        <div>
            Need something more than a website and mobile app? We're happy to
            have a discussion to see if we can help design and develop what you
            need. Send us a description of your project and we will get back to
            you shortly.
        </div>
        <div class="h-2" />
        <a
            href="mailto:tarunkoteeswaran@gmail.com"
            class="rounded-md bg-black w-min px-6 py-2 text-white flex flex-row gap-2 font-medium hover:bg-gray-800"
        >
            <span class="material-symbols-outlined"> email </span>
            <div>Contact</div>
        </a>
    </div>
    <div
        class="w-full hidden md:flex overflow-hidden bg-[url('/bespoke-web-dev-graphic.png')] bg-contain"
    />
</div>
