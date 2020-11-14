'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "d7b8630ca3556688478a766dd6045cd9",
"/": "0e73eb9264777ed1d7c772e89948ee53",
"main.dart.js": "b9b554c320d7503d5a34c68ab7c583f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"nekomaruh.github.io/version.json": "426313f2f3133c2f20415344c4a22df3",
"nekomaruh.github.io/index.html": "0e73eb9264777ed1d7c772e89948ee53",
"nekomaruh.github.io/main.dart.js": "3d2c824a3e5a4b73339cbb23e086edf1",
"nekomaruh.github.io/README.md": "c824793d51c3bda2a54132aaefe9e049",
"nekomaruh.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"nekomaruh.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"nekomaruh.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"nekomaruh.github.io/manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"nekomaruh.github.io/.git/config": "79726c3a05001404afab58676f76933f",
"nekomaruh.github.io/.git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
"nekomaruh.github.io/.git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
"nekomaruh.github.io/.git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
"nekomaruh.github.io/.git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
"nekomaruh.github.io/.git/objects/34/a013b6f01fce3eca717cb2863508e1882777eb": "8686ff6746243ecc62bb5701301777c5",
"nekomaruh.github.io/.git/objects/5a/22199be6f0270e8f9b842f8e520945564d738d": "e7569ad9d4bc5510d6bcf2932ed30db9",
"nekomaruh.github.io/.git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
"nekomaruh.github.io/.git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
"nekomaruh.github.io/.git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
"nekomaruh.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"nekomaruh.github.io/.git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
"nekomaruh.github.io/.git/objects/e3/3530914fc78f220ad77865a4d01afedf7ad914": "4d5a52d896fe6edd1daad6cdcff93eea",
"nekomaruh.github.io/.git/objects/cf/015d91c9f59cc6b77993d6073449491ab7e921": "37e460625dbb63ecabb7d9136e81a98d",
"nekomaruh.github.io/.git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
"nekomaruh.github.io/.git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
"nekomaruh.github.io/.git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
"nekomaruh.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"nekomaruh.github.io/.git/objects/pack/pack-7638d3049b2e635528dc04901ba34a28103dcf71.pack": "bb098f5ca8e0a4ba05a68381d278812b",
"nekomaruh.github.io/.git/objects/pack/pack-7638d3049b2e635528dc04901ba34a28103dcf71.idx": "a370722310a99f2891b8c794d3add243",
"nekomaruh.github.io/.git/objects/87/ef0eee441d183010d11a7762618c54b0cfaa06": "e8d95556faa6d1300df50b0892c7a00a",
"nekomaruh.github.io/.git/objects/1a/e55fbf3c051bbd0e88c7c3df2569e1b9de45a7": "5144b9497a4e4e60a32c0dd924f9be29",
"nekomaruh.github.io/.git/objects/1a/34719a97252bdbeb1cde28fb9b3403d37fb902": "8a2d2239ddcb70c62abdf5916fba3b96",
"nekomaruh.github.io/.git/objects/17/a6d0a1ed0dea4939518c32010092f158446116": "281d1edc80eeb370f20a93f5c7a643bc",
"nekomaruh.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"nekomaruh.github.io/.git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
"nekomaruh.github.io/.git/objects/81/fb2f405877795ec7127fe51632a453a48fc934": "7ecfe666ed4f2db785e15a26c4cae828",
"nekomaruh.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"nekomaruh.github.io/.git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
"nekomaruh.github.io/.git/objects/2a/4765e2e2f84ae682713f1bd7787c9ec687f930": "c842ae6b2f3267aeefe1ca803a3f823c",
"nekomaruh.github.io/.git/objects/88/d18edf1134ba96ffd586406ca80b1fb0a7d0cd": "3205a7ba5722a4a58a6f5f22f1ee8f3d",
"nekomaruh.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"nekomaruh.github.io/.git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
"nekomaruh.github.io/.git/objects/3f/f1d0e0ba6c55c264925ad262c2d7a37d4771a5": "d821f7240d716c4f0f56a4292a2551ef",
"nekomaruh.github.io/.git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
"nekomaruh.github.io/.git/objects/39/8dd0bf2c8ef716fc762c0b3934a0c8ac8ef2c0": "fdec780d5dbb285f7783ab3bf79c1966",
"nekomaruh.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"nekomaruh.github.io/.git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
"nekomaruh.github.io/.git/objects/a0/c10dc458550d3f9fb2d30ca09f42fa4fc531b1": "fc767d2ebb63af01336c1dbfdeeb1297",
"nekomaruh.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"nekomaruh.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"nekomaruh.github.io/.git/objects/c4/bb0f2eed54b1cae978ce1e1c96385dc594bc1b": "1b388f1db58af2e305453a6df8b218ab",
"nekomaruh.github.io/.git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
"nekomaruh.github.io/.git/objects/f9/21a175dcd62e4864bec3bc416c86ebe1a7a27e": "45ee9fe619b326e52b3548bda2ea2187",
"nekomaruh.github.io/.git/objects/cb/12311e88a54fd4b8eea677974701266d218bcb": "67fb0274a81c22e3b0528cf8d116348e",
"nekomaruh.github.io/.git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
"nekomaruh.github.io/.git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
"nekomaruh.github.io/.git/objects/24/e4a4af40b6b7a6698e85b7be761cab67ad6d12": "faf97444caa8a3d0345db83180517b6f",
"nekomaruh.github.io/.git/objects/8d/e2dd578f69626804249f9e0bd56af6819b5e04": "c1dbd02b8140d5698d00efb01105deb4",
"nekomaruh.github.io/.git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
"nekomaruh.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"nekomaruh.github.io/.git/objects/1c/cb22abc11af6039872207c4bce975f37f5ab3f": "b3868ee63206ec40b9da8eccedf9def4",
"nekomaruh.github.io/.git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
"nekomaruh.github.io/.git/objects/49/0e4f47dd7515e02fcdb2a40c5f9d4ebae1e9ee": "4900471d8281a6b2f97e2b92c284b712",
"nekomaruh.github.io/.git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
"nekomaruh.github.io/.git/objects/78/8324733e7fc5e57575c974df02f092827dddf0": "63e3b3854b515d44066dc3a1c274adbf",
"nekomaruh.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"nekomaruh.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"nekomaruh.github.io/.git/logs/HEAD": "3526854479ea2fbcd7a5d81fb8082989",
"nekomaruh.github.io/.git/logs/refs/heads/main": "3526854479ea2fbcd7a5d81fb8082989",
"nekomaruh.github.io/.git/logs/refs/remotes/origin/HEAD": "44d008ddc0ec382de379ee2bff5afade",
"nekomaruh.github.io/.git/logs/refs/remotes/origin/main": "95a6efb717bab04dc2f61ee8418dc6d8",
"nekomaruh.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"nekomaruh.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"nekomaruh.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"nekomaruh.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"nekomaruh.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"nekomaruh.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"nekomaruh.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"nekomaruh.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"nekomaruh.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"nekomaruh.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"nekomaruh.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"nekomaruh.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"nekomaruh.github.io/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"nekomaruh.github.io/.git/refs/heads/main": "3226755230ff022c486dfb5b73a4bc55",
"nekomaruh.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"nekomaruh.github.io/.git/refs/remotes/origin/main": "3226755230ff022c486dfb5b73a4bc55",
"nekomaruh.github.io/.git/index": "967621acc5504cf1641b880f4c88934e",
"nekomaruh.github.io/.git/packed-refs": "ce4bc265d6d0c4d703ac9cbb344fdb7a",
"nekomaruh.github.io/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"nekomaruh.github.io/.git/FETCH_HEAD": "c33541c8ea564032f1b22e52dd1346f5",
"nekomaruh.github.io/assets/AssetManifest.json": "be5e80410c9e04566c52a9663d31e227",
"nekomaruh.github.io/assets/NOTICES": "3dfa49c54eefef8fd1a6213aebd239d7",
"nekomaruh.github.io/assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"nekomaruh.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"nekomaruh.github.io/assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"nekomaruh.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"nekomaruh.github.io/assets/assets/images/movies.png": "afa8636bb049a04549146e87a5e1de86",
"nekomaruh.github.io/assets/assets/images/lab_genesis.png": "de8213801a72b52e1a28683a0118108c",
"nekomaruh.github.io/assets/assets/images/find_me.png": "03be6ca34d8fd2248a14bf10b7faf4ad",
"nekomaruh.github.io/assets/assets/images/lab_genesis_1.jpg": "09afadbb629cd6a17d14cbdc42ade136",
"nekomaruh.github.io/assets/assets/images/background.jpg": "d5f88ed9580c0f0b13ee721e4a619c91",
"nekomaruh.github.io/assets/assets/images/music_1.png": "f020af823767f366da790ba427bb1c13",
"nekomaruh.github.io/assets/assets/images/music_2.png": "d49dc24c81e3a4dc25dba90a589778b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d2acf25de9453f1b11796208ef50834",
"assets/AssetManifest.json": "31eb64c7a917d4cbe2d4642a33e148a0",
"assets/NOTICES": "b69c57bbe7b708a3ab1d8af2c6763d3a",
"assets/FontManifest.json": "ee0e630d95bd5948f4c3e549e390ded5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/movies.png": "afa8636bb049a04549146e87a5e1de86",
"assets/assets/images/movies.jpg": "da11791807212636ebff85555c5665a6",
"assets/assets/images/lab_genesis.png": "de8213801a72b52e1a28683a0118108c",
"assets/assets/images/find_me.jpg": "fafdd2b1513e3da9be92662d0423ade2",
"assets/assets/images/find_me.png": "03be6ca34d8fd2248a14bf10b7faf4ad",
"assets/assets/images/lab_genesis.jpg": "7463e68ea206c84b0e2af0f3b73c31d9",
"assets/assets/images/lab_genesis_1.jpg": "09afadbb629cd6a17d14cbdc42ade136",
"assets/assets/images/background.jpg": "d5f88ed9580c0f0b13ee721e4a619c91",
"assets/assets/images/app_bg.png": "006fd718f55b5de6d41c403a9d64f7c8",
"assets/assets/images/music_1.jpg": "1136daa9c1423eb1bcb9ff49ed697733",
"assets/assets/images/music_1.png": "f020af823767f366da790ba427bb1c13",
"assets/assets/images/music_2.jpg": "4752ad5a5dbcb161f3f6a6a1946cba36",
"assets/assets/images/music_2.png": "d49dc24c81e3a4dc25dba90a589778b8",
"assets/assets/fonts/biennale/Biennale%2520Ultra%2520Light.otf": "ab4502ce41894ea62588756aead7e2aa",
"assets/assets/fonts/biennale/Biennale%2520Heavy.otf": "9d53db35eea4a1765fdc34852438c188",
"assets/assets/fonts/biennale/Biennale%2520Bold.otf": "74d6c1ad550ef13c1f4dce5e70269545",
"assets/assets/fonts/biennale/Biennale%2520Light.otf": "d9089d625149e455797dc8ac6526ba59",
"assets/assets/fonts/biennale/Biennale%2520Book.otf": "f0e3c3a9ca7d86a24c747661d497a129",
"assets/assets/fonts/biennale/Biennale%2520Hair.otf": "b539856669a3590fe6e49a8184ceca1e",
"assets/assets/fonts/biennale/Biennale%2520Thin.otf": "22184bc2bf2dc4f6b5d9e76c73689c3a",
"assets/assets/fonts/biennale/Biennale%2520SemiBold.otf": "e9a968b1c2253cb0d551048dae9c0c95",
"assets/assets/fonts/biennale/Biennale%2520Medium.otf": "e170585366c222f17e07ac7053553d8a",
"assets/assets/fonts/biennale/Biennale%2520Black.otf": "9405b842694fefdd3826e7244af4b9cc",
"assets/assets/fonts/biennale/Biennale%2520Regular.otf": "0af9ae9f889914b7c1d04b0df7768249"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
