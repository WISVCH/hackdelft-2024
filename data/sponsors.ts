// Create an object, mapping the logo key to the URL out of the bundler.
// This is required as the bundler (currently) cannot currently read the images from the JSON URL's directly.
export const sponsorLogoMap: { [key: string]: URL } = {
    ch: new URL("/static/sponsors/ch.png?as=webp&width=200", import.meta.url),
    xtudelft: new URL(
        "/static/sponsors/xtudelft.png?as=webp&width=200",
        import.meta.url
    ),
    cgi: new URL("/static/sponsors/cgi.png?as=webp&width=200", import.meta.url),
    elastic: new URL(
        "/static/sponsors/elastic.png?as=webp&width=200",
        import.meta.url
    ),
    ded: new URL("/static/sponsors/ded.png?as=webp&width=200", import.meta.url),
    koro: new URL(
        "/static/sponsors/koro.png?as=webp&width=200",
        import.meta.url
    ),
    bit: new URL("/static/sponsors/bit.png?as=webp&width=200", import.meta.url),
    bwl: new URL("/static/sponsors/bwl.png?as=webp&width=200", import.meta.url),
    ind: new URL("/static/sponsors/ind.png?as=webp&width=200", import.meta.url),
    kleine: new URL(
        "/static/sponsors/kleine.png?as=webp&width=200",
        import.meta.url
    ),
};
