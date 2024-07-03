<script lang="ts">
    export let iconName: string;
</script>

<div class="flex flex-col gap-5 relative w-full">
    <div
        class="z-30 px-2 pt-2 pb-1 w-min h-min rounded bg-background-black text-background-grey"
    >
        <span class="material-symbols-outlined rotate-90 sm:rotate-0 text-[60]">
            {iconName}
        </span>
    </div>
    <div class="z-30 text-4xl font-bold"><slot name="title" /></div>
    <div class="z-30 text-xl"><slot name="text" /></div>
    <div
        class="text-[280px] leading-[220px] font-black text-gray-200 absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
    >
        <slot name="number" />
    </div>
</div>
