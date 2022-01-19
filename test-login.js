import { Selector } from "testcafe";

fixture('testlogin')
    .page('https://katalon-demo-cura.herokuapp.com/profile.php#login')


test('login-valid', async t => {
    await t
        .typeText('input[name="username"]', 'John Doe')
        .typeText('input[name="password"]', 'ThisIsNotAPassword')
        .click('button[id="btn-login"]')
        .expect(Selector('#appointment > div > div > form > div:nth-child(1) > label').innerText).contains('Facility')
});

test('login-invalid', async t => {
    await t
        .typeText('input[name="username"]', 'Mitha')
        .typeText('input[name="password"]', 'mitha123')
        .click('button[id="btn-login"]')
        .expect(Selector('#login > div > div > div.col-sm-12.text-center > p.lead.text-danger').innerText).contains('Login failed')
});