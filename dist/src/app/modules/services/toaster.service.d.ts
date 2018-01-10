import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Itoast } from '../interface/itoast';
export declare class ToasterService {
    uniqueCounter: number;
    private toast;
    toastsEmitter: BehaviorSubject<Itoast>;
    getAllToasts(): Observable<Itoast>;
    default(options: string | number): void;
    info(title: number | string, msg: number | string, showClose: boolean, timeout: number): void;
    success(title: number | string, msg: number | string, showClose: boolean, timeout: number): void;
    wait(title: number | string, msg: number | string, showClose: boolean, timeout: number): void;
    error(title: number | string, msg: number | string, showClose: boolean, timeout: number): void;
    warning(title: number | string, msg: number | string, showClose: boolean, timeout: number): void;
    private add(title, msg, showClose, timeout, type);
}
