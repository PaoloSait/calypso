<script lang="ts">
    export let title: string;
    export let text: string;
    export let link: string | undefined = undefined;
    export let icon: string | undefined = undefined;
</script>

<div class="bg-white rounded-xl p-4 flex-col flex gap-2 w-full">
    <div class="text-2xl font-medium flex flex-row items-center gap-2">
        {#if icon}
            <span class="material-symbols-outlined">{icon}</span>
        {/if}

        {title}
    </div>
    <div>
        {text}
    </div>
    {#if link}
        <div>
            See more information <a
                class="hover:underline font-medium"
                href={link}>here</a
            >
        </div>
    {/if}
</div>
