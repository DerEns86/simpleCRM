import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
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

  // subGameList() {
  //   this.games$ = collectionData(this.getGamesRef());
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

