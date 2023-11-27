<template>
    <div class="page404">
        <div class="page404_info">
            <p class="page404_title">404</p>
            <h1 class="page404_subtitle">We are sorry, but the page
                you requested was not found</h1>
            <a href="/home"><button class="page404_btn">Back To Home</button></a>
        </div>
        <img class="page404_img" src="../../public/img/404/Photo.jpg" alt="Error_404">
    </div>
</template>
<script>
export default {
    name: 'notFound'

}
</script>
<style scoped>
.page404 {
    display: flex;
    padding-left: calc(50% - 650px);
    align-items: center;
    gap: 150px;
}

.page404_info {
    display: flex;
    width: 569px;
    flex-direction: column;
    align-items: flex-start;
}

.page404_title {
    color: #CDA274;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: DM Serif Display;
    font-size: 250px;
    margin: 0;
}

.page404_subtitle {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
}

.page404_btn {
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    padding: 26px 54px;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
}

.page404_img {
    width: 900px;
    text-align: end;
    border-bottom-left-radius: 300px;
}
</style>