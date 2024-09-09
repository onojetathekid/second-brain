# Kubernete GKE Click Ops

Kubernetes cluster
create
8 steps to set up GKE
Kubernetes Cluster - create
Name = gke-theo-friday-1
Region =  us=central1
Next: Fleet Registration
check Register cluster to fleet
Next: Networking
No changes
Next: Advanced Settings
Service Mesh - Enable Service Mesh
  Pop-up window: changes needed = make changes
Next: Review and create
Create cluster

# Once created on the Clusters Overview
  scroll all the way to the right for the ":" 3 dots for Actions
  choose connect
  copy command
  past into gdk/git bash/google console terminal
  gcloud init
  gcloud auth list
  gcloud info
  gcloud components install gke-gcloud-auth-plugin (Check for a new Window)
  gcloud container clusters get-credentials autopilot-cluster-1 --region us-central1 --project deep-clock-425817-t0
# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# :::::: connect command includes your project ::::::::::::::::::::::::::::::::::
# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
gcloud container clusters get-credentials lizzo-01 --region us-central1 --project flemingfridays-427121
2024 July 12 “gcloud container clusters get-credentials gke-lizzo-rimming --region us-central1 --project newbrazil”
# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  kubectl config current-context
  * Basic Kubectl commands


  kubectl config view
  kubectl config get-contexts
  kubectl config current-context  
  kubectl explain pods  
  kubectl get services
  kubectl get pods --all-namespaces
  kubectl get pods
