# eagrigorev-website-astro

I built this website myself. It is open-source and available on my [GitHub](https://github.com/eagrigorev/eagrigorev-website-astro) page. Feel free to fork it and explore!

## Technologies

I used TypeScript and the [Astro](https://astro.build/) framework as the core, with native HTML and JavaScript for the front end. I really like Astro because it allows me to organize the website structure without much effort spent on routing and redirects. It's also very fast, serving pre-rendered pages with almost zero load on the user side. The website is deployed on [Vercel](https://vercel.com/), with automatic deployments pulled directly from the master branch on GitHub. This is likely the only pipeline I use; everything else is fairly manual, but I enjoy having control over every step of the publishing process.

## Design

I also did the design and prototyping myself. Responsiveness is handled by [Utopia](https://utopia.fyi/) scripts, which use clamp technology to continuously recalculate font sizes and spacing relative to the user's screen size. This keeps the proportions consistent and ensures the website looks good on all devices.

## Fonts and Animations

The website uses EB Garamond and DM Sans fonts which can be downloaded via [Fontsource](https://fontsource.org/). I prefer clean and uncluttered interfaces, so I only use the bare minimum of vanilla JavaScript animations.

## Writing

My CMS consists of a collection of [MDX](https://mdxjs.com/) files. MDX is an extended Markdown format that allows the use of custom components and features. Each MDX file has a meta section containing information about the post or page, which is then read and converted into props for different components and pages.
