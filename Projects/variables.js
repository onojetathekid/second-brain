

variable types:

string = "this is a string"
number = 22
bool = true or False



list(string) = ["list0", "list1", "list2"]

map(string) = {
  name = "Bryant"
  day = "Friday"
}

map.day

variable "string_trype" {
  type = number
  desciption = "number type"
  default = 232
}

variable "list_typ" {
  type = list(string)
  description = "A list of Strings"
  default = ["element0", "element1"]
}

varialble "map_type" {
  type = map(string)
  desciption = "similar to dictionary in Python"
  default = {
    name = "Marvin"
    day = "first day"
  }
}

varialble "vpc" {
  type = map(map(sting))
  description = "map of a map of strings"
  default = {
    us_east_vpc = {
      name = "us-east-peer"
    }
    subnet {
      name = "us-east-peer-subnet"
      ip_cidr_range = "10.2500.20.0/24"
    }
  }
}

var.vpc.us_east_vpc.name # call the vpc name
var.vpc.subnet.name
