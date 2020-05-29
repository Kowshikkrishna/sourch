<script>
  const notifs = [
    { id: 1, notif: "Tom subscribed" },
    { id: 2, notif: "Jerry contributed to your work" },
    { id: 3, notif: "Tom viewed your work" },
    { id: 4, notif: "Jerry liked your post" },
    { id: 5, notif: "Jerry subscribed" },
    { id: 6, notif: "Tom contributed to your work" },
    { id: 7, notif: "Luana subscribed" },
    { id: 8, notif: "Jerry contributed to your work" }
  ];
</script>

<div class="notifs">
  <h3>Notifications</h3>
  <div>
    {#each notifs as n, i (n.id)}
      <span>{n.notif}</span>
    {/each}
  </div>
</div>


<style>
  .notifs::-webkit-scrollbar {
    display: none;
  }
  .notifs {
    width: 100%;
    height: 180px;
    overflow: auto;
    border: 3px double #80a8e5;
		border-radius:14px;
		box-sizing:border-box;
    padding: 20px 20px;
    margin-left: none;
    margin-right: auto;
    margin-top: 15px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
    -ms-overflow-style: none;
		text-align:center;
  }
  .notifs:hover {
    border: 3px solid #80a8e5;
  }
  .notifs h3 {
    background-color: #80a8e5;
    color: white;
    text-align: center;
    margin:15px 0 30px 0;
    padding: 1px 25px;
    border-radius: 20px;
		display: inline-block;
  }
  .notifs div > span {
    border-top: 1px solid #8bb0e7;
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #404040;
    padding: 1em 1em;
  }
</style>