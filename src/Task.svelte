<script>
  import { createEventDispatcher } from "svelte";
  export let content;
  let checked = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  main {
    display: flex;
    align-items: center;
  }
  p {
    padding-left: 15px;
  }
</style>

<main>
  <button on:click={() => dispatch('markdone')} />
  <p>{content}</p>
</main>
