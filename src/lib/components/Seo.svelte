<script>
    export let title;
    export let description;
    export let path;
</script>


<svelte:head>
    <!-- Meta data for search results -->
    <title>{title}</title>
    <meta
        name="description"
        content={description}
    />

    <!-- Meta data for open graph protocol (See: https://ogp.me/) -->
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.2v3.studio{path}" />
    <meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
    <meta
        property="og:description"
        content={description}
    />
</svelte:head>