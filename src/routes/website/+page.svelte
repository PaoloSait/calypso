<script lang="ts">
    import Timeline from "$lib/components/Timeline.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
</script>

<DevHeadline background="linear-gradient(168deg, #f1e0ff 10.21%, #f9cfe8 85.01%)">
    <div class="flex flex-col" slot="text">
        <div class="text-5xl font-semibold my-10">Website Development</div>
        <div class="w-full flex flex-col text-xl">
            <div>
                A website is essential for any business to unlock its full
                potential. We design and build websites tailored to our clients
                needs, helping them:
            </div>
            <ul class="list-disc m-4 flex flex-col gap-1 mt-6">
                <li>Find customers more easily</li>
                <li>Add new revenue streams with online stores</li>
                <li>Improve customer satisfaction with digital experiences</li>
            </ul>
        </div>
    </div>
    <div class="flex justify-center min-w-[50%] ml-10" slot="image">
        <img
            src="website_example.png"
            alt="website_example"
            class="rounded-xl shadow-md object-contain"
        />
    </div>
</DevHeadline>

<div class="h-16" />
<Timeline
    content={[
        {
            title: "Design",
            body: "Provide us with a brief of what you want from your website. Through consultation, we will help bring your vision to life using design tools like Figma. We will continue to iterate until we have settled on a design that you love!",
        },
        {
            title: "Develop",
            body: "We will take the design and turn it into a fully functioning website. We use HTML, CSS and Javascript as well as frameworks such as Svelte and Tailwind to build websites that are user-friendly and easy to maintain.",
        },
        {
            title: "Release",
            body: "Once the code has been tested  internally, we will deploy your website to the web. We are able to host your website with a variety of different providers according to your needs and priorities. ",
        },
        {
            title: "Maintain",
            body: "We will maintain your website, making sure everything runs smoothly. We offer monthly maintenance calls to answer any questions you have about your website, and will continue to fix any bugs that may arise.",
        },
    ]}
/>
<div class="h-16" />

