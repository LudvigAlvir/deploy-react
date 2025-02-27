export function Dog() {
  return (
    <div>
      <p>Image from url</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
        alt=""
      />
      <p>image from component image</p>
      <img src="./cool_dog.jpg" alt="" />
      <p>image from public</p>
      <img src="/public/cool_dog.jpg" alt="" />
    </div>
  );
}
