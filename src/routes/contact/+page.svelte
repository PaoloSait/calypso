<script lang="ts">
	import ContactForm from "$lib/components/contact/ContactForm.svelte";
	import FAQSection from "$lib/components/contact/FAQSection.svelte";
	import Section from "$lib/components/Section.svelte";
	import PageTitle from "$lib/components/PageTitle.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
	title={"2V3.studio | Contact"}
	description={"All of our contact details. Please contact us if you have a project in mind!"}
	path={"/contact"}
/>

<PageTitle>
	<div slot="heading">Contact</div>
</PageTitle>
<ContactForm />
<div class="h-60"></div>
<Section>
	<FAQSection />
</Section>
