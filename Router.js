import Controller from './Controller.js';

function getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : '';
    const [name, id] = hash.split('/');
    return {name, params: {id}}
}
function hadleHash(){
    const {name, params} = getRouteInfo();
    console.log(name, params);
    if (name) {
        const routeName = name + 'Route';
        Controller[routeName](params);
    }
}

export default {
    init(){
        addEventListener('hashchange', hadleHash);
        if(!location.hash){
            window.location.href =  '/#start';
        }
        hadleHash();
    }
}