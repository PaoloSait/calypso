<script lang="ts">
    import { linear } from "svelte/easing";
    import { fade, slide } from "svelte/transition";

    let open = false;
</script>

<div class="flex flex-col">
    <button class="flex flex-row items-center gap-4" on:click={() => (open = !open)}
        >
        <div class="w-20 h-3 bg-background-black md:block hidden"></div>
        <img
            src="/arrow_right.svg"
            alt="dropdown_arrow"
            class={`w-7 mt-[2px] ${open ? "rotate-90" : ""} transition-all md:hidden block`}
        />
        <div class="md:text-2xl text-start "><slot name="title"></slot></div>
    </button>
    <div class="h-2" />
    {#if open}
        <div class="flex flex-row text-sm sm:text-base md:text-lg md:ml-24 ml-10" transition:slide={{}}>
            <slot name="content"></slot>
        </div>
    {/if}
</div>
