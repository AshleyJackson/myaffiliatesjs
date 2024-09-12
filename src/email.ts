import axios from 'axios';

export async function validate_email(email: string): Promise<string> {
  const response = await axios.get(`https://api.ashleyjackson.net/email/validate/${email}`)
  return response.data
}