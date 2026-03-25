import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, type User } from 'firebase/auth';

/*
// Firebase Config Placeholder (User must replace these with actual keys from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// WHITELIST CONFIG (Optional: Add emails here to restrict access)
const whiteList: string[] = [
  'benit@example.com', // Replace with your allowed emails
  // '*' for anyone with any email (public login)
];

export function initAuth(callback: (user: User | null, isAuthorized: boolean) => void) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const isAuthorized = whiteList.includes(user.email || '') || whiteList.includes('*');
      callback(user, isAuthorized);
    } else {
      callback(null, false);
    }
  });
}

export async function login() {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Login failed:', error);
    alert('登入失敗，請稍後再試。');
  }
}

export async function logout() {
  await auth.signOut();
  window.location.reload();
}
*/

// STUB implementation for development
export function initAuth(callback: (user: any | null, isAuthorized: boolean) => void) {
  // Simulate an authorized user if needed, or do nothing since we bypass it in main.ts
  callback(null, true);
}

export async function login() { console.log('Login disabled'); }
export async function logout() { console.log('Logout disabled'); }

