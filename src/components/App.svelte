<script>
  import TasksList from "./TasksList.svelte";
  import NewTask from "./NewTask.svelte";
  import SearchBar from "./SearchBar.svelte";
  export let tasks;
  let newTask = "";
  let searchKey = "";
  let list = [...tasks];

  const handleChange = e => {
    searchKey = e.detail.text;
    filter();
  };

  const handleMarkdone = e => {
    const task = e.detail.text;
    tasks = tasks.filter(word => word != task);
    list = [...tasks];
  };

  const handleAdd = e => {
    newTask = e.detail.text;
    if (newTask.trim() !== "") {
      tasks.push(newTask);
      newTask = "";
      list = [...tasks];
    }
  };

  const filter = () => {
    list = tasks.filter(word => {
      word = word.trim().toLowerCase();
      searchKey = searchKey.trim().toLowerCase();
      return word.includes(searchKey);
    });
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1,
  h3 {
    color: turquoise;
  }
</style>

<main>
  <h1>SVELTE TODOLIST</h1>
  <SearchBar on:change={handleChange} />
  <h3>NEW TASK</h3>
  <NewTask on:add={handleAdd} {newTask} />
  <h3>TODO LIST</h3>
  <TasksList {list} on:markdone={handleMarkdone} />
</main>
