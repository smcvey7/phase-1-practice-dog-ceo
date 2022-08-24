console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
  .then((res) => res.json())
  .then((data) => data.message.forEach(link => {
    img = document.createElement('img');
    img.src = link;
    document.getElementById('dog-image-container').appendChild(img)
  })
  )

  fetch(breedUrl)
  .then(res => res.json())
  .then((data) => {
    for (type in data.message){
      if (data.message[type].length >0){
        for (spec of data.message[type]){
          li = document.createElement('li');
          li.innerText = `${spec} ${type}`;
          li.addEventListener('click', (e) => e.target.style.color = 'blue')
          document.getElementById('dog-breeds').appendChild(li);
        }
      }else{
      li = document.createElement('li');
      li.innerText = type;
      li.addEventListener('click', (e) => e.target.style.color = 'blue')
      document.getElementById('dog-breeds').appendChild(li);
      }
    }

    let selection = document.getElementById('breed-dropdown').value

    document.getElementById('breed-dropdown').addEventListener('change', () => {
      selection = document.getElementById('breed-dropdown').value
      console.log(selection)
      for (li of document.getElementById('dog-breeds').childNodes){
        if (li.textContent[0] === selection){
          li.classList = 'show'
        }else if (li.textContent[0] !== selection){
          li.classList = 'noShow'
        }
      }
    })
  })
})
