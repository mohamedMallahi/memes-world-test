import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCC1Nwu4b4NOPFPiicHnr8zwikSfY1kG14',
  authDomain: 'memes-world-9d360.firebaseapp.com',
  projectId: 'memes-world-9d360',
  storageBucket: 'memes-world-9d360.appspot.com',
  messagingSenderId: '848113507608',
  appId: '1:848113507608:web:0efa214b4884cc8b5c126d',
  measurementId: 'G-30FL768692',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
