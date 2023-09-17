<template>
    <html lang="zh-CN"></html>
    <div class="py-10 px-7">
        <content-doc v-slot="{doc}">
            <transition-group name="slide" @enter="onEnter">
                <div v-if="finish" class="text-center mb-4 dark:prose-invert dark:prose-headings:text-gray-300">
                    <img alt="Rescue Me" class="mx-auto"
                         src="../public/logo.svg" style="max-width: 90%">
                    <br/>
                    <hr class="mx-auto" style="width: 90%; border: 1px solid #1f2937; border-radius: 5px;">
                </div>
                <content-renderer v-if="finish" key="renderer" :value="doc" class="
                        dark:prose-invert
                        prose-p:text-gray-700 dark:prose-p:text-gray-300
                        dark:prose-headings:text-gray-200
                        prose prose-img:border prose-img:border-solid prose-img:border-gray-200
                        dark:prose-img:border-gray-700
                        prose-img:rounded-md max-w-full mx-auto
                    " data-delay="2"/>
                <footer v-if="finish"
                        key="footer"
                        class="w-full mt-4 text-right opacity-50 text-gray-600 font-sans text-sm dark:text-gray-300">
                    <a v-for="([author,email], idx) in doc['authors']" :href="`mailto:${email}`"
                       class="underline-offset-4 hover:underline">
                        {{ author }} {{ idx === doc['authors'].length - 1 ? '' : ', ' }}
                    </a>
                    <br/>
                    <div v-if="doc['copyright']" class="mt-1 w-fit mr-0 ml-auto">
                        <span class="underline-offset-4 hover:underline">
                            &copy; <a :href="doc['copyright'].url">{{ doc['copyright'].name }}</a>
                        </span>
                    </div>
                    <div v-if="finish" class="mb-4 dark:prose-invert dark:prose-headings:text-gray-300"
                         style="margin-top: 50px; line-height:200%;">
                        <hr class="text-center mx-auto"
                            style="width: 90%; border: 1px solid #1f2937; border-radius: 5px;">
                        <br/>
                        <div class="text-left">
                            前端:
                            <a class="underline-offset-4 hover:underline" href="https://github.com/GaoNeng-wWw"
                               rel="noopener noreferrer"
                               target="_blank">GaoNeng-wWw</a> | <a
                            class="underline-offset-4 hover:underline" href="https://github.com/SnowballXueQiu"
                            rel="noopener noreferrer"
                            target="_blank">Snowball_233</a> <br/>
                            <span>撰稿: 旧棠</span> <br/>
                            友情链接:
                            <a class="underline-offset-4 hover:underline" href="https://github.com/xSilver-Yang"
                               rel="noopener noreferrer"
                               target="_blank">xSilver-Yang</a> <br />
                            GitHub:
                            <a class="underline-offset-4 hover:underline" href="https://github.com/SnowballXueQiu/RescueMe"
                               rel="noopener noreferrer"
                               target="_blank">RescueMe</a> <br />
                        </div>

                        <!-- 当前commit名 -->
                        <!--                        <span class="mx-2">|</span>-->
                        <!--                        <span>当前commit名: {{ currentCommitName }}</span>-->
                    </div>
                </footer>
            </transition-group>
        </content-doc>

    </div>
</template>

<style>
</style>

<script lang="ts" setup>
const finish = ref(false);
setTimeout(() => finish.value = true, 100)
let depth = 20;
const onEnter = (el: Element, done: () => void) => {
    if (depth >= 0) {
        const delay = Number((el as HTMLElement).dataset.delay ?? 0) * 1000;
        setTimeout(() => {
            done();
        }, delay);
        depth -= 1;
    } else {
        done();
    }
}
</script>