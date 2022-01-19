const {Given, When, Then, And} = require('@cucumber/cucumber')
//import {Given, When, Then, And} from '@cucumber/cucumber'
import MainData from '../components/MainData'
import LoginPage from '../pages/LoginPage'


const loginPage = new LoginPage()
const loginData = new MainData()


Given(/^User access CURA Login page$/, async (t) => {
    await t.navigateTo(loginData.url)
})

When(/^User fill valid "([^"])"$/, async (t, [username]) => {
    await t.typeText(loginPage.fill_username, username, {paste: true, replace: true})
})

And(/^User fill valid "([^"])"$/, async (t, [password]) => {
    await t.typeText(loginPage.fill_password, password, {paste: true, replace: true})
})

And(/^User click Login button$/, async (t) => {
    await t.click(loginPage.login_btn)
})

Then(/^User success login and will see Appointment Form$/, async (t) => {
    await t.expect(loginPage.login_valid.innerText).contains('Make Appointment')
})

Then(/^User failed to login and will see error message$/, async (t) => {
    await t.expect(loginPage.login_invalid.innerText).contains('Login failed')
})