<script>
  import { createEventDispatcher } from "svelte";
  export let newTask;
  const dispatch = createEventDispatcher();
  const handleAdd = () => dispatch("add", { text: newTask });
</script>

<style>
  button {
    width: 55px;
    background: turquoise;
    color: white;
    border: none;
  }
  input {
    border: none;
    background-color: #fafafa;
    width: 180px;
  }
</style>

<main>
  <input bind:value={newTask} />
  <button on:click={handleAdd}>Add</button>
</main>
