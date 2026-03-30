<?php

function contentOutput($tag, $content){
    echo "<$tag>$content</$tag>";
}

contentOutput("p", "Хочу спать");