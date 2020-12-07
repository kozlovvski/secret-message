# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.1](https://gitlab.com/kozlovvski/secret-message/compare/v0.1.0...v0.1.1) (2020-12-07)


### Features

* **auth:** create basic components for user authentication ([19001a7](https://gitlab.com/kozlovvski/secret-message/commit/19001a7e6ffbeb73c04fac38805d09b2aa420ea9))
* add SignInButton ([6c1cdad](https://gitlab.com/kozlovvski/secret-message/commit/6c1cdad8ca5ba561459327ff0ce9d351346389b1))
* **app layout:** extend app layout with basic tests and components ([328a37b](https://gitlab.com/kozlovvski/secret-message/commit/328a37b6518a73faa358bd120b9b77abc0153f22))
* **auth:** setup basic auth logic and redux slice ([ac3a516](https://gitlab.com/kozlovvski/secret-message/commit/ac3a5162e9d5a9cd81261620a673aa2598357abc))
* create `add message` route ([a375f25](https://gitlab.com/kozlovvski/secret-message/commit/a375f253e5b3b28a3bd852d379d15991b6558e16))
* **create-message page:** add components transition ([4cb0078](https://gitlab.com/kozlovvski/secret-message/commit/4cb007890d211da3d6b2da357439a268cf53f994))
* **create-message-comp:** add boilerplate CreateMessage component and write tests ([4e72468](https://gitlab.com/kozlovvski/secret-message/commit/4e724680596484208ee074448f6d9b65eb685f21))
* **create-message-confirm:** add boilerplate CreateMessageConfirm component ([1c6a09d](https://gitlab.com/kozlovvski/secret-message/commit/1c6a09d65baac822093b4004ee4f405f19b5b26a))
* **create-message-confirm:** write CreateMessageConfirm component ([e5101f2](https://gitlab.com/kozlovvski/secret-message/commit/e5101f2acd9b39571639876505bb3b8184b40df2))
* **create-message-page:** add exit transition to create-message-form ([1af6570](https://gitlab.com/kozlovvski/secret-message/commit/1af65703738f20f3faba0816f95d7e5ff01884c2))
* **firebase:** setup firebase in the app ([a931e7e](https://gitlab.com/kozlovvski/secret-message/commit/a931e7eae9fd5f4ce2eafa9a3dd86c16dae347fe))
* **functions:** add createMessage cloud function with tests ([24cee36](https://gitlab.com/kozlovvski/secret-message/commit/24cee365f0b8292fc5ac0dcf5838864346300367))
* **helpers:** add react-transition-group scss module classes creator ([4bf4f02](https://gitlab.com/kozlovvski/secret-message/commit/4bf4f029c849ef44cf1075b9d1a37ffcbd9db840))
* **hooks:** add a useAppDispatch typed hook with test file ([d8951ff](https://gitlab.com/kozlovvski/secret-message/commit/d8951fffc801c3fbfc0d4db25af0242de860bb89))
* **hooks:** add a useAppSelector hook with tests ([49859fc](https://gitlab.com/kozlovvski/secret-message/commit/49859fc48741f1e59f25c1e64f368f7b5420887c))
* **layout:** add basic app layout ([c4b07a2](https://gitlab.com/kozlovvski/secret-message/commit/c4b07a2c043968a1e2bffb5142630a59ecf8825b))
* **pages:** create a basic CreateMessage route ([5aae53d](https://gitlab.com/kozlovvski/secret-message/commit/5aae53d8482de71b759eeedd9e1270c07fa4bfb2))
* **scss:** improve layout design ([bce60cf](https://gitlab.com/kozlovvski/secret-message/commit/bce60cff10529b71a50aff2b266f090af41ade81))
* **typings:** add response and request payload types for firebase functions ([84a9b03](https://gitlab.com/kozlovvski/secret-message/commit/84a9b033070973f3c076e74cb8fdd9ab34e05a16))


### Bug Fixes

* **app-layout:** remove unnecessary padding ([ed9f9a7](https://gitlab.com/kozlovvski/secret-message/commit/ed9f9a74e0b1d55a6e6aa35acbf5b52b5f119bbb))
* **auth:** add correct links in new-message related components ([d2032be](https://gitlab.com/kozlovvski/secret-message/commit/d2032be8aa6f1290e4bf20866e00d41802f4ba52))
* **craete-message-confirm:** persist message link in CreateMessageConfirm after deleted from redux ([742c402](https://gitlab.com/kozlovvski/secret-message/commit/742c402db698b7b37e113701dd8ca706bda0b62c))
* **create-message page:** assign an initial value to useState value ([ed6d329](https://gitlab.com/kozlovvski/secret-message/commit/ed6d329dbb1fea99572ce3ecddd9b5c3fa7b9667))
* **create-message page:** dispatch clearMessage action in useEffect cleanup ([070e995](https://gitlab.com/kozlovvski/secret-message/commit/070e9957decbebccf693aaa10d86227ac89b94ec))
* **create-message-confirm:** finish CreateMessageConfirm component ([e6fffd0](https://gitlab.com/kozlovvski/secret-message/commit/e6fffd0f94ea27169883ed6e40b44a9f0a9b5d1a))
* **create-message-form:** add an icon to submit button ([456ccca](https://gitlab.com/kozlovvski/secret-message/commit/456ccca8eca488d9df68ceeedf2ad285c25d6b27))
* **create-message-form:** remove conditional rendering to allow css transitions ([6161823](https://gitlab.com/kozlovvski/secret-message/commit/6161823a9b0eb49a8736dc253e8cbc602130c738))
* **firebase:** fix firebase initializeApp bugs ([072b32e](https://gitlab.com/kozlovvski/secret-message/commit/072b32e07ff397ad381325fc155cb3acc07e0424))
* fix a broken import ([d94eea8](https://gitlab.com/kozlovvski/secret-message/commit/d94eea8cf9dfb3733584b7e713e597a337262fc3))
* **eslint:** fix conflicting eslint settings ([92c2da6](https://gitlab.com/kozlovvski/secret-message/commit/92c2da65398153455b012330f7ec4eb565dcab68))
* **firebase:** make `createMessage` cloud functions return a whole message object instead of just id ([d76f5d5](https://gitlab.com/kozlovvski/secret-message/commit/d76f5d5063947b23261c04780384ba9ea6e02b70))
* **functions:** get uid from context in createMessage function ([cb51de7](https://gitlab.com/kozlovvski/secret-message/commit/cb51de75356b873b1fdaede5c074389570da5c57))
* **redux:** change typesafe-actions setup into redux toolkit setup ([ac084ea](https://gitlab.com/kozlovvski/secret-message/commit/ac084ea10cbadd1104580ad57675c87040e65a01))
* **typings:** adjust secret-message typings ([ba0ac45](https://gitlab.com/kozlovvski/secret-message/commit/ba0ac45fdc2ef1208f9d6cd9cece26524da7420d))
* **util:** add viewport height update helper for mobile devices ([667a540](https://gitlab.com/kozlovvski/secret-message/commit/667a540a7599b439f152eaeb34cb986fc50c11e5))

## 0.1.0 (2020-11-17)
