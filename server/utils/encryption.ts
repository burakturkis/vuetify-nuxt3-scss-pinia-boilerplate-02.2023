import { createHash, randomBytes, createCipheriv, createDecipheriv } from 'crypto'

const ENCRYPTION_KEY = process.env.PRISMA_FIELD_ENCRYPTION_KEY || 'default-key-for-development'
const ALGORITHM = 'aes-256-gcm'

// Generate a 32-byte key from the environment variable
function getEncryptionKey(): Buffer {
  return createHash('sha256').update(ENCRYPTION_KEY).digest()
}

export function encryptField(text: string): string {
  if (!text) return text
  
  const key = getEncryptionKey()
  const iv = randomBytes(16)
  const cipher = createCipheriv(ALGORITHM, key, iv)
  
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  const authTag = cipher.getAuthTag()
  
  // Combine iv, authTag, and encrypted data
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
}

export function decryptField(encryptedText: string): string {
  if (!encryptedText || !encryptedText.includes(':')) return encryptedText
  
  try {
    const key = getEncryptionKey()
    const [ivHex, authTagHex, encrypted] = encryptedText.split(':')
    
    const iv = Buffer.from(ivHex, 'hex')
    const authTag = Buffer.from(authTagHex, 'hex')
    
    const decipher = createDecipheriv(ALGORITHM, key, iv)
    decipher.setAuthTag(authTag)
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  } catch (error) {
    console.error('Decryption failed:', error)
    return encryptedText // Return original if decryption fails
  }
}
