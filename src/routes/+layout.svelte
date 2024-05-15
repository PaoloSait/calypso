<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/layout/Footer.svelte";
    import NavHeader from "$lib/components/layout/NavHeader.svelte";
</script>

<div class="bg-background-black font-display flex flex-col min-h-screen">
    <div class="z-10 bg-background-black md:mb-56 mb-64  rounded-b-[75px] overflow-hidden">
        <NavHeader />
        <main class="grow">
            <slot />
        </main>
    </div>
    <Footer />
</div>
