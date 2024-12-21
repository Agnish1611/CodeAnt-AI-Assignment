import { AuthProviders, NavItem, Repository, Stat } from "./types";

export const stats:Stat[] = [
    { value: "30+", label: "Language Support" },
    { value: "10K+", label: "Developers" },
    { value: "100K+", label: "Hours Saved" },
];

export const authProviders: AuthProviders = {
    SAAS: [
        { method: "Sign in with Github", icon: "/icons/github.png" },
        { method: "Sign in with Bitbucket", icon: "/icons/bitbucket.png" },
        { method: "Sign in with Azure Devops", icon: "/icons/azure_devops.png" },
        { method: "Sign in with GitLab", icon: "/icons/gitlab.png" },
    ],
    Self: [
        { method: "Self hosted GitLab", icon: "/icons/gitlab.png" },
        { method: "Sign in with SSO", icon: "/icons/sso.png" },
    ],
};

export const NAV_ITEMS: NavItem[] = [
    { icon: "/icons/repositories.png", title: "Repositories" },
    { icon: "/icons/aicodereview.png", title: "AI Code Review" },
    { icon: "/icons/cloud.png", title: "Cloud Security" },
    { icon: "/icons/howtouse.png", title: "How to Use" },
    { icon: "/icons/settings.png", title: "Settings" },
];

export const OTHER_NAV: NavItem[] = [
    { icon: "/icons/contact.png", title: "Support" },
    { icon: "/icons/logout.png", title: "Logout" },
];

export const REPOSITORIES: Repository[] = [
    {
        title: "design-system",
        visibility: "Public",
        language: "React",
        size: "7320 KB",
        updates: "Updated 1 days ago",
    },
    {
        title: "codeant-ci-app",
        visibility: "Private",
        language: "Javascript",
        size: "5871 KB",
        updates: "Updated 2 days ago",
    },
    {
        title: "analytics-dashboard",
        visibility: "Private",
        language: "Python",
        size: "4521 KB",
        updates: "Updated 5 days ago",
    },
    {
        title: "mobile-app",
        visibility: "Public",
        language: "Swift",
        size: "3096 KB",
        updates: "Updated 6 days ago",
    },
    {
        title: "e-commerce-platform",
        visibility: "Private",
        language: "Java",
        size: "6210 KB",
        updates: "Updated 3 days ago",
    },
    {
        title: "blog-website",
        visibility: "Public",
        language: "HTML/CSS",
        size: "1876 KB",
        updates: "Updated 4 days ago",
    },
    {
        title: "social-network",
        visibility: "Private",
        language: "PHP",
        size: "5432 KB",
        updates: "Updated 7 days ago",
    }
];