<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<style>
  input {
    border: none;
    background-color: #fafafa;
    width: 211px;
  }
  img {
    width: 24px;
    height: 24px;
  }
</style>

<main>
  <img src="search.png" alt="search icon" />
  <input
    on:change={e => dispatch('change', { text: e.target.value })}
    placeholder="filter tasks" />
</main>
