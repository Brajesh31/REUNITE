

function createItemDiv(item) {
  const div = document.createElement('div')
  div.className = 'item'

  const image = document.createElement('img')
  image.src = item.imageURL

  const itemName = document.createElement('h2')
  itemName.textContent = item.itemName

  const description = document.createElement('p')
  description.innerHTML = `<strong>DESCRIPTION</strong> <br> ${item.description}`


  const location = document.createElement('p');
  location.innerHTML = `<strong>LOCATION</strong> <br> ${item.location}`

  // const claimersCount = document.createElement('p')
  // claimersCount.textContent = `Claimers: ${item.claimers.length}`

  div.appendChild(image)
  div.appendChild(itemName)
  div.appendChild(description)
  div.appendChild(location)

  div.addEventListener('click', () => {
    // Create and display a modal with additional item details
    // You can use a library like Bootstrap Modal or create a custom one
    // Populate the modal with item details like price, seller info, etc.
  });

  return div;
}


//function to render items on the page;
async function renderItems() {
  const container = document.getElementById('container')

  try {
    const response = await fetch('http://localhost:3000/item/getData?filter=${filter}&sort=${sortBy}');
    const data = await response.json()

    data.items.forEach((item) => {
      const itemDiv = createItemDiv(item)
      container.appendChild(itemDiv)
    })
  } catch (error) {
    console.log('Error rendering items:', error)
  }
}

// Call the renderItems function to display the items
renderItems()

// Add functionality to allow users to change filter and sort options
// For example, you can use select elements to set filter and sort parameters
const filterSelect = document.getElementById('filter-select');
const sortSelect = document.getElementById('sort-select');

filterSelect.addEventListener('change', () => {
    const selectedFilter = filterSelect.value;
    const selectedSort = sortSelect.value;
    renderItems(selectedFilter, selectedSort);
});

// Add user authentication and other features as needed

fetch('http://localhost:3000/api/images')
  .then((response) => response.json())
  .then((data) => {
    const imageContainer = document.getElementById('image-container')

    data.images.forEach((filename) => {
      const img = document.createElement('img')
      img.src = `/images/${filename}`
      img.alt = filename // Set alt attribute for accessibility

      imageContainer.appendChild(img)
    })
  })
  .catch((error) => {
    console.error('Error fetching images:', error)
  })


