<script>
  import { createEventDispatcher } from "svelte";
  export let content;
  const dispatch = createEventDispatcher();
  const handleClick = () => dispatch("markdone", { text: content });
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
  <button on:click={handleClick} />
  <p>{content}</p>
</main>
