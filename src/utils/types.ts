export interface NavItem {
    icon: string;
    title: string;
}

export interface Repository {
    title: string;
    visibility: "Public" | "Private";
    language: string;
    size: string;
    updates: string;
}

export type SigninMode = "SAAS" | "Self";

export interface AuthProvider {
    method: string;
    icon: string;
}

export interface AuthProviders {
    SAAS: AuthProvider[];
    Self: AuthProvider[];
}

export interface AuthButtonProps {
    signinMethod: string;
    icon: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface NavigationItemProps extends NavItem { }

export interface RepositoryCardProps extends Repository { }

export interface SidebarProps {
    menuOpen: boolean;
    onMenuToggle: () => void;
}

export interface UserNavigationProps {
    menuOpen: boolean;
}