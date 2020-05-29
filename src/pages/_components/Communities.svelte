<script>
  const communities = [
    { id: 1, com: "Python" },
    { id: 2, com: "JS" },
    { id: 3, com: "C++" }
  ];
</script>

<div class="com">
  <h2>Communities</h2>
  {#each communities as c}
    <div>
      <a href="/">{c.com}</a>
    </div>
  {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap");
  .com {
    font-family: "Inconsolata", monospace;
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 15px;
		padding: 20px;
    width: 100%;
    height: 250px;
    overflow: auto;
    border: 3px double #80a8e5;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
		border-radius:16px;
		box-sizing:border-box;
		text-align:center;
		-ms-overflow-style: none;
  }
  .com:hover {
    border: 3px solid #80a8e5;
  }
  .com h2 {
    background-color: #80a8e5;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0.1em 1.5em;
    border-radius: 16px;
		display: inline-block;
  }
  .com div {
    border-radius: 5px;
    margin: 0.7em 0.5em;
		padding: 0.5em 1em;border-radius: 5px;
    text-align: center;
  }
  .com::-webkit-scrollbar {
    display: none;
  }
  .com div > a {
    color: #404040;
    left: 50%;
  }
  .com div:hover {
    border: 1px solid #8bb0e7;
  }
</style>
