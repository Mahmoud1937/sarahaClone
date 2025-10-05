import bcrypt from "bcrypt"
export const hashed= ({ plainText,  rounds = Number(process.env.ROUNDS )}) => {
  
    return bcrypt.hashSync(plainText, rounds)

}

export const compareHashing = ({ plainText, hash }) => {
      if (!plainText || !hash) {
    throw new Error("plainText and hash are required");
  }
    return bcrypt.compareSync(plainText, hash)
}