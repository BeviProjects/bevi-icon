<img src='./public/doc/cover.png' title='BeviIcon' alt='Cover BeviIcon' />
<div align="center">
  <h3>Biblioteca de ícones da Bevi</h3>
  	<span>
		<a href="https://www.npmjs.com/package/bevi-icon"><strong>Npm Package</strong></a>
	</span>
</div>

<br />
<br />
<br />
<br />

## Como começar

<br />

### NPM Package

```bash
npm i bevi-icon
```

<br/>
<br/>

## Como utilizar

Para utilizar essa biblioteca, basta instalar o pacote e
realizar a importação onde deseja utiliza.

```javascript
import { BvIcon } from 'bevi-icon'
```

<br />

Em seguida, pode utilizar o componente especificando suas
propriedades

```html
<BvIcon name="cube" variant="duo" />
```

<br />
<br />

## Propriedades

Essa biblioteca possui as seguintes propriedades

### Name

Nome do ícone que será exibido no seu projeto. Para mais
informações sobre os nomes dos ícones disponíveis na
biblioteca acesse
[Bevi Icon Doc Beta](https://beviicon-doc.netlify.app/icons).

```bash
  name="cube"
```

<br />

### Variant

Esse atributo é responsável por definir qual variante do
ícone será renderizado: `solid`, `duo`, `light` ou `dark`

```bash
  name="dark"
```

<br />

### Size

Esse atributo é para o tamanho que deseja renderizar o
ícone, o valor é do tipo `Number` e com base na unidade de
medida
[rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units).

```bash
  size="4"
```

### Title

Você também pode adicionar um título ao ícone. Esse é usado
para acessibilidade e ajuda de leitores de tela.

```bash
  title="Título de exemplo"
```

<br/>
<br/>
<br/>
