// Model Profesor
(function(){
	self.Profesor = function(name, age){
		this.name = name
		this.age = age
		this.plumones = []
		this.tapa = null
	}

	Profesor.prototype = {
		up: function(){
			console.log('Salando para arriba')
		},
		down: function(){
			console.log('Abajo')
		},
		get elements(){
        // Pensando en Futuro
			var elements = this.plumones.map(function (plumon){
				return plumon
				// return plumon * 10
			})

			elements.push(this.tapa)
			return elements
		}
	}
})()

// Model Office
(function(){
	self.Office = function(width, height){
		this.width = width
		this.height = height
	}

	Office.prototype = {
		color: function(){
			console.log('Esta oficina es de un color ')
		}
	}
})()

// Model Course
(function(){
	self.Curso = function(name_course, profesor, oficina){
		this.name = name_course
		this.profesor = profesor
		this.oficina = oficina
	}

	Curso.prototype = {
		get nameCourse(){
			return this.name.toUpperCase()
		},
		set nameCourse(new_nameCourse){
			if(new_nameCourse === ''  || (typeof new_nameCourse === 'undefined'))  {
				return
			}
			this.name = new_nameCourse
		},
		info: function(){
			this.nameCourse = 'ruby'
			console.log(`Curso Profesional de ${this.nameCourse}, Profesor: ${this.profesor.name}, La oficina es de, alto: ${this.oficina.height} y ancho: ${this.oficina.width}`)
		}
	}
})()

window.addEventListener('load', main)

// Controller App
var joel = new Profesor('Joel Gonzales', 19)
var depa = new Office(500,700)
var JavaScript = new Curso('JavaScript', joel, depa)

// View Data on Console

window.addEventListener('load', main)

function main(){
	JavaScript.info()
}