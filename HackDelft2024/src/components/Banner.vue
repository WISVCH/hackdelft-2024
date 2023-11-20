<template>
   <div class="banner-container">
        <img class="logo" src="../assets/logo.png" alt="Hack to the future logo">


        <div class="subtitle-container">
            <p>25 and 26 may 2024</p>
            <p> X TU Delft </p>
        </div>

        <div class="button-container">
            <p> More announced soon </p>
            <!-- <button class="primary"> Tickets </button> -->
            <!-- <button class="secondary"> Discord </button> -->
        </div> 
    </div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.banner-container {
    background-image:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #05238E 100%), url('../assets/synthwave.gif');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo {
    max-height: 300px;
}

.subtitle-container, .button-container {
    display: flex;
    gap: 100px;
    font-size: 24px;
    color: #84C1EE;
    margin-top: 20px;
    text-shadow: 0 0 2px #000;
    font-family: 'Krona One';
}

.button-container {
    display: flex;
    gap: 40px;
    margin-top: 20px;

}

button {
    font-size: 18px;
    color: #05238E;
    padding: 10px 50px;
    background: #84C1EE;
    border: 1px solid #05238E;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    font-family: 'Krona One';
}

button.secondary {
    color: #84C1EE;
    background: #05238E;
    border: 1px solid #84C1EE;
}
</style>