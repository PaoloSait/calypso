<script lang="ts">
    export let tags: string;
    export let description: string;
    export let imgSrc: string;
    export let link: string | undefined = undefined;
</script>

<div class="bg-white rounded-xl px-4 py-14 flex-col flex gap-2 w-full">
    {#if link}
        <a class="h-10" href={link}>
            <img class="object-scale-down h-10" src={imgSrc} alt="" />
        </a>
    {:else}<img src={imgSrc} alt="" />{/if}
    <div class="font-medium">
        {tags}
    </div>
    <div>
        {description}
    </div>
</div>
