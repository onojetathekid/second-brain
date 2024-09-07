variable "map_type" {


}

types:

string --> "this is a string"
number --> 23
bool --> true or false
list --> ["element0","element1"]


}list(string) = ["list0", "list1", "list2"]

map(string) = {
  name = "Bryant"
  day = "Friday"
}


variable "string" {
  type = number
  description = "Slim thick chic's"
  default = ["element0", "element1"]
}

// lists can have duplicate elements
variable "list" {
  type = list
  description = "A list of Strings"
  default = ["element0", "element1", "element2"]
}

// set is similar to list, difference is the values(elements) have to be unique
variable "set" {
  type = set(string)
  description = "The elements must be unique"
  default = ["elem 0", "elem 1", "elem 2"]
}
// Key Value Pairs
varialble "map" {
  type = map(string)
  desciption = "A map of element"
  default = {
    name = "Bryant"
    another-name = "The Kid"
    name3 = "El Pollo Loco"
  }
}

//Map of Map of strings
variable "map" {
  type = map(map(sting))
  desciption = "Maof of a map containing strings"
  default = {
    groups = {
      name1 = "Bryant"
      name2 = "The Kid"
    }
    teams = {
      name = "Hometyme"
      name2 = "Yacht Club"
    }
  }
}


Map of map of strings
cars -> model - name of the model.


lexus : model0 : name0 = "ls460"
lexus : model1 : name1 = "es-350"
ford : model2 : name2 = "f-150"


variable "one_map" {
  type = map(map(string))
  description = "Types of Cars"
  default = {
    lexus = {
      model0 = "logs460"
      model1 = "es-350"
    }
    ford = {
      model0 = "f-150"
      model1 = "explorer"
    }
  }
}


//looping

for_each = var.Cars
  each.key


  locals {
  vpcs = tomap({
    eu = {
        name = "eu-net"
        subnet = "10.153.0.0/24"
        region = "europe-west3"
    }
    us = {
        name = "us-net"
        subnet = "10.177.0.0/24"
        region = "us-west2"
    }
  })
}
