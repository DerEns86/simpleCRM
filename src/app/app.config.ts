import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-afa8f","appId":"1:238944393884:web:8bed1b2a782e1d0b57eb59","storageBucket":"simple-crm-afa8f.appspot.com","apiKey":"AIzaSyC4nXPklf5712NczB95QMg9PoUryfbBZTE","authDomain":"simple-crm-afa8f.firebaseapp.com","messagingSenderId":"238944393884"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
