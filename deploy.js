// eslint-disable-next-line import/no-commonjs
const ci = require('miniprogram-ci');
// eslint-disable-next-line import/no-commonjs
const yargs = require('yargs');
 
const argv = yargs.argv; 
// 开发版: npm run deploy -- --type=develop --v=1.1.1 --robot=1 --desc=我是描述// 体验版: npm run deploy -- --type=trial --v=1.1.1 --robot=1 --desc=我是描述;

(async () => {
  const {
    type = 'develop', v: version, robot = 2, desc
  } = argv;
  console.log(`type: ${type}`);
  console.log(`version: ${version}`);
  console.log(`desc: ${desc}`);
  console.log(`robot: ${robot}`);
  const project = new ci.Project({
    appid: 'wx7f72a7b8724c789d',
    type: 'miniProgram',
    projectPath: './dist/weapp',
    privateKeyPath: '../weapp.key',
    ignores: ['node_modules/**/*'],
  });
  const defaults = {
    project,
    desc,
    setting: {
      es6: false,
      urlCheck: true,
      postcss: false,
      minified: false
    },
  };
  switch (type) {
    case 'develop':
      const previewConfig = Object.assign({}, defaults, {
        qrcodeFormat: 'image',
        qrcodeOutputDest: `./qrcode/preview-qrcode-v${version}.jpg`,
        robot,
      });
      await ci.preview(previewConfig);
      break;
    case 'trial':
      const uploadConfig = Object.assign({}, defaults, {
        version,
        robot: 1,
      });
      await ci.upload(uploadConfig);
      break;
    default:
      break;
  }
})();
