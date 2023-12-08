<script lang="ts">
    import { linear } from "svelte/easing";
    import { fade, slide } from "svelte/transition";

    let open = false;
    export let title: string;
    export let content: string;
</script>

<div class="flex flex-col">
    <button class="flex flex-row items-start" on:click={() => (open = !open)}
        ><img
            src="/arrow_right.svg"
            alt="dropdown_arrow"
            class={`w-5 mt-[2px] lg:mt-1 ${open ? "rotate-90" : ""} transition-all`}
        />
        <div class="md:text-xl text-start ">{title}</div>
    </button>
    <div class="h-2" />
    {#if open}
        <div class="flex flex-row text-sm sm:text-base" transition:slide={{}}>
            <div class="w-7" />
            {content}
        </div>
    {/if}
</div>
