<script lang="ts">
    export let href: string | undefined = undefined;
</script>

<a
    {href}
    class="hover:brightness-75 bg-background-grey text-background-black rounded-xl flex-col flex w-full gap-2 overflow-hidden justify-center"
>
    <div class="flex-2 w-full h-40 bg-red-300"><slot name="img"></slot></div>
    <div class="px-4 pb-8 flex-1"><slot name="content" /></div>
</a>
