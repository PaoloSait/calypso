<script lang="ts">
import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import { fade } from "svelte/transition";
</script>



<IntersectionObserver once={true} let:intersecting>
    <div class="justify-end min-w-[30%] md:flex hidden max-h-[70vh]">
        {#if intersecting}
            <img
                src="app_example.png"
                alt="app_example"
                class="object-contain"
                in:fade
            />
        {:else}
            <img
                src="app_example.png"
                alt="app_example"
                class="invisible"
                in:fade
            />
        {/if}
    </div>
</IntersectionObserver>