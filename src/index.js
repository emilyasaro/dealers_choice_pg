import axios from 'axios';
// import html from 'html-template-tag';

const monthList = document.querySelector('#month-list');
const recipeList = document.querySelector('#recipe-list');


const renderMonths = (months) => {
  const htmlResult = months.map( month => `
<li>
  <a href='#${month.id}'>
    ${month.name}
  </a>
</li>`).join('');
monthList.innerHTML = htmlResult;
}

const renderRecipes = (recipes) => {
  const htmlResult = recipes.map( recipe => `
<li>
  <a href='#${recipe.id}'>
    ${recipe.name}
  </a>
</li>`).join('');
recipeList.innerHTML = htmlResult;
}

const init = async() => {
  try {
    const months = (await axios.get('/api/months')).data;
    const recipes = (await axios.get('/api/recipes')).data;
    renderMonths(months);
    renderRecipes(recipes);
  } catch (error) {
    console.log(error)
  }
}



init()
