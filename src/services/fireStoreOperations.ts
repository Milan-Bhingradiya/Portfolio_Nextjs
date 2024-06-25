import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { firestoreInstance } from "../../firebase-config";

const collectionName = "messages";

export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(firestoreInstance, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return true;
    // return docRef;
  } catch (error) {
    console.error("Error adding document:", error);
    return false;
  }
};

export const editDocument = async (
  collectionName: string,
  id: string,
  updatedData: any
) => {
  try {
    const docRef = doc(firestoreInstance, collectionName, id);
    await updateDoc(docRef, updatedData);
    return docRef;
  } catch (error) {
    console.error("Error editing document:", error);
  }
};

export const removeDocument = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(firestoreInstance, collectionName, id);
    await deleteDoc(docRef);
    return docRef;
  } catch (error) {
    console.error("Error removing document:", error);
  }
};

export const getAllDocuments = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(
      collection(firestoreInstance, collectionName)
    );
    const documents: any = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    console.log(documents);
    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};
