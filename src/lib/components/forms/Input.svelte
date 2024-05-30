<script lang="ts">
    // multiline
    export let multiline: boolean = false;
    // id of input
    export let name: string = "";
    // type of input
    export let type: string;
    // placeholder for input
    export let placeholder: string;
    // whether to bind to input value
    export let boundValue: string | null = null;
    // unbound input value
    export let unboundValue: string = "";
    // is input required
    export let required: boolean = false;
</script>

{#if multiline}
    <textarea
        {name}
        autocomplete="off"
        {placeholder}
        class="bg-white appearance-none rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-background-black border-none resize-none min-h-[80] grow"
    />
{:else if boundValue != null}
    <input
        class="bg-white appearance-none rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-background-black border-none"
        {name}
        type="text"
        {placeholder}
        bind:value={boundValue}
        {required}
    />
{:else}
    <input
        class="bg-white appearance-none rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-background-black border-none"
        {name}
        {type}
        {placeholder}
        {required}
        value={unboundValue}
    />
{/if}
