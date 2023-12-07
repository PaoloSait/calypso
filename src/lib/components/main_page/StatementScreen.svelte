<script lang="ts">
    import { scrollTo } from "svelte-scrolling";
</script>

<div class="background flex flex-col items-center h-[calc(100svh_-_5rem)]">
    <div
        class="flex flex-col items-center justify-between h-full w-full pb-8 pt-52"
    >
        <div
            class="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-black text-center leading-tight animate-[fadeIn_2s_ease-in-out] w-3/4 sm:w-3/4 bg-gradient-to-bl from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent z-40"
        >
            SUPERCHARGE YOUR BRAND WITH THE WEB
        </div>
        <div class="flex flex-row gap-2 animate-[fadeIn_3s_ease-in-out] z-30">
            See our portfolio for examples of our work <span
                use:scrollTo={{ ref: "Portfolio", offset: -100 }}
                class="material-symbols-outlined"
            >
                arrow_forward
            </span>
        </div>
    </div>
</div>

<style>
    .background {
        background-color: rgb(14, 116, 144);
        background-image: radial-gradient(
                at 69% 6%,
                rgb(59, 130, 246) 0,
                transparent 64%
            ),
            radial-gradient(at 80% 53%, rgb(254, 202, 202) 0, transparent 55%),
            radial-gradient(at 67% 89%, rgb(207, 250, 254) 0, transparent 96%),
            radial-gradient(at 26% 35%, rgb(207, 250, 254) 0, transparent 46%);
        background-size: 150% 150%;
        animation: gradient-animation 15s ease 3;
    }

    .background::before {
        content: "";
        position: absolute;
        inset: 0;
        background: repeating-conic-gradient(#0000 0.000045%, #000 0.0005%);
        mix-blend-mode: overlay;
    }

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        25% {
            background-position: 100% 50%;
        }
        50% {
            background-position: 750% 100%;
        }
        50% {
            background-position: 40% 40%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
