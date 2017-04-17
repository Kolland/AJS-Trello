function CardDetailController() {

}

app.component('cardDetail', {
  templateUrl: 'js/components/cardDetail/cardDetail.html',
  controller: CardDetailController,
  bindings: {
    card: '='
  }
});
