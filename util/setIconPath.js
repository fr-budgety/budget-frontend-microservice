const DEFAULT_ICON_PATH = '/assets/images/categoryIcons/';
const DEFAULT_ICON_EXTENSION = '.svg';

//Setting icon path for the icons found in the category model
export const setIconPath = (iconName) => {
    const iconPath = `${DEFAULT_ICON_PATH}${iconName}${DEFAULT_ICON_EXTENSION}`;
    return iconPath
}