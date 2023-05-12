<template>

    <h1>Nous Contactez</h1>
    <div class="parallax"></div>

    <div style="height:450px;background-color:white;font-size:36px">
        <form action="submit-form.php" method="post">


            <label for="email">Email:</label>
            <input type="email" id="email" name="user_email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="email_message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>

</template>




<style scoped lang="scss">
h1{
    font-size: 2em;
    margin: 0 150px;
    text-align: center;
}

img{
    width: 100%;
    margin-top: 80px;
}

.container__p{
    margin: 50px 100px;
}

.parallax {
  /* The image used */
   background-image: url("assets/images/Aki-Chainsawman.jpg");

  /* Set a specific height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  // background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}



form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}

label {
  margin-top: 20px;
  font-weight: bold;
}

input,
textarea {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #EEB314;
}

textarea {
  height: 150px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #C85C10;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
    background-color: #EEB314;
    color: white;
}


</style>