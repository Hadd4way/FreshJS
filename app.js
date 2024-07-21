// Видео-курс

url = 'https://purpleschool.ru/course/javascript';

function breakdown(){
    let arr = url.split('://');
    let https = arr[0];
    if(https !== 'https' || https !== 'http'){
        return;
    }
    let domain = arr[1].split('/')[0];
    let path = arr[1].slice(arr[1].indexOf('/'))
    console.log(https,domain,path);
}

breakdown();

function breakdown2(){
    const [protocol, _,domain, ...path] = url.split('/');
    console.log(protocol.slice(0,protocol.length-1));
    console.log(domain);
    console.log('/'+path.join('/'));
}
breakdown2();