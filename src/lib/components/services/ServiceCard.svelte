<script lang="ts">
    export let href: string;
</script>

<a href={href} class="flex md:flex-row flex-col md:gap-10 gap-5 hover:bg-gray-200 p-4 -m-4 rounded-xl">
    <div class="w-80 h-80 bg-green-300"><slot name="image"></slot></div>
    <div class="flex-1 flex flex-col gap-2">
        <div class="text-4xl font-medium"><slot name="title"></slot></div>
        <div class="text-lg"><slot name="text"></slot></div>
    </div>
</a>