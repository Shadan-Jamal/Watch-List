const search_bar=document.querySelector('input[type="search"]')
const images=document.querySelectorAll('.img')
const caption=document.querySelectorAll('p')
const filter_items=document.getElementsByClassName('dropdown-item')
const filter_bar=document.getElementById('filter-bar');

    //for searching a specific item
    search_bar.addEventListener("keydown", (e)=>{
        if(e.code=="Enter"){
            e.preventDefault();
            for(let i=0;i<images.length;i++){
                if(e.target.value.length == 0){
                    images[i].style.visibility="visible";
                    caption[i].style.visibility="visible";
                }
                else if(e.target.value != images[i].dataset.text){
                    console.log(e.target.value)
                    images[i].style.visibility="hidden";
                    caption[i].style.visibility="hidden";
                }
            }
        }

        else if(e.code == "Backspace"){
            for(let i=0;i<images.length;i++){
            images[i].style.visibility="visible";
            caption[i].style.visibility="visible";
            }
        }
    });

    //to add genre to the filter bar
    function addgenre(){
    filter_bar.innerText=""
        for(let i=0;i<filter_items.length;i++){
            filter_items[i].addEventListener('click',(e)=>{
                filter_bar.innerText=e.target.innerText;
            });
        }
    }

    //for filtering items
    for(let i=0;i<filter_items.length;i++){
        filter_items[i].addEventListener('click', (e)=>{

        for(let j=0;j<caption.length;j++){
            let filter_index=i
            let caption_index=j
                    
            for(let x of images.keys()){
                if(x!=filter_index && x!=caption_index){
                    images[j].style.visibility="hidden"
                    caption[j].style.display="none"
                }
            }

            if(filter_items[filter_index].innerText == caption[caption_index].innerText.substring(7,)){
                images[caption_index].style.visibility="visible"
                caption[caption_index].style.visibility="visible"
            }
            }
        });
    }