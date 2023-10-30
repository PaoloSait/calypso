<script lang="ts">
    import TimelineSection from "./TimelineSection.svelte";

    export let content: {title: string; body: string}[];

</script>

<div class="flex flex-row gap-8 mx-64">
    <div class="mt-6 mb-4">
        <div class="w-1 h-full bg-gray-300 rounded-full" />
    </div>
    <div class="flex flex-col">
        {#each content as info}
            <TimelineSection
            title={info.title}
            body={info.body}
        />
        {/each}
        <!-- <TimelineSection
            title={"Design"}
            body={"Provide us with a brief of what you want from your website. Through consultation, we will help bring your vision to life using design tools like Figma. We will continue to iterate until we have settled on a design that you love!"}
        />

        <TimelineSection
            title={"Develop"}
            body={"We will take the design and turn it into a fully functioning website. We use HTML, CSS and Javascript as well as frameworks such as Svelte and Tailwind to build websites that are user-friendly and easy to maintain."}
        />

        <TimelineSection
            title={"Release"}
            body={"Once the code has been tested  internally, we will deploy your website to the web. We are able to host your website with a variety of different providers according to your needs and priorities. "}
        />

        <TimelineSection
            title={"Maintain"}
            body={"We will maintain your website, making sure everything runs smoothly. We offer monthly maintenance calls to answer any questions you have about your website, and will continue to fix any bugs that may arise."}
        /> -->
    </div>
</div>
