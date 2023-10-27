<script lang="ts">
    export let title: string;
    export let text: string;
    export let link: string | undefined = undefined;
</script>

<div class="bg-white rounded-xl p-4">
    <div>
        {title}
    </div>
    <div>
        {text}
    </div>
    {#if link}
    <div>
         See more information <a class="hover:underline font-medium" href={link}>here</a>
    </div>
        
    {/if}
   
</div>