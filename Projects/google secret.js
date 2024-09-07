data "google_secret_manager_secret_version" "keytunnel" {
  secret  = "vpn-key"
  version = "latest"
}
# gcloud secrets create vpn-shared-secret --replication-policy="automatic"
# echo -n "Password" | gcloud secrets versions add vpn-shared-secret --data-file=-
