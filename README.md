# asscup
An easy markup language that will help you in any dispute.

## What can this library do?
This allows to format your text on asscup language, making it more aggressive, and inserting various curses into it.

## Language rules.
There are two kinds of expressions: **insert tokens** and **format tokens**.
**Insert tokens** must be paired (except when all the text after the token needs to be formatted). 
Here are it all with examples:

| Token | Name           | Example                 |
|-------|----------------|-------------------------|
| `~`   | Spaces after   | `~Whore~` → W h o r e   |
| `_`   | Spaces around  | `_Shit_` →  S  h  i  t  |
| `^`   | Caps lock      | `^Bitch^` → BITCH       |
| `\`   | Dots           | `\Anal\` → A.n.a.l.     |
| `*`   | Hiding symbols | `*Ass*` → !#%           |

**Insert tokens** allow you to insert a random noun, adjective, verb, or whole sentence into your text.
Here are it all with examples:

| Token | Name      | Example                 |
|-------|-----------|-------------------------|
| `#n`  | Noun      | `#n` → ass              |
| `#v`  | Verb      | `#v` → fucking          |
| `#a`  | Adjective | `#a` → fuck             |
| `#s`  | Sentence  | `#s` → Fuck your mother |

## Using.
Pretty easy! Install it, require and use `format` function.
For example:
```js
const asscup = require('asscup')
asscup.format('You\'re a ^fucking moron^!')
```

Also, if you want to use Russian, you must add `RU` as the second argument:
```js
asscup.format('Соси хуй, ^пидор^!', 'RU')
```

## How can you help?
As you can see, I'm pretty bad in English. So you can help me add new words to the dictionary and edit the old ones.
All you need to do is send a pull request to me on GitHub.
The dictionary is in the `src` folder. This is a `json` file.
The structure of this file is very simple. I believe that you will understand this.