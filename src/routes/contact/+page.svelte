<script>
    import Input from "$lib/components/Input.svelte";
</script>

<div class={`background h-[700px]`}>
    <div class="flex flex-col px-10 w-full pt-10">
        <div class="text-4xl font-semibold mb-5">Contact</div>
        <div class="flex flex-row w-full">
            <div class="w-full flex flex-col">
                <div>
                    Please don’t hesitate to get in touch if you have any
                    questions for us! Use the form to the right.
                </div>
                <div>or</div>
                <div>
                    Email us below with your project brief. Please be sure to
                    include your estimated budget.
                </div>
                <div>team@2v3.studio</div>
            </div>
            <div class="w-40 border border-black"></div>
            <div class="w-full flex flex-col gap-2">
                <Input name="name" placeholder="Name" type="text" />
                <Input name="email" placeholder="Email" type="email" />
                <Input
                    name="message"
                    placeholder="Message"
                    type="text"
                    multiline={true}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .background {
        background: linear-gradient(124deg, #f2f2f2 14.76%, #eaeaea 76.15%);
    }
</style>
