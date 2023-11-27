<template>
    <div class="elems">
        <div v-for="(elem, index) in elems" :key="index" class="elem">
            <img :src="elem.img" alt="image">
            <div class="elem_text">
                <div>
                    <p class="elem_title">Modern Kitchan</p>
                    <p class="elem_subtitle">Decor / Artchitecture</p>
                </div>
                <a href="/project_details"><img src="img/project/vector_cent.svg" alt="vect"></a>
            </div>
            <img @click="favorites(index)" :id="index" class="elem_fav" src="img/project/star.svg" alt="favorites">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElementsComp',
    props: ['elems'],
    methods: {
        favorites(id) {
            var favEl = document.getElementById(id);
            favEl.classList.add('elem_sel');
        }
    }
}
</script>

<style scoped>
.elems {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: calc(50% - 600px);
    width: 1200px;
    gap: 15px;
}

.elem {
    position: relative;
}

.elem_text {
    display: flex;
    gap: 300px;
}

.elem_title {
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    padding-bottom: 4px;
}

.elem_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.elem_fav {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 5%;
}

.elem_sel path {
    fill: rgba(255, 255, 255, 0.45);
}
</style>