const form= document.getElementById('form');
const photo = document.getElementById('blog_image');
const blogtitle = document.getElementById('blog_title');
const blogbody = document.getElementById('blog_body');
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const blogTitle = blogtitle.value;
  const blogBody = blogbody.value;

  localStorage.setItem('Title', blogTitle);
  localStorage.setItem('Body', blogBody);

  window.location.href = "index.html";
})
photo.addEventListener('change', () =>{
   const fr = new FileReader();
   fr.readAsDataURL(photo.files[0]);
   fr.addEventListener('load',() => {
   const url =fr.result;
   localStorage.setItem('my-image', url);
   
});
})