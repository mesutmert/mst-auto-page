

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
import { reactive } from 'vue'
import { createPageSetting, AutoPage } from 'mst-auto-page'

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
    name: 'mesut Özcan 1',
    status: 'Passive'
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
  },
  {
    select: false,
    name: 'mesut Özcan',
    status: 'Passive'
  },
  {
    select: false,
    name: 'mesut Özcan2',
    status: 'Passive'
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
  },
  {
    select: false,
    name: 'mesut Özcan 3',
    status: 'Passive'
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
  },
  {
    select: false,
    name: 'mesut Özcan',
    status: 'Passive'
  }
])

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
                  class: 'form-control'
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
</script>


```






## License

MIT © [https://github.com/mesutmert/mst-auto-page](https://github.com/mesutmert/mst-auto-page)