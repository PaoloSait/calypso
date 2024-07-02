<script>
    import FaqCollapsible from "../contact/FAQCollapsible.svelte";
</script>

<div class="flex flex-col items-left text-background-black gap-2">
    <div class="md:text-6xl sm:text-5xl text-4xl font-semibold">FAQs</div>
    <div class="md:text-lg text-base">The answers to what is on your mind</div>
    <div class="h-8"></div>
    <div class="flex flex-col items-start w-full gap-6">
        <FaqCollapsible>
            <div slot="title">How long does it take to build a website?</div>
            <div slot="content">
                Typically 4-8 weeks, depending on complexity and client
                feedback.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">
                Do you offer website maintenance after launch?
            </div>
            <div slot="content">
                Yes, we offer various maintenance packages to keep your site
                secure and up-to-date.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">Can you redesign my existing website?</div>
            <div slot="content">
                Absolutely. We can refresh your current site or build a
                completely new one based on your needs.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">How much does a website cost?</div>
            <div slot="content">
                Prices vary based on project scope. We offer custom quotes after
                discussing your specific requirements.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">Will my website be mobile-friendly?</div>
            <div slot="content">
                Yes, all our websites are responsive and optimized for various
                devices and screen sizes.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">
                What is a domain name and do I need to buy one?
            </div>
            <div slot="content">
                A domain name is your website's address (e.g.,
                www.yourcompany.com). Yes, you'll need one, and we can help you
                purchase and set it up.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">
                Do I need to know how to code to update my website?
            </div>
            <div slot="content">
                No, we can set up a user-friendly content management system
                (CMS) that allows you to make updates without coding knowledge.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">How do you ensure my website is secure?</div>
            <div slot="content">
                We implement various security measures including SSL
                certificates, regular updates, and secure coding practices.
            </div>
        </FaqCollapsible>

        <FaqCollapsible>
            <div slot="title">Do you offer SEO services for websites?</div>
            <div slot="content">
                Yes, we provide SEO optimization services to improve your
                website's visibility in search engine results and drive organic
                traffic.
            </div>
        </FaqCollapsible>
    </div>
</div>
