<script>
    import { scrollTo } from "svelte-scrolling";
</script>

<div
    class="h-20 flex flex-row px-8 items-center gap-6 fixed top-0 right-0 left-0 bg-background-grey"
>
    <a class="h-14" href="/">
        <img class="object-scale-down h-14" src="/2V3.studio.png" alt="" />
    </a>

    <div class="w-full" />
    <a href="/">Menu</a>
    <div use:scrollTo={{ ref: "About Us", offset: -100 }}>About</div>
    <a href="/contact">Contact</a>
</div>
