import { browser, element, by, protractor , promise} from "protractor";
import { pageEl } from "../Utility/pageEl";

export class HomePage{

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    home = new pageEl(by.buttonText('Home'));
    bankManagerLogin = new pageEl(by.buttonText('Bank Manager Login'));
    mainHeading = new pageEl(by.className('mainHeading'));

    async navigateToHomePage(){
        await this.home.click();
    }
    click(): promise.Promise<any>{
        return element(by.css('#q')).click();
  
    }
    getTitleText() {
        return element(by.css(".mainheading")).getText() as Promise<string>;
      }

    async navigateToBankManagerLogin(){
        await this.bankManagerLogin.click();
    }
}