<script lang="ts">
	export let onClick: any = null;
	export let text: string;
	export let disabled : boolean = false;
</script>

<button
	class="shadow bg-background-black w-full focus:shadow-outline focus:outline-none text-background-grey py-2 px-4 rounded"
	type="submit"
	on:click={onClick}
	{disabled}
>
	{text}
</button>