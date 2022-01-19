import {Selector, t} from "testcafe"

class LoginPage{
    constructor(){

        this.fill_username = Selector("input").withAttribute('id','txt-username')
        this.fill_password = Selector("input").withAttribute('id','txt-password')
        this.login_btn = Selector("button").withAttribute('id','btn-login')
        this.login_valid = Selector('#appointment > div > div > div > h2')
        this.login_invalid = Selector('#login > div > div > div.col-sm-12.text-center > p.lead.text-danger')
    }
}

export default LoginPage