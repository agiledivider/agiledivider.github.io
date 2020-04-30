const APP_ID = '3074457347777696602';
const URL_ROOT = 'https://cogitatio.github.io/miro-plugin/mrpg/';
const CARDCOUNT = 524;

async function placeCardDeck() {
    vp = await miro.board.viewport.get();
    let deck = {
      x: vp.x + vp.width/2,
      y: vp.y + vp.height/2
    }
    await miro.board.widgets.create({
      type: "image",
      url: URL_ROOT + "cards/mrpg-back.jpg",
      metadata: {
        [APP_ID]: {
          deck: true,
          active: false
        }
      },
      x: deck.x,
      y: deck.y
    })
}

async function activateCardDecks() {
  let decks = await miro.board.widgets.get({metadata: { [APP_ID]: { deck: true}}});
  decks.forEach((deck, i) => {
    miro.board.widgets.update({
      id: deck.id,
      metadata: {
        [APP_ID]: {
          active: true
        }
      },
      url: "https://cogitatio.github.io/miro-plugin/mrpg/cards/mrpg-back-2.jpg"
    })
  });

}
