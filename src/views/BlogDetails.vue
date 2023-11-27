<template>
    <div>
        <div class="blog_top">
            <img src="../../public/img/blog_details/Banner.jpg" alt="top_img" class="blog_top_img">
        </div>

        <div id="app" class="blog_details_center">
            <div>
                <blogComp class="blog_details_center_elem" v-for="blog in blogList" :blog="blog" :key="blog.id"></blogComp>
            </div>
            <div class="blog_details_center_tags">
                <p class="blog_details_center_tags_title">Tags</p>
                <button class="blog_details_center_tag_elem" @click="sort(tag.name)" v-for="tag in tags" :key="tag.id">{{
                    tag.name }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import blogComp from '../components/blogDetailsComp.vue'
export default {
    components: {
        blogComp,
    },
    data() {
        return {
            blogList: [],
            blogs: [
                {
                    id: 0,
                    tags: 'bedroom',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '25 september 2022',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 1,
                    tags: 'bedroom',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '15 october 2021',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 2,
                    tags: 'kitchen',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '14 may 2023',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 3,
                    tags: 'kitchen',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '19 march 2023',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 4,
                    tags: 'bedroom',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '22 november 2022',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 5,
                    tags: 'bathroom',
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '16 september 2022',
                    image: 'img/blog_Details/image.jpg',
                    imageCent: 'img/blog_Details/image(1).jpg',
                    imageBottom: 'img/blog_Details/image(2).jpg',
                    article: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    subtitle: 'Design sprints are great',
                    articleBelow: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: [
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        },
                        {
                            title: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        }
                    ],
                    articleBottom: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },

            ],
            tags: [
                {
                    id: 0,
                    name: 'kitchen'
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
                    name: 'architecture'
                },
            ],
        }
    },
    methods: {
        sort(nameEl) {
            this.blogList = this.blogs.filter(function (blog) {
                return blog.tags == nameEl;
            })
        },
        fill() {
            this.blogList = this.blogs;
        },

    },
    mounted() {
        this.fill();
    },
}

</script>

<style scoped>
.blog_top {
    position: relative;
}

.blog_top_img {
    width: 100%;
}

.blog_details_center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    display: flex;
    flex-direction: row;
    gap: 52px;
}

.blog_details_center_elem {
    width: 810px;
}

.blog_details_center_elem_dateInfo {
    display: flex;
    gap: 500px;
}

.blog_details_center_tags {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    gap: 10px;
}

.blog_details_center_tags_title {
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #292F36;
}
</style>