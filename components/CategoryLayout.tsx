function CategoryLayout({ children, category }: { children: any, category: string }) {
    return (
        <div className="p-24">
            <h1 className="text-4xl font-bold">{category}</h1>
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    );
}

export default CategoryLayout;
