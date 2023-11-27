<template>
    <div class="tags">
        <button @click="select(tag.name)" v-for="(tag, index) in tags" :key="index">{{ tag.name }}</button>
    </div>
</template>

<script>
export default {
    name: 'TagsComp',
    props: ['tags'],
    methods: {
        select(id) {
            this.$emit('selectedTag', id);
        },
    },
}
</script>

<style scoped>
.tags {
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: calc(50% - 150px);
}

.tags>button {
    padding: 10px;
}
</style>