import userStore from '../../store/user-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    //renderización/creacion de botones
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';
    
    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = userStore.getCurrentPage();

    //añadirlos a element
    element.append( prevButton, currentPageLabel, nextButton );


    nextButton.addEventListener('click', async() => {
        await userStore.loadNextPage();
        currentPageLabel.innerText = userStore.getCurrentPage();
        renderTable( element );
    });

    prevButton.addEventListener('click', async () => {
        await userStore.loadPreviousPage();
        renderTable(element);
    });

}

