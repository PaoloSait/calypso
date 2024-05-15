<script>
    import FaqCollapsible from "./FAQCollapsible.svelte";
</script>

<div class="flex flex-col items-left py-16 text-background-black gap-2">
    <div class="md:text-6xl sm:text-5xl text-4xl font-semibold">FAQs</div>
    <div class="md:text-lg text-base">The answers to what is on your mind</div>
    <div class="h-8"></div>
    <div class="flex flex-col items-start w-full gap-6">
        <FaqCollapsible>
            <div slot="title">How much does an app cost?</div>
            <div slot="content">
                <p>
                    There is no fixed cost for an app because every project is
                    different. Our prices start from <em>£1500</em> for a basic static
                    content app. To best get an idea of cost, contact us with your
                    project brief and we can give you a quote.
                </p>
                <br />
                <p>
                    For larger and longer term projects, we typically charge at
                    a per-week basis of <em>£500-£2000+/week</em> depending on the
                    scope of the work.
                </p>
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">Will it be on both iOS and Android?</div>
            <div slot="content">
                Yes! We code apps to be compatible for both iOS (iPhone) and
                Android. However, if you only require one platform we can focus
                on making it feel fully native on that platform.
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">How long will it take to be built?</div>
            <div slot="content">
                Time to build varies between projects. Expect it to take no
                quicker than 1 month.
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">What legal things should I know about?</div>
            <div slot="content">
                <p>
                    Any graphics or images provided by your business for the app
                    must be owned by you (and we take no liability for any legal
                    implications if they are not).
                </p>
                <br />
                <p>
                    Depending on the nature of your app, you may have to comply
                    with GDPR. We will help you make sure the app is compliant.
                </p>
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">What is your <em>tech stack</em>?</div>
            <div slot="content">
                <p>
                    Our tech stack (the technology we use to build apps)
                    typically consists of a <a
                        class="underline"
                        href="https://flutter.dev/">Flutter</a
                    >
                    front-end and a
                    <a class="underline" href="https://cloud.google.com/?hl=en"
                        >Google Cloud</a
                    >
                    Firebase backend.
                </p>
                <br />
                <p>
                    Flutter enables us to build a UI that works on both iOS and
                    Android. We use Firebase to handle all of the user
                    authentication, database management and algorithms.
                </p>
                <br />
                <p>
                    If you’d like a specific technology used in your app then
                    just let us know and we can try to accommodate it.
                </p>
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">Can I put ads in my app?</div>
            <div slot="content">
                Yes! Ads are a way to generate revenue from an app.
            </div></FaqCollapsible
        >
        <FaqCollapsible>
            <div slot="title">How much does it cost to run an app?</div>
            <div slot="content">
                There are related costs to running an app. The main cost to be
                aware of are server costs - this is the cost of storing data in
                a database, running algorithms and authenticating users. The
                more users you have (using your app) the more it will cost to
                run the servers.

                <p>Although it is very app specific. Here is a resource to get a very rough guide: <a class="underline" href=""></a></p>
            </div></FaqCollapsible
        >
    </div>
</div>
