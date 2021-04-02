const baseUrl = ''
const env = process.env.NODE_ENV
switch(env){
    case 'feature1':
        baseUrl = 'https://feature1.ngarihealth.com/ehealth-opbase-feature1/'
        break;
    case 'master':
        baseUrl = 'https://yypt.ngarihealth.com/ehealth-ngarirecipe-PRO/'
        break;
}
export default baseUrl