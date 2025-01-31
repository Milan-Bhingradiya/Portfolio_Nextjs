import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  getDoc,
  limit,
  query,
  orderBy,
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
    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    // Handle the error appropriately
    return []; // or return a default value
  }
};


export const getDocumentById = async (collectionName: string, documentId: string) => {
  try {
    const docRef = doc(firestoreInstance, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", { id: docSnap.id, ...docSnap.data() });
      // return { id: docSnap.id ,...docSnap.data() };  parane i need to deleete because this id give warning...
      return { ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};

// 


const collectionName2 = "blog_posts";

export interface BlogPost {
  id?: string;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: any;
  slug: string;
}


const data2={
  title:"sakmmsndmn",
  description:"dsmnsmnd.md",
  content: `
# Understanding React Hooks

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. Let's explore some of the most commonly used hooks.

## useState

The \`useState\` hook allows you to add state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect

\`useEffect\` lets you perform side effects in functional components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useContext

\`useContext\` makes it easy to pass data through the component tree without manually passing props:

\`\`\`jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am styled by theme context!</button>;
}
\`\`\`

## useReducer

\`useReducer\` is usually preferable to \`useState\` when you have complex state logic:

\`\`\`jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
\`\`\`

These are just a few of the hooks available in React. By using hooks, you can write more concise and easier-to-understand React components.
    `,

  image: "https://images.unsplash.com/photo-1626973109492-3c6f6f9e1c4f",
  slug:'react3'
}

export const addBlogPost = async (data: Omit<BlogPost, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(firestoreInstance, collectionName2), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("success");
    console.log("success");
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog post:", error);
    return null;
  }
};

export const updateBlogPost = async (id: string, updatedData: Partial<BlogPost>) => {
  try {
    const docRef = doc(firestoreInstance, collectionName2, id);
    await updateDoc(docRef, updatedData);
    return true;
  } catch (error) {
    console.error("Error updating blog post:", error);
    return false;
  }
};

export const deleteBlogPost = async (id: string) => {
  try {
    const docRef = doc(firestoreInstance, collectionName2, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return false;
  }
};

export const getAllBlogPosts = async () => {
  try {
    console.log("ca;;")

    const q = query(collection(firestoreInstance, "blog_posts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const blogPosts: BlogPost[] = [];
    querySnapshot.forEach((doc) => {
      console.log("in")
      blogPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });
    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string) => {
  console.log("slug is ",slug);
  try {
    const q = query(collection(firestoreInstance, collectionName2), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const blogPost = querySnapshot.docs.find(doc => {
      console.log(doc.data().slug);
      return doc.data().slug === slug;
    });
    if (blogPost) {
      return { id: blogPost.id, ...blogPost.data() } as BlogPost;
    } else {
      console.log("No such blog post!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

export const getRecentBlogPosts = async (count: number = 3) => {
  try {
    const q = query(collection(firestoreInstance, collectionName2), orderBy("createdAt", "desc"), limit(count));
    const querySnapshot = await getDocs(q);
    const blogPosts: BlogPost[] = [];
    querySnapshot.forEach((doc) => {
      blogPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });
    return blogPosts;
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    return [];
  }
};


// addBlogPost(data2)