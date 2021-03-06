import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/photos.json')
      .toPromise()
      .then((res: { data: any[]; }) => <any[]>res.data)
      .then((data: any) => { return data; });
    }
}
