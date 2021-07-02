export interface IAbout {
    description: string;
    skillsIcons: IAboutIcon[];
    hobbies: IAboutHobbies[];
}
export interface IAboutIcon {
    icon: string; 
    //title: string;
}
export interface IAboutHobbies {
    icon: string; 
    title: string;
}