import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

export class BaseHttpService {

  private _baseUrl: string;
  private _httpClient: HttpClient;
  private _endpoint: string;


  constructor(httpClient: HttpClient, endpoint: string) {
    this._baseUrl = '';
    this._httpClient = httpClient;
    this._endpoint = endpoint;
  }

  protected get<T>(): Observable<T> {
    return this._httpClient.get<T>(this.url);
  }

  private get url(): string {
    return this._baseUrl + this._endpoint;
  }
}
