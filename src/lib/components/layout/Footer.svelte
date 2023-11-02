<script>
    import { page } from "$app/stores";
    import { scrollTo } from "svelte-scrolling";
</script>

<div class=" flex flex-col px-8 py-4 items-start gap-6 bg-background-grey">
    <div class="h-8">
        <img class="object-scale-down h-8" src="/2V3.studio.png" alt="" />
    </div>
    <span>
        <a href="/">Home</a><span class="text-red-500 px-2">/</span><a href="/about"
            >About</a
        ><span class="text-red-500 px-2">/</span><a href="/contact">FAQs</a
        ><span class="text-red-500 px-2">/</span><a href="/contact">Contact</a><span
            class="text-red-500 px-2">/</span
        ><a href="/website">Website Development</a><span class="text-red-500 px-2"
            >/</span
        ><a href="/app">Mobile App Development</a><span class="text-red-500 px-2"
            >/</span
        >
        {#if $page.url.pathname == "/"}
            <div use:scrollTo={{ ref: "Portfolio", offset: -100 }}>
                Portfolio
            </div>
        {:else}
            <a href="/">Portfolio</a>
        {/if}
    </span>
    <div class="text-xs">© 2023 2V3.studio. ALL RIGHTS RESERVED</div>
</div>
