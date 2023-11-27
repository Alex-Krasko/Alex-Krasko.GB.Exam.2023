<template>
    <div>
        <div class="blog_top">
            <img src="../../public/img/blog/Photo.jpg" alt="top_img" class="blog_top_img">
            <div class="blog_top_matrix">
                <p class="blog_top_matrix_title">Articles & News</p>
                <p class="blog_top_matrix_subtitle">Home / Blog</p>
            </div>
        </div>
        <div class="blog_center">
            <div class="blog_center_block">
                <p class="blog_center_block_title">Latest Post</p>
                <div class="blog_center_block_info">
                    <img src="../../public/img/blog/Photo_blog.jpg" alt="blog" class="blog_center_block_info_img">
                    <div class="blog_center_block_info_title">
                        <p class="blog_center_block_info_title_1">Low Cost Latest Invented Interior Designing Ideas</p>
                        <p class="blog_center_block_info_title_2">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                            vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply
                            random text. It has roots in a piece of classica.</p>
                        <div class="blog_center_block_info_title_data">
                            <p class="blog_center_block_info_title_subtitle">22 December,2022</p>
                            <a href="/blog_details"><img src="../../public/img/blog/vector_cent.svg" alt=""
                                    class="blog_center_block_info_title_vect"></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="blog_bottom">
            <p class="blog_bottom_title">Articles & News</p>
            <div class="blog_bottom_block">
                <div v-for="elem in data" :key="elem.id" class="blog_bottom_block_elem">
                    <img :src="elem.img" alt="img">
                    <p class="blog_bottom_block_elem_title">{{ elem.title }}</p>
                    <p>{{ elem.date }}</p>
                    <a href="/blog_details"><img src="../../public/img/blog/vector_cent.svg" alt=""
                            class="blog_bottom_block_elem_vect"></a>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlogPage',
    data() {
        return {
            data: [{
                id: 0,
                img: 'img/blog/image(4).png',
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            }, {
                id: 1,
                img: 'img/blog/image(5).png',
                title: 'Low Cost Latest Invented Interior Designing Ideas',
                date: '22 December,2022',
            }, {
                id: 2,
                img: 'img/blog/image(6).png',
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022',
            }, {
                id: 3,
                img: 'img/blog/image_blog.jpg',
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            }, {
                id: 4,
                img: 'img/blog/image_blog(1).jpg',
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022',
            }, {
                id: 5,
                img: 'img/blog/image_blog(2).jpg',
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022',
            },

            ],
        }
    }
}
</script>
<style scoped>
.blog_top {
    position: relative;
}

.blog_top_img {
    width: 100%;
}

.blog_top_matrix {
    position: absolute;
    background: #FFFFFF;
    border-radius: 37px 37px 0px 0px;
    width: 503px;
    height: 178px;
    left: calc(50% - 250px);
    top: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.blog_top_matrix_title {
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #292F36;
    margin-bottom: 0;
}

.blog_top_matrix_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
    margin-top: 0;
}

.blog_center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.blog_center_block {
    padding-bottom: 176px;
    padding-top: 200px;
}

.blog_center_block_title {
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #292F36;
}

.blog_center_block_info {
    box-sizing: border-box;
    display: flex;
    padding: 22px;
    gap: 65px;
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
}

.blog_center_block_info_img {
    width: 569px;
    height: 478px;
    border-radius: 62px;
}

.blog_center_block_info_title {
    display: flex;
    flex-direction: column;
    gap: 21px;
    justify-content: center;
}

.blog_center_block_info_title_1 {
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
}

.blog_center_block_info_title_2 {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.blog_center_block_info_title_data {
    display: flex;
    gap: 214px;
}

.blog_center_block_info_title_subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #4D5053;
}

.blog_bottom {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.blog_bottom_title {
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #292F36;
}

.blog_bottom_block {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
}

.blog_bottom_block_elem {
    position: relative;
    width: 336px;
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
    padding: 21px;
}

.blog_bottom_block_elem_title {
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    padding-bottom: 20px;
}

.blog_bottom_block_elem_vect {
    position: absolute;
    bottom: 21px;
    right: 21px;
}
</style>