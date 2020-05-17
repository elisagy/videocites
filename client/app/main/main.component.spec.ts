import {
    async,
    ComponentFixture,
    inject,
    TestBed,
} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { expect } from 'chai';
import { TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';

describe('Component: MainComponent', function() {
    let comp: MainComponent;
    let fixture: ComponentFixture<MainComponent>;
    let httpTestingController: HttpTestingController;
    const mockVideosLogs = ['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express'];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                TooltipModule.forRoot(),
                HttpClientTestingModule,
            ],
            declarations: [ MainComponent ], // declare the test component
        }).compileComponents();

        httpTestingController = TestBed.get(HttpTestingController);
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(MainComponent);
        // MainComponent test instance
        comp = fixture.componentInstance;

        /**
         * Trigger initial data binding and run lifecycle hooks
         */
        fixture.detectChanges();
    }));

    it('should attach a list of videosLogs to the controller', () => {
        // `GET /api/videosLogs` should be made once
        const req = httpTestingController.expectOne('/api/videosLogs');
        expect(req.request.method).to.equal('GET');

        // Respond with mock data
        req.flush(mockVideosLogs);

        // assert that there are no outstanding requests
        httpTestingController.verify();

        expect(comp.awesomeVideosLogs).to.equal(mockVideosLogs);
    });
});
