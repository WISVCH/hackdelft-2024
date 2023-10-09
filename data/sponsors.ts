// Create an object, mapping the logo key to the URL out of the bundler.
// This is required as the bundler (currently) cannot currently read the images from the JSON URL's directly.
export const sponsorLogoMap: { [key: string]: URL } = {
    ch: new URL("/static/sponsors/ch.png?as=webp&width=200", import.meta.url),
    xtudelft: new URL(
        "/static/sponsors/xtudelft.png?as=webp&width=200",
        import.meta.url
    ),
};
