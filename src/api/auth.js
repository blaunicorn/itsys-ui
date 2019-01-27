import request from '@/utils/request'
import baseUrl from './baseUrl'

export default { 
	qywxAuthUrl: baseUrl + '/wx/a',
	login( username , password ) {
		return request({
	    url: baseUrl + '/login/validate',
	    method: 'post',
	    data: {
	      username,
	      password
	    }
	  })
	},
	getUserInfo(){
		return request({
			url: baseUrl + '/user/getUserInfo',
			method: 'get'
		})
	}
}