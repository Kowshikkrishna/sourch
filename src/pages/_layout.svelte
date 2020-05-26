<script>
    import Appbar from "./_components/Appbar.svelte";
</script>

<svelte:head>
    <title>Sourch</title>
</svelte:head>

<div>
    <Appbar />
    <slot />
</div>

<style>
    div {
        margin: 0;
        padding: 0;
    }
</style>