<script>
  import Appbar from "./_components/Appbar.svelte";
</script>

<div>
  <Appbar />
  <slot />
</div>

<svelte:head>
  <title>Sourch</title>
</svelte:head>

<style>
  div {
    margin: 0;
    padding: 0;
  }
</style>
