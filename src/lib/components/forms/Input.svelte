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
        class="bg-white dark:bg-gray-600 dark:text-white appearance-none min-h-[80] rounded w-full grow py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 resize-none"
    />
{:else if boundValue != null}
    <input
        class="bg-white dark:bg-gray-600 dark:text-white appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500"
        {name}
        type="text"
        {placeholder}
        bind:value={boundValue}
        {required}
    />
{:else}
    <input
        class="bg-white dark:bg-gray-600 dark:text-white appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500"
        {name}
        {type}
        {placeholder}
        {required}
        value={unboundValue}
    />
{/if}
