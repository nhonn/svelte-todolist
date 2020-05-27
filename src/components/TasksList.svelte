<script>
  import { createEventDispatcher } from "svelte";
  import TaskItem from "./TaskItem.svelte";
  export let list;
  const dispatch = createEventDispatcher();
  const handleClick = e => dispatch("markdone", { text: e.detail.text });
</script>

<main>
  {#each list as task}
    <TaskItem content={task} on:markdone={handleClick} />
  {/each}
</main>
