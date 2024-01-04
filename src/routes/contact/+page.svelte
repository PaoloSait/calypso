<script lang="ts">
    import ContactForm from "$lib/components/contact/ContactForm.svelte";
    import FAQSection from "$lib/components/contact/FAQSection.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio</title>
	<meta name="description" content="At 2V3.studio we design and develop bespoke websites and apps for your business.">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="At 2V3.studio we design and develop bespoke websites and apps for your business." />
</svelte:head>

<ContactForm />
<FAQSection />
