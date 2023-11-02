<script>
    import { page } from "$app/stores";
    import { scrollTo } from "svelte-scrolling";
</script>

<div class=" flex flex-col mx-8 my-4 items-start gap-6">
    <div class="h-8">
        <img class="object-scale-down h-8" src="/2V3.studio.png" alt="" />
    </div>
    <span class="w-full">
        <a class="inline-block" href="/">Home</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        <a class="inline-block" href="/about">About</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        <a class="inline-block" href="/contact">FAQs</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        <a class="inline-block" href="/contact">Contact</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        <a class="inline-block" href="/website">Website Development</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        <a class="inline-block" href="/app">Mobile App Development</a>
        <span class="text-red-500 px-2 inline-block">/</span>
        {#if $page.url.pathname == "/"}
            <div class="inline-block" use:scrollTo={{ ref: "Portfolio", offset: -100 }}>
                Portfolio
            </div>
        {:else}
            <a class="inline-block" href="/">Portfolio</a>
        {/if}
    </span>
    <div class="text-xs">© 2023 2V3.studio. ALL RIGHTS RESERVED</div>
</div>
