<script lang="ts">
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import { fade } from "svelte/transition";
</script>

<DevHeadline
    background="linear-gradient(168deg, #ffe0e0 10.21%, #f9e8cf 85.01%)"
>
    <div class="flex flex-col h-full" slot="text">
        <div class="md:text-5xl text-3xl font-semibold mb-6">
            App Development
        </div>
        <div class="w-full flex flex-col md:text-xl">
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
    <!--TODO Turn this logic into an IMAGE component-->
    <div slot="image" class="hidden md:block">
        <IntersectionObserver once={true} let:intersecting>
            <div class="justify-end min-w-[30%] flex max-h-[70vh]">
                {#if intersecting}
                    <img
                        src="app_example.png"
                        alt="app_example"
                        class="object-contain"
                        in:fade
                    />
                {:else}
                    <img
                        src="app_example.png"
                        alt="app_example"
                        class="invisible object-contain"
                    />
                {/if}
            </div>
        </IntersectionObserver>
    </div>
</DevHeadline>

<div class="h-16" />

<div class="flex flex-col md:hidden items-center gap-2">
    <div class="flex mx-8">
        <img src="app_example.png" alt="app_example" class="object-contain" />
    </div>
    <div class="text-sm italic">Example of an app design</div>
</div>

<div class="h-16" />
<Timeline
    content={[
        {
            title: "Design",
            body: "You provide us with a brief of what you want from your app. We will discuss the functionality you require and create a UI and UX which achieves this. This process can take as long as it needs for you to have a design you love.",
        },
        {
            title: "Develop",
            body: "We will take the design and turn it into a fully functioning app. We code our apps using Dart and Flutter which enables us to create both an Android and iOS app from the same codebase. We will provide you with beta versions of the app which you can test with a select set of users to help guide development.",
        },
        {
            title: "Release",
            body: "Depending on your requirements, we will either publish the apps to the Apple app store and Google Play Store or provide you the files to download onto devices.",
        },
        {
            title: "Maintain",
            body: "We will maintain your app, making sure everything runs smoothly. We offer monthly maintenance calls to answer any questions you have about your website, and will continue to fix any bugs that may arise.",
        },
    ]}
/>
<div class="h-16" />
