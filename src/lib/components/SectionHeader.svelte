<script lang="ts">
    import { scrollRef } from "svelte-scrolling";

    export let title: string;
    export let subtitle: string;
</script>

<div class="flex flex-col items-center" use:scrollRef={title}>
    <h1 class="font-header text-5xl">
        {title}
    </h1>
    <h3 class="text-lg">
        {subtitle}
    </h3>
</div>