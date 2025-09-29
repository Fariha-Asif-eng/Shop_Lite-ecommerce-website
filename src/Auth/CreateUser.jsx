import { DataBases, VITE_APPWRITE_Collection_ID, VITE_APPWRITE_DB_ID } from "../Auth/Config";
import { Query } from "appwrite";

export const CreateUser = async (userId, name, email, bio = "") => {
  return await DataBases.createDocument(
    VITE_APPWRITE_DB_ID,
    VITE_APPWRITE_Collection_ID,
    // "unique()",
    userId,
    { Name: name, 
        Email: email,

        bio: bio || '' }
  );
  
};

export const GetUser = async (userId) => {
  const result = await DataBases.listDocuments(
    VITE_APPWRITE_DB_ID,
    VITE_APPWRITE_Collection_ID,
    [Query.equal("userId", userId)]
  );
  return result.documents[0];
};

export const UpdateUser = async (docId, bio) => {
  return await DataBases.updateDocument(
    VITE_APPWRITE_DB_ID,
    VITE_APPWRITE_Collection_ID,
    docId,
    { bio }
  );
};
