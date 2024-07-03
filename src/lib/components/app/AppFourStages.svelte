<script>

    import AnnotationCard from "../AnnotationCard.svelte";

</script>

<div class="flex flex-col items-center gap-20 ">
        <div class="flex md:flex-row flex-col md:gap-28 gap-20 max-w-4xl">
            <AnnotationCard iconName="brush">
                <div slot="title">Design</div>
                <div slot="text">
                    Give us your brief and we will design it. Don’t worry, we
                    can have as many revisions as we need to make it perfect for
                    you.
                </div>
                <div slot="number">1</div>
            </AnnotationCard>
            <AnnotationCard iconName="code">
                <div slot="title">Development</div>
                <div slot="text">
                    Behind the scenes we will translate the design into code.
                    Performance is on our mind with every line we code.
                </div>
                <div slot="number">2</div>
            </AnnotationCard>
        </div>
        <div class="flex md:flex-row flex-col md:gap-28 gap-20 max-w-4xl">
            <AnnotationCard iconName="globe">
                <div slot="title">Release</div>
                <div slot="text">
                    Once the coding is complete, we will help you beta test the
                    app and release it onto the Apple AppStore and Google Play
                    store.
                </div>
                <div slot="number">3</div>
            </AnnotationCard>
            <AnnotationCard iconName="monitoring">
                <div slot="title">Scaling</div>
                <div slot="text">
                    Successful app launch? We will continue to work with you to
                    expand the app as your user base grows.
                </div>

                <div slot="number">4</div>
            </AnnotationCard>
        </div>
    </div>