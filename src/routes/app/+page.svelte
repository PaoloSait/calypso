<script lang="ts">
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
</script>

<DevHeadline  background="linear-gradient(168deg, #ffe0e0 10.21%, #f9e8cf 85.01%)"/>

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
