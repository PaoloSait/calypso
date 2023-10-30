<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/layout/Footer.svelte";
    import NavHeader from "$lib/components/layout/NavHeader.svelte";
</script>

<div class="bg-background-grey font-display flex flex-col min-h-screen">
    <NavHeader />
    <div class="mt-20 grow">
        <slot />
    </div>
    <Footer />
</div>
