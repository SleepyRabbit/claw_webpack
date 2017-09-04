/**
 * Created by houenxing on 17/9/3.
 */
"use strict";

import list from '@/components/list'
import my from '@/components/my'
import detail from '@/components/detail'

export default [
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
]
