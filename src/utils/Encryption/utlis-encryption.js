import CryptoJS from "crypto-js"

export const ciphertextEncrypted=({value,secretKey=process.env.SECRET_KEY})=>{
 
return CryptoJS.AES.encrypt(value,secretKey).toString()

}
export const decrypted=({ciphertext,secretKey=process.env.SECRET_KEY})=>{
 
return CryptoJS.AES.decrypt(ciphertext,secretKey).toString(CryptoJS.enc.Utf8)

}