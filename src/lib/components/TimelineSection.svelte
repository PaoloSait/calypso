<script lang="ts">
    export let title: string;
    export let body: string;
</script>

<div class="flex flex-col my-4 gap-2">
    <div class="flex flex-row items-center gap-[22px] -ml-[46px]">
        <div class="w-6 h-6 bg-gray-300 rounded-full" />
        <div class="font-header text-4xl">{title}</div>
    </div>

    <div class="text-lg">
        {body}
    </div>
</div>
