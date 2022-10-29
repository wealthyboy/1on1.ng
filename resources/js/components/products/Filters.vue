<template>
    <li>
        <a href="#" @click.prevent="getUrl(category)" class="list-group-item list-group-item-action">{{ category.name }}</a>
    </li>
</template>
<script>

export default {
    props: {
        category: Object,
    },
    setup() {
        function getUrl (link) {
            console.log(link)
        }

        return {
            getUrl
        }
    },


}
</script>
