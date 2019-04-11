import axios from 'axios';
// var host  = "http://api.netallin.com/"
function request(params){
    if(params.method == 'get'){
        console.log(1)
        return new Promise((resolve,reject)=>{
            console.log('request',params)
            axios.get(params.url,{params:params.params}).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    if(params.method == 'post'){
        return new Promise((resolve,reject)=>{
            axios.post(params.url,params.params).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    if(params.method == 'put'){
        return new Promise((resolve,reject)=>{
            axios.put(params.url,params.params).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    if(params.method == 'delete'){
		return new Promise((resolve, reject) => {
			console.log('request. ',params)
			axios.delete(params.url, {data:params.params})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}

}

export default{
    request
}