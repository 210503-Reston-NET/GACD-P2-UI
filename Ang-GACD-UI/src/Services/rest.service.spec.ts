import { flush, getTestBed, TestBed } from '@angular/core/testing';
import { StatModel } from 'src/Models/StatModel';
import { TestMaterial } from 'src/Models/TestMaterial';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RestService } from './rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { ɵɵsetComponentScope } from '@angular/core';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

describe('RestService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: RestService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestService]
    });
    service = TestBed.inject(RestService);
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
  
 /* describe('#getUserStats', () =>{
    let expectedURL = `${environment.dev.serverUrl}api/UserStat/all`;
    let expectedStats: StatModel[] = [];
    /*const http = {
      get(url: string, headers: any): Promise<StatModel[]>{
        if(url === expectedURL){
          return expectedStats;
        }
        throw new Error();
      }
    } as HttpClient;*/
    /*it('getUserStats should return', () =>{
      service.getUserStats().then(value =>{
      expect(value).toBeTruthy();
    });/
    /*const serv = new RestService(http);
    const result = service.getUserStats();
    expect(result).toBeGreaterThan(0);
  });
  });*/


