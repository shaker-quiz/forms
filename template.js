/* imports */

export const Field = Object.freeze({/* fields */})

export const Fields = Object.freeze(Object.values(Field))

export const inferField = Object.freeze(
  /** @returns {typeof Field[keyof typeof Field] | 'Unknown'} */
  x => Field[x] ?? 'Unknown',
)

export const FieldSchema = Object.freeze({/* schemas */})

export const inferFieldSchema = Object.freeze(
  /** @returns {typeof FieldSchema[keyof typeof FieldSchema] | 'Unknown'} */
  x => FieldSchema[x] ?? 'Unknown',
)
