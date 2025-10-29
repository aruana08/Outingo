import { Client, Account, ID } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject('68efbd82000eba368680')
    //.setPlatform('dev.aruana.shelfie');

export const account = new Account(client);
export { ID }; 