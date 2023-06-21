import React from 'react'

const Tab = () => {

  return (
        <>
        <div class="mb-4 border-b border-white dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-ubuntu font-medium text-center text-gray-400" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="flex-auto" role="presentation">
                    <button class="inline-block w-full p-4 border-b-2 rounded-t-lg  hover:text-blue-500 hover:border-blue-500" id="popular-tab" data-tabs-target="#popular" type="button" role="tab" aria-controls="popular" aria-selected="false">Popular</button>
                </li>
                <li class="flex-auto" role="presentation">
                    <button class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg text-gray-400 hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300" id="science-tab" data-tabs-target="#science" type="button" role="tab" aria-controls="science" aria-selected="false">Science</button>
                </li>
                <li class="flex-auto" role="presentation">
                    <button class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300" id="mathematics-tab" data-tabs-target="#mathematics" type="button" role="tab" aria-controls="mathematics" aria-selected="false">Mathematics</button>
                </li>
                <li class="flex-auto" role="presentation">
                    <button class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300" id="computer-tab" data-tabs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">Computer</button>
                </li>
            </ul>
        </div>

        <div id="myTabContent">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">popular tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="science" role="tabpanel" aria-labelledby="science-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">science tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="mathematics" role="tabpanel" aria-labelledby="mathematics-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">mathematics tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Computer tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
        </div>
        </>
)}

export default Tab