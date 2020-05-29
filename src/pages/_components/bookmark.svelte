<script>
  const bookmarks = [
    { id: 1, bookmark: "How to UI/UX", url: "/", check: true },
    { id: 2, bookmark: "Getting started with node js", url: "/", check: true },
    { id: 3, bookmark: "Future of AI", url: "/", check: true },
    {
      id: 4,
      bookmark: "All about P block elements in periodic table",
      url: "/",
      check: true
    },
    { id: 5, bookmark: "Cosmos Effect", url: "/", check: true }
  ];
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap");

  .bookmarks {
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
  .bookmarks:hover {
    border: 3px solid #80a8e5;
  }
  .bookmarks h2 {
    background-color: #80a8e5;
    color: white;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 2px 3px;
    border-radius: 16px;
  }
  .bookmarks div {
    border-radius: 5px;
    padding: 1em 1em;
  }
  .bookmarks::-webkit-scrollbar {
    display: none;
  }
  .bookmarks div > a {
    color: #404040;
  }
  .bookmarks div:hover {
    border: 1px solid #8bb0e7;
  }
</style>

<div class="bookmarks">
  <h2>Bookmarks</h2>
  {#each bookmarks as b}
    <div>
      <a href={b.url}>{b.bookmark}</a>
      <i class={!b.check ? 'far fa-bookmark' : 'fas fa-bookmark'} />
    </div>
  {/each}
</div>
