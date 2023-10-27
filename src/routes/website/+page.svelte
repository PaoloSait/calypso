<script lang="ts">
    import Timeline from "$lib/components/Timeline.svelte";
</script>

<div class="flex flex-col w-full p-10 background">
    <div class="text-5xl font-semibold mb-5">Website Development</div>
    <div class="flex flex-row w-full">
        <div class="w-full flex flex-col text-2xl">
            <div>
                A website is essential for any business to unlock its full
                potential. We design and build websites tailored to our clients
                needs, helping them:
            </div>
            <ul class="list-disc m-4">
                <li>Find customers more easily</li>
                <li>Add new revenue streams with online stores</li>
                <li>Improve customer satisfaction with digital experiences</li>
            </ul>
        </div>
        <div class="w-full border border-black bg-white">
            WebsiteExample.png
        </div>
    </div>
</div>

<div class="h-16" />
<Timeline />
<div class="h-16" />

<style>
    .background {
        background: linear-gradient(168deg, #F1E0FF 10.21%, #F9CFE8 85.01%);
    }
</style>