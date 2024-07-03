<div class="flex md:flex-row flex-col md:gap-10 gap-2 items-start">
        <div
            class="rounded-lg md:w-80 md:h-80 sm:w-48 sm:h-48 w-full shrink-0 overflow-hidden"
        >
            <slot name="image"></slot>
        </div>
        <div class="flex flex-col md:gap-4 w-full">
            <div class=" md:text-5xl text-lg font-bold"><slot name="name"></slot></div>
            <div class="font-semibold md:text-base text-sm mb-2 md:mb-0">
                <slot name="school"></slot>
            </div>
            <div class="md:text-xl">
                <slot name="bio"></slot>
            </div>
        </div>
    </div>