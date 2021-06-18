import { flush, TestBed } from '@angular/core/testing';
import { StatModel } from 'src/Models/StatModel';
import { TestMaterial } from 'src/Models/TestMaterial';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RestService } from './rest.service';
import { ɵɵsetComponentScope } from '@angular/core';
import { environment } from 'src/environments/environment';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';

describe('RestService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RestService
      ]
    });
    service = TestBed.inject(RestService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=> {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
   
    it('getUserStats should return', () =>{
      const userStats = [{username : "A",
        userID: "1",
        averagewpm! : 50,
        averageaccuracy! : 60,
        numberoftests! : 4,
        totaltesttime! : 12,
        category: 0}]

        service.getUserStats().then(res =>{
          expect(res).toEqual(userStats)
        });
        const req = httpTestingController.expectOne(`${environment.dev.serverUrl}api/UserStat/all`);
        expect(req.request.method).toEqual("GET");
        req.flush(userStats);
        httpTestingController.verify();
     });
  
  // });

});


