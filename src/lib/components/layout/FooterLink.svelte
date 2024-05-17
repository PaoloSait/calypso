<script lang="ts">
    export let text: string;
    export let href: string;
</script>

<a class="inline-block hover:opacity-70" href={href}>{text}</a>