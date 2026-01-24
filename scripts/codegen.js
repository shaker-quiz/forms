import template from './template.js' with { type: 'text' }

import { Contracts } from '@shakerquiz/contracts'
import { Methods, Mode, Roles, Routes } from '@shakerquiz/utilities'

let Forms = [
  'POST/theme/cover/admin',
  'PUT/theme/cover/admin',
]

let path = x => x.join('/')

let schema = x => path(x).replaceAll('/', '_')

let all = Methods
  .flatMap(method => Routes.map(route => [method, route]))
  .flatMap(([method, route]) => Roles.concat(Mode['Unknown']).map(role => [method, route, role]))

let exists = await Promise
  .all(all.map(x => Bun.file(`./source/forms/${path(x)}.json`).exists()))
  .then(exists => exists.reduce((set, e, i) => e ? set.add(all[i]) : set, new Set()))
  .then(Array.from)

let imports = exists
  .map(x => `import ${schema(x)} from './forms/${path(x)}.json' with { type: 'json' }`)
  .join('\n')

let forms = exists
  .map(x => `'${path(x)}'`)
  .join(',\n    ')

let schemas = exists
  .map(x => schema(x))
  .join(',\n    ')

let formSchema = exists
  .map(x => `'${path(x)}': ${schema(x)}`)
  .join(',\n    ')

let formKind = exists
  .map(x => {
    if (Contracts.includes(path(x)))
      return `'${path(x)}': 'Schema'`
    else if (Forms.includes(path(x)))
      return `'${path(x)}': 'FormData'`
    else
      return `'${path(x)}': '${Mode['Unknown']}'`
  })
  .join(',\n    ')

Bun.write(
  './source/index.js',
  template
    .replace('/* imports */', imports)
    .replace('/* forms */', forms)
    .replace('/* schemas */', schemas)
    .replace('/* form -> schema */', formSchema)
    .replace('/* form -> kind */', formKind),
)
