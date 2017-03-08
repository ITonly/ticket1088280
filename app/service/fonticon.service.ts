// angular
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';

// nativescript
import { knownFolders } from 'file-system';

// libs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const TNS_FONT_ICON_CONFIG = new OpaqueToken('TNSFontIconConfig');
export const TNS_FONT_ICON_DEBUG = new OpaqueToken('TNSFontIconDebug');

@Injectable()
export class TNSFontIconService {
  public filesLoaded: BehaviorSubject<any>;
  public css: any = {}; // font icon collections containing maps of classnames to unicode
  private _currentName: string; // current collection name
  private fontIconCollections: any;
  private cnt = 0;

  constructor( @Inject(TNS_FONT_ICON_CONFIG) private config: any = {}, @Optional() @Inject(TNS_FONT_ICON_DEBUG) private debug: boolean = false) {
    this.filesLoaded = new BehaviorSubject(null);
    this.loadCss();
  }

  public loadCss(): void {
    this.cnt = 0;
    this.fontIconCollections = Object.keys(this.config);
    if (this.debug) {
      console.log(`Collections to load: ${this.fontIconCollections}`);
    }

    this.loadFiles();
  }

  loadFiles() {
    this.initCollection();
    if (this.cnt === this.fontIconCollections.length) {
      this.filesLoaded.next(this.css);
    } else {
      this.loadFile(this.config[this._currentName]).then(() => {
        this.cnt++;
        this.loadFiles();
      });
    }
  }

  initCollection() {
    this._currentName = this.fontIconCollections[this.cnt];
    this.css[this._currentName] = {};
  }

  private loadFile(path: string): Promise<any> {
    if (this.debug) {
      console.log(`----------`);
      console.log(`Loading collection '${this._currentName}' from file: ${path}`);
    }
    let cssFile = knownFolders.currentApp().getFile(path);
    return new Promise((resolve, reject) => {
      cssFile.readText().then((data) => {
        this.mapCss(data);
        resolve();
      }, (err) => {
        reject(err);
      });
    });
  }

  private cleanValue(val) {
    let v = val.split('content:')[1].toLowerCase().replace(/\\e/, '\\ue').replace(/\\f/, '\\uf').trim().replace(/\"/g, '').replace(/;/g, '');
    return v;
  }

  private mapCss(data: any): void {
    let sets = data.split('}');

    for (let set of sets) {
      let pair = set.replace(/ /g, '').split(':before{');
      let keyGroups = pair[0];
      let keys = keyGroups.split(',');
      if (pair[1]) {
        let value = this.cleanValue(pair[1]);
        for (let key of keys) {
          key = key.trim().slice(1).split(':before')[0];
          this.css[this._currentName][key] = String.fromCharCode(parseInt(value.substring(2), 16));
          if (this.debug) {
            console.log(`${key}: ${value}`);
          }
        }
      }
    }
  }
}
