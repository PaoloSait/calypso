<script lang="ts">
    import "../app.css";
</script>

<div class="bg-background-grey font-display">
    <div
        class="h-20 flex flex-row px-8 items-center gap-4 fixed top-0 right-0 left-0 bg-background-grey"
    >
        <div class="h-14">
            <img class="object-scale-down h-14" src="/2V3.studio.png" alt="" />
        </div>

        <div class="w-full" />
        <a href="/">Menu</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
    </div>
    <div class="mt-20">
        <slot />
    </div>
    <div class=" flex flex-col px-8 py-4 items-start gap-6 bg-background-grey">
        <div class="h-8">
            <img class="object-scale-down h-8" src="/2V3.studio.png" alt="" />
        </div>
        <div class="flex flex-row space-x-4">
            <a href="/">Home</a><span class="text-red-500">/</span><a href="/"
                >About</a
            ><span class="text-red-500">/</span><a href="/">FAQs</a><span
                class="text-red-500">/</span
            ><a href="/">Contact</a><span class="text-red-500">/</span><a
                href="/">Website Development</a
            ><span class="text-red-500">/</span><a href="/"
                >Mobile App Development</a
            ><span class="text-red-500">/</span><a href="/">Portfolio</a>
        </div>
        <div class="text-xs">© 2023 2V3.studio. ALL RIGHTS RESERVED</div>
    </div>
</div>
