<script lang="ts">
    export let title: string;
    export let subtitle: string;
</script>

<div class="flex flex-col items-center">
    <div class="font-header text-5xl">
        {title}
    </div>
    <div class="text-lg">
        {subtitle}
    </div>
</div>