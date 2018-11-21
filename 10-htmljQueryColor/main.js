$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  // const pEs = document.querySelectorAll('p'); // pEs : p tag elements
  // pEs.forEach(el => { 
  //   el.innerHTML =
  //     el.innerText.split(' ').map(str => `<span>${str}</span>`).join('')
  // })

  const $p = $('p');
  for(let i=0; i<$p.length; i++) {
    const decoText =
      $($p[i]).text().split(' ').map(str => `<span>${str}</span>`).join(' ');

    $($p[i]).html(decoText);
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  const $spans = $('span');

  setInterval(() => {
    for (let i = 0; i < $spans.length; i++) {
      const $span = $($spans[i]);
      const r = Math.random()*255
      const g = Math.random()*255
      const b = Math.random()*255
  
      $span.css('color', `rgb(${r}, ${g}, ${b})`)
    }
  }, 500);
});