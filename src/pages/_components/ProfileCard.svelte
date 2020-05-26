<script>
    export let userObject;
</script>

<div class="profile-card">
    <div class="img">
        <img src={userObject.photoURL} alt="Mentalist Picture">
    </div>
    <div class="user-info">
        <h2>Username: {userObject.displayName}</h2>
        <p>Email: {userObject.email}</p>
        <p>Status: null</p>
        <p>Social Media Links: null</p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin&family=Inconsolata&family=Nunito&family=Nunito+Sans&family=Pacifico&family=Quicksand&family=Rubik&family=VT323&display=swap');

    .img {
        grid-area: image;
        margin: 20px;
    }

    .user-info {
        grid-area: userInfo;
    }

    img {
        width: 70%;
        border-radius: 50%;
    }

    .profile-card {
        font-family: "Inconsolata", monospace;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        width: 40%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 0;
        grid-template-rows: minmax(50%, auto);
        grid-template-areas: "image userInfo";
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
    }
</style>