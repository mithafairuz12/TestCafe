import {Selector, t} from "testcafe"

class LoginPage{
    constructor(){

        this.fill_username = Selector("input").withAttribute('id','txt-username')
        this.fill_password = Selector("input").withAttribute('id','txt-password')
        this.login_btn = Selector("button").withAttribute('id','btn-login')
        this.login_valid = Selector('#appointment > div > div > form > div:nth-child(1) > label')
        this.login_invalid = Selector('#login > div > div > div.col-sm-12.text-center > p.lead.text-danger')
    }

    async validLogin(usernameValid, passwordValid) {
        await t
        .typeText(this.fill_username, usernameValid, {paste: true, replace: true})
        .typeText(this.fill_password, passwordValid, {paste: true, replace: true})
        .click(this.login_btn)
    }

    async invalidLogin(usernameInvalid, passwordInvalid) {
        await t
        .typeText(this.fill_username, usernameInvalid, {paste: true, replace: true})
        .typeText(this.fill_password, passwordInvalid, {paste: true, replace: true})
        .click(this.login_btn)
    }
}

export default LoginPage