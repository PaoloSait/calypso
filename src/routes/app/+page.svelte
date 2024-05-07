<script lang="ts">
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import { fade } from "svelte/transition";
    import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
    <title>2V3.studio | Mobile App Development</title>
    <meta
        name="description"
        content="Commission a bespoke mobile app to provide a standout experience for your constumers."
    />

    <!-- Meta data for open graph protocol (See: https://ogp.me/) -->
    <meta property="og:title" content="2V3.studio | Mobile App Development" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.2v3.studio/app" />
    <meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
    <meta
        property="og:description"
        content="Commission a bespoke mobile app to provide a standout experience for your constumers."
    />
</svelte:head>

<PageTitle>
    <div slot="path">Our Services /</div>
    <div slot="heading">Mobile Apps</div>
</PageTitle>

<div class="text-background-grey text-xl mx-20 mb-12">
    A fast and fluid mobile app can elevate your customer’s experience and
    provide them with new ways of interacting with your services
</div>

<Section>
    <div class="flex flex-col h-full gap-6">
        <div class="text-base font-md">App Development</div>

        <div class="text-3xl font-bold">
            A fast and fluid mobile app can elevate your customer’s experience
            and provide them with new ways of interacting with your services
        </div>

        <div class="text-lg font-md">
            Read about all the possibilities below
        </div>
        <!-- <div class="w-full flex flex-col md:text-xl">
            <div class="h-6" />
            <div class="font-semibold">One app for both iOS and Android</div>
            <div class="h-4" />
            <div>
                Instead of paying for an app for iPhone users and one for
                Android users, we create one which works on both platforms,
                saving you money and confusion.
            </div>
        </div> -->
    </div>
    <!--TODO Turn this logic into an IMAGE component-->
    <div class="hidden md:block">
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
</Section>

<div class="h-16" />

<div class="flex flex-col md:hidden items-center gap-2">
    <div class="flex mx-8">
        <img src="app_example.png" alt="app_example" class="object-contain" />
    </div>
    <div class="text-sm italic">Example of an app design</div>
</div>

<div class="h-16" />

<Section>
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
    /></Section
>

