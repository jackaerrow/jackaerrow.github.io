
let btn = document.querySelector('button');
let div =document.querySelector('test');

btn.addEventListener('click', () = >{
    if(div.style.display==='none')
        div.style.display ='block';
    else {
        div.style.display = 'none';
    }
})


/*

var a;
function show_hide()
{
    if(a==1)
        {
            document.getElementsById("testing").style.alignContent.display="inline";
            return a=0;
        }
    else{
            document.getElementsById("testing").style.display="none";
            return a=1;
    }
}
*/