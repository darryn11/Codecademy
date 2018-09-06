<!DOCTYPE html>
<html>
  <head>
    <title>Chore Door!</title>
    <link href="./style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type="text/css">
  </head>

  <body>
    <div class = 'header'>
      <img id = 'logo' src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg" alt = 'logo'>
    </div>
    <div class = 'title-row'>
      <table class = 'instructions-row'>
        <tr>
          <td class = 'instructions-number'>1</td>
          <td class = 'instructions-text'>Hiding behind one of these doors is the ChoreBot.</td>
        </tr>
        <tr>
          <td class = 'instructions-number'>2</td>
          <td class = 'instructions-text'>Your mission is to open all of the doors without running into the ChoreBot.</td>
        </tr>
        <tr>
          <td class = 'instructions-number'>3</td>
          <td class = 'instructions-text'>If you manage to avoid the ChoreBot until you open the very last door, you win!</td>
        </tr>
        <tr>
          <td class = 'instructions-number'>4</td>
          <td class = 'instructions-text'>See if you can score a winning streak!</td>
        </tr>
      </table>
      <img src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg' alt = 'star'>
      <p class = 'instructions-title'> instructions</p>
      <img src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg' alt = 'star'>
    </div>
    <div class = 'door-row'>
      <img id = 'door1' class = 'door' src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg' alt = 'door'>
      <img id = 'door2' class = 'door' src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg' alt = 'door'>
      <img id = 'door3' class = 'door' src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg' alt = 'door'>
    </div>
    <div id = 'start' class = 'start-row'>
      Good luck!
    </div>
    <script type = "text/javascript" src = "script.js"></script>
  </body>
</html>
