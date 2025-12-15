import { Methods, Mode, Roles, Routes } from '@shakerquiz/utilities'
import template from './template.js' with { type: 'text' }

let key = (method, route, role) => '' + method + '/' + route + '/' + role

let value = (method, route, role) => '' + method + '_' + route.replaceAll('/', '_') + '_' + role

let pathname = (method, route, role) => `'./fields/${method}/${route}/${role}.json'`

let Import = (...a) => `import ${value(...a)} from ${pathname(...a)} with { type: 'json' }`

let Field = (...a) => `  '${key(...a)}': '${key(...a)}'`

let FieldSchema = (...a) => `  '${key(...a)}': ${value(...a)}`

let A = Methods
  .flatMap(method => Routes.map(route => [method, route]))
  .flatMap(([method, route]) => Roles.concat(Mode['Unknown']).map(role => [method, route, role]))

Promise
  .all(
    A.map(([method, route, role]) =>
      Bun
        .file(`./source/fields/${method}/${route}/${role}.json`)
        .stat()
        .then(() => [method, route, role])
        .catch(() => null)
    ),
  )
  .then(components => components.filter(Boolean))
  .then(components =>
    Bun.write(
      './source/index.js',
      template
        .replace('/* imports */', components.map(a => Import(...a)).join('\n'))
        .replace('/* fields */', components.map(a => Field(...a)).join(', '))
        .replace('/* schemas */', components.map(a => FieldSchema(...a)).join(', ')),
    )
  )
