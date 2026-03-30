<?php

function contentOutputMany($tag, $content, $number ){
    for ($i = 0; $i < $number; $i++){
    echo "<$tag>$content</$tag><br>";
    }
}

contentOutputMany("span", "Хочу выполнить свой первый заказ:)", 10);