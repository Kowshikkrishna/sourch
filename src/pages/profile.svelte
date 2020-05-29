<script>
  import { auth } from "./_firebase_utils";
  import ProfileCard from "./_components/ProfileCard.svelte";
  import Communities from "./_components/Communities.svelte";
  import Follow from "./_components/followstuff.svelte";
  import Bookmark from "./_components/bookmark.svelte";
  import Support from "./_components/support.svelte";
  import Noti from "./_components/noti.svelte";
  let currentUser = null;
  auth.onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser);
    if (firebaseUser) {
      currentUser = firebaseUser;
    }
  });
</script>

{#if currentUser === null}
  <div class="user-not-found-error">
    <h1>User Not Found Error</h1>
    <p>Try Signing In</p>
  </div>
{:else}
  <div class="grid">
    <div class="profile">
      <ProfileCard userObject={currentUser} />
    </div>
    <div class="noti">
      <Noti />
    </div>
    <Communities />
    <Follow />
    <Bookmark />
    <Support />
  </div>
{/if}

<style>
  .user-not-found-error {
    text-align: center;
    font-family: "Inconsolata", monospace;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    padding: 0.5em;
    padding-left: 0.3em;
  }
  .profile {
    grid-column: 1/4;
  }
  .noti {
    grid-template-columns: 2fr;
  }
  @media only screen and (max-width: 800px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      padding: 0.8em;
      padding-left: 0.3em;
    }
    .noti {
      display: none;
    }
    .profile {
      grid-column: auto;
    }
  }
</style>
