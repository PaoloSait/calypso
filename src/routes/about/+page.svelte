<script lang="ts">
    import PageBio from "$lib/components/PageBio.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Section from "$lib/components/Section.svelte";
    import MemberSection from "$lib/components/about/MemberSection.svelte";
    import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title={"2V3.studio | About"}
    description={"Learn more about the founders of 2V3.studio."}
    path={"/about"}
/>

<PageTitle>
    <div slot="heading">About Us</div>
</PageTitle>

<PageBio>
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
</PageBio>

<Section>
    <MemberSection>
        <div slot="image"><img src="/about/Tarun.png" alt="" /></div>
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
        <div slot="image"><img src="/about/Paolo.png" alt="" /></div>
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
