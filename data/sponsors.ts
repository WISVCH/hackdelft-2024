// Create an object, mapping the logo key to the URL out of the bundler.
// This is required as the bundler (currently) cannot currently read the images from the JSON URL's directly.
export const sponsorLogoMap: { [key: string]: URL } = {
    ch: new URL("/static/sponsors/ch.png?as=webp&width=200", import.meta.url),
    xtudelft: new URL(
        "/static/sponsors/xtudelft.png?as=webp&width=200",
        import.meta.url
    ),
    navara: new URL("/static/sponsors/nav_logo_navy_diap_rgb.png?as=webp&width=200", import.meta.url),
    jetbrains: new URL("/static/sponsors/jetbrains_logo.png?as=webp&width=200", import.meta.url),
    sping: new URL("/static/sponsors/Sping_logo.png?as=webp&width=200", import.meta.url),
    unipartners: new URL("/static/sponsors/UniPartners-Logo.png?as=webp&width=200", import.meta.url)
};
