import { Component, Fragment, h, State } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() mode: string

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto'
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return
    }
    this.mode = mode
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode)
        break
      default:
        localStorage.removeItem('mode')
        break
    }
    location.reload()
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>Welcome to Stencil App Starter.</p>
          <ion-list>
            <ion-radio-group value={this.mode} onIonChange={e => this.setMode(e.detail.value)}>
              <ion-list-header>
                <ion-label>Theme Mode</ion-label>
              </ion-list-header>
              <ion-note class="ion-padding-start">
                (Changing theme will reload the whole app.)
              </ion-note>
              <ion-item>
                <ion-label>Auto Detect</ion-label>
                <ion-radio value='auto'></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>Material Design</ion-label>
                <ion-radio value='md'></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>iOS</ion-label>
                <ion-radio value='ios'></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
          <p>Let's try navigating with ionic router!</p>
          <ion-list>
            <ion-item href="/tab/notice">
              <ion-label>Notice Page (/tab/notice)</ion-label>
            </ion-item>
            <ion-item href="/profile/ionic">
              <ion-label>Profile Page (/profile/ionic)</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </Fragment>
    );
  }

}
