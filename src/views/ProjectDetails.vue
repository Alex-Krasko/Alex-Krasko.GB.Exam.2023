<template>
    <div>
        <div class="title">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
        </div>
        <div class="image">
            <img class="img" :src="img" alt="">
            <button @click="funSliderPrev">Prev</button>
            <button @click="funSliderNext">Next</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectDetails',
    data() {
        return {
            img: 'img/Photo.jpg',
            slider: 0,
            dataImg: [
                'img/Photo.jpg',
                'img/Photo(1).jpg',
                'img/Photo(2).jpg'
            ]
        }
    },
    computed: {
        ...mapState(['title', 'subtitle']),
    },
    methods: {
        funSliderNext() {
            this.slider++
            if (this.slider >= this.dataImg.length) {
                this.slider = 0
                this.img = this.dataImg[this.slider]
            } else {
                this.img = this.dataImg[this.slider]
            }
        },
        funSliderPrev() {
            this.slider--
            if (this.slider < 0) {
                this.slider = this.dataImg.length - 1
                this.img = this.dataImg[this.slider]
            } else {
                this.img = this.dataImg[this.slider]
            }
        },
    },
}
</script>
<style>
.title {
    padding-top: 32px;
    padding-left: calc(50% - 330px);
    padding-right: calc(50% - 330px);
    padding-bottom: 48px;
}

.image {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.img {
    border-radius: 48px;
    transition: 1s;
    width: 800px;
}
</style>