import { Categories } from "./categories";

const CategoryList = () => {
    Categories.map((category, index) => {
        let data = {
            id: index,
            category: category.name
        }
        return data
    })
}
export default CategoryList;