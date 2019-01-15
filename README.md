# Understanding nodejs

## Before the journey

To take this course, you need to know Git and especially the Github flow. So, I
provide below some useful reminders:

- [Github flow](https://guides.github.com/introduction/flow/)
- [RTFM git](https://git-scm.com/docs)
- [I did something wrong and i don't know what to do](http://ohshitgit.com/)

## Armed and ready

Before coding we need to have the good tools !

- Terminal : take the time to configure a productive tool

  - You can use your OS embedded terminal or use [Terminator] on Ubuntu or [iTerm] on OSX
  - Use **zsh** instead of bash. If you start with zsh :

    - install zsh

    ```zsh
    # on Ubuntu
    apt-get install zsh

    # on OSX
    brew install zsh
    ```

    - install [Oh my zsh ](https://github.com/robbyrussell/oh-my-zsh)

    ```zsh
    # on Ubuntu
    sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

    # on OSX
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    ```

    - change default shell : `chsh -s /bin/zsh`

- Text editor : install [visual studio code](https://code.visualstudio.com/Download)

  - You may use _Atom_, _VIM_, _Emacs_ or _Sublime Text_ if you're accurate with
    any of them. In this case, it's up to you to install the right plugins
    related to this training.
  - Coding must be _cool_ ! Install **Material icon theme** plugin and set color
    theme to **One Dark Pro**. Finally install [Fire Code](https://github.com/tonsky/FiraCode) fonts (yeah you now have a
    font with ligatures)
  - Alter code user parameters (menu : Code > Préférences > Paramètres ) to :

  ```json
    "typescript.validate.enable": false,
    "typescript.format.enable": false,
    "editor.fontLigatures": true,
    "editor.fontFamily": "Fira Code",
  ```

  - On OSX, code distributed as .dmg so you need to add the binary to path :

  ```zsh
  #on OSX
  echo "export PATH=/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin:\$PATH" >> ~/.zshrc
  ```

  - Now you can open a project with

  ```zsh
  code path/to/my/project
  ```

* Node.js : Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript
  engine. Node.js uses an event-driven, non-blocking I/O model that makes it
  lightweight and efficient. Node.js' package ecosystem, npm, is the largest
  ecosystem of open source libraries in the world.<br/> You will use
  [nvm](https://github.com/creationix/nvm) (node version manager) to install
  node and manage versions used.

```zsh
# on Ubuntu
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# on OSX
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

source ~/.zshrc #or source /.bash_rc if you didn't get zsh installed
nvm install --lts #install LTS version of node and related npm cli
```

## Walking across Javascript

We will code in Javascript language following the
[ECMAScript2019 specification](https://tc39.github.io/ecma262/) and using
[node.js runtime](https://nodejs.org/en/docs/). We will use
[npm as package manager](https://www.npmjs.com/) with
[npm cli](https://docs.npmjs.com/cli/npm)

First we will initialize a new node.js project with npm

```
git clone git@github.com:miage-lille/intoduction-to-node-[username]
cd intoduction-to-node-[username]
npm init
code .
```

In case of trouble read the
[Javascript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
!

### <img src="./assets/prettier.png" width=50 /> Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter which have some benefits :

- Use consistent code format accross files
- Share same format practices between team members

1. install prettier as a dev dependency

```zsh
npm i -D prettier
```

2. add `prettier` to `script` section of your `package.json` which should look like :

```json
{
  ...
  "scripts": {
    "test": "jest",
    "prettier":
      "prettier --single-quote --trailing-comma es5 --write \"./src/**/*.js\" "

  },
  ...
}
```

To understand options you can read [prettier doc](https://prettier.io/docs/en/options.html)

3. If you use VSCode, you can integrate prettier :

- install [prettier plugin ](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Alter code user parameters (menu : Code > Préférences > Paramètres ) to add :

```json
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5"
```

4. To use prettier to fix your code, just run

```zsh
npm run prettier
#or
./node_modules/.bin/prettier --single-quote --trailing-comma es5 --write "./src/**/*.js"
```

# Node Reinforcement Workshop

The workshop is provide as npm binary.

## Here we go !

Install the workshop

```sh
npm i -g nrw
```

Launch the workshop

```
nrw
```

Follow the instructions, solutions to must be committed in the `src` folder of your repository
