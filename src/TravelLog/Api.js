import db from "../firebase";
import firebase from "firebase";

//function to fetch
export async function listLogEntries(fnx) {
  //   const response = await fetch(API_URL + "/api/logs");
  //   return response.json();
  let entries = [];
  db.collection("Mapentries")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapShot) => {
      entries = snapShot.docs.map((doc) => ({
        _id: doc.id,
        latitude: doc.data().latitude,
        longitude: doc.data().longitude,
        title: doc.data().title,
        comments: doc.data().comments,
        image: doc.data().image,
        visitDate: doc.data().visitDate,
        timestamp: doc.data().timestamp,
      }));
      fnx(entries);
    });
  // return entries;
}
//function to post
export async function createLogEntry(entry) {
  db.collection("Mapentries").add({
    ...entry,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
