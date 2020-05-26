<script>
    import { auth } from "./_firebase_utils";
    import ProfileCard from "./_components/ProfileCard.svelte";

    let currentUser = null;
    auth.onAuthStateChanged((firebaseUser) => {
        console.log(firebaseUser);
        if(firebaseUser) {
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
    <ProfileCard userObject={currentUser} />
{/if}

<style>
    .user-not-found-error {
        text-align: center;
        font-family: "Inconsolata", monospace;
    }
</style>