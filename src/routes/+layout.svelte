<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import NavHeader from "$lib/components/NavHeader.svelte";
</script>

<div class="bg-background-grey font-display flex flex-col min-h-screen">
    <NavHeader />
    <div class="mt-20 grow">
        <slot />
    </div>
    <Footer />
</div>
