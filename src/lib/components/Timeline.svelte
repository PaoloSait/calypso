<script lang="ts">
    import TimelineSection from "./TimelineSection.svelte";

    export let content: {title: string; body: string}[];

</script>

<div class="flex flex-row gap-8 md:mx-64 mx-6">
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
    </div>
</div>
