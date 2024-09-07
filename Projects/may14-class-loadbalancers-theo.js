Load Balanced managed VM's

Deploy
slect project
continue

Name
Labels(optional)
Region
Zone
Number of nodes

deploy


module "load_balanced_vms" {
  source  = "terraform-google-modules/load-balanced-vms/google"
  version = "~> 0.4"

  project_id  = "<PROJECT ID>"
  region = "us-central1"
  zone = "us-central1-a"
  nodes = "3"
  deployment_name = "load-balanced-vms"
}
