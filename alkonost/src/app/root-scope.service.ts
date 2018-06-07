import {Injectable} from '@angular/core';

@Injectable()
export class RootScopeService {
    private _isToolbarOpened = false;

    public set isToolbarOpened(value){
        this._isToolbarOpened = value;
    }

    public get isToolbarOpened(){
        return this._isToolbarOpened;
    }
}