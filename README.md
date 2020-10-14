# CSS neat grid
The small grid framework based on css grid specification. it's come with 12 columns and row layout. But you can customize it using **scss**.
or you can use it as a pure css.

## Getting started
Install with npm

`npm i css-neat-grid`

Or Using CDN link

`<link href="https://unpkg.com/css-neat-grid/dist/grid.min.css" rel="stylesheet">`

## Grid templates columns
CSS neat grid come with 12 columns. You can change grid columns and responsive class using **scss** configuration.
 
`$grid-column-config: (columns: 12, responsive: true)`

| Class           | CSS   
| :-------------  | :----------: 
| .grid-cols-1    | grid-template-columns: repeat(1, minmax(0, 1fr));   | 
| .grid-cols-2    | grid-template-columns: repeat(2, minmax(0, 1fr));   |
| .grid-cols-3    | grid-template-columns: repeat(3, minmax(0, 1fr));   |
| .grid-cols-4    | grid-template-columns: repeat(4, minmax(0, 1fr));   |
| .grid-cols-5    | grid-template-columns: repeat(5, minmax(0, 1fr));   |
| .grid-cols-6    | grid-template-columns: repeat(6, minmax(0, 1fr));   |
| .grid-cols-7    | grid-template-columns: repeat(7, minmax(0, 1fr));   |
| .grid-cols-8    | grid-template-columns: repeat(8, minmax(0, 1fr));   |
| .grid-cols-9    | grid-template-columns: repeat(9, minmax(0, 1fr));   |
| .grid-cols-10   | grid-template-columns: repeat(10, minmax(0, 1fr));  |
| .grid-cols-11   | grid-template-columns: repeat(11, minmax(0, 1fr));  |
| .grid-cols-12   | grid-template-columns: repeat(12, minmax(0, 1fr));  |



