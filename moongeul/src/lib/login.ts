import PocketBase from 'pocketbase'
import type { SignUpType } from '../types/login.ts'

const pb = new PocketBase('http://127.0.0.1:8090')

export const postLogin = async (data: SignUpType) => {
  return await pb.collection('users').authWithPassword(data.email, data.password)
}
