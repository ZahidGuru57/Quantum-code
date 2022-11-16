async function fetchPosts(){
    try{
    const fetchResult = await fetch(`${BASE_URL}/posts`,{
        method: "GET"
    });
    const data = await fetchResult.json();
    console.log(data);
    }catch (err){
        console.log(err);
    }
}

fetchPosts();