# jQuery ListClass

Add a class to any HTML list (`<ul>` or `<ol>`) depending on its number of elements (`<li>`).

## Usage
Just include the script and call it on your list:

    $("ul").listclass();

## Options

    $("ul").listclass({
      item_limit:       "4",           // when to start adding the class
      class_name:       "multi-column" // name of the class to add 
    });