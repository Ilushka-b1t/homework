<?php

function counterEven($arr){
    for ($i = 0; $i < count($arr); $i++){
        if ($arr[$i] % 2 === 0){
            echo "$arr[$i] ";
        }
    }
}


counterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);