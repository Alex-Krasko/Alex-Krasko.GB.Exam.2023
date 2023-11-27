<template>
  <div class="footer_blk">
    <div class="footer_blk_info">
      <div class="footer_blk_info_elem">
        <img class="footer_blk_info_elem_img" src="img/Logo.svg" alt="logo">
        <p class="footer_blk_info_elem_txt">Interno</p>
      </div>
      <p class="footer_blk_info_elem_title">It is a long established fact that a reader will be distracted lookings.</p>
    </div>
    <div class="footer_blk_info pages">
      <p class="footer_blk_info_txt">Pages</p>
      <a href="/" class="footer_blk_info_txt">Home</a>
      <a href="/project" class="footer_blk_info_txt">Project</a>
      <a href="/blog" class="footer_blk_info_txt">Blog</a>

    </div>
    <div class="footer_blk_info">
      <p class="footer_blk_info_txt">Contact</p>
      <p class="footer_blk_info_txt">55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p class="footer_blk_info_txt">contact@interno.com</p>
      <p class="footer_blk_info_txt">(123) 456 - 7890</p>

    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComp',
}
</script>
<style scoped>
.footer_blk {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  display: flex;
  padding-top: 96px;
  padding-bottom: 134px;
}

.footer_blk_info {
  width: 393px;

}

.pages {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer_blk_info_elem {
  display: flex;
  gap: 10px;
  padding-bottom: 18px;
}

.footer_blk_info_elem_txt {
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #292F36;
}

.footer_blk_info_elem_title {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #4D5053;
}

.footer_blk_info_txt {
  gap: 25px;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #4D5053;
  padding-left: 100px;
}

.footer_blk_info_txt:first-child {
  font-size: 30px;
}
</style>