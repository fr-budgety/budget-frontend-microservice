import {
	toastr
} from 'react-redux-toastr';


export const toastrOutput = (type, title, message) => {
	switch (type) {
	case 'success':
		return toastr.light(title, message,20000);
	case 'info':
		return toastr.info(title, message);
	case 'warning':
		return toastr.warning(title, message);
	case 'error':
		return toastr.error(title, message);
	default:
		return toastr.info(title, message);
	}
};