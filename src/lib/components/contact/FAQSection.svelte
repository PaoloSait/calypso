<script>
    import FaqCollapsible from "./FAQCollapsible.svelte";
    import SectionHeader from "../SectionHeader.svelte";
</script>

<div class="flex flex-col items-center py-16">
    <SectionHeader title={"FAQs"} subtitle={"Things people often ask us"} />
    <div class="h-8"></div>
    <div class="flex flex-col items-start md:w-1/2 w-full px-1  md:px-0 gap-6">
        <FaqCollapsible
            title="How long does it take to build a website"
            content="It depends! Projects can take from a few days to a few months depending on the scale of the project, and the client's priorities"
        />
        <FaqCollapsible
            title="Do I need two separate apps built for Android and iOS"
            content="No! Using Flutter we build Android and IOS apps from the same codebase, allowing more consistent UI design and cheaper
            costs for our clients."
        />
        <FaqCollapsible
            title="How much will it cost to have a website/app built"
            content="Our website building service starts at £800, while our app building service starts at £1500. Please get in touch above for more precise quotes."
        />
        <FaqCollapsible
            title="Can you build a website that I’ve had designed already"
            content="Of course! While we can design your website in-house, we are more than happy to bring an existing vision to life."
        />
    </div>
</div>
