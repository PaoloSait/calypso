<script>
    import FooterLink from "./FooterLink.svelte";
    import FooterSlash from "./FooterSlash.svelte";
</script>

<footer
    class="flex flex-col mx-6 my-12 items-start gap-6 text-background-grey fixed bottom-0 z-0"
>
    <div class="h-8">
        <img class="object-scale-down h-8" src="/2v3/logo-light.png" alt="Official 2v3.studio logo" />
    </div>
    <span class="w-full">
        <FooterLink text="Home" href="/" />
        <FooterSlash />
        <FooterLink text="About" href="/about" />
        <FooterSlash />
        <FooterLink text="Contact" href="/contact" />
        <FooterSlash />
        <FooterLink text="Mobile App Development" href="/app" />
        <FooterSlash />
        <FooterLink text="Website Development" href="/website" />
        <FooterSlash />
        <FooterLink text="Bespoke Software" href="/software" />
        <FooterSlash />
        <FooterLink text="Portfolio" href="/portfolio" />
    </span>
    <div class="text-xs">© 2024 2V3.studio. ALL RIGHTS RESERVED</div>
</footer>
