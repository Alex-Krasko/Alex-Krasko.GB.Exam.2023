<template>
    <div>
        <div class="top">
            <img class="top_banner" src="../../public/img/home/Photo.png" alt="banner">
            <div class="top_onbanner">
                <p class="top_onbanner_title">Let Your Home Be Unique</p>
                <p class="top_onbanner_subtitle">There are many variations of the passages of lorem Ipsum fromavailable,
                    majority.</p>
                <a href="/project"><button class="top_onbanner_btn">Get Started <img class="top_onbanner_btn_vctr"
                            src="../../public/img/home/Vector.png" alt="vctr"></button></a>
            </div>
        </div>
        <div class="center">
            <div class="center_text">
                <p class="center_text_title">Follow Our Projects</p>
                <p class="center_text_subtitle">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>
            <div class="center_blk">
                <HomeBlogElem :img="projectImg[0]" />
                <HomeBlogElem :img="projectImg[1]" />
                <HomeBlogElem :img="projectImg[2]" />
                <HomeBlogElem :img="projectImg[3]" />

            </div>

        </div>
        <div class="bottom">
            <div class="bottom_elem">
                <p class="bottom_elem_num">12</p>
                <p class="bottom_elem_title">Years Of Experiance</p>
            </div>
            <div class="bottom_elem">
                <p class="bottom_elem_num">85</p>
                <p class="bottom_elem_title">Success Project</p>

            </div>
            <div class="bottom_elem">
                <p class="bottom_elem_num">15</p>
                <p class="bottom_elem_title">Active Project</p>

            </div>
            <div class="bottom_elem">
                <p class="bottom_elem_num">95</p>
                <p class="bottom_elem_title">Happy Customers</p>

            </div>
        </div>
        <div class="footer">
            <div class="footer_text">
                <p class="footer_text_title">Articles & News</p>
                <p class="footer_text_subtitle">It is a long established fact that a reader will be distracted by the of
                    readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div class="footer_info">
                <div class="footer_info_elem">
                    <img src="../../public/img/home/Image(4).png" alt="" class="footer_info_elem_img">
                    <p class="footer_info_elem_title">Let’s Get Solution For Building Construction Work</p>
                    <p class="footer_info_elem_subtitle">26 December,2022</p>
                    <a href="/blog"><img src="../../public/img/home/vector_cent.svg" alt=""
                            class="footer_info_elem_vect"></a>
                </div>
                <div class="footer_info_elem">
                    <img src="../../public/img/home/Image(5).png" alt="" class="footer_info_elem_img">
                    <p class="footer_info_elem_title">Low Cost Latest Invented Interior Designing Ideas.
                    </p>
                    <p class="footer_info_elem_subtitle">22 December,2022</p>
                    <a href="/blog"><img src="../../public/img/home/vector_cent.svg" alt=""
                            class="footer_info_elem_vect"></a>
                </div>
                <div class="footer_info_elem">
                    <img src="../../public/img/home/Image(6).png" alt="" class="footer_info_elem_img">
                    <p class="footer_info_elem_title">Best For Any Office & Business Interior Solution
                    </p>
                    <p class="footer_info_elem_subtitle">25 December,2022</p>
                    <a href="/blog"><img src="../../public/img/home/vector_cent.svg" alt=""
                            class="footer_info_elem_vect"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import HomeBlogElem from '../components/HomeBlogElem.vue'
export default {
    name: 'HomePage',
    components: {
        HomeBlogElem,
    },
    data() {
        return {
            projectImg: ['img/home/Image.png', 'img/home/Image(1).png', 'img/home/Image(2).png', 'img/home/Image(3).png'],
        }
    }
}
</script>
<style scoped>
.top {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    padding-bottom: 96px;
}

.top_banner {
    width: 1200px;
    position: relative;
}

.top_onbanner {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    top: 358px;
    left: calc(50% - 500px);
    width: 484px;
    gap: 18px;
}

.top_onbanner_title {
    font-weight: 400;
    font-size: 65px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #292F36;
}

.top_onbanner_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.top_onbanner_btn {
    width: 220.14px;
    height: 75px;
    background: #292F36;
    box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
    border-radius: 18px;
    padding-left: 48px;
    padding-top: 26px;
    padding-bottom: 26px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
}

.top_onbanner_btn_vctr {
    width: 15px;
    padding-left: 10px;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    display: flex;
    flex-direction: column;
}

.center_text {
    width: 737px;
    padding-left: calc(50% - 358px);
    padding-right: calc(50% - 358px);
    align-items: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-bottom: 93px;
}

.center_text_title {
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #292F36;
}

.center_text_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    /* or 33px */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.center_blk {
    display: flex;
    flex-wrap: wrap;
    gap: 90px;
    padding-bottom: 96px;
}

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

.bottom {
    background: #F4F0EC;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 96px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 76px;
}

.bottom_elem {
    border-right: 1px solid #CDA274;
    margin-top: 151px;
    margin-bottom: 151px;
    padding-right: 54px;
}

.bottom_elem_num {
    font-weight: 400;
    font-size: 85px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #CDA274;
}

.bottom_elem_title {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.bottom_elem:last-child {
    border-right: none;
}

.footer {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.footer_text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 194px;
    padding-right: 194px;
    padding-bottom: 54px;
}

.footer_text_title {
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #292F36;
}

.footer_text_subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #4D5053;
}

.footer_info {
    display: flex;
    gap: 27px;
}

.footer_info_elem {
    position: relative;
    width: 382px;
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
}

.footer_info_elem_img {
    padding: 21px;
}

.footer_info_elem_title {
    padding-left: 21px;
    padding-right: 35px;
    padding-bottom: 30px;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
}

.footer_info_elem_subtitle {
    padding-left: 21px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #4D5053;
}

.footer_info_elem_vect {
    position: absolute;
    width: 52px;
    left: 310px;
    top: 420px;
}

.footer_info_elem:nth-child(2) {
    background-color: #E7E7E7;
}
</style>