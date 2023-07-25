var slideIndex = 1;
            var n = 1;
            var ejeT;
            var position;
            startSlides(n);
            
            //Detener las imágenes
            function stop()
            {
                clearTimeout(ejeT);
            }
            
            //Reanudar las imágenes desde donde se detuvo
            function resume()
            {
                startSlides(position);
            }
            
            //Botones anterior/siguiente
            function plusSlides(x)
            {
                startSlides(slideIndex = slideIndex + x);
            }
            
            //Indica el inicio de la animación (Ej. img1 o img2, etc.)
            function startSlides(n)
            { 
                clearTimeout(ejeT); //Detiene el bucle
                slideIndex = n;
                showSlides();
                
                //Carrucel
                function showSlides()
                {
                    var i;
                    var slides = document.getElementsByClassName("mySlides");
                    var dots = document.getElementsByClassName("dot");
                    
                    //Esonde todas las imagenes y desactiva todos los círculos
                    for (i = 0; i < slides.length; i++)
                    {
                        slides[i].style.display = "none";
                        dots[i].className = dots[i].className.replace(" active", "");
                    }
                    
                    if(slideIndex > slides.length) {slideIndex = 1} //Sigue el bucle desde el inicio
                    if(slideIndex < 1) {slideIndex = slides.length} //Regresa a la última imagen si da "amterior" en la primera imagen
                    slides[slideIndex-1].style.display = "block"; //Muestra solo la imagen en la posición slideIndex-1 del arreglo
                    dots[slideIndex-1].className += " active"; //Activa el círculo en la misma posición que la imagen mostrada
                    slideIndex++;
                    position = slideIndex; //Guarda la posición actual del carrucel, en caso de pausarlo y volverlo a reanudar
                    ejeT = setTimeout(showSlides,4000); //Crea el bucle
                }
            }










