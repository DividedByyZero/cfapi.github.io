document.getElementById('btn').addEventListener('click' , loadData);

function loadData(){
    var see = document.getElementById("username").value;
    console.log(see);
    var xhr = new XMLHttpRequest();
    xhr.open('GET',`https://codeforces.com/api/user.info?handles=${see}`,true);
    xhr.onload= function(){
        if(this.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data);
            var fname = data.result[0].firstName;
            var lname = data.result[0].lastName;
            var organization = data.result[0].organization;
            var rank = data.result[0].rank;
            var rating = data.result[0].rating;
            var im = data.result[0].titlePhoto;
            var text = `<tr>
                <td><img src=${im} height="100" width="100"></td>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${organization}</td>
                <td>${rank}</td>
                <td>${rating}</td>
            </tr>`
            document.getElementById('table').innerHTML+=text;
        }else{
            console.log("Not Found");
        }
    }
    xhr.send();
}