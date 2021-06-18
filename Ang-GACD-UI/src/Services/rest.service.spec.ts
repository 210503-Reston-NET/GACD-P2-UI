import { flush, TestBed } from '@angular/core/testing';
import { StatModel } from 'src/Models/StatModel';
import { TestMaterial } from 'src/Models/TestMaterial';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RestService } from './rest.service';
import { ɵɵsetComponentScope } from '@angular/core';

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
   
    //Test 1
    // it('getUserStats should return', (done : DoneFn) =>{
    //   service.getUserStats().then((value:StatModel[]) =>{
    //   expect(value.length).toBeGreaterThan(-2)
    //   done();
    // });
  
  // });

});


