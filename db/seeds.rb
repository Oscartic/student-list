# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Student.destroy_all
ActiveRecord::Base.connection.execute("ALTER SEQUENCE STUDENTS_id_seq RESTART WITH 1")
Student.create!(rut: '23.002.001-1', first_name:"Carlos", last_name:"Lopez", course:"Matemáticas", number_list: 1, is_present:true )
Student.create!(rut: '23.122.132-3', first_name:"Dario", last_name:"Donoso", course:"Matemáticas", number_list: 2, is_present:true )
Student.create!(rut: '24.253.187-k', first_name:"Camila", last_name:"Deppaul", course:"Matemáticas", number_list: 3, is_present:true )
Student.create!(rut: '26.987.951-9', first_name:"Natalia", last_name:"Marsupial", course:"Matemáticas",  number_list: 4, is_present:true )