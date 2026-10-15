---
id: Iosevka Font Customiser
aliases: Creating Custom Fonts with Iosevka's Online Customiser
tags:
  - font
  - linux
author: S.Sunhaloo
date: 2026-10-04
status: Completed
---

## List of Contents

- Prerequisites
  - Installation of Packages and Tools
  - Cloning Iosevka's GitHub Repository
- Creating Custom Fonts
  - Creating An Extended Version of Iosevka
    - Customising To Make A Wider Version
    - Building The Font
  - Converting Unhinted Fonts To Hinted Ones
- Some Customisation Examples
  - Shorter Extended Iosevka Font
  - Dank Mono Like Font

---

> [!NOTE] Resource(s)
>
> - Website:
>   - <https://typeof.net/Iosevka/>
>   - <https://typeof.net/Iosevka/customizer>
> - GitHub:
>   - <https://github.com/be5invis/iosevka>
>   - <https://github.com/be5invis/Iosevka/blob/main/doc/custom-build.md>
> - Programming Fonts:
>   - <https://programmingfonts.org/>
> - Some great fonts based on Iosevka:
>   - IoskeyleyMono: <https://github.com/ahatem/IoskeleyMono>
>   - LythMono: <https://github.com/why-trv/LythMono>

---

# Prerequisites

## Installation of Packages and Tools

- Here are the packages and tools that you are going to need in order to compile the font on you computer:

```console
# windows users
winget install OpenJS.NodeJS

# windows users - ttfautohint
# INFO: not available on `winget` ==> 'https://freetype.org/ttfautohint/'

# macos users - see homebrew package manager or xcode-select
brew install node ttfautohint

# debian / debian bsed distriubtions
sudo apt update -y && sudo apt install nodejs npm ttfautohint -y

# I use Arch BTW
sudo pacman -S nodejs ttfautohint --noconfirm

# fedora based distributions
sudo dnf install nodejs npm ttfautohint
```

## Cloning Iosevka's GitHub Repository

- Here is the command that we are going to use to `clone` the repository onto our machine:

```bash
# clone the first level of of Iosevka's repository
git clone --depth 1 https://github.com/be5invis/Iosevka.git
```

- Hence, install all the **dependencies** required by the repository:

```bash
# simply use the node package manager to install dependencies
npm install
```

# Creating Custom Fonts

As you know, we are going to be using the [Iosevka Customiser](https://typeof.net/Iosevka/customizer) website in order _customise_ the **base version of Iosevka**.

As you know; the website is only giving us a high level version of it... Therefore, if we would like to make more customisation to the font. Then we are going to have to get our hands deep into ~~her~~ the `.toml` file!

> Yes, we configure everything using a `.toml` file here... You are going to see later!

## Creating An Extended Version of Iosevka

So I always wanted to a wider version of Iosevka as it was too thin and squeeze! Yes, this means that even if you are using **big font sizes**; you were still going to have lots of characters in a single line.

> And this is what most people like about the font!

Nevertheless, the font does looks great and because it's so easy and simple to modify and build the font; there has been lots of variations over the years!

> Take a look at `IoskeyleyMono` for example!

### Customising To Make A Wider Version

- Family Name: 'Iosevka Extended'
- Serifs: 'Sans'
- Spacing: 'Normal'
- Weights: Select **all** the _weights_
- Widths:
  - First tick / "_check-on_" the 'Default width being 600' option
  - Select '600' **only**!
- Slopes: Select **all** the _slopes_
- Tick / "_Check-on_" the 'Export cv## / ss## OpenType features'
- Tick / "_Check-on_" the 'Explort glyph names for Kitty'

- Therefore, the online customiser will generate this `private-build-plans.toml` file for you:

```toml
[buildPlans.IosevkaExtended]
family = "Iosevka Extended"
spacing = "normal"
serifs = "sans"
noCvSs = false
exportGlyphNames = true

[buildPlans.IosevkaExtended.widths.Normal]
shape = 600
menu = 5
css = "normal"
```

> [!BUG] Compilation and Building Times
> Given that I simply wanted an **extended** version of Iosevka... I selected **all** the _weights_ so as to be able to match the different _weight styles_ that you see when you run the `kitty list-fonts` command.
>
> The main thing that **affects** _build times_ are the **Font Widths**!
>
> Hence, I would recommend you to select only **one at a time** in order to keep the _build times_ low. Additionally, since I am already mentioning compilation and build times here... The **hinted** version of the font is going to take more time as the _command_ to build the **hinted** version also builds the **un-hinted** version.
>
> > I don't really know why it needs to do that but yeah!
>
> Therefore, for testing purposes; simply compile and test with the **unhinted** version of the fonts so that it only has one job to do.

> [!TIP] Hinted or Un-hinted?
> I would personally _recommend_ the **hinted** version of fonts generally because I still use laptop displays that has a resolution of '1366x768'.
>
> Nevertheless, if you have access to high-quality screens and also don't share your work with others ( _like exporting PDFs with the font_ ). Then, you could use the **un-hinted** version as on good quality screens; it does **not** make of a _difference_!

### Building The Font

Given that we now have our `private-build-plans.toml` file ready; we can simply head over to the `Iosevka` _cloned_ repository on our computer and create a **new** `private-build-plans.toml` at the **root** of the _project's directory_.

> Again, you should have the same content inside a `private-build-plans.toml` file at the root of the repository!

```toml
[buildPlans.IosevkaExtended]
family = "Iosevka Extended"
spacing = "normal"
serifs = "sans"
noCvSs = false
exportGlyphNames = true

[buildPlans.IosevkaExtended.widths.Normal]
shape = 600
menu = 5
css = "normal"
```

- Given that I had already tested and use this font... I am going to use the following command to build **both** the _hinted_ and _un-hinted_ versions:

```bash
# use the following command to build the font
npm run build -- ttf::IosevkaExtended
```

> [!SUCCESS]
> After the building process occurs; you should see that we have a `dist/IosevkaExtended/TTF` and `dist/IosevkaExtended/TTF-Unhinted` folders whereby all the `.ttf` files are going to be located at.
>
> Now most people are going to tell you to create a `~/.local/share/fonts/` but I don't like to do that... Instead I send it straight to the `/usr/share/fonts/` directory so that I have all my fonts _installed_ in one place only!
>
> Now, the thing is, I have **administrator access** because why would I not have administrator access on my own fucking system?!? So if you are using a _laboratory computer_ or _work computer_. Then you are going to have to use the `~/.local/share/fonts/` directory.
>
> > I don't think you have another choice!
>
> Hence, _in my case_, I am simply going to run the `cp` command below in order to **copy** the `IosevkaExtended` font to the `/usr/share/fonts` directory.
>
> ```bash
> # move the font to the system wide font directory
> sudo cp dist/IosevkaExtended /usr/share/fonts
> ```
>
> - Simply reload the font cache with the following command:
>
> ```bash
> # reload the font cache
> sudo fc-cache -fv
> ```
>
> > Simply enjoy!

## Converting Unhinted Fonts To Hinted Ones

Let's say that you used the "_unhinted_" command to build you "_testing_" fonts and it took a while, because you might have a low specification laptop.

Hence, **instead** of _recompiling_ the whole thing; it is entirely possible to simply **convert** them to the _hinted_ version!

- Compile the **unhinted** using the command provided by the online customiser

```bash
# compile your unhinted fonts
npm run build -- ttf-unhinted::<FontName>
```

- Check the number of files has inside the fonts folder:

```bash
# count the number of `.ttf` files inside the unhinted folder
ls dist/<FontName>/TTF-Unhinted | wc -l
```

- Create the `TTF` directory inside your `<FontName>` directory ( _compiled above_ )

```bash
# create a location for the hinted fonts
mkdir dist/<FontName>/TTF
```

- Run the following `ttfautohint` command to **convert** these _unhinted_ fonts to _hinted_:

```bash
# iterate through the `TTF-Unhinted` folder and convert
time ( \
  for f in dist/Iosevka<Name>/TTF-Unhinted/*.ttf; do \
    ttfautohint "$f" "dist/Iosevka<Name>/TTF/$(basename "$f")"; \
  done \
)
```

- Hence, simply verify that you have been able to convert all the fonts by counting them:

```bash
# find the number of converted fonts
ls dist/<FontName>/TTF | wc -l
```

> [!NOTE]
> You should have the **same** number of `.ttf` files that is found inside the `TTF-Unhinted` folder!

# Some Customisation Examples

## Shorter Extended Iosevka Font

```toml
[buildPlans.IosevkaExtendedShorter]
family = "Iosevka Extended Shorter"
spacing = "normal"
serifs = "sans"
noCvSs = false
exportGlyphNames = true

[buildPlans.IosevkaExtendedShorter.widths.Normal]
shape = 600
menu = 5
css = "normal"

[buildPlans.IosevkaExtendedShorter.metricOverride]
cap = 'default_cap * 0.96'
ascender = 'default_ascender * 0.96'
xHeight = 'default_xHeight * 0.96'
cap = 'default_cap * 0.98'
ascender = 'default_ascender * 0.98'
xHeight = 'default_xHeight * 0.98'
```

## Dank Mono Like Font

```toml

[buildPlans.IosevkaDankMonoExtended]
family = "Iosevka Dank Mono Extended"
spacing = "normal"
serifs = "sans"
noCvSs = false
exportGlyphNames = true

[buildPlans.IosevkaDankMonoExtended.variants.design]
one = "base"
capital-b = "more-asymmetric-serifless"
capital-c = "serifless"
capital-g = "toothless-rounded-serifless-hooked"
capital-k = "straight-serifless"
capital-q = "vertical-crossing"
capital-w = "curly-serifless"
capital-z = "straight-serifless-with-horizontal-crossbar"
a = "double-storey-serifless"
d = "flat-bottom-serifless"
f = "extended-crossbar-at-half-ascender-height"
i = "serifed"
j = "serifed"
l = "serifed-asymmetric"
r = "hookless-serifed"
s = "serifless"
t = "bent-hook-short-neck2"
w = "curly-serifless"
y = "straight-turn-serifless"
ellipsis-density = "normal"
asterisk = "hex-high"
underscore = "high"
brace = "straight"
ampersand = "closed"
dollar = "through"
percent = "rings-continuous-slash"
bar = "natural-slope"

[buildPlans.IosevkaDankMonoExtended.variants.italic]
capital-b = "more-asymmetric-serifless"
capital-c = "serifless"
capital-g = "toothless-rounded-serifless-hooked"
capital-k = "straight-serifless"
capital-q = "vertical-crossing"
capital-w = "curly-serifless"
capital-z = "straight-serifless-with-horizontal-crossbar"
a = "single-storey-serifless"
d = "tailed-serifless"
e = "rounded"
f = "tailed-crossbar-at-half-ascender-height"
h = "tailed-serifless"
i = "tailed-serifed"
j = "serifed"
l = "tailed-serifed"
m = "tailed-serifless"
n = "tailed-serifless"
q = "straight-serifless"
r = "hookless-top-serifed"
t = "bent-hook-short-neck2"
u = "toothed-serifless"
w = "curly-serifless"
x = "semi-chancery-curly-serifless"
y = "straight-turn-serifless"
z = "straight-serifless-with-horizontal-crossbar"
ellipsis-density = "normal"
asterisk = "hex-high"
underscore = "high"
brace = "straight"
ampersand = "closed"
dollar = "through"
percent = "rings-continuous-slash"
bar = "natural-slope"
question = "smooth"

[buildPlans.IosevkaDankMonoExtended.widths.Normal]
shape = 600
menu = 5
css = "normal"
```

---

# Socials

- **GitHub**: <https://www.github.com/Sunhaloo>
- **Instagram**: <https://www.instagram.com/s.sunhaloo>
- **YouTube**: <https://www.youtube.com/@s.sunhaloo>

---

S.Sunhaloo
Thank You!
