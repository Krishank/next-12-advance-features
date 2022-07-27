const nextConfig = {
    // env: {
    //     customKey: 'my-value',
    // },
    // compress: true,
    // pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    // poweredByHeader: false,
    // generateEtags: false,
    // distDir: 'build',
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
    publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    },
    // generateBuildId: async () => {
    //     // You can, for example, get the latest git commit hash here 
    //     return 'my-build-id'
    // },
    // basePath: '/en-gb',
    // i18n: {
    //     locales: ['en-US', 'fr', 'nl-NL', 'en-GB'],
    //     defaultLocale: 'en-gb',
    // },
}
  
module.exports = nextConfig