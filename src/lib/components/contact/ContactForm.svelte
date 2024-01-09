<script lang="ts">
    import Button from "$lib/components/forms/Button.svelte";
    import Input from "$lib/components/forms/Input.svelte";
    import { Checkbox } from "flowbite-svelte";
</script>

<!-- The Page for large screens / web -->
<div class="background h-full md:py-14 md:px-28 py-14 px-6 hidden md:flex">
    <div class="flex flex-col w-full">
        <div class="text-5xl font-semibold mb-5">Contact</div>
        <div class="flex flex-row w-full">
            <div class="w-full flex flex-col items-center gap-5 text-xl">
                <div>
                    Please don’t hesitate to get in touch if you have any
                    questions for us! Use the form to the right.
                </div>
                <div class="flex flex-row w-full items-center gap-1">
                    <div class="w-full bg-black h-[2px] rounded" />
                    <div>or</div>
                    <div class="w-full bg-black h-[2px] rounded" />
                </div>
                <div>
                    Email us below with your project brief. Please be sure to
                    include your estimated budget.
                </div>

                <a
                    class="flex flex-row w-full items-center gap-2"
                    href="mailto:contact@2v3.studio"
                >
                    <span class="material-symbols-outlined"> mail </span>
                    <span class="hover:underline">contact@2V3.studio</span>
                </a>
            </div>
            <div class="w-56" />
            <form class="w-full flex flex-col gap-3" method="POST">
                <Input name="name" placeholder="Name" type="text" />
                <Input name="email" placeholder="Email" type="email" />
                <Input
                    name="message"
                    placeholder="Message"
                    type="text"
                    multiline={true}
                />
                <Checkbox name="checkbox">&nbsp; I am not a robot</Checkbox>
                <Button text="Send Message" />
            </form>
        </div>
    </div>
</div>

<!-- The is the mobile version -->
<div
    class="background h-full md:py-14 md:px-28 py-14 px-6 md:hidden flex flex-col"
>
    <div class="md:text-5xl text-3xl font-semibold mb-6">Contact</div>
    <div class="w-full flex flex-col items-center gap-5 text-base">
        <div>
            Please don’t hesitate to get in touch if you have any questions for
            us! Use the form below.
        </div>
        <form class="w-full flex flex-col gap-3" method="POST">
            <Input name="name" placeholder="Name" type="text" />
            <Input name="email" placeholder="Email" type="email" />
            <Input
                name="message"
                placeholder="Message"
                type="text"
                multiline={true}
            />
            <Checkbox>&nbsp; I am not a robot</Checkbox>
            <Button text="Send Message" />
        </form>
        <div class="flex flex-row w-full items-center gap-1">
            <div class="w-full bg-black h-[2px] rounded" />
            <div>or</div>
            <div class="w-full bg-black h-[2px] rounded" />
        </div>
        <div>
            Email us below with your project brief. Please be sure to include
            your estimated budget.
        </div>
        <a
            class="flex flex-row w-full items-center gap-2"
            href="mailto:contact@2v3.studio"
        >
            <span class="material-symbols-outlined"> mail </span><span
                class="hover:underline">contact@2V3.studio</span
            >
        </a>
    </div>
</div>

<style>
    .background {
        background: linear-gradient(124deg, #f2f2f2 14.76%, #eaeaea 76.15%);
    }
</style>
