<template>
    <div class="center_blk_elem">

        <img class="center_blk_elem_img" :src="img" alt="center_elem">
        <div class="center_blk_elem_text">
            <p class="center_blk_elem_title">Modern Kitchan</p>
            <p class="center_blk_elem_subtitle">Decor / Artchitecture</p>
            <a href="/project"><img src="../../public/img/home/vector_cent.svg" alt="vect"
                    class="center_blk_elem_vectimg"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBlogElem',
    props: ['img'],
    methods: {},
}
</script>

<style scoped>
.center_blk_elem_img {
    padding-bottom: 24px;
}

.center_blk_elem_text {
    position: relative;
}

.center_blk_elem_title {
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    padding-bottom: 4px;
}

.center_blk_elem_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.center_blk_elem_vectimg {
    position: absolute;
    left: 480px;
    top: 0px;
}
</style>