import componentFactory from './componentFactory'

export const Wrapper = componentFactory('Wrapper', {})

export const Block = componentFactory('Block', {display: 'block'})
export const Inline = componentFactory('Inline', {display: 'inline'})
export const InlineBlock = componentFactory('InlineBlock', {display: 'inline-block'})

export const Row = componentFactory('Row', {display: 'flex', flexDirection: 'row'})
export const Col = componentFactory('Col', {display: 'flex', flexDirection: 'column'})
export const InlineFlex = componentFactory('InlineFlex', {display: 'inline-flex'})
