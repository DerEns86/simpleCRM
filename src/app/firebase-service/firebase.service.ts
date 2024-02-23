import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, onSnapshot, query } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  firestore: Firestore = inject(Firestore)
  constructor() {

    this.getTest();
  }




  getUserRef() {
    return collection(this.firestore, 'user');
  }


  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  getTest() {
    const test = collectionData(this.getUserRef());
    console.log('test: ', test)
  }



  snapShotUserList() {
    onSnapshot(this.getUserRef(), (list) => {
      list.forEach(element => {
        // this.users.push(element)
        console.log('from snapshot:', element.data);
      });
    })
  };

  snapshotSingleDoc(colId: string, docId: string) {
    onSnapshot(this.getSingleDocRef(colId, docId), (docRef) => {
      console.log(docRef);
    })
  };

  async addUser(item: {}) {
    await addDoc(this.getUserRef(), item).catch(
      (err) => { console.error(err) }
    ).then(
      (docRef) => { console.warn("Document written with ID: ", docRef) }
    )
  }

}





// #######  get ####################

// getGamesRef() {
//   return collection(this.firestore, 'games');
// }

// getSingleDocRef(colId: string, docId: string) {
//   return doc(collection(this.firestore, colId), docId)
//   //         -> Datenbankzugriff-<
// }


// snapShotGameList() {
//   onSnapshot(this.getGamesRef(), (list) => {
//     list.forEach(element => {

//       console.log('from snapshot:', element.id);
//     });
//   })

// }

// snapshotSingleDoc(colId:string, docId:string){
//   onSnapshot(this.getSingleDocRef(colId, docId), (docRef)=>{
//     console.log(docRef);
//   })
// }


// // ##############################################

// subUserList() {
//   this.users$$ = collectionData(this.getGamesRef());
//   this.games = this.games$.subscribe((list:any) => {
//     list.forEach((element: any) => {
//       console.log('from service: ', element);
//     });
//   });
// }

// async addGame(item: {}) {
//   await addDoc(this.getGamesRef(), item).catch(
//     (err) => { console.error(err) }
//   ).then(
//     (docRef) => { console.warn("Document written with ID: ", docRef) }
//   )
// }

// async updateGame(docId: string, item: {}) {
//   await updateDoc(this.getSingleDocRef('games', docId), item).catch(
//     (err) => { console.error(err) }
//   ).then();
// }

// async deleteGame(colId: string, docId: string) {
//   await deleteDoc(this.getSingleDocRef(colId, docId)).catch(
//     (err) => { console.error(err) }
//   )
// }

