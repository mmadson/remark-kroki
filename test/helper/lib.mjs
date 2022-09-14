import { remark } from 'remark';

import { remarkKroki } from '../../lib/index.mjs';

export function transform(input, option = {}) {
  return remark()
    .use(remarkKroki, option)
    .process(input)
    .then((file) => file.toString());
}
