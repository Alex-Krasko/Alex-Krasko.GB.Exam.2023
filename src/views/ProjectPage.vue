<template>
    <div>
        <div class="banner">
            <img :src="banner" alt="banner">
            <div class="banner_title">
                <h1>Our Project</h1>
                <h4>Home / Project</h4>
            </div>
        </div>
        <TagsComp @selectedTag="sort" :tags="tags" />
        <ElementsComp :elems="sortedCatElements" />
    </div>
</template>
<script>
import TagsComp from './../components/TagsComp.vue'
import ElementsComp from './../components/ElementsComp.vue'
export default {
    name: 'projectPage',
    components: {
        TagsComp,
        ElementsComp,
    },
    data() {
        return {
            banner: 'img/project/Image.jpg',
            sortedCatElements: [],
            catElements: [
                {
                    id: 0,
                    categoreis: 'bedroom',
                    img: 'img/project/image(8).jpg',
                    title: 'Minimal Bedroom',
                }, {
                    id: 1,
                    categoreis: 'kitchan',
                    img: 'img/project/image(1).jpg',
                    title: 'Minimal Bedroom',
                }, {
                    id: 2,
                    categoreis: 'kitchan',
                    img: 'img/project/image(3).jpg',
                    title: 'Classic Minimal Bedroom',
                }, {
                    id: 3,
                    categoreis: 'living area',
                    img: 'img/project/image(2).jpg',
                    title: 'Modern Bedroom',
                },
                {
                    id: 4,
                    categoreis: 'bathroom',
                    img: 'img/project/image(4).jpg',
                    title: 'Minimal Bedroom Table',
                },
                {
                    id: 5,
                    categoreis: 'bathroom',
                    img: 'img/project/image(5).jpg',
                    title: 'System Table',
                },
                {
                    id: 6,
                    categoreis: 'bedroom',
                    img: 'img/project/image(7).jpg',
                    title: 'Modern Bedroom',
                },
                {
                    id: 7,
                    categoreis: 'bedroom',
                    img: 'img/project/image(6).jpg',
                    title: 'Modern Bedroom',
                },
            ],
            tags: [
                {
                    id: 0,
                    name: 'kitchan'
                },
                {
                    id: 1,
                    name: 'bedroom'
                },
                {
                    id: 2,
                    name: 'bathroom'
                },
                {
                    id: 3,
                    name: 'living area'
                },
            ],
        }
    },
    methods: {
        sort(nameEl) {
            this.sortedCatElements = this.catElements.filter(function (elem) {
                return elem.categoreis == nameEl;
            })
        },
        fill() {
            this.sortedCatElements = this.catElements;
        },
    },
    mounted() {
        this.fill();
    },

}
</script>
<style scoped>
.banner {
    position: relative;
}

.banner_title {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    top: 200px;
    left: calc(50% - 250px);
    padding-top: 41px;
    background-color: white;
    border-radius: 20px;
}
</style>