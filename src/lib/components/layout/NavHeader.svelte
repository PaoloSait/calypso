<script>
    let menuShowing = false;

    function handleonload() {
        menuShowing = false;
    }

    function hideMenu() {
        menuShowing = false;
    }

    function toggleMenu() {
        menuShowing = !menuShowing;
    }
</script>

<svelte:window on:load={() => handleonload()} />

<header
    class="h-20 flex flex-row w-full justify-between z-50 md:px-8 px-4 items-center top-0 right-0 left-0 text-xs md:text-base bg-background-black text-background-grey"
>
    <a on:click={hideMenu} class="h-3 sm:h-5 md:h-8 lg:h-10" href="/">
        <img
            class="object-contain h-4 sm:h-5 md:h-8 lg:h-10"
            src="/2v3/logo-light.png"
            alt="The official logo of 2V3.studio"
        />
    </a>

    <nav class="md:flex md:flex-row md:gap-6 gap-3 hidden items-center z-50">
        <a class="hover:opacity-70" href="/services">Services</a>
        <a class="hover:opacity-70" href="/about">About</a>
        <a
            class="hover:bg-opacity-70 bg-background-grey text-background-black px-6 py-2 rounded-full gap-2 flex flex-row items-center"
            href="/contact"
            ><div>Contact</div>
            <span
                class="material-symbols-outlined rotate-90 sm:rotate-0 text-[20px]"
            >
                arrow_forward
            </span></a
        >
    </nav>

    <!-- This is the menu for mobile -->
    <div
        class="{menuShowing
            ? ''
            : 'hidden'} h-[calc(100svh_-_5rem)] w-full animate-[fadeIn_0.2s_ease-in-out] bg-background-black fixed bottom-0 left-0 z-50 flex flex-col items-center text-xl font-semibold gap-5 p-5"
    >
        <a on:click={hideMenu} class="hover:opacity-70" href="/services"
            >Services</a
        >
        <a on:click={hideMenu} class="hover:opacity-70" href="/about">About</a>
        <a on:click={hideMenu} class="hover:opacity-70" href="/portfolio"
            >Portfolio</a
        >
        <a
            on:click={hideMenu}
            class="hover:bg-opacity-70 bg-background-grey text-background-black px-6 py-2 rounded-full gap-2 flex flex-row items-center text-lg font-medium"
            href="/contact"
            ><div>Contact</div>
            <span class="material-symbols-outlined text-[20px]">
                arrow_forward
            </span></a
        >
    </div>

    <button class="md:hidden z-50" on:click={toggleMenu}>
        <span class="material-symbols-outlined">
            {menuShowing ? "close" : "menu"}
        </span>
    </button>
</header>
