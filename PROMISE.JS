var sendEmail = (userEmail) => {
    return new Promise(async(resolve, reject) => {
        setTimeout(() => { resolve(`Email sent to ${userEmail}`); }, 3000)
    })
}
var sendEmails = async() => {
    var userEmails = ["maery@gmail.com", "owuor2@gmail.com", "akinyi@gmail.com"]
    var status = await Promise.all(userEmails.map(emails => sendEmails(email)))
    console.log("Status=>", status)
}
sendEmail();