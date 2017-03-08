import { Component, ViewChild, OnInit, AfterViewInit, NgZone, Inject, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Page } from 'ui/page';
import { AccountTransactionApi } from '../../api/accounting/api/AccountTransactionApi';
import { ACCOUNTING_BASE_PATH } from '../../api/accounting/variables';
import * as Dialogs from 'ui/dialogs';
import { BaseComponent } from '../shared/base.component';

import { ImageAsset } from 'image-asset';
import { Image } from 'ui/image';

import * as camera from 'nativescript-camera';
import * as bghttp from 'nativescript-background-http';
import * as fs from 'file-system';
import * as enumsModule from 'ui/enums';
import * as imageSourceModule from 'image-source';

import { ActivatedRoute, Router } from '@angular/router';
import { RouteStateService } from '../../service/core/route-state-service';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS, device, screen } from 'platform';
import { LoaderService } from '../../service/core/loader';
import * as http from 'http';
import * as utilModule from 'utils/utils';
import * as frame from 'ui/frame';
import { ListView } from 'ui/list-view';
let permissions = require('nativescript-permissions');
declare var android: any;



@Component({
    moduleId: module.id,
    selector: 'gpm-transaction-image',
    templateUrl: 'transaction-image.component.html',
    styleUrls: ['transaction-image.component.css'],
})
export class TransactionImageComponent extends BaseComponent implements OnInit {

    @ViewChild('urlsList') urlsList: ElementRef;
    cacheImage: Array<any> = [];
    hideCamera: boolean = false;
    photoList = [];
    width: number = 300;
    height: number = 300;
    imageTaken: ImageAsset;
    imageWidth: number = 0;
    keepAspectRatio: boolean = true;
    saveToGallery: boolean = true;
    type: any;
    token: any;
    id: string = '';
    hideCarry: boolean = false;
    items = [];
    lastImage: boolean = false;
    format;

    constructor(private routerExtensions: RouterExtensions, page: Page, @Inject(ACCOUNTING_BASE_PATH) private accountingPath: string,
        private router: Router, private route: ActivatedRoute, loaderService: LoaderService,
        private routeStateService: RouteStateService, private zone: NgZone) {
        super(page, loaderService);
        this.type = route.snapshot.params['type'];
        this.hideCarry = route.snapshot.params['hideCarry'] === 'true' ? true : false;
        this.format = enumsModule.ImageFormat.png;
    }

    onTakePhoto() {
        camera.requestPermissions();
        let self = this;
        let fileName = new Date().getTime() + '.' + this.format;

        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        camera.takePicture(options)
            .then(imageAsset => {
                let savePath = fs.knownFolders.documents();
                let path = fs.path.join(savePath.path, fileName);
                this.imageTaken = imageAsset;

                let imageSource = new imageSourceModule.ImageSource();

                imageSource.fromAsset(imageAsset).then((source) => {
                    this.showLoader(true);
                    let saved = source.saveToFile(path, self.format);
                    if (saved) {
                        self.sendImages(fileName, path);
                    }
                });
            }).catch(err => {
                this.showLoader(false);
            });
    }

    sendImages(uriName, fileUri) {
        let self = this;
        let session = bghttp.session('image-upload');
        let request = {
            url:  'http://api-accounting-dev.guanplus.com/api/v1/account_transaction/mobile/upload',
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'File-Name': uriName,
                'company_id': 'dbc1cd2e-7ec6-40b2-ab92-774bdf45e77f',
                'Authorization': 'bearer TcIuXH13di2TiTt0QE6l-pP9CkBE0S7WS3oohpf8JThfdAnW0uS4N8lMlche285Yi8-jSsL2ZsiFjwVf1iHJqoNbHUaNl0k9jaJTqr3Dt6RiseUzsAUD0mm2hm1t3IgGLJq7JN9aeLxF5My0AwcNFrIWTTilA6rJkaZthj6alzltS1W_j4MQpeuLpu5sx5bck1osngyXlL_IrfyZELN08UECivsbA_UyYoNIEv_EwNrVz4AHnPnPbj-wrJ04pevVZlujC_78juaduGipSXlPIRfXEaE'
            },
            description: 'uploading ' + uriName
        };
        console.dump(request);
        let task = session.uploadFile(fileUri, request);
        self.showLoader(true);

        task.on('error', logError);
        task.on('responded', logResponse);

        function logError(e) {
            self.showLoader(false);
        }

        function logResponse(e) {
                        console.log('messagelishidi' + JSON.stringify(e.data));

            let temp: Array<any> = JSON.parse(e.data);
            // 匹配最后一个小数点后面的内容 加上—_s 再去替换
            let re = /\.[^\.]+\s*?$/i;
            let imageUrl = temp[0].url.match(re);
            let f = '_s' + imageUrl;
            temp[0].surl = temp[0].url.replace(re, f);
            self.showLoader(false);
            // self.addImage(temp[0]);
            self.zone.run(() => self.addImage(temp[0]));

        }
    }

    addImage(image) {
        if (this.cacheImage.length === 9) {
            this.hideCamera = true;
            this.cacheImage = this.cacheImage.slice(0, 9);
        } else {
            this.hideCamera = false;
            this.cacheImage.push(image);

        }
    }



    // 删除
    deleteImage(x) {
        // 根据ID删除某个图
        for (let i = 0; i < this.cacheImage.length; i++) {
            if (this.cacheImage[i].id === x) {
                this.cacheImage.splice(i, 1);
            }
        }
        if (this.cacheImage.length < 9) {
            this.hideCamera = false;
        }
    }


    ngOnInit() {
        if (this.hideCarry) {
            this.hideCamera = true;
        }
        this.imageWidth = (screen.mainScreen.widthDIPs - 45);
        if (this.type) {
            this.id = this.routeStateService.getTransaction('tid');
        }
        let tempImages = this.routeStateService.getTransaction('images');

        if (tempImages) {
            // 匹配最后一个小数点后面的内容 加上—_s 再去替换
            let re = /\.[^\.]+\s*?$/i;
            for (let i = 0; tempImages.length > i; i++) {
                let e = tempImages[i].url.match(re);
                let f = '_s' + e[0];
                tempImages[i].surl = tempImages[i].url.replace(re, f);
            }
            this.cacheImage = tempImages;
            if (this.cacheImage.length === 9) {
                this.hideCamera = true;
            } else {
                this.hideCamera = false;
            }
        }
    }

    onSave() {
        this.routerExtensions.navigate(['/transaction-details', { images: JSON.stringify(this.cacheImage), id: this.type, clearHistory: true }],
            {
                clearHistory: true,
                transition: {
                    name: 'slideLeft',
                }
            },
        );
    }

    onNavBtnTap() {
        this.routerExtensions.backToPreviousPage();
    }

    onSelectMultipleTap() {
        let imagepicker = require('nativescript-imagepicker');
        console.log('onSelectMultipleTap');
        let context = imagepicker.create({
            mode: 'multiple'
        });
        if (isAndroid) {
            this.usePermission(context);

        } else {
            this.startSelection(context);
        }
    }
   
    usePermission(context) {
        let self = this;
        if (Number(device.sdkVersion) >= 23) {

        }
        if (isAndroid && Number(device.sdkVersion) >= 23) {
            permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE, 'I need these permissions to read from storage')
                .then(function () {
                    self.startSelection(context);
                })
                .catch(function () {
                });
        } else {
            self.startSelection(context); // lower SDK versions will grant permission from AndroidManifest file
        }
    }

    startSelection(context) {
        console.log('startSelection');
        let self = this;
        context
            .authorize()
            .then(function () {
                return context.present();
            })
            .then(function (selection) {
                //     selection.forEach(function (selected_item) {
                //      let fileName = new Date().getTime() + '.' + self.format;
                //     // self.sendImages(fileName, selected.fileUri);
                //      selected_item.getImage().then(function(imagesource){
                //     let folder = fs.knownFolders.documents();
                //     let path = fs.path.join(folder.path, fileName);
                //     let saved = imagesource.saveToFile(path, "png");
                //     if(saved){
                //         self.sendImages(fileName, path);
                //         // var item = new observable.Observable();
                //         // item.set("thumb", imagesource);
                //         // item.set("uri", "Test"+counter+".png");
                //         // item.set("uploadTask", task);

                //         // imageItems.push(item);
                //     }
                // })
                // });
                let fileName = new Date().getTime() + '.' + self.format;
                selection.forEach(function (selected) {
                    self.sendImages(fileName, selected.fileUri);
                });
            }).catch(function (e) {
            });
    }

    chooseWay() {
        let self = this;
        let options = {
            cancelButtonText: 'cancel',
            actions: ['take photo', 'choose image']
        };
        Dialogs.action(options).then((result) => {
            if (result === 'take photo') {
                self.onTakePhoto();
            } else {
                this.onSelectMultipleTap();
            }
        });
    }

}
