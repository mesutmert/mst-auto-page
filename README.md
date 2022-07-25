

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
  <AutoPage :pageSetting="pageSetting" :searchData="searchData" />
</template>
<script setup>
import { reactive } from 'vue'
import { createPageSetting, AutoPage } from 'mst-auto-page'
const searchData = reactive([])
const allData = reactive([
  {
    select: false,
    name: 'mesut Özcan',
    status: 'Active'
  },
  {
    select: false,
    name: 'mesut Özcan',
    status: 'Passive'
  },
  {
    select: false,
    name: 'mesut Özcan',
    status: 'Passive'
  }
])

const toLowerCaseByTurkish = str =>
  str
    .replace(/Ğ/g, 'ğ')
    .replace(/Ü/g, 'ü')
    .replace(/Ş/g, 'ş')
    .replace(/I/g, 'ı')
    .replace(/İ/g, 'i')
    .replace(/Ö/g, 'ö')
    .replace(/Ç/g, 'ç')
    .toLowerCase()
const runSearch = (autoSearch = null) => {
  let response =
    autoSearch && autoSearch.value.length > 0
      ? allData.filter(element => {
          let fullsearch = []
          autoSearch.alans.forEach(d => {
            fullsearch.push(toLowerCaseByTurkish(element[d].toString()))
          })
          const words = fullsearch.join(' ')
          return words.indexOf(toLowerCaseByTurkish(autoSearch.value)) !== -1
        })
      : allData

  searchData.splice(0, searchData.length)
  searchData.push(...response)
  // updData(searchData)
}

const columns = [
  {
    head: {
      name: 'select',
      checkbox: true,
      title: 'Select',
      class: 'text-left',
      style: 'min-width:50px'
    },
    body: {
      name: 'select',
      tclass: 'text-left',
      class: 'checkClass',
      type: 'checkbox'
    }
  },

  {
    head: {
      name: 'name',
      title: 'Name'
    },
    body: {
      tclass: 'text-left',
      list: [{ name: 'name', class: 'flex justify-center' }]
    }
  },

  {
    head: {
      name: 'status',
      title: 'Status'
    },
    body: {
      tclass: 'text-left',
      list: [
        {
          name: 'status',
          class: row =>
            row.status === 'Active' ? 'btn btn-success' : 'btn btn-danger',
          tag: 'button'
        }
      ]
    }
  }
]
const pageSetting = reactive(new createPageSetting())
pageSetting.preHandler.dynamic = false
pageSetting.preHandler.pagination.pageSize = 25
pageSetting.preHandler.tableCahngePage = (page, query) => {
  pageSetting.preHandler.loader = true
  pageSetting.preHandler.pagination.page = page
}

pageSetting.pageData = [
  {
    class: 'card w-100',
    list: [
      {
        class: 'card-body',
        list: [
          {
            class: 'row',
            list: [
              {
                type: 'comp',
                class: 'col-md-4',
                name: 'autosearch',
                data: {
                  alans: ['name'],
                  value: '',
                  class: 'form-control',
                  callback: (element, data) => {
                    runSearch(data)
                  }
                }
              },
              {
                class: 'col-md-8 text-md-end',
                list: [
                  {
                    name: 'Yeni Ekle',
                    class: 'btn btn-success waves-effect waves-light'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'comp',
    name: 'table',
    data: columns,
    class: 'table'
  },
  {
    type: 'comp',
    name: 'pagination',
    data: {}
  }
]

runSearch()
</script>

```






## License

MIT © [https://github.com/mesutmert/mst-auto-page](https://github.com/mesutmert/mst-auto-page)