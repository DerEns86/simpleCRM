import { Injectable, OnDestroy, inject } from '@angular/core';
import { Firestore, Unsubscribe, addDoc, collection, collectionData, doc, onSnapshot, query } from '@angular/fire/firestore';
// import { User } from '../models/user.class';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {


  firestore: Firestore = inject(Firestore);

  allUsers: any[] = [];
  unsubList;
  constructor() {

    this.unsubList = this.snapShotUserList();

  }

  ngOnDestroy(): void {
    this.unsubList();
  }


  getUserRef() {
    return collection(this.firestore, 'users');
  }


  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  snapShotUserList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.allUsers = [];
      list.forEach(element => {
        // this.allUsers.push( )
        this.allUsers.push(element.data())
        console.log('from snapshot:', element.data());
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

