console.log("%c Line:4 🍔", "color:#b03734", CryptoJS);

// import CryptoJS from 'crypto-js'
// import "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"

export class Ecb {
    getEncrypted(encrypt, params) {
    
        // 1. 将请求参数进行 JSON 编码
        const jsonData = JSON.stringify(params);

        // 2. 进行 AES 加密
        const encryptedData = this.encryptAES(jsonData, encrypt);

        // 3. 生成加密后的链接
        const encryptedLink = `https://hpc-dev.corpnet5.com/h5?channel_code=${encryptedData}`;

        return encryptedLink;
    }

    encryptAES(data, key) {
        const encrypted = CryptoJS.AES.encrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        })
        return encrypted.toString();
    }
}


