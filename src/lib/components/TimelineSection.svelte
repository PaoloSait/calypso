<script lang="ts">
    export let title: string;
    export let body: string;
    export let isTop: boolean = false;
</script>


    <div class="flex flex-col my-4 gap-2">
        <div class="flex flex-row items-center gap-4 -ml-14">
            <div class="w-10 h-10 bg-gray-300 rounded-full" />
            <div class="font-header text-4xl">{title}</div>
        </div>

        <div class="text-lg">
            {body}
        </div>
    </div>

