<script lang="ts">
    import { scrollRef } from "svelte-scrolling";

    export let title: string;
    export let subtitle: string;
</script>

<div class="flex flex-col items-center" use:scrollRef={title}>
    <div class="font-header text-5xl">
        {title}
    </div>
    <div class="text-lg">
        {subtitle}
    </div>
</div>