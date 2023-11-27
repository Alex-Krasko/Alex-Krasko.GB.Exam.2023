<template>
    <div>
        <p class="blog_details_center_elem_title">{{ blog.title }}</p>
        <img class="blog_details_center_elem_img" :src="blog.image">
        <div class="blog_details_center_elem_dateInfo">
            <p class="blog_details_center_elem_dateInfo_date">{{ blog.date }}</p>
            <div>
                <p class="blog_details_center_elem_dateInfo_nav">Interior / Home / Decore</p>
            </div>
        </div>
        <p class="blog_details_center_elem_article">{{ blog.article }}</p>
        <img class="blog_details_center_elem_img" :src="blog.imageCent">
        <p class="blog_details_center_elem_title">{{ blog.subtitle }}</p>
        <p class="blog_details_center_elem_article">{{ blog.articleBelow }}</p>
        <ol class="blog_details_center_elem_list">
            <li v-for="(obj, index) in blog.list" :key="index">{{ obj.title }}</li>
        </ol>
        <img class="blog_details_center_elem_img" :src="blog.imageBottom">
        <p class="blog_details_center_elem_article">{{ blog.articleBottom }}</p>
    </div>
</template>
<script>
export default {
    name: 'blogComp',
    props: ['blog'],
}
</script>
<style scoped>
.blog_details_center_elem_title {
    font-weight: 400;
    font-size: 50px;
    letter-spacing: 0.02em;
    color: #292F36;
}

.blog_details_center_elem_article {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.blog_details_center_elem_list {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.01em;
    gap: 32px;

    color: #4D5053;
}
</style>