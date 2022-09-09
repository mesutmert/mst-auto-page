<template>
  <AutoPage :pageSetting="pageSetting" :allData="allData" />
</template>
<script setup>
import { reactive } from 'vue'
import { createPageSetting, AutoPage } from 'mst-auto-page'
import mockData from './mock_data.json'

const allData = reactive(mockData)

const headColumns = [
  {
    name: 'select',
    checkbox: true,
    title: 'Select',
    class: 'text-left',
    style: 'min-width:50px'
  },

  {
    name: 'first_name',
    title: 'Fisrt Name',
    sort: { n: 'first_name', t: 1 }
  },

  {
    name: 'last_name',
    title: 'Last Name',
    sort: { n: 'last_name', t: 1 }
  },

  {
    name: 'status',
    title: 'Status'
  }
]

const bodyColumns = [
  {
    name: 'select',
    tclass: 'text-left',
    class: 'checkClass',
    type: 'checkbox'
  },

  {
    tclass: 'text-left ',
    class: 'd-flex',
    list: [
      {
        name: 'first_name',
        class: 'd-inline-flex justify-center',

        callback: row => alert(row.first_name)
      }
    ]
  },

  {
    tclass: 'text-left ',
    class: 'd-flex',
    list: [
      {
        name: 'last_name',
        class: 'd-inline-flex justify-center'
      }
    ]
  },

  {
    tclass: 'text-left',
    list: [
      {
        name: 'status',
        class: row =>
          row.status === 'Active' ? 'btn btn-success' : 'btn btn-danger',
        tag: 'button',
        callback: row => console.log(row)
      }
    ]
  }
]
const pageSetting = reactive(new createPageSetting())
pageSetting.preHandler.dynamic = false
pageSetting.preHandler.pagination.pageSize = 25
pageSetting.preHandler.pagination.total = mockData.length
pageSetting.preHandler.sorting.n = 'first_name'
pageSetting.preHandler.autoSearch.alans = ['first_name', 'last_name']

pageSetting.pageData = [
  {
    class: 'row',
    list: [
      {
        class: 'col-12',
        type: 'comp',
        name: 'autosearch',
        data: {
          value: '',
          class: 'form-control',
          alans: ['first_name']
        }
      }
    ]
  },
  {
    tag: 'table',
    list: [
      {
        tag: 'thead',
        list: [
          {
            type: 'comp',
            name: 'tableHead',
            data: headColumns,
            class: 'table'
          }
        ]
      },
      {
        tag: 'tbody',
        list: [
          {
            type: 'comp',
            name: 'tableBody',
            data: bodyColumns,
            class: 'table'
          }
        ]
      }
    ]
  },

  {
    type: 'comp',
    name: 'pagination',
    data: {}
  }
]
</script>
