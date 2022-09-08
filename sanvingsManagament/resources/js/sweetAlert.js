(async () => {
    const {value: pais} = Swal.fire({
        title:"Bienvenido a Savings Managament",
        text: "Elige tu pais",
        // html:
        icon: "question",
        confirmButtonText: "Seleccionar",
        // footer:
        // width:
        padding: "1rem",
        // background:
        // grow:
        backdrop: "true",
        // timer:
        // timerProgressBar:
        // toast:
        position: "center",
        allowOutsideClick: "true",
        allowEscapeKey: "false",
        allowEnterKey: "false",
        stopKeydownPropagation: "false",
    
        input: "select",
        inputPlaceholder: "País",
        // inputValue:
        inputOptions: {
            argentina: "Argentina",
            otros: "Otros"
        }
    
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
    
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });

    if (pais){
       Swal.fire({
            title: "Seleccionaste ${pais}"
       });
    }

})()

