

# AutoPage - Vue3 Component

> Basic AutoPage and Datatable component for Vue3 in  Composition API. It has basic functionality such as Filter/Search, pagination etc.


## Install

```bash
npm install --save mst-auto-page

or,

yarn add mst-auto-page
```

## Usage




```vue
<template>
  <AutoPage :pageSetting="pageSetting" :allData="allData" />
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { createPageSetting, AutoPage } from 'mst-auto-page'
import mockData from './mock_data.json'

const allData = reactive(mockData) // reactive([]) if dynamic = true

const setData = page => {
  const ofset =
    pageSetting.preHandler.pagination.pageSize * page -
    pageSetting.preHandler.pagination.pageSize
  const end = ofset + pageSetting.preHandler.pagination.pageSize
  const nData = mockData.slice(ofset, end)
  allData.splice(0, allData.length)
  allData.push(...nData)
  pageSetting.preHandler.loader = false
}

const changeRoute = (query, first) => {
  const page = query.page ? parseInt(query.page) : 1

  if (first) pageSetting.preHandler.pagination.page = page
  setData(page)
}

const headColumns = [
  {
    checkbox: true,
    title: 'Select',
    class: 'text-left',
    style: 'min-width:50px'
  },

  {
    title: 'Fisrt Name',
    sort: { n: 'first_name', t: 1 }
  },

  {
    title: 'Last Name',
    sort: { n: 'last_name', t: 1 }
  },

  {
    title: 'Status'
  }
]

const bodyColumns = [
  {
    tag: 'td',
    class: '',
    list: [
      {
        name: 'select',
        class: 'checkClass',
        type: 'checkbox'
      }
    ]
  },
  {
    tag: 'td',

    list: [
      {
        name: 'first_name',
        class: 'd-inline-flex justify-center',

        callback: row => alert(row.first_name)
      }
    ]
  },

  {
    tag: 'td',
    list: [
      {
        name: 'last_name',
        class: 'd-inline-flex justify-center'
      }
    ]
  },

  {
    tag: 'td',
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

pageSetting.preHandler.tableCahngePage = (page, query) => {
  pageSetting.preHandler.loader = true
  // changeRoute(query) if dynamic = true
}
pageSetting.preHandler.tableChangePageSize = (pageSize, query) => {
  pageSetting.preHandler.loader = true
  // changeRoute(query) if dynamic = true
}

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
            class: 'table',
            line: { tag: 'tr', class: '' }
          }
        ]
      },
      {
        tag: 'tbody',
        list: [
          {
            line: { tag: 'tr', class: '' },
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

onMounted(() => {
  // changeRoute(route.query, true) if dynamic = true
})
</script>



```






## License

MIT © [https://github.com/mesutmert/mst-auto-page](https://github.com/mesutmert/mst-auto-page)