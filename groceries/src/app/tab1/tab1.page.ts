import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import {present} from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Grocery List';

  items = [

    {
      name: 'Milk',
      quantity: 2
    },
    {
      name: 'Bread',
      quantity: 1
    },
    {
      name: 'Banana',
      quantity: 3

    },
    {
      name: 'Sugar',
      quantity: 1
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {


  }

  async removeItem(item, index) {
    console.log('Removing Item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item -' + index + '...',
      duration: 3000
    });
    this.items = this.items.filter( itm => itm.name !== item.name);
    await toast.present();
  }

  async addItem() {
    console.log('Adding Item');
    await this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      //title: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Saved clicked');
          },
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          },
        },
      ]
    });

    await prompt.present();
  }

}
