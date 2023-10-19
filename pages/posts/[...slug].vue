<template>
    <div>
        <p class="cursor-pointer dark:hover:text-gray-100 dark:text-gray-300 " @click="back()">&lt; Back</p>
        <transition-group :css="false" @enter="onEnter">
            <content-renderer v-if="docFinish" key="renderer" :value="parsedContent" class="
                    transition-all duration-1000
                    dark:prose-invert
                    prose-p:text-gray-700 dark:prose-p:text-gray-300
                    dark:prose-headings:text-gray-200
                    prose prose-img:border prose-img:border-solid prose-img:border-gray-200
                    dark:prose-img:border-gray-700
                    prose-img:rounded-md max-w-full mx-auto" data-delay="1.2"/>
        </transition-group>
        <section
            v-if="docFinish"
            key="footer"
            class="transition-all w-full mt-4 text-right opacity-50 text-gray-600 font-sans text-sm dark:text-gray-100">
            <a v-for="([author], idx) in parsedContent?.authors"
               class="underline-offset-4">
                {{ author }} {{ idx === parsedContent?.authors.length - 1 ? '' : ', ' }}
            </a>
            <br/>
            <div v-if="parsedContent?.copyright" class="mt-1 w-fit mr-0 ml-auto">
                <span class="underline-offset-4 hover:underline">
                    &copy; <a :href="parsedContent?.copyright.url">{{ parsedContent?.copyright.name }}</a>
                </span>
            </div>
        </section>
    </div>
</template>

<style>
</style>

<script lang="ts" setup>
import {ParsedContent} from '@nuxt/content/dist/runtime/types';

const docFinish = ref(false);
const onEnter = (el: Element, done: () => void) => {
    const delay = Number((el as HTMLElement).dataset.delay ?? 0) * 1000;
    const element = el as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0px)';
        done();
    }, delay);
}
const parsedContent = ref<ParsedContent>();
const router = useRouter();
const route = useRoute();
const back = () => router.replace('/');
const queryDocument = () => queryContent().where({'_file': `${route.params.slug[0]}.md`}).findOne();
useAsyncData('content', queryDocument)
    .then((content) => {
        if (content.data.value) {
            parsedContent.value = content.data.value;
        }
        docFinish.value = true;
    })
</script>
