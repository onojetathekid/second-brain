


data "google_secret_manager_secret_version" "vpn_secret" {
  secret  = "vpn-shared-secret"
  version = "latest"
}

gcloud secrets create vpn-shared-secret --replication-policy="automatic"
echo -n "secret" | gcloud secrets versions add vpn-shared-secret --data-file=-

remo's code for creating the vpn secret:

data "google_secret_manager_secret_version" "vpn_secret" {
  secret  = "vpn-shared-secret"
  version = "latest"
}

gcloud secrets create vpn-shared-secret --replication-policy="automatic"
echo -n "secret" | gcloud secrets versions add vpn-shared-secret --data-file=-
