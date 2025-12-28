import prisma from './prisma.client'; 
const TEST_CLIENT_ID = 'abc12345';
const TEST_CLIENT_SECRET = 'xyz67890';
const TEST_REDIRECT_URI = 'http://client.app/callback';

export async function ensureOAuthClient() {
  try {
    const client = await prisma.oAuthClient.upsert({
      where: { clientId: TEST_CLIENT_ID },
      update: {}, 
      create: {
        clientId: TEST_CLIENT_ID,
        clientSecret: TEST_CLIENT_SECRET,
        redirectUris: [TEST_REDIRECT_URI],
        grants: ['authorization_code', 'refresh_token', 'client_credentials', 'password'],
      },
    });
    console.log(`OAuth Client ensured: ${client.clientId}`);
  } catch (error) {
    console.error('Failed to ensure OAuth Client:', error.message);
  }
}