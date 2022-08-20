import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-notice',
  styleUrl: 'page-notice.css',
  // shadow: true,
})
export class PageNotice {

  names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
  ]

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Notices</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            {this.names.map(name=>
              <ion-item href={"/profile/"+name.toLowerCase()} key={name}>
                <ion-label>{name} is following you</ion-label>
              </ion-item>
            )}
          </ion-list>
        </ion-content>
      </Fragment>
    );
  }

}
