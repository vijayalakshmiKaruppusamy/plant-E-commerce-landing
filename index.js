const hamburger = document.querySelector(".hamburger");
const linkoptions = document.querySelector(".linkoptions");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    linkoptions.classList.toggle("active");

})
document.querySelectorAll(".linknumber").forEach(n  => n .addEventListener("click" , () => {
    hamburger.classList.remove("active");
    linkoptions.classList.remove("active");
}))

function validate()
{
    var mail = document.getElementById("email").value;
    var emailcondition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(emailcondition))
    {
        alert(mail);
    }
    else
    {
        document.getElementById("result").innerHTML = "Invalid Email-id";
    }
}

let horizontalimage = [
    {
       image : "Pictures/unsplash_fbAnIjhrOL4.png",
       imagename : "Fiddle leaf fig",
       price : "$110.99"
    },
    {
        image : "Pictures/unsplash_T0inbt7nRME.png",
        imagename : "Aloe Vera fig",
        price : "$110.99"
     },
     {
        image : "Pictures/unsplash_Ebwp2-6BG8E.png",
        imagename : "Strelitzia nicolai fig",
        price : "$110.99"
     },
     {
        image : "Pictures/unsplash_fbAnIjhrOL4.png",
       imagename : "Ficus microcarpa fig",
        price : "$110.99"
     },
     {
        image : "Pictures/unsplash_T0inbt7nRME.png",
       imagename : "Aloe Vera fig",
        price : "$110.99"
     }] ;

     var key="";
     for(var i=0;i<horizontalimage.length;i++)
     {   
             key += '<div class="horizontalimage">'   
             key += '<div class= "images"><img src = '+ horizontalimage[i].image + '></div>';
             key += '<div class= "caption">';
             key+= '<div class="image_name">' + horizontalimage[i].imagename + '</div>';
             key+= '<div class="price">' + horizontalimage[i].price + '</div></div></div>';
     }
     console.log(key);
     document.getElementById("horizontalimage").innerHTML = key;