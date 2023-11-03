<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
</script>

<Navbar let:NavContainer>
    <NavContainer
        class="h-20 flex flex-row w-full justify-between z-50 md:px-8 px-4 items-center fixed top-0 right-0 left-0 bg-background-grey text-xs md:text-base"
    >
        <NavBrand href="/" class="h-3 sm:h-5 md:h-8 lg:h-10">
            <img
                class="object-contain h-3 sm:h-5 md:h-8 lg:h-10"
                src="/2V3.studio.png"
                alt=""
            />
        </NavBrand>
        <NavHamburger />
        <NavUl>
            <NavLi href="/website">Website Dev</NavLi>
            <NavLi href="/app">App Dev</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
    </NavContainer>
</Navbar>

<!-- <div >
    <div
        class="h-20 flex flex-row w-full justify-between z-50 md:px-8 px-4 items-center fixed top-0 right-0 left-0 bg-background-grey text-xs md:text-base"
    >
        <a href="/" class="h-3 sm:h-5 md:h-8 lg:h-10">
            <img
                class="object-contain h-3 sm:h-5 md:h-8 lg:h-10"
                src="/2V3.studio.png"
                alt=""
            />
        </a>
        <div />
        <div>
            <a href="/website">Website Dev</a>
            <a href="/app">App Dev</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</div> -->