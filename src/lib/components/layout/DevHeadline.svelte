<script lang="ts">
    export let background: string;
</script>

<div
    class="flex flex-row w-full py-10 px-28 background justify-between h-[calc(80svh_-_5rem)]"
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
