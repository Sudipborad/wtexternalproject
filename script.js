function likebutton(){
  const likeButton = document.getElementById('like-button');
  const likeCountElement = document.getElementById('like-count');
  let likeCount = 0;

  // Listen for clicks on the like button and increment the like count
  likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountElement.innerText = likeCount;
  });
}