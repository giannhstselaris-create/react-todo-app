export interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;
}

export type ButtonProps = {
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    addClasses?: string;
}

