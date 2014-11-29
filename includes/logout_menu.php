<?php

if (isset($_SESSION['loggedIn']))
{
    echo '
    
    <div class="top-bar"><img src="images/key-256.png" alt="admin-key" id="admin" width="25px"></div>

    <div class="login top-bar hidden" id="login-bar">
        <form action="" method="POST">
            <button type="submit" name="logout">Logout</button>
        </form>
    </div>';
}
?>