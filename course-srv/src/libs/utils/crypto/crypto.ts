import crypto from 'crypto'


export const randomImageBites = ()=> {
   const bytes = 32;
   return crypto.randomBytes(bytes).toString('hex')
}