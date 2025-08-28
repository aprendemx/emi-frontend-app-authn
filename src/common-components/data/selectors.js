import { createSelector } from 'reselect';

export const storeName = 'commonComponents';

export const commonComponentsSelector = state => ({ ...state[storeName] });

export const thirdPartyAuthContextSelector = createSelector(
  commonComponentsSelector,
  commonComponents => {
    // Fallback defensivo para evitar crashes al recargar
    if (!commonComponents || !commonComponents.thirdPartyAuthContext) {
      return {
        currentProvider: null,
        errorMessage: null,
        finishAuthUrl: null,
        providers: [],
        secondaryProviders: [],
        platformName: null,
        autoSubmitRegForm: false,
        countryCode: null,
        pipelineUserDetails: null,
        welcomePageRedirectUrl: null,
      };
    }
    return commonComponents.thirdPartyAuthContext;
  }
);

export const fieldDescriptionSelector = createSelector(
  commonComponentsSelector,
  commonComponents => commonComponents?.fieldDescriptions || {},
);

export const optionalFieldsSelector = createSelector(
  commonComponentsSelector,
  commonComponents => commonComponents?.optionalFields || { fields: {}, extended_profile: [] },
);

export const tpaProvidersSelector = createSelector(
  commonComponentsSelector,
  commonComponents => {
    const thirdPartyAuthContext = commonComponents?.thirdPartyAuthContext || {};
    return {
      providers: thirdPartyAuthContext.providers || [],
      secondaryProviders: thirdPartyAuthContext.secondaryProviders || [],
    };
  },
);
