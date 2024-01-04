<script lang="ts">
    import ContactForm from "$lib/components/contact/ContactForm.svelte";
    import FAQSection from "$lib/components/contact/FAQSection.svelte";
</script>

<svelte:head>
    <!-- Meta data for search results -->
	<title>2V3.studio | Contact</title>
	<meta name="description" content="All of our contact details. Please contact us if you have a project in mind!">
	
	<!-- Meta data for open graph protocol (See: https://ogp.me/) -->
	<meta property="og:title" content="2V3.studio | Contact" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.2v3.studio/contact" />
	<meta property="og:image" content="https://www.2v3.studio/OG_Image.png" />
	<meta property="og:description" content="The contact details for 2V3.studio. Please reach out if you have a project in mind!" />
</svelte:head>

<ContactForm />
<FAQSection />
