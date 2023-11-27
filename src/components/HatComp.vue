<template>
  <div>
    <nav class="navigate">
      <div class="logo">
        <img class="logo_img" src="img/Logo.svg" alt="logo">
        <p class="logo_txt">Interno</p>
      </div>
      <div class="menu">
        <a href="/" class="menu_el">Home</a>
        <a href="/project" class="menu_el">Project</a>
        <a href="/blog" class="menu_el">Blog</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HatComp',
}
</script>
<style scoped>
.navigate {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  padding-top: 44px;
  padding-bottom: 57px;
  display: flex;
  gap: 780px;
}

.logo {
  display: flex;
  gap: 10px;
}

.logo_img {
  width: 34px;
}

.logo_txt {
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #292F36;
}

.menu {
  display: flex;
  gap: 50px;
}

.menu_el {
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #292F36;
}
</style>