<script lang="ts">
    export let title: string;
    export let link: string | undefined = undefined;
    export let icon: string | undefined = undefined;
</script>

<div class="bg-white rounded-xl p-4 flex-col flex gap-2 w-full">
    <div class="text-3xl font-medium flex flex-row items-center gap-3">
        {#if icon}
            <span class="material-symbols-outlined" style="font-size: 32px; color: blue">{icon}</span>
        {/if}
        {title}
    </div>
    <slot name="content" />
    {#if link}
        <div>
            See more information <a
                class="hover:underline font-semibold"
                href={link}>here</a
            >
        </div>
    {/if}
</div>
