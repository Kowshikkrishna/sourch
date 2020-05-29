<script>
  const follow = [
    { id: 1, bookmark: "Machine Learning" },
    { id: 2, bookmark: "C language" },
    { id: 3, bookmark: "Artificial Intelligence" }
  ];
</script>

<div class="follow">
  <h2>Follow stuff</h2>
  {#each follow as f}
    <div>
      <a href="/">{f.bookmark}</a>
    </div>
  {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap");
  .follow {
    font-family: "Inconsolata", monospace;
		box-sizing:border-box;
    margin: 15px 1px 0 1px;
    padding:10px;
		border-radius:14px;
    width: 100%;
    height: 250px;
    overflow: auto;
    border: 3px double #80a8e5;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
		text-align:center;
		-ms-overflow-style: none;
  }
  .follow:hover {
    border: 3px solid #80a8e5;
  }
  .follow h2 {
    background-color: #80a8e5;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0.1em 1.5em;
    border-radius: 16px;
		display: inline-block;
  }
  .follow div {
    border-radius: 5px;
    padding: 0.7em 0;
		margin: 1em 1em;
  }
  .follow::-webkit-scrollbar {
    display: none;
  }
  .follow div > a {
    color: #404040;
		text-decoration: none;
  }
  .follow div:hover {
    border: 1px solid #8bb0e7;
  }
</style>