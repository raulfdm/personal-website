import Contact from '../models/Contact'

export default class MailService {

	static sendEmail = (data: Object): Promise<any> => {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: 'https://mail-raulfdm.herokuapp.com/mail',
				method: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(data)
			})
				.done(response => resolve(response))
				.fail(error => reject(error))
		})

	}
}
