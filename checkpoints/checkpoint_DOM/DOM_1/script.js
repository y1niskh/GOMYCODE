const cards = document.querySelectorAll(".card");
const Tprice =document.querySelector(".total")
cards.forEach((card) => {
  const ajoute = card.querySelector(".fas.fa-plus-circle");
  const enleve = card.querySelector(".fas.fa-minus-circle");
  const trach = card.querySelector(".fas.fa-trash-alt");
  const heart = card.querySelector(".fas.fa-heart");
  const quant = card.querySelector(".quantity");
    const price = card.querySelector(".unit-price")  
    
    var quantity = 0;
    const priceValue = parseFloat(price.textContent)

    function updateprice() {
        let total = 0;
        cards.forEach((c) => {
            const q = parseInt(c.querySelector(".quantity").textContent);
            const p = parseFloat(c.querySelector(".unit-price").textContent);
            total += q * p;
        })
      Tprice.textContent = total+ " $"
    }

    function addarticle() {
        quantity++;
        console.log(quantity);
        quant.innerHTML = quantity;
        updateprice()
    }
  ajoute.addEventListener("click", addarticle);

  function del1article() {
      if (quantity > 0) {
        quantity--;
    console.log(quantity);
    quant.innerHTML = quantity;
      }
      updateprice()
  }
    enleve.addEventListener("click", del1article);
    
    function DELarticle() {
        quantity=0
        quant.innerHTML = 0;
        updateprice()
  }
    trach.addEventListener("click", DELarticle);
    
    function likearticle() {
    heart.classList.toggle("liked");
  }
    heart.addEventListener("click", likearticle);
});
