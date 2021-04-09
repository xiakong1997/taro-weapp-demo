const miniu = require('miniu');
const yargs = require('yargs');


(async () => {
    const privateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCWc+iJ82V5cjza/9gk4OW3gm0VWMzy8G4Org4un7X+QXoS+F6Af2pVw1I2O2p7kbazWtAzG83r6FBv2MUSDqc7BM1emrrtA97H6706P/ZzvBFJmIYRqcgcGSS9a9OmWkl+9gdgqxFzHaqbaLKhH9RFYcabCVe80mCOO6j6qcLS8H+NA2RWPqinnXi3W3FPhGYRedpNsjulL5tgF6jC6BjfDNHQQ2jCL0Cl5NwAldxWOJ+qlbI5aYr1cy/zs2wXx46jVYjx4IMjyp2TTjKxYI4ixuhY5YgfrajQAI9rVNPnv2X3ez5OY+QejJ3cr6+itnRZGzjod0JCHSvfT+g23MHrAgMBAAECggEAWtC2Meb4fplFQJAkYQZbwyx4OeVzOMWGOVg4+U2wZjwRurevG3NNtV0EF/Y/bT1kgdi0SdVjtB1zyD+ZnS+5I/ffG1bctEqcxCJ5A1suoWeJK9pkOu83+jX3Jlua0xQ2vus1QtWf39Otcsd846M513OQlW7LRg/a9p/ufPfRwM87vmQwWz/oAnK/sOvErLgz4866TSLH9BoajcTx2bcqz4vkdHCCRRjlBlLtVejLmeyywEjMnad3M9cjh+6jRwb7d8pBgEelTc6dRAH0UAy1bKGe25czMe0IYoG1vvHGxp/lpNQqg8OPH8BeYIx5dstTr4V0WZrqMJs80toDZ3yW8QKBgQDJO6I7Xwe287aQwTJC9tUuQ0wATcR2X2WM2tSWRTxFhHjk8AgSAFQcUvVdGS2kT5gVaEgoSQPg5WNb0toKy7EzGl2+2A2TrFUFGZkBgznoyvmm9t+g4y9tg86d3Fey1kx+2N2jQU6bAw9fdvWMkkGMUmyNuFvBdl5Szn5P+9AE0wKBgQC/Zk1Ey82aFbsbbIGBLS9SIXlqsYV7+PERd0E5UJDX2McJNjeA1iSDYvpyi3LL06gnCLD/YnQ+xA28aQ4qXTceaH1yXzB7PqrXZG22yaTzVwS5gK8VxwRrYfoewA0YhfypwOsSamFMehjdqGIHjYecphpfRay6WUIVg5OAG9T/iQKBgQCK+NAVSI+/XZhbZ9EaRfT7uiYmn45qYX90QzxFexMgv1fuY4ZvSCLOXMxuuxC2RPG29wm+KI6xJjn0FC3Y/ssli7PqNLNLpNwiZYcxcDrx9htrn1rZdYwvibOLebxnGXBCuep28IckrnxTZYg2yFrUWaf2R7e2Z9TEQy8gdbs3WQKBgQColzUSly44PlH8mvwLy8A16PRpDYtVova8+r2B/bxH1FOlgpMrMfUhogqW4MwyS/J+x4IYwiFAtDKhNixbFpaZe1KcbspmlNGpPnYBnuZjzc+EkpwmY5I6AChv85zVcBgZcqvdIcUotxe2Dz6iBoFgc1Mhfl7iGgNCrg47tshMeQKBgH2z5To+rz/KwiaZgD4/ae/tQ8D7SXKYO2sJ1aLi3e6Ue68Qk0TRPmAsP5Yp+zEYqtXEpJLYdbvoCeUdBZfuqrZrW/u7mSNVgAQKxjCLWCnOTMpuAlpSZVyy0T6MzluNDx4ZKldVSvWbzxuVs+WOPsoc5m/P+IbqCzdmmIScYG2j';
     const toolId = '05927e02060343e99448ca738cb8d613';
    
      miniu.setConfig({
        privateKey,
        toolId,
      });


// async function previewTinyApp() {
  
//   const previewResult =  await miniu.miniPreview({
//     project: "./dist/alipay",
//     appId: '2021002135635935',
//     qrcodeFormat: 'image',
//     qrcodeOutput:"./qrcode/ceshi.png",
//     onProgressUpdate (info) {
//       const { status, data } = info
//       console.log(status, data);
//     },
//   });
  
//  }
//  previewTinyApp()

async function uploadApp() {
  const uploadResult = await miniu.miniUpload({
    project: './dist/alipay',
    appId: '2021002135635935',
    clientType: 'alipay',
    packageVersion:'0.0.6',
    experience: true,
    onProgressUpdate (info) {
      const { status, data } = info
      console.log(status, data)
    }
  })
  }
  uploadApp()
}
 )()
// function initialConfig() {
//   const privateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCWc+iJ82V5cjza/9gk4OW3gm0VWMzy8G4Org4un7X+QXoS+F6Af2pVw1I2O2p7kbazWtAzG83r6FBv2MUSDqc7BM1emrrtA97H6706P/ZzvBFJmIYRqcgcGSS9a9OmWkl+9gdgqxFzHaqbaLKhH9RFYcabCVe80mCOO6j6qcLS8H+NA2RWPqinnXi3W3FPhGYRedpNsjulL5tgF6jC6BjfDNHQQ2jCL0Cl5NwAldxWOJ+qlbI5aYr1cy/zs2wXx46jVYjx4IMjyp2TTjKxYI4ixuhY5YgfrajQAI9rVNPnv2X3ez5OY+QejJ3cr6+itnRZGzjod0JCHSvfT+g23MHrAgMBAAECggEAWtC2Meb4fplFQJAkYQZbwyx4OeVzOMWGOVg4+U2wZjwRurevG3NNtV0EF/Y/bT1kgdi0SdVjtB1zyD+ZnS+5I/ffG1bctEqcxCJ5A1suoWeJK9pkOu83+jX3Jlua0xQ2vus1QtWf39Otcsd846M513OQlW7LRg/a9p/ufPfRwM87vmQwWz/oAnK/sOvErLgz4866TSLH9BoajcTx2bcqz4vkdHCCRRjlBlLtVejLmeyywEjMnad3M9cjh+6jRwb7d8pBgEelTc6dRAH0UAy1bKGe25czMe0IYoG1vvHGxp/lpNQqg8OPH8BeYIx5dstTr4V0WZrqMJs80toDZ3yW8QKBgQDJO6I7Xwe287aQwTJC9tUuQ0wATcR2X2WM2tSWRTxFhHjk8AgSAFQcUvVdGS2kT5gVaEgoSQPg5WNb0toKy7EzGl2+2A2TrFUFGZkBgznoyvmm9t+g4y9tg86d3Fey1kx+2N2jQU6bAw9fdvWMkkGMUmyNuFvBdl5Szn5P+9AE0wKBgQC/Zk1Ey82aFbsbbIGBLS9SIXlqsYV7+PERd0E5UJDX2McJNjeA1iSDYvpyi3LL06gnCLD/YnQ+xA28aQ4qXTceaH1yXzB7PqrXZG22yaTzVwS5gK8VxwRrYfoewA0YhfypwOsSamFMehjdqGIHjYecphpfRay6WUIVg5OAG9T/iQKBgQCK+NAVSI+/XZhbZ9EaRfT7uiYmn45qYX90QzxFexMgv1fuY4ZvSCLOXMxuuxC2RPG29wm+KI6xJjn0FC3Y/ssli7PqNLNLpNwiZYcxcDrx9htrn1rZdYwvibOLebxnGXBCuep28IckrnxTZYg2yFrUWaf2R7e2Z9TEQy8gdbs3WQKBgQColzUSly44PlH8mvwLy8A16PRpDYtVova8+r2B/bxH1FOlgpMrMfUhogqW4MwyS/J+x4IYwiFAtDKhNixbFpaZe1KcbspmlNGpPnYBnuZjzc+EkpwmY5I6AChv85zVcBgZcqvdIcUotxe2Dz6iBoFgc1Mhfl7iGgNCrg47tshMeQKBgH2z5To+rz/KwiaZgD4/ae/tQ8D7SXKYO2sJ1aLi3e6Ue68Qk0TRPmAsP5Yp+zEYqtXEpJLYdbvoCeUdBZfuqrZrW/u7mSNVgAQKxjCLWCnOTMpuAlpSZVyy0T6MzluNDx4ZKldVSvWbzxuVs+WOPsoc5m/P+IbqCzdmmIScYG2j';
//   const toolId = '05927e02060343e99448ca738cb8d613';

//   miniu.setConfig({
//     privateKey,
//     toolId,
//   });
// }
// async function getFirstTinyApp() {
//     initialConfig();
//     const miniList = await miniu.miniAppList();
//     return miniList.length ? miniList[0] : null;
//   }
//   initialConfig();

// async function previewTinyApp() {
  
//   const previewResult =  await miniu.miniPreview({
//     project: "./dist/alipay",
//     appId: '2021002135635935',
//     qrcodeFormat: 'image',
//     qrcodeOutput:"./qrcode/ceshi.png",
//     onProgressUpdate (info) {
//       const { status, data } = info
//       console.log(status, data);
//     },
//   });
//   console.log('the result of preview tiny app is: ', previewResult);

//   return previewResult;
// }
// previewTinyApp()