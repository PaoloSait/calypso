<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<form class="flex flex-row rounded-l" method="POST" action="/" use:enhance>
    <input
        class="bg-gray-200 appearance-none rounded-l py-2 px-4 text-black leading-tight focus:outline-none w-3/4"
        name="email"
        type="email"
        placeholder="Email"
        required={true}
    />
    <button class="text-white bg-black w-1/4 rounded-r"> Join </button>
</form>
