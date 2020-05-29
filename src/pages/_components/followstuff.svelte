<script>
  const follow = [
    { id: 1, bookmark: "ML" },
    { id: 2, bookmark: "C" },
    { id: 3, bookmark: "AI" }
  ];
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap");
  .follow {
    font-family: "Inconsolata", monospace;
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 15px;
    width: 100%;
    height: 250px;
    overflow: auto;
    border: 3px double #80a8e5;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
  }
  .follow:hover {
    border: 3px solid #80a8e5;
  }
  .follow h2 {
    background-color: #80a8e5;
    color: white;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 2px 3px;
    border-radius: 16px;
  }
  .follow div {
    border-radius: 5px;
    padding: 1em 1em;
    text-align: center;
  }
  .follow::-webkit-scrollbar {
    display: none;
  }
  .follow div > a {
    color: #404040;
  }
  .follow div:hover {
    border: 1px solid #8bb0e7;
  }
</style>

<div class="follow">
  <h2>Follow stuff</h2>
  {#each follow as f}
    <div>
      <a href="/">{f.bookmark}</a>
    </div>
  {/each}
</div>
