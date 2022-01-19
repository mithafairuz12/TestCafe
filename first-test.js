import {Selector} from "testcafe";

fixture('testcafe demo')
    .page('https://www.google.com')

test('my-fisr-test', async t => {
    await t
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnK"]')
        .expect(Selector('#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a > h3').innerText).contains('TestCafe')
})

