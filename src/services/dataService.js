export const dataService = {
    getAboutDine,
    getHighlights
}

function getAboutDine() {
    return [
        {
            img: 'enjoyable-place-desktop',
            title: 'Enjoyable place for all the family',
            txt: 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
            direction: 'forward'
        },
        {
            img: 'locally-sourced-desktop',
            title: 'The most locally sourced food',
            txt: 'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
            direction: 'reverse'
        }
    ]
}

function getHighlights() {
    return [
        {
            img: 'menu-item1',
            title: 'Seared Salmon Fillet',
            txt: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.'
        },
        {
            img: 'menu-item2',
            title: 'Rosemary Filet Mignon',
            txt: 'Our prime beef served to your taste with a delicious choice of seasonal sides.'
        },
        {
            img: 'menu-item3',
            title: 'Summer Fruit Chocolate Mousse',
            txt: 'Creamy mousse combined with summer fruits and dark chocolate shavings.'
        }
    ]
}