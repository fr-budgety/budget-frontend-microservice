const DEFAULT_ICON_PATH = '/assets/images/categoryIcons/';
const DEFAULT_ICON_EXTENSION = '.svg';

//Setting icon path for the icons found in the category model
export const setIconPath = (iconName) => {
	let iconPath = '';
	if(typeof iconName === 'string'){
		iconPath = `${DEFAULT_ICON_PATH}${iconName}${DEFAULT_ICON_EXTENSION}`;
	} else {
		iconPath = `${DEFAULT_ICON_PATH}${iconName.icon}${DEFAULT_ICON_EXTENSION}`;
	}
	return iconPath;
};