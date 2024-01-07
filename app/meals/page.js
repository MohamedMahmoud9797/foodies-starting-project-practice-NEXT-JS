import Link from 'next/link'
import React, { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/Meals/Meals-grid'
import { getAllMeals } from '@/lib/meals'


async function  Meals() {
  const meals = await getAllMeals()
  return (
    <MealsGrid meals={meals} />
  )
}

export default   function page() {
  return (
    <>


    <header className={classes.header}>
    <h1>
      Delicious meals, created
      <span className={classes.highlight}>by you</span>
    </h1>
    <p>
      Choose your favorite recipe and cook it yourself. It is easy and fun!
    </p>
    <p className={classes.cta}>
      <Link href="/meals/share">
        Share Your Favorite Recipe
      </Link>
    </p>
  </header>
  <main className={classes.main}>
  <Suspense fallback={<div className={classes.loading}>
      <h1>Loading...</h1>
    </div>}>
      <Meals />
    </Suspense>
      </main>

  </>
  )
}
