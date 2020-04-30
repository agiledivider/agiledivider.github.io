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
          deck: true
        }
      },
      x: deck.x,
      y: deck.y
    })
}
