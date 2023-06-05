export function createSummaryItem(category, icon, score) {
    
    const summaryItem = document.createElement('li')
    summaryItem.className = "summary__item"
    summaryItem.innerHTML = `
    <span class="summary__icon"><img src="${icon}" aria-hidden="true"></span>
    <span class="summary__item-title">${category}</span>
    <span class="summary__item-score">${score}<span class="summary__item-high-score"> / 100</span></span>`
    return summaryItem
}