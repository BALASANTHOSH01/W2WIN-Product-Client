// services/firestore.ts
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../utils/firebase';
import { Product } from '../types/types';

const productsCollection = collection(db, 'products');

export const addProduct = async (product: Product, imageFile: File) => {
  try {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, `products/${imageFile.name}`);
    const snapshot = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(snapshot.ref);

    // Add product details to Firestore
    const docRef = await addDoc(productsCollection, {
      ...product,
      imageUrl
    });

    return docRef.id;
  } catch (error) {
    console.error('Error adding product: ', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(productsCollection);
    const products: Product[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Product));
    return products;
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};
