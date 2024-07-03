<script lang="ts">
    export let text: string;
    export let href: string;
</script>

<a class="inline-block hover:opacity-70 md:text-base text-sm" href={href}>{text}</a>