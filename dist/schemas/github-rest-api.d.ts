export interface paths {
    readonly "/": {
        readonly get: operations["meta/root"];
    };
    readonly "/app": {
        readonly get: operations["apps/get-authenticated"];
    };
    readonly "/app-manifests/{code}/conversions": {
        readonly post: operations["apps/create-from-manifest"];
    };
    readonly "/app/hook/config": {
        readonly get: operations["apps/get-webhook-config-for-app"];
        readonly patch: operations["apps/update-webhook-config-for-app"];
    };
    readonly "/app/hook/deliveries": {
        readonly get: operations["apps/list-webhook-deliveries"];
    };
    readonly "/app/hook/deliveries/{delivery_id}": {
        readonly get: operations["apps/get-webhook-delivery"];
    };
    readonly "/app/hook/deliveries/{delivery_id}/attempts": {
        readonly post: operations["apps/redeliver-webhook-delivery"];
    };
    readonly "/app/installations": {
        readonly get: operations["apps/list-installations"];
    };
    readonly "/app/installations/{installation_id}": {
        readonly get: operations["apps/get-installation"];
        readonly delete: operations["apps/delete-installation"];
    };
    readonly "/app/installations/{installation_id}/access_tokens": {
        readonly post: operations["apps/create-installation-access-token"];
    };
    readonly "/app/installations/{installation_id}/suspended": {
        readonly put: operations["apps/suspend-installation"];
        readonly delete: operations["apps/unsuspend-installation"];
    };
    readonly "/applications/grants": {
        readonly get: operations["oauth-authorizations/list-grants"];
    };
    readonly "/applications/grants/{grant_id}": {
        readonly get: operations["oauth-authorizations/get-grant"];
        readonly delete: operations["oauth-authorizations/delete-grant"];
    };
    readonly "/applications/{client_id}/grant": {
        readonly delete: operations["apps/delete-authorization"];
    };
    readonly "/applications/{client_id}/grants/{access_token}": {
        readonly delete: operations["apps/revoke-grant-for-application"];
    };
    readonly "/applications/{client_id}/token": {
        readonly post: operations["apps/check-token"];
        readonly delete: operations["apps/delete-token"];
        readonly patch: operations["apps/reset-token"];
    };
    readonly "/applications/{client_id}/token/scoped": {
        readonly post: operations["apps/scope-token"];
    };
    readonly "/applications/{client_id}/tokens/{access_token}": {
        readonly get: operations["apps/check-authorization"];
        readonly post: operations["apps/reset-authorization"];
        readonly delete: operations["apps/revoke-authorization-for-application"];
    };
    readonly "/apps/{app_slug}": {
        readonly get: operations["apps/get-by-slug"];
    };
    readonly "/authorizations": {
        readonly get: operations["oauth-authorizations/list-authorizations"];
        readonly post: operations["oauth-authorizations/create-authorization"];
    };
    readonly "/authorizations/clients/{client_id}": {
        readonly put: operations["oauth-authorizations/get-or-create-authorization-for-app"];
    };
    readonly "/authorizations/clients/{client_id}/{fingerprint}": {
        readonly put: operations["oauth-authorizations/get-or-create-authorization-for-app-and-fingerprint"];
    };
    readonly "/authorizations/{authorization_id}": {
        readonly get: operations["oauth-authorizations/get-authorization"];
        readonly delete: operations["oauth-authorizations/delete-authorization"];
        readonly patch: operations["oauth-authorizations/update-authorization"];
    };
    readonly "/codes_of_conduct": {
        readonly get: operations["codes-of-conduct/get-all-codes-of-conduct"];
    };
    readonly "/codes_of_conduct/{key}": {
        readonly get: operations["codes-of-conduct/get-conduct-code"];
    };
    readonly "/emojis": {
        readonly get: operations["emojis/get"];
    };
    readonly "/enterprises/{enterprise}/actions/permissions": {
        readonly get: operations["enterprise-admin/get-github-actions-permissions-enterprise"];
        readonly put: operations["enterprise-admin/set-github-actions-permissions-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/permissions/organizations": {
        readonly get: operations["enterprise-admin/list-selected-organizations-enabled-github-actions-enterprise"];
        readonly put: operations["enterprise-admin/set-selected-organizations-enabled-github-actions-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}": {
        readonly put: operations["enterprise-admin/enable-selected-organization-github-actions-enterprise"];
        readonly delete: operations["enterprise-admin/disable-selected-organization-github-actions-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/permissions/selected-actions": {
        readonly get: operations["enterprise-admin/get-allowed-actions-enterprise"];
        readonly put: operations["enterprise-admin/set-allowed-actions-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups": {
        readonly get: operations["enterprise-admin/list-self-hosted-runner-groups-for-enterprise"];
        readonly post: operations["enterprise-admin/create-self-hosted-runner-group-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}": {
        readonly get: operations["enterprise-admin/get-self-hosted-runner-group-for-enterprise"];
        readonly delete: operations["enterprise-admin/delete-self-hosted-runner-group-from-enterprise"];
        readonly patch: operations["enterprise-admin/update-self-hosted-runner-group-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations": {
        readonly get: operations["enterprise-admin/list-org-access-to-self-hosted-runner-group-in-enterprise"];
        readonly put: operations["enterprise-admin/set-org-access-to-self-hosted-runner-group-in-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}": {
        readonly put: operations["enterprise-admin/add-org-access-to-self-hosted-runner-group-in-enterprise"];
        readonly delete: operations["enterprise-admin/remove-org-access-to-self-hosted-runner-group-in-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners": {
        readonly get: operations["enterprise-admin/list-self-hosted-runners-in-group-for-enterprise"];
        readonly put: operations["enterprise-admin/set-self-hosted-runners-in-group-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
        readonly put: operations["enterprise-admin/add-self-hosted-runner-to-group-for-enterprise"];
        readonly delete: operations["enterprise-admin/remove-self-hosted-runner-from-group-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runners": {
        readonly get: operations["enterprise-admin/list-self-hosted-runners-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runners/downloads": {
        readonly get: operations["enterprise-admin/list-runner-applications-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runners/registration-token": {
        readonly post: operations["enterprise-admin/create-registration-token-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runners/remove-token": {
        readonly post: operations["enterprise-admin/create-remove-token-for-enterprise"];
    };
    readonly "/enterprises/{enterprise}/actions/runners/{runner_id}": {
        readonly get: operations["enterprise-admin/get-self-hosted-runner-for-enterprise"];
        readonly delete: operations["enterprise-admin/delete-self-hosted-runner-from-enterprise"];
    };
    readonly "/enterprises/{enterprise}/audit-log": {
        readonly get: operations["enterprise-admin/get-audit-log"];
    };
    readonly "/enterprises/{enterprise}/settings/billing/actions": {
        readonly get: operations["billing/get-github-actions-billing-ghe"];
    };
    readonly "/enterprises/{enterprise}/settings/billing/packages": {
        readonly get: operations["billing/get-github-packages-billing-ghe"];
    };
    readonly "/enterprises/{enterprise}/settings/billing/shared-storage": {
        readonly get: operations["billing/get-shared-storage-billing-ghe"];
    };
    readonly "/events": {
        readonly get: operations["activity/list-public-events"];
    };
    readonly "/feeds": {
        readonly get: operations["activity/get-feeds"];
    };
    readonly "/gists": {
        readonly get: operations["gists/list"];
        readonly post: operations["gists/create"];
    };
    readonly "/gists/public": {
        readonly get: operations["gists/list-public"];
    };
    readonly "/gists/starred": {
        readonly get: operations["gists/list-starred"];
    };
    readonly "/gists/{gist_id}": {
        readonly get: operations["gists/get"];
        readonly delete: operations["gists/delete"];
        readonly patch: operations["gists/update"];
    };
    readonly "/gists/{gist_id}/comments": {
        readonly get: operations["gists/list-comments"];
        readonly post: operations["gists/create-comment"];
    };
    readonly "/gists/{gist_id}/comments/{comment_id}": {
        readonly get: operations["gists/get-comment"];
        readonly delete: operations["gists/delete-comment"];
        readonly patch: operations["gists/update-comment"];
    };
    readonly "/gists/{gist_id}/commits": {
        readonly get: operations["gists/list-commits"];
    };
    readonly "/gists/{gist_id}/forks": {
        readonly get: operations["gists/list-forks"];
        readonly post: operations["gists/fork"];
    };
    readonly "/gists/{gist_id}/star": {
        readonly get: operations["gists/check-is-starred"];
        readonly put: operations["gists/star"];
        readonly delete: operations["gists/unstar"];
    };
    readonly "/gists/{gist_id}/{sha}": {
        readonly get: operations["gists/get-revision"];
    };
    readonly "/gitignore/templates": {
        readonly get: operations["gitignore/get-all-templates"];
    };
    readonly "/gitignore/templates/{name}": {
        readonly get: operations["gitignore/get-template"];
    };
    readonly "/installation/repositories": {
        readonly get: operations["apps/list-repos-accessible-to-installation"];
    };
    readonly "/installation/token": {
        readonly delete: operations["apps/revoke-installation-access-token"];
    };
    readonly "/issues": {
        readonly get: operations["issues/list"];
    };
    readonly "/licenses": {
        readonly get: operations["licenses/get-all-commonly-used"];
    };
    readonly "/licenses/{license}": {
        readonly get: operations["licenses/get"];
    };
    readonly "/markdown": {
        readonly post: operations["markdown/render"];
    };
    readonly "/markdown/raw": {
        readonly post: operations["markdown/render-raw"];
    };
    readonly "/marketplace_listing/accounts/{account_id}": {
        readonly get: operations["apps/get-subscription-plan-for-account"];
    };
    readonly "/marketplace_listing/plans": {
        readonly get: operations["apps/list-plans"];
    };
    readonly "/marketplace_listing/plans/{plan_id}/accounts": {
        readonly get: operations["apps/list-accounts-for-plan"];
    };
    readonly "/marketplace_listing/stubbed/accounts/{account_id}": {
        readonly get: operations["apps/get-subscription-plan-for-account-stubbed"];
    };
    readonly "/marketplace_listing/stubbed/plans": {
        readonly get: operations["apps/list-plans-stubbed"];
    };
    readonly "/marketplace_listing/stubbed/plans/{plan_id}/accounts": {
        readonly get: operations["apps/list-accounts-for-plan-stubbed"];
    };
    readonly "/meta": {
        readonly get: operations["meta/get"];
    };
    readonly "/networks/{owner}/{repo}/events": {
        readonly get: operations["activity/list-public-events-for-repo-network"];
    };
    readonly "/notifications": {
        readonly get: operations["activity/list-notifications-for-authenticated-user"];
        readonly put: operations["activity/mark-notifications-as-read"];
    };
    readonly "/notifications/threads/{thread_id}": {
        readonly get: operations["activity/get-thread"];
        readonly patch: operations["activity/mark-thread-as-read"];
    };
    readonly "/notifications/threads/{thread_id}/subscription": {
        readonly get: operations["activity/get-thread-subscription-for-authenticated-user"];
        readonly put: operations["activity/set-thread-subscription"];
        readonly delete: operations["activity/delete-thread-subscription"];
    };
    readonly "/octocat": {
        readonly get: operations["meta/get-octocat"];
    };
    readonly "/organizations": {
        readonly get: operations["orgs/list"];
    };
    readonly "/orgs/{org}": {
        readonly get: operations["orgs/get"];
        readonly patch: operations["orgs/update"];
    };
    readonly "/orgs/{org}/actions/permissions": {
        readonly get: operations["actions/get-github-actions-permissions-organization"];
        readonly put: operations["actions/set-github-actions-permissions-organization"];
    };
    readonly "/orgs/{org}/actions/permissions/repositories": {
        readonly get: operations["actions/list-selected-repositories-enabled-github-actions-organization"];
        readonly put: operations["actions/set-selected-repositories-enabled-github-actions-organization"];
    };
    readonly "/orgs/{org}/actions/permissions/repositories/{repository_id}": {
        readonly put: operations["actions/enable-selected-repository-github-actions-organization"];
        readonly delete: operations["actions/disable-selected-repository-github-actions-organization"];
    };
    readonly "/orgs/{org}/actions/permissions/selected-actions": {
        readonly get: operations["actions/get-allowed-actions-organization"];
        readonly put: operations["actions/set-allowed-actions-organization"];
    };
    readonly "/orgs/{org}/actions/runner-groups": {
        readonly get: operations["actions/list-self-hosted-runner-groups-for-org"];
        readonly post: operations["actions/create-self-hosted-runner-group-for-org"];
    };
    readonly "/orgs/{org}/actions/runner-groups/{runner_group_id}": {
        readonly get: operations["actions/get-self-hosted-runner-group-for-org"];
        readonly delete: operations["actions/delete-self-hosted-runner-group-from-org"];
        readonly patch: operations["actions/update-self-hosted-runner-group-for-org"];
    };
    readonly "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories": {
        readonly get: operations["actions/list-repo-access-to-self-hosted-runner-group-in-org"];
        readonly put: operations["actions/set-repo-access-to-self-hosted-runner-group-in-org"];
    };
    readonly "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}": {
        readonly put: operations["actions/add-repo-access-to-self-hosted-runner-group-in-org"];
        readonly delete: operations["actions/remove-repo-access-to-self-hosted-runner-group-in-org"];
    };
    readonly "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners": {
        readonly get: operations["actions/list-self-hosted-runners-in-group-for-org"];
        readonly put: operations["actions/set-self-hosted-runners-in-group-for-org"];
    };
    readonly "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
        readonly put: operations["actions/add-self-hosted-runner-to-group-for-org"];
        readonly delete: operations["actions/remove-self-hosted-runner-from-group-for-org"];
    };
    readonly "/orgs/{org}/actions/runners": {
        readonly get: operations["actions/list-self-hosted-runners-for-org"];
    };
    readonly "/orgs/{org}/actions/runners/downloads": {
        readonly get: operations["actions/list-runner-applications-for-org"];
    };
    readonly "/orgs/{org}/actions/runners/registration-token": {
        readonly post: operations["actions/create-registration-token-for-org"];
    };
    readonly "/orgs/{org}/actions/runners/remove-token": {
        readonly post: operations["actions/create-remove-token-for-org"];
    };
    readonly "/orgs/{org}/actions/runners/{runner_id}": {
        readonly get: operations["actions/get-self-hosted-runner-for-org"];
        readonly delete: operations["actions/delete-self-hosted-runner-from-org"];
    };
    readonly "/orgs/{org}/actions/secrets": {
        readonly get: operations["actions/list-org-secrets"];
    };
    readonly "/orgs/{org}/actions/secrets/public-key": {
        readonly get: operations["actions/get-org-public-key"];
    };
    readonly "/orgs/{org}/actions/secrets/{secret_name}": {
        readonly get: operations["actions/get-org-secret"];
        readonly put: operations["actions/create-or-update-org-secret"];
        readonly delete: operations["actions/delete-org-secret"];
    };
    readonly "/orgs/{org}/actions/secrets/{secret_name}/repositories": {
        readonly get: operations["actions/list-selected-repos-for-org-secret"];
        readonly put: operations["actions/set-selected-repos-for-org-secret"];
    };
    readonly "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}": {
        readonly put: operations["actions/add-selected-repo-to-org-secret"];
        readonly delete: operations["actions/remove-selected-repo-from-org-secret"];
    };
    readonly "/orgs/{org}/audit-log": {
        readonly get: operations["orgs/get-audit-log"];
    };
    readonly "/orgs/{org}/blocks": {
        readonly get: operations["orgs/list-blocked-users"];
    };
    readonly "/orgs/{org}/blocks/{username}": {
        readonly get: operations["orgs/check-blocked-user"];
        readonly put: operations["orgs/block-user"];
        readonly delete: operations["orgs/unblock-user"];
    };
    readonly "/orgs/{org}/credential-authorizations": {
        readonly get: operations["orgs/list-saml-sso-authorizations"];
    };
    readonly "/orgs/{org}/credential-authorizations/{credential_id}": {
        readonly delete: operations["orgs/remove-saml-sso-authorization"];
    };
    readonly "/orgs/{org}/events": {
        readonly get: operations["activity/list-public-org-events"];
    };
    readonly "/orgs/{org}/failed_invitations": {
        readonly get: operations["orgs/list-failed-invitations"];
    };
    readonly "/orgs/{org}/hooks": {
        readonly get: operations["orgs/list-webhooks"];
        readonly post: operations["orgs/create-webhook"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}": {
        readonly get: operations["orgs/get-webhook"];
        readonly delete: operations["orgs/delete-webhook"];
        readonly patch: operations["orgs/update-webhook"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}/config": {
        readonly get: operations["orgs/get-webhook-config-for-org"];
        readonly patch: operations["orgs/update-webhook-config-for-org"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}/deliveries": {
        readonly get: operations["orgs/list-webhook-deliveries"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}": {
        readonly get: operations["orgs/get-webhook-delivery"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts": {
        readonly post: operations["orgs/redeliver-webhook-delivery"];
    };
    readonly "/orgs/{org}/hooks/{hook_id}/pings": {
        readonly post: operations["orgs/ping-webhook"];
    };
    readonly "/orgs/{org}/installation": {
        readonly get: operations["apps/get-org-installation"];
    };
    readonly "/orgs/{org}/installations": {
        readonly get: operations["orgs/list-app-installations"];
    };
    readonly "/orgs/{org}/interaction-limits": {
        readonly get: operations["interactions/get-restrictions-for-org"];
        readonly put: operations["interactions/set-restrictions-for-org"];
        readonly delete: operations["interactions/remove-restrictions-for-org"];
    };
    readonly "/orgs/{org}/invitations": {
        readonly get: operations["orgs/list-pending-invitations"];
        readonly post: operations["orgs/create-invitation"];
    };
    readonly "/orgs/{org}/invitations/{invitation_id}": {
        readonly delete: operations["orgs/cancel-invitation"];
    };
    readonly "/orgs/{org}/invitations/{invitation_id}/teams": {
        readonly get: operations["orgs/list-invitation-teams"];
    };
    readonly "/orgs/{org}/issues": {
        readonly get: operations["issues/list-for-org"];
    };
    readonly "/orgs/{org}/members": {
        readonly get: operations["orgs/list-members"];
    };
    readonly "/orgs/{org}/members/{username}": {
        readonly get: operations["orgs/check-membership-for-user"];
        readonly delete: operations["orgs/remove-member"];
    };
    readonly "/orgs/{org}/memberships/{username}": {
        readonly get: operations["orgs/get-membership-for-user"];
        readonly put: operations["orgs/set-membership-for-user"];
        readonly delete: operations["orgs/remove-membership-for-user"];
    };
    readonly "/orgs/{org}/migrations": {
        readonly get: operations["migrations/list-for-org"];
        readonly post: operations["migrations/start-for-org"];
    };
    readonly "/orgs/{org}/migrations/{migration_id}": {
        readonly get: operations["migrations/get-status-for-org"];
    };
    readonly "/orgs/{org}/migrations/{migration_id}/archive": {
        readonly get: operations["migrations/download-archive-for-org"];
        readonly delete: operations["migrations/delete-archive-for-org"];
    };
    readonly "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock": {
        readonly delete: operations["migrations/unlock-repo-for-org"];
    };
    readonly "/orgs/{org}/migrations/{migration_id}/repositories": {
        readonly get: operations["migrations/list-repos-for-org"];
    };
    readonly "/orgs/{org}/outside_collaborators": {
        readonly get: operations["orgs/list-outside-collaborators"];
    };
    readonly "/orgs/{org}/outside_collaborators/{username}": {
        readonly put: operations["orgs/convert-member-to-outside-collaborator"];
        readonly delete: operations["orgs/remove-outside-collaborator"];
    };
    readonly "/orgs/{org}/packages/{package_type}/{package_name}": {
        readonly get: operations["packages/get-package-for-organization"];
        readonly delete: operations["packages/delete-package-for-org"];
    };
    readonly "/orgs/{org}/packages/{package_type}/{package_name}/restore": {
        readonly post: operations["packages/restore-package-for-org"];
    };
    readonly "/orgs/{org}/packages/{package_type}/{package_name}/versions": {
        readonly get: operations["packages/get-all-package-versions-for-package-owned-by-org"];
    };
    readonly "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}": {
        readonly get: operations["packages/get-package-version-for-organization"];
        readonly delete: operations["packages/delete-package-version-for-org"];
    };
    readonly "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore": {
        readonly post: operations["packages/restore-package-version-for-org"];
    };
    readonly "/orgs/{org}/projects": {
        readonly get: operations["projects/list-for-org"];
        readonly post: operations["projects/create-for-org"];
    };
    readonly "/orgs/{org}/public_members": {
        readonly get: operations["orgs/list-public-members"];
    };
    readonly "/orgs/{org}/public_members/{username}": {
        readonly get: operations["orgs/check-public-membership-for-user"];
        readonly put: operations["orgs/set-public-membership-for-authenticated-user"];
        readonly delete: operations["orgs/remove-public-membership-for-authenticated-user"];
    };
    readonly "/orgs/{org}/repos": {
        readonly get: operations["repos/list-for-org"];
        readonly post: operations["repos/create-in-org"];
    };
    readonly "/orgs/{org}/settings/billing/actions": {
        readonly get: operations["billing/get-github-actions-billing-org"];
    };
    readonly "/orgs/{org}/settings/billing/packages": {
        readonly get: operations["billing/get-github-packages-billing-org"];
    };
    readonly "/orgs/{org}/settings/billing/shared-storage": {
        readonly get: operations["billing/get-shared-storage-billing-org"];
    };
    readonly "/orgs/{org}/team-sync/groups": {
        readonly get: operations["teams/list-idp-groups-for-org"];
    };
    readonly "/orgs/{org}/teams": {
        readonly get: operations["teams/list"];
        readonly post: operations["teams/create"];
    };
    readonly "/orgs/{org}/teams/{team_slug}": {
        readonly get: operations["teams/get-by-name"];
        readonly delete: operations["teams/delete-in-org"];
        readonly patch: operations["teams/update-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions": {
        readonly get: operations["teams/list-discussions-in-org"];
        readonly post: operations["teams/create-discussion-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": {
        readonly get: operations["teams/get-discussion-in-org"];
        readonly delete: operations["teams/delete-discussion-in-org"];
        readonly patch: operations["teams/update-discussion-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments": {
        readonly get: operations["teams/list-discussion-comments-in-org"];
        readonly post: operations["teams/create-discussion-comment-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": {
        readonly get: operations["teams/get-discussion-comment-in-org"];
        readonly delete: operations["teams/delete-discussion-comment-in-org"];
        readonly patch: operations["teams/update-discussion-comment-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
        readonly get: operations["reactions/list-for-team-discussion-comment-in-org"];
        readonly post: operations["reactions/create-for-team-discussion-comment-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-team-discussion-comment"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions": {
        readonly get: operations["reactions/list-for-team-discussion-in-org"];
        readonly post: operations["reactions/create-for-team-discussion-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-team-discussion"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/invitations": {
        readonly get: operations["teams/list-pending-invitations-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/members": {
        readonly get: operations["teams/list-members-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/memberships/{username}": {
        readonly get: operations["teams/get-membership-for-user-in-org"];
        readonly put: operations["teams/add-or-update-membership-for-user-in-org"];
        readonly delete: operations["teams/remove-membership-for-user-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/projects": {
        readonly get: operations["teams/list-projects-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/projects/{project_id}": {
        readonly get: operations["teams/check-permissions-for-project-in-org"];
        readonly put: operations["teams/add-or-update-project-permissions-in-org"];
        readonly delete: operations["teams/remove-project-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/repos": {
        readonly get: operations["teams/list-repos-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}": {
        readonly get: operations["teams/check-permissions-for-repo-in-org"];
        readonly put: operations["teams/add-or-update-repo-permissions-in-org"];
        readonly delete: operations["teams/remove-repo-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/team-sync/group-mappings": {
        readonly get: operations["teams/list-idp-groups-in-org"];
        readonly patch: operations["teams/create-or-update-idp-group-connections-in-org"];
    };
    readonly "/orgs/{org}/teams/{team_slug}/teams": {
        readonly get: operations["teams/list-child-in-org"];
    };
    readonly "/projects/columns/cards/{card_id}": {
        readonly get: operations["projects/get-card"];
        readonly delete: operations["projects/delete-card"];
        readonly patch: operations["projects/update-card"];
    };
    readonly "/projects/columns/cards/{card_id}/moves": {
        readonly post: operations["projects/move-card"];
    };
    readonly "/projects/columns/{column_id}": {
        readonly get: operations["projects/get-column"];
        readonly delete: operations["projects/delete-column"];
        readonly patch: operations["projects/update-column"];
    };
    readonly "/projects/columns/{column_id}/cards": {
        readonly get: operations["projects/list-cards"];
        readonly post: operations["projects/create-card"];
    };
    readonly "/projects/columns/{column_id}/moves": {
        readonly post: operations["projects/move-column"];
    };
    readonly "/projects/{project_id}": {
        readonly get: operations["projects/get"];
        readonly delete: operations["projects/delete"];
        readonly patch: operations["projects/update"];
    };
    readonly "/projects/{project_id}/collaborators": {
        readonly get: operations["projects/list-collaborators"];
    };
    readonly "/projects/{project_id}/collaborators/{username}": {
        readonly put: operations["projects/add-collaborator"];
        readonly delete: operations["projects/remove-collaborator"];
    };
    readonly "/projects/{project_id}/collaborators/{username}/permission": {
        readonly get: operations["projects/get-permission-for-user"];
    };
    readonly "/projects/{project_id}/columns": {
        readonly get: operations["projects/list-columns"];
        readonly post: operations["projects/create-column"];
    };
    readonly "/rate_limit": {
        readonly get: operations["rate-limit/get"];
    };
    readonly "/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-legacy"];
    };
    readonly "/repos/{owner}/{repo}": {
        readonly get: operations["repos/get"];
        readonly delete: operations["repos/delete"];
        readonly patch: operations["repos/update"];
    };
    readonly "/repos/{owner}/{repo}/actions/artifacts": {
        readonly get: operations["actions/list-artifacts-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}": {
        readonly get: operations["actions/get-artifact"];
        readonly delete: operations["actions/delete-artifact"];
    };
    readonly "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}": {
        readonly get: operations["actions/download-artifact"];
    };
    readonly "/repos/{owner}/{repo}/actions/jobs/{job_id}": {
        readonly get: operations["actions/get-job-for-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs": {
        readonly get: operations["actions/download-job-logs-for-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/permissions": {
        readonly get: operations["actions/get-github-actions-permissions-repository"];
        readonly put: operations["actions/set-github-actions-permissions-repository"];
    };
    readonly "/repos/{owner}/{repo}/actions/permissions/selected-actions": {
        readonly get: operations["actions/get-allowed-actions-repository"];
        readonly put: operations["actions/set-allowed-actions-repository"];
    };
    readonly "/repos/{owner}/{repo}/actions/runners": {
        readonly get: operations["actions/list-self-hosted-runners-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runners/downloads": {
        readonly get: operations["actions/list-runner-applications-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runners/registration-token": {
        readonly post: operations["actions/create-registration-token-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runners/remove-token": {
        readonly post: operations["actions/create-remove-token-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runners/{runner_id}": {
        readonly get: operations["actions/get-self-hosted-runner-for-repo"];
        readonly delete: operations["actions/delete-self-hosted-runner-from-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs": {
        readonly get: operations["actions/list-workflow-runs-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}": {
        readonly get: operations["actions/get-workflow-run"];
        readonly delete: operations["actions/delete-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/approvals": {
        readonly get: operations["actions/get-reviews-for-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/approve": {
        readonly post: operations["actions/approve-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts": {
        readonly get: operations["actions/list-workflow-run-artifacts"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel": {
        readonly post: operations["actions/cancel-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs": {
        readonly get: operations["actions/list-jobs-for-workflow-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/logs": {
        readonly get: operations["actions/download-workflow-run-logs"];
        readonly delete: operations["actions/delete-workflow-run-logs"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments": {
        readonly get: operations["actions/get-pending-deployments-for-run"];
        readonly post: operations["actions/review-pending-deployments-for-run"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun": {
        readonly post: operations["actions/re-run-workflow"];
    };
    readonly "/repos/{owner}/{repo}/actions/runs/{run_id}/timing": {
        readonly get: operations["actions/get-workflow-run-usage"];
    };
    readonly "/repos/{owner}/{repo}/actions/secrets": {
        readonly get: operations["actions/list-repo-secrets"];
    };
    readonly "/repos/{owner}/{repo}/actions/secrets/public-key": {
        readonly get: operations["actions/get-repo-public-key"];
    };
    readonly "/repos/{owner}/{repo}/actions/secrets/{secret_name}": {
        readonly get: operations["actions/get-repo-secret"];
        readonly put: operations["actions/create-or-update-repo-secret"];
        readonly delete: operations["actions/delete-repo-secret"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows": {
        readonly get: operations["actions/list-repo-workflows"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}": {
        readonly get: operations["actions/get-workflow"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable": {
        readonly put: operations["actions/disable-workflow"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches": {
        readonly post: operations["actions/create-workflow-dispatch"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable": {
        readonly put: operations["actions/enable-workflow"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs": {
        readonly get: operations["actions/list-workflow-runs"];
    };
    readonly "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing": {
        readonly get: operations["actions/get-workflow-usage"];
    };
    readonly "/repos/{owner}/{repo}/assignees": {
        readonly get: operations["issues/list-assignees"];
    };
    readonly "/repos/{owner}/{repo}/assignees/{assignee}": {
        readonly get: operations["issues/check-user-can-be-assigned"];
    };
    readonly "/repos/{owner}/{repo}/autolinks": {
        readonly get: operations["repos/list-autolinks"];
        readonly post: operations["repos/create-autolink"];
    };
    readonly "/repos/{owner}/{repo}/autolinks/{autolink_id}": {
        readonly get: operations["repos/get-autolink"];
        readonly delete: operations["repos/delete-autolink"];
    };
    readonly "/repos/{owner}/{repo}/automated-security-fixes": {
        readonly put: operations["repos/enable-automated-security-fixes"];
        readonly delete: operations["repos/disable-automated-security-fixes"];
    };
    readonly "/repos/{owner}/{repo}/branches": {
        readonly get: operations["repos/list-branches"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}": {
        readonly get: operations["repos/get-branch"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection": {
        readonly get: operations["repos/get-branch-protection"];
        readonly put: operations["repos/update-branch-protection"];
        readonly delete: operations["repos/delete-branch-protection"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": {
        readonly get: operations["repos/get-admin-branch-protection"];
        readonly post: operations["repos/set-admin-branch-protection"];
        readonly delete: operations["repos/delete-admin-branch-protection"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": {
        readonly get: operations["repos/get-pull-request-review-protection"];
        readonly delete: operations["repos/delete-pull-request-review-protection"];
        readonly patch: operations["repos/update-pull-request-review-protection"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": {
        readonly get: operations["repos/get-commit-signature-protection"];
        readonly post: operations["repos/create-commit-signature-protection"];
        readonly delete: operations["repos/delete-commit-signature-protection"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": {
        readonly get: operations["repos/get-status-checks-protection"];
        readonly delete: operations["repos/remove-status-check-protection"];
        readonly patch: operations["repos/update-status-check-protection"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": {
        readonly get: operations["repos/get-all-status-check-contexts"];
        readonly put: operations["repos/set-status-check-contexts"];
        readonly post: operations["repos/add-status-check-contexts"];
        readonly delete: operations["repos/remove-status-check-contexts"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions": {
        readonly get: operations["repos/get-access-restrictions"];
        readonly delete: operations["repos/delete-access-restrictions"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": {
        readonly get: operations["repos/get-apps-with-access-to-protected-branch"];
        readonly put: operations["repos/set-app-access-restrictions"];
        readonly post: operations["repos/add-app-access-restrictions"];
        readonly delete: operations["repos/remove-app-access-restrictions"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": {
        readonly get: operations["repos/get-teams-with-access-to-protected-branch"];
        readonly put: operations["repos/set-team-access-restrictions"];
        readonly post: operations["repos/add-team-access-restrictions"];
        readonly delete: operations["repos/remove-team-access-restrictions"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": {
        readonly get: operations["repos/get-users-with-access-to-protected-branch"];
        readonly put: operations["repos/set-user-access-restrictions"];
        readonly post: operations["repos/add-user-access-restrictions"];
        readonly delete: operations["repos/remove-user-access-restrictions"];
    };
    readonly "/repos/{owner}/{repo}/branches/{branch}/rename": {
        readonly post: operations["repos/rename-branch"];
    };
    readonly "/repos/{owner}/{repo}/check-runs": {
        readonly post: operations["checks/create"];
    };
    readonly "/repos/{owner}/{repo}/check-runs/{check_run_id}": {
        readonly get: operations["checks/get"];
        readonly patch: operations["checks/update"];
    };
    readonly "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations": {
        readonly get: operations["checks/list-annotations"];
    };
    readonly "/repos/{owner}/{repo}/check-suites": {
        readonly post: operations["checks/create-suite"];
    };
    readonly "/repos/{owner}/{repo}/check-suites/preferences": {
        readonly patch: operations["checks/set-suites-preferences"];
    };
    readonly "/repos/{owner}/{repo}/check-suites/{check_suite_id}": {
        readonly get: operations["checks/get-suite"];
    };
    readonly "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs": {
        readonly get: operations["checks/list-for-suite"];
    };
    readonly "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest": {
        readonly post: operations["checks/rerequest-suite"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/alerts": {
        readonly get: operations["code-scanning/list-alerts-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}": {
        readonly get: operations["code-scanning/get-alert"];
        readonly patch: operations["code-scanning/update-alert"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances": {
        readonly get: operations["code-scanning/list-alert-instances"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/analyses": {
        readonly get: operations["code-scanning/list-recent-analyses"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}": {
        readonly get: operations["code-scanning/get-analysis"];
        readonly delete: operations["code-scanning/delete-analysis"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/sarifs": {
        readonly post: operations["code-scanning/upload-sarif"];
    };
    readonly "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}": {
        readonly get: operations["code-scanning/get-sarif"];
    };
    readonly "/repos/{owner}/{repo}/collaborators": {
        readonly get: operations["repos/list-collaborators"];
    };
    readonly "/repos/{owner}/{repo}/collaborators/{username}": {
        readonly get: operations["repos/check-collaborator"];
        readonly put: operations["repos/add-collaborator"];
        readonly delete: operations["repos/remove-collaborator"];
    };
    readonly "/repos/{owner}/{repo}/collaborators/{username}/permission": {
        readonly get: operations["repos/get-collaborator-permission-level"];
    };
    readonly "/repos/{owner}/{repo}/comments": {
        readonly get: operations["repos/list-commit-comments-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/comments/{comment_id}": {
        readonly get: operations["repos/get-commit-comment"];
        readonly delete: operations["repos/delete-commit-comment"];
        readonly patch: operations["repos/update-commit-comment"];
    };
    readonly "/repos/{owner}/{repo}/comments/{comment_id}/reactions": {
        readonly get: operations["reactions/list-for-commit-comment"];
        readonly post: operations["reactions/create-for-commit-comment"];
    };
    readonly "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-commit-comment"];
    };
    readonly "/repos/{owner}/{repo}/commits": {
        readonly get: operations["repos/list-commits"];
    };
    readonly "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head": {
        readonly get: operations["repos/list-branches-for-head-commit"];
    };
    readonly "/repos/{owner}/{repo}/commits/{commit_sha}/comments": {
        readonly get: operations["repos/list-comments-for-commit"];
        readonly post: operations["repos/create-commit-comment"];
    };
    readonly "/repos/{owner}/{repo}/commits/{commit_sha}/pulls": {
        readonly get: operations["repos/list-pull-requests-associated-with-commit"];
    };
    readonly "/repos/{owner}/{repo}/commits/{ref}": {
        readonly get: operations["repos/get-commit"];
    };
    readonly "/repos/{owner}/{repo}/commits/{ref}/check-runs": {
        readonly get: operations["checks/list-for-ref"];
    };
    readonly "/repos/{owner}/{repo}/commits/{ref}/check-suites": {
        readonly get: operations["checks/list-suites-for-ref"];
    };
    readonly "/repos/{owner}/{repo}/commits/{ref}/status": {
        readonly get: operations["repos/get-combined-status-for-ref"];
    };
    readonly "/repos/{owner}/{repo}/commits/{ref}/statuses": {
        readonly get: operations["repos/list-commit-statuses-for-ref"];
    };
    readonly "/repos/{owner}/{repo}/community/code_of_conduct": {
        readonly get: operations["codes-of-conduct/get-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/community/profile": {
        readonly get: operations["repos/get-community-profile-metrics"];
    };
    readonly "/repos/{owner}/{repo}/compare/{basehead}": {
        readonly get: operations["repos/compare-commits"];
    };
    readonly "/repos/{owner}/{repo}/content_references/{content_reference_id}/attachments": {
        readonly post: operations["apps/create-content-attachment"];
    };
    readonly "/repos/{owner}/{repo}/contents/{path}": {
        readonly get: operations["repos/get-content"];
        readonly put: operations["repos/create-or-update-file-contents"];
        readonly delete: operations["repos/delete-file"];
    };
    readonly "/repos/{owner}/{repo}/contributors": {
        readonly get: operations["repos/list-contributors"];
    };
    readonly "/repos/{owner}/{repo}/deployments": {
        readonly get: operations["repos/list-deployments"];
        readonly post: operations["repos/create-deployment"];
    };
    readonly "/repos/{owner}/{repo}/deployments/{deployment_id}": {
        readonly get: operations["repos/get-deployment"];
        readonly delete: operations["repos/delete-deployment"];
    };
    readonly "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses": {
        readonly get: operations["repos/list-deployment-statuses"];
        readonly post: operations["repos/create-deployment-status"];
    };
    readonly "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}": {
        readonly get: operations["repos/get-deployment-status"];
    };
    readonly "/repos/{owner}/{repo}/dispatches": {
        readonly post: operations["repos/create-dispatch-event"];
    };
    readonly "/repos/{owner}/{repo}/environments": {
        readonly get: operations["repos/get-all-environments"];
    };
    readonly "/repos/{owner}/{repo}/environments/{environment_name}": {
        readonly get: operations["repos/get-environment"];
        readonly put: operations["repos/create-or-update-environment"];
        readonly delete: operations["repos/delete-an-environment"];
    };
    readonly "/repos/{owner}/{repo}/events": {
        readonly get: operations["activity/list-repo-events"];
    };
    readonly "/repos/{owner}/{repo}/forks": {
        readonly get: operations["repos/list-forks"];
        readonly post: operations["repos/create-fork"];
    };
    readonly "/repos/{owner}/{repo}/git/blobs": {
        readonly post: operations["git/create-blob"];
    };
    readonly "/repos/{owner}/{repo}/git/blobs/{file_sha}": {
        readonly get: operations["git/get-blob"];
    };
    readonly "/repos/{owner}/{repo}/git/commits": {
        readonly post: operations["git/create-commit"];
    };
    readonly "/repos/{owner}/{repo}/git/commits/{commit_sha}": {
        readonly get: operations["git/get-commit"];
    };
    readonly "/repos/{owner}/{repo}/git/matching-refs/{ref}": {
        readonly get: operations["git/list-matching-refs"];
    };
    readonly "/repos/{owner}/{repo}/git/ref/{ref}": {
        readonly get: operations["git/get-ref"];
    };
    readonly "/repos/{owner}/{repo}/git/refs": {
        readonly post: operations["git/create-ref"];
    };
    readonly "/repos/{owner}/{repo}/git/refs/{ref}": {
        readonly delete: operations["git/delete-ref"];
        readonly patch: operations["git/update-ref"];
    };
    readonly "/repos/{owner}/{repo}/git/tags": {
        readonly post: operations["git/create-tag"];
    };
    readonly "/repos/{owner}/{repo}/git/tags/{tag_sha}": {
        readonly get: operations["git/get-tag"];
    };
    readonly "/repos/{owner}/{repo}/git/trees": {
        readonly post: operations["git/create-tree"];
    };
    readonly "/repos/{owner}/{repo}/git/trees/{tree_sha}": {
        readonly get: operations["git/get-tree"];
    };
    readonly "/repos/{owner}/{repo}/hooks": {
        readonly get: operations["repos/list-webhooks"];
        readonly post: operations["repos/create-webhook"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}": {
        readonly get: operations["repos/get-webhook"];
        readonly delete: operations["repos/delete-webhook"];
        readonly patch: operations["repos/update-webhook"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/config": {
        readonly get: operations["repos/get-webhook-config-for-repo"];
        readonly patch: operations["repos/update-webhook-config-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries": {
        readonly get: operations["repos/list-webhook-deliveries"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}": {
        readonly get: operations["repos/get-webhook-delivery"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts": {
        readonly post: operations["repos/redeliver-webhook-delivery"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/pings": {
        readonly post: operations["repos/ping-webhook"];
    };
    readonly "/repos/{owner}/{repo}/hooks/{hook_id}/tests": {
        readonly post: operations["repos/test-push-webhook"];
    };
    readonly "/repos/{owner}/{repo}/import": {
        readonly get: operations["migrations/get-import-status"];
        readonly put: operations["migrations/start-import"];
        readonly delete: operations["migrations/cancel-import"];
        readonly patch: operations["migrations/update-import"];
    };
    readonly "/repos/{owner}/{repo}/import/authors": {
        readonly get: operations["migrations/get-commit-authors"];
    };
    readonly "/repos/{owner}/{repo}/import/authors/{author_id}": {
        readonly patch: operations["migrations/map-commit-author"];
    };
    readonly "/repos/{owner}/{repo}/import/large_files": {
        readonly get: operations["migrations/get-large-files"];
    };
    readonly "/repos/{owner}/{repo}/import/lfs": {
        readonly patch: operations["migrations/set-lfs-preference"];
    };
    readonly "/repos/{owner}/{repo}/installation": {
        readonly get: operations["apps/get-repo-installation"];
    };
    readonly "/repos/{owner}/{repo}/interaction-limits": {
        readonly get: operations["interactions/get-restrictions-for-repo"];
        readonly put: operations["interactions/set-restrictions-for-repo"];
        readonly delete: operations["interactions/remove-restrictions-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/invitations": {
        readonly get: operations["repos/list-invitations"];
    };
    readonly "/repos/{owner}/{repo}/invitations/{invitation_id}": {
        readonly delete: operations["repos/delete-invitation"];
        readonly patch: operations["repos/update-invitation"];
    };
    readonly "/repos/{owner}/{repo}/issues": {
        readonly get: operations["issues/list-for-repo"];
        readonly post: operations["issues/create"];
    };
    readonly "/repos/{owner}/{repo}/issues/comments": {
        readonly get: operations["issues/list-comments-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/issues/comments/{comment_id}": {
        readonly get: operations["issues/get-comment"];
        readonly delete: operations["issues/delete-comment"];
        readonly patch: operations["issues/update-comment"];
    };
    readonly "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions": {
        readonly get: operations["reactions/list-for-issue-comment"];
        readonly post: operations["reactions/create-for-issue-comment"];
    };
    readonly "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-issue-comment"];
    };
    readonly "/repos/{owner}/{repo}/issues/events": {
        readonly get: operations["issues/list-events-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/issues/events/{event_id}": {
        readonly get: operations["issues/get-event"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}": {
        readonly get: operations["issues/get"];
        readonly patch: operations["issues/update"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/assignees": {
        readonly post: operations["issues/add-assignees"];
        readonly delete: operations["issues/remove-assignees"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/comments": {
        readonly get: operations["issues/list-comments"];
        readonly post: operations["issues/create-comment"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/events": {
        readonly get: operations["issues/list-events"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/labels": {
        readonly get: operations["issues/list-labels-on-issue"];
        readonly put: operations["issues/set-labels"];
        readonly post: operations["issues/add-labels"];
        readonly delete: operations["issues/remove-all-labels"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}": {
        readonly delete: operations["issues/remove-label"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/lock": {
        readonly put: operations["issues/lock"];
        readonly delete: operations["issues/unlock"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/reactions": {
        readonly get: operations["reactions/list-for-issue"];
        readonly post: operations["reactions/create-for-issue"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-issue"];
    };
    readonly "/repos/{owner}/{repo}/issues/{issue_number}/timeline": {
        readonly get: operations["issues/list-events-for-timeline"];
    };
    readonly "/repos/{owner}/{repo}/keys": {
        readonly get: operations["repos/list-deploy-keys"];
        readonly post: operations["repos/create-deploy-key"];
    };
    readonly "/repos/{owner}/{repo}/keys/{key_id}": {
        readonly get: operations["repos/get-deploy-key"];
        readonly delete: operations["repos/delete-deploy-key"];
    };
    readonly "/repos/{owner}/{repo}/labels": {
        readonly get: operations["issues/list-labels-for-repo"];
        readonly post: operations["issues/create-label"];
    };
    readonly "/repos/{owner}/{repo}/labels/{name}": {
        readonly get: operations["issues/get-label"];
        readonly delete: operations["issues/delete-label"];
        readonly patch: operations["issues/update-label"];
    };
    readonly "/repos/{owner}/{repo}/languages": {
        readonly get: operations["repos/list-languages"];
    };
    readonly "/repos/{owner}/{repo}/license": {
        readonly get: operations["licenses/get-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/merges": {
        readonly post: operations["repos/merge"];
    };
    readonly "/repos/{owner}/{repo}/milestones": {
        readonly get: operations["issues/list-milestones"];
        readonly post: operations["issues/create-milestone"];
    };
    readonly "/repos/{owner}/{repo}/milestones/{milestone_number}": {
        readonly get: operations["issues/get-milestone"];
        readonly delete: operations["issues/delete-milestone"];
        readonly patch: operations["issues/update-milestone"];
    };
    readonly "/repos/{owner}/{repo}/milestones/{milestone_number}/labels": {
        readonly get: operations["issues/list-labels-for-milestone"];
    };
    readonly "/repos/{owner}/{repo}/notifications": {
        readonly get: operations["activity/list-repo-notifications-for-authenticated-user"];
        readonly put: operations["activity/mark-repo-notifications-as-read"];
    };
    readonly "/repos/{owner}/{repo}/pages": {
        readonly get: operations["repos/get-pages"];
        readonly put: operations["repos/update-information-about-pages-site"];
        readonly post: operations["repos/create-pages-site"];
        readonly delete: operations["repos/delete-pages-site"];
    };
    readonly "/repos/{owner}/{repo}/pages/builds": {
        readonly get: operations["repos/list-pages-builds"];
        readonly post: operations["repos/request-pages-build"];
    };
    readonly "/repos/{owner}/{repo}/pages/builds/latest": {
        readonly get: operations["repos/get-latest-pages-build"];
    };
    readonly "/repos/{owner}/{repo}/pages/builds/{build_id}": {
        readonly get: operations["repos/get-pages-build"];
    };
    readonly "/repos/{owner}/{repo}/pages/health": {
        readonly get: operations["repos/get-pages-health-check"];
    };
    readonly "/repos/{owner}/{repo}/projects": {
        readonly get: operations["projects/list-for-repo"];
        readonly post: operations["projects/create-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/pulls": {
        readonly get: operations["pulls/list"];
        readonly post: operations["pulls/create"];
    };
    readonly "/repos/{owner}/{repo}/pulls/comments": {
        readonly get: operations["pulls/list-review-comments-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/pulls/comments/{comment_id}": {
        readonly get: operations["pulls/get-review-comment"];
        readonly delete: operations["pulls/delete-review-comment"];
        readonly patch: operations["pulls/update-review-comment"];
    };
    readonly "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions": {
        readonly get: operations["reactions/list-for-pull-request-review-comment"];
        readonly post: operations["reactions/create-for-pull-request-review-comment"];
    };
    readonly "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}": {
        readonly delete: operations["reactions/delete-for-pull-request-comment"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}": {
        readonly get: operations["pulls/get"];
        readonly patch: operations["pulls/update"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/comments": {
        readonly get: operations["pulls/list-review-comments"];
        readonly post: operations["pulls/create-review-comment"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies": {
        readonly post: operations["pulls/create-reply-for-review-comment"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/commits": {
        readonly get: operations["pulls/list-commits"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/files": {
        readonly get: operations["pulls/list-files"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/merge": {
        readonly get: operations["pulls/check-if-merged"];
        readonly put: operations["pulls/merge"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers": {
        readonly get: operations["pulls/list-requested-reviewers"];
        readonly post: operations["pulls/request-reviewers"];
        readonly delete: operations["pulls/remove-requested-reviewers"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/reviews": {
        readonly get: operations["pulls/list-reviews"];
        readonly post: operations["pulls/create-review"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}": {
        readonly get: operations["pulls/get-review"];
        readonly put: operations["pulls/update-review"];
        readonly delete: operations["pulls/delete-pending-review"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments": {
        readonly get: operations["pulls/list-comments-for-review"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals": {
        readonly put: operations["pulls/dismiss-review"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events": {
        readonly post: operations["pulls/submit-review"];
    };
    readonly "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch": {
        readonly put: operations["pulls/update-branch"];
    };
    readonly "/repos/{owner}/{repo}/readme": {
        readonly get: operations["repos/get-readme"];
    };
    readonly "/repos/{owner}/{repo}/readme/{dir}": {
        readonly get: operations["repos/get-readme-in-directory"];
    };
    readonly "/repos/{owner}/{repo}/releases": {
        readonly get: operations["repos/list-releases"];
        readonly post: operations["repos/create-release"];
    };
    readonly "/repos/{owner}/{repo}/releases/assets/{asset_id}": {
        readonly get: operations["repos/get-release-asset"];
        readonly delete: operations["repos/delete-release-asset"];
        readonly patch: operations["repos/update-release-asset"];
    };
    readonly "/repos/{owner}/{repo}/releases/latest": {
        readonly get: operations["repos/get-latest-release"];
    };
    readonly "/repos/{owner}/{repo}/releases/tags/{tag}": {
        readonly get: operations["repos/get-release-by-tag"];
    };
    readonly "/repos/{owner}/{repo}/releases/{release_id}": {
        readonly get: operations["repos/get-release"];
        readonly delete: operations["repos/delete-release"];
        readonly patch: operations["repos/update-release"];
    };
    readonly "/repos/{owner}/{repo}/releases/{release_id}/assets": {
        readonly get: operations["repos/list-release-assets"];
        readonly post: operations["repos/upload-release-asset"];
    };
    readonly "/repos/{owner}/{repo}/releases/{release_id}/reactions": {
        readonly post: operations["reactions/create-for-release"];
    };
    readonly "/repos/{owner}/{repo}/secret-scanning/alerts": {
        readonly get: operations["secret-scanning/list-alerts-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}": {
        readonly get: operations["secret-scanning/get-alert"];
        readonly patch: operations["secret-scanning/update-alert"];
    };
    readonly "/repos/{owner}/{repo}/stargazers": {
        readonly get: operations["activity/list-stargazers-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/stats/code_frequency": {
        readonly get: operations["repos/get-code-frequency-stats"];
    };
    readonly "/repos/{owner}/{repo}/stats/commit_activity": {
        readonly get: operations["repos/get-commit-activity-stats"];
    };
    readonly "/repos/{owner}/{repo}/stats/contributors": {
        readonly get: operations["repos/get-contributors-stats"];
    };
    readonly "/repos/{owner}/{repo}/stats/participation": {
        readonly get: operations["repos/get-participation-stats"];
    };
    readonly "/repos/{owner}/{repo}/stats/punch_card": {
        readonly get: operations["repos/get-punch-card-stats"];
    };
    readonly "/repos/{owner}/{repo}/statuses/{sha}": {
        readonly post: operations["repos/create-commit-status"];
    };
    readonly "/repos/{owner}/{repo}/subscribers": {
        readonly get: operations["activity/list-watchers-for-repo"];
    };
    readonly "/repos/{owner}/{repo}/subscription": {
        readonly get: operations["activity/get-repo-subscription"];
        readonly put: operations["activity/set-repo-subscription"];
        readonly delete: operations["activity/delete-repo-subscription"];
    };
    readonly "/repos/{owner}/{repo}/tags": {
        readonly get: operations["repos/list-tags"];
    };
    readonly "/repos/{owner}/{repo}/tarball/{ref}": {
        readonly get: operations["repos/download-tarball-archive"];
    };
    readonly "/repos/{owner}/{repo}/teams": {
        readonly get: operations["repos/list-teams"];
    };
    readonly "/repos/{owner}/{repo}/topics": {
        readonly get: operations["repos/get-all-topics"];
        readonly put: operations["repos/replace-all-topics"];
    };
    readonly "/repos/{owner}/{repo}/traffic/clones": {
        readonly get: operations["repos/get-clones"];
    };
    readonly "/repos/{owner}/{repo}/traffic/popular/paths": {
        readonly get: operations["repos/get-top-paths"];
    };
    readonly "/repos/{owner}/{repo}/traffic/popular/referrers": {
        readonly get: operations["repos/get-top-referrers"];
    };
    readonly "/repos/{owner}/{repo}/traffic/views": {
        readonly get: operations["repos/get-views"];
    };
    readonly "/repos/{owner}/{repo}/transfer": {
        readonly post: operations["repos/transfer"];
    };
    readonly "/repos/{owner}/{repo}/vulnerability-alerts": {
        readonly get: operations["repos/check-vulnerability-alerts"];
        readonly put: operations["repos/enable-vulnerability-alerts"];
        readonly delete: operations["repos/disable-vulnerability-alerts"];
    };
    readonly "/repos/{owner}/{repo}/zipball/{ref}": {
        readonly get: operations["repos/download-zipball-archive"];
    };
    readonly "/repos/{template_owner}/{template_repo}/generate": {
        readonly post: operations["repos/create-using-template"];
    };
    readonly "/repositories": {
        readonly get: operations["repos/list-public"];
    };
    readonly "/repositories/{repository_id}/environments/{environment_name}/secrets": {
        readonly get: operations["actions/list-environment-secrets"];
    };
    readonly "/repositories/{repository_id}/environments/{environment_name}/secrets/public-key": {
        readonly get: operations["actions/get-environment-public-key"];
    };
    readonly "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}": {
        readonly get: operations["actions/get-environment-secret"];
        readonly put: operations["actions/create-or-update-environment-secret"];
        readonly delete: operations["actions/delete-environment-secret"];
    };
    readonly "/scim/v2/enterprises/{enterprise}/Groups": {
        readonly get: operations["enterprise-admin/list-provisioned-groups-enterprise"];
        readonly post: operations["enterprise-admin/provision-and-invite-enterprise-group"];
    };
    readonly "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}": {
        readonly get: operations["enterprise-admin/get-provisioning-information-for-enterprise-group"];
        readonly put: operations["enterprise-admin/set-information-for-provisioned-enterprise-group"];
        readonly delete: operations["enterprise-admin/delete-scim-group-from-enterprise"];
        readonly patch: operations["enterprise-admin/update-attribute-for-enterprise-group"];
    };
    readonly "/scim/v2/enterprises/{enterprise}/Users": {
        readonly get: operations["enterprise-admin/list-provisioned-identities-enterprise"];
        readonly post: operations["enterprise-admin/provision-and-invite-enterprise-user"];
    };
    readonly "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}": {
        readonly get: operations["enterprise-admin/get-provisioning-information-for-enterprise-user"];
        readonly put: operations["enterprise-admin/set-information-for-provisioned-enterprise-user"];
        readonly delete: operations["enterprise-admin/delete-user-from-enterprise"];
        readonly patch: operations["enterprise-admin/update-attribute-for-enterprise-user"];
    };
    readonly "/scim/v2/organizations/{org}/Users": {
        readonly get: operations["scim/list-provisioned-identities"];
        readonly post: operations["scim/provision-and-invite-user"];
    };
    readonly "/scim/v2/organizations/{org}/Users/{scim_user_id}": {
        readonly get: operations["scim/get-provisioning-information-for-user"];
        readonly put: operations["scim/set-information-for-provisioned-user"];
        readonly delete: operations["scim/delete-user-from-org"];
        readonly patch: operations["scim/update-attribute-for-user"];
    };
    readonly "/search/code": {
        readonly get: operations["search/code"];
    };
    readonly "/search/commits": {
        readonly get: operations["search/commits"];
    };
    readonly "/search/issues": {
        readonly get: operations["search/issues-and-pull-requests"];
    };
    readonly "/search/labels": {
        readonly get: operations["search/labels"];
    };
    readonly "/search/repositories": {
        readonly get: operations["search/repos"];
    };
    readonly "/search/topics": {
        readonly get: operations["search/topics"];
    };
    readonly "/search/users": {
        readonly get: operations["search/users"];
    };
    readonly "/teams/{team_id}": {
        readonly get: operations["teams/get-legacy"];
        readonly delete: operations["teams/delete-legacy"];
        readonly patch: operations["teams/update-legacy"];
    };
    readonly "/teams/{team_id}/discussions": {
        readonly get: operations["teams/list-discussions-legacy"];
        readonly post: operations["teams/create-discussion-legacy"];
    };
    readonly "/teams/{team_id}/discussions/{discussion_number}": {
        readonly get: operations["teams/get-discussion-legacy"];
        readonly delete: operations["teams/delete-discussion-legacy"];
        readonly patch: operations["teams/update-discussion-legacy"];
    };
    readonly "/teams/{team_id}/discussions/{discussion_number}/comments": {
        readonly get: operations["teams/list-discussion-comments-legacy"];
        readonly post: operations["teams/create-discussion-comment-legacy"];
    };
    readonly "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": {
        readonly get: operations["teams/get-discussion-comment-legacy"];
        readonly delete: operations["teams/delete-discussion-comment-legacy"];
        readonly patch: operations["teams/update-discussion-comment-legacy"];
    };
    readonly "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
        readonly get: operations["reactions/list-for-team-discussion-comment-legacy"];
        readonly post: operations["reactions/create-for-team-discussion-comment-legacy"];
    };
    readonly "/teams/{team_id}/discussions/{discussion_number}/reactions": {
        readonly get: operations["reactions/list-for-team-discussion-legacy"];
        readonly post: operations["reactions/create-for-team-discussion-legacy"];
    };
    readonly "/teams/{team_id}/invitations": {
        readonly get: operations["teams/list-pending-invitations-legacy"];
    };
    readonly "/teams/{team_id}/members": {
        readonly get: operations["teams/list-members-legacy"];
    };
    readonly "/teams/{team_id}/members/{username}": {
        readonly get: operations["teams/get-member-legacy"];
        readonly put: operations["teams/add-member-legacy"];
        readonly delete: operations["teams/remove-member-legacy"];
    };
    readonly "/teams/{team_id}/memberships/{username}": {
        readonly get: operations["teams/get-membership-for-user-legacy"];
        readonly put: operations["teams/add-or-update-membership-for-user-legacy"];
        readonly delete: operations["teams/remove-membership-for-user-legacy"];
    };
    readonly "/teams/{team_id}/projects": {
        readonly get: operations["teams/list-projects-legacy"];
    };
    readonly "/teams/{team_id}/projects/{project_id}": {
        readonly get: operations["teams/check-permissions-for-project-legacy"];
        readonly put: operations["teams/add-or-update-project-permissions-legacy"];
        readonly delete: operations["teams/remove-project-legacy"];
    };
    readonly "/teams/{team_id}/repos": {
        readonly get: operations["teams/list-repos-legacy"];
    };
    readonly "/teams/{team_id}/repos/{owner}/{repo}": {
        readonly get: operations["teams/check-permissions-for-repo-legacy"];
        readonly put: operations["teams/add-or-update-repo-permissions-legacy"];
        readonly delete: operations["teams/remove-repo-legacy"];
    };
    readonly "/teams/{team_id}/team-sync/group-mappings": {
        readonly get: operations["teams/list-idp-groups-for-legacy"];
        readonly patch: operations["teams/create-or-update-idp-group-connections-legacy"];
    };
    readonly "/teams/{team_id}/teams": {
        readonly get: operations["teams/list-child-legacy"];
    };
    readonly "/user": {
        readonly get: operations["users/get-authenticated"];
        readonly patch: operations["users/update-authenticated"];
    };
    readonly "/user/blocks": {
        readonly get: operations["users/list-blocked-by-authenticated"];
    };
    readonly "/user/blocks/{username}": {
        readonly get: operations["users/check-blocked"];
        readonly put: operations["users/block"];
        readonly delete: operations["users/unblock"];
    };
    readonly "/user/email/visibility": {
        readonly patch: operations["users/set-primary-email-visibility-for-authenticated"];
    };
    readonly "/user/emails": {
        readonly get: operations["users/list-emails-for-authenticated"];
        readonly post: operations["users/add-email-for-authenticated"];
        readonly delete: operations["users/delete-email-for-authenticated"];
    };
    readonly "/user/followers": {
        readonly get: operations["users/list-followers-for-authenticated-user"];
    };
    readonly "/user/following": {
        readonly get: operations["users/list-followed-by-authenticated"];
    };
    readonly "/user/following/{username}": {
        readonly get: operations["users/check-person-is-followed-by-authenticated"];
        readonly put: operations["users/follow"];
        readonly delete: operations["users/unfollow"];
    };
    readonly "/user/gpg_keys": {
        readonly get: operations["users/list-gpg-keys-for-authenticated"];
        readonly post: operations["users/create-gpg-key-for-authenticated"];
    };
    readonly "/user/gpg_keys/{gpg_key_id}": {
        readonly get: operations["users/get-gpg-key-for-authenticated"];
        readonly delete: operations["users/delete-gpg-key-for-authenticated"];
    };
    readonly "/user/installations": {
        readonly get: operations["apps/list-installations-for-authenticated-user"];
    };
    readonly "/user/installations/{installation_id}/repositories": {
        readonly get: operations["apps/list-installation-repos-for-authenticated-user"];
    };
    readonly "/user/installations/{installation_id}/repositories/{repository_id}": {
        readonly put: operations["apps/add-repo-to-installation"];
        readonly delete: operations["apps/remove-repo-from-installation"];
    };
    readonly "/user/interaction-limits": {
        readonly get: operations["interactions/get-restrictions-for-authenticated-user"];
        readonly put: operations["interactions/set-restrictions-for-authenticated-user"];
        readonly delete: operations["interactions/remove-restrictions-for-authenticated-user"];
    };
    readonly "/user/issues": {
        readonly get: operations["issues/list-for-authenticated-user"];
    };
    readonly "/user/keys": {
        readonly get: operations["users/list-public-ssh-keys-for-authenticated"];
        readonly post: operations["users/create-public-ssh-key-for-authenticated"];
    };
    readonly "/user/keys/{key_id}": {
        readonly get: operations["users/get-public-ssh-key-for-authenticated"];
        readonly delete: operations["users/delete-public-ssh-key-for-authenticated"];
    };
    readonly "/user/marketplace_purchases": {
        readonly get: operations["apps/list-subscriptions-for-authenticated-user"];
    };
    readonly "/user/marketplace_purchases/stubbed": {
        readonly get: operations["apps/list-subscriptions-for-authenticated-user-stubbed"];
    };
    readonly "/user/memberships/orgs": {
        readonly get: operations["orgs/list-memberships-for-authenticated-user"];
    };
    readonly "/user/memberships/orgs/{org}": {
        readonly get: operations["orgs/get-membership-for-authenticated-user"];
        readonly patch: operations["orgs/update-membership-for-authenticated-user"];
    };
    readonly "/user/migrations": {
        readonly get: operations["migrations/list-for-authenticated-user"];
        readonly post: operations["migrations/start-for-authenticated-user"];
    };
    readonly "/user/migrations/{migration_id}": {
        readonly get: operations["migrations/get-status-for-authenticated-user"];
    };
    readonly "/user/migrations/{migration_id}/archive": {
        readonly get: operations["migrations/get-archive-for-authenticated-user"];
        readonly delete: operations["migrations/delete-archive-for-authenticated-user"];
    };
    readonly "/user/migrations/{migration_id}/repos/{repo_name}/lock": {
        readonly delete: operations["migrations/unlock-repo-for-authenticated-user"];
    };
    readonly "/user/migrations/{migration_id}/repositories": {
        readonly get: operations["migrations/list-repos-for-user"];
    };
    readonly "/user/orgs": {
        readonly get: operations["orgs/list-for-authenticated-user"];
    };
    readonly "/user/packages/{package_type}/{package_name}": {
        readonly get: operations["packages/get-package-for-authenticated-user"];
        readonly delete: operations["packages/delete-package-for-authenticated-user"];
    };
    readonly "/user/packages/{package_type}/{package_name}/restore": {
        readonly post: operations["packages/restore-package-for-authenticated-user"];
    };
    readonly "/user/packages/{package_type}/{package_name}/versions": {
        readonly get: operations["packages/get-all-package-versions-for-package-owned-by-authenticated-user"];
    };
    readonly "/user/packages/{package_type}/{package_name}/versions/{package_version_id}": {
        readonly get: operations["packages/get-package-version-for-authenticated-user"];
        readonly delete: operations["packages/delete-package-version-for-authenticated-user"];
    };
    readonly "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore": {
        readonly post: operations["packages/restore-package-version-for-authenticated-user"];
    };
    readonly "/user/projects": {
        readonly post: operations["projects/create-for-authenticated-user"];
    };
    readonly "/user/public_emails": {
        readonly get: operations["users/list-public-emails-for-authenticated"];
    };
    readonly "/user/repos": {
        readonly get: operations["repos/list-for-authenticated-user"];
        readonly post: operations["repos/create-for-authenticated-user"];
    };
    readonly "/user/repository_invitations": {
        readonly get: operations["repos/list-invitations-for-authenticated-user"];
    };
    readonly "/user/repository_invitations/{invitation_id}": {
        readonly delete: operations["repos/decline-invitation"];
        readonly patch: operations["repos/accept-invitation"];
    };
    readonly "/user/starred": {
        readonly get: operations["activity/list-repos-starred-by-authenticated-user"];
    };
    readonly "/user/starred/{owner}/{repo}": {
        readonly get: operations["activity/check-repo-is-starred-by-authenticated-user"];
        readonly put: operations["activity/star-repo-for-authenticated-user"];
        readonly delete: operations["activity/unstar-repo-for-authenticated-user"];
    };
    readonly "/user/subscriptions": {
        readonly get: operations["activity/list-watched-repos-for-authenticated-user"];
    };
    readonly "/user/teams": {
        readonly get: operations["teams/list-for-authenticated-user"];
    };
    readonly "/users": {
        readonly get: operations["users/list"];
    };
    readonly "/users/{username}": {
        readonly get: operations["users/get-by-username"];
    };
    readonly "/users/{username}/events": {
        readonly get: operations["activity/list-events-for-authenticated-user"];
    };
    readonly "/users/{username}/events/orgs/{org}": {
        readonly get: operations["activity/list-org-events-for-authenticated-user"];
    };
    readonly "/users/{username}/events/public": {
        readonly get: operations["activity/list-public-events-for-user"];
    };
    readonly "/users/{username}/followers": {
        readonly get: operations["users/list-followers-for-user"];
    };
    readonly "/users/{username}/following": {
        readonly get: operations["users/list-following-for-user"];
    };
    readonly "/users/{username}/following/{target_user}": {
        readonly get: operations["users/check-following-for-user"];
    };
    readonly "/users/{username}/gists": {
        readonly get: operations["gists/list-for-user"];
    };
    readonly "/users/{username}/gpg_keys": {
        readonly get: operations["users/list-gpg-keys-for-user"];
    };
    readonly "/users/{username}/hovercard": {
        readonly get: operations["users/get-context-for-user"];
    };
    readonly "/users/{username}/installation": {
        readonly get: operations["apps/get-user-installation"];
    };
    readonly "/users/{username}/keys": {
        readonly get: operations["users/list-public-keys-for-user"];
    };
    readonly "/users/{username}/orgs": {
        readonly get: operations["orgs/list-for-user"];
    };
    readonly "/users/{username}/packages/{package_type}/{package_name}": {
        readonly get: operations["packages/get-package-for-user"];
    };
    readonly "/users/{username}/packages/{package_type}/{package_name}/versions": {
        readonly get: operations["packages/get-all-package-versions-for-package-owned-by-user"];
    };
    readonly "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}": {
        readonly get: operations["packages/get-package-version-for-user"];
    };
    readonly "/users/{username}/projects": {
        readonly get: operations["projects/list-for-user"];
    };
    readonly "/users/{username}/received_events": {
        readonly get: operations["activity/list-received-events-for-user"];
    };
    readonly "/users/{username}/received_events/public": {
        readonly get: operations["activity/list-received-public-events-for-user"];
    };
    readonly "/users/{username}/repos": {
        readonly get: operations["repos/list-for-user"];
    };
    readonly "/users/{username}/settings/billing/actions": {
        readonly get: operations["billing/get-github-actions-billing-user"];
    };
    readonly "/users/{username}/settings/billing/packages": {
        readonly get: operations["billing/get-github-packages-billing-user"];
    };
    readonly "/users/{username}/settings/billing/shared-storage": {
        readonly get: operations["billing/get-shared-storage-billing-user"];
    };
    readonly "/users/{username}/starred": {
        readonly get: operations["activity/list-repos-starred-by-user"];
    };
    readonly "/users/{username}/subscriptions": {
        readonly get: operations["activity/list-repos-watched-by-user"];
    };
    readonly "/zen": {
        readonly get: operations["meta/get-zen"];
    };
}
export interface components {
    readonly schemas: {
        readonly "simple-user": {
            readonly name?: string | null;
            readonly email?: string | null;
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly avatar_url: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly html_url: string;
            readonly followers_url: string;
            readonly following_url: string;
            readonly gists_url: string;
            readonly starred_url: string;
            readonly subscriptions_url: string;
            readonly organizations_url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly received_events_url: string;
            readonly type: string;
            readonly site_admin: boolean;
            readonly starred_at?: string;
        } | null;
        readonly integration: {
            readonly id: number;
            readonly slug?: string;
            readonly node_id: string;
            readonly owner: components["schemas"]["simple-user"] | null;
            readonly name: string;
            readonly description: string | null;
            readonly external_url: string;
            readonly html_url: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly permissions: {
                readonly issues?: string;
                readonly checks?: string;
                readonly metadata?: string;
                readonly contents?: string;
                readonly deployments?: string;
            } & {
                readonly [key: string]: string;
            };
            readonly events: readonly string[];
            readonly installations_count?: number;
            readonly client_id?: string;
            readonly client_secret?: string;
            readonly webhook_secret?: string | null;
            readonly pem?: string;
        } | null;
        readonly "basic-error": {
            readonly message?: string;
            readonly documentation_url?: string;
            readonly url?: string;
            readonly status?: string;
        };
        readonly "validation-error-simple": {
            readonly message: string;
            readonly documentation_url: string;
            readonly errors?: readonly string[];
        };
        readonly "webhook-config-url": string;
        readonly "webhook-config-content-type": string;
        readonly "webhook-config-secret": string;
        readonly "webhook-config-insecure-ssl": string | number;
        readonly "webhook-config": {
            readonly url?: components["schemas"]["webhook-config-url"];
            readonly content_type?: components["schemas"]["webhook-config-content-type"];
            readonly secret?: components["schemas"]["webhook-config-secret"];
            readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
        };
        readonly "hook-delivery-item": {
            readonly id: number;
            readonly guid: string;
            readonly delivered_at: string;
            readonly redelivery: boolean;
            readonly duration: number;
            readonly status: string;
            readonly status_code: number;
            readonly event: string;
            readonly action: string | null;
            readonly installation_id: number | null;
            readonly repository_id: number | null;
        };
        readonly "scim-error": {
            readonly message?: string | null;
            readonly documentation_url?: string | null;
            readonly detail?: string | null;
            readonly status?: number;
            readonly scimType?: string | null;
            readonly schemas?: readonly string[];
        };
        readonly "validation-error": {
            readonly message: string;
            readonly documentation_url: string;
            readonly errors?: readonly {
                readonly resource?: string;
                readonly field?: string;
                readonly message?: string;
                readonly code: string;
                readonly index?: number;
                readonly value?: (string | null) | (number | null) | (readonly string[] | null);
            }[];
        };
        readonly "hook-delivery": {
            readonly id: number;
            readonly guid: string;
            readonly delivered_at: string;
            readonly redelivery: boolean;
            readonly duration: number;
            readonly status: string;
            readonly status_code: number;
            readonly event: string;
            readonly action: string | null;
            readonly installation_id: number | null;
            readonly repository_id: number | null;
            readonly request: {
                readonly headers: {
                    readonly [key: string]: any;
                } | null;
                readonly payload: {
                    readonly [key: string]: any;
                } | null;
            };
            readonly response: {
                readonly headers: {
                    readonly [key: string]: any;
                } | null;
                readonly payload: string | null;
            };
        };
        readonly enterprise: {
            readonly description?: string | null;
            readonly html_url: string;
            readonly website_url?: string | null;
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly slug: string;
            readonly created_at: string | null;
            readonly updated_at: string | null;
            readonly avatar_url: string;
        };
        readonly "app-permissions": {
            readonly actions?: "read" | "write";
            readonly administration?: "read" | "write";
            readonly checks?: "read" | "write";
            readonly content_references?: "read" | "write";
            readonly contents?: "read" | "write";
            readonly deployments?: "read" | "write";
            readonly environments?: "read" | "write";
            readonly issues?: "read" | "write";
            readonly metadata?: "read" | "write";
            readonly packages?: "read" | "write";
            readonly pages?: "read" | "write";
            readonly pull_requests?: "read" | "write";
            readonly repository_hooks?: "read" | "write";
            readonly repository_projects?: "read" | "write" | "admin";
            readonly secret_scanning_alerts?: "read" | "write";
            readonly secrets?: "read" | "write";
            readonly security_events?: "read" | "write";
            readonly single_file?: "read" | "write";
            readonly statuses?: "read" | "write";
            readonly vulnerability_alerts?: "read";
            readonly workflows?: "write";
            readonly members?: "read" | "write";
            readonly organization_administration?: "read" | "write";
            readonly organization_hooks?: "read" | "write";
            readonly organization_plan?: "read";
            readonly organization_projects?: "read" | "write" | "admin";
            readonly organization_packages?: "read" | "write";
            readonly organization_secrets?: "read" | "write";
            readonly organization_self_hosted_runners?: "read" | "write";
            readonly organization_user_blocking?: "read" | "write";
            readonly team_discussions?: "read" | "write";
        };
        readonly installation: {
            readonly id: number;
            readonly account: (Partial<components["schemas"]["simple-user"]> & Partial<components["schemas"]["enterprise"]>) | null;
            readonly repository_selection: "all" | "selected";
            readonly access_tokens_url: string;
            readonly repositories_url: string;
            readonly html_url: string;
            readonly app_id: number;
            readonly target_id: number;
            readonly target_type: string;
            readonly permissions: components["schemas"]["app-permissions"];
            readonly events: readonly string[];
            readonly created_at: string;
            readonly updated_at: string;
            readonly single_file_name: string | null;
            readonly has_multiple_single_files?: boolean;
            readonly single_file_paths?: readonly string[];
            readonly app_slug: string;
            readonly suspended_by: components["schemas"]["simple-user"] | null;
            readonly suspended_at: string | null;
            readonly contact_email?: string | null;
        };
        readonly "license-simple": {
            readonly key: string;
            readonly name: string;
            readonly url: string | null;
            readonly spdx_id: string | null;
            readonly node_id: string;
            readonly html_url?: string;
        };
        readonly repository: {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly full_name: string;
            readonly license: components["schemas"]["license-simple"] | null;
            readonly organization?: components["schemas"]["simple-user"] | null;
            readonly forks: number;
            readonly permissions?: {
                readonly admin: boolean;
                readonly pull: boolean;
                readonly triage?: boolean;
                readonly push: boolean;
                readonly maintain?: boolean;
            };
            readonly owner: components["schemas"]["simple-user"];
            readonly private: boolean;
            readonly html_url: string;
            readonly description: string | null;
            readonly fork: boolean;
            readonly url: string;
            readonly archive_url: string;
            readonly assignees_url: string;
            readonly blobs_url: string;
            readonly branches_url: string;
            readonly collaborators_url: string;
            readonly comments_url: string;
            readonly commits_url: string;
            readonly compare_url: string;
            readonly contents_url: string;
            readonly contributors_url: string;
            readonly deployments_url: string;
            readonly downloads_url: string;
            readonly events_url: string;
            readonly forks_url: string;
            readonly git_commits_url: string;
            readonly git_refs_url: string;
            readonly git_tags_url: string;
            readonly git_url: string;
            readonly issue_comment_url: string;
            readonly issue_events_url: string;
            readonly issues_url: string;
            readonly keys_url: string;
            readonly labels_url: string;
            readonly languages_url: string;
            readonly merges_url: string;
            readonly milestones_url: string;
            readonly notifications_url: string;
            readonly pulls_url: string;
            readonly releases_url: string;
            readonly ssh_url: string;
            readonly stargazers_url: string;
            readonly statuses_url: string;
            readonly subscribers_url: string;
            readonly subscription_url: string;
            readonly tags_url: string;
            readonly teams_url: string;
            readonly trees_url: string;
            readonly clone_url: string;
            readonly mirror_url: string | null;
            readonly hooks_url: string;
            readonly svn_url: string;
            readonly homepage: string | null;
            readonly language: string | null;
            readonly forks_count: number;
            readonly stargazers_count: number;
            readonly watchers_count: number;
            readonly size: number;
            readonly default_branch: string;
            readonly open_issues_count: number;
            readonly is_template?: boolean;
            readonly topics?: readonly string[];
            readonly has_issues: boolean;
            readonly has_projects: boolean;
            readonly has_wiki: boolean;
            readonly has_pages: boolean;
            readonly has_downloads: boolean;
            readonly archived: boolean;
            readonly disabled: boolean;
            readonly visibility?: string;
            readonly pushed_at: string | null;
            readonly created_at: string | null;
            readonly updated_at: string | null;
            readonly allow_rebase_merge?: boolean;
            readonly template_repository?: {
                readonly id?: number;
                readonly node_id?: string;
                readonly name?: string;
                readonly full_name?: string;
                readonly owner?: {
                    readonly login?: string;
                    readonly id?: number;
                    readonly node_id?: string;
                    readonly avatar_url?: string;
                    readonly gravatar_id?: string;
                    readonly url?: string;
                    readonly html_url?: string;
                    readonly followers_url?: string;
                    readonly following_url?: string;
                    readonly gists_url?: string;
                    readonly starred_url?: string;
                    readonly subscriptions_url?: string;
                    readonly organizations_url?: string;
                    readonly repos_url?: string;
                    readonly events_url?: string;
                    readonly received_events_url?: string;
                    readonly type?: string;
                    readonly site_admin?: boolean;
                };
                readonly private?: boolean;
                readonly html_url?: string;
                readonly description?: string;
                readonly fork?: boolean;
                readonly url?: string;
                readonly archive_url?: string;
                readonly assignees_url?: string;
                readonly blobs_url?: string;
                readonly branches_url?: string;
                readonly collaborators_url?: string;
                readonly comments_url?: string;
                readonly commits_url?: string;
                readonly compare_url?: string;
                readonly contents_url?: string;
                readonly contributors_url?: string;
                readonly deployments_url?: string;
                readonly downloads_url?: string;
                readonly events_url?: string;
                readonly forks_url?: string;
                readonly git_commits_url?: string;
                readonly git_refs_url?: string;
                readonly git_tags_url?: string;
                readonly git_url?: string;
                readonly issue_comment_url?: string;
                readonly issue_events_url?: string;
                readonly issues_url?: string;
                readonly keys_url?: string;
                readonly labels_url?: string;
                readonly languages_url?: string;
                readonly merges_url?: string;
                readonly milestones_url?: string;
                readonly notifications_url?: string;
                readonly pulls_url?: string;
                readonly releases_url?: string;
                readonly ssh_url?: string;
                readonly stargazers_url?: string;
                readonly statuses_url?: string;
                readonly subscribers_url?: string;
                readonly subscription_url?: string;
                readonly tags_url?: string;
                readonly teams_url?: string;
                readonly trees_url?: string;
                readonly clone_url?: string;
                readonly mirror_url?: string;
                readonly hooks_url?: string;
                readonly svn_url?: string;
                readonly homepage?: string;
                readonly language?: string;
                readonly forks_count?: number;
                readonly stargazers_count?: number;
                readonly watchers_count?: number;
                readonly size?: number;
                readonly default_branch?: string;
                readonly open_issues_count?: number;
                readonly is_template?: boolean;
                readonly topics?: readonly string[];
                readonly has_issues?: boolean;
                readonly has_projects?: boolean;
                readonly has_wiki?: boolean;
                readonly has_pages?: boolean;
                readonly has_downloads?: boolean;
                readonly archived?: boolean;
                readonly disabled?: boolean;
                readonly visibility?: string;
                readonly pushed_at?: string;
                readonly created_at?: string;
                readonly updated_at?: string;
                readonly permissions?: {
                    readonly admin?: boolean;
                    readonly push?: boolean;
                    readonly pull?: boolean;
                };
                readonly allow_rebase_merge?: boolean;
                readonly temp_clone_token?: string;
                readonly allow_squash_merge?: boolean;
                readonly allow_auto_merge?: boolean;
                readonly delete_branch_on_merge?: boolean;
                readonly allow_merge_commit?: boolean;
                readonly subscribers_count?: number;
                readonly network_count?: number;
            } | null;
            readonly temp_clone_token?: string;
            readonly allow_squash_merge?: boolean;
            readonly allow_auto_merge?: boolean;
            readonly delete_branch_on_merge?: boolean;
            readonly allow_merge_commit?: boolean;
            readonly subscribers_count?: number;
            readonly network_count?: number;
            readonly open_issues: number;
            readonly watchers: number;
            readonly master_branch?: string;
            readonly starred_at?: string;
        };
        readonly "installation-token": {
            readonly token: string;
            readonly expires_at: string;
            readonly permissions?: components["schemas"]["app-permissions"];
            readonly repository_selection?: "all" | "selected";
            readonly repositories?: readonly components["schemas"]["repository"][];
            readonly single_file?: string;
            readonly has_multiple_single_files?: boolean;
            readonly single_file_paths?: readonly string[];
        };
        readonly "application-grant": {
            readonly id: number;
            readonly url: string;
            readonly app: {
                readonly client_id: string;
                readonly name: string;
                readonly url: string;
            };
            readonly created_at: string;
            readonly updated_at: string;
            readonly scopes: readonly string[];
            readonly user?: components["schemas"]["simple-user"] | null;
        };
        readonly "scoped-installation": {
            readonly permissions: components["schemas"]["app-permissions"];
            readonly repository_selection: "all" | "selected";
            readonly single_file_name: string | null;
            readonly has_multiple_single_files?: boolean;
            readonly single_file_paths?: readonly string[];
            readonly repositories_url: string;
            readonly account: components["schemas"]["simple-user"];
        };
        readonly authorization: {
            readonly id: number;
            readonly url: string;
            readonly scopes: readonly string[] | null;
            readonly token: string;
            readonly token_last_eight: string | null;
            readonly hashed_token: string | null;
            readonly app: {
                readonly client_id: string;
                readonly name: string;
                readonly url: string;
            };
            readonly note: string | null;
            readonly note_url: string | null;
            readonly updated_at: string;
            readonly created_at: string;
            readonly fingerprint: string | null;
            readonly user?: components["schemas"]["simple-user"] | null;
            readonly installation?: components["schemas"]["scoped-installation"] | null;
        };
        readonly "code-of-conduct": {
            readonly key: string;
            readonly name: string;
            readonly url: string;
            readonly body?: string;
            readonly html_url: string | null;
        };
        readonly "enabled-organizations": "all" | "none" | "selected";
        readonly "allowed-actions": "all" | "local_only" | "selected";
        readonly "selected-actions-url": string;
        readonly "actions-enterprise-permissions": {
            readonly enabled_organizations: components["schemas"]["enabled-organizations"];
            readonly selected_organizations_url?: string;
            readonly allowed_actions?: components["schemas"]["allowed-actions"];
            readonly selected_actions_url?: components["schemas"]["selected-actions-url"];
        };
        readonly "organization-simple": {
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly hooks_url: string;
            readonly issues_url: string;
            readonly members_url: string;
            readonly public_members_url: string;
            readonly avatar_url: string;
            readonly description: string | null;
        };
        readonly "selected-actions": {
            readonly github_owned_allowed?: boolean;
            readonly verified_allowed?: boolean;
            readonly patterns_allowed?: readonly string[];
        };
        readonly "runner-groups-enterprise": {
            readonly id: number;
            readonly name: string;
            readonly visibility: string;
            readonly default: boolean;
            readonly selected_organizations_url?: string;
            readonly runners_url: string;
            readonly allows_public_repositories: boolean;
        };
        readonly runner: {
            readonly id: number;
            readonly name: string;
            readonly os: string;
            readonly status: string;
            readonly busy: boolean;
            readonly labels: readonly {
                readonly id?: number;
                readonly name?: string;
                readonly type?: "read-only" | "custom";
            }[];
        };
        readonly "runner-application": {
            readonly os: string;
            readonly architecture: string;
            readonly download_url: string;
            readonly filename: string;
            readonly temp_download_token?: string;
            readonly sha256_checksum?: string;
        };
        readonly "authentication-token": {
            readonly token: string;
            readonly expires_at: string;
            readonly permissions?: {
                readonly [key: string]: unknown;
            };
            readonly repositories?: readonly components["schemas"]["repository"][];
            readonly single_file?: string | null;
            readonly repository_selection?: "all" | "selected";
        };
        readonly "audit-log-event": {
            readonly "@timestamp"?: number;
            readonly action?: string;
            readonly active?: boolean;
            readonly active_was?: boolean;
            readonly actor?: string;
            readonly actor_id?: number;
            readonly actor_location?: {
                readonly country_name?: string;
            };
            readonly data?: {
                readonly [key: string]: any;
            };
            readonly org_id?: number;
            readonly blocked_user?: string;
            readonly business?: string;
            readonly config?: readonly any[];
            readonly config_was?: readonly any[];
            readonly content_type?: string;
            readonly created_at?: number;
            readonly deploy_key_fingerprint?: string;
            readonly _document_id?: string;
            readonly emoji?: string;
            readonly events?: readonly any[];
            readonly events_were?: readonly any[];
            readonly explanation?: string;
            readonly fingerprint?: string;
            readonly hook_id?: number;
            readonly limited_availability?: boolean;
            readonly message?: string;
            readonly name?: string;
            readonly old_user?: string;
            readonly openssh_public_key?: string;
            readonly org?: string;
            readonly previous_visibility?: string;
            readonly read_only?: boolean;
            readonly repo?: string;
            readonly repository?: string;
            readonly repository_public?: boolean;
            readonly target_login?: string;
            readonly team?: string;
            readonly transport_protocol?: number;
            readonly transport_protocol_name?: string;
            readonly user?: string;
            readonly visibility?: string;
        };
        readonly "actions-billing-usage": {
            readonly total_minutes_used: number;
            readonly total_paid_minutes_used: number;
            readonly included_minutes: number;
            readonly minutes_used_breakdown: {
                readonly UBUNTU?: number;
                readonly MACOS?: number;
                readonly WINDOWS?: number;
            };
        };
        readonly "packages-billing-usage": {
            readonly total_gigabytes_bandwidth_used: number;
            readonly total_paid_gigabytes_bandwidth_used: number;
            readonly included_gigabytes_bandwidth: number;
        };
        readonly "combined-billing-usage": {
            readonly days_left_in_billing_cycle: number;
            readonly estimated_paid_storage_for_month: number;
            readonly estimated_storage_for_month: number;
        };
        readonly actor: {
            readonly id: number;
            readonly login: string;
            readonly display_login?: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly avatar_url: string;
        };
        readonly label: {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly name: string;
            readonly description: string | null;
            readonly color: string;
            readonly default: boolean;
        };
        readonly milestone: {
            readonly url: string;
            readonly html_url: string;
            readonly labels_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly number: number;
            readonly state: "open" | "closed";
            readonly title: string;
            readonly description: string | null;
            readonly creator: components["schemas"]["simple-user"] | null;
            readonly open_issues: number;
            readonly closed_issues: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly closed_at: string | null;
            readonly due_on: string | null;
        };
        readonly author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        readonly "issue-simple": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly repository_url: string;
            readonly labels_url: string;
            readonly comments_url: string;
            readonly events_url: string;
            readonly html_url: string;
            readonly number: number;
            readonly state: string;
            readonly title: string;
            readonly body?: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly labels: readonly components["schemas"]["label"][];
            readonly assignee: components["schemas"]["simple-user"] | null;
            readonly assignees?: readonly components["schemas"]["simple-user"][] | null;
            readonly milestone: components["schemas"]["milestone"] | null;
            readonly locked: boolean;
            readonly active_lock_reason?: string | null;
            readonly comments: number;
            readonly pull_request?: {
                readonly merged_at?: string | null;
                readonly diff_url: string | null;
                readonly html_url: string | null;
                readonly patch_url: string | null;
                readonly url: string | null;
            };
            readonly closed_at: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly body_html?: string;
            readonly body_text?: string;
            readonly timeline_url?: string;
            readonly repository?: components["schemas"]["repository"];
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "reaction-rollup": {
            readonly url: string;
            readonly total_count: number;
            readonly "+1": number;
            readonly "-1": number;
            readonly laugh: number;
            readonly confused: number;
            readonly heart: number;
            readonly hooray: number;
            readonly eyes: number;
            readonly rocket: number;
        };
        readonly "issue-comment": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly body?: string;
            readonly body_text?: string;
            readonly body_html?: string;
            readonly html_url: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly issue_url: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly event: {
            readonly id: string;
            readonly type: string | null;
            readonly actor: components["schemas"]["actor"];
            readonly repo: {
                readonly id: number;
                readonly name: string;
                readonly url: string;
            };
            readonly org?: components["schemas"]["actor"];
            readonly payload: {
                readonly action?: string;
                readonly issue?: components["schemas"]["issue-simple"];
                readonly comment?: components["schemas"]["issue-comment"];
                readonly pages?: readonly {
                    readonly page_name?: string;
                    readonly title?: string;
                    readonly summary?: string | null;
                    readonly action?: string;
                    readonly sha?: string;
                    readonly html_url?: string;
                }[];
            };
            readonly public: boolean;
            readonly created_at: string | null;
        };
        readonly "link-with-type": {
            readonly href: string;
            readonly type: string;
        };
        readonly feed: {
            readonly timeline_url: string;
            readonly user_url: string;
            readonly current_user_public_url?: string;
            readonly current_user_url?: string;
            readonly current_user_actor_url?: string;
            readonly current_user_organization_url?: string;
            readonly current_user_organization_urls?: readonly string[];
            readonly security_advisories_url?: string;
            readonly _links: {
                readonly timeline: components["schemas"]["link-with-type"];
                readonly user: components["schemas"]["link-with-type"];
                readonly security_advisories?: components["schemas"]["link-with-type"];
                readonly current_user?: components["schemas"]["link-with-type"];
                readonly current_user_public?: components["schemas"]["link-with-type"];
                readonly current_user_actor?: components["schemas"]["link-with-type"];
                readonly current_user_organization?: components["schemas"]["link-with-type"];
                readonly current_user_organizations?: readonly components["schemas"]["link-with-type"][];
            };
        };
        readonly "base-gist": {
            readonly url: string;
            readonly forks_url: string;
            readonly commits_url: string;
            readonly id: string;
            readonly node_id: string;
            readonly git_pull_url: string;
            readonly git_push_url: string;
            readonly html_url: string;
            readonly files: {
                readonly [key: string]: {
                    readonly filename?: string;
                    readonly type?: string;
                    readonly language?: string;
                    readonly raw_url?: string;
                    readonly size?: number;
                };
            };
            readonly public: boolean;
            readonly created_at: string;
            readonly updated_at: string;
            readonly description: string | null;
            readonly comments: number;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly comments_url: string;
            readonly owner?: components["schemas"]["simple-user"] | null;
            readonly truncated?: boolean;
            readonly forks?: readonly {
                readonly [key: string]: unknown;
            }[];
            readonly history?: readonly {
                readonly [key: string]: unknown;
            }[];
        };
        readonly "public-user": {
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly avatar_url: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly html_url: string;
            readonly followers_url: string;
            readonly following_url: string;
            readonly gists_url: string;
            readonly starred_url: string;
            readonly subscriptions_url: string;
            readonly organizations_url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly received_events_url: string;
            readonly type: string;
            readonly site_admin: boolean;
            readonly name: string | null;
            readonly company: string | null;
            readonly blog: string | null;
            readonly location: string | null;
            readonly email: string | null;
            readonly hireable: boolean | null;
            readonly bio: string | null;
            readonly twitter_username?: string | null;
            readonly public_repos: number;
            readonly public_gists: number;
            readonly followers: number;
            readonly following: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly plan?: {
                readonly collaborators: number;
                readonly name: string;
                readonly space: number;
                readonly private_repos: number;
            };
            readonly suspended_at?: string | null;
            readonly private_gists?: number;
            readonly total_private_repos?: number;
            readonly owned_private_repos?: number;
            readonly disk_usage?: number;
            readonly collaborators?: number;
        };
        readonly "gist-history": {
            readonly user?: components["schemas"]["simple-user"];
            readonly version?: string;
            readonly committed_at?: string;
            readonly change_status?: {
                readonly total?: number;
                readonly additions?: number;
                readonly deletions?: number;
            };
            readonly url?: string;
        };
        readonly "gist-simple": {
            readonly forks?: readonly {
                readonly id?: string;
                readonly url?: string;
                readonly user?: components["schemas"]["public-user"];
                readonly created_at?: string;
                readonly updated_at?: string;
            }[] | null;
            readonly history?: readonly components["schemas"]["gist-history"][] | null;
            readonly fork_of?: {
                readonly url: string;
                readonly forks_url: string;
                readonly commits_url: string;
                readonly id: string;
                readonly node_id: string;
                readonly git_pull_url: string;
                readonly git_push_url: string;
                readonly html_url: string;
                readonly files: {
                    readonly [key: string]: {
                        readonly filename?: string;
                        readonly type?: string;
                        readonly language?: string;
                        readonly raw_url?: string;
                        readonly size?: number;
                    };
                };
                readonly public: boolean;
                readonly created_at: string;
                readonly updated_at: string;
                readonly description: string | null;
                readonly comments: number;
                readonly user: components["schemas"]["simple-user"] | null;
                readonly comments_url: string;
                readonly owner?: components["schemas"]["simple-user"] | null;
                readonly truncated?: boolean;
                readonly forks?: readonly {
                    readonly [key: string]: unknown;
                }[];
                readonly history?: readonly {
                    readonly [key: string]: unknown;
                }[];
            } | null;
            readonly url?: string;
            readonly forks_url?: string;
            readonly commits_url?: string;
            readonly id?: string;
            readonly node_id?: string;
            readonly git_pull_url?: string;
            readonly git_push_url?: string;
            readonly html_url?: string;
            readonly files?: {
                readonly [key: string]: {
                    readonly filename?: string;
                    readonly type?: string;
                    readonly language?: string;
                    readonly raw_url?: string;
                    readonly size?: number;
                    readonly truncated?: boolean;
                    readonly content?: string;
                } | null;
            };
            readonly public?: boolean;
            readonly created_at?: string;
            readonly updated_at?: string;
            readonly description?: string | null;
            readonly comments?: number;
            readonly user?: string | null;
            readonly comments_url?: string;
            readonly owner?: components["schemas"]["simple-user"];
            readonly truncated?: boolean;
        };
        readonly "gist-comment": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly body: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly author_association: components["schemas"]["author_association"];
        };
        readonly "gist-commit": {
            readonly url: string;
            readonly version: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly change_status: {
                readonly total?: number;
                readonly additions?: number;
                readonly deletions?: number;
            };
            readonly committed_at: string;
        };
        readonly "gitignore-template": {
            readonly name: string;
            readonly source: string;
        };
        readonly issue: {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly repository_url: string;
            readonly labels_url: string;
            readonly comments_url: string;
            readonly events_url: string;
            readonly html_url: string;
            readonly number: number;
            readonly state: string;
            readonly title: string;
            readonly body?: string | null;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly labels: readonly (string | {
                readonly id?: number;
                readonly node_id?: string;
                readonly url?: string;
                readonly name?: string;
                readonly description?: string | null;
                readonly color?: string | null;
                readonly default?: boolean;
            })[];
            readonly assignee: components["schemas"]["simple-user"] | null;
            readonly assignees?: readonly components["schemas"]["simple-user"][] | null;
            readonly milestone: components["schemas"]["milestone"] | null;
            readonly locked: boolean;
            readonly active_lock_reason?: string | null;
            readonly comments: number;
            readonly pull_request?: {
                readonly merged_at?: string | null;
                readonly diff_url: string | null;
                readonly html_url: string | null;
                readonly patch_url: string | null;
                readonly url: string | null;
            };
            readonly closed_at: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly closed_by?: components["schemas"]["simple-user"] | null;
            readonly body_html?: string;
            readonly body_text?: string;
            readonly timeline_url?: string;
            readonly repository?: components["schemas"]["repository"];
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
            readonly author_association: components["schemas"]["author_association"];
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly license: {
            readonly key: string;
            readonly name: string;
            readonly spdx_id: string | null;
            readonly url: string | null;
            readonly node_id: string;
            readonly html_url: string;
            readonly description: string;
            readonly implementation: string;
            readonly permissions: readonly string[];
            readonly conditions: readonly string[];
            readonly limitations: readonly string[];
            readonly body: string;
            readonly featured: boolean;
        };
        readonly "marketplace-listing-plan": {
            readonly url: string;
            readonly accounts_url: string;
            readonly id: number;
            readonly number: number;
            readonly name: string;
            readonly description: string;
            readonly monthly_price_in_cents: number;
            readonly yearly_price_in_cents: number;
            readonly price_model: string;
            readonly has_free_trial: boolean;
            readonly unit_name: string | null;
            readonly state: string;
            readonly bullets: readonly string[];
        };
        readonly "marketplace-purchase": {
            readonly url: string;
            readonly type: string;
            readonly id: number;
            readonly login: string;
            readonly organization_billing_email?: string;
            readonly email?: string | null;
            readonly marketplace_pending_change?: {
                readonly is_installed?: boolean;
                readonly effective_date?: string;
                readonly unit_count?: number | null;
                readonly id?: number;
                readonly plan?: components["schemas"]["marketplace-listing-plan"];
            } | null;
            readonly marketplace_purchase: {
                readonly billing_cycle?: string;
                readonly next_billing_date?: string | null;
                readonly is_installed?: boolean;
                readonly unit_count?: number | null;
                readonly on_free_trial?: boolean;
                readonly free_trial_ends_on?: string | null;
                readonly updated_at?: string;
                readonly plan?: components["schemas"]["marketplace-listing-plan"];
            };
        };
        readonly "api-overview": {
            readonly verifiable_password_authentication: boolean;
            readonly ssh_key_fingerprints?: {
                readonly SHA256_RSA?: string;
                readonly SHA256_DSA?: string;
            };
            readonly hooks?: readonly string[];
            readonly web?: readonly string[];
            readonly api?: readonly string[];
            readonly git?: readonly string[];
            readonly packages?: readonly string[];
            readonly pages?: readonly string[];
            readonly importer?: readonly string[];
            readonly actions?: readonly string[];
            readonly dependabot?: readonly string[];
        };
        readonly "minimal-repository": {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly full_name: string;
            readonly owner: components["schemas"]["simple-user"];
            readonly private: boolean;
            readonly html_url: string;
            readonly description: string | null;
            readonly fork: boolean;
            readonly url: string;
            readonly archive_url: string;
            readonly assignees_url: string;
            readonly blobs_url: string;
            readonly branches_url: string;
            readonly collaborators_url: string;
            readonly comments_url: string;
            readonly commits_url: string;
            readonly compare_url: string;
            readonly contents_url: string;
            readonly contributors_url: string;
            readonly deployments_url: string;
            readonly downloads_url: string;
            readonly events_url: string;
            readonly forks_url: string;
            readonly git_commits_url: string;
            readonly git_refs_url: string;
            readonly git_tags_url: string;
            readonly git_url?: string;
            readonly issue_comment_url: string;
            readonly issue_events_url: string;
            readonly issues_url: string;
            readonly keys_url: string;
            readonly labels_url: string;
            readonly languages_url: string;
            readonly merges_url: string;
            readonly milestones_url: string;
            readonly notifications_url: string;
            readonly pulls_url: string;
            readonly releases_url: string;
            readonly ssh_url?: string;
            readonly stargazers_url: string;
            readonly statuses_url: string;
            readonly subscribers_url: string;
            readonly subscription_url: string;
            readonly tags_url: string;
            readonly teams_url: string;
            readonly trees_url: string;
            readonly clone_url?: string;
            readonly mirror_url?: string | null;
            readonly hooks_url: string;
            readonly svn_url?: string;
            readonly homepage?: string | null;
            readonly language?: string | null;
            readonly forks_count?: number;
            readonly stargazers_count?: number;
            readonly watchers_count?: number;
            readonly size?: number;
            readonly default_branch?: string;
            readonly open_issues_count?: number;
            readonly is_template?: boolean;
            readonly topics?: readonly string[];
            readonly has_issues?: boolean;
            readonly has_projects?: boolean;
            readonly has_wiki?: boolean;
            readonly has_pages?: boolean;
            readonly has_downloads?: boolean;
            readonly archived?: boolean;
            readonly disabled?: boolean;
            readonly visibility?: string;
            readonly pushed_at?: string | null;
            readonly created_at?: string | null;
            readonly updated_at?: string | null;
            readonly permissions?: {
                readonly admin?: boolean;
                readonly push?: boolean;
                readonly pull?: boolean;
                readonly maintain?: boolean;
                readonly triage?: boolean;
            };
            readonly template_repository?: components["schemas"]["repository"] | null;
            readonly temp_clone_token?: string;
            readonly delete_branch_on_merge?: boolean;
            readonly subscribers_count?: number;
            readonly network_count?: number;
            readonly code_of_conduct?: components["schemas"]["code-of-conduct"];
            readonly license?: {
                readonly key?: string;
                readonly name?: string;
                readonly spdx_id?: string;
                readonly url?: string;
                readonly node_id?: string;
            } | null;
            readonly forks?: number;
            readonly open_issues?: number;
            readonly watchers?: number;
        };
        readonly thread: {
            readonly id: string;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly subject: {
                readonly title: string;
                readonly url: string;
                readonly latest_comment_url: string;
                readonly type: string;
            };
            readonly reason: string;
            readonly unread: boolean;
            readonly updated_at: string;
            readonly last_read_at: string | null;
            readonly url: string;
            readonly subscription_url: string;
        };
        readonly "thread-subscription": {
            readonly subscribed: boolean;
            readonly ignored: boolean;
            readonly reason: string | null;
            readonly created_at: string | null;
            readonly url: string;
            readonly thread_url?: string;
            readonly repository_url?: string;
        };
        readonly "organization-full": {
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly hooks_url: string;
            readonly issues_url: string;
            readonly members_url: string;
            readonly public_members_url: string;
            readonly avatar_url: string;
            readonly description: string | null;
            readonly name?: string;
            readonly company?: string;
            readonly blog?: string;
            readonly location?: string;
            readonly email?: string;
            readonly twitter_username?: string | null;
            readonly is_verified?: boolean;
            readonly has_organization_projects: boolean;
            readonly has_repository_projects: boolean;
            readonly public_repos: number;
            readonly public_gists: number;
            readonly followers: number;
            readonly following: number;
            readonly html_url: string;
            readonly created_at: string;
            readonly type: string;
            readonly total_private_repos?: number;
            readonly owned_private_repos?: number;
            readonly private_gists?: number | null;
            readonly disk_usage?: number | null;
            readonly collaborators?: number | null;
            readonly billing_email?: string | null;
            readonly plan?: {
                readonly name: string;
                readonly space: number;
                readonly private_repos: number;
                readonly filled_seats?: number;
                readonly seats?: number;
            };
            readonly default_repository_permission?: string | null;
            readonly members_can_create_repositories?: boolean | null;
            readonly two_factor_requirement_enabled?: boolean | null;
            readonly members_allowed_repository_creation_type?: string;
            readonly members_can_create_public_repositories?: boolean;
            readonly members_can_create_private_repositories?: boolean;
            readonly members_can_create_internal_repositories?: boolean;
            readonly members_can_create_pages?: boolean;
            readonly members_can_create_public_pages?: boolean;
            readonly members_can_create_private_pages?: boolean;
            readonly updated_at: string;
        };
        readonly "enabled-repositories": "all" | "none" | "selected";
        readonly "actions-organization-permissions": {
            readonly enabled_repositories: components["schemas"]["enabled-repositories"];
            readonly selected_repositories_url?: string;
            readonly allowed_actions?: components["schemas"]["allowed-actions"];
            readonly selected_actions_url?: components["schemas"]["selected-actions-url"];
        };
        readonly "runner-groups-org": {
            readonly id: number;
            readonly name: string;
            readonly visibility: string;
            readonly default: boolean;
            readonly selected_repositories_url?: string;
            readonly runners_url: string;
            readonly inherited: boolean;
            readonly inherited_allows_public_repositories?: boolean;
            readonly allows_public_repositories: boolean;
        };
        readonly "organization-actions-secret": {
            readonly name: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly visibility: "all" | "private" | "selected";
            readonly selected_repositories_url?: string;
        };
        readonly "actions-public-key": {
            readonly key_id: string;
            readonly key: string;
            readonly id?: number;
            readonly url?: string;
            readonly title?: string;
            readonly created_at?: string;
        };
        readonly "empty-object": {
            readonly [key: string]: unknown;
        };
        readonly "credential-authorization": {
            readonly login: string;
            readonly credential_id: number;
            readonly credential_type: string;
            readonly token_last_eight?: string;
            readonly credential_authorized_at: string;
            readonly scopes?: readonly string[];
            readonly fingerprint?: string;
            readonly credential_accessed_at?: string | null;
            readonly authorized_credential_id?: number | null;
            readonly authorized_credential_title?: string | null;
            readonly authorized_credential_note?: string | null;
        };
        readonly "organization-invitation": {
            readonly id: number;
            readonly login: string | null;
            readonly email: string | null;
            readonly role: string;
            readonly created_at: string;
            readonly failed_at?: string | null;
            readonly failed_reason?: string | null;
            readonly inviter: components["schemas"]["simple-user"];
            readonly team_count: number;
            readonly node_id: string;
            readonly invitation_teams_url: string;
        };
        readonly "org-hook": {
            readonly id: number;
            readonly url: string;
            readonly ping_url: string;
            readonly deliveries_url?: string;
            readonly name: string;
            readonly events: readonly string[];
            readonly active: boolean;
            readonly config: {
                readonly url?: string;
                readonly insecure_ssl?: string;
                readonly content_type?: string;
                readonly secret?: string;
            };
            readonly updated_at: string;
            readonly created_at: string;
            readonly type: string;
        };
        readonly "interaction-group": "existing_users" | "contributors_only" | "collaborators_only";
        readonly "interaction-limit-response": {
            readonly limit: components["schemas"]["interaction-group"];
            readonly origin: string;
            readonly expires_at: string;
        };
        readonly "interaction-expiry": "one_day" | "three_days" | "one_week" | "one_month" | "six_months";
        readonly "interaction-limit": {
            readonly limit: components["schemas"]["interaction-group"];
            readonly expiry?: components["schemas"]["interaction-expiry"];
        };
        readonly "team-simple": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly members_url: string;
            readonly name: string;
            readonly description: string | null;
            readonly permission: string;
            readonly privacy?: string;
            readonly html_url: string;
            readonly repositories_url: string;
            readonly slug: string;
            readonly ldap_dn?: string;
        } | null;
        readonly team: {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly slug: string;
            readonly description: string | null;
            readonly privacy?: string;
            readonly permission: string;
            readonly permissions?: {
                readonly pull: boolean;
                readonly triage: boolean;
                readonly push: boolean;
                readonly maintain: boolean;
                readonly admin: boolean;
            };
            readonly url: string;
            readonly html_url: string;
            readonly members_url: string;
            readonly repositories_url: string;
            readonly parent: components["schemas"]["team-simple"] | null;
        };
        readonly "org-membership": {
            readonly url: string;
            readonly state: "active" | "pending";
            readonly role: "admin" | "member" | "billing_manager";
            readonly organization_url: string;
            readonly organization: components["schemas"]["organization-simple"];
            readonly user: components["schemas"]["simple-user"] | null;
            readonly permissions?: {
                readonly can_create_repository: boolean;
            };
        };
        readonly migration: {
            readonly id: number;
            readonly owner: components["schemas"]["simple-user"] | null;
            readonly guid: string;
            readonly state: string;
            readonly lock_repositories: boolean;
            readonly exclude_attachments: boolean;
            readonly repositories: readonly components["schemas"]["repository"][];
            readonly url: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly node_id: string;
            readonly archive_url?: string;
            readonly exclude?: readonly {
                readonly [key: string]: unknown;
            }[];
        };
        readonly package: {
            readonly id: number;
            readonly name: string;
            readonly package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
            readonly url: string;
            readonly html_url: string;
            readonly version_count: number;
            readonly visibility: "private" | "public";
            readonly owner?: components["schemas"]["simple-user"] | null;
            readonly repository?: components["schemas"]["minimal-repository"] | null;
            readonly created_at: string;
            readonly updated_at: string;
        };
        readonly "package-version": {
            readonly id: number;
            readonly name: string;
            readonly url: string;
            readonly package_html_url: string;
            readonly html_url?: string;
            readonly license?: string;
            readonly description?: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly deleted_at?: string;
            readonly metadata?: {
                readonly package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
                readonly container?: {
                    readonly tags: readonly any[];
                };
                readonly docker?: {
                    readonly tag?: readonly any[];
                } & {
                    tags: unknown;
                };
            };
        };
        readonly project: {
            readonly owner_url: string;
            readonly url: string;
            readonly html_url: string;
            readonly columns_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly body: string | null;
            readonly number: number;
            readonly state: string;
            readonly creator: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly organization_permission?: "read" | "write" | "admin" | "none";
            readonly private?: boolean;
        };
        readonly "group-mapping": {
            readonly groups?: readonly {
                readonly group_id: string;
                readonly group_name: string;
                readonly group_description: string;
                readonly status?: string;
                readonly synced_at?: string | null;
            }[];
        };
        readonly "team-full": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly html_url: string;
            readonly name: string;
            readonly slug: string;
            readonly description: string | null;
            readonly privacy?: "closed" | "secret";
            readonly permission: string;
            readonly members_url: string;
            readonly repositories_url: string;
            readonly parent?: components["schemas"]["team-simple"] | null;
            readonly members_count: number;
            readonly repos_count: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly organization: components["schemas"]["organization-full"];
            readonly ldap_dn?: string;
        };
        readonly "team-discussion": {
            readonly author: components["schemas"]["simple-user"] | null;
            readonly body: string;
            readonly body_html: string;
            readonly body_version: string;
            readonly comments_count: number;
            readonly comments_url: string;
            readonly created_at: string;
            readonly last_edited_at: string | null;
            readonly html_url: string;
            readonly node_id: string;
            readonly number: number;
            readonly pinned: boolean;
            readonly private: boolean;
            readonly team_url: string;
            readonly title: string;
            readonly updated_at: string;
            readonly url: string;
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly "team-discussion-comment": {
            readonly author: components["schemas"]["simple-user"] | null;
            readonly body: string;
            readonly body_html: string;
            readonly body_version: string;
            readonly created_at: string;
            readonly last_edited_at: string | null;
            readonly discussion_url: string;
            readonly html_url: string;
            readonly node_id: string;
            readonly number: number;
            readonly updated_at: string;
            readonly url: string;
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly reaction: {
            readonly id: number;
            readonly node_id: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
            readonly created_at: string;
        };
        readonly "team-membership": {
            readonly url: string;
            readonly role: "member" | "maintainer";
            readonly state: "active" | "pending";
        };
        readonly "team-project": {
            readonly owner_url: string;
            readonly url: string;
            readonly html_url: string;
            readonly columns_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly body: string | null;
            readonly number: number;
            readonly state: string;
            readonly creator: components["schemas"]["simple-user"];
            readonly created_at: string;
            readonly updated_at: string;
            readonly organization_permission?: string;
            readonly private?: boolean;
            readonly permissions: {
                readonly read: boolean;
                readonly write: boolean;
                readonly admin: boolean;
            };
        };
        readonly "team-repository": {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly full_name: string;
            readonly license: components["schemas"]["license-simple"] | null;
            readonly forks: number;
            readonly permissions?: {
                readonly admin: boolean;
                readonly pull: boolean;
                readonly triage?: boolean;
                readonly push: boolean;
                readonly maintain?: boolean;
            };
            readonly owner: components["schemas"]["simple-user"] | null;
            readonly private: boolean;
            readonly html_url: string;
            readonly description: string | null;
            readonly fork: boolean;
            readonly url: string;
            readonly archive_url: string;
            readonly assignees_url: string;
            readonly blobs_url: string;
            readonly branches_url: string;
            readonly collaborators_url: string;
            readonly comments_url: string;
            readonly commits_url: string;
            readonly compare_url: string;
            readonly contents_url: string;
            readonly contributors_url: string;
            readonly deployments_url: string;
            readonly downloads_url: string;
            readonly events_url: string;
            readonly forks_url: string;
            readonly git_commits_url: string;
            readonly git_refs_url: string;
            readonly git_tags_url: string;
            readonly git_url: string;
            readonly issue_comment_url: string;
            readonly issue_events_url: string;
            readonly issues_url: string;
            readonly keys_url: string;
            readonly labels_url: string;
            readonly languages_url: string;
            readonly merges_url: string;
            readonly milestones_url: string;
            readonly notifications_url: string;
            readonly pulls_url: string;
            readonly releases_url: string;
            readonly ssh_url: string;
            readonly stargazers_url: string;
            readonly statuses_url: string;
            readonly subscribers_url: string;
            readonly subscription_url: string;
            readonly tags_url: string;
            readonly teams_url: string;
            readonly trees_url: string;
            readonly clone_url: string;
            readonly mirror_url: string | null;
            readonly hooks_url: string;
            readonly svn_url: string;
            readonly homepage: string | null;
            readonly language: string | null;
            readonly forks_count: number;
            readonly stargazers_count: number;
            readonly watchers_count: number;
            readonly size: number;
            readonly default_branch: string;
            readonly open_issues_count: number;
            readonly is_template?: boolean;
            readonly topics?: readonly string[];
            readonly has_issues: boolean;
            readonly has_projects: boolean;
            readonly has_wiki: boolean;
            readonly has_pages: boolean;
            readonly has_downloads: boolean;
            readonly archived: boolean;
            readonly disabled: boolean;
            readonly visibility?: string;
            readonly pushed_at: string | null;
            readonly created_at: string | null;
            readonly updated_at: string | null;
            readonly allow_rebase_merge?: boolean;
            readonly template_repository?: components["schemas"]["repository"] | null;
            readonly temp_clone_token?: string;
            readonly allow_squash_merge?: boolean;
            readonly allow_auto_merge?: boolean;
            readonly delete_branch_on_merge?: boolean;
            readonly allow_merge_commit?: boolean;
            readonly subscribers_count?: number;
            readonly network_count?: number;
            readonly open_issues: number;
            readonly watchers: number;
            readonly master_branch?: string;
        };
        readonly "project-card": {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly note: string | null;
            readonly creator: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly archived?: boolean;
            readonly column_name?: string;
            readonly project_id?: string;
            readonly column_url: string;
            readonly content_url?: string;
            readonly project_url: string;
        };
        readonly "project-column": {
            readonly url: string;
            readonly project_url: string;
            readonly cards_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly created_at: string;
            readonly updated_at: string;
        };
        readonly "repository-collaborator-permission": {
            readonly permission: string;
            readonly user: components["schemas"]["simple-user"] | null;
        };
        readonly "rate-limit": {
            readonly limit: number;
            readonly remaining: number;
            readonly reset: number;
            readonly used: number;
        };
        readonly "rate-limit-overview": {
            readonly resources: {
                readonly core: components["schemas"]["rate-limit"];
                readonly graphql?: components["schemas"]["rate-limit"];
                readonly search: components["schemas"]["rate-limit"];
                readonly source_import?: components["schemas"]["rate-limit"];
                readonly integration_manifest?: components["schemas"]["rate-limit"];
                readonly code_scanning_upload?: components["schemas"]["rate-limit"];
            };
            readonly rate: components["schemas"]["rate-limit"];
        };
        readonly "code-of-conduct-simple": {
            readonly url: string;
            readonly key: string;
            readonly name: string;
            readonly html_url: string | null;
        };
        readonly "full-repository": {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly full_name: string;
            readonly owner: components["schemas"]["simple-user"];
            readonly private: boolean;
            readonly html_url: string;
            readonly description: string | null;
            readonly fork: boolean;
            readonly url: string;
            readonly archive_url: string;
            readonly assignees_url: string;
            readonly blobs_url: string;
            readonly branches_url: string;
            readonly collaborators_url: string;
            readonly comments_url: string;
            readonly commits_url: string;
            readonly compare_url: string;
            readonly contents_url: string;
            readonly contributors_url: string;
            readonly deployments_url: string;
            readonly downloads_url: string;
            readonly events_url: string;
            readonly forks_url: string;
            readonly git_commits_url: string;
            readonly git_refs_url: string;
            readonly git_tags_url: string;
            readonly git_url: string;
            readonly issue_comment_url: string;
            readonly issue_events_url: string;
            readonly issues_url: string;
            readonly keys_url: string;
            readonly labels_url: string;
            readonly languages_url: string;
            readonly merges_url: string;
            readonly milestones_url: string;
            readonly notifications_url: string;
            readonly pulls_url: string;
            readonly releases_url: string;
            readonly ssh_url: string;
            readonly stargazers_url: string;
            readonly statuses_url: string;
            readonly subscribers_url: string;
            readonly subscription_url: string;
            readonly tags_url: string;
            readonly teams_url: string;
            readonly trees_url: string;
            readonly clone_url: string;
            readonly mirror_url: string | null;
            readonly hooks_url: string;
            readonly svn_url: string;
            readonly homepage: string | null;
            readonly language: string | null;
            readonly forks_count: number;
            readonly stargazers_count: number;
            readonly watchers_count: number;
            readonly size: number;
            readonly default_branch: string;
            readonly open_issues_count: number;
            readonly is_template?: boolean;
            readonly topics?: readonly string[];
            readonly has_issues: boolean;
            readonly has_projects: boolean;
            readonly has_wiki: boolean;
            readonly has_pages: boolean;
            readonly has_downloads: boolean;
            readonly archived: boolean;
            readonly disabled: boolean;
            readonly visibility?: string;
            readonly pushed_at: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly permissions?: {
                readonly admin: boolean;
                readonly pull: boolean;
                readonly push: boolean;
            };
            readonly allow_rebase_merge?: boolean;
            readonly template_repository?: components["schemas"]["repository"] | null;
            readonly temp_clone_token?: string | null;
            readonly allow_squash_merge?: boolean;
            readonly allow_auto_merge?: boolean;
            readonly delete_branch_on_merge?: boolean;
            readonly allow_merge_commit?: boolean;
            readonly subscribers_count: number;
            readonly network_count: number;
            readonly license: components["schemas"]["license-simple"] | null;
            readonly organization?: components["schemas"]["simple-user"] | null;
            readonly parent?: components["schemas"]["repository"];
            readonly source?: components["schemas"]["repository"];
            readonly forks: number;
            readonly master_branch?: string;
            readonly open_issues: number;
            readonly watchers: number;
            readonly anonymous_access_enabled?: boolean;
            readonly code_of_conduct?: components["schemas"]["code-of-conduct-simple"];
            readonly security_and_analysis?: {
                readonly advanced_security?: {
                    readonly status?: "enabled" | "disabled";
                };
                readonly secret_scanning?: {
                    readonly status?: "enabled" | "disabled";
                };
            } | null;
        };
        readonly artifact: {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly size_in_bytes: number;
            readonly url: string;
            readonly archive_download_url: string;
            readonly expired: boolean;
            readonly created_at: string | null;
            readonly expires_at: string | null;
            readonly updated_at: string | null;
        };
        readonly job: {
            readonly id: number;
            readonly run_id: number;
            readonly run_url: string;
            readonly node_id: string;
            readonly head_sha: string;
            readonly url: string;
            readonly html_url: string | null;
            readonly status: "queued" | "in_progress" | "completed";
            readonly conclusion: string | null;
            readonly started_at: string;
            readonly completed_at: string | null;
            readonly name: string;
            readonly steps?: readonly {
                readonly status: "queued" | "in_progress" | "completed";
                readonly conclusion: string | null;
                readonly name: string;
                readonly number: number;
                readonly started_at?: string | null;
                readonly completed_at?: string | null;
            }[];
            readonly check_run_url: string;
        };
        readonly "actions-enabled": boolean;
        readonly "actions-repository-permissions": {
            readonly enabled: components["schemas"]["actions-enabled"];
            readonly allowed_actions?: components["schemas"]["allowed-actions"];
            readonly selected_actions_url?: components["schemas"]["selected-actions-url"];
        };
        readonly "pull-request-minimal": {
            readonly id: number;
            readonly number: number;
            readonly url: string;
            readonly head: {
                readonly ref: string;
                readonly sha: string;
                readonly repo: {
                    readonly id: number;
                    readonly url: string;
                    readonly name: string;
                };
            };
            readonly base: {
                readonly ref: string;
                readonly sha: string;
                readonly repo: {
                    readonly id: number;
                    readonly url: string;
                    readonly name: string;
                };
            };
        };
        readonly "simple-commit": {
            readonly id: string;
            readonly tree_id: string;
            readonly message: string;
            readonly timestamp: string;
            readonly author: {
                readonly name: string;
                readonly email: string;
            } | null;
            readonly committer: {
                readonly name: string;
                readonly email: string;
            } | null;
        };
        readonly "workflow-run": {
            readonly id: number;
            readonly name?: string | null;
            readonly node_id: string;
            readonly check_suite_id?: number;
            readonly check_suite_node_id?: string;
            readonly head_branch: string | null;
            readonly head_sha: string;
            readonly run_number: number;
            readonly event: string;
            readonly status: string | null;
            readonly conclusion: string | null;
            readonly workflow_id: number;
            readonly url: string;
            readonly html_url: string;
            readonly pull_requests: readonly components["schemas"]["pull-request-minimal"][] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly jobs_url: string;
            readonly logs_url: string;
            readonly check_suite_url: string;
            readonly artifacts_url: string;
            readonly cancel_url: string;
            readonly rerun_url: string;
            readonly workflow_url: string;
            readonly head_commit: components["schemas"]["simple-commit"] | null;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly head_repository: components["schemas"]["minimal-repository"];
            readonly head_repository_id?: number;
        };
        readonly "environment-approvals": {
            readonly environments: readonly {
                readonly id?: number;
                readonly node_id?: string;
                readonly name?: string;
                readonly url?: string;
                readonly html_url?: string;
                readonly created_at?: string;
                readonly updated_at?: string;
            }[];
            readonly state: "approved" | "rejected";
            readonly user: components["schemas"]["simple-user"];
            readonly comment: string;
        };
        readonly "deployment-reviewer-type": "User" | "Team";
        readonly "pending-deployment": {
            readonly environment: {
                readonly id?: number;
                readonly node_id?: string;
                readonly name?: string;
                readonly url?: string;
                readonly html_url?: string;
            };
            readonly wait_timer: number;
            readonly wait_timer_started_at: string | null;
            readonly current_user_can_approve: boolean;
            readonly reviewers: readonly {
                readonly type?: components["schemas"]["deployment-reviewer-type"];
                readonly reviewer?: Partial<components["schemas"]["simple-user"]> & Partial<components["schemas"]["team"]>;
            }[];
        };
        readonly deployment: {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly sha: string;
            readonly ref: string;
            readonly task: string;
            readonly payload: {
                readonly [key: string]: any;
            } | string;
            readonly original_environment?: string;
            readonly environment: string;
            readonly description: string | null;
            readonly creator: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly statuses_url: string;
            readonly repository_url: string;
            readonly transient_environment?: boolean;
            readonly production_environment?: boolean;
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "workflow-run-usage": {
            readonly billable: {
                readonly UBUNTU?: {
                    readonly total_ms: number;
                    readonly jobs: number;
                };
                readonly MACOS?: {
                    readonly total_ms: number;
                    readonly jobs: number;
                };
                readonly WINDOWS?: {
                    readonly total_ms: number;
                    readonly jobs: number;
                };
            };
            readonly run_duration_ms?: number;
        };
        readonly "actions-secret": {
            readonly name: string;
            readonly created_at: string;
            readonly updated_at: string;
        };
        readonly workflow: {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly path: string;
            readonly state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually";
            readonly created_at: string;
            readonly updated_at: string;
            readonly url: string;
            readonly html_url: string;
            readonly badge_url: string;
            readonly deleted_at?: string;
        };
        readonly "workflow-usage": {
            readonly billable: {
                readonly UBUNTU?: {
                    readonly total_ms?: number;
                };
                readonly MACOS?: {
                    readonly total_ms?: number;
                };
                readonly WINDOWS?: {
                    readonly total_ms?: number;
                };
            };
        };
        readonly autolink: {
            readonly id: number;
            readonly key_prefix: string;
            readonly url_template: string;
        };
        readonly "protected-branch-admin-enforced": {
            readonly url: string;
            readonly enabled: boolean;
        };
        readonly "protected-branch-pull-request-review": {
            readonly url?: string;
            readonly dismissal_restrictions?: {
                readonly users?: readonly components["schemas"]["simple-user"][];
                readonly teams?: readonly components["schemas"]["team"][];
                readonly url?: string;
                readonly users_url?: string;
                readonly teams_url?: string;
            };
            readonly dismiss_stale_reviews: boolean;
            readonly require_code_owner_reviews: boolean;
            readonly required_approving_review_count?: number;
        };
        readonly "branch-restriction-policy": {
            readonly url: string;
            readonly users_url: string;
            readonly teams_url: string;
            readonly apps_url: string;
            readonly users: readonly {
                readonly login?: string;
                readonly id?: number;
                readonly node_id?: string;
                readonly avatar_url?: string;
                readonly gravatar_id?: string;
                readonly url?: string;
                readonly html_url?: string;
                readonly followers_url?: string;
                readonly following_url?: string;
                readonly gists_url?: string;
                readonly starred_url?: string;
                readonly subscriptions_url?: string;
                readonly organizations_url?: string;
                readonly repos_url?: string;
                readonly events_url?: string;
                readonly received_events_url?: string;
                readonly type?: string;
                readonly site_admin?: boolean;
            }[];
            readonly teams: readonly {
                readonly id?: number;
                readonly node_id?: string;
                readonly url?: string;
                readonly html_url?: string;
                readonly name?: string;
                readonly slug?: string;
                readonly description?: string | null;
                readonly privacy?: string;
                readonly permission?: string;
                readonly members_url?: string;
                readonly repositories_url?: string;
                readonly parent?: string | null;
            }[];
            readonly apps: readonly {
                readonly id?: number;
                readonly slug?: string;
                readonly node_id?: string;
                readonly owner?: {
                    readonly login?: string;
                    readonly id?: number;
                    readonly node_id?: string;
                    readonly url?: string;
                    readonly repos_url?: string;
                    readonly events_url?: string;
                    readonly hooks_url?: string;
                    readonly issues_url?: string;
                    readonly members_url?: string;
                    readonly public_members_url?: string;
                    readonly avatar_url?: string;
                    readonly description?: string;
                    readonly gravatar_id?: string;
                    readonly html_url?: string;
                    readonly followers_url?: string;
                    readonly following_url?: string;
                    readonly gists_url?: string;
                    readonly starred_url?: string;
                    readonly subscriptions_url?: string;
                    readonly organizations_url?: string;
                    readonly received_events_url?: string;
                    readonly type?: string;
                    readonly site_admin?: boolean;
                };
                readonly name?: string;
                readonly description?: string;
                readonly external_url?: string;
                readonly html_url?: string;
                readonly created_at?: string;
                readonly updated_at?: string;
                readonly permissions?: {
                    readonly metadata?: string;
                    readonly contents?: string;
                    readonly issues?: string;
                    readonly single_file?: string;
                };
                readonly events?: readonly string[];
            }[];
        };
        readonly "branch-protection": {
            readonly url?: string;
            readonly enabled?: boolean;
            readonly required_status_checks?: {
                readonly url?: string;
                readonly enforcement_level?: string;
                readonly contexts: readonly string[];
                readonly contexts_url?: string;
                readonly strict?: boolean;
            };
            readonly enforce_admins?: components["schemas"]["protected-branch-admin-enforced"];
            readonly required_pull_request_reviews?: components["schemas"]["protected-branch-pull-request-review"];
            readonly restrictions?: components["schemas"]["branch-restriction-policy"];
            readonly required_linear_history?: {
                readonly enabled?: boolean;
            };
            readonly allow_force_pushes?: {
                readonly enabled?: boolean;
            };
            readonly allow_deletions?: {
                readonly enabled?: boolean;
            };
            readonly required_conversation_resolution?: {
                readonly enabled?: boolean;
            };
            readonly name?: string;
            readonly protection_url?: string;
            readonly required_signatures?: {
                readonly url: string;
                readonly enabled: boolean;
            };
        };
        readonly "short-branch": {
            readonly name: string;
            readonly commit: {
                readonly sha: string;
                readonly url: string;
            };
            readonly protected: boolean;
            readonly protection?: components["schemas"]["branch-protection"];
            readonly protection_url?: string;
        };
        readonly "git-user": {
            readonly name?: string;
            readonly email?: string;
            readonly date?: string;
        };
        readonly verification: {
            readonly verified: boolean;
            readonly reason: string;
            readonly payload: string | null;
            readonly signature: string | null;
        };
        readonly commit: {
            readonly url: string;
            readonly sha: string;
            readonly node_id: string;
            readonly html_url: string;
            readonly comments_url: string;
            readonly commit: {
                readonly url: string;
                readonly author: components["schemas"]["git-user"] | null;
                readonly committer: components["schemas"]["git-user"] | null;
                readonly message: string;
                readonly comment_count: number;
                readonly tree: {
                    readonly sha: string;
                    readonly url: string;
                };
                readonly verification?: components["schemas"]["verification"];
            };
            readonly author: components["schemas"]["simple-user"] | null;
            readonly committer: components["schemas"]["simple-user"] | null;
            readonly parents: readonly {
                readonly sha: string;
                readonly url: string;
                readonly html_url?: string;
            }[];
            readonly stats?: {
                readonly additions?: number;
                readonly deletions?: number;
                readonly total?: number;
            };
            readonly files?: readonly {
                readonly filename?: string;
                readonly additions?: number;
                readonly deletions?: number;
                readonly changes?: number;
                readonly status?: string;
                readonly raw_url?: string;
                readonly blob_url?: string;
                readonly patch?: string;
                readonly sha?: string;
                readonly contents_url?: string;
                readonly previous_filename?: string;
            }[];
        };
        readonly "branch-with-protection": {
            readonly name: string;
            readonly commit: components["schemas"]["commit"];
            readonly _links: {
                readonly html: string;
                readonly self: string;
            };
            readonly protected: boolean;
            readonly protection: components["schemas"]["branch-protection"];
            readonly protection_url: string;
            readonly pattern?: string;
            readonly required_approving_review_count?: number;
        };
        readonly "status-check-policy": {
            readonly url: string;
            readonly strict: boolean;
            readonly contexts: readonly string[];
            readonly contexts_url: string;
        };
        readonly "protected-branch": {
            readonly url: string;
            readonly required_status_checks?: components["schemas"]["status-check-policy"];
            readonly required_pull_request_reviews?: {
                readonly url: string;
                readonly dismiss_stale_reviews?: boolean;
                readonly require_code_owner_reviews?: boolean;
                readonly required_approving_review_count?: number;
                readonly dismissal_restrictions?: {
                    readonly url: string;
                    readonly users_url: string;
                    readonly teams_url: string;
                    readonly users: readonly components["schemas"]["simple-user"][];
                    readonly teams: readonly components["schemas"]["team"][];
                };
            };
            readonly required_signatures?: {
                readonly url: string;
                readonly enabled: boolean;
            };
            readonly enforce_admins?: {
                readonly url: string;
                readonly enabled: boolean;
            };
            readonly required_linear_history?: {
                readonly enabled: boolean;
            };
            readonly allow_force_pushes?: {
                readonly enabled: boolean;
            };
            readonly allow_deletions?: {
                readonly enabled: boolean;
            };
            readonly restrictions?: components["schemas"]["branch-restriction-policy"];
            readonly required_conversation_resolution?: {
                readonly enabled?: boolean;
            };
        };
        readonly "deployment-simple": {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly task: string;
            readonly original_environment?: string;
            readonly environment: string;
            readonly description: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly statuses_url: string;
            readonly repository_url: string;
            readonly transient_environment?: boolean;
            readonly production_environment?: boolean;
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "check-run": {
            readonly id: number;
            readonly head_sha: string;
            readonly node_id: string;
            readonly external_id: string | null;
            readonly url: string;
            readonly html_url: string | null;
            readonly details_url: string | null;
            readonly status: "queued" | "in_progress" | "completed";
            readonly conclusion: ("success" | "failure" | "neutral" | "cancelled" | "skipped" | "timed_out" | "action_required") | null;
            readonly started_at: string | null;
            readonly completed_at: string | null;
            readonly output: {
                readonly title: string | null;
                readonly summary: string | null;
                readonly text: string | null;
                readonly annotations_count: number;
                readonly annotations_url: string;
            };
            readonly name: string;
            readonly check_suite: {
                readonly id: number;
            } | null;
            readonly app: components["schemas"]["integration"] | null;
            readonly pull_requests: readonly components["schemas"]["pull-request-minimal"][];
            readonly deployment?: components["schemas"]["deployment-simple"];
        };
        readonly "check-annotation": {
            readonly path: string;
            readonly start_line: number;
            readonly end_line: number;
            readonly start_column: number | null;
            readonly end_column: number | null;
            readonly annotation_level: string | null;
            readonly title: string | null;
            readonly message: string | null;
            readonly raw_details: string | null;
            readonly blob_href: string;
        };
        readonly "check-suite": {
            readonly id: number;
            readonly node_id: string;
            readonly head_branch: string | null;
            readonly head_sha: string;
            readonly status: ("queued" | "in_progress" | "completed") | null;
            readonly conclusion: ("success" | "failure" | "neutral" | "cancelled" | "skipped" | "timed_out" | "action_required") | null;
            readonly url: string | null;
            readonly before: string | null;
            readonly after: string | null;
            readonly pull_requests: readonly components["schemas"]["pull-request-minimal"][] | null;
            readonly app: components["schemas"]["integration"] | null;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly created_at: string | null;
            readonly updated_at: string | null;
            readonly head_commit: components["schemas"]["simple-commit"];
            readonly latest_check_runs_count: number;
            readonly check_runs_url: string;
        };
        readonly "check-suite-preference": {
            readonly preferences: {
                readonly auto_trigger_checks?: readonly {
                    readonly app_id: number;
                    readonly setting: boolean;
                }[];
            };
            readonly repository: components["schemas"]["minimal-repository"];
        };
        readonly "code-scanning-analysis-tool-name": string;
        readonly "code-scanning-analysis-tool-guid": string | null;
        readonly "code-scanning-ref": string;
        readonly "code-scanning-alert-state": "open" | "closed" | "dismissed" | "fixed";
        readonly "alert-number": number;
        readonly "alert-created-at": string;
        readonly "alert-url": string;
        readonly "alert-html-url": string;
        readonly "alert-instances-url": string;
        readonly "code-scanning-alert-dismissed-at": string | null;
        readonly "code-scanning-alert-dismissed-reason": ("false positive" | "won't fix" | "used in tests") | null;
        readonly "code-scanning-alert-rule-summary": {
            readonly id?: string | null;
            readonly name?: string;
            readonly severity?: ("none" | "note" | "warning" | "error") | null;
            readonly description?: string;
        };
        readonly "code-scanning-analysis-tool-version": string | null;
        readonly "code-scanning-analysis-tool": {
            readonly name?: components["schemas"]["code-scanning-analysis-tool-name"];
            readonly version?: components["schemas"]["code-scanning-analysis-tool-version"];
            readonly guid?: components["schemas"]["code-scanning-analysis-tool-guid"];
        };
        readonly "code-scanning-analysis-analysis-key": string;
        readonly "code-scanning-alert-environment": string;
        readonly "code-scanning-alert-location": {
            readonly path?: string;
            readonly start_line?: number;
            readonly end_line?: number;
            readonly start_column?: number;
            readonly end_column?: number;
        };
        readonly "code-scanning-alert-classification": ("source" | "generated" | "test" | "library") | null;
        readonly "code-scanning-alert-instance": {
            readonly ref?: components["schemas"]["code-scanning-ref"];
            readonly analysis_key?: components["schemas"]["code-scanning-analysis-analysis-key"];
            readonly environment?: components["schemas"]["code-scanning-alert-environment"];
            readonly state?: components["schemas"]["code-scanning-alert-state"];
            readonly commit_sha?: string;
            readonly message?: {
                readonly text?: string;
            };
            readonly location?: components["schemas"]["code-scanning-alert-location"];
            readonly html_url?: string;
            readonly classifications?: readonly components["schemas"]["code-scanning-alert-classification"][];
        };
        readonly "code-scanning-alert-items": {
            readonly number: components["schemas"]["alert-number"];
            readonly created_at: components["schemas"]["alert-created-at"];
            readonly url: components["schemas"]["alert-url"];
            readonly html_url: components["schemas"]["alert-html-url"];
            readonly instances_url: components["schemas"]["alert-instances-url"];
            readonly state: components["schemas"]["code-scanning-alert-state"];
            readonly dismissed_by: components["schemas"]["simple-user"];
            readonly dismissed_at: components["schemas"]["code-scanning-alert-dismissed-at"];
            readonly dismissed_reason: components["schemas"]["code-scanning-alert-dismissed-reason"];
            readonly rule: components["schemas"]["code-scanning-alert-rule-summary"];
            readonly tool: components["schemas"]["code-scanning-analysis-tool"];
            readonly most_recent_instance: components["schemas"]["code-scanning-alert-instance"];
        };
        readonly "code-scanning-alert-rule": {
            readonly id?: string | null;
            readonly name?: string;
            readonly severity?: ("none" | "note" | "warning" | "error") | null;
            readonly security_severity_level?: ("low" | "medium" | "high" | "critical") | null;
            readonly description?: string;
            readonly full_description?: string;
            readonly tags?: readonly string[] | null;
            readonly help?: string | null;
        };
        readonly "code-scanning-alert": {
            readonly number: components["schemas"]["alert-number"];
            readonly created_at: components["schemas"]["alert-created-at"];
            readonly url: components["schemas"]["alert-url"];
            readonly html_url: components["schemas"]["alert-html-url"];
            readonly instances?: {
                readonly [key: string]: unknown;
            };
            readonly instances_url: components["schemas"]["alert-instances-url"];
            readonly state: components["schemas"]["code-scanning-alert-state"];
            readonly dismissed_by: components["schemas"]["simple-user"];
            readonly dismissed_at: components["schemas"]["code-scanning-alert-dismissed-at"];
            readonly dismissed_reason: components["schemas"]["code-scanning-alert-dismissed-reason"];
            readonly rule: components["schemas"]["code-scanning-alert-rule"];
            readonly tool: components["schemas"]["code-scanning-analysis-tool"];
            readonly most_recent_instance: components["schemas"]["code-scanning-alert-instance"];
        };
        readonly "code-scanning-alert-set-state": "open" | "dismissed";
        readonly "code-scanning-analysis-sarif-id": string;
        readonly "code-scanning-analysis-commit-sha": string;
        readonly "code-scanning-analysis-environment": string;
        readonly "code-scanning-analysis-category": string;
        readonly "code-scanning-analysis-created-at": string;
        readonly "code-scanning-analysis-url": string;
        readonly "code-scanning-analysis": {
            readonly ref: components["schemas"]["code-scanning-ref"];
            readonly commit_sha: components["schemas"]["code-scanning-analysis-commit-sha"];
            readonly analysis_key: components["schemas"]["code-scanning-analysis-analysis-key"];
            readonly environment: components["schemas"]["code-scanning-analysis-environment"];
            readonly category?: components["schemas"]["code-scanning-analysis-category"];
            readonly error: string;
            readonly created_at: components["schemas"]["code-scanning-analysis-created-at"];
            readonly results_count: number;
            readonly rules_count: number;
            readonly id: number;
            readonly url: components["schemas"]["code-scanning-analysis-url"];
            readonly sarif_id: components["schemas"]["code-scanning-analysis-sarif-id"];
            readonly tool: components["schemas"]["code-scanning-analysis-tool"];
            readonly deletable: boolean;
            readonly warning: string;
            readonly tool_name?: string;
        };
        readonly "code-scanning-analysis-deletion": {
            readonly next_analysis_url: string | null;
            readonly confirm_delete_url: string | null;
        };
        readonly "code-scanning-analysis-sarif-file": string;
        readonly "code-scanning-sarifs-receipt": {
            readonly id?: components["schemas"]["code-scanning-analysis-sarif-id"];
            readonly url?: string;
        };
        readonly "code-scanning-sarifs-status": {
            readonly processing_status?: "pending" | "complete";
            readonly analyses_url?: string | null;
        };
        readonly collaborator: {
            readonly login: string;
            readonly id: number;
            readonly email?: string | null;
            readonly name?: string | null;
            readonly node_id: string;
            readonly avatar_url: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly html_url: string;
            readonly followers_url: string;
            readonly following_url: string;
            readonly gists_url: string;
            readonly starred_url: string;
            readonly subscriptions_url: string;
            readonly organizations_url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly received_events_url: string;
            readonly type: string;
            readonly site_admin: boolean;
            readonly permissions?: {
                readonly pull: boolean;
                readonly push: boolean;
                readonly admin: boolean;
            };
        };
        readonly "repository-invitation": {
            readonly id: number;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly invitee: components["schemas"]["simple-user"] | null;
            readonly inviter: components["schemas"]["simple-user"] | null;
            readonly permissions: "read" | "write" | "admin" | "triage" | "maintain";
            readonly created_at: string;
            readonly expired?: boolean;
            readonly url: string;
            readonly html_url: string;
            readonly node_id: string;
        };
        readonly "commit-comment": {
            readonly html_url: string;
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly body: string;
            readonly path: string | null;
            readonly position: number | null;
            readonly line: number | null;
            readonly commit_id: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly "branch-short": {
            readonly name: string;
            readonly commit: {
                readonly sha: string;
                readonly url: string;
            };
            readonly protected: boolean;
        };
        readonly link: {
            readonly href: string;
        };
        readonly auto_merge: {
            readonly enabled_by: components["schemas"]["simple-user"];
            readonly merge_method: "merge" | "squash" | "rebase";
            readonly commit_title: string;
            readonly commit_message: string;
        } | null;
        readonly "pull-request-simple": {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly html_url: string;
            readonly diff_url: string;
            readonly patch_url: string;
            readonly issue_url: string;
            readonly commits_url: string;
            readonly review_comments_url: string;
            readonly review_comment_url: string;
            readonly comments_url: string;
            readonly statuses_url: string;
            readonly number: number;
            readonly state: string;
            readonly locked: boolean;
            readonly title: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly body: string | null;
            readonly labels: readonly {
                readonly id?: number;
                readonly node_id?: string;
                readonly url?: string;
                readonly name?: string;
                readonly description?: string;
                readonly color?: string;
                readonly default?: boolean;
            }[];
            readonly milestone: components["schemas"]["milestone"] | null;
            readonly active_lock_reason?: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly closed_at: string | null;
            readonly merged_at: string | null;
            readonly merge_commit_sha: string | null;
            readonly assignee: components["schemas"]["simple-user"] | null;
            readonly assignees?: readonly components["schemas"]["simple-user"][] | null;
            readonly requested_reviewers?: readonly components["schemas"]["simple-user"][] | null;
            readonly requested_teams?: readonly components["schemas"]["team"][] | null;
            readonly head: {
                readonly label: string;
                readonly ref: string;
                readonly repo: components["schemas"]["repository"];
                readonly sha: string;
                readonly user: components["schemas"]["simple-user"] | null;
            };
            readonly base: {
                readonly label: string;
                readonly ref: string;
                readonly repo: components["schemas"]["repository"];
                readonly sha: string;
                readonly user: components["schemas"]["simple-user"] | null;
            };
            readonly _links: {
                readonly comments: components["schemas"]["link"];
                readonly commits: components["schemas"]["link"];
                readonly statuses: components["schemas"]["link"];
                readonly html: components["schemas"]["link"];
                readonly issue: components["schemas"]["link"];
                readonly review_comments: components["schemas"]["link"];
                readonly review_comment: components["schemas"]["link"];
                readonly self: components["schemas"]["link"];
            };
            readonly author_association: components["schemas"]["author_association"];
            readonly auto_merge: components["schemas"]["auto_merge"];
            readonly draft?: boolean;
        };
        readonly "simple-commit-status": {
            readonly description: string | null;
            readonly id: number;
            readonly node_id: string;
            readonly state: string;
            readonly context: string;
            readonly target_url: string;
            readonly required?: boolean | null;
            readonly avatar_url: string | null;
            readonly url: string;
            readonly created_at: string;
            readonly updated_at: string;
        };
        readonly "combined-commit-status": {
            readonly state: string;
            readonly statuses: readonly components["schemas"]["simple-commit-status"][];
            readonly sha: string;
            readonly total_count: number;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly commit_url: string;
            readonly url: string;
        };
        readonly status: {
            readonly url: string;
            readonly avatar_url: string | null;
            readonly id: number;
            readonly node_id: string;
            readonly state: string;
            readonly description: string;
            readonly target_url: string;
            readonly context: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly creator: components["schemas"]["simple-user"];
        };
        readonly "community-health-file": {
            readonly url: string;
            readonly html_url: string;
        };
        readonly "community-profile": {
            readonly health_percentage: number;
            readonly description: string | null;
            readonly documentation: string | null;
            readonly files: {
                readonly code_of_conduct: components["schemas"]["code-of-conduct-simple"] | null;
                readonly code_of_conduct_file: components["schemas"]["community-health-file"] | null;
                readonly license: components["schemas"]["license-simple"] | null;
                readonly contributing: components["schemas"]["community-health-file"] | null;
                readonly readme: components["schemas"]["community-health-file"] | null;
                readonly issue_template: components["schemas"]["community-health-file"] | null;
                readonly pull_request_template: components["schemas"]["community-health-file"] | null;
            };
            readonly updated_at: string | null;
            readonly content_reports_enabled?: boolean;
        };
        readonly "diff-entry": {
            readonly sha: string;
            readonly filename: string;
            readonly status: string;
            readonly additions: number;
            readonly deletions: number;
            readonly changes: number;
            readonly blob_url: string;
            readonly raw_url: string;
            readonly contents_url: string;
            readonly patch?: string;
            readonly previous_filename?: string;
        };
        readonly "commit-comparison": {
            readonly url: string;
            readonly html_url: string;
            readonly permalink_url: string;
            readonly diff_url: string;
            readonly patch_url: string;
            readonly base_commit: components["schemas"]["commit"];
            readonly merge_base_commit: components["schemas"]["commit"];
            readonly status: "diverged" | "ahead" | "behind" | "identical";
            readonly ahead_by: number;
            readonly behind_by: number;
            readonly total_commits: number;
            readonly commits: readonly components["schemas"]["commit"][];
            readonly files?: readonly components["schemas"]["diff-entry"][];
        };
        readonly "content-reference-attachment": {
            readonly id: number;
            readonly title: string;
            readonly body: string;
            readonly node_id?: string;
        };
        readonly "content-tree": {
            readonly type: string;
            readonly size: number;
            readonly name: string;
            readonly path: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string | null;
            readonly html_url: string | null;
            readonly download_url: string | null;
            readonly entries?: readonly {
                readonly type: string;
                readonly size: number;
                readonly name: string;
                readonly path: string;
                readonly content?: string;
                readonly sha: string;
                readonly url: string;
                readonly git_url: string | null;
                readonly html_url: string | null;
                readonly download_url: string | null;
                readonly _links: {
                    readonly git: string | null;
                    readonly html: string | null;
                    readonly self: string;
                };
            }[];
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
        } & {
            content: unknown;
            encoding: unknown;
        };
        readonly "content-directory": readonly {
            readonly type: string;
            readonly size: number;
            readonly name: string;
            readonly path: string;
            readonly content?: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string | null;
            readonly html_url: string | null;
            readonly download_url: string | null;
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
        }[];
        readonly "content-file": {
            readonly type: string;
            readonly encoding: string;
            readonly size: number;
            readonly name: string;
            readonly path: string;
            readonly content: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string | null;
            readonly html_url: string | null;
            readonly download_url: string | null;
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
            readonly target?: string;
            readonly submodule_git_url?: string;
        };
        readonly "content-symlink": {
            readonly type: string;
            readonly target: string;
            readonly size: number;
            readonly name: string;
            readonly path: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string | null;
            readonly html_url: string | null;
            readonly download_url: string | null;
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
        };
        readonly "content-submodule": {
            readonly type: string;
            readonly submodule_git_url: string;
            readonly size: number;
            readonly name: string;
            readonly path: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string | null;
            readonly html_url: string | null;
            readonly download_url: string | null;
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
        };
        readonly "file-commit": {
            readonly content: {
                readonly name?: string;
                readonly path?: string;
                readonly sha?: string;
                readonly size?: number;
                readonly url?: string;
                readonly html_url?: string;
                readonly git_url?: string;
                readonly download_url?: string;
                readonly type?: string;
                readonly _links?: {
                    readonly self?: string;
                    readonly git?: string;
                    readonly html?: string;
                };
            } | null;
            readonly commit: {
                readonly sha?: string;
                readonly node_id?: string;
                readonly url?: string;
                readonly html_url?: string;
                readonly author?: {
                    readonly date?: string;
                    readonly name?: string;
                    readonly email?: string;
                };
                readonly committer?: {
                    readonly date?: string;
                    readonly name?: string;
                    readonly email?: string;
                };
                readonly message?: string;
                readonly tree?: {
                    readonly url?: string;
                    readonly sha?: string;
                };
                readonly parents?: readonly {
                    readonly url?: string;
                    readonly html_url?: string;
                    readonly sha?: string;
                }[];
                readonly verification?: {
                    readonly verified?: boolean;
                    readonly reason?: string;
                    readonly signature?: string | null;
                    readonly payload?: string | null;
                };
            };
        };
        readonly contributor: {
            readonly login?: string;
            readonly id?: number;
            readonly node_id?: string;
            readonly avatar_url?: string;
            readonly gravatar_id?: string | null;
            readonly url?: string;
            readonly html_url?: string;
            readonly followers_url?: string;
            readonly following_url?: string;
            readonly gists_url?: string;
            readonly starred_url?: string;
            readonly subscriptions_url?: string;
            readonly organizations_url?: string;
            readonly repos_url?: string;
            readonly events_url?: string;
            readonly received_events_url?: string;
            readonly type: string;
            readonly site_admin?: boolean;
            readonly contributions: number;
            readonly email?: string;
            readonly name?: string;
        };
        readonly "deployment-status": {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress";
            readonly creator: components["schemas"]["simple-user"] | null;
            readonly description: string;
            readonly environment?: string;
            readonly target_url: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly deployment_url: string;
            readonly repository_url: string;
            readonly environment_url?: string;
            readonly log_url?: string;
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "wait-timer": number;
        readonly deployment_branch_policy: {
            readonly protected_branches: boolean;
            readonly custom_branch_policies: boolean;
        } | null;
        readonly environment: {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly url: string;
            readonly html_url: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly protection_rules?: readonly (Partial<{
                readonly id: number;
                readonly node_id: string;
                readonly type: string;
                readonly wait_timer?: components["schemas"]["wait-timer"];
            }> & Partial<{
                readonly id: number;
                readonly node_id: string;
                readonly type: string;
                readonly reviewers?: readonly {
                    readonly type?: components["schemas"]["deployment-reviewer-type"];
                    readonly reviewer?: Partial<components["schemas"]["simple-user"]> & Partial<components["schemas"]["team"]>;
                }[];
            }> & Partial<{
                readonly id: number;
                readonly node_id: string;
                readonly type: string;
            }>)[];
            readonly deployment_branch_policy?: components["schemas"]["deployment_branch_policy"];
        };
        readonly "short-blob": {
            readonly url: string;
            readonly sha: string;
        };
        readonly blob: {
            readonly content: string;
            readonly encoding: string;
            readonly url: string;
            readonly sha: string;
            readonly size: number | null;
            readonly node_id: string;
            readonly highlighted_content?: string;
        };
        readonly "git-commit": {
            readonly sha: string;
            readonly node_id: string;
            readonly url: string;
            readonly author: {
                readonly date: string;
                readonly email: string;
                readonly name: string;
            };
            readonly committer: {
                readonly date: string;
                readonly email: string;
                readonly name: string;
            };
            readonly message: string;
            readonly tree: {
                readonly sha: string;
                readonly url: string;
            };
            readonly parents: readonly {
                readonly sha: string;
                readonly url: string;
                readonly html_url: string;
            }[];
            readonly verification: {
                readonly verified: boolean;
                readonly reason: string;
                readonly signature: string | null;
                readonly payload: string | null;
            };
            readonly html_url: string;
        };
        readonly "git-ref": {
            readonly ref: string;
            readonly node_id: string;
            readonly url: string;
            readonly object: {
                readonly type: string;
                readonly sha: string;
                readonly url: string;
            };
        };
        readonly "git-tag": {
            readonly node_id: string;
            readonly tag: string;
            readonly sha: string;
            readonly url: string;
            readonly message: string;
            readonly tagger: {
                readonly date: string;
                readonly email: string;
                readonly name: string;
            };
            readonly object: {
                readonly sha: string;
                readonly type: string;
                readonly url: string;
            };
            readonly verification?: components["schemas"]["verification"];
        };
        readonly "git-tree": {
            readonly sha: string;
            readonly url: string;
            readonly truncated: boolean;
            readonly tree: readonly {
                readonly path?: string;
                readonly mode?: string;
                readonly type?: string;
                readonly sha?: string;
                readonly size?: number;
                readonly url?: string;
            }[];
        };
        readonly "hook-response": {
            readonly code: number | null;
            readonly status: string | null;
            readonly message: string | null;
        };
        readonly hook: {
            readonly type: string;
            readonly id: number;
            readonly name: string;
            readonly active: boolean;
            readonly events: readonly string[];
            readonly config: {
                readonly email?: string;
                readonly password?: string;
                readonly room?: string;
                readonly subdomain?: string;
                readonly url?: components["schemas"]["webhook-config-url"];
                readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                readonly content_type?: components["schemas"]["webhook-config-content-type"];
                readonly digest?: string;
                readonly secret?: components["schemas"]["webhook-config-secret"];
                readonly token?: string;
            };
            readonly updated_at: string;
            readonly created_at: string;
            readonly url: string;
            readonly test_url: string;
            readonly ping_url: string;
            readonly deliveries_url?: string;
            readonly last_response: components["schemas"]["hook-response"];
        };
        readonly import: {
            readonly vcs: string | null;
            readonly use_lfs?: boolean;
            readonly vcs_url: string;
            readonly svc_root?: string;
            readonly tfvc_project?: string;
            readonly status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push" | "pushing" | "complete" | "setup" | "unknown" | "detection_found_multiple" | "detection_found_nothing" | "detection_needs_auth";
            readonly status_text?: string | null;
            readonly failed_step?: string | null;
            readonly error_message?: string | null;
            readonly import_percent?: number | null;
            readonly commit_count?: number | null;
            readonly push_percent?: number | null;
            readonly has_large_files?: boolean;
            readonly large_files_size?: number;
            readonly large_files_count?: number;
            readonly project_choices?: readonly {
                readonly vcs?: string;
                readonly tfvc_project?: string;
                readonly human_name?: string;
            }[];
            readonly message?: string;
            readonly authors_count?: number | null;
            readonly url: string;
            readonly html_url: string;
            readonly authors_url: string;
            readonly repository_url: string;
            readonly svn_root?: string;
        };
        readonly "porter-author": {
            readonly id: number;
            readonly remote_id: string;
            readonly remote_name: string;
            readonly email: string;
            readonly name: string;
            readonly url: string;
            readonly import_url: string;
        };
        readonly "porter-large-file": {
            readonly ref_name: string;
            readonly path: string;
            readonly oid: string;
            readonly size: number;
        };
        readonly "issue-event-label": {
            readonly name: string | null;
            readonly color: string | null;
        };
        readonly "issue-event-dismissed-review": {
            readonly state: string;
            readonly review_id: number;
            readonly dismissal_message: string | null;
            readonly dismissal_commit_id?: string | null;
        };
        readonly "issue-event-milestone": {
            readonly title: string;
        };
        readonly "issue-event-project-card": {
            readonly url: string;
            readonly id: number;
            readonly project_url: string;
            readonly project_id: number;
            readonly column_name: string;
            readonly previous_column_name?: string;
        };
        readonly "issue-event-rename": {
            readonly from: string;
            readonly to: string;
        };
        readonly "issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"] | null;
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly issue?: components["schemas"]["issue-simple"];
            readonly label?: components["schemas"]["issue-event-label"];
            readonly assignee?: components["schemas"]["simple-user"] | null;
            readonly assigner?: components["schemas"]["simple-user"] | null;
            readonly review_requester?: components["schemas"]["simple-user"] | null;
            readonly requested_reviewer?: components["schemas"]["simple-user"] | null;
            readonly requested_team?: components["schemas"]["team"];
            readonly dismissed_review?: components["schemas"]["issue-event-dismissed-review"];
            readonly milestone?: components["schemas"]["issue-event-milestone"];
            readonly project_card?: components["schemas"]["issue-event-project-card"];
            readonly rename?: components["schemas"]["issue-event-rename"];
            readonly author_association?: components["schemas"]["author_association"];
            readonly lock_reason?: string | null;
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "labeled-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly label: {
                readonly name: string;
                readonly color: string;
            };
        };
        readonly "unlabeled-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly label: {
                readonly name: string;
                readonly color: string;
            };
        };
        readonly "assigned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly assignee: components["schemas"]["simple-user"];
            readonly assigner: components["schemas"]["simple-user"];
        };
        readonly "unassigned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly assignee: components["schemas"]["simple-user"];
            readonly assigner: components["schemas"]["simple-user"];
        };
        readonly "milestoned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly milestone: {
                readonly title: string;
            };
        };
        readonly "demilestoned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly milestone: {
                readonly title: string;
            };
        };
        readonly "renamed-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly rename: {
                readonly from: string;
                readonly to: string;
            };
        };
        readonly "review-requested-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly review_requester: components["schemas"]["simple-user"];
            readonly requested_team?: components["schemas"]["team"];
            readonly requested_reviewer?: components["schemas"]["simple-user"];
        };
        readonly "review-request-removed-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly review_requester: components["schemas"]["simple-user"];
            readonly requested_team?: components["schemas"]["team"];
            readonly requested_reviewer?: components["schemas"]["simple-user"];
        };
        readonly "review-dismissed-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly dismissed_review: {
                readonly state: string;
                readonly review_id: number;
                readonly dismissal_message: string | null;
                readonly dismissal_commit_id?: string;
            };
        };
        readonly "locked-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly lock_reason: string | null;
        };
        readonly "added-to-project-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly project_card?: {
                readonly id: number;
                readonly url: string;
                readonly project_id: number;
                readonly project_url: string;
                readonly column_name: string;
                readonly previous_column_name?: string;
            };
        };
        readonly "moved-column-in-project-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly project_card?: {
                readonly id: number;
                readonly url: string;
                readonly project_id: number;
                readonly project_url: string;
                readonly column_name: string;
                readonly previous_column_name?: string;
            };
        };
        readonly "removed-from-project-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly project_card?: {
                readonly id: number;
                readonly url: string;
                readonly project_id: number;
                readonly project_url: string;
                readonly column_name: string;
                readonly previous_column_name?: string;
            };
        };
        readonly "converted-note-to-issue-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly project_card?: {
                readonly id: number;
                readonly url: string;
                readonly project_id: number;
                readonly project_url: string;
                readonly column_name: string;
                readonly previous_column_name?: string;
            };
        };
        readonly "issue-event-for-issue": Partial<components["schemas"]["labeled-issue-event"]> & Partial<components["schemas"]["unlabeled-issue-event"]> & Partial<components["schemas"]["assigned-issue-event"]> & Partial<components["schemas"]["unassigned-issue-event"]> & Partial<components["schemas"]["milestoned-issue-event"]> & Partial<components["schemas"]["demilestoned-issue-event"]> & Partial<components["schemas"]["renamed-issue-event"]> & Partial<components["schemas"]["review-requested-issue-event"]> & Partial<components["schemas"]["review-request-removed-issue-event"]> & Partial<components["schemas"]["review-dismissed-issue-event"]> & Partial<components["schemas"]["locked-issue-event"]> & Partial<components["schemas"]["added-to-project-issue-event"]> & Partial<components["schemas"]["moved-column-in-project-issue-event"]> & Partial<components["schemas"]["removed-from-project-issue-event"]> & Partial<components["schemas"]["converted-note-to-issue-issue-event"]>;
        readonly "timeline-comment-event": {
            readonly event: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly body?: string;
            readonly body_text?: string;
            readonly body_html?: string;
            readonly html_url: string;
            readonly user: components["schemas"]["simple-user"];
            readonly created_at: string;
            readonly updated_at: string;
            readonly issue_url: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly performed_via_github_app?: components["schemas"]["integration"];
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly "timeline-cross-referenced-event": {
            readonly event: string;
            readonly actor?: components["schemas"]["simple-user"];
            readonly created_at: string;
            readonly updated_at: string;
            readonly source: {
                readonly type?: string;
                readonly issue?: components["schemas"]["issue-simple"];
            };
        };
        readonly "timeline-committed-event": {
            readonly event?: string;
            readonly sha: string;
            readonly node_id: string;
            readonly url: string;
            readonly author: {
                readonly date: string;
                readonly email: string;
                readonly name: string;
            };
            readonly committer: {
                readonly date: string;
                readonly email: string;
                readonly name: string;
            };
            readonly message: string;
            readonly tree: {
                readonly sha: string;
                readonly url: string;
            };
            readonly parents: readonly {
                readonly sha: string;
                readonly url: string;
                readonly html_url: string;
            }[];
            readonly verification: {
                readonly verified: boolean;
                readonly reason: string;
                readonly signature: string | null;
                readonly payload: string | null;
            };
            readonly html_url: string;
        };
        readonly "timeline-reviewed-event": {
            readonly event: string;
            readonly id: number;
            readonly node_id: string;
            readonly user: components["schemas"]["simple-user"];
            readonly body: string | null;
            readonly state: string;
            readonly html_url: string;
            readonly pull_request_url: string;
            readonly _links: {
                readonly html: {
                    readonly href: string;
                };
                readonly pull_request: {
                    readonly href: string;
                };
            };
            readonly submitted_at?: string;
            readonly commit_id: string;
            readonly body_html?: string;
            readonly body_text?: string;
            readonly author_association: components["schemas"]["author_association"];
        };
        readonly "pull-request-review-comment": {
            readonly url: string;
            readonly pull_request_review_id: number | null;
            readonly id: number;
            readonly node_id: string;
            readonly diff_hunk: string;
            readonly path: string;
            readonly position: number;
            readonly original_position: number;
            readonly commit_id: string;
            readonly original_commit_id: string;
            readonly in_reply_to_id?: number;
            readonly user: components["schemas"]["simple-user"];
            readonly body: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly html_url: string;
            readonly pull_request_url: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly _links: {
                readonly self: {
                    readonly href: string;
                };
                readonly html: {
                    readonly href: string;
                };
                readonly pull_request: {
                    readonly href: string;
                };
            };
            readonly start_line?: number | null;
            readonly original_start_line?: number | null;
            readonly start_side?: ("LEFT" | "RIGHT") | null;
            readonly line?: number;
            readonly original_line?: number;
            readonly side?: "LEFT" | "RIGHT";
            readonly reactions?: components["schemas"]["reaction-rollup"];
            readonly body_html?: string;
            readonly body_text?: string;
        };
        readonly "timeline-line-commented-event": {
            readonly event?: string;
            readonly node_id?: string;
            readonly comments?: readonly components["schemas"]["pull-request-review-comment"][];
        };
        readonly "timeline-commit-commented-event": {
            readonly event?: string;
            readonly node_id?: string;
            readonly commit_id?: string;
            readonly comments?: readonly components["schemas"]["commit-comment"][];
        };
        readonly "timeline-assigned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly assignee: components["schemas"]["simple-user"];
        };
        readonly "timeline-unassigned-issue-event": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly actor: components["schemas"]["simple-user"];
            readonly event: string;
            readonly commit_id: string | null;
            readonly commit_url: string | null;
            readonly created_at: string;
            readonly performed_via_github_app: components["schemas"]["integration"];
            readonly assignee: components["schemas"]["simple-user"];
        };
        readonly "timeline-issue-events": Partial<components["schemas"]["labeled-issue-event"]> & Partial<components["schemas"]["unlabeled-issue-event"]> & Partial<components["schemas"]["milestoned-issue-event"]> & Partial<components["schemas"]["demilestoned-issue-event"]> & Partial<components["schemas"]["renamed-issue-event"]> & Partial<components["schemas"]["review-requested-issue-event"]> & Partial<components["schemas"]["review-request-removed-issue-event"]> & Partial<components["schemas"]["review-dismissed-issue-event"]> & Partial<components["schemas"]["locked-issue-event"]> & Partial<components["schemas"]["added-to-project-issue-event"]> & Partial<components["schemas"]["moved-column-in-project-issue-event"]> & Partial<components["schemas"]["removed-from-project-issue-event"]> & Partial<components["schemas"]["converted-note-to-issue-issue-event"]> & Partial<components["schemas"]["timeline-comment-event"]> & Partial<components["schemas"]["timeline-cross-referenced-event"]> & Partial<components["schemas"]["timeline-committed-event"]> & Partial<components["schemas"]["timeline-reviewed-event"]> & Partial<components["schemas"]["timeline-line-commented-event"]> & Partial<components["schemas"]["timeline-commit-commented-event"]> & Partial<components["schemas"]["timeline-assigned-issue-event"]> & Partial<components["schemas"]["timeline-unassigned-issue-event"]>;
        readonly "deploy-key": {
            readonly id: number;
            readonly key: string;
            readonly url: string;
            readonly title: string;
            readonly verified: boolean;
            readonly created_at: string;
            readonly read_only: boolean;
        };
        readonly language: {
            readonly [key: string]: number;
        };
        readonly "license-content": {
            readonly name: string;
            readonly path: string;
            readonly sha: string;
            readonly size: number;
            readonly url: string;
            readonly html_url: string | null;
            readonly git_url: string | null;
            readonly download_url: string | null;
            readonly type: string;
            readonly content: string;
            readonly encoding: string;
            readonly _links: {
                readonly git: string | null;
                readonly html: string | null;
                readonly self: string;
            };
            readonly license: components["schemas"]["license-simple"] | null;
        };
        readonly "pages-source-hash": {
            readonly branch: string;
            readonly path: string;
        };
        readonly "pages-https-certificate": {
            readonly state: "new" | "authorization_created" | "authorization_pending" | "authorized" | "authorization_revoked" | "issued" | "uploaded" | "approved" | "errored" | "bad_authz" | "destroy_pending" | "dns_changed";
            readonly description: string;
            readonly domains: readonly any[];
            readonly expires_at?: string;
        };
        readonly page: {
            readonly url: string;
            readonly status: ("built" | "building" | "errored") | null;
            readonly cname: string | null;
            readonly custom_404: boolean;
            readonly html_url?: string;
            readonly source?: components["schemas"]["pages-source-hash"];
            readonly public: boolean;
            readonly https_certificate?: components["schemas"]["pages-https-certificate"];
            readonly https_enforced?: boolean;
        };
        readonly "page-build": {
            readonly url: string;
            readonly status: string;
            readonly error: {
                readonly message: string | null;
            };
            readonly pusher: components["schemas"]["simple-user"] | null;
            readonly commit: string;
            readonly duration: number;
            readonly created_at: string;
            readonly updated_at: string;
        };
        readonly "page-build-status": {
            readonly url: string;
            readonly status: string;
        };
        readonly "pages-health-check": {
            readonly domain?: {
                readonly host?: string;
                readonly uri?: string;
                readonly nameservers?: string;
                readonly dns_resolves?: boolean;
                readonly is_proxied?: boolean | null;
                readonly is_cloudflare_ip?: boolean | null;
                readonly is_fastly_ip?: boolean | null;
                readonly is_old_ip_address?: boolean | null;
                readonly is_a_record?: boolean | null;
                readonly has_cname_record?: boolean | null;
                readonly has_mx_records_present?: boolean | null;
                readonly is_valid_domain?: boolean;
                readonly is_apex_domain?: boolean;
                readonly should_be_a_record?: boolean | null;
                readonly is_cname_to_github_user_domain?: boolean | null;
                readonly is_cname_to_pages_dot_github_dot_com?: boolean | null;
                readonly is_cname_to_fastly?: boolean | null;
                readonly is_pointed_to_github_pages_ip?: boolean | null;
                readonly is_non_github_pages_ip_present?: boolean | null;
                readonly is_pages_domain?: boolean;
                readonly is_served_by_pages?: boolean | null;
                readonly is_valid?: boolean;
                readonly reason?: string | null;
                readonly responds_to_https?: boolean;
                readonly enforces_https?: boolean;
                readonly https_error?: string | null;
                readonly is_https_eligible?: boolean | null;
                readonly caa_error?: string | null;
            };
            readonly alt_domain?: {
                readonly host?: string;
                readonly uri?: string;
                readonly nameservers?: string;
                readonly dns_resolves?: boolean;
                readonly is_proxied?: boolean | null;
                readonly is_cloudflare_ip?: boolean | null;
                readonly is_fastly_ip?: boolean | null;
                readonly is_old_ip_address?: boolean | null;
                readonly is_a_record?: boolean | null;
                readonly has_cname_record?: boolean | null;
                readonly has_mx_records_present?: boolean | null;
                readonly is_valid_domain?: boolean;
                readonly is_apex_domain?: boolean;
                readonly should_be_a_record?: boolean | null;
                readonly is_cname_to_github_user_domain?: boolean | null;
                readonly is_cname_to_pages_dot_github_dot_com?: boolean | null;
                readonly is_cname_to_fastly?: boolean | null;
                readonly is_pointed_to_github_pages_ip?: boolean | null;
                readonly is_non_github_pages_ip_present?: boolean | null;
                readonly is_pages_domain?: boolean;
                readonly is_served_by_pages?: boolean | null;
                readonly is_valid?: boolean;
                readonly reason?: string | null;
                readonly responds_to_https?: boolean;
                readonly enforces_https?: boolean;
                readonly https_error?: string | null;
                readonly is_https_eligible?: boolean | null;
                readonly caa_error?: string | null;
            } | null;
        };
        readonly "pull-request": {
            readonly url: string;
            readonly id: number;
            readonly node_id: string;
            readonly html_url: string;
            readonly diff_url: string;
            readonly patch_url: string;
            readonly issue_url: string;
            readonly commits_url: string;
            readonly review_comments_url: string;
            readonly review_comment_url: string;
            readonly comments_url: string;
            readonly statuses_url: string;
            readonly number: number;
            readonly state: "open" | "closed";
            readonly locked: boolean;
            readonly title: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly body: string | null;
            readonly labels: readonly {
                readonly id?: number;
                readonly node_id?: string;
                readonly url?: string;
                readonly name?: string;
                readonly description?: string | null;
                readonly color?: string;
                readonly default?: boolean;
            }[];
            readonly milestone: components["schemas"]["milestone"] | null;
            readonly active_lock_reason?: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly closed_at: string | null;
            readonly merged_at: string | null;
            readonly merge_commit_sha: string | null;
            readonly assignee: components["schemas"]["simple-user"] | null;
            readonly assignees?: readonly components["schemas"]["simple-user"][] | null;
            readonly requested_reviewers?: readonly components["schemas"]["simple-user"][] | null;
            readonly requested_teams?: readonly components["schemas"]["team-simple"][] | null;
            readonly head: {
                readonly label: string;
                readonly ref: string;
                readonly repo: {
                    readonly archive_url: string;
                    readonly assignees_url: string;
                    readonly blobs_url: string;
                    readonly branches_url: string;
                    readonly collaborators_url: string;
                    readonly comments_url: string;
                    readonly commits_url: string;
                    readonly compare_url: string;
                    readonly contents_url: string;
                    readonly contributors_url: string;
                    readonly deployments_url: string;
                    readonly description: string | null;
                    readonly downloads_url: string;
                    readonly events_url: string;
                    readonly fork: boolean;
                    readonly forks_url: string;
                    readonly full_name: string;
                    readonly git_commits_url: string;
                    readonly git_refs_url: string;
                    readonly git_tags_url: string;
                    readonly hooks_url: string;
                    readonly html_url: string;
                    readonly id: number;
                    readonly node_id: string;
                    readonly issue_comment_url: string;
                    readonly issue_events_url: string;
                    readonly issues_url: string;
                    readonly keys_url: string;
                    readonly labels_url: string;
                    readonly languages_url: string;
                    readonly merges_url: string;
                    readonly milestones_url: string;
                    readonly name: string;
                    readonly notifications_url: string;
                    readonly owner: {
                        readonly avatar_url: string;
                        readonly events_url: string;
                        readonly followers_url: string;
                        readonly following_url: string;
                        readonly gists_url: string;
                        readonly gravatar_id: string | null;
                        readonly html_url: string;
                        readonly id: number;
                        readonly node_id: string;
                        readonly login: string;
                        readonly organizations_url: string;
                        readonly received_events_url: string;
                        readonly repos_url: string;
                        readonly site_admin: boolean;
                        readonly starred_url: string;
                        readonly subscriptions_url: string;
                        readonly type: string;
                        readonly url: string;
                    };
                    readonly private: boolean;
                    readonly pulls_url: string;
                    readonly releases_url: string;
                    readonly stargazers_url: string;
                    readonly statuses_url: string;
                    readonly subscribers_url: string;
                    readonly subscription_url: string;
                    readonly tags_url: string;
                    readonly teams_url: string;
                    readonly trees_url: string;
                    readonly url: string;
                    readonly clone_url: string;
                    readonly default_branch: string;
                    readonly forks: number;
                    readonly forks_count: number;
                    readonly git_url: string;
                    readonly has_downloads: boolean;
                    readonly has_issues: boolean;
                    readonly has_projects: boolean;
                    readonly has_wiki: boolean;
                    readonly has_pages: boolean;
                    readonly homepage: string | null;
                    readonly language: string | null;
                    readonly master_branch?: string;
                    readonly archived: boolean;
                    readonly disabled: boolean;
                    readonly mirror_url: string | null;
                    readonly open_issues: number;
                    readonly open_issues_count: number;
                    readonly permissions?: {
                        readonly admin: boolean;
                        readonly pull: boolean;
                        readonly push: boolean;
                    };
                    readonly temp_clone_token?: string;
                    readonly allow_merge_commit?: boolean;
                    readonly allow_squash_merge?: boolean;
                    readonly allow_rebase_merge?: boolean;
                    readonly license: {
                        readonly key: string;
                        readonly name: string;
                        readonly url: string | null;
                        readonly spdx_id: string | null;
                        readonly node_id: string;
                    } | null;
                    readonly pushed_at: string;
                    readonly size: number;
                    readonly ssh_url: string;
                    readonly stargazers_count: number;
                    readonly svn_url: string;
                    readonly topics?: readonly string[];
                    readonly watchers: number;
                    readonly watchers_count: number;
                    readonly created_at: string;
                    readonly updated_at: string;
                } | null;
                readonly sha: string;
                readonly user: {
                    readonly avatar_url: string;
                    readonly events_url: string;
                    readonly followers_url: string;
                    readonly following_url: string;
                    readonly gists_url: string;
                    readonly gravatar_id: string | null;
                    readonly html_url: string;
                    readonly id: number;
                    readonly node_id: string;
                    readonly login: string;
                    readonly organizations_url: string;
                    readonly received_events_url: string;
                    readonly repos_url: string;
                    readonly site_admin: boolean;
                    readonly starred_url: string;
                    readonly subscriptions_url: string;
                    readonly type: string;
                    readonly url: string;
                };
            };
            readonly base: {
                readonly label: string;
                readonly ref: string;
                readonly repo: {
                    readonly archive_url: string;
                    readonly assignees_url: string;
                    readonly blobs_url: string;
                    readonly branches_url: string;
                    readonly collaborators_url: string;
                    readonly comments_url: string;
                    readonly commits_url: string;
                    readonly compare_url: string;
                    readonly contents_url: string;
                    readonly contributors_url: string;
                    readonly deployments_url: string;
                    readonly description: string | null;
                    readonly downloads_url: string;
                    readonly events_url: string;
                    readonly fork: boolean;
                    readonly forks_url: string;
                    readonly full_name: string;
                    readonly git_commits_url: string;
                    readonly git_refs_url: string;
                    readonly git_tags_url: string;
                    readonly hooks_url: string;
                    readonly html_url: string;
                    readonly id: number;
                    readonly node_id: string;
                    readonly issue_comment_url: string;
                    readonly issue_events_url: string;
                    readonly issues_url: string;
                    readonly keys_url: string;
                    readonly labels_url: string;
                    readonly languages_url: string;
                    readonly merges_url: string;
                    readonly milestones_url: string;
                    readonly name: string;
                    readonly notifications_url: string;
                    readonly owner: {
                        readonly avatar_url: string;
                        readonly events_url: string;
                        readonly followers_url: string;
                        readonly following_url: string;
                        readonly gists_url: string;
                        readonly gravatar_id: string | null;
                        readonly html_url: string;
                        readonly id: number;
                        readonly node_id: string;
                        readonly login: string;
                        readonly organizations_url: string;
                        readonly received_events_url: string;
                        readonly repos_url: string;
                        readonly site_admin: boolean;
                        readonly starred_url: string;
                        readonly subscriptions_url: string;
                        readonly type: string;
                        readonly url: string;
                    };
                    readonly private: boolean;
                    readonly pulls_url: string;
                    readonly releases_url: string;
                    readonly stargazers_url: string;
                    readonly statuses_url: string;
                    readonly subscribers_url: string;
                    readonly subscription_url: string;
                    readonly tags_url: string;
                    readonly teams_url: string;
                    readonly trees_url: string;
                    readonly url: string;
                    readonly clone_url: string;
                    readonly default_branch: string;
                    readonly forks: number;
                    readonly forks_count: number;
                    readonly git_url: string;
                    readonly has_downloads: boolean;
                    readonly has_issues: boolean;
                    readonly has_projects: boolean;
                    readonly has_wiki: boolean;
                    readonly has_pages: boolean;
                    readonly homepage: string | null;
                    readonly language: string | null;
                    readonly master_branch?: string;
                    readonly archived: boolean;
                    readonly disabled: boolean;
                    readonly mirror_url: string | null;
                    readonly open_issues: number;
                    readonly open_issues_count: number;
                    readonly permissions?: {
                        readonly admin: boolean;
                        readonly pull: boolean;
                        readonly push: boolean;
                    };
                    readonly temp_clone_token?: string;
                    readonly allow_merge_commit?: boolean;
                    readonly allow_squash_merge?: boolean;
                    readonly allow_rebase_merge?: boolean;
                    readonly license: components["schemas"]["license-simple"] | null;
                    readonly pushed_at: string;
                    readonly size: number;
                    readonly ssh_url: string;
                    readonly stargazers_count: number;
                    readonly svn_url: string;
                    readonly topics?: readonly string[];
                    readonly watchers: number;
                    readonly watchers_count: number;
                    readonly created_at: string;
                    readonly updated_at: string;
                };
                readonly sha: string;
                readonly user: {
                    readonly avatar_url: string;
                    readonly events_url: string;
                    readonly followers_url: string;
                    readonly following_url: string;
                    readonly gists_url: string;
                    readonly gravatar_id: string | null;
                    readonly html_url: string;
                    readonly id: number;
                    readonly node_id: string;
                    readonly login: string;
                    readonly organizations_url: string;
                    readonly received_events_url: string;
                    readonly repos_url: string;
                    readonly site_admin: boolean;
                    readonly starred_url: string;
                    readonly subscriptions_url: string;
                    readonly type: string;
                    readonly url: string;
                };
            };
            readonly _links: {
                readonly comments: components["schemas"]["link"];
                readonly commits: components["schemas"]["link"];
                readonly statuses: components["schemas"]["link"];
                readonly html: components["schemas"]["link"];
                readonly issue: components["schemas"]["link"];
                readonly review_comments: components["schemas"]["link"];
                readonly review_comment: components["schemas"]["link"];
                readonly self: components["schemas"]["link"];
            };
            readonly author_association: components["schemas"]["author_association"];
            readonly auto_merge: components["schemas"]["auto_merge"];
            readonly draft?: boolean;
            readonly merged: boolean;
            readonly mergeable: boolean | null;
            readonly rebaseable?: boolean | null;
            readonly mergeable_state: string;
            readonly merged_by: components["schemas"]["simple-user"] | null;
            readonly comments: number;
            readonly review_comments: number;
            readonly maintainer_can_modify: boolean;
            readonly commits: number;
            readonly additions: number;
            readonly deletions: number;
            readonly changed_files: number;
        };
        readonly "pull-request-merge-result": {
            readonly sha: string;
            readonly merged: boolean;
            readonly message: string;
        };
        readonly "pull-request-review-request": {
            readonly users: readonly components["schemas"]["simple-user"][];
            readonly teams: readonly components["schemas"]["team"][];
        };
        readonly "pull-request-review": {
            readonly id: number;
            readonly node_id: string;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly body: string;
            readonly state: string;
            readonly html_url: string;
            readonly pull_request_url: string;
            readonly _links: {
                readonly html: {
                    readonly href: string;
                };
                readonly pull_request: {
                    readonly href: string;
                };
            };
            readonly submitted_at?: string;
            readonly commit_id: string;
            readonly body_html?: string;
            readonly body_text?: string;
            readonly author_association: components["schemas"]["author_association"];
        };
        readonly "review-comment": {
            readonly url: string;
            readonly pull_request_review_id: number | null;
            readonly id: number;
            readonly node_id: string;
            readonly diff_hunk: string;
            readonly path: string;
            readonly position: number | null;
            readonly original_position: number;
            readonly commit_id: string;
            readonly original_commit_id: string;
            readonly in_reply_to_id?: number;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly body: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly html_url: string;
            readonly pull_request_url: string;
            readonly author_association: components["schemas"]["author_association"];
            readonly _links: {
                readonly self: components["schemas"]["link"];
                readonly html: components["schemas"]["link"];
                readonly pull_request: components["schemas"]["link"];
            };
            readonly body_text?: string;
            readonly body_html?: string;
            readonly reactions?: components["schemas"]["reaction-rollup"];
            readonly side?: "LEFT" | "RIGHT";
            readonly start_side?: ("LEFT" | "RIGHT") | null;
            readonly line?: number;
            readonly original_line?: number;
            readonly start_line?: number | null;
            readonly original_start_line?: number | null;
        };
        readonly "release-asset": {
            readonly url: string;
            readonly browser_download_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly label: string | null;
            readonly state: "uploaded" | "open";
            readonly content_type: string;
            readonly size: number;
            readonly download_count: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly uploader: components["schemas"]["simple-user"] | null;
        };
        readonly release: {
            readonly url: string;
            readonly html_url: string;
            readonly assets_url: string;
            readonly upload_url: string;
            readonly tarball_url: string | null;
            readonly zipball_url: string | null;
            readonly id: number;
            readonly node_id: string;
            readonly tag_name: string;
            readonly target_commitish: string;
            readonly name: string | null;
            readonly body?: string | null;
            readonly draft: boolean;
            readonly prerelease: boolean;
            readonly created_at: string;
            readonly published_at: string | null;
            readonly author: components["schemas"]["simple-user"];
            readonly assets: readonly components["schemas"]["release-asset"][];
            readonly body_html?: string;
            readonly body_text?: string;
            readonly mentions_count?: number;
            readonly discussion_url?: string;
            readonly reactions?: components["schemas"]["reaction-rollup"];
        };
        readonly "secret-scanning-alert-state": "open" | "resolved";
        readonly "secret-scanning-alert-resolution": ("false_positive" | "wont_fix" | "revoked" | "used_in_tests") | null;
        readonly "secret-scanning-alert": {
            readonly number?: components["schemas"]["alert-number"];
            readonly created_at?: components["schemas"]["alert-created-at"];
            readonly url?: components["schemas"]["alert-url"];
            readonly html_url?: components["schemas"]["alert-html-url"];
            readonly state?: components["schemas"]["secret-scanning-alert-state"];
            readonly resolution?: components["schemas"]["secret-scanning-alert-resolution"];
            readonly resolved_at?: string | null;
            readonly resolved_by?: components["schemas"]["simple-user"];
            readonly secret_type?: string;
            readonly secret?: string;
        };
        readonly stargazer: {
            readonly starred_at: string;
            readonly user: components["schemas"]["simple-user"] | null;
        };
        readonly "code-frequency-stat": readonly number[];
        readonly "commit-activity": {
            readonly days: readonly number[];
            readonly total: number;
            readonly week: number;
        };
        readonly "contributor-activity": {
            readonly author: components["schemas"]["simple-user"] | null;
            readonly total: number;
            readonly weeks: readonly {
                readonly w?: number;
                readonly a?: number;
                readonly d?: number;
                readonly c?: number;
            }[];
        };
        readonly "participation-stats": {
            readonly all: readonly number[];
            readonly owner: readonly number[];
        };
        readonly "repository-subscription": {
            readonly subscribed: boolean;
            readonly ignored: boolean;
            readonly reason: string | null;
            readonly created_at: string;
            readonly url: string;
            readonly repository_url: string;
        };
        readonly tag: {
            readonly name: string;
            readonly commit: {
                readonly sha: string;
                readonly url: string;
            };
            readonly zipball_url: string;
            readonly tarball_url: string;
            readonly node_id: string;
        };
        readonly topic: {
            readonly names: readonly string[];
        };
        readonly traffic: {
            readonly timestamp: string;
            readonly uniques: number;
            readonly count: number;
        };
        readonly "clone-traffic": {
            readonly count: number;
            readonly uniques: number;
            readonly clones: readonly components["schemas"]["traffic"][];
        };
        readonly "content-traffic": {
            readonly path: string;
            readonly title: string;
            readonly count: number;
            readonly uniques: number;
        };
        readonly "referrer-traffic": {
            readonly referrer: string;
            readonly count: number;
            readonly uniques: number;
        };
        readonly "view-traffic": {
            readonly count: number;
            readonly uniques: number;
            readonly views: readonly components["schemas"]["traffic"][];
        };
        readonly "scim-group-list-enterprise": {
            readonly schemas: readonly string[];
            readonly totalResults: number;
            readonly itemsPerPage: number;
            readonly startIndex: number;
            readonly Resources: readonly {
                readonly schemas: readonly string[];
                readonly id: string;
                readonly externalId?: string | null;
                readonly displayName?: string;
                readonly members?: readonly {
                    readonly value?: string;
                    readonly $ref?: string;
                    readonly display?: string;
                }[];
                readonly meta?: {
                    readonly resourceType?: string;
                    readonly created?: string;
                    readonly lastModified?: string;
                    readonly location?: string;
                };
            }[];
        };
        readonly "scim-enterprise-group": {
            readonly schemas: readonly string[];
            readonly id: string;
            readonly externalId?: string | null;
            readonly displayName?: string;
            readonly members?: readonly {
                readonly value?: string;
                readonly $ref?: string;
                readonly display?: string;
            }[];
            readonly meta?: {
                readonly resourceType?: string;
                readonly created?: string;
                readonly lastModified?: string;
                readonly location?: string;
            };
        };
        readonly "scim-user-list-enterprise": {
            readonly schemas: readonly string[];
            readonly totalResults: number;
            readonly itemsPerPage: number;
            readonly startIndex: number;
            readonly Resources: readonly {
                readonly schemas: readonly string[];
                readonly id: string;
                readonly externalId?: string;
                readonly userName?: string;
                readonly name?: {
                    readonly givenName?: string;
                    readonly familyName?: string;
                };
                readonly emails?: readonly {
                    readonly value?: string;
                    readonly primary?: boolean;
                    readonly type?: string;
                }[];
                readonly groups?: readonly {
                    readonly value?: string;
                }[];
                readonly active?: boolean;
                readonly meta?: {
                    readonly resourceType?: string;
                    readonly created?: string;
                    readonly lastModified?: string;
                    readonly location?: string;
                };
            }[];
        };
        readonly "scim-enterprise-user": {
            readonly schemas: readonly string[];
            readonly id: string;
            readonly externalId?: string;
            readonly userName?: string;
            readonly name?: {
                readonly givenName?: string;
                readonly familyName?: string;
            };
            readonly emails?: readonly {
                readonly value?: string;
                readonly type?: string;
                readonly primary?: boolean;
            }[];
            readonly groups?: readonly {
                readonly value?: string;
            }[];
            readonly active?: boolean;
            readonly meta?: {
                readonly resourceType?: string;
                readonly created?: string;
                readonly lastModified?: string;
                readonly location?: string;
            };
        };
        readonly "scim-user": {
            readonly schemas: readonly string[];
            readonly id: string;
            readonly externalId: string | null;
            readonly userName: string | null;
            readonly displayName?: string | null;
            readonly name: {
                readonly givenName: string | null;
                readonly familyName: string | null;
                readonly formatted?: string | null;
            };
            readonly emails: readonly {
                readonly value: string;
                readonly primary?: boolean;
            }[];
            readonly active: boolean;
            readonly meta: {
                readonly resourceType?: string;
                readonly created?: string;
                readonly lastModified?: string;
                readonly location?: string;
            };
            readonly organization_id?: number;
            readonly operations?: readonly {
                readonly op: "add" | "remove" | "replace";
                readonly path?: string;
                readonly value?: string | {
                    readonly [key: string]: unknown;
                } | readonly {
                    readonly [key: string]: unknown;
                }[];
            }[];
            readonly groups?: readonly {
                readonly value?: string;
                readonly display?: string;
            }[];
        };
        readonly "scim-user-list": {
            readonly schemas: readonly string[];
            readonly totalResults: number;
            readonly itemsPerPage: number;
            readonly startIndex: number;
            readonly Resources: readonly components["schemas"]["scim-user"][];
        };
        readonly "search-result-text-matches": readonly {
            readonly object_url?: string;
            readonly object_type?: string | null;
            readonly property?: string;
            readonly fragment?: string;
            readonly matches?: readonly {
                readonly text?: string;
                readonly indices?: readonly number[];
            }[];
        }[];
        readonly "code-search-result-item": {
            readonly name: string;
            readonly path: string;
            readonly sha: string;
            readonly url: string;
            readonly git_url: string;
            readonly html_url: string;
            readonly repository: components["schemas"]["minimal-repository"];
            readonly score: number;
            readonly file_size?: number;
            readonly language?: string | null;
            readonly last_modified_at?: string;
            readonly line_numbers?: readonly string[];
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
        };
        readonly "commit-search-result-item": {
            readonly url: string;
            readonly sha: string;
            readonly html_url: string;
            readonly comments_url: string;
            readonly commit: {
                readonly author: {
                    readonly name: string;
                    readonly email: string;
                    readonly date: string;
                };
                readonly committer: components["schemas"]["git-user"] | null;
                readonly comment_count: number;
                readonly message: string;
                readonly tree: {
                    readonly sha: string;
                    readonly url: string;
                };
                readonly url: string;
                readonly verification?: components["schemas"]["verification"];
            };
            readonly author: components["schemas"]["simple-user"] | null;
            readonly committer: components["schemas"]["git-user"] | null;
            readonly parents: readonly {
                readonly url?: string;
                readonly html_url?: string;
                readonly sha?: string;
            }[];
            readonly repository: components["schemas"]["minimal-repository"];
            readonly score: number;
            readonly node_id: string;
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
        };
        readonly "issue-search-result-item": {
            readonly url: string;
            readonly repository_url: string;
            readonly labels_url: string;
            readonly comments_url: string;
            readonly events_url: string;
            readonly html_url: string;
            readonly id: number;
            readonly node_id: string;
            readonly number: number;
            readonly title: string;
            readonly locked: boolean;
            readonly active_lock_reason?: string | null;
            readonly assignees?: readonly components["schemas"]["simple-user"][] | null;
            readonly user: components["schemas"]["simple-user"] | null;
            readonly labels: readonly {
                readonly id?: number;
                readonly node_id?: string;
                readonly url?: string;
                readonly name?: string;
                readonly color?: string;
                readonly default?: boolean;
                readonly description?: string | null;
            }[];
            readonly state: string;
            readonly assignee: components["schemas"]["simple-user"] | null;
            readonly milestone: components["schemas"]["milestone"] | null;
            readonly comments: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly closed_at: string | null;
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
            readonly pull_request?: {
                readonly merged_at?: string | null;
                readonly diff_url: string | null;
                readonly html_url: string | null;
                readonly patch_url: string | null;
                readonly url: string | null;
            };
            readonly body?: string;
            readonly score: number;
            readonly author_association: components["schemas"]["author_association"];
            readonly draft?: boolean;
            readonly repository?: components["schemas"]["repository"];
            readonly body_html?: string;
            readonly body_text?: string;
            readonly timeline_url?: string;
            readonly performed_via_github_app?: components["schemas"]["integration"] | null;
        };
        readonly "label-search-result-item": {
            readonly id: number;
            readonly node_id: string;
            readonly url: string;
            readonly name: string;
            readonly color: string;
            readonly default: boolean;
            readonly description: string | null;
            readonly score: number;
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
        };
        readonly "repo-search-result-item": {
            readonly id: number;
            readonly node_id: string;
            readonly name: string;
            readonly full_name: string;
            readonly owner: components["schemas"]["simple-user"] | null;
            readonly private: boolean;
            readonly html_url: string;
            readonly description: string | null;
            readonly fork: boolean;
            readonly url: string;
            readonly created_at: string;
            readonly updated_at: string;
            readonly pushed_at: string;
            readonly homepage: string | null;
            readonly size: number;
            readonly stargazers_count: number;
            readonly watchers_count: number;
            readonly language: string | null;
            readonly forks_count: number;
            readonly open_issues_count: number;
            readonly master_branch?: string;
            readonly default_branch: string;
            readonly score: number;
            readonly forks_url: string;
            readonly keys_url: string;
            readonly collaborators_url: string;
            readonly teams_url: string;
            readonly hooks_url: string;
            readonly issue_events_url: string;
            readonly events_url: string;
            readonly assignees_url: string;
            readonly branches_url: string;
            readonly tags_url: string;
            readonly blobs_url: string;
            readonly git_tags_url: string;
            readonly git_refs_url: string;
            readonly trees_url: string;
            readonly statuses_url: string;
            readonly languages_url: string;
            readonly stargazers_url: string;
            readonly contributors_url: string;
            readonly subscribers_url: string;
            readonly subscription_url: string;
            readonly commits_url: string;
            readonly git_commits_url: string;
            readonly comments_url: string;
            readonly issue_comment_url: string;
            readonly contents_url: string;
            readonly compare_url: string;
            readonly merges_url: string;
            readonly archive_url: string;
            readonly downloads_url: string;
            readonly issues_url: string;
            readonly pulls_url: string;
            readonly milestones_url: string;
            readonly notifications_url: string;
            readonly labels_url: string;
            readonly releases_url: string;
            readonly deployments_url: string;
            readonly git_url: string;
            readonly ssh_url: string;
            readonly clone_url: string;
            readonly svn_url: string;
            readonly forks: number;
            readonly open_issues: number;
            readonly watchers: number;
            readonly topics?: readonly string[];
            readonly mirror_url: string | null;
            readonly has_issues: boolean;
            readonly has_projects: boolean;
            readonly has_pages: boolean;
            readonly has_wiki: boolean;
            readonly has_downloads: boolean;
            readonly archived: boolean;
            readonly disabled: boolean;
            readonly license: components["schemas"]["license-simple"] | null;
            readonly permissions?: {
                readonly admin: boolean;
                readonly pull: boolean;
                readonly push: boolean;
            };
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
            readonly temp_clone_token?: string;
            readonly allow_merge_commit?: boolean;
            readonly allow_squash_merge?: boolean;
            readonly allow_rebase_merge?: boolean;
            readonly allow_auto_merge?: boolean;
            readonly delete_branch_on_merge?: boolean;
        };
        readonly "topic-search-result-item": {
            readonly name: string;
            readonly display_name: string | null;
            readonly short_description: string | null;
            readonly description: string | null;
            readonly created_by: string | null;
            readonly released: string | null;
            readonly created_at: string;
            readonly updated_at: string;
            readonly featured: boolean;
            readonly curated: boolean;
            readonly score: number;
            readonly repository_count?: number | null;
            readonly logo_url?: string | null;
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
            readonly related?: readonly {
                readonly topic_relation?: {
                    readonly id?: number;
                    readonly name?: string;
                    readonly topic_id?: number;
                    readonly relation_type?: string;
                };
            }[] | null;
            readonly aliases?: readonly {
                readonly topic_relation?: {
                    readonly id?: number;
                    readonly name?: string;
                    readonly topic_id?: number;
                    readonly relation_type?: string;
                };
            }[] | null;
        };
        readonly "user-search-result-item": {
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly avatar_url: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly html_url: string;
            readonly followers_url: string;
            readonly subscriptions_url: string;
            readonly organizations_url: string;
            readonly repos_url: string;
            readonly received_events_url: string;
            readonly type: string;
            readonly score: number;
            readonly following_url: string;
            readonly gists_url: string;
            readonly starred_url: string;
            readonly events_url: string;
            readonly public_repos?: number;
            readonly public_gists?: number;
            readonly followers?: number;
            readonly following?: number;
            readonly created_at?: string;
            readonly updated_at?: string;
            readonly name?: string | null;
            readonly bio?: string | null;
            readonly email?: string | null;
            readonly location?: string | null;
            readonly site_admin: boolean;
            readonly hireable?: boolean | null;
            readonly text_matches?: components["schemas"]["search-result-text-matches"];
            readonly blog?: string | null;
            readonly company?: string | null;
            readonly suspended_at?: string | null;
        };
        readonly "private-user": {
            readonly login: string;
            readonly id: number;
            readonly node_id: string;
            readonly avatar_url: string;
            readonly gravatar_id: string | null;
            readonly url: string;
            readonly html_url: string;
            readonly followers_url: string;
            readonly following_url: string;
            readonly gists_url: string;
            readonly starred_url: string;
            readonly subscriptions_url: string;
            readonly organizations_url: string;
            readonly repos_url: string;
            readonly events_url: string;
            readonly received_events_url: string;
            readonly type: string;
            readonly site_admin: boolean;
            readonly name: string | null;
            readonly company: string | null;
            readonly blog: string | null;
            readonly location: string | null;
            readonly email: string | null;
            readonly hireable: boolean | null;
            readonly bio: string | null;
            readonly twitter_username?: string | null;
            readonly public_repos: number;
            readonly public_gists: number;
            readonly followers: number;
            readonly following: number;
            readonly created_at: string;
            readonly updated_at: string;
            readonly private_gists: number;
            readonly total_private_repos: number;
            readonly owned_private_repos: number;
            readonly disk_usage: number;
            readonly collaborators: number;
            readonly two_factor_authentication: boolean;
            readonly plan?: {
                readonly collaborators: number;
                readonly name: string;
                readonly space: number;
                readonly private_repos: number;
            };
            readonly suspended_at?: string | null;
            readonly business_plus?: boolean;
            readonly ldap_dn?: string;
        };
        readonly email: {
            readonly email: string;
            readonly primary: boolean;
            readonly verified: boolean;
            readonly visibility: string | null;
        };
        readonly "gpg-key": {
            readonly id: number;
            readonly primary_key_id: number | null;
            readonly key_id: string;
            readonly public_key: string;
            readonly emails: readonly {
                readonly email?: string;
                readonly verified?: boolean;
            }[];
            readonly subkeys: readonly {
                readonly id?: number;
                readonly primary_key_id?: number;
                readonly key_id?: string;
                readonly public_key?: string;
                readonly emails?: readonly {
                    readonly [key: string]: unknown;
                }[];
                readonly subkeys?: readonly {
                    readonly [key: string]: unknown;
                }[];
                readonly can_sign?: boolean;
                readonly can_encrypt_comms?: boolean;
                readonly can_encrypt_storage?: boolean;
                readonly can_certify?: boolean;
                readonly created_at?: string;
                readonly expires_at?: string | null;
                readonly raw_key?: string | null;
            }[];
            readonly can_sign: boolean;
            readonly can_encrypt_comms: boolean;
            readonly can_encrypt_storage: boolean;
            readonly can_certify: boolean;
            readonly created_at: string;
            readonly expires_at: string | null;
            readonly raw_key: string | null;
        };
        readonly key: {
            readonly key: string;
            readonly id: number;
            readonly url: string;
            readonly title: string;
            readonly created_at: string;
            readonly verified: boolean;
            readonly read_only: boolean;
        };
        readonly "marketplace-account": {
            readonly url: string;
            readonly id: number;
            readonly type: string;
            readonly node_id?: string;
            readonly login: string;
            readonly email?: string | null;
            readonly organization_billing_email?: string | null;
        };
        readonly "user-marketplace-purchase": {
            readonly billing_cycle: string;
            readonly next_billing_date: string | null;
            readonly unit_count: number | null;
            readonly on_free_trial: boolean;
            readonly free_trial_ends_on: string | null;
            readonly updated_at: string | null;
            readonly account: components["schemas"]["marketplace-account"];
            readonly plan: components["schemas"]["marketplace-listing-plan"];
        };
        readonly "starred-repository": {
            readonly starred_at: string;
            readonly repo: components["schemas"]["repository"];
        };
        readonly hovercard: {
            readonly contexts: readonly {
                readonly message: string;
                readonly octicon: string;
            }[];
        };
        readonly "key-simple": {
            readonly id: number;
            readonly key: string;
        };
    };
    readonly responses: {
        readonly not_found: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly validation_failed_simple: {
            readonly content: {
                readonly "application/json": components["schemas"]["validation-error-simple"];
            };
        };
        readonly bad_request: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
        readonly validation_failed: {
            readonly content: {
                readonly "application/json": components["schemas"]["validation-error"];
            };
        };
        readonly accepted: {
            readonly content: {
                readonly "application/json": {
                    readonly [key: string]: unknown;
                };
            };
        };
        readonly preview_header_missing: {
            readonly content: {
                readonly "application/json": {
                    readonly message: string;
                    readonly documentation_url: string;
                };
            };
        };
        readonly forbidden: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly requires_authentication: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly not_modified: unknown;
        readonly gone: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly service_unavailable: {
            readonly content: {
                readonly "application/json": {
                    readonly code?: string;
                    readonly message?: string;
                    readonly documentation_url?: string;
                };
            };
        };
        readonly forbidden_gist: {
            readonly content: {
                readonly "application/json": {
                    readonly block?: {
                        readonly reason?: string;
                        readonly created_at?: string;
                        readonly html_url?: string | null;
                    };
                    readonly message?: string;
                    readonly documentation_url?: string;
                };
            };
        };
        readonly moved_permanently: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly conflict: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly temporary_redirect: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly code_scanning_forbidden_read: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly code_scanning_forbidden_write: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly internal_error: {
            readonly content: {
                readonly "application/json": components["schemas"]["basic-error"];
            };
        };
        readonly found: unknown;
        readonly no_content: unknown;
        readonly scim_not_found: {
            readonly content: {
                readonly "application/json": components["schemas"]["scim-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
        readonly scim_forbidden: {
            readonly content: {
                readonly "application/json": components["schemas"]["scim-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
        readonly scim_bad_request: {
            readonly content: {
                readonly "application/json": components["schemas"]["scim-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
        readonly scim_internal_error: {
            readonly content: {
                readonly "application/json": components["schemas"]["scim-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
        readonly scim_conflict: {
            readonly content: {
                readonly "application/json": components["schemas"]["scim-error"];
                readonly "application/scim+json": components["schemas"]["scim-error"];
            };
        };
    };
    readonly parameters: {
        readonly "per-page": number;
        readonly cursor: string;
        readonly "delivery-id": number;
        readonly page: number;
        readonly since: string;
        readonly "installation-id": number;
        readonly "grant-id": number;
        readonly "client-id": string;
        readonly "access-token": string;
        readonly "app-slug": string;
        readonly "authorization-id": number;
        readonly enterprise: string;
        readonly "org-id": number;
        readonly "runner-group-id": number;
        readonly "runner-id": number;
        readonly "audit-log-phrase": string;
        readonly "audit-log-include": "web" | "git" | "all";
        readonly "audit-log-after": string;
        readonly "audit-log-before": string;
        readonly "audit-log-order": "desc" | "asc";
        readonly "gist-id": string;
        readonly "comment-id": number;
        readonly labels: string;
        readonly direction: "asc" | "desc";
        readonly "account-id": number;
        readonly "plan-id": number;
        readonly sort: "created" | "updated";
        readonly owner: string;
        readonly repo: string;
        readonly all: boolean;
        readonly participating: boolean;
        readonly before: string;
        readonly "thread-id": number;
        readonly "since-org": number;
        readonly org: string;
        readonly "repository-id": number;
        readonly "secret-name": string;
        readonly username: string;
        readonly "hook-id": number;
        readonly "invitation-id": number;
        readonly "migration-id": number;
        readonly "repo-name": string;
        readonly "package-type": "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
        readonly "package-name": string;
        readonly "package-version-id": number;
        readonly "team-slug": string;
        readonly "discussion-number": number;
        readonly "comment-number": number;
        readonly "reaction-id": number;
        readonly "project-id": number;
        readonly "card-id": number;
        readonly "column-id": number;
        readonly "artifact-id": number;
        readonly "job-id": number;
        readonly actor: string;
        readonly "workflow-run-branch": string;
        readonly event: string;
        readonly "workflow-run-status": "completed" | "action_required" | "cancelled" | "failure" | "neutral" | "skipped" | "stale" | "success" | "timed_out" | "in_progress" | "queued" | "requested" | "waiting";
        readonly created: string;
        readonly "run-id": number;
        readonly "workflow-id": number | string;
        readonly "autolink-id": number;
        readonly branch: string;
        readonly "check-run-id": number;
        readonly "check-suite-id": number;
        readonly "check-name": string;
        readonly status: "queued" | "in_progress" | "completed";
        readonly "tool-name": components["schemas"]["code-scanning-analysis-tool-name"];
        readonly "tool-guid": components["schemas"]["code-scanning-analysis-tool-guid"];
        readonly "git-ref": components["schemas"]["code-scanning-ref"];
        readonly "alert-number": components["schemas"]["alert-number"];
        readonly "commit-sha": string;
        readonly "deployment-id": number;
        readonly "environment-name": string;
        readonly "since-user": number;
        readonly "issue-number": number;
        readonly "key-id": number;
        readonly "milestone-number": number;
        readonly "pull-number": number;
        readonly "review-id": number;
        readonly "asset-id": number;
        readonly "release-id": number;
        readonly per: "" | "day" | "week";
        readonly "since-repo": number;
        readonly "start-index": number;
        readonly count: number;
        readonly "scim-group-id": string;
        readonly "scim-user-id": string;
        readonly order: "desc" | "asc";
        readonly "team-id": number;
        readonly "gpg-key-id": number;
    };
    readonly headers: {
        readonly link?: string;
        readonly "content-type"?: string;
        readonly "x-common-marker-version"?: string;
        readonly "x-rate-limit-limit"?: number;
        readonly "x-rate-limit-remaining"?: number;
        readonly "x-rate-limit-reset"?: number;
        readonly location?: string;
    };
}
export interface operations {
    readonly "meta/root": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly current_user_url: string;
                        readonly current_user_authorizations_html_url: string;
                        readonly authorizations_url: string;
                        readonly code_search_url: string;
                        readonly commit_search_url: string;
                        readonly emails_url: string;
                        readonly emojis_url: string;
                        readonly events_url: string;
                        readonly feeds_url: string;
                        readonly followers_url: string;
                        readonly following_url: string;
                        readonly gists_url: string;
                        readonly hub_url: string;
                        readonly issue_search_url: string;
                        readonly issues_url: string;
                        readonly keys_url: string;
                        readonly label_search_url: string;
                        readonly notifications_url: string;
                        readonly organization_url: string;
                        readonly organization_repositories_url: string;
                        readonly organization_teams_url: string;
                        readonly public_gists_url: string;
                        readonly rate_limit_url: string;
                        readonly repository_url: string;
                        readonly repository_search_url: string;
                        readonly current_user_repositories_url: string;
                        readonly starred_url: string;
                        readonly starred_gists_url: string;
                        readonly topic_search_url?: string;
                        readonly user_url: string;
                        readonly user_organizations_url: string;
                        readonly user_repositories_url: string;
                        readonly user_search_url: string;
                    };
                };
            };
        };
    };
    readonly "apps/get-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["integration"];
                };
            };
        };
    };
    readonly "apps/create-from-manifest": {
        readonly parameters: {
            readonly path: {
                readonly code: string;
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["integration"] & ({
                        readonly client_id: string;
                        readonly client_secret: string;
                        readonly webhook_secret: string | null;
                        readonly pem: string;
                    } & {
                        readonly [key: string]: any;
                    });
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly [key: string]: unknown;
                };
            };
        };
    };
    readonly "apps/get-webhook-config-for-app": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
    };
    readonly "apps/update-webhook-config-for-app": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly url?: components["schemas"]["webhook-config-url"];
                    readonly content_type?: components["schemas"]["webhook-config-content-type"];
                    readonly secret?: components["schemas"]["webhook-config-secret"];
                    readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                };
            };
        };
    };
    readonly "apps/list-webhook-deliveries": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly cursor?: components["parameters"]["cursor"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["hook-delivery-item"][];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/get-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hook-delivery"];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/redeliver-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 202: components["responses"]["accepted"];
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/list-installations": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly since?: components["parameters"]["since"];
                readonly outdated?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["installation"][];
                };
            };
        };
    };
    readonly "apps/get-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["installation"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "apps/delete-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/create-installation-access-token": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["installation-token"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly repositories?: readonly string[];
                    readonly repository_ids?: readonly number[];
                    readonly permissions?: components["schemas"]["app-permissions"];
                };
            };
        };
    };
    readonly "apps/suspend-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/unsuspend-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "oauth-authorizations/list-grants": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly client_id?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["application-grant"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "oauth-authorizations/get-grant": {
        readonly parameters: {
            readonly path: {
                readonly grant_id: components["parameters"]["grant-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["application-grant"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "oauth-authorizations/delete-grant": {
        readonly parameters: {
            readonly path: {
                readonly grant_id: components["parameters"]["grant-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "apps/delete-authorization": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly access_token?: string;
                };
            };
        };
    };
    readonly "apps/revoke-grant-for-application": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
                readonly access_token: components["parameters"]["access-token"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "apps/check-token": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly access_token: string;
                };
            };
        };
    };
    readonly "apps/delete-token": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly access_token: string;
                };
            };
        };
    };
    readonly "apps/reset-token": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly access_token: string;
                };
            };
        };
    };
    readonly "apps/scope-token": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly access_token: string;
                    readonly target?: string;
                    readonly target_id?: number;
                    readonly repositories?: readonly string[];
                    readonly repository_ids?: readonly number[];
                    readonly permissions?: components["schemas"]["app-permissions"];
                };
            };
        };
    };
    readonly "apps/check-authorization": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
                readonly access_token: components["parameters"]["access-token"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"] | null;
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/reset-authorization": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
                readonly access_token: components["parameters"]["access-token"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
        };
    };
    readonly "apps/revoke-authorization-for-application": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
                readonly access_token: components["parameters"]["access-token"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "apps/get-by-slug": {
        readonly parameters: {
            readonly path: {
                readonly app_slug: components["parameters"]["app-slug"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["integration"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "oauth-authorizations/list-authorizations": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly client_id?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["authorization"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "oauth-authorizations/create-authorization": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly scopes?: readonly string[] | null;
                    readonly note?: string;
                    readonly note_url?: string;
                    readonly client_id?: string;
                    readonly client_secret?: string;
                    readonly fingerprint?: string;
                };
            };
        };
    };
    readonly "oauth-authorizations/get-or-create-authorization-for-app": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly client_secret: string;
                    readonly scopes?: readonly string[] | null;
                    readonly note?: string;
                    readonly note_url?: string;
                    readonly fingerprint?: string;
                };
            };
        };
    };
    readonly "oauth-authorizations/get-or-create-authorization-for-app-and-fingerprint": {
        readonly parameters: {
            readonly path: {
                readonly client_id: components["parameters"]["client-id"];
                readonly fingerprint: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly client_secret: string;
                    readonly scopes?: readonly string[] | null;
                    readonly note?: string;
                    readonly note_url?: string;
                };
            };
        };
    };
    readonly "oauth-authorizations/get-authorization": {
        readonly parameters: {
            readonly path: {
                readonly authorization_id: components["parameters"]["authorization-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "oauth-authorizations/delete-authorization": {
        readonly parameters: {
            readonly path: {
                readonly authorization_id: components["parameters"]["authorization-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "oauth-authorizations/update-authorization": {
        readonly parameters: {
            readonly path: {
                readonly authorization_id: components["parameters"]["authorization-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authorization"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly scopes?: readonly string[] | null;
                    readonly add_scopes?: readonly string[];
                    readonly remove_scopes?: readonly string[];
                    readonly note?: string;
                    readonly note_url?: string;
                    readonly fingerprint?: string;
                };
            };
        };
    };
    readonly "codes-of-conduct/get-all-codes-of-conduct": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-of-conduct"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "codes-of-conduct/get-conduct-code": {
        readonly parameters: {
            readonly path: {
                readonly key: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-of-conduct"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "emojis/get": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: string;
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "enterprise-admin/get-github-actions-permissions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-enterprise-permissions"];
                };
            };
        };
    };
    readonly "enterprise-admin/set-github-actions-permissions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly enabled_organizations: components["schemas"]["enabled-organizations"];
                    readonly allowed_actions?: components["schemas"]["allowed-actions"];
                };
            };
        };
    };
    readonly "enterprise-admin/list-selected-organizations-enabled-github-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly organizations: readonly components["schemas"]["organization-simple"][];
                    };
                };
            };
        };
    };
    readonly "enterprise-admin/set-selected-organizations-enabled-github-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly selected_organization_ids: readonly number[];
                };
            };
        };
    };
    readonly "enterprise-admin/enable-selected-organization-github-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly org_id: components["parameters"]["org-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/disable-selected-organization-github-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly org_id: components["parameters"]["org-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/get-allowed-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["selected-actions"];
                };
            };
        };
    };
    readonly "enterprise-admin/set-allowed-actions-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["selected-actions"];
            };
        };
    };
    readonly "enterprise-admin/list-self-hosted-runner-groups-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runner_groups: readonly components["schemas"]["runner-groups-enterprise"][];
                    };
                };
            };
        };
    };
    readonly "enterprise-admin/create-self-hosted-runner-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-enterprise"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly visibility?: "selected" | "all";
                    readonly selected_organization_ids?: readonly number[];
                    readonly runners?: readonly number[];
                };
            };
        };
    };
    readonly "enterprise-admin/get-self-hosted-runner-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-enterprise"];
                };
            };
        };
    };
    readonly "enterprise-admin/delete-self-hosted-runner-group-from-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/update-self-hosted-runner-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-enterprise"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly visibility?: "selected" | "all";
                };
            };
        };
    };
    readonly "enterprise-admin/list-org-access-to-self-hosted-runner-group-in-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly organizations: readonly components["schemas"]["organization-simple"][];
                    };
                };
            };
        };
    };
    readonly "enterprise-admin/set-org-access-to-self-hosted-runner-group-in-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly selected_organization_ids: readonly number[];
                };
            };
        };
    };
    readonly "enterprise-admin/add-org-access-to-self-hosted-runner-group-in-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly org_id: components["parameters"]["org-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/remove-org-access-to-self-hosted-runner-group-in-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly org_id: components["parameters"]["org-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/list-self-hosted-runners-in-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runners: readonly components["schemas"]["runner"][];
                    };
                };
            };
        };
    };
    readonly "enterprise-admin/set-self-hosted-runners-in-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly runners: readonly number[];
                };
            };
        };
    };
    readonly "enterprise-admin/add-self-hosted-runner-to-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/remove-self-hosted-runner-from-group-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/list-self-hosted-runners-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count?: number;
                        readonly runners?: readonly components["schemas"]["runner"][];
                    };
                };
            };
        };
    };
    readonly "enterprise-admin/list-runner-applications-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["runner-application"][];
                };
            };
        };
    };
    readonly "enterprise-admin/create-registration-token-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "enterprise-admin/create-remove-token-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "enterprise-admin/get-self-hosted-runner-for-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner"];
                };
            };
        };
    };
    readonly "enterprise-admin/delete-self-hosted-runner-from-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/get-audit-log": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly phrase?: components["parameters"]["audit-log-phrase"];
                readonly include?: components["parameters"]["audit-log-include"];
                readonly after?: components["parameters"]["audit-log-after"];
                readonly before?: components["parameters"]["audit-log-before"];
                readonly order?: components["parameters"]["audit-log-order"];
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["audit-log-event"][];
                };
            };
        };
    };
    readonly "billing/get-github-actions-billing-ghe": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-github-packages-billing-ghe": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["packages-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-shared-storage-billing-ghe": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["combined-billing-usage"];
                };
            };
        };
    };
    readonly "activity/list-public-events": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "activity/get-feeds": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["feed"];
                };
            };
        };
    };
    readonly "gists/list": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["base-gist"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "gists/create": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-simple"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly description?: string;
                    readonly files: {
                        readonly [key: string]: {
                            readonly content: string;
                        };
                    };
                    readonly public?: boolean | ("true" | "false");
                };
            };
        };
    };
    readonly "gists/list-public": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["base-gist"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "gists/list-starred": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["base-gist"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "gists/get": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-simple"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden_gist"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/delete": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/update": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-simple"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly description?: string;
                    readonly files?: {
                        readonly [key: string]: Partial<{
                            readonly [key: string]: unknown;
                        }>;
                    };
                } | null;
            };
        };
    };
    readonly "gists/list-comments": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["gist-comment"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/create-comment": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-comment"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "gists/get-comment": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-comment"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden_gist"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/delete-comment": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/update-comment": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "gists/list-commits": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Link?: string;
                };
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["gist-commit"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/list-forks": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["gist-simple"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/fork": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["base-gist"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "gists/check-is-starred": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
        };
    };
    readonly "gists/star": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/unstar": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "gists/get-revision": {
        readonly parameters: {
            readonly path: {
                readonly gist_id: components["parameters"]["gist-id"];
                readonly sha: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gist-simple"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "gitignore/get-all-templates": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly string[];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "gitignore/get-template": {
        readonly parameters: {
            readonly path: {
                readonly name: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gitignore-template"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "apps/list-repos-accessible-to-installation": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly repositories: readonly components["schemas"]["repository"][];
                        readonly repository_selection?: string;
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "apps/revoke-installation-access-token": {
        readonly parameters: {};
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/list": {
        readonly parameters: {
            readonly query: {
                readonly filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
                readonly state?: "open" | "closed" | "all";
                readonly labels?: components["parameters"]["labels"];
                readonly sort?: "created" | "updated" | "comments";
                readonly direction?: components["parameters"]["direction"];
                readonly since?: components["parameters"]["since"];
                readonly collab?: boolean;
                readonly orgs?: boolean;
                readonly owned?: boolean;
                readonly pulls?: boolean;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "licenses/get-all-commonly-used": {
        readonly parameters: {
            readonly query: {
                readonly featured?: boolean;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["license-simple"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "licenses/get": {
        readonly parameters: {
            readonly path: {
                readonly license: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["license"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "markdown/render": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly "Content-Length"?: string;
                };
                readonly content: {
                    readonly "text/html": string;
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly text: string;
                    readonly mode?: "markdown" | "gfm";
                    readonly context?: string;
                };
            };
        };
    };
    readonly "markdown/render-raw": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "text/html": string;
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "text/plain": string;
                readonly "text/x-markdown": string;
            };
        };
    };
    readonly "apps/get-subscription-plan-for-account": {
        readonly parameters: {
            readonly path: {
                readonly account_id: components["parameters"]["account-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["marketplace-purchase"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "apps/list-plans": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["marketplace-listing-plan"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/list-accounts-for-plan": {
        readonly parameters: {
            readonly path: {
                readonly plan_id: components["parameters"]["plan-id"];
            };
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["marketplace-purchase"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/get-subscription-plan-for-account-stubbed": {
        readonly parameters: {
            readonly path: {
                readonly account_id: components["parameters"]["account-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["marketplace-purchase"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 404: unknown;
        };
    };
    readonly "apps/list-plans-stubbed": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["marketplace-listing-plan"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
        };
    };
    readonly "apps/list-accounts-for-plan-stubbed": {
        readonly parameters: {
            readonly path: {
                readonly plan_id: components["parameters"]["plan-id"];
            };
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["marketplace-purchase"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
        };
    };
    readonly "meta/get": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["api-overview"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "activity/list-public-events-for-repo-network": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "activity/list-notifications-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly all?: components["parameters"]["all"];
                readonly participating?: components["parameters"]["participating"];
                readonly since?: components["parameters"]["since"];
                readonly before?: components["parameters"]["before"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["thread"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "activity/mark-notifications-as-read": {
        readonly parameters: {};
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                    };
                };
            };
            readonly 205: unknown;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly last_read_at?: string;
                    readonly read?: boolean;
                };
            };
        };
    };
    readonly "activity/get-thread": {
        readonly parameters: {
            readonly path: {
                readonly thread_id: components["parameters"]["thread-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["thread"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "activity/mark-thread-as-read": {
        readonly parameters: {
            readonly path: {
                readonly thread_id: components["parameters"]["thread-id"];
            };
        };
        readonly responses: {
            readonly 205: unknown;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "activity/get-thread-subscription-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly thread_id: components["parameters"]["thread-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["thread-subscription"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "activity/set-thread-subscription": {
        readonly parameters: {
            readonly path: {
                readonly thread_id: components["parameters"]["thread-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["thread-subscription"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly ignored?: boolean;
                };
            };
        };
    };
    readonly "activity/delete-thread-subscription": {
        readonly parameters: {
            readonly path: {
                readonly thread_id: components["parameters"]["thread-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "meta/get-octocat": {
        readonly parameters: {
            readonly query: {
                readonly s?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/octocat-stream": string;
                };
            };
        };
    };
    readonly "orgs/list": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since-org"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Link?: string;
                };
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-simple"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "orgs/get": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["organization-full"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/update": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["organization-full"];
                };
            };
            readonly 409: components["responses"]["conflict"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: {
                readonly content: {
                    readonly "application/json": components["schemas"]["validation-error"] | components["schemas"]["validation-error-simple"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly billing_email?: string;
                    readonly company?: string;
                    readonly email?: string;
                    readonly twitter_username?: string;
                    readonly location?: string;
                    readonly name?: string;
                    readonly description?: string;
                    readonly has_organization_projects?: boolean;
                    readonly has_repository_projects?: boolean;
                    readonly default_repository_permission?: "read" | "write" | "admin" | "none";
                    readonly members_can_create_repositories?: boolean;
                    readonly members_can_create_internal_repositories?: boolean;
                    readonly members_can_create_private_repositories?: boolean;
                    readonly members_can_create_public_repositories?: boolean;
                    readonly members_allowed_repository_creation_type?: "all" | "private" | "none";
                    readonly members_can_create_pages?: boolean;
                    readonly members_can_create_public_pages?: boolean;
                    readonly members_can_create_private_pages?: boolean;
                    readonly blog?: string;
                };
            };
        };
    };
    readonly "actions/get-github-actions-permissions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-organization-permissions"];
                };
            };
        };
    };
    readonly "actions/set-github-actions-permissions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly enabled_repositories: components["schemas"]["enabled-repositories"];
                    readonly allowed_actions?: components["schemas"]["allowed-actions"];
                };
            };
        };
    };
    readonly "actions/list-selected-repositories-enabled-github-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly repositories: readonly components["schemas"]["repository"][];
                    };
                };
            };
        };
    };
    readonly "actions/set-selected-repositories-enabled-github-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly selected_repository_ids: readonly number[];
                };
            };
        };
    };
    readonly "actions/enable-selected-repository-github-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/disable-selected-repository-github-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/get-allowed-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["selected-actions"];
                };
            };
        };
    };
    readonly "actions/set-allowed-actions-organization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["selected-actions"];
            };
        };
    };
    readonly "actions/list-self-hosted-runner-groups-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runner_groups: readonly components["schemas"]["runner-groups-org"][];
                    };
                };
            };
        };
    };
    readonly "actions/create-self-hosted-runner-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-org"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly visibility?: "selected" | "all" | "private";
                    readonly selected_repository_ids?: readonly number[];
                    readonly runners?: readonly number[];
                };
            };
        };
    };
    readonly "actions/get-self-hosted-runner-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-org"];
                };
            };
        };
    };
    readonly "actions/delete-self-hosted-runner-group-from-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/update-self-hosted-runner-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner-groups-org"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly visibility?: "selected" | "all" | "private";
                };
            };
        };
    };
    readonly "actions/list-repo-access-to-self-hosted-runner-group-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly repositories: readonly components["schemas"]["minimal-repository"][];
                    };
                };
            };
        };
    };
    readonly "actions/set-repo-access-to-self-hosted-runner-group-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly selected_repository_ids: readonly number[];
                };
            };
        };
    };
    readonly "actions/add-repo-access-to-self-hosted-runner-group-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/remove-repo-access-to-self-hosted-runner-group-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-self-hosted-runners-in-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runners: readonly components["schemas"]["runner"][];
                    };
                };
            };
        };
    };
    readonly "actions/set-self-hosted-runners-in-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly runners: readonly number[];
                };
            };
        };
    };
    readonly "actions/add-self-hosted-runner-to-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/remove-self-hosted-runner-from-group-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_group_id: components["parameters"]["runner-group-id"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-self-hosted-runners-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runners: readonly components["schemas"]["runner"][];
                    };
                };
            };
        };
    };
    readonly "actions/list-runner-applications-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["runner-application"][];
                };
            };
        };
    };
    readonly "actions/create-registration-token-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "actions/create-remove-token-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "actions/get-self-hosted-runner-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner"];
                };
            };
        };
    };
    readonly "actions/delete-self-hosted-runner-from-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-org-secrets": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly secrets: readonly components["schemas"]["organization-actions-secret"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-org-public-key": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-public-key"];
                };
            };
        };
    };
    readonly "actions/get-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["organization-actions-secret"];
                };
            };
        };
    };
    readonly "actions/create-or-update-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["empty-object"];
                };
            };
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly encrypted_value?: string;
                    readonly key_id?: string;
                    readonly visibility: "all" | "private" | "selected";
                    readonly selected_repository_ids?: readonly string[];
                };
            };
        };
    };
    readonly "actions/delete-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-selected-repos-for-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly repositories: readonly components["schemas"]["minimal-repository"][];
                    };
                };
            };
        };
    };
    readonly "actions/set-selected-repos-for-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly selected_repository_ids?: readonly number[];
                };
            };
        };
    };
    readonly "actions/add-selected-repo-to-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
                readonly repository_id: number;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 409: unknown;
        };
    };
    readonly "actions/remove-selected-repo-from-org-secret": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly secret_name: components["parameters"]["secret-name"];
                readonly repository_id: number;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 409: unknown;
        };
    };
    readonly "orgs/get-audit-log": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly phrase?: components["parameters"]["audit-log-phrase"];
                readonly include?: components["parameters"]["audit-log-include"];
                readonly after?: components["parameters"]["audit-log-after"];
                readonly before?: components["parameters"]["audit-log-before"];
                readonly order?: components["parameters"]["audit-log-order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["audit-log-event"][];
                };
            };
        };
    };
    readonly "orgs/list-blocked-users": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "orgs/check-blocked-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "orgs/block-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/unblock-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "orgs/list-saml-sso-authorizations": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["credential-authorization"][];
                };
            };
        };
    };
    readonly "orgs/remove-saml-sso-authorization": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly credential_id: number;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "activity/list-public-org-events": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "orgs/list-failed-invitations": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-invitation"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/list-webhooks": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["org-hook"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/create-webhook": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["org-hook"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly config: {
                        readonly url: components["schemas"]["webhook-config-url"];
                        readonly content_type?: components["schemas"]["webhook-config-content-type"];
                        readonly secret?: components["schemas"]["webhook-config-secret"];
                        readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                        readonly username?: string;
                        readonly password?: string;
                    };
                    readonly events?: readonly string[];
                    readonly active?: boolean;
                };
            };
        };
    };
    readonly "orgs/get-webhook": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-hook"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/delete-webhook": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/update-webhook": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-hook"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly config?: {
                        readonly url: components["schemas"]["webhook-config-url"];
                        readonly content_type?: components["schemas"]["webhook-config-content-type"];
                        readonly secret?: components["schemas"]["webhook-config-secret"];
                        readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                    };
                    readonly events?: readonly string[];
                    readonly active?: boolean;
                    readonly name?: string;
                };
            };
        };
    };
    readonly "orgs/get-webhook-config-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
    };
    readonly "orgs/update-webhook-config-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly url?: components["schemas"]["webhook-config-url"];
                    readonly content_type?: components["schemas"]["webhook-config-content-type"];
                    readonly secret?: components["schemas"]["webhook-config-secret"];
                    readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                };
            };
        };
    };
    readonly "orgs/list-webhook-deliveries": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly cursor?: components["parameters"]["cursor"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["hook-delivery-item"][];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/get-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hook-delivery"];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/redeliver-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 202: components["responses"]["accepted"];
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/ping-webhook": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/get-org-installation": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["installation"];
                };
            };
        };
    };
    readonly "orgs/list-app-installations": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly installations: readonly components["schemas"]["installation"][];
                    };
                };
            };
        };
    };
    readonly "interactions/get-restrictions-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": Partial<components["schemas"]["interaction-limit-response"]> & Partial<{
                        readonly [key: string]: unknown;
                    }>;
                };
            };
        };
    };
    readonly "interactions/set-restrictions-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["interaction-limit-response"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["interaction-limit"];
            };
        };
    };
    readonly "interactions/remove-restrictions-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "orgs/list-pending-invitations": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-invitation"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/create-invitation": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["organization-invitation"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly invitee_id?: number;
                    readonly email?: string;
                    readonly role?: "admin" | "direct_member" | "billing_manager";
                    readonly team_ids?: readonly number[];
                };
            };
        };
    };
    readonly "orgs/cancel-invitation": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/list-invitation-teams": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/list-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
                readonly state?: "open" | "closed" | "all";
                readonly labels?: components["parameters"]["labels"];
                readonly sort?: "created" | "updated" | "comments";
                readonly direction?: components["parameters"]["direction"];
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/list-members": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly filter?: "2fa_disabled" | "all";
                readonly role?: "all" | "admin" | "member";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 302: never;
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/check-membership-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 302: never;
            readonly 404: unknown;
        };
    };
    readonly "orgs/remove-member": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "orgs/get-membership-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-membership"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/set-membership-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-membership"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly role?: "admin" | "member";
                };
            };
        };
    };
    readonly "orgs/remove-membership-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/list-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly exclude?: readonly "repositories"[];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["migration"][];
                };
            };
        };
    };
    readonly "migrations/start-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["migration"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly repositories: readonly string[];
                    readonly lock_repositories?: boolean;
                    readonly exclude_attachments?: boolean;
                    readonly exclude?: readonly "repositories"[];
                };
            };
        };
    };
    readonly "migrations/get-status-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly migration_id: components["parameters"]["migration-id"];
            };
            readonly query: {
                readonly exclude?: readonly "repositories"[];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["migration"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/download-archive-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly migration_id: components["parameters"]["migration-id"];
            };
        };
        readonly responses: {
            readonly 302: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/delete-archive-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly migration_id: components["parameters"]["migration-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/unlock-repo-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly migration_id: components["parameters"]["migration-id"];
                readonly repo_name: components["parameters"]["repo-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/list-repos-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly migration_id: components["parameters"]["migration-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/list-outside-collaborators": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly filter?: "2fa_disabled" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "orgs/convert-member-to-outside-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
            readonly 204: never;
            readonly 403: unknown;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/remove-outside-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
        };
    };
    readonly "packages/get-package-for-organization": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package"];
                };
            };
        };
    };
    readonly "packages/delete-package-for-org": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/restore-package-for-org": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly token?: string;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/get-all-package-versions-for-package-owned-by-org": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly state?: "active" | "deleted";
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["package-version"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/get-package-version-for-organization": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package-version"];
                };
            };
        };
    };
    readonly "packages/delete-package-version-for-org": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/restore-package-version-for-org": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly org: components["parameters"]["org"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "projects/list-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly state?: "open" | "closed" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["project"][];
                };
            };
            readonly 422: components["responses"]["validation_failed_simple"];
        };
    };
    readonly "projects/create-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly body?: string;
                };
            };
        };
    };
    readonly "orgs/list-public-members": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "orgs/check-public-membership-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "orgs/set-public-membership-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "orgs/remove-public-membership-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/list-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal";
                readonly sort?: "created" | "updated" | "pushed" | "full_name";
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
        };
    };
    readonly "repos/create-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["repository"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly description?: string;
                    readonly homepage?: string;
                    readonly private?: boolean;
                    readonly visibility?: "public" | "private" | "visibility" | "internal";
                    readonly has_issues?: boolean;
                    readonly has_projects?: boolean;
                    readonly has_wiki?: boolean;
                    readonly is_template?: boolean;
                    readonly team_id?: number;
                    readonly auto_init?: boolean;
                    readonly gitignore_template?: string;
                    readonly license_template?: string;
                    readonly allow_squash_merge?: boolean;
                    readonly allow_merge_commit?: boolean;
                    readonly allow_rebase_merge?: boolean;
                    readonly allow_auto_merge?: boolean;
                    readonly delete_branch_on_merge?: boolean;
                };
            };
        };
    };
    readonly "billing/get-github-actions-billing-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-github-packages-billing-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["packages-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-shared-storage-billing-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["combined-billing-usage"];
                };
            };
        };
    };
    readonly "teams/list-idp-groups-for-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Link?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["group-mapping"];
                };
            };
        };
    };
    readonly "teams/list": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "teams/create": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly description?: string;
                    readonly maintainers?: readonly string[];
                    readonly repo_names?: readonly string[];
                    readonly privacy?: "secret" | "closed";
                    readonly permission?: "pull" | "push" | "admin";
                    readonly parent_team_id?: number;
                };
            };
        };
    };
    readonly "teams/get-by-name": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/delete-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/update-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly description?: string;
                    readonly privacy?: "secret" | "closed";
                    readonly permission?: "pull" | "push" | "admin";
                    readonly parent_team_id?: number | null;
                };
            };
        };
    };
    readonly "teams/list-discussions-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly pinned?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-discussion"][];
                };
            };
        };
    };
    readonly "teams/create-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title: string;
                    readonly body: string;
                    readonly private?: boolean;
                };
            };
        };
    };
    readonly "teams/get-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
    };
    readonly "teams/delete-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/update-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly body?: string;
                };
            };
        };
    };
    readonly "teams/list-discussion-comments-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
            readonly query: {
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-discussion-comment"][];
                };
            };
        };
    };
    readonly "teams/create-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "teams/get-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
    };
    readonly "teams/delete-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/update-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "reactions/list-for-team-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
        };
    };
    readonly "reactions/create-for-team-discussion-comment-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-team-discussion-comment": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "reactions/list-for-team-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
        };
    };
    readonly "reactions/create-for-team-discussion-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-team-discussion": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/list-pending-invitations-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-invitation"][];
                };
            };
        };
    };
    readonly "teams/list-members-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly role?: "member" | "maintainer" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "teams/get-membership-for-user-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-membership"];
                };
            };
            readonly 404: unknown;
        };
    };
    readonly "teams/add-or-update-membership-for-user-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-membership"];
                };
            };
            readonly 403: unknown;
            readonly 422: unknown;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly role?: "member" | "maintainer";
                };
            };
        };
    };
    readonly "teams/remove-membership-for-user-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: unknown;
        };
    };
    readonly "teams/list-projects-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-project"][];
                };
            };
        };
    };
    readonly "teams/check-permissions-for-project-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-project"];
                };
            };
            readonly 404: unknown;
        };
    };
    readonly "teams/add-or-update-project-permissions-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "read" | "write" | "admin";
                } | null;
            };
        };
    };
    readonly "teams/remove-project-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/list-repos-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
        };
    };
    readonly "teams/check-permissions-for-repo-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-repository"];
                };
            };
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "teams/add-or-update-repo-permissions-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "pull" | "push" | "admin" | "maintain" | "triage";
                };
            };
        };
    };
    readonly "teams/remove-repo-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/list-idp-groups-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["group-mapping"];
                };
            };
        };
    };
    readonly "teams/create-or-update-idp-group-connections-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["group-mapping"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly groups?: readonly {
                        readonly group_id: string;
                        readonly group_name: string;
                        readonly group_description: string;
                    }[];
                };
            };
        };
    };
    readonly "teams/list-child-in-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly team_slug: components["parameters"]["team-slug"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
        };
    };
    readonly "projects/get-card": {
        readonly parameters: {
            readonly path: {
                readonly card_id: components["parameters"]["card-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-card"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "projects/delete-card": {
        readonly parameters: {
            readonly path: {
                readonly card_id: components["parameters"]["card-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly string[];
                    };
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "projects/update-card": {
        readonly parameters: {
            readonly path: {
                readonly card_id: components["parameters"]["card-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-card"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly note?: string | null;
                    readonly archived?: boolean;
                };
            };
        };
    };
    readonly "projects/move-card": {
        readonly parameters: {
            readonly path: {
                readonly card_id: components["parameters"]["card-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly {
                            readonly code?: string;
                            readonly message?: string;
                            readonly resource?: string;
                            readonly field?: string;
                        }[];
                    };
                };
            };
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: {
                readonly content: {
                    readonly "application/json": {
                        readonly code?: string;
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly {
                            readonly code?: string;
                            readonly message?: string;
                        }[];
                    };
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly position: string;
                    readonly column_id?: number;
                };
            };
        };
    };
    readonly "projects/get-column": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-column"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "projects/delete-column": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "projects/update-column": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-column"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                };
            };
        };
    };
    readonly "projects/list-cards": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
            readonly query: {
                readonly archived_state?: "all" | "archived" | "not_archived";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["project-card"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "projects/create-card": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-card"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: {
                readonly content: {
                    readonly "application/json": components["schemas"]["validation-error"] | components["schemas"]["validation-error-simple"];
                };
            };
            readonly 503: {
                readonly content: {
                    readonly "application/json": {
                        readonly code?: string;
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly {
                            readonly code?: string;
                            readonly message?: string;
                        }[];
                    };
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly note: string | null;
                } | {
                    readonly content_id: number;
                    readonly content_type: string;
                };
            };
        };
    };
    readonly "projects/move-column": {
        readonly parameters: {
            readonly path: {
                readonly column_id: components["parameters"]["column-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly position: string;
                };
            };
        };
    };
    readonly "projects/get": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "projects/delete": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly string[];
                    };
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "projects/update": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                        readonly errors?: readonly string[];
                    };
                };
            };
            readonly 404: unknown;
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly body?: string | null;
                    readonly state?: string;
                    readonly organization_permission?: "read" | "write" | "admin" | "none";
                    readonly private?: boolean;
                };
            };
        };
    };
    readonly "projects/list-collaborators": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
            readonly query: {
                readonly affiliation?: "outside" | "direct" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "projects/add-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "read" | "write" | "admin";
                } | null;
            };
        };
    };
    readonly "projects/remove-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "projects/get-permission-for-user": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-collaborator-permission"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "projects/list-columns": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["project-column"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "projects/create-column": {
        readonly parameters: {
            readonly path: {
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project-column"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                };
            };
        };
    };
    readonly "rate-limit/get": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": components["schemas"]["rate-limit-overview"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "reactions/delete-legacy": {
        readonly parameters: {
            readonly path: {
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 410: components["responses"]["gone"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/get": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["full-repository"];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 307: components["responses"]["temporary_redirect"];
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["full-repository"];
                };
            };
            readonly 307: components["responses"]["temporary_redirect"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly description?: string;
                    readonly homepage?: string;
                    readonly private?: boolean;
                    readonly visibility?: "public" | "private" | "visibility" | "internal";
                    readonly security_and_analysis?: {
                        readonly advanced_security?: {
                            readonly status?: string;
                        };
                        readonly secret_scanning?: {
                            readonly status?: string;
                        };
                    } | null;
                    readonly has_issues?: boolean;
                    readonly has_projects?: boolean;
                    readonly has_wiki?: boolean;
                    readonly is_template?: boolean;
                    readonly default_branch?: string;
                    readonly allow_squash_merge?: boolean;
                    readonly allow_merge_commit?: boolean;
                    readonly allow_rebase_merge?: boolean;
                    readonly allow_auto_merge?: boolean;
                    readonly delete_branch_on_merge?: boolean;
                    readonly archived?: boolean;
                };
            };
        };
    };
    readonly "actions/list-artifacts-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly artifacts: readonly components["schemas"]["artifact"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-artifact": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly artifact_id: components["parameters"]["artifact-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["artifact"];
                };
            };
        };
    };
    readonly "actions/delete-artifact": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly artifact_id: components["parameters"]["artifact-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/download-artifact": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly artifact_id: components["parameters"]["artifact-id"];
                readonly archive_format: string;
            };
        };
        readonly responses: {
            readonly 302: never;
        };
    };
    readonly "actions/get-job-for-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly job_id: components["parameters"]["job-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["job"];
                };
            };
        };
    };
    readonly "actions/download-job-logs-for-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly job_id: components["parameters"]["job-id"];
            };
        };
        readonly responses: {
            readonly 302: never;
        };
    };
    readonly "actions/get-github-actions-permissions-repository": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-repository-permissions"];
                };
            };
        };
    };
    readonly "actions/set-github-actions-permissions-repository": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly enabled: components["schemas"]["actions-enabled"];
                    readonly allowed_actions?: components["schemas"]["allowed-actions"];
                };
            };
        };
    };
    readonly "actions/get-allowed-actions-repository": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["selected-actions"];
                };
            };
        };
    };
    readonly "actions/set-allowed-actions-repository": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["selected-actions"];
            };
        };
    };
    readonly "actions/list-self-hosted-runners-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly runners: readonly components["schemas"]["runner"][];
                    };
                };
            };
        };
    };
    readonly "actions/list-runner-applications-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["runner-application"][];
                };
            };
        };
    };
    readonly "actions/create-registration-token-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "actions/create-remove-token-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["authentication-token"];
                };
            };
        };
    };
    readonly "actions/get-self-hosted-runner-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["runner"];
                };
            };
        };
    };
    readonly "actions/delete-self-hosted-runner-from-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly runner_id: components["parameters"]["runner-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-workflow-runs-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly actor?: components["parameters"]["actor"];
                readonly branch?: components["parameters"]["workflow-run-branch"];
                readonly event?: components["parameters"]["event"];
                readonly status?: components["parameters"]["workflow-run-status"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly created?: components["parameters"]["created"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly workflow_runs: readonly components["schemas"]["workflow-run"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["workflow-run"];
                };
            };
        };
    };
    readonly "actions/delete-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/get-reviews-for-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["environment-approvals"][];
                };
            };
        };
    };
    readonly "actions/approve-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["empty-object"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "actions/list-workflow-run-artifacts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly artifacts: readonly components["schemas"]["artifact"][];
                    };
                };
            };
        };
    };
    readonly "actions/cancel-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
        };
    };
    readonly "actions/list-jobs-for-workflow-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
            readonly query: {
                readonly filter?: "latest" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly jobs: readonly components["schemas"]["job"][];
                    };
                };
            };
        };
    };
    readonly "actions/download-workflow-run-logs": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 302: never;
        };
    };
    readonly "actions/delete-workflow-run-logs": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/get-pending-deployments-for-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pending-deployment"][];
                };
            };
        };
    };
    readonly "actions/review-pending-deployments-for-run": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["deployment"][];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly environment_ids: readonly number[];
                    readonly state: "approved" | "rejected";
                    readonly comment: string;
                };
            };
        };
    };
    readonly "actions/re-run-workflow": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
        };
    };
    readonly "actions/get-workflow-run-usage": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly run_id: components["parameters"]["run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["workflow-run-usage"];
                };
            };
        };
    };
    readonly "actions/list-repo-secrets": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly secrets: readonly components["schemas"]["actions-secret"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-repo-public-key": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-public-key"];
                };
            };
        };
    };
    readonly "actions/get-repo-secret": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-secret"];
                };
            };
        };
    };
    readonly "actions/create-or-update-repo-secret": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly encrypted_value?: string;
                    readonly key_id?: string;
                };
            };
        };
    };
    readonly "actions/delete-repo-secret": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-repo-workflows": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly workflows: readonly components["schemas"]["workflow"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-workflow": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["workflow"];
                };
            };
        };
    };
    readonly "actions/disable-workflow": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/create-workflow-dispatch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly ref: string;
                    readonly inputs?: {
                        readonly [key: string]: string;
                    };
                };
            };
        };
    };
    readonly "actions/enable-workflow": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "actions/list-workflow-runs": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
            readonly query: {
                readonly actor?: components["parameters"]["actor"];
                readonly branch?: components["parameters"]["workflow-run-branch"];
                readonly event?: components["parameters"]["event"];
                readonly status?: components["parameters"]["workflow-run-status"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly created?: components["parameters"]["created"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly workflow_runs: readonly components["schemas"]["workflow-run"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-workflow-usage": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly workflow_id: components["parameters"]["workflow-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["workflow-usage"];
                };
            };
        };
    };
    readonly "issues/list-assignees": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/check-user-can-be-assigned": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly assignee: string;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "repos/list-autolinks": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["autolink"][];
                };
            };
        };
    };
    readonly "repos/create-autolink": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["autolink"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly key_prefix: string;
                    readonly url_template: string;
                };
            };
        };
    };
    readonly "repos/get-autolink": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly autolink_id: components["parameters"]["autolink-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["autolink"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-autolink": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly autolink_id: components["parameters"]["autolink-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/enable-automated-security-fixes": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/disable-automated-security-fixes": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/list-branches": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly protected?: boolean;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["short-branch"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/get-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["branch-with-protection"];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/get-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["branch-protection"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly required_status_checks: {
                        readonly strict: boolean;
                        readonly contexts: readonly string[];
                    } | null;
                    readonly enforce_admins: boolean | null;
                    readonly required_pull_request_reviews: {
                        readonly dismissal_restrictions?: {
                            readonly users?: readonly string[];
                            readonly teams?: readonly string[];
                        };
                        readonly dismiss_stale_reviews?: boolean;
                        readonly require_code_owner_reviews?: boolean;
                        readonly required_approving_review_count?: number;
                    } | null;
                    readonly restrictions: {
                        readonly users: readonly string[];
                        readonly teams: readonly string[];
                        readonly apps?: readonly string[];
                    } | null;
                    readonly required_linear_history?: boolean;
                    readonly allow_force_pushes?: boolean | null;
                    readonly allow_deletions?: boolean;
                    readonly required_conversation_resolution?: boolean;
                };
            };
        };
    };
    readonly "repos/delete-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "repos/get-admin-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-admin-enforced"];
                };
            };
        };
    };
    readonly "repos/set-admin-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-admin-enforced"];
                };
            };
        };
    };
    readonly "repos/delete-admin-branch-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/get-pull-request-review-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-pull-request-review"];
                };
            };
        };
    };
    readonly "repos/delete-pull-request-review-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update-pull-request-review-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-pull-request-review"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly dismissal_restrictions?: {
                        readonly users?: readonly string[];
                        readonly teams?: readonly string[];
                    };
                    readonly dismiss_stale_reviews?: boolean;
                    readonly require_code_owner_reviews?: boolean;
                    readonly required_approving_review_count?: number;
                };
            };
        };
    };
    readonly "repos/get-commit-signature-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-admin-enforced"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/create-commit-signature-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["protected-branch-admin-enforced"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-commit-signature-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/get-status-checks-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["status-check-policy"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/remove-status-check-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/update-status-check-protection": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["status-check-policy"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly strict?: boolean;
                    readonly contexts?: readonly string[];
                };
            };
        };
    };
    readonly "repos/get-all-status-check-contexts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly string[];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/set-status-check-contexts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly string[];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly contexts: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/add-status-check-contexts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly string[];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly contexts: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/remove-status-check-contexts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly string[];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly contexts: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/get-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["branch-restriction-policy"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/get-apps-with-access-to-protected-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["integration"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/set-app-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["integration"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly apps: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/add-app-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["integration"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly apps: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/remove-app-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["integration"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly apps: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/get-teams-with-access-to-protected-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/set-team-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly teams: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/add-team-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly teams: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/remove-team-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly teams: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/get-users-with-access-to-protected-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/set-user-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly users: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/add-user-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly users: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/remove-user-access-restrictions": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly users: readonly string[];
                } | readonly string[];
            };
        };
    };
    readonly "repos/rename-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly branch: components["parameters"]["branch"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["branch-with-protection"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly new_name: string;
                };
            };
        };
    };
    readonly "checks/create": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-run"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": (({
                    readonly status: "completed";
                } & {
                    conclusion: unknown;
                } & {
                    readonly [key: string]: any;
                }) | ({
                    readonly status?: "queued" | "in_progress";
                } & {
                    readonly [key: string]: any;
                })) & {
                    readonly name: string;
                    readonly head_sha: string;
                    readonly details_url?: string;
                    readonly external_id?: string;
                    readonly status?: "queued" | "in_progress" | "completed";
                    readonly started_at?: string;
                    readonly conclusion?: "action_required" | "cancelled" | "failure" | "neutral" | "success" | "skipped" | "stale" | "timed_out";
                    readonly completed_at?: string;
                    readonly output?: {
                        readonly title: string;
                        readonly summary: string;
                        readonly text?: string;
                        readonly annotations?: readonly {
                            readonly path: string;
                            readonly start_line: number;
                            readonly end_line: number;
                            readonly start_column?: number;
                            readonly end_column?: number;
                            readonly annotation_level: "notice" | "warning" | "failure";
                            readonly message: string;
                            readonly title?: string;
                            readonly raw_details?: string;
                        }[];
                        readonly images?: readonly {
                            readonly alt: string;
                            readonly image_url: string;
                            readonly caption?: string;
                        }[];
                    };
                    readonly actions?: readonly {
                        readonly label: string;
                        readonly description: string;
                        readonly identifier: string;
                    }[];
                };
            };
        };
    };
    readonly "checks/get": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_run_id: components["parameters"]["check-run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-run"];
                };
            };
        };
    };
    readonly "checks/update": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_run_id: components["parameters"]["check-run-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-run"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": (Partial<{
                    readonly status?: "completed";
                } & {
                    conclusion: unknown;
                } & {
                    readonly [key: string]: any;
                }> & Partial<{
                    readonly status?: "queued" | "in_progress";
                } & {
                    readonly [key: string]: any;
                }>) & {
                    readonly name?: string;
                    readonly details_url?: string;
                    readonly external_id?: string;
                    readonly started_at?: string;
                    readonly status?: "queued" | "in_progress" | "completed";
                    readonly conclusion?: "action_required" | "cancelled" | "failure" | "neutral" | "success" | "skipped" | "stale" | "timed_out";
                    readonly completed_at?: string;
                    readonly output?: {
                        readonly title?: string;
                        readonly summary: string;
                        readonly text?: string;
                        readonly annotations?: readonly {
                            readonly path: string;
                            readonly start_line: number;
                            readonly end_line: number;
                            readonly start_column?: number;
                            readonly end_column?: number;
                            readonly annotation_level: "notice" | "warning" | "failure";
                            readonly message: string;
                            readonly title?: string;
                            readonly raw_details?: string;
                        }[];
                        readonly images?: readonly {
                            readonly alt: string;
                            readonly image_url: string;
                            readonly caption?: string;
                        }[];
                    };
                    readonly actions?: readonly {
                        readonly label: string;
                        readonly description: string;
                        readonly identifier: string;
                    }[];
                };
            };
        };
    };
    readonly "checks/list-annotations": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_run_id: components["parameters"]["check-run-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["check-annotation"][];
                };
            };
        };
    };
    readonly "checks/create-suite": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-suite"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-suite"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly head_sha: string;
                };
            };
        };
    };
    readonly "checks/set-suites-preferences": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-suite-preference"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly auto_trigger_checks?: readonly {
                        readonly app_id: number;
                        readonly setting: boolean;
                    }[];
                };
            };
        };
    };
    readonly "checks/get-suite": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_suite_id: components["parameters"]["check-suite-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["check-suite"];
                };
            };
        };
    };
    readonly "checks/list-for-suite": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_suite_id: components["parameters"]["check-suite-id"];
            };
            readonly query: {
                readonly check_name?: components["parameters"]["check-name"];
                readonly status?: components["parameters"]["status"];
                readonly filter?: "latest" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly check_runs: readonly components["schemas"]["check-run"][];
                    };
                };
            };
        };
    };
    readonly "checks/rerequest-suite": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly check_suite_id: components["parameters"]["check-suite-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": {
                        readonly [key: string]: unknown;
                    };
                };
            };
        };
    };
    readonly "code-scanning/list-alerts-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly tool_name?: components["parameters"]["tool-name"];
                readonly tool_guid?: components["parameters"]["tool-guid"];
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly ref?: components["parameters"]["git-ref"];
                readonly state?: components["schemas"]["code-scanning-alert-state"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-scanning-alert-items"][];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/get-alert": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly alert_number: components["parameters"]["alert-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-scanning-alert"];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/update-alert": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly alert_number: components["parameters"]["alert-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-scanning-alert"];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_write"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly state: components["schemas"]["code-scanning-alert-set-state"];
                    readonly dismissed_reason?: components["schemas"]["code-scanning-alert-dismissed-reason"];
                };
            };
        };
    };
    readonly "code-scanning/list-alert-instances": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly alert_number: components["parameters"]["alert-number"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly ref?: components["parameters"]["git-ref"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-scanning-alert-instance"][];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/list-recent-analyses": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly tool_name?: components["parameters"]["tool-name"];
                readonly tool_guid?: components["parameters"]["tool-guid"];
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly ref?: components["schemas"]["code-scanning-ref"];
                readonly sarif_id?: components["schemas"]["code-scanning-analysis-sarif-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-scanning-analysis"][];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/get-analysis": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly analysis_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json+sarif": string;
                    readonly "application/json": components["schemas"]["code-scanning-analysis"];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/delete-analysis": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly analysis_id: number;
            };
            readonly query: {
                readonly confirm_delete?: string | null;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-scanning-analysis-deletion"];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 403: components["responses"]["code_scanning_forbidden_write"];
            readonly 404: components["responses"]["not_found"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "code-scanning/upload-sarif": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-scanning-sarifs-receipt"];
                };
            };
            readonly 400: unknown;
            readonly 403: components["responses"]["code_scanning_forbidden_write"];
            readonly 404: components["responses"]["not_found"];
            readonly 413: unknown;
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly commit_sha: components["schemas"]["code-scanning-analysis-commit-sha"];
                    readonly ref: components["schemas"]["code-scanning-ref"];
                    readonly sarif: components["schemas"]["code-scanning-analysis-sarif-file"];
                    readonly checkout_uri?: string;
                    readonly started_at?: string;
                    readonly tool_name?: string;
                };
            };
        };
    };
    readonly "code-scanning/get-sarif": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly sarif_id: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-scanning-sarifs-status"];
                };
            };
            readonly 403: components["responses"]["code_scanning_forbidden_read"];
            readonly 404: unknown;
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "repos/list-collaborators": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly affiliation?: "outside" | "direct" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["collaborator"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/check-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "repos/add-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-invitation"];
                };
            };
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "pull" | "push" | "admin" | "maintain" | "triage";
                    readonly permissions?: string;
                };
            };
        };
    };
    readonly "repos/remove-collaborator": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/get-collaborator-permission-level": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-collaborator-permission"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/list-commit-comments-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["commit-comment"][];
                };
            };
        };
    };
    readonly "repos/get-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["commit-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["commit-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "reactions/list-for-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "reactions/create-for-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/list-commits": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly sha?: string;
                readonly path?: string;
                readonly author?: string;
                readonly since?: components["parameters"]["since"];
                readonly until?: string;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["commit"][];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
            readonly 500: components["responses"]["internal_error"];
        };
    };
    readonly "repos/list-branches-for-head-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly commit_sha: components["parameters"]["commit-sha"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["branch-short"][];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/list-comments-for-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly commit_sha: components["parameters"]["commit-sha"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["commit-comment"][];
                };
            };
        };
    };
    readonly "repos/create-commit-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly commit_sha: components["parameters"]["commit-sha"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["commit-comment"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                    readonly path?: string;
                    readonly position?: number;
                    readonly line?: number;
                };
            };
        };
    };
    readonly "repos/list-pull-requests-associated-with-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly commit_sha: components["parameters"]["commit-sha"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pull-request-simple"][];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/get-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["commit"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 500: components["responses"]["internal_error"];
        };
    };
    readonly "checks/list-for-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly check_name?: components["parameters"]["check-name"];
                readonly status?: components["parameters"]["status"];
                readonly filter?: "latest" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly app_id?: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly check_runs: readonly components["schemas"]["check-run"][];
                    };
                };
            };
        };
    };
    readonly "checks/list-suites-for-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly app_id?: number;
                readonly check_name?: components["parameters"]["check-name"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly check_suites: readonly components["schemas"]["check-suite"][];
                    };
                };
            };
        };
    };
    readonly "repos/get-combined-status-for-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["combined-commit-status"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/list-commit-statuses-for-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["status"][];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
        };
    };
    readonly "codes-of-conduct/get-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["code-of-conduct"];
                };
            };
        };
    };
    readonly "repos/get-community-profile-metrics": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["community-profile"];
                };
            };
        };
    };
    readonly "repos/compare-commits": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly basehead: string;
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["commit-comparison"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 500: components["responses"]["internal_error"];
        };
    };
    readonly "apps/create-content-attachment": {
        readonly parameters: {
            readonly path: {
                readonly owner: string;
                readonly repo: string;
                readonly content_reference_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["content-reference-attachment"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title: string;
                    readonly body: string;
                };
            };
        };
    };
    readonly "repos/get-content": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly path: string;
            };
            readonly query: {
                readonly ref?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/vnd.github.v3.object": components["schemas"]["content-tree"];
                    readonly "application/json": components["schemas"]["content-directory"] | components["schemas"]["content-file"] | components["schemas"]["content-symlink"] | components["schemas"]["content-submodule"];
                };
            };
            readonly 302: components["responses"]["found"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/create-or-update-file-contents": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly path: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["file-commit"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["file-commit"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly message: string;
                    readonly content: string;
                    readonly sha?: string;
                    readonly branch?: string;
                    readonly committer?: {
                        readonly name: string;
                        readonly email: string;
                        readonly date?: string;
                    };
                    readonly author?: {
                        readonly name: string;
                        readonly email: string;
                        readonly date?: string;
                    };
                };
            };
        };
    };
    readonly "repos/delete-file": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly path: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["file-commit"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly message: string;
                    readonly sha: string;
                    readonly branch?: string;
                    readonly committer?: {
                        readonly name?: string;
                        readonly email?: string;
                    };
                    readonly author?: {
                        readonly name?: string;
                        readonly email?: string;
                    };
                };
            };
        };
    };
    readonly "repos/list-contributors": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly anon?: string;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["contributor"][];
                };
            };
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/list-deployments": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly sha?: string;
                readonly ref?: string;
                readonly task?: string;
                readonly environment?: string | null;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["deployment"][];
                };
            };
        };
    };
    readonly "repos/create-deployment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["deployment"];
                };
            };
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                    };
                };
            };
            readonly 409: unknown;
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly ref: string;
                    readonly task?: string;
                    readonly auto_merge?: boolean;
                    readonly required_contexts?: readonly string[];
                    readonly payload?: {
                        readonly [key: string]: any;
                    } | string;
                    readonly environment?: string;
                    readonly description?: string | null;
                    readonly transient_environment?: boolean;
                    readonly production_environment?: boolean;
                };
            };
        };
    };
    readonly "repos/get-deployment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly deployment_id: components["parameters"]["deployment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["deployment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-deployment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly deployment_id: components["parameters"]["deployment-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
    };
    readonly "repos/list-deployment-statuses": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly deployment_id: components["parameters"]["deployment-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["deployment-status"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/create-deployment-status": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly deployment_id: components["parameters"]["deployment-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["deployment-status"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly state: "error" | "failure" | "inactive" | "in_progress" | "queued" | "pending" | "success";
                    readonly target_url?: string;
                    readonly log_url?: string;
                    readonly description?: string;
                    readonly environment?: "production" | "staging" | "qa";
                    readonly environment_url?: string;
                    readonly auto_inactive?: boolean;
                };
            };
        };
    };
    readonly "repos/get-deployment-status": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly deployment_id: components["parameters"]["deployment-id"];
                readonly status_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["deployment-status"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/create-dispatch-event": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly event_type: string;
                    readonly client_payload?: {
                        readonly [key: string]: any;
                    };
                };
            };
        };
    };
    readonly "repos/get-all-environments": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count?: number;
                        readonly environments?: readonly components["schemas"]["environment"][];
                    };
                };
            };
        };
    };
    readonly "repos/get-environment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly environment_name: components["parameters"]["environment-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["environment"];
                };
            };
        };
    };
    readonly "repos/create-or-update-environment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly environment_name: components["parameters"]["environment-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["environment"];
                };
            };
            readonly 422: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly wait_timer?: components["schemas"]["wait-timer"];
                    readonly reviewers?: readonly {
                        readonly type?: components["schemas"]["deployment-reviewer-type"];
                        readonly id?: number;
                    }[] | null;
                    readonly deployment_branch_policy?: components["schemas"]["deployment_branch_policy"];
                } | null;
            };
        };
    };
    readonly "repos/delete-an-environment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly environment_name: components["parameters"]["environment-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "activity/list-repo-events": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "repos/list-forks": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly sort?: "newest" | "oldest" | "stargazers" | "watchers";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 400: components["responses"]["bad_request"];
        };
    };
    readonly "repos/create-fork": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": components["schemas"]["full-repository"];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly organization?: string;
                } | null;
            };
        };
    };
    readonly "git/create-blob": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["short-blob"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: string;
                    readonly encoding?: string;
                };
            };
        };
    };
    readonly "git/get-blob": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly file_sha: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["blob"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "git/create-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["git-commit"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly message: string;
                    readonly tree: string;
                    readonly parents?: readonly string[];
                    readonly author?: {
                        readonly name: string;
                        readonly email: string;
                        readonly date?: string;
                    };
                    readonly committer?: {
                        readonly name?: string;
                        readonly email?: string;
                        readonly date?: string;
                    };
                    readonly signature?: string;
                };
            };
        };
    };
    readonly "git/get-commit": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly commit_sha: components["parameters"]["commit-sha"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["git-commit"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "git/list-matching-refs": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["git-ref"][];
                };
            };
        };
    };
    readonly "git/get-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["git-ref"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "git/create-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["git-ref"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly ref: string;
                    readonly sha: string;
                    readonly key?: string;
                };
            };
        };
    };
    readonly "git/delete-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "git/update-ref": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["git-ref"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly sha: string;
                    readonly force?: boolean;
                };
            };
        };
    };
    readonly "git/create-tag": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["git-tag"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly tag: string;
                    readonly message: string;
                    readonly object: string;
                    readonly type: "commit" | "tree" | "blob";
                    readonly tagger?: {
                        readonly name: string;
                        readonly email: string;
                        readonly date?: string;
                    };
                };
            };
        };
    };
    readonly "git/get-tag": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly tag_sha: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["git-tag"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "git/create-tree": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["git-tree"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly tree: readonly {
                        readonly path?: string;
                        readonly mode?: "100644" | "100755" | "040000" | "160000" | "120000";
                        readonly type?: "blob" | "tree" | "commit";
                        readonly sha?: string | null;
                        readonly content?: string;
                    }[];
                    readonly base_tree?: string;
                };
            };
        };
    };
    readonly "git/get-tree": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly tree_sha: string;
            };
            readonly query: {
                readonly recursive?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["git-tree"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/list-webhooks": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["hook"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/create-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["hook"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly config?: {
                        readonly url?: components["schemas"]["webhook-config-url"];
                        readonly content_type?: components["schemas"]["webhook-config-content-type"];
                        readonly secret?: components["schemas"]["webhook-config-secret"];
                        readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                        readonly token?: string;
                        readonly digest?: string;
                    };
                    readonly events?: readonly string[];
                    readonly active?: boolean;
                } | null;
            };
        };
    };
    readonly "repos/get-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hook"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hook"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly config?: {
                        readonly url: components["schemas"]["webhook-config-url"];
                        readonly content_type?: components["schemas"]["webhook-config-content-type"];
                        readonly secret?: components["schemas"]["webhook-config-secret"];
                        readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                        readonly address?: string;
                        readonly room?: string;
                    };
                    readonly events?: readonly string[];
                    readonly add_events?: readonly string[];
                    readonly remove_events?: readonly string[];
                    readonly active?: boolean;
                };
            };
        };
    };
    readonly "repos/get-webhook-config-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
    };
    readonly "repos/update-webhook-config-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["webhook-config"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly url?: components["schemas"]["webhook-config-url"];
                    readonly content_type?: components["schemas"]["webhook-config-content-type"];
                    readonly secret?: components["schemas"]["webhook-config-secret"];
                    readonly insecure_ssl?: components["schemas"]["webhook-config-insecure-ssl"];
                };
            };
        };
    };
    readonly "repos/list-webhook-deliveries": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly cursor?: components["parameters"]["cursor"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["hook-delivery-item"][];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/get-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hook-delivery"];
                };
            };
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/redeliver-webhook-delivery": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
                readonly delivery_id: components["parameters"]["delivery-id"];
            };
        };
        readonly responses: {
            readonly 202: components["responses"]["accepted"];
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/ping-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/test-push-webhook": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly hook_id: components["parameters"]["hook-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/get-import-status": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["import"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/start-import": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["import"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly vcs_url: string;
                    readonly vcs?: "subversion" | "git" | "mercurial" | "tfvc";
                    readonly vcs_username?: string;
                    readonly vcs_password?: string;
                    readonly tfvc_project?: string;
                };
            };
        };
    };
    readonly "migrations/cancel-import": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "migrations/update-import": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["import"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly vcs_username?: string;
                    readonly vcs_password?: string;
                    readonly vcs?: string;
                    readonly tfvc_project?: string;
                } | null;
            };
        };
    };
    readonly "migrations/get-commit-authors": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly since?: components["parameters"]["since-user"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["porter-author"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/map-commit-author": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly author_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["porter-author"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly email?: string;
                    readonly name?: string;
                };
            };
        };
    };
    readonly "migrations/get-large-files": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["porter-large-file"][];
                };
            };
        };
    };
    readonly "migrations/set-lfs-preference": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["import"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly use_lfs: "opt_in" | "opt_out";
                };
            };
        };
    };
    readonly "apps/get-repo-installation": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["installation"];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "interactions/get-restrictions-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": Partial<components["schemas"]["interaction-limit-response"]> & Partial<{
                        readonly [key: string]: unknown;
                    }>;
                };
            };
        };
    };
    readonly "interactions/set-restrictions-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["interaction-limit-response"];
                };
            };
            readonly 409: unknown;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["interaction-limit"];
            };
        };
    };
    readonly "interactions/remove-restrictions-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 409: unknown;
        };
    };
    readonly "repos/list-invitations": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["repository-invitation"][];
                };
            };
        };
    };
    readonly "repos/delete-invitation": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/update-invitation": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-invitation"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permissions?: "read" | "write" | "maintain" | "triage" | "admin";
                };
            };
        };
    };
    readonly "issues/list-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly milestone?: string;
                readonly state?: "open" | "closed" | "all";
                readonly assignee?: string;
                readonly creator?: string;
                readonly mentioned?: string;
                readonly labels?: components["parameters"]["labels"];
                readonly sort?: "created" | "updated" | "comments";
                readonly direction?: components["parameters"]["direction"];
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue-simple"][];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "issues/create": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["issue"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title: string | number;
                    readonly body?: string;
                    readonly assignee?: string | null;
                    readonly milestone?: (string | number) | null;
                    readonly labels?: readonly (string | {
                        readonly id?: number;
                        readonly name?: string;
                        readonly description?: string | null;
                        readonly color?: string | null;
                    })[];
                    readonly assignees?: readonly string[];
                };
            };
        };
    };
    readonly "issues/list-comments-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: "asc" | "desc";
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue-comment"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "issues/get-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/delete-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/update-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-comment"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "reactions/list-for-issue-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "reactions/create-for-issue-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-issue-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/list-events-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue-event"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "issues/get-event": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly event_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-event"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/get": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue"];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/update": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue"];
                };
            };
            readonly 301: components["responses"]["moved_permanently"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: (string | number) | null;
                    readonly body?: string | null;
                    readonly assignee?: string | null;
                    readonly state?: "open" | "closed";
                    readonly milestone?: (string | number) | null;
                    readonly labels?: readonly (string | {
                        readonly id?: number;
                        readonly name?: string;
                        readonly description?: string | null;
                        readonly color?: string | null;
                    })[];
                    readonly assignees?: readonly string[];
                };
            };
        };
    };
    readonly "issues/add-assignees": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-simple"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly assignees?: readonly string[];
                };
            };
        };
    };
    readonly "issues/remove-assignees": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-simple"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly assignees?: readonly string[];
                };
            };
        };
    };
    readonly "issues/list-comments": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
            readonly query: {
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue-comment"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/create-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["issue-comment"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "issues/list-events": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue-event-for-issue"][];
                };
            };
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/list-labels-on-issue": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/set-labels": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": Partial<{
                    readonly labels?: readonly string[];
                }> & Partial<readonly string[]> & Partial<{
                    readonly labels?: readonly {
                        readonly name: string;
                    }[];
                }> & Partial<readonly {
                    readonly name: string;
                }[]> & Partial<string>;
            };
        };
    };
    readonly "issues/add-labels": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly labels?: readonly string[];
                } | readonly string[] | {
                    readonly labels?: readonly {
                        readonly name: string;
                    }[];
                } | readonly {
                    readonly name: string;
                }[] | string;
            };
        };
    };
    readonly "issues/remove-all-labels": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/remove-label": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
                readonly name: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
        };
    };
    readonly "issues/lock": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly lock_reason?: "off-topic" | "too heated" | "resolved" | "spam";
                } | null;
            };
        };
    };
    readonly "issues/unlock": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "reactions/list-for-issue": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "reactions/create-for-issue": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-issue": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/list-events-for-timeline": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly issue_number: components["parameters"]["issue-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["timeline-issue-events"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/list-deploy-keys": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["deploy-key"][];
                };
            };
        };
    };
    readonly "repos/create-deploy-key": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["deploy-key"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly key: string;
                    readonly read_only?: boolean;
                };
            };
        };
    };
    readonly "repos/get-deploy-key": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly key_id: components["parameters"]["key-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["deploy-key"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-deploy-key": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly key_id: components["parameters"]["key-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/list-labels-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/create-label": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["label"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly color?: string;
                    readonly description?: string;
                };
            };
        };
    };
    readonly "issues/get-label": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly name: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["label"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/delete-label": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly name: string;
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/update-label": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly name: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["label"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly new_name?: string;
                    readonly color?: string;
                    readonly description?: string;
                };
            };
        };
    };
    readonly "repos/list-languages": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["language"];
                };
            };
        };
    };
    readonly "licenses/get-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["license-content"];
                };
            };
        };
    };
    readonly "repos/merge": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["commit"];
                };
            };
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: unknown;
            readonly 409: unknown;
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly base: string;
                    readonly head: string;
                    readonly commit_message?: string;
                };
            };
        };
    };
    readonly "issues/list-milestones": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly state?: "open" | "closed" | "all";
                readonly sort?: "due_on" | "completeness";
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["milestone"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/create-milestone": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["milestone"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title: string;
                    readonly state?: "open" | "closed";
                    readonly description?: string;
                    readonly due_on?: string;
                };
            };
        };
    };
    readonly "issues/get-milestone": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly milestone_number: components["parameters"]["milestone-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["milestone"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/delete-milestone": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly milestone_number: components["parameters"]["milestone-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "issues/update-milestone": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly milestone_number: components["parameters"]["milestone-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["milestone"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly state?: "open" | "closed";
                    readonly description?: string;
                    readonly due_on?: string;
                };
            };
        };
    };
    readonly "issues/list-labels-for-milestone": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly milestone_number: components["parameters"]["milestone-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["label"][];
                };
            };
        };
    };
    readonly "activity/list-repo-notifications-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly all?: components["parameters"]["all"];
                readonly participating?: components["parameters"]["participating"];
                readonly since?: components["parameters"]["since"];
                readonly before?: components["parameters"]["before"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["thread"][];
                };
            };
        };
    };
    readonly "activity/mark-repo-notifications-as-read": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly url?: string;
                    };
                };
            };
            readonly 205: unknown;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly last_read_at?: string;
                };
            };
        };
    };
    readonly "repos/get-pages": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["page"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/update-information-about-pages-site": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 400: components["responses"]["bad_request"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly cname?: string | null;
                    readonly https_enforced?: boolean;
                    readonly public?: boolean;
                    readonly source?: Partial<"gh-pages" | "master" | "master /docs"> & Partial<{
                        readonly branch: string;
                        readonly path: "/" | "/docs";
                    }>;
                };
            };
        };
    };
    readonly "repos/create-pages-site": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["page"];
                };
            };
            readonly 409: components["responses"]["conflict"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly source: {
                        readonly branch: string;
                        readonly path?: "/" | "/docs";
                    };
                } | null;
            };
        };
    };
    readonly "repos/delete-pages-site": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/list-pages-builds": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["page-build"][];
                };
            };
        };
    };
    readonly "repos/request-pages-build": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["page-build-status"];
                };
            };
        };
    };
    readonly "repos/get-latest-pages-build": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["page-build"];
                };
            };
        };
    };
    readonly "repos/get-pages-build": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly build_id: number;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["page-build"];
                };
            };
        };
    };
    readonly "repos/get-pages-health-check": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pages-health-check"];
                };
            };
            readonly 202: {
                readonly content: {
                    readonly "application/json": components["schemas"]["empty-object"];
                };
            };
            readonly 400: unknown;
            readonly 404: components["responses"]["not_found"];
            readonly 422: unknown;
        };
    };
    readonly "projects/list-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly state?: "open" | "closed" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["project"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
    };
    readonly "projects/create-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project"];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 410: components["responses"]["gone"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly body?: string;
                };
            };
        };
    };
    readonly "pulls/list": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly state?: "open" | "closed" | "all";
                readonly head?: string;
                readonly base?: string;
                readonly sort?: "created" | "updated" | "popularity" | "long-running";
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pull-request-simple"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "pulls/create": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly head: string;
                    readonly base: string;
                    readonly body?: string;
                    readonly maintainer_can_modify?: boolean;
                    readonly draft?: boolean;
                    readonly issue?: number;
                };
            };
        };
    };
    readonly "pulls/list-review-comments-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly sort?: "created" | "updated" | "created_at";
                readonly direction?: "asc" | "desc";
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pull-request-review-comment"][];
                };
            };
        };
    };
    readonly "pulls/get-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "pulls/delete-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "pulls/update-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review-comment"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "reactions/list-for-pull-request-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "reactions/create-for-pull-request-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/delete-for-pull-request-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly comment_id: components["parameters"]["comment-id"];
                readonly reaction_id: components["parameters"]["reaction-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "pulls/get": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
            readonly 500: components["responses"]["internal_error"];
        };
    };
    readonly "pulls/update": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly body?: string;
                    readonly state?: "open" | "closed";
                    readonly base?: string;
                    readonly maintainer_can_modify?: boolean;
                };
            };
        };
    };
    readonly "pulls/list-review-comments": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: "asc" | "desc";
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pull-request-review-comment"][];
                };
            };
        };
    };
    readonly "pulls/create-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review-comment"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                    readonly commit_id?: string;
                    readonly path?: string;
                    readonly position?: number;
                    readonly side?: "LEFT" | "RIGHT";
                    readonly line?: number;
                    readonly start_line?: number;
                    readonly start_side?: "LEFT" | "RIGHT" | "side";
                    readonly in_reply_to?: number;
                };
            };
        };
    };
    readonly "pulls/create-reply-for-review-comment": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly comment_id: components["parameters"]["comment-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review-comment"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "pulls/list-commits": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["commit"][];
                };
            };
        };
    };
    readonly "pulls/list-files": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["diff-entry"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
            readonly 500: components["responses"]["internal_error"];
        };
    };
    readonly "pulls/check-if-merged": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "pulls/merge": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-merge-result"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 405: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
            readonly 409: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly commit_title?: string;
                    readonly commit_message?: string;
                    readonly sha?: string;
                    readonly merge_method?: "merge" | "squash" | "rebase";
                } | null;
            };
        };
    };
    readonly "pulls/list-requested-reviewers": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review-request"];
                };
            };
        };
    };
    readonly "pulls/request-reviewers": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-simple"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: unknown;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly reviewers?: readonly string[];
                    readonly team_reviewers?: readonly string[];
                };
            };
        };
    };
    readonly "pulls/remove-requested-reviewers": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-simple"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly reviewers: readonly string[];
                    readonly team_reviewers?: readonly string[];
                };
            };
        };
    };
    readonly "pulls/list-reviews": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["pull-request-review"][];
                };
            };
        };
    };
    readonly "pulls/create-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly commit_id?: string;
                    readonly body?: string;
                    readonly event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
                    readonly comments?: readonly {
                        readonly path: string;
                        readonly position?: number;
                        readonly body: string;
                        readonly line?: number;
                        readonly side?: string;
                        readonly start_line?: number;
                        readonly start_side?: string;
                    }[];
                };
            };
        };
    };
    readonly "pulls/get-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "pulls/update-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "pulls/delete-pending-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
    };
    readonly "pulls/list-comments-for-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["review-comment"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "pulls/dismiss-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly message: string;
                    readonly event?: string;
                };
            };
        };
    };
    readonly "pulls/submit-review": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
                readonly review_id: components["parameters"]["review-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["pull-request-review"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body?: string;
                    readonly event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
                };
            };
        };
    };
    readonly "pulls/update-branch": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly pull_number: components["parameters"]["pull-number"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly url?: string;
                    };
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly expected_head_sha?: string;
                } | null;
            };
        };
    };
    readonly "repos/get-readme": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly ref?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["content-file"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/get-readme-in-directory": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly dir: string;
            };
            readonly query: {
                readonly ref?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["content-file"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/list-releases": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["release"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/create-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["release"];
                };
            };
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly tag_name: string;
                    readonly target_commitish?: string;
                    readonly name?: string;
                    readonly body?: string;
                    readonly draft?: boolean;
                    readonly prerelease?: boolean;
                    readonly discussion_category_name?: string;
                };
            };
        };
    };
    readonly "repos/get-release-asset": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly asset_id: components["parameters"]["asset-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release-asset"];
                };
            };
            readonly 302: components["responses"]["found"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/delete-release-asset": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly asset_id: components["parameters"]["asset-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/update-release-asset": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly asset_id: components["parameters"]["asset-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release-asset"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly label?: string;
                    readonly state?: string;
                };
            };
        };
    };
    readonly "repos/get-latest-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release"];
                };
            };
        };
    };
    readonly "repos/get-release-by-tag": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly tag: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/get-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/delete-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/update-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release"];
                };
            };
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly tag_name?: string;
                    readonly target_commitish?: string;
                    readonly name?: string;
                    readonly body?: string;
                    readonly draft?: boolean;
                    readonly prerelease?: boolean;
                    readonly discussion_category_name?: string;
                };
            };
        };
    };
    readonly "repos/list-release-assets": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["release-asset"][];
                };
            };
        };
    };
    readonly "repos/upload-release-asset": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
            readonly query: {
                readonly name: string;
                readonly label?: string;
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["release-asset"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "*/*": string;
            };
        };
    };
    readonly "reactions/create-for-release": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly release_id: components["parameters"]["release-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "secret-scanning/list-alerts-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly state?: "open" | "resolved";
                readonly secret_type?: string;
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["secret-scanning-alert"][];
                };
            };
            readonly 404: unknown;
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "secret-scanning/get-alert": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly alert_number: components["parameters"]["alert-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["secret-scanning-alert"];
                };
            };
            readonly 404: unknown;
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "secret-scanning/update-alert": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly alert_number: components["parameters"]["alert-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["secret-scanning-alert"];
                };
            };
            readonly 404: unknown;
            readonly 422: unknown;
            readonly 503: components["responses"]["service_unavailable"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly state: components["schemas"]["secret-scanning-alert-state"];
                    readonly resolution?: components["schemas"]["secret-scanning-alert-resolution"];
                };
            };
        };
    };
    readonly "activity/list-stargazers-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": Partial<readonly components["schemas"]["simple-user"][]> & Partial<readonly components["schemas"]["stargazer"][]>;
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/get-code-frequency-stats": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-frequency-stat"][];
                };
            };
            readonly 202: components["responses"]["accepted"];
            readonly 204: components["responses"]["no_content"];
        };
    };
    readonly "repos/get-commit-activity-stats": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["commit-activity"][];
                };
            };
            readonly 202: components["responses"]["accepted"];
            readonly 204: components["responses"]["no_content"];
        };
    };
    readonly "repos/get-contributors-stats": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["contributor-activity"][];
                };
            };
            readonly 202: components["responses"]["accepted"];
            readonly 204: components["responses"]["no_content"];
        };
    };
    readonly "repos/get-participation-stats": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["participation-stats"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/get-punch-card-stats": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["code-frequency-stat"][];
                };
            };
            readonly 204: components["responses"]["no_content"];
        };
    };
    readonly "repos/create-commit-status": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly sha: string;
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["status"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly state: "error" | "failure" | "pending" | "success";
                    readonly target_url?: string;
                    readonly description?: string;
                    readonly context?: string;
                };
            };
        };
    };
    readonly "activity/list-watchers-for-repo": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "activity/get-repo-subscription": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-subscription"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: unknown;
        };
    };
    readonly "activity/set-repo-subscription": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["repository-subscription"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly subscribed?: boolean;
                    readonly ignored?: boolean;
                };
            };
        };
    };
    readonly "activity/delete-repo-subscription": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/list-tags": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["tag"][];
                };
            };
        };
    };
    readonly "repos/download-tarball-archive": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
        };
        readonly responses: {
            readonly 302: never;
        };
    };
    readonly "repos/list-teams": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
        };
    };
    readonly "repos/get-all-topics": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["topic"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "repos/replace-all-topics": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["topic"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly names: readonly string[];
                };
            };
        };
    };
    readonly "repos/get-clones": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per?: components["parameters"]["per"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["clone-traffic"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "repos/get-top-paths": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["content-traffic"][];
                };
            };
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "repos/get-top-referrers": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["referrer-traffic"][];
                };
            };
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "repos/get-views": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
            readonly query: {
                readonly per?: components["parameters"]["per"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["view-traffic"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "repos/transfer": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 202: {
                readonly content: {
                    readonly "application/json": components["schemas"]["minimal-repository"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly new_owner: string;
                    readonly team_ids?: readonly number[];
                };
            };
        };
    };
    readonly "repos/check-vulnerability-alerts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "repos/enable-vulnerability-alerts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/disable-vulnerability-alerts": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "repos/download-zipball-archive": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
                readonly ref: string;
            };
        };
        readonly responses: {
            readonly 302: never;
        };
    };
    readonly "repos/create-using-template": {
        readonly parameters: {
            readonly path: {
                readonly template_owner: string;
                readonly template_repo: string;
            };
        };
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["repository"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly owner?: string;
                    readonly name: string;
                    readonly description?: string;
                    readonly include_all_branches?: boolean;
                    readonly private?: boolean;
                };
            };
        };
    };
    readonly "repos/list-public": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since-repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Link?: string;
                };
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "actions/list-environment-secrets": {
        readonly parameters: {
            readonly path: {
                readonly repository_id: components["parameters"]["repository-id"];
                readonly environment_name: components["parameters"]["environment-name"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly secrets: readonly components["schemas"]["actions-secret"][];
                    };
                };
            };
        };
    };
    readonly "actions/get-environment-public-key": {
        readonly parameters: {
            readonly path: {
                readonly repository_id: components["parameters"]["repository-id"];
                readonly environment_name: components["parameters"]["environment-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-public-key"];
                };
            };
        };
    };
    readonly "actions/get-environment-secret": {
        readonly parameters: {
            readonly path: {
                readonly repository_id: components["parameters"]["repository-id"];
                readonly environment_name: components["parameters"]["environment-name"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-secret"];
                };
            };
        };
    };
    readonly "actions/create-or-update-environment-secret": {
        readonly parameters: {
            readonly path: {
                readonly repository_id: components["parameters"]["repository-id"];
                readonly environment_name: components["parameters"]["environment-name"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["empty-object"];
                };
            };
            readonly 204: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly encrypted_value?: string;
                    readonly key_id?: string;
                };
            };
        };
    };
    readonly "actions/delete-environment-secret": {
        readonly parameters: {
            readonly path: {
                readonly repository_id: components["parameters"]["repository-id"];
                readonly environment_name: components["parameters"]["environment-name"];
                readonly secret_name: components["parameters"]["secret-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/list-provisioned-groups-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly startIndex?: components["parameters"]["start-index"];
                readonly count?: components["parameters"]["count"];
                readonly filter?: string;
                readonly excludedAttributes?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-group-list-enterprise"];
                };
            };
        };
    };
    readonly "enterprise-admin/provision-and-invite-enterprise-group": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-group"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly displayName: string;
                    readonly members?: readonly {
                        readonly value: string;
                    }[];
                };
            };
        };
    };
    readonly "enterprise-admin/get-provisioning-information-for-enterprise-group": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_group_id: components["parameters"]["scim-group-id"];
            };
            readonly query: {
                readonly excludedAttributes?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-group"];
                };
            };
        };
    };
    readonly "enterprise-admin/set-information-for-provisioned-enterprise-group": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_group_id: components["parameters"]["scim-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-group"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly displayName: string;
                    readonly members?: readonly {
                        readonly value: string;
                    }[];
                };
            };
        };
    };
    readonly "enterprise-admin/delete-scim-group-from-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_group_id: components["parameters"]["scim-group-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/update-attribute-for-enterprise-group": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_group_id: components["parameters"]["scim-group-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-group"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly Operations: readonly {
                        readonly op: "add" | "Add" | "remove" | "Remove" | "replace" | "Replace";
                        readonly path?: string;
                        readonly value?: string | {
                            readonly [key: string]: unknown;
                        } | readonly any[];
                    }[];
                };
            };
        };
    };
    readonly "enterprise-admin/list-provisioned-identities-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
            readonly query: {
                readonly startIndex?: components["parameters"]["start-index"];
                readonly count?: components["parameters"]["count"];
                readonly filter?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-user-list-enterprise"];
                };
            };
        };
    };
    readonly "enterprise-admin/provision-and-invite-enterprise-user": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-user"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly userName: string;
                    readonly name: {
                        readonly givenName: string;
                        readonly familyName: string;
                    };
                    readonly emails: readonly {
                        readonly value: string;
                        readonly type: string;
                        readonly primary: boolean;
                    }[];
                    readonly groups?: readonly {
                        readonly value?: string;
                    }[];
                };
            };
        };
    };
    readonly "enterprise-admin/get-provisioning-information-for-enterprise-user": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-user"];
                };
            };
        };
    };
    readonly "enterprise-admin/set-information-for-provisioned-enterprise-user": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-user"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly userName: string;
                    readonly name: {
                        readonly givenName: string;
                        readonly familyName: string;
                    };
                    readonly emails: readonly {
                        readonly value: string;
                        readonly type: string;
                        readonly primary: boolean;
                    }[];
                    readonly groups?: readonly {
                        readonly value?: string;
                    }[];
                };
            };
        };
    };
    readonly "enterprise-admin/delete-user-from-enterprise": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "enterprise-admin/update-attribute-for-enterprise-user": {
        readonly parameters: {
            readonly path: {
                readonly enterprise: components["parameters"]["enterprise"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["scim-enterprise-user"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas: readonly string[];
                    readonly Operations: readonly {
                        readonly [key: string]: unknown;
                    }[];
                };
            };
        };
    };
    readonly "scim/list-provisioned-identities": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly startIndex?: number;
                readonly count?: number;
                readonly filter?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/scim+json": components["schemas"]["scim-user-list"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 400: components["responses"]["scim_bad_request"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
        };
    };
    readonly "scim/provision-and-invite-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/scim+json": components["schemas"]["scim-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 400: components["responses"]["scim_bad_request"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
            readonly 409: components["responses"]["scim_conflict"];
            readonly 500: components["responses"]["scim_internal_error"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly userName: string;
                    readonly displayName?: string;
                    readonly name: {
                        readonly givenName: string;
                        readonly familyName: string;
                        readonly formatted?: string;
                    };
                    readonly emails: readonly {
                        readonly value: string;
                        readonly primary?: boolean;
                        readonly type?: string;
                    }[];
                    readonly schemas?: readonly string[];
                    readonly externalId?: string;
                    readonly groups?: readonly string[];
                    readonly active?: boolean;
                };
            };
        };
    };
    readonly "scim/get-provisioning-information-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/scim+json": components["schemas"]["scim-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
        };
    };
    readonly "scim/set-information-for-provisioned-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/scim+json": components["schemas"]["scim-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas?: readonly string[];
                    readonly displayName?: string;
                    readonly externalId?: string;
                    readonly groups?: readonly string[];
                    readonly active?: boolean;
                    readonly userName: string;
                    readonly name: {
                        readonly givenName: string;
                        readonly familyName: string;
                        readonly formatted?: string;
                    };
                    readonly emails: readonly {
                        readonly type?: string;
                        readonly value: string;
                        readonly primary?: boolean;
                    }[];
                };
            };
        };
    };
    readonly "scim/delete-user-from-org": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
        };
    };
    readonly "scim/update-attribute-for-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
                readonly scim_user_id: components["parameters"]["scim-user-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/scim+json": components["schemas"]["scim-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 400: components["responses"]["scim_bad_request"];
            readonly 403: components["responses"]["scim_forbidden"];
            readonly 404: components["responses"]["scim_not_found"];
            readonly 429: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly schemas?: readonly string[];
                    readonly Operations: readonly {
                        readonly op: "add" | "remove" | "replace";
                        readonly path?: string;
                        readonly value?: {
                            readonly active?: boolean | null;
                            readonly userName?: string | null;
                            readonly externalId?: string | null;
                            readonly givenName?: string | null;
                            readonly familyName?: string | null;
                        } | readonly {
                            readonly value?: string;
                            readonly primary?: boolean;
                        }[] | string;
                    }[];
                };
            };
        };
    };
    readonly "search/code": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly sort?: "indexed";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["code-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "search/commits": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly sort?: "author-date" | "committer-date";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["commit-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "search/issues-and-pull-requests": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["issue-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "search/labels": {
        readonly parameters: {
            readonly query: {
                readonly repository_id: number;
                readonly q: string;
                readonly sort?: "created" | "updated";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["label-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "search/repos": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["repo-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "search/topics": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["topic-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "search/users": {
        readonly parameters: {
            readonly query: {
                readonly q: string;
                readonly sort?: "followers" | "repositories" | "joined";
                readonly order?: components["parameters"]["order"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly incomplete_results: boolean;
                        readonly items: readonly components["schemas"]["user-search-result-item"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 422: components["responses"]["validation_failed"];
            readonly 503: components["responses"]["service_unavailable"];
        };
    };
    readonly "teams/get-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/delete-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "teams/update-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-full"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly description?: string;
                    readonly privacy?: "secret" | "closed";
                    readonly permission?: "pull" | "push" | "admin";
                    readonly parent_team_id?: number | null;
                };
            };
        };
    };
    readonly "teams/list-discussions-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-discussion"][];
                };
            };
        };
    };
    readonly "teams/create-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title: string;
                    readonly body: string;
                    readonly private?: boolean;
                };
            };
        };
    };
    readonly "teams/get-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
    };
    readonly "teams/delete-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/update-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly body?: string;
                };
            };
        };
    };
    readonly "teams/list-discussion-comments-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
            readonly query: {
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-discussion-comment"][];
                };
            };
        };
    };
    readonly "teams/create-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "teams/get-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
    };
    readonly "teams/delete-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/update-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-discussion-comment"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly body: string;
                };
            };
        };
    };
    readonly "reactions/list-for-team-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
        };
    };
    readonly "reactions/create-for-team-discussion-comment-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
                readonly comment_number: components["parameters"]["comment-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "reactions/list-for-team-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
            readonly query: {
                readonly content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["reaction"][];
                };
            };
        };
    };
    readonly "reactions/create-for-team-discussion-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly discussion_number: components["parameters"]["discussion-number"];
            };
        };
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["reaction"];
                };
            };
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
                };
            };
        };
    };
    readonly "teams/list-pending-invitations-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-invitation"][];
                };
            };
        };
    };
    readonly "teams/list-members-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly role?: "member" | "maintainer" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/get-member-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "teams/add-member-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 404: unknown;
            readonly 422: unknown;
        };
    };
    readonly "teams/remove-member-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "teams/get-membership-for-user-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-membership"];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/add-or-update-membership-for-user-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-membership"];
                };
            };
            readonly 403: unknown;
            readonly 404: components["responses"]["not_found"];
            readonly 422: unknown;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly role?: "member" | "maintainer";
                };
            };
        };
    };
    readonly "teams/remove-membership-for-user-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: unknown;
        };
    };
    readonly "teams/list-projects-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-project"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "teams/check-permissions-for-project-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-project"];
                };
            };
            readonly 404: unknown;
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "teams/add-or-update-project-permissions-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: {
                readonly content: {
                    readonly "application/json": {
                        readonly message?: string;
                        readonly documentation_url?: string;
                    };
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "read" | "write" | "admin";
                };
            };
        };
    };
    readonly "teams/remove-project-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly project_id: components["parameters"]["project-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "teams/list-repos-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/check-permissions-for-repo-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["team-repository"];
                };
            };
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "teams/add-or-update-repo-permissions-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly permission?: "pull" | "push" | "admin";
                };
            };
        };
    };
    readonly "teams/remove-repo-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "teams/list-idp-groups-for-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["group-mapping"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "teams/create-or-update-idp-group-connections-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["group-mapping"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly groups: readonly {
                        readonly group_id: string;
                        readonly group_name: string;
                        readonly group_description: string;
                        readonly id?: string;
                        readonly name?: string;
                        readonly description?: string;
                    }[];
                    readonly synced_at?: string;
                };
            };
        };
    };
    readonly "teams/list-child-legacy": {
        readonly parameters: {
            readonly path: {
                readonly team_id: components["parameters"]["team-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team"][];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "users/get-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["private-user"] | components["schemas"]["public-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "users/update-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["private-user"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name?: string;
                    readonly email?: string;
                    readonly blog?: string;
                    readonly twitter_username?: string | null;
                    readonly company?: string;
                    readonly location?: string;
                    readonly hireable?: boolean;
                    readonly bio?: string;
                };
            };
        };
    };
    readonly "users/list-blocked-by-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "users/check-blocked": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "users/block": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "users/unblock": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/set-primary-email-visibility-for-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["email"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly visibility: "public" | "private";
                };
            };
        };
    };
    readonly "users/list-emails-for-authenticated": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["email"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/add-email-for-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["email"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly emails: readonly string[];
                } | readonly string[] | string;
            };
        };
    };
    readonly "users/delete-email-for-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly emails: readonly string[];
                } | readonly string[] | string;
            };
        };
    };
    readonly "users/list-followers-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "users/list-followed-by-authenticated": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "users/check-person-is-followed-by-authenticated": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "users/follow": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/unfollow": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/list-gpg-keys-for-authenticated": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["gpg-key"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/create-gpg-key-for-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gpg-key"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly armored_public_key: string;
                };
            };
        };
    };
    readonly "users/get-gpg-key-for-authenticated": {
        readonly parameters: {
            readonly path: {
                readonly gpg_key_id: components["parameters"]["gpg-key-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["gpg-key"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/delete-gpg-key-for-authenticated": {
        readonly parameters: {
            readonly path: {
                readonly gpg_key_id: components["parameters"]["gpg-key-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/list-installations-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly installations: readonly components["schemas"]["installation"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 415: components["responses"]["preview_header_missing"];
        };
    };
    readonly "apps/list-installation-repos-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": {
                        readonly total_count: number;
                        readonly repository_selection?: string;
                        readonly repositories: readonly components["schemas"]["repository"][];
                    };
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/add-repo-to-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/remove-repo-from-installation": {
        readonly parameters: {
            readonly path: {
                readonly installation_id: components["parameters"]["installation-id"];
                readonly repository_id: components["parameters"]["repository-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "interactions/get-restrictions-for-authenticated-user": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": Partial<components["schemas"]["interaction-limit-response"]> & Partial<{
                        readonly [key: string]: unknown;
                    }>;
                };
            };
            readonly 204: never;
        };
    };
    readonly "interactions/set-restrictions-for-authenticated-user": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["interaction-limit-response"];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["interaction-limit"];
            };
        };
    };
    readonly "interactions/remove-restrictions-for-authenticated-user": {
        readonly responses: {
            readonly 204: never;
        };
    };
    readonly "issues/list-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
                readonly state?: "open" | "closed" | "all";
                readonly labels?: components["parameters"]["labels"];
                readonly sort?: "created" | "updated" | "comments";
                readonly direction?: components["parameters"]["direction"];
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["issue"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/list-public-ssh-keys-for-authenticated": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["key"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/create-public-ssh-key-for-authenticated": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["key"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly title?: string;
                    readonly key: string;
                };
            };
        };
    };
    readonly "users/get-public-ssh-key-for-authenticated": {
        readonly parameters: {
            readonly path: {
                readonly key_id: components["parameters"]["key-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["key"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/delete-public-ssh-key-for-authenticated": {
        readonly parameters: {
            readonly path: {
                readonly key_id: components["parameters"]["key-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/list-subscriptions-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["user-marketplace-purchase"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "apps/list-subscriptions-for-authenticated-user-stubbed": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["user-marketplace-purchase"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
        };
    };
    readonly "orgs/list-memberships-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly state?: "active" | "pending";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["org-membership"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "orgs/get-membership-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-membership"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/update-membership-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly org: components["parameters"]["org"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["org-membership"];
                };
            };
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly state: "active";
                };
            };
        };
    };
    readonly "migrations/list-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["migration"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "migrations/start-for-authenticated-user": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["migration"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly lock_repositories?: boolean;
                    readonly exclude_attachments?: boolean;
                    readonly exclude?: readonly "repositories"[];
                    readonly repositories: readonly string[];
                };
            };
        };
    };
    readonly "migrations/get-status-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly migration_id: components["parameters"]["migration-id"];
            };
            readonly query: {
                readonly exclude?: readonly string[];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["migration"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/get-archive-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly migration_id: components["parameters"]["migration-id"];
            };
        };
        readonly responses: {
            readonly 302: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "migrations/delete-archive-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly migration_id: components["parameters"]["migration-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/unlock-repo-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly migration_id: components["parameters"]["migration-id"];
                readonly repo_name: components["parameters"]["repo-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "migrations/list-repos-for-user": {
        readonly parameters: {
            readonly path: {
                readonly migration_id: components["parameters"]["migration-id"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "orgs/list-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-simple"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "packages/get-package-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package"];
                };
            };
        };
    };
    readonly "packages/delete-package-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/restore-package-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
            };
            readonly query: {
                readonly token?: string;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/get-all-package-versions-for-package-owned-by-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
            };
            readonly query: {
                readonly page?: components["parameters"]["page"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly state?: "active" | "deleted";
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["package-version"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/get-package-version-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package-version"];
                };
            };
        };
    };
    readonly "packages/delete-package-version-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/restore-package-version-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly package_version_id: components["parameters"]["package-version-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "projects/create-for-authenticated-user": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly content: {
                    readonly "application/json": components["schemas"]["project"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed_simple"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly body?: string | null;
                };
            };
        };
    };
    readonly "users/list-public-emails-for-authenticated": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["email"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/list-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly visibility?: "all" | "public" | "private";
                readonly affiliation?: string;
                readonly type?: "all" | "owner" | "public" | "private" | "member";
                readonly sort?: "created" | "updated" | "pushed" | "full_name";
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
                readonly since?: components["parameters"]["since"];
                readonly before?: components["parameters"]["before"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["repository"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "repos/create-for-authenticated-user": {
        readonly parameters: {};
        readonly responses: {
            readonly 201: {
                readonly headers: {
                    readonly Location?: string;
                };
                readonly content: {
                    readonly "application/json": components["schemas"]["repository"];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 400: components["responses"]["bad_request"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    readonly name: string;
                    readonly description?: string;
                    readonly homepage?: string;
                    readonly private?: boolean;
                    readonly has_issues?: boolean;
                    readonly has_projects?: boolean;
                    readonly has_wiki?: boolean;
                    readonly team_id?: number;
                    readonly auto_init?: boolean;
                    readonly gitignore_template?: string;
                    readonly license_template?: string;
                    readonly allow_squash_merge?: boolean;
                    readonly allow_merge_commit?: boolean;
                    readonly allow_rebase_merge?: boolean;
                    readonly allow_auto_merge?: boolean;
                    readonly delete_branch_on_merge?: boolean;
                    readonly has_downloads?: boolean;
                    readonly is_template?: boolean;
                };
            };
        };
    };
    readonly "repos/list-invitations-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["repository-invitation"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "repos/decline-invitation": {
        readonly parameters: {
            readonly path: {
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
        };
    };
    readonly "repos/accept-invitation": {
        readonly parameters: {
            readonly path: {
                readonly invitation_id: components["parameters"]["invitation-id"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
            readonly 409: components["responses"]["conflict"];
        };
    };
    readonly "activity/list-repos-starred-by-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["repository"][];
                    readonly "application/vnd.github.v3.star+json": readonly components["schemas"]["starred-repository"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "activity/check-repo-is-starred-by-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: {
                readonly content: {
                    readonly "application/json": components["schemas"]["basic-error"];
                };
            };
        };
    };
    readonly "activity/star-repo-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "activity/unstar-repo-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly owner: components["parameters"]["owner"];
                readonly repo: components["parameters"]["repo"];
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "activity/list-watched-repos-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
        };
    };
    readonly "teams/list-for-authenticated-user": {
        readonly parameters: {
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["team-full"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "users/list": {
        readonly parameters: {
            readonly query: {
                readonly since?: components["parameters"]["since-user"];
                readonly per_page?: components["parameters"]["per-page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {
                    readonly Link?: string;
                };
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
            readonly 304: components["responses"]["not_modified"];
        };
    };
    readonly "users/get-by-username": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["private-user"] | components["schemas"]["public-user"];
                };
            };
            readonly 202: components["responses"]["accepted"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "activity/list-events-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "activity/list-org-events-for-authenticated-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
                readonly org: components["parameters"]["org"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "activity/list-public-events-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "users/list-followers-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "users/list-following-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["simple-user"][];
                };
            };
        };
    };
    readonly "users/check-following-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
                readonly target_user: string;
            };
        };
        readonly responses: {
            readonly 204: never;
            readonly 404: unknown;
        };
    };
    readonly "gists/list-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly since?: components["parameters"]["since"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["base-gist"][];
                };
            };
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "users/list-gpg-keys-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["gpg-key"][];
                };
            };
        };
    };
    readonly "users/get-context-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly subject_type?: "organization" | "repository" | "issue" | "pull_request";
                readonly subject_id?: string;
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["hovercard"];
                };
            };
            readonly 404: components["responses"]["not_found"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "apps/get-user-installation": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["installation"];
                };
            };
        };
    };
    readonly "users/list-public-keys-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["key-simple"][];
                };
            };
        };
    };
    readonly "orgs/list-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["organization-simple"][];
                };
            };
        };
    };
    readonly "packages/get-package-for-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package"];
                };
            };
        };
    };
    readonly "packages/get-all-package-versions-for-package-owned-by-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["package-version"][];
                };
            };
            readonly 401: components["responses"]["requires_authentication"];
            readonly 403: components["responses"]["forbidden"];
            readonly 404: components["responses"]["not_found"];
        };
    };
    readonly "packages/get-package-version-for-user": {
        readonly parameters: {
            readonly path: {
                readonly package_type: components["parameters"]["package-type"];
                readonly package_name: components["parameters"]["package-name"];
                readonly package_version_id: components["parameters"]["package-version-id"];
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["package-version"];
                };
            };
        };
    };
    readonly "projects/list-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly state?: "open" | "closed" | "all";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["project"][];
                };
            };
            readonly 415: components["responses"]["preview_header_missing"];
            readonly 422: components["responses"]["validation_failed"];
        };
    };
    readonly "activity/list-received-events-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "activity/list-received-public-events-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["event"][];
                };
            };
        };
    };
    readonly "repos/list-for-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly type?: "all" | "owner" | "member";
                readonly sort?: "created" | "updated" | "pushed" | "full_name";
                readonly direction?: "asc" | "desc";
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
        };
    };
    readonly "billing/get-github-actions-billing-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["actions-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-github-packages-billing-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["packages-billing-usage"];
                };
            };
        };
    };
    readonly "billing/get-shared-storage-billing-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "application/json": components["schemas"]["combined-billing-usage"];
                };
            };
        };
    };
    readonly "activity/list-repos-starred-by-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly sort?: components["parameters"]["sort"];
                readonly direction?: components["parameters"]["direction"];
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": Partial<readonly components["schemas"]["starred-repository"][]> & Partial<readonly components["schemas"]["repository"][]>;
                };
            };
        };
    };
    readonly "activity/list-repos-watched-by-user": {
        readonly parameters: {
            readonly path: {
                readonly username: components["parameters"]["username"];
            };
            readonly query: {
                readonly per_page?: components["parameters"]["per-page"];
                readonly page?: components["parameters"]["page"];
            };
        };
        readonly responses: {
            readonly 200: {
                readonly headers: {};
                readonly content: {
                    readonly "application/json": readonly components["schemas"]["minimal-repository"][];
                };
            };
        };
    };
    readonly "meta/get-zen": {
        readonly responses: {
            readonly 200: {
                readonly content: {
                    readonly "text/plain": string;
                };
            };
        };
    };
}
export interface external {
}
