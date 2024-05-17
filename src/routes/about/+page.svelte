<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
    import Section from "$lib/components/Section.svelte";
    import MemberSection from "$lib/components/about/MemberSection.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
    <title>2V3.studio | About</title>
    <meta
        name="description"
        content="Learn more about the founders of 2V3.studio."
    />

    <!-- Meta data for open graph protocol (See: https://ogp.me/) -->
    <meta property="og:title" content="2V3.studio | About" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.2v3.studio/about" />
    <meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
    <meta
        property="og:description"
        content="Learn more about the founders of 2V3.studio."
    />
</svelte:head>

<PageTitle>
    <div slot="heading">About Us</div>
</PageTitle>

<div class="text-background-grey text-xl mx-20 mb-12">
    <p>
        We are <span class="font-bold">Tarun</span> and
        <span class="font-bold">Paolo</span>, two recent graduates from Oxford
        University. We are web and mobile developers with a passion for design
        and coding.
    </p>
    <p>
        We love working with new clients to understand their ideas and help
        bring them to life with the power of the internet.
    </p>
</div>

<Section>
    <MemberSection>
        <div slot="image"><img src="/Tarun.png" alt="" /></div>
        <div slot="name">Tarun Koteeswaran</div>
        <div slot="school">MPhys Physics, Oxford University</div>
        <div slot="bio">
            “I’m passionate about bringing client's ideas to life. Having gained
            valuable experience working at tech startups, I understand how to
            build enterprise-grade software.”
        </div>
    </MemberSection>
    
    <div class="md:h-20 h-5" />
    <MemberSection>
        <div slot="image"><img src="/Paolo.png" alt="" /></div>
        <div slot="name">Paolo Sait</div>
        <div slot="school">MMath Mathematics, Oxford University</div>
        <div slot="bio">
            “Design is always on my mind. I love creating UI/UX that is both
            intuitive to use and also reflects a brands personality. Projects at
            2V3.studio let me merge my design skills with my technical
            background.”
        </div>
    </MemberSection>
</Section>
