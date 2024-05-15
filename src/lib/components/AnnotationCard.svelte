<script lang="ts">
    export let iconName: string;
</script>

<div class="flex flex-col gap-5">
    <div class="px-2 pt-2 pb-1 w-min h-min rounded bg-background-black text-background-grey">
        <span
            class="material-symbols-outlined rotate-90 sm:rotate-0 text-[60]"
        >
            {iconName}
        </span>
    </div>
    <div class="text-4xl font-bold"><slot name="title"></slot></div>
    <div class="text-xl"><slot name="text"></slot></div>
</div>
