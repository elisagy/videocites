import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import * as _ from 'lodash';

interface VideosLogItem {
    title: string;
    url: string;
}

@Component({
    selector: 'main',
    template: require('./main.html'),
    styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

    videosLogItemsChunks: VideosLogItem[][] = [];


    static parameters = [HttpClient, DomSanitizer];
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;

    }

    ngOnInit() {
        return this.http.get('/api/videosLogs')
            .subscribe((res: any) => {
                this.videosLogItemsChunks = _.chunk(res && res.data && res.data.videos_log && res.data.videos_log.items || [], Math.ceil((res && res.data && res.data.videos_log && res.data.videos_log.items || []).length / 3));
            });
    }

    handleError(videosLogItem) {

    }

    encodeURIComponent(url) {
        return encodeURIComponent(url);
    }
}
