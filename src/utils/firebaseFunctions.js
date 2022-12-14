import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

export const getAllItems = async () => {
  const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id', 'desc')));
  return items.docs.map((d) => d.data());
};
