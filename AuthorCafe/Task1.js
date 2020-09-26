const {
    Builder,
    By,
    Key,
    until,
    WebDriverWait,
} = require("selenium-webdriver")

const driver = new Builder().forBrowser(`chrome`).build()

async function Login() {
    try {

        //fetching url
        await driver.get("https://authorcafe.com/sign-in/")
        await driver.manage().window().maximize()
        console.log("Application has been launched")

        //providing username and password:
        await driver.findElement(By.name("username")).sendKeys("aucsdet@yopmail.com");
        await driver.sleep(3000)

        await driver.findElement(By.name("signpassword")).sendKeys("Authorcafe@123")
        await driver.sleep(2000)
        console.log("User has logged on successfully")

        //clicking on sign-in:

        await driver.findElement(By.name("signin")).click()

        await driver.sleep(30000)

        editorPage()
        console.log("Hello World! has been typed")
    } finally {

    }
}


Login()


async function editorPage() {
    try {
        await driver.executeScript(`
        var editor=document.querySelector('.abunit.para.activeElement')
        var ele=document.createElement('ins')
        ele.setAttribute('data-ins-author','12997')
        ele.innerHTML='Hello World!'
        editor.appendChild(ele)`)
    } finally {

    }
}