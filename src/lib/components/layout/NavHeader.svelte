<script>
    import { Dropdown, DropdownItem } from "flowbite-svelte";
</script>

<div
    class="h-20 flex flex-row w-full justify-between z-50 md:px-8 px-4 items-center fixed top-0 right-0 left-0 text-xs md:text-base bg-gray-50"
>
    <a class="h-3 sm:h-5 md:h-8 lg:h-10" href="/">
        <img
            class="object-contain h-3 sm:h-5 md:h-8 lg:h-10"
            src="/2V3.studio.png"
            alt=""
        />
    </a>

    <div class="md:flex md:flex-row md:gap-6 gap-3 hidden">
        <a class="hover:font-medium" href="/website">Website Dev</a>
        <a class="hover:font-medium" href="/app">App Dev</a>
        <a class="hover:font-medium" href="/about">About</a>
        <a class="hover:font-medium" href="/contact">Contact</a>
    </div>
    <div class="md:hidden">
        <button>
            <span class="material-symbols-outlined"> menu </span>
        </button>
        <Dropdown containerClass="rounded-md px-2">
            <DropdownItem
                ><a class="hover:font-medium" href="/website">Website Dev</a>
            </DropdownItem>
            <DropdownItem
                ><a class="hover:font-medium" href="/app">App Dev</a>
            </DropdownItem>
            <DropdownItem>
                <a class="hover:font-medium" href="/about">About</a>
            </DropdownItem>
            <DropdownItem>
                <a class="hover:font-medium" href="/contact">Contact</a>
            </DropdownItem>
        </Dropdown>
    </div>
</div>
