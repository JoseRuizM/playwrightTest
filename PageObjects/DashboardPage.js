class DashboardPage{
    constructor(_page){
        this.page=_page;
        this.pageTitleElement = _page.locator('//a[text()="ProtoCommerce"]'); 
    }

    getPageTitle(){
        return this.pageTitleElement;
    }
}

module.exports = {DashboardPage};