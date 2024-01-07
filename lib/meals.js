import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getAllMeals = () => {
    // Simulate a delay with setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
            // Assuming db is a SQLite database connection
            const result = db.prepare('SELECT * FROM meals').all();
            resolve(result);
        }, 2000); // Simulating a 2-second delay

    });
};
