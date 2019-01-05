var socket = io();
		//Escuchar suscesos
		socket.on('connect',function(){//Cuando se conecte
			console.log('Conectado al servidor');
		});

		socket.on('disconnect',function(){//Cuando perdemos conexion con el servidor
			console.log('Perdimos conexion con el servidor');
		});
		
		//Enviar informacion al servidor
		socket.emit('enviarMensaje',{
			usuario:'Ricardo',
			mensaje:'Holaa'
		},function(resp){
			console.log('Respuesta ',resp);
		});

		//Escuchar informacion
		socket.on('enviarMensaje',function(mensaje){
			console.log('Servidor : ',mensaje);
		});
