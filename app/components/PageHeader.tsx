interface PageHeaderProps {
    title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}; 