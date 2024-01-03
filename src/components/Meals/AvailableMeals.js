import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pav Bhaji',
        description: 'Maharashtrian Speciality',
        price: 150,
    },
    {
        id: 'm2',
        name: 'Misal',
        description: 'Kolhapuri Special',
        price: 150,
    },
    {
        id: 'm3',
        name: 'Pizza',
        description: 'Italian classic',
        price: 300,
    },
    {
        id: 'm4',
        name: 'Butter Chicken',
        description: 'North Indian Special',
        price: 550,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    );

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;