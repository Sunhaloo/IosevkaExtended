# Iosevka Extended

<p align="center">
  <img src="./assets/charset.png" alt="Basic Character Set" width="400">
</p>

## Code Samples

<table align="center">
  <tr>
    <th>TypeScript Sample Code</th>
    <th>Python Sample Code</th>
  </tr>
  <tr>
    <td>
      <img src="./assets/specimen-ts.png" width="300">
    </td>
    <td>
      <img src="./assets/specimen-py.png" width="300">
    </td>
  </tr>
  <tr>
    <th>C Sample Code</th>
    <th>Bash Sample Code</th>
  </tr>
  <tr>
    <td>
      <img src="./assets/specimen-c.png" width="300">
    </td>
    <td>
      <img src="./assets/specimen-sh.png" width="300">
    </td>
  </tr>
</table>

> [!NOTE]
> For more screenshots with different programming / markup language(s), head over to the [assets](https://github.com/Sunhaloo/IosevkaExtended/tree/main/assets) directory.

# Installation and Usage

## Installation

### Linux

- Head over to the [releases](https://github.com/Sunhaloo/IosevkaExtended/releases/) page and download the font type of your choice ( _'hinted' or 'unhinted'_ )
- Extract the fonts using the `unzip` command:

```bash
# something like this
unzip IosevkaExtended-<tag>-<type>.zip
```

- Install the font **user-wide**:

```bash
# NOTE: make sure that you already have the `~/.local/share/fonts` directory

```

- Install the font **system-wide**:

```bash

```

### MacOS

- Head over to the [releases](https://github.com/Sunhaloo/IosevkaExtended/releases/) page and download the font of your choice ( _'hinted' or 'unhinted'_ )
- Extract the fonts using the `unzip` command:

```bash
# something like this
unzip IosevkaExtended-<tag>-<type>.zip
```

- Install the font **user-wide**:

```bash
# NOTE: make sure that you already have the `~/.local/share/fonts` directory

```

- Install the font **system-wide**:

```bash

```

- Rebuild the font cache:

```bash
# make the system know that we have added another font
fc-cache -fv
```

> [!WARNING]
> Either you choose to install it _system-wide_ or _user-wide_ but **not** both!
>
> You would generally use the _user-wide_ installation method if you **don't** have _root_ access to the system that you are on.
>
> But given that I do have `sudo`'s password; I personally like to install fonts **system-wide** as I have all my fonts in a single place.

### Windows

- Head over to the [releases](https://github.com/Sunhaloo/IosevkaExtended/releases/) page and download the font of your choice ( _'hinted' or 'unhinted'_ )
- Simply extract the `.zip` file using the _right-click_ menu like a [normie](https://www.urbandictionary.com/define.php?term=Normie).
- Head inside the extracted folder, **select-all**, _right-click_ and hit the **Install** option.

## Usage

### Kitty Terminal

- To use the font inside of [Kitty] terminal, simply add the following lines below to the `~/.config/kitty/kitty.conf` file:

```conf
font_family      family="Iosevka Extended"
font_size 14.0
```

### Ghostty Terminal

- Similarly, if you uses [Ghostty](<>) instead, simply add the following lines below to the `~/.config/ghostty/config.ghostty` file:

```conf
font-family = "Iosevka Extended"
font-size = 14
```

---

# Some Notes

## AI Usage

> I think this is what AI should be used for more often than actual coding!

Given that this is not really about learning something and whereby the knowledge will be used over and over again. I basically used [Claude](https://claude.ai)'s help in order to **learn** on how to create an extended version of [Iosevka](https://typeof.net/Iosevka/) and also publish it.

This is what I think AI should be actually doing and automating for us; the menial, annoying work!

Where AI was use primarily was to create the screenshots by making a bash script that use the extremely easy-to-use <code><a href="https://github.com/charmbracelet/freeze">freeze</a></a></code> CLI tool by [Charm](https://charm.land/).

> Please head over to the following link to view the bash script generated: <https://github.com/Sunhaloo/IosevkaExtended/tree/main/learning#the-screenshot-bash-script>

## Do It Yourself

So I am **not** going be writing anything about "_building from source_" or anything like that as I have extensively documented _my_ process for making this custom Iosevka Extended font inside my learning markdown files.

Therefore, if you want to try this by yourself. I suggest you to check out the following link [here](https://github.com/Sunhaloo/IosevkaExtended/tree/main/learning) which is going to redirect you to the `learning` directory.

- Markdown Files:
  - Making The Custom Font: <code><a href="https://github.com/Sunhaloo/IosevkaExtended/tree/main/learning/Iosevka%20Font%20Customiser.md">Iosevka Font Customiser.md</a></code>
  - Publishing on GitHub: <code><a href="https://github.com/Sunhaloo/IosevkaExtended/tree/main/learning/Publishing%20Iosevka%20Extended%20Font.md">Publishing Iosevka Extended Font..md</a></code>
