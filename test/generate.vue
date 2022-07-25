<template>
  <AutoPage :pageSetting="pageSetting" :searchData="searchData" />
</template>
<script setup>
import { reactive } from 'vue'
import { createPageSetting, AutoPage } from 'mst-auto-page'

const searchData = reactive([])
const pageSetting = reactive(new createPageSetting())
pageSetting.preHandler.dynamic = false
pageSetting.preHandler.pagination.pageSize = 25
pageSetting.preHandler.tableCahngePage = (page, query) => {
  pageSetting.preHandler.loader = true
  pageSetting.preHandler.pagination.page = page
}

pageSetting.pageData = [
  {
    class: 'card',
    list: [
      {
        class: 'card-body',
        list: [
          {
            class: 'row',
            list: [
              {
                class: 'col-12',
                list: [
                  {
                    name: 'Hello Word',

                    tag: 'h1'
                  }
                ]
              },

              {
                class: 'col-md-8 text-md-end',
                list: [
                  {
                    name: 'Crerated',
                    class: 'btn btn-success waves-effect waves-light'
                  }
                ]
              },
              {
                class: 'col-md-8 text-md-end',
                list: [
                  {
                    name: 'Updated ',
                    class: 'btn btn-success waves-effect waves-light',
                    callback: row => console.log(row)
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>
