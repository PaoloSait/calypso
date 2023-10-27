<script lang="ts">
    import { linear } from "svelte/easing";
    import { fade } from "svelte/transition";

    let open = false;
    export let title: string;
    export let content: string;
</script>

<div class="flex flex-col gap-2">
    <button class="flex flex-row items-center" on:click={() => (open = !open)}
        ><img
            src={open ? "/arrow_drop_down.svg" : "/arrow_right.svg"}
            alt="dropdown_arrow"
            class="w-5 "
        />
        <div class="text-xl">{title}</div>
    </button>
    {#if open}
        <div class="flex flex-row text-base" transition:fade={{duration: 200}}>
            <div class="w-7" />
            {content}
        </div>
    {/if}
</div>
