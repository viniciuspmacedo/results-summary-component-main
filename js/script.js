import { getSummaryList } from "./apiConection.js";
import { createSummaryItem } from "./createSummaryItem.js";

try {
const lista = await getSummaryList()

function showsSummaryList(list) {
    const summaryListElement = document.querySelector('[data-summary-list]');

    list.forEach(element => {
        summaryListElement.appendChild(
            createSummaryItem(element.category, element.icon, element.score))
    })
}

showsSummaryList(lista)
} catch {
    const errorElement = document.querySelector('[data-error]');
    errorElement.innerText = "Sorry!\n Bad server conection.";
}
