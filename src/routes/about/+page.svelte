<script lang="ts">
    import DevHeadline from "$lib/components/layout/DevHeadline.svelte";
</script>

<DevHeadline
    background="linear-gradient(168deg, #CED9FF 10.21%, #E4CEFF 85.01%)"
>
    <div class="flex flex-col" slot="text">
        <div class="text-5xl font-semibold my-10">About Us</div>
        <div class="w-full flex flex-col gap-4 text-xl">
            <p>
                We are <span class="font-bold">Tarun</span> and
                <span class="font-bold">Paolo</span>, two recent graduates from
                Oxford University. We are web and mobile developers with a
                passion for design and coding.
            </p>
            <p>
                We love working with new clients to understand their ideas and
                help bring them to life with the power of the internet.
            </p>
        </div>
    </div>
    <div class="flex justify-center min-w-[50%] ml-10" slot="image">
        <img
            src="/PainAndTurmoil.png"
            alt="img_of_us"
            class="rounded-xl shadow-md object-contain"
        />
    </div>
</DevHeadline>

<div class="px-36 py-20">
    <div class="flex flex-row gap-8">
        <div class="rounded-full bg-red-400 w-40 h-40 shrink-0" />
        <div class="flex flex-col gap-4 w-full">
            <div class="font-header text-5xl">Tarun Koteeswaran</div>
            <div class="text-lg">
                Reliable? No. Always got your side? No. Will you snake you out
                to go play tennis with some rando bastard? Sure bet you he will.
                He will slave away making you an app because that is what he
                does
            </div>
        </div>
    </div>
    <div class="h-20" />
    <div class="flex flex-row gap-8">
        <div class="flex flex-col gap-4 w-full">
            <div class="font-header text-5xl">Paolo Sait</div>
            <div class="text-lg">
                We are Tarun and Paolo, two recent graduates from Oxford
                University. We are web and mobile developers with a passion for
                design and coding. We love working with new clients to
                understand their ideas and help bring them to life with the
                power of the internet.
            </div>
        </div>
        <div class="rounded-full bg-red-400 w-40 h-40 shrink-0" />
    </div>
</div>
