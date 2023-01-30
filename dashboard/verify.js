function Logout() {
    localStorage.removeItem("token");
}

window.onload = function() {checkToken()};
async function checkToken() {
    this.responsedata = await (await fetch('https://api-ensa-arnevangheel.cloud.okteto.net/users/me',
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'accept': 'application/json',
            },
        })).json();
    console.log(this.responsedata);
    if (this.responsedata["email"] == null) {
        window.location.href = "https://brievenbus.netlify.app/index.html";
        console.log("User not authenticated")
    }

}