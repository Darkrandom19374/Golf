
var canvas= new fabric.Canvas("myCanvas");

ball_y= 0;
ball_x= 0;
hole_y= 400;
hole_x= 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
    fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_objet= Img;
		hole_objet.scaleToWidth (50);
		hole_objet.scaleToHeight (50);
		hole_objet.set ({
			top: hole_y,
			left: hole_x
		});
		canvas.add (hole_objet)
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_objet= Img;
		ball_objet.scaleToWidth (50);
		ball_objet.scaleToHeight (50);
		ball_objet.set ({
			top: ball_y,
			left: ball_x
		});
		canvas.add (ball_objet)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((ball_x == hole_x) && (ball_y == hole_y)) {
		canvas.remove (ball_objet);
		document.getElementById ("hd3").innerHTML= "!Lo hiciste¡";
		document.getElementById ("myCanvas").style.borderColor= "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >=0)
		{
            ball_y= ball_y - block_image_height;
			console.log ("altura de la imagen: " - block_image_height);
			console.log ("cuando se preciona la flecha hacia arriba, x= " + ball_x + "y=" + ball_y);
			canvas.remove (ball_objet);
            new_image ();
		}
	}

	function down()
	{
		if (ball_y <=450)
		{
            ball_y= ball_y + block_image_height;
			console.log ("altura de la imagen: " + block_image_height);
			console.log ("cuando se preciona la flecha hacia abajo, x= " + ball_x + "y=" + ball_y);
			canvas.remove (ball_objet);
            new_image ();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
            ball_x= ball_x - block_image_width;
			console.log ("anchura de la imagen: " + block_image_width);
			console.log ("cuando se preciona la flecha hacia la izquierda, x= " + ball_y + "y=" + ball_x);
			canvas.remove (ball_objet);
            new_image ()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x= ball_x + block_image_width;
			console.log ("anchura de la imagen: " + block_image_width);
			console.log ("cuando se preciona la flecha hacia la derecha, x= " + ball_y + "y=" + ball_x);
			canvas.remove (ball_objet);
            new_image ()
		}
	}
	
}

