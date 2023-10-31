<script lang="ts">
    export let background: string;
</script>

<div
    class="flex flex-row w-full py-10 px-32 background justify-between h-[calc(80vh_-_80px)]"
    style:background
>
    <div class="flex flex-col h-full">
        <div class="text-5xl font-semibold my-10">App Development</div>
        <div class="w-full flex flex-col text-xl">
            <div>
                We build fast and fluid mobile apps to elevate your customer’s
                experience and provide them with new ways of interacting with
                your services
            </div>
            <div class="h-6" />
            <div class="font-semibold">One app for both iOS and Android</div>
            <div class="h-4" />
            <div>
                Instead of paying for an app for iPhone users and one for
                Android users, we create one which works on both platforms,
                saving you money and confusion.
            </div>
        </div>
    </div>
    <div class="flex justify-end min-w-[30%]">
        <img src="app_example.png" alt="app_example" class="object-contain" />
    </div>
</div>

<style>
    .background {
        background: var(--background);
    }
</style>
