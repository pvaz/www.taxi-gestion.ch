var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
let MailSearchPipe = class MailSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
};
MailSearchPipe = __decorate([
    Pipe({
        name: 'MailSearch'
    })
], MailSearchPipe);
export { MailSearchPipe };
//# sourceMappingURL=mail-search.pipe.js.map