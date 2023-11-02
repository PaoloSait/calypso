<script lang="ts">
    export let background: string;
</script>

<div
    class="flex md:flex-row flex-col w-full md:py-10 md:px-28 py-4 px-6 background justify-between"
    style:background
>
    <slot name="text" />
    <slot name="image" />
</div>

<style>
    .background {
        background: var(--background);
    }
</style>
