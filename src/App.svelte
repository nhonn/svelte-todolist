<script>
  import Task from "./Task.svelte";
  export let tasks;
  let searchKey = "";
  let newTask = null;
  let isHidden = true;
  let list = [...tasks];

  const handleClick = _ => {
    isHidden = false;
  };

  const clear = _ => {
    isHidden = true;
	newTask = null;
	searchKey = "";
  };

  const handleMarkdone = task => {
    tasks = tasks.filter(word => word != task);
    list = [...tasks];
  };

  const handleAdd = _ => {
    tasks.push(newTask);
    list = [...tasks];
    clear();
  };

  const handleNewTask = event => {
    if (event.keyCode === 13) {
      handleAdd();
    }
  };

  //Filter
  $: {
    list = tasks.filter(word => word.includes(searchKey));
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>

<main>
  <div hidden={!isHidden}>
    <label>Filter:</label>
    <input bind:value={searchKey} />
    <button on:click={handleClick}>New Task</button>
  </div>

  <div hidden={isHidden}>
    <label>New Task</label>
    <input bind:value={newTask} on:keydown={handleNewTask} />
    <button on:click={handleAdd}>Add</button>
    <button on:click={clear}>Cancel</button>
  </div>
  {#each list as task}
    <Task content={task} on:markdone={handleMarkdone(task)} />
  {/each}

</main>
