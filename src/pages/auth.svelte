<script>
    import { auth, provider, createUserRecord } from "./_firebase_utils.js";
    import { goto } from "@sveltech/routify";

    let displayName = "";
    let signUpEmail = "";
    let signUpPassword = "";
    let signUpConfirmPassword = "";

    let signInEmail = "";
    let signInPassword = "";

    let signInClicked = false;

    const signUp = async () => {
        if(signUpPassword === signUpConfirmPassword) {
            const { user } = await auth.createUserWithEmailAndPassword(signUpEmail.trim(), signUpPassword);
            await createUserRecord(user, {displayName});
        } else {
            window.alert("Both passwords are not equal");
        }
    }

    const signIn = () => {
        auth.signInWithEmailAndPassword(signInEmail.trim(), signInPassword);
    }

    const connectWithGoogle = () => {
        auth.signInWithPopup(provider).then((result) => createUserRecord(result.user));
    }

    auth.onAuthStateChanged((user) => {
        console.log(user);
        if(user !== null) {
            $goto("/profile")
        }
    });
</script>

<div>
    <button class={!signInClicked ? "active" : ""} on:click={() => signInClicked = false}>Sign Up</button>
    <button class={signInClicked ? "active" : ""} on:click={() => signInClicked = true}>Sign In</button>
    {#if !signInClicked}
        <form on:submit|preventDefault={signUp}>
            <h2>Sign Up</h2>
            <label>
                Username
                <input type="text" bind:value={displayName} required>
            </label>
            <label>
                Email
                <input type="email" bind:value={signUpEmail} required>
            </label>
            <label>
                Password
                <input type="password" bind:value={signUpPassword} required>
            </label>
            <label>
                Confirm Password
                <input type="password" bind:value={signUpConfirmPassword} required>
            </label>
            <button type="submit">Sign Up</button>
            <button type="button" on:click={connectWithGoogle}>Connect With Google</button>
        </form>
    {:else}
        <form on:submit|preventDefault={signIn}>
            <h2>Sign In</h2>
            <label>
                Email
                <input type="email" bind:value={signInEmail} required>
            </label>
            <label>
                Password
                <input type="password" bind:value={signInPassword} required>
            </label>
            <button type="submit">Sign In</button>
            <button type="button" on:click={connectWithGoogle}>Connect With Google</button>
        </form>
    {/if}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap');

    div {
        text-align: center;
        margin: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        padding: 20px;
        font-family: "Inconsolata", monospace;
    }

    h2 {
        font-size: 30px;
        font-family: "Pacifico", cursive;
    }

    label {
        font-size: 20px;
        margin-bottom: 10px;
    }

    input {
        display: block;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }

    button {
        font-size: 20px;
        font-family: "Pacifico", cursive;
        width: 90%;
        background-color: #80a8e5;
        color: white;
        transition: ease-in 0.3s;
    }

    button:hover {
        background-color: white;
        color: #80a8e5;
        font-size: 25px;
        cursor: pointer;
    }

    button:active {
        font-size: 22px;
    }

    .active {
        background-color: #1e4d94;
    }

    @media screen and (min-width: 760px) {
        div {
            width: 25%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>