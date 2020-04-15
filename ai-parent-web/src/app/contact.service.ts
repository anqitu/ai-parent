import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {
      id: 'gangstermama',
      avatarUrl: '../assets/images/contacts/gangstermom.jpg',
      displayName: 'Ah Lian Mama 🔥👩🔥',
      persona: 'en',
      name: 'Ah Lian Mom'
    },
    {
      id: 'genericmama',
      avatarUrl: '../assets/images/contacts/genericmom.jpg',
      displayName: 'Generic Mama 👩',
      persona: 'en',
      name: 'Generic Mom'
    },
    {
      id: 'leehsienloong',
      avatarUrl: '../assets/images/contacts/leehsienloong.jpeg',
      displayName: 'Official LHL 🇸🇬🇸🇬🇸🇬',
      persona: 'en',
      name: 'Lee Hsien Loong'
    },
    {
      id: 'xijinping',
      avatarUrl: '../assets/images/contacts/xijinping.jpg',
      displayName: '🇨🇳 Xi Dada 🇨🇳',
      persona: 'zh',
      name: 'Xi Jinping'
    }
  ];

  constructor() { }

  public getContacts(): Contact[] {
    return this.contacts;
  }
}

export type Contact = {
  id: string;
  avatarUrl: string;
  displayName: string;
  persona: string;
  name: string;
};
