<template>
    <div
         class="dark:hover:text-gray-100 dark:text-gray-300 mt-4 leading-loose dark:prose-invert dark:prose-headings:text-gray-300">
        <hr class="text-center mx-auto border border-solid border-[#1f2937] rounded-[5px]"/>
        <div
            class="text-center flex flex-wrap justify-center items-center py-4 bg-slate-900 mt-4 rounded-md">
            <div style="text-align: right; margin-right: 10px;">
                <a
                   href="https://github.com/SnowballXueQiu/RescueMe"
                   rel="noopener noreferrer"
                   target="_blank">
                    <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
            <div class="text-center flex-wrap justify-center items-center hidden md:flex">
                <a class="underline-offset-4 hover:underline"
                   href="https://github.com/SnowballXueQiu/RescueMe"
                   rel="noopener noreferrer"
                   target="_blank">SnowballXueQiu/RescueMe</a>
                <div class="flex items-center ml-[10px]">
                    <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                    </svg>
                    &nbsp;
                    <a :href="`https://github.com/SnowballXueQiu/RescueMe/commit/${commit}`"
                       class="underline-offset-4 hover:underline"
                       rel="noopener noreferrer"
                       target="_blank">{{ commit }}</a> &nbsp;&nbsp;
                    <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327 .668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <span>&nbsp{{ stargazers_count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const stargazers_count = ref(0);
const commit = ref('');

async function fetchData() {
    try {
        const response1 = await fetch('https://api.github.com/repos/SnowballXueQiu/RescueMe');
        const json1 = await response1.json();
        stargazers_count.value = json1.stargazers_count;

        const response2 = await fetch('https://api.github.com/repos/SnowballXueQiu/RescueMe/commits/main');
        const json2 = await response2.json();
        commit.value = (json2.sha as string)?.slice?.(0, 8) ?? '';
    } catch (error) {
        console.error('An error occurred: ', error);
    }
}

fetchData();

</script>