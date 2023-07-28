class LoginPage{

    constructor(_page){
        this.page=_page; //creating this due to the scope of the variable
        this.userNameTxtBox = _page.locator("#username");
        this.passwordTxtBox = _page.locator("#password");
        this.typeOfUserRadioBtn = _page.locator("input[value='admin']");
        this.termsAndConditionsCheckBox = _page.locator("#terms");
        this.loginBtn = _page.locator("#signInBtn")
    }

    async goToPage(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async login(_userName, _password){
        await this.userNameTxtBox.type(_userName);
        await this.passwordTxtBox.type(_password);
        await this.typeOfUserRadioBtn.check();
        await this.termsAndConditionsCheckBox.check();
        await this.loginBtn.click();
    }
}

module.exports = {LoginPage};
