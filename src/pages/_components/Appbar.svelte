<script>
    import { auth } from "../_firebase_utils.js";

    let currentUser = null;
    auth.onAuthStateChanged((firebaseUser) => currentUser = firebaseUser);
</script>

<header>
    <h1><a href="/">Sourch</a></h1>
    <nav>
        <a href="/">About</a>
        <a href="/">Pricing</a>
        <a href="/">Work</a>
        {#if currentUser !== null}
            <a href="/auth" on:click={() => auth.signOut()}>Sign Out</a>
        {:else}
            <a href="/auth">Auth</a>
        {/if}
    </nav>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap');

    header {
        text-align: center;
        background-image: linear-gradient(to right, #1e4d94, #80a8e5);
        padding-top: 4px;
        padding-bottom: 4px;
        margin: 4px;
        border-radius: 15px;
    }

    h1 a {
        color: white;
        font-family: "Pacifico", cursive;
        font-size: 45px;
        text-decoration: none;
        transition: ease-in 0.3s;
    }

    h1 a:hover {
        font-size: 50px;
    }

    h1 a:active {
        font-size: 47px;
    }

    nav {
        padding-bottom: 5px;
    }

    nav a{
        text-decoration: none;
        color: white;
        padding: 5px;
        font-family: "Inconsolata", monospace;
        font-size: 20px;
        transition: ease-in 0.3s;
    }

    nav a:hover {
        background-color: white;
        color: #1e4d94;
        font-size: 25px;
    }

    nav a:active {
        font-size: 22px;
    }
</style>