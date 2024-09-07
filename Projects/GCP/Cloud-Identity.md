## Cloud Identity
Device Management:
  Mobile Devices-tablet, phone, laptop
  BYOD:
    -Work Policies
    -Whitelist applications
    -managed apps on IOS devices
    -data and identity
    -inventory
    -stole- can be wiped of corp. data
    -auditing
    -enforce passcodes
Security:
    2-STEP verification
    :know & have
        :password
        :usrnm
        :2FA
SSO - Single Sign On:(users access many apps with 1 sign on)
  Single point of authentication from an Identity provider(IDP).
    Google:(Single Dashboard)
      :Third party applications
      :On-premise
      :Custom applications  
Reporting:
    Audit Logs:
      logins:
      groups:
      devices:
      tokens:
          Export:
            Big-Query
              Reports:
                  Security
                  applications
                  Activity

Directory Management:
  User Profiles, email, groups, external contact, gcds  


  ** GCDS - Google Cloud Directory Sync:
        Active Directory - LDAP Server
        Azure AD
:::::::::::::::::::
AD

Federation Services (ADFS):
    Process to Link multiple Ident.Managment.Systems, SSO SMAL, Oauth, JSON .
    Sync GCDS(Cloud Directory Services) to import one way sync from AD Domain Information.
    Other Google services - use ADFS for SSO
