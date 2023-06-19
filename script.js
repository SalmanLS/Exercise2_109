function ship() {
    var username = document.getElementById("inputuser").value
    var role = document.getElementById("role").value
    var gender = document.querySelector("input[name=gender]:checked").value


    alert(
       "Welcome " + username + " ! " +
       "\nYou are a " + gender +
       "\nYour favourite role is " + role +
       "\nYou are now a member!"
    )
}