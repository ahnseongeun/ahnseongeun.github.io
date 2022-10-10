export default function customAjax(method, url, obj) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    if(method === 'PUT' || method === 'POST') {
        xhr.setRequestHeader('Content-type', 'application/json');
    }
    xhr.send(JSON.stringify(obj || null));
    const promise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = (event) => {

            if(xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    const statusCode = xhr.status;
                    reject(new Error(`Error code: ${statusCode}`));
                }
            }
        };
    });

    return promise;
};