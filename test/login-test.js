import MainData from "../page objects/components/MainData1";
import LoginPage from "../page objects/pages/LoginPage1";

const testData = new MainData()
const loginPage = new LoginPage()

fixture `Test Login CURA`
.page `https://katalon-demo-cura.herokuapp.com/profile.php#login`

// .beforeEach(async t => {
//     await t.setPageLoadTimeout(0)
// })

test.only("Valid Login", async t=>{
    loginPage.validLogin(testData.usernameValid, testData.passwordValid)
    await t.expect(loginPage.login_valid.innerText).contains(testData.expectValid)
})

test.only("Invalid Login", async t=>{
    loginPage.invalidLogin(testData.usernameInvalid, testData.passwordInvalid)
    await t.expect(loginPage.login_invalid.innerText).contains(testData.expectInvalid)
})