export default class JModel {
  constructor(data) {
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.value = data.value;
    this.category = data.category.title;
    this.wager = false;

    console.log("JModel.js is alive");
  }

  get Template() {
    return /*html*/ `
    <div class="row py-4">
    <div class="col-12 text-center"><h3>Category: '${this.category}'</h3></div>
  </div>

  <div class="row d-flex justify-content-center py-4">
    
    <div class="col-12 col-md-5 m-auto">
        <div class="card shadow" style="width: 100%;">
          <div class="card-body">
            <span class="d-flex justify-content-between text-muted">
              <h6>Question:</h6><h6 class="card-subtitle mb-2">${this.id}</h6></span>
            <p class="card-text"><h4>${this.question}</h4></p>
          </div>
        </div>
    </div>
    
    <div class="col-12 col-md-2 m-auto flex-column d-flex justify-content-center py-4">
        <button id="wager" class="btn btn-button btn-outline-dark" onclick="
        app.JsController.toggleWager()">Wager</button>
        <div class="text-center py-3"><h3>$${this.value}</h3></div>
        <button id="answer"class="btn btn-button btn-outline-info" onclick="app.JsController.toggleAnswer(true)">Answer</button>
        <div class="row py-4">
            <div class="col-4 text-center m-auto"><i class="far fa-thumbs-up active fa-2x text-success" onclick="app.JsController.isCorrect('Y',${this.value})"></i></div>
            <div class="col-4 d-flex justify-content-center m-auto">Correct</div>
            <div class="col-4 text-center m-auto"><i class="far fa-thumbs-down active fa-2x text-danger" onclick="app.JsController.isCorrect('N',${this.value})"></i></div>
        </div>

     </div>
    
    <div class="col-12 col-md-5 m-auto">
      <div class="card shadow" style="width: 100%;">
         <div class="card-body">
            <span class="d-flex justify-content-between text-muted">
              <h6>Answer:</h6><h6 class="card-subtitle mb-2">${this.id}</h6></span>
           <p class="card-text"><h4>${this.answer}</h4></p>
         </div>
       </div>
    </div>

  </div>
    `;

    /**
    [{
      "id":129380,
      "answer":"\u003Ci\u003EBrideshead Revisited\u003C/i\u003E",
      "question":"Evelyn Waugh created the Marchmain family for this novel",
      "value":1000,
      "airdate":"2015-01-08T12:00:00.000Z",
      "created_at":"2015-01-18T18:16:10.513Z",
      "updated_at":"2015-01-18T18:16:10.513Z",
      "category_id":17825,
      "game_id":null,
      "invalid_count":null,
      "category":{
        "id":17825,
        "title":"that's no lady",
        "created_at":"2015-01-18T18:16:09.190Z",
        "updated_at":"2015-01-18T18:16:09.190Z",
        "clues_count":10}
    }],
    [{
      "id":73348,
      "answer":"Tess",
      "question":"\"What a mommet of a maid!\" (mommet meaning scarecrow) is said of this Thomas Hardy title character",
      "value":1000,
      "airdate":"2006-02-01T12:00:00.000Z",
      "created_at":"2014-02-11T23:33:49.563Z",
      "updated_at":"2014-02-11T23:33:49.563Z",
      "category_id":3388,
      "game_id":null,
      "invalid_count":null,
      "category":{
        "id":3388,
        "title":"novel vocabulary",
        "created_at":"2014-02-11T23:03:30.477Z",
        "updated_at":"2014-02-11T23:03:30.477Z",
        "clues_count":20}
      }]
     */
  }
}
