import CategoryLink from "./CategoryLink";

const NavLinks = async () => {
const res = await fetch(
"https://openapi.programming-hero.com/api/bazardor/categories"
);

const data = await res.json();

return ( <div className="border-y-2 border-gray-100"> <div className="container mx-auto flex gap-4 overflow-x-auto py-4">
{data.map((nav) => ( <CategoryLink key={nav.id} nav={nav} />
))} </div> </div>
);
};

export default NavLinks;
