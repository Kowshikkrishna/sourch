<script>
  const supports = [
    { id: 1, support: "How to get started with Sourch" },
    { id: 2, support: "What are Tribes in Sourch" },
    {
      id: 3,
      support: "What is the difference between Tribes and Communities in Sourch"
    },
    { id: 4, support: "What is licensed here?" },
    {
      id: 5,
      support: "How to know if someone's work is open-sourced or not in Sourch"
    }
  ];
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap");
  .support {
    font-family: "Inconsolata", monospace;
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 15px;
    width: 100%;
    height: 250px;
    text-align: center;
    overflow: auto;
    border: 3px double #80a8e5;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
  }
  .support::-webkit-scrollbar {
    display: none;
  }
  .support:hover {
    border: 3px solid #80a8e5;
  }
  .support h3 {
    background-color: #80a8e5;
    color: white;
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 20px;
    padding: 1.5px 0;
  }
  .support > a {
    border-top: 2px solid #eee;
    padding-top: 6px;
    padding-bottom: 6px;
    display: block;
    padding: 1em 1em;
  }
</style>

<div class="support">
  <h3>Support</h3>
  {#each supports as s}
    <a href="/">{s.support}</a>
  {/each}
</div>
