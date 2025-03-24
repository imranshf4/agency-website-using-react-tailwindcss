// image url for assets folder

function imageUrl(name){
    return new URL(`../assets/about/plan/${name}`,import.meta.url).href;
}

export {imageUrl};