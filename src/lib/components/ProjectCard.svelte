<script lang="ts">
    export let tags: string;
    export let description: string;
    export let imgSrc: string;
    export let link: string | undefined = undefined;
</script>

<div class="bg-white rounded-xl px-4 md:py-8 py-8 flex-col flex gap-4 w-full">
    {#if link}
        <a class="h-8" href={link}>
            <img class="object-scale-down md:h-10 h-8" src={imgSrc} alt="" />
        </a>
    {:else}<img src={imgSrc} alt="" />{/if}
    <div class="font-medium">
        {tags}
    </div>
    <div>
        {description}
    </div>
</div>
