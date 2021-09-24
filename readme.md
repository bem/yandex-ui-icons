# @yandex/ui-icons (WIP)

![image](https://user-images.githubusercontent.com/7934638/127772507-688a220a-c733-47ae-af56-12319c47ce41.png)

[![npm](https://img.shields.io/npm/v/@yandex/ui-icons.svg?style=flat-square&labelColor=111)][npm]

## Installation

```sh
npm i -PE @yandex/ui-icons
```

## Usage (jsx)

**Simple**

```tsx
import { Search } from '@yandex/ui-icons'

export const App = () => {
  return <Search />
}
```

**Set size**

Icons has next sizes: `12`, `16`, `24`, `32` (default `24`).

```tsx
import { Search } from '@yandex/ui-icons'

export const App = () => {
  return <Search size={12} />
}
```

**Get ref**

```tsx
import { useRef } from 'react'
import { Search } from '@yandex/ui-icons'

export const App = () => {
  const iconRef = useRef<SVGSVGElement>(null)

  return <Search ref={iconRef} />
}
```

**Set className**

By default all icons has base className: `SvgIcon`.

```tsx
import { Search } from '@yandex/ui-icons'

export const App = () => {
  return <Search className="MyIcon" />
}
```

**Change color**

At now color can be changed with context placement: `currentColor`.

```tsx
import { Search } from '@yandex/ui-icons'

export const App = () => {
  return (
    <div style={{ color: 'red' }}>
      <Search />
    </div>
  )
}
```

## Usage (svg)

All icons also available as svg files and can be used inside css or any svg-loaders.

```css
.Icon {
  width: 24px;
  height: 24px;
  background-size: 100%;
  background-image: url("@yandex/ui-icons/Search.svg");
}
```

## License

This project develop under [MPL-2.0](./LICENSE) license.

[npm]: https://www.npmjs.com/package/@yandex/ui-icons
