<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import NavHeader from "$lib/components/NavHeader.svelte";
</script>

<div class="bg-background-grey font-display">
    <NavHeader />
    <div class="mt-20">
        <slot />
    </div>
    <Footer />
</div>
