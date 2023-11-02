<script lang="ts">
    import { onMount } from "svelte";
    import type { ActionData } from "../../routes/$types";
    import EmailInput from "./forms/EmailInput.svelte";
    export let form: ActionData;
</script>

<div class="bg-white rounded-xl flex gap-2 w-full overflow-hidden">
    <div class="flex flex-col p-4 gap-4 w-full">
        <div class="text-3xl font-semibold">Stay Notified</div>
        <div>
            To keep up to date with 2V3.studio and the work we are doing, join
            our mailing list below!
        </div>
        <EmailInput />
        {#if form?.success}
            <div class="text-xs md:text-sm">{"Thanks for joining us!"}</div>
        {:else}
            <div class="h-3 md:h-5" />
        {/if}
    </div>
    <div class="bg-pink-500 w-full hidden md:flex" />
</div>
