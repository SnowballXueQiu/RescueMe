<template>
    <div>
        <logo/>
        <content-navigation v-slot="{navigation}">
            <ul class="mx-auto">
                <template v-for="nav in navigation">
                    <nuxt-link :to="`/posts${nav._path}`" no-prefetch >
                        <li
                            v-if="!nav._draft"
                            class="cursor-pointer transition-all duration-500 my-5
                                   text-lg xl:text-xl md:text-lg
                                   dark:text-gray-400 hover:dark:text-gray-100
                            "
                        >
                            {{ nav.title }}
                        </li>
                    </nuxt-link>
                </template>
            </ul>
        </content-navigation>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Rescue Me'
})
</script>