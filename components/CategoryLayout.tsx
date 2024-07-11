"use client"

function CategoryLayout({ mainContent, selector, category, handleSearch }:
    {
        mainContent: any,
        selector: any,
        category: string,
        handleSearch: any
    }) {
    return (
        <div className="p-24">
            <div className="flex">
                <h1 className="text-4xl font-bold">{category}</h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="text-black ml-4 p-2"
                    onChange={handleSearch}>
                </input>
                {selector}
            </div>
            {mainContent}
        </div>
    );
}

export default CategoryLayout;
