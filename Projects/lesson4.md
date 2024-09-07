```js

// Create 4 VPCs, 4 Subnets, 4 Instances
// using looping
// EU, US-West, US-East, Asia
//
// map(map(string))


variable "vpcs" {
  type = map(map(string))
  default = {
    eu-vpc = {
      instance = "eu-vpc"
      subnet = "eu-subnet"
      cidr = "10.178.0.0/24"
      region = "europe-west1"
      zone = "europe-west1-b"
    }
    us-west-vpc ={
      instance-name = "us-west-vm"
      name          = "us-west-subnet"
      cidr          = "172.16.179.0/24"
      region        = "us-west1"
      zone          = "us-west1-b"

    }
    us-east-vpc = {
      instance-name = "us-east-vm"
      name          = "us-east-subnet"
      cidr          = "172.16.178.0/24"
      region        = "us-east1"
      zone          = "us-east1-b"
    }
    asia-vpc = {
      instance-name = "asia-vm"
      name          = "asia-subnet"
      cidr          = "192.168.178.0/24"
      region        = "asia-southeast1"
      zone          = "asia-southeast1-b"
    }
  }
}
