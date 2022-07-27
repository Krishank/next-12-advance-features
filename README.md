# NextJS Advance Features

A simple demo to showcase multiple Features of Next JS

- Next Middleware (Redirect and Rewrites, cookies)

- Next APIs

- Managing Env Variables

- Next Config (Env Variables, Base Path, CDN Asset Prefix, cache control header)

- Internalisation

## Local setup:

```

yarn install

yarn build

yarn start

```

Note: if yo do `yarn dev` you will not see the differences :)

## - Next Middleware

Next Middleware is present with Next 12 and it role is same as any other middleware, Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, adding headers, or setting cookies

https://nextjs.org/docs/advanced-features/middleware

We can write middleware with 2 approaches

Demo Matching with Config http://localhost:3001/redirect
Demo Conditional Statement with Rewrite can use when migrating a website and some pages are still on old setup http://localhost:3001/rewrite

File /next-12-advance-features/middleware.ts to see the examples.

## - Next APIs

Next APIs allow you to write your own API with Next Js you simple need to create a folder API inside pages and then the file name will be your API name.

See example next-12-advance-features/pages/api/users.js

You can see the example API Running http://localhost:3001/api/users

## - Next Config

Next config has a lot to offer that start with

- Setting Env
- Setting Public and Server Run time configuration
- Setting headers
- Setting redirects
- Setting cookies
- Setting Path for CDN Assets
- Customising Webpack
- Setting base path
- Internalisation
- Custom builds
  Please see this file for more info /next-12-advance-features/next.config.js

## - Internalisation

Next Give us capability to support Internalisation this start with exposing your application on multiple locales but also mapping domain to it.
Below code exposes all your routes for the locales mentioned.

```
i18n: {

locales: ['en-US', 'fr', 'nl-NL', 'en-GB'],

defaultLocale:  'en-GB',

},

```

next-12-advance-features/next.config.js

## References:

Initial Repo Reference https://github.com/giri-jeedigunta/next-data-fetching-demo
