<script>
  import Appbar from "./_components/Appbar.svelte";
</script>

<style>
  div {
    margin: 0;
    padding: 0;
  }
</style>

<svelte:head>
  <title>Sourch</title>
</svelte:head>

<div>
  <Appbar />
  <slot />
</div>
