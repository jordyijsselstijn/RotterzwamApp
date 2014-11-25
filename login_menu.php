<?php

if (!isset($_SESSION['loggedIn']))
{
    echo '
    
    <div class="top-bar"><img src="images/key-256.png" alt="admin-key" id="admin" width="25px"></div>

    <div class="login top-bar hidden" id="login-bar">
        <form action="" method="POST">
            <label for="username">Username</label>
            <input type="text" name="username" id="username">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <button type="submit" name="login">Login</button>

        </form>
    </div>';
}
?>
    